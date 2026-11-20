// /earnings: "Can I support myself?" Allowed work hours x official minimum wage vs the average monthly living cost
// in the country's programme cities. Server part builds one slim row per country; the calculator is client-side.
import Link from "@/components/Link";
import { T } from "../lib/i18n";
import { rows } from "../lib/questions";
import { STUDY_WORK } from "../lib/studyWork";
import { MIN_WAGE, MW_REVIEWED, hourlyEur, hourlyLocal } from "../lib/minWage";
import { CC_TEXT } from "../lib/countriesText";
import EarningsCalc from "./EarningsCalc";
import { EARN_TEXT } from "../lib/earningsText";

const r2 = (n) => Math.round(n * 100) / 100;

export function earningsRows(lang) {
  const t = T[lang];
  return rows().map((x) => {
    const m = MIN_WAGE[x.c] || { none: true };
    const w = STUDY_WORK[x.c] || {};
    const regs = m.regions || (m.none ? [] : [m]);
    return {
      c: x.c,
      name: t.countries[x.c],
      weekly: x.weekly == null ? null : Math.round(x.weekly * 10) / 10,
      capText: lang === "ar" ? CC_TEXT.ar.hours(w.hours ?? null, w.per || "week") : (w.hours == null ? "no fixed cap published" : `${w.hours} hours a ${w.per || "week"}`),
      workText: w[lang] || "",
      workSrc: w.src || null,
      workCheck: !!w.check,
      termBan: x.c === "my",
      living: x.living,
      livingN: x.livingN,
      none: !!m.none,
      own: !!m.own,
      note: m.note?.[lang] || null,
      regions: regs.map((g, i) => ({
        id: g.id || String(i),
        label: g[lang] || "",
        eurH: r2(hourlyEur(g)),
        localH: r2(hourlyLocal(g)),
        cur: g.cur,
        calc: g.per !== "hour",
        from: g.from,
        src: g.src,
        check: !!g.check,
      })),
    };
  }).sort((a, b) => a.name.localeCompare(b.name, lang));
}

export default function Earnings({ lang }) {
  const s = EARN_TEXT[lang];
  const base = lang === "en" ? "/en" : "";
  const data = earningsRows(lang);
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <EarningsCalc rows={data} lang={lang} />
      <h2>{s.howTitle}</h2>
      <ul>{s.how.map((x) => <li key={x}>{x}</li>)}</ul>
      <p className="meta">{s.reviewed(MW_REVIEWED)} <Link href={`${base}/countries`}>{s.countries}</Link></p>
    </>
  );
}
