"use client";
import { useState, useEffect, useRef } from "react";
import { T, CONTACT_EMAIL } from "../lib/i18n";

// Sends through Web3Forms (https://web3forms.com). The access key is designed to be
// public; it lives in the Vercel env var NEXT_PUBLIC_WEB3FORMS_KEY. Without it the
// form is hidden and only the email link shows.
const KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactForm({ lang }) {
  const c = T[lang].contact;
  const f = c.form;
  const [state, setState] = useState("idle"); // idle | sending | sent | error
  const topicRef = useRef(null);
  const msgRef = useRef(null);

  // "Report an error" links open this page with ?report=<page details>; prefill the form.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (q.get("topic") === "ads" && topicRef.current) {
      topicRef.current.value = topicRef.current.options[3]?.value || "";
      return;
    }
    const r = q.get("report");
    if (!r || !topicRef.current || !msgRef.current) return;
    topicRef.current.value = topicRef.current.options[1]?.value || "";
    msgRef.current.value = `${f.reportPrefix}\n${r}\n\n`;
    msgRef.current.focus();
    msgRef.current.setSelectionRange(msgRef.current.value.length, msgRef.current.value.length);
  }, [f.reportPrefix]);

  if (!KEY) return null;

  async function submit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    if (data.botcheck) return; // honeypot filled: a bot
    setState("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: KEY,
          subject: `${c.subject}: ${data.topic}`,
          from_name: "Bawabat AlDirasa",
          name: data.name,
          email: data.email,
          replyto: data.email,
          topic: data.topic,
          message: data.message,
          language: lang,
          page: typeof window !== "undefined" ? window.location.href : "",
        }),
      });
      const json = await res.json();
      if (json.success) { setState("sent"); e.target.reset(); } else setState("error");
    } catch {
      setState("error");
    }
  }

  if (state === "sent") {
    return (
      <div className="form-done" role="status">
        <h2>{f.sentTitle}</h2>
        <p>{f.sentText}</p>
        <button className="btn ghost small" onClick={() => setState("idle")}>{f.another}</button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="field">
        <label htmlFor="cf-name">{f.name}</label>
        <input id="cf-name" name="name" required maxLength={100} autoComplete="name" />
      </div>
      <div className="field">
        <label htmlFor="cf-email">{f.email}</label>
        <input id="cf-email" name="email" type="email" required maxLength={150} autoComplete="email" dir="ltr" />
      </div>
      <div className="field">
        <label htmlFor="cf-topic">{f.topic}</label>
        <select id="cf-topic" name="topic" required defaultValue="" ref={topicRef}>
          <option value="" disabled>{f.choose}</option>
          {c.topics.map(([title]) => {
            const v = title.replace(/[:：]\s*$/, "").trim();
            return <option key={v} value={v}>{v}</option>;
          })}
        </select>
      </div>
      <div className="field">
        <label htmlFor="cf-msg">{f.message}</label>
        <textarea ref={msgRef} id="cf-msg" name="message" required minLength={10} maxLength={4000} rows={6} placeholder={f.placeholder} />
      </div>
      <input type="checkbox" name="botcheck" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <p className="note">{f.privacy}</p>
      {state === "error" && (
        <p className="form-error" role="alert">
          {f.error} <a className="ltr" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      )}
      <button className="btn gold" type="submit" disabled={state === "sending"}>
        {state === "sending" ? f.sending : f.send}
      </button>
    </form>
  );
}
