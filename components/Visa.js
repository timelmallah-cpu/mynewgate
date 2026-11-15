"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { COUNTRY_IDS } from "../lib/options";
import { VISA, ORIGINS, VISA_TEXT } from "../lib/embassy";

export default function Visa({ lang }) {
  const t = T[lang];
  const s = VISA_TEXT[lang];
  const [from, setFrom] = useState("eg");
  const [to, setTo] = useState("de");
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (COUNTRY_IDS.includes(q.get("to"))) setTo(q.get("to"));
    if (ORIGINS.some((o) => o.id === q.get("from"))) setFrom(q.get("from"));
  }, []);
  useEffect(() => { window.history.replaceState(null, "", `?from=${from}&to=${to}`); }, [from, to]);
  const v = VISA[to];
  const eg = from === "eg" ? v?.eg : null;
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <p><Link className="ctx-link" href={`${T[lang].base}/glossary`}>{lang === "ar" ? "في كلمة مش فاهمها؟ شوف قاموس الكلمات الغريبة" : "A word you don't understand? See the glossary"}</Link></p>
      <div className="card ec-form">
        <label className="ec-field"><span>{s.from}</span>
          <select value={from} onChange={(e) => setFrom(e.target.value)}>
            {ORIGINS.map((o) => <option key={o.id} value={o.id}>{o[lang]}</option>)}
          </select>
        </label>
        <label className="ec-field"><span>{s.to}</span>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {COUNTRY_IDS.map((c) => <option key={c} value={c}>{t.countries[c]}</option>)}
          </select>
        </label>
      </div>
      {v && (
        <section className="card visa-card" aria-live="polite">
          <h2><Flag code={to} size={24} /> {t.countries[to]}</h2>
          {eg ? (
            <>
              <h3>{s.where}</h3>
              <p>{eg.where[lang]}</p>
              <h3>{s.steps}</h3>
              <ol className="visa-steps">{eg.steps[lang].map((x) => <li key={x}>{x}</li>)}</ol>
              <div className="notice"><b>{s.note}:</b> {eg.note[lang]}</div>
              <p className="pl-actions">
                <a className="btn gold small" href={eg.book} target="_blank" rel="noopener noreferrer">{s.book} ↗</a>
                <a className="btn ghost small" href={eg.src} target="_blank" rel="noopener noreferrer">{s.source} ↗</a>
              </p>
              <h3>{s.general}</h3>
              <p className="meta">{v.general[lang]}</p>
            </>
          ) : (
            <>
              <h3>{s.general}</h3>
              <p>{v.general[lang]}</p>
              <div className="notice">{s.otherNote}</div>
            </>
          )}
          <p className="pl-actions">
            <a className="linkbtn" href={v.generalSrc} target="_blank" rel="noopener noreferrer">{s.portal} ↗</a>
            <Link className="linkbtn" href={`${t.base}/country/${to}`}>{s.country}</Link>
          </p>
        </section>
      )}
      <p className="meta">{s.warn}</p>
      <p className="meta">{s.reviewed}</p>
    </>
  );
}
