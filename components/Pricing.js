"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { T } from "../lib/i18n";
import { PLAN_TEXT } from "../lib/planText";
import { BASE } from "../lib/site";
import { hasPlus } from "../lib/plan";

export default function Pricing({ lang }) {
  const s = PLAN_TEXT[lang];
  const t = T[lang];
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");
  const [plus, setPlusState] = useState(false);
  useEffect(() => {
    setPlusState(hasPlus());
    if (/[?&]sub=cancel/.test(window.location.search)) setMsg("cancelled");
  }, []);

  const subscribe = async () => {
    setBusy(true); setMsg("");
    try {
      const r = await fetch(`${BASE}/api/billing/checkout`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ lang }) });
      const d = await r.json().catch(() => ({}));
      if (d.url) { window.location.href = d.url; return; }
      setMsg(d.error === "signin" ? "signin" : d.error === "not_configured" ? "soon" : d.error === "already" ? "already" : "failed");
    } catch { setMsg("failed"); }
    setBusy(false);
  };

  return (
    <article className="pricing">
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>

      <section className="card price-card">
        <p className="price-name">{s.name}</p>
        <p className="price-amount">{s.price}</p>
        <p className="note">{s.priceNote}</p>
        {plus ? <p><b>{s.already}</b> <Link href={`${t.base}/account`}>{T[lang].base ? "My account" : "حسابي"}</Link></p> : (
          <button className="btn gold" onClick={subscribe} disabled={busy}>{busy ? s.busy : s.subscribe}</button>
        )}
        {msg === "signin" && <p role="alert">{s.signin} <Link className="btn small" href={`${t.base}/login?next=${t.base}/pricing`}>{s.signinBtn}</Link></p>}
        {msg && msg !== "signin" && <p role="alert" className={msg === "failed" ? "ask-err" : "note"}>{s[msg]}</p>}
      </section>

      <h2>{s.compareTitle}</h2>
      <div className="table-wrap">
        <table className="price-table">
          <thead><tr><th scope="col">{s.feature}</th><th scope="col">{s.free}</th><th scope="col">{s.name}</th></tr></thead>
          <tbody>
            {s.rows.map(([f, a, b, soon]) => (
              <tr key={f}>
                <th scope="row">{f}{soon && <span className="soon-tag">{s.soonTag}</span>}</th>
                <td>{a}</td><td>{b}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="note">{s.soonNote}</p>

      <h2>{s.rulesTitle}</h2>
      <ul>{s.rules.map((r) => <li key={r}>{r}</li>)}</ul>

      <h2>{s.payTitle}</h2>
      <p>{s.pay}</p>
      <p className="tool-strip">
        <Link href={`${t.base}/terms`}>{lang === "ar" ? "شروط الاستخدام" : "Terms of use"}</Link>
        <Link href={`${t.base}/privacy`}>{lang === "ar" ? "الخصوصية" : "Privacy"}</Link>
      </p>
    </article>
  );
}
