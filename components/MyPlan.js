"use client";
// "My plan in a minute" (/my-plan): five questions -> one page with fitting programmes, their full cost in the
// student's currency, the nearest deadline and suggested steps counted back from it. Nothing is stored: the answers
// live in the page address, so the plan can be shared as a link or printed / saved as PDF.
import { useEffect, useMemo, useState } from "react";
import Link from "@/components/Link";
import { BASE } from "../lib/site";
import { T } from "../lib/i18n";
import { FIELD_IDS, BA_FIELD_IDS, BUDGETS } from "../lib/options";
import { ARAB } from "../lib/scholarships";
import { evaluate } from "../lib/eligibility";
import { estimateTotal } from "../lib/costTotal";
import { useOrigin, originIds, CURRENCY_OF } from "./Origin";
import { LocalAs } from "./Currency";
import Flag from "../lib/Flag";

const TX = {
  ar: {
    title: "خطتي في دقيقة", lead: "خمسة أسئلة، وتحصل على خطة في صفحة واحدة: البرامج المناسبة لك، وتكلفتها الكاملة بعملة بلدك، وأقرب موعد، والخطوات بالترتيب. لا نحفظ إجاباتك؛ هي في رابط الصفحة فقط.",
    q1: "1. ماذا تريد أن تدرس؟", master: "ماجستير", bachelor: "بكالوريوس",
    q2: "2. في أي مجال؟", any: "أي مجال",
    q3: "3. ما أقصى رسوم دراسية تستطيع دفعها في السنة؟",
    q4: "4. شهادة الإنجليزية", none: "ليس عندي شهادة بعد", score: "الدرجة",
    q5: "5. أنت من أي بلد؟", pick: "اختر بلدك",
    go: "اعرض خطتي", again: "عدّل الإجابات",
    planFor: (lv, f) => `خطة ${lv}${f ? ` في ${f}` : ""}`,
    fit: (n) => `${n} برنامجاً يناسب إجاباتك`, fitCheck: (n) => `لا يوجد برنامج يطابق كل الشروط المنشورة؛ هذه ${n} برامج تحتاج تأكيداً من الجامعة`, none: "لم نجد برامج قريبة من إجاباتك. جرّب ميزانية أعلى أو مجالاً آخر.",
    total: "التكلفة الكاملة التقديرية", perYear: "في السنة", noTotal: "لا يمكن حساب التكلفة الكاملة (رقم غير منشور)", noTravel: "رسوم ومعيشة وتأمين وتأشيرة، بدون تذكرة السفر",
    next: "أقرب موعد", est: "تقديري", noDate: "لا يوجد موعد قادم منشور",
    stepsT: "خطواتك بالترتيب", stepsNote: "تواريخ مقترحة منا محسوبة من أقرب موعد في خطتك، وليست مواعيد رسمية.",
    by: "قبل", now: "الآن",
    steps: {
      test: ["احجز اختبار الإنجليزية وخذه", "/english-check"], docs: ["جهّز الشهادات والترجمة والتصديق", "/legalisation"],
      letter: ["اكتب خطاب الدافع والسيرة الذاتية", "/motivation-letter"], apply: ["قدّم على البرامج", "/applications"], visa: ["بعد القبول: تأشيرة الدراسة من بلدك", "/visa"],
    },
    print: "اطبعها أو احفظها PDF", share: "أرسلها على واتساب", copy: "انسخ الرابط", copied: "تم النسخ",
    more: "كل البرامج المناسبة في أداة «هل أنت مؤهل؟»", disclaimer: "خطة للتخطيط فقط وليست قبولاً أو استشارة. تأكد من كل رقم وموعد من صفحة البرنامج الرسمية.",
    loading: "نحضّر خطتك...", fee: "الرسوم", free: "بدون رسوم دراسية", unknown: "غير منشور",
  },
  en: {
    title: "My plan in a minute", lead: "Five questions, and you get a one-page plan: programmes that fit you, their full cost in your currency, the nearest deadline and the steps in order. We don't store your answers; they are only in the page address.",
    q1: "1. What do you want to study?", master: "Master's", bachelor: "Bachelor's",
    q2: "2. In which field?", any: "Any field",
    q3: "3. The most tuition you can pay per year?",
    q4: "4. English certificate", none: "I don't have one yet", score: "Score",
    q5: "5. Where are you from?", pick: "Choose your country",
    go: "Show my plan", again: "Change answers",
    planFor: (lv, f) => `${lv} plan${f ? `: ${f}` : ""}`,
    fit: (n) => `${n} programmes fit your answers`, fitCheck: (n) => `No programme meets every published requirement; these ${n} need confirming with the university`, none: "We found no programmes close to your answers. Try a higher budget or another field.",
    total: "Estimated full cost", perYear: "a year", noTotal: "Full cost can't be estimated (a figure is not published)", noTravel: "Tuition, living, insurance and visa; flights not included",
    next: "Next deadline", est: "estimate", noDate: "No upcoming deadline published",
    stepsT: "Your steps in order", stepsNote: "Dates are our suggestion, counted back from the nearest deadline in your plan, not official dates.",
    by: "By", now: "Now",
    steps: {
      test: ["Book and take your English test", "/english-check"], docs: ["Prepare certificates, translations and legalisation", "/legalisation"],
      letter: ["Write your motivation letter and CV", "/motivation-letter"], apply: ["Apply to the programmes", "/applications"], visa: ["After admission: your student visa", "/visa"],
    },
    print: "Print or save as PDF", share: "Send on WhatsApp", copy: "Copy link", copied: "Copied",
    more: "All matching programmes in the eligibility check", disclaimer: "For planning only; not an admission or advice. Check every figure and date on the official programme page.",
    loading: "Preparing your plan...", fee: "Tuition", free: "No tuition", unknown: "not published",
  },
};

const fmt = (n) => Math.round(n).toLocaleString("en-US");
const DAY = 86400000;
const fmtDate = (iso, lang) => new Intl.DateTimeFormat(lang === "ar" ? "ar-u-nu-latn" : "en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));
const iso = (t) => new Date(t).toISOString().slice(0, 10);

function readQuery() {
  if (typeof window === "undefined") return null;
  const q = new URLSearchParams(window.location.search);
  if (!q.get("l")) return null;
  return { level: q.get("l") === "bachelor" ? "bachelor" : "master", field: q.get("f") || "any", budget: q.get("b") || "any", test: q.get("t") || "none", score: q.get("s") || "", origin: q.get("o") || "" };
}

export default function MyPlan({ lang }) {
  const x = TX[lang];
  const t = T[lang];
  const ar = lang === "ar";
  const [stored] = useOrigin();
  const [a, setA] = useState({ level: "master", field: "any", budget: "any", test: "ielts", score: "", origin: "" });
  const [show, setShow] = useState(false);
  const [data, setData] = useState(null);
  const [dl, setDl] = useState(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => { const q = readQuery(); if (q) { setA(q); setShow(true); } }, []);
  useEffect(() => { if (stored) setA((v) => (v.origin ? v : { ...v, origin: stored })); }, [stored]);
  useEffect(() => {
    if (!show || data) return;
    fetch(`${BASE}/data/compare-${lang}.json`).then((r) => r.json()).then(setData).catch(() => setData([]));
    fetch(`${BASE}/data/deadlines.json`).then((r) => r.json()).then(setDl).catch(() => setDl([]));
  }, [show, data, lang]);

  const set = (k) => (e) => setA({ ...a, [k]: e.target.value });
  const fields = a.level === "bachelor" ? BA_FIELD_IDS : FIELD_IDS;
  const query = `l=${a.level}&f=${a.field}&b=${a.budget}&t=${a.test}${a.score ? `&s=${a.score}` : ""}${a.origin ? `&o=${a.origin}` : ""}`;
  const url = typeof window !== "undefined" ? `${window.location.origin}${BASE}${t.base}/my-plan?${query}` : "";
  const submit = (e) => { e.preventDefault(); window.history.replaceState(null, "", `?${query}`); setShow(true); window.scrollTo(0, 0); };

  const plan = useMemo(() => {
    if (!show || !data || !dl) return null;
    const today = iso(Date.now());
    const r = evaluate(data, { level: a.level, field: a.field, budget: a.budget, test: a.test, score: a.score, grade: "", scale: "pct" }, lang);
    const exact = r.fit.length > 0;
    const pool = (exact ? r.fit : r.check).slice(0, 5);
    const rows = pool.map(({ p }) => {
      const d = dl.find((y) => String(y.id) === String(p.i));
      const next = d?.dates?.filter((z) => z.d >= today).sort((m, n) => (m.d < n.d ? -1 : 1))[0] || null;
      const e = estimateTotal({ country: p.c, feePerYear: p.f, livingMonthly: p.lm, years: p.y }, a.origin);
      return { p, next, e };
    });
    const firsts = rows.map((r) => r.next).filter(Boolean).sort((m, n) => (m.d < n.d ? -1 : 1));
    return { rows, exact, count: (exact ? r.fit : r.check).length, first: firsts[0] || null };
  }, [show, data, dl, a, lang]);

  const cur = CURRENCY_OF[a.origin];

  if (!show) {
    return (
      <>
        <h1>{x.title}</h1>
        <p className="lead">{x.lead}</p>
        <form className="plan-form card" onSubmit={submit}>
          <fieldset><legend>{x.q1}</legend>
            {["master", "bachelor"].map((lv) => <label key={lv} className="chip-radio"><input type="radio" name="l" value={lv} checked={a.level === lv} onChange={(e) => setA({ ...a, level: e.target.value, field: "any" })} /> {x[lv]}</label>)}
          </fieldset>
          <label><span>{x.q2}</span>
            <select value={a.field} onChange={set("field")}><option value="any">{x.any}</option>{fields.map((f) => <option key={f} value={f}>{t.fields[f]}</option>)}</select>
          </label>
          <label><span>{x.q3}</span>
            <select value={a.budget} onChange={set("budget")}>{[...BUDGETS.map((b) => b.id), "any"].filter((v, i, s) => s.indexOf(v) === i).map((b) => <option key={b} value={b}>{t.budgets[b] || b}</option>)}</select>
          </label>
          <fieldset><legend>{x.q4}</legend>
            <select value={a.test} onChange={set("test")} aria-label={x.q4}><option value="ielts">IELTS</option><option value="toefl">TOEFL iBT</option><option value="none">{x.none}</option></select>
            {a.test !== "none" && <input type="number" inputMode="decimal" step={a.test === "ielts" ? 0.5 : 1} min={a.test === "ielts" ? 4 : 30} max={a.test === "ielts" ? 9 : 120} placeholder={x.score} aria-label={x.score} value={a.score} onChange={set("score")} dir="ltr" />}
          </fieldset>
          <label><span>{x.q5}</span>
            <select value={a.origin} onChange={set("origin")}><option value="">{x.pick}</option>{originIds(lang).map((c) => <option key={c} value={c}>{ARAB[c][lang]}</option>)}</select>
          </label>
          <button className="btn" type="submit">{x.go}</button>
        </form>
      </>
    );
  }

  const lvName = x[a.level];
  const fName = a.field !== "any" ? t.fields[a.field] : "";
  const first = plan?.first ? new Date(plan.first.d).getTime() : null;
  const stepDate = (days) => (first && first - days * DAY > Date.now() ? fmtDate(iso(first - days * DAY), lang) : x.now);
  const steps = [
    ...(a.test === "none" || !a.score ? [["test", 90]] : []),
    ["docs", 60], ["letter", 30], ["apply", 0], ["visa", null],
  ];
  return (
    <div className="my-plan">
      <h1>{x.title}</h1>
      <p className="plan-sub">{x.planFor(lvName, fName)}{a.origin ? ` · ${ARAB[a.origin][lang]}` : ""}</p>
      {!plan ? <p>{x.loading}</p> : (
        <>
          <h2 className="land-h">{plan.rows.length ? (plan.exact ? x.fit(plan.count) : x.fitCheck(plan.count)) : x.none}</h2>
          <ol className="plan-list">
            {plan.rows.map(({ p, next, e }) => (
              <li key={p.i} className="card">
                <Link href={`${t.base}/programme/${p.i}`} className="ltr plan-name">{p.n}</Link>
                <div className="meta"><span className="ltr">{p.u}</span> · <Flag code={p.c} size={14} /> {t.countries[p.c]}</div>
                <div className="plan-facts">
                  <span>{x.fee}: {p.f === 0 ? x.free : p.f == null ? x.unknown : <span dir="ltr">€{fmt(p.f)}</span>}</span>
                  <span>{x.next}: {next ? `${fmtDate(next.d, lang)}${next.est ? ` (${x.est})` : ""}` : x.noDate}</span>
                </div>
                <div className="plan-total">
                  {e.missing ? <small>{x.noTotal}</small> : <>
                    <b>{x.total}: <span dir="ltr">€{fmt(e.total)}</span></b> <LocalAs eur={e.total} code={cur} lang={lang} />
                    <small>{x.noTravel} · <span dir="ltr">€{fmt(e.perYear)}</span> {x.perYear}</small>
                  </>}
                </div>
              </li>
            ))}
          </ol>
          {plan.rows.length > 0 && (
            <section className="card plan-steps">
              <h2>{x.stepsT}</h2>
              <ol>
                {steps.map(([k, days]) => (
                  <li key={k}><b>{days === null ? "" : `${days === 0 && first ? fmtDate(plan.first.d, lang) : stepDate(days)}: `}</b><Link href={`${t.base}${x.steps[k][1]}`}>{x.steps[k][0]}</Link></li>
                ))}
              </ol>
              <p className="meta">{x.stepsNote}</p>
            </section>
          )}
          <div className="plan-actions no-print">
            <button className="btn" type="button" onClick={() => window.print()}>{x.print}</button>
            <a className="btn ghost" href={`https://wa.me/?text=${encodeURIComponent(`${x.title}: ${url}`)}`} target="_blank" rel="noopener noreferrer">{x.share}</a>
            <button className="btn ghost" type="button" onClick={() => { navigator.clipboard?.writeText(url).then(() => setCopied(true)).catch(() => {}); }}>{copied ? x.copied : x.copy}</button>
            <button className="btn ghost" type="button" onClick={() => { setShow(false); window.history.replaceState(null, "", window.location.pathname); }}>{x.again}</button>
          </div>
          <p className="no-print"><Link href={`${t.base}/eligibility`}>{x.more}</Link></p>
          <p className="meta">{x.disclaimer}</p>
          <p className="meta print-only">{url}</p>
        </>
      )}
    </div>
  );
}
