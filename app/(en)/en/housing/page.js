import { pageMeta } from "@/lib/site";
import Housing from "@/components/Housing";
import { HOUSING_TEXT } from "@/lib/housing";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${HOUSING_TEXT.en.title} | ${T.en.brand}`, description: HOUSING_TEXT.en.lead, path: "/housing" });
export default function Page() {
  return <Housing lang="en" />;
}
