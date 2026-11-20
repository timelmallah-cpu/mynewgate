import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { Q_TEXT } from "@/lib/questions";
import { QuestionsHub } from "@/components/Questions";
export const metadata = pageMeta("ar", { title: `${Q_TEXT.ar.hub} | ${T.ar.brand}`, description: Q_TEXT.ar.hubLead, path: "/questions", fr: "/questions" });
export default function Page() {
  return <QuestionsHub lang="ar" />;
}
