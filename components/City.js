import Link from "next/link";
import { feeLabel } from "../lib/options";
import { notFound } from "next/navigation";
import { pageMeta } from "../lib/site";
import { T, view } from "../lib/i18n";
import Flag from "../lib/Flag";
import { HOUSING } from "../lib/housing";
import { CITIES, getCity, CITY_TEXT } from "../lib/cities";
import WhatsApp from "./WhatsApp";

const n = (v) => Math.round(v).toLocaleString("en-US");
const cityName = (c, lang) => (lang === "ar" ? c.ar : c.en);

export const cityParams = () => CITIES.map((c) => ({ slug: c.slug }));
export const cityMeta = (slug, lang) => {
  const c = getCity(slug);
  if (!c) return {};
  const s = CITY_TEXT[lang];
  const name = cityName(c, lang);
  const photo = c.list.find((p) => p.photo)?.photo?.src;
  return pageMeta(lang, { title: `${s.title(name)} | ${T[lang].brand}`, description: s.lead(name, T[lang].countries[c.country], c.list.length), path: `/city/${slug}`, image: photo });
};

export default function City({ slug, lang }) {
  const c = getCity(slug);
  if (!c) notFound();
  const t = T[lang];
  const s = CITY_TEXT[lang];
  const name = cityName(c, lang);
  const cname = t.countries[c.country];
  const ps = c.list.map((p) => view(p, lang));
  const photo = c.list.find((p) => p.photo)?.photo;

  const unis = [];
  for (const p of ps) {
    let u = unis.find((x) => x.name === p.university);
    if (!u) { u = { name: p.university, list: [], living: new Set(), housing: new Set() }; unis.push(u); }
    u.list.push(p);
    const ok = (x) => x && !/غير منشور|not published/i.test(x);
    if (ok(p.living)) u.living.add(p.living);
    if (ok(p.housing)) u.housing.add(p.housing);
  }
  unis.sort((a, b) => b.list.length - a.list.length || a.name.localeCompare(b.name));

  const h = HOUSING[c.country];
  const providers = (h?.links || []).filter((l) => l.cities?.includes(c.en));
  const others = CITIES.filter((x) => x.country === c.country && x.slug !== c.slug);
  const fee = (p) => (p.feePerYear === 0 ? s.noFee : p.feePerYear && p.feePeriod ? s.fee(n(p.feePerYear) + (p.feePerYearMax ? ` - ${n(p.feePerYearMax)}` : "")) : p.feePerYear ? feeLabel(p, lang) : s.feeNA);

  return (
    <>
      {photo ? (
        <>
          <figure className="country-hero">
            <img src={photo.src} alt={photo.of || name} />
            <figcaption>
              <h1><Flag code={c.country} size={34} /> {s.title(name)}</h1>
              <span><bdi>{photo.of}</bdi></span>
            </figcaption>
          </figure>
          <p className="credit">
            {s.photoBy} <a href={photo.page} target="_blank" rel="noopener noreferrer" className="ltr">{photo.author}</a> · <a href={photo.licenseUrl} target="_blank" rel="noopener noreferrer" className="ltr">{photo.license}</a> · Wikimedia Commons
          </p>
        </>
      ) : <h1><Flag code={c.country} size={30} /> {s.title(name)}</h1>}

      <p className="lead">{s.lead(name, cname, c.list.length)}</p>
      <p className="tool-strip">
        <Link href={`${t.base}/country/${c.country}`}>{s.country(cname)}</Link>
        {c.coords && <a href={`https://www.openstreetmap.org/?mlat=${c.coords[0]}&mlon=${c.coords[1]}#map=12/${c.coords[0]}/${c.coords[1]}`} target="_blank" rel="noopener noreferrer">{s.map} ↗</a>}
        <Link href={`${t.base}/housing?country=${c.country}&city=${encodeURIComponent(c.en)}`}>{s.housingGuide(cname)}</Link>
      </p>
      <p><WhatsApp lang={lang} path={`${t.base}/city/${c.slug}`} text={s.title(name)} /></p>

      <section className="country-sec">
        <h2>{s.unis}</h2>
        <div className="city-unis">
          {unis.map((u) => (
            <details key={u.name} className="card level-acc" open={unis.length === 1}>
              <summary>
                <span className="level-head"><b className="ltr"><bdi>{u.name}</bdi></b></span>
                <ul><li>{s.programmes(u.list.length)}</li></ul>
              </summary>
              <ul className="level-list">
                {u.list.sort((a, b) => a.level.localeCompare(b.level) || a.name.localeCompare(b.name)).map((p) => (
                  <li key={p.id}>
                    <Link href={`${t.base}/programme/${p.id}`}><b><bdi>{p.name}</bdi></b></Link>
                    <small>{s.level[p.level]} · {fee(p)}</small>
                  </li>
                ))}
              </ul>
            </details>
          ))}
        </div>
      </section>

      {unis.some((u) => u.living.size) && (
        <section className="country-sec">
          <h2>{s.living}</h2>
          <p className="note">{s.livingNote}</p>
          <ul className="city-facts">
            {unis.filter((u) => u.living.size).map((u) => (
              <li key={u.name}><b className="ltr"><bdi>{u.name}</bdi></b>{[...u.living].map((x) => <span key={x}>{x}</span>)}</li>
            ))}
          </ul>
        </section>
      )}

      <section className="country-sec">
        <h2>{s.housing}</h2>
        <h3>{s.providers}</h3>
        {providers.length ? (
          <ul>
            {providers.map((l) => (
              <li key={l.url}><a href={l.url} target="_blank" rel="noopener noreferrer"><span className="ltr">{l.name}</span> ↗</a> {l[lang]}</li>
            ))}
          </ul>
        ) : <p className="note">{s.noProviders}</p>}
        {unis.some((u) => u.housing.size) && (
          <>
            <h3>{s.housingUni}</h3>
            <ul className="city-facts">
              {unis.filter((u) => u.housing.size).map((u) => (
                <li key={u.name}><b className="ltr"><bdi>{u.name}</bdi></b>{[...u.housing].map((x) => <span key={x}>{x}</span>)}</li>
              ))}
            </ul>
          </>
        )}
        <Link className="btn ghost small" href={`${t.base}/housing?country=${c.country}&city=${encodeURIComponent(c.en)}`}>{s.housingGuide(cname)}</Link>
      </section>

      {others.length > 0 && (
        <section className="country-sec">
          <h2>{s.other(cname)}</h2>
          <p className="city-chips">
            {others.map((x) => <Link key={x.slug} href={`${t.base}/city/${x.slug}`}>{cityName(x, lang)}</Link>)}
          </p>
        </section>
      )}

      <div className="notice">{s.note}</div>
    </>
  );
}

export function CityIndex({ lang }) {
  const t = T[lang];
  const s = CITY_TEXT[lang];
  const countries = [...new Set(CITIES.map((c) => c.country))].sort((a, b) => t.countries[a].localeCompare(t.countries[b], lang));
  return (
    <>
      <h1>{s.indexTitle}</h1>
      <p className="lead">{s.indexLead}</p>
      {countries.map((code) => (
        <section key={code} className="country-sec">
          <h2><Flag code={code} size={22} /> <Link href={`${t.base}/country/${code}`}>{t.countries[code]}</Link></h2>
          <p className="city-chips">
            {CITIES.filter((c) => c.country === code).map((c) => (
              <Link key={c.slug} href={`${t.base}/city/${c.slug}`}>{cityName(c, lang)} <small>{c.list.length}</small></Link>
            ))}
          </p>
        </section>
      ))}
    </>
  );
}
