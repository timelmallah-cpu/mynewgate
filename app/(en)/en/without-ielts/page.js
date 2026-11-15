import { pageMeta } from "@/lib/site";
import WithoutIelts from "@/components/WithoutIelts";
import { ALT_TEXT } from "@/lib/englishAlt";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${ALT_TEXT.en.title} | ${T.en.brand}`, description: ALT_TEXT.en.lead, path: "/without-ielts" });
export default function Page() {
  return <WithoutIelts lang="en" />;
}
