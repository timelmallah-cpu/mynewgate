import { pageMeta } from "@/lib/site";
import Scholarships from "@/components/Scholarships";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: T.ar.sch.metaTitle, path: "/scholarships" });
export default function Page() {
  return <Scholarships lang="ar" />;
}
