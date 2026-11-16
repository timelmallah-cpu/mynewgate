import { T } from "./i18n";

// Public address of the site. Set NEXT_PUBLIC_SITE_URL in Vercel when the domain changes.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || "https://bawabatalsafar.com").replace(/\/$/, "");

// Metadata for one page: title, description, link previews (WhatsApp, Facebook, X) and the other-language link.
// path is the Arabic path without the /en prefix, e.g. "/country/de".
export function pageMeta(lang, { title, description, path = "/", image } = {}) {
  const t = T[lang];
  const desc = description || t.description;
  const url = lang === "ar" ? path : `/en${path === "/" ? "" : path}`;
  const img = image || `/og-${lang}.png?v=2`;
  return {
    ...(title ? { title } : {}),
    description: desc,
    alternates: {
      canonical: url,
      languages: { ar: path, en: `/en${path === "/" ? "" : path}`, "x-default": path },
    },
    openGraph: {
      type: "website",
      siteName: t.brand,
      locale: lang === "ar" ? "ar_AR" : "en_GB",
      title: title || t.title,
      description: desc,
      url,
      images: [{ url: img, ...(image ? {} : { width: 1200, height: 630 }) }],
    },
    twitter: { card: "summary_large_image", title: title || t.title, description: desc, images: [img] },
  };
}
