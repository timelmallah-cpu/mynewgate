import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import Updates from "@/components/Updates";
export const metadata = pageMeta("en", { title: `What's new | ${T.en.brand}`, path: "/updates" });
export default function Page() {
  return <Updates lang="en" />;
}
