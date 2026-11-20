import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { ET_TEXT } from "@/lib/englishTests";
import EnglishTests from "@/components/EnglishTests";

export const metadata = pageMeta("en", { title: `${ET_TEXT.en.title} | ${T.en.brand}`, description: ET_TEXT.en.lead, path: "/english-tests" });

export default function Page() {
  return <EnglishTests lang="en" />;
}
