import { pageMeta } from "@/lib/site";
import Legalisation from "@/components/Legalisation";
import { LEGAL_TEXT } from "@/lib/legalisationText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${LEGAL_TEXT.en.title} | ${T.en.brand}`, description: LEGAL_TEXT.en.lead, path: "/legalisation" });
export default function Page() {
  return <Legalisation lang="en" />;
}
