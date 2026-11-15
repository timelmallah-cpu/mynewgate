import { pageMeta } from "@/lib/site";
import MotivationLetter from "@/components/MotivationLetter";
import { LETTER_TEXT } from "@/lib/letterText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${LETTER_TEXT.ar.title} | ${T.ar.brand}`, description: LETTER_TEXT.ar.lead, path: "/motivation-letter" });
export default function Page() {
  return <MotivationLetter lang="ar" />;
}
