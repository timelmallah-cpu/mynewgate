"use client";
import Link from "@/components/Link";
import { T } from "../lib/i18n";
import { PLAN_TEXT } from "../lib/planText";

// Shown when a free limit is reached: what Study Plus adds, without blocking the free information.
export default function Upgrade({ lang, kind, plus, per }) {
  const s = PLAN_TEXT[lang];
  if (per === "day") return <p className="ask-err" role="alert">{lang === "ar" ? "انتهى حدك لهذا اليوم. حاول مرة أخرى غداً." : "You've reached today's limit. Try again tomorrow."}</p>;
  if (plus) return <p className="ask-err" role="alert">{s.plusLimit}</p>;
  return (
    <div className="upgrade" role="alert">
      <b>{s.upgradeTitle}</b>
      <p>{s.upgrade[kind]}</p>
      <p className="note">{s.stillFree}</p>
      <Link className="btn gold small" href={`${T[lang].base}/pricing`}>{s.see}</Link>
    </div>
  );
}

// "n left" in the wording of the plan period.
export const leftText = (lang, n, per) => {
  const s = PLAN_TEXT[lang];
  if (per === "day") return lang === "ar" ? `تبقى لك ${n} اليوم` : `${n} left today`;
  return per === "cycle" ? s.leftCycle(n) : per === "life" ? s.leftLife(n) : s.leftMonth(n);
};
