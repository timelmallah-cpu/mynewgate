import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import MapPage, { MAP_PAGE } from "@/components/MapPage";

export const metadata = pageMeta("en", { title: `${MAP_PAGE.en.title} | ${T.en.brand}`, description: MAP_PAGE.en.lead, path: "/map" });

export default function Page() {
  return <MapPage lang="en" />;
}
