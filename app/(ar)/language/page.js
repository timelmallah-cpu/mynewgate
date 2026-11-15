import { pageMeta } from "@/lib/site";
import Language from "@/components/Language";
import { LANG_TEXT } from "@/lib/language";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${LANG_TEXT.ar.title} | ${T.ar.brand}`, description: LANG_TEXT.ar.lead, path: "/language" });
export default function Page() {
  return <Language lang="ar" />;
}
