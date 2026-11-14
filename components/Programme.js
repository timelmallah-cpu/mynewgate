import Link from "next/link";
import { notFound } from "next/navigation";
import programmes from "../lib/programmes.json";
import { T, view } from "../lib/i18n";

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
  return (
    <>
      <Link href={`${t.base}/quiz`}>{t.backToQuiz}</Link>
      <h1 className="ltr" style={{ textAlign: "start" }}>{p.name}</h1>
      <p className="meta">
        <span className="ltr">{p.university}</span> · {t.city} {p.city} · {p.countryLabel} · {p.fieldLabel}
      </p>
      <div className="card">
        <dl>
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
