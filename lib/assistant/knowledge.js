// The assistant's knowledge: every fact it may use, built only from the site's own data files.
// Each document has a site URL (the source we show), a type, a country (if any) and its text in Arabic and English.
import programmes from "../programmes.json";
import { feeStats } from "../feeStats";
import { view, T } from "../i18n";
import { SCHOLARSHIPS } from "../scholarships";
import { COSTS } from "../costs";
import { VISA } from "../embassy";
import { HOUSING, SCAM } from "../housing";
import { GLOSSARY } from "../glossary";
import { POST_STUDY } from "../postStudy";
import { STUDY_WORK } from "../studyWork";
import { CERT } from "../schoolCert";
import { TESTS, LOCAL } from "../language";
import { RECOGNITION, DOCS_COMMON, DOCS_EXTRA } from "../guide";
import { COUNTRY_INFO } from "../countryInfo";
import { ENGLISH_ALT } from "../englishAlt";
import { LEGAL_TEXT } from "../legalisationText";
import { LETTER_TEXT } from "../letterText";
import { CITIES } from "../cities";
import { VOC } from "../vocational";
import { AUSB } from "../ausbildung";

const LANGS = ["ar", "en"];
const SKIP = new Set(["src", "src2", "url", "page", "licenseUrl", "egyptUrl", "generalSrc", "book", "proofSrc", "photo", "id", "eligible", "hosts", "levels", "re"]);

// Collect the readable text of one language from any nested data object.
function flat(o, lang, out = []) {
  if (o == null) return out;
  if (typeof o === "string") { if (!/^https?:\/\//.test(o)) out.push(o); return out; }
  if (typeof o === "number") { out.push(String(o)); return out; }
  if (Array.isArray(o)) { o.forEach((x) => flat(x, lang, out)); return out; }
  if (typeof o === "object") {
    if (typeof o[lang] === "string" || Array.isArray(o[lang])) { flat(o[lang], lang, out); if (o.name && typeof o.name === "string") out.push(o.name); return out; }
    for (const [k, v] of Object.entries(o)) {
      if (SKIP.has(k)) continue;
      if (LANGS.includes(k) && k !== lang) continue;
      flat(v, lang, out);
    }
  }
  return out;
}
const both = (o) => ({ ar: flat(o, "ar").join(". "), en: flat(o, "en").join(". ") });
const cn = (c, lang) => T[lang].countries[c] || c;

const LEVEL = { ar: { master: "ماجستير", bachelor: "بكالوريوس", doctorate: "دكتوراه" }, en: { master: "Master's", bachelor: "Bachelor's", doctorate: "Doctorate" } };

function programmeDoc(p) {
  const text = {};
  for (const lang of LANGS) {
    const v = view(p, lang);
    const fee = p.feePerYear === 0 ? (lang === "ar" ? "بدون رسوم دراسية" : "no tuition fee") : p.feePerYear && p.feePeriod ? `${p.feePerYear}${p.feePerYearMax ? `-${p.feePerYearMax}` : ""} EUR/year` : v.feeText;
    const L = lang === "ar"
      ? ["البرنامج", "الجامعة", "المدينة", "الدولة", "المستوى", "التخصص", "الرسوم السنوية", "المدة", "مواعيد التقديم", "الإنجليزي", "شروط تانية", "رسوم إدارية", "المعيشة", "السكن"]
      : ["Programme", "University", "City", "Country", "Level", "Field", "Annual fee", "Duration", "Deadlines", "English", "Other requirements", "Admin fee", "Living costs", "Housing"];
    const vals = [p.name, p.university, v.city, v.countryLabel, LEVEL[lang][p.level], v.fieldLabel, `${fee}${p.feeNeedsCheck ? (lang === "ar" ? " (للتحقق)" : " (to verify)") : ""}`, v.duration, v.deadline, v.english, v.other, v.adminFee, v.living, v.housing];
    text[lang] = L.map((l, i) => (vals[i] ? `${l}: ${vals[i]}` : "")).filter(Boolean).join(" | ");
  }
  return { url: `/programme/${p.id}`, type: "programme", country: p.country, field: p.field, level: p.level, free: p.feePerYear === 0, fee: p.feePerYear, title: { ar: `${p.name} - ${p.university}`, en: `${p.name} - ${p.university}` }, text };
}

function build() {
  const docs = [];
  const add = (url, type, title, text, extra = {}) => {
    if (!text.ar && !text.en) return;
    docs.push({ url, type, title, text, ...extra });
  };

  programmes.forEach((p) => docs.push(programmeDoc(p)));

  SCHOLARSHIPS.forEach((s) => add(`/scholarships/${s.id}`, "scholarship", s.name, both({ ...s, hostNames: { ar: s.hosts.map((c) => cn(c, "ar")).join("، "), en: s.hosts.map((c) => cn(c, "en")).join(", ") } }), { countries: s.hosts }));

  const codes = Object.keys(COUNTRY_INFO);
  for (const c of codes) {
    const name = { ar: cn(c, "ar"), en: cn(c, "en") };
    const ps = programmes.filter((p) => p.country === c);
    const fs = feeStats(ps);
    const summary = {
      ar: `${name.ar}: ${ps.length} برنامج بالإنجليزية على موقعنا (${ps.filter((p) => p.level === "bachelor").length} بكالوريوس، ${ps.filter((p) => p.level === "master").length} ماجستير)، منهم ${ps.filter((p) => p.feePerYear === 0).length} بدون رسوم دراسية${fs.min !== null ? `، والرسوم السنوية لغير الأوروبيين في البرامج المدفوعة من ${fs.min} لـ ${fs.max} يورو` : ""}.`,
      en: `${name.en}: ${ps.length} English-taught programmes on our site (${ps.filter((p) => p.level === "bachelor").length} bachelor's, ${ps.filter((p) => p.level === "master").length} master's), ${ps.filter((p) => p.feePerYear === 0).length} tuition-free${fs.min !== null ? `, non-EU annual fees for paid programmes from €${fs.min} to €${fs.max}` : ""}.`,
    };
    const ci = both(COUNTRY_INFO[c]);
    const co = COSTS[c] ? both({ proof: COSTS[c].proof, fees: COSTS[c].fees, insurance: COSTS[c].insurance }) : { ar: "", en: "" };
    const sw = STUDY_WORK[c] ? both(STUDY_WORK[c]) : { ar: "", en: "" };
    add(`/country/${c}`, "country", { ar: `الدراسة في ${name.ar}`, en: `Studying in ${name.en}` },
      { ar: [summary.ar, ci.ar, co.ar && `إثبات المال والتكاليف: ${co.ar}`, sw.ar && `الشغل أثناء الدراسة: ${sw.ar}`].filter(Boolean).join(" | "),
        en: [summary.en, ci.en, co.en && `Proof of funds and costs: ${co.en}`, sw.en && `Working while studying: ${sw.en}`].filter(Boolean).join(" | ") },
      { country: c, overview: summary });
    if (VISA[c]) add(`/visa?to=${c}`, "visa", { ar: `تأشيرة الدراسة في ${name.ar}`, en: `Student visa for ${name.en}` }, both(VISA[c]), { country: c });
    if (POST_STUDY[c]) add(`/after-graduation`, "after", { ar: `البقاء بعد التخرج في ${name.ar}`, en: `Staying after graduation in ${name.en}` }, both(POST_STUDY[c]), { country: c });
    if (RECOGNITION[c]) add(`/guide?country=${c}#documents`, "documents", { ar: `الأوراق ومعادلة الشهادة في ${name.ar}`, en: `Documents and recognition in ${name.en}` }, both({ r: RECOGNITION[c], d: DOCS_EXTRA[c] || [] }), { country: c });
    if (CERT[c]) add(`/school-certificate#cert-${c}`, "schoolcert", { ar: `هل شهادة الثانوية تكفي في ${name.ar}؟`, en: `Is your school certificate enough for ${name.en}?` }, both(CERT[c]), { country: c });
    if (HOUSING[c]) add(`/housing?country=${c}`, "housing", { ar: `السكن في ${name.ar}`, en: `Housing in ${name.en}` }, both(HOUSING[c]), { country: c });
    if (LOCAL[c]) add(`/language#lang-${c}`, "language", { ar: `لغة ${name.ar} وفين تتعلمها`, en: `Learning the language of ${name.en}` }, both(LOCAL[c]), { country: c });
  }

  add("/guide#documents", "documents", { ar: "الأوراق المطلوبة عموماً", en: "Documents usually required" }, both(DOCS_COMMON));
  add("/housing", "housing", { ar: "إزاي تتجنب نصب السكن", en: "How to avoid rental scams" }, both(SCAM));
  TESTS.forEach((x) => add("/language", "language", { ar: `اختبار ${x.name}`, en: `${x.name} test` }, both(x)));
  Object.entries(ENGLISH_ALT).forEach(([u, x]) => add("/without-ielts", "noielts", { ar: `${u}: بدون IELTS؟`, en: `${u}: without IELTS?` }, { ar: `${u}. ${flat(x, "ar").join(". ")}`, en: `${u}. ${flat(x, "en").join(". ")}` }));
  GLOSSARY.forEach((g) => add("/glossary", "glossary", { ar: g.term, en: g.term }, { ar: `${g.term}${g.alt ? ` (${g.alt})` : ""}: ${g.ar}`, en: `${g.term}${g.alt ? ` (${g.alt})` : ""}: ${g.en}` }));

  // Long guide pages are split into a few documents so retrieval can pick the relevant part.
  const split = (url, type, obj, title) => {
    for (const [k, v] of Object.entries(obj.ar)) {
      if (typeof v === "function" || /title$|Title$|Btn$|^reviewed$/.test(k)) continue;
      const ar = flat(v, "ar").join(". "), en = flat(obj.en[k], "en").join(". ");
      if (ar.length > 40) add(url, type, title, { ar: `${obj.ar[k + "Title"] || obj.ar.title}: ${ar}`, en: `${obj.en[k + "Title"] || obj.en.title}: ${en}` });
    }
  };
  split("/legalisation", "legal", LEGAL_TEXT, { ar: LEGAL_TEXT.ar.title, en: LEGAL_TEXT.en.title });
  split("/motivation-letter", "letter", LETTER_TEXT, { ar: LETTER_TEXT.ar.title, en: LETTER_TEXT.en.title });

  CITIES.forEach((c) => add(`/city/${c.slug}`, "city", { ar: `الدراسة في ${c.ar}`, en: `Studying in ${c.en}` },
    { ar: `${c.ar} (${c.en}) في ${cn(c.country, "ar")}: ${c.list.length} برنامج. الجامعات: ${[...new Set(c.list.map((p) => p.university))].join("، ")}`,
      en: `${c.en}, ${cn(c.country, "en")}: ${c.list.length} programmes. Universities: ${[...new Set(c.list.map((p) => p.university))].join(", ")}` }, { country: c.country }));

  VOC.forEach((v) => add(`/vocational/${v.code}`, "vocational", { ar: `${v.country.ar}: ${v.name.ar}`, en: `${v.country.en}: ${v.name.en}` }, both(v), { country: v.code }));
  add("/ausbildung", "vocational", { ar: AUSB.ar.landingTitle || "Ausbildung", en: AUSB.en.landingTitle || "Ausbildung" }, both({ ar: AUSB.ar, en: AUSB.en }), { country: "de" });

  return docs;
}

export const DOCS = build();
export const OVERVIEW = DOCS.filter((d) => d.overview);
