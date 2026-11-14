import { T, CONTACT_EMAIL } from "../lib/i18n";

export default function Contact({ lang }) {
  const c = T[lang].contact;
  return (
    <>
      <h1>{c.title}</h1>
      <p className="lead">{c.lead}</p>

      <section className="contact-box">
        <a className="btn gold" href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(c.subject)}`}>
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

      <div className="how">
        <h2>{c.noteTitle}</h2>
        <p>{c.note}</p>
      </div>
    </>
  );
}
