import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import Terms, { termsMeta } from "@/components/Terms";
export const metadata = pageMeta("en", { title: `${termsMeta("en").title} | ${T.en.brand}`, path: "/terms" });
export default function Page() { return <Terms lang="en" />; }
