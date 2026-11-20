import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { MuslimLife } from "@/components/Guides";
import { GUIDE_TEXT } from "@/lib/guides";

const s = GUIDE_TEXT.en.muslim;
export const metadata = pageMeta("en", { title: `${s.title} | ${T.en.brand}`, description: s.lead, path: "/muslim-life" });

export default function Page() {
  return <MuslimLife lang="en" />;
}
