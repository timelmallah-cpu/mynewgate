// Share card for a scholarship page: /api/og/scholarship/<id>?lang=ar|en.
import { SCHOLARSHIPS } from "@/lib/scholarships";
import { T } from "@/lib/i18n";
import { renderCard, nextDate, fmtDate } from "@/lib/og/card";

export const runtime = "nodejs";

const LEVEL = { ar: { master: "ماجستير", bachelor: "بكالوريوس", doctorate: "دكتوراه" }, en: { master: "Master's", bachelor: "Bachelor's", doctorate: "Doctorate" } };

function where(s, lang) {
  const names = T[lang].countries;
  if (s.hosts.length > 3) return lang === "ar" ? `الدراسة في ${s.hosts.length} دولة أوروبية` : `Study in ${s.hosts.length} European countries`;
  const list = s.hosts.map((h) => names[h] || h).join(lang === "ar" ? " و" : " and ");
  return lang === "ar" ? `الدراسة في ${list}` : `Study in ${list}`;
}

function deadline(s, lang) {
  const x = nextDate(s.deadlines);
  if (!x) return lang === "ar" ? "راجع صفحة المنحة" : "See the scholarship page";
  const d = fmtDate(x.d, lang);
  const tag = x.kind === "expected" ? (lang === "ar" ? " · متوقع" : " (expected)") : x.kind === "varies" ? (lang === "ar" ? " · يختلف حسب البرنامج" : " (varies)") : "";
  return d + tag;
}

export async function GET(req, { params }) {
  const { id } = await params;
  const lang = new URL(req.url).searchParams.get("lang") === "en" ? "en" : "ar";
  const s = SCHOLARSHIPS.find((x) => x.id === String(id).replace(/\.png$/, ""));
  if (!s) return new Response("Not found", { status: 404 });
  return renderCard({
    lang,
    chip: s.levels.map((l) => LEVEL[lang][l]).join(" / "),
    title: s.name[lang],
    titleLatin: lang === "en",
    subtitle: [{ text: s.funder[lang], latin: lang === "en" }],
    boxes: [
      { label: lang === "ar" ? "التمويل" : "Funding", value: lang === "ar" ? "ممولة بالكامل" : "Fully funded" },
      { label: lang === "ar" ? "أقرب موعد" : "Next deadline", value: deadline(s, lang) },
    ],
    badge: where(s, lang),
  });
}
