// Bawabat AlSafar visas section (bawabatalsafar.com/visas, served from /study/visas through a rewrite).
// Uses the portal root layouts, its own header (SectionMark + section name) and the Bawabat AlSafar footer.
import { Analytics } from "@vercel/analytics/next";
import { Mark, SectionMark } from "./Shell";
import Flag from "../lib/Flag";
import VisaChecker from "./VisaChecker";
import PointsCheck from "./PointsCheck";
import { ROUTES, RTEXT } from "../lib/visaRoutes";
import NomadFinder from "./NomadFinder";
import { NOMADS, NTEXT, NOMAD_HUB } from "../lib/nomadVisas";
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
      <h2>{RTEXT[lang].section}</h2>
      <p className="meta">{RTEXT[lang].sectionLead}</p>
      <ul className="vz-dests">
        <li>
          <a className="card vz-dest" href={`${b}/${NOMAD_HUB}`}>
            <span className="vz-dname"><b>{NTEXT[lang].hubTitle}</b></span>
            <span className="meta">{lang === "ar" ? `${NOMADS.length} دولة: الدخل المطلوب والمدة وأين تقدّم` : `${NOMADS.length} countries: income needed, length and where to apply`}</span>
          </a>
        </li>
        {ROUTES.filter((r) => !r.nomad).map((r) => (
          <li key={r.slug}>
            <a className="card vz-dest" href={`${b}/${r.slug}`}>
              <span className="vz-dname"><Flag code={r.id} /> <b>{r.name[lang]}</b></span>
              <span className="meta">{r.short[lang]}</span>
            </a>
          </li>
        ))}
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

export function VisaRoute({ r, lang }) {
  const t = RTEXT[lang];
  const b = visasBase(lang);
  const ext = { target: "_blank", rel: "noopener noreferrer" };
  return (
    <Frame lang={lang} other={`${visasBase(lang === "ar" ? "en" : "ar")}/${r.slug}`} crumbs={r.nomad ? <><a href={`${b}/${NOMAD_HUB}`}>{NTEXT[lang].hubTitle}</a> {lang === "ar" ? "←" : "→"} {r.name[lang]}</> : r.name[lang]} note={t.disclaimer}>
      <h1 className="vz-h1"><Flag code={r.id} /> {r.name[lang]}</h1>
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
