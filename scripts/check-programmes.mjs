// Weekly programme check (no AI). Runs on GitHub Actions, because the build sandbox cannot reach outside sites.
// For every programme it opens the official source page once and checks:
//   - the page still answers (not 404/410/5xx, not gone),
//   - the fee we publish still appears on the page (any of its numbers),
//   - the page did not move to a different address.
// It does not fix anything. It writes programme-check.json / .md for the weekly AI review,
// which then reads only the flagged programmes. See docs/weekly-programme-review.md.
import { readFileSync, writeFileSync, appendFileSync } from "node:fs";

import { existsSync } from "node:fs";
const progs = JSON.parse(readFileSync("lib/programmes.json", "utf8"));
// Some programmes publish the fee on another official page (a fee table or PDF): id -> url.
const FEE_URLS = existsSync("data/checks/fee_urls.json") ? JSON.parse(readFileSync("data/checks/fee_urls.json", "utf8")) : {};
const urlOf = (s) => (s && s.match(/https?:\/\/[^\s)]+/)?.[0]) || null;
const UA = "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36 BawabatAlsafar-programme-check";

let pdfText = null;
try { pdfText = (await import("unpdf")).extractText; } catch { /* PDFs are then reported as unreadable */ }

// Numbers we publish for the fee, e.g. "21,750 يورو" -> "21750". Small numbers (years, credits) are ignored.
function feeNumbers(t) {
  if (!t || /^غير منشور|^لا توجد|^مجاني/.test(t.trim())) return [];
  const out = new Set();
  for (const m of t.matchAll(/\d{1,3}(?:[,.   ]\d{3})+|\d{4,6}/g)) {
    const n = m[0].replace(/\D/g, "");
    if (+n >= 300 && !/^20[2-3]\d$/.test(n)) out.add(n);
  }
  return [...out];
}
const norm = (s) => s.replace(/(\d)[,.   '’](?=\d{3}(?!\d))/g, "$1");

function htmlToText(h) {
  return h.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>|<noscript[\s\S]*?<\/noscript>/gi, " ")
    .replace(/<[^>]+>/g, " ").replace(/&nbsp;|&#160;/g, " ").replace(/&euro;|&#8364;/g, "€").replace(/&amp;/g, "&")
    .replace(/\s+/g, " ");
}

async function fetchPage(u) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 40000);
  try {
    const r = await fetch(u, { redirect: "follow", signal: ctl.signal, headers: { "user-agent": UA, accept: "text/html,application/pdf,*/*", "accept-language": "en" } });
    const type = r.headers.get("content-type") || "";
    let text = "";
    if (r.ok) {
      if (/pdf/i.test(type) || /\.pdf($|\?)/i.test(r.url)) {
        const buf = new Uint8Array(await r.arrayBuffer());
        text = pdfText ? [].concat((await pdfText(buf, { mergePages: true })).text).join(" ") : "";
      } else text = htmlToText(await r.text());
    }
    return { status: r.status, final: r.url, text };
  } catch (e) {
    return { status: 0, error: String(e.cause?.code || e.name || e), text: "" };
  } finally { clearTimeout(timer); }
}

// Same address apart from http/https, www, trailing slash, query or fragment.
const key = (u) => u.replace(/^https?:\/\/(www\.)?/, "").replace(/[?#].*$/, "").replace(/\/+$/, "").toLowerCase();

const urls = [...new Set([...progs.map((p) => urlOf(p.source)), ...Object.values(FEE_URLS)].filter(Boolean))];
const byHost = {};
for (const u of urls) (byHost[new URL(u).host] ||= []).push(u);
const pages = new Map();
const hosts = Object.values(byHost);
let h = 0;
// One request at a time per university site, eight sites in parallel.
await Promise.all(Array.from({ length: 8 }, async () => {
  while (h < hosts.length) {
    const list = hosts[h++];
    // DAAD blocks fast repeated requests.
    const gap = /daad\.de/.test(list[0]) ? 4000 : 700;
    for (const u of list) {
      let pg = await fetchPage(u);
      if (pg.status === 0 || pg.status >= 500) { await new Promise((r) => setTimeout(r, 8000)); pg = await fetchPage(u); }
      pages.set(u, pg);
      await new Promise((r) => setTimeout(r, gap));
    }
  }
}));

const items = [];
for (const p of progs) {
  const base = { id: p.id, name: p.name, university: p.university, country: p.country, source: p.source, fee: p.feeText, reviewed: p.reviewed };
  const src = urlOf(p.source);
  if (!src) { items.push({ ...base, issue: "no_source" }); continue; }
  const pg = pages.get(src);
  if (pg.status === 404 || pg.status === 410) { items.push({ ...base, issue: "broken", detail: `HTTP ${pg.status}` }); continue; }
  // Timeouts, resets, TLS errors and 5xx are usually temporary: checked again next week.
  if (pg.status === 0 || pg.status >= 500) { items.push({ ...base, issue: "unreachable", detail: pg.error || `HTTP ${pg.status}` }); continue; }
  if (pg.status === 401 || pg.status === 403 || pg.status === 429) { items.push({ ...base, issue: "unreadable", detail: `blocked by the site (HTTP ${pg.status})` }); continue; }
  const moved = pg.final && key(pg.final) !== key(src) ? pg.final : undefined;
  if (pg.text.length < 400) { items.push({ ...base, issue: "unreadable", detail: "page text could not be read (script-built page or PDF)", moved }); continue; }
  const nums = feeNumbers(p.feeText);
  const feePg = FEE_URLS[String(p.id)] && pages.get(FEE_URLS[String(p.id)]);
  const page = norm(pg.text + " " + (feePg?.text || ""));
  const found = nums.filter((n) => new RegExp(`(^|\\D)${n}(\\D|$)`).test(page));
  if (nums.length && !found.length) { items.push({ ...base, issue: "fee_missing", detail: `none of ${nums.join(", ")} is on the page`, moved }); continue; }
  if (moved) { items.push({ ...base, issue: "moved", detail: moved }); continue; }
  items.push({ ...base, issue: "ok", feeChecked: nums.length > 0 });
}

const count = (k) => items.filter((i) => i.issue === k).length;
const flagged = items.filter((i) => !["ok"].includes(i.issue));
const report = {
  checkedAt: new Date().toISOString(), programmes: items.length, pages: urls.length,
  summary: { ok: count("ok"), feeChecked: items.filter((i) => i.feeChecked).length, fee_missing: count("fee_missing"), broken: count("broken"), moved: count("moved"), unreachable: count("unreachable"), unreadable: count("unreadable"), no_source: count("no_source") },
  flagged,
};
writeFileSync("programme-check.json", JSON.stringify(report, null, 1));
const line = (i) => `- [${i.id}] ${i.name} / ${i.university}: ${i.detail || ""} ${i.source}`;
const md = [
  `# Programme check: ${items.length} programmes, ${urls.length} source pages`,
  `- OK: ${report.summary.ok} (fee confirmed on the page: ${report.summary.feeChecked})`,
  `- Fee not found on the page: ${report.summary.fee_missing}`,
  `- Page broken (404/410): ${report.summary.broken}`, `- Page moved: ${report.summary.moved}`,
  `- Site did not answer this time (timeout, 5xx): ${report.summary.unreachable}`,
  `- Could not read (blocked, script-built or PDF): ${report.summary.unreadable}`,
  "", "## Fee not found", ...flagged.filter((i) => i.issue === "fee_missing").map(line),
  "", "## Broken", ...flagged.filter((i) => i.issue === "broken").map(line),
  "", "## Moved", ...flagged.filter((i) => i.issue === "moved").map(line),
  "", "## Could not read", ...flagged.filter((i) => i.issue === "unreadable").map(line),
  "", "## Did not answer", ...flagged.filter((i) => i.issue === "unreachable").map(line),
].join("\n");
writeFileSync("programme-check.md", md);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, md + "\n");
// Full report in the log too: the review sandbox may not be able to download artifacts (gh run view --log works).
console.log(md);
console.log("FLAGGED_JSON " + JSON.stringify(flagged.map(({ id, issue, detail }) => ({ id, issue, detail }))));
