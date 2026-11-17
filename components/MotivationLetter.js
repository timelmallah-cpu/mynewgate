"use client";
import { useEffect, useState } from "react";
import Link from "@/components/Link";
import { T } from "../lib/i18n";
import { LETTER_TEXT, LETTER_SRC, FIELDS, LETTER_REVIEWED } from "../lib/letterText";
import LetterReview from "./LetterReview";

const KEY = "mng-letter-notes";

export default function MotivationLetter({ lang }) {
  const t = T[lang];
  const s = LETTER_TEXT[lang];
  const [notes, setNotes] = useState({});
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    try { const v = JSON.parse(localStorage.getItem(KEY) || "{}"); if (v && typeof v === "object") setNotes(v); } catch {}
  }, []);
  const update = (id) => (e) => {
    const next = { ...notes, [id]: e.target.value };
    setNotes(next);
    try { localStorage.setItem(KEY, JSON.stringify(next)); } catch {}
  };
  const clear = () => { setNotes({}); try { localStorage.removeItem(KEY); } catch {} };

  const filled = FIELDS.filter((f) => (notes[f.id] || "").trim());
  const outline = filled.map((f) => `${f.head}\n${notes[f.id].trim().split(/\n+/).map((l) => `- ${l.trim()}`).join("\n")}`).join("\n\n");
  const copy = async () => {
    try { await navigator.clipboard.writeText(outline); setCopied(true); setTimeout(() => setCopied(false), 1500); } catch {}
  };

  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>

      <h2>{s.whatTitle}</h2>
      <ul>{s.what.map((x) => <li key={x}>{x}</li>)}</ul>
      <p className="note">{s.whatNote}</p>

      <h2>{s.structureTitle}</h2>
      <ol className="letter-structure">
        {s.structure.map(([h, d]) => <li key={h}><strong>{h}:</strong> {d}</li>)}
      </ol>

      <h2>{s.lengthTitle}</h2>
      <p>{s.length}</p>

      <h2>{s.styleTitle}</h2>
      <ul>{s.style.map((x) => <li key={x}>{x}</li>)}</ul>

      <section className="card letter-builder" id="outline">
        <h2>{s.builderTitle}</h2>
        <p className="note">{s.builderLead}</p>
        {FIELDS.map((f) => (
          <label key={f.id} className="field">
            <span className="ltr"><bdi>{f.head}</bdi></span>
            <textarea dir="ltr" rows={f.rows} value={notes[f.id] || ""} onChange={update(f.id)} placeholder={s.hints[f.id]} maxLength={1500} />
          </label>
        ))}
        <h3>{s.outlineTitle}</h3>
        {filled.length ? (
          <>
            <pre className="letter-outline" dir="ltr">{outline}</pre>
            <p className="note">{s.outlineNote}</p>
            <p className="tool-strip">
              <button type="button" className="btn gold" onClick={copy}>{copied ? s.copied : s.copy}</button>
              <button type="button" className="btn ghost" onClick={clear}>{s.clear}</button>
            </p>
          </>
        ) : <p className="note">{s.empty}</p>}
      </section>

      <LetterReview lang={lang} />

      <h2>{s.checkTitle}</h2>
      <ul className="letter-check">
        {s.check.map((x) => <li key={x}><label><input type="checkbox" /> {x}</label></li>)}
      </ul>

      <h2>{s.cvTitle}</h2>
      <ul>{s.cv.map((x) => <li key={x}>{x}</li>)}</ul>
      <p><a className="btn" href="https://europass.europa.eu/en/create-europass-cv" target="_blank" rel="noopener noreferrer">{s.cvBtn} ↗</a></p>

      <LetterReview lang={lang} kind="cv" />

      <h2>{s.refsTitle}</h2>
      <p>{s.refs}</p>

      <p className="tool-strip">
        <Link href={`${t.base}/university-email`}>{lang === "ar" ? "اكتب إيميلاً للجامعة" : "Write an email to a university"}</Link>
        <Link href={`${t.base}/guide#documents`}>{lang === "ar" ? "قائمة الأوراق لكل دولة" : "Document checklist per country"}</Link>
        <Link href={`${t.base}/language`}>{lang === "ar" ? "أي اختبار إنجليزي؟" : "Which English test?"}</Link>
      </p>

      <h2>{s.srcTitle}</h2>
      <ul className="note">{LETTER_SRC.map((x) => <li key={x.url}><a href={x.url} target="_blank" rel="noopener noreferrer"><bdi>{x.name}</bdi></a></li>)}</ul>
      <p className="note">{s.reviewed}: {LETTER_REVIEWED}</p>
    </>
  );
}
