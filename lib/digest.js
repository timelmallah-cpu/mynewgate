// Upcoming deadlines for the next N days, built from the site's own data: programme deadlines (lib/deadlines.json,
// grouped per university and date) and scholarship deadlines (lib/scholarships.js, only "official" dates).
// Used by /deadlines-soon and by the weekly Kit draft (app/api/digest/cron).
import programmes from "./programmes.json";
import deadlines from "./deadlines.json";
import { SCHOLARSHIPS } from "./scholarships";

const byId = new Map(programmes.map((p) => [String(p.id), p]));
const DAY = 864e5;
export const isoDay = (t) => new Date(t).toISOString().slice(0, 10);

export function digest(from = isoDay(Date.now()), days = 30) {
  const to = isoDay(Date.parse(from + "T12:00:00Z") + days * DAY);
  const groups = new Map();
  for (const d of deadlines) {
    const p = byId.get(String(d.id));
    if (!p) continue;
    for (const x of d.dates || []) {
      if (x.d < from || x.d > to) continue;
      const k = `${x.d}|${p.university}|${x.est ? 1 : 0}`;
      if (!groups.has(k)) groups.set(k, { d: x.d, est: !!x.est, uni: p.university, c: p.country, progs: [] });
      groups.get(k).progs.push({ id: String(p.id), name: p.name, level: p.level });
    }
  }
  const progs = [...groups.values()].sort((a, b) => a.d.localeCompare(b.d) || a.est - b.est || b.progs.length - a.progs.length);
  const sch = [];
  for (const s of SCHOLARSHIPS) {
    for (const x of s.deadlines || []) {
      if (x.kind !== "official" || x.date < from || x.date > to) continue;
      sch.push({ d: x.date, id: s.id, name: s.name, label: x.label, step: x.step });
    }
  }
  sch.sort((a, b) => a.d.localeCompare(b.d));
  return { from, to, days, progs, sch, confirmed: progs.filter((g) => !g.est).length, estimated: progs.filter((g) => g.est).length };
}
