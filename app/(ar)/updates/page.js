import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import Updates from "@/components/Updates";
export const metadata = pageMeta("ar", { title: `آخر التحديثات | ${T.ar.brand}`, path: "/updates" });
export default function Page() {
  return <Updates lang="ar" />;
}
