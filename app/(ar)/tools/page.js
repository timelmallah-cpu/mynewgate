import { pageMeta } from "@/lib/site";
import Tools from "@/components/Tools";
import { TOOLS_TEXT } from "@/lib/tools";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${TOOLS_TEXT.ar.title} | ${T.ar.brand}`, description: TOOLS_TEXT.ar.lead, path: "/tools" });
export default function Page() {
  return <Tools lang="ar" />;
}
