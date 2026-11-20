import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import MyPlan from "@/components/MyPlan";
export const metadata = pageMeta("en", { title: `My plan in a minute | ${T.en.brand}`, path: "/my-plan" });
export default function Page() {
  return <MyPlan lang="en" />;
}
