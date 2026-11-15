import { pageMeta } from "@/lib/site";
import Countries from "@/components/Countries";
import { CC_TEXT } from "@/lib/countriesText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${CC_TEXT.en.title} | ${T.en.brand}`, description: CC_TEXT.en.lead, path: "/countries" });
export default function Page() {
  return <Countries lang="en" />;
}
