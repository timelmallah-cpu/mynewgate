import Link from "@/components/Link";
import { T } from "../lib/i18n";
import Flag from "../lib/Flag";
import { POST_STUDY, PS_TEXT } from "../lib/postStudy";
import { COUNTRY_IDS } from "../lib/options";

const workLabel = (w, s) => (w === true ? s.workYes : w === false ? s.workNo : s.workUnknown);

export function PostStudyFacts({ code, lang, heading = true }) {
  const d = POST_STUDY[code];
  if (!d) return null;
  const s = PS_TEXT[lang];
  return (
    <div className="ps-facts">
      {heading && <p className="ps-name">{d.name[lang]}</p>}
      <div className="ps-tags">
        <span className="ps-tag">{s.months(d.months)}</span>
        <span className={`ps-tag ${d.canWork === true ? "yes" : d.canWork === false ? "no" : ""}`}>{s.work}: {workLabel(d.canWork, s)}</span>
      </div>
      <dl className="ps-dl">
        <div><dt>{s.who}</dt><dd>{d.who[lang]}</dd></div>
        <div><dt>{s.when}</dt><dd>{d.when[lang]}</dd></div>
        <div><dt>{s.work}</dt><dd>{d.work[lang]}</dd></div>
        <div><dt>{s.terms}</dt><dd>{d.terms[lang]}</dd></div>
        <div><dt>{s.next}</dt><dd>{d.next[lang]}</dd></div>
      </dl>
      <p className="ps-src">
        <a href={d.src} target="_blank" rel="noopener noreferrer">{s.source} ↗</a>
        {d.check ? s.toCheck : ""}
      </p>
    </div>
  );
}

export default function AfterGrad({ lang }) {
  const t = T[lang];
  const s = PS_TEXT[lang];
  const codes = COUNTRY_IDS.filter((c) => POST_STUDY[c]).sort((a, b) => POST_STUDY[b].months - POST_STUDY[a].months);
  return (
    <>
      <h1>{s.pageTitle}</h1>
      <p className="lead">{s.lead}</p>
      <div className="ps-table" role="table">
        <div className="ps-row ps-head" role="row">
          <span role="columnheader">{s.country}</span>
          <span role="columnheader">{s.terms}</span>
          <span role="columnheader">{s.work}</span>
        </div>
        {codes.map((c) => (
          <a key={c} href={`#ps-${c}`} className="ps-row" role="row">
            <span role="cell"><Flag code={c} size={20} /> {t.countries[c]}</span>
            <span role="cell">{s.months(POST_STUDY[c].months)}</span>
            <span role="cell">{workLabel(POST_STUDY[c].canWork, s)}</span>
          </a>
        ))}
      </div>
      <p className="meta">{s.sort}</p>
      {codes.map((c) => (
        <section key={c} id={`ps-${c}`} className="card ps-card">
          <h2><Link href={`${t.base}/country/${c}`}><Flag code={c} size={24} /> {t.countries[c]}</Link></h2>
          <PostStudyFacts code={c} lang={lang} />
        </section>
      ))}
      <div className="notice">{s.note}</div>
    </>
  );
}
