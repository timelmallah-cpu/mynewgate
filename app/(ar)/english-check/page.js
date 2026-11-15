import { pageMeta } from "@/lib/site";
import EnglishCheck from "@/components/EnglishCheck";
import { EC_TEXT } from "@/lib/englishText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${EC_TEXT.ar.title} | ${T.ar.brand}`, description: EC_TEXT.ar.lead, path: "/english-check" });
export default function Page() {
  return <EnglishCheck lang="ar" />;
}
