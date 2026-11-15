import Guide from "@/components/Guide";
import { GUIDE_TEXT } from "@/lib/guide";
import { T } from "@/lib/i18n";
export const metadata = { title: `${GUIDE_TEXT.en.title} | ${T.en.brand}` };
export default function Page() {
  return <Guide lang="en" />;
}
