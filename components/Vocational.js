import Link from "next/link";
import { T } from "../lib/i18n";
import Flag from "../lib/Flag";
import { VOC, VOC_NOT, VOC_TEXT } from "../lib/vocational";

export default function Vocational({ lang }) {
  const t = T[lang];
  const s = VOC_TEXT[lang];
  const rows = ["route", "what", "who", "money", "work", "length", "after", "language"];
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>

      <Link className="sch-promo" href={`${t.base}/ausbildung`}>
        <span><b><Flag code="de" size={22} /> {s.deTitle}</b>{s.deText}</span>
        <span className="btn small">{s.deBtn}</span>
      </Link>

      {VOC.map((v) => (
        <section key={v.code} className="card ps-card">
          <h2><Flag code={v.code} size={24} /> {v.country[lang]}: {v.name[lang]}</h2>
          {v.hard && <div className="ps-tags"><span className="ps-tag no">{s.hard}</span></div>}
          <dl className="ps-dl">
            {rows.map((k) => <div key={k}><dt>{s[k]}</dt><dd>{v[k][lang]}</dd></div>)}
          </dl>
          {v.note && <p className="meta">{v.note[lang]}</p>}
          <p className="ps-src">
            <a href={v.src} target="_blank" rel="noopener noreferrer">{s.source} ↗</a>
            {v.src2 && <> · <a href={v.src2} target="_blank" rel="noopener noreferrer">{s.source} 2 ↗</a></>}
            {v.check ? s.toCheck : ""}
          </p>
        </section>
      ))}

      <section className="country-sec">
        <h2>{s.notTitle}</h2>
        <ul>
          {VOC_NOT.map((v) => (
            <li key={v.code}>
              <b><Flag code={v.code} size={18} /> {v.name[lang]}:</b> {v.why[lang]} <a href={v.src} target="_blank" rel="noopener noreferrer">{s.source} ↗</a>
            </li>
          ))}
        </ul>
      </section>

      <div className="notice">{s.note}</div>
    </>
  );
}
