import { pageMeta } from "@/lib/site";
import { ACC } from "@/lib/accountText";
import LoginConfirm from "@/components/LoginConfirm";
export const metadata = { ...pageMeta("ar", { title: ACC.ar.confirmMeta, path: "/login/confirm" }), robots: { index: false }, referrer: "no-referrer" };
export default function Page() { return <LoginConfirm lang="ar" />; }
