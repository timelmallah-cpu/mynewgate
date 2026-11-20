import { notFound } from "next/navigation";
import { VisaDest, VisaRoute, NomadHub, NomadPage } from "@/components/Visas";
import { NOMAD_BY_SLUG, NOMAD_HUB } from "@/lib/nomadVisas";
import { visasMeta, DEST_SLUGS } from "@/lib/visasMeta";
import { DEST_BY_SLUG } from "@/lib/visit";
import { ROUTE_BY_SLUG } from "@/lib/visaRoutes";

export const dynamicParams = false;
export const generateStaticParams = () => DEST_SLUGS.map((slug) => ({ slug }));
export async function generateMetadata({ params }) {
  const { slug } = await params;
  return visasMeta("en", slug);
}
export default async function Page({ params }) {
  const { slug } = await params;
  if (slug === NOMAD_HUB) return <NomadHub lang="en" />;
  if (NOMAD_BY_SLUG[slug]) return <NomadPage n={NOMAD_BY_SLUG[slug]} lang="en" />;
  if (ROUTE_BY_SLUG[slug]) return <VisaRoute r={ROUTE_BY_SLUG[slug]} lang="en" />;
  const d = DEST_BY_SLUG[slug];
  if (!d) notFound();
  return <VisaDest d={d} lang="en" />;
}
