import { pageMeta } from "@/lib/site";
import After30 from "@/components/After30";
import { A30_TEXT } from "@/lib/after30";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${A30_TEXT.en.title} | ${T.en.brand}`, description: A30_TEXT.en.lead, path: "/after-30" });
export default function Page() {
  return <After30 lang="en" />;
}
