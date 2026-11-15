import Ausbildung from "@/components/Ausbildung";
import { AUSB } from "@/lib/ausbildung";
import { T } from "@/lib/i18n";
export const metadata = { title: `${AUSB.en.title} | ${T.en.brand}` };
export default function Page() {
  return <Ausbildung lang="en" />;
}
