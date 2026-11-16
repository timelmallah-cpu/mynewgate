import { pageMeta } from "@/lib/site";
import { ACC } from "@/lib/accountText";
import LoginConfirm from "@/components/LoginConfirm";
export const metadata = { ...pageMeta("en", { title: ACC.en.confirmMeta, path: "/login/confirm" }), robots: { index: false }, referrer: "no-referrer" };
export default function Page() { return <LoginConfirm lang="en" />; }
