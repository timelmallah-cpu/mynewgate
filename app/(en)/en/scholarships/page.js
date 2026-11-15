import { pageMeta } from "@/lib/site";
import Scholarships from "@/components/Scholarships";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: T.en.sch.metaTitle, path: "/scholarships" });
export default function Page() {
  return <Scholarships lang="en" />;
}
