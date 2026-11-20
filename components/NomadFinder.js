"use client";
// "Which nomad visa fits my income?": monthly income in euros + nationality -> each visa marked fits / below / no figure,
// and nationality limits. Nothing is saved.
import { useState } from "react";
import { NOMADS, NTEXT, nationalityOk } from "../lib/nomadVisas";
import { ORIGINS } from "../lib/visit";

const fmt = (n, lang) => Math.round(n).toLocaleString(lang === "ar" ? "ar-EG-u-nu-latn" : "en-GB");

export default function NomadFinder({ lang, base }) {
  const t = NTEXT[lang];
  const [inc, setInc] = useState("");
  const [o, setO] = useState("");
  const v = Number(String(inc).replace(/[^\d.]/g, ""));
  const sorted = [...ORIGINS].sort((a, b) => a[lang].localeCompare(b[lang], lang));
  const rows = NOMADS.map((n) => {
    const nat = nationalityOk(n, o);
    const fit = n.min == null ? "nofig" : !v ? null : v >= n.min ? "fit" : "below";
    return { n, nat, fit };
  }).sort((a, b) => (a.n.min ?? 1e9) - (b.n.min ?? 1e9));
  return (
    <section className="card vz-tool" aria-labelledby="nm-h">
      <h2 id="nm-h">{t.finder}</h2>
      <div className="vz-form">
        <label>{t.income}
          <input inputMode="numeric" value={inc} onChange={(e) => setInc(e.target.value)} placeholder="3000" className="nm-in" />
        </label>
        <label>{t.nat}
          <select value={o} onChange={(e) => setO(e.target.value)}>
            <option value="">{t.any}</option>
            {sorted.map((x) => <option key={x.c} value={x.c}>{x[lang]}</option>)}
          </select>
        </label>
      </div>
      <ul className="nm-list" aria-live="polite">
        {rows.map(({ n, nat, fit }) => {
          const cls = nat === false ? "vz-banned" : fit === "fit" ? (nat === "check" ? "vz-cond" : "vz-free") : fit === "below" ? "vz-visa" : "vz-cond";
          return (
            <li key={n.id} className={`nm-row ${cls}`}>
              <a href={`${base}/${n.slug}`}><b>{n.name[lang]}</b></a>
              <span className="meta">{n.min != null ? `${fmt(n.min, lang)} €${n.minCheck ? ` (${t.estimate})` : ""}` : "—"}</span>
              <span className="nm-st">
                {nat === false ? t.natNo : fit === "fit" ? t.fits : fit === "below" ? t.noFit : fit === "nofig" ? t.noFig : ""}
                {nat === "check" ? ` · ${t.natCheck}` : ""}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
