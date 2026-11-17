"use client";
import { useState } from "react";
import Link from "@/components/Link";
import { T } from "../lib/i18n";
import { GLOSSARY, GLOSSARY_GROUPS, GLOSSARY_TEXT } from "../lib/glossary";

const norm = (x) => x.toLowerCase().normalize("NFD").replace(/[̀-ًͯ-ْ]/g, "").replace(/[أإآ]/g, "ا").replace(/ة/g, "ه").replace(/ى/g, "ي");
export const termId = (term) => "g-" + norm(term).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export default function Glossary({ lang }) {
  const t = T[lang];
  const s = GLOSSARY_TEXT[lang];
  const [q, setQ] = useState("");
  const n = norm(q.trim());
  const hit = (g) => !n || norm(`${g.term} ${g.alt || ""} ${g.ar} ${g.en}`).includes(n);
  const groups = Object.keys(GLOSSARY_GROUPS[lang]);
  const any = GLOSSARY.some(hit);
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <div className="ec-field card gl-search">
        <label htmlFor="gl-q">{s.search}</label>
        <input id="gl-q" type="search" value={q} onChange={(e) => setQ(e.target.value)} placeholder={s.placeholder} autoComplete="off" />
      </div>
      {!any && <div className="notice">{s.none}</div>}
      {groups.map((gr) => {
        const list = GLOSSARY.filter((g) => g.group === gr && hit(g));
        if (!list.length) return null;
        return (
          <section key={gr}>
            <h2>{GLOSSARY_GROUPS[lang][gr]}</h2>
            <dl className="gl-list">
              {list.map((g) => (
                <div key={g.term} className="card gl-item" id={termId(g.term)}>
                  <dt><span><bdi>{g.term}</bdi></span>{g.alt && <small className="meta"><span><bdi>{g.alt}</bdi></span></small>}</dt>
                  <dd>
                    <p>{g[lang]}</p>
                    {g.link && <Link className="ctx-link" href={`${t.base}${g.link}`}>{s.more}</Link>}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        );
      })}
      <p className="meta">{s.note}</p>
    </>
  );
}
