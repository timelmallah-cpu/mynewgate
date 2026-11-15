import { pageMeta } from "@/lib/site";
import Institutes from "@/components/Institutes";
import { INST_TEXT } from "@/lib/institutes";
import { T } from "@/lib/i18n";
export const revalidate = 86400;
export const metadata = pageMeta("en", { title: `${INST_TEXT.en.title} | ${T.en.brand}`, description: INST_TEXT.en.lead, path: "/institutes" });
export default function Page() {
  return <Institutes lang="en" />;
}
