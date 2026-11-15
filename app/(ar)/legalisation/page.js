import { pageMeta } from "@/lib/site";
import Legalisation from "@/components/Legalisation";
import { LEGAL_TEXT } from "@/lib/legalisationText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${LEGAL_TEXT.ar.title} | ${T.ar.brand}`, description: LEGAL_TEXT.ar.lead, path: "/legalisation" });
export default function Page() {
  return <Legalisation lang="ar" />;
}
