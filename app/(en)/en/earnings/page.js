import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import Earnings from "@/components/Earnings";
import { EARN_TEXT } from "@/lib/earningsText";

export const metadata = pageMeta("en", { title: `${EARN_TEXT.en.title} | ${T.en.brand}`, description: EARN_TEXT.en.lead, path: "/earnings" });

export default function Page() {
  return <Earnings lang="en" />;
}
