"use client";
// Home page box: the nearest confirmed (non-estimated) programme deadlines, counted from the visitor's today.
import { useEffect, useState } from "react";
import Link from "@/components/Link";
import Flag from "../lib/Flag";
import { fmtDate } from "./ScholarshipParts";

const TXT = {
  ar: {
    title: "مواعيد تقديم قريبة",
    lead: "أقرب المواعيد المؤكدة في البرامج المنشورة عندنا. راجع صفحة البرنامج الرسمية قبل التقديم.",
    today: "اليوم آخر يوم",
    tomorrow: "باقي يوم واحد",
    days: (n) => (n === 2 ? "باقي يومان" : n <= 10 ? `باقي ${n} أيام` : `باقي ${n} يوماً`),
    more: (n) => (n === 1 ? "وبرنامج آخر" : n === 2 ? "وبرنامجان آخران" : n <= 10 ? `و${n} برامج أخرى` : `و${n} برنامجاً آخر`),
    plan: "خطط مواعيدك",
    all: "كل مواعيد الثلاثين يوماً",
  },
  en: {
    title: "Application deadlines coming up",
    lead: "The nearest confirmed deadlines among the programmes we list. Check the official programme page before you apply.",
    today: "Last day today",
    tomorrow: "1 day left",
    days: (n) => `${n} days left`,
    more: (n) => `and ${n} more programme${n === 1 ? "" : "s"}`,
    plan: "Plan your dates",
    all: "All deadlines in the next 30 days",
  },
};

// items: [{ d, id, name, uni, cc, more }] sorted by date, built on the server from lib/deadlines.json.
export default function SoonDeadlines({ lang, base, items, max = 6 }) {
  const [today, setToday] = useState(null);
  useEffect(() => setToday(new Date().toISOString().slice(0, 10)), []);
  if (!today) return null;
  const list = items.filter((x) => x.d >= today).slice(0, max);
  if (!list.length) return null;
  const t = TXT[lang];
  const left = (d) => Math.round((Date.parse(d + "T12:00:00Z") - Date.parse(today + "T12:00:00Z")) / 864e5);
  return (
    <section className="card soon-dl" aria-labelledby="soon-dl-h">
      <h2 id="soon-dl-h" className="land-h">{t.title}</h2>
      <p>{t.lead}</p>
      <ul>
        {list.map((x) => {
          const n = left(x.d);
          return (
            <li key={`${x.d}-${x.id}`}>
              <span className={`soon-left${n <= 7 ? " hot" : ""}`}>{n === 0 ? t.today : n === 1 ? t.tomorrow : t.days(n)}</span>
              <Link href={`${base}/programme/${x.id}`}>
                <b><bdi>{x.name}</bdi></b>
                <small><Flag code={x.cc} size={16} /> <bdi>{x.uni}</bdi>{x.more ? ` · ${t.more(x.more)}` : ""}</small>
              </Link>
              <time dateTime={x.d}>{fmtDate(x.d, lang)}</time>
            </li>
          );
        })}
      </ul>
      <div className="row-btns"><Link className="btn ghost" href={`${base}/deadlines-soon`}>{t.all}</Link> <Link className="btn ghost" href={`${base}/planner`}>{t.plan}</Link></div>
    </section>
  );
}
