import { Analytics } from "@vercel/analytics/next";
import { Mark, StudyMark } from "./Shell";
import { SECTIONS, SECTION_TEXT } from "../lib/sections";
import { BASE } from "../lib/site";
import "@fontsource-variable/readex-pro/index.css";
import "@fontsource/ibm-plex-sans-arabic/arabic-400.css";
import "@fontsource/ibm-plex-sans-arabic/arabic-600.css";
import "@fontsource/ibm-plex-sans-arabic/latin-400.css";
import "@fontsource/ibm-plex-sans-arabic/latin-600.css";
import "../app/globals.css";

// The umbrella home page of bawabatalsafar.com (served at "/" and "/en" through rewrites in next.config.mjs):
// four section cards. Study is live; the other three are "coming soon". The study pages use another root layout,
// so these links are plain <a> tags with BASE.
const TX = {
  ar: {
    dir: "rtl", name: "بوابة السفر", latin: "Bawabat AlSafar", tagline: "دليلك الذكي للدراسة والعمل والهجرة حول العالم",
    lead: "اختر القسم الذي تريده. كل المعلومات من المصادر الرسمية فقط، منظمة ومكتوبة بالعربية.",
    pick: "الأقسام", study: "بوابة الدراسة", studyBlurb: "الدراسة في الخارج بالإنجليزية في الجامعات الحكومية: البرامج والرسوم والمواعيد والمنح والتأشيرة، لكل دولة.",
    open: "ادخل", soon: "قريباً", other: "English", otherHref: "/en", powered: "Powered by WithHatem", sec: (id) => `${BASE}/soon/${id}`, studyHref: BASE,
  },
  en: {
    dir: "ltr", name: "Bawabat AlSafar", latin: "بوابة السفر", tagline: "Your smart guide to study, work and immigration around the world",
    lead: "Choose a section. All information comes from official sources only, organised and written in Arabic.",
    pick: "Sections", study: "Study abroad", studyBlurb: "Studying abroad in English at public universities: programmes, fees, deadlines, scholarships and visas for each country.",
    open: "Open", soon: "Coming soon", other: "العربية", otherHref: "/", powered: "Powered by WithHatem", sec: (id) => `${BASE}/en/soon/${id}`, studyHref: `${BASE}/en`,
  },
};

export default function Portal({ lang }) {
  const x = TX[lang];
  const s = SECTION_TEXT[lang];
  return (
    <>
        <header className="top">
          <div className="top-in">
            <a href={lang === "ar" ? "/" : "/en"} className="brand"><Mark />{x.name}</a>
            <div className="top-end"><a className="toplink" href={x.otherHref} lang={lang === "ar" ? "en" : "ar"}>{x.other}</a></div>
          </div>
        </header>
        <main>
          <section className="portal-hero">
            <h1>{x.name}</h1>
            <p className="portal-tag">{x.tagline}</p>
            <p>{x.lead}</p>
          </section>
          <h2 className="land-h">{x.pick}</h2>
          <ul className="portal-cards">
            <li>
              <a className="portal-card live" href={x.studyHref}>
                <span className="portal-icon"><StudyMark /></span>
                <b>{x.study}</b>
                <span>{x.studyBlurb}</span>
                <span className="portal-go">{x.open} {lang === "ar" ? "←" : "→"}</span>
              </a>
            </li>
            {SECTIONS.map((c) => (
              <li key={c.id}>
                <a className="portal-card" href={x.sec(c.id)}>
                  <span className="portal-icon"><svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={c.icon} /></svg></span>
                  <b>{s.names[c.id]}</b>
                  <span>{s.blurbs[c.id]}</span>
                  <span className="soon-tag">{x.soon}</span>
                </a>
              </li>
            ))}
          </ul>
        </main>
        <footer className="foot">
          <div className="foot-brand">
            <p className="foot-name"><Mark />{lang === "ar" ? "بوابة السفر | Bawabat AlSafar" : "Bawabat AlSafar | بوابة السفر"}</p>
            <p className="foot-tagline">{x.tagline}</p>
            <p className="foot-powered"><bdi>{x.powered}</bdi></p>
          </div>
        </footer>
        <Analytics />
    </>
  );
}
