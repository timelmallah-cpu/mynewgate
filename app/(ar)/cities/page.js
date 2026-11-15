import { pageMeta } from "@/lib/site";
import { CityIndex } from "@/components/City";
import { CITY_TEXT } from "@/lib/cities";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${CITY_TEXT.ar.indexTitle} | ${T.ar.brand}`, description: CITY_TEXT.ar.indexLead, path: "/cities" });
export default function Page() {
  return <CityIndex lang="ar" />;
}
