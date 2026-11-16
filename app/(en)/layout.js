import Shell from "@/components/Shell";
import { T } from "@/lib/i18n";
import { SITE_URL, pageMeta } from "@/lib/site";

export const metadata = { metadataBase: new URL(SITE_URL), appleWebApp: { capable: true, title: "Bawabat AlSafar", statusBarStyle: "default" }, title: T.en.title, ...noAlt(pageMeta("en", { path: "/" })) };
function noAlt({ alternates, ...m }) { return m; }

export const viewport = { themeColor: "#13234b" };

export default function Layout({ children }) {
  return <Shell lang="en">{children}</Shell>;
}
