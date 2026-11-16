"use client";
// Shows the visitor's own country's legalisation guide when we have one; otherwise the Egypt guide (children).
import { useState } from "react";
import { useOrigin } from "./Origin";
import { LEGAL_ORIGIN, LEGAL_ORIGIN_UI } from "../lib/legalisationOrigins";

export default function LegalisationOrigin({ lang, children }) {
  const [o] = useOrigin();
  const [showEg, setShowEg] = useState(false);
  const g = LEGAL_ORIGIN[o];
  if (!g || showEg) return children;
  const s = g[lang];
  const u = LEGAL_ORIGIN_UI[lang];
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <section className="card legal-apostille">
        <h2>{s.apostilleTitle}</h2>
        <p>{s.apostille}</p>
      </section>
      <h2>{u.steps}</h2>
      <ol className="legal-steps">
        {s.steps.map(([h, d]) => <li key={h}><strong>{h}</strong><span>{d}</span></li>)}
      </ol>
      <p className="tool-strip">
        {g.links.map(([href, l]) => <a key={href} className="btn" href={href} target="_blank" rel="noopener noreferrer">{l[lang]} ↗</a>)}
      </p>
      <h2>{u.translate}</h2>
      <ul>{s.translate.map((x) => <li key={x}>{x}</li>)}</ul>
      <h2>{u.tips}</h2>
      <ul>{s.tips.map((x) => <li key={x}>{x}</li>)}</ul>
      <h2>{u.check}</h2>
      <ul className="letter-check">
        {s.check.map((x) => <li key={x}><label><input type="checkbox" /> {x}</label></li>)}
      </ul>
      <h2>{u.src}</h2>
      <ul className="note">{g.src.map((x) => <li key={x.url}><a href={x.url} target="_blank" rel="noopener noreferrer"><bdi>{lang === "ar" ? x.name : x.en}</bdi></a></li>)}</ul>
      <p className="note">{u.disclaimer}</p>
      <p className="note">{u.reviewed}</p>
      <p><button type="button" className="linkbtn" onClick={() => { setShowEg(true); window.scrollTo(0, 0); }}>{u.showEg}</button></p>
    </>
  );
}
