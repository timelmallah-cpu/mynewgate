import Link from "next/link";
import { notFound } from "next/navigation";
import { T } from "../lib/i18n";
import Flag from "../lib/Flag";
import { VOC, VOC_TEXT } from "../lib/vocational";

export const vocParams = () => VOC.map((v) => ({ code: v.code }));
export const vocMeta = (code, lang) => {
  const v = VOC.find((x) => x.code === code);
  return { title: `${v ? `${v.country[lang]}: ${v.name[lang]}` : VOC_TEXT[lang].title} | ${T[lang].brand}` };
};

export default function Vocational({ lang }) {
  const t = T[lang];
  const s = VOC_TEXT[lang];
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>

      <Link className="sch-promo" href={`${t.base}/ausbildung`}>
        <span><b><Flag code="de" size={22} /> {s.deTitle}</b>{s.deText}</span>
        <span className="btn small">{s.deBtn}</span>
      </Link>

      {VOC.map((v) => (
        <Link key={v.code} className="sch-promo" href={`${t.base}/vocational/${v.code}`}>
          <span>
            <b><Flag code={v.code} size={22} /> {v.country[lang]}: {v.name[lang]}</b>
            {v.short[lang]}
            {v.hard && <><br /><span className="ps-tag no">{s.hard}</span></>}
          </span>
          <span className="btn small">{s.deBtn}</span>
        </Link>
      ))}

      <div className="notice">{s.note}</div>
    </>
  );
}

export function VocationalCountry({ code, lang }) {
  const v = VOC.find((x) => x.code === code);
  if (!v) notFound();
  const t = T[lang];
  const s = VOC_TEXT[lang];
  const rows = ["route", "what", "who", "money", "work", "length", "after", "language"];
  return (
    <>
      <p className="crumb"><Link href={`${t.base}/vocational`}>{s.back}</Link></p>
      <h1><Flag code={v.code} size={30} /> {v.country[lang]}: {v.name[lang]}</h1>
      {v.hard && <div className="ps-tags"><span className="ps-tag no">{s.hard}</span></div>}
      <section className="card ps-card">
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
      {v.find && (
        <section className="country-sec">
          <h2>{s.findTitle}</h2>
          <p>{v.find[lang]}</p>
          <div className="cmp-actions">
            <a className="btn gold" href={v.findUrl} target="_blank" rel="noopener noreferrer">{s.findBtn} ↗</a>
            {v.second?.href && <Link className="btn ghost small" href={`${t.base}${v.second.href}`}>{v.second[lang]}</Link>}
            {v.second?.url && <a className="btn ghost small" href={v.second.url} target="_blank" rel="noopener noreferrer">{v.second[lang]} ↗</a>}
          </div>
        </section>
      )}
      <div className="notice">{s.note}</div>
    </>
  );
}
