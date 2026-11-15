import { pageMeta } from "@/lib/site";
import Advertise from "@/components/Advertise";
import { ADV_TEXT } from "@/lib/institutes";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${ADV_TEXT.en.title} | ${T.en.brand}`, description: ADV_TEXT.en.lead, path: "/advertise" });
export default function Page() {
  return <Advertise lang="en" />;
}
