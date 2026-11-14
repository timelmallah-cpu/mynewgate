"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import programmes from "../../lib/programmes.json";
import Flag from "../../lib/Flag";
import { FIELDS, COUNTRIES, BUDGETS, DURATIONS, match, feeLabel } from "../../lib/options";

const STEPS = [
  { key: "countries", q: "أي الدول تفكر فيها؟ (يمكنك اختيار أكثر من دولة)", opts: COUNTRIES, multi: true },
  { key: "field", q: "ما التخصص الذي تريد دراسته؟", opts: [...FIELDS, { id: "any", label: "أكثر من تخصص / لم أقرر" }] },
  { key: "budget", q: "ما أقصى رسوم دراسية تستطيع دفعها في السنة؟", opts: BUDGETS },
  { key: "duration", q: "كم مدة الدراسة التي تفضلها؟", opts: DURATIONS },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState({ countries: [] });
  const done = step >= STEPS.length;
  const results = useMemo(() => (done ? match(programmes, a) : []), [done, a]);
  const known = results.filter((p) => p.feePerYear !== null);
  const unknown = results.filter((p) => p.feePerYear === null);

  if (done) {
    return (
      <>
        <h2>وجدنا {results.length} برنامجاً يناسب اختياراتك</h2>
        <p className="meta">
          مرتبة من الأقل رسوماً. الرسوم هنا تقدير سنوي للمقارنة فقط، والنص الرسمي الكامل في صفحة كل برنامج.
        </p>
        {results.length === 0 && (
          <div className="notice">لا توجد نتائج. جرّب ميزانية أعلى أو دولاً أكثر.</div>
        )}
        {known.map((p) => <Card key={p.id} p={p} />)}
        {unknown.length > 0 && (
          <>
            <h2 style={{ marginTop: 28 }}>برامج لم تنشر جامعاتها الرسوم بوضوح ({unknown.length})</h2>
            <div className="notice">
              هذه البرامج تطابق اختياراتك الأخرى، لكن لا نعرف رسومها من المصدر الرسمي، فقد تكون أعلى من
              ميزانيتك. راجع موقع الجامعة قبل التقديم.
            </div>
            {unknown.map((p) => <Card key={p.id} p={p} />)}
          </>
        )}
        <button className="btn ghost" onClick={() => { setStep(0); setA({ countries: [] }); }}>
          ابدأ من جديد
        </button>
      </>
    );
  }

  const s = STEPS[step];
  const val = a[s.key];
  const chosen = (id) => (s.multi ? val.includes(id) : val === id);
  const pick = (id) =>
    setA({ ...a, [s.key]: s.multi ? (val.includes(id) ? val.filter((x) => x !== id) : [...val, id]) : id });
  const ready = s.multi ? val.length > 0 : val !== undefined;

  return (
    <>
      <div className="progress"><span style={{ width: `${(step / STEPS.length) * 100}%` }} /></div>
      <p className="meta">السؤال {step + 1} من {STEPS.length}</p>
      <h2>{s.q}</h2>
      <div className="options">
        {s.opts.map((o) => (
          <button key={o.id} className="opt" aria-pressed={chosen(o.id)} onClick={() => pick(o.id)}>
            {s.key === "countries" && <Flag code={o.id} />}
            {o.label}
          </button>
        ))}
      </div>
      <div className="row">
        <button className="btn" disabled={!ready} onClick={() => setStep(step + 1)}>
          {step === STEPS.length - 1 ? "اعرض النتائج" : "التالي"}
        </button>
        {step > 0 && <button className="btn ghost" onClick={() => setStep(step - 1)}>رجوع</button>}
      </div>
    </>
  );
}

function Card({ p }) {
  const warning = p.other.includes("تنبيه") ? p.other.slice(p.other.indexOf("تنبيه")) : null;
  return (
    <div className="card">
      <div className="ltr" style={{ fontWeight: 700 }}>{p.name}</div>
      <div className="meta">
        <Flag code={p.country} size={18} /> {p.countryAr} · المدينة: {p.city} · <span className="ltr">{p.university}</span>
      </div>
      <div className="row" style={{ marginTop: 8 }}>
        <span className={p.feePerYear === null || p.feeNeedsCheck ? "badge warn" : "badge"}>
          {feeLabel(p)}{p.feeNeedsCheck && p.feePerYear !== null ? " (للتحقق)" : ""}
        </span>
        <span className="badge">{p.duration}</span>
      </div>
      {warning && <p className="warnline">{warning}</p>}
      <p className="meta" style={{ margin: "8px 0" }}>موعد التقديم: {p.deadline}</p>
      <Link href={`/programme/${p.id}`}>عرض كل التفاصيل والمصدر الرسمي</Link>
    </div>
  );
}
