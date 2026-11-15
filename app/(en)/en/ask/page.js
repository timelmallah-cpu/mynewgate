import { pageMeta } from "@/lib/site";
import Assistant from "@/components/Assistant";
import { ASK_TEXT } from "@/lib/assistantText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${ASK_TEXT.en.title} | ${T.en.brand}`, description: ASK_TEXT.en.lead, path: "/ask" });
export default function Page() {
  return <Assistant lang="en" />;
}
