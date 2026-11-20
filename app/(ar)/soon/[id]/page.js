import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import SoonSection from "@/components/Sections";
import { SECTION_IDS, SECTION_TEXT } from "@/lib/sections";

export const dynamicParams = false;
export const generateStaticParams = () => SECTION_IDS.map((id) => ({ id }));

export async function generateMetadata({ params }) {
  const { id } = await params;
  const s = SECTION_TEXT.ar;
  return pageMeta("ar", { title: `${s.pageTitle(s.names[id])} | ${T.ar.brand}`, description: s.blurbs[id], path: `/soon/${id}` });
}

export default async function Page({ params }) {
  const { id } = await params;
  return <SoonSection id={id} lang="ar" />;
}
