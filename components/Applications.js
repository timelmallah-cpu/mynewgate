"use client";
// Application tracker: one card per application with its status, deadline, documents and notes.
import { useEffect, useState } from "react";
import Link from "@/components/Link";
import deadlines from "../lib/deadlines.json";
import { T } from "../lib/i18n";
import { APPS_TEXT } from "../lib/appsText";
import { STATUSES, DONE_STATUSES, DOC_IDS } from "../lib/appsCore";
import { getApps, addApp, updateApp, removeApp, onAppsChange, newCustomKey } from "../lib/apps";
import { getSaved, onSavedChange, signedIn } from "../lib/saved";
import { ACC } from "../lib/accountText";
import { fmtDate } from "./ScholarshipParts";
import { download } from "./MyList";
import Upgrade from "./Upgrade";

const today = () => new Date().toISOString().slice(0, 10);
const daysLeft = (iso) => Math.round((new Date(iso + "T12:00:00Z") - new Date(today() + "T12:00:00Z")) / 864e5);

// The programme's next published deadline, used to suggest a date when tracking starts.
export function nextDeadline(id) {
  const p = deadlines.find((x) => String(x.id) === String(id));
  return p?.dates.find((d) => d.d >= today()) || null;
}

function info(a, lang) {
  const t = T[lang];
  if (a.k.startsWith("c:")) return { title: a.c.n, sub: [a.c.u, a.c.co].filter(Boolean).join(" · "), href: null };
  const id = a.k.slice(2);
  const p = deadlines.find((x) => String(x.id) === id);
  if (!p) return { title: APPS_TEXT[lang].gone, sub: "", href: null };
  return { title: p.name, sub: `${p.university} · ${t.countries[p.country]}`, href: `${t.base}/programme/${p.id}` };
}

function AppCard({ a, lang }) {
  const s = APPS_TEXT[lang];
  const base = T[lang].base;
  const it = info(a, lang);
  const [newDoc, setNewDoc] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [note, setNote] = useState(a.note);
  useEffect(() => setNote(a.note), [a.note]);
  const up = (patch) => updateApp(a.k, patch);
  const left = a.dl ? daysLeft(a.dl) : null;
  const active = !DONE_STATUSES.includes(a.st);
  const urgent = active && left !== null && left >= 0 && left <= 14;
  const all = DOC_IDS.length + a.extra.length;
  const ready = a.done.length + a.extra.filter((x) => x.d).length;
  const suggested = a.k.startsWith("p:") ? nextDeadline(a.k.slice(2)) : null;
  const id = a.k.replace(":", "-");
  const toggle = (d) => up({ done: a.done.includes(d) ? a.done.filter((x) => x !== d) : [...a.done, d] });
  const addDoc = (e) => {
    e.preventDefault();
    const v = newDoc.trim();
    if (!v) return;
    up({ extra: [...a.extra, { t: v, d: false }] });
    setNewDoc("");
  };

  return (
    <li className={`app-card st-${a.st}${urgent ? " soon" : ""}`}>
      <div className="app-head">
        <div className="app-name">
          {it.href ? <Link href={it.href} className="ltr-auto">{it.title}</Link> : <b className="ltr-auto">{it.title}</b>}
          {it.sub && <span className="sub">{it.sub}</span>}
        </div>
        <label className="app-status">
          <span className="sr-only">{s.statusLabel}</span>
          <select value={a.st} onChange={(e) => up({ st: e.target.value, ...(e.target.value === "sent" && !a.sent ? { sent: today() } : {}) })}>
            {STATUSES.map((x) => <option key={x} value={x}>{s.status[x]}</option>)}
          </select>
        </label>
      </div>

      <div className="app-dates">
        <label htmlFor={`dl-${id}`}>{s.deadline}</label>
        <input id={`dl-${id}`} type="date" value={a.dl} onChange={(e) => up({ dl: e.target.value })} />
        {active && (
          <b className="app-left">{left === null ? s.noDeadline : left < 0 ? s.passed : s.daysLeft(left)}</b>
        )}
        {a.dl && suggested && a.dl === suggested.d && <span className="app-hint">{s.deadlineNote}</span>}
        {a.st !== "plan" && a.st !== "prep" && (
          <>
            <label htmlFor={`sent-${id}`}>{s.sentOn}</label>
            <input id={`sent-${id}`} type="date" value={a.sent} onChange={(e) => up({ sent: e.target.value })} />
          </>
        )}
      </div>

      <details className="app-docs">
        <summary>{s.docsSummary(ready, all)}</summary>
        <p className="app-hint">{s.docsNote}</p>
        <ul>
          {DOC_IDS.map((d) => (
            <li key={d}>
              <label><input type="checkbox" checked={a.done.includes(d)} onChange={() => toggle(d)} /> {s.docs[d]}</label>
              {s.docTools[d] && <Link className="app-tool" href={`${base}${s.docTools[d][0]}`}>{s.docTools[d][1]}</Link>}
            </li>
          ))}
          {a.extra.map((x, i) => (
            <li key={`x${i}`}>
              <label><input type="checkbox" checked={x.d} onChange={() => up({ extra: a.extra.map((y, j) => (j === i ? { ...y, d: !y.d } : y)) })} /> <bdi>{x.t}</bdi></label>
              <button type="button" className="linkbtn" onClick={() => up({ extra: a.extra.filter((_, j) => j !== i) })}>{s.removeDoc}</button>
            </li>
          ))}
        </ul>
        <form className="app-adddoc" onSubmit={addDoc}>
          <input value={newDoc} maxLength={120} onChange={(e) => setNewDoc(e.target.value)} placeholder={s.addDocPh} aria-label={s.addDoc} />
          <button className="btn small ghost" type="submit">{s.addDoc}</button>
        </form>
      </details>

      <details className="app-notes" open={!!a.note || undefined}>
        <summary>{s.notes}</summary>
        <textarea rows={3} maxLength={1000} value={note} placeholder={s.notesPh} aria-label={s.notes}
          onChange={(e) => setNote(e.target.value)} onBlur={() => note !== a.note && up({ note })} />
      </details>

      <div className="acts">
        {a.dl && active && (
          <button type="button" className="linkbtn" onClick={() => download([{ k: a.k, title: it.title, sub: it.sub, text: s.icsTitle, href: it.href || `${base}/applications`, dates: [{ d: a.dl }] }], lang, "deadline.ics")}>{s.calendar}</button>
        )}
        {it.href && <Link className="linkbtn" href={it.href}>{s.open}</Link>}
        {confirm ? (
          <>
            <button type="button" className="linkbtn danger" onClick={() => removeApp(a.k)}>{s.confirmRemove}</button>
            <button type="button" className="linkbtn" onClick={() => setConfirm(false)}>{s.cancel}</button>
          </>
        ) : (
          <button type="button" className="linkbtn" onClick={() => setConfirm(true)}>{s.remove}</button>
        )}
      </div>
    </li>
  );
}

export default function Applications({ lang }) {
  const t = T[lang];
  const s = APPS_TEXT[lang];
  const [apps, setApps] = useState(null);
  const [saved, setSaved] = useState([]);
  const [si, setSi] = useState(true);
  const [full, setFull] = useState(false);
  const [pick, setPick] = useState("");
  const [m, setM] = useState({ n: "", u: "", co: "" });

  useEffect(() => {
    setApps(getApps());
    setSaved(getSaved());
    setSi(signedIn());
    const a = onAppsChange(setApps);
    const b = onSavedChange(setSaved);
    return () => { a(); b(); };
  }, []);
  if (apps === null) return null;

  const tracked = new Set(apps.map((a) => a.k));
  const options = saved.filter((k) => k.startsWith("p:") && !tracked.has(k))
    .map((k) => deadlines.find((x) => `p:${x.id}` === k)).filter(Boolean);
  const order = (x) => (x.dl || "9999");
  const active = apps.filter((a) => !DONE_STATUSES.includes(a.st)).sort((x, y) => order(x).localeCompare(order(y)));
  const done = apps.filter((a) => DONE_STATUSES.includes(a.st)).sort((x, y) => (y.u || 0) - (x.u || 0));
  const counts = STATUSES.map((st) => [st, apps.filter((a) => a.st === st).length]).filter(([, n]) => n);

  const add = (k, seed) => { const ok = addApp(k, seed); setFull(!ok); return ok; };
  const addPicked = () => {
    if (!pick) return;
    const nd = nextDeadline(pick.slice(2));
    if (add(pick, { dl: nd?.d || "" })) setPick("");
  };
  const addManual = (e) => {
    e.preventDefault();
    if (!m.n.trim()) return;
    if (add(newCustomKey(), { c: m })) setM({ n: "", u: "", co: "" });
  };

  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      {!si && <p className="mylist-sync"><Link href={`${t.base}/login?next=${t.base}/applications`}>{ACC[lang].syncHint}</Link></p>}

      {apps.length > 0 && (
        <p className="app-count">
          <b>{s.summaryAll(apps.length)}</b>
          {counts.map(([st, n]) => <span key={st} className={`app-chip st-${st}`}>{s.status[st]}: {n}</span>)}
        </p>
      )}

      {apps.length === 0 ? (
        <div className="how">
          <h2>{s.emptyTitle}</h2>
          <p>{s.empty}</p>
          <p className="row" style={{ marginTop: 12 }}>
            <Link className="btn small" href={`${t.base}/quiz`}>{s.findBtn}</Link>
            <Link className="btn small ghost" href={`${t.base}/my-list`}>{s.listBtn}</Link>
          </p>
        </div>
      ) : (
        <>
          {active.length > 0 && (
            <>
              <h2>{s.activeTitle}</h2>
              <ol className="apps">{active.map((a) => <AppCard key={a.k} a={a} lang={lang} />)}</ol>
            </>
          )}
          {done.length > 0 && (
            <>
              <h2>{s.doneTitle}</h2>
              <ol className="apps">{done.map((a) => <AppCard key={a.k} a={a} lang={lang} />)}</ol>
            </>
          )}
        </>
      )}

      <section className="app-add">
        <h2>{s.addTitle}</h2>
        {full && <Upgrade lang={lang} kind="apps" />}
        <h3>{s.fromList}</h3>
        {options.length ? (
          <div className="app-pick">
            <select value={pick} onChange={(e) => setPick(e.target.value)} aria-label={s.fromList}>
              <option value="">{s.choose}</option>
              {options.map((p) => <option key={p.id} value={`p:${p.id}`}>{p.name} · {p.university}</option>)}
            </select>
            <button className="btn small gold" type="button" disabled={!pick} onClick={addPicked}>{s.add}</button>
          </div>
        ) : <p className="app-hint">{s.noSaved}</p>}
        <h3>{s.manualTitle}</h3>
        <form className="app-manual" onSubmit={addManual}>
          <label>{s.manualName}<input required maxLength={120} value={m.n} onChange={(e) => setM({ ...m, n: e.target.value })} /></label>
          <label>{s.manualUni}<input maxLength={120} value={m.u} onChange={(e) => setM({ ...m, u: e.target.value })} /></label>
          <label>{s.manualCountry}<input maxLength={60} value={m.co} onChange={(e) => setM({ ...m, co: e.target.value })} /></label>
          <button className="btn small" type="submit">{s.add}</button>
        </form>
      </section>

      <p className="meta">{s.privacy}</p>
    </>
  );
}
