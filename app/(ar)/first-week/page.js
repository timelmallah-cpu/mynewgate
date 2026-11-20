import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { FirstWeek } from "@/components/Guides";
import { GUIDE_TEXT } from "@/lib/guides";

const s = GUIDE_TEXT.ar.first;
export const metadata = pageMeta("ar", { title: `${s.title} | ${T.ar.brand}`, description: s.lead, path: "/first-week" });

export default function Page() {
  return <FirstWeek lang="ar" />;
}
