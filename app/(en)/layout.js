import Shell from "@/components/Shell";
import { T } from "@/lib/i18n";
import { SITE_URL, pageMeta } from "@/lib/site";

export const metadata = { metadataBase: new URL(SITE_URL), title: T.en.title, ...noAlt(pageMeta("en", { path: "/" })) };
function noAlt({ alternates, ...m }) { return m; }

export default function Layout({ children }) {
  return <Shell lang="en">{children}</Shell>;
}
