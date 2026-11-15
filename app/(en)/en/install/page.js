import { pageMeta } from "@/lib/site";
import Install from "@/components/Install";
import { INSTALL_TEXT } from "@/lib/installText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${INSTALL_TEXT.en.title} | ${T.en.brand}`, description: INSTALL_TEXT.en.lead, path: "/install" });
export default function Page() {
  return <Install lang="en" />;
}
