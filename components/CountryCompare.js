import Link from "@/components/Link";
import { notFound } from "next/navigation";
import { T } from "../lib/i18n";
import Flag from "../lib/Flag";
import { SITE_URL } from "../lib/site";
import { PAIRS, pairSlug, pairBySlug, figures, METRICS, show, summary, CMP_TEXT } from "../lib/countryCompare";

const ld = (obj) => <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj).replace(/</g, "\\u003c") }} />;

export function CompareHub({ lang }) {
  const t = T[lang];
  const s = CMP_TEXT[lang];
  return (
    <>
      <h1>{s.hub}</h1>
      <p className="lead">{s.hubLead}</p>
      <ul className="cmp-hub">
        {PAIRS.map((p) => (
          <li key={pairSlug(p)}>
            <Link href={`${t.base}/compare-countries/${pairSlug(p)}`}><Flag code={p[0]} size={18} /> <Flag code={p[1]} size={18} /> {s.h1(t.countries[p[0]], t.countries[p[1]])}</Link>
          </li>
        ))}
      </ul>
      <p className="tool-strip"><Link href={`${t.base}/countries`}>{s.table2}</Link></p>
      <div className="notice">{s.updated}</div>
    </>
  );
}

export function ComparePair({ slug, lang }) {
  const p = pairBySlug(slug);
  if (!p) notFound();
  const t = T[lang];
  const s = CMP_TEXT[lang];
  const [a, b] = p.map(figures);
  const na = t.countries[a.c], nb = t.countries[b.c];
  const lines = summary(a, b, lang);
  const pre = `${SITE_URL}${lang === "en" ? "/en" : ""}/compare-countries`;
  return (
    <>
      {ld({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: s.hub, item: pre },
        { "@type": "ListItem", position: 2, name: s.h1(na, nb), item: `${pre}/${slug}` },
      ] })}
      <p className="crumbs"><Link href={`${t.base}/compare-countries`}>{s.all}</Link></p>
      <h1><Flag code={a.c} size={26} /> <Flag code={b.c} size={26} /> {s.h1(na, nb)}</h1>
      <p className="lead">{s.lead(na, nb)}</p>
      <section className="card country-sec">
        <h2>{s.summary}</h2>
        {lines.length ? <ul>{lines.map((x) => <li key={x}>{x}</li>)}</ul> : <p>{s.noDiff}</p>}
      </section>
      <section className="country-sec">
        <h2>{s.table}</h2>
        <div className="table-wrap">
          <table className="from-table">
            <thead><tr><th>{s.item}</th><th><Flag code={a.c} size={16} /> {na}</th><th><Flag code={b.c} size={16} /> {nb}</th></tr></thead>
            <tbody>
              {METRICS.map((m) => <tr key={m.k}><td>{m[lang]}</td><td>{show(a, m, lang)}</td><td>{show(b, m, lang)}</td></tr>)}
            </tbody>
          </table>
        </div>
        <p className="meta">{s.how}</p>
        <p className="tool-strip">
          <Link href={`${t.base}/country/${a.c}`}>{s.country(na)}</Link>
          <Link href={`${t.base}/country/${b.c}`}>{s.country(nb)}</Link>
          <Link href={`${t.base}/countries`}>{s.table2}</Link>
        </p>
      </section>
      <section className="country-sec">
        <h2>{s.more}</h2>
        <ul>
          {PAIRS.filter((q) => pairSlug(q) !== slug && (q.includes(a.c) || q.includes(b.c))).map((q) => (
            <li key={pairSlug(q)}><Link href={`${t.base}/compare-countries/${pairSlug(q)}`}>{s.h1(t.countries[q[0]], t.countries[q[1]])}</Link></li>
          ))}
        </ul>
      </section>
      <div className="notice">{s.updated}</div>
    </>
  );
}

// For a country page: links to the ready-made comparisons that include it.
export function CountryComparisons({ code, lang }) {
  const t = T[lang];
  const s = CMP_TEXT[lang];
  const list = PAIRS.filter((p) => p.includes(code));
  if (!list.length) return null;
  return (
    <p className="tool-strip">
      {list.map((p) => <Link key={pairSlug(p)} href={`${t.base}/compare-countries/${pairSlug(p)}`}>{s.h1(t.countries[p[0]], t.countries[p[1]])}</Link>)}
    </p>
  );
}
