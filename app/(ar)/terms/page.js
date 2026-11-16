import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import Terms, { termsMeta } from "@/components/Terms";
export const metadata = pageMeta("ar", { title: `${termsMeta("ar").title} | ${T.ar.brand}`, path: "/terms" });
export default function Page() { return <Terms lang="ar" />; }
