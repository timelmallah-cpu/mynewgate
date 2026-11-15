import Link from "next/link";
import { notFound } from "next/navigation";
import { T } from "../lib/i18n";
import Flag from "../lib/Flag";
import { pageMeta } from "../lib/site";
import { SECTORS, sectorBySlug, GUIDE_TEXT } from "../lib/ausbildungGuide";
import { PayTable, SectorGrid, Boards } from "./AusbildungParts";

export const sectorParams = () => SECTORS.map((x) => ({ sector: x.slug }));

export function sectorMeta(slug, lang) {
  const x = sectorBySlug(slug);
  if (!x) return {};
  const g = GUIDE_TEXT[lang];
  return pageMeta(lang, { title: `${g.sectorTitle(x[lang].name)} | ${T[lang].brand}`, description: x[lang].short, path: `/ausbildung/${slug}` });
}

export default function AusbildungSector({ slug, lang }) {
  const x = sectorBySlug(slug);
  if (!x) notFound();
  const t = T[lang];
  const g = GUIDE_TEXT[lang];
  const n = x.jobs.length + (x.extra ? 1 : 0);
  return (
    <>
      <p className="crumb"><Link href={`${t.base}/ausbildung`}>{g.back}</Link></p>
      <h1><Flag code="de" size={30} /> <span aria-hidden="true">{x.icon}</span> {g.sectorTitle(x[lang].name)}</h1>
      <p className="lead">{g.sectorLead(x[lang].name, g.jobs(n))}</p>
      <p className="cmp-actions">
        <Link className="btn gold" href={`${t.base}/ausbildung#apply`}>{g.apply}</Link>
        <Link className="btn ghost small" href={`${t.base}/ausbildung#visa`}>{lang === "ar" ? "التأشيرة" : "Visa"}</Link>
      </p>

      {x.extra && (
        <section className="country-sec card ps-card">
          <h2>{x.extra[lang].title}</h2>
          <dl className="ps-dl">{x.extra[lang].rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          <p className="ps-src"><a href={x.extra.src} target="_blank" rel="noopener noreferrer">{g.source} ↗</a></p>
        </section>
      )}

      <section className="country-sec">
        <h2>{lang === "ar" ? "المهن ومتوسط راتب التدريب" : "Occupations and average training allowance"}</h2>
        <PayTable jobs={x.jobs} lang={lang} />
      </section>

      <section className="country-sec">
        <h2>{g.boardsTitle}</h2>
        <p>{g.boardsLead}</p>
        <Boards lang={lang} />
      </section>

      <section className="country-sec">
        <h2>{g.otherSectors}</h2>
        <SectorGrid lang={lang} base={t.base} current={slug} />
      </section>
    </>
  );
}
