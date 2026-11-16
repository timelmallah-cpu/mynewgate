// Checks every external link the site shows (data files and lib texts). Runs on GitHub Actions
// (monthly and on demand), because the build sandbox cannot reach outside sites.
// Output: link-report.json, link-report.md (also written to the job summary).
import { readFileSync, readdirSync, writeFileSync, appendFileSync } from "node:fs";
import { join } from "node:path";

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
const UA = "Mozilla/5.0 (compatible; Bawabat Alsafar link checker; +https://bawabatalsafar.com)";

async function check(u) {
  for (const method of ["HEAD", "GET"]) {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 25000);
    try {
      const r = await fetch(u, { method, redirect: "follow", signal: ctl.signal, headers: { "user-agent": UA, accept: "*/*" } });
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
const cls = (r) => (r.status >= 200 && r.status < 400 ? "ok" : r.status === 401 || r.status === 403 || r.status === 429 ? "blocked" : "broken");
const groups = { ok: [], blocked: [], broken: [] };
for (const r of out) groups[cls(r)].push({ ...r, files: [...where.get(r.u)] });
writeFileSync("link-report.json", JSON.stringify(groups, null, 1));
const md = [
  `# Link check: ${urls.length} links`,
  `- OK: ${groups.ok.length}`, `- Blocked by the site (403/401/429, usually fine in a browser): ${groups.blocked.length}`, `- Broken (404/410/5xx/no response): ${groups.broken.length}`,
  "", "## Broken", ...groups.broken.sort((a, b) => a.u.localeCompare(b.u)).map((r) => `- ${r.status || r.error} ${r.u} (${r.files.join(", ")})`),
  "", "## Blocked", ...groups.blocked.map((r) => `- ${r.status} ${r.u}`),
].join("\n");
writeFileSync("link-report.md", md);
if (process.env.GITHUB_STEP_SUMMARY) appendFileSync(process.env.GITHUB_STEP_SUMMARY, md + "\n");
console.log(md);
