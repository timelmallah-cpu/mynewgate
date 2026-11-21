"use client";
// The assistant inside the visas questions tool: it answers follow-up questions about the visitor's own answers
// (purpose, nationality, destination or income), only from the visas data on the site. Same limits as the study assistant.
import { useEffect, useRef, useState } from "react";
import { ASK_TEXT } from "../lib/assistantText";
import { BASE } from "../lib/site";
import Upgrade, { leftText } from "./Upgrade";

const X = {
  ar: {
    title: "اسأل المساعد الذكي عن حالتك",
    lead: "يجيب من معلومات الموقع الرسمية عن إجاباتك أعلاه فقط. لا تكتب رقم جوازك أو بياناتك البنكية.",
    anyLead: "يجيب من معلومات التأشيرات الرسمية على الموقع. اذكر جنسيتك ووجهتك في السؤال. لا تكتب رقم جوازك أو بياناتك البنكية.",
    ex: {
      visit: ["ما الأوراق التي أحتاجها؟", "كم تستغرق التأشيرة وكم رسومها؟", "متى أقدّم قبل السفر؟"],
      study: ["أين أقدّم من بلدي؟", "كم إثبات المال المطلوب؟", "هل أستطيع العمل أثناء الدراسة؟"],
      job: ["أي تأشيرة تناسب حملة البكالوريوس؟", "كم المال المطلوب في كل تأشيرة؟", "ماذا يحدث إذا لم أجد عملاً؟"],
      nomad: ["أي هذه التأشيرات تسمح بإحضار العائلة؟", "ما الأوراق المطلوبة لأرخص خيار؟", "أيها أطول مدة؟"],
      any: ["هل يحتاج المصري تأشيرة لتركيا؟", "ما الدول التي لديها تأشيرة بحث عن عمل؟", "أقل دخل لتأشيرة الرحالة الرقمي؟"],
    },
    anyTitle: "اسأل المساعد الذكي عن التأشيرات",
    placeholder: "اكتب سؤالك عن هذه التأشيرة...",
  },
  en: {
    title: "Ask the AI assistant about your case",
    lead: "It answers from the site's official information about your answers above only. Don't type your passport number or bank details.",
    anyLead: "It answers from the official visa information on the site. Say your nationality and destination in the question. Don't type your passport number or bank details.",
    ex: {
      visit: ["Which documents do I need?", "How long does it take and what does it cost?", "When should I apply before travelling?"],
      study: ["Where do I apply from my country?", "How much proof of funds is needed?", "Can I work while studying?"],
      job: ["Which visa suits a bachelor's holder?", "How much money does each visa need?", "What happens if I don't find a job?"],
      nomad: ["Which of these visas allow family?", "What documents does the cheapest option need?", "Which lasts longest?"],
      any: ["Do Egyptians need a visa for Türkiye?", "Which countries have a job seeker visa?", "Lowest income for a digital nomad visa?"],
    },
    anyTitle: "Ask the AI assistant about visas",
    placeholder: "Type your question about this visa...",
  },
};

export default function VisaAsk({ lang, ctx, base, studyBase, first, id = "vask", level = 3 }) {
  const H = level === 2 ? "h2" : "h3";
  const s = ASK_TEXT[lang];
  const x = X[lang];
  const [msgs, setMsgs] = useState([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");
  const [left, setLeft] = useState(null);
  const [per, setPer] = useState(null);
  const [up, setUp] = useState(null);
  const endRef = useRef(null);
  // Visas pages live outside the study basePath; study pages (student visa steps, country pages) inside it.
  const href = (u) => (u.startsWith("/visas") ? `${base}${u.slice("/visas".length)}` : `${studyBase}${u}`);

  // A question typed in the page's top box arrives as `first` and is asked once.
  const sentFirst = useRef("");
  useEffect(() => {
    if (first && first !== sentFirst.current) { sentFirst.current = first; send(first); }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [first]);

  const send = async (text) => {
    const q = (text ?? input).trim();
    if (q.length < 2 || busy) return;
    setErr(""); setUp(null); setBusy(true); setInput("");
    const history = msgs.map((m) => ({ role: m.role, text: m.text }));
    setMsgs((m) => [...m, { role: "user", text: q }]);
    try {
      const r = await fetch(`${BASE}/api/ask`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ message: q, history, lang, visa: ctx, useAccount: false }) });
      const d = await r.json().catch(() => ({}));
      if (!r.ok) { if (d.error === "limit") setUp({ plus: d.plus, per: d.per }); else setErr(s.errors[d.error] || s.errors.failed); setMsgs((m) => m.slice(0, -1)); setInput(q); }
      else {
        setMsgs((m) => [...m, { role: "model", text: d.answer, sources: d.sources || [] }]);
        if (typeof d.left === "number") { setLeft(d.left); setPer(d.per); }
      }
    } catch { setErr(s.errors.failed); setMsgs((m) => m.slice(0, -1)); setInput(q); }
    setBusy(false);
    setTimeout(() => endRef.current?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 50);
  };

  return (
    <div className="vask" aria-labelledby={`${id}-h`} id={id}>
      <H id={`${id}-h`}>✨ {ctx.p === "any" ? x.anyTitle : x.title}</H>
      <p className="meta">{ctx.p === "any" ? x.anyLead : x.lead}</p>
      {!msgs.length && (
        <div className="city-chips">
          {(x.ex[ctx.p] || []).map((q) => <button key={q} type="button" onClick={() => send(q)} disabled={busy}>{q}</button>)}
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
                <ul>{m.sources.map((y) => <li key={y.url}><a href={href(y.url)}>{y.title}</a></li>)}</ul>
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
        <textarea dir="auto" rows={2} maxLength={600} value={input} placeholder={x.placeholder} aria-label={x.placeholder}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); send(); } }} />
        <button type="submit" className="btn gold" disabled={busy || input.trim().length < 2}>{busy ? "..." : s.send}</button>
      </form>
      <p className="note ask-foot">{left !== null && <span>{leftText(lang, left, per)} · </span>}{s.warn}</p>
    </div>
  );
}
