import { pageMeta } from "../lib/site";
import Link from "next/link";
import WhatsApp from "./WhatsApp";
import AddToCalendar from "./AddToCalendar";
import { Local } from "./Currency";
import { notFound } from "next/navigation";
import programmes from "../lib/programmes.json";
import { T, view } from "../lib/i18n";
import Flag from "../lib/Flag";
import { feeLabel } from "../lib/options";
import { scholarshipsFor } from "../lib/scholarships";
import ReportLink from "./ReportLink";
import SaveButton from "./SaveButton";
import CostCalc from "./CostCalc";

export const staticParams = () => programmes.map((p) => ({ id: String(p.id) }));

export function programmeMeta(id, lang) {
  const raw = programmes.find((x) => String(x.id) === id);
  if (!raw) return { title: T[lang].brand };
  const p = view(raw, lang);
  const ar = lang === "ar";
  const fee = raw.feePerYear === 0 ? (ar ? "بدون رسوم دراسية" : "No tuition fee") : raw.feePerYear ? (ar ? `الرسوم ${raw.feePerYear.toLocaleString("en-US")} يورو سنوياً` : `€${raw.feePerYear.toLocaleString("en-US")} a year`) : (ar ? "الرسوم غير منشورة" : "Fee not published");
  const level = { bachelor: ar ? "بكالوريوس" : "Bachelor's", doctorate: ar ? "دكتوراه" : "Doctorate" }[raw.level] || (ar ? "ماجستير" : "Master's");
  const description = ar
    ? `${level} بالإنجليزية في ${raw.university}، ${String(p.city).split(" (")[0]}، ${p.countryLabel}. ${fee}. المواعيد وشروط اللغة والمعيشة بالعربي مع رابط المصدر الرسمي.`
    : `${level} taught in English at ${raw.university}, ${p.city}, ${p.countryLabel}. ${fee}. Deadlines, language requirements and living costs with the official source.`;
  return pageMeta(lang, { title: `${raw.name} | ${T[lang].brand}`, description, path: `/programme/${raw.id}`, image: raw.photo?.src });
}

const KEYS = ["degree", "duration", "feeText", "adminFee", "deadline", "english", "other", "howToApply", "living", "housing"];

export default function Programme({ id, lang }) {
  const t = T[lang];
  const raw = programmes.find((x) => String(x.id) === id);
  if (!raw) notFound();
  const p = view(raw, lang);
  const url = p.source.split(" ")[0];
  const known = p.feePerYear !== null && p.feePerYear > 0;
  return (
    <>
      <Link className="back" href={`${t.base}/quiz`}>{t.backToQuiz}</Link>
      <header className={p.photo ? "prog-head has-photo" : "prog-head"}>
        {p.photo && <img className="prog-photo" src={p.photo.src} alt={p.university} />}
        <h1 className="ltr">{p.name}</h1>
        <div className="where">
          <span className="ltr">{p.university}</span>
          <span>{t.city} {p.city}</span>
          <span><Flag code={p.country} size={18} /> {p.countryLabel}</span>
          <span>{p.fieldLabel}</span>
        </div>
      </header>
      <dl className="prog-key">
        <div>
          <dt>{t.keyFee}</dt>
          <dd>{known ? <><span className="ltr">€{p.feePerYear.toLocaleString("en-US")}</span><Local eur={p.feePerYear} lang={lang} /></> : feeLabel(p, lang)}{p.feeNeedsCheck && known ? t.toCheck : ""}</dd>
        </div>
        <div><dt>{t.keyDuration}</dt><dd>{p.duration}</dd></div>
        <div><dt>{t.keyDeadline}</dt><dd>{p.deadline}<Link className="ctx-link" href={`${t.base}/planner?id=${raw.id}`}>{lang === "ar" ? "خطط مواعيدك لهذا البرنامج" : "Plan your dates for this programme"}</Link></dd></div>
        <div><dt>{lang === "ar" ? "شرط الإنجليزية" : "English requirement"}</dt><dd>{p.english}<Link className="ctx-link" href={`${t.base}/english-check?country=${raw.country}&level=${raw.level}`}>{lang === "ar" ? "هل درجتك تكفي؟ قارنها بالبرامج" : "Is your score enough? Check it"}</Link></dd></div>
      </dl>
      {p.photo && <PhotoCredit ph={p.photo} p={p} t={t} />}
      <div className="save-row"><SaveButton k={`p:${raw.id}`} lang={lang} /> <Link className="btn ghost small" href={`${t.base}/compare?ids=${raw.id}`}>{lang === "ar" ? "قارنه ببرامج أخرى" : "Compare with others"}</Link> <WhatsApp lang={lang} path={`${t.base}/programme/${raw.id}`} text={`${raw.name} | ${raw.university} (${p.countryLabel})\n${lang === "ar" ? "الرسوم" : "Fee"}: ${known ? `€${p.feePerYear.toLocaleString("en-US")}` : feeLabel(p, lang)}\n${t.keyDeadline}: ${p.deadline}`} /></div>
      <AddToCalendar k={`p-${raw.id}`} lang={lang} />

      <section className="apply">
        <h2>{t.linksTitle}</h2>
        <div className="links">
          <LinkRow label={t.reqLink} url={p.reqUrl} note={p.reqNote} t={t} primary={false} />
          <LinkRow label={t.applyLink} url={p.applyUrl} note={p.applyNote} t={t} primary />
        </div>
      </section>

      <ProgScholarships raw={raw} t={t} lang={lang} />

      <CostCalc p={p} lang={lang} />

      <MapBox p={p} t={t} />

      <div className="card">
        <dl className="details">
          {KEYS.map((k) => (
            <div key={k}>
              <dt>{t.fieldsDetail[k]}</dt>
              <dd>{p[k]}{k === "housing" && <Link className="ctx-link" href={`${t.base}/housing?country=${raw.country}&city=${encodeURIComponent(raw.en.city.split(" (")[0])}`}>{lang === "ar" ? "سكن الطلاب الرسمي في المدينة وتحذير من النصب" : "Official student housing in this city, and scam warnings"}</Link>}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="notice">
        {t.source} <a className="ltr" href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        <br />
        {t.reviewed} {p.reviewed} · {t.statusLabel} {p.status}
      </div>
      <ReportLink lang={lang} what={`${raw.name} | ${raw.university}`} path={`${t.base}/programme/${raw.id}`} />
    </>
  );
}

function LinkRow({ label, url, note, t, primary }) {
  return (
    <div>
      {url ? (
        <>
          <a className={primary ? "btn gold" : "btn"} href={url} target="_blank" rel="noopener noreferrer" style={{ width: "100%" }}>
            {label} ↗
          </a>
          {note && <div className="note">{note}</div>}
        </>
      ) : (
        <>
          <div style={{ fontWeight: 600 }}>{label}</div>
          <div className="note">{t.linkMissing}</div>
        </>
      )}
    </div>
  );
}

// City map from OpenStreetMap (no key, no tracking) + a Google Maps search for the university.
function MapBox({ p, t }) {
  const q = encodeURIComponent(`${p.university}, ${p.en ? p.en.city : p.city}`);
  const gmaps = `https://www.google.com/maps/search/?api=1&query=${q}`;
  let src = null;
  if (p.coords) {
    const [lat, lon] = p.coords;
    const bbox = [lon - 1.1, lat - 0.5, lon + 1.1, lat + 0.5].map((v) => v.toFixed(4)).join(",");
    src = `https://www.openstreetmap.org/export/embed.html?bbox=${bbox}&layer=mapnik&marker=${lat},${lon}`;
  }
  return (
    <section className="mapbox">
      <h2>{t.mapTitle}</h2>
      {src && <iframe title={t.mapFrame} src={src} loading="lazy" referrerPolicy="no-referrer" />}
      <div className="map-actions">
        <a className="btn ghost small" href={gmaps} target="_blank" rel="noopener noreferrer">{t.openMaps} ↗</a>
        <span className="note">{t.mapNote}</span>
      </div>
    </section>
  );
}

// Attribution required by the photo's free licence (author, licence, link to the file).
function PhotoCredit({ ph, p, t }) {
  const shared = p.university.includes("&") ? ` (${t.photoOf} ${ph.of})` : "";
  return (
    <p className="credit">
      {t.photoBy}{" "}
      <a href={ph.page} target="_blank" rel="noopener noreferrer" className="ltr">{ph.author || t.photoUnknownAuthor}</a>
      {" · "}
      {ph.licenseUrl ? (
        <a href={ph.licenseUrl} target="_blank" rel="noopener noreferrer" className="ltr">{ph.license}</a>
      ) : (
        <span className="ltr">{ph.license}</span>
      )}
      {" · "}{t.photoSource}{shared}
    </p>
  );
}

// Fully funded scholarships linked to this programme's university or country.
function ProgScholarships({ raw, t, lang }) {
  const list = scholarshipsFor(raw);
  const st = t.sch;
  return (
    <section className="prog-sch">
      <h2>{st.progTitle}</h2>
      {list.length > 0 && <p className="note">{st.progNote}</p>}
      <ul>
        {list.map((s) => (
          <li key={s.id}>
            <Link href={`${t.base}/scholarships/${s.id}`}>{s.name[lang]}</Link>
            <span className="note">{s.summary[lang]} {s.links.note ? s.links.note[lang] : ""}</span>
          </li>
        ))}
      </ul>
      <Link className="btn ghost small" href={`${t.base}/scholarships`}>{st.allSch}</Link>
    </section>
  );
}
