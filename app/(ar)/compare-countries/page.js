import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { CMP_TEXT } from "@/lib/countryCompare";
import { CompareHub } from "@/components/CountryCompare";

export const metadata = pageMeta("ar", { title: `${CMP_TEXT.ar.hub} | ${T.ar.brand}`, description: CMP_TEXT.ar.hubLead, path: "/compare-countries" });

export default function Page() {
  return <CompareHub lang="ar" />;
}
