import { pageMeta } from "@/lib/site";
import Language from "@/components/Language";
import { LANG_TEXT } from "@/lib/language";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${LANG_TEXT.en.title} | ${T.en.brand}`, description: LANG_TEXT.en.lead, path: "/language" });
export default function Page() {
  return <Language lang="en" />;
}
