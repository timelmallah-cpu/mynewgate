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
    dir: "rtl", name: "بوابة السفر", latin: "Bawabat AlSafar", tagline: "اكتشف فرص الدراسة والعمل والهجرة حول العالم، وقارن الشروط والتكاليف وخطوات التقديم في مكان واحد وباللغة العربية.",
    lead: "اختر القسم الذي تريده. كل المعلومات من المصادر الرسمية فقط، منظمة ومكتوبة بالعربية.",
    pick: "الأقسام", study: "بوابة الدراسة", studyBlurb: "الدراسة في الخارج بالإنجليزية في الجامعات الحكومية: البرامج والرسوم والمواعيد والمنح والتأشيرة، لكل دولة.",
    open: "ادخل", soon: "قريباً", other: "English", otherHref: "/en", powered: "Powered by WithHatem", sec: (id) => `${BASE}/soon/${id}`, studyHref: BASE,
  },
  en: {
    dir: "ltr", name: "Bawabat AlSafar", latin: "بوابة السفر", tagline: "Discover study, work and immigration opportunities around the world, and compare requirements, costs and application steps in one place, in Arabic.",
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
            <svg className="pt-art" viewBox="0 0 320 84" aria-hidden="true" focusable="false">
              <path d="M10 70 H310" stroke="rgba(233,185,73,.35)" strokeWidth="1" />
              <path d="M40 66 Q160 -6 280 66" fill="none" stroke="#E9B949" strokeWidth="2" strokeDasharray="4 6" strokeLinecap="round" className="pt-dash" />
              <circle cx="40" cy="66" r="6" fill="#E9B949" /><circle cx="40" cy="66" r="2.4" fill="#15234B" />
              <circle cx="280" cy="66" r="6" fill="#E9B949" /><circle cx="280" cy="66" r="2.4" fill="#15234B" />
              <circle cx="100" cy="45" r="3" fill="#C9D1E6" /><circle cx="220" cy="45" r="3" fill="#C9D1E6" />
              <path id="pt-route" d="M40 66 Q160 -6 280 66" fill="none" stroke="none" />
              <g className="pt-plane-fly" opacity="0">
                <path d="M15 0 C15 -2 12 -2.6 9 -2.6 L4 -2.6 L-4 -12 L-8 -12 L-3 -2.6 L-11 -2.6 L-14 -6.5 L-17 -6.5 L-15 0 L-17 6.5 L-14 6.5 L-11 2.6 L-3 2.6 L-8 12 L-4 12 L4 2.6 L9 2.6 C12 2.6 15 2 15 0 Z" fill="#FFFFFF" />
                <animateMotion dur="7s" repeatCount="indefinite" rotate="auto" keyPoints="0;1;1" keyTimes="0;0.8;1" calcMode="spline" keySplines="0.45 0 0.55 1;0 0 1 1"><mpath href="#pt-route" /></animateMotion>
                <animate attributeName="opacity" dur="7s" repeatCount="indefinite" values="0;1;1;0;0" keyTimes="0;0.08;0.72;0.8;1" />
              </g>
              <g className="pt-plane-still" transform="translate(160 30)">
                <path d="M15 0 C15 -2 12 -2.6 9 -2.6 L4 -2.6 L-4 -12 L-8 -12 L-3 -2.6 L-11 -2.6 L-14 -6.5 L-17 -6.5 L-15 0 L-17 6.5 L-14 6.5 L-11 2.6 L-3 2.6 L-8 12 L-4 12 L4 2.6 L9 2.6 C12 2.6 15 2 15 0 Z" fill="#FFFFFF" />
              </g>
            </svg>
          </section>
          <ul className="pt-grid">
            <li>
              <a className="pt-tile live" href={x.studyHref}>
                <StudyMark h={58} />
                <b>{sh.study}</b>
                <span className="pt-go">{x.open} {lang === "ar" ? "←" : "→"}</span>
              </a>
            </li>
            {SECTIONS.map((c) => {
              const live = c.id === "visas-immigration";
              return (
                <li key={c.id}>
                  <a className={live ? "pt-tile live" : "pt-tile"} href={live ? (lang === "ar" ? "/visas" : "/en/visas") : x.sec(c.id)}>
                    <SectionMark id={c.id} h={58} />
                    <b>{sh[c.id]}</b>
                    {live ? <span className="pt-go">{x.open} {lang === "ar" ? "←" : "→"}</span> : <span className="pt-soon">{x.soon}</span>}
                  </a>
                </li>
              );
            })}
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
