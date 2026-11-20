// Checks every external link the site shows (data files and lib texts). Runs on GitHub Actions
// (monthly and on demand), because the build sandbox cannot reach outside sites.
// Output: link-report.json, link-report.md (also written to the job summary).
import { readFileSync, readdirSync, writeFileSync, appendFileSync } from "node:fs";
import { join } from "node:path";

// Node's built-in fetch (undici) sometimes throws an internal assertion on a broken TLS stream, which used to kill
// the whole run. Log it and carry on: every request has its own timeout, so the affected link ends as "No answer".
process.on("uncaughtException", (e) => console.warn("Ignored internal fetch error:", e?.code || e?.message || e));

const files = [
  ...readdirSync("lib").filter((f) => /\.(js|json)$/.test(f)).map((f) => join("lib", f)),
  // Per-origin visa routes and certificate rules.
  ...["lib/visa", "lib/cert"].flatMap((d) => readdirSync(d).filter((f) => f.endsWith(".js")).map((f) => join(d, f))),
  "data/university_photos.json", "data/programme_links.csv",
];
const where = new Map();
for (const f of files) {
  const text = readFileSync(f, "utf8");
  // URLs sit inside quotes (JS/JSON) or CSV fields; Commons file names can contain commas and brackets.
  for (const m of text.matchAll(/["'`,]\s*(https?:\/\/[^"'`\s<>]+?)(?=["'`]|,(?!_)|\s|$)/gm)) {
    let u = m[1].replace(/[.;:]+$/, "");
    if (/localhost|example\.com|\$\{/.test(u)) continue;
    if (!where.has(u)) where.set(u, new Set());
    where.get(u).add(f);
  }
}
const urls = [...where.keys()];
// A browser-like user agent: several official sites answer bots with 404/400 while the page works in a browser.
const UA = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Safari/537.36 (Bawabat AlSafar link check)";
const TLS = /CERT|LEAF_SIGNATURE|SELF_SIGNED|UNABLE_TO_GET_ISSUER/;

async function check(u, getOnly = false) {
  for (const method of getOnly ? ["GET"] : ["HEAD", "GET"]) {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 25000);
    try {
      const r = await fetch(u, { method, redirect: "follow", signal: ctl.signal, headers: { "user-agent": UA, accept: "text/html,application/xhtml+xml,application/pdf,*/*;q=0.8", "accept-language": "en,ar;q=0.8" } });
      clearTimeout(t);
      if (method === "HEAD" && (r.status === 405 || r.status === 403 || r.status === 404 || r.status >= 500)) continue;
      return { u, status: r.status, final: r.url !== u ? r.url : undefined };
    } catch (e) {
      clearTimeout(t);
      if (method === "GET") return { u, status: 0, error: String(e.cause?.code || e.name || e) };
    }
  }
}

const out = [];
let i = 0;
await Promise.all(Array.from({ length: 12 }, async () => {
  while (i < urls.length) { const u = urls[i++]; out.push(await check(u)); }
}));
// Second, slower pass for links that gave no answer (timeouts and resets are mostly network noise from the runner).
const retry = out.map((r, k) => (r.status === 0 && !TLS.test(r.error || "") ? k : -1)).filter((k) => k >= 0);
let j = 0;
await Promise.all(Array.from({ length: 12 }, async () => {
  while (j < retry.length) { const k = retry[j++]; out[k] = await check(out[k].u, true); }
}));
const cls = (r) => (r.status >= 200 && r.status < 400 ? "ok" : r.status === 401 || r.status === 403 || r.status === 429 ? "blocked"
  : r.status === 0 && TLS.test(r.error || "") ? "tls" : r.status === 0 ? "network" : "broken");
const groups = { ok: [], blocked: [], tls: [], network: [], broken: [] };
for (const r of out) groups[cls(r)].push({ ...r, files: [...where.get(r.u)] });
writeFileSync("link-report.json", JSON.stringify(groups, null, 1));
const md = [
  `# Link check: ${urls.length} links`,
  `- OK: ${groups.ok.length}`, `- Blocked by the site (403/401/429, usually fine in a browser): ${groups.blocked.length}`, `- Broken (404/410/5xx): ${groups.broken.length}`,
  `- Certificate chain not accepted by Node (usually fine in a browser): ${groups.tls.length}`, `- No answer twice (network, check by hand): ${groups.network.length}`,
  "", "## Broken", ...groups.broken.sort((a, b) => a.u.localeCompare(b.u)).map((r) => `- ${r.status} ${r.u} (${r.files.join(", ")})`),
  "", "## No answer", ...groups.network.sort((a, b) => a.u.localeCompare(b.u)).map((r) => `- ${r.error} ${r.u} (${r.files.join(", ")})`),
  "", "## Certificate", ...groups.tls.map((r) => `- ${r.error} ${r.u}`),
  "", "## Blocked", ...groups.blocked.map((r) => `- ${r.status} ${r.u}`),
].join("\n");
writeFileSync("link-report.md", md);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, md + "\n");
console.log(md);
