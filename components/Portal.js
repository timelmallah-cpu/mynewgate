import { Analytics } from "@vercel/analytics/next";
import { Mark, StudyMark, SectionMark } from "./Shell";
import SoonSection from "./Sections";
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

const SHORT = {
  ar: { study: "الدراسة", "visas-immigration": "التأشيرات والهجرة", work: "العمل", tourism: "السياحة" },
  en: { study: "Study", "visas-immigration": "Visas & immigration", work: "Work", tourism: "Tourism" },
};

export default function Portal({ lang }) {
  const x = TX[lang];
  const sh = SHORT[lang];
  return (
    <>
        <header className="top">
          <div className="top-in">
            <a href={lang === "ar" ? "/" : "/en"} className="brand"><Mark />{x.name}</a>
            <div className="top-end"><a className="toplink" href={x.otherHref} lang={lang === "ar" ? "en" : "ar"}>{x.other}</a></div>
          </div>
        </header>
        <main>
          <section className="gate pt-hero">
            <h1>{x.name}</h1>
            <p className="lead">{x.tagline}</p>
          </section>
          <ul className="pt-grid">
            <li>
              <a className="pt-tile live" href={x.studyHref}>
                <StudyMark h={58} />
                <b>{sh.study}</b>
                <span className="pt-go">{x.open} {lang === "ar" ? "←" : "→"}</span>
              </a>
            </li>
            {SECTIONS.map((c) => (
              <li key={c.id}>
                <a className="pt-tile" href={x.sec(c.id)}>
                  <SectionMark id={c.id} h={58} />
                  <b>{sh[c.id]}</b>
                  <span className="pt-soon">{x.soon}</span>
                </a>
              </li>
            ))}
          </ul>
        </main>
        <footer className="foot pt-foot">
          <p className="foot-powered"><bdi>{x.powered}</bdi></p>
        </footer>
        <Analytics />
    </>
  );
}

// /soon/<id>: each coming-soon section has its own name and mark in the header (Hatem, 20 Nov), not the study brand.
// It uses the portal root layout, so the header and footer belong to Bawabat AlSafar, with a link back to its home.
export function SectionPortal({ id, lang }) {
  const x = TX[lang];
  const s = SECTION_TEXT[lang];
  const other = lang === "ar" ? `${BASE}/en/soon/${id}` : `${BASE}/soon/${id}`;
  const home = lang === "ar" ? "/" : "/en";
  return (
    <>
      <header className="top">
        <div className="top-in">
          <a href={home} className="brand"><SectionMark id={id} />{s.names[id]}</a>
          <div className="top-end"><a className="toplink" href={other} lang={lang === "ar" ? "en" : "ar"}>{x.other}</a></div>
        </div>
      </header>
      <main>
        <p className="crumbs"><a href={home}>{x.name}</a> {lang === "ar" ? "←" : "→"} {s.names[id]}</p>
        <SoonSection id={id} lang={lang} />
      </main>
      <footer className="foot">
        <div className="foot-brand">
          <p className="foot-name"><Mark /><a href={home}>{lang === "ar" ? "بوابة السفر | Bawabat AlSafar" : "Bawabat AlSafar | بوابة السفر"}</a></p>
          <p className="foot-tagline">{x.tagline}</p>
          <p className="foot-powered"><bdi>{x.powered}</bdi></p>
        </div>
      </footer>
      <Analytics />
    </>
  );
}
