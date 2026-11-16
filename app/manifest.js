import { BASE } from "@/lib/site";

// Web app manifest: lets phones install the site like an app (Add to Home Screen).
export default function manifest() {
  return {
    name: "بوابة السفر | Bawabat Alsafar",
    short_name: "بوابة السفر",
    description: "الدراسة في أوروبا للطلاب العرب: برامج ومنح وأدوات من المصادر الرسمية.",
    start_url: `${BASE}/?source=app`,
    scope: `${BASE}/`,
    display: "standalone",
    orientation: "portrait",
    lang: "ar",
    dir: "rtl",
    background_color: "#f3f5f9",
    theme_color: "#13234b",
    categories: ["education"],
    icons: [
      { src: BASE + "/icon-192.png?v=2", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: BASE + "/icon-512.png?v=2", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: BASE + "/icon-maskable-512.png?v=2", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "ابحث عن برنامج", url: `${BASE}/quiz`, icons: [{ src: BASE + "/icon-192.png?v=2", sizes: "192x192" }] },
      { name: "المنح", url: `${BASE}/scholarships`, icons: [{ src: BASE + "/icon-192.png?v=2", sizes: "192x192" }] },
      { name: "قائمتي", url: `${BASE}/my-list`, icons: [{ src: BASE + "/icon-192.png?v=2", sizes: "192x192" }] },
    ],
  };
}
