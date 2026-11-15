import Link from "next/link";
import { T } from "../lib/i18n";
import { TOOLS, TOOL_ICONS, TOOLS_TEXT } from "../lib/tools";
import { STEPS, ALWAYS, ALWAYS_TEXT } from "../lib/journey";
import { HOME } from "../lib/homeText";

function Tile({ x, base }) {
  return (
    <Link className="tile" href={`${base}${x.href}`}>
      <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{TOOL_ICONS[x.id]}</svg>
      <b>{x.title}</b>
      <span>{x.text}</span>
    </Link>
  );
}

export function ToolTiles({ lang, homeOnly = false, ids = null }) {
  const t = T[lang];
  const list = ids ? ids.map((id) => TOOLS[lang].find((x) => x.id === id)).filter(Boolean) : TOOLS[lang].filter((x) => !homeOnly || x.home);
  return <div className="tiles">{list.map((x) => <Tile key={x.id} x={x} base={t.base} />)}</div>;
}

export default function Tools({ lang }) {
  const s = TOOLS_TEXT[lang];
  const h = HOME[lang];
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <nav className="tool-jump" aria-label={s.title}>
        {STEPS.map((st, i) => <a key={st.id} href={`#${st.id}`}><i>{i + 1}</i>{st[lang].title}</a>)}
      </nav>
      {STEPS.map((st, i) => (
        <section key={st.id} id={st.id} className="tool-step">
          <h2><span className="step-key small" aria-hidden="true"><i>{i + 1}</i></span>{st[lang].title}</h2>
          <p className="note">{st[lang].text}</p>
          <ToolTiles lang={lang} ids={st.tools} />
        </section>
      ))}
      <section id="always" className="tool-step">
        <h2>{ALWAYS_TEXT[lang]}</h2>
        <ToolTiles lang={lang} ids={ALWAYS} />
      </section>
      <p className="note">{h.journeyLead}</p>
    </>
  );
}
