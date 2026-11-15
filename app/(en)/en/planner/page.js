import { pageMeta } from "@/lib/site";
import Planner from "@/components/Planner";
import { PL_TEXT } from "@/lib/plannerText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${PL_TEXT.en.title} | ${T.en.brand}`, description: PL_TEXT.en.lead, path: "/planner" });
export default function Page() {
  return <Planner lang="en" />;
}
