"use client";
// "Où étudier ?" in French: the same deterministic matching as the Arabic/English quiz (lib/options.js match),
// on the slim public/data/quiz.json. Nothing is saved; the answers stay on the page.
import { useEffect, useMemo, useState } from "react";
import Flag from "../lib/Flag";
import { FIELD_IDS, BA_FIELD_IDS, COUNTRY_IDS, BUDGETS, DURATIONS, BA_DURATIONS, match } from "../lib/options";
import { FR_FIELDS, frName } from "../lib/fr";
import { BASE } from "../lib/site";

const LEVEL_FR = { master: "Master", bachelor: "Licence (bachelor)" };
const BUDGET_FR = { 0: "Sans frais de scolarité", 3000: "Jusqu'à 3 000 € par an", 8000: "Jusqu'à 8 000 € par an", 15000: "Jusqu'à 15 000 € par an", any: "Peu importe" };
const DUR_FR = { 1: "Un an environ", 2: "Un an et demi à deux ans", any: "Peu importe" };
const BA_DUR_FR = { 3: "Trois ans environ", 4: "Quatre à cinq ans", 6: "Six ans (médecine, etc.)", any: "Peu importe" };
const fee = (p) => (p.feePerYear === 0 ? "sans frais de scolarité" : p.feePerYear == null ? "frais non publiés" : `environ ${Math.round(p.feePerYear).toLocaleString("fr-FR")} € par an`);

export default function FrQuiz() {
  const [data, setData] = useState(null);
  const [err, setErr] = useState(false);
  const [step, setStep] = useState(0);
  const [a, setA] = useState({ level: "", countries: [], field: "", budget: "", duration: "" });
  const [more, setMore] = useState(false);
  useEffect(() => { fetch(`${BASE}/data/quiz.json`).then((r) => r.json()).then((j) => setData(Array.isArray(j) ? j : j.programmes)).catch(() => setErr(true)); }, []);
  const ba = a.level === "bachelor";
  const sorted = [...COUNTRY_IDS].sort((x, y) => frName(x).localeCompare(frName(y), "fr"));
  const STEPS = [
    { key: "level", q: "Quel niveau visez-vous ?", opts: Object.keys(LEVEL_FR).map((id) => ({ id, label: LEVEL_FR[id] })) },
    { key: "countries", q: "Dans quels pays ? (un ou plusieurs ; aucun = tous)", multi: true, opts: sorted.map((id) => ({ id, label: frName(id), flag: id })) },
    { key: "field", q: "Quel domaine ?", opts: [...(ba ? BA_FIELD_IDS : FIELD_IDS).map((id) => ({ id, label: FR_FIELDS[id] || id })), { id: "any", label: "Peu importe" }] },
    { key: "budget", q: "Combien pouvez-vous payer de frais de scolarité par an ?", opts: BUDGETS.map((b) => ({ id: b.id, label: BUDGET_FR[b.id] })) },
    { key: "duration", q: "Quelle durée d'études ?", opts: (ba ? BA_DURATIONS : DURATIONS).map((d) => ({ id: d.id, label: (ba ? BA_DUR_FR : DUR_FR)[d.id] })) },
  ];
  const done = step >= STEPS.length;
  const res = useMemo(() => (done && data ? match(data, a) : []), [done, data, a]);
  const st = STEPS[step];
  const pick = (k, v) => {
    if (k === "level") setA((x) => ({ ...x, level: v, field: "", duration: "" }));
    else setA((x) => ({ ...x, [k]: v }));
    setTimeout(() => setStep((s) => s + 1), 200);
  };
  const toggle = (c) => setA((x) => ({ ...x, countries: x.countries.includes(c) ? x.countries.filter((y) => y !== c) : [...x.countries, c] }));
  const restart = () => { setA({ level: "", countries: [], field: "", budget: "", duration: "" }); setStep(0); setMore(false); };

  if (err) return <p className="notice">Impossible de charger les données. Rechargez la page.</p>;
  if (!done) {
    return (
      <div className="quiz">
        <div className="steps" aria-hidden="true">{STEPS.map((x, i) => <span key={x.key} className={i < step ? "on" : i === step ? "now" : ""} />)}</div>
        <p className="meta">Question {step + 1} sur {STEPS.length}</p>
        <h2 className="quiz-q">{st.q}</h2>
        <div className={st.opts.length > 4 ? "options two" : "options"}>
          {st.opts.map((o) => {
            const on = st.multi ? a.countries.includes(o.id) : a[st.key] === o.id;
            return (
              <button type="button" key={o.id} className="opt" aria-pressed={on} onClick={() => (st.multi ? toggle(o.id) : pick(st.key, o.id))}>
                {o.flag && <Flag code={o.flag} />}
                {o.label}
                <span className="tick">✓</span>
              </button>
            );
          })}
        </div>
        <div className="quiz-actions">
          {st.multi && <button type="button" className="btn" onClick={() => setStep(step + 1)}>{a.countries.length ? "Suivant" : "Tous les pays"}</button>}
          {step > 0 && <button type="button" className="btn ghost" onClick={() => setStep(step - 1)}>Retour</button>}
        </div>
      </div>
    );
  }
  if (!data) return <p className="meta">Chargement des programmes…</p>;
  const known = res.filter((p) => p.feePerYear != null);
  const unknown = res.filter((p) => p.feePerYear == null);
  const list = [...known, ...unknown];
  const shown = more ? list : list.slice(0, 20);
  return (
    <div className="quiz">
      <h2>{res.length ? `${res.length} programme${res.length > 1 ? "s" : ""} pour vous` : "Aucun programme ne correspond"}</h2>
      {res.length > 0 && <p className="meta">Du moins cher au plus cher ; les programmes aux frais non publiés sont à la fin.</p>}
      {!res.length && <p>Essayez un budget plus large, une autre durée, un domaine proche ou plus de pays.</p>}
      <ul className="level-list">
        {shown.map((p) => (
          <li key={p.id}>
            <a href={`${BASE}/en/programme/${p.id}`}><Flag code={p.country} size={14} /> <b><bdi>{p.name}</bdi></b></a>
            <small><bdi>{p.university}</bdi> · {p.en?.city || p.city} · {frName(p.country)} · {fee(p)}</small>
          </li>
        ))}
      </ul>
      {list.length > 20 && !more && <button type="button" className="btn ghost small" onClick={() => setMore(true)}>Afficher {list.length - 20} de plus</button>}
      <div className="quiz-actions">
        <button type="button" className="btn ghost" onClick={() => setStep(STEPS.length - 1)}>Modifier mes réponses</button>
        <button type="button" className="btn" onClick={restart}>Recommencer</button>
      </div>
    </div>
  );
}
