import { pageMeta } from "@/lib/site";
import Privacy, { privacyMeta } from "@/components/Privacy";
export const metadata = { ...privacyMeta("en"), ...pageMeta("en", { title: privacyMeta("en").title, path: "/privacy" }) };
export default function Page() { return <Privacy lang="en" />; }
