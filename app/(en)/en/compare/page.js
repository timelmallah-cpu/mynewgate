import Compare from "@/components/Compare";
import { T } from "@/lib/i18n";
export const metadata = { title: `Compare programmes | ${T.en.brand}` };
export default function Page() {
  return <Compare lang="en" />;
}
