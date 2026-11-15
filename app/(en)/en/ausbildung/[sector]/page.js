import AusbildungSector, { sectorParams, sectorMeta } from "@/components/AusbildungSector";
export const generateStaticParams = sectorParams;
export const dynamicParams = false;
export async function generateMetadata({ params }) {
  const { sector } = await params;
  return sectorMeta(sector, "en");
}
export default async function Page({ params }) {
  const { sector } = await params;
  return <AusbildungSector slug={sector} lang="en" />;
}
