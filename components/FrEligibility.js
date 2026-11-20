"use client";
// "Suis-je admissible ?" in French: the same check as /eligibility (lib/eligibility.js evaluate), on the English
// programme data. Nothing is saved: the answers stay on the page.
import { useEffect, useMemo, useState } from "react";
import Flag from "../lib/Flag";
import { FIELD_IDS, BA_FIELD_IDS, COUNTRY_IDS, BUDGETS } from "../lib/options";
import { SCALES, evaluate, toGerman, scoreValid } from "../lib/eligibility";
import { FR_FIELDS, frName } from "../lib/fr";
import { BASE } from "../lib/site";

const START = { level: "master", field: "", countries: [], budget: "any", scale: "pct", grade: "", max: 100, min: 50, test: "ielts", score: "" };
const BUDGET_FR = { 0: "Sans frais de scolarité", 3000: "Jusqu'à 3 000 € par an", 8000: "Jusqu'à 8 000 € par an", 15000: "Jusqu'à 15 000 € par an", any: "Peu importe" };
const SCALE_FR = { pct: "Pourcentage %", g4: "Sur 4 (GPA)", de: "Allemand (1,0 - 4,0)", other: "Autre système (ex. sur 20)" };
const TEST_FR = { ielts: "IELTS Academic", toefl: "TOEFL iBT", none: "Je n'en ai pas encore" };
const ST = { ok: "✓", miss: "✗", check: "?", info: "·" };
const fee = (f) => (f === 0 ? "sans frais de scolarité" : f == null ? "frais non publiés" : `${Math.round(f).toLocaleString("fr-FR")} € par an`);

function Group({ title, note, list }) {
  const [more, setMore] = useState(false);
  if (!list.length) return null;
  const shown = more ? list : list.slice(0, 10);
  return (
    <section className="country-sec">
      <h2>{title} ({list.length})</h2>
      <p className="meta">{note}</p>
      <ul className="level-list">
        {shown.map(({ p, checks }) => (
          <li key={p.i}>
            <a href={`${BASE}/en/programme/${p.i}`}><Flag code={p.c} size={14} /> <b><bdi>{p.n}</bdi></b></a>
            <small><bdi>{p.u}</bdi> · {p.ci} · {fee(p.f)}</small>
            <ul className="el-checks">{checks.map((c) => <li key={c.k} className={`el-${c.st}`}>{ST[c.st]} {c.m}</li>)}</ul>
          </li>
        ))}
      </ul>
      {list.length > 10 && !more && <button type="button" className="btn ghost small" onClick={() => setMore(true)}>Afficher {list.length - 10} de plus</button>}
    </section>
  );
}

export default function FrEligibility() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);
  const [a, setA] = useState(START);
  useEffect(() => { fetch(`${BASE}/data/compare-en.json`).then((r) => r.json()).then(setData).catch(() => setErr(true)); }, []);
  const set = (k, v) => setA((x) => {
    if (k === "level") return { ...x, level: v, field: "" };
    if (k === "scale") return { ...x, scale: v, max: v === "other" ? 20 : SCALES[v].max, min: v === "other" ? 10 : SCALES[v].min, grade: "" };
    if (k === "test") return { ...x, test: v, score: "" };
    return { ...x, [k]: v };
  });
  const toggle = (c) => setA((x) => ({ ...x, countries: x.countries.includes(c) ? x.countries.filter((y) => y !== c) : [...x.countries, c] }));
  const fields = a.level === "bachelor" ? BA_FIELD_IDS : FIELD_IDS;
  const de = toGerman(a);
  const badGrade = de && de.err;
  const badScore = !scoreValid(a);
  const ready = data && a.field && !badGrade && !badScore;
  const res = useMemo(() => (ready ? evaluate(data, a, "fr") : null), [ready, data, a]);
  const sorted = [...COUNTRY_IDS].sort((x, y) => frName(x).localeCompare(frName(y), "fr"));

  return (
    <div className="elig">
      <div className="card ec-form el-form">
        <label className="ec-field"><span>Niveau</span>
          <select value={a.level} onChange={(e) => set("level", e.target.value)}>
            <option value="master">Master</option>
            <option value="bachelor">Licence (bachelor)</option>
          </select>
        </label>
        <label className="ec-field"><span>Domaine</span>
          <select value={a.field} onChange={(e) => set("field", e.target.value)}>
            <option value="">Choisissez</option>
            {fields.map((f) => <option key={f} value={f}>{FR_FIELDS[f] || f}</option>)}
          </select>
        </label>
        <fieldset className="ec-tests el-countries">
          <legend>Pays (un ou plusieurs ; aucun = tous)</legend>
          <div>
            {sorted.map((c) => (
              <button type="button" key={c} className={`chip${a.countries.includes(c) ? " on" : ""}`} aria-pressed={a.countries.includes(c)} onClick={() => toggle(c)}>
                <Flag code={c} size={14} /> {frName(c)}
              </button>
            ))}
          </div>
        </fieldset>
        <label className="ec-field"><span>Frais de scolarité maximum par an</span>
          <select value={a.budget} onChange={(e) => set("budget", e.target.value)}>
            {BUDGETS.map((b) => <option key={b.id} value={b.id}>{BUDGET_FR[b.id]}</option>)}
          </select>
        </label>
        <label className="ec-field"><span>Système de notation</span>
          <select value={a.scale} onChange={(e) => set("scale", e.target.value)}>
            {Object.keys(SCALE_FR).map((k) => <option key={k} value={k}>{SCALE_FR[k]}</option>)}
          </select>
        </label>
        <label className="ec-field"><span>{a.level === "bachelor" ? "Note du baccalauréat" : "Note de la licence"}</span>
          <input inputMode="decimal" value={a.grade} onChange={(e) => set("grade", e.target.value)} />
        </label>
        {a.scale === "other" && (
          <>
            <label className="ec-field"><span>Meilleure note du système</span><input inputMode="decimal" value={a.max} onChange={(e) => set("max", e.target.value)} /></label>
            <label className="ec-field"><span>Note minimale pour réussir</span><input inputMode="decimal" value={a.min} onChange={(e) => set("min", e.target.value)} /></label>
          </>
        )}
        <label className="ec-field"><span>Certificat d'anglais</span>
          <select value={a.test} onChange={(e) => set("test", e.target.value)}>
            {Object.keys(TEST_FR).map((k) => <option key={k} value={k}>{TEST_FR[k]}</option>)}
          </select>
        </label>
        {a.test !== "none" && <label className="ec-field"><span>Score global</span><input inputMode="decimal" value={a.score} onChange={(e) => set("score", e.target.value)} /></label>}
      </div>
      {err && <p className="notice">Impossible de charger les données. Rechargez la page.</p>}
      {badGrade && <p className="notice">La note est hors du système choisi. Vérifiez les chiffres.</p>}
      {badScore && <p className="notice">Le score est hors de l'échelle habituelle de ce test.</p>}
      {!a.field && <p className="meta">Choisissez un niveau et un domaine pour voir le résultat.</p>}
      {a.field && !data && !err && <p className="meta">Chargement…</p>}
      {res && (
        <>
          {typeof de === "number" && <p className="meta">Votre note vaut environ {String(de).replace(".", ",")} sur l'échelle allemande (formule bavaroise modifiée).</p>}
          <p className="notice">Vous correspondez : {res.fit.length}. À vérifier : {res.check.length}. Il manque une ou plusieurs conditions : {res.miss.length}.</p>
          {!res.fit.length && !res.check.length && !res.miss.length && <p>Aucun programme pour ce domaine et ce niveau dans les pays choisis. Ajoutez des pays ou essayez un domaine proche.</p>}
          <Group title="Vous correspondez" note="Vous remplissez toutes les conditions que l'université publie sous forme de chiffres. Lisez les autres conditions sur la page du programme avant de postuler." list={res.fit} />
          <Group title="Probablement, avec un point à vérifier" note="Rien ne manque clairement, mais une information n'est pas publiée en chiffres ou utilise un autre système." list={res.check} />
          <Group title="Il manque quelque chose" note="Les plus proches d'abord : le moins de conditions manquantes en haut." list={res.miss} />
        </>
      )}
    </div>
  );
}
