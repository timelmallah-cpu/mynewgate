"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { PLAN_STEPS, PL_TEXT } from "../lib/plannerText";
import { fmtDate } from "./ScholarshipParts";

const iso = (d) => d.toISOString().slice(0, 10);
const minusWeeks = (isoDate, w) => { const d = new Date(isoDate + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() - w * 7); return iso(d); };
const todayIso = () => new Date().toISOString().slice(0, 10);
// Default study start: 1 September after the deadline (deadlines from August on usually belong to the next year's intake).
function defaultStart(dl) {
  const d = new Date(dl + "T12:00:00Z");
  const y = d.getUTCMonth() <= 6 ? d.getUTCFullYear() : d.getUTCFullYear() + 1; // Jan-Jul deadlines: same year
  return `${y}-09`;
}

function icsFile(events, title) {
  const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/[,;]/g, (m) => "\\" + m).replace(/\n/g, "\\n");
  const stamp = new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//BawabatAlsafar//Planner//EN", "CALSCALE:GREGORIAN"];
  for (const e of events) {
    const day = e.date.replace(/-/g, "");
    const end = new Date(e.date + "T12:00:00Z"); end.setUTCDate(end.getUTCDate() + 1);
    lines.push("BEGIN:VEVENT", `UID:plan-${e.key}-${day}-${Math.random().toString(36).slice(2, 8)}@mynewgate`, `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${day}`, `DTEND;VALUE=DATE:${iso(end).replace(/-/g, "")}`,
      `SUMMARY:${esc(`${title}: ${e.title}`)}`, `DESCRIPTION:${esc(`${e.note}\n${e.url}`)}`,
      "BEGIN:VALARM", "ACTION:DISPLAY", `DESCRIPTION:${esc(e.title)}`, "TRIGGER:-P3D", "END:VALARM", "END:VEVENT");
  }
  lines.push("END:VCALENDAR");
  const fold = (line) => {
    const out = []; let cur = ""; let bytes = 0;
    for (const ch of line) {
      const b = new TextEncoder().encode(ch).length;
      if (bytes + b > 73) { out.push(cur); cur = " "; bytes = 1; }
      cur += ch; bytes += b;
    }
    out.push(cur);
    return out.join("\r\n");
  };
  return lines.map(fold).join("\r\n");
}

export default function Planner({ lang }) {
  const t = T[lang];
  const s = PL_TEXT[lang];
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);
  const [q, setQ] = useState("");
  const [id, setId] = useState(null);
  const [dl, setDl] = useState("");
  const [start, setStart] = useState("");

  useEffect(() => {
    fetch("/data/deadlines.json").then((r) => r.json()).then((d) => {
      setData(d);
      const pid = new URLSearchParams(window.location.search).get("id");
      if (pid && d.some((x) => String(x.id) === pid)) setId(pid);
    }).catch(() => setErr(true));
  }, []);

  const prog = data && id ? data.find((x) => String(x.id) === String(id)) : null;
  const future = prog ? prog.dates.filter((x) => x.d >= todayIso()) : [];

  // When a programme is chosen, default to its next deadline.
  useEffect(() => {
    if (!prog) return;
    const first = prog.dates.find((x) => x.d >= todayIso());
    setDl(first ? first.d : "");
    setStart(first ? defaultStart(first.d) : "");
    window.history.replaceState(null, "", `?id=${prog.id}`);
  }, [prog?.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const matches = useMemo(() => {
    if (!data || q.trim().length < 2) return [];
    const w = q.trim().toLowerCase();
    return data.filter((x) => `${x.name} ${x.university}`.toLowerCase().includes(w)).slice(0, 12);
  }, [data, q]);

  const steps = useMemo(() => {
    if (!dl || !/^\d{4}-\d{2}-\d{2}$/.test(dl)) return [];
    const st = /^\d{4}-\d{2}$/.test(start) ? `${start}-01` : null;
    return PLAN_STEPS.filter((x) => x.from === "deadline" || st)
      .map((x) => ({ ...x, date: minusWeeks(x.from === "deadline" ? dl : st, x.weeks) }));
  }, [dl, start]);

  const url = prog ? `https://bawabatalsafar.com${t.base}/programme/${prog.id}` : "";
  const download = () => {
    const ev = steps.filter((x) => x.date >= todayIso()).map((x) => ({ key: x.key, date: x.date, title: s.steps[x.key][0], note: `${prog?.name || ""} - ${prog?.university || ""}\n${s.steps[x.key][1]}`, url }));
    const blob = new Blob([icsFile(ev, s.icsTitle)], { type: "text/calendar;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob); a.download = "bawabatalsafar-plan.ics"; a.click();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  };

  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      {err && <div className="notice">{s.failed}</div>}
      {!err && !data && <p className="meta">{s.loading}</p>}

      {data && !prog && (
        <div className="card">
          <label className="ec-field"><span>{s.search}</span>
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} autoComplete="off" />
          </label>
          {matches.length > 0 && (
            <ul className="level-list">
              {matches.map((x) => (
                <li key={x.id} className="pl-pick">
                  <span><b><bdi>{x.name}</bdi></b><small><Flag code={x.country} size={14} /> <bdi>{x.university}</bdi> · {t.levels[x.level]?.split(" (")[0]}</small></span>
                  <button type="button" className="btn small" onClick={() => setId(x.id)}>{s.pick}</button>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}

      {prog && (
        <>
          <div className="card pl-head">
            <p><Flag code={prog.country} size={18} /> <b><bdi>{prog.name}</bdi></b><br /><small className="meta"><bdi>{prog.university}</bdi></small></p>
            <p className="meta">{s.deadline}: {prog[lang]}</p>
            <div className="ec-form">
              <label className="ec-field"><span>{s.deadline}</span>
                {future.length > 0 ? (
                  <select value={future.some((x) => x.d === dl) ? dl : "manual"} onChange={(e) => setDl(e.target.value === "manual" ? "" : e.target.value)}>
                    {future.map((x) => <option key={x.d} value={x.d}>{fmtDate(x.d, lang)}{x.est ? ` (${s.est})` : ""}</option>)}
                    <option value="manual">{s.manual}</option>
                  </select>
                ) : null}
                {(future.length === 0 || !future.some((x) => x.d === dl)) && (
                  <input type="date" value={dl} onChange={(e) => { setDl(e.target.value); if (e.target.value && !start) setStart(defaultStart(e.target.value)); }} />
                )}
              </label>
              <label className="ec-field"><span>{s.startLabel} <small className="meta">({s.startHint})</small></span>
                <input type="month" value={start} onChange={(e) => setStart(e.target.value)} />
              </label>
            </div>
            {future.length === 0 && <p className="meta">{s.noDate}</p>}
            <p className="pl-actions">
              <Link className="btn ghost small" href={`${t.base}/programme/${prog.id}`}>{s.open}</Link>
              <button type="button" className="linkbtn" onClick={() => { setId(null); setQ(""); window.history.replaceState(null, "", window.location.pathname); }}>{s.change}</button>
            </p>
          </div>

          {steps.length > 0 && (
            <>
              <h2>{s.plan}</h2>
              <ol className="pl-steps">
                {steps.map((x) => {
                  const past = x.date < todayIso();
                  return (
                    <li key={x.key} className={`${past ? "past" : ""}${x.key === "deadline" ? " key" : ""}`}>
                      <time dateTime={x.date}>{fmtDate(x.date, lang)}</time>
                      <b>{s.steps[x.key][0]}{past ? ` (${s.past})` : ""}</b>
                      <small>{s.steps[x.key][1]}</small>
                      {x.key === "visa" && prog && <Link className="ctx-link" href={`${t.base}/visa?to=${prog.country}`}>{lang === "ar" ? "أين وكيف تقدّم؟" : "Where and how to apply?"}</Link>}
                      {x.key === "housing" && <Link className="ctx-link" href={`${t.base}/housing${prog ? `?country=${prog.country}` : ""}`}>{lang === "ar" ? "دليل السكن الرسمي" : "Official housing guide"}</Link>}
                    </li>
                  );
                })}
              </ol>
              <p className="pl-actions">
                <button type="button" className="btn gold small" onClick={download}>{s.ics}</button>
                <button type="button" className="btn ghost small" onClick={() => window.print()}>{s.print}</button>
              </p>
            </>
          )}
        </>
      )}
      <div className="notice">{s.note}</div>
    </>
  );
}
