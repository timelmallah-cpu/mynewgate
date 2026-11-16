"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { COUNTRY_IDS } from "../lib/options";
import { VISA, VISA_TEXT, hasVisaRoute } from "../lib/embassy";
import { ARAB } from "../lib/scholarships";
import { useOrigin, setOrigin, originIds } from "./Origin";

export default function Visa({ lang }) {
  const t = T[lang];
  const s = VISA_TEXT[lang];
  const [origin, loaded] = useOrigin();
  const [from, setFrom] = useState("eg");
  const [to, setTo] = useState("de");
  const fromUrl = useRef(false);
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (COUNTRY_IDS.includes(q.get("to"))) setTo(q.get("to"));
    if (ARAB[q.get("from")]) { setFrom(q.get("from")); fromUrl.current = true; }
  }, []);
  // Start from the visitor's saved country unless the link names one.
  useEffect(() => { if (loaded && origin && !fromUrl.current) setFrom(origin); }, [loaded, origin]);
  useEffect(() => { window.history.replaceState(null, "", `?from=${from}&to=${to}`); }, [from, to]);
  const pickFrom = (v) => { setFrom(v); fromUrl.current = false; setOrigin(v); };
  const v = VISA[to];
  const r = hasVisaRoute(to, from) ? v[from] : null;
  const readyFor = COUNTRY_IDS.filter((c) => hasVisaRoute(c, from));
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <p><Link className="ctx-link" href={`${T[lang].base}/glossary`}>{lang === "ar" ? "هل هناك مصطلح غير واضح؟ راجع قاموس المصطلحات" : "A word you don't understand? See the glossary"}</Link></p>
      <div className="card ec-form">
        <label className="ec-field"><span>{s.from}</span>
          <select value={from} onChange={(e) => pickFrom(e.target.value)}>
            {originIds(lang).map((c) => <option key={c} value={c}>{ARAB[c][lang]}</option>)}
          </select>
        </label>
        <label className="ec-field"><span>{s.to}</span>
          <select value={to} onChange={(e) => setTo(e.target.value)}>
            {COUNTRY_IDS.map((c) => <option key={c} value={c}>{t.countries[c]}{hasVisaRoute(c, from) ? "" : " *"}</option>)}
          </select>
        </label>
        <p className="meta">{readyFor.length ? `${s.ready} ${ARAB[from][lang]}: ${readyFor.length} / ${COUNTRY_IDS.length}. ${lang === "ar" ? "النجمة (*) تعني أننا نعرض الطريقة العامة فقط." : "An asterisk (*) means we show the general route only."}` : s.readyNone}</p>
      </div>
      {v && (
        <section className="card visa-card" aria-live="polite">
          <h2><Flag code={to} size={24} /> {t.countries[to]}</h2>
          {r ? (
            <>
              <h3>{s.where}</h3>
              <p>{r.where[lang]}</p>
              <h3>{s.steps}</h3>
              <ol className="visa-steps">{r.steps[lang].map((x) => <li key={x}>{x}</li>)}</ol>
              {r.note && <div className="notice"><b>{s.note}:</b> {r.note[lang]}</div>}
              <p className="pl-actions">
                {r.book && <a className="btn gold small" href={r.book} target="_blank" rel="noopener noreferrer">{s.book} ↗</a>}
                <a className="btn ghost small" href={r.src} target="_blank" rel="noopener noreferrer">{s.source} ↗</a>
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
