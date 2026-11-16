import programmes from "@/lib/programmes.json";
import { SCHOLARSHIPS } from "@/lib/scholarships";
import { COUNTRY_IDS } from "@/lib/options";
import { VOC } from "@/lib/vocational";
import { SECTORS } from "@/lib/ausbildungGuide";
import { SITE_URL } from "@/lib/site";
import { LANDINGS } from "@/lib/landings";
import { CITIES } from "@/lib/cities";

// Every public page in both languages, with the other language linked (hreflang).
export default function sitemap() {
  const paths = [
    "/", "/quiz", "/scholarships", "/guide", "/compare", "/countries", "/english-check", "/planner", "/tools", "/visa", "/school-certificate", "/foundation", "/after-30", "/applied-sciences", "/housing", "/glossary", "/gpa", "/without-ielts", "/language", "/institutes", "/advertise", "/motivation-letter", "/legalisation", "/ask", "/cities", "/install", "/study", "/after-graduation", "/vocational", "/ausbildung", "/contact", "/privacy", "/terms",
    ...[...new Set([...COUNTRY_IDS, "fi"])].map((c) => `/country/${c}`),
    ...programmes.map((p) => `/programme/${p.id}`),
    ...SCHOLARSHIPS.map((s) => `/scholarships/${s.id}`),
    ...VOC.map((v) => `/vocational/${v.code}`),
    ...SECTORS.map((x) => `/ausbildung/${x.slug}`),
    ...LANDINGS.map((l) => `/study/${l.slug}`),
    ...CITIES.map((c) => `/city/${c.slug}`),
  ];
  const en = (p) => `/en${p === "/" ? "" : p}`;
  const now = new Date();
  return paths.flatMap((p) => {
    const languages = { ar: SITE_URL + p, en: SITE_URL + en(p) };
    const priority = p === "/" ? 1 : p.startsWith("/programme/") ? 0.6 : 0.8;
    return [
      { url: SITE_URL + p, lastModified: now, changeFrequency: "weekly", priority, alternates: { languages } },
      { url: SITE_URL + en(p), lastModified: now, changeFrequency: "weekly", priority: priority - 0.1, alternates: { languages } },
    ];
  });
}
