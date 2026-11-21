"use client";
// "Which visa do I need?" in questions: purpose -> nationality -> destination / income -> answer + link.
// Covers visit, study, job search and remote work (digital nomad). Nothing is saved; the answers live
// only in the URL hash (#visit-eg-fr, #study-eg-de, #job-eg, #nomad-eg-3000) so a result can be shared.
import { useEffect, useState } from "react";
import { ORIGINS, ORIGIN_NAME, DEST, KIND, VTEXT } from "../lib/visit";
import { NOMADS, NTEXT, nationalityOk } from "../lib/nomadVisas";

const W = {
  ar: {
    q1: "ما سبب سفرك؟", q2: "ما جنسيتك (جواز السفر)؟", q3v: "إلى أين تريد السفر؟", q3s: "أين تريد أن تدرس؟", q3n: "كم دخلك الشهري من العمل عن بُعد؟ (باليورو)",
    p: { visit: ["زيارة أو سياحة", "رحلة قصيرة، زيارة عائلة، مؤتمر"], study: ["دراسة", "جامعة أو لغة أو دراسة مهنية"], job: ["البحث عن عمل", "السفر للبحث عن وظيفة"], nomad: ["العمل عن بُعد", "تأشيرات الرحالة الرقميين"], live: ["الهجرة والإقامة الدائمة", "قريباً"] },
    step: (n) => `السؤال ${n}`, back: "رجوع", restart: "ابدأ من جديد", pick: "اختر",
    studyRes: (n, d) => `تأشيرة الدراسة إلى ${d} لحامل جواز ${n}`,
    studyReady: "عندنا خطوات مفصّلة لهذا الطريق: أين تحجز الموعد، والأوراق، والرسوم، وإثبات المال.",
    studyGeneral: "عندنا الخطوات العامة لتأشيرة الدراسة في هذه الدولة؛ الجهة التي تقدّم لديها من بلدك مكتوبة في الصفحة مع رابطها الرسمي، وبعض التفاصيل للتحقق.",
    studyGo: "افتح خطوات تأشيرة الدراسة", studyProg: "وابحث عن برامج في هذه الدولة",
    jobRes: "طرق البحث عن عمل المتاحة الآن في الموقع",
    jobSoon: "قريباً: البطاقة الزرقاء الأوروبية، وتأشيرة العامل الماهر البريطانية، وطرق النقاط في كندا وأستراليا ونيوزيلندا.",
    jobOpen: "مفتوحة لكل الجنسيات بشرط المؤهل", calc: "احسب نقاطك",
    nomadRes: (k) => (!k ? "لا توجد تأشيرة في قائمتنا تناسب هذا الدخل" : k === 1 ? "تأشيرة واحدة تناسب هذا الدخل" : k === 2 ? "تأشيرتان تناسبان هذا الدخل" : k <= 10 ? `${k} تأشيرات تناسب هذا الدخل` : `${k} تأشيرة تناسب هذا الدخل`),
    nomadOther: "تأشيرات تحتاج دخلاً أعلى أو ليس لها رقم شهري", nomadAll: "كل تأشيرات الرحالة الرقميين",
    liveSoon: "هذا الجزء قيد الإعداد: الإقامة الدائمة والهجرة في كندا وأستراليا ونيوزيلندا وبريطانيا وأوروبا. إلى أن يجهز، تجد طرق الإقامة الطويلة المتاحة الآن أسفل هذه الصفحة.",
    next: "التالي", show: "اعرض النتيجة",
  },
  en: {
    q1: "Why are you travelling?", q2: "What is your nationality (passport)?", q3v: "Where do you want to go?", q3s: "Where do you want to study?", q3n: "How much do you earn a month working remotely? (euros)",
    p: { visit: ["Visit or tourism", "Short trip, family visit, conference"], study: ["Study", "University, language or vocational study"], job: ["Look for work", "Travel to search for a job"], nomad: ["Work remotely", "Digital nomad visas"], live: ["Immigration and permanent residence", "Coming soon"] },
    step: (n) => `Question ${n}`, back: "Back", restart: "Start again", pick: "Choose",
    studyRes: (n, d) => `Student visa to ${d} for a ${n} passport`,
    studyReady: "We have detailed steps for this route: where to book, documents, fees and proof of funds.",
    studyGeneral: "We have the general student visa steps for this country; where to apply from your country is on the page with its official link, and some details are to verify.",
    studyGo: "Open the student visa steps", studyProg: "and find programmes in this country",
    jobRes: "Job-search routes on the site now",
    jobSoon: "Coming soon: the EU Blue Card, the UK Skilled Worker visa, and the points routes of Canada, Australia and New Zealand.",
    jobOpen: "Open to every nationality if you hold the qualification", calc: "Check your points",
    nomadRes: (k) => (k === 1 ? "1 visa fits this income" : k ? `${k} visas fit this income` : "No visa on our list fits this income"),
    nomadOther: "Visas that need a higher income or give no monthly figure", nomadAll: "All digital nomad visas",
    liveSoon: "This part is being prepared: permanent residence and immigration in Canada, Australia, New Zealand, the UK and Europe. Until then, the long-stay routes available now are further down this page.",
    next: "Next", show: "Show the result",
  },
};
const PURPOSES = ["visit", "study", "job", "nomad", "live"];
const fmt = (n, lang) => Math.round(n).toLocaleString(lang === "ar" ? "ar-EG-u-nu-latn" : "en-GB");

export default function VisaWizard({ lang, base, studyBase, countries, studyReady, jobRoutes }) {
  const t = VTEXT[lang];
  const w = W[lang];
  const nt = NTEXT[lang];
  const [p, setP] = useState("");
  const [o, setO] = useState("");
  const [d, setD] = useState("");
  const [inc, setInc] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    const h = (location.hash || "").slice(1).split("-");
    if (!PURPOSES.includes(h[0])) return;
    setP(h[0]);
    if (h[1] && ORIGIN_NAME[h[1]]) setO(h[1]);
    if (h[0] === "visit" && DEST.some((x) => x.id === h[2])) { setD(h[2]); setDone(true); }
    else if (h[0] === "study" && countries[h[2]]) { setD(h[2]); setDone(true); }
    else if (h[0] === "nomad" && /^\d+$/.test(h[2] || "")) { setInc(h[2]); setDone(true); }
    else if ((h[0] === "job" && h[1]) || h[0] === "live") setDone(true);
  }, [countries]);

  useEffect(() => {
    if (!p) { if (location.hash) history.replaceState(null, "", location.pathname + location.search); return; }
    const v = Number(String(inc).replace(/[^\d]/g, ""));
    const parts = [p, o, p === "nomad" ? (v || "") : d].filter(Boolean);
    history.replaceState(null, "", `#${parts.join("-")}`);
  }, [p, o, d, inc]);

  const sorted = [...ORIGINS].sort((a, b) => a[lang].localeCompare(b[lang], lang));
  const reset = () => { setP(""); setO(""); setD(""); setInc(""); setDone(false); };
  const pickP = (x) => { setP(x); setD(""); setInc(""); setDone(x === "live"); };
  const stepNo = !p ? 1 : !o && p !== "live" ? 2 : 3;
  const needsThird = p === "visit" || p === "study" || p === "nomad";

  const Back = () => (
    <p className="wz-nav">
      <button type="button" className="wz-link" onClick={() => (done ? setDone(false) : o && needsThird ? setO("") : setP(""))}>{lang === "ar" ? "→ " : "← "}{w.back}</button>
      <button type="button" className="wz-link" onClick={reset}>{w.restart}</button>
    </p>
  );

  let body;
  if (!p) {
    body = (
      <>
        <p className="wz-step">{w.step(1)}</p>
        <h3 className="wz-q">{w.q1}</h3>
        <div className="wz-opts">
          {PURPOSES.map((x) => (
            <button key={x} type="button" className={`wz-opt${x === "live" ? " wz-soon" : ""}`} onClick={() => pickP(x)}>
              <b>{w.p[x][0]}</b><span>{w.p[x][1]}</span>
            </button>
          ))}
        </div>
      </>
    );
  } else if (p === "live") {
    body = (<><div className="vz-result vz-cond" aria-live="polite"><p className="vz-kind">{w.p.live[0]}</p><p>{w.liveSoon}</p></div><Back /></>);
  } else if (!o) {
    body = (
      <>
        <p className="wz-step">{w.step(2)} · {w.p[p][0]}</p>
        <label className="wz-q" htmlFor="wz-o">{w.q2}</label>
        <div className="vz-form">
          <select id="wz-o" value={o} onChange={(e) => { setO(e.target.value); if (p === "job" && e.target.value) setDone(true); }}>
            <option value="">{w.pick}</option>
            {sorted.map((x) => <option key={x.c} value={x.c}>{x[lang]}</option>)}
          </select>
        </div>
        <Back />
      </>
    );
  } else if (!done) {
    const v = Number(String(inc).replace(/[^\d]/g, ""));
    body = (
      <>
        <p className="wz-step">{w.step(3)} · {w.p[p][0]} · {ORIGIN_NAME[o][lang]}</p>
        {p === "visit" && (
          <>
            <h3 className="wz-q">{w.q3v}</h3>
            <div className="wz-chips">
              {DEST.map((x) => <button key={x.id} type="button" className="wz-chip" onClick={() => { setD(x.id); setDone(true); }}>{x.name[lang]}</button>)}
            </div>
          </>
        )}
        {p === "study" && (
          <>
            <label className="wz-q" htmlFor="wz-s">{w.q3s}</label>
            <div className="vz-form">
              <select id="wz-s" value={d} onChange={(e) => { setD(e.target.value); if (e.target.value) setDone(true); }}>
                <option value="">{w.pick}</option>
                {Object.entries(countries).sort((a, b) => a[1].localeCompare(b[1], lang)).map(([c, n]) => <option key={c} value={c}>{n}</option>)}
              </select>
            </div>
          </>
        )}
        {p === "nomad" && (
          <form onSubmit={(e) => { e.preventDefault(); if (v) setDone(true); }}>
            <label className="wz-q" htmlFor="wz-i">{w.q3n}</label>
            <div className="vz-form">
              <input id="wz-i" inputMode="numeric" className="nm-in" placeholder="3000" value={inc} onChange={(e) => setInc(e.target.value)} />
              <button type="submit" className="btn" disabled={!v}>{w.show}</button>
            </div>
          </form>
        )}
        <Back />
      </>
    );
  } else if (p === "visit") {
    const dest = DEST.find((x) => x.id === d);
    const st = dest.status[o];
    body = (
      <>
        <div className={`vz-result vz-${st.s}`} aria-live="polite">
          <p className="vz-who">{t.result(ORIGIN_NAME[o][lang], dest.name[lang])}</p>
          <p className="vz-kind">{KIND[st.s][lang]}</p>
          <p>{st.n[lang]}</p>
          {st.s !== "free" && st.s !== "banned" && (
            <dl className="vz-facts">
              <div><dt>{t.visa}</dt><dd>{dest.visa[lang]}</dd></div>
              <div><dt>{t.fee}</dt><dd>{dest.fee[lang]}</dd></div>
              <div><dt>{t.where}</dt><dd>{dest.where[lang]}</dd></div>
            </dl>
          )}
          <p className="vz-links">
            <a href={`${base}/${dest.slug}`}>{t.full} {dest.name[lang]} {lang === "ar" ? "←" : "→"}</a>
            {st.src ? <> · <a href={st.src} target="_blank" rel="noopener noreferrer">{t.src} ↗</a></> : null}
          </p>
        </div>
        <Back />
      </>
    );
  } else if (p === "study") {
    const ready = (studyReady[o] || []).includes(d);
    body = (
      <>
        <div className={`vz-result ${ready ? "vz-eta" : "vz-cond"}`} aria-live="polite">
          <p className="vz-who">{w.studyRes(ORIGIN_NAME[o][lang], countries[d])}</p>
          <p>{ready ? w.studyReady : w.studyGeneral}</p>
          <p className="vz-links">
            <a href={`${studyBase}/visa?from=${o}&to=${d}`}>{w.studyGo} {lang === "ar" ? "←" : "→"}</a>
          </p>
        </div>
        <Back />
      </>
    );
  } else if (p === "job") {
    body = (
      <>
        <div className="vz-result vz-eta" aria-live="polite">
          <p className="vz-kind">{w.jobRes}</p>
          <ul className="wz-list">
            {jobRoutes.map((r) => (
              <li key={r.slug}><a href={`${base}/${r.slug}`}><b>{r.name}</b></a><br /><span className="meta">{r.short} · {w.jobOpen}</span>{r.points ? <> · <a href={`${base}/${r.slug}#pts-h`}>{w.calc}</a></> : null}</li>
            ))}
          </ul>
          <p className="meta">{w.jobSoon}</p>
        </div>
        <Back />
      </>
    );
  } else {
    const v = Number(String(inc).replace(/[^\d]/g, ""));
    const rows = NOMADS.map((n) => ({ n, nat: nationalityOk(n, o), fit: n.min != null && v >= n.min })).sort((a, b) => (a.n.min ?? 1e9) - (b.n.min ?? 1e9));
    const fits = rows.filter((r) => r.fit && r.nat !== false);
    const rest = rows.filter((r) => !r.fit && r.nat !== false);
    const href = (n) => `${base}/${n.slug}`;
    body = (
      <>
        <div className={`vz-result ${fits.length ? "vz-free" : "vz-visa"}`} aria-live="polite">
          <p className="vz-who">{ORIGIN_NAME[o][lang]} · {fmt(v, lang)} €</p>
          <p className="vz-kind">{w.nomadRes(fits.length)}</p>
          {fits.length > 0 && (
            <ul className="wz-list">
              {fits.map(({ n, nat }) => <li key={n.id}><a href={href(n)}><b>{n.name[lang]}</b></a> <span className="meta">{fmt(n.min, lang)} €{n.minCheck ? ` (${nt.estimate})` : ""}{nat === "check" ? ` · ${nt.natCheck}` : ""}</span></li>)}
            </ul>
          )}
          {rest.length > 0 && (
            <details className="wz-more"><summary>{w.nomadOther} ({rest.length})</summary>
              <ul className="wz-list">
                {rest.map(({ n, nat }) => <li key={n.id}><a href={href(n)}>{n.name[lang]}</a> <span className="meta">{n.min != null ? `${fmt(n.min, lang)} €` : nt.noFig}{nat === "check" ? ` · ${nt.natCheck}` : ""}</span></li>)}
              </ul>
            </details>
          )}
          <p className="vz-links"><a href={`${base}/digital-nomad-visas`}>{w.nomadAll} {lang === "ar" ? "←" : "→"}</a></p>
        </div>
        <Back />
      </>
    );
  }

  return (
    <section className="card vz-tool wz" aria-labelledby="wz-h">
      <h2 id="wz-h">{t.toolTitle}</h2>
      <ol className="wz-dots" aria-hidden="true">{[1, 2, 3].map((n) => <li key={n} className={n <= stepNo ? "on" : ""} />)}</ol>
      {body}
    </section>
  );
}
