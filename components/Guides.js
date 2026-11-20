// Practical guides: first week after arrival, parents, Muslim student life, scam check.
import Link from "@/components/Link";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { ARRIVAL, ARRIVAL_REVIEWED } from "../lib/arrival";
import { REGISTERS, GUIDE_TEXT } from "../lib/guides";
import ScamChecklist from "./ScamChecklist";

const ext = { target: "_blank", rel: "noopener noreferrer" };
const REVIEWED = "2026-11-20";

function Registers({ lang }) {
  const t = T[lang];
  return (
    <ul className="gd-list">
      {REGISTERS.map((r) => (
        <li key={r.c}><Flag code={r.c} size={14} /> <b>{t.countries[r.c]}:</b> <a href={r.url} {...ext}>{r.name[lang]}</a>{r.note ? <small> — {r.note[lang]}</small> : null}</li>
      ))}
    </ul>
  );
}

export function FirstWeek({ lang }) {
  const t = T[lang];
  const s = GUIDE_TEXT[lang];
  return (
    <>
      <h1>{s.first.title}</h1>
      <p className="lead">{s.first.lead}</p>
      <nav className="pm-tabs" aria-label={s.first.title}>
        {Object.keys(ARRIVAL).map((c) => <a key={c} className="chip" href={`#fw-${c}`}><Flag code={c} size={12} /> {t.countries[c]}</a>)}
      </nav>
      {Object.entries(ARRIVAL).map(([c, steps]) => (
        <section key={c} id={`fw-${c}`} className="card gd-card">
          <h2><Flag code={c} size={18} /> {t.countries[c]}</h2>
          <ol className="gd-steps">
            {steps.map((x) => (
              <li key={x.t.en}><b>{x.t[lang]}</b><p>{x.d[lang]}</p><small><a href={x.src} {...ext}>{s.first.src}</a></small></li>
            ))}
          </ol>
        </section>
      ))}
      <p className="meta">{s.first.other} {s.reviewed(ARRIVAL_REVIEWED)}</p>
    </>
  );
}

export function Parents({ lang }) {
  const base = lang === "en" ? "/en" : "";
  const s = GUIDE_TEXT[lang].parents;
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <section className="card gd-card"><h2>{s.costT}</h2><p>{s.cost}</p>
        <p className="row-btns">{s.costLinks.map(([h, l]) => <Link key={h} className="btn ghost small" href={`${base}${h}`}>{l}</Link>)}</p></section>
      <section className="card gd-card"><h2>{s.proofT}</h2><p>{s.proof} <Link href={`${base}/visa`}>{s.visa}</Link></p>
        <h3>{s.blockedT}</h3><p>{s.blocked} <a href={s.blockedSrc} {...ext}>{lang === "ar" ? "المصدر" : "Source"}</a></p></section>
      <section className="card gd-card"><h2>{s.payT}</h2><ul>{s.pay.map((x) => <li key={x}>{x}</li>)}</ul></section>
      <section className="card gd-card"><h2>{s.verifyT}</h2><p>{s.verify}</p><Registers lang={lang} /></section>
      <p className="meta">{GUIDE_TEXT[lang].reviewed(REVIEWED)}</p>
    </>
  );
}

export function MuslimLife({ lang }) {
  const s = GUIDE_TEXT[lang].muslim;
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <section className="card gd-card"><h2>{s.ramadanT}</h2><p>{s.ramadan} <a href={s.ramadanSrc} {...ext}>{lang === "ar" ? "المصدر" : "Source"}</a></p></section>
      <section className="card gd-card"><h2>{s.prayT}</h2><ul>{s.pray.map((x) => <li key={x}>{x}</li>)}</ul></section>
      <section className="card gd-card"><h2>{s.foodT}</h2><ul>{s.food.map((x) => <li key={x}>{x}</li>)}</ul></section>
      <p className="meta">{s.note} {GUIDE_TEXT[lang].reviewed(REVIEWED)}</p>
    </>
  );
}

export function CheckOffer({ lang }) {
  const base = lang === "en" ? "/en" : "";
  const s = GUIDE_TEXT[lang].check;
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <ScamChecklist lang={lang} />
      <section className="card gd-card"><h2>{s.steps}</h2><ol>{s.stepList.map((x) => <li key={x}>{x}</li>)}</ol></section>
      <section className="card gd-card"><h2>{s.registers}</h2><Registers lang={lang} />
        <p className="row-btns"><Link className="btn ghost small" href={`${base}/search`}>{s.ours}</Link> <Link className="btn ghost small" href={`${base}/housing`}>{s.housing}</Link></p></section>
      <p className="meta">{GUIDE_TEXT[lang].reviewed(REVIEWED)}</p>
    </>
  );
}
