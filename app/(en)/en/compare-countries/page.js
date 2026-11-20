import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { CMP_TEXT } from "@/lib/countryCompare";
import { CompareHub } from "@/components/CountryCompare";

export const metadata = pageMeta("en", { title: `${CMP_TEXT.en.hub} | ${T.en.brand}`, description: CMP_TEXT.en.hubLead, path: "/compare-countries" });

export default function Page() {
  return <CompareHub lang="en" />;
}
