import Shell from "@/components/Shell";
import { T } from "@/lib/i18n";
import { SITE_URL, pageMeta } from "@/lib/site";

export const metadata = { metadataBase: new URL(SITE_URL), appleWebApp: { capable: true, title: "بوابتي", statusBarStyle: "default" }, title: T.ar.title, ...noAlt(pageMeta("ar", { path: "/" })) };
function noAlt({ alternates, ...m }) { return m; }

export const viewport = { themeColor: "#13234b" };

export default function Layout({ children }) {
  return <Shell lang="ar">{children}</Shell>;
}
