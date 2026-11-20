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
  const [a, b] = p.map((c) => T.en.countries[c]);
  return pageMeta("en", { title: `${CMP_TEXT.en.title(a, b)} | ${T.en.brand}`, description: CMP_TEXT.en.lead(a, b), path: `/compare-countries/${slug}` });
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <ComparePair slug={slug} lang="en" />;
}
