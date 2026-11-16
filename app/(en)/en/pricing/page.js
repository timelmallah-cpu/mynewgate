import { pageMeta } from "@/lib/site";
import Pricing from "@/components/Pricing";
import { PLAN_TEXT } from "@/lib/planText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${PLAN_TEXT.en.title} | ${T.en.brand}`, description: PLAN_TEXT.en.lead, path: "/pricing" });
export default function Page() {
  return <Pricing lang="en" />;
}
