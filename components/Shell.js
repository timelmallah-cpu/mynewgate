import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import { T } from "../lib/i18n";
import LangSwitch from "./LangSwitch";
import PwaRegister from "./PwaRegister";
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
// Footer links, grouped so the list stays readable on phones.
const FOOT_GROUPS = [
  { ar: "ابحث وقارن", en: "Search and compare", links: [
    ["/quiz", "ابحث عن برنامج", "Find a programme"], ["/study", "أدلة الدراسة", "Study guides"], ["/scholarships", "المنح", "Scholarships"],
    ["/compare", "قارن البرامج", "Compare programmes"], ["/countries", "قارن الدول", "Compare countries"], ["/my-list", "قائمتي", "My list"],
  ] },
  { ar: "أدوات", en: "Tools", links: [
    ["/english-check", "هل درجتك تكفي؟", "English score check"], ["/without-ielts", "من غير IELTS", "Without IELTS"], ["/language", "اللغة والاختبارات", "Language & tests"],
    ["/institutes", "معاهد اللغة", "Language institutes"], ["/gpa", "حوّل معدلك للألماني", "German grade converter"], ["/planner", "خطط مواعيدك", "Plan your dates"],
    ["/tools", "كل الأدوات", "All tools"],
  ] },
  { ar: "أدلة", en: "Guides", links: [
    ["/guide", "دليل التقديم", "Application guide"], ["/visa", "التأشيرة", "Student visa"], ["/school-certificate", "شهادة الثانوية", "School certificate"],
    ["/housing", "دليل السكن", "Housing guide"], ["/after-graduation", "بعد التخرج", "After graduation"], ["/vocational", "التدريب المهني", "Vocational training"],
    ["/glossary", "قاموس الكلمات", "Glossary"],
  ] },
  { ar: "عن الموقع", en: "About", links: [
    ["/contact", "تواصل معنا", "Contact us"], ["/advertise", "اعلن معانا", "Advertise"], ["/install", "ثبّت التطبيق", "Install the app"], ["/privacy", "الخصوصية", "Privacy"],
  ] },
];

export default function Shell({ lang, children }) {
  const t = T[lang];
  return (
    <html lang={lang} dir={t.dir}>
      <body>
        <header className="top">
          <Link href={t.base || "/"} className="brand"><Mark />{t.brand}</Link>
          <nav className="topnav">
            <Link className="toplink tools" href={`${t.base}/tools`}>{t.base ? "Tools" : "الأدوات"}</Link>
            <Link className="toplink" href={`${t.base}/my-list`}>{t.myLink}</Link>
            <Link className="toplink" href={`${t.base}/scholarships`}>{t.schLink}</Link>
            <Link className="toplink" href={`${t.base}/vocational`}>{t.base ? "Vocational training" : "التدريب المهني"}</Link>
            <Link className="toplink contact" href={`${t.base}/contact`}>{t.contactLink}</Link>
            <span className="tag">{t.beta}</span>
          </nav>
          <LangSwitch lang={lang} label={t.switchLabel} />
        </header>
        <main>{children}</main>
        <footer className="foot">
          <p>{t.footer}</p>
          <nav className="foot-cols" aria-label={t.base ? "Site links" : "روابط الموقع"}>
            {FOOT_GROUPS.map((g) => (
              <div key={g.ar}>
                <h2>{t.base ? g.en : g.ar}</h2>
                <ul>
                  {g.links.map(([href, ar, en]) => (
                    <li key={href}><Link href={`${t.base}${href}`}>{t.base ? en : ar}</Link></li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </footer>
        <Analytics />
        <PwaRegister />
      </body>
    </html>
  );
}
