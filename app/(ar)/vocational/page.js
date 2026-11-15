import Vocational from "@/components/Vocational";
import { VOC_TEXT } from "@/lib/vocational";
import { T } from "@/lib/i18n";
export const metadata = { title: `${VOC_TEXT.ar.title} | ${T.ar.brand}` };
export default function Page() {
  return <Vocational lang="ar" />;
}
