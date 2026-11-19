import { pageMeta } from "@/lib/site";
import Journey from "@/components/Journey";
import { JOURNEY_TEXT } from "@/lib/journeyText";
export const metadata = pageMeta("ar", { title: JOURNEY_TEXT.ar.metaTitle, path: "/journey" });
export default function Page() {
  return <Journey lang="ar" />;
}
