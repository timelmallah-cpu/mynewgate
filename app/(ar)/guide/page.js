import { pageMeta } from "@/lib/site";
import Guide from "@/components/Guide";
import { GUIDE_TEXT } from "@/lib/guide";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${GUIDE_TEXT.ar.title} | ${T.ar.brand}`, description: GUIDE_TEXT.ar.lead, path: "/guide" });
export default function Page() {
  return <Guide lang="ar" />;
}
