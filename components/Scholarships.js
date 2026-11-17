import Link from "@/components/Link";
import { T } from "../lib/i18n";
import { SCHOLARSHIPS, EXCLUDED, SCHOLARSHIPS_REVIEWED } from "../lib/scholarships";
import ScholarshipFinder from "./ScholarshipFinder";
import { fmtDate, KindTag } from "./ScholarshipParts";

export function ScamBox({ lang }) {
  const st = T[lang].sch;
  return (
    <aside className="scam">
      <h2>{st.scamTitle}</h2>
      <ul>{st.scam.map((x, i) => <li key={i}>{x}</li>)}</ul>
    </aside>
  );
}

export default function Scholarships({ lang }) {
  const t = T[lang];
  const st = t.sch;
  const calendar = SCHOLARSHIPS.flatMap((s) => s.deadlines.map((d) => ({ s, d }))).sort((a, b) => a.d.date.localeCompare(b.d.date));
  return (
    <>
      <header className="sch-head">
        <h1>{st.title}</h1>
        <p className="lead">{st.lead}</p>
      </header>
      <ScamBox lang={lang} />
      <ScholarshipFinder lang={lang} />

      <section className="calendar">
        <h2>{st.calendarTitle}</h2>
        <p className="meta">{st.calendarNote}</p>
        <ol>
          {calendar.map(({ s, d }, i) => {
            const rough = d.kind === "expected" || d.kind === "varies";
            return (
              <li key={i}>
                <span className="when">{fmtDate(d.date, lang, rough)}</span>
                <span>
                  <Link href={`${t.base}/scholarships/${s.id}`}>{s.name[lang]}</Link>
                  <span className="what">{d.label[lang]}</span>
                  <KindTag kind={d.kind} lang={lang} />
                </span>
              </li>
            );
          })}
        </ol>
      </section>

      <div className="how">
        <h2>{st.methodTitle}</h2>
        <p>{st.method}</p>
      </div>

      <section className="excluded">
        <h2>{st.excludedTitle}</h2>
        <p className="meta">{st.excludedNote}</p>
        <ul>{EXCLUDED[lang].map(([n, why]) => <li key={n}><b>{n}:</b> {why}</li>)}</ul>
      </section>
      <p className="meta">{st.reviewed} {SCHOLARSHIPS_REVIEWED}</p>
    </>
  );
}
