import Shell from "@/components/Shell";
import { T } from "@/lib/i18n";

export const metadata = { title: T.en.title, description: T.en.description };

export default function Layout({ children }) {
  return <Shell lang="en">{children}</Shell>;
}
