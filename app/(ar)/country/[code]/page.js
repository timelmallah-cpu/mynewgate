import Country, { countryParams, countryMeta } from "@/components/Country";

export const generateStaticParams = countryParams;
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { code } = await params;
  return countryMeta(code, "ar");
}

export default async function Page({ params }) {
  const { code } = await params;
  return <Country code={code} lang="ar" />;
}
