"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { T } from "../lib/i18n";
import { EMAIL_TEXT } from "../lib/emailText";

const PURPOSES = ["question", "eligibility", "fees", "followup", "extension", "offer_accept", "offer_decline"];
const LANGS = ["en", "de", "fr", "es", "it", "nl"];
const NAME_KEY = "mng-email-name";

export default function UniversityEmail({ lang }) {
  const t = T[lang];
  const s = EMAIL_TEXT[lang];
  const [f, setF] = useState({ purpose: "question", emailLang: "en", university: "", programme: "", recipient: "", ref: "", notes: "" });
  const [name, setName] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [r, setR] = useState(null);
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => { try { setName(localStorage.getItem(NAME_KEY) || ""); } catch {} }, []);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const sign = (text, n) => text.replaceAll("{{NAME}}", n.trim() || s.namePlaceholder);
  const changeName = (e) => {
    const n = e.target.value;
    // Re-sign an existing draft with the new name.
    if (r?.ok) setBody(sign(r.body, n));
    setName(n);
    try { localStorage.setItem(NAME_KEY, n); } catch {}
  };

  const run = async (e) => {
    e.preventDefault();
    if (busy) return;
    if (f.notes.trim().length < 15 || !f.university.trim()) { setErr(s.tooShort); return; }
    setErr(""); setBusy(true); setR(null);
    try {
      const res = await fetch("/api/email-draft", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...f, lang }) });
      const d = await res.json().catch(() => ({}));
      if (!res.ok) setErr(s.errors[d.error] || s.errors.failed);
      else {
        setR(d);
        if (d.ok) { setSubject(d.subject); setBody(sign(d.body, name)); }
        setTimeout(() => document.getElementById("email-result")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
      }
    } catch { setErr(s.errors.failed); }
    setBusy(false);
  };

  const copy = async () => {
    try { await navigator.clipboard.writeText(`${subject}\n\n${body}`); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };
  const mailto = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>

      <h2>{s.beforeTitle}</h2>
      <ul>{s.before.map((x) => <li key={x}>{x}</li>)}</ul>

      <section className="card letter-review" id="draft">
        <h2>{s.formTitle}</h2>
        <p className="note ask-privacy">{s.privacy}</p>
        <form onSubmit={run} className="review-form">
          <div className="review-opts">
            <label>{s.purpose}
              <select value={f.purpose} onChange={set("purpose")}>{PURPOSES.map((p) => <option key={p} value={p}>{s.purposes[p]}</option>)}</select>
            </label>
            <label>{s.emailLang}
              <select value={f.emailLang} onChange={set("emailLang")}>{LANGS.map((l) => <option key={l} value={l}>{s.langs[l]}</option>)}</select>
            </label>
          </div>
          <div className="review-opts even">
            <label>{s.university}<input dir="auto" type="text" maxLength={150} required value={f.university} placeholder={s.universityPh} onChange={set("university")} /></label>
            <label>{s.programme}<input dir="auto" type="text" maxLength={200} value={f.programme} placeholder={s.programmePh} onChange={set("programme")} /></label>
            <label>{s.recipient}<input dir="auto" type="text" maxLength={120} value={f.recipient} placeholder={s.recipientPh} onChange={set("recipient")} /></label>
            {["followup", "extension", "offer_accept", "offer_decline"].includes(f.purpose) &&
              <label>{s.ref}<input dir="ltr" type="text" maxLength={60} value={f.ref} onChange={set("ref")} /></label>}
          </div>
          <label>{s.notes}
            <textarea dir="auto" rows={6} maxLength={1500} value={f.notes} placeholder={s.notesPh} onChange={set("notes")} />
          </label>
          <label>{s.name}<input dir="auto" type="text" maxLength={80} value={name} onChange={changeName} autoComplete="name" /></label>
          <button type="submit" className="btn gold" disabled={busy}>{busy ? s.busy : s.btn}</button>
        </form>
        {err && <p className="ask-err" role="alert">{err}</p>}

        {r && (
          <div id="email-result" className="review-result" aria-live="polite">
            {!r.ok ? <p><strong>{s.refused}</strong> {r.reason}</p> : (
              <div className="review-form">
                <label>{s.subject}<input dir="auto" type="text" value={subject} onChange={(e) => setSubject(e.target.value)} /></label>
                <label>{s.body} <small className="note">{s.editNote}</small>
                  <textarea dir="auto" rows={14} value={body} onChange={(e) => setBody(e.target.value)} />
                </label>
                {r.placeholders.length > 0 && (
                  <div className="note"><b>{s.fill}:</b> {r.placeholders.map((p) => <bdi key={p} className="email-ph">{p}</bdi>)}</div>
                )}
                <p className="tool-strip">
                  <button type="button" className="btn gold" onClick={copy}>{copied ? s.copied : s.copy}</button>
                  <a className="btn ghost" href={mailto}>{s.open}</a>
                </p>
                {r.tips.length > 0 && (
                  <>
                    <h3>{s.tips}</h3>
                    <ul>{r.tips.map((x, i) => <li key={i}>{x}</li>)}</ul>
                  </>
                )}
              </div>
            )}
            <p className="note">{typeof r.left === "number" && <>{s.left(r.left)} · </>}{s.disclaimer}</p>
          </div>
        )}
      </section>

      <p className="tool-strip">
        <Link href={`${t.base}/motivation-letter`}>{s.toolsLink}</Link>
        <Link href={`${t.base}/guide#documents`}>{lang === "ar" ? "قائمة الأوراق لكل دولة" : "Document checklist per country"}</Link>
      </p>
    </>
  );
}
