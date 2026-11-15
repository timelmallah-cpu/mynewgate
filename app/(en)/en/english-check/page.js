import { pageMeta } from "@/lib/site";
import EnglishCheck from "@/components/EnglishCheck";
import { EC_TEXT } from "@/lib/englishText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${EC_TEXT.en.title} | ${T.en.brand}`, description: EC_TEXT.en.lead, path: "/english-check" });
export default function Page() {
  return <EnglishCheck lang="en" />;
}
