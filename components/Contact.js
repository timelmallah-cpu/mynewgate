import { T, CONTACT_EMAIL } from "../lib/i18n";
import ContactForm from "./ContactForm";

const HAS_FORM = Boolean(process.env.NEXT_PUBLIC_WEB3FORMS_KEY);

export default function Contact({ lang }) {
  const c = T[lang].contact;
  return (
    <>
      <h1>{c.title}</h1>
      <p className="lead">{c.lead}</p>

      <div className="how">
        <h2>{c.noteTitle}</h2>
        <p>{c.note}</p>
      </div>

      {HAS_FORM && (
        <section className="form-wrap">
          <h2>{c.formTitle}</h2>
          <ContactForm lang={lang} />
        </section>
      )}

      <section className="contact-box">
        {HAS_FORM && <h2>{c.emailTitle}</h2>}
        <a className={HAS_FORM ? "btn ghost-light" : "btn gold"} href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(c.subject)}`}>
          {c.button}
        </a>
        <p className="contact-mail">
          {c.orCopy} <a className="ltr" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
        </p>
      </section>

      <h2>{c.topicsTitle}</h2>
      <ul className="topics">
        {c.topics.map(([title, text]) => (
          <li key={title}><b>{title}</b>{text}</li>
        ))}
      </ul>
    </>
  );
}
