"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "@/components/Link";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { LEVEL_IDS, FIELD_IDS, BA_FIELD_IDS, COUNTRY_IDS, BUDGETS } from "../lib/options";
import { EL_TEXT } from "../lib/eligibilityText";
import { SCALES, SCORE_RANGE, evaluate, toGerman, scoreValid, loadProfile, saveProfile } from "../lib/eligibility";
import { BASE } from "../lib/site";

const START = { level: "master", field: "", countries: [], scale: "pct", grade: "", max: 100, min: 50, test: "ielts", score: "", budget: "any" };
const PAGE = 20;
const ICON = { ok: "✓", miss: "✗", check: "!", info: "–" };

export default function Eligibility({ lang }) {
  const t = T[lang];
  const s = EL_TEXT[lang];
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);
  const [a, setA] = useState(START);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    fetch(`${BASE}/data/compare-${lang}.json`).then((r) => r.json()).then(setData).catch(() => setErr(true));
    const saved = loadProfile();
    const q = new URLSearchParams(window.location.search);
    const next = { ...START, ...(saved || {}) };
    // Older saved answers had one country ("country"); keep it as a one-country list.
    if (!Array.isArray(next.countries)) next.countries = [];
    if (next.country && next.country !== "any" && !next.countries.length) next.countries = [next.country];
    delete next.country;
    next.countries = next.countries.filter((c) => COUNTRY_IDS.includes(c));
    if (LEVEL_IDS.includes(q.get("level"))) next.level = q.get("level");
    const qc = (q.get("country") || "").split(",").filter((c) => COUNTRY_IDS.includes(c));
    if (qc.length) next.countries = qc;
    setA(next);
    setLoaded(true);
  }, [lang]);

  // Keep the answers in this browser once the student has chosen a field.
  useEffect(() => { if (loaded && a.field) saveProfile(a); }, [a, loaded]);

  const set = (k, v) => setA((x) => {
    if (k === "level") return { ...x, level: v, field: "" }; // field lists differ by level
    if (k === "scale") return { ...x, scale: v, max: SCALES[v].max, min: SCALES[v].min, grade: "" };
    if (k === "test") return { ...x, test: v, score: "" };
    return { ...x, [k]: v };
  });

  const fields = a.level === "bachelor" ? BA_FIELD_IDS : FIELD_IDS;
  const de = toGerman(a);
  const badGrade = de && de.err;
  const badScore = !scoreValid(a);
  const ready = data && a.field && !badGrade && !badScore;
  const res = useMemo(() => (ready ? evaluate(data, a, lang) : null), [ready, data, a, lang]);
  const total = res ? res.fit.length + res.check.length + res.miss.length : 0;

  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <form className="card ec-form el-form" onSubmit={(e) => e.preventDefault()}>
        <label className="ec-field">
          <span>{s.level}</span>
          <select value={a.level} onChange={(e) => set("level", e.target.value)}>
            {LEVEL_IDS.map((l) => <option key={l} value={l}>{t.levels[l]}</option>)}
          </select>
        </label>
        <label className="ec-field">
          <span>{s.field}</span>
          <select value={a.field} onChange={(e) => set("field", e.target.value)}>
            <option value="" disabled>{lang === "ar" ? "اختر" : "Choose"}</option>
            {fields.map((f) => <option key={f} value={f}>{t.fields[f]}</option>)}
            <option value="any">{t.anyField}</option>
          </select>
        </label>
        <label className="ec-field">
          <span>{s.budget}</span>
          <select value={a.budget} onChange={(e) => set("budget", e.target.value)}>
            {BUDGETS.map((b) => <option key={b.id} value={b.id}>{t.budgets[b.id]}</option>)}
          </select>
        </label>

        <fieldset className="ec-tests el-countries">
          <legend>{s.country} <small className="meta">({a.countries.length ? s.picked(a.countries.length) : s.pickHint})</small></legend>
          <button type="button" className={`chip${a.countries.length ? "" : " on"}`} aria-pressed={!a.countries.length} onClick={() => set("countries", [])}>{s.anyCountry}</button>
          {COUNTRY_IDS.map((c) => {
            const on = a.countries.includes(c);
            return (
              <button type="button" key={c} className={`chip${on ? " on" : ""}`} aria-pressed={on}
                onClick={() => set("countries", on ? a.countries.filter((x) => x !== c) : [...a.countries, c])}>
                <Flag code={c} size={16} /> {t.countries[c]}
              </button>
            );
          })}
        </fieldset>

        <fieldset className="ec-tests">
          <legend>{s.grade} <small className="meta">({a.level === "bachelor" ? s.gradeHelpBa : s.gradeHelpMa})</small></legend>
          {Object.keys(SCALES).map((k) => (
            <label key={k} className={`chip${a.scale === k ? " on" : ""}`}>
              <input type="radio" name="scale" value={k} checked={a.scale === k} onChange={() => set("scale", k)} />
              {s.scales[k]}
            </label>
          ))}
        </fieldset>
        <label className="ec-field">
          <span>{s.yourGrade}</span>
          <input type="number" inputMode="decimal" step="any" value={a.grade} onChange={(e) => set("grade", e.target.value)} />
        </label>
        {a.scale !== "de" && (
          <>
            <label className="ec-field">
              <span>{s.max}</span>
              <input type="number" inputMode="decimal" step="any" value={a.max} onChange={(e) => set("max", e.target.value)} />
            </label>
            <label className="ec-field">
              <span>{s.min}</span>
              <input type="number" inputMode="decimal" step="any" value={a.min} onChange={(e) => set("min", e.target.value)} />
            </label>
            <p className="meta el-help">{s.minHelp}</p>
          </>
        )}

        <fieldset className="ec-tests">
          <legend>{s.english}</legend>
          {Object.keys(s.tests).map((k) => (
            <label key={k} className={`chip${a.test === k ? " on" : ""}`}>
              <input type="radio" name="test" value={k} checked={a.test === k} onChange={() => set("test", k)} />
              {s.tests[k]}
            </label>
          ))}
        </fieldset>
        {a.test !== "none" && (
          <label className="ec-field">
            <span>{s.score} <small className="meta">({SCORE_RANGE[a.test].join(" - ")})</small></span>
            <input type="number" inputMode="decimal" step={a.test === "ielts" ? 0.5 : 1} min={SCORE_RANGE[a.test][0]} max={SCORE_RANGE[a.test][1]} value={a.score} onChange={(e) => set("score", e.target.value)} />
          </label>
        )}
      </form>
      <p className="meta">{s.privacy}</p>

      {err && <div className="notice">{s.failed}</div>}
      {!err && !data && <p className="meta">{s.loading}</p>}
      {data && !a.field && <p className="meta">{s.pick}</p>}
      {badGrade && <div className="notice">{s.badGrade}</div>}
      {badScore && <div className="notice">{s.badScore}</div>}

      {res && (
        <div className="ec-res el-res" aria-live="polite">
          {typeof res.de === "number" && a.scale !== "de" && <p className="meta">{s.deIs(res.de.toFixed(1))}</p>}
          {total === 0 ? (
            <div className="notice">{s.nothing}</div>
          ) : (
            <>
              <p className="el-sum"><b>{s.summary(res.fit.length, res.check.length, res.miss.length)}</b></p>
              {a.level === "bachelor" && (
                <p><Link href={`${t.base}/school-certificate${a.countries.length === 1 ? `?country=${a.countries[0]}` : ""}`}>{s.schoolCert}</Link></p>
              )}
              <Group title={s.fit(res.fit.length)} note={s.fitNote} items={res.fit} lang={lang} open cls="fit" />
              <Group title={s.check(res.check.length)} note={s.checkNote} items={res.check} lang={lang} open={!res.fit.length} cls="check" />
              <Group title={s.miss(res.miss.length)} note={s.missNote} items={res.miss} lang={lang} open={!res.fit.length && !res.check.length} cls="miss" />
            </>
          )}
        </div>
      )}
      <ul className="meta cc-notes">{s.notes.map((n) => <li key={n}>{n}</li>)}</ul>
    </>
  );
}

function Group({ title, note, items, lang, open, cls }) {
  const [n, setN] = useState(PAGE);
  if (!items.length) return null;
  const s = EL_TEXT[lang];
  return (
    <details className={`card level-acc el-group el-${cls}`} open={open}>
      <summary><b>{title}</b></summary>
      <p className="meta">{note}</p>
      <ul className="el-list">
        {items.slice(0, n).map((x) => <Row key={x.p.i} x={x} lang={lang} />)}
      </ul>
      {items.length > n && <button type="button" className="btn ghost small" onClick={() => setN(n + PAGE)}>{s.more(Math.min(PAGE, items.length - n))}</button>}
    </details>
  );
}

function Row({ x, lang }) {
  const t = T[lang];
  const s = EL_TEXT[lang];
  const p = x.p;
  return (
    <li className="el-row">
      <Link href={`${t.base}/programme/${p.i}`}><b><bdi>{p.n}</bdi></b></Link>
      <small className="el-where"><Flag code={p.c} size={14} /> <bdi>{p.u}</bdi> · {p.ci}</small>
      <ul className="el-checks">
        {x.checks.map((c) => (
          <li key={c.k} className={`el-${c.st}`}><span className="el-ic" aria-hidden="true">{ICON[c.st]}</span> {c.m}</li>
        ))}
        <li className="el-info"><span className="el-ic" aria-hidden="true">→</span> <Link href={`${t.base}/programme/${p.i}`}>{s.otherReq}</Link></li>
      </ul>
    </li>
  );
}
