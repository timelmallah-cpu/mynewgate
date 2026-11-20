import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { FirstWeek } from "@/components/Guides";
import { GUIDE_TEXT } from "@/lib/guides";

const s = GUIDE_TEXT.en.first;
export const metadata = pageMeta("en", { title: `${s.title} | ${T.en.brand}`, description: s.lead, path: "/first-week" });

export default function Page() {
  return <FirstWeek lang="en" />;
}
