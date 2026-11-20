import Link from "@/components/Link";
import { T } from "../lib/i18n";
import { UPDATES } from "../lib/updates";
const AR_M = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
const EN_M = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
export const fmtDate = (iso, lang) => { const [y, m, d] = iso.split("-").map(Number); return `${d} ${(lang === "ar" ? AR_M : EN_M)[m - 1]} ${y}`; };

const TX = {
  ar: { title: "آخر التحديثات", lead: "ما الذي تغيّر في الموقع: دول وبرامج ومنح وأدوات جديدة. نراجع البرامج كل أسبوع ونحدّث هذه الصفحة مع كل إضافة.", planner: "مواعيد التقديم القريبة", plannerText: "لمتابعة المواعيد القريبة استخدم خطة المواعيد أو احفظ البرامج في قائمتك.", how: "كيف نجمع المعلومات" },
  en: { title: "What's new", lead: "What changed on the site: new countries, programmes, scholarships and tools. We review programmes every week and update this page with each addition.", planner: "Upcoming application deadlines", plannerText: "To follow upcoming deadlines, use the deadline planner or save programmes to your list.", how: "How we collect information" },
};

export default function Updates({ lang }) {
  const t = T[lang];
  const x = TX[lang];
  return (
    <>
      <h1>{x.title}</h1>
      <p className="lead">{x.lead}</p>
      <ol className="updates">
        {UPDATES.map((u, i) => (
          <li key={i}>
            <time dateTime={u.d}>{fmtDate(u.d, lang)}</time>
            <p>{u[lang]}</p>
            {u.links.length > 0 && <p className="upd-links">{u.links.map(([href, ar, en]) => <Link key={href} className="chip" href={`${t.base}${href}`}>{lang === "ar" ? ar : en}</Link>)}</p>}
          </li>
        ))}
      </ol>
      <h2 className="land-h">{x.planner}</h2>
      <p>{x.plannerText} <Link href={`${t.base}/planner`}>{x.planner}</Link></p>
      <p><Link href={`${t.base}/how-we-work`}>{x.how}</Link></p>
    </>
  );
}
