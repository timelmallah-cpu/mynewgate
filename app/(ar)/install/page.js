import { pageMeta } from "@/lib/site";
import Install from "@/components/Install";
import { INSTALL_TEXT } from "@/lib/installText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${INSTALL_TEXT.ar.title} | ${T.ar.brand}`, description: INSTALL_TEXT.ar.lead, path: "/install" });
export default function Page() {
  return <Install lang="ar" />;
}
