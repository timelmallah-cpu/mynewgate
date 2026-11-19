// Share card for a programme page: /api/og/programme/<id>?lang=ar|en (1200x630 PNG, cached by the CDN).
import programmes from "@/lib/programmes.json";
import deadlines from "@/lib/deadlines.json";
import { renderCard, nextDate, fmtDate } from "@/lib/og/card";

export const runtime = "nodejs";

const BY_ID = new Map(programmes.map((p) => [String(p.id), p]));
const DL = new Map(deadlines.map((d) => [String(d.id), d]));
const LEVEL = { ar: { master: "ماجستير", bachelor: "بكالوريوس", doctorate: "دكتوراه" }, en: { master: "Master's", bachelor: "Bachelor's", doctorate: "Doctorate" } };
const n = (v) => Math.round(v / 10) * 10;
const fmt = (v) => n(v).toLocaleString("en-US");

function fee(p, lang) {
  const a = p.feePerYear, b = p.feePerYearMax;
  if (a === 0) return lang === "ar" ? "بدون رسوم دراسية" : "No tuition fee";
  if (a == null) return lang === "ar" ? "غير منشور في المصدر" : "Not published";
  if (b && b > a) return lang === "ar" ? `${fmt(a)} - ${fmt(b)} يورو سنوياً` : `€${fmt(a)}-${fmt(b)} a year`;
  return lang === "ar" ? `حوالي ${fmt(a)} يورو سنوياً` : `About €${fmt(a)} a year`;
}

function deadline(p, lang) {
  const x = nextDate(DL.get(String(p.id))?.dates);
  if (!x) return lang === "ar" ? "راجع صفحة البرنامج" : "See the programme page";
  const d = fmtDate(x.d, lang);
  return x.est ? (lang === "ar" ? `${d} · تقديري` : `${d} (estimate)`) : d;
}

export async function GET(req, { params }) {
  const { id } = await params;
  const lang = new URL(req.url).searchParams.get("lang") === "en" ? "en" : "ar";
  const p = BY_ID.get(String(id).replace(/\.png$/, ""));
  if (!p) return new Response("Not found", { status: 404 });
  const en = p.en || {};
  const country = lang === "ar" ? p.countryAr : en.countryLabel || p.countryAr;
  const field = lang === "ar" ? p.fieldAr : en.fieldLabel || p.fieldAr;
  return renderCard({
    lang,
    chip: `${LEVEL[lang][p.level] || ""} · ${field}`,
    title: p.name,
    subtitle: [{ text: p.university, latin: true }, { text: lang === "ar" ? `${country}` : country, latin: lang !== "ar" }],
    boxes: [
      { label: lang === "ar" ? "الرسوم الدراسية" : "Tuition fee", value: fee(p, lang) },
      { label: lang === "ar" ? "آخر موعد للتقديم" : "Next deadline", value: deadline(p, lang) },
    ],
    badge: lang === "ar" ? "جامعة حكومية · برنامج بالإنجليزية" : "Public university · English-taught",
  });
}
