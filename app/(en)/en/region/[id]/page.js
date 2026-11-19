import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import Region from "@/components/Regions";
import { REGION_IDS, REGION_TEXT, regionById } from "@/lib/regions";

export const dynamicParams = false;
export const generateStaticParams = () => REGION_IDS.map((id) => ({ id }));

export async function generateMetadata({ params }) {
  const { id } = await params;
  const s = REGION_TEXT.en, n = s.names[id];
  const live = regionById(id).countries.length > 0;
  return pageMeta("en", { title: `${live ? s.title(n) : s.soonTitle(n)} | ${T.en.brand}`, description: live ? s.askLead : s.soonLead(n), path: `/region/${id}` });
}

export default async function Page({ params }) {
  const { id } = await params;
  return <Region id={id} lang="en" />;
}
