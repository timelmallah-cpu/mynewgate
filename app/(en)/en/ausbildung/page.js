import { pageMeta } from "@/lib/site";
import Ausbildung from "@/components/Ausbildung";
import { AUSB } from "@/lib/ausbildung";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${AUSB.en.title} | ${T.en.brand}`, description: AUSB.en.lead, path: "/ausbildung" });
export default function Page() {
  return <Ausbildung lang="en" />;
}
