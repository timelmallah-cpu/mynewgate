import { pageMeta } from "../lib/site";
import Link from "next/link";
import { notFound } from "next/navigation";
import programmes from "../lib/programmes.json";
import { feeStats } from "../lib/feeStats";
import { T, view } from "../lib/i18n";
import Flag from "../lib/Flag";
import { COUNTRY_IDS } from "../lib/options";
import { COUNTRY_INFO } from "../lib/countryInfo";
import { COSTS } from "../lib/costs";
import { SCHOLARSHIPS } from "../lib/scholarships";
import { PostStudyFacts } from "./AfterGrad";
import { PS_TEXT } from "../lib/postStudy";
import { RecognitionFacts } from "./Guide";
import { GUIDE_TEXT } from "../lib/guide";
import { AUSB } from "../lib/ausbildung";
import { VOC_TEXT, VOC } from "../lib/vocational";
import WhatsApp from "./WhatsApp";
import { CITIES } from "../lib/cities";
import { progsAr } from "../lib/arCount";

const S = {
  ar: {
    tip: (n) => `اضغط للحصول على معلومات عن ${n}`,
    title: (n) => `الدراسة في ${n}`,
    facts: "معلومات أساسية",
    capital: "العاصمة", language: "اللغة الرسمية", currency: "العملة",
    onSite: "على موقعنا",
    master: "للماجستير بالإنجليزية", bachelor: "للبكالوريوس بالإنجليزية", doctorate: "للدكتوراه بالإنجليزية",
    cities: "المدن", fees: "الرسوم السنوية لغير الأوروبيين",
    feesRange: (a, b) => (a === b ? `${a} يورو` : `من ${a} إلى ${b} يورو`),
    free: (n) => `${progsAr(n)} بدون رسوم دراسية (قد توجد رسوم فصل إدارية)`,
    unknownFee: (n) => `${progsAr(n)} ${n > 2 && n % 100 <= 10 && n % 100 >= 3 ? "رسومها" : "رسومه"} غير منشورة في المصدر`,
    feesPaid: "رسوم البرامج المدفوعة سنوياً لغير الأوروبيين",
    noPeriod: (n) => `${progsAr(n)} بفترة رسوم غير محددة (خارج النطاق)`,
    periodNA: "فترة الرسوم غير محددة",
    someCheck: " (بعض الأرقام للتحقق)",
    money: "إثبات القدرة المالية للتأشيرة",
    sch: "منح ممولة بالكامل متاحة للعرب",
    portal: "البوابة الرسمية للدراسة",
    showAll: "اعرض كل البرامج", noFee: "بدون رسوم", feeNA: "الرسوم غير منشورة",
    search: (n) => `ابحث في برامج ${n}`,
    photoBy: "صورة:", source: "المصدر",
    note: "العاصمة واللغة والعملة معلومات عامة. أما الأرقام فمن بيانات البرامج على موقعنا ومن الجهات الرسمية المذكورة مع كل رقم.",
  },
  en: {
    tip: (n) => `Click for information about ${n}`,
    title: (n) => `Studying in ${n}`,
    facts: "Key facts",
    capital: "Capital", language: "Official language", currency: "Currency",
    onSite: "On our site",
    master: "English-taught master's programmes", bachelor: "English-taught bachelor's programmes", doctorate: "English-language doctoral programmes",
    cities: "Cities", fees: "Annual fees for non-EU students",
    feesRange: (a, b) => (a === b ? `€${a}` : `€${a} to €${b}`),
    free: (n) => `${n} programme${n === 1 ? "" : "s"} with no tuition fee (semester fees may apply)`,
    unknownFee: (n) => `${n} programme${n === 1 ? "" : "s"} with no published fee`,
    feesPaid: "Annual non-EU fees of paid programmes",
    noPeriod: (n) => `${n} programme${n === 1 ? "" : "s"} whose fee period is not stated (left out of the range)`,
    periodNA: "Fee period not stated",
    someCheck: " (some figures to verify)",
    money: "Proof of funds for the visa",
    sch: "Fully funded scholarships open to Arab students",
    portal: "Official study portal",
    showAll: "Show all programmes", noFee: "No tuition fee", feeNA: "Fee not published",
    search: (n) => `Search programmes in ${n}`,
    photoBy: "Photo:", source: "Source",
    note: "Capital, language and currency are general facts. Figures come from our programme data and from the official bodies linked next to each one.",
  },
};

export const countryTip = (code, lang) => S[lang].tip(T[lang].countries[code]);
export const countryParams = () => [...new Set([...COUNTRY_IDS, "fi"])].map((code) => ({ code }));
export const countryMeta = (code, lang) => {
  const name = T[lang].countries[code] || "";
  const n = programmes.filter((p) => p.country === code).length;
  const description = lang === "ar"
    ? `الدراسة في ${name}${n ? `: ${progsAr(n)} بالإنجليزية في الجامعات الحكومية` : ""}، وإثبات المال للتأشيرة، ومعادلة الشهادات، والبقاء بعد التخرج، بالعربي مع المصادر الرسمية.`
    : `Studying in ${name}${n ? `: ${n} English-taught programmes at public universities` : ""}, visa proof of funds, certificate recognition and staying after graduation, with official sources.`;
  return pageMeta(lang, { title: `${S[lang].title(name)} | ${T[lang].brand}`, description, path: `/country/${code}`, image: COUNTRY_INFO[code]?.photo[0] });
};

const n = (v) => Math.round(v).toLocaleString("en-US");

export default function Country({ code, lang }) {
  const info = COUNTRY_INFO[code];
  if (!info) notFound();
  const t = T[lang];
  const s = S[lang];
  const name = t.countries[code];
  const covered = COUNTRY_IDS.includes(code);
  const voc = VOC.find((v) => v.code === code);
  const list = programmes.filter((p) => p.country === code);
  const cost = COSTS[code];
  const sch = SCHOLARSHIPS.filter((x) => x.hosts.includes(code));
  const [src, page, author, lic, licUrl] = info.photo;

  const level = (lv) => feeStats(list.filter((p) => p.level === lv));
  const cityName = (p) => String(view(p, lang).city).split(" (")[0].trim();

  return (
    <>
      <figure className="country-hero">
        <img src={src} alt={info.landmark[lang]} />
        <figcaption>
          <h1><Flag code={code} size={34} /> {s.title(name)}</h1>
          <span>{info.landmark[lang]}</span>
        </figcaption>
      </figure>
      <p className="credit">
        {s.photoBy} <a href={page} target="_blank" rel="noopener noreferrer" className="ltr">{author}</a> · <a href={licUrl} target="_blank" rel="noopener noreferrer" className="ltr">{lic}</a> · Wikimedia Commons
      </p>

      {covered && <Link className="btn gold" href={`${t.base}/quiz?country=${code}`}>{s.search(name)}</Link>}
      {covered && (
        <p className="tool-strip">
          <Link href={`${t.base}/countries`}>{lang === "ar" ? `قارن ${name} بباقي الدول` : `Compare ${name} with the other countries`}</Link>
          <Link href={`${t.base}/english-check?country=${code}`}>{lang === "ar" ? "هل درجتك في الإنجليزية تكفي؟" : "Is your English score enough?"}</Link>
          <Link href={`${t.base}/planner`}>{lang === "ar" ? "خطط مواعيدك" : "Plan your dates"}</Link>
          <Link href={`${t.base}/school-certificate#cert-${code}`}>{lang === "ar" ? `ثانويتك تكفي في ${name}؟` : `Is your school certificate enough for ${name}?`}</Link>
          <Link href={`${t.base}/housing?country=${code}`}>{lang === "ar" ? `السكن في ${name}` : `Housing in ${name}`}</Link>
          {code === "de" && <Link href={`${t.base}/gpa`}>{lang === "ar" ? "حوّل معدلك للنظام الألماني" : "Convert your grade to the German scale"}</Link>}
          <Link href={`${t.base}/language#lang-${code}`}>{lang === "ar" ? `لغة ${name} وفين تتعلمها` : `Learning the language of ${name}`}</Link>
          <Link href={`${t.base}/visa?to=${code}`}>{lang === "ar" ? `تأشيرة ${name} من بلدك` : `${name} student visa from your country`}</Link>
        </p>
      )}
      <p><WhatsApp lang={lang} path={`${t.base}/country/${code}`} text={s.title(name)} /></p>
      {voc && (
        <Link className="sch-promo" href={`${t.base}/vocational/${code}`}>
          <span><b>{voc.country[lang]}: {voc.name[lang]}</b>{voc.short[lang]}</span>
          <span className="btn small">{VOC_TEXT[lang].deBtn}</span>
        </Link>
      )}

      <section className="country-sec">
        <h2>{s.facts}</h2>
        <dl className="prog-key">
          <div><dt>{s.capital}</dt><dd>{info.capital[lang]}</dd></div>
          <div><dt>{s.language}</dt><dd>{info.language[lang]}</dd></div>
          <div><dt>{s.currency}</dt><dd>{info.currency[lang]}</dd></div>
        </dl>
      </section>

      {covered && <section className="country-sec">
        <h2>{s.onSite}</h2>
        <div className="country-levels">
          {["bachelor", "master", "doctorate"].map((lv) => {
            const d = level(lv);
            if (!d.count) return null;
            return (
              <details key={lv} className="card level-acc">
                <summary>
                  <span className="level-head">{lang === "ar" ? <><b className="big">{progsAr(d.count)}</b> {s[lv]}</> : <><b className="big">{d.count}</b> {s[lv]}</>}</span>
                  <ul>
                    {d.free > 0 && <li><b>{s.free(d.free)}</b></li>}
                    {d.min !== null && <li>{d.free > 0 ? s.feesPaid : s.fees}: {s.feesRange(n(d.min), n(d.max))}{d.toCheck ? s.someCheck : ""}</li>}
                    {d.unknown > 0 && <li>{s.unknownFee(d.unknown)}</li>}
                    {d.noPeriod > 0 && <li>{s.noPeriod(d.noPeriod)}</li>}
                  </ul>
                  <span className="level-more">{s.showAll}</span>
                </summary>
                <ul className="level-list">
                  {list.filter((p) => p.level === lv).sort((a, b) => a.name.localeCompare(b.name)).map((p) => (
                    <li key={p.id}>
                      <Link href={`${t.base}/programme/${p.id}`}><b><bdi>{p.name}</bdi></b></Link>
                      <small><bdi>{p.university}</bdi> · {cityName(p)} · {p.feePerYear === 0 ? s.noFee : p.feePerYear ? (p.feePeriod ? s.feesRange(n(p.feePerYear), n(p.feePerYearMax ?? p.feePerYear)) : s.periodNA) : s.feeNA}</small>
                    </li>
                  ))}
                </ul>
              </details>
            );
          })}
        </div>
        <p className="city-chips"><b>{s.cities}:</b> {CITIES.filter((c) => c.country === code).map((c) => <Link key={c.slug} href={`${t.base}/city/${c.slug}`}>{lang === "ar" ? c.ar : c.en}</Link>)}</p>
      </section>}

      {cost && (
        <section className="country-sec">
          <h2>{s.money}</h2>
          <p>{cost.proof[lang]}{cost.proofCheck ? t.toCheck : ""} · <a href={cost.proofSrc} target="_blank" rel="noopener noreferrer">{s.source} ↗</a></p>
        </section>
      )}

      <section className="country-sec">
        <h2>{GUIDE_TEXT[lang].recTitle}</h2>
        <RecognitionFacts code={code} lang={lang} />
        {covered && <Link className="btn ghost small" href={`${t.base}/guide?country=${code}#documents`}>{GUIDE_TEXT[lang].docsTitle}</Link>}
      </section>

      <section className="country-sec">
        <h2>{PS_TEXT[lang].title}</h2>
        <PostStudyFacts code={code} lang={lang} />
        {covered && <Link className="btn ghost small" href={`${t.base}/after-graduation`}>{PS_TEXT[lang].compare}</Link>}
      </section>

      {code === "de" && (
        <Link className="sch-promo" href={`${t.base}/ausbildung`}>
          <span><b>{AUSB[lang].landingTitle}</b>{AUSB[lang].landingText}</span>
          <span className="btn small">{AUSB[lang].landingBtn}</span>
        </Link>
      )}

      {sch.length > 0 && (
        <section className="country-sec prog-sch">
          <h2>{s.sch}</h2>
          <ul>
            {sch.map((x) => (
              <li key={x.id}><Link href={`${t.base}/scholarships/${x.id}`}>{x.name[lang]}</Link></li>
            ))}
          </ul>
        </section>
      )}

      <section className="country-sec">
        <h2>{s.portal}</h2>
        <a className="btn ghost small" href={info.portal.url} target="_blank" rel="noopener noreferrer"><span className="ltr">{info.portal.name}</span> ↗</a>
      </section>

      <div className="notice">{s.note}</div>
    </>
  );
}
