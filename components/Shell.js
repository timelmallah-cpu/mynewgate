import TopAccount from "./TopAccount";
import { Analytics } from "@vercel/analytics/next";
import Link from "next/link";
import { T } from "../lib/i18n";
import { BASE } from "../lib/site";
import LangSwitch from "./LangSwitch";
import PwaRegister from "./PwaRegister";
import AskFab from "./AskFab";
import AccountSync from "./AccountSync";
import SiteMenu from "./SiteMenu";
import { MENU } from "../lib/homeText";
import "@fontsource-variable/readex-pro/index.css";
import "@fontsource/ibm-plex-sans-arabic/arabic-400.css";
import "@fontsource/ibm-plex-sans-arabic/arabic-600.css";
import "@fontsource/ibm-plex-sans-arabic/latin-400.css";
import "@fontsource/ibm-plex-sans-arabic/latin-600.css";
import "../app/globals.css";

// The brand mark: an arched gate with its keystone.
export function Mark() {
  return (
    <svg width="26" height="30" viewBox="0 0 26 30" aria-hidden="true">
      <path d="M2 30V13a11 11 0 0 1 22 0v17" fill="none" stroke="#13234b" strokeWidth="3.2" />
      <rect x="10" y="-1" width="6" height="6" rx="1" transform="rotate(45 13 2)" fill="#e9b949" />
    </svg>
  );
}

// The study section's mark: the same gate with an open book inside.
export function StudyMark() {
  return (
    <svg width="26" height="30" viewBox="0 0 26 30" aria-hidden="true">
      <path d="M2 30V13a11 11 0 0 1 22 0v17" fill="none" stroke="#13234b" strokeWidth="3.2" />
      <rect x="10" y="-1" width="6" height="6" rx="1" transform="rotate(45 13 2)" fill="#e9b949" />
      <path d="M6.2 26.5V19c2.4-1.3 4.8-1.3 6.8 0 2-1.3 4.4-1.3 6.8 0v7.5c-2.4-1.3-4.8-1.3-6.8 0-2-1.3-4.4-1.3-6.8 0z" fill="#e9b949" />
      <path d="M13 19v7.5" stroke="#13234b" strokeWidth="1.2" />
    </svg>
  );
}


// The other sections' marks: the same gate with the section's own sign inside (gold, like the study book).
const SECTION_SIGN = {
  "visas-immigration": <><rect x="7.5" y="17" width="11" height="10" rx="1.4" fill="#e9b949" /><circle cx="13" cy="21" r="2" fill="none" stroke="#13234b" strokeWidth="1.1" /><path d="M10 25h6" stroke="#13234b" strokeWidth="1.1" /></>,
  work: <><rect x="6.5" y="19" width="13" height="8" rx="1.4" fill="#e9b949" /><path d="M10.5 19v-2h5v2" fill="none" stroke="#e9b949" strokeWidth="1.6" /><path d="M6.5 22.5h13" stroke="#13234b" strokeWidth="1.1" /></>,
  tourism: <><circle cx="13" cy="22" r="5.3" fill="#e9b949" /><path d="M7.7 22h10.6M13 16.7c1.8 1.6 1.8 9 0 10.6M13 16.7c-1.8 1.6-1.8 9 0 10.6" fill="none" stroke="#13234b" strokeWidth="1" /></>,
};
export function SectionMark({ id }) {
  return (
    <svg width="26" height="30" viewBox="0 0 26 30" aria-hidden="true">
      <path d="M2 30V13a11 11 0 0 1 22 0v17" fill="none" stroke="#13234b" strokeWidth="3.2" />
      <rect x="10" y="-1" width="6" height="6" rx="1" transform="rotate(45 13 2)" fill="#e9b949" />
      {SECTION_SIGN[id]}
    </svg>
  );
}

// Root <html> for one language. Each language has its own root layout so
// lang/dir are correct in the server-rendered HTML.
// Footer links, grouped so the list stays readable on phones.
const FOOT_GROUPS = [
  { ar: "ابحث وقارن", en: "Search and compare", links: [
    ["/quiz", "ابحث عن برنامج", "Find a programme"], ["/search", "أدلة الدراسة", "Study guides"], ["/scholarships", "المنح", "Scholarships"],
    ["/compare", "قارن البرامج", "Compare programmes"], ["/countries", "قارن الدول", "Compare countries"], ["/cities", "المدن الجامعية", "University cities"], ["/my-list", "قائمتي", "My list"], ["/applications", "متابعة التقديم", "Application tracker"],
  ] },
  { ar: "أدوات", en: "Tools", links: [
    ["/ask", "اسأل المساعد", "Ask the assistant"], ["/english-check", "هل درجتك في الإنجليزية كافية؟", "English score check"], ["/without-ielts", "الدراسة بدون IELTS", "Without IELTS"], ["/language", "اللغة والاختبارات", "Language & tests"],
    ["/institutes", "معاهد اللغة", "Language institutes"], ["/gpa", "حوّل معدلك إلى النظام الألماني", "German grade converter"], ["/planner", "خطط مواعيدك", "Plan your dates"],
    ["/tools", "كل الأدوات", "All tools"],
  ] },
  { ar: "أدلة", en: "Guides", links: [
    ["/guide", "دليل التقديم", "Application guide"], ["/motivation-letter", "خطاب الدافع والسيرة الذاتية", "Motivation letter & CV"], ["/university-email", "إيميل للجامعة", "Email to a university"], ["/legalisation", "تصديق الأوراق", "Legalising documents"], ["/visa", "التأشيرة", "Student visa"], ["/school-certificate", "شهادة الثانوية", "School certificate"], ["/foundation", "السنة التحضيرية", "Foundation year"], ["/after-30", "الدراسة بعد الثلاثين", "Studying after 30"], ["/applied-sciences", "الجامعات التطبيقية", "Universities of applied sciences"],
    ["/housing", "دليل السكن", "Housing guide"], ["/after-graduation", "بعد التخرج", "After graduation"], ["/vocational", "التدريب المهني", "Vocational training"],
    ["/glossary", "قاموس الكلمات", "Glossary"],
  ] },
  { ar: "عن الموقع", en: "About", links: [
    ["/pricing", "اشتراك Study Plus", "Study Plus subscription"], ["/contact", "تواصل معنا", "Contact us"], ["/questions", "أسئلة شائعة", "Common questions"], ["/how-we-work", "كيف نجمع المعلومات", "How we collect information"], ["/updates", "آخر التحديثات", "What's new"], ["/advertise", "أعلن معنا", "Advertise"], ["/account", "حسابي", "My account"], ["/install", "ثبّت التطبيق", "Install the app"], ["/privacy", "الخصوصية", "Privacy"], ["/terms", "شروط الاستخدام", "Terms of use"],
  ] },
];

export default function Shell({ lang, children }) {
  const t = T[lang];
  return (
    <html lang={lang} dir={t.dir}>
      <body>
        <header className="top">
          <div className="top-in">
            <Link href={t.base || "/"} className="brand"><StudyMark />{t.brand}</Link>
            <nav className="topnav" aria-label={t.base ? "Main" : "الرئيسية"}>
              <Link className="toplink" href={`${t.base}/quiz`}>{MENU[lang].programmes}</Link>
              <Link className="toplink" href={`${t.base}/scholarships`}>{MENU[lang].scholarships}</Link>
              <Link className="toplink" href={`${t.base}/countries`}>{MENU[lang].countries}</Link>
              <Link className="toplink voc" href={`${t.base}/ausbildung`}>{MENU[lang].voc}</Link>
            </nav>
            <div className="top-end">
              <SiteMenu lang={lang} base={t.base} />
              <Link className="top-ask" href={`${t.base}/ask`}>
                <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5h16v11H9l-5 4z" /><path d="M9 9h6M9 12h4" /></svg>
                <span>{MENU[lang].ask}</span>
              </Link>
              <Link className="top-list" href={`${t.base}/my-list`} aria-label={MENU[lang].list} title={MENU[lang].list}>
                <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 3h10v18l-5-4-5 4z" /></svg>
              </Link>
              <TopAccount lang={lang} base={t.base} label={MENU[lang].account} />
              <LangSwitch lang={lang} label={t.switchLabel} />
            </div>
          </div>
        </header>
        <main>{children}</main>
        <footer className="foot">
          <div className="foot-brand">
            <p className="foot-name"><a href={lang === "ar" ? "/" : "/en"}><Mark />{lang === "ar" ? "بوابة السفر | Bawabat AlSafar" : "Bawabat AlSafar | بوابة السفر"}</a></p>
            <p className="foot-tagline">{t.tagline}</p>
            <p className="foot-powered"><bdi>{t.poweredBy}</bdi></p>
            <p><a href={`${BASE}/fr`} lang="fr">Version française</a></p>
          </div>
          <p>{t.footer} <span className="tag">{t.beta}</span></p>
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
        <AskFab lang={lang} />
        <AccountSync />
      </body>
    </html>
  );
}
