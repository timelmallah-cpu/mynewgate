import { pageMeta } from "@/lib/site";
import { StudyHub } from "@/components/StudyLanding";
import { LD_TEXT } from "@/lib/landings";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${LD_TEXT.en.hub} | ${T.en.brand}`, description: LD_TEXT.en.hubLead, path: "/search" });
export default function Page() {
  return <StudyHub lang="en" />;
}
