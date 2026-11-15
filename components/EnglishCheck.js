"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { COUNTRY_IDS, LEVEL_IDS } from "../lib/options";
import { EC_TEXT } from "../lib/englishText";

const RANGE = { ielts: [4, 9, 0.5], toefl: [30, 120, 1] };

export default function EnglishCheck({ lang }) {
  const t = T[lang];
  const s = EC_TEXT[lang];
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);
  const [test, setTest] = useState("ielts");
  const [score, setScore] = useState("");
  const [level, setLevel] = useState("any");
  const [country, setCountry] = useState("any");

  useEffect(() => {
    fetch(`/data/compare-${lang}.json`).then((r) => r.json()).then(setData).catch(() => setErr(true));
    const q = new URLSearchParams(window.location.search);
    if (q.get("test") === "toefl") setTest("toefl");
    if (q.get("score")) setScore(q.get("score"));
    if (COUNTRY_IDS.includes(q.get("country"))) setCountry(q.get("country"));
    if (LEVEL_IDS.includes(q.get("level"))) setLevel(q.get("level"));
  }, [lang]);

  const [lo, hi, step] = RANGE[test];
  const v = parseFloat(score);
  const valid = score !== "" && !Number.isNaN(v) && v >= lo && v <= hi;

  const res = useMemo(() => {
    if (!data || !valid) return null;
    const key = test === "ielts" ? "il" : "tf";
    const list = data.filter((p) => (level === "any" || p.l === level) && (country === "any" || p.c === country));
    const meets = [], above = [], other = [], none = [];
    for (const p of list) {
      if (p[key] !== null && p[key] !== undefined) (p[key] <= v ? meets : above).push(p);
      else if (p.il || p.tf || p.cf) other.push(p);
      else none.push(p);
    }
    const byReq = (a, b) => b[key] - a[key] || a.n.localeCompare(b.n);
    return { key, meets: meets.sort(byReq), above: above.sort((a, b) => a[key] - b[key]), other, none };
  }, [data, valid, v, test, level, country]);

  const fmtGap = (g) => (test === "ielts" ? g.toFixed(1) : String(Math.round(g)));
  const row = (p, gap) => (
    <li key={p.i}>
      <Link href={`${t.base}/programme/${p.i}`}><b><bdi>{p.n}</bdi></b></Link>
      <small>
        <Flag code={p.c} size={14} /> <bdi>{p.u}</bdi> · {t.levels[p.l]?.split(" (")[0]} · {s.req}: {res.key === "il" ? `IELTS ${p.il}` : `TOEFL ${p.tf}`}
        {p.ck ? ` (${s.verify})` : ""}
        {gap ? ` · ${s.need(fmtGap(gap))}` : ""}
      </small>
    </li>
  );

  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <Link className="ctx-link" href={`${t.base}/without-ielts`}>{lang === "ar" ? "ليس لديك IELTS؟ اعرف الجامعات التي تقبل Duolingo أو شهادة دراسة بالإنجليزية" : "No IELTS? See universities that accept Duolingo or a degree taught in English"}</Link>
      <form className="card ec-form" onSubmit={(e) => e.preventDefault()}>
        <fieldset className="ec-tests">
          <legend>{s.test}</legend>
          {["ielts", "toefl"].map((k) => (
            <label key={k} className={`chip${test === k ? " on" : ""}`}>
              <input type="radio" name="test" value={k} checked={test === k} onChange={() => { setTest(k); setScore(""); }} />
              {k === "ielts" ? "IELTS Academic" : "TOEFL iBT"}
            </label>
          ))}
        </fieldset>
        <label className="ec-field">
          <span>{s.score} <small className="meta">({test === "ielts" ? s.ieltsHint : s.toeflHint})</small></span>
          <input type="number" inputMode="decimal" min={lo} max={hi} step={step} value={score} onChange={(e) => setScore(e.target.value)} />
        </label>
        <label className="ec-field">
          <span>{s.level}</span>
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="any">{s.anyLevel}</option>
            {LEVEL_IDS.map((l) => <option key={l} value={l}>{t.levels[l]}</option>)}
          </select>
        </label>
        <label className="ec-field">
          <span>{s.country}</span>
          <select value={country} onChange={(e) => setCountry(e.target.value)}>
            <option value="any">{s.anyCountry}</option>
            {COUNTRY_IDS.map((c) => <option key={c} value={c}>{t.countries[c]}</option>)}
          </select>
        </label>
      </form>

      {err && <div className="notice">{s.failed}</div>}
      {!err && !data && <p className="meta">{s.loading}</p>}
      {data && score === "" && <p className="meta">{s.empty}</p>}
      {data && score !== "" && !valid && <div className="notice">{s.bad}</div>}

      {res && (
        <div className="ec-res" aria-live="polite">
          <h2>{s.meets(res.meets.length)}</h2>
          <ul className="level-list ec-list">{res.meets.map((p) => row(p))}</ul>
          {res.above.length > 0 && (
            <details className="card level-acc">
              <summary><b>{s.above(res.above.length)}</b> <span className="level-more">{t.base ? "Show" : "اعرض"}</span></summary>
              <ul className="level-list ec-list">{res.above.map((p) => row(p, p[res.key] - v))}</ul>
            </details>
          )}
          {res.other.length > 0 && (
            <details className="card level-acc">
              <summary><b>{s.other(res.other.length)}</b> <span className="level-more">{t.base ? "Show" : "اعرض"}</span></summary>
              <ul className="level-list ec-list">
                {res.other.map((p) => (
                  <li key={p.i}>
                    <Link href={`${t.base}/programme/${p.i}`}><b><bdi>{p.n}</bdi></b></Link>
                    <small><Flag code={p.c} size={14} /> <bdi>{p.u}</bdi> · {p.e}</small>
                  </li>
                ))}
              </ul>
            </details>
          )}
          {res.none.length > 0 && <p className="meta">{s.none(res.none.length)}</p>}
        </div>
      )}
      <ul className="meta cc-notes">{s.notes.map((n) => <li key={n}>{n}</li>)}</ul>
    </>
  );
}
