// Bawabat AlSafar visas section (bawabatalsafar.com/visas, served from /study/visas through a rewrite).
// Uses the portal root layouts, its own header (SectionMark + section name) and the Bawabat AlSafar footer.
import { Analytics } from "@vercel/analytics/next";
import { Mark, SectionMark } from "./Shell";
import Flag from "../lib/Flag";
import VisaChecker from "./VisaChecker";
import { DEST, ORIGINS, KIND, VTEXT, VISIT_REVIEWED } from "../lib/visit";
import { BASE } from "../lib/site";
import "@fontsource-variable/readex-pro/index.css";
import "@fontsource/ibm-plex-sans-arabic/arabic-400.css";
import "@fontsource/ibm-plex-sans-arabic/arabic-600.css";
import "@fontsource/ibm-plex-sans-arabic/latin-400.css";
import "@fontsource/ibm-plex-sans-arabic/latin-600.css";
import "../app/globals.css";

const ID = "visas-immigration";
export const visasBase = (lang) => (lang === "en" ? "/en/visas" : "/visas");
const TAG = { ar: "دليلك الذكي للدراسة والعمل والهجرة حول العالم", en: "Your smart guide to study, work and immigration around the world" };
const fmt = (d, lang) => new Date(d).toLocaleDateString(lang === "ar" ? "ar-EG-u-nu-latn" : "en-GB", { day: "numeric", month: "long", year: "numeric" });

function Frame({ lang, other, crumbs, children }) {
  const t = VTEXT[lang];
  const home = lang === "ar" ? "/" : "/en";
  const arrow = lang === "ar" ? "←" : "→";
  return (
    <>
      <header className="top">
        <div className="top-in">
          <a href={visasBase(lang)} className="brand"><SectionMark id={ID} />{t.brand}</a>
          <div className="top-end"><a className="toplink" href={other} lang={lang === "ar" ? "en" : "ar"}>{t.other}</a></div>
        </div>
      </header>
      <main>
        <p className="crumbs">
          <a href={home}>{t.home}</a> {arrow} {crumbs ? <><a href={visasBase(lang)}>{t.brand}</a> {arrow} {crumbs}</> : t.brand}
        </p>
        {children}
        <p className="notice">{t.disclaimer}</p>
        <p className="meta">{t.reviewed(fmt(VISIT_REVIEWED, lang))} · {t.studyLink} <a href={lang === "ar" ? `${BASE}/visa` : `${BASE}/en/visa`}>{t.studyGo}</a></p>
      </main>
      <footer className="foot">
        <div className="foot-brand">
          <p className="foot-name"><Mark /><a href={home}>{lang === "ar" ? "بوابة السفر | Bawabat AlSafar" : "Bawabat AlSafar | بوابة السفر"}</a></p>
          <p className="foot-tagline">{TAG[lang]}</p>
          <p className="foot-powered"><bdi>Powered by WithHatem</bdi></p>
        </div>
      </footer>
      <Analytics />
    </>
  );
}

function DestFlag({ id }) {
  if (id === "us") return (
    <svg className="flag" width="28" height="18.7" viewBox="0 0 30 20" aria-hidden="true">
      {Array.from({ length: 7 }, (_, i) => <rect key={i} y={i * 20 / 6.5} width="30" height={20 / 13} fill="#B22234" />)}
      <rect width="13" height="10.8" fill="#3C3B6E" />
    </svg>
  );
  if (id === "ae") return (
    <svg className="flag" width="28" height="18.7" viewBox="0 0 30 20" aria-hidden="true">
      <rect width="30" height="6.67" fill="#00732F" /><rect y="6.67" width="30" height="6.67" fill="#FFFFFF" /><rect y="13.33" width="30" height="6.67" fill="#000000" /><rect width="7.5" height="20" fill="#FF0000" />
      <rect x="0.25" y="0.25" width="29.5" height="19.5" fill="none" stroke="rgba(0,0,0,.15)" strokeWidth=".5" />
    </svg>
  );
  return <Flag code={id} />;
}

export function VisasHub({ lang }) {
  const t = VTEXT[lang];
  const b = visasBase(lang);
  return (
    <Frame lang={lang} other={visasBase(lang === "ar" ? "en" : "ar")}>
      <section className="gate vz-hero">
        <h1>{t.title}</h1>
        <p className="lead">{t.lead}</p>
      </section>
      <VisaChecker lang={lang} base={b} />
      <h2>{t.destinations}</h2>
      <ul className="vz-dests">
        {DEST.map((d) => {
          const n = Object.values(d.status);
          const easy = n.filter((s) => s.s === "free" || s.s === "eta").length;
          return (
            <li key={d.id}>
              <a className="card vz-dest" href={`${b}/${d.slug}`}>
                <span className="vz-dname"><DestFlag id={d.id} /> <b>{d.name[lang]}</b></span>
                <span className="meta">{d.visa[lang]}</span>
                <span className="meta">{lang === "ar" ? `${easy} من ${n.length} جنسية عربية بدون تأشيرة أو بتصريح إلكتروني` : `${easy} of ${n.length} Arab nationalities need no visa or only an e-authorisation`}</span>
              </a>
            </li>
          );
        })}
      </ul>
      <p className="meta">{t.soonMore}</p>
    </Frame>
  );
}

export function VisaDest({ d, lang }) {
  const t = VTEXT[lang];
  const b = visasBase(lang);
  const rows = [...ORIGINS].sort((a, c) => a[lang].localeCompare(c[lang], lang));
  return (
    <Frame lang={lang} other={`${visasBase(lang === "ar" ? "en" : "ar")}/${d.slug}`} crumbs={d.name[lang]}>
      <h1 className="vz-h1"><DestFlag id={d.id} /> {lang === "ar" ? `تأشيرة زيارة ${d.name.ar}` : `Visiting ${d.name.en}: visas`}</h1>
      <VisaChecker lang={lang} base={b} initialDest={d.id} />
      <section className="card">
        <dl className="vz-facts">
          <div><dt>{t.visa}</dt><dd>{d.visa[lang]}</dd></div>
          <div><dt>{t.fee}</dt><dd>{d.fee[lang]} <a href={d.feeSrc} target="_blank" rel="noopener noreferrer" aria-label={t.src}>↗</a></dd></div>
          <div><dt>{t.stay}</dt><dd>{d.stay[lang]}</dd></div>
          <div><dt>{t.time}</dt><dd>{d.time[lang]} <a href={d.timeSrc} target="_blank" rel="noopener noreferrer" aria-label={t.src}>↗</a></dd></div>
          <div><dt>{t.where}</dt><dd>{d.where[lang]} <a href={d.whereUrl} target="_blank" rel="noopener noreferrer">{t.src} ↗</a></dd></div>
          <div><dt>{t.early}</dt><dd>{d.early[lang]}</dd></div>
        </dl>
        {d.schengen && <p className="meta">{t.schengenNote}</p>}
      </section>
      <section className="card">
        <h2>{t.docs}</h2>
        <ul>{d.docs[lang].map((x) => <li key={x}>{x}</li>)}</ul>
        <p className="meta"><a href={d.docsSrc} target="_blank" rel="noopener noreferrer">{t.src} ↗</a></p>
      </section>
      <h2>{t.allNat}</h2>
      <div className="vz-table-wrap">
        <table className="vz-table">
          <thead><tr><th scope="col">{t.natCol}</th><th scope="col">{t.stCol}</th></tr></thead>
          <tbody>
            {rows.map((o) => {
              const s = d.status[o.c];
              return (
                <tr key={o.c} id={`n-${o.c}`}>
                  <th scope="row">{o[lang]}</th>
                  <td><span className={`vz-badge vz-${s.s}`}>{KIND[s.s][lang]}</span> <span className="vz-note">{s.n[lang]}</span>{s.src ? <> <a href={s.src} target="_blank" rel="noopener noreferrer" aria-label={t.src}>↗</a></> : null}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <h2>{t.destinations}</h2>
      <p className="chips vz-other">{DEST.filter((x) => x.id !== d.id).map((x) => <a key={x.id} className="chip" href={`${b}/${x.slug}`}>{x.name[lang]}</a>)}</p>
    </Frame>
  );
}
