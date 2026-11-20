import { FrCountry, frMeta } from "@/components/Fr";
import { FR_COUNTRY_IDS, frIn, frCountry } from "@/lib/fr";
export const generateStaticParams = () => FR_COUNTRY_IDS.map((code) => ({ code }));
export const dynamicParams = false;
export async function generateMetadata({ params }) {
  const { code } = await params;
  const k = frCountry(code).list.length;
  return frMeta({ title: `Étudier ${frIn(code)} : frais, visa, travail | Bawabat AlDirasa`, description: `${k} programmes en anglais ${frIn(code)} dans les universités publiques : frais pour les étudiants hors UE, argent pour le visa, travail pendant les études et séjour après le diplôme.`, path: `/pays/${code}`, ar: `/country/${code}`, en: `/country/${code}` });
}
export default async function Page({ params }) {
  const { code } = await params;
  return <FrCountry code={code} />;
}
