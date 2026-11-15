import { pageMeta } from "@/lib/site";
import Compare from "@/components/Compare";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `Compare programmes | ${T.en.brand}`, path: "/compare" });
export default function Page() {
  return <Compare lang="en" />;
}
