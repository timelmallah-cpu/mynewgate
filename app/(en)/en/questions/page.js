import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { Q_TEXT } from "@/lib/questions";
import { QuestionsHub } from "@/components/Questions";
export const metadata = pageMeta("en", { title: `${Q_TEXT.en.hub} | ${T.en.brand}`, description: Q_TEXT.en.hubLead, path: "/questions" });
export default function Page() {
  return <QuestionsHub lang="en" />;
}
