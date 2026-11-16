import { pageMeta } from "@/lib/site";
import { ACC } from "@/lib/accountText";
import Login from "@/components/Login";
export const metadata = { ...pageMeta("en", { title: ACC.en.loginMeta, path: "/login" }), robots: { index: false } };
export default function Page() { return <Login lang="en" />; }
