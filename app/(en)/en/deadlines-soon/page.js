import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import DeadlinesSoon, { DS_TEXT } from "@/components/DeadlinesSoon";

export const revalidate = 43200;
export const metadata = pageMeta("en", { title: `${DS_TEXT.en.title} | ${T.en.brand}`, description: DS_TEXT.en.lead, path: "/deadlines-soon" });

export default function Page() {
  return <DeadlinesSoon lang="en" />;
}
