import { pageMeta } from "@/lib/site";
import UniversityEmail from "@/components/UniversityEmail";
import { EMAIL_TEXT } from "@/lib/emailText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${EMAIL_TEXT.ar.title} | ${T.ar.brand}`, description: EMAIL_TEXT.ar.lead, path: "/university-email" });
export default function Page() {
  return <UniversityEmail lang="ar" />;
}
