import Link from "next/link";
import { T } from "../lib/i18n";
import LangSwitch from "./LangSwitch";
import "@fontsource-variable/readex-pro/index.css";
import "@fontsource/ibm-plex-sans-arabic/arabic-400.css";
import "@fontsource/ibm-plex-sans-arabic/arabic-600.css";
import "@fontsource/ibm-plex-sans-arabic/latin-400.css";
import "@fontsource/ibm-plex-sans-arabic/latin-600.css";
import "../app/globals.css";

// The brand mark: an arched gate with its keystone.
function Mark() {
  return (
    <svg width="26" height="30" viewBox="0 0 26 30" aria-hidden="true">
      <path d="M2 30V13a11 11 0 0 1 22 0v17" fill="none" stroke="#13234b" strokeWidth="3.2" />
      <rect x="10" y="-1" width="6" height="6" rx="1" transform="rotate(45 13 2)" fill="#e9b949" />
    </svg>
  );
}

// Root <html> for one language. Each language has its own root layout so
// lang/dir are correct in the server-rendered HTML.
export default function Shell({ lang, children }) {
  const t = T[lang];
  return (
    <html lang={lang} dir={t.dir}>
      <body>
        <header className="top">
          <Link href={t.base || "/"} className="brand"><Mark />{t.brand}</Link>
          <div className="top-end">
            <Link className="toplink" href={`${t.base}/my-list`}>{t.myLink}</Link>
            <Link className="toplink" href={`${t.base}/scholarships`}>{t.schLink}</Link>
            <Link className="toplink contact" href={`${t.base}/contact`}>{t.contactLink}</Link>
            <span className="tag">{t.beta}</span>
            <LangSwitch lang={lang} label={t.switchLabel} />
          </div>
        </header>
        <main>{children}</main>
        <footer className="foot">
          <p>{t.footer}</p>
          <p><Link href={`${t.base}/my-list`}>{t.myLink}</Link> · <Link href={`${t.base}/scholarships`}>{t.schLink}</Link> · <Link href={`${t.base}/guide`}>{t.base ? "Application guide" : "دليل التقديم"}</Link> · <Link href={`${t.base}/compare`}>{t.base ? "Compare" : "قارن البرامج"}</Link> · <Link href={`${t.base}/after-graduation`}>{t.base ? "After graduation" : "بعد التخرج"}</Link> · <Link href={`${t.base}/contact`}>{t.contactLink}</Link> · <Link href={`${t.base}/privacy`}>{t.base ? "Privacy" : "الخصوصية"}</Link></p>
        </footer>
      </body>
    </html>
  );
}
