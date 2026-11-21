import { notFound } from "next/navigation";
import { VisaPair } from "@/components/Visas";
import { PAIRS, pairOf } from "@/lib/visitPairs";
import { pairMeta } from "@/lib/visasMeta";

export const dynamicParams = false;
export const generateStaticParams = () => PAIRS;
export async function generateMetadata({ params }) {
  const { slug, nat } = await params;
  return pairMeta("en", slug, nat);
}
export default async function Page({ params }) {
  const { slug, nat } = await params;
  const p = pairOf(slug, nat);
  if (!p) notFound();
  return <VisaPair d={p.d} o={p.o} lang="en" />;
}
