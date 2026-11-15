import { pageMeta } from "@/lib/site";
import Privacy, { privacyMeta } from "@/components/Privacy";
export const metadata = { ...privacyMeta("ar"), ...pageMeta("ar", { title: privacyMeta("ar").title, path: "/privacy" }) };
export default function Page() { return <Privacy lang="ar" />; }
