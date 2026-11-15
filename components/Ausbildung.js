import Link from "next/link";
import { T } from "../lib/i18n";
import Flag from "../lib/Flag";
import { AUSB, AUSB_SRC } from "../lib/ausbildung";

const Src = ({ href, s }) => <p className="ps-src"><a href={href} target="_blank" rel="noopener noreferrer">{s.source} ↗</a></p>;
const Dl = ({ rows }) => (
  <dl className="ps-dl">{rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
);

export default function Ausbildung({ lang }) {
  const t = T[lang];
  const s = AUSB[lang];
  return (
    <>
      <h1><Flag code="de" size={30} /> {s.title}</h1>
      <p className="lead">{s.lead}</p>

      <section className="country-sec">
        <h2>{s.whatTitle}</h2>
        <ul>{s.what.map((x) => <li key={x}>{x}</li>)}</ul>
        <Src href={AUSB_SRC.ba} s={s} />
      </section>

      <section className="country-sec">
        <h2>{s.payTitle}</h2>
        <p>{s.payLead}</p>
        <div className="ausb-pay">
          {s.pay.map(([k, v]) => <div key={k} className="card"><span>{k}</span><b>{s.eur(v.toLocaleString("en-US"))}</b></div>)}
        </div>
        <p>{s.pay27}</p>
        <p className="ps-src">
          <a href={AUSB_SRC.pay} target="_blank" rel="noopener noreferrer">{s.source} (BIBB 2026) ↗</a> · <a href={AUSB_SRC.pay27} target="_blank" rel="noopener noreferrer">{s.source} (BIBB 2027) ↗</a>
        </p>
      </section>

      <section className="country-sec card ps-card">
        <h2>{s.visaTitle}</h2>
        <Dl rows={s.visa} />
        <Src href={AUSB_SRC.visa} s={s} />
      </section>

      <section className="country-sec">
        <h2>{s.afterTitle}</h2>
        <ul>{s.after.map((x) => <li key={x}>{x}</li>)}</ul>
        <Src href={AUSB_SRC.visa} s={s} />
      </section>

      <section className="country-sec card ps-card">
        <h2>{s.seekTitle}</h2>
        <Dl rows={s.seek} />
        <p className="ps-src">
          <a href={AUSB_SRC.visa} target="_blank" rel="noopener noreferrer">{s.source} ↗</a> · <a href={AUSB_SRC.seekPdf} target="_blank" rel="noopener noreferrer">{s.source} 2 (PDF) ↗</a>
        </p>
      </section>

      <section className="country-sec">
        <h2>{s.findTitle}</h2>
        <p>{s.find}</p>
        <div className="cmp-actions">
          <a className="btn gold" href={AUSB_SRC.find} target="_blank" rel="noopener noreferrer">{s.findBtn} ↗</a>
          <Link className="btn ghost small" href={`${t.base}/country/de`}>{s.country}</Link>
        </div>
      </section>

      <div className="notice">{s.note}</div>
    </>
  );
}
