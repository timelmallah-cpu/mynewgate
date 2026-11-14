// Converts data/programmes/all_programmes.csv into lib/programmes.json.
// Deterministic rules only: the estimate is used for filtering; the original
// official text is always shown to the user unchanged.
import { readFileSync, writeFileSync, existsSync } from "node:fs";
import { parse } from "csv-parse/sync";

const NP = "غير منشور في المصدر";
const EN = JSON.parse(readFileSync("data/translations_en.json", "utf8"));
const missingEn = new Set();
const en = (t) => { if (EN[t] === undefined) { missingEn.add(t); return t; } return EN[t]; };
const CITY_AR = JSON.parse(readFileSync("data/city_names_ar.json", "utf8"));
const PHOTOS = JSON.parse(readFileSync("data/university_photos.json", "utf8"));
const PHOTO_MAP = JSON.parse(readFileSync("data/university_photo_map.json", "utf8"));
function photoFor(uni) {
  const key = PHOTO_MAP[uni];
  const v = key && PHOTOS[key];
  if (!v) return null;
  const [src, page, author, license, licenseUrl] = v;
  return { src, page, author, license, licenseUrl, of: key };
}
const COORDS = JSON.parse(readFileSync("data/city_coords.json", "utf8")); // [lat, lon] of the city centre
const LINKS = new Map(
  parse(readFileSync("data/programme_links.csv", "utf8"), { columns: true, skip_empty_lines: true })
    .map((l) => [`${l.programme}|${l.university}|${l.level || "master"}`, l])
);
const read = (f) => parse(readFileSync(f, "utf8").replace(/^\uFEFF/, ""), { columns: true, skip_empty_lines: true });
// Master's: one concatenated file, numeric ids (kept stable for existing URLs).
const rows = read("data/programmes/all_programmes.csv").map((r) => ({ ...r, _level: "master", _id: Number(r["#"]) }));
// Bachelor's (incl. long-cycle medicine): one file per country, ids "b-<country>-<n>".
const BA_ORDER = ["germany", "netherlands", "spain", "belgium", "estonia", "poland", "hungary", "romania"];
const BA_CODE = { germany: "de", netherlands: "nl", spain: "es", belgium: "be", estonia: "ee", poland: "pl", hungary: "hu", romania: "ro" };
for (const c of BA_ORDER) {
  const f = `data/programmes_ba/${c}.csv`;
  if (existsSync(f)) rows.push(...read(f).map((r) => ({ ...r, _level: "bachelor", _id: `b-${BA_CODE[c]}-${r["#"]}` })));
}

const COUNTRY = { "ألمانيا": "de", "هولندا": "nl", "إسبانيا": "es", "بلجيكا": "be", "إستونيا": "ee", "بولندا": "pl", "المجر": "hu", "رومانيا": "ro" };
const FIELD = {
  "علوم الحاسب": "cs", "علوم البيانات": "ds", "إدارة الأعمال": "business",
  "الهندسة": "engineering", "الصحة العامة": "health", "الطب": "medicine",
};

// Years of study from the Arabic duration text.
function years(d, level) {
  if (!d || d === NP) return null;
  if (level === "bachelor") {
    if (/3\.5 سنوات|210 ساعات|7 فصول/.test(d)) return 3.5;
    if (/6 سنوات|360 ساعة|12 فصلاً/.test(d)) return 6;
    if (/5 سنوات|300 ساعة/.test(d)) return 5;
    if (/4 سنوات|240 ساعة|8 فصول/.test(d)) return 4;
    if (/3 سنوات|180 ساعة|6 فصول/.test(d)) return 3;
    return null;
  }
  if (/4 فصول|سنتان|120 ساعة/.test(d)) return 2;
  if (/3 فصول|90 ساعة/.test(d)) return 1.5;
  if (/فصلان|سنة|شهراً|60 ساعة/.test(d)) return 1;
  return null;
}

// Numbers in the text that are amounts (not academic years like 2026/27).
function amounts(t) {
  const out = [];
  const re = /(\d{1,3}(?:,\d{3})+(?:\.\d+)?|\d{4,}(?:\.\d+)?)(?!\s*\/|\d)/g;
  let m;
  while ((m = re.exec(t))) {
    const n = parseFloat(m[1].replace(/,/g, ""));
    if (n >= 2000 && n <= 2100 && !m[1].includes(",")) continue; // a year
    if (n >= 500) out.push(n);
  }
  return out;
}

// Estimated tuition per year in EUR, or null when unknown/ambiguous.

// Monthly living cost (EUR) read from the programme's own living-cost text; null when none published.
function monthlyLiving(t) {
  if (!t || /^(غير منشور|لا يوجد)/.test(t.trim())) return null;
  const paren = t.match(/\(([^)]*)\)/);
  let part = t.split("(")[0];
  if (paren && /\d/.test(paren[1]) && /(يورو|شهرياً)/.test(paren[1]) && /(زلوتي|دولار|سنوياً)/.test(part)) part = paren[1];
  const nums = (part.match(/\d[\d,]*/g) || []).map((n) => Number(n.replace(/,/g, ""))).filter((n) => n >= 100);
  if (!nums.length) return null;
  let v = /\d\s*-\s*\d/.test(part) && nums.length > 1 ? (nums[0] + nums[1]) / 2 : nums[0];
  if (/زلوتي/.test(part)) v /= 4.4;
  if (/دولار/.test(part)) v /= 1.11;
  if (/سنوياً/.test(part)) v /= 12;
  return Math.round(v / 10) * 10;
}

function annualFee(t, y) {
  if (!t || t.startsWith(NP)) return null;
  if (/^لا توجد/.test(t)) return 0;
  if (/فئة هذا البرنامج للتحقق|مثال من|يُحسب حسب البرنامج/.test(t)) return null;
  const a = amounts(t);
  if (!a.length) return null;
  let v = a[0];
  if (/للفصل/.test(t)) v = v * 2;
  else if (/للبرنامج كاملاً/.test(t) && y) v = v / y;
  return Math.round(v);
}

// Deadline dates from the English deadline text. A range "1 April - 31 May" counts by its end date.
// Dates without a year are recurring: we add this year's and next year's occurrence, marked estimated.
const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
const MRE = MONTHS.join("|");
const pad = (n) => String(n).padStart(2, "0");
function deadlineDates(t) {
  if (!t) return [];
  const out = [];
  const add = (d, m, y) => {
    const mi = MONTHS.indexOf(m) + 1;
    if (!mi || d < 1 || d > 31) return;
    if (y) out.push({ d: `${y}-${pad(mi)}-${pad(d)}`, est: false });
    else { const now = new Date().getFullYear(); for (const yy of [now, now + 1]) out.push({ d: `${yy}-${pad(mi)}-${pad(d)}`, est: true }); }
  };
  // ranges: keep the end
  const range = new RegExp(`(\\d{1,2})\\s+(${MRE})(?:\\s+(\\d{4}))?\\s*[-–]\\s*(\\d{1,2})\\s+(${MRE})(?:\\s+(\\d{4}))?`, "g");
  let rest = t.replace(range, (_, d1, m1, y1, d2, m2, y2) => { add(+d2, m2, y2 || null); return " "; });
  // "1 - 15 May" style ranges
  rest = rest.replace(new RegExp(`(\\d{1,2})\\s*[-–]\\s*(\\d{1,2})\\s+(${MRE})(?:\\s+(\\d{4}))?`, "g"), (_, d1, d2, m, y) => { add(+d2, m, y || null); return " "; });
  for (const m of rest.matchAll(new RegExp(`(\\d{1,2})\\s+(${MRE})(?:\\s+(\\d{4}))?`, "g"))) add(+m[1], m[2], m[3] || null);
  const seen = new Set();
  return out.filter((x) => !seen.has(x.d) && seen.add(x.d)).sort((a, b) => a.d.localeCompare(b.d));
}

const out = rows.map((r) => {
  const y = years(r["المدة"], r._level);
  const feeText = r["الرسوم الدراسية لغير الأوروبيين"];
  const L = LINKS.get(`${r["اسم البرنامج (الرسمي)"]}|${r["الجامعة"]}|${r._level}`) ?? {};
  return {
    id: r._id,
    level: r._level,
    reqUrl: L.requirements_url || null, reqNote: L.requirements_note_ar || null,
    applyUrl: L.apply_url || null, applyNote: L.apply_note_ar || null,
    country: COUNTRY[r["الدولة"]],
    countryAr: r["الدولة"],
    field: FIELD[r["التخصص"]],
    fieldAr: r["التخصص"],
    name: r["اسم البرنامج (الرسمي)"],
    university: r["الجامعة"],
    coords: COORDS[r["المدينة"]] || null,
    photo: photoFor(r["الجامعة"]),
    city: CITY_AR[r["المدينة"]] ? `${CITY_AR[r["المدينة"]]} (${r["المدينة"]})` : r["المدينة"],
    degree: r["الدرجة"],
    duration: r["المدة"],
    years: y,
    feeText,
    feePerYear: annualFee(feeText, y),
    feeNeedsCheck: /للتحقق|غير رسمي/.test(feeText),
    adminFee: r["رسوم الفصل الإدارية"],
    deadline: r["موعد التقديم لغير الأوروبيين"],
    english: r["شرط اللغة الإنجليزية"],
    other: r["شروط مهمة أخرى"],
    howToApply: r["طريقة التقديم"],
    living: r["متوسط تكلفة المعيشة الشهرية في المدينة"],
    livingMonthly: monthlyLiving(r["متوسط تكلفة المعيشة الشهرية في المدينة"]),
    housing: r["السكن الجامعي / المساعدة في السكن"],
    source: r["رابط المصدر"],
    reviewed: r["تاريخ المراجعة"],
    status: r["حالة التحقق"],
    en: {
      countryLabel: en(r["الدولة"]), fieldLabel: en(r["التخصص"]), city: r["المدينة"],
      degree: en(r["الدرجة"]), duration: en(r["المدة"]), feeText: en(feeText),
      adminFee: en(r["رسوم الفصل الإدارية"]), deadline: en(r["موعد التقديم لغير الأوروبيين"]),
      english: en(r["شرط اللغة الإنجليزية"]), other: en(r["شروط مهمة أخرى"]),
      howToApply: en(r["طريقة التقديم"]), living: en(r["متوسط تكلفة المعيشة الشهرية في المدينة"]),
      housing: en(r["السكن الجامعي / المساعدة في السكن"]), status: en(r["حالة التحقق"]),
      reqNote: L.requirements_note_en || null, applyNote: L.apply_note_en || null,
    },
  };
});

const noAr = rows.filter((r) => !CITY_AR[r["المدينة"]]).map((r) => r["المدينة"]);
const badMap = Object.entries(PHOTO_MAP).filter(([k, v]) => k !== "_about" && !PHOTOS[v]).map(([k]) => k);
if (badMap.length) console.warn("Photo map points to missing photos:", badMap);
const noXY = rows.filter((r) => !COORDS[r["المدينة"]]).map((r) => r["المدينة"]);
if (noXY.length) console.warn("Cities without coordinates (add to data/city_coords.json):", [...new Set(noXY)]);
if (noAr.length) console.warn("Cities without Arabic name:", [...new Set(noAr)]);
if (missingEn.size) console.warn(`Missing English translations (${missingEn.size}), add them to data/translations_en.json:`, [...missingEn]);
const bad = out.filter((p) => !p.country || !p.field);
if (bad.length) throw new Error("Unmapped country/field in rows: " + bad.map((b) => b.id));
writeFileSync("lib/programmes.json", JSON.stringify(out, null, 1));
// Slim list for "My list" and calendar export (client side).
writeFileSync("lib/deadlines.json", JSON.stringify(out.map((p) => ({
  id: p.id, level: p.level, country: p.country, name: p.name, university: p.university,
  ar: p.deadline, en: p.en.deadline, dates: deadlineDates(p.en.deadline),
}))));
console.log(`deadlines.json: ${out.filter((p) => deadlineDates(p.en.deadline).length).length} programmes with a parsed deadline date`);
console.log(`programmes.json: ${out.filter((p) => p.level === "master").length} master's + ${out.filter((p) => p.level === "bachelor").length} bachelor's, ${out.filter((p) => p.feePerYear === null).length} with unknown fee`);
