import Link from "next/link";
import programmes from "../lib/programmes.json";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { COUNTRY_IDS } from "../lib/options";
import { COUNTRY_INFO } from "../lib/countryInfo";
import { countryTip } from "./Country";
import Newsletter from "./Newsletter";

const ICONS = {
  sch: <path d="M3 9l9-5 9 5-9 5-9-5zm4 2.5V16c0 1.7 2.2 3 5 3s5-1.3 5-3v-4.5M21 9v6" />,
  guide: <path d="M7 3h7l4 4v14H7zM14 3v4h4M10 12h6M10 16h6" />,
  after: <path d="M4 8h16v11H4zM9 8V5h6v3M4 13h16" />,
  ausb: <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L4 17l3 3 5.3-5.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2.4-.6-.6-2.4z" />,
};

const TILES = {
  ar: [
    ["sch", "/scholarships", "منح ممولة بالكامل", "تدفع الرسوم ومعها مبلغ للمعيشة، مع فلتر حسب جنسيتك."],
    ["guide", "/guide", "دليل التقديم", "معادلة شهادتك، وقائمة المستندات، ومقارنة البرامج."],
    ["after", "/after-graduation", "ماذا بعد التخرج؟", "مدة إقامة البحث عن عمل وشروطها في كل دولة."],
    ["ausb", "/ausbildung", "التدريب المهني في ألمانيا", "تدريب مدفوع وشهادة مهنية (Ausbildung)."],
  ],
  en: [
    ["sch", "/scholarships", "Fully funded scholarships", "Tuition plus a living allowance, filtered by your nationality."],
    ["guide", "/guide", "Application guide", "Certificate recognition, document checklist and programme comparison."],
    ["after", "/after-graduation", "After graduation", "How long you can stay to look for work, country by country."],
    ["ausb", "/ausbildung", "Vocational training in Germany", "Paid training and a vocational qualification (Ausbildung)."],
  ],
};

// A smaller Wikimedia thumbnail for the photo strip (only where a larger thumbnail of the same file is used).
const thumb = (url) => url.replace("/1280px-", "/960px-");

export default function Landing({ lang }) {
  const t = T[lang];
  const free = programmes.filter((p) => p.feePerYear === 0).length;
  const n = (v) => v.toLocaleString("en-US");
  return (
    <>
      <section className="gate">
        <h1>{t.heroTitle}</h1>
        <p className="lead">{t.heroLead}</p>
        <ul className="gate-stats">
          {t.stats(programmes.length, free, COUNTRY_IDS.length).map(([v, label]) => (
            <li key={label}><b>{n(v)}</b><span>{label}</span></li>
          ))}
        </ul>
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

      <h2 className="land-h">{t.tilesTitle}</h2>
      <div className="tiles">
        {TILES[lang].map(([icon, href, title, text]) => (
          <Link key={href} className="tile" href={`${t.base}${href}`}>
            <svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">{ICONS[icon]}</svg>
            <b>{title}</b>
            <span>{text}</span>
          </Link>
        ))}
      </div>

      <h2 className="land-h">{t.photosTitle}</h2>
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

      <div className="how">
        <h2>{t.howTitle}</h2>
        <p>{t.heroNotice}</p>
      </div>
    </>
  );
}
