import { pageMeta } from "../lib/site";
import Link from "next/link";
import { notFound } from "next/navigation";
import { T } from "../lib/i18n";
import { SCHOLARSHIPS, ARAB, ARAB_IDS, SCHOLARSHIPS_REVIEWED } from "../lib/scholarships";
import { Hosts, fmtDate, KindTag } from "./ScholarshipParts";
import { ScamBox } from "./Scholarships";
import ReportLink from "./ReportLink";
import SaveButton from "./SaveButton";
import WhatsApp from "./WhatsApp";

export const schParams = () => SCHOLARSHIPS.map((s) => ({ id: s.id }));
export function schMeta(id, lang) {
  const s = SCHOLARSHIPS.find((x) => x.id === id);
  if (!s) return { title: T[lang].brand };
  return pageMeta(lang, { title: `${s.name[lang]} | ${T[lang].brand}`, description: `${s.summary[lang]} ${s.funder[lang]}.`, path: `/scholarships/${s.id}` });
}

export default function Scholarship({ id, lang }) {
  const t = T[lang];
  const st = t.sch;
  const s = SCHOLARSHIPS.find((x) => x.id === id);
  if (!s) notFound();
  const yes = ARAB_IDS.filter((c) => s.eligible.includes(c));
  const check = ARAB_IDS.filter((c) => s.check.includes(c));
  return (
    <>
      <Link className="back" href={`${t.base}/scholarships`}>{st.back}</Link>
      <header className="prog-head">
        <span className="sch-type light">{st.types[s.type]} · {s.levels.map((l) => st.levels[l]).join(" / ")}</span>
        <h1>{s.name[lang]}</h1>
        <div className="where">
          <span>{st.funder}: {s.funder[lang]}</span>
          <span>{st.study}: <Hosts s={s} lang={lang} /></span>
        </div>
      </header>
      <div className="sch-sum">{s.summary[lang]}</div>
      <div className="save-row"><SaveButton k={`s:${s.id}`} lang={lang} /> <WhatsApp lang={lang} path={`${t.base}/scholarships/${s.id}`} text={`${s.name[lang]} | ${s.funder[lang]}`} /></div>

      <section className="apply">
        <h2>{st.official}</h2>
        <a className="btn gold" href={s.url} target="_blank" rel="noopener noreferrer">{st.official} ↗</a>
        <p className="note">{st.how}: {s.howToApply[lang]}</p>
      </section>

      <div className="card">
        <dl className="details">
          <div>
            <dt>{st.eligibility}</dt>
            <dd>
              {s.eligibilityNote[lang]}
              {yes.length > 0 && <p className="chips"><span className="elig yes">{st.listYes}</span> {yes.map((c) => ARAB[c][lang]).join(lang === "ar" ? "، " : ", ")}</p>}
              {check.length > 0 && <p className="chips"><span className="elig check">{st.listCheck}</span> {check.map((c) => ARAB[c][lang]).join(lang === "ar" ? "، " : ", ")}</p>}
            </dd>
          </div>
          <div><dt>{st.covers}</dt><dd><ul>{s.covers[lang].map((x, i) => <li key={i}>{x}</li>)}</ul></dd></div>
          <div><dt>{st.conditions}</dt><dd><ul>{s.conditions[lang].map((x, i) => <li key={i}>{x}</li>)}</ul></dd></div>
          <div>
            <dt>{st.deadlinesTitle}</dt>
            <dd><ul>{s.deadlines.map((d, i) => <li key={i}>{d.label[lang]} <KindTag kind={d.kind} lang={lang} /></li>)}</ul></dd>
          </div>
          <div><dt>{st.language}</dt><dd>{s.language[lang]}</dd></div>
          {s.hostsNote && <div><dt>{st.study}</dt><dd>{s.hostsNote[lang]}</dd></div>}
        </dl>
      </div>
      <ScamBox lang={lang} />
      <div className="notice">
        {t.source} <a className="ltr" href={s.url} target="_blank" rel="noopener noreferrer">{s.url}</a>
        <br />{st.reviewed} {SCHOLARSHIPS_REVIEWED}
      </div>
      <ReportLink lang={lang} what={s.name.en} path={`${t.base}/scholarships/${s.id}`} />
    </>
  );
}
