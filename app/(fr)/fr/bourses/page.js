import { FrScholarships, frMeta } from "@/components/Fr";
export const metadata = frMeta({ title: "Bourses entièrement financées pour les étudiants arabes | Bawabat AlDirasa", description: "Bourses qui couvrent les frais de scolarité et la vie, avec l'admissibilité pour l'Algérie, le Maroc et la Tunisie et les dates limites.", path: "/bourses", ar: "/scholarships", en: "/scholarships" });
export default function Page() {
  return <FrScholarships />;
}
