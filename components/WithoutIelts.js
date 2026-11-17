import Link from "@/components/Link";
import programmes from "../lib/programmes.json";
import { T } from "../lib/i18n";
import Flag from "../lib/Flag";
import { ENGLISH_ALT, ALT_TEXT, ALT_REVIEWED } from "../lib/englishAlt";

const Status = ({ v, s }) => <span className={`alt-st alt-${v ?? "null"}`}>{s.st[v ?? "null"]}</span>;

function UniCard({ name, a, lang }) {
  const t = T[lang];
  const s = ALT_TEXT[lang];
  const list = programmes.filter((p) => p.university === name);
  const country = list[0]?.country;
  const levels = [...new Set(list.map((p) => p.level))].filter((l) => l !== "doctorate");
  return (
    <div className="card alt-card">
      <h3>{country && <Flag code={country} />} <bdi>{name}</bdi></h3>
      <table className="alt-table">
        <thead><tr><th></th><th>{s.duo}</th><th>{s.moi}</th></tr></thead>
        <tbody>
          {levels.map((l) => {
            const k = l === "bachelor" ? "b" : "m";
            return (
              <tr key={l}>
                <th>{s[l]}</th>
                <td><Status v={a.duo[k]} s={s} />{a.duo[k] === "yes" && a.duoMin && <small> {s.min(a.duoMin)}</small>}</td>
                <td><Status v={a.moi[k]} s={s} /></td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="note">{a.note[lang]}</p>
      <details>
        <summary>{s.progs(list.length)}</summary>
        <ul>{list.map((p) => <li key={p.id}><Link href={`${t.base}/programme/${p.id}`}><bdi>{p.name}</bdi></Link></li>)}</ul>
      </details>
      <p className="note"><a href={a.src} target="_blank" rel="noopener noreferrer">{s.src} ↗</a></p>
    </div>
  );
}

export default function WithoutIelts({ lang }) {
  const s = ALT_TEXT[lang];
  const entries = Object.entries(ENGLISH_ALT).filter(([n]) => programmes.some((p) => p.university === n));
  const good = entries.filter(([, a]) => [a.duo.b, a.duo.m, a.moi.b, a.moi.m].some((v) => v === "yes" || v === "case"));
  const bad = entries.filter((e) => !good.includes(e));
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <section className="card">
        <h2>{s.what}</h2>
        <p>{s.duoDef}</p>
        <p>{s.moiDef}</p>
      </section>
      <div className="notice">{s.warn}</div>
      <h2>{s.yesTitle}</h2>
      <div className="alt-grid">{good.map(([n, a]) => <UniCard key={n} name={n} a={a} lang={lang} />)}</div>
      {bad.length > 0 && (
        <>
          <h2>{s.noTitle}</h2>
          <div className="alt-grid">{bad.map(([n, a]) => <UniCard key={n} name={n} a={a} lang={lang} />)}</div>
        </>
      )}
      <p className="note">{s.reviewed}: {ALT_REVIEWED}</p>
    </>
  );
}
