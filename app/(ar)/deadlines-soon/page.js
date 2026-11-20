import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import DeadlinesSoon, { DS_TEXT } from "@/components/DeadlinesSoon";

export const revalidate = 43200;
export const metadata = pageMeta("ar", { title: `${DS_TEXT.ar.title} | ${T.ar.brand}`, description: DS_TEXT.ar.lead, path: "/deadlines-soon" });

export default function Page() {
  return <DeadlinesSoon lang="ar" />;
}
