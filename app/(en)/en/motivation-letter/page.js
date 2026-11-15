import { pageMeta } from "@/lib/site";
import MotivationLetter from "@/components/MotivationLetter";
import { LETTER_TEXT } from "@/lib/letterText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${LETTER_TEXT.en.title} | ${T.en.brand}`, description: LETTER_TEXT.en.lead, path: "/motivation-letter" });
export default function Page() {
  return <MotivationLetter lang="en" />;
}
