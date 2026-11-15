import { pageMeta } from "@/lib/site";
import AfterGrad from "@/components/AfterGrad";
import { PS_TEXT } from "@/lib/postStudy";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${PS_TEXT.ar.pageTitle} | ${T.ar.brand}`, description: PS_TEXT.ar.lead, path: "/after-graduation" });
export default function Page() {
  return <AfterGrad lang="ar" />;
}
