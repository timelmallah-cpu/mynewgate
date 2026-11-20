import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import MyPlan from "@/components/MyPlan";
export const metadata = pageMeta("ar", { title: `خطتي في دقيقة | ${T.ar.brand}`, path: "/my-plan" });
export default function Page() {
  return <MyPlan lang="ar" />;
}
