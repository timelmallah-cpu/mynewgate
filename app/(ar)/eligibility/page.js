import { pageMeta } from "@/lib/site";
import Eligibility from "@/components/Eligibility";
import { EL_TEXT } from "@/lib/eligibilityText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${EL_TEXT.ar.title} | ${T.ar.brand}`, description: EL_TEXT.ar.lead, path: "/eligibility" });
export default function Page() {
  return <Eligibility lang="ar" />;
}
