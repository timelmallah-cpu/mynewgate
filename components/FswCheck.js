"use client";
// Canada, Federal Skilled Worker 67-point grid (not the CRS). Nothing is saved; IRCC decides.
import { useState } from "react";
import { FSW_GRID as G, RTEXT } from "../lib/visaRoutes";

export default function FswCheck({ lang, calc }) {
  const t = RTEXT[lang].fsw;
  const L = (x) => (typeof x === "string" ? x : x[lang]);
  const [v, setV] = useState({ l1: 16, l2: false, edu: 21, exp: 9, age: 30, job: false, ad: {} });
  const set = (k, x) => setV((s) => ({ ...s, [k]: x }));
  const low = v.l1 === 0;
  const adapt = Math.min(10, G.adapt.reduce((n, [id, p]) => n + (v.ad[id] ? p : 0), 0));
  const ageN = Number(v.age) || 0;
  const total = low ? 0 : v.l1 + (v.l2 ? 4 : 0) + v.edu + v.exp + G.age(ageN) + (v.job ? 10 : 0) + adapt;
  const good = !low && total >= 67;
  return (
    <section className="card vz-tool" aria-labelledby="fsw-h" id="points">
      <h2 id="fsw-h">{t.title}</h2>
      <fieldset className="pts-set">
        <legend>{t.lang1}</legend>
        <label className="pts-pick">{t.lang1}
          <select value={v.l1} onChange={(e) => set("l1", Number(e.target.value))}>
            {G.lang1.map(([p, l]) => <option key={p} value={p}>{l} ({p})</option>)}
            <option value={0}>{t.none}</option>
          </select>
        </label>
        <label className="pts-row"><input type="checkbox" checked={v.l2} onChange={(e) => set("l2", e.target.checked)} /> <span>{t.lang2}</span></label>
      </fieldset>
      <fieldset className="pts-set">
        <legend>{t.edu}</legend>
        <label className="pts-pick">{t.edu}
          <select value={v.edu} onChange={(e) => set("edu", Number(e.target.value))}>
            {G.edu.map(([p, l]) => <option key={p} value={p}>{L(l)} ({p})</option>)}
          </select>
        </label>
        <label className="pts-pick">{t.exp}
          <select value={v.exp} onChange={(e) => set("exp", Number(e.target.value))}>
            {G.exp.map(([p, l]) => <option key={p} value={p}>{L(l)} ({p})</option>)}
          </select>
        </label>
        <label className="pts-pick">{t.age} ({G.age(ageN)})
          <input type="number" min="16" max="70" inputMode="numeric" value={v.age} onChange={(e) => set("age", e.target.value)} />
        </label>
        <label className="pts-row"><input type="checkbox" checked={v.job} onChange={(e) => set("job", e.target.checked)} /> <span>{t.job}</span></label>
      </fieldset>
      <fieldset className="pts-set">
        <legend>{t.adapt} <span className="meta">({adapt} / 10)</span></legend>
        {G.adapt.map(([id, p, l]) => (
          <label key={id} className="pts-row"><input type="checkbox" checked={!!v.ad[id]} onChange={(e) => set("ad", { ...v.ad, [id]: e.target.checked })} /> <span>{L(l)} <b>(+{p})</b></span></label>
        ))}
      </fieldset>
      <div className={`vz-result ${good ? "vz-free" : "vz-cond"}`} aria-live="polite">
        <p className="vz-kind">{t.total}: {total} {t.of}</p>
        <p>{low ? t.low : good ? t.ok : t.need}</p>
        <p className="vz-links"><a href={calc} target="_blank" rel="noopener noreferrer">{t.calc} ↗</a></p>
      </div>
    </section>
  );
}
