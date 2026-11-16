"use client";
import { useState } from "react";
import Link from "next/link";
import { T } from "../lib/i18n";
import { ACC } from "../lib/accountText";

export default function Login({ lang }) {
  const a = ACC[lang];
  const base = T[lang].base;
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [state, setState] = useState({ s: "idle" });

  async function submit(e) {
    e.preventDefault();
    if (!consent) return setState({ s: "err", m: a.errConsent });
    setState({ s: "busy" });
    const next = new URLSearchParams(window.location.search).get("next") || undefined;
    try {
      const r = await fetch("/api/auth/request", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email, consent, lang, next }) });
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
          <p>{a.loginHow}</p>
          <label htmlFor="acc-email">{a.email}</label>
          <input id="acc-email" type="email" dir="ltr" autoComplete="email" inputMode="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          <label className="acc-check">
            <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} />
            <span>{a.consentA}<Link href={`${base}/privacy`}>{a.consentLink}</Link>{a.consentB}</span>
          </label>
          <button className="btn" type="submit" disabled={state.s === "busy"}>{state.s === "busy" ? a.sending : a.send}</button>
          {state.s === "err" && <p className="acc-err" role="alert">{state.m}</p>}
        </form>
      )}
    </article>
  );
}
