import { pageMeta } from "@/lib/site";
import Foundation from "@/components/Foundation";
import { FOUND_TEXT } from "@/lib/foundation";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${FOUND_TEXT.ar.title} | ${T.ar.brand}`, description: FOUND_TEXT.ar.lead, path: "/foundation" });
export default function Page() {
  return <Foundation lang="ar" />;
}
