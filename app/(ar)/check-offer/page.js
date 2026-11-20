import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { CheckOffer } from "@/components/Guides";
import { GUIDE_TEXT } from "@/lib/guides";

const s = GUIDE_TEXT.ar.check;
export const metadata = pageMeta("ar", { title: `${s.title} | ${T.ar.brand}`, description: s.lead, path: "/check-offer" });

export default function Page() {
  return <CheckOffer lang="ar" />;
}
