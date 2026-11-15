// Web app manifest: lets phones install the site like an app (Add to Home Screen).
export default function manifest() {
  return {
    name: "بوابتي الجديدة | MyNewGate",
    short_name: "بوابتي",
    description: "الدراسة في أوروبا للطلاب العرب: برامج ومنح وأدوات من المصادر الرسمية.",
    start_url: "/?source=app",
    scope: "/",
    display: "standalone",
    orientation: "portrait",
    lang: "ar",
    dir: "rtl",
    background_color: "#f3f5f9",
    theme_color: "#13234b",
    categories: ["education"],
    icons: [
      { src: "/icon-192.png", sizes: "192x192", type: "image/png", purpose: "any" },
      { src: "/icon-512.png", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/icon-maskable-512.png", sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
    shortcuts: [
      { name: "ابحث عن برنامج", url: "/quiz", icons: [{ src: "/icon-192.png", sizes: "192x192" }] },
      { name: "المنح", url: "/scholarships", icons: [{ src: "/icon-192.png", sizes: "192x192" }] },
      { name: "قائمتي", url: "/my-list", icons: [{ src: "/icon-192.png", sizes: "192x192" }] },
    ],
  };
}
