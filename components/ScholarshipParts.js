import Flag from "../lib/Flag";
import { T } from "../lib/i18n";

// Shared bits for the scholarship pages (server and client safe).
export function fmtDate(iso, lang, rough) {
  const d = new Date(iso + "T12:00:00Z");
  const loc = lang === "ar" ? "ar-u-nu-latn" : "en-GB";
  const opts = rough ? { month: "long", year: "numeric" } : { day: "numeric", month: "long", year: "numeric" };
  const s = new Intl.DateTimeFormat(loc, { ...opts, timeZone: "UTC" }).format(d);
  return rough ? (lang === "ar" ? `${s} تقريباً` : `around ${s}`) : s;
}

export function nextDeadline(s) {
  return [...s.deadlines].sort((a, b) => a.date.localeCompare(b.date))[0];
}

export function Hosts({ s, lang }) {
  const t = T[lang];
  return (
    <span className="hosts">
      {s.hosts.length > 6 ? (
        <>{lang === "ar" ? "عدة دول أوروبية" : "Several European countries"}</>
      ) : (
        s.hosts.map((h) => (
          <span key={h}><Flag code={h} size={16} /> {t.countries[h]}</span>
        ))
      )}
    </span>
  );
}

// What a deadline is for: applying to the programme, applying for the scholarship, or one application for both.
export function StepTag({ step, lang }) {
  if (!step) return null;
  return <span className={`step step-${step}`}>{T[lang].sch.steps[step]}</span>;
}

export function KindTag({ kind, lang }) {
  return <span className={`kind kind-${kind}`}>{T[lang].sch.kinds[kind]}</span>;
}
