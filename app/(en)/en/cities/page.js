import { pageMeta } from "@/lib/site";
import { CityIndex } from "@/components/City";
import { CITY_TEXT } from "@/lib/cities";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${CITY_TEXT.en.indexTitle} | ${T.en.brand}`, description: CITY_TEXT.en.indexLead, path: "/cities" });
export default function Page() {
  return <CityIndex lang="en" />;
}
