import Link from "@/components/Link";
import programmes from "../lib/programmes.json";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { REGIONS, REGION_TEXT, regionHref, regionById } from "../lib/regions";
import { COUNTRY_INFO } from "../lib/countryInfo";
import Newsletter from "./Newsletter";
import RegionInterest from "./RegionInterest";

const count = (cs) => programmes.filter((p) => cs.includes(p.country)).length;
const GLOBE = <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18" /></svg>;

// Home page cards: one per region, live ones with their flags and counts, the others marked "coming soon".
export function RegionCards({ lang }) {
  const t = T[lang];
  const s = REGION_TEXT[lang];
  return (
    <section className="regions card" aria-labelledby="regions-h">
      <h2 id="regions-h">{s.ask}</h2>
      <p>{s.askLead}</p>
      <ul>
        {REGIONS.map((r) => {
          const live = r.countries.length > 0;
          return (
            <li key={r.id} className={live ? "" : "soon"}>
              <Link href={regionHref(r, t.base)}>
                <b>{s.names[r.id]}</b>
                {live ? (
                  <>
                    <span className="region-flags" aria-hidden="true">{r.countries.slice(0, 6).map((c) => <Flag key={c} code={c} size={16} />)}{r.countries.length > 6 && <i>+{r.countries.length - 6}</i>}</span>
                    <small>{s.count(r.countries.length, count(r.countries))}</small>
                  </>
                ) : (
                  <><span className="region-flags" aria-hidden="true">{GLOBE}</span><small className="soon-tag">{s.soon}</small></>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

// /region/<id>: the region's countries, or a "coming soon" page with an interest button and the newsletter.
export default function Region({ id, lang }) {
  const t = T[lang];
  const s = REGION_TEXT[lang];
  const r = regionById(id);
  const name = s.names[id];
  const others = REGIONS.filter((x) => x.id !== id);
  const otherList = (
    <>
      <h2 className="land-h">{s.other}</h2>
      <ul className="voc-chips">
        {others.map((x) => <li key={x.id}><Link className="chip" href={regionHref(x, t.base)}>{s.names[x.id]}{!x.countries.length && ` · ${s.soon}`}</Link></li>)}
      </ul>
    </>
  );
  if (!r.countries.length) {
    return (
      <>
        <h1>{s.soonTitle(name)}</h1>
        <p className="lead">{s.soonLead(name)}</p>
        <RegionInterest id={id} lang={lang} label={s.want(name)} help={s.wantHelp} thanks={s.thanks} />
        <h2 className="land-h">{s.notifyTitle}</h2>
        <p>{s.notifyText}</p>
        <Newsletter lang={lang} />
        <h2 className="land-h">{s.meanwhile}</h2>
        <p><Link href={`${t.base}/countries`}>{s.allCountries}</Link></p>
        {otherList}
      </>
    );
  }
  const names = r.countries.map((c) => t.countries[c]).join(lang === "ar" ? "، " : ", ");
  return (
    <>
      <h1>{s.title(name)}</h1>
      <p className="lead">{s.lead(name, names)}</p>
      <ul className="region-grid">
        {r.countries.map((c) => (
          <li key={c}>
            <Link href={`${t.base}/country/${c}`}>
              <img src={COUNTRY_INFO[c].photo[0].replace("/1280px-", "/960px-")} alt={COUNTRY_INFO[c].landmark[lang]} loading="lazy" />
              <span><Flag code={c} size={18} /> {t.countries[c]}<small>{s.programmes(count([c]))}</small></span>
            </Link>
          </li>
        ))}
      </ul>
      {otherList}
    </>
  );
}
