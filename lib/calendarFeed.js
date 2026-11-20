// Subscribable deadline calendars (/feed/<key>.ics): every upcoming programme deadline for a country, field and/or
// level, refreshed from the site's data. Key parts joined by "_": c-<country>, f-<field>, l-<level>; "all" = everything.
import deadlines from "./deadlines.json";
import programmes from "./programmes.json";
import { COUNTRY_IDS, FIELD_IDS, BA_FIELD_IDS } from "./options";
import { T } from "./i18n";
import { SITE_URL } from "./site";
import { todayIso } from "./calendar";

const FIELDS = [...new Set([...FIELD_IDS, ...BA_FIELD_IDS])];
const byId = new Map(programmes.map((p) => [String(p.id), p]));

export function parseKey(key) {
  const k = String(key || "").replace(/\.ics$/, "");
  if (k === "all") return {};
  const out = {};
  for (const part of k.split("_")) {
    const [t, v] = [part.slice(0, 2), part.slice(2)];
    if (t === "c-" && COUNTRY_IDS.includes(v)) out.c = v;
    else if (t === "f-" && FIELDS.includes(v)) out.f = v;
    else if (t === "l-" && ["master", "bachelor", "doctorate"].includes(v)) out.l = v;
    else return null;
  }
  return Object.keys(out).length ? out : null;
}

export { makeKey } from "./calendarFeedKey";

export function feedEvents(q) {
  const now = todayIso();
  const out = [];
  for (const d of deadlines) {
    const p = byId.get(String(d.id));
    if (!p) continue;
    if (q.c && d.country !== q.c) continue;
    if (q.l && d.level !== q.l) continue;
    if (q.f && p.field !== q.f) continue;
    for (const x of d.dates) if (x.d >= now) out.push({ d, p, date: x.d, est: x.est });
  }
  return out.sort((a, b) => a.date.localeCompare(b.date));
}

export function feedName(q, lang) {
  const t = T[lang];
  const parts = [q.c && t.countries[q.c], q.f && t.fields?.[q.f], q.l && (lang === "ar" ? { master: "ماجستير", bachelor: "بكالوريوس", doctorate: "دكتوراه" } : { master: "Master's", bachelor: "Bachelor's", doctorate: "Doctorates" })[q.l]].filter(Boolean);
  const base = lang === "ar" ? "مواعيد التقديم" : "Application deadlines";
  return `${base}${parts.length ? ": " + parts.join(lang === "ar" ? "، " : ", ") : ""} | ${t.brand}`;
}

const nextDay = (iso) => { const d = new Date(iso + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() + 1); return d.toISOString().slice(0, 10); };

export function feedIcs(q, lang) {
  const t = T[lang];
  const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/[,;]/g, (m) => "\\" + m).replace(/\n/g, "\\n");
  const stamp = new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
  const name = feedName(q, lang);
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//BawabatAlsafar//DeadlineFeed//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
    `X-WR-CALNAME:${esc(name)}`, "REFRESH-INTERVAL;VALUE=DURATION:P1D", "X-PUBLISHED-TTL:P1D"];
  const est = lang === "ar" ? "موعد تقديري حسب السنة السابقة، تأكد من صفحة الجامعة." : "Estimated from the previous year; check the university's page.";
  for (const e of feedEvents(q)) {
    const day = e.date.replace(/-/g, "");
    const href = `${SITE_URL}${t.base}/programme/${e.p.id}`;
    const title = `${lang === "ar" ? "آخر موعد" : "Deadline"}: ${e.p.name} (${e.p.university})${e.est ? (lang === "ar" ? " (تقديري)" : " (estimate)") : ""}`;
    lines.push("BEGIN:VEVENT", `UID:feed-${e.p.id}-${day}@bawabatalsafar`, `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${day}`, `DTEND;VALUE=DATE:${nextDay(e.date).replace(/-/g, "")}`,
      `SUMMARY:${esc(title)}`, `DESCRIPTION:${esc(`${t.countries[e.p.country]}\n${e.d[lang]}\n${e.est ? est + "\n" : ""}${href}`)}`, `URL:${href}`,
      "BEGIN:VALARM", "ACTION:DISPLAY", `DESCRIPTION:${esc(title)}`, "TRIGGER:-P14D", "END:VALARM",
      "BEGIN:VALARM", "ACTION:DISPLAY", `DESCRIPTION:${esc(title)}`, "TRIGGER:-P3D", "END:VALARM", "END:VEVENT");
  }
  lines.push("END:VCALENDAR");
  const fold = (line) => {
    const out = []; let cur = ""; let bytes = 0;
    for (const ch of line) {
      const b = new TextEncoder().encode(ch).length;
      if (bytes + b > 73) { out.push(cur); cur = " "; bytes = 1; }
      cur += ch; bytes += b;
    }
    out.push(cur);
    return out.join("\r\n");
  };
  return lines.map(fold).join("\r\n") + "\r\n";
}
