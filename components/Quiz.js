"use client";
import { useState, useMemo, useEffect, useRef } from "react";
import Link from "next/link";
import programmes from "../lib/programmes.json";
import Flag from "../lib/Flag";
import { T, view } from "../lib/i18n";
import { LEVEL_IDS, FIELD_IDS, BA_FIELD_IDS, COUNTRY_IDS, BUDGETS, DURATIONS, BA_DURATIONS, match, feeLabel } from "../lib/options";

export default function Quiz({ lang }) {
  const t = T[lang];
  const [step, setStep] = useState(0);
  const [a, setA] = useState({ countries: [] });
  const [editing, setEditing] = useState(false);
  // ?country=ee (from a country page) pre-selects that country; ?level=bachelor also skips the answered steps.
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const c = q.get("country");
    const l = q.get("level");
    const hasC = c && COUNTRY_IDS.includes(c);
    const hasL = l && LEVEL_IDS.includes(l);
    if (hasC || hasL) setA((x) => ({ ...x, ...(hasC ? { countries: [c] } : {}), ...(hasL ? { level: l } : {}) }));
    if (hasL) setStep(hasC ? 2 : 1);
  }, []);
  // Each new question (and the results) starts at the top of the page, not where the last list ended.
  const firstStep = useRef(true);
  useEffect(() => {
    if (firstStep.current) { firstStep.current = false; return; }
    const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: smooth ? "smooth" : "auto" });
  }, [step]);
  const e = ED[lang];
  const ba = a.level === "bachelor";
  const phd = a.level === "doctorate"; // doctoral study in our countries is tuition-free and ~4 years: no budget or length step
  const STEPS = [
    { key: "level", q: t.qLevel, opts: LEVEL_IDS.map((id) => ({ id, label: t.levels[id] })) },
    { key: "countries", q: t.qCountries, opts: COUNTRY_IDS.map((id) => ({ id, label: t.countries[id] })), multi: true },
    { key: "field", q: t.qField, opts: [...(ba ? BA_FIELD_IDS : FIELD_IDS).map((id) => ({ id, label: t.fields[id] })), { id: "any", label: t.anyField }] },
    { key: "budget", q: t.qBudget, opts: BUDGETS.map((b) => ({ id: b.id, label: t.budgets[b.id] })) },
    { key: "duration", q: t.qDuration, opts: (ba ? BA_DURATIONS : DURATIONS).map((d) => ({ id: d.id, label: (ba ? t.baDurations : t.durations)[d.id] })) },
  ].filter((st) => !(phd && (st.key === "budget" || st.key === "duration")));
  const done = step >= STEPS.length;
  const results = useMemo(() => (done ? match(programmes, a).map((p) => view(p, lang)) : []), [done, a, lang]);
  const known = results.filter((p) => p.feePerYear !== null);
  const unknown = results.filter((p) => p.feePerYear === null);

  const answerLabel = (st) => {
    const v = a[st.key];
    if (st.multi) return st.opts.filter((o) => v.includes(o.id)).map((o) => o.label).join("، ");
    return st.opts.find((o) => o.id === v)?.label ?? "";
  };
  // When nothing matches: how many programmes each single relaxation would give.
  const tries = done && results.length === 0
    ? [
        { key: "budget", val: "any", label: e.tryBudget },
        { key: "duration", val: "any", label: e.tryDuration },
        { key: "field", val: "any", label: e.tryField },
        { key: "countries", val: [], label: e.tryCountries },
      ]
        .filter((x) => JSON.stringify(a[x.key]) !== JSON.stringify(x.val))
        .map((x) => ({ ...x, n: match(programmes, { ...a, [x.key]: x.val }).length }))
        .filter((x) => x.n > 0)
    : [];

  if (done) {
    return (
      <>
        <h1>{results.length === 0 ? e.noneTitle : t.found(results.length)}</h1>
        {results.length > 0 && <p className="meta">{t.sortNote}</p>}
        {results.length > 0 && (
          <p className="tool-strip">
            <span>{lang === "ar" ? "قبل ما تقدم:" : "Before you apply:"}</span>
            <Link href={`${t.base}/english-check${a.countries?.length === 1 ? `?country=${a.countries[0]}&level=${a.level}` : `?level=${a.level}`}`}>{lang === "ar" ? "هل درجتك في الإنجليزية تكفي؟" : "Is your English score enough?"}</Link>
            <Link href={`${t.base}/planner`}>{lang === "ar" ? "خطط مواعيدك" : "Plan your dates"}</Link>
            <Link href={`${t.base}/countries`}>{lang === "ar" ? "قارن الدول" : "Compare countries"}</Link>
            {a.level === "bachelor" && <Link href={`${t.base}/school-certificate`}>{lang === "ar" ? "ثانويتك تكفي؟" : "Is your school certificate enough?"}</Link>}
          </p>
        )}
        {results.length === 0 && <div className="notice">{e.none}</div>}
        {tries.length > 0 && (
          <div className="tries">
            {tries.map((x) => (
              <button key={x.key} className="btn small" onClick={() => setA({ ...a, [x.key]: x.val })}>
                {x.label} ({e.count(x.n)})
              </button>
            ))}
          </div>
        )}
        <div className="answers">
          <h3>{e.title}</h3>
          <ul>
            {STEPS.map((st, i) => (
              <li key={st.key}>
                <span className="k">{e.labels[st.key]}</span>
                <span className="v">{answerLabel(st) || e.all}</span>
                <button className="linkbtn" onClick={() => { setEditing(true); setStep(i); }}>{e.edit}</button>
              </li>
            ))}
          </ul>
        </div>
        {known.map((p) => <Card key={p.id} p={p} lang={lang} />)}
        {unknown.length > 0 && (
          <>
            <h2 className="section-title">{t.unknownTitle(unknown.length)}</h2>
            <div className="notice">{t.unknownNote}</div>
            {unknown.map((p) => <Card key={p.id} p={p} lang={lang} />)}
          </>
        )}
        <button className="btn ghost" onClick={() => { setEditing(false); setStep(0); setA({ countries: [] }); }}>
          {t.restart}
        </button>
      </>
    );
  }

  const s = STEPS[step];
  const val = a[s.key];
  const chosen = (id) => (s.multi ? val.includes(id) : val === id);
  const pick = (id) => {
    setA(s.key === "level" && id !== a.level
      ? { countries: a.countries, level: id } // field and duration options depend on the level
      : { ...a, [s.key]: s.multi ? (val.includes(id) ? val.filter((x) => x !== id) : [...val, id]) : id });
    // One-answer questions move on by themselves (short pause so the tick shows); not while editing an answer.
    if (!s.multi && !editing) setTimeout(() => setStep((n) => (n === step ? n + 1 : n)), 250);
  };
  const ready = s.multi ? val.length > 0 : val !== undefined;
  const allReady = STEPS.every((st) => (st.multi ? a[st.key].length > 0 : a[st.key] !== undefined));

  return (
    <>
      <div className="steps" aria-hidden="true">
        {STEPS.map((_, i) => <span key={i} className={i < step ? "on" : i === step ? "now" : ""} />)}
      </div>
      <p className="meta">{t.step(step + 1, STEPS.length)}</p>
      <h1 className="quiz-q">{s.q}</h1>
      <div className={s.opts.length > 4 ? "options two" : "options"}>
        {s.opts.map((o) => (
          <button key={o.id} className="opt" aria-pressed={chosen(o.id)} onClick={() => pick(o.id)}>
            {s.key === "countries" && <Flag code={o.id} />}
            {o.label}
            <span className="tick">✓</span>
          </button>
        ))}
      </div>
      {s.key === "field" && !ba && (
        <p className="notice quiz-note">
          {lang === "ar" ? "الطب وطب الأسنان والصيدلة تُدرس بعد الثانوية مباشرة (برنامج متكامل)، لذلك تظهر في مرحلة البكالوريوس. " : "Medicine, Dentistry and Pharmacy are studied straight after school (integrated programmes), so they are under Bachelor's. "}
          <button className="linkbtn" onClick={() => setA({ countries: a.countries, level: "bachelor" })}>
            {lang === "ar" ? "غيّر المرحلة إلى البكالوريوس" : "Switch to Bachelor's"}
          </button>
        </p>
      )}
      <div className="quiz-actions">
        <button className="btn" disabled={!ready} onClick={() => setStep(step + 1)}>
          {step === STEPS.length - 1 ? t.showResults : t.next}
        </button>
        {editing && allReady && step < STEPS.length - 1 && (
          <button className="btn gold" onClick={() => setStep(STEPS.length)}>{e.show}</button>
        )}
        {step > 0 && <button className="btn ghost" onClick={() => setStep(step - 1)}>{t.back}</button>}
      </div>
    </>
  );
}

const ED = {
  ar: {
    title: "إجاباتك",
    edit: "تعديل",
    all: "الكل",
    show: "اعرض النتائج",
    noneTitle: "لا توجد برامج بهذه الاختيارات",
    none: "لا توجد نتائج بهذه الاختيارات. عدّل إجابة واحدة من القائمة تحت، أو جرّب أحد الاقتراحات، ولن تحتاج إلى البدء من جديد.",
    labels: { level: "المرحلة", countries: "الدول", field: "المجال", budget: "الميزانية", duration: "المدة" },
    tryBudget: "أي ميزانية",
    tryDuration: "أي مدة",
    tryField: "كل المجالات",
    tryCountries: "كل الدول",
    count: (n) => (n === 1 ? "برنامج واحد" : n === 2 ? "برنامجان" : n <= 10 ? `${n} برامج` : `${n} برنامجاً`),
  },
  en: {
    title: "Your answers",
    edit: "Edit",
    all: "All",
    show: "Show results",
    noneTitle: "No programmes match these choices",
    none: "No programmes match these choices. Change one answer below or try a suggestion; you don't need to start again.",
    labels: { level: "Level", countries: "Countries", field: "Field", budget: "Budget", duration: "Duration" },
    tryBudget: "Any budget",
    tryDuration: "Any duration",
    tryField: "All fields",
    tryCountries: "All countries",
    count: (n) => `${n} programme${n === 1 ? "" : "s"}`,
  },
};

function Card({ p, lang }) {
  const t = T[lang];
  const i = p.other.indexOf(t.warnWord);
  const warning = i >= 0 ? p.other.slice(i) : null;
  const known = p.feePerYear !== null && p.feePerYear > 0;
  return (
    <Link className="result" href={`${t.base}/programme/${p.id}`}>
      <div className="name ltr">{p.name}</div>
      <div className="fee">
        {known ? (
          <>
            <span className="amount ltr">€{p.feePerYear.toLocaleString("en-US")}</span>
            <span className="per">{t.perYear}{p.feeNeedsCheck ? t.toCheck : ""}</span>
          </>
        ) : (
          <span className={p.feePerYear === null ? "amount unknown" : "amount"}>{feeLabel(p, lang)}</span>
        )}
      </div>
      <div className="where">
        <span><Flag code={p.country} size={18} /> {p.countryLabel}</span>
        <span>{t.city} {p.city}</span>
        <span className="ltr">{p.university}</span>
      </div>
      <div className="facts">
        <span><b>{t.keyDuration}:</b> {p.duration}</span>
        <span><b>{t.deadline}</b> {p.deadline}</span>
      </div>
      {warning && <p className="warnline">{warning}</p>}
      <span className="more">{t.details}</span>
    </Link>
  );
}
