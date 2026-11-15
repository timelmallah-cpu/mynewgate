"use client";
import { useState } from "react";
import { REVIEW_TEXT } from "../lib/reviewText";

const ICON = { good: "✓", improve: "!", missing: "✗" };

export default function LetterReview({ lang }) {
  const s = REVIEW_TEXT[lang];
  const [letter, setLetter] = useState("");
  const [programme, setProgramme] = useState("");
  const [limit, setLimit] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [r, setR] = useState(null);
  const count = (letter.trim().match(/\S+/g) || []).length;

  const run = async (e) => {
    e.preventDefault();
    if (busy) return;
    if (letter.trim().length < 400) { setErr(s.tooShort); return; }
    setErr(""); setBusy(true); setR(null);
    try {
      const res = await fetch("/api/letter-review", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ letter, programme, wordLimit: limit || null, lang }) });
      const d = await res.json().catch(() => ({}));
      if (!res.ok) setErr(s.errors[d.error] || s.errors.failed);
      else { setR(d); setTimeout(() => document.getElementById("review-result")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50); }
    } catch { setErr(s.errors.failed); }
    setBusy(false);
  };

  return (
    <section className="card letter-review" id="review">
      <h2>{s.title}</h2>
      <p>{s.lead}</p>
      <p className="note ask-privacy">{s.privacy}</p>
      <form onSubmit={run} className="review-form">
        <label>{s.letter} <small className="note">{s.words(count)}</small>
          <textarea dir="auto" rows={12} maxLength={9000} value={letter} placeholder={s.letterPh} onChange={(e) => setLetter(e.target.value)} />
        </label>
        <div className="review-opts">
          <label>{s.programme}<input dir="auto" type="text" maxLength={200} value={programme} placeholder={s.programmePh} onChange={(e) => setProgramme(e.target.value)} /></label>
          <label>{s.limit}<input type="number" inputMode="numeric" min={50} max={5000} value={limit} onChange={(e) => setLimit(e.target.value)} /></label>
        </div>
        <button type="submit" className="btn gold" disabled={busy}>{busy ? s.busy : s.btn}</button>
      </form>
      {err && <p className="ask-err" role="alert">{err}</p>}

      {r && (
        <div id="review-result" className="review-result" aria-live="polite">
          {!r.isLetter ? <p><strong>{s.notLetter}</strong> {r.summary}</p> : (
            <>
              <h3>{s.summary}</h3>
              <p>{r.summary}</p>
              <p className={`review-len ${r.wordLimit && r.words > r.wordLimit ? "bad" : ""}`}>
                {r.wordLimit ? (r.words > r.wordLimit ? s.over(r.words, r.wordLimit) : s.under(r.words, r.wordLimit)) : `${s.words(r.words)}. ${s.noLimit}`}
              </p>
              {r.topActions.length > 0 && (
                <>
                  <h3>{s.actions}</h3>
                  <ol>{r.topActions.map((x, i) => <li key={i}>{x}</li>)}</ol>
                </>
              )}
              <h3>{s.checks}</h3>
              <ul className="review-checks">
                {r.checks.map((c) => (
                  <li key={c.id} className={c.status}>
                    <span className="review-badge" aria-hidden="true">{ICON[c.status]}</span>
                    <div>
                      <b>{c.label}</b> <small>{s.status[c.status]}</small>
                      <p>{c.note}</p>
                      {c.quote && <blockquote dir="auto">«{c.quote}»</blockquote>}
                    </div>
                  </li>
                ))}
              </ul>
              {r.languageIssues.length > 0 && (
                <>
                  <h3>{s.lang}</h3>
                  <ul className="review-lang">
                    {r.languageIssues.map((x, i) => <li key={i}><span dir="auto" className="old">{x.quote}</span> <span>{s.fix}</span> <span dir="auto" className="new">{x.fix}</span></li>)}
                  </ul>
                </>
              )}
            </>
          )}
          <p className="note">{typeof r.left === "number" && <>{s.left(r.left)} · </>}{s.disclaimer}</p>
        </div>
      )}
    </section>
  );
}
