"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { T } from "../lib/i18n";
import { PLAN_TEXT } from "../lib/planText";
import { BASE } from "../lib/site";
import { setPlus } from "../lib/plan";

// The subscription section of the account page.
export default function PlanBox({ lang, user }) {
  const s = PLAN_TEXT[lang];
  const t = T[lang];
  const [busy, setBusy] = useState(false);
  const [welcome, setWelcome] = useState(false);
  useEffect(() => { setPlus(Boolean(user.plus)); setWelcome(/[?&]sub=ok/.test(window.location.search)); }, [user.plus]);
  const plan = user.plan;
  const date = (sec) => new Date(sec * 1000).toLocaleDateString(lang === "ar" ? "ar-EG" : "en-GB", { day: "numeric", month: "long", year: "numeric" });
  const manage = async () => {
    setBusy(true);
    const r = await fetch(`${BASE}/api/billing/portal`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ lang }) }).catch(() => null);
    const d = await r?.json().catch(() => ({}));
    if (d?.url) window.location.href = d.url; else setBusy(false);
  };
  return (
    <section className="acc-box plan-box">
      <h2>{s.accTitle}</h2>
      {welcome && !user.plus && <p role="status">{s.welcome}</p>}
      {user.plus ? (
        <>
          <p><b>{s.accPlus}</b></p>
          {plan?.status === "past_due" && <p className="acc-err">{s.pastDue}</p>}
          {plan?.periodEnd && <p className="note">{plan.cancelAtPeriodEnd ? s.ends(date(plan.periodEnd)) : s.renews(date(plan.periodEnd))}</p>}
          <button className="btn ghost" onClick={manage} disabled={busy}>{s.manage}</button>
        </>
      ) : (
        <>
          <p>{s.accFree}</p>
          <Link className="btn gold small" href={`${t.base}/pricing`}>{s.see}</Link>
        </>
      )}
    </section>
  );
}
