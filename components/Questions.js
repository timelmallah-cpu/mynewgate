import Link from "@/components/Link";
import { notFound } from "next/navigation";
import { T } from "../lib/i18n";
import Flag from "../lib/Flag";
import { SITE_URL } from "../lib/site";
import { QUESTIONS, questionBySlug, countryFaq, Q_TEXT } from "../lib/questions";

const ld = (obj) => <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(obj).replace(/</g, "\\u003c") }} />;
const faqLd = (pairs) => ({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: pairs.map(({ q, a }) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })) });

export function QuestionsHub({ lang }) {
  const t = T[lang];
  const s = Q_TEXT[lang];
  const pairs = QUESTIONS.map((x) => ({ q: x.q[lang], a: x.answer(lang).short }));
  return (
    <>
      {ld(faqLd(pairs))}
      <h1>{s.hub}</h1>
      <p className="lead">{s.hubLead}</p>
      <div className="qa-list">
        {QUESTIONS.map((x, i) => (
          <section key={x.slug} className="card qa-card">
            <h2><Link href={`${t.base}/questions/${x.slug}`}>{x.q[lang]}</Link></h2>
            <p>{pairs[i].a}</p>
            <Link className="btn ghost small" href={`${t.base}/questions/${x.slug}`}>{s.details}</Link>
          </section>
        ))}
      </div>
      <div className="notice">{s.updated}</div>
    </>
  );
}

export function Question({ slug, lang }) {
  const x = questionBySlug(slug);
  if (!x) notFound();
  const t = T[lang];
  const s = Q_TEXT[lang];
  const a = x.answer(lang);
  const url = `${SITE_URL}${lang === "en" ? "/en" : ""}/questions/${slug}`;
  return (
    <>
      {ld(faqLd([{ q: x.q[lang], a: a.short }]))}
      {ld({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: s.hub, item: `${SITE_URL}${lang === "en" ? "/en" : ""}/questions` },
        { "@type": "ListItem", position: 2, name: x.q[lang], item: url },
      ] })}
      <p className="crumbs"><Link href={`${t.base}/questions`}>{s.all}</Link></p>
      <h1>{x.q[lang]}</h1>
      <section className="card qa-short">
        <h2>{s.short}</h2>
        <p>{a.short}</p>
      </section>
      <section className="country-sec">
        <h2>{s.details}</h2>
        <ol className="qa-items">
          {a.items.map((it) => (
            <li key={it.c || it.id}>
              {it.c ? (
                <><Link href={`${t.base}/country/${it.c}`}><Flag code={it.c} size={18} /> <b>{t.countries[it.c]}</b></Link>: {it.text}</>
              ) : (
                <Link href={`${t.base}/scholarships/${it.id}`}>{it.text}</Link>
              )}
            </li>
          ))}
        </ol>
        <p className="meta">{a.note}</p>
      </section>
      <p className="tool-strip">
        {a.links.map(([href, ar, en]) => <Link key={href} href={`${t.base}${href}`}>{lang === "ar" ? ar : en}</Link>)}
      </p>
      <section className="country-sec">
        <h2>{s.more}</h2>
        <ul>
          {QUESTIONS.filter((o) => o.slug !== slug).map((o) => <li key={o.slug}><Link href={`${t.base}/questions/${o.slug}`}>{o.q[lang]}</Link></li>)}
        </ul>
      </section>
      <div className="notice">{s.updated}</div>
    </>
  );
}

export function CountryFaq({ code, lang }) {
  const pairs = countryFaq(code, lang);
  if (!pairs.length) return null;
  return (
    <section className="country-sec">
      {ld(faqLd(pairs))}
      <h2>{Q_TEXT[lang].countryFaq}</h2>
      {pairs.map((p) => (
        <details key={p.q} className="qa-acc">
          <summary>{p.q}</summary>
          <p>{p.a}</p>
        </details>
      ))}
    </section>
  );
}
