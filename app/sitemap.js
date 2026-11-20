import { REGIONS } from "@/lib/regions";
import programmes from "@/lib/programmes.json";
import { SCHOLARSHIPS } from "@/lib/scholarships";
import { COUNTRY_IDS } from "@/lib/options";
import { VOC } from "@/lib/vocational";
import { SECTORS } from "@/lib/ausbildungGuide";
import { SITE_URL } from "@/lib/site";
import { LANDINGS } from "@/lib/landings";
import { CITIES } from "@/lib/cities";
import { SECTION_IDS } from "@/lib/sections";

// Every public page in both languages, with the other language linked (hreflang).
export default function sitemap() {
  const paths = [
    "/", "/quiz", "/eligibility", "/journey", "/scholarships", "/guide", "/compare", "/countries", "/english-check", "/planner", "/tools", "/visa", "/school-certificate", "/foundation", "/after-30", "/applied-sciences", "/housing", "/glossary", "/gpa", "/without-ielts", "/language", "/institutes", "/advertise", "/motivation-letter", "/university-email", "/pricing", "/legalisation", "/ask", "/cities", "/install", "/study", "/after-graduation", "/vocational", "/ausbildung", "/contact", "/privacy", "/terms", "/updates", "/how-we-work",
    ...SECTION_IDS.map((id) => `/soon/${id}`),
    ...[...new Set([...COUNTRY_IDS, "fi"])].map((c) => `/country/${c}`),
    ...REGIONS.filter((r) => r.countries.length > 1).map((r) => `/region/${r.id}`),
    ...programmes.map((p) => `/programme/${p.id}`),
    ...SCHOLARSHIPS.map((s) => `/scholarships/${s.id}`),
    ...VOC.map((v) => `/vocational/${v.code}`),
    ...SECTORS.map((x) => `/ausbildung/${x.slug}`),
    ...LANDINGS.map((l) => `/search/${l.slug}`),
    ...CITIES.map((c) => `/city/${c.slug}`),
  ];
  const en = (p) => `/en${p === "/" ? "" : p}`;
  const now = new Date();
  const ar = (p) => (p === "/" ? "" : p);
  return paths.flatMap((p) => {
    const languages = { ar: SITE_URL + ar(p), en: SITE_URL + en(p) };
    const priority = p === "/" ? 1 : p.startsWith("/programme/") ? 0.6 : 0.8;
    return [
      { url: SITE_URL + ar(p), lastModified: now, changeFrequency: "weekly", priority, alternates: { languages } },
      { url: SITE_URL + en(p), lastModified: now, changeFrequency: "weekly", priority: priority - 0.1, alternates: { languages } },
    ];
  });
}
