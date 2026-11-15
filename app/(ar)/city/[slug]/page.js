import City, { cityParams, cityMeta } from "@/components/City";

export const generateStaticParams = cityParams;
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return cityMeta(slug, "ar");
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <City slug={slug} lang="ar" />;
}
