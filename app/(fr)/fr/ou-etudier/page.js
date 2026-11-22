import { FrQuizPage, frMeta } from "@/components/Fr";
export const metadata = frMeta({ title: "Où étudier ? Trouvez votre programme en anglais | Bawabat AlDirasa", description: "Cinq questions (niveau, pays, domaine, budget, durée) pour trouver des programmes publics enseignés en anglais à l'étranger, du moins cher au plus cher.", path: "/ou-etudier", ar: "/quiz", en: "/quiz" });
export default function Page() {
  return <FrQuizPage />;
}
