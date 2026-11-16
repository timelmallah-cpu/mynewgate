import { pageMeta } from "@/lib/site";
import AppliedSciences from "@/components/AppliedSciences";
import { AS_TEXT } from "@/lib/appliedSciences";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${AS_TEXT.en.title} | ${T.en.brand}`, description: AS_TEXT.en.lead, path: "/applied-sciences" });
export default function Page() {
  return <AppliedSciences lang="en" />;
}
