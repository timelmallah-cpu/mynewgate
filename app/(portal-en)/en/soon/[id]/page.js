import { pageMeta } from "@/lib/site";
import { SectionPortal } from "@/components/Portal";
import { SECTION_IDS, SECTION_TEXT } from "@/lib/sections";

export const dynamicParams = false;
export const generateStaticParams = () => SECTION_IDS.map((id) => ({ id }));

export async function generateMetadata({ params }) {
  const { id } = await params;
  const s = SECTION_TEXT.en;
  return pageMeta("en", { title: `${s.pageTitle(s.names[id])} | Bawabat AlSafar`, description: s.blurbs[id], path: `/soon/${id}` });
}

export default async function Page({ params }) {
  const { id } = await params;
  return <SectionPortal id={id} lang="en" />;
}
