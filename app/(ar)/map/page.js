import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import MapPage, { MAP_PAGE } from "@/components/MapPage";

export const metadata = pageMeta("ar", { title: `${MAP_PAGE.ar.title} | ${T.ar.brand}`, description: MAP_PAGE.ar.lead, path: "/map" });

export default function Page() {
  return <MapPage lang="ar" />;
}
