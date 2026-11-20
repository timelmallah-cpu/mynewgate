import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import Earnings from "@/components/Earnings";
import { EARN_TEXT } from "@/lib/earningsText";

export const metadata = pageMeta("ar", { title: `${EARN_TEXT.ar.title} | ${T.ar.brand}`, description: EARN_TEXT.ar.lead, path: "/earnings" });

export default function Page() {
  return <Earnings lang="ar" />;
}
