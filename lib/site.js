import { T } from "./i18n";

// Public address of the site. The study site lives under /study on the domain (basePath in next.config.mjs).
// Set NEXT_PUBLIC_SITE_ORIGIN in Vercel only if the domain changes.
export const BASE = "/study";
export const SITE_ORIGIN = (process.env.NEXT_PUBLIC_SITE_ORIGIN || "https://bawabatalsafar.com").replace(/\/$/, "");
export const SITE_URL = SITE_ORIGIN + BASE;

// Metadata for one page: title, description, link previews (WhatsApp, Facebook, X) and the other-language link.
// path is the Arabic path without the /en prefix, e.g. "/country/de".
export function pageMeta(lang, { title, description, path = "/", image, fr } = {}) {
  const t = T[lang];
  const desc = description || t.description;
  // Absolute addresses: metadata paths are not prefixed with the basePath automatically.
  const abs = (p) => (/^https?:/.test(p) ? p : SITE_URL + (p === "/" ? "" : p));
  const enPath = `/en${path === "/" ? "" : path}`;
  const url = abs(lang === "ar" ? path : enPath);
  const img = abs(image || `/og-${lang}.png?v=3`);
  return {
    ...(title ? { title } : {}),
    description: desc,
    alternates: {
      canonical: url,
      languages: { ar: abs(path), en: abs(enPath), ...(fr ? { fr: abs(`/fr${fr}`) } : {}), "x-default": abs(path) },
    },
    openGraph: {
      type: "website",
      siteName: t.brand,
      locale: lang === "ar" ? "ar_AR" : "en_GB",
      title: title || t.title,
      description: desc,
      url,
      // Our own cards (default og image and the /api/og share cards) are 1200x630; outside photos have no fixed size.
      images: [{ url: img, ...(!image || image.startsWith("/api/og/") ? { width: 1200, height: 630 } : {}) }],
    },
    twitter: { card: "summary_large_image", title: title || t.title, description: desc, images: [img] },
  };
}
