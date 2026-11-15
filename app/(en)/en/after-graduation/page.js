import AfterGrad from "@/components/AfterGrad";
import { PS_TEXT } from "@/lib/postStudy";
import { T } from "@/lib/i18n";
export const metadata = { title: `${PS_TEXT.en.pageTitle} | ${T.en.brand}` };
export default function Page() {
  return <AfterGrad lang="en" />;
}
