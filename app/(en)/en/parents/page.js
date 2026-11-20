import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { Parents } from "@/components/Guides";
import { GUIDE_TEXT } from "@/lib/guides";

const s = GUIDE_TEXT.en.parents;
export const metadata = pageMeta("en", { title: `${s.title} | ${T.en.brand}`, description: s.lead, path: "/parents" });

export default function Page() {
  return <Parents lang="en" />;
}
