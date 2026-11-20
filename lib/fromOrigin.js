// "Study in X from <origin>" pages: everything a student from one Arab country needs for one destination, computed
// from the same data as the rest of the site (programmes, full-cost estimate, visa routes, certificate rules,
// scholarships). Only origins with researched visa routes and certificate rules get pages.
import programmes from "./programmes.json";
import { COUNTRY_IDS } from "./options";
import { estimateTotal } from "./costTotal";
import { VISA } from "./embassy";
import { certFor } from "./schoolCert";
import { SCHOLARSHIPS } from "./scholarships";
import { rows } from "./questions";
import { progsAr } from "./arCount";

export const FROM = {
  egypt: { o: "eg", cur: "EGP", ar: "مصر", people: "المصريين", en: "Egypt", demEn: "Egyptian" },
  "saudi-arabia": { o: "sa", cur: "SAR", ar: "السعودية", people: "السعوديين", en: "Saudi Arabia", demEn: "Saudi" },
  morocco: { o: "ma", cur: "MAD", ar: "المغرب", people: "المغاربة", en: "Morocco", demEn: "Moroccan" },
  jordan: { o: "jo", cur: "JOD", ar: "الأردن", people: "الأردنيين", en: "Jordan", demEn: "Jordanian" },
  algeria: { o: "dz", cur: "DZD", ar: "الجزائر", people: "الجزائريين", en: "Algeria", demEn: "Algerian" },
};
export const FROM_SLUGS = Object.keys(FROM);
export const slugOfOrigin = (o) => FROM_SLUGS.find((s) => FROM[s].o === o) || null;

const median = (a) => {
  if (!a.length) return null;
  const s = [...a].sort((x, y) => x - y);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

// Full-cost figures for one level in one country, for one origin.
function costs(list, o) {
  const withTotal = list.map((p) => ({ p, e: estimateTotal(p, o) })).filter((x) => !x.e.missing);
  withTotal.sort((a, b) => a.e.total - b.e.total);
  return {
    count: list.length,
    known: withTotal.length,
    median: median(withTotal.map((x) => x.e.total)),
    cheapest: withTotal.slice(0, 5).map((x) => ({ id: x.p.id, name: x.p.name, uni: x.p.university, city: { ar: x.p.city, en: x.p.en?.city || x.p.city }, total: x.e.total, years: x.e.years, perYear: x.e.perYear })),
  };
}

export function fromData(slug, c) {
  const f = FROM[slug];
  if (!f || !COUNTRY_IDS.includes(c)) return null;
  const list = programmes.filter((p) => p.country === c);
  const row = rows().find((r) => r.c === c);
  const v = VISA[c];
  return {
    f, c, row,
    master: costs(list.filter((p) => p.level === "master"), f.o),
    bachelor: costs(list.filter((p) => p.level === "bachelor"), f.o),
    visa: v?.[f.o]?.where ? v[f.o] : null,
    visaGeneral: v?.general || null,
    visaGeneralSrc: v?.generalSrc || null,
    cert: certFor(c, f.o),
    sch: SCHOLARSHIPS.filter((s) => s.hosts.includes(c) && (s.eligible || []).includes(f.o)),
  };
}

// One line per destination for the origin's hub page, cheapest median master's first.
export function fromHub(slug) {
  return COUNTRY_IDS.map((c) => fromData(slug, c)).sort((a, b) => (a.master.median ?? Infinity) - (b.master.median ?? Infinity));
}

export const FROM_TEXT = {
  ar: {
    h1: (cn, on) => `الدراسة في ${cn} من ${on}`,
    title: (cn, on) => `الدراسة في ${cn} من ${on}: التكلفة الكاملة والتأشيرة والشهادة`,
    lead: (cn, on) => `كل ما يحتاجه الطالب من ${on} للدراسة في ${cn} في صفحة واحدة: التكلفة الكاملة التقديرية بعملة بلدك، وأين تقدّم على التأشيرة، وهل تكفي شهادتك الثانوية، والمنح المفتوحة لك.`,
    hubH1: (on) => `الدراسة في الخارج من ${on}`,
    hubTitle: (on) => `الدراسة في الخارج من ${on}: التكلفة الكاملة لكل دولة`,
    hubLead: (on, k) => `مقارنة ${k} دولة للطلاب من ${on}: الوسيط للتكلفة الكاملة لبرنامج الماجستير (الرسوم والمعيشة والتأمين ورسوم التأشيرة)، وهل أضفنا طريق التأشيرة من بلدك. اضغط على الدولة للتفاصيل.`,
    cost: "التكلفة الكاملة التقديرية",
    costHow: "الرسوم الدراسية والمعيشة والتأمين الصحي طوال مدة البرنامج، مع رسوم التأشيرة والإقامة الرسمية. بدون تذكرة السفر. تقدير منا من الأرقام المنشورة، وليس رقماً رسمياً.",
    medMaster: "الوسيط لبرنامج ماجستير كامل",
    medBachelor: "الوسيط لبرنامج بكالوريوس كامل",
    cheapest: "أقل البرامج تكلفة كاملة",
    of: (k, n) => `محسوب من ${k} من أصل ${progsAr(n)} نشرت الرسوم والمدة وتكلفة المعيشة`,
    none: "لا يمكن حسابها: لا يوجد برنامج نشر الرسوم والمدة وتكلفة المعيشة معاً.",
    perYear: "في السنة",
    total: "التكلفة الكاملة",
    years: (y) => (y === 1 ? "سنة واحدة" : y === 2 ? "سنتان" : y < 3 ? `${y} سنة` : `${y} سنوات`),
    visa: (on) => `تأشيرة الدراسة من ${on}`,
    where: "أين تقدّم؟",
    steps: "الخطوات",
    note: "انتبه",
    noVisa: (on) => `لم نضف بعد تفاصيل التقديم من ${on} لهذه الدولة. هذه هي الطريقة العامة:`,
    src: "المصدر الرسمي",
    book: "رابط الحجز أو التقديم",
    cert: "هل تكفي شهادتك الثانوية للبكالوريوس؟",
    noCert: "لم نضف قاعدة شهادتك لهذه الدولة بعد. راجع صفحة الشهادة الثانوية للقاعدة العامة.",
    money: "المبلغ المطلوب لإثبات القدرة المالية",
    work: "العمل أثناء الدراسة",
    after: "البقاء بعد التخرج",
    sch: (on) => `منح ممولة بالكامل مفتوحة لطلاب ${on}`,
    noSch: "لا توجد على موقعنا منحة ممولة بالكامل لهذه الدولة مفتوحة لجنسيتك حتى الآن.",
    toCheck: " (للتحقق)",
    links: "الخطوة التالية",
    country: (cn) => `كل برامج ${cn}`,
    plan: "خطتي في دقيقة",
    visaPage: "صفحة التأشيرة",
    legal: "توثيق الأوراق",
    certPage: "الشهادة الثانوية",
    hub: (on) => `كل الدول من ${on}`,
    colCountry: "الدولة",
    colMed: "وسيط التكلفة الكاملة للماجستير",
    colVisa: "طريق التأشيرة من بلدك",
    yes: "مضاف",
    no: "الطريقة العامة",
    na: "غير متاح",
    rate: "المبلغ بعملة بلدك تقريبي ويُحسب بسعر اليوم في متصفحك.",
    reviewed: "الأرقام محسوبة من بيانات الموقع وقت بناء الصفحة.",
  },
  en: {
    h1: (cn, on) => `Studying in ${cn} from ${on}`,
    title: (cn, on) => `Studying in ${cn} from ${on}: full cost, visa and school certificate`,
    lead: (cn, on) => `Everything a student from ${on} needs to study in ${cn}, on one page: the estimated full cost in your currency, where to apply for the visa, whether your school certificate is enough, and the scholarships open to you.`,
    hubH1: (on) => `Studying abroad from ${on}`,
    hubTitle: (on) => `Studying abroad from ${on}: the full cost in every country`,
    hubLead: (on, k) => `${k} countries compared for students from ${on}: the median full cost of a master's (tuition, living, insurance and visa fees) and whether we have added the visa route from your country. Tap a country for details.`,
    cost: "Estimated full cost",
    costHow: "Tuition, living and health insurance for the whole programme, plus the official visa and residence fees. Flights not included. Our estimate from published figures, not an official amount.",
    medMaster: "Median for a whole master's",
    medBachelor: "Median for a whole bachelor's",
    cheapest: "Lowest full cost",
    of: (k, n) => `computed from ${k} of ${n} programmes that publish the fee, length and living costs`,
    none: "Can't be estimated: no programme publishes the fee, length and living costs together.",
    perYear: "a year",
    total: "Full cost",
    years: (y) => `${y} year${y === 1 ? "" : "s"}`,
    visa: (on) => `Student visa from ${on}`,
    where: "Where to apply",
    steps: "Steps",
    note: "Watch out",
    noVisa: (on) => `We have not yet added the details for applying from ${on} to this country. The general route:`,
    src: "Official source",
    book: "Booking or application link",
    cert: "Is your school certificate enough for a bachelor's?",
    noCert: "We have not added the rule for your certificate in this country yet. See the school certificate page for the general rule.",
    money: "Proof of funds",
    work: "Work while studying",
    after: "Staying after graduation",
    sch: (on) => `Fully funded scholarships open to students from ${on}`,
    noSch: "Our site has no fully funded scholarship for this country open to your nationality yet.",
    toCheck: " (to verify)",
    links: "Next step",
    country: (cn) => `All programmes in ${cn}`,
    plan: "My plan in a minute",
    visaPage: "Visa page",
    legal: "Document legalisation",
    certPage: "School certificate",
    hub: (on) => `All countries from ${on}`,
    colCountry: "Country",
    colMed: "Median full cost of a master's",
    colVisa: "Visa route from your country",
    yes: "Added",
    no: "General route",
    na: "Not available",
    rate: "The amount in your currency is approximate, at today's rate in your browser.",
    reviewed: "Figures are computed from the site's data when the page is built.",
  },
};
