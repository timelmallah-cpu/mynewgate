// Nationality x destination pages (/visas/<destination>/<nationality>): one answer per pair, built from lib/visit.js.
import { ORIGINS, ORIGIN_NAME, DEST, DEST_BY_SLUG } from "./visit";

// URL slugs and Arabic plural demonyms ("للمصريين") for the 22 nationalities.
export const NAT = {
  eg: ["egyptians", "المصريين", "Egyptians"], sa: ["saudis", "السعوديين", "Saudis"], ae: ["emiratis", "الإماراتيين", "Emiratis"],
  kw: ["kuwaitis", "الكويتيين", "Kuwaitis"], qa: ["qataris", "القطريين", "Qataris"], bh: ["bahrainis", "البحرينيين", "Bahrainis"],
  om: ["omanis", "العُمانيين", "Omanis"], jo: ["jordanians", "الأردنيين", "Jordanians"], lb: ["lebanese", "اللبنانيين", "Lebanese"],
  sy: ["syrians", "السوريين", "Syrians"], iq: ["iraqis", "العراقيين", "Iraqis"], ps: ["palestinians", "الفلسطينيين", "Palestinians"],
  ye: ["yemenis", "اليمنيين", "Yemenis"], ma: ["moroccans", "المغاربة", "Moroccans"], dz: ["algerians", "الجزائريين", "Algerians"],
  tn: ["tunisians", "التونسيين", "Tunisians"], ly: ["libyans", "الليبيين", "Libyans"], sd: ["sudanese", "السودانيين", "Sudanese"],
  mr: ["mauritanians", "الموريتانيين", "Mauritanians"], so: ["somalis", "الصوماليين", "Somalis"], dj: ["djiboutians", "الجيبوتيين", "Djiboutians"],
  km: ["comorians", "القمريين", "Comorians"],
};
export const NAT_BY_SLUG = Object.fromEntries(Object.entries(NAT).map(([c, [s]]) => [s, c]));
export const natSlug = (c) => NAT[c][0];
export const natPlural = (c, lang) => NAT[c][lang === "ar" ? 1 : 2];

export const PAIRS = DEST.flatMap((d) => ORIGINS.map((o) => ({ slug: d.slug, nat: natSlug(o.c) })));
export const pairOf = (slug, nat) => {
  const d = DEST_BY_SLUG[slug];
  const o = NAT_BY_SLUG[nat];
  return d && o && d.status[o] ? { d, o } : null;
};

export const PTEXT = {
  ar: {
    h1: (d, o) => `تأشيرة ${d} لل${natPlural(o, "ar").slice(2)}`,
    q: (d, o) => `هل يحتاج حامل الجواز ${adjAr(o)} تأشيرة لزيارة ${d}؟`,
    meta: (d, o) => `تأشيرة ${d} لل${natPlural(o, "ar").slice(2)}: هل تحتاجها وكم الرسوم وأين تقدّم | بوابة السفر`,
    desc: (d, o) => `هل يحتاج حامل الجواز ${adjAr(o)} تأشيرة لزيارة ${d}؟ الإجابة من المصدر الرسمي، ونوع التأشيرة والرسوم والمدة والأوراق وأين تقدّم.`,
    answer: "الإجابة", allDest: (d) => `كل الجنسيات العربية إلى ${d}`, otherNat: "جنسيات أخرى إلى هذه الوجهة", otherDest: (o) => `وجهات أخرى لل${natPlural(o, "ar").slice(2)}`,
    tool: "اسأل المساعد الذكي عن حالتك", short: "رحلة قصيرة (سياحة، زيارة عائلة، عمل قصير)",
  },
  en: {
    h1: (d, o) => `${d} visa for ${natPlural(o, "en")}`,
    q: (d, o) => `Do ${natPlural(o, "en")} need a visa to visit ${d}?`,
    meta: (d, o) => `${d} visa for ${natPlural(o, "en")}: do you need one, fees and where to apply | Bawabat AlSafar`,
    desc: (d, o) => `Do ${natPlural(o, "en")} need a visa to visit ${d}? The answer from the official source, plus visa type, fees, length of stay, documents and where to apply.`,
    answer: "The answer", allDest: (d) => `All Arab nationalities to ${d}`, otherNat: "Other nationalities to this destination", otherDest: (o) => `Other destinations for ${natPlural(o, "en")}`,
    tool: "Ask the AI assistant about your case", short: "Short trip (tourism, family visit, short business)",
  },
};
// "المصري" from "المصريين"; plural forms that are not -ين get their own adjective.
const ADJ = { ma: "المغربي", lb: "اللبناني", sd: "السوداني" };
function adjAr(o) {
  if (ADJ[o]) return ADJ[o];
  const p = NAT[o][1];
  return p.endsWith("ين") ? p.slice(0, -2) : p;
}
export { ORIGIN_NAME };
