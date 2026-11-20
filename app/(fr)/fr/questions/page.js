import { FrQuestions, frMeta } from "@/components/Fr";
export const metadata = frMeta({ title: "Questions fréquentes sur les études à l'étranger | Bawabat AlDirasa", description: "Pays les moins chers, études sans frais, travail pendant les études, séjour après le diplôme, argent pour le visa et bourses pour les étudiants arabes.", path: "/questions", ar: "/questions", en: "/questions" });
export default function Page() {
  return <FrQuestions />;
}
