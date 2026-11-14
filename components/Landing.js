import Link from "next/link";
import programmes from "../lib/programmes.json";
import { T } from "../lib/i18n";

export default function Landing({ lang }) {
  const t = T[lang];
  return (
    <>
      <div className="row" style={{ justifyContent: "flex-end", marginBottom: 8 }}>
        <span className="meta">{t.chooseLang}</span>
        <a className={lang === "ar" ? "btn" : "btn ghost"} href="/" lang="ar" style={{ padding: "6px 16px" }}>العربية</a>
        <a className={lang === "en" ? "btn" : "btn ghost"} href="/en" lang="en" style={{ padding: "6px 16px" }}>English</a>
      </div>
      <h1>{t.heroTitle}</h1>
      <p className="lead">{t.heroLead}</p>
      <div className="notice">{t.heroNotice}</div>
      <p className="meta">{t.count(programmes.length)}</p>
      <Link className="btn" href={`${t.base}/quiz`}>{t.start}</Link>
    </>
  );
}
