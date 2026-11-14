import Link from "next/link";
import { notFound } from "next/navigation";
import programmes from "../lib/programmes.json";
import { T, view } from "../lib/i18n";
import Flag from "../lib/Flag";
import { feeLabel } from "../lib/options";

export const staticParams = () => programmes.map((p) => ({ id: String(p.id) }));

export function programmeMeta(id, lang) {
  const p = programmes.find((x) => String(x.id) === id);
  return { title: p ? `${p.name} | ${T[lang].brand}` : T[lang].brand };
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
      <header className="prog-head">
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
          <dd>{known ? <span className="ltr">€{p.feePerYear.toLocaleString("en-US")}</span> : feeLabel(p, lang)}{p.feeNeedsCheck && known ? t.toCheck : ""}</dd>
        </div>
        <div><dt>{t.keyDuration}</dt><dd>{p.duration}</dd></div>
        <div><dt>{t.keyDeadline}</dt><dd>{p.deadline}</dd></div>
      </dl>

      <section className="apply">
        <h2>{t.linksTitle}</h2>
        <div className="links">
          <LinkRow label={t.reqLink} url={p.reqUrl} note={p.reqNote} t={t} primary={false} />
          <LinkRow label={t.applyLink} url={p.applyUrl} note={p.applyNote} t={t} primary />
        </div>
      </section>

      <div className="card">
        <dl className="details">
          {KEYS.map((k) => (
            <div key={k}>
              <dt>{t.fieldsDetail[k]}</dt>
              <dd>{p[k]}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="notice">
        {t.source} <a className="ltr" href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        <br />
        {t.reviewed} {p.reviewed} · {t.statusLabel} {p.status}
      </div>
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
