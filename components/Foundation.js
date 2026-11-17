import Link from "@/components/Link";
import { EgyptOnlyNote } from "./Origin";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { COURSES, KOLLEGS, OTHERS, FOUND_TEXT, FOUND_SRC } from "../lib/foundation";

const Src = ({ href, children }) => <a className="linkbtn" href={href} target="_blank" rel="noopener noreferrer">{children} ↗</a>;

export default function Foundation({ lang }) {
  const t = T[lang];
  const s = FOUND_TEXT[lang];
  const cairo = OTHERS.find((o) => o.id === "cairo");
  const others = OTHERS.filter((o) => o.id !== "cairo");
  const type = (k) => (k.uni === true ? s.typeUni : k.uni === false ? s.typeFh : s.typeRec);
  const Other = ({ o }) => (
    <section className="card fd-other" id={`fd-${o.id}`}>
      <h3><Flag code={o.country === "eg" ? "de" : o.country} size={20} /> {o[lang].name}</h3>
      <dl className="ps-dl">
        {o[lang].rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
      </dl>
      <p className="pl-actions">
        <Src href={o.src}>{s.source}</Src>{o.src2 && <Src href={o.src2}>{s.source2}</Src>}
        {o.check ? <span className="meta">{s.toCheck}</span> : null}
      </p>
    </section>
  );
  return (
    <>
      <h1>{s.title}</h1>
      <EgyptOnlyNote lang={lang} what={{ ar: "قسم السنة التحضيرية في مصر", en: "The foundation-year section for Egypt" }} />
      <p className="lead">{s.lead}</p>

      <section className="card">
        <h2>{s.whatTitle}</h2>
        {s.what.map((p) => <p key={p}>{p}</p>)}
        <p className="pl-actions"><Src href={FOUND_SRC.uniassist}>uni-assist</Src><Src href={FOUND_SRC.daad}>Study in Germany</Src></p>
      </section>

      <section className="card">
        <h2>{s.egTitle}</h2>
        <p>{s.eg}{s.toCheck}</p>
        <p className="pl-actions"><Src href={FOUND_SRC.daadDb}>DAAD</Src><Link className="linkbtn" href={`${t.base}/school-certificate#cert-de`}>{s.links[0][1]}</Link></p>
      </section>

      <h2>{s.coursesTitle}</h2>
      <div className="ausb-table-wrap">
        <table className="ausb-table fd-table">
          <thead><tr><th scope="col">{s.course}</th><th scope="col">{s.forWhat}</th><th scope="col">{s.subjects}</th></tr></thead>
          <tbody>
            {COURSES.map((c) => (
              <tr key={c.code}><th scope="row" className="ltr">{c.code}</th><td>{c[lang].for}</td><td>{c[lang].subj}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="meta"><a href={FOUND_SRC.frankfurt} target="_blank" rel="noopener noreferrer">{s.source} ↗</a></p>

      <h2>{s.stepsTitle}</h2>
      <ol className="ausb-steps">
        {s.steps.map(([h, x]) => <li key={h}><b>{h}</b><span>{x}</span></li>)}
      </ol>
      <p className="pl-actions">
        <Src href={FOUND_SRC.fu}>FU Berlin</Src><Src href={FOUND_SRC.kit}>KIT</Src><Src href={FOUND_SRC.amman}>{lang === "ar" ? "السفارة الألمانية في عمّان" : "German Embassy Amman"}</Src>
        <Link className="linkbtn" href={`${t.base}/visa?to=de`}>{s.links[1][1]}</Link>
      </p>

      <section className="card">
        <h2>{s.costTitle}</h2>
        <p>{s.cost}{s.costCheck}</p>
      </section>

      <h2 id="cairo">{s.cairoTitle}</h2>
      <Other o={cairo} />

      <h2 id="list">{s.listTitle}</h2>
      <p>{s.listLead(KOLLEGS.length)}</p>
      <div className="ausb-table-wrap">
        <table className="ausb-table fd-table">
          <thead><tr><th scope="col">{s.colName}</th><th scope="col">{s.colCity}</th><th scope="col">{s.colCourses}</th><th scope="col">{s.colType}</th></tr></thead>
          <tbody>
            {KOLLEGS.map((k) => (
              <tr key={k.name}>
                <th scope="row"><a href={k.url} target="_blank" rel="noopener noreferrer" className="ltr">{k.name} ↗</a></th>
                <td>{lang === "ar" ? k.ar : k.city}</td>
                <td className="ltr">{k.courses}</td>
                <td>{type(k)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="meta"><a href={FOUND_SRC.register} target="_blank" rel="noopener noreferrer">{s.source} ↗</a></p>

      <h2 id="others">{s.othersTitle}</h2>
      {others.map((o) => <Other key={o.id} o={o} />)}

      <p className="pl-actions">{s.links.slice(2).map(([h, l]) => <Link key={h} className="linkbtn" href={`${t.base}${h}`}>{l}</Link>)}</p>
      <p className="meta">{s.warn}</p>
      <p className="meta">{s.reviewed}</p>
    </>
  );
}
