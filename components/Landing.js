import Link from "next/link";
import programmes from "../lib/programmes.json";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { COUNTRY_IDS } from "../lib/options";

export default function Landing({ lang }) {
  const t = T[lang];
  return (
    <>
      <div className="langpick">
        <span className="meta">{t.chooseLang}</span>
        <span className="seg">
          <a href="/" lang="ar" aria-current={lang === "ar"}>العربية</a>
          <a href="/en" lang="en" aria-current={lang === "en"}>English</a>
        </span>
      </div>

      <section className="gate">
        <h1>{t.heroTitle}</h1>
        <p className="lead">{t.heroLead}</p>
        <Link className="btn gold" href={`${t.base}/quiz`}>{t.start}</Link>
      </section>

      <ul className="countries" aria-label={t.coverage}>
        {COUNTRY_IDS.map((id) => (
          <li key={id}><Flag code={id} size={24} />{t.countries[id]}</li>
        ))}
      </ul>
      <p className="meta count">{t.count(programmes.length)}</p>

      <Link className="sch-promo" href={`${t.base}/scholarships`}>
        <span>
          <b>{t.sch.landingTitle}</b>
          {t.sch.landingText}
        </span>
        <span className="btn small">{t.sch.landingBtn}</span>
      </Link>

      <div className="how">
        <h2>{t.howTitle}</h2>
        <p>{t.heroNotice}</p>
      </div>
    </>
  );
}
