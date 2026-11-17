"use client";
import { useEffect, useState } from "react";
import Link from "@/components/Link";
import deadlines from "../lib/deadlines.json";
import { T } from "../lib/i18n";
import { SCHOLARSHIPS } from "../lib/scholarships";
import { getSaved, removeSaved, onSavedChange, shareUrl, readShared, addSaved, signedIn } from "../lib/saved";
import { ACC } from "../lib/accountText";
import { fmtDate } from "./ScholarshipParts";
import WhatsApp from "./WhatsApp";
import { SITE_URL } from "../lib/site";

const today = () => new Date().toISOString().slice(0, 10);
const daysLeft = (iso) => Math.round((new Date(iso + "T12:00:00Z") - new Date(today() + "T12:00:00Z")) / 864e5);

function items(saved, lang) {
  const t = T[lang];
  const now = today();
  return saved.map((k) => {
    const [type, id] = [k.slice(0, 1), k.slice(2)];
    if (type === "p") {
      const p = deadlines.find((x) => String(x.id) === id);
      if (!p) return null;
      const next = p.dates.find((d) => d.d >= now);
      return { k, title: p.name, sub: `${p.university} · ${t.countries[p.country]}`, href: `${t.base}/programme/${p.id}`, text: p[lang], next, dates: p.dates.filter((d) => d.d >= now) };
    }
    const s = SCHOLARSHIPS.find((x) => x.id === id);
    if (!s) return null;
    const ds = s.deadlines.filter((d) => d.date >= now).map((d) => ({ d: d.date, est: d.kind !== "official", step: d.step ? t.sch.stepsShort[d.step] : null }));
    return { k, title: s.name[lang], sub: s.funder[lang], href: `${t.base}/scholarships/${s.id}`, text: s.deadlines.map((d) => d.label[lang]).join(" / "), next: ds[0], dates: ds };
  }).filter(Boolean).sort((a, b) => (a.next?.d || "9999").localeCompare(b.next?.d || "9999"));
}

// Calendar file (.ics) with reminders 14 and 3 days before each deadline.
function ics(list, lang) {
  const t = T[lang].my;
  const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/[,;]/g, (m) => "\\" + m).replace(/\n/g, "\\n");
  const stamp = new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
  const ev = [];
  for (const it of list) for (const d of it.dates) {
    const day = d.d.replace(/-/g, "");
    const end = new Date(d.d + "T12:00:00Z"); end.setUTCDate(end.getUTCDate() + 1);
    ev.push([
      "BEGIN:VEVENT", `UID:${it.k}-${day}@mynewgate`, `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${day}`, `DTEND;VALUE=DATE:${end.toISOString().slice(0, 10).replace(/-/g, "")}`,
      `SUMMARY:${esc(`${t.icsTitle}: ${it.title}${d.step ? ` (${d.step})` : ""}`)}`,
      `DESCRIPTION:${esc(`${it.sub}\n${it.text}\n${d.est ? t.estNote + "\n" : ""}${SITE_URL}${it.href}`)}`,
      "BEGIN:VALARM", "ACTION:DISPLAY", `DESCRIPTION:${esc(it.title)}`, "TRIGGER:-P14D", "END:VALARM",
      "BEGIN:VALARM", "ACTION:DISPLAY", `DESCRIPTION:${esc(it.title)}`, "TRIGGER:-P3D", "END:VALARM",
      "END:VEVENT",
    ].join("\r\n"));
  }
  // RFC 5545: lines longer than 75 octets are folded.
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
  return ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//BawabatAlsafar//Deadlines//EN", "CALSCALE:GREGORIAN", ...ev, "END:VCALENDAR"].join("\r\n").split("\r\n").map(fold).join("\r\n");
}
export function download(list, lang, name) {
  const blob = new Blob([ics(list, lang)], { type: "text/calendar;charset=utf-8" });
  const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = name; a.click();
  setTimeout(() => URL.revokeObjectURL(a.href), 1000);
}

export default function MyList({ lang }) {
  const t = T[lang];
  const m = t.my;
  const [saved, setSaved] = useState(null);
  const [incoming, setIncoming] = useState(null);
  const [copied, setCopied] = useState(false);
  const [si, setSi] = useState(true);
  useEffect(() => {
    setSaved(getSaved());
    setSi(signedIn());
    const check = () => { const sh = readShared(); if (sh) setIncoming(items(sh, lang).map((x) => x.k)); };
    check();
    window.addEventListener("hashchange", check);
    const off = onSavedChange(setSaved);
    return () => { off(); window.removeEventListener("hashchange", check); };
  }, [lang]);
  if (saved === null) return null;
  const list = items(saved, lang);
  const clearHash = () => { history.replaceState(null, "", window.location.pathname); setIncoming(null); };
  const newOnes = incoming ? incoming.filter((k) => !saved.includes(k)) : [];
  const link = list.length ? shareUrl(list.map((x) => x.k)) : "";
  const copy = async () => {
    try { await navigator.clipboard.writeText(link); setCopied(true); setTimeout(() => setCopied(false), 2500); }
    catch { document.getElementById("share-link")?.select(); }
  };
  const withDates = list.filter((x) => x.dates.length);

  return (
    <>
      <h1>{m.title}</h1>
      <p className="lead">{m.lead}</p>
      {!si && <p className="mylist-sync"><Link href={`${t.base}/login?next=${t.base}/my-list`}>{ACC[lang].syncHint}</Link></p>}
      {incoming && (
        <div className="share-in">
          {incoming.length === 0 ? (
            <p>{m.shareBad}</p>
          ) : newOnes.length === 0 ? (
            <p>{m.shareHave}</p>
          ) : (
            <>
              <p>{m.shareFound(newOnes.length)}</p>
              <button className="btn gold small" onClick={() => { addSaved(newOnes); clearHash(); }}>{m.shareAdd}</button>
            </>
          )}
          <button className="linkbtn" onClick={clearHash}>{m.shareClose}</button>
        </div>
      )}
      {list.length === 0 ? (
        <div className="how">
          <h2>{m.emptyTitle}</h2>
          <p>{m.empty}</p>
          <p className="row" style={{ marginTop: 12 }}>
            <Link className="btn small" href={`${t.base}/quiz`}>{t.start}</Link>
            <Link className="btn small ghost" href={`${t.base}/scholarships`}>{t.schLink}</Link>
          </p>
        </div>
      ) : (
        <>
          {withDates.length > 0 && (
            <div className="cal-box">
              <p>{m.calNote}</p>
              <button className="btn gold small" onClick={() => download(withDates, lang, "bawabatalsafar-deadlines.ics")}>{m.downloadAll}</button>
            </div>
          )}
          <div className="share-box">
            <p><b>{m.shareTitle}</b> {m.shareNote}</p>
            <div className="share-row">
              <input id="share-link" readOnly value={link} dir="ltr" onFocus={(e) => e.target.select()} aria-label={m.shareTitle} />
              <button className="btn small" onClick={copy}>{copied ? m.copied : m.copy}</button>
            </div>
            <WhatsApp lang={lang} full={link} text={lang === "ar" ? "هذه البرامج والمنح التي حفظتها على بوابة الدراسة:" : "Programmes and scholarships I saved on Bawabat AlDirasa:"} />
          </div>
          <ol className="mylist">
            {list.map((it) => {
              const left = it.next ? daysLeft(it.next.d) : null;
              return (
                <li key={it.k} className={left !== null && left <= 30 ? "soon" : ""}>
                  <div className="when">
                    {it.next ? (
                      <>
                        <b>{left === 0 ? m.today : m.daysLeft(left)}</b>
                        <span>{fmtDate(it.next.d, lang)}</span>
                        {it.next.step && <span className="step">{it.next.step}</span>}
                        {it.next.est && <span className="kind kind-expected">{m.est}</span>}
                      </>
                    ) : (
                      <span className="kind">{m.noDate}</span>
                    )}
                  </div>
                  <div className="what">
                    <Link href={it.href} className="ltr-auto">{it.title}</Link>
                    <span className="sub">{it.sub}</span>
                    <span className="txt">{it.text}</span>
                    <span className="acts">
                      {it.dates.length > 0 && <button className="linkbtn" onClick={() => download([it], lang, "deadline.ics")}>{m.addOne}</button>}
                      {it.k.startsWith("p:") && <Link className="linkbtn" href={`${T[lang].base}/planner?id=${it.k.slice(2)}`}>{lang === "ar" ? "خطط مواعيدك" : "Plan your dates"}</Link>}
                      <button className="linkbtn" onClick={() => removeSaved(it.k)}>{m.remove}</button>
                    </span>
                  </div>
                </li>
              );
            })}
          </ol>
        </>
      )}
      <p className="meta">{m.privacy} {list.length > 0 && m.sharePrivacy}</p>
    </>
  );
}
