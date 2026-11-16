// Two one-tap buttons: Apple/Outlook calendar (.ics) and Google Calendar, for the next deadlines of a programme or scholarship.
import { calendarItem, googleUrl } from "../lib/calendar";
import { BASE } from "../lib/site";

const TXT = {
  ar: { label: "أضف المواعيد للكالندر:", apple: "آيفون / Outlook", google: "Google Calendar", note: "تذكير قبل الموعد بأسبوعين و3 أيام" },
  en: { label: "Add the deadlines to your calendar:", apple: "iPhone / Outlook", google: "Google Calendar", note: "Reminders 2 weeks and 3 days before" },
};

export default function AddToCalendar({ k, lang }) {
  const item = calendarItem(k, lang);
  if (!item || !item.dates.length) return null;
  const s = TXT[lang];
  const g = googleUrl(item, lang);
  return (
    <p className="cal-row">
      <span>{s.label}</span>{" "}
      <a className="btn ghost small" href={`${BASE}/cal/${k}.ics?lang=${lang}`} rel="nofollow">{s.apple}</a>{" "}
      {g && <a className="btn ghost small" href={g} target="_blank" rel="noopener noreferrer nofollow">{s.google}</a>}
      <small className="note"> {s.note}</small>
    </p>
  );
}
