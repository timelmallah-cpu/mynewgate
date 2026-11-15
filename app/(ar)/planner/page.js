import { pageMeta } from "@/lib/site";
import Planner from "@/components/Planner";
import { PL_TEXT } from "@/lib/plannerText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${PL_TEXT.ar.title} | ${T.ar.brand}`, description: PL_TEXT.ar.lead, path: "/planner" });
export default function Page() {
  return <Planner lang="ar" />;
}
