import Link from "@/components/Link";
import { EgyptOnlyNote } from "./Origin";
import { T } from "../lib/i18n";
import Flag from "../lib/Flag";
import { COUNTRY_IDS } from "../lib/options";
import { RECOGNITION, GUIDE_TEXT } from "../lib/guide";
import DocsChecklist from "./DocsChecklist";
import OriginText from "./OriginText";
import { LOCAL_IDS, byOrigin } from "../lib/localOrigins";

// Fields of RECOGNITION written for Egypt, with Saudi/Moroccan versions.
const OWN = { bg: ["note", "bgNote", "apostille"], cy: ["how", "cyHow", "apostille"], no: ["note", "noNote", "no"] };

export function RecognitionFacts({ code, lang }) {
  const r = RECOGNITION[code];
  if (!r) return null;
  const s = GUIDE_TEXT[lang];
  const o = OWN[code];
  const own = (field, def) => (o && o[0] === field
    ? <OriginText lang={lang} by={byOrigin((l) => <>{l.guide[o[1]][lang]} <a href={l.guide.src[o[2]]} target="_blank" rel="noopener noreferrer">↗</a></>)}>{def}</OriginText>
    : def);
  return (
    <>
      <dl className="ps-dl">
        <div><dt>{s.body}</dt><dd>{r.body[lang]}</dd></div>
        <div><dt>{s.how}</dt><dd>{own("how", r.how[lang])}</dd></div>
        <div><dt>{s.decides}</dt><dd>{r.decides[lang]}</dd></div>
        <div><dt>{s.note}</dt><dd>{own("note", r.note[lang])}</dd></div>
      </dl>
      <p className="ps-src">
        <a href={r.src} target="_blank" rel="noopener noreferrer">{s.source} ↗</a>
        {r.src2 && <> · <a href={r.src2} target="_blank" rel="noopener noreferrer">{s.source} 2 ↗</a></>}
        {r.check ? s.toCheck : ""}
      </p>
    </>
  );
}

export default function Guide({ lang }) {
  const t = T[lang];
  const s = GUIDE_TEXT[lang];
  return (
    <>
      <h1>{s.title}</h1>
      <EgyptOnlyNote lang={lang} what={{ ar: "خطوات التصديق والأوراق في هذه الصفحة", en: "The legalisation steps and documents on this page" }} covered={LOCAL_IDS} />
      <p className="lead">{s.lead}</p>
      <p><Link className="ctx-link" href={`${T[lang].base}/glossary`}>{lang === "ar" ? "هل هناك مصطلح غير واضح؟ راجع قاموس المصطلحات" : "A word you don't understand? See the glossary"}</Link></p>
      <nav className="guide-jump">
        <a href="#recognition">{s.recTitle}</a>
        <a href="#documents">{s.docsTitle}</a>
        <Link href={`${t.base}/compare`}>{s.cmpTitle}</Link>
      </nav>

      <section id="recognition" className="country-sec">
        <h2>{s.recTitle}</h2>
        <p>{s.recLead}</p>
        {COUNTRY_IDS.map((c) => (
          <details key={c} id={`rec-${c}`} className="card guide-acc">
            <summary><Flag code={c} size={22} /> {t.countries[c]}</summary>
            <RecognitionFacts code={c} lang={lang} />
          </details>
        ))}
      </section>

      <section id="documents" className="country-sec">
        <h2>{s.docsTitle}</h2>
        <p>{s.docsLead}</p>
        <DocsChecklist lang={lang} countries={COUNTRY_IDS.map((c) => [c, t.countries[c]])} />
        <p className="note"><Link href={`${t.base}/legalisation`}>{lang === "ar" ? "كيف تصدّق أوراقك وتترجمها خطوة بخطوة" : "How to legalise and translate your documents, step by step"}</Link></p>
      </section>

      <Link className="sch-promo" href={`${t.base}/compare`}>
        <span><b>{s.cmpTitle}</b>{s.cmpLead}</span>
        <span className="btn small">{s.cmpBtn}</span>
      </Link>

      <div className="notice">{s.note2}</div>
    </>
  );
}
