import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import HowWeWork from "@/components/HowWeWork";
export const metadata = pageMeta("ar", { title: `كيف نجمع المعلومات | ${T.ar.brand}`, path: "/how-we-work" });
export default function Page() {
  return <HowWeWork lang="ar" />;
}
