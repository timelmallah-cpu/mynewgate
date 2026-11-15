import { pageMeta } from "@/lib/site";
import Institutes from "@/components/Institutes";
import { INST_TEXT } from "@/lib/institutes";
import { T } from "@/lib/i18n";
export const revalidate = 86400;
export const metadata = pageMeta("ar", { title: `${INST_TEXT.ar.title} | ${T.ar.brand}`, description: INST_TEXT.ar.lead, path: "/institutes" });
export default function Page() {
  return <Institutes lang="ar" />;
}
