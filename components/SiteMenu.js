"use client";
// The header menu: on wide screens a "All tools" panel, on phones the whole menu. Grouped by the student's journey.
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { TOOLS, TOOL_ICONS } from "../lib/tools";
import { STEPS, ALWAYS, ALWAYS_TEXT } from "../lib/journey";
import { MENU } from "../lib/homeText";

export default function SiteMenu({ lang, base }) {
  const m = MENU[lang];
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const ref = useRef(null);
  useEffect(() => { setOpen(false); }, [path]);
  useEffect(() => {
    if (!open) return;
    const key = (e) => { if (e.key === "Escape") setOpen(false); };
    const click = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("keydown", key);
    document.addEventListener("mousedown", click);
    return () => { document.removeEventListener("keydown", key); document.removeEventListener("mousedown", click); };
  }, [open]);
  const tool = (id) => TOOLS[lang].find((x) => x.id === id);
  const item = (id) => {
    const x = tool(id);
    return x && <li key={id}><Link href={`${base}${x.href}`}><svg viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{TOOL_ICONS[id]}</svg>{x.title}</Link></li>;
  };

  return (
    <div className="site-menu" ref={ref}>
      <button type="button" className="menu-btn" aria-expanded={open} aria-controls="site-menu-panel" onClick={() => setOpen((o) => !o)}>
        <span className="menu-wide">{m.all}</span>
        <svg className="menu-icon" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
        <span className="sr-only">{open ? m.close : m.menu}</span>
      </button>
      {open && (
        <div id="site-menu-panel" className="menu-panel">
          <ul className="menu-main">
            <li><Link href={`${base}/quiz`}>{m.programmes}</Link></li>
            <li><Link href={`${base}/scholarships`}>{m.scholarships}</Link></li>
            <li><Link href={`${base}/countries`}>{m.countries}</Link></li>
            <li><Link href={`${base}/ausbildung`}>{m.voc}</Link></li>
            <li><Link href={`${base}/my-list`}>{m.list}</Link></li>
          </ul>
          <div className="menu-groups">
            {STEPS.map((st, i) => (
              <div key={st.id}>
                <h2><i>{i + 1}</i>{st[lang].title}</h2>
                <ul>{st.tools.map(item)}</ul>
              </div>
            ))}
            <div>
              <h2>{ALWAYS_TEXT[lang]}</h2>
              <ul>{ALWAYS.map(item)}</ul>
            </div>
          </div>
          <p className="menu-foot"><Link href={`${base}/tools`}>{m.toolsPage}</Link> · <Link href={`${base}/contact`}>{m.contact}</Link></p>
        </div>
      )}
    </div>
  );
}
