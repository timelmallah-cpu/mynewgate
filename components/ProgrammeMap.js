"use client";
// One region's map (land drawn at build time) with a marker per city; filters by level, field and yearly fee.
import { useMemo, useState } from "react";
import Link from "@/components/Link";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { FIELD_IDS, BA_FIELD_IDS } from "../lib/options";

const FIELDS = [...new Set([...FIELD_IDS, ...BA_FIELD_IDS])];
const FEES = [0, 3000, 8000, 15000];
export const MAP_TEXT = {
  ar: { l: "المرحلة", f: "المجال", fee: "المصاريف السنوية", all: "الكل", master: "ماجستير", bachelor: "بكالوريوس", any: "أي مبلغ",
    free: "بدون مصاريف دراسية", upTo: (n) => `حتى ${n.toLocaleString("en")} يورو`, cities: (n, p) => `${n} مدينة، ${p} برنامج`,
    pick: "اضغط على دائرة مدينة لترى برامجها، أو اختر من القائمة تحتها.", list: "المدن", feeNP: "المصاريف غير منشورة", perYear: "يورو/سنة",
    close: "إغلاق", none: "لا توجد برامج بهذه الاختيارات في هذه المنطقة.", note: "مكان الدائرة هو المدينة لا العنوان الدقيق للجامعة. المصاريف تقريبية باليورو؛ تفاصيلها في صفحة كل برنامج." },
  en: { l: "Level", f: "Field", fee: "Yearly tuition", all: "All", master: "Master's", bachelor: "Bachelor's", any: "Any amount",
    free: "No tuition", upTo: (n) => `Up to €${n.toLocaleString("en")}`, cities: (n, p) => `${n} cities, ${p} programmes`,
    pick: "Tap a city circle to see its programmes, or choose from the list below.", list: "Cities", feeNP: "fee not published", perYear: "€/year",
    close: "Close", none: "No programmes match these choices in this region.", note: "Each circle marks the city, not the university's exact address. Fees are approximate, in euros; details on each programme page." },
};

export default function ProgrammeMap({ view, lang, base, W, H, children }) {
  const t = T[lang];
  const s = MAP_TEXT[lang];
  const [q, setQ] = useState({ l: "", f: "", fee: "" });
  const [sel, setSel] = useState(null);
  const set = (k, v) => setQ((x) => ({ ...x, [k]: v }));
  const marks = useMemo(() => view.markers.map((m) => ({
    ...m,
    list: m.progs.filter((p) => (!q.l || p.l === q.l) && (!q.f || p.f === q.f) && (q.fee === "" || (p.fee != null && p.fee <= Number(q.fee)))),
  })).filter((m) => m.list.length).sort((a, b) => b.list.length - a.list.length), [view, q]);
  const total = marks.reduce((a, m) => a + m.list.length, 0);
  const cur = sel && marks.find((m) => m.key === sel);
  const name = (m) => (lang === "ar" ? m.ar : m.en);
  const r = (n) => Math.min(22, 4 + Math.sqrt(n) * 2.4);
  return (
    <>
      <form className="card ec-form" onSubmit={(e) => e.preventDefault()}>
        <label className="ec-field"><span>{s.l}</span>
          <select value={q.l} onChange={(e) => set("l", e.target.value)}><option value="">{s.all}</option><option value="master">{s.master}</option><option value="bachelor">{s.bachelor}</option></select>
        </label>
        <label className="ec-field"><span>{s.f}</span>
          <select value={q.f} onChange={(e) => set("f", e.target.value)}><option value="">{s.all}</option>{FIELDS.map((f) => <option key={f} value={f}>{t.fields[f]}</option>)}</select>
        </label>
        <label className="ec-field"><span>{s.fee}</span>
          <select value={q.fee} onChange={(e) => set("fee", e.target.value)}><option value="">{s.any}</option>{FEES.map((n) => <option key={n} value={n}>{n ? s.upTo(n) : s.free}</option>)}</select>
        </label>
      </form>
      <p className="notice" aria-live="polite">{marks.length ? `${s.cities(marks.length, total)}. ${s.pick}` : s.none}</p>
      <div className="pm-wrap">
        <div className="pm-stack">
        {children}
        <svg className="pm-dots" viewBox={`0 0 ${W} ${H}`} role="img" aria-label={lang === "ar" ? `خريطة ${view.ar}` : `Map of ${view.en}`}>
          {[...marks].reverse().map((m) => (
            <g key={m.key} className={`pm-dot${sel === m.key ? " on" : ""}`} onClick={() => setSel(m.key)} tabIndex={-1}>
              <circle cx={m.x} cy={m.y} r={r(m.list.length)} />
              {m.list.length >= 8 && <text x={m.x} y={m.y + 4} textAnchor="middle">{m.list.length}</text>}
              <title>{`${name(m)}: ${m.list.length}`}</title>
            </g>
          ))}
        </svg>
        </div>
        {cur && (
          <div className="card pm-panel" id="pm-panel">
            <div className="pm-head"><b><Flag code={cur.c} size={14} /> {name(cur)}</b><button type="button" className="btn ghost small" onClick={() => setSel(null)}>{s.close}</button></div>
            <ul className="level-list">
              {cur.list.map((p) => (
                <li key={p.i}>
                  <Link href={`${base}/programme/${p.i}`}><b><bdi>{p.n}</bdi></b></Link>
                  <small><bdi>{p.u}</bdi> · {lang === "ar" ? (p.l === "master" ? s.master : s.bachelor) : (p.l === "master" ? s.master : s.bachelor)} · {p.fee == null ? s.feeNP : p.fee === 0 ? s.free : <><span dir="ltr">{Math.round(p.fee).toLocaleString("en")}</span> {s.perYear}</>}</small>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <h2>{s.list}</h2>
      <ul className="pm-cities">
        {marks.map((m) => (
          <li key={m.key}><button type="button" className={`chip${sel === m.key ? " on" : ""}`} aria-pressed={sel === m.key} onClick={() => { setSel(m.key); setTimeout(() => document.getElementById("pm-panel")?.scrollIntoView({ behavior: "smooth", block: "nearest" }), 50); }}><Flag code={m.c} size={12} /> {name(m)} ({m.list.length})</button></li>
        ))}
      </ul>
      <p className="meta">{s.note}</p>
    </>
  );
}
