import Contact from "@/components/Contact";
import { T } from "@/lib/i18n";
export const metadata = { title: T.en.contact.metaTitle };
export default function Page() {
  return <Contact lang="en" />;
}
