"use client";
import { useState, useMemo } from "react";
import Link from "next/link";
import programmes from "../../lib/programmes.json";
import { FIELDS, COUNTRIES, BUDGETS, DURATIONS, match, feeLabel } from "../../lib/options";

const STEPS = [
  { key: "field", q: "ما التخصص الذي تريد دراسته؟", opts: [...FIELDS, { id: "any", label: "أكثر من تخصص / لم أقرر" }] },
  { key: "countries", q: "أي الدول تفكر فيها؟ (يمكنك اختيار أكثر من دولة)", opts: COUNTRIES, multi: true },
  { key: "budget", q: "ما أقصى رسوم دراسية تستطيع دفعها في السنة؟", opts: BUDGETS },
  { key: "duration", q: "كم مدة الدراسة التي تفضلها؟", opts: DURATIONS },
];

export default function Quiz() {
  const [step, setStep] = useState(0);
  const [a, setA] = useState({ countries: [] });
  const done = step >= STEPS.length;
  const results = useMemo(() => (done ? match(programmes, a) : []), [done, a]);

  if (done) {
    return (
      <>
        <h2>وجدنا {results.length} برنامجاً يناسب اختياراتك</h2>
        <p className="meta">
          مرتبة من الأقل رسوماً. البرامج التي لم تنشر جامعتها الرسوم بوضوح تظهر في آخر القائمة.
        </p>
        {results.length === 0 && (
          <div className="notice">لا توجد نتائج. جرّب ميزانية أعلى أو دولاً أكثر.</div>
        )}
        {results.map((p) => (
          <div className="card" key={p.id}>
            <div className="ltr" style={{ fontWeight: 700 }}>{p.name}</div>
            <div className="meta">
              <span className="ltr">{p.university}</span> · {p.city} · {p.countryAr}
            </div>
            <div className="row" style={{ marginTop: 8 }}>
              <span className={p.feePerYear === null || p.feeNeedsCheck ? "badge warn" : "badge"}>{feeLabel(p)}</span>
              <span className="badge">{p.fieldAr}</span>
            </div>
            <p className="meta" style={{ margin: "8px 0" }}>موعد التقديم: {p.deadline}</p>
            <Link href={`/programme/${p.id}`}>عرض كل التفاصيل والمصدر الرسمي</Link>
          </div>
        ))}
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
