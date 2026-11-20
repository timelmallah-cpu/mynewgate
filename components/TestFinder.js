"use client";
import { useMemo, useState } from "react";
import Link from "@/components/Link";
import Flag from "../lib/Flag";
import { TESTS, TEST_NAMES, ET_TEXT } from "../lib/englishTestsText";

export default function TestFinder({ rows, names, lang, base }) {
  const s = ET_TEXT[lang];
  const [test, setTest] = useState("duo");
  const [score, setScore] = useState("");
  const [level, setLevel] = useState("");
  const [c, setC] = useState("");
  const [n, setN] = useState(30);
  const v = parseFloat(String(score).replace(",", "."));
  const list = useMemo(() => rows
    .filter((r) => test in r.t)
    .filter((r) => !level || r.l === level)
    .filter((r) => !c || r.c === c)
    .filter((r) => Number.isNaN(v) || r.t[test] == null || r.t[test] <= v)
    .sort((a, b) => (a.t[test] ?? 999) - (b.t[test] ?? 999)), [rows, test, level, c, v]);
  const countries = Object.keys(names).sort((a, b) => names[a].localeCompare(names[b], lang));
  return (
    <div>
      <form className="card ec-form" onSubmit={(e) => e.preventDefault()}>
        <label className="ec-field"><span>{s.test}</span>
          <select value={test} onChange={(e) => { setTest(e.target.value); setScore(""); }}>
            {TESTS.map((k) => <option key={k} value={k}>{TEST_NAMES[k]}</option>)}
          </select>
        </label>
        {test !== "cam" && <label className="ec-field"><span>{s.score}</span><input inputMode="decimal" value={score} onChange={(e) => setScore(e.target.value)} /></label>}
        <label className="ec-field"><span>{s.level}</span>
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="">{s.any}</option><option value="master">{s.master}</option><option value="bachelor">{s.bachelor}</option>
          </select>
        </label>
        <label className="ec-field"><span>{s.country}</span>
          <select value={c} onChange={(e) => setC(e.target.value)}>
            <option value="">{s.allCountries}</option>
            {countries.map((k) => <option key={k} value={k}>{names[k]}</option>)}
          </select>
        </label>
      </form>
      <p className="notice" aria-live="polite">{Number.isNaN(v) ? s.results(list.length) : s.resultsOk(list.length)}</p>
      <ul className="level-list">
        {list.slice(0, n).map((r) => (
          <li key={r.i}>
            <Link href={`${base}/programme/${r.i}`}><Flag code={r.c} size={14} /> <b><bdi>{r.n}</bdi></b></Link>
            <small><bdi>{r.u}</bdi> · {s.min}: {r.t[test] ?? s.notPub}</small>
            <small className="meta" dir="ltr">{r.e}</small>
          </li>
        ))}
      </ul>
      {list.length > n && <button type="button" className="btn ghost small" onClick={() => setN(n + 30)}>{s.more(Math.min(30, list.length - n))}</button>}
    </div>
  );
}
