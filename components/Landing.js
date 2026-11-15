import { PS_TEXT } from "../lib/postStudy";
import { GUIDE_TEXT } from "../lib/guide";
import { AUSB } from "../lib/ausbildung";
import Link from "next/link";
import programmes from "../lib/programmes.json";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { COUNTRY_IDS } from "../lib/options";
import { countryTip } from "./Country";
import Newsletter from "./Newsletter";

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
          <li key={id}>
            <Link href={`${t.base}/country/${id}`} aria-label={countryTip(id, lang)} data-tip={countryTip(id, lang)}>
              <Flag code={id} size={24} />{t.countries[id]}
            </Link>
          </li>
        ))}
      </ul>
      <p className="meta count">{t.count(programmes.filter((p) => p.level === "master").length, programmes.filter((p) => p.level === "bachelor").length)}</p>

      <Link className="sch-promo" href={`${t.base}/guide`}>
        <span><b>{GUIDE_TEXT[lang].title}</b>{GUIDE_TEXT[lang].lead}</span>
        <span className="btn small">{lang === "ar" ? "افتح الدليل" : "Open the guide"}</span>
      </Link>
      <Link className="sch-promo" href={`${t.base}/after-graduation`}>
        <span><b>{PS_TEXT[lang].landingTitle}</b>{PS_TEXT[lang].landingText}</span>
        <span className="btn small">{PS_TEXT[lang].landingBtn}</span>
      </Link>
      <Link className="sch-promo" href={`${t.base}/ausbildung`}>
        <span><b>{AUSB[lang].landingTitle}</b>{AUSB[lang].landingText}</span>
        <span className="btn small">{AUSB[lang].landingBtn}</span>
      </Link>
      <Link className="sch-promo" href={`${t.base}/scholarships`}>
        <span>
          <b>{t.sch.landingTitle}</b>
          {t.sch.landingText}
        </span>
        <span className="btn small">{t.sch.landingBtn}</span>
      </Link>

      <Newsletter lang={lang} />

      <div className="how">
        <h2>{t.howTitle}</h2>
        <p>{t.heroNotice}</p>
      </div>
    </>
  );
}
