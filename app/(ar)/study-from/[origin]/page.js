import { pageMeta } from "@/lib/site";
import { COUNTRY_IDS } from "@/lib/options";
import { T } from "@/lib/i18n";
import { FROM, FROM_SLUGS, FROM_TEXT } from "@/lib/fromOrigin";
import { FromHub } from "@/components/FromOrigin";

export const generateStaticParams = () => FROM_SLUGS.map((origin) => ({ origin }));
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { origin } = await params;
  const f = FROM[origin];
  if (!f) return {};
  const s = FROM_TEXT.ar;
  return pageMeta("ar", { title: `${s.hubTitle(f.ar)} | ${T.ar.brand}`, description: s.hubLead(f.ar, COUNTRY_IDS.length), path: `/study-from/${origin}` });
}

export default async function Page({ params }) {
  const { origin } = await params;
  return <FromHub origin={origin} lang="ar" />;
}
