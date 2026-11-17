import Link from "@/components/Link";
import { T, CONTACT_EMAIL } from "../lib/i18n";
import { ADV_TEXT, INST_TEXT } from "../lib/institutes";

export default function Advertise({ lang }) {
  const t = T[lang];
  const s = ADV_TEXT[lang];
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <h2>{s.whereTitle}</h2>
      <ul>{s.where.map((x) => <li key={x}>{x}</li>)}</ul>
      <h2>{s.whatTitle}</h2>
      <p>{s.what}</p>
      <h2>{s.termTitle}</h2>
      <ul>{s.term.map((x) => <li key={x}>{x}</li>)}</ul>
      <h2>{s.stepsTitle}</h2>
      <ol>{s.steps.map((x) => <li key={x}>{x}</li>)}</ol>
      <h2>{s.rulesTitle}</h2>
      <ul>{INST_TEXT[lang].policy.map((x) => <li key={x}>{x}</li>)}</ul>
      <div className="notice inst-adv">
        <p><Link className="btn gold" href={`${t.base}/contact?topic=ads`}>{s.cta}</Link></p>
        <p>{s.orMail} <a href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(s.mailSubject)}`} dir="ltr">{CONTACT_EMAIL}</a></p>
      </div>
      <p className="tool-strip"><Link href={`${t.base}/institutes`}>{s.see}</Link></p>
    </>
  );
}
