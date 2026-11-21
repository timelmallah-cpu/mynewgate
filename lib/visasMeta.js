import { SITE_ORIGIN } from "@/lib/site";
import { VTEXT, DEST_BY_SLUG, DEST_SLUGS as D } from "@/lib/visit";
import { ROUTE_BY_SLUG, ROUTE_SLUGS, RTEXT } from "@/lib/visaRoutes";
import { pairOf, PTEXT } from "@/lib/visitPairs";
import { NOMAD_BY_SLUG, NOMAD_SLUGS, NOMAD_HUB, NTEXT } from "@/lib/nomadVisas";
const DEST_SLUGS = [...D, ...ROUTE_SLUGS, NOMAD_HUB, ...NOMAD_SLUGS];

// Canonical addresses live at the domain root (bawabatalsafar.com/visas), served from /study/visas by a rewrite.
export function visasMeta(lang, slug) {
  const t = VTEXT[lang];
  const d = slug ? DEST_BY_SLUG[slug] : null;
  const p = (l) => `${SITE_ORIGIN}${l === "en" ? "/en" : ""}/visas${slug ? `/${slug}` : ""}`;
  const r = slug ? ROUTE_BY_SLUG[slug] : null;
  const nm = slug ? NOMAD_BY_SLUG[slug] : null;
  const nt = NTEXT[lang];
  const title = slug === NOMAD_HUB ? nt.meta : nm ? nt.metaOne(nm.name[lang]) : r ? RTEXT[lang].meta(r.name[lang]) : d ? t.metaDest(d.name[lang]) : t.metaHub;
  const description = slug === NOMAD_HUB ? nt.hubLead : nm ? nt.descOne(nm.name[lang]) : r ? RTEXT[lang].desc(r.name[lang]) : d ? t.descDest(d.name[lang]) : t.lead;
  const img = `${SITE_ORIGIN}/study/og-${lang}.png?v=4`;
  return {
    title: { absolute: title }, description,
    alternates: { canonical: p(lang), languages: { ar: p("ar"), en: p("en"), "x-default": p("ar") } },
    openGraph: { type: "website", siteName: lang === "ar" ? "بوابة السفر" : "Bawabat AlSafar", title, description, url: p(lang), images: [{ url: img, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [img] },
  };
}
export { DEST_SLUGS };

// Nationality x destination pages.
export function pairMeta(lang, slug, nat) {
  const pr = pairOf(slug, nat);
  if (!pr) return {};
  const name = pr.d.name[lang];
  const title = PTEXT[lang].meta(name, pr.o);
  const description = PTEXT[lang].desc(name, pr.o);
  const p = (l) => `${SITE_ORIGIN}${l === "en" ? "/en" : ""}/visas/${slug}/${nat}`;
  const img = `${SITE_ORIGIN}/study/og-${lang}.png?v=4`;
  return {
    title: { absolute: title }, description,
    alternates: { canonical: p(lang), languages: { ar: p("ar"), en: p("en"), "x-default": p("ar") } },
    openGraph: { type: "website", siteName: lang === "ar" ? "بوابة السفر" : "Bawabat AlSafar", title, description, url: p(lang), images: [{ url: img, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description, images: [img] },
  };
}
