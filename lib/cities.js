// City pages (/city/[slug]): built only from our programme data (each programme's official source),
// the official housing providers in lib/housing.js, and city coordinates in data/city_coords.json.
import programmes from "./programmes.json";
import CITY_AR from "../data/city_names_ar.json";
import COORDS from "../data/city_coords.json";

// "Getafe (Madrid)" -> ["Getafe"], "Ghent / Antwerp / Leuven" -> ["Ghent", "Antwerp", "Leuven"]
export const cityKeys = (enCity) =>
  String(enCity || "").replace(/\s*\(.*?\)/g, "").split(" / ").map((x) => x.trim()).filter(Boolean);

export const citySlug = (name) =>
  name.replace(/[łŁ]/g, "l").normalize("NFD").replace(/[̀-ͯ]/g, "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");

const map = new Map();
for (const p of programmes) {
  for (const en of cityKeys(p.en?.city || p.city)) {
    const slug = citySlug(en);
    if (!map.has(slug)) map.set(slug, { slug, en, ar: CITY_AR[en] || en, country: p.country, coords: COORDS[en] || null, list: [] });
    map.get(slug).list.push(p);
  }
}

export const CITIES = [...map.values()].sort((a, b) => a.country.localeCompare(b.country) || a.en.localeCompare(b.en));
export const getCity = (slug) => map.get(slug) || null;
export const cityOf = (enCity) => cityKeys(enCity).map((en) => map.get(citySlug(en))).filter(Boolean);

export const CITY_TEXT = {
  ar: {
    indexTitle: "المدن الجامعية",
    indexLead: "كل المدن اللي فيها برامج على موقعنا. اختار مدينة وشوف الجامعات والبرامج والمعيشة والسكن الرسمي فيها.",
    title: (n) => `الدراسة في ${n}`,
    lead: (n, c, k) => `${n} في ${c}: ${k} برنامج بالإنجليزية على موقعنا. كل الأرقام هنا من صفحات الجامعات الرسمية.`,
    unis: "الجامعات والبرامج",
    living: "تكلفة المعيشة حسب الجامعات",
    livingNote: "دي الأرقام اللي الجامعات نفسها كاتباها في صفحات البرامج. مش متوسط عام للمدينة.",
    housing: "السكن",
    housingUni: "اللي الجامعات بتقوله عن السكن",
    providers: "جهات سكن الطلاب الرسمية في المدينة",
    noProviders: "مفيش جهة سكن مخصصة للمدينة دي في دليلنا. شوف دليل السكن للدولة.",
    housingGuide: (c) => `دليل السكن في ${c} وتحذيرات النصب`,
    map: "شوفها على الخريطة",
    country: (c) => `كل حاجة عن الدراسة في ${c}`,
    other: (c) => `مدن تانية في ${c}`,
    photoBy: "صورة:",
    programmes: (k) => `${k} برنامج`,
    level: { master: "ماجستير", bachelor: "بكالوريوس", doctorate: "دكتوراه" },
    noFee: "بدون رسوم", feeNA: "الرسوم غير منشورة",
    fee: (v) => `${v} يورو في السنة`,
    note: "الأرقام والسكن من صفحات الجامعات وجهات السكن الرسمية المذكورة. افتح صفحة البرنامج عشان تشوف المصدر.",
  },
  en: {
    indexTitle: "University cities",
    indexLead: "Every city with programmes on our site. Pick a city to see its universities, programmes, living costs and official student housing.",
    title: (n) => `Studying in ${n}`,
    lead: (n, c, k) => `${n}, ${c}: ${k} English-taught programme${k === 1 ? "" : "s"} on our site. Every figure here comes from the universities' official pages.`,
    unis: "Universities and programmes",
    living: "Living costs according to the universities",
    livingNote: "These are the figures the universities state on their programme pages, not a general average for the city.",
    housing: "Housing",
    housingUni: "What the universities say about housing",
    providers: "Official student-housing providers in this city",
    noProviders: "Our guide lists no city-specific provider here. See the country's housing guide.",
    housingGuide: (c) => `Housing guide for ${c} and scam warnings`,
    map: "See it on the map",
    country: (c) => `Everything about studying in ${c}`,
    other: (c) => `Other cities in ${c}`,
    photoBy: "Photo:",
    programmes: (k) => `${k} programme${k === 1 ? "" : "s"}`,
    level: { master: "Master's", bachelor: "Bachelor's", doctorate: "Doctorate" },
    noFee: "No tuition fee", feeNA: "Fee not published",
    fee: (v) => `€${v} a year`,
    note: "Figures and housing come from the universities and official housing providers named. Open a programme page to see its source.",
  },
};
