import { pageMeta } from "@/lib/site";
import Housing from "@/components/Housing";
import { HOUSING_TEXT } from "@/lib/housing";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${HOUSING_TEXT.ar.title} | ${T.ar.brand}`, description: HOUSING_TEXT.ar.lead, path: "/housing" });
export default function Page() {
  return <Housing lang="ar" />;
}
