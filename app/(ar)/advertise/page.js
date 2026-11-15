import { pageMeta } from "@/lib/site";
import Advertise from "@/components/Advertise";
import { ADV_TEXT } from "@/lib/institutes";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${ADV_TEXT.ar.title} | ${T.ar.brand}`, description: ADV_TEXT.ar.lead, path: "/advertise" });
export default function Page() {
  return <Advertise lang="ar" />;
}
