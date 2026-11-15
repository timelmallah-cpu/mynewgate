import { pageMeta } from "@/lib/site";
import Visa from "@/components/Visa";
import { VISA_TEXT } from "@/lib/embassy";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${VISA_TEXT.en.title} | ${T.en.brand}`, description: VISA_TEXT.en.lead, path: "/visa" });
export default function Page() {
  return <Visa lang="en" />;
}
