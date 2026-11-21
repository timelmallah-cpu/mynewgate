// Programme cards for the assistant: when the answer cites programme pages, the reply also carries up to three
// structured cards built from our own data (never from the model's text), so fees and dates are exactly the
// published ones. Each card: id, name, university, country, level, fee label, next deadline (est = estimate), url.
import programmes from "../programmes.json";
import deadlines from "../deadlines.json";
import { feeLabel } from "../options";

const BY_ID = new Map(programmes.map((p) => [String(p.id), p]));
const DL = new Map(deadlines.map((d) => [String(d.id), d.dates || []]));

export function programmeCards(urls, lang, today = new Date().toISOString().slice(0, 10)) {
  const out = [];
  for (const u of urls) {
    const m = /^\/programme\/([\w-]+)$/.exec(u);
    const p = m && BY_ID.get(m[1]);
    if (!p || out.some((c) => c.id === String(p.id))) continue;
    const next = DL.get(String(p.id))?.find((d) => d.d >= today) || null;
    out.push({
      id: String(p.id), url: u, name: p.name, university: p.university, level: p.level,
      country: lang === "en" ? p.en?.countryLabel || p.country : p.countryAr,
      fee: feeLabel(p, lang), next: next ? { d: next.d, est: !!next.est } : null,
    });
    if (out.length === 3) break;
  }
  return out;
}

// Scholarship cards (/scholarships/<id>) and digital nomad visa cards (/visas/<slug>), same rule: our own data only.
import { SCHOLARSHIPS } from "../scholarships";
import { NOMADS } from "../nomadVisas";
const SCH = new Map(SCHOLARSHIPS.map((s) => [s.id, s]));
const NOM = new Map(NOMADS.map((n) => [n.slug, n]));

export function scholarshipCards(urls, lang, today = new Date().toISOString().slice(0, 10)) {
  const out = [];
  for (const u of urls) {
    const m = /^\/scholarships\/([\w-]+)$/.exec(u);
    const s = m && SCH.get(m[1]);
    if (!s || out.some((c) => c.id === s.id)) continue;
    const next = s.deadlines.find((d) => d.date >= today) || null;
    out.push({ id: s.id, url: u, name: s.name[lang], funder: s.funder[lang], summary: s.summary[lang], next: next ? { d: next.date, est: next.kind !== "official" } : null });
    if (out.length === 3) break;
  }
  return out;
}

export function nomadCards(urls, lang) {
  const out = [];
  for (const u of urls) {
    const m = /^\/visas\/([\w-]+)$/.exec(u);
    const n = m && NOM.get(m[1]);
    if (!n || out.some((c) => c.id === n.slug)) continue;
    out.push({ id: n.slug, url: u, name: n.name[lang], visa: n.visa[lang], income: n.income[lang], min: n.min ?? null, minCheck: !!n.minCheck, family: n.family });
    if (out.length === 3) break;
  }
  return out;
}
