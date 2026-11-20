import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import CalendarFeeds from "@/components/CalendarFeeds";

const title = "تقويم المواعيد على هاتفك";
const lead = "اشترك في تقويم بمواعيد التقديم للدولة والمجال الذي يهمك، ويصلك كل موعد جديد وحده مع تذكير قبله بأسبوعين و3 أيام.";
export const metadata = pageMeta("ar", { title: `${title} | ${T.ar.brand}`, description: lead, path: "/calendars" });

export default function Page() {
  return (
    <>
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
      <CalendarFeeds lang="ar" />
    </>
  );
}
