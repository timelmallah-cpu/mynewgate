"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { T } from "../lib/i18n";
import { GPA_TEXT, GPA_SRC } from "../lib/gpaText";

const num = (x) => parseFloat(String(x).replace(",", "."));

// Modified Bavarian formula: 1 + 3 × (Nmax − Nd) / (Nmax − Nmin). Works for scales where the best grade is the smallest number too.
export function germanGrade(max, min, grade) {
  if (max === min) return { err: "same" };
  const lo = Math.min(max, min), hi = Math.max(max, min);
  if (grade < lo || grade > hi) return { err: "range" };
  return { value: 1 + (3 * (max - grade)) / (max - min) };
}

export default function Gpa({ lang }) {
  const t = T[lang];
  const s = GPA_TEXT[lang];
  const [max, setMax] = useState("");
  const [min, setMin] = useState("");
  const [grade, setGrade] = useState("");

  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (q.get("max")) setMax(q.get("max"));
    if (q.get("min")) setMin(q.get("min"));
    if (q.get("grade")) setGrade(q.get("grade"));
  }, []);

  const ready = [max, min, grade].every((x) => x !== "" && !Number.isNaN(num(x)));
  const r = ready ? germanGrade(num(max), num(min), num(grade)) : null;

  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <div className="card gpa-card">
        <fieldset className="ec-tests">
          <legend>{s.scale}</legend>
          {s.presets.map(([v, label]) => (
            <label key={v} className={`chip${max === v ? " on" : ""}`}><input type="radio" name="scale" value={v} checked={max === v} onChange={() => setMax(v)} />{label}</label>
          ))}
        </fieldset>
        <div className="ec-form">
          <label className="ec-field">{s.max}<input inputMode="decimal" value={max} onChange={(e) => setMax(e.target.value)} /><small className="note">{s.maxHint}</small></label>
          <label className="ec-field">{s.min}<input inputMode="decimal" value={min} onChange={(e) => setMin(e.target.value)} /><small className="note">{s.minHint}</small></label>
          <label className="ec-field">{s.grade}<input inputMode="decimal" value={grade} onChange={(e) => setGrade(e.target.value)} /><small className="note">{s.gradeHint}</small></label>
        </div>
        <div aria-live="polite">
          {r?.err && <p className="notice">{r.err === "same" ? s.errSame : s.errRange}</p>}
          {r?.value !== undefined && (
            <div className="gpa-result">
              <span>{s.result}</span>
              <strong className="ltr">{r.value.toFixed(2)}</strong>
              <small className="note">{s.scaleNote}</small>
            </div>
          )}
        </div>
      </div>
      <section>
        <h2>{s.formulaTitle}</h2>
        <p>{s.formula}</p>
        <p className="note">{s.example}</p>
        <p className="ltr gpa-eq" dir="ltr">{s.exampleEq}</p>
      </section>
      <section className="notice">
        <strong>{s.warnTitle}</strong>
        <ul>{s.warn.map((w, i) => <li key={i}>{w}</li>)}</ul>
      </section>
      <p><Link className="btn ghost small" href={`${t.base}/country/de`}>{s.more}</Link></p>
      <div className="note"><p>{s.sources}:</p><ul>{GPA_SRC.map((x) => <li key={x.url}><a href={x.url} target="_blank" rel="noopener noreferrer"><bdi>{x.name}</bdi></a></li>)}</ul></div>
    </>
  );
}
