"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import programmes from "../lib/programmes.json";
import Flag from "../lib/Flag";
import { T, view } from "../lib/i18n";
import { FIELD_IDS, COUNTRY_IDS, BUDGETS, DURATIONS, match, feeLabel } from "../lib/options";

export default function Quiz({ lang }) {
  const t = T[lang];
  const STEPS = [
    { key: "countries", q: t.qCountries, opts: COUNTRY_IDS.map((id) => ({ id, label: t.countries[id] })), multi: true },
    { key: "field", q: t.qField, opts: [...FIELD_IDS.map((id) => ({ id, label: t.fields[id] })), { id: "any", label: t.anyField }] },
    { key: "budget", q: t.qBudget, opts: BUDGETS.map((b) => ({ id: b.id, label: t.budgets[b.id] })) },
    { key: "duration", q: t.qDuration, opts: DURATIONS.map((d) => ({ id: d.id, label: t.durations[d.id] })) },
  ];

  const [step, setStep] = useState(0);
  const [a, setA] = useState({ countries: [] });
  const done = step >= STEPS.length;
  const results = useMemo(() => (done ? match(programmes, a).map((p) => view(p, lang)) : []), [done, a, lang]);
  const known = results.filter((p) => p.feePerYear !== null);
  const unknown = results.filter((p) => p.feePerYear === null);

  if (done) {
    return (
      <>
        <h2>{t.found(results.length)}</h2>
        <p className="meta">{t.sortNote}</p>
        {results.length === 0 && <div className="notice">{t.none}</div>}
        {known.map((p) => <Card key={p.id} p={p} lang={lang} />)}
        {unknown.length > 0 && (
          <>
            <h2 className="section-title">{t.unknownTitle(unknown.length)}</h2>
            <div className="notice">{t.unknownNote}</div>
            {unknown.map((p) => <Card key={p.id} p={p} lang={lang} />)}
          </>
        )}
        <button className="btn ghost" onClick={() => { setStep(0); setA({ countries: [] }); }}>
          {t.restart}
        </button>
      </>
    );
  }

  const s = STEPS[step];
  const val = a[s.key];
  const chosen = (id) => (s.multi ? val.includes(id) : val === id);
  const pick = (id) =>
    setA({ ...a, [s.key]: s.multi ? (val.includes(id) ? val.filter((x) => x !== id) : [...val, id]) : id });
  const ready = s.multi ? val.length > 0 : val !== undefined;

  return (
    <>
      <div className="steps" aria-hidden="true">
        {STEPS.map((_, i) => <span key={i} className={i < step ? "on" : i === step ? "now" : ""} />)}
      </div>
      <p className="meta">{t.step(step + 1, STEPS.length)}</p>
      <h2>{s.q}</h2>
      <div className={s.opts.length > 4 ? "options two" : "options"}>
        {s.opts.map((o) => (
          <button key={o.id} className="opt" aria-pressed={chosen(o.id)} onClick={() => pick(o.id)}>
            {s.key === "countries" && <Flag code={o.id} />}
            {o.label}
            <span className="tick">✓</span>
          </button>
        ))}
      </div>
      <div className="quiz-actions">
        <button className="btn" disabled={!ready} onClick={() => setStep(step + 1)}>
          {step === STEPS.length - 1 ? t.showResults : t.next}
        </button>
        {step > 0 && <button className="btn ghost" onClick={() => setStep(step - 1)}>{t.back}</button>}
      </div>
    </>
  );
}

function Card({ p, lang }) {
  const t = T[lang];
  const i = p.other.indexOf(t.warnWord);
  const warning = i >= 0 ? p.other.slice(i) : null;
  const known = p.feePerYear !== null && p.feePerYear > 0;
  return (
    <Link className="result" href={`${t.base}/programme/${p.id}`}>
      <div className="name ltr">{p.name}</div>
      <div className="fee">
        {known ? (
          <>
            <span className="amount ltr">€{p.feePerYear.toLocaleString("en-US")}</span>
            <span className="per">{t.perYear}{p.feeNeedsCheck ? t.toCheck : ""}</span>
          </>
        ) : (
          <span className={p.feePerYear === null ? "amount unknown" : "amount"}>{feeLabel(p, lang)}</span>
        )}
      </div>
      <div className="where">
        <span><Flag code={p.country} size={18} /> {p.countryLabel}</span>
        <span>{t.city} {p.city}</span>
        <span className="ltr">{p.university}</span>
      </div>
      <div className="facts">
        <span><b>{t.keyDuration}:</b> {p.duration}</span>
        <span><b>{t.deadline}</b> {p.deadline}</span>
      </div>
      {warning && <p className="warnline">{warning}</p>}
      <span className="more">{t.details}</span>
    </Link>
  );
}
