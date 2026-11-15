import { pageMeta } from "@/lib/site";
import Gpa from "@/components/Gpa";
import { GPA_TEXT } from "@/lib/gpaText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${GPA_TEXT.ar.title} | ${T.ar.brand}`, description: GPA_TEXT.ar.lead, path: "/gpa" });
export default function Page() {
  return <Gpa lang="ar" />;
}
