import { pageMeta } from "@/lib/site";
import SchoolCert from "@/components/SchoolCert";
import { CERT_TEXT } from "@/lib/schoolCert";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${CERT_TEXT.en.title} | ${T.en.brand}`, description: CERT_TEXT.en.lead, path: "/school-certificate" });
export default function Page() {
  return <SchoolCert lang="en" />;
}
