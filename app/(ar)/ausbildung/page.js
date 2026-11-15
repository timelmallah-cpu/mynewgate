import { pageMeta } from "@/lib/site";
import Ausbildung from "@/components/Ausbildung";
import { AUSB } from "@/lib/ausbildung";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${AUSB.ar.title} | ${T.ar.brand}`, description: AUSB.ar.lead, path: "/ausbildung" });
export default function Page() {
  return <Ausbildung lang="ar" />;
}
