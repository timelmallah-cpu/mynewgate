import Link from "@/components/Link";
import { T } from "../lib/i18n";
import { SITE_URL } from "../lib/site";

// Opens the contact form prefilled with the page being reported.
export default function ReportLink({ lang, what, path }) {
  const t = T[lang];
  const detail = `${what}\n${SITE_URL}${path}`;
  return (
    <div className="report">
      <p>{t.reportNote}</p>
      <Link className="btn ghost small" href={`${t.base}/contact?report=${encodeURIComponent(detail)}#report`}>{t.reportBtn}</Link>
    </div>
  );
}
