import { pageMeta } from "@/lib/site";
import Tools from "@/components/Tools";
import { TOOLS_TEXT } from "@/lib/tools";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${TOOLS_TEXT.en.title} | ${T.en.brand}`, description: TOOLS_TEXT.en.lead, path: "/tools" });
export default function Page() {
  return <Tools lang="en" />;
}
