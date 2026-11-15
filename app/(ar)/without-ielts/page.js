import { pageMeta } from "@/lib/site";
import WithoutIelts from "@/components/WithoutIelts";
import { ALT_TEXT } from "@/lib/englishAlt";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${ALT_TEXT.ar.title} | ${T.ar.brand}`, description: ALT_TEXT.ar.lead, path: "/without-ielts" });
export default function Page() {
  return <WithoutIelts lang="ar" />;
}
