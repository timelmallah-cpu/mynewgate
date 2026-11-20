// /deadlines-soon: every programme and scholarship deadline in the next 30 days, from the site's own data.
// Rebuilt twice a day (revalidate on the page), so "today" stays current without client code.
import Link from "@/components/Link";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { digest } from "../lib/digest";
import { fmtDate } from "./ScholarshipParts";
import Newsletter from "./Newsletter";

export const DS_TEXT = {
  ar: {
    title: "مواعيد التقديم في الثلاثين يوماً القادمة",
    lead: "كل مواعيد التقديم القريبة في البرامج والمنح المنشورة عندنا، مرتبة حسب التاريخ. تتحدث الصفحة كل يوم. راجع الصفحة الرسمية قبل التقديم.",
    sch: "منح", progs: "برامج (مواعيد مؤكدة)", est: "مواعيد تقديرية",
    estNote: "هذه مواعيد مبنية على دورة العام الماضي أو مكتوبة بدون سنة في المصدر. تأكد منها في صفحة الجامعة.",
    none: "لا توجد مواعيد في هذه الفترة.", more: (n) => (n === 1 ? "وبرنامج آخر" : n === 2 ? "وبرنامجان آخران" : n <= 10 ? `و${n} برامج أخرى` : `و${n} برنامجاً آخر`),
    sum: (c, e, s) => `${c} موعداً مؤكداً للبرامج، و${e} تقديرياً، و${s} للمنح.`,
    cal: "اشترك في تقويم المواعيد على هاتفك", all: "كل المنح",
  },
  en: {
    title: "Application deadlines in the next 30 days",
    lead: "Every upcoming deadline among the programmes and scholarships we list, by date. The page updates daily. Check the official page before you apply.",
    sch: "Scholarships", progs: "Programmes (confirmed dates)", est: "Estimated dates",
    estNote: "These dates are based on last year's cycle or written without a year in the source. Check them on the university's page.",
    none: "No deadlines in this period.", more: (n) => `and ${n} more programme${n === 1 ? "" : "s"}`,
    sum: (c, e, s) => `${c} confirmed programme deadlines, ${e} estimated and ${s} for scholarships.`,
    cal: "Subscribe to a deadline calendar on your phone", all: "All scholarships",
  },
};

function Group({ g, lang, base }) {
  const s = DS_TEXT[lang];
  const [first, ...rest] = g.progs;
  return (
    <li>
      <span className="soon-left">{fmtDate(g.d, lang)}</span>
      <Link href={`${base}/programme/${first.id}`}>
        <b><bdi>{first.name}</bdi></b>
        <small><Flag code={g.c} size={14} /> <bdi>{g.uni}</bdi></small>
      </Link>
      {rest.length > 0 && (
        <details><summary>{s.more(rest.length)}</summary>
          <ul className="ds-more">{rest.map((p) => <li key={p.id}><Link href={`${base}/programme/${p.id}`}><bdi>{p.name}</bdi></Link></li>)}</ul>
        </details>
      )}
    </li>
  );
}

export default function DeadlinesSoon({ lang }) {
  const base = lang === "en" ? "/en" : "";
  const t = T[lang];
  const s = DS_TEXT[lang];
  const x = digest();
  const conf = x.progs.filter((g) => !g.est);
  const est = x.progs.filter((g) => g.est);
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <p className="notice">{s.sum(x.confirmed, x.estimated, x.sch.length)} <Link href={`${base}/calendars`}>{s.cal}</Link></p>
      <h2>{s.sch}</h2>
      {x.sch.length ? (
        <ul className="ds-list">
          {x.sch.map((h) => (
            <li key={h.id + h.d}>
              <span className="soon-left">{fmtDate(h.d, lang)}</span>
              <Link href={`${base}/scholarships/${h.id}`}><b>{h.name[lang]}</b><small>{t.sch.stepsShort[h.step] || ""}</small></Link>
            </li>
          ))}
        </ul>
      ) : <p>{s.none} <Link href={`${base}/scholarships`}>{s.all}</Link></p>}
      <h2>{s.progs}</h2>
      {conf.length ? <ul className="ds-list">{conf.map((g) => <Group key={`${g.d}${g.uni}`} g={g} lang={lang} base={base} />)}</ul> : <p>{s.none}</p>}
      {est.length > 0 && (
        <>
          <h2>{s.est}</h2>
          <p className="meta">{s.estNote}</p>
          <ul className="ds-list">{est.map((g) => <Group key={`${g.d}${g.uni}e`} g={g} lang={lang} base={base} />)}</ul>
        </>
      )}
      <Newsletter lang={lang} />
    </>
  );
}
