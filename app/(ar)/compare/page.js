import Compare from "@/components/Compare";
import { T } from "@/lib/i18n";
export const metadata = { title: `قارن البرامج | ${T.ar.brand}` };
export default function Page() {
  return <Compare lang="ar" />;
}
