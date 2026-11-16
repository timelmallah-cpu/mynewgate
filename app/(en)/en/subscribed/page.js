import { pageMeta } from "@/lib/site";
import Subscribed from "@/components/Subscribed";
export const metadata = pageMeta("en", { title: "Subscription confirmed | Bawabat Alsafar", robots: { index: false }, path: "/subscribed" });
export default function Page() { return <Subscribed fixed="en" />; }
