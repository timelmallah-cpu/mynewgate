"use client";
import { useEffect, useRef, useState } from "react";
import Link from "@/components/Link";
import { T } from "../lib/i18n";
import { ASK_TEXT } from "../lib/assistantText";
import { BASE } from "../lib/site";
import Upgrade, { leftText } from "./Upgrade";
import { signedIn } from "../lib/saved";
import SaveButton from "./SaveButton";

const MEM_KEY = "mng-ask-memory";
const CARD = {
  ar: { title: "برامج من الإجابة", fee: "الرسوم", next: "أقرب موعد", est: "تقديري", none: "غير منشور", open: "التفاصيل والمصدر", cmp: "قارن هذه البرامج", lvl: { master: "ماجستير", bachelor: "بكالوريوس", phd: "دكتوراه" } },
  en: { title: "Programmes from this answer", fee: "Fee", next: "Next deadline", est: "estimate", none: "Not published", open: "Details and source", cmp: "Compare these programmes", lvl: { master: "Master's", bachelor: "Bachelor's", phd: "Doctorate" } },
};
const day = (d, lang) => new Date(d + "T12:00:00Z").toLocaleDateString(lang === "ar" ? "ar-EG-u-nu-latn" : "en-GB", { day: "numeric", month: "long", year: "numeric" });

function Cards({ cards, lang, base }) {
  const c = CARD[lang];
  const ids = cards.map((x) => x.id).filter((x) => /^\d+$/.test(x));
  return (
    <div className="ask-cards">
      <span className="ask-cards-h">{c.title}</span>
      <ul>
        {cards.map((x) => (
          <li key={x.id} className="ask-card">
            <Link href={`${base}${x.url}`} className="ask-card-name">{x.name}</Link>
            <span className="meta">{x.university} · {x.country} · {c.lvl[x.level] || x.level}</span>
            <dl>
              <div><dt>{c.fee}</dt><dd>{x.fee}</dd></div>
              <div><dt>{c.next}</dt><dd>{x.next ? `${day(x.next.d, lang)}${x.next.est ? ` (${c.est})` : ""}` : c.none}</dd></div>
            </dl>
            <div className="ask-card-act"><SaveButton k={`p:${x.id}`} lang={lang} /> <Link className="btn ghost small" href={`${base}${x.url}`}>{c.open}</Link></div>
          </li>
        ))}
      </ul>
      {ids.length > 1 && <Link className="btn small" href={`${base}/compare?ids=${ids.join(",")}`}>{c.cmp}</Link>}
    </div>
  );
}
const SCARD = {
  ar: { title: "منح من الإجابة", next: "أقرب موعد", est: "متوقع", none: "غير منشور", open: "التفاصيل والمصدر" },
  en: { title: "Scholarships from this answer", next: "Next deadline", est: "expected", none: "Not published", open: "Details and source" },
};
function SchCards({ cards, lang, base }) {
  const c = SCARD[lang];
  return (
    <div className="ask-cards">
      <span className="ask-cards-h">{c.title}</span>
      <ul>
        {cards.map((x) => (
          <li key={x.id} className="ask-card">
            <Link href={`${base}${x.url}`} className="ask-card-name">{x.name}</Link>
            <span className="meta">{x.funder}</span>
            <p className="meta">{x.summary}</p>
            <dl><div><dt>{c.next}</dt><dd>{x.next ? `${day(x.next.d, lang)}${x.next.est ? ` (${c.est})` : ""}` : c.none}</dd></div></dl>
            <div className="ask-card-act"><SaveButton k={`s:${x.id}`} lang={lang} /> <Link className="btn ghost small" href={`${base}${x.url}`}>{c.open}</Link></div>
          </li>
        ))}
      </ul>
    </div>
  );
}
const MEM = {
  ar: { label: "استخدم بيانات حسابي في الإجابة (إجاباتك المحفوظة وقائمتك وطلباتك)", next: "ما خطوتي التالية؟", on: "المساعد قرأ بيانات حسابك" },
  en: { label: "Use my account data in answers (your saved answers, list and applications)", next: "What is my next step?", on: "The assistant read your account data" },
};

export default function Assistant({ lang }) {
  const t = T[lang];
  const s = ASK_TEXT[lang];
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [left, setLeft] = useState(null);
  const [per, setPer] = useState(null);
  const [up, setUp] = useState(null);
  const endRef = useRef(null);
  const [inAcc, setInAcc] = useState(false);
  const [useMem, setUseMem] = useState(true);
  useEffect(() => { setInAcc(signedIn()); try { setUseMem(localStorage.getItem(MEM_KEY) !== "0"); } catch {} }, []);
  const toggleMem = (v) => { setUseMem(v); try { localStorage.setItem(MEM_KEY, v ? "1" : "0"); } catch {} };
  const mm = MEM[lang];

  const setMsg = (i, patch) => setMsgs((m) => m.map((x, j) => (j === i ? { ...x, ...patch } : x)));
  const feedback = (i, vote, report = false) => {
    const m = msgs[i];
    const question = msgs.slice(0, i).reverse().find((x) => x.role === "user")?.text || "";
    fetch(`${BASE}/api/ask/feedback`, {
      method: "POST", headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ vote, report, lang, ...(report ? { question, answer: m.text, sources: (m.sources || []).map((x) => x.url) } : {}) }),
    }).catch(() => {});
  };
  const vote = (i, v) => { setMsg(i, { vote: v, fb: v === "down" ? "ask" : "done" }); feedback(i, v); };
  const report = (i, yes) => { setMsg(i, { fb: yes ? "sent" : "done" }); if (yes) feedback(i, "down", true); };

  // A question typed on the home page arrives as ?q=...; ask it once, then clean the address.
  const started = useRef(false);
  useEffect(() => {
    if (started.current) return;
    started.current = true;
    const q = new URLSearchParams(window.location.search).get("q");
    if (q && q.trim().length >= 2) {
      window.history.replaceState(null, "", window.location.pathname);
      send(q.slice(0, 600));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const send = async (text) => {
    const q = (text ?? input).trim();
    if (!q || busy) return;
    setErr(""); setUp(null); setBusy(true); setInput("");
    const history = msgs.map((m) => ({ role: m.role, text: m.text }));
    setMsgs((m) => [...m, { role: "user", text: q }]);
    try {
      const r = await fetch(`${BASE}/api/ask`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: q, history, lang, useAccount: useMem }) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) { if (d.error === "limit") setUp({ plus: d.plus, per: d.per }); else setErr(s.errors[d.error] || s.errors.failed); setMsgs((m) => m.slice(0, -1)); setInput(q); }
      else {
        setMsgs((m) => [...m, { role: "model", text: d.answer, sources: d.sources || [], cards: d.cards || [], schCards: d.schCards || [], memory: !!d.memory }]);
        if (typeof d.left === "number") { setLeft(d.left); setPer(d.per); }
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
            {inAcc && useMem && <button type="button" onClick={() => send(mm.next)} disabled={busy}>{mm.next}</button>}
            {s.examples.map((x) => <button key={x} type="button" onClick={() => send(x)} disabled={busy}>{x}</button>)}
          </div>
        </div>
      )}

      <div className="ask-log" aria-live="polite">
        {msgs.map((m, i) => (
          <div key={i} className={`ask-msg ${m.role === "user" ? "me" : "bot"}`}>
            <span className="ask-who">{m.role === "user" ? s.you : s.bot}</span>
            <p dir="auto">{m.text}</p>
            {m.cards?.length > 0 && <Cards cards={m.cards} lang={lang} base={t.base} />}
            {m.schCards?.length > 0 && <SchCards cards={m.schCards} lang={lang} base={t.base} />}
            {m.memory && <small className="note ask-mem">{mm.on}</small>}
            {m.role === "model" && (
              <div className="ask-fb">
                {!m.vote && (
                  <>
                    <span>{s.helpful}</span>
                    <button type="button" onClick={() => vote(i, "up")} aria-label={s.up} title={s.up}>👍</button>
                    <button type="button" onClick={() => vote(i, "down")} aria-label={s.down} title={s.down}>👎</button>
                  </>
                )}
                {m.fb === "ask" && (
                  <span className="ask-report">
                    {s.reportAsk}{" "}
                    <button type="button" className="linkish" onClick={() => report(i, true)}>{s.reportYes}</button>{" · "}
                    <button type="button" className="linkish" onClick={() => report(i, false)}>{s.reportNo}</button>
                  </span>
                )}
                {m.fb === "done" && <span>{s.thanks}</span>}
                {m.fb === "sent" && <span>{s.reportDone}</span>}
              </div>
            )}
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
      {up && <Upgrade lang={lang} kind="ask" plus={up.plus} per={up.per} />}

      <form className="ask-form" onSubmit={(e) => { e.preventDefault(); send(); }}>
        <textarea dir="auto" rows={2} maxLength={600} value={input} placeholder={s.placeholder} aria-label={s.placeholder}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }} />
        <button type="submit" className="btn gold" disabled={busy || input.trim().length < 2}>{busy ? "..." : s.send}</button>
      </form>
      {inAcc && <label className="note ask-memopt"><input type="checkbox" checked={useMem} onChange={(e) => toggleMem(e.target.checked)} /> {mm.label}</label>}
      <p className="note ask-foot">
        {left !== null && <span>{leftText(lang, left, per)} · </span>}
        {s.warn}
        {msgs.length > 0 && <> · <button type="button" className="linkish" onClick={() => { setMsgs([]); setErr(""); }}>{s.reset}</button></>}
      </p>
    </>
  );
}
