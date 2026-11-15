import { pageMeta } from "@/lib/site";
import Assistant from "@/components/Assistant";
import { ASK_TEXT } from "@/lib/assistantText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${ASK_TEXT.ar.title} | ${T.ar.brand}`, description: ASK_TEXT.ar.lead, path: "/ask" });
export default function Page() {
  return <Assistant lang="ar" />;
}
