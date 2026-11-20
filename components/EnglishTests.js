import Link from "@/components/Link";
import { T } from "../lib/i18n";
import Flag from "../lib/Flag";
import { TESTS, TEST_NAMES, ET_TEXT, testRows, testStats } from "../lib/englishTests";
import TestFinder from "./TestFinder";

export default function EnglishTests({ lang }) {
  const t = T[lang];
  const s = ET_TEXT[lang];
  const { total, byCountry } = testStats();
  const rows = testRows().filter((r) => Object.keys(r.t).length);
  const names = Object.fromEntries([...new Set(rows.map((r) => r.c))].map((c) => [c, t.countries[c]]));
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <section className="card country-sec">
        <h2>{s.summary}</h2>
        <ul className="et-sum">
          {TESTS.map((k) => <li key={k}><b>{TEST_NAMES[k]}</b>: {s.of(total[k], total.all)}</li>)}
        </ul>
        <p className="meta">{s.noneNote(total.all - total.named)}</p>
      </section>
      <section className="country-sec">
        <h2>{s.find}</h2>
        <TestFinder rows={rows} names={names} lang={lang} base={t.base} />
      </section>
      <section className="country-sec">
        <h2>{s.byCountry}</h2>
        <div className="table-wrap">
          <table className="from-table">
            <thead><tr><th>{s.country}</th><th>{s.progs}</th>{TESTS.map((k) => <th key={k}>{TEST_NAMES[k].split(" ")[0]}</th>)}</tr></thead>
            <tbody>
              {byCountry.map((o) => (
                <tr key={o.c}>
                  <td><Link href={`${t.base}/country/${o.c}`}><Flag code={o.c} size={14} /> {t.countries[o.c]}</Link></td>
                  <td>{o.n}</td>
                  {TESTS.map((k) => <td key={k}>{o[k] || "–"}</td>)}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
      <ul className="meta">{s.notes.map((n) => <li key={n}>{n}</li>)}</ul>
      <p className="tool-strip">
        <Link href={`${t.base}/english-check`}>{s.l1}</Link>
        <Link href={`${t.base}/without-ielts`}>{s.l2}</Link>
        <Link href={`${t.base}/language`}>{s.l3}</Link>
      </p>
    </>
  );
}
