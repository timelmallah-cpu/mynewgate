import Programme, { staticParams, programmeMeta } from "@/components/Programme";

export const generateStaticParams = staticParams;

export async function generateMetadata({ params }) {
  const { id } = await params;
  return programmeMeta(id, "ar");
}

export default async function Page({ params }) {
  const { id } = await params;
  return <Programme id={id} lang="ar" />;
}
