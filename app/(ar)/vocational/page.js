import { pageMeta } from "@/lib/site";
import Vocational from "@/components/Vocational";
import { VOC_TEXT } from "@/lib/vocational";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${VOC_TEXT.ar.title} | ${T.ar.brand}`, description: VOC_TEXT.ar.lead, path: "/vocational" });
export default function Page() {
  return <Vocational lang="ar" />;
}
