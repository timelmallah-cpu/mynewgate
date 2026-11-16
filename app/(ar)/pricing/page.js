import { pageMeta } from "@/lib/site";
import Pricing from "@/components/Pricing";
import { PLAN_TEXT } from "@/lib/planText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${PLAN_TEXT.ar.title} | ${T.ar.brand}`, description: PLAN_TEXT.ar.lead, path: "/pricing" });
export default function Page() {
  return <Pricing lang="ar" />;
}
