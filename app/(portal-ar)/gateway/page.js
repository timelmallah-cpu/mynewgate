import Portal from "@/components/Portal";
import { SITE_ORIGIN } from "@/lib/site";
export const metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "بوابة السفر | دليلك الذكي للدراسة والعمل والهجرة حول العالم",
  description: "بوابة السفر: الدراسة في الخارج، والتأشيرات والهجرة، والعمل، والسياحة، بالعربية ومن المصادر الرسمية فقط.",
  alternates: { canonical: "/", languages: { ar: "/", en: "/en" } },
};
export const viewport = { themeColor: "#13234b" };
export default function Page() {
  return <Portal lang="ar" />;
}
