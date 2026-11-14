import Shell from "@/components/Shell";
import { T } from "@/lib/i18n";

export const metadata = { title: T.ar.title, description: T.ar.description };

export default function Layout({ children }) {
  return <Shell lang="ar">{children}</Shell>;
}
