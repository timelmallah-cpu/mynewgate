import Portal from "@/components/Portal";
import { SITE_ORIGIN } from "@/lib/site";
export const metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "Bawabat AlSafar | Your smart guide to study, work and immigration around the world",
  description: "Bawabat AlSafar: study abroad, visas and immigration, work and tourism, in Arabic and from official sources only.",
  alternates: { canonical: "/en", languages: { ar: "/", en: "/en" } },
};
export const viewport = { themeColor: "#13234b" };
export default function Page() {
  return <Portal lang="en" />;
}
