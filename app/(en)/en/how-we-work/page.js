import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import HowWeWork from "@/components/HowWeWork";
export const metadata = pageMeta("en", { title: `How we collect information | ${T.en.brand}`, path: "/how-we-work" });
export default function Page() {
  return <HowWeWork lang="en" />;
}
