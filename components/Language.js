import Link from "next/link";
import programmes from "../lib/programmes.json";
import { T } from "../lib/i18n";
import Flag from "../lib/Flag";
import { COUNTRY_IDS } from "../lib/options";
import { COUNTRY_INFO } from "../lib/countryInfo";
import { ENGLISH_ALT } from "../lib/englishAlt";
import { TESTS, LOCAL, LANG_TEXT, LANG_REVIEWED } from "../lib/language";

export default function Language({ lang }) {
  const t = T[lang];
  const s = LANG_TEXT[lang];
  const englishOf = (p) => `${p.english || ""} ${p.en?.english || ""}`;
  const duoUnis = Object.values(ENGLISH_ALT).filter((a) => a.duo.b === "yes" || a.duo.m === "yes").length;
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>

      <h2>{s.testsTitle}</h2>
      <p>{s.testsLead}</p>
      <div className="lang-grid">
        {TESTS.map((x) => {
          const n = programmes.filter((p) => x.re.test(englishOf(p))).length;
          return (
            <section key={x.id} className="card lang-card">
              <h3><bdi>{x.name}</bdi></h3>
              <p className="lang-count">{s.progs(n)}{x.id === "duolingo" && duoUnis > 0 && <> {s.duoAlt(duoUnis)}</>}</p>
              <dl className="details">
                <div><dt>{s.fee}</dt><dd>{x.fee[lang]}</dd></div>
                <div><dt>{s.where}</dt><dd>{x.where[lang]}</dd></div>
                <div><dt>{s.results}</dt><dd>{x.results[lang]}</dd></div>
              </dl>
              <p className="note">{x.note[lang]}</p>
              <p className="note"><a href={x.src} target="_blank" rel="noopener noreferrer">{s.src} ↗</a>{x.src2 && <> · <a href={x.src2} target="_blank" rel="noopener noreferrer">{s.src} 2 ↗</a></>}</p>
            </section>
          );
        })}
      </div>
      <p className="tool-strip">
        <Link href={`${t.base}/english-check`}>{s.checkLink}</Link>
        <Link href={`${t.base}/without-ielts`}>{s.noIelts}</Link>
      </p>

      <h2>{s.localTitle}</h2>
      <p>{s.localLead}</p>
      <div className="lang-grid">
        {COUNTRY_IDS.map((c) => {
          const info = LOCAL[c];
          const language = COUNTRY_INFO[c]?.language?.[lang];
          return (
            <section key={c} className="card lang-card" id={`lang-${c}`}>
              <h3><Flag code={c} size={20} /> <Link href={`${t.base}/country/${c}`}>{t.countries[c]}</Link></h3>
              {language && <p><strong>{s.lang}:</strong> {language}</p>}
              {info ? (
                <dl className="details">
                  <div><dt>{s.exam}</dt><dd>{info.exam[lang]}</dd></div>
                  {info.egypt && <div><dt>{s.egypt}</dt><dd>{info.egypt[lang]}{info.egyptUrl && <> <a href={info.egyptUrl} target="_blank" rel="noopener noreferrer">↗</a></>}</dd></div>}
                  {info.free && <div><dt>{s.free}</dt><dd><a href={info.free.url} target="_blank" rel="noopener noreferrer"><bdi>{info.free.name}</bdi></a>: {info.free[lang]}</dd></div>}
                </dl>
              ) : <p className="note">{s.none}</p>}
              {info?.src && <p className="note"><a href={info.src} target="_blank" rel="noopener noreferrer">{s.src} ↗</a></p>}
            </section>
          );
        })}
      </div>
      <div className="notice">{s.warn}</div>
      <p className="note">{s.reviewed}: {LANG_REVIEWED}</p>
    </>
  );
}
