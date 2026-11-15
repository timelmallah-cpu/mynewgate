import Ausbildung from "@/components/Ausbildung";
import { AUSB } from "@/lib/ausbildung";
import { T } from "@/lib/i18n";
export const metadata = { title: `${AUSB.ar.title} | ${T.ar.brand}` };
export default function Page() {
  return <Ausbildung lang="ar" />;
}
