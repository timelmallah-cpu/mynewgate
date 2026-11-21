"use client";
// Austria, Very Highly Qualified Workers points guide (70 of 100). Each group is capped at its maximum.
// Nothing is saved; the official calculator and the AMS decide.
import { useState } from "react";
import { AT_POINTS, RTEXT } from "../lib/visaRoutes";

const first = (it) => it.pick[0][0];

export default function AtPointsCheck({ lang, calc }) {
  const t = RTEXT[lang].atp;
  const [v, setV] = useState({});
  const set = (k, x) => setV((s) => ({ ...s, [k]: x }));
  const val = (it) => (it.pick ? Number(v[it.id] ?? first(it)) : v[it.id] ? it.pts : 0);
  const groups = AT_POINTS.map((g) => ({ g, n: Math.min(g.max, g.items.reduce((s, it) => s + val(it), 0)) }));
  const total = groups.reduce((s, x) => s + x.n, 0);
  const good = total >= 70;
  return (
    <section className="card vz-tool" aria-labelledby="atp-h" id="points">
      <h2 id="atp-h">{t.title}</h2>
      {groups.map(({ g, n }) => (
        <fieldset key={g.id} className="pts-set">
          <legend>{g.t[lang]} <span className="meta">({n} / {g.max})</span></legend>
          {g.items.map((it) => it.pick ? (
            <label key={it.id} className="pts-pick">{it.t[lang]}
              <select value={v[it.id] ?? first(it)} onChange={(e) => set(it.id, Number(e.target.value))}>
                {it.pick.map(([p, l], i) => <option key={i} value={p}>{(typeof l === "string" ? l : l[lang])} ({p})</option>)}
              </select>
            </label>
          ) : (
            <label key={it.id} className="pts-row"><input type="checkbox" checked={!!v[it.id]} onChange={(e) => set(it.id, e.target.checked)} /> <span>{it.t[lang]} <b>(+{it.pts})</b></span></label>
          ))}
        </fieldset>
      ))}
      <div className={`vz-result ${good ? "vz-free" : "vz-cond"}`} aria-live="polite">
        <p className="vz-kind">{t.total}: {total} {t.of}</p>
        <p>{good ? t.ok : t.need}</p>
        <p className="vz-links"><a href={calc} target="_blank" rel="noopener noreferrer">{t.calc} ↗</a></p>
      </div>
    </section>
  );
}
