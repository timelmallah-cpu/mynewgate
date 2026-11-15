import { pageMeta } from "@/lib/site";
import Countries from "@/components/Countries";
import { CC_TEXT } from "@/lib/countriesText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${CC_TEXT.ar.title} | ${T.ar.brand}`, description: CC_TEXT.ar.lead, path: "/countries" });
export default function Page() {
  return <Countries lang="ar" />;
}
