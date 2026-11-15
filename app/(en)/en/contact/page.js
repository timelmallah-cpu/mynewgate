import { pageMeta } from "@/lib/site";
import Contact from "@/components/Contact";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: T.en.contact.metaTitle, path: "/contact" });
export default function Page() {
  return <Contact lang="en" />;
}
