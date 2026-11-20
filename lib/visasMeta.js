import { SITE_ORIGIN } from "@/lib/site";
import { VTEXT, DEST_BY_SLUG, DEST_SLUGS } from "@/lib/visit";

// Canonical addresses live at the domain root (bawabatalsafar.com/visas), served from /study/visas by a rewrite.
export function visasMeta(lang, slug) {
  const t = VTEXT[lang];
  const d = slug ? DEST_BY_SLUG[slug] : null;
  const p = (l) => `${SITE_ORIGIN}${l === "en" ? "/en" : ""}/visas${slug ? `/${slug}` : ""}`;
  const title = d ? t.metaDest(d.name[lang]) : t.metaHub;
  const description = d ? t.descDest(d.name[lang]) : t.lead;
  const img = `${SITE_ORIGIN}/study/og-${lang}.png?v=3`;
  return {
    title: { absolute: title }, description,
    alternates: { canonical: p(lang), languages: { ar: p("ar"), en: p("en"), "x-default": p("ar") } },
    openGraph: { type: "website", siteName: lang === "ar" ? "بوابة السفر" : "Bawabat AlSafar", title, description, url: p(lang), images: [{ url: img, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [img] },
  };
}
export { DEST_SLUGS };
