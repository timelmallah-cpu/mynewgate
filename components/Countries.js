import Link from "@/components/Link";
import programmes from "../lib/programmes.json";
import { T } from "../lib/i18n";
import { COUNTRY_IDS } from "../lib/options";
import { COSTS } from "../lib/costs";
import { POST_STUDY, PS_TEXT } from "../lib/postStudy";
import { STUDY_WORK } from "../lib/studyWork";
import CountriesTable from "./CountriesTable";
import { CC_TEXT } from "../lib/countriesText";
import { feeStats } from "../lib/feeStats";

export function countryRows() {
  return COUNTRY_IDS.map((c) => {
    const fee = Object.fromEntries(["master", "bachelor"].map((lv) => [lv, feeStats(programmes.filter((p) => p.country === c && p.level === lv))]));
    const living = programmes.filter((p) => p.country === c && p.livingMonthly).map((p) => p.livingMonthly);
    return {
      c,
      fee,
      living: living.length ? Math.round(living.reduce((a, b) => a + b, 0) / living.length / 10) * 10 : null,
      proof: COSTS[c]?.proofMonthly ?? null,
      proofCheck: !!COSTS[c]?.proofCheck,
      hours: STUDY_WORK[c]?.hours ?? null,
      per: STUDY_WORK[c]?.per || "week",
      workCheck: !!STUDY_WORK[c]?.check,
      months: POST_STUDY[c]?.months ?? null,
      afterCheck: !!POST_STUDY[c]?.check,
    };
  });
}

export default function Countries({ lang }) {
  const t = T[lang];
  const s = CC_TEXT[lang];
  const rows = countryRows();
  const names = Object.fromEntries(COUNTRY_IDS.map((c) => [c, t.countries[c]]));
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <CountriesTable lang={lang} rows={rows} names={names} />
      <ul className="meta cc-notes">
        {s.notes.map((n) => <li key={n}>{n}</li>)}
      </ul>
      <h2>{s.details}</h2>
      <div className="cc-details">
        {COUNTRY_IDS.map((c) => {
          const w = STUDY_WORK[c];
          const cost = COSTS[c];
          const ps = POST_STUDY[c];
          return (
            <section key={c} className="card cc-card" id={`cc-${c}`}>
              <h3><Link href={`${t.base}/country/${c}`}>{t.countries[c]}</Link></h3>
              <dl className="ps-dl">
                {cost && <div><dt>{s.proof}</dt><dd>{cost.proof[lang]}{cost.proofCheck ? t.toCheck : ""} · <a href={cost.proofSrc} target="_blank" rel="noopener noreferrer">{s.source} ↗</a></dd></div>}
                {w && <div><dt>{s.work}</dt><dd>{w[lang]}{w.check && !/للتحقق|to verify/.test(w[lang]) ? t.toCheck : ""} · <a href={w.src} target="_blank" rel="noopener noreferrer">{s.source} ↗</a></dd></div>}
                {ps && <div><dt>{s.after}</dt><dd>{ps.name[lang]}: {PS_TEXT[lang].months(ps.months)}{ps.check ? t.toCheck : ""} · <a href={ps.src} target="_blank" rel="noopener noreferrer">{s.source} ↗</a></dd></div>}
              </dl>
            </section>
          );
        })}
      </div>
      <p className="meta">{s.reviewed}</p>
    </>
  );
}

