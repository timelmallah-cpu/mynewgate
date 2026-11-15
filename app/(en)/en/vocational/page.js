import { pageMeta } from "@/lib/site";
import Vocational from "@/components/Vocational";
import { VOC_TEXT } from "@/lib/vocational";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${VOC_TEXT.en.title} | ${T.en.brand}`, description: VOC_TEXT.en.lead, path: "/vocational" });
export default function Page() {
  return <Vocational lang="en" />;
}
