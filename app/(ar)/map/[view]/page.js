import { notFound } from "next/navigation";
import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { VIEWS } from "@/lib/mapData";
import MapPage, { MAP_PAGE } from "@/components/MapPage";

export const dynamicParams = false;
export const generateStaticParams = () => VIEWS.filter((v) => v.id !== "europe").map((v) => ({ view: v.id }));

export async function generateMetadata({ params }) {
  const { view } = await params;
  const v = VIEWS.find((x) => x.id === view);
  return pageMeta("ar", { title: `${MAP_PAGE.ar.title}: ${v?.ar} | ${T.ar.brand}`, description: MAP_PAGE.ar.lead, path: `/map/${view}` });
}

export default async function Page({ params }) {
  const { view } = await params;
  if (!VIEWS.some((v) => v.id === view && v.id !== "europe")) notFound();
  return <MapPage lang="ar" view={view} />;
}
