import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { PAIRS, pairSlug, pairBySlug, CMP_TEXT } from "@/lib/countryCompare";
import { ComparePair } from "@/components/CountryCompare";

export const generateStaticParams = () => PAIRS.map((p) => ({ slug: pairSlug(p) }));
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const p = pairBySlug(slug);
  if (!p) return {};
  const [a, b] = p.map((c) => T.ar.countries[c]);
  return pageMeta("ar", { title: `${CMP_TEXT.ar.title(a, b)} | ${T.ar.brand}`, description: CMP_TEXT.ar.lead(a, b), path: `/compare-countries/${slug}` });
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ComparePair slug={slug} lang="ar" />;
}
