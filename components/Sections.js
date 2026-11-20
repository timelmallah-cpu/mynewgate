import Link from "@/components/Link";
import { T } from "../lib/i18n";
import { SECTIONS, SECTION_TEXT, SECTION_LIVE } from "../lib/sections";
import Newsletter from "./Newsletter";
import RegionInterest from "./RegionInterest";

const Icon = ({ d }) => <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d={d} /></svg>;

// Home page card listing the coming-soon sections.
export function SectionCards({ lang }) {
  const t = T[lang];
  const s = SECTION_TEXT[lang];
  return (
    <section className="sections card" aria-labelledby="sections-h">
      <h2 id="sections-h">{s.title}</h2>
      <p>{s.lead}</p>
      <ul>
        {SECTIONS.map((x) => (
          <li key={x.id}>
            {SECTION_LIVE[x.id] ? (
              <a href={SECTION_LIVE[x.id][lang]}>
                <span className="sec-icon"><Icon d={x.icon} /></span>
                <b>{s.names[x.id]}</b>
                <small>{s.blurbs[x.id]}</small>
                <small className="soon-tag live">{s.live}</small>
              </a>
            ) : (
              <Link href={`${t.base}/soon/${x.id}`}>
                <span className="sec-icon"><Icon d={x.icon} /></span>
                <b>{s.names[x.id]}</b>
                <small>{s.blurbs[x.id]}</small>
                <small className="soon-tag">{s.soon}</small>
              </Link>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}

// /soon/<id>
export default function SoonSection({ id, lang }) {
  const t = T[lang];
  const s = SECTION_TEXT[lang];
  const name = s.names[id];
  return (
    <>
      <h1>{s.pageTitle(name)}</h1>
      <p className="lead">{s.blurbs[id]}</p>
      <p>{s.pageLead}</p>
      <RegionInterest id={id} label={s.want} help={s.wantHelp} thanks={s.thanks} />
      <h2 className="land-h">{s.notifyTitle}</h2>
      <p>{s.notifyText}</p>
      <Newsletter lang={lang} />
      <h2 className="land-h">{s.meanwhile}</h2>
      <ul className="voc-chips">{s.studyLinks.map(([href, label]) => <li key={href}><Link className="chip" href={`${t.base}${href}`}>{label}</Link></li>)}</ul>
      <h2 className="land-h">{s.other}</h2>
      <ul className="voc-chips">{SECTIONS.filter((x) => x.id !== id).map((x) => <li key={x.id}>{SECTION_LIVE[x.id] ? <a className="chip" href={SECTION_LIVE[x.id][lang]}>{s.names[x.id]}</a> : <Link className="chip" href={`${t.base}/soon/${x.id}`}>{s.names[x.id]} · {s.soon}</Link>}</li>)}</ul>
    </>
  );
}
