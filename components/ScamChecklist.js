"use client";
// Tick the warning signs in an offer; the weighted count gives a plain warning level. Nothing is sent or saved.
import { useState } from "react";
import { SCAM_FLAGS, GUIDE_TEXT } from "../lib/guides";

export default function ScamChecklist({ lang }) {
  const s = GUIDE_TEXT[lang].check;
  const [on, setOn] = useState({});
  const score = SCAM_FLAGS.reduce((a, f) => a + (on[f.id] ? f.w : 0), 0);
  return (
    <div className="card gd-card">
      <fieldset className="gd-flags">
        <legend className="sr-only">{s.title}</legend>
        {SCAM_FLAGS.map((f) => (
          <label key={f.id} className="gd-flag"><input type="checkbox" checked={!!on[f.id]} onChange={(e) => setOn((x) => ({ ...x, [f.id]: e.target.checked }))} /> <span>{f.q[lang]}</span></label>
        ))}
      </fieldset>
      <p className={`notice${score >= 3 ? " gd-bad" : ""}`} aria-live="polite">{s.result(score)}</p>
    </div>
  );
}
