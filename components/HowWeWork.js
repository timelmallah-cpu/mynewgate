import Link from "@/components/Link";
import programmes from "../lib/programmes.json";
import deadlines from "../lib/deadlines.json";
import { T } from "../lib/i18n";
import { COUNTRY_IDS } from "../lib/options";
import { fmtDate } from "./Updates";

// "How we collect information": sources, review cycle, what our labels mean, and what the site is not. Numbers are
// computed from the data at build time so they stay true.
function stats() {
  const hosts = new Set();
  for (const p of programmes) for (const u of [p.source, p.reqUrl, p.applyUrl]) { try { if (u) hosts.add(new URL(u).hostname.replace(/^www\./, "")); } catch {} }
  const reviewed = programmes.map((p) => p.reviewed).filter(Boolean).sort();
  const check = programmes.filter((p) => p.feeNeedsCheck || /للتحقق/.test(`${p.feeText} ${p.deadline} ${p.english} ${p.other}`)).length;
  const est = deadlines.filter((d) => (d.dates || []).some((x) => x.est)).length;
  return { n: programmes.length, hosts: hosts.size, oldest: reviewed[0], newest: reviewed[reviewed.length - 1], check, est, countries: COUNTRY_IDS.length };
}

const TX = {
  ar: {
    title: "كيف نجمع المعلومات",
    lead: "بوابة الدراسة لا تصنع المعلومات، بل تنظمها وتكتبها بالعربية من مصادرها الرسمية، وتذكر المصدر بجانب كل معلومة.",
    numbers: "بالأرقام",
    stat: (s) => [[s.n, "برنامجاً في الجامعات الحكومية"], [s.countries, "دولة"], [s.hosts, "موقعاً رسمياً نأخذ منه البيانات"]],
    reviewedLine: (s) => `تاريخ آخر مراجعة لكل برنامج مكتوب في صفحته. أقدم مراجعة حالياً ${fmtDate(s.oldest, "ar")}، وأحدثها ${fmtDate(s.newest, "ar")}.`,
    sourcesT: "من أين نأخذ المعلومات",
    sources: [
      "البرامج والرسوم والمواعيد وشروط القبول: من صفحة البرنامج نفسها في موقع الجامعة، أو من بوابة رسمية مثل DAAD في ألمانيا.",
      "التأشيرة والإقامة والعمل أثناء الدراسة وبعدها: من مواقع الهجرة والسفارات الرسمية لكل دولة.",
      "المنح: من صفحة الجهة المانحة نفسها.",
      "تحويل العملات: بسعر البنك المركزي الأوروبي في التاريخ المكتوب بجانب الرقم، وهو تقريبي.",
    ],
    labelsT: "ماذا تعني العلامات على الموقع",
    labels: (s) => [
      ["غير منشور في المصدر", "المعلومة غير موجودة في المصدر الرسمي، فلا نخمّنها."],
      ["للتحقق", `المصدر غير واضح أو يتعارض مع مصدر آخر؛ تأكد من الجامعة أو الجهة الرسمية قبل أن تعتمد عليه. عدد البرامج التي فيها معلومة للتحقق حالياً: ${s.check}.`],
      ["تقديري / متوقع", `الموعد مأخوذ من دورة سابقة لأن موعد السنة الجديدة لم يُنشر بعد. عدد البرامج التي فيها موعد تقديري حالياً: ${s.est}.`],
    ],
    cycleT: "كيف نحدّث البيانات",
    cycle: [
      "فحص آلي كل أسبوع لصفحات البرامج يكتشف الصفحات التي تغيّرت أو اختفت.",
      "مراجعة كل برنامج تغيّر، وتحديثه من مصدره.",
      "فحص أسبوعي لكل الروابط على الموقع.",
      "عندما تنشر الجامعات مواعيد السنة الجديدة نستبدل المواعيد التقديرية بالمواعيد المؤكدة.",
    ],
    notT: "ما الذي لا نقدمه",
    not: [
      "لسنا جهة رسمية ولا وكيلاً للجامعات، ولا نقدّم طلبات نيابة عن أحد.",
      "لا نقدّم استشارة هجرة أو استشارة قانونية لحالتك الشخصية. القرار في القبول للجامعة، وفي التأشيرة للجهة الرسمية.",
      "المساعد الذكي يجيب من بيانات الموقع فقط، وقد يخطئ؛ راجع المصدر الرسمي دائماً.",
    ],
    report: "وجدت معلومة خاطئة أو قديمة؟ أخبرنا من صفحة التواصل، ونراجعها من المصدر الرسمي.",
    contact: "تواصل معنا",
    updates: "آخر التحديثات",
  },
  en: {
    title: "How we collect information",
    lead: "Bawabat AlDirasa doesn't create information: it organises it from official sources, writes it in Arabic, and names the source next to each fact.",
    numbers: "In numbers",
    stat: (s) => [[s.n, "programmes at public universities"], [s.countries, "countries"], [s.hosts, "official websites we take data from"]],
    reviewedLine: (s) => `Each programme page shows its last review date. The oldest review is currently ${fmtDate(s.oldest, "en")} and the newest ${fmtDate(s.newest, "en")}.`,
    sourcesT: "Where the information comes from",
    sources: [
      "Programmes, fees, deadlines and admission requirements: from the programme's own page on the university website, or an official portal such as DAAD in Germany.",
      "Visas, residence, and work during and after studies: from each country's official immigration and embassy websites.",
      "Scholarships: from the funder's own page.",
      "Currency conversion: at the European Central Bank rate on the date given next to the figure; approximate.",
    ],
    labelsT: "What the labels on the site mean",
    labels: (s) => [
      ["Not published in the source", "The fact is not in the official source, so we don't guess it."],
      ["To verify", `The source is unclear or conflicts with another source; check with the university or authority before relying on it. Programmes with an item to verify right now: ${s.check}.`],
      ["Estimate / expected", `The date comes from a previous cycle because the new year's date isn't published yet. Programmes with an estimated date right now: ${s.est}.`],
    ],
    cycleT: "How we keep data up to date",
    cycle: [
      "A weekly automatic check of programme pages finds pages that changed or disappeared.",
      "Every changed programme is reviewed and updated from its source.",
      "A weekly check of every link on the site.",
      "When universities publish the new year's dates, estimated dates are replaced with confirmed ones.",
    ],
    notT: "What we don't do",
    not: [
      "We are not an official body or a university agent, and we don't apply on anyone's behalf.",
      "We don't give immigration or legal advice on your personal case. Admission is decided by the university and visas by the official authority.",
      "The AI assistant answers from the site's data only and can make mistakes; always check the official source.",
    ],
    report: "Found something wrong or out of date? Tell us from the contact page and we'll check it against the official source.",
    contact: "Contact us",
    updates: "What's new",
  },
};

export default function HowWeWork({ lang }) {
  const t = T[lang];
  const x = TX[lang];
  const s = stats();
  return (
    <>
      <h1>{x.title}</h1>
      <p className="lead">{x.lead}</p>
      <h2 className="land-h">{x.numbers}</h2>
      <ul className="gate-stats hw-stats">{x.stat(s).map(([v, l]) => <li key={l}><b>{v.toLocaleString("en-US")}</b><span>{l}</span></li>)}</ul>
      <p>{x.reviewedLine(s)}</p>
      <h2 className="land-h">{x.sourcesT}</h2>
      <ul>{x.sources.map((l) => <li key={l}>{l}</li>)}</ul>
      <h2 className="land-h">{x.labelsT}</h2>
      <dl className="hw-labels">{x.labels(s).map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
      <h2 className="land-h">{x.cycleT}</h2>
      <ul>{x.cycle.map((l) => <li key={l}>{l}</li>)}</ul>
      <h2 className="land-h">{x.notT}</h2>
      <ul>{x.not.map((l) => <li key={l}>{l}</li>)}</ul>
      <p>{x.report} <Link href={`${t.base}/contact`}>{x.contact}</Link> · <Link href={`${t.base}/updates`}>{x.updates}</Link></p>
    </>
  );
}
