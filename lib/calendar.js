// Calendar helpers shared by the server route (/cal/<key>) and the buttons on programme and scholarship pages.
import deadlines from "./deadlines.json";
import { SCHOLARSHIPS } from "./scholarships";
import { T } from "./i18n";
import { SITE_URL } from "./site";

const SITE = SITE_URL;
export const todayIso = () => new Date().toISOString().slice(0, 10);
const nextDay = (iso) => { const d = new Date(iso + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() + 1); return d.toISOString().slice(0, 10); };

// Upcoming deadlines for "p-<programme id>" or "s-<scholarship id>", in the page language.
export function calendarItem(key, lang) {
  const t = T[lang];
  const now = todayIso();
  if (key.startsWith("p-")) {
    const p = deadlines.find((x) => String(x.id) === key.slice(2));
    if (!p) return null;
    return { title: `${t.my.icsTitle}: ${p.name}`, sub: `${p.university} · ${t.countries[p.country]}`, text: p[lang], href: `${t.base}/programme/${p.id}`, dates: p.dates.filter((d) => d.d >= now) };
  }
  if (key.startsWith("s-")) {
    const s = SCHOLARSHIPS.find((x) => x.id === key.slice(2));
    if (!s) return null;
    return { title: `${t.my.icsTitle}: ${s.name[lang]}`, sub: s.funder[lang], text: s.deadlines.map((d) => d.label[lang]).join(" / "), href: `${t.base}/scholarships/${s.id}`,
      dates: s.deadlines.filter((d) => d.date >= now).map((d) => ({ d: d.date, est: d.kind !== "official" })) };
  }
  return null;
}

// RFC 5545 calendar with reminders 14 and 3 days before each date.
export function icsText(item, lang, uidKey) {
  const t = T[lang].my;
  const esc = (s) => String(s).replace(/\\/g, "\\\\").replace(/[,;]/g, (m) => "\\" + m).replace(/\n/g, "\\n");
  const stamp = new Date().toISOString().replace(/[-:]/g, "").slice(0, 15) + "Z";
  const lines = ["BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//BawabatAlsafar//Deadlines//EN", "CALSCALE:GREGORIAN", "METHOD:PUBLISH"];
  for (const d of item.dates) {
    const day = d.d.replace(/-/g, "");
    lines.push("BEGIN:VEVENT", `UID:${uidKey}-${day}@mynewgate`, `DTSTAMP:${stamp}`,
      `DTSTART;VALUE=DATE:${day}`, `DTEND;VALUE=DATE:${nextDay(d.d).replace(/-/g, "")}`,
      `SUMMARY:${esc(item.title)}`,
      `DESCRIPTION:${esc(`${item.sub}\n${item.text}\n${d.est ? t.estNote + "\n" : ""}${SITE}${item.href}`)}`,
      `URL:${SITE}${item.href}`,
      "BEGIN:VALARM", "ACTION:DISPLAY", `DESCRIPTION:${esc(item.title)}`, "TRIGGER:-P14D", "END:VALARM",
      "BEGIN:VALARM", "ACTION:DISPLAY", `DESCRIPTION:${esc(item.title)}`, "TRIGGER:-P3D", "END:VALARM",
      "END:VEVENT");
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

// Google Calendar "add event" link for the next upcoming date.
export function googleUrl(item, lang) {
  const d = item.dates[0];
  if (!d) return null;
  const t = T[lang].my;
  const details = `${item.sub}\n${item.text}\n${d.est ? t.estNote + "\n" : ""}${SITE}${item.href}`;
  const q = new URLSearchParams({ action: "TEMPLATE", text: item.title, dates: `${d.d.replace(/-/g, "")}/${nextDay(d.d).replace(/-/g, "")}`, details });
  return `https://calendar.google.com/calendar/render?${q}`;
}
