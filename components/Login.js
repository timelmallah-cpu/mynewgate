"use client";
import { useEffect, useState } from "react";
import Link from "@/components/Link";
import { T } from "../lib/i18n";
import { ACC } from "../lib/accountText";
import { BASE } from "../lib/site";

export default function Login({ lang }) {
  const a = ACC[lang];
  const base = T[lang].base;
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState({ s: "idle" });
  const [next, setNext] = useState("");
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    setNext(q.get("next") || "");
    const err = { consent: a.errConsent, off: a.errOff, limit: a.errLimit, fail: a.errFail, google: a.errGoogle, cancel: a.errCancel }[q.get("err")];
    if (err) setState({ s: "err", m: err });
  }, [a]);
  const googleHref = `${BASE}/api/auth/google/start?lang=${lang}&consent=1${next ? `&next=${encodeURIComponent(next)}` : ""}`;

  async function submit(e) {
    e.preventDefault();
    if (!consent) return setState({ s: "err", m: a.errConsent });
    setState({ s: "busy" });
    try {
      const r = await fetch(`${BASE}/api/auth/request`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, consent, lang, next: next || undefined }) });
      const d = await r.json().catch(() => ({}));
      if (r.ok) return setState({ s: "sent", dev: d.devLink });
      const m = { email: a.errEmail, consent: a.errConsent, limit: a.errLimit, not_configured: a.errOff }[d.error] || a.errFail;
      setState({ s: "err", m });
    } catch { setState({ s: "err", m: a.errFail }); }
  }

  return (
    <article className="acc">
      <h1>{a.loginTitle}</h1>
      <p className="lead">{a.loginLead}</p>
      {state.s === "sent" ? (
        <div className="acc-box" role="status">
          <p>{a.sent}</p>
          {state.dev && <p className="acc-dev">{a.devLink} <a href={state.dev}>{state.dev}</a></p>}
        </div>
      ) : (
        <form className="acc-box acc-form" onSubmit={submit} noValidate>
          <label className="acc-check">
            <input type="checkbox" checked={consent} onChange={(e) => { setConsent(e.target.checked); if (e.target.checked && state.s === "err") setState({ s: "idle" }); }} />
            <span>{a.consentA}<Link href={`${base}/privacy`}>{a.consentLink}</Link>{a.consentMid}<Link href={`${base}/terms`}>{a.termsLink}</Link>{a.consentB}</span>
          </label>
          <a className={`btn ghost acc-google${consent ? "" : " is-off"}`} href={consent ? googleHref : undefined} aria-disabled={!consent}
            onClick={(e) => { if (!consent) { e.preventDefault(); setState({ s: "err", m: a.errConsent }); } }}>
            <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path fill="#4285F4" d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.4h6.5a5.6 5.6 0 0 1-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.7z"/><path fill="#34A853" d="M12 24c3.2 0 6-1.1 7.9-2.9l-3.9-3c-1.1.7-2.4 1.2-4 1.2-3.1 0-5.7-2.1-6.6-4.9h-4v3.1A12 12 0 0 0 12 24z"/><path fill="#FBBC05" d="M5.4 14.4a7.2 7.2 0 0 1 0-4.7V6.6h-4a12 12 0 0 0 0 10.9z"/><path fill="#EA4335" d="M12 4.8c1.7 0 3.3.6 4.5 1.8l3.4-3.4A12 12 0 0 0 1.4 6.6l4 3.1C6.3 6.9 8.9 4.8 12 4.8z"/></svg>
            <span>{a.google}</span>
          </a>
          <p className="acc-note">{a.googleNote}</p>
          <hr className="acc-or" />
          <p>{a.loginHow}</p>
          <label htmlFor="acc-email">{a.email}</label>
          <input id="acc-email" type="email" dir="ltr" autoComplete="email" inputMode="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <button className="btn" type="submit" disabled={state.s === "busy"}>{state.s === "busy" ? a.sending : a.send}</button>
          {state.s === "err" && <p className="acc-err" role="alert">{state.m}</p>}
        </form>
      )}
    </article>
  );
}
