import Link from "@/components/Link";
import { EgyptOnlyNote } from "./Origin";
import OriginText from "./OriginText";
import { LOCAL_IDS, byOrigin } from "../lib/localOrigins";
import { T } from "../lib/i18n";
import { OFFICIAL, LANGS, INST_TEXT, activeAds } from "../lib/institutes";

export default function Institutes({ lang }) {
  const t = T[lang];
  const s = INST_TEXT[lang];
  const ads = activeAds();
  const card = (o) => (
    <article key={o.name} className="card inst-card">
      <span className="inst-tag">{s.official}</span>
      <h3><bdi>{o.name}</bdi></h3>
      <p>{o.text[lang]}</p>
      <p className="note">{s.cities}: {o.cities[lang]}</p>
      <a href={o.url} target="_blank" rel="noopener noreferrer">{s.visit} ↗</a>
    </article>
  );
  const groups = [...LANGS, ...["fr", "other"].filter((l) => ads.some((a) => a.lang === l))];
  return (
    <>
      <h1>{s.title}</h1>
      <EgyptOnlyNote lang={lang} what={{ ar: "المعاهد ومراكز الاختبار في هذه الصفحة", en: "The institutes and test centres on this page" }} covered={LOCAL_IDS} />
      <p className="lead">{s.lead}</p>
      {groups.map((l) => {
        const off = OFFICIAL.filter((o) => o.lang === l);
        const paid = ads.filter((a) => a.lang === l);
        return (
          <section key={l} id={`inst-${l}`}>
            <h2>{s.langs[l]}</h2>
            <div className="lang-grid">
              <OriginText lang={lang} by={byOrigin((lo) => { const mine = lo.institutes.filter((o) => o.lang === l); return mine.length ? mine.map(card) : <p className="note">{s.noneHere}</p>; })}>{off.map(card)}</OriginText>
              {paid.map((a) => (
                <article key={a.id} className="card inst-card inst-ad">
                  <span className="inst-tag ad">{s.ad}</span>
                  <h3><bdi>{a.name}</bdi></h3>
                  <p>{a.text[lang]}</p>
                  {a.city && <p className="note">{a.city[lang]}</p>}
                  {a.phone && <p className="note"><a href={`tel:${a.phone.replace(/\s/g, "")}`} dir="ltr">{a.phone}</a></p>}
                  <a href={a.url} target="_blank" rel="sponsored noopener noreferrer">{s.adVisit} ↗</a>
                </article>
              ))}
            </div>
          </section>
        );
      })}
      {ads.length > 0 && <p className="note">{s.adNote}</p>}

      <div className="notice inst-adv">
        <h2>{s.advTitle}</h2>
        <p>{s.advText}</p>
        <Link className="btn gold" href={`${t.base}/advertise`}>{s.advBtn}</Link>
      </div>

      <h2>{s.policyTitle}</h2>
      <ul>{s.policy.map((p) => <li key={p}>{p}</li>)}</ul>
      <p className="tool-strip">
        <Link href={`${t.base}/language`}>{s.langLink}</Link>
        <Link href={`${t.base}/contact?report=${encodeURIComponent(`${t.base}/institutes`)}`}>{s.report}</Link>
      </p>
    </>
  );
}
