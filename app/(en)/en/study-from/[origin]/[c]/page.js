import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { COUNTRY_IDS } from "@/lib/options";
import { FROM, FROM_SLUGS, FROM_TEXT } from "@/lib/fromOrigin";
import { FromCountry } from "@/components/FromOrigin";

export const generateStaticParams = () => FROM_SLUGS.flatMap((origin) => COUNTRY_IDS.map((c) => ({ origin, c })));
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { origin, c } = await params;
  const f = FROM[origin];
  if (!f || !COUNTRY_IDS.includes(c)) return {};
  const s = FROM_TEXT.en;
  const cn = T.en.countries[c];
  return pageMeta("en", { title: `${s.title(cn, f.en)} | ${T.en.brand}`, description: s.lead(cn, f.en), path: `/study-from/${origin}/${c}` });
}

export default async function Page({ params }) {
  const { origin, c } = await params;
  return <FromCountry origin={origin} c={c} lang="en" />;
}
