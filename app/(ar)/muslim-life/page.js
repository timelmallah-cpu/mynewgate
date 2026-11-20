import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { MuslimLife } from "@/components/Guides";
import { GUIDE_TEXT } from "@/lib/guides";

const s = GUIDE_TEXT.ar.muslim;
export const metadata = pageMeta("ar", { title: `${s.title} | ${T.ar.brand}`, description: s.lead, path: "/muslim-life" });

export default function Page() {
  return <MuslimLife lang="ar" />;
}
