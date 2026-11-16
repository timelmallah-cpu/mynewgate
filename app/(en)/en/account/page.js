import { pageMeta } from "@/lib/site";
import { ACC } from "@/lib/accountText";
import Account from "@/components/Account";
export const metadata = { ...pageMeta("en", { title: ACC.en.accMeta, path: "/account" }), robots: { index: false } };
export default function Page() { return <Account lang="en" />; }
