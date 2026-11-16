import Link from "next/link";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import programmes from "../lib/programmes.json";
import { SCHOLARSHIPS } from "../lib/scholarships";
import { AGE_RULES, A30_TEXT, A30_SRC, needsExperience, housingAgeLimit } from "../lib/after30";

const Src = ({ href, children }) => <a href={href} target="_blank" rel="noopener noreferrer">{children} ↗</a>;
const EXP_SCH = ["daad-epos", "si-sisgp"];

export default function After30({ lang }) {
  const t = T[lang];
  const s = A30_TEXT[lang];
  const tx = (p, k) => (lang === "en" && p.en && p.en[k]) || p[k];
  const exp = programmes.filter(needsExperience);
  const housing = programmes.filter(housingAgeLimit);
  const unis = [...new Map(housing.map((p) => [p.university, p])).values()];
  const sch = SCHOLARSHIPS.filter((x) => EXP_SCH.includes(x.id));
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>

      <section className="card">
        <h2>{s.noLimitTitle}</h2>
        {s.noLimit.map((p) => <p key={p}>{p}</p>)}
        <p className="meta"><Src href={A30_SRC.daadAge}>DAAD</Src> · <Src href={A30_SRC.erasmus}>Erasmus+</Src></p>
      </section>

      <h2>{s.rulesTitle}</h2>
      <div className="a30-rules">
        {AGE_RULES.map((r) => (
          <section key={r.en.what} className="card a30-rule">
            <h3><Flag code={r.country} size={18} /> {r[lang].what}</h3>
            <p>{r[lang].rule}{r.check ? s.toCheck : ""}</p>
            {r.src && <p className="meta"><Src href={r.src}>{s.source}</Src></p>}
          </section>
        ))}
      </div>

      {unis.length > 0 && (
        <section className="card">
          <h2>{s.housingTitle}</h2>
          <p>{s.housingLead}</p>
          <ul>{unis.map((p) => <li key={p.university}><Flag code={p.country} size={16} /> <b>{p.university}</b>: {tx(p, "housing")} <Link href={`${t.base}/programme/${p.id}`}>{s.progLink}</Link></li>)}</ul>
        </section>
      )}

      <h2>{s.expTitle}</h2>
      <p>{s.expLead(exp.length)}</p>
      <ul className="a30-list">
        {exp.map((p) => (
          <li key={p.id}>
            <Flag code={p.country} size={16} /> <Link href={`${t.base}/programme/${p.id}`}><b>{p.name}</b></Link> - {p.university}
            <small>{tx(p, "other")}</small>
          </li>
        ))}
      </ul>

      <h2>{s.schTitle}</h2>
      <ul className="a30-list">
        {sch.map((x) => <li key={x.id}><Link href={`${t.base}/scholarships/${x.id}`}><b>{x.name[lang]}</b></Link></li>)}
      </ul>

      <section className="card">
        <h2>{s.familyTitle}</h2>
        {s.family.map((p) => <p key={p}>{p}</p>)}
        <p className="meta"><Src href={A30_SRC.family}>{lang === "ar" ? "وزارة الخارجية الألمانية" : "German Federal Foreign Office"}</Src></p>
      </section>

      <section className="card">
        <h2>{s.moneyTitle}</h2>
        <ul>{s.money.map((p) => <li key={p}>{p}</li>)}</ul>
      </section>

      <section className="card">
        <h2>{s.tipsTitle}</h2>
        <ul>{s.tips.map((p) => <li key={p}>{p}</li>)}</ul>
      </section>

      <p className="pl-actions">{s.links.map(([h, l]) => <Link key={h} className="linkbtn" href={`${t.base}${h}`}>{l}</Link>)}</p>
      <p className="meta">{s.warn}</p>
      <p className="meta">{s.reviewed}</p>
    </>
  );
}
