import { pageMeta } from "@/lib/site";
import Foundation from "@/components/Foundation";
import { FOUND_TEXT } from "@/lib/foundation";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${FOUND_TEXT.en.title} | ${T.en.brand}`, description: FOUND_TEXT.en.lead, path: "/foundation" });
export default function Page() {
  return <Foundation lang="en" />;
}
