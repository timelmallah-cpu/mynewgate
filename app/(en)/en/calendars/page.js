import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import CalendarFeeds from "@/components/CalendarFeeds";

const title = "Deadlines calendar on your phone";
const lead = "Subscribe to a calendar of application deadlines for the country and field you care about; every new date reaches you by itself, with reminders two weeks and 3 days before.";
export const metadata = pageMeta("en", { title: `${title} | ${T.en.brand}`, description: lead, path: "/calendars" });

export default function Page() {
  return (
    <>
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
      <CalendarFeeds lang="en" />
    </>
  );
}
