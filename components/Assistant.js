"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import { T } from "../lib/i18n";
import { ASK_TEXT } from "../lib/assistantText";

export default function Assistant({ lang }) {
  const t = T[lang];
  const s = ASK_TEXT[lang];
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [left, setLeft] = useState(null);
  const endRef = useRef(null);

  const send = async (text) => {
    const q = (text ?? input).trim();
    if (!q || busy) return;
    setErr(""); setBusy(true); setInput("");
    const history = msgs.map((m) => ({ role: m.role, text: m.text }));
    setMsgs((m) => [...m, { role: "user", text: q }]);
    try {
      const r = await fetch("/api/ask", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: q, history, lang }) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) { setErr(s.errors[d.error] || s.errors.failed); setMsgs((m) => m.slice(0, -1)); setInput(q); }
      else {
        setMsgs((m) => [...m, { role: "model", text: d.answer, sources: d.sources || [] }]);
        if (typeof d.left === "number") setLeft(d.left);
      }
    } catch { setErr(s.errors.failed); setMsgs((m) => m.slice(0, -1)); setInput(q); }
    setBusy(false);
    setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" }), 50);
  };

  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <p className="note ask-privacy">{s.privacy} <Link href={`${t.base}/privacy`}>{s.privacyLink}</Link></p>

      {!msgs.length && (
        <div className="ask-examples">
          <p className="note">{s.examplesTitle}</p>
          <div className="city-chips">
            {s.examples.map((x) => <button key={x} type="button" onClick={() => send(x)} disabled={busy}>{x}</button>)}
          </div>
        </div>
      )}

      <div className="ask-log" aria-live="polite">
        {msgs.map((m, i) => (
          <div key={i} className={`ask-msg ${m.role === "user" ? "me" : "bot"}`}>
            <span className="ask-who">{m.role === "user" ? s.you : s.bot}</span>
            <p dir="auto">{m.text}</p>
            {m.sources?.length > 0 && (
              <div className="ask-src">
                <span>{s.sources}</span>
                <ul>{m.sources.map((x) => <li key={x.url}><Link href={`${t.base}${x.url}`}>{x.title}</Link></li>)}</ul>
              </div>
            )}
          </div>
        ))}
        {busy && <div className="ask-msg bot"><span className="ask-who">{s.bot}</span><p className="note">{s.sending}</p></div>}
        <div ref={endRef} />
      </div>

      {err && <p className="ask-err" role="alert">{err}</p>}

      <form className="ask-form" onSubmit={(e) => { e.preventDefault(); send(); }}>
        <textarea dir="auto" rows={2} maxLength={600} value={input} placeholder={s.placeholder} aria-label={s.placeholder}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }} />
        <button type="submit" className="btn gold" disabled={busy || input.trim().length < 2}>{busy ? "..." : s.send}</button>
      </form>
      <p className="note ask-foot">
        {left !== null && <span>{s.left(left)} · </span>}
        {s.warn}
        {msgs.length > 0 && <> · <button type="button" className="linkish" onClick={() => { setMsgs([]); setErr(""); }}>{s.reset}</button></>}
      </p>
    </>
  );
}
