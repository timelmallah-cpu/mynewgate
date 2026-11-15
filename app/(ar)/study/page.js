import { pageMeta } from "@/lib/site";
import { StudyHub } from "@/components/StudyLanding";
import { LD_TEXT } from "@/lib/landings";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${LD_TEXT.ar.hub} | ${T.ar.brand}`, description: LD_TEXT.ar.hubLead, path: "/study" });
export default function Page() {
  return <StudyHub lang="ar" />;
}
