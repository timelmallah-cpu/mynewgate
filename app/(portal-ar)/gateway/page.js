import Portal from "@/components/Portal";
import { SITE_ORIGIN } from "@/lib/site";
export const metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "بوابة السفر | فرص الدراسة والعمل والهجرة حول العالم بالعربية",
  description: "اكتشف فرص الدراسة والعمل والهجرة حول العالم، وقارن الشروط والتكاليف وخطوات التقديم في مكان واحد وباللغة العربية. من المصادر الرسمية، مع رابط المصدر الأصلي لكل معلومة.",
  alternates: { canonical: "/", languages: { ar: "/", en: "/en" } },
  // Google Search Console ownership check for https://bawabatalsafar.com/ (public by design).
  verification: { google: "1hfXSFoIEE02ZpM_myWcrEGZ6X1ywzo_0vt_hrCFzP8" },
};
export const viewport = { themeColor: "#13234b" };
export default function Page() {
  return <Portal lang="ar" />;
}
