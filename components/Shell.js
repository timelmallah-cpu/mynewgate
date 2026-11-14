import Link from "next/link";
import { T } from "../lib/i18n";
import LangSwitch from "./LangSwitch";
import "../app/globals.css";

// Root <html> for one language. Each language has its own root layout so
// lang/dir are correct in the server-rendered HTML.
export default function Shell({ lang, children }) {
  const t = T[lang];
  return (
    <html lang={lang} dir={t.dir}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <header className="top">
          <Link href={t.base || "/"} className="brand">{t.brand}</Link>
          <div className="top-end">
            <span className="tag">{t.beta}</span>
            <LangSwitch lang={lang} label={t.switchLabel} />
          </div>
        </header>
        <main>{children}</main>
        <footer className="foot"><p>{t.footer}</p></footer>
      </body>
    </html>
  );
}
