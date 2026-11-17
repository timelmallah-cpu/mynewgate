import Link from "@/components/Link";
import { feeStats } from "../lib/feeStats";
import { feeLabel } from "../lib/options";
import { notFound } from "next/navigation";
import Flag from "../lib/Flag";
import { T, view } from "../lib/i18n";
import { pageMeta } from "../lib/site";
import { LANDINGS, landingBySlug, LD_TEXT } from "../lib/landings";
import { ToolTiles } from "./Tools";

const fmt = (n) => Math.round(n).toLocaleString("en-US");

export const landingParams = () => LANDINGS.map((l) => ({ slug: l.slug }));

export function landingMeta(slug, lang) {
  const l = landingBySlug(slug);
  if (!l) return {};
  const s = LD_TEXT[lang];
  const fs = feeStats(l.list);
  const c = l.h1 ? T[lang].countries[l.h1] : null;
  return pageMeta(lang, {
    title: `${s.titleN(l.title[lang], l.list.length)} | ${T[lang].brand}`,
    description: s.intro(l.list.length, c, fs.min !== null ? fmt(fs.min) : null, fs.min !== null ? fmt(fs.max) : null, fs.free),
    path: `/search/${slug}`,
  });
}

export default function StudyLanding({ slug, lang }) {
  const l = landingBySlug(slug);
  if (!l) notFound();
  const t = T[lang];
  const s = LD_TEXT[lang];
  const list = [...l.list].sort((a, b) => (a.feePerYear ?? Infinity) - (b.feePerYear ?? Infinity) || a.name.localeCompare(b.name));
  const fs = feeStats(list);
  const c = l.h1;
  const related = LANDINGS.filter((x) => x.slug !== slug && (c ? x.h1 === c : !x.h1 && x.list[0]?.level === list[0]?.level)).slice(0, 8);
  return (
    <>
      <h1>{s.titleN(l.title[lang], list.length)}</h1>
      <p className="lead">{s.intro(list.length, c ? t.countries[c] : null, fs.min !== null ? fmt(fs.min) : null, fs.min !== null ? fmt(fs.max) : null, fs.free)}</p>
      <p className="tool-strip">
        <Link href={`${t.base}/quiz${c ? `?country=${c}` : ""}`}>{s.more}</Link>
        {c && <Link href={`${t.base}/country/${c}`}>{s.country} {t.countries[c]}</Link>}
      </p>
      <ul className="level-list study-list">
        {list.map((raw) => {
          const p = view(raw, lang);
          return (
            <li key={raw.id}>
              <Link href={`${t.base}/programme/${raw.id}`}><b><bdi>{raw.name}</bdi></b></Link>
              <small>
                <Flag code={raw.country} size={14} /> <bdi>{raw.university}</bdi> · {String(p.city).split(" (")[0]} · {s.fee}: {raw.feePerYear === 0 ? s.free : raw.feePerYear && raw.feePeriod ? (lang === "ar" ? `${fmt(raw.feePerYear)}${raw.feePerYearMax ? ` - ${fmt(raw.feePerYearMax)}` : ""} يورو` : `€${fmt(raw.feePerYear)}${raw.feePerYearMax ? ` - €${fmt(raw.feePerYearMax)}` : ""}`) : raw.feePerYear ? feeLabel(raw, lang) : s.na}{raw.feeNeedsCheck ? t.toCheck : ""}
              </small>
              <small>{s.deadline}: {p.deadline}</small>
            </li>
          );
        })}
      </ul>
      <p className="meta">{s.note}</p>
      {related.length > 0 && (
        <>
          <h2>{s.related}</h2>
          <ul className="study-related">
            {related.map((x) => <li key={x.slug}><Link href={`${t.base}/search/${x.slug}`}>{s.titleN(x.title[lang], x.list.length)}</Link></li>)}
          </ul>
        </>
      )}
      <h2>{s.tools}</h2>
      <ToolTiles lang={lang} homeOnly />
    </>
  );
}

export function StudyHub({ lang }) {
  const t = T[lang];
  const s = LD_TEXT[lang];
  return (
    <>
      <h1>{s.hub}</h1>
      <p className="lead">{s.hubLead}</p>
      <ul className="study-related">
        {LANDINGS.map((x) => <li key={x.slug}><Link href={`${t.base}/search/${x.slug}`}>{s.titleN(x.title[lang], x.list.length)}</Link></li>)}
      </ul>
    </>
  );
}
