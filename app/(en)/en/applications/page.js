import { pageMeta } from "@/lib/site";
import Applications from "@/components/Applications";
import { APPS_TEXT } from "@/lib/appsText";
export const metadata = pageMeta("en", { title: APPS_TEXT.en.metaTitle, path: "/applications" });
export default function Page() {
  return <Applications lang="en" />;
}
