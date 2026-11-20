import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { Parents } from "@/components/Guides";
import { GUIDE_TEXT } from "@/lib/guides";

const s = GUIDE_TEXT.ar.parents;
export const metadata = pageMeta("ar", { title: `${s.title} | ${T.ar.brand}`, description: s.lead, path: "/parents" });

export default function Page() {
  return <Parents lang="ar" />;
}
