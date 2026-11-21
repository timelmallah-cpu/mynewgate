"use client";
// The top of the visas hub, in the same shape as the study home page: a question box for the AI assistant,
// "or", the questions tool, and the numbers. A typed question opens the assistant right under the box.
import { useState } from "react";
import VisaAsk from "./VisaAsk";

export default function VisaHero({ lang, title, lead, text, stats, base, studyBase }) {
  const [q, setQ] = useState("");
  const [asked, setAsked] = useState("");
  const submit = (e) => {
    e.preventDefault();
    const v = q.trim();
    if (v.length < 2) return;
    setAsked(v); setQ("");
    setTimeout(() => document.getElementById("vask-any")?.scrollIntoView({ behavior: "smooth", block: "start" }), 50);
  };
  return (
    <>
      <section className="gate vz-gate">
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
        <form className="gate-ask" role="search" onSubmit={submit}>
          <label htmlFor="vz-q">{text.askLabel}</label>
          <div>
            <input id="vz-q" type="search" dir="auto" maxLength={600} placeholder={text.askPh} value={q} onChange={(e) => setQ(e.target.value)} required minLength={2} />
            <button type="submit" className="btn gold">{text.askBtn}</button>
          </div>
        </form>
        <p className="gate-or"><span>{text.or}</span></p>
        <a className="btn ghost-light" href="#wz">{text.quiz}</a>
        <ul className="gate-stats">
          {stats.map(([v, label]) => <li key={label}><b>{v}</b><span>{label}</span></li>)}
        </ul>
      </section>
      {asked && <VisaAsk id="vask-any" lang={lang} ctx={{ p: "any" }} base={base} studyBase={studyBase} first={asked} />}
    </>
  );
}
