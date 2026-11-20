import { FrVisaHub, frMeta } from "@/components/Fr";
export const metadata = frMeta({ title: "Visa étudiant depuis l'Algérie, le Maroc ou la Tunisie | Bawabat AlDirasa", description: "Où et comment déposer la demande de visa d'études, pays par pays, avec le lien officiel de rendez-vous.", path: "/visa", ar: "/visa", en: "/visa" });
export default function Page() {
  return <FrVisaHub />;
}
