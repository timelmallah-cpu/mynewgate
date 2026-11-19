import { pageMeta } from "@/lib/site";
import Journey from "@/components/Journey";
import { JOURNEY_TEXT } from "@/lib/journeyText";
export const metadata = pageMeta("en", { title: JOURNEY_TEXT.en.metaTitle, path: "/journey" });
export default function Page() {
  return <Journey lang="en" />;
}
