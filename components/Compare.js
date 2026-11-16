"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { T } from "../lib/i18n";
import Flag from "../lib/Flag";
import { getSaved } from "../lib/saved";
import { POST_STUDY, PS_TEXT } from "../lib/postStudy";
import { COSTS } from "../lib/costs";
import { BASE } from "../lib/site";

const S = {
  ar: {
    title: "قارن البرامج",
    lead: "اختر حتى 3 برامج لتراها جنباً إلى جنب. البرامج المحفوظة في قائمتك تظهر أولاً.",
    search: "ابحث باسم البرنامج أو الجامعة", saved: "من قائمتي", results: "نتائج البحث",
    add: "أضف", remove: "إزالة", full: "اخترت 3 برامج. أزل واحداً لتضيف غيره.",
    empty: "لم تختر أي برنامج بعد.", loading: "جارٍ التحميل…", failed: "تعذر تحميل البيانات. أعد تحميل الصفحة.",
    rows: { level: "المستوى", country: "الدولة والمدينة", fee: "الرسوم السنوية", years: "المدة", total: "الرسوم لكامل المدة", living: "المعيشة شهرياً", proof: "إثبات المال للتأشيرة (شهرياً)", deadline: "موعد التقديم", english: "شرط الإنجليزية", after: "إقامة بعد التخرج" },
    bachelor: "بكالوريوس", master: "ماجستير", doctorate: "دكتوراه",
    eur: (n) => `${n} يورو`, free: "بدون رسوم", na: "غير منشور في المصدر",
    open: "صفحة البرنامج", share: "رابط هذه المقارنة", copied: "تم النسخ", copy: "انسخ الرابط",
    note: "الأرقام من صفحات البرامج على موقعنا. «الرسوم لكامل المدة» = الرسوم السنوية × عدد السنوات، بدون المعيشة.",
  },
  en: {
    title: "Compare programmes",
    lead: "Pick up to 3 programmes to see them side by side. Programmes saved in your list show first.",
    search: "Search by programme or university", saved: "From my list", results: "Search results",
    add: "Add", remove: "Remove", full: "You have 3 programmes. Remove one to add another.",
    empty: "You haven't picked any programme yet.", loading: "Loading…", failed: "Couldn't load the data. Reload the page.",
    rows: { level: "Level", country: "Country and city", fee: "Annual fee", years: "Length", total: "Fees for the whole degree", living: "Living cost per month", proof: "Visa proof of funds (monthly)", deadline: "Deadline", english: "English requirement", after: "Post-study residence" },
    bachelor: "Bachelor's", master: "Master's", doctorate: "Doctorate",
    eur: (n) => `€${n}`, free: "No tuition fee", na: "Not published in the source",
    open: "Programme page", share: "Link to this comparison", copied: "Copied", copy: "Copy link",
    note: "Figures come from the programme pages on our site. \"Fees for the whole degree\" = annual fee × years, without living costs.",
  },
};

const fmt = (n) => Math.round(n).toLocaleString("en-US");

export default function Compare({ lang }) {
  const t = T[lang];
  const s = S[lang];
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);
  const [picked, setPicked] = useState([]);
  const [saved, setSaved] = useState([]);
  const [q, setQ] = useState("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    fetch(`${BASE}/data/compare-${lang}.json`).then((r) => r.json()).then(setData).catch(() => setErr(true));
    const ids = getSaved().filter((k) => k.startsWith("p:")).map((k) => Number(k.slice(2)));
    setSaved(ids);
    const m = window.location.search.match(/[?&]ids=([\d,]+)/);
    if (m) setPicked(m[1].split(",").map(Number).filter(Boolean).slice(0, 3));
  }, [lang]);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (picked.length) url.searchParams.set("ids", picked.join(",")); else url.searchParams.delete("ids");
    window.history.replaceState(null, "", url);
  }, [picked]);

  const byId = useMemo(() => new Map((data || []).map((p) => [p.i, p])), [data]);
  const results = useMemo(() => {
    if (!data || q.trim().length < 2) return [];
    const w = q.trim().toLowerCase();
    return data.filter((p) => `${p.n} ${p.u}`.toLowerCase().includes(w)).slice(0, 12);
  }, [data, q]);

  if (err) return <><h1>{s.title}</h1><p className="notice">{s.failed}</p></>;

  const add = (id) => setPicked((l) => (l.includes(id) || l.length >= 3 ? l : [...l, id]));
  const rm = (id) => setPicked((l) => l.filter((x) => x !== id));
  const progs = picked.map((id) => byId.get(id)).filter(Boolean);

  const choice = (p) => (
    <li key={p.i}>
      <span><b>{p.n}</b><small>{p.u} · {t.countries[p.c]}</small></span>
      {picked.includes(p.i)
        ? <button type="button" className="btn ghost small" onClick={() => rm(p.i)}>{s.remove}</button>
        : <button type="button" className="btn small" disabled={picked.length >= 3} onClick={() => add(p.i)}>{s.add}</button>}
    </li>
  );

  const fee = (p) => (p.f === 0 ? s.free : p.f ? s.eur(fmt(p.f)) : s.na);
  const total = (p) => (p.f === 0 ? s.free : p.f && p.y ? s.eur(fmt(p.f * p.y)) : s.na);
  const proof = (p) => (COSTS[p.c]?.proofMonthly ? s.eur(fmt(COSTS[p.c].proofMonthly)) : s.na);
  const after = (p) => (POST_STUDY[p.c] ? PS_TEXT[lang].months(POST_STUDY[p.c].months) : s.na);

  const rows = [
    ["level", (p) => s[p.l]],
    ["country", (p) => <><Flag code={p.c} size={18} /> {t.countries[p.c]} · {p.ci}</>],
    ["fee", fee], ["years", (p) => p.d || s.na], ["total", total],
    ["living", (p) => (p.lm ? s.eur(fmt(p.lm)) : s.na)], ["proof", proof],
    ["deadline", (p) => p.dl || s.na], ["english", (p) => p.e || s.na], ["after", after],
  ];

  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <p><Link className="btn ghost small" href={`${t.base}/countries`}>{lang === "en" ? "Compare countries instead" : "قارن الدول بدل البرامج"}</Link></p>
      {!data && <p className="meta">{s.loading}</p>}

      {data && (
        <div className="card cmp-pick">
          {saved.length > 0 && (
            <>
              <h3>{s.saved}</h3>
              <ul className="cmp-choices">{saved.map((id) => byId.get(id)).filter(Boolean).map(choice)}</ul>
            </>
          )}
          <label className="cmp-search">
            <span className="sr-only">{s.search}</span>
            <input type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={s.search} />
          </label>
          {results.length > 0 && <><h3>{s.results}</h3><ul className="cmp-choices">{results.map(choice)}</ul></>}
          {picked.length >= 3 && <p className="meta">{s.full}</p>}
        </div>
      )}

      {data && !progs.length && <p className="meta">{s.empty}</p>}

      {progs.length > 0 && (
        <div className="cmp-grid" style={{ "--n": progs.length }}>
          {progs.map((p) => (
            <article key={p.i} className="card cmp-col">
              <h2><Link href={`${t.base}/programme/${p.i}`}>{p.n}</Link></h2>
              <p className="meta">{p.u}</p>
              <dl>
                {rows.map(([k, f]) => (
                  <div key={k}><dt>{s.rows[k]}</dt><dd>{f(p)}</dd></div>
                ))}
              </dl>
              <div className="cmp-actions">
                <Link className="btn ghost small" href={`${t.base}/programme/${p.i}`}>{s.open}</Link>
                <button type="button" className="btn ghost small" onClick={() => rm(p.i)}>{s.remove}</button>
              </div>
            </article>
          ))}
        </div>
      )}

      {progs.length > 1 && (
        <p>
          <button type="button" className="btn ghost small" onClick={() => {
            navigator.clipboard?.writeText(window.location.href).then(() => { setCopied(true); setTimeout(() => setCopied(false), 2000); });
          }}>{copied ? s.copied : s.copy}</button>
        </p>
      )}

      <div className="notice">{s.note}</div>
    </>
  );
}
