import { pageMeta } from "@/lib/site";
import { ACC } from "@/lib/accountText";
import Login from "@/components/Login";
export const metadata = { ...pageMeta("ar", { title: ACC.ar.loginMeta, path: "/login" }), robots: { index: false } };
export default function Page() { return <Login lang="ar" />; }
