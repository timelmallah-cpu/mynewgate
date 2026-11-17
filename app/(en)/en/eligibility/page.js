import { pageMeta } from "@/lib/site";
import Eligibility from "@/components/Eligibility";
import { EL_TEXT } from "@/lib/eligibilityText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${EL_TEXT.en.title} | ${T.en.brand}`, description: EL_TEXT.en.lead, path: "/eligibility" });
export default function Page() {
  return <Eligibility lang="en" />;
}
