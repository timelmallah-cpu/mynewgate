import Link from "next/link";
import { EgyptOnlyNote } from "./Origin";
import { T } from "../lib/i18n";
import { LEGAL_TEXT, LEGAL_SRC, LEGAL_REVIEWED, OFFICES_URL } from "../lib/legalisationText";

export default function Legalisation({ lang }) {
  const t = T[lang];
  const s = LEGAL_TEXT[lang];
  return (
    <>
      <h1>{s.title}</h1>
      <EgyptOnlyNote lang={lang} />
      <p className="lead">{s.lead}</p>

      <section className="card legal-apostille">
        <h2>{s.apostilleTitle}</h2>
        <p>{s.apostille}</p>
      </section>

      <h2>{s.stepsTitle}</h2>
      <ol className="legal-steps">
        {s.steps.map(([h, d]) => <li key={h}><strong>{h}</strong><span>{d}</span></li>)}
      </ol>

      <h2 id="issuer">{s.issuerTitle}</h2>
      <p className="note">{s.issuerNote}</p>
      <div className="legal-table" role="table">
        {s.issuer.map(([doc, who]) => (
          <div className="legal-row" role="row" key={doc}>
            <span role="cell" className="legal-doc">{doc}</span>
            <span role="cell">{who}</span>
          </div>
        ))}
      </div>
      <p className="note">{s.thanaweya}</p>

      <h2>{s.officesTitle}</h2>
      <p>{s.offices}</p>
      <p><a className="btn" href={OFFICES_URL} target="_blank" rel="noopener noreferrer">{s.officesBtn} ↗</a></p>

      <h2 id="translation">{s.translateTitle}</h2>
      <ul>{s.translate.map((x) => <li key={x}>{x}</li>)}</ul>

      <h2 id="embassies">{s.countriesTitle}</h2>
      <div className="legal-countries">
        {s.countries.map((c) => (
          <section className="card" key={c.id} id={c.id}>
            <h3>{c.name}</h3>
            <p>{c.text}</p>
            <p className="note"><a href={c.src} target="_blank" rel="noopener noreferrer">{lang === "ar" ? "المصدر" : "Source"} ↗</a></p>
          </section>
        ))}
      </div>
      <p className="note">{s.countriesNote}</p>

      <h2>{s.tipsTitle}</h2>
      <ul>{s.tips.map((x) => <li key={x}>{x}</li>)}</ul>

      <h2>{s.checkTitle}</h2>
      <ul className="letter-check">
        {s.check.map((x) => <li key={x}><label><input type="checkbox" /> {x}</label></li>)}
      </ul>

      <h2>{s.linksTitle}</h2>
      <p className="tool-strip">
        {s.links.map(([href, label]) => <Link key={href} href={`${t.base}${href}`}>{label}</Link>)}
      </p>

      <h2>{s.srcTitle}</h2>
      <ul className="note">{LEGAL_SRC.map((x) => <li key={x.url}><a href={x.url} target="_blank" rel="noopener noreferrer"><bdi>{lang === "ar" ? x.name : x.en}</bdi></a></li>)}</ul>
      <p className="note">{s.disclaimer}</p>
      <p className="note">{s.reviewed}: {LEGAL_REVIEWED}</p>
    </>
  );
}
