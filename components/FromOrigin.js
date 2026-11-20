import Link from "@/components/Link";
import { notFound } from "next/navigation";
import { T } from "../lib/i18n";
import Flag from "../lib/Flag";
import { SITE_URL } from "../lib/site";
import { COSTS } from "../lib/costs";
import { STUDY_WORK } from "../lib/studyWork";
import { POST_STUDY } from "../lib/postStudy";
import { CERT_KIND } from "../lib/schoolCert";
import { FROM, fromData, fromHub, FROM_TEXT } from "../lib/fromOrigin";
import { LocalAs } from "./Currency";

const fmt = (v) => Math.round(v).toLocaleString("en-US");
const ld = (obj) => <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj).replace(/</g, "\\u003c") }} />;
const ext = { target: "_blank", rel: "noopener noreferrer" };

function Money({ eur, cur, lang }) {
  return <><span className="ltr">€{fmt(eur)}</span> <LocalAs eur={eur} code={cur} lang={lang} /></>;
}

function CostBlock({ d, lang, level }) {
  const s = FROM_TEXT[lang];
  const t = T[lang];
  const x = d[level];
  if (!x.count) return null;
  return (
    <div className="from-cost">
      <h3>{level === "master" ? s.medMaster : s.medBachelor}</h3>
      {x.median == null ? <p>{s.none}</p> : (
        <>
          <p className="total-num-wrap"><b className="total-num"><Money eur={x.median} cur={d.f.cur} lang={lang} /></b></p>
          <p className="meta">{s.of(x.known, x.count)}</p>
          <h4>{s.cheapest}</h4>
          <ol className="from-list">
            {x.cheapest.map((p) => (
              <li key={p.id}>
                <Link href={`${t.base}/programme/${p.id}`}>{p.name}</Link> <span className="meta">{p.uni}{p.city[lang] ? `${lang === "ar" ? "، " : ", "}${p.city[lang]}` : ""}</span>
                <br /><b>{s.total}: <Money eur={p.total} cur={d.f.cur} lang={lang} /></b> <span className="meta">({s.years(p.years)}{lang === "ar" ? "، حوالي " : ", about "}<span className="ltr">€{fmt(p.perYear)}</span> {s.perYear})</span>
              </li>
            ))}
          </ol>
        </>
      )}
    </div>
  );
}

export function FromCountry({ origin, c, lang }) {
  const d = fromData(origin, c);
  if (!d) notFound();
  const s = FROM_TEXT[lang];
  const t = T[lang];
  const ar = lang === "ar";
  const on = d.f[lang === "ar" ? "ar" : "en"];
  const cn = t.countries[c];
  const tc = (on) => (on ? s.toCheck : "");
  const ps = POST_STUDY[c];
  const base = `${SITE_URL}${ar ? "" : "/en"}/study-from/${origin}`;
  return (
    <>
      {ld({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: s.hubH1(on), item: base },
        { "@type": "ListItem", position: 2, name: s.h1(cn, on), item: `${base}/${c}` },
      ] })}
      <p className="crumbs"><Link href={`${t.base}/study-from/${origin}`}>{s.hub(on)}</Link></p>
      <h1><Flag code={c} size={26} /> {s.h1(cn, on)}</h1>
      <p className="lead">{s.lead(cn, on)}</p>

      <section className="card country-sec">
        <h2>{s.cost}</h2>
        <p className="meta">{s.costHow}</p>
        <CostBlock d={d} lang={lang} level="master" />
        <CostBlock d={d} lang={lang} level="bachelor" />
        <p className="meta">{s.rate}</p>
      </section>

      <section className="card country-sec">
        <h2>{s.visa(on)}</h2>
        {d.visa ? (
          <>
            <p><b>{s.where}</b> {d.visa.where[lang]}{tc(d.visa.check)}</p>
            <h3>{s.steps}</h3>
            <ol>{d.visa.steps[lang].map((x, i) => <li key={i}>{x}</li>)}</ol>
            {d.visa.note && <p className="notice"><b>{s.note}:</b> {d.visa.note[lang]}</p>}
            <p className="tool-strip">
              {d.visa.src && <a href={d.visa.src} {...ext}>{s.src}</a>}
              {d.visa.book && <a href={d.visa.book} {...ext}>{s.book}</a>}
            </p>
          </>
        ) : (
          <>
            <p>{s.noVisa(on)}</p>
            {d.visaGeneral && <p>{d.visaGeneral[lang]}</p>}
            {d.visaGeneralSrc && <p className="tool-strip"><a href={d.visaGeneralSrc} {...ext}>{s.src}</a></p>}
          </>
        )}
      </section>

      {d.bachelor.count > 0 && (
        <section className="card country-sec">
          <h2>{s.cert}</h2>
          {d.cert ? (
            <>
              <p><span className="chip">{CERT_KIND[lang][d.cert.kind]}</span></p>
              <p>{d.cert[lang]}{tc(d.cert.check)}</p>
              {d.cert.src && <p className="tool-strip"><a href={d.cert.src} {...ext}>{s.src}</a></p>}
            </>
          ) : <p>{s.noCert}</p>}
        </section>
      )}

      <section className="card country-sec">
        {COSTS[c]?.proof && (<><h2>{s.money}</h2><p>{COSTS[c].proof[lang]}{tc(COSTS[c].proofCheck)}</p></>)}
        {STUDY_WORK[c] && (<><h2>{s.work}</h2><p>{STUDY_WORK[c][lang]}{tc(STUDY_WORK[c].check)}</p></>)}
        {ps && (<><h2>{s.after}</h2><p>{ps.name[lang]}. {ps.work?.[lang] || ""}{tc(ps.check)}</p></>)}
      </section>

      <section className="card country-sec">
        <h2>{s.sch(on)}</h2>
        {d.sch.length ? (
          <ul>{d.sch.map((x) => <li key={x.id}><Link href={`${t.base}/scholarships/${x.id}`}>{x.name[lang]}</Link></li>)}</ul>
        ) : <p>{s.noSch}</p>}
      </section>

      <section className="country-sec">
        <h2>{s.links}</h2>
        <p className="tool-strip">
          <Link href={`${t.base}/country/${c}`}>{s.country(cn)}</Link>
          <Link href={`${t.base}/my-plan?o=${d.f.o}`}>{s.plan}</Link>
          <Link href={`${t.base}/visa`}>{s.visaPage}</Link>
          <Link href={`${t.base}/legalisation`}>{s.legal}</Link>
          {d.bachelor.count > 0 && <Link href={`${t.base}/school-certificate`}>{s.certPage}</Link>}
          <Link href={`${t.base}/study-from/${origin}`}>{s.hub(on)}</Link>
        </p>
      </section>
      <div className="notice">{s.reviewed}</div>
    </>
  );
}

export function FromHub({ origin, lang }) {
  const f = FROM[origin];
  if (!f) notFound();
  const s = FROM_TEXT[lang];
  const t = T[lang];
  const on = f[lang === "ar" ? "ar" : "en"];
  const list = fromHub(origin);
  return (
    <>
      <h1>{s.hubH1(on)}</h1>
      <p className="lead">{s.hubLead(on, list.length)}</p>
      <div className="table-wrap">
        <table className="from-table">
          <thead><tr><th>{s.colCountry}</th><th>{s.colMed}</th><th>{s.colVisa}</th></tr></thead>
          <tbody>
            {list.map((d) => (
              <tr key={d.c}>
                <td><Link href={`${t.base}/study-from/${origin}/${d.c}`}><Flag code={d.c} size={16} /> {t.countries[d.c]}</Link></td>
                <td>{d.master.median == null ? s.na : <Money eur={d.master.median} cur={f.cur} lang={lang} />}</td>
                <td>{d.visa ? s.yes : s.no}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="meta">{s.costHow} {s.rate}</p>
      <div className="notice">{s.reviewed}</div>
    </>
  );
}
