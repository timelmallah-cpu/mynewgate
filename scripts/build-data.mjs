// Converts data/programmes/all_programmes.csv into lib/programmes.json.
// Deterministic rules only: the estimate is used for filtering; the original
// official text is always shown to the user unchanged.
import { readFileSync, writeFileSync } from "node:fs";
import { parse } from "csv-parse/sync";

const NP = "غير منشور في المصدر";
const CITY_AR = JSON.parse(readFileSync("data/city_names_ar.json", "utf8"));
const raw = readFileSync("data/programmes/all_programmes.csv", "utf8").replace(/^﻿/, "");
const rows = parse(raw, { columns: true, skip_empty_lines: true });

const COUNTRY = { "ألمانيا": "de", "هولندا": "nl", "إسبانيا": "es", "بلجيكا": "be" };
const FIELD = {
  "علوم الحاسب": "cs", "علوم البيانات": "ds", "إدارة الأعمال": "business",
  "الهندسة": "engineering", "الصحة العامة": "health",
};

// Years of study from the Arabic duration text.
function years(d) {
  if (!d || d === NP) return null;
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

const out = rows.map((r) => {
  const y = years(r["المدة"]);
  const feeText = r["الرسوم الدراسية لغير الأوروبيين"];
  return {
    id: Number(r["#"]),
    country: COUNTRY[r["الدولة"]],
    countryAr: r["الدولة"],
    field: FIELD[r["التخصص"]],
    fieldAr: r["التخصص"],
    name: r["اسم البرنامج (الرسمي)"],
    university: r["الجامعة"],
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
    housing: r["السكن الجامعي / المساعدة في السكن"],
    source: r["رابط المصدر"],
    reviewed: r["تاريخ المراجعة"],
    status: r["حالة التحقق"],
  };
});

const noAr = rows.filter((r) => !CITY_AR[r["المدينة"]]).map((r) => r["المدينة"]);
if (noAr.length) console.warn("Cities without Arabic name:", [...new Set(noAr)]);
const bad = out.filter((p) => !p.country || !p.field);
if (bad.length) throw new Error("Unmapped country/field in rows: " + bad.map((b) => b.id));
writeFileSync("lib/programmes.json", JSON.stringify(out, null, 1));
console.log(`programmes.json: ${out.length} programmes, ${out.filter((p) => p.feePerYear === null).length} with unknown fee`);
