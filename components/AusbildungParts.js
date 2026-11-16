import Link from "next/link";
import { SECTORS, BOARDS, PROGRAMMES, STEPS, CAIRO, GUIDE_TEXT, SRC, jobSearchUrl } from "../lib/ausbildungGuide";

const fmt = (n) => n.toLocaleString("en-US");
const Src = ({ href, label }) => <a className="ps-src-link" href={href} target="_blank" rel="noopener noreferrer">{label} ↗</a>;

export function SectorGrid({ lang, base, current }) {
  const g = GUIDE_TEXT[lang];
  return (
    <div className="ausb-sectors">
      {SECTORS.filter((x) => x.slug !== current).map((x) => (
        <Link key={x.slug} className="card ausb-sector" href={`${base}/ausbildung/${x.slug}`}>
          <span className="ausb-ico" aria-hidden="true">{x.icon}</span>
          <b>{x[lang].name}</b>
          <span>{x[lang].short}</span>
          <small>{g.jobs(x.jobs.length + (x.extra ? 1 : 0))}</small>
        </Link>
      ))}
    </div>
  );
}

export function PayTable({ jobs, lang }) {
  const g = GUIDE_TEXT[lang];
  const years = Math.max(...jobs.map((j) => j.pay.length));
  return (
    <div className="ausb-table-wrap">
      <table className="ausb-table">
        <thead>
          <tr>
            <th scope="col">{g.profession}</th>
            <th scope="col">{g.length}</th>
            {Array.from({ length: years }, (_, i) => <th key={i} scope="col">{g.y(i)}</th>)}
          </tr>
        </thead>
        <tbody>
          {jobs.map((j) => (
            <tr key={j.de + j.area}>
              <th scope="row"><b>{j[lang]}</b><small className="ltr">{j.de}</small><small>{g.area[j.area]}</small><a className="ausb-find" href={jobSearchUrl(j.de)} target="_blank" rel="noopener noreferrer">{g.findPlaces} ↗</a></th>
              <td data-label={g.length}>{g.months(j.months)}</td>
              {Array.from({ length: years }, (_, i) => (
                <td key={i} data-label={g.y(i)}>{j.pay[i] ? (lang === "ar" ? `${fmt(j.pay[i])} يورو` : `€${fmt(j.pay[i])}`) : "-"}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="meta">{g.payNote} <Src href={SRC.bibb} label={`${g.source} (BIBB)`} /></p>
      <p className="meta">{g.findNote}</p>
    </div>
  );
}

export function Steps({ lang }) {
  const g = GUIDE_TEXT[lang];
  return (
    <ol className="pl-steps ausb-steps">
      {STEPS[lang].map(([h, txt], i) => (
        <li key={h}>
          <b>{i + 1}. {h}</b>
          <span>{txt}</span>
          <small><Src href={STEPS.src[i]} label={g.source} /></small>
        </li>
      ))}
    </ol>
  );
}

export function Boards({ lang }) {
  const g = GUIDE_TEXT[lang];
  return (
    <div className="ausb-boards">
      {BOARDS.map((b) => (
        <a key={b.id} className="card ausb-board" href={b.url} target="_blank" rel="noopener noreferrer">
          <b>{b[lang].name}</b>
          <span>{b[lang].text}</span>
          <small>{g.open} ↗</small>
        </a>
      ))}
    </div>
  );
}

export function Programmes({ lang }) {
  const g = GUIDE_TEXT[lang];
  return PROGRAMMES.map((p) => (
    <section key={p.id} className="card ps-card ausb-prog">
      <h3>{p[lang].name}</h3>
      <dl className="ps-dl">{p[lang].rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
      <p className="ps-src"><Src href={p.url} label={g.source} /></p>
    </section>
  ));
}

export function CairoDocs({ lang }) {
  const g = GUIDE_TEXT[lang];
  return (
    <>
      <p>{g.cairoLead}</p>
      <ul className="ausb-check">{CAIRO[lang].map((x) => <li key={x}>{x}</li>)}</ul>
      <p className="ps-src"><Src href={SRC.cairo} label={`${g.source} (PDF)`} /></p>
    </>
  );
}
