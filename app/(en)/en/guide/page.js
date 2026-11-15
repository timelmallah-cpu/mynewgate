import { pageMeta } from "@/lib/site";
import Guide from "@/components/Guide";
import { GUIDE_TEXT } from "@/lib/guide";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${GUIDE_TEXT.en.title} | ${T.en.brand}`, description: GUIDE_TEXT.en.lead, path: "/guide" });
export default function Page() {
  return <Guide lang="en" />;
}
