import { pageMeta } from "@/lib/site";
import SchoolCert from "@/components/SchoolCert";
import { CERT_TEXT } from "@/lib/schoolCert";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${CERT_TEXT.ar.title} | ${T.ar.brand}`, description: CERT_TEXT.ar.lead, path: "/school-certificate" });
export default function Page() {
  return <SchoolCert lang="ar" />;
}
