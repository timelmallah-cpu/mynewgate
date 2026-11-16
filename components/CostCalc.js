"use client";
import { useState } from "react";
import { COSTS } from "../lib/costs";
import { Local, CurrencyPicker } from "./Currency";
import { useOrigin } from "./Origin";

const S = {
  ar: {
    title: "حاسبة التكلفة",
    intro: "أرقام مبدئية من صفحة البرنامج ومن الجهات الرسمية. عدّلها حسب وضعك، وتتغير النتيجة فوراً.",
    tuition: "الرسوم الدراسية في السنة",
    tuitionNone: "الرسوم غير منشورة، أدخل الرقم من الجامعة",
    living: "المعيشة شاملة السكن في الشهر",
    livingFrom: "حسب صفحة البرنامج:",
    livingRaised: "رفعناها إلى {n} يورو لأن هذا أقل مبلغ شهري تطلبه التأشيرة.",
    livingFloor: "لا يوجد رقم منشور للمدينة، فوضعنا الحد الأدنى الذي تطلبه السفارة. التكلفة الفعلية غالباً أعلى.",
    insurance: "التأمين الصحي في الشهر",
    insuranceNone: "أدخل سعر التأمين الذي ستشتريه",
    other: "مصاريف أخرى في السنة (كتب، رسوم فصلية، مواصلات)",
    oneTime: "رسوم التأشيرة والإقامة (مرة واحدة)",
    travel: "تذكرة السفر وبداية الاستقرار (مرة واحدة)",
    years: "مدة البرنامج بالسنوات",
    perYear: "التكلفة في السنة",
    firstYear: "السنة الأولى مع رسوم البداية",
    total: "التكلفة الكاملة للبرنامج",
    noTuition: "هذا الرقم لا يشمل الرسوم الدراسية لأنها غير منشورة. اكتبها أعلاه من موقع الجامعة ليكتمل الحساب.",
    proofTitle: "ما تطلبه السفارة لإثبات القدرة المالية",
    proofYear: "حوالي {n} يورو للسنة الأولى",
    proofPlusHousing: "بالإضافة إلى تكلفة السكن",
    belowProof: "المعيشة التي أدخلتها أقل من الحد الأدنى المطلوب للتأشيرة ({n} يورو شهرياً).",
    feesTitle: "الرسوم الرسمية",
    unknown: "غير منشور في المصدر",
    check: "للتحقق",
    source: "المصدر",
    note: "هذه تقديرات للتخطيط وليست عرض سعر. تأكد من كل رقم من موقع الجامعة والسفارة قبل الدفع. لا تشمل الحاسبة تقلبات سعر الصرف.",
    eur: "يورو",
  },
  en: {
    title: "Cost calculator",
    intro: "Starting figures come from the programme page and official bodies. Change them to fit your situation; the result updates instantly.",
    tuition: "Tuition per year",
    tuitionNone: "Fee not published; enter the figure from the university",
    living: "Living costs incl. housing, per month",
    livingFrom: "Programme page says:",
    livingRaised: "We raised it to €{n}, the minimum a month the visa requires.",
    livingFloor: "No published figure for this city, so we used the embassy's minimum. Real costs are usually higher.",
    insurance: "Health insurance per month",
    insuranceNone: "Enter the price of the insurance you will buy",
    other: "Other costs per year (books, semester fees, transport)",
    oneTime: "Visa and residence fees (one-off)",
    travel: "Flight and settling-in costs (one-off)",
    years: "Programme length in years",
    perYear: "Cost per year",
    firstYear: "First year incl. one-off costs",
    total: "Full programme cost",
    noTuition: "This total leaves out tuition because the fee is not published. Enter it above from the university's website for a complete figure.",
    proofTitle: "What the embassy asks you to prove",
    proofYear: "About €{n} for the first year",
    proofPlusHousing: "plus your housing cost",
    belowProof: "The living cost you entered is below the visa minimum (€{n} a month).",
    feesTitle: "Official fees",
    unknown: "Not published in the source",
    check: "to check",
    source: "Source",
    note: "These are planning estimates, not a quote. Check every figure with the university and the embassy before paying. Exchange-rate changes are not included.",
    eur: "EUR",
  },
};

const num = (v) => { const n = Number(String(v).replace(/,/g, "")); return Number.isFinite(n) && n > 0 ? n : 0; };
const fmt = (n) => Math.round(n).toLocaleString("en-US");

export default function CostCalc({ p, lang }) {
  const s = S[lang];
  const c = COSTS[p.country] || { fees: [], proof: null };
  const [origin] = useOrigin();
  // Some fee lines apply only when applying from Egypt.
  const fees = c.fees.filter((f) => !f.only || f.only === (origin || "eg"));
  const knownFees = fees.reduce((a, f) => a + (f.eur || 0), 0);
  const floor = c.proofExcludesHousing ? null : c.proofMonthly;
  const [v, setV] = useState({
    tuition: p.feePerYear ?? "",
    living: p.livingMonthly != null && floor ? Math.max(p.livingMonthly, floor) : p.livingMonthly ?? floor ?? "",
    insurance: c.insurance ? c.insurance.eur : "",
    other: "",
    oneTime: knownFees || "",
    travel: "",
    years: p.years ?? "",
  });
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });

  const perYear = num(v.tuition) + 12 * (num(v.living) + num(v.insurance)) + num(v.other);
  const once = num(v.oneTime) + num(v.travel);
  const yrs = num(v.years) || 1;
  const low = !c.proofExcludesHousing && c.proofMonthly && num(v.living) > 0 && num(v.living) < c.proofMonthly;
  const proofYear = c.proofMonthly ? c.proofMonthly * 12 + (c.proofExtra || 0) : null;

  const field = (k, label, hint, step = 50) => (
    <label className="cc-field">
      <span>{label}</span>
      <span className="cc-input">
        <input type="number" inputMode="decimal" min="0" step={step} value={v[k]} onChange={set(k)} dir="ltr" />
        {k !== "years" && <em>{s.eur}</em>}
      </span>
      {hint && <small>{hint}</small>}
    </label>
  );

  const raised = p.livingMonthly != null && floor && p.livingMonthly < floor;
  const livingHint = p.livingMonthly != null ? `${s.livingFrom} ${p.living}${raised ? ` ${s.livingRaised.replace("{n}", fmt(floor))}` : ""}` : floor ? s.livingFloor : p.living;

  return (
    <section className="costcalc" id="cost">
      <h2>{s.title}</h2>
      <p className="note">{s.intro}</p>
      <CurrencyPicker lang={lang} />
      <div className="cc-grid">
        <div className="cc-inputs">
          {field("tuition", s.tuition, p.feePerYear == null ? s.tuitionNone : null, 100)}
          {field("living", s.living, livingHint)}
          {field("insurance", s.insurance, c.insurance ? `${c.insurance[lang]} (${s.check})` : s.insuranceNone, 10)}
          {field("other", s.other, null)}
          {field("oneTime", s.oneTime, null, 10)}
          {field("travel", s.travel, null)}
          {field("years", s.years, null, 0.5)}
        </div>
        <div className="cc-out" aria-live="polite">
          <div className="cc-big">
            <span>{s.total}</span>
            <b dir="ltr">€{fmt(perYear * yrs + once)}</b>
            <Local eur={perYear * yrs + once} lang={lang} />
          </div>
          <div className="cc-row"><span>{s.perYear}</span><b dir="ltr">€{fmt(perYear)}<Local eur={perYear} lang={lang} /></b></div>
          <div className="cc-row"><span>{s.firstYear}</span><b dir="ltr">€{fmt(perYear + once)}<Local eur={perYear + once} lang={lang} /></b></div>
          {v.tuition === "" && <p className="cc-warn">{s.noTuition}</p>}
          {low && <p className="cc-warn">{s.belowProof.replace("{n}", fmt(c.proofMonthly))}</p>}
        </div>
      </div>

      {c.proof && (
        <div className="cc-facts">
          <h3>{s.proofTitle}</h3>
          <p>
            {c.proof[lang]}{c.proofCheck ? ` (${s.check})` : ""}
            {proofYear ? <><br /><b>{s.proofYear.replace("{n}", fmt(proofYear))}</b>{c.proofExcludesHousing ? ` ${s.proofPlusHousing}` : ""}</> : null}
            <br /><a href={c.proofSrc} target="_blank" rel="noopener noreferrer">{s.source} ↗</a>
          </p>
          <h3>{s.feesTitle}</h3>
          <ul>
            {fees.map((f, i) => (
              <li key={i}>
                {f[lang]}: <b>{f.eur != null ? <span dir="ltr">€{fmt(f.eur)}</span> : s.unknown}</b>
                {f.check ? ` (${s.check})` : ""}
                {f.src && <> · <a href={f.src} target="_blank" rel="noopener noreferrer">{s.source} ↗</a></>}
              </li>
            ))}
          </ul>
        </div>
      )}
      <p className="note">{s.note}</p>
    </section>
  );
}
