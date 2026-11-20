import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { CheckOffer } from "@/components/Guides";
import { GUIDE_TEXT } from "@/lib/guides";

const s = GUIDE_TEXT.en.check;
export const metadata = pageMeta("en", { title: `${s.title} | ${T.en.brand}`, description: s.lead, path: "/check-offer" });

export default function Page() {
  return <CheckOffer lang="en" />;
}
