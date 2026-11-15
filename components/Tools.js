import Link from "next/link";
import { T } from "../lib/i18n";
import { TOOLS, TOOL_ICONS, TOOLS_TEXT } from "../lib/tools";

export function ToolTiles({ lang, homeOnly = false }) {
  const t = T[lang];
  const list = TOOLS[lang].filter((x) => !homeOnly || x.home);
  return (
    <div className="tiles">
      {list.map((x) => (
        <Link key={x.id} className="tile" href={`${t.base}${x.href}`}>
          <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{TOOL_ICONS[x.id]}</svg>
          <b>{x.title}</b>
          <span>{x.text}</span>
        </Link>
      ))}
    </div>
  );
}

export default function Tools({ lang }) {
  const s = TOOLS_TEXT[lang];
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <ToolTiles lang={lang} />
    </>
  );
}
