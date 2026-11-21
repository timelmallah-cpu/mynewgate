import Portal from "@/components/Portal";
import { SITE_ORIGIN } from "@/lib/site";
export const metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "Bawabat AlSafar | Study, work and immigration opportunities worldwide, in Arabic",
  description: "Discover study, work and immigration opportunities around the world, and compare requirements, costs and application steps in one place, in Arabic. From official sources, with a link to the original source for every fact.",
  alternates: { canonical: "/en", languages: { ar: "/", en: "/en" } },
};
export const viewport = { themeColor: "#13234b" };
export default function Page() {
  return <Portal lang="en" />;
}
