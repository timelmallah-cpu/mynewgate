import Link from "@/components/Link";
import { EgyptOnlyNote } from "./Origin";
import { T } from "../lib/i18n";
import Flag from "../lib/Flag";
import { AUSB, AUSB_SRC } from "../lib/ausbildung";
import { VOC_TEXT } from "../lib/vocational";
import { GUIDE_TEXT } from "../lib/ausbildungGuide";
import { SectorGrid, Steps, Boards, Programmes, CairoDocs } from "./AusbildungParts";

const Src = ({ href, s }) => <p className="ps-src"><a href={href} target="_blank" rel="noopener noreferrer">{s.source} ↗</a></p>;
const Dl = ({ rows }) => (
  <dl className="ps-dl">{rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
);

export default function Ausbildung({ lang }) {
  const t = T[lang];
  const s = AUSB[lang];
  const g = GUIDE_TEXT[lang];
  const nav = lang === "ar"
    ? [["sectors", "المجالات والرواتب"], ["apply", "خطوات التقديم"], ["find", "أين تجد مكاناً"], ["programmes", "برامج للعرب"], ["cairo", "أوراق السفارة"], ["visa", "التأشيرة"]]
    : [["sectors", "Sectors and pay"], ["apply", "How to apply"], ["find", "Where to find a place"], ["programmes", "Programmes for Arabs"], ["cairo", "Embassy documents"], ["visa", "Visa"]];
  return (
    <>
      <p className="crumb"><Link href={`${t.base}/vocational`}>{VOC_TEXT[lang].back}</Link></p>
      <h1><Flag code="de" size={30} /> {s.title}</h1>
      <EgyptOnlyNote lang={lang} />
      <p className="lead">{s.lead}</p>
      <nav className="tool-jump" aria-label={lang === "ar" ? "محتوى الصفحة" : "On this page"}>
        {nav.map(([id, label]) => <a key={id} className="chip" href={`#${id}`}>{label}</a>)}
      </nav>

      <section className="country-sec" id="sectors">
        <h2>{g.sectorsTitle}</h2>
        <p>{g.sectorsLead}</p>
        <SectorGrid lang={lang} base={t.base} />
      </section>

      <section className="country-sec">
        <h2>{s.whatTitle}</h2>
        <ul>{s.what.map((x) => <li key={x}>{x}</li>)}</ul>
        <Src href={AUSB_SRC.ba} s={s} />
      </section>

      <section className="country-sec" id="apply">
        <h2>{g.stepsTitle}</h2>
        <Steps lang={lang} />
      </section>

      <section className="country-sec" id="find">
        <h2>{g.boardsTitle}</h2>
        <p>{g.boardsLead}</p>
        <Boards lang={lang} />
        <div className="notice">{g.warn}</div>
      </section>

      <section className="country-sec" id="programmes">
        <h2>{g.progTitle}</h2>
        <Programmes lang={lang} />
      </section>

      <section className="country-sec card ps-card" id="cairo">
        <h2>{g.cairoTitle}</h2>
        <CairoDocs lang={lang} />
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

      <section className="country-sec card ps-card" id="visa">
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

      <p className="cmp-actions"><Link className="btn ghost small" href={`${t.base}/country/de`}>{s.country}</Link></p>

      <div className="notice">{s.note}</div>
    </>
  );
}
