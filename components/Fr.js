import { Analytics } from "@vercel/analytics/next";
import { notFound } from "next/navigation";
import programmes from "../lib/programmes.json";
import { SCHOLARSHIPS } from "../lib/scholarships";
import { BASE, SITE_URL } from "../lib/site";
import Flag from "../lib/Flag";
import { Mark, StudyMark } from "./Shell";
import { FR_COUNTRY_IDS, FR_QUESTIONS, frQuestion, frName, frIn, frCountry, frCountryFaq, n, months } from "../lib/fr";
import "@fontsource-variable/readex-pro/index.css";
import "@fontsource/ibm-plex-sans-arabic/latin-400.css";
import "@fontsource/ibm-plex-sans-arabic/latin-600.css";
import "../app/globals.css";

// French pages (version 1): their own root layout, so links to the Arabic/English pages are plain <a> with BASE.
const FR = `${BASE}/fr`;
const ld = (obj) => <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj).replace(/</g, "\\u003c") }} />;
const faqLd = (pairs) => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: pairs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });

export function frMeta({ title, description, path = "", ar, en }) {
  const url = `${SITE_URL}/fr${path}`;
  const languages = { fr: url };
  if (ar !== undefined) languages.ar = SITE_URL + ar;
  if (en !== undefined) languages.en = `${SITE_URL}/en${en}`;
  return {
    metadataBase: new URL(SITE_URL),
    title, description,
    alternates: { canonical: url, languages },
    openGraph: { type: "website", siteName: "Bawabat AlDirasa", locale: "fr_FR", title, description, url, images: [{ url: `${SITE_URL}/og-en.png?v=3`, width: 1200, height: 630 }] },
    twitter: { card: "summary_large_image", title, description },
  };
}

export function FrShell({ children, ar = "", en = "" }) {
  return (
    <>
      <header className="top">
        <div className="top-in">
          <a href={FR} className="brand"><StudyMark />Bawabat AlDirasa</a>
          <div className="top-end">
            <a className="toplink" href={`${BASE}${ar}`} lang="ar">العربية</a>
            <a className="toplink" href={`${BASE}/en${en}`} lang="en">English</a>
          </div>
        </div>
      </header>
      <main>{children}</main>
      <footer className="foot">
        <div className="foot-brand">
          <p className="foot-name"><Mark /><a href="/">Bawabat AlSafar | بوابة السفر</a></p>
          <p className="foot-tagline">Votre guide pour étudier, travailler et émigrer dans le monde</p>
          <p className="foot-powered"><bdi>Powered by WithHatem</bdi></p>
          <p className="meta">Ce service ne vend pas d'informations et ne donne pas de conseil juridique ou d'immigration. Nous organisons les informations publiées par les universités et les autorités officielles, avec le lien vers la source. Vérifiez toujours la source officielle avant de décider.</p>
        </div>
      </footer>
      <Analytics />
    </>
  );
}

const Note = () => <div className="notice">Version française en cours : les chiffres viennent des mêmes données officielles que le site en arabe et en anglais. Les fiches détaillées des programmes sont en arabe et en anglais.</div>;

export function FrHome() {
  const nProg = programmes.length;
  return (
    <FrShell>
      <section className="portal-hero">
        <h1>Étudier à l'étranger en anglais, pour moins cher</h1>
        <p className="portal-tag">Pour les étudiants d'Algérie, du Maroc, de Tunisie et de tout le monde arabe</p>
        <p>{n(nProg)} programmes en anglais dans les universités publiques de {FR_COUNTRY_IDS.length} pays, {SCHOLARSHIPS.length} bourses entièrement financées, avec les frais, les dates limites, le visa et la source officielle de chaque information.</p>
      </section>
      <h2 className="land-h">Questions fréquentes</h2>
      <ul className="qa-items">{FR_QUESTIONS.map((q) => <li key={q.slug}><a href={`${FR}/questions/${q.slug}`}>{q.q}</a></li>)}</ul>
      <h2 className="land-h">Choisissez un pays</h2>
      <ul className="voc-chips">
        {[...FR_COUNTRY_IDS].sort((a, b) => frName(a).localeCompare(frName(b), "fr")).map((c) => (
          <li key={c}><a className="chip" href={`${FR}/pays/${c}`}><Flag code={c} size={16} /> {frName(c)}</a></li>
        ))}
      </ul>
      <h2 className="land-h">Outils (en arabe et en anglais)</h2>
      <ul className="voc-chips">
        <li><a className="chip" href={`${BASE}/en/quiz`}>Trouver un programme</a></li>
        <li><a className="chip" href={`${BASE}/en/scholarships`}>Bourses</a></li>
        <li><a className="chip" href={`${BASE}/en/my-plan`}>Mon plan en une minute</a></li>
        <li><a className="chip" href={`${BASE}/en/countries`}>Comparer les pays</a></li>
        <li><a className="chip" href={`${BASE}/ask`}>Assistant (arabe)</a></li>
      </ul>
      <Note />
    </FrShell>
  );
}

const LV = { master: "Masters", bachelor: "Licences (bachelors)", doctorate: "Doctorats" };

export function FrCountry({ code }) {
  if (!FR_COUNTRY_IDS.includes(code)) notFound();
  const d = frCountry(code);
  const faq = frCountryFaq(code);
  const fee = (p) => (p.feePerYear === 0 ? "sans frais de scolarité" : p.feePerYear ? (p.feePeriod ? `${n(p.feePerYear)}${p.feePerYearMax ? `–${n(p.feePerYearMax)}` : ""} € par an` : "période des frais non précisée") : "frais non publiés");
  return (
    <FrShell ar={`/country/${code}`} en={`/country/${code}`}>
      {faq.length > 0 && ld(faqLd(faq))}
      <p className="crumbs"><a href={FR}>Accueil</a></p>
      <h1><Flag code={code} size={30} /> Étudier {frIn(code)}</h1>
      <section className="card qa-short">
        <h2>L'essentiel</h2>
        {faq.map((p) => (
          <details key={p.q} className="qa-acc" open>
            <summary>{p.q}</summary>
            <p>{p.a}</p>
          </details>
        ))}
        <p className="meta">
          Sources officielles : {d.proof?.src && <><a href={d.proof.src} target="_blank" rel="noopener noreferrer">visa</a> · </>}
          {d.work?.src && <><a href={d.work.src} target="_blank" rel="noopener noreferrer">travail</a> · </>}
          {d.post?.src && <a href={d.post.src} target="_blank" rel="noopener noreferrer">après le diplôme</a>}
        </p>
      </section>
      {["master", "bachelor", "doctorate"].map((lv) => {
        const l = d.list.filter((p) => p.level === lv).sort((a, b) => a.name.localeCompare(b.name));
        if (!l.length) return null;
        return (
          <section key={lv} className="country-sec">
            <h2>{LV[lv]} ({l.length})</h2>
            <ul className="level-list">
              {l.map((p) => (
                <li key={p.id}>
                  <a href={`${BASE}/en/programme/${p.id}`}><b><bdi>{p.name}</bdi></b></a>
                  <small><bdi>{p.university}</bdi> · {p.en.city} · {fee(p)}</small>
                </li>
              ))}
            </ul>
          </section>
        );
      })}
      <p className="tool-strip">
        <a href={`${BASE}/country/${code}`}>Page complète en arabe</a>
        <a href={`${BASE}/en/country/${code}`}>Page complète en anglais</a>
        <a href={`${BASE}/en/visa?to=${code}`}>Visa étudiant depuis votre pays (anglais)</a>
      </p>
      <Note />
    </FrShell>
  );
}

export function FrQuestions() {
  const pairs = FR_QUESTIONS.map((x) => ({ q: x.q, a: x.answer().short }));
  return (
    <FrShell ar="/questions" en="/questions">
      {ld(faqLd(pairs))}
      <h1>Questions fréquentes sur les études à l'étranger</h1>
      <p className="lead">Des réponses courtes aux questions que les étudiants arabes cherchent le plus, calculées à partir des données des programmes et des sources officielles de notre site.</p>
      <div className="qa-list">
        {FR_QUESTIONS.map((x, i) => (
          <section key={x.slug} className="card qa-card">
            <h2><a href={`${FR}/questions/${x.slug}`}>{x.q}</a></h2>
            <p>{pairs[i].a}</p>
          </section>
        ))}
      </div>
      <Note />
    </FrShell>
  );
}

export function FrQuestion({ slug }) {
  const x = frQuestion(slug);
  if (!x) notFound();
  const a = x.answer();
  return (
    <FrShell ar={`/questions/${slug}`} en={`/questions/${slug}`}>
      {ld(faqLd([{ q: x.q, a: a.short }]))}
      <p className="crumbs"><a href={`${FR}/questions`}>Toutes les questions</a></p>
      <h1>{x.q}</h1>
      <section className="card qa-short"><h2>Réponse courte</h2><p>{a.short}</p></section>
      <section className="country-sec">
        <h2>Par pays</h2>
        <ol className="qa-items">
          {a.items.map((it) => (
            <li key={it.c || it.id}>
              {it.c ? <><a href={`${FR}/pays/${it.c}`}><Flag code={it.c} size={18} /> <b>{frName(it.c)}</b></a> : {it.text}</> : <a href={`${BASE}/en/scholarships/${it.id}`}>{it.text}</a>}
            </li>
          ))}
        </ol>
        <p className="meta">{a.note}</p>
      </section>
      <section className="country-sec">
        <h2>À lire aussi</h2>
        <ul>{FR_QUESTIONS.filter((o) => o.slug !== slug).map((o) => <li key={o.slug}><a href={`${FR}/questions/${o.slug}`}>{o.q}</a></li>)}</ul>
      </section>
      <Note />
    </FrShell>
  );
}
