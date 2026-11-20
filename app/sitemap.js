import { REGIONS } from "@/lib/regions";
import programmes from "@/lib/programmes.json";
import { SCHOLARSHIPS } from "@/lib/scholarships";
import { COUNTRY_IDS } from "@/lib/options";
import { VOC } from "@/lib/vocational";
import { SECTORS } from "@/lib/ausbildungGuide";
import { SITE_URL } from "@/lib/site";
import { LANDINGS } from "@/lib/landings";
import { CITIES } from "@/lib/cities";
import { SOON_IDS } from "@/lib/sections";
import { SITE_ORIGIN } from "@/lib/site";
import { DEST_SLUGS } from "@/lib/visasMeta";
import { QUESTIONS } from "@/lib/questions";
import { FROM_SLUGS } from "@/lib/fromOrigin";
import { FR_ORIGINS } from "@/lib/visaFr";
import { PAIRS, pairSlug } from "@/lib/countryCompare";
import { FR_QUESTIONS } from "@/lib/fr";

// Every public page in both languages, with the other language linked (hreflang).
export default function sitemap() {
  const paths = [
    "/", "/quiz", "/eligibility", "/journey", "/scholarships", "/guide", "/compare", "/countries", "/english-check", "/planner", "/tools", "/visa", "/school-certificate", "/foundation", "/after-30", "/applied-sciences", "/housing", "/glossary", "/gpa", "/without-ielts", "/language", "/institutes", "/advertise", "/motivation-letter", "/university-email", "/pricing", "/legalisation", "/ask", "/cities", "/install", "/study", "/after-graduation", "/vocational", "/ausbildung", "/contact", "/privacy", "/terms", "/updates", "/how-we-work", "/my-plan", "/questions", "/english-tests", "/calendars", "/map", "/deadlines-soon", "/earnings", "/first-week", "/parents", "/muslim-life", "/check-offer",
    ...QUESTIONS.map((q) => `/questions/${q.slug}`),
    "/compare-countries", ...PAIRS.map((p) => `/compare-countries/${pairSlug(p)}`),
    ...FROM_SLUGS.flatMap((o) => [`/study-from/${o}`, ...COUNTRY_IDS.map((c) => `/study-from/${o}/${c}`)]),
    ...SOON_IDS.map((id) => `/soon/${id}`),
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
  // French pages (version 1): home, country summaries and questions, linked to their Arabic/English versions.
  const fr = [["", "/"], ...COUNTRY_IDS.map((c) => [`/pays/${c}`, `/country/${c}`]), ["/questions", "/questions"], ["/bourses", "/scholarships"], ["/eligibilite", "/eligibility"], ["/visa", "/visa"], ...Object.keys(FR_ORIGINS).map((o) => [`/visa/${o}`, "/visa"]), ...FR_QUESTIONS.map((q) => [`/questions/${q.slug}`, `/questions/${q.slug}`])]
    .map(([f, p]) => ({ url: `${SITE_URL}/fr${f}`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6, alternates: { languages: { fr: `${SITE_URL}/fr${f}`, ar: SITE_URL + (p === "/" ? "" : p), en: `${SITE_URL}/en${p === "/" ? "" : p}` } } }));
  // Visas section at the domain root (bawabatalsafar.com/visas).
  const vz = ["", ...DEST_SLUGS.map((s) => `/${s}`)].flatMap((s) => {
    const languages = { ar: `${SITE_ORIGIN}/visas${s}`, en: `${SITE_ORIGIN}/en/visas${s}` };
    return [{ url: languages.ar, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8, alternates: { languages } }, { url: languages.en, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7, alternates: { languages } }];
  });
  return [...vz, ...fr, ...paths.flatMap((p) => {
    const languages = { ar: SITE_URL + ar(p), en: SITE_URL + en(p) };
    const priority = p === "/" ? 1 : p.startsWith("/programme/") ? 0.6 : 0.8;
    return [
      { url: SITE_URL + ar(p), lastModified: now, changeFrequency: "weekly", priority, alternates: { languages } },
      { url: SITE_URL + en(p), lastModified: now, changeFrequency: "weekly", priority: priority - 0.1, alternates: { languages } },
    ];
  })];
}
