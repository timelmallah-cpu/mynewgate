import { pageMeta } from "@/lib/site";
import Visa from "@/components/Visa";
import { VISA_TEXT } from "@/lib/embassy";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${VISA_TEXT.ar.title} | ${T.ar.brand}`, description: VISA_TEXT.ar.lead, path: "/visa" });
export default function Page() {
  return <Visa lang="ar" />;
}
