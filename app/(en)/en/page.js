import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import Landing from "@/components/Landing";
export const metadata = { title: { absolute: T.en.title }, ...pageMeta("en", { path: "/" }) };
export default function Page() {
  return <Landing lang="en" />;
}
