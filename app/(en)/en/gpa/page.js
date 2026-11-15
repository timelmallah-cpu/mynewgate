import { pageMeta } from "@/lib/site";
import Gpa from "@/components/Gpa";
import { GPA_TEXT } from "@/lib/gpaText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${GPA_TEXT.en.title} | ${T.en.brand}`, description: GPA_TEXT.en.lead, path: "/gpa" });
export default function Page() {
  return <Gpa lang="en" />;
}
