"use client";
// "Which visa do I need?": nationality + destination -> status, short facts and a link to the destination page.
// Nothing is saved; the answer is in the URL hash only (#eg-fr) so it can be shared.
import { useEffect, useState } from "react";
import { ORIGINS, ORIGIN_NAME, DEST, KIND, VTEXT } from "../lib/visit";

export default function VisaChecker({ lang, base, initialDest = "" }) {
  const t = VTEXT[lang];
  const [o, setO] = useState("");
  const [d, setD] = useState(initialDest);
  useEffect(() => {
    const m = (location.hash || "").match(/^#([a-z]{2})-([a-z]{2})$/);
    if (m && ORIGIN_NAME[m[1]] && DEST.some((x) => x.id === m[2])) { setO(m[1]); setD(m[2]); }
  }, []);
  useEffect(() => {
    if (o && d) history.replaceState(null, "", `#${o}-${d}`);
  }, [o, d]);
  const dest = DEST.find((x) => x.id === d);
  const st = dest && o ? dest.status[o] : null;
  const sorted = [...ORIGINS].sort((a, b) => a[lang].localeCompare(b[lang], lang));
  return (
    <section className="card vz-tool" aria-labelledby="vz-tool-h">
      <h2 id="vz-tool-h">{t.toolTitle}</h2>
      <div className="vz-form">
        <label>{t.nat}
          <select value={o} onChange={(e) => setO(e.target.value)}>
            <option value="">{t.pick}</option>
            {sorted.map((x) => <option key={x.c} value={x.c}>{x[lang]}</option>)}
          </select>
        </label>
        <label>{t.dest}
          <select value={d} onChange={(e) => setD(e.target.value)}>
            <option value="">{t.pick}</option>
            {DEST.map((x) => <option key={x.id} value={x.id}>{x.name[lang]}</option>)}
          </select>
        </label>
      </div>
      {st && (
        <div className={`vz-result vz-${st.s}`} aria-live="polite">
          <p className="vz-who">{t.result(ORIGIN_NAME[o][lang], dest.name[lang])}</p>
          <p className="vz-kind">{KIND[st.s][lang]}</p>
          <p>{st.n[lang]}</p>
          {st.s !== "free" && st.s !== "banned" && (
            <dl className="vz-facts">
              <div><dt>{t.visa}</dt><dd>{dest.visa[lang]}</dd></div>
              <div><dt>{t.fee}</dt><dd>{dest.fee[lang]}</dd></div>
              <div><dt>{t.where}</dt><dd>{dest.where[lang]}</dd></div>
            </dl>
          )}
          <p className="vz-links">
            <a href={`${base}/${dest.slug}`}>{t.full} {dest.name[lang]} {lang === "ar" ? "←" : "→"}</a>
            {st.src ? <> · <a href={st.src} target="_blank" rel="noopener noreferrer">{t.src} ↗</a></> : null}
          </p>
        </div>
      )}
    </section>
  );
}
