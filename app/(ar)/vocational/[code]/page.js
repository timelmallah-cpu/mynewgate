import { VocationalCountry, vocParams, vocMeta } from "@/components/Vocational";
export const generateStaticParams = vocParams;
export const dynamicParams = false;
export async function generateMetadata({ params }) {
  const { code } = await params;
  return vocMeta(code, "ar");
}
export default async function Page({ params }) {
  const { code } = await params;
  return <VocationalCountry code={code} lang="ar" />;
}
