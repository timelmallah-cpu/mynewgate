"use client";
import { useEffect, useState } from "react";
import { DOCS_COMMON, DOCS_EXTRA, GUIDE_TEXT } from "../lib/guide";
import { useOrigin } from "./Origin";
import { LOCAL_ORIGIN } from "../lib/localOrigins";

const KEY = "mng-docs-v1";

export default function DocsChecklist({ lang, countries, initial = "de" }) {
  const s = GUIDE_TEXT[lang];
  const [country, setCountry] = useState(initial);
  const [done, setDone] = useState({});
  useEffect(() => {
    try { setDone(JSON.parse(localStorage.getItem(KEY) || "{}")); } catch {}
    const m = window.location.search.match(/[?&]country=([a-z]{2})/);
    if (m && countries.some(([c]) => c === m[1])) setCountry(m[1]);
  }, []);
  const save = (d) => { setDone(d); try { localStorage.setItem(KEY, JSON.stringify(d)); } catch {} };

  const [origin] = useOrigin();
  const own = LOCAL_ORIGIN[origin]?.guide.docs[country];
  const extra = own ? [own] : DOCS_EXTRA[country] || [];
  const all = [...DOCS_COMMON.map((x, i) => [`c${i}`, x]), ...extra.map((x, i) => [`${country}${i}`, x])];
  const count = all.filter(([k]) => done[k]).length;
  const name = countries.find(([c]) => c === country)?.[1];

  const item = ([k, x]) => (
    <li key={k}>
      <label>
        <input type="checkbox" checked={!!done[k]} onChange={(e) => save({ ...done, [k]: e.target.checked })} />
        <span>{x[lang]}</span>
      </label>
    </li>
  );

  return (
    <div className="card docs">
      <label className="docs-pick">
        <span>{s.pick}</span>
        <select value={country} onChange={(e) => setCountry(e.target.value)}>
          {countries.map(([c, n]) => <option key={c} value={c}>{n}</option>)}
        </select>
      </label>
      <p className="docs-count" aria-live="polite">{s.done(count, all.length)}</p>
      <h3>{s.common}</h3>
      <ul className="docs-list">{all.slice(0, DOCS_COMMON.length).map(item)}</ul>
      <h3>{s.extra(name)}</h3>
      {extra.length ? <ul className="docs-list">{all.slice(DOCS_COMMON.length).map(item)}</ul> : <p className="meta">{s.noExtra}</p>}
      <button type="button" className="btn ghost small" onClick={() => save({})}>{s.reset}</button>
    </div>
  );
}
