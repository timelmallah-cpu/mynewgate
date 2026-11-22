import { FrCostPage, frMeta } from "@/components/Fr";
export const metadata = frMeta({ title: "Combien coûtent les études à l'étranger ? Calculateur | Bawabat AlDirasa", description: "Frais de scolarité, coût de la vie, assurance et frais de visa par pays : un calculateur à partir des chiffres officiels, à ajuster selon votre cas.", path: "/cout", ar: "/countries", en: "/countries" });
export default function Page() {
  return <FrCostPage />;
}
