"use client";
import { useEffect, useState } from "react";
import Link from "@/components/Link";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { COUNTRY_IDS } from "../lib/options";
import { HOUSING, SCAM, SCAM_SRC, HOUSING_TEXT } from "../lib/housing";

export default function HousingView({ lang, cities }) {
  const t = T[lang];
  const s = HOUSING_TEXT[lang];
  const [country, setCountry] = useState("de");
  const [city, setCity] = useState("");
  const [jump, setJump] = useState(null);
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    const c = q.get("country");
    if (COUNTRY_IDS.includes(c)) {
      setCountry(c);
      const k = q.get("city");
      const hasCity = k && cities[c].some((x) => x.key === k);
      if (hasCity) setCity(k);
      setJump("hs-country");
    }
  }, [cities]);
  // Coming from a country, city or programme page (or picking a country here): go straight to that country's guide.
  useEffect(() => {
    if (!jump) return;
    const el = document.getElementById(jump);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    setJump(null);
  }, [jump, country, city]);
  const pick = (c) => { setCountry(c); setCity(""); setJump("hs-country"); };
  const d = HOUSING[country];
  const list = cities[country].filter((x) => !city || x.key === city);
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <p><Link className="ctx-link" href={`${T[lang].base}/glossary`}>{lang === "ar" ? "هل هناك مصطلح غير واضح؟ راجع قاموس المصطلحات" : "A word you don't understand? See the glossary"}</Link></p>
      <div className="notice">{s.early}</div>

      <fieldset className="ec-tests card">
        <legend>{s.country}</legend>
        {COUNTRY_IDS.map((c) => (
          <label key={c} className={`chip${country === c ? " on" : ""}`}>
            <input type="radio" name="country" value={c} checked={country === c} onChange={() => pick(c)} />
            <Flag code={c} size={16} /> {t.countries[c]}
          </label>
        ))}
      </fieldset>

      <section className="card hs-country" id="hs-country">
        <h2><Flag code={country} size={22} /> {t.countries[country]}</h2>
        <h3>{s.how}</h3>
        <p>{d.how[lang]}</p>
        <h3>{s.official}</h3>
        {d.links.length ? (
          <ul className="hs-links">
            {d.links.map((l) => (
              <li key={l.url}>
                <a href={l.url} target="_blank" rel="noopener noreferrer"><b className="ltr">{l.name}</b> ↗</a>
                <span className="meta">{l[lang]}</span>
              </li>
            ))}
          </ul>
        ) : <p className="meta">{s.noLinks}</p>}
        {d.src && <p className="meta">{s.source}: <a className="ltr" href={d.src} target="_blank" rel="noopener noreferrer">{new URL(d.src).hostname}</a></p>}
      </section>

      <section className="card hs-scam" id="scams">
        <h2>{s.scamTitle}</h2>
        <p>{s.scamLead}</p>
        <ul>
          {SCAM[lang].map((x) => <li key={x}>{x}</li>)}
        </ul>
        <p className="meta">
          {s.scamSrc}{" "}
          {SCAM_SRC.map((x, i) => (
            <span key={x.url}>{i ? " · " : ""}<a href={x.url} target="_blank" rel="noopener noreferrer">{x.name}</a></span>
          ))}
        </p>
      </section>

      {cities[country].length > 1 && (
        <fieldset className="ec-tests card">
          <legend>{s.city}</legend>
          <label className={`chip${!city ? " on" : ""}`}>
            <input type="radio" name="city" value="" checked={!city} onChange={() => setCity("")} />
            {s.allCities}
          </label>
          {cities[country].map((x) => (
            <label key={x.key} className={`chip${city === x.key ? " on" : ""}`}>
              <input type="radio" name="city" value={x.key} checked={city === x.key} onChange={() => setCity(x.key)} />
              {x[lang]}
            </label>
          ))}
        </fieldset>
      )}

      <h2>{s.unis}</h2>
      <div className="hs-cities">
        {list.map((x) => (
          <section key={x.key} className="card hs-city" id={`city-${x.key}`}>
            <h3>{x[lang]}</h3>
            {d.links.filter((l) => l.cities?.includes(x.key)).map((l) => (
              <p key={l.url} className="hs-prov">{s.cityLink}: <a href={l.url} target="_blank" rel="noopener noreferrer"><b className="ltr">{l.name}</b> ↗</a></p>
            ))}
            <ul>
              {x.unis.map((u) => (
                <li key={u.name}>
                  <b>{u.name}</b>
                  <p>{(lang === "ar" ? u.ar : u.en) || s.notPublished}</p>
                  <Link className="ctx-link" href={`${t.base}/programme/${u.id}`}>{s.open}</Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>


      <p className="pl-actions">
        <Link className="btn gold small" href={`${t.base}/planner`}>{s.planner}</Link>
        <Link className="btn ghost small" href={`${t.base}/visa?to=${country}`}>{lang === "ar" ? "تأشيرة الدراسة" : "Student visa"}</Link>
      </p>
      <p className="meta">{s.reviewed}</p>
    </>
  );
}
