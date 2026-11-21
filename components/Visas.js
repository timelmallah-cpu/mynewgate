// Bawabat AlSafar visas section (bawabatalsafar.com/visas, served from /study/visas through a rewrite).
// Uses the portal root layouts, its own header (SectionMark + section name) and the Bawabat AlSafar footer.
import { Analytics } from "@vercel/analytics/next";
import { Mark, SectionMark } from "./Shell";
import Flag from "../lib/Flag";
import VisaChecker from "./VisaChecker";
import VisaWizard from "./VisaWizard";
import VisaHero from "./VisaHero";
import VisaAsk from "./VisaAsk";
import { PTEXT, natSlug } from "../lib/visitPairs";
import { T as STUDY_T } from "../lib/i18n";
import { COUNTRY_IDS } from "../lib/options";
import { hasVisaRoute } from "../lib/embassy";
import PointsCheck from "./PointsCheck";
import AtPointsCheck from "./AtPointsCheck";
import { ROUTES, RTEXT } from "../lib/visaRoutes";
import NomadFinder from "./NomadFinder";
import { NOMADS, NTEXT, NOMAD_HUB } from "../lib/nomadVisas";
import { DEST, ORIGINS, ORIGIN_NAME, KIND, VTEXT, VISIT_REVIEWED, statusFor } from "../lib/visit";
import { BASE } from "../lib/site";
import "@fontsource-variable/readex-pro/index.css";
import "@fontsource/ibm-plex-sans-arabic/arabic-400.css";
import "@fontsource/ibm-plex-sans-arabic/arabic-600.css";
import "@fontsource/ibm-plex-sans-arabic/latin-400.css";
import "@fontsource/ibm-plex-sans-arabic/latin-600.css";
import "../app/globals.css";

const ID = "visas-immigration";
export const visasBase = (lang) => (lang === "en" ? "/en/visas" : "/visas");
const TAG = { ar: "اكتشف فرص الدراسة والعمل والهجرة حول العالم، وقارن الشروط والتكاليف وخطوات التقديم في مكان واحد وباللغة العربية.", en: "Discover study, work and immigration opportunities around the world, and compare requirements, costs and application steps in one place, in Arabic." };
const fmt = (d, lang) => new Date(d).toLocaleDateString(lang === "ar" ? "ar-EG-u-nu-latn" : "en-GB", { day: "numeric", month: "long", year: "numeric" });

function Frame({ lang, other, crumbs, children, note }) {
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
        <p className="notice">{note || t.disclaimer}</p>
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
  const box = (k) => <svg className="flag" width="28" height="18.7" viewBox="0 0 30 20" aria-hidden="true">{k}<rect x="0.25" y="0.25" width="29.5" height="19.5" fill="none" stroke="rgba(0,0,0,.15)" strokeWidth=".5" /></svg>;
  if (id === "jp") return box(<><rect width="30" height="20" fill="#FFFFFF" /><circle cx="15" cy="10" r="6" fill="#BC002D" /></>);
  if (id === "th") return box(<><rect width="30" height="20" fill="#A51931" /><rect y="3.33" width="30" height="13.33" fill="#F4F5F8" /><rect y="6.67" width="30" height="6.67" fill="#2D2A4A" /></>);
  if (id === "br") return box(<><rect width="30" height="20" fill="#009C3B" /><path d="M15 2.5 L27 10 L15 17.5 L3 10 Z" fill="#FFDF00" /><circle cx="15" cy="10" r="4.2" fill="#002776" /></>);
  if (id === "kr") return box(<><rect width="30" height="20" fill="#FFFFFF" /><path d="M11 10 A4 4 0 0 1 19 10 A2 2 0 0 1 15 10 A2 2 0 0 0 11 10 Z" fill="#CD2E3A" /><path d="M11 10 A4 4 0 0 0 19 10 A2 2 0 0 0 15 10 A2 2 0 0 1 11 10 Z" fill="#0047A0" /><g stroke="#000" strokeWidth="0.9"><path d="M4.5 4.5l2.5-1.7M5.2 5.5l2.5-1.7M5.9 6.5l2.5-1.7" /><path d="M22 2.8l2.5 1.7M22.7 1.8l2.5 1.7" /><path d="M4.5 15.5l2.5 1.7M5.2 14.5l2.5 1.7" /><path d="M22 17.2l2.5-1.7M22.7 18.2l2.5-1.7M21.3 16.2l2.5-1.7" /></g></>);
  if (id === "az") return box(<><rect width="30" height="6.67" fill="#00B5E2" /><rect y="6.67" width="30" height="6.67" fill="#EF3340" /><rect y="13.33" width="30" height="6.67" fill="#509E2F" /><circle cx="14" cy="10" r="2.6" fill="#FFFFFF" /><circle cx="14.8" cy="10" r="2.1" fill="#EF3340" /><circle cx="17.6" cy="10" r="0.9" fill="#FFFFFF" /></>);
  if (id === "mv") return box(<><rect width="30" height="20" fill="#D21034" /><rect x="5" y="4" width="20" height="12" fill="#007E3A" /><circle cx="15.5" cy="10" r="3.4" fill="#FFFFFF" /><circle cx="16.8" cy="10" r="2.9" fill="#007E3A" /></>);
  return <Flag code={id} />;
}

const HERO = {
  ar: {
    lead: "زيارة ودراسة وبحث عن عمل وعمل عن بُعد، لـ22 جنسية عربية: هل تحتاج تأشيرة، وكم الرسوم، وأين تقدّم، من المصادر الرسمية.",
    askLabel: "اسأل عن أي شيء في التأشيرات", askPh: "مثلاً: تأشيرة تركيا للمصريين", askBtn: "اسأل", or: "أو",
    quiz: "أجب عن 3 أسئلة لتعرف أي تأشيرة تحتاج",
    stats: (n, d, r) => [[n, "جنسية عربية"], [d, "وجهات زيارة"], [r, "تأشيرة عمل وإقامة"]],
    quickLabel: "اختصارات", quick: [["/france", "تأشيرة شنغن"], ["/germany-opportunity-card", "بطاقة الفرص الألمانية"], ["/digital-nomad-visas", "الرحالة الرقميون"], ["/uae-job-seeker", "البحث عن عمل في الإمارات"], ["/visa", "تأشيرة الدراسة"]],
  },
  en: {
    lead: "Visits, study, job search and remote work, for 22 Arab nationalities: whether you need a visa, what it costs and where to apply, from official sources.",
    askLabel: "Ask anything about visas", askPh: "e.g. Türkiye visa for Egyptians", askBtn: "Ask", or: "or",
    quiz: "Answer 3 questions to find the visa you need",
    stats: (n, d, r) => [[n, "Arab nationalities"], [d, "visit destinations"], [r, "work and residence visas"]],
    quickLabel: "Shortcuts", quick: [["/france", "Schengen visa"], ["/germany-opportunity-card", "Germany's Opportunity Card"], ["/digital-nomad-visas", "Digital nomads"], ["/uae-job-seeker", "Job search in the UAE"], ["/visa", "Student visa"]],
  },
};

export function VisasHub({ lang }) {
  const t = VTEXT[lang];
  const b = visasBase(lang);
  return (
    <Frame lang={lang} other={visasBase(lang === "ar" ? "en" : "ar")} note={RTEXT[lang].disclaimer}>
      <VisaHero lang={lang} title={t.title} lead={HERO[lang].lead} text={{ ...HERO[lang], stats: undefined, quick: undefined }} base={b} studyBase={lang === "ar" ? BASE : `${BASE}/en`}
        stats={HERO[lang].stats(ORIGINS.length, DEST.length, ROUTES.filter((r) => r.job && !r.closed).length + NOMADS.length)} />
      <nav className="quick" aria-label={HERO[lang].quickLabel}>
        <ul>{HERO[lang].quick.map(([href, label]) => <li key={href}><a className="chip" href={href === "/visa" ? `${lang === "ar" ? BASE : `${BASE}/en`}${href}` : `${b}${href}`}>{label}</a></li>)}</ul>
      </nav>
      <VisaWizard lang={lang} base={b} studyBase={lang === "ar" ? BASE : `${BASE}/en`}
        countries={Object.fromEntries(COUNTRY_IDS.map((c) => [c, STUDY_T[lang].countries[c]]))}
        studyReady={Object.fromEntries(ORIGINS.map((o) => [o.c, COUNTRY_IDS.filter((c) => hasVisaRoute(c, o.c))]).filter(([, v]) => v.length))}
        jobRoutes={ROUTES.filter((r) => r.job).map((r) => ({ id: r.id, slug: r.slug, name: r.name[lang], short: r.short[lang], points: r.tool === "points" || r.tool === "at-points", closed: !!r.closed }))} />
      <h2>{t.visitTitle}</h2>
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
      <h2>{RTEXT[lang].jobSection}</h2>
      <p className="meta">{RTEXT[lang].jobLead}</p>
      <ul className="vz-dests">
        {ROUTES.filter((r) => r.job).map((r) => (
          <li key={r.slug}>
            <a className="card vz-dest" href={`${b}/${r.slug}`}>
              <span className="vz-dname"><DestFlag id={r.id} /> <b>{r.name[lang]}</b>{r.closed ? <> <span className="vz-closed">{RTEXT[lang].closed}</span></> : null}</span>
              <span className="meta">{r.short[lang]}</span>
            </a>
          </li>
        ))}
      </ul>
      <h2>{RTEXT[lang].longSection}</h2>
      <p className="meta">{RTEXT[lang].sectionLead}</p>
      <ul className="vz-dests">
        <li>
          <a className="card vz-dest" href={`${b}/${NOMAD_HUB}`}>
            <span className="vz-dname"><b>{NTEXT[lang].hubTitle}</b></span>
            <span className="meta">{lang === "ar" ? `${NOMADS.length} دولة: الدخل المطلوب والمدة وأين تقدّم` : `${NOMADS.length} countries: income needed, length and where to apply`}</span>
          </a>
        </li>
        {ROUTES.filter((r) => !r.nomad && !r.job).map((r) => (
          <li key={r.slug}>
            <a className="card vz-dest" href={`${b}/${r.slug}`}>
              <span className="vz-dname"><DestFlag id={r.id} /> <b>{r.name[lang]}</b></span>
              <span className="meta">{r.short[lang]}</span>
            </a>
          </li>
        ))}
      </ul>
      <h2>{t.studyTitle}</h2>
      <ul className="vz-dests">
        <li>
          <a className="card vz-dest" href={lang === "ar" ? `${BASE}/visa` : `${BASE}/en/visa`}>
            <span className="vz-dname"><b>{t.studyTitle}</b></span>
            <span className="meta">{t.studyCard(COUNTRY_IDS.length)}</span>
          </a>
        </li>
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
                  <th scope="row"><a href={`${b}/${d.slug}/${natSlug(o.c)}`}>{o[lang]}</a></th>
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

// One nationality to one destination (/visas/<destination>/<nationality>).
export function VisaPair({ d, o, lang }) {
  const t = VTEXT[lang];
  const pt = PTEXT[lang];
  const b = visasBase(lang);
  const st = statusFor(d, o);
  const name = d.name[lang];
  const nat = natSlug(o);
  const rows = [...ORIGINS].filter((x) => x.c !== o).sort((a, c) => a[lang].localeCompare(c[lang], lang));
  const faq = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: [{ "@type": "Question", name: pt.q(name, o), acceptedAnswer: { "@type": "Answer", text: `${KIND[st.s][lang]}. ${st.n[lang]}` } }] };
  const need = st.s !== "free" && st.s !== "banned";
  return (
    <Frame lang={lang} other={`${visasBase(lang === "ar" ? "en" : "ar")}/${d.slug}/${nat}`} crumbs={<><a href={`${b}/${d.slug}`}>{name}</a> {lang === "ar" ? "←" : "→"} {ORIGIN_NAME[o][lang]}</>}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }} />
      <h1 className="vz-h1"><DestFlag id={d.id} /> {pt.h1(name, o)}</h1>
      <p className="lead">{pt.q(name, o)} <span className="meta">({pt.short})</span></p>
      <div className={`vz-result vz-${st.s}`}>
        <p className="vz-who">{t.result(ORIGIN_NAME[o][lang], name)}</p>
        <p className="vz-kind">{KIND[st.s][lang]}</p>
        <p>{st.n[lang]}</p>
        {st.src ? <p className="vz-links"><a href={st.src} target="_blank" rel="noopener noreferrer">{t.src} ↗</a></p> : null}
      </div>
      {need && (
        <section className="card">
          <dl className="vz-facts">
            <div><dt>{t.visa}</dt><dd>{d.visa[lang]}</dd></div>
            <div><dt>{t.fee}</dt><dd>{d.fee[lang]} <a href={d.feeSrc} target="_blank" rel="noopener noreferrer" aria-label={t.src}>↗</a></dd></div>
            <div><dt>{t.stay}</dt><dd>{d.stay[lang]}</dd></div>
            <div><dt>{t.time}</dt><dd>{d.time[lang]} <a href={d.timeSrc} target="_blank" rel="noopener noreferrer" aria-label={t.src}>↗</a></dd></div>
            <div><dt>{t.where}</dt><dd>{d.where[lang]} <a href={d.whereUrl} target="_blank" rel="noopener noreferrer">{t.src} ↗</a></dd></div>
            {d.early && <div><dt>{t.early}</dt><dd>{d.early[lang]}</dd></div>}
          </dl>
          {d.schengen && <p className="meta">{t.schengenNote}</p>}
        </section>
      )}
      {need && (
        <section className="card">
          <h2>{t.docs}</h2>
          <ul>{d.docs[lang].map((x) => <li key={x}>{x}</li>)}</ul>
          <p className="meta"><a href={d.docsSrc} target="_blank" rel="noopener noreferrer">{t.src} ↗</a></p>
        </section>
      )}
      <VisaAsk id="vask-pair" level={2} lang={lang} ctx={{ p: "visit", o, d: d.id }} base={b} studyBase={lang === "ar" ? BASE : `${BASE}/en`} />
      <h2>{pt.otherDest(o)}</h2>
      <p className="chips vz-other">{DEST.filter((x) => x.id !== d.id).map((x) => <a key={x.id} className="chip" href={`${b}/${x.slug}/${nat}`}>{x.name[lang]}</a>)}</p>
      <h2>{pt.otherNat}</h2>
      <p className="chips vz-other">{rows.map((x) => <a key={x.c} className="chip" href={`${b}/${d.slug}/${natSlug(x.c)}`}>{x[lang]}</a>)}</p>
      <p><a href={`${b}/${d.slug}`}>{pt.allDest(name)} {lang === "ar" ? "←" : "→"}</a></p>
    </Frame>
  );
}

export function VisaRoute({ r, lang }) {
  const t = RTEXT[lang];
  const b = visasBase(lang);
  const ext = { target: "_blank", rel: "noopener noreferrer" };
  return (
    <Frame lang={lang} other={`${visasBase(lang === "ar" ? "en" : "ar")}/${r.slug}`} crumbs={r.nomad ? <><a href={`${b}/${NOMAD_HUB}`}>{NTEXT[lang].hubTitle}</a> {lang === "ar" ? "←" : "→"} {r.name[lang]}</> : r.name[lang]} note={t.disclaimer}>
      <h1 className="vz-h1"><DestFlag id={r.id} /> {r.name[lang]}</h1>
      {r.closed && <p className="vz-closed">{t.closed}</p>}
      <p className="lead">{r.lead[lang]}</p>
      <section className="card">
        <dl className="vz-facts">
          {r.facts.map(([k, val, src]) => <div key={k.en}><dt>{k[lang]}</dt><dd>{val[lang]} <a href={src} {...ext} aria-label={t.src}>↗</a></dd></div>)}
        </dl>
      </section>
      <section className="card">
        <h2>{r.who.title[lang]}</h2>
        <ul>{r.who.items.map((x) => <li key={x.en}>{x[lang]}</li>)}</ul>
        <p className="meta"><a href={r.who.src} {...ext}>{t.src} ↗</a></p>
      </section>
      {r.tool === "points" && <PointsCheck lang={lang} selfCheck={r.links[0][1]} />}
      {r.tool === "at-points" && <AtPointsCheck lang={lang} calc={r.links[0][1]} />}
      <section className="card">
        <h2>{t.docs}</h2>
        <ul>{r.docs[lang].map((x) => <li key={x}>{x}</li>)}</ul>
        <p className="meta"><a href={r.docs.src} {...ext}>{t.src} ↗</a></p>
      </section>
      <section className="card">
        <h2>{t.links}</h2>
        <ul>{r.links.map(([l, u]) => <li key={u}><a href={u} {...ext}>{l[lang]} ↗</a></li>)}</ul>
        <p className="meta">{r.note[lang]}</p>
      </section>
      <p className="chips vz-other"><a className="chip" href={`${b}/${NOMAD_HUB}`}>{NTEXT[lang].all}</a>{r.nomad ? NOMADS.filter((x) => !x.own).map((x) => <a key={x.id} className="chip" href={`${b}/${x.slug}`}>{x.name[lang]}</a>) : ROUTES.filter((x) => x.slug !== r.slug && !x.nomad).map((x) => <a key={x.slug} className="chip" href={`${b}/${x.slug}`}>{x.name[lang]}</a>)}<a className="chip" href={b}>{VTEXT[lang].destinations}</a></p>
    </Frame>
  );
}

const NFlag = ({ id }) => <DestFlag id={id} />;
const money = (n, lang) => Math.round(n).toLocaleString(lang === "ar" ? "ar-EG-u-nu-latn" : "en-GB");

export function NomadHub({ lang }) {
  const t = NTEXT[lang];
  const b = visasBase(lang);
  const fam = (f) => (f === true ? t.yes : f === false ? t.no : t.unk);
  return (
    <Frame lang={lang} other={`${visasBase(lang === "ar" ? "en" : "ar")}/${NOMAD_HUB}`} crumbs={t.hubTitle} note={t.disclaimer}>
      <section className="gate vz-hero">
        <h1>{t.hubTitle}</h1>
        <p className="lead">{t.hubLead}</p>
      </section>
      <NomadFinder lang={lang} base={b} />
      <div className="vz-table-wrap">
        <table className="vz-table">
          <thead><tr><th scope="col">{t.country}</th><th scope="col">{t.minCol}</th><th scope="col">{t.famCol}</th></tr></thead>
          <tbody>
            {NOMADS.map((n) => (
              <tr key={n.id}>
                <th scope="row"><a href={`${b}/${n.slug}`}><NFlag id={n.id} /> {n.name[lang]}</a></th>
                <td>{n.min != null ? `${money(n.min, lang)} €${n.minCheck ? ` (${t.estimate})` : ""}` : t.unk}</td>
                <td>{fam(n.family)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Frame>
  );
}

export function NomadPage({ n, lang }) {
  const t = NTEXT[lang];
  const b = visasBase(lang);
  const ext = { target: "_blank", rel: "noopener noreferrer" };
  const fam = n.family === true ? t.yes : n.family === false ? t.no : t.unk;
  const rows = [
    [t.visa, n.visa[lang]],
    [t.incomeH, n.income[lang] + (n.minNote ? "" : "")],
    [t.stay, n.stay[lang]],
    [t.family, n.famNote ? `${fam}. ${n.famNote[lang]}` : fam],
    n.docs && [t.docs, n.docs[lang]],
    n.fee && [t.fee, n.fee[lang]],
    n.where && [t.where, n.where[lang]],
    n.natNote && [t.nat, n.natNote[lang]],
  ].filter(Boolean);
  return (
    <Frame lang={lang} other={`${visasBase(lang === "ar" ? "en" : "ar")}/${n.slug}`} crumbs={<><a href={`${b}/${NOMAD_HUB}`}>{t.hubTitle}</a> {lang === "ar" ? "←" : "→"} {n.name[lang]}</>} note={t.disclaimer}>
      <h1 className="vz-h1"><NFlag id={n.id} /> {t.pageTitle(n.name[lang])}</h1>
      <section className="card">
        <dl className="vz-facts">
          {rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}
        </dl>
        <p className="meta"><a href={n.src} {...ext}>{t.src} ↗</a></p>
      </section>
      {n.more && (
        <section className="card">
          <h2>{t.more}</h2>
          <ul>{n.more.map(([l, u]) => <li key={u}><a href={u} {...ext}>{l[lang]} ↗</a></li>)}</ul>
        </section>
      )}
      <p className="chips vz-other"><a className="chip" href={`${b}/${NOMAD_HUB}`}>{t.all}</a>{NOMADS.filter((x) => x.id !== n.id).map((x) => <a key={x.id} className="chip" href={`${b}/${x.slug}`}>{x.name[lang]}</a>)}</p>
    </Frame>
  );
}
