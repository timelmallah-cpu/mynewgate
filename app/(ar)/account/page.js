import { pageMeta } from "@/lib/site";
import { ACC } from "@/lib/accountText";
import Account from "@/components/Account";
export const metadata = { ...pageMeta("ar", { title: ACC.ar.accMeta, path: "/account" }), robots: { index: false } };
export default function Page() { return <Account lang="ar" />; }
