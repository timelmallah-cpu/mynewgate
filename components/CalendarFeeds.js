"use client";
// Pick a country, field and level, then subscribe to a calendar of their deadlines on the phone.
import { useState } from "react";
import { COUNTRY_IDS, FIELD_IDS, BA_FIELD_IDS } from "../lib/options";
import { T } from "../lib/i18n";
import { SITE_URL } from "../lib/site";
import { makeKey } from "../lib/calendarFeedKey";

const FIELDS = [...new Set([...FIELD_IDS, ...BA_FIELD_IDS])];
const TX = {
  ar: { c: "الدولة", f: "المجال", l: "المرحلة", all: "الكل", master: "ماجستير", bachelor: "بكالوريوس", doctorate: "دكتوراه",
    apple: "اشترك على آيفون أو ماك", google: "أضفه إلى Google Calendar", outlook: "أضفه إلى Outlook", copy: "انسخ رابط التقويم", copied: "تم النسخ",
    howTitle: "كيف يعمل؟", how: ["اختر ما يهمك، ثم اضغط زر تطبيق التقويم الذي تستخدمه.", "يظهر كل موعد في تقويمك مع تذكير قبله بـ 14 يوماً و3 أيام.", "التقويم يتحدث تلقائياً كل يوم: أي موعد نضيفه أو نصححه يصل إليك وحده.", "المواعيد التقديرية مكتوب بجانبها «تقديري»: تأكد منها من صفحة الجامعة.", "على أندرويد: أضف التقويم من Google Calendar على الكمبيوتر مرة واحدة، فيظهر في هاتفك."] },
  en: { c: "Country", f: "Field", l: "Level", all: "All", master: "Master's", bachelor: "Bachelor's", doctorate: "Doctorates",
    apple: "Subscribe on iPhone or Mac", google: "Add to Google Calendar", outlook: "Add to Outlook", copy: "Copy calendar link", copied: "Copied",
    howTitle: "How it works", how: ["Choose what you care about, then tap the button for your calendar app.", "Every deadline appears in your calendar with reminders 14 and 3 days before.", "The calendar refreshes daily: any date we add or correct reaches you by itself.", "Estimated dates are marked \"estimate\": check them on the university's page.", "On Android: add the calendar once from Google Calendar on a computer and it shows on your phone."] },
};

export default function CalendarFeeds({ lang }) {
  const t = T[lang];
  const s = TX[lang];
  const [q, setQ] = useState({ c: "", f: "", l: "" });
  const [ok, setOk] = useState(false);
  const key = makeKey(q);
  const https = `${SITE_URL}/feed/${key}.ics?lang=${lang}`;
  const webcal = https.replace(/^https?:/, "webcal:");
  const google = `https://calendar.google.com/calendar/r?cid=${encodeURIComponent(webcal)}`;
  const outlook = `https://outlook.live.com/calendar/0/addfromweb?url=${encodeURIComponent(https)}&name=${encodeURIComponent(lang === "ar" ? "مواعيد التقديم" : "Application deadlines")}`;
  const set = (k, v) => setQ((x) => ({ ...x, [k]: v }));
  const copy = async () => { try { await navigator.clipboard.writeText(https); setOk(true); setTimeout(() => setOk(false), 2000); } catch {} };
  const countries = [...COUNTRY_IDS].sort((a, b) => t.countries[a].localeCompare(t.countries[b], lang));
  return (
    <>
      <form className="card ec-form" onSubmit={(e) => e.preventDefault()}>
        <label className="ec-field"><span>{s.c}</span>
          <select value={q.c} onChange={(e) => set("c", e.target.value)}><option value="">{s.all}</option>{countries.map((c) => <option key={c} value={c}>{t.countries[c]}</option>)}</select>
        </label>
        <label className="ec-field"><span>{s.f}</span>
          <select value={q.f} onChange={(e) => set("f", e.target.value)}><option value="">{s.all}</option>{FIELDS.map((f) => <option key={f} value={f}>{t.fields[f]}</option>)}</select>
        </label>
        <label className="ec-field"><span>{s.l}</span>
          <select value={q.l} onChange={(e) => set("l", e.target.value)}><option value="">{s.all}</option>{["master", "bachelor", "doctorate"].map((l) => <option key={l} value={l}>{s[l]}</option>)}</select>
        </label>
      </form>
      <p className="tool-strip cal-btns">
        <a className="btn gold" href={webcal}>{s.apple}</a>
        <a className="btn" href={google} target="_blank" rel="noopener noreferrer">{s.google}</a>
        <a className="btn ghost" href={outlook} target="_blank" rel="noopener noreferrer">{s.outlook}</a>
        <button type="button" className="btn ghost" onClick={copy}>{ok ? s.copied : s.copy}</button>
      </p>
      <section className="country-sec">
        <h2>{s.howTitle}</h2>
        <ul>{s.how.map((x) => <li key={x}>{x}</li>)}</ul>
      </section>
    </>
  );
}
