"use client";
// Calculator: country (and province) + weekly hours -> gross monthly earnings at the official minimum wage,
// compared with the average monthly living cost in our programme cities.
import { useMemo, useState } from "react";
import Flag from "../lib/Flag";
import { EARN_TEXT } from "../lib/earningsText";

const n0 = (n) => Math.round(n).toLocaleString("en");
const n2 = (n) => n.toLocaleString("en", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export default function EarningsCalc({ rows, lang }) {
  const s = EARN_TEXT[lang];
  const [c, setC] = useState("de");
  const [rid, setRid] = useState("");
  const [hours, setHours] = useState("");
  const row = rows.find((x) => x.c === c) || rows[0];
  const reg = row.regions.find((g) => g.id === rid) || row.regions[0];
  const cap = row.weekly;
  const asked = parseFloat(String(hours).replace(",", "."));
  const h = Number.isNaN(asked) ? (cap ?? 15) : asked;
  const used = cap != null ? Math.min(h, cap) : h;
  const monthly = useMemo(() => (reg && !row.termBan ? reg.eurH * used * 52 / 12 : 0), [reg, used, row]);
  const pct = row.living ? Math.round((monthly / row.living) * 100) : null;
  return (
    <div className="card earn">
      <form className="ec-form" onSubmit={(e) => e.preventDefault()}>
        <label className="ec-field"><span>{s.country}</span>
          <select value={c} onChange={(e) => { setC(e.target.value); setRid(""); setHours(""); }}>
            {rows.map((x) => <option key={x.c} value={x.c}>{x.name}</option>)}
          </select>
        </label>
        {row.regions.length > 1 && (
          <label className="ec-field"><span>{s.region}</span>
            <select value={reg.id} onChange={(e) => setRid(e.target.value)}>{row.regions.map((g) => <option key={g.id} value={g.id}>{g.label}</option>)}</select>
          </label>
        )}
        {!row.none && !row.termBan && (
          <label className="ec-field"><span>{s.hours}</span>
            <input inputMode="decimal" value={hours} placeholder={String(cap ?? 15)} onChange={(e) => setHours(e.target.value)} />
          </label>
        )}
      </form>
      <p className="meta"><Flag code={row.c} size={14} /> {s.cap}: {row.capText}{row.workCheck ? ` (${s.check})` : ""}{cap == null && !row.termBan ? ` — ${s.noCap}` : ""}</p>
      {cap != null && h > cap && <p className="notice">{s.over(cap)}</p>}
      {row.none ? (
        <p className="notice">{row.own ? row.note : `${s.none}${row.note ? ` ${row.note}` : ""}`}</p>
      ) : row.termBan ? (
        <p className="notice">{s.term}</p>
      ) : (
        <div className="earn-out" aria-live="polite">
          <div><span>{s.rate}</span><b dir="ltr">{n2(reg.localH)} {reg.cur}</b><small>{s.perHour}{reg.cur !== "EUR" ? ` (≈ €${n2(reg.eurH)})` : ""}{reg.calc ? ` · ${s.ourCalc}` : ""}</small></div>
          <div><span>{s.earn}</span><b><bdi dir="ltr">€{n0(monthly)}</bdi></b><small>{s.perMonth}</small></div>
          <div><span>{s.living}</span>{row.living ? <b><bdi dir="ltr">€{n0(row.living)}</bdi></b> : <small>{s.livingNA}</small>}{pct != null && <small>{s.covers(pct)}</small>}</div>
        </div>
      )}
      {!row.none && !row.termBan && pct != null && pct >= 95 && <p className="meta">{s.full}</p>}
      {row.note && !row.none && !row.termBan && <p className="meta">{row.note}</p>}
      <p className="meta">
        {reg?.src && <><a href={reg.src} target="_blank" rel="noopener noreferrer">{s.src}</a>{reg.check ? ` (${s.check})` : ""}{reg.from ? ` · ${s.from} ${reg.from}` : ""}</>}
        {row.workSrc && <>{reg?.src ? " · " : ""}<a href={row.workSrc} target="_blank" rel="noopener noreferrer">{s.workSrc}</a></>}
      </p>
      {row.workText && <p className="meta">{row.workText}</p>}
    </div>
  );
}
