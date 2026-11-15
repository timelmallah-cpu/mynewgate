import { pageMeta } from "@/lib/site";
import Subscribed from "@/components/Subscribed";
export const metadata = pageMeta("ar", { title: "تم تأكيد اشتراكك | Subscription confirmed", robots: { index: false }, path: "/subscribed" });
export default function Page() { return <Subscribed />; }
