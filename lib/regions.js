// Study regions for the "where do you want to study?" choice on the home page.
// Live regions list the countries we cover; "soon" regions have no programmes yet (Hatem's plan: Canada, USA, Australia, New Zealand).
// Türkiye sits in both Europe and Asia so visitors find it from either.
import { COUNTRY_IDS } from "./options";

const ASIA = ["tr", "my"];
export const REGIONS = [
  { id: "europe", countries: COUNTRY_IDS.filter((c) => c !== "my") },
  { id: "asia", countries: ASIA.filter((c) => COUNTRY_IDS.includes(c)) },
  { id: "canada", countries: [] },
  { id: "usa", countries: [] },
  { id: "australia", countries: [] },
  { id: "new-zealand", countries: [] },
];
export const REGION_IDS = REGIONS.map((r) => r.id);
export const regionById = (id) => REGIONS.find((r) => r.id === id);
// Where a region card leads: a one-country region goes straight to that country.
export const regionHref = (r, base) => (r.countries.length === 1 ? `${base}/country/${r.countries[0]}` : `${base}/region/${r.id}`);

export const REGION_TEXT = {
  ar: {
    ask: "أين تريد أن تدرس؟",
    askLead: "اختر المنطقة لترى الدول التي نغطيها فيها.",
    names: { europe: "أوروبا", asia: "آسيا", canada: "كندا", usa: "الولايات المتحدة", australia: "أستراليا", "new-zealand": "نيوزيلندا" },
    count: (c, p) => `${c === 1 ? "دولة واحدة" : c === 2 ? "دولتان" : `${c} ${c <= 10 ? "دول" : "دولة"}`} · ${p.toLocaleString("en-US")} برنامج`,
    soon: "قريباً",
    title: (n) => `الدراسة في ${n}`,
    lead: (n, c) => `الدول التي نغطيها في ${n}: ${c}. اختر دولة لترى برامجها ومصاريفها والتأشيرة والعمل أثناء الدراسة.`,
    programmes: (p) => `${p.toLocaleString("en-US")} برنامج`,
    soonTitle: (n) => `الدراسة في ${n}: قريباً`,
    soonLead: (n) => `لم نضف ${n} بعد. نعمل على إضافة برامج الجامعات الحكومية فيها بالمصادر الرسمية فقط، مثل باقي الدول في الموقع.`,
    want: (n) => `أريد ${n}`,
    wantHelp: "اضغط ليعرف فريق الموقع أنك تريد هذه الوجهة؛ نبدأ بالوجهات التي يطلبها الزوار أكثر. لا نحفظ أي بيانات عنك.",
    thanks: "شكراً! سجلنا اهتمامك.",
    notifyTitle: "تريد أن تعرف أول ما نضيفها؟",
    notifyText: "اشترك في النشرة الشهرية؛ نعلن فيها كل دولة جديدة نضيفها.",
    meanwhile: "حتى ذلك الوقت",
    allCountries: "كل الدول التي نغطيها",
    other: "مناطق أخرى",
  },
  en: {
    ask: "Where do you want to study?",
    askLead: "Pick a region to see the countries we cover there.",
    names: { europe: "Europe", asia: "Asia", canada: "Canada", usa: "United States", australia: "Australia", "new-zealand": "New Zealand" },
    count: (c, p) => `${c} ${c === 1 ? "country" : "countries"} · ${p.toLocaleString("en-US")} programmes`,
    soon: "Coming soon",
    title: (n) => `Study in ${n}`,
    lead: (n, c) => `The countries we cover in ${n}: ${c}. Pick a country to see its programmes, fees, visa and work while studying.`,
    programmes: (p) => `${p.toLocaleString("en-US")} programmes`,
    soonTitle: (n) => `Study in ${n}: coming soon`,
    soonLead: (n) => `We haven't added ${n} yet. We are working on its public universities' programmes, from official sources only, like every other country on the site.`,
    want: (n) => `I want ${n}`,
    wantHelp: "Tap to tell the site team you want this destination; we start with the ones visitors ask for most. We don't store any data about you.",
    thanks: "Thanks! We've noted your interest.",
    notifyTitle: "Want to know as soon as we add it?",
    notifyText: "Subscribe to the monthly newsletter; we announce every new country in it.",
    meanwhile: "Meanwhile",
    allCountries: "All the countries we cover",
    other: "Other regions",
  },
};
