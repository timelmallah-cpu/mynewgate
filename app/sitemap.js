import programmes from "@/lib/programmes.json";
import { SCHOLARSHIPS } from "@/lib/scholarships";
import { COUNTRY_IDS } from "@/lib/options";
import { VOC } from "@/lib/vocational";
import { SITE_URL } from "@/lib/site";
import { LANDINGS } from "@/lib/landings";

// Every public page in both languages, with the other language linked (hreflang).
export default function sitemap() {
  const paths = [
    "/", "/quiz", "/scholarships", "/guide", "/compare", "/countries", "/english-check", "/planner", "/tools", "/visa", "/school-certificate", "/housing", "/glossary", "/gpa", "/without-ielts", "/language", "/institutes", "/install", "/study", "/after-graduation", "/vocational", "/ausbildung", "/contact", "/privacy",
    ...[...new Set([...COUNTRY_IDS, "fi"])].map((c) => `/country/${c}`),
    ...programmes.map((p) => `/programme/${p.id}`),
    ...SCHOLARSHIPS.map((s) => `/scholarships/${s.id}`),
    ...VOC.map((v) => `/vocational/${v.code}`),
    ...LANDINGS.map((l) => `/study/${l.slug}`),
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
