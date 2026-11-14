import Scholarships from "@/components/Scholarships";
import { T } from "@/lib/i18n";
export const metadata = { title: T.ar.sch.metaTitle };
export default function Page() {
  return <Scholarships lang="ar" />;
}
