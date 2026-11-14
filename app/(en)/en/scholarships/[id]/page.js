import Scholarship, { schParams, schMeta } from "@/components/Scholarship";

export const generateStaticParams = schParams;
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { id } = await params;
  return schMeta(id, "en");
}

export default async function Page({ params }) {
  const { id } = await params;
  return <Scholarship id={id} lang="en" />;
}
