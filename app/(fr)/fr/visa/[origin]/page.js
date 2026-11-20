import { FrVisa, frMeta } from "@/components/Fr";
import { FR_ORIGINS } from "@/lib/visaFr";

export const generateStaticParams = () => Object.keys(FR_ORIGINS).map((origin) => ({ origin }));
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { origin } = await params;
  const o = FR_ORIGINS[origin];
  if (!o) return {};
  return frMeta({ title: `Visa étudiant pour les résidents ${o.from} | Bawabat AlDirasa`, description: `Où et comment déposer la demande de visa d'études depuis ${o.name === "Maroc" ? "le Maroc" : o.name === "Algérie" ? "l'Algérie" : "la Tunisie"}, pays par pays, avec la source officielle.`, path: `/visa/${origin}`, ar: "/visa", en: "/visa" });
}

export default async function Page({ params }) {
  const { origin } = await params;
  return <FrVisa origin={origin} />;
}
