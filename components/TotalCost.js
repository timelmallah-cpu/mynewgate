"use client";
// One number at the top of a programme page: tuition + living + health insurance for the whole programme, plus the
// official visa and residence fees. Shown in the visitor's currency when they chose one. Travel is left out.
import { estimateTotal } from "../lib/costTotal";
import { Local } from "./Currency";
import { useOrigin } from "./Origin";

const fmt = (n) => Math.round(n).toLocaleString("en-US");
const yrs = (y, ar) => (ar ? (y === 1 ? "سنة واحدة" : y === 2 ? "سنتين" : y < 3 ? `${y} سنة` : `${y} سنوات`) : `${y} year${y === 1 ? "" : "s"}`);

export default function TotalCost({ p, lang }) {
  const [origin] = useOrigin();
  const ar = lang === "ar";
  const e = estimateTotal(p, origin);
  if (e.missing) {
    const why = e.missing.includes("tuition") ? (ar ? "الرسوم الدراسية غير منشورة" : "the tuition fee is not published")
      : e.missing.includes("years") ? (ar ? "مدة البرنامج غير منشورة" : "the programme length is not published")
      : (ar ? "تكلفة المعيشة غير منشورة" : "living costs are not published");
    return <dd>{ar ? `لا يمكن حسابها لأن ${why}.` : `Can't be estimated because ${why}.`} <a className="ctx-link" href="#cost">{ar ? "احسبها بأرقامك" : "Calculate it with your figures"}</a></dd>;
  }
  const parts = ar
    ? `الرسوم والمعيشة${e.insuranceKnown ? " والتأمين الصحي" : ""} لمدة ${yrs(e.years, true)}${e.visaKnown ? "، ورسوم التأشيرة والإقامة" : ""}؛ بدون تذكرة السفر`
    : `Tuition and living${e.insuranceKnown ? ", health insurance" : ""} for ${yrs(e.years, false)}${e.visaKnown ? ", plus visa and residence fees" : ""}; flights not included`;
  return (
    <dd>
      <span className="ltr total-num">€{fmt(e.total)}</span><Local eur={e.total} lang={lang} />
      <small className="total-parts">{parts}. {ar ? `حوالي €${fmt(e.perYear)} في السنة.` : `About €${fmt(e.perYear)} a year.`}</small>
      <a className="ctx-link" href="#cost">{ar ? "عدّل الأرقام واعرضها بعملة بلدك" : "Adjust the figures and see them in your currency"}</a>
    </dd>
  );
}
