"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { COUNTRY_IDS } from "../lib/options";
import { CERT, CERTS, CERT_KIND, CERT_TEXT } from "../lib/schoolCert";

export default function SchoolCert({ lang }) {
  const t = T[lang];
  const s = CERT_TEXT[lang];
  const [cert, setCert] = useState("eg");
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("cert");
    if (CERTS.some((c) => c.id === q)) setCert(q);
  }, []);
  const ready = CERTS.find((c) => c.id === cert)?.ready;
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <fieldset className="ec-tests card">
        <legend>{s.cert}</legend>
        {CERTS.map((c) => (
          <label key={c.id} className={`chip${cert === c.id ? " on" : ""}`}>
            <input type="radio" name="cert" value={c.id} checked={cert === c.id} onChange={() => setCert(c.id)} />
            {c[lang]}
          </label>
        ))}
      </fieldset>
      {!ready && <div className="notice">{s.otherNote}</div>}
      <div className="cert-list">
        {COUNTRY_IDS.filter((c) => CERT[c]).map((c) => {
          const d = CERT[c];
          return (
            <section key={c} className="card cert-card" id={`cert-${c}`}>
              <h2><Flag code={c} size={22} /> {t.countries[c]}</h2>
              <span className={`cert-kind k-${d.kind}`}>{CERT_KIND[lang][d.kind]}</span>
              <p>{(ready ? d.eg : d.general)[lang]}{ready && d.check ? s.toCheck : ""}</p>
              <p className="meta"><b>{s.note}:</b> {d.note[lang]}</p>
              <p className="pl-actions">
                <a className="linkbtn" href={d.src} target="_blank" rel="noopener noreferrer">{s.source} ↗</a>
                {d.tool && <a className="linkbtn" href={d.tool} target="_blank" rel="noopener noreferrer">{s.check} ↗</a>}
                <Link className="linkbtn" href={`${t.base}/quiz?country=${c}`}>{s.programmes}</Link>
              </p>
            </section>
          );
        })}
      </div>
      <p className="meta">{s.warn}</p>
      <p className="meta">{s.reviewed}</p>
    </>
  );
}
