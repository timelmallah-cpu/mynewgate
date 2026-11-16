import { pageMeta } from "@/lib/site";
import After30 from "@/components/After30";
import { A30_TEXT } from "@/lib/after30";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${A30_TEXT.ar.title} | ${T.ar.brand}`, description: A30_TEXT.ar.lead, path: "/after-30" });
export default function Page() {
  return <After30 lang="ar" />;
}
