import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { ET_TEXT } from "@/lib/englishTests";
import EnglishTests from "@/components/EnglishTests";

export const metadata = pageMeta("ar", { title: `${ET_TEXT.ar.title} | ${T.ar.brand}`, description: ET_TEXT.ar.lead, path: "/english-tests" });

export default function Page() {
  return <EnglishTests lang="ar" />;
}
