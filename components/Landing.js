import Link from "next/link";
import programmes from "../lib/programmes.json";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { COUNTRY_IDS } from "../lib/options";
import { COUNTRY_INFO } from "../lib/countryInfo";
import Newsletter from "./Newsletter";
import { TOOLS, TOOL_ICONS } from "../lib/tools";
import { STEPS } from "../lib/journey";
import { HOME } from "../lib/homeText";

// A smaller Wikimedia thumbnail for the photo strip (only where a larger thumbnail of the same file is used).
const thumb = (url) => url.replace("/1280px-", "/960px-");

const PROMISE_ICONS = {
  src: <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6zM9 12l2 2 4-4" />,
  free: <path d="M20 12v8H4v-8M2 7h20v5H2zM12 21V7M12 7H8a2.5 2.5 0 1 1 0-5c3 0 4 5 4 5zm0 0h4a2.5 2.5 0 1 0 0-5c-3 0-4 5-4 5z" />,
  honest: <path d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18zM12 8v5M12 16h.01" />,
};

export function Icon({ d, size = 22 }) {
  return <svg viewBox="0 0 24 24" width={size} height={size} aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">{d}</svg>;
}

export default function Landing({ lang }) {
  const t = T[lang];
  const h = HOME[lang];
  const free = programmes.filter((p) => p.feePerYear === 0).length;
  const n = (v) => v.toLocaleString("en-US");
  const tool = (id) => TOOLS[lang].find((x) => x.id === id);
  return (
    <>
      <section className="gate">
        <h1>{h.title}</h1>
        <p className="lead">{h.lead(programmes.length, COUNTRY_IDS.length)}</p>
        <form className="gate-ask" action={`${t.base}/ask`} method="get" role="search">
          <label htmlFor="gate-q">{h.askLabel}</label>
          <div>
            <input id="gate-q" name="q" type="search" dir="auto" maxLength={600} placeholder={h.askPh} required minLength={2} />
            <button type="submit" className="btn gold">{h.askBtn}</button>
          </div>
        </form>
        <p className="gate-or"><span>{h.or}</span></p>
        <Link className="btn ghost-light" href={`${t.base}/quiz`}>{h.quiz}</Link>
        <ul className="gate-stats">
          {h.stats(programmes.length, free, COUNTRY_IDS.length).map(([v, label]) => (
            <li key={label}><b>{n(v)}</b><span>{label}</span></li>
          ))}
        </ul>
      </section>

      <ul className="promises">
        {h.promises.map(([id, title, text]) => (
          <li key={id}><Icon d={PROMISE_ICONS[id]} /><div><b>{title}</b><span>{text}</span></div></li>
        ))}
      </ul>

      <section className="journey" aria-labelledby="journey-h">
        <h2 id="journey-h" className="land-h">{h.journeyTitle}</h2>
        <p className="journey-lead">{h.journeyLead}</p>
        <ol>
          {STEPS.map((st, i) => (
            <li key={st.id} id={`step-${st.id}`}>
              <span className="step-key" aria-hidden="true"><i>{i + 1}</i></span>
              <div className="step-body">
                <small>{h.step(i + 1)}</small>
                <h3>{st[lang].title}</h3>
                <p>{st[lang].text}</p>
                <ul className="step-links">
                  {st.home.map((id) => {
                    const x = tool(id);
                    return x && (
                      <li key={id}>
                        <Link href={`${t.base}${x.href}`}><Icon d={TOOL_ICONS[id]} size={18} /><span>{x.title}</span></Link>
                      </li>
                    );
                  })}
                </ul>
                {st.tools.length > st.home.length && <Link className="step-more" href={`${t.base}/tools#${st.id}`}>{h.more}</Link>}
              </div>
            </li>
          ))}
        </ol>
      </section>

      <div className="dest-head">
        <h2 className="land-h">{h.destTitle}</h2>
        <Link href={`${t.base}/countries`}>{h.destAll}</Link>
      </div>
      <ul className="photo-strip">
        {COUNTRY_IDS.map((id) => {
          const info = COUNTRY_INFO[id];
          return (
            <li key={id}>
              <Link href={`${t.base}/country/${id}`}>
                <img src={thumb(info.photo[0])} alt={info.landmark[lang]} loading="lazy" />
                <span><Flag code={id} size={18} /> {t.countries[id]}</span>
              </Link>
            </li>
          );
        })}
      </ul>
      <details className="credit photo-credits">
        <summary>{t.photoCredit}</summary>
        <ul>
          {COUNTRY_IDS.map((id) => {
            const [, page, author, lic, licUrl] = COUNTRY_INFO[id].photo;
            return (
              <li key={id}>
                {t.countries[id]}: <a href={page} target="_blank" rel="noopener noreferrer"><bdi>{author}</bdi></a>, <a href={licUrl} target="_blank" rel="noopener noreferrer"><bdi>{lic}</bdi></a>
              </li>
            );
          })}
        </ul>
      </details>

      <Newsletter lang={lang} />
    </>
  );
}
