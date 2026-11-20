// Ready-made "X or Y?" comparisons between two countries, computed from the same data as the countries table.
// No opinion and no winner: each line says only which figure is lower or higher, from our data.
import programmes from "./programmes.json";
import { T } from "./i18n";
import { rows } from "./questions";
import { estimateTotal } from "./costTotal";

export const PAIRS = [
  ["de", "nl"], ["de", "fr"], ["de", "it"], ["de", "at"], ["de", "gb"], ["de", "ca"], ["de", "hu"],
  ["nl", "be"], ["nl", "gb"], ["ie", "nl"], ["it", "es"], ["it", "fr"], ["it", "hu"], ["fr", "be"], ["es", "pt"],
  ["gb", "ie"], ["gb", "ca"], ["gb", "au"], ["ca", "au"], ["au", "nz"], ["hu", "pl"], ["cz", "pl"], ["se", "fi"],
  ["no", "dk"], ["tr", "my"],
];

const slugName = (c) => T.en.countries[c].normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase().replace(/[^a-z]+/g, "-").replace(/^-|-$/g, "");
export const pairSlug = ([a, b]) => `${slugName(a)}-vs-${slugName(b)}`;
export const pairBySlug = (s) => PAIRS.find((p) => pairSlug(p) === s) || null;
export const pairsOf = (c) => PAIRS.filter((p) => p.includes(c));

const median = (a) => {
  if (!a.length) return null;
  const s = [...a].sort((x, y) => x - y);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

// Figures for one country. Full cost uses the default (Egyptian) visa fees, like the programme pages.
export function figures(c) {
  const r = rows().find((x) => x.c === c);
  const masters = programmes.filter((p) => p.country === c && p.level === "master");
  const totals = masters.map((p) => estimateTotal(p)).filter((e) => !e.missing).map((e) => e.total);
  return {
    c,
    masters: r.master.count,
    bachelors: r.bachelor.count,
    medFee: r.master.med,
    free: r.master.free,
    medTotal: median(totals),
    totalsN: totals.length,
    living: r.livingN >= 3 ? r.living : null,
    proof: r.proof,
    proofCheck: r.proofCheck,
    hours: r.hours,
    per: r.per,
    weekly: r.weekly,
    workCheck: r.workCheck,
    months: r.months,
    psCheck: r.psCheck,
    sch: r.sch.length,
  };
}

// Each metric: key, label, how to show it, and whether lower is the "cheaper / less" side (for the summary lines).
export const METRICS = [
  { k: "masters", lower: false, ar: "برامج الماجستير على موقعنا", en: "Master's programmes on our site" },
  { k: "bachelors", lower: false, ar: "برامج البكالوريوس على موقعنا", en: "Bachelor's programmes on our site" },
  { k: "medFee", money: true, lower: true, ar: "الوسيط للرسوم السنوية للماجستير المدفوع", en: "Median annual fee, paid master's" },
  { k: "free", lower: false, ar: "ماجستير بدون رسوم دراسية", en: "Tuition-free master's" },
  { k: "medTotal", money: true, lower: true, ar: "الوسيط للتكلفة الكاملة لماجستير كامل", en: "Median full cost of a whole master's" },
  { k: "living", money: true, lower: true, ar: "متوسط المعيشة الشهري", en: "Average monthly living costs" },
  { k: "proof", money: true, lower: true, check: "proofCheck", ar: "إثبات المال الشهري للتأشيرة", en: "Monthly proof of funds for the visa" },
  { k: "weekly", hours: true, lower: false, check: "workCheck", ar: "ساعات العمل المسموحة أثناء الدراسة", en: "Work hours allowed while studying" },
  { k: "months", months: true, lower: false, check: "psCheck", ar: "مدة البقاء بعد التخرج للبحث عن عمل", en: "Stay after graduation to look for work" },
  { k: "sch", lower: false, ar: "منح ممولة بالكامل على موقعنا", en: "Fully funded scholarships on our site" },
];

const n = (v) => Math.round(v).toLocaleString("en-US");
const UNIT = {
  ar: { week: "ساعة أسبوعياً", fortnight: "ساعة كل أسبوعين", month: "ساعة شهرياً", day: "ساعات يومياً", year: "ساعة سنوياً" },
  en: { week: "hours a week", fortnight: "hours a fortnight", month: "hours a month", day: "hours a day", year: "hours a year" },
};
const monthsAr = (m) => (m === 12 ? "سنة" : m === 24 ? "سنتان" : m === 36 ? "3 سنوات" : m === 18 ? "سنة ونصف" : m <= 10 ? `${m} أشهر` : `${m} شهراً`);
const monthsEn = (m) => (m % 12 === 0 ? `${m / 12} year${m === 12 ? "" : "s"}` : `${m} months`);

export function show(f, m, lang) {
  const v = f[m.k];
  if (v == null) return lang === "ar" ? "غير منشور" : "Not published";
  const chk = m.check && f[m.check] ? (lang === "ar" ? " (للتحقق)" : " (to verify)") : "";
  if (m.money) return `€${n(v)}${chk}`;
  if (m.hours) return `${f.hours} ${UNIT[lang][f.per]}${chk}`;
  if (m.months) return (lang === "ar" ? monthsAr(v) : monthsEn(v)) + chk;
  return `${v}${chk}`;
}

// Neutral summary lines: for each metric where both figures exist and differ, say which side has the lower or higher one.
export function summary(a, b, lang) {
  const nm = (c) => T[lang].countries[c];
  const out = [];
  const say = {
    medFee: (lo) => (lang === "ar" ? `الرسوم الدراسية للماجستير المدفوع أقل في ${nm(lo)} (حسب الوسيط).` : `Paid master's tuition is lower in ${nm(lo)} (by median).`),
    medTotal: (lo) => (lang === "ar" ? `التكلفة الكاملة التقديرية لماجستير كامل أقل في ${nm(lo)}.` : `The estimated full cost of a whole master's is lower in ${nm(lo)}.`),
    living: (lo) => (lang === "ar" ? `المعيشة الشهرية أرخص في ${nm(lo)} حسب مدن برامجنا.` : `Monthly living costs are lower in ${nm(lo)} across our programmes' cities.`),
    proof: (lo) => (lang === "ar" ? `المبلغ الشهري المطلوب للتأشيرة أقل في ${nm(lo)}.` : `The monthly amount required for the visa is lower in ${nm(lo)}.`),
    weekly: (hi) => (lang === "ar" ? `العمل المسموح أثناء الدراسة أكثر في ${nm(hi)}.` : `More work is allowed while studying in ${nm(hi)}.`),
    months: (hi) => (lang === "ar" ? `مدة البقاء بعد التخرج أطول في ${nm(hi)}.` : `The post-study stay is longer in ${nm(hi)}.`),
    free: (hi) => (lang === "ar" ? `برامج الماجستير بدون رسوم أكثر في ${nm(hi)} على موقعنا.` : `Our site lists more tuition-free master's in ${nm(hi)}.`),
    sch: (hi) => (lang === "ar" ? `المنح الممولة بالكامل على موقعنا أكثر في ${nm(hi)}.` : `Our site lists more fully funded scholarships for ${nm(hi)}.`),
  };
  for (const m of METRICS) {
    if (!say[m.k]) continue;
    const x = a[m.k], y = b[m.k];
    if (x == null || y == null || x === y) continue;
    const lowSide = x < y ? a.c : b.c;
    const highSide = x > y ? a.c : b.c;
    out.push(say[m.k](m.lower ? lowSide : highSide));
  }
  return out;
}

export const CMP_TEXT = {
  ar: {
    hub: "مقارنة بين دولتين للدراسة",
    hubLead: "مقارنات جاهزة بين الدول الأكثر بحثاً، بالأرقام من بيانات موقعنا: الرسوم والتكلفة الكاملة والمعيشة وإثبات المال والعمل أثناء الدراسة والبقاء بعد التخرج والمنح.",
    h1: (a, b) => `الدراسة في ${a} أم ${b}؟`,
    title: (a, b) => `الدراسة في ${a} أم ${b}؟ مقارنة الرسوم والتكلفة والعمل والإقامة بعد التخرج`,
    lead: (a, b) => `مقارنة بالأرقام بين ${a} و${b} للطلاب العرب في البرامج بالإنجليزية، محسوبة من بيانات البرامج والمصادر الرسمية على موقعنا. لا نختار عنك: الدولة الأنسب تختلف حسب تخصصك وميزانيتك وخططك.`,
    table: "الأرقام",
    item: "البند",
    summary: "الخلاصة بالأرقام",
    noDiff: "لا يوجد فرق واضح في الأرقام المتاحة.",
    how: "التكلفة الكاملة = الرسوم والمعيشة والتأمين الصحي طوال مدة البرنامج مع رسوم التأشيرة والإقامة الرسمية، بدون تذكرة السفر. الوسيط هو الرقم الذي في المنتصف بعد ترتيب البرامج. ساعات العمل بالوحدة التي ينشرها المصدر الرسمي.",
    country: (c) => `صفحة ${c}`,
    more: "مقارنات أخرى",
    all: "كل المقارنات",
    table2: "جدول كل الدول",
    updated: "الأرقام محسوبة من بيانات الموقع وقت بناء الصفحة.",
  },
  en: {
    hub: "Country vs country for studying abroad",
    hubLead: "Ready-made comparisons between the most searched countries, in figures from our data: fees, full cost, living costs, proof of funds, work while studying, post-study stay and scholarships.",
    h1: (a, b) => `${a} or ${b} for studying?`,
    title: (a, b) => `Study in ${a} or ${b}? Fees, full cost, work and post-study stay compared`,
    lead: (a, b) => `A side-by-side comparison of ${a} and ${b} for Arab students in English-taught programmes, computed from the programme data and official sources on our site. We don't pick for you: the right country depends on your field, budget and plans.`,
    table: "The figures",
    item: "Item",
    summary: "In short, by the figures",
    noDiff: "No clear difference in the available figures.",
    how: "Full cost = tuition, living and health insurance for the whole programme plus the official visa and residence fees, flights not included. The median is the middle figure once programmes are sorted. Work hours are in the unit the official source publishes.",
    country: (c) => `${c} page`,
    more: "More comparisons",
    all: "All comparisons",
    table2: "All-countries table",
    updated: "Figures are computed from the site's data when the page is built.",
  },
};
