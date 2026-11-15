import { pageMeta } from "@/lib/site";
import Compare from "@/components/Compare";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `قارن البرامج | ${T.ar.brand}`, path: "/compare" });
export default function Page() {
  return <Compare lang="ar" />;
}
