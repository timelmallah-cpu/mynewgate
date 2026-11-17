"use client";
import { useEffect, useRef, useState } from "react";
import Link from "@/components/Link";
import Flag from "../lib/Flag";
import { T } from "../lib/i18n";
import { COUNTRY_IDS } from "../lib/options";
import { CERT, CERTS, CERT_KIND, CERT_TEXT, certFor, certOfOrigin } from "../lib/schoolCert";
import { useOrigin } from "./Origin";

export default function SchoolCert({ lang }) {
  const t = T[lang];
  const s = CERT_TEXT[lang];
  const [origin, loaded] = useOrigin();
  const [cert, setCert] = useState("eg");
  const fromUrl = useRef(false);
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("cert");
    if (CERTS.some((c) => c.id === q)) { setCert(q); fromUrl.current = true; }
  }, []);
  useEffect(() => { if (loaded && origin && !fromUrl.current) setCert(certOfOrigin(origin)); }, [loaded, origin]);
  const list = COUNTRY_IDS.filter((c) => CERT[c]);
  const missing = list.filter((c) => !certFor(c, cert)).length;
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <p><Link className="ctx-link" href={`${T[lang].base}/glossary`}>{lang === "ar" ? "هل هناك مصطلح غير واضح؟ راجع قاموس المصطلحات" : "A word you don't understand? See the glossary"}</Link></p>
      <fieldset className="ec-tests card">
        <legend>{s.cert}</legend>
        {CERTS.map((c) => (
          <label key={c.id} className={`chip${cert === c.id ? " on" : ""}`}>
            <input type="radio" name="cert" value={c.id} checked={cert === c.id} onChange={() => { setCert(c.id); fromUrl.current = true; }} />
            {c[lang]}
          </label>
        ))}
      </fieldset>
      {missing > 0 && <div className="notice">{s.otherNote}</div>}
      <div className="cert-list">
        {list.map((c) => {
          const d = CERT[c];
          const b = certFor(c, cert);
          return (
            <section key={c} className="card cert-card" id={`cert-${c}`}>
              <h2><Flag code={c} size={22} /> {t.countries[c]}</h2>
              {b ? <span className={`cert-kind k-${b.kind}`}>{CERT_KIND[lang][b.kind]}</span> : <span className="cert-kind k-none">{s.generalTag}</span>}
              <p>{(b || d.general)[lang]}{b?.check ? s.toCheck : ""}</p>
              <p className="meta"><b>{s.note}:</b> {d.note[lang]}</p>
              <p className="pl-actions">
                <a className="linkbtn" href={b?.src || d.src} target="_blank" rel="noopener noreferrer">{s.source} ↗</a>
                {d.tool && <a className="linkbtn" href={d.tool} target="_blank" rel="noopener noreferrer">{s.check} ↗</a>}
                {c === "de" && <Link className="linkbtn" href={`${t.base}/foundation`}>{lang === "ar" ? "دليل السنة التحضيرية" : "Foundation year guide"}</Link>}
                <Link className="linkbtn" href={`${t.base}/quiz?level=bachelor&country=${c}`}>{s.programmes}</Link>
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
