import Link from "@/components/Link";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import programmes from "../lib/programmes.json";
import { AS_COUNTRIES, AS_TEXT, AS_SRC, AS_REVIEWED, isUAS } from "../lib/appliedSciences";

const Src = ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children} ↗</a>;

export default function AppliedSciences({ lang }) {
  const t = T[lang];
  const s = AS_TEXT[lang];
  const uas = programmes.filter(isUAS);
  const byCountry = AS_COUNTRIES.map((c) => ({ code: c.code, list: uas.filter((p) => p.country === c.code) })).filter((x) => x.list.length);
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>

      <h2>{s.diffTitle}</h2>
      <div className="ausb-table-wrap">
        <table className="ausb-table fd-table">
          <thead><tr>{s.diffHead.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr></thead>
          <tbody>
            {s.diff.map(([k, a, b]) => (
              <tr key={k}><th scope="row">{k}</th><td data-label={s.diffHead[1]}>{a}</td><td data-label={s.diffHead[2]}>{b}</td></tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="a30-rules">
        <section className="card a30-rule"><h3>{s.whoTitle}</h3><ul>{s.who.map((x) => <li key={x}>{x}</li>)}</ul></section>
        <section className="card a30-rule"><h3>{s.cautionTitle}</h3><ul>{s.caution.map((x) => <li key={x}>{x}</li>)}</ul></section>
      </div>

      <h2>{s.countriesTitle}</h2>
      <div className="as-countries">
        {AS_COUNTRIES.map((c) => {
          const x = c[lang];
          return (
            <section key={c.code} id={`as-${c.code}`} className="card as-country">
              <h3><Flag code={c.code} size={20} /> {t.countries[c.code]}</h3>
              <p className="as-local ltr">{c.local}</p>
              <p>{x.what}{c.check ? s.toCheck : ""}</p>
              <dl className="as-dl">
                {["degrees", "practice", "admit", "fees", "extra"].filter((k) => x[k]).map((k) => (
                  <div key={k} className={k === "extra" ? "as-extra" : ""}><dt>{s.lbl[k]}</dt><dd>{x[k]}</dd></div>
                ))}
              </dl>
              <p className="meta">{s.source}: {c.src.map(([k, label], i) => <span key={k}>{i ? " · " : ""}<Src href={AS_SRC[k]}>{label}</Src></span>)}</p>
            </section>
          );
        })}
      </div>

      <h2>{s.progTitle}</h2>
      <p>{s.progLead(uas.length)}</p>
      {byCountry.map(({ code, list }) => (
        <section key={code} className="as-progs">
          <h3><Flag code={code} size={18} /> {t.countries[code]}</h3>
          <ul className="a30-list">
            {list.map((p) => (
              <li key={p.id}>
                <Link href={`${t.base}/programme/${p.id}`}><b>{(lang === "en" && p.en?.name) || p.name}</b></Link> - {p.university}
                <small>{p.level === "bachelor" ? s.bachelor : s.master}{p.city ? ` · ${(lang === "en" && p.en?.city) || p.city}` : ""}</small>
              </li>
            ))}
          </ul>
        </section>
      ))}

      <section className="card">
        <h2>{s.related}</h2>
        <p className="pl-actions">{s.links.map(([href, label]) => <Link key={href} className="linkbtn" href={`${t.base}${href}`}>{label}</Link>)}</p>
      </section>
      <p className="meta">{s.reviewed} {AS_REVIEWED}</p>
    </>
  );
}
