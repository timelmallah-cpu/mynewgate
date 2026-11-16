import { pageMeta } from "@/lib/site";
import UniversityEmail from "@/components/UniversityEmail";
import { EMAIL_TEXT } from "@/lib/emailText";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${EMAIL_TEXT.en.title} | ${T.en.brand}`, description: EMAIL_TEXT.en.lead, path: "/university-email" });
export default function Page() {
  return <UniversityEmail lang="en" />;
}
