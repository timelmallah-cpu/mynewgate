"use client";
// "Which visa do I need?" in questions: purpose -> nationality -> destination / income -> answer + link.
// Covers visit, study, job search and remote work (digital nomad). Nothing is saved; the answers live
// only in the URL hash (#visit-eg-fr, #study-eg-de, #job-eg, #nomad-eg-3000) so a result can be shared.
import { useEffect, useRef, useState } from "react";
import Flag from "../lib/Flag";
import VisaAsk from "./VisaAsk";
import { natSlug } from "../lib/visitPairs";
import { ORIGINS, ORIGIN_NAME, DEST, KIND, VTEXT } from "../lib/visit";
import { NOMADS, NTEXT, nationalityOk } from "../lib/nomadVisas";

const W = {
  ar: {
    q1: "ما سبب سفرك؟", q2: "ما جنسيتك (جواز السفر)؟", q3v: "إلى أين تريد السفر؟", q3s: "أين تريد أن تدرس؟", q3n: "كم دخلك الشهري من العمل عن بُعد؟ (باليورو)",
    p: { visit: ["زيارة أو سياحة", "رحلة قصيرة، زيارة عائلة، مؤتمر"], study: ["دراسة", "جامعة أو لغة أو دراسة مهنية"], job: ["البحث عن عمل", "السفر للبحث عن وظيفة"], nomad: ["العمل عن بُعد", "تأشيرات الرحالة الرقميين"], live: ["الهجرة والإقامة الدائمة", "قريباً"] },
    step: (n) => `السؤال ${n}`, back: "رجوع", restart: "ابدأ من جديد", pick: "اختر",
    studyRes: (n, d) => `تأشيرة الدراسة إلى ${d} لحامل جواز ${n}`,
    studyReady: "عندنا خطوات مفصّلة لهذا الطريق: أين تحجز الموعد، والأوراق، والرسوم، وإثبات المال.",
    studyGeneral: "عندنا الخطوات العامة لتأشيرة الدراسة في هذه الدولة؛ الجهة التي تقدّم لديها من بلدك مكتوبة في الصفحة مع رابطها الرسمي، وبعض التفاصيل للتحقق.",
    studyGo: "افتح خطوات تأشيرة الدراسة", studyProg: "وابحث عن برامج في هذه الدولة",
    jobRes: "تأشيرات البحث عن عمل بدون عرض عمل مسبق",
    jobSoon: "كل تأشيرة لها شروطها: افتح الصفحة لتعرف هل تناسبك. قريباً: البطاقة الزرقاء الأوروبية، وتأشيرة العامل الماهر البريطانية، وطرق النقاط في كندا وأستراليا ونيوزيلندا.",
    closed: "متوقفة حالياً", gcc: "مواطنو الخليج يدخلون الإمارات بدون تأشيرة", calc: "احسب نقاطك",
    nomadRes: (k) => (!k ? "لا توجد تأشيرة في قائمتنا تناسب هذا الدخل" : k === 1 ? "تأشيرة واحدة تناسب هذا الدخل" : k === 2 ? "تأشيرتان تناسبان هذا الدخل" : k <= 10 ? `${k} تأشيرات تناسب هذا الدخل` : `${k} تأشيرة تناسب هذا الدخل`),
    nomadOther: "تأشيرات تحتاج دخلاً أعلى أو ليس لها رقم شهري", nomadAll: "كل تأشيرات الرحالة الرقميين",
    liveSoon: "هذا الجزء قيد الإعداد: الإقامة الدائمة والهجرة في كندا وأستراليا ونيوزيلندا وبريطانيا وأوروبا. إلى أن يجهز، تجد طرق الإقامة الطويلة المتاحة الآن أسفل هذه الصفحة.",
    next: "التالي", show: "اعرض النتيجة", stepOf: (a, b) => `السؤال ${a} من ${b}`, answers: "إجاباتك", edit: "تعديل", labels: { p: "سبب السفر", o: "الجنسية", d: "الوجهة", inc: "الدخل الشهري" }, incNote: "اكتب المبلغ باليورو قبل الضرائب كما في عقدك أو كشف حسابك. لا نحفظه.",
  },
  en: {
    q1: "Why are you travelling?", q2: "What is your nationality (passport)?", q3v: "Where do you want to go?", q3s: "Where do you want to study?", q3n: "How much do you earn a month working remotely? (euros)",
    p: { visit: ["Visit or tourism", "Short trip, family visit, conference"], study: ["Study", "University, language or vocational study"], job: ["Look for work", "Travel to search for a job"], nomad: ["Work remotely", "Digital nomad visas"], live: ["Immigration and permanent residence", "Coming soon"] },
    step: (n) => `Question ${n}`, back: "Back", restart: "Start again", pick: "Choose",
    studyRes: (n, d) => `Student visa to ${d} for a ${n} passport`,
    studyReady: "We have detailed steps for this route: where to book, documents, fees and proof of funds.",
    studyGeneral: "We have the general student visa steps for this country; where to apply from your country is on the page with its official link, and some details are to verify.",
    studyGo: "Open the student visa steps", studyProg: "and find programmes in this country",
    jobRes: "Visas to look for work without a job offer",
    jobSoon: "Each visa has its own conditions: open the page to see if it fits you. Coming soon: the EU Blue Card, the UK Skilled Worker visa, and the points routes of Canada, Australia and New Zealand.",
    closed: "Suspended", gcc: "GCC citizens enter the UAE without a visa", calc: "Check your points",
    nomadRes: (k) => (k === 1 ? "1 visa fits this income" : k ? `${k} visas fit this income` : "No visa on our list fits this income"),
    nomadOther: "Visas that need a higher income or give no monthly figure", nomadAll: "All digital nomad visas",
    liveSoon: "This part is being prepared: permanent residence and immigration in Canada, Australia, New Zealand, the UK and Europe. Until then, the long-stay routes available now are further down this page.",
    next: "Next", show: "Show the result", stepOf: (a, b) => `Question ${a} of ${b}`, answers: "Your answers", edit: "Edit", labels: { p: "Purpose", o: "Nationality", d: "Destination", inc: "Monthly income" }, incNote: "Type the amount in euros before tax, as in your contract or bank statement. We don't save it.",
  },
};
const PURPOSES = ["visit", "study", "job", "nomad", "live"];
const fmt = (n, lang) => Math.round(n).toLocaleString(lang === "ar" ? "ar-EG-u-nu-latn" : "en-GB");

export default function VisaWizard({ lang, base, studyBase, countries, studyReady, jobRoutes }) {
  const t = VTEXT[lang];
  const w = W[lang];
  const nt = NTEXT[lang];
  const [p, setP] = useState("");
  const [o, setO] = useState("");
  const [d, setD] = useState("");
  const [inc, setInc] = useState("");
  const [step, setStep] = useState(0);
  const [editing, setEditing] = useState(false);
  const top = useRef(null);

  // The questions depend on the purpose: job search has no third question, "immigration" (soon) has only the first.
  const keys = p === "live" ? ["p"] : p === "job" ? ["p", "o"] : ["p", "o", p === "nomad" ? "inc" : "d"];
  const done = step >= keys.length;
  const v = Number(String(inc).replace(/[^\d]/g, ""));

  useEffect(() => {
    const h = (location.hash || "").slice(1).split("-");
    if (!PURPOSES.includes(h[0])) return;
    setP(h[0]);
    if (h[0] === "live") { setStep(1); return; }
    if (!(h[1] && ORIGIN_NAME[h[1]])) { setStep(1); return; }
    setO(h[1]);
    if (h[0] === "job") { setStep(2); return; }
    if (h[0] === "visit" && DEST.some((x) => x.id === h[2])) { setD(h[2]); setStep(3); }
    else if (h[0] === "study" && countries[h[2]]) { setD(h[2]); setStep(3); }
    else if (h[0] === "nomad" && /^\d+$/.test(h[2] || "")) { setInc(h[2]); setStep(3); }
    else setStep(2);
  }, [countries]);

  useEffect(() => {
    if (!done) { if (location.hash) history.replaceState(null, "", location.pathname + location.search); return; }
    const parts = [p, o, p === "nomad" ? (v || "") : d].filter(Boolean);
    history.replaceState(null, "", `#${parts.join("-")}`);
  }, [done, p, o, d, v]);

  // Each new question starts at the top of the tool, like the study questions.
  const first = useRef(true);
  useEffect(() => {
    if (first.current) { first.current = false; return; }
    const r = top.current?.getBoundingClientRect();
    if (r && r.top < 0) top.current.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
  }, [step]);

  const sorted = [...ORIGINS].sort((a, b) => a[lang].localeCompare(b[lang], lang));
  const destOpts = DEST.map((x) => ({ id: x.id, label: x.name[lang], flag: x.id }));
  const studyOpts = Object.entries(countries).sort((a, b) => a[1].localeCompare(b[1], lang)).map(([c, n]) => ({ id: c, label: n, flag: c }));
  const Q = {
    p: { q: w.q1, opts: PURPOSES.map((x) => ({ id: x, label: w.p[x][0], sub: w.p[x][1] })), val: p },
    o: { q: w.q2, opts: sorted.map((x) => ({ id: x.c, label: x[lang] })), val: o, two: true },
    d: { q: p === "study" ? w.q3s : w.q3v, opts: p === "study" ? studyOpts : destOpts, val: d, two: true },
    inc: { q: w.q3n, input: true },
  };
  const reset = () => { setP(""); setO(""); setD(""); setInc(""); setStep(0); setEditing(false); };
  const pick = (k, id) => {
    if (k === "p") { if (id !== p) { setD(""); setInc(""); } setP(id); }
    if (k === "o") setO(id);
    if (k === "d") setD(id);
    const nextKeys = k === "p" ? (id === "live" ? ["p"] : id === "job" ? ["p", "o"] : ["p", "o", id === "nomad" ? "inc" : "d"]) : keys;
    // One-answer questions move on by themselves (short pause so the tick shows); while editing, straight back to the result.
    const ready = (kk) => (kk === "p" ? true : kk === "o" ? (k === "o" || o) : kk === "d" ? (k === "d" || d) : v > 0);
    setTimeout(() => setStep((n) => {
      if (n !== step) return n;
      if (editing && nextKeys.every(ready)) { setEditing(false); return nextKeys.length; }
      return n + 1;
    }), 250);
  };

  if (!done) {
    const k = keys[step];
    const s = Q[k];
    return (
      <section className="card vz-tool wz" id="wz" aria-labelledby="wz-h" ref={top}>
        <h2 id="wz-h" className="wz-title">{t.toolTitle}</h2>
        <div className="steps" style={{ gridTemplateColumns: `repeat(${Math.max(keys.length, step + 1)}, 1fr)` }} aria-hidden="true">
          {keys.map((_, i) => <span key={i} className={i < step ? "on" : i === step ? "now" : ""} />)}
        </div>
        <p className="meta">{w.stepOf(step + 1, p ? keys.length : 3)}</p>
        <p className="quiz-q" id={`wz-q-${k}`}>{s.q}</p>
        {s.input ? (
          <form onSubmit={(e) => { e.preventDefault(); if (v) { setEditing(false); setStep(keys.length); } }}>
            <div className="vz-form">
              <input id="wz-i" aria-labelledby="wz-q-inc" inputMode="numeric" className="nm-in" placeholder="3000" value={inc} onChange={(e) => setInc(e.target.value)} />
            </div>
            <p className="meta">{w.incNote}</p>
            <div className="quiz-actions">
              <button type="submit" className="btn" disabled={!v}>{w.show}</button>
              <button type="button" className="btn ghost" onClick={() => setStep(step - 1)}>{w.back}</button>
            </div>
          </form>
        ) : (
          <>
            <div className={s.two ? "options two" : "options"} role="group" aria-labelledby={`wz-q-${k}`}>
              {s.opts.map((x) => (
                <button key={x.id} type="button" className={`opt${x.id === "live" ? " wz-soon" : ""}`} aria-pressed={s.val === x.id} onClick={() => pick(k, x.id)}>
                  {x.flag && <Flag code={x.flag} />}
                  <span className="wz-opt-t">{x.label}{x.sub && <small>{x.sub}</small>}</span>
                  <span className="tick">✓</span>
                </button>
              ))}
            </div>
            <div className="quiz-actions">
              <button type="button" className="btn" disabled={!s.val} onClick={() => setStep(step + 1)}>{step === keys.length - 1 ? w.show : w.next}</button>
              {step > 0 && <button type="button" className="btn ghost" onClick={() => setStep(step - 1)}>{w.back}</button>}
            </div>
          </>
        )}
      </section>
    );
  }

  const ansVal = { p: p && w.p[p][0], o: o && ORIGIN_NAME[o][lang], d: d && (p === "study" ? countries[d] : DEST.find((x) => x.id === d)?.name[lang]), inc: v ? `${fmt(v, lang)} €` : "" };
  let body;
  if (p === "visit") {
    const dest = DEST.find((x) => x.id === d);
    const st = dest.status[o];
    body = (
      <>
        <div className={`vz-result vz-${st.s}`} aria-live="polite">
          <p className="vz-who">{t.result(ORIGIN_NAME[o][lang], dest.name[lang])}</p>
          <p className="vz-kind">{KIND[st.s][lang]}</p>
          <p>{st.n[lang]}</p>
          {st.s !== "free" && st.s !== "banned" && (
            <dl className="vz-facts">
              <div><dt>{t.visa}</dt><dd>{dest.visa[lang]}</dd></div>
              <div><dt>{t.fee}</dt><dd>{dest.fee[lang]}</dd></div>
              <div><dt>{t.where}</dt><dd>{dest.where[lang]}</dd></div>
            </dl>
          )}
          <p className="vz-links">
            <a href={`${base}/${dest.slug}/${natSlug(o)}`}>{t.full} {dest.name[lang]} {lang === "ar" ? "←" : "→"}</a>
            {st.src ? <> · <a href={st.src} target="_blank" rel="noopener noreferrer">{t.src} ↗</a></> : null}
          </p>
        </div>
      </>
    );
  } else if (p === "study") {
    const ready = (studyReady[o] || []).includes(d);
    body = (
      <>
        <div className={`vz-result ${ready ? "vz-eta" : "vz-cond"}`} aria-live="polite">
          <p className="vz-who">{w.studyRes(ORIGIN_NAME[o][lang], countries[d])}</p>
          <p>{ready ? w.studyReady : w.studyGeneral}</p>
          <p className="vz-links">
            <a href={`${studyBase}/visa?from=${o}&to=${d}`}>{w.studyGo} {lang === "ar" ? "←" : "→"}</a>
          </p>
        </div>
      </>
    );
  } else if (p === "job") {
    const GCC = ["sa", "ae", "kw", "qa", "bh", "om"];
    const list = jobRoutes.filter((r) => !(r.id === "ae" && o === "ae")).sort((a, b) => Number(a.closed) - Number(b.closed));
    body = (
      <>
        <div className="vz-result vz-eta" aria-live="polite">
          <p className="vz-who">{ORIGIN_NAME[o][lang]}</p>
          <p className="vz-kind">{w.jobRes}</p>
          <ul className="wz-list">
            {list.map((r) => (
              <li key={r.slug}>
                <a href={`${base}/${r.slug}`}><b>{r.name}</b></a>{r.closed ? <> <span className="vz-closed">{w.closed}</span></> : null}<br />
                <span className="meta">{r.short}{r.id === "ae" && GCC.includes(o) ? ` · ${w.gcc}` : ""}</span>
                {r.points ? <> · <a href={`${base}/${r.slug}#points`}>{w.calc}</a></> : null}
              </li>
            ))}
          </ul>
          <p className="meta">{w.jobSoon}</p>
        </div>
      </>
    );
  } else {
    const rows = NOMADS.map((n) => ({ n, nat: nationalityOk(n, o), fit: n.min != null && v >= n.min })).sort((a, b) => (a.n.min ?? 1e9) - (b.n.min ?? 1e9));
    const fits = rows.filter((r) => r.fit && r.nat !== false);
    const rest = rows.filter((r) => !r.fit && r.nat !== false);
    const href = (n) => `${base}/${n.slug}`;
    body = (
      <>
        <div className={`vz-result ${fits.length ? "vz-free" : "vz-visa"}`} aria-live="polite">
          <p className="vz-who">{ORIGIN_NAME[o][lang]} · {fmt(v, lang)} €</p>
          <p className="vz-kind">{w.nomadRes(fits.length)}</p>
          {fits.length > 0 && (
            <ul className="wz-list">
              {fits.map(({ n, nat }) => <li key={n.id}><a href={href(n)}><b>{n.name[lang]}</b></a> <span className="meta">{fmt(n.min, lang)} €{n.minCheck ? ` (${nt.estimate})` : ""}{nat === "check" ? ` · ${nt.natCheck}` : ""}</span></li>)}
            </ul>
          )}
          {rest.length > 0 && (
            <details className="wz-more"><summary>{w.nomadOther} ({rest.length})</summary>
              <ul className="wz-list">
                {rest.map(({ n, nat }) => <li key={n.id}><a href={href(n)}>{n.name[lang]}</a> <span className="meta">{n.min != null ? `${fmt(n.min, lang)} €` : nt.noFig}{nat === "check" ? ` · ${nt.natCheck}` : ""}</span></li>)}
              </ul>
            </details>
          )}
          <p className="vz-links"><a href={`${base}/digital-nomad-visas`}>{w.nomadAll} {lang === "ar" ? "←" : "→"}</a></p>
        </div>
      </>
    );
  }


  return (
    <section className="card vz-tool wz" id="wz" aria-labelledby="wz-h" ref={top}>
      <h2 id="wz-h" className="wz-title">{t.toolTitle}</h2>
      {p === "live" ? <div className="vz-result vz-cond" aria-live="polite"><p className="vz-kind">{w.p.live[0]}</p><p>{w.liveSoon}</p></div> : body}
      <div className="answers">
        <h3>{w.answers}</h3>
        <ul>
          {keys.map((k, i) => (
            <li key={k}>
              <span className="k">{w.labels[k]}</span>
              <span className="v">{ansVal[k]}</span>
              <button type="button" className="linkbtn" onClick={() => { setEditing(true); setStep(i); }}>{w.edit}</button>
            </li>
          ))}
        </ul>
      </div>
      {p !== "live" && <VisaAsk key={`${p}-${o}-${d}-${v}`} lang={lang} ctx={{ p, o, d, inc: v || null }} base={base} studyBase={studyBase} />}
      <button type="button" className="btn ghost" onClick={reset}>{w.restart}</button>
    </section>
  );
}
