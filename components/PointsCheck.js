"use client";
// Opportunity Card points guide (Germany, § 20a AufenthG). Nothing is saved; the official self-check decides.
import { useState } from "react";
import { CK_POINTS, RTEXT } from "../lib/visaRoutes";

export default function PointsCheck({ lang, selfCheck }) {
  const t = RTEXT[lang].pts;
  const [v, setV] = useState({});
  const [base, setBase] = useState({ qual: false, lang: false, money: false, full: false });
  const set = (k, x) => setV((s) => ({ ...s, [k]: x }));
  const total = CK_POINTS.reduce((n, p) => n + (p.pick ? Number(v[p.id] ?? p.pick[0][0]) : v[p.id] ? p.pts : 0), 0);
  const missing = [["qual", t.qual], ["lang", t.lang], ["money", t.money]].filter(([k]) => !base[k]).map(([, l]) => l);
  let msg;
  if (base.full) msg = base.money ? t.fullOk : `${t.miss} ${t.money}`;
  else if (missing.length) msg = `${t.miss} ${missing.join(lang === "ar" ? "، " : ", ")}`;
  else msg = total >= 6 ? t.ok : t.need;
  const good = base.full ? base.money : !missing.length && total >= 6;
  return (
    <section className="card vz-tool" aria-labelledby="pts-h">
      <h2 id="pts-h">{t.title}</h2>
      <fieldset className="pts-set">
        <legend>{t.basic}</legend>
        {[["full", t.full], ["qual", t.qual], ["lang", t.lang], ["money", t.money]].map(([k, l]) => (
          <label key={k} className="pts-row"><input type="checkbox" checked={base[k]} onChange={(e) => setBase((s) => ({ ...s, [k]: e.target.checked }))} /> <span>{l}</span></label>
        ))}
      </fieldset>
      {!base.full && (
        <div className="pts-list">
          {CK_POINTS.map((p) => p.pick ? (
            <label key={p.id} className="pts-pick">{p.t[lang]}
              <select value={v[p.id] ?? p.pick[0][0]} onChange={(e) => set(p.id, Number(e.target.value))}>
                {p.pick.map(([n, l]) => <option key={n} value={n}>{(typeof l === "string" ? l : l[lang])} ({n})</option>)}
              </select>
            </label>
          ) : (
            <label key={p.id} className="pts-row"><input type="checkbox" checked={!!v[p.id]} onChange={(e) => set(p.id, e.target.checked)} /> <span>{p.t[lang]} <b>(+{p.pts})</b></span></label>
          ))}
        </div>
      )}
      <div className={`vz-result ${good ? "vz-free" : "vz-cond"}`} aria-live="polite">
        {!base.full && <p className="vz-kind">{t.total}: {total} {lang === "ar" ? "(الحد الأدنى 6)" : "(minimum 6)"}</p>}
        <p>{msg}</p>
        <p className="vz-links"><a href={selfCheck} target="_blank" rel="noopener noreferrer">{t.self} ↗</a></p>
      </div>
    </section>
  );
}
