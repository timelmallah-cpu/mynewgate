import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import Landing from "@/components/Landing";
export const metadata = { title: { absolute: T.ar.title }, ...pageMeta("ar", { path: "/" }) };
export default function Page() {
  return <Landing lang="ar" />;
}
