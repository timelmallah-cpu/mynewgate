import { notFound } from "next/navigation";
import { VisaDest } from "@/components/Visas";
import { visasMeta, DEST_SLUGS } from "@/lib/visasMeta";
import { DEST_BY_SLUG } from "@/lib/visit";

export const dynamicParams = false;
export const generateStaticParams = () => DEST_SLUGS.map((slug) => ({ slug }));
export async function generateMetadata({ params }) {
  const { slug } = await params;
  return visasMeta("en", slug);
}
export default async function Page({ params }) {
  const { slug } = await params;
  const d = DEST_BY_SLUG[slug];
  if (!d) notFound();
  return <VisaDest d={d} lang="en" />;
}
