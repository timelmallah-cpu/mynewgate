import StudyLanding, { landingParams, landingMeta } from "@/components/StudyLanding";

export const generateStaticParams = landingParams;
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return landingMeta(slug, "en");
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <StudyLanding slug={slug} lang="en" />;
}
