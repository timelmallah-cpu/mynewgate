import { pageMeta } from "@/lib/site";
import AppliedSciences from "@/components/AppliedSciences";
import { AS_TEXT } from "@/lib/appliedSciences";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${AS_TEXT.ar.title} | ${T.ar.brand}`, description: AS_TEXT.ar.lead, path: "/applied-sciences" });
export default function Page() {
  return <AppliedSciences lang="ar" />;
}
