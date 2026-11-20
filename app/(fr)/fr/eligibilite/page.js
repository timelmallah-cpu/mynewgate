import { FrEligibilityPage, frMeta } from "@/components/Fr";
export const metadata = frMeta({ title: "Suis-je admissible ? Vérifiez vos chances | Bawabat AlDirasa", description: "Comparez votre note, votre anglais et votre budget avec les conditions publiées des programmes en anglais à l'étranger.", path: "/eligibilite", ar: "/eligibility", en: "/eligibility" });
export default function Page() {
  return <FrEligibilityPage />;
}
