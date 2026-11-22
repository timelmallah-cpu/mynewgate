"use client";
// "Combien coûtent les études ?" in French: a country-level cost calculator. Starting figures are computed on the
// server from our data (median paid tuition, average living cost of the programmes, official proof of funds,
// visa/residence fees, insurance) and can be changed; the result updates instantly. Nothing is saved.
import { useState } from "react";
import Flag from "../lib/Flag";
import { frName } from "../lib/fr";
import { BASE } from "../lib/site";

const num = (v) => { const n = Number(String(v).replace(/\s/g, "").replace(",", ".")); return Number.isFinite(n) && n > 0 ? n : 0; };
const fmt = (n) => Math.round(n).toLocaleString("fr-FR");

export default function FrCost({ defs, order }) {
  const [c, setC] = useState(order.includes("fr") ? "fr" : order[0]);
  const [level, setLevel] = useState("master");
  const init = (cc, lv) => {
    const d = defs[cc];
    return { tuition: d[lv].med ?? "", living: d.living ?? "", insurance: d.insurance ?? "", oneTime: d.oneTime ?? "", other: "", years: d[lv].years ?? "" };
  };
  const [v, setV] = useState(init(c, level));
  const choose = (cc, lv) => { setC(cc); setLevel(lv); setV(init(cc, lv)); };
  const d = defs[c];
  const set = (k) => (e) => setV({ ...v, [k]: e.target.value });
  const perYear = num(v.tuition) + 12 * (num(v.living) + num(v.insurance)) + num(v.other);
  const yrs = num(v.years) || 1;
  const total = perYear * yrs + num(v.oneTime);
  const lv = d[level];
  const field = (k, label, hint, step = 50) => (
    <label className="cc-field">
      <span>{label}</span>
      <span className="cc-input">
        <input type="number" inputMode="decimal" min="0" step={step} value={v[k]} onChange={set(k)} />
        {k !== "years" && <em>€</em>}
      </span>
      {hint && <small>{hint}</small>}
    </label>
  );
  return (
    <section className="costcalc" id="cout">
      <div className="card ec-form el-form">
        <label className="ec-field"><span>Pays</span>
          <select value={c} onChange={(e) => choose(e.target.value, level)}>
            {order.map((cc) => <option key={cc} value={cc}>{frName(cc)}</option>)}
          </select>
        </label>
        <label className="ec-field"><span>Niveau</span>
          <select value={level} onChange={(e) => choose(c, e.target.value)}>
            <option value="master">Master</option>
            <option value="bachelor">Licence (bachelor)</option>
          </select>
        </label>
      </div>
      <p className="meta"><Flag code={c} size={14} /> {frName(c)} : {lv.count ? `${lv.count} programme${lv.count > 1 ? "s" : ""} de ce niveau dans notre catalogue` : "aucun programme de ce niveau dans notre catalogue pour l'instant"}.</p>
      <div className="cc-grid">
        <div className="cc-inputs">
          {field("tuition", "Frais de scolarité par an", lv.med != null ? `Médiane des programmes payants de ce pays (${lv.paid}) ; ${lv.free ? `${lv.free} sans frais de scolarité` : "aucun sans frais"}. Mettez le chiffre de votre programme.` : "Pas de chiffre médian : saisissez le montant de l'université.", 100)}
          {field("living", "Vie sur place, logement compris, par mois", d.livingN ? `Moyenne de ${d.livingN} programme${d.livingN > 1 ? "s" : ""} qui publient ce coût${d.proof ? `, au moins le minimum demandé pour le visa (${fmt(d.proof)} €)` : ""}.` : d.proof ? "Aucun chiffre publié par les programmes : minimum demandé pour le visa." : "Non publié : saisissez votre estimation.")}
          {field("insurance", "Assurance maladie par mois", d.insurance != null ? "Estimation approximative (à vérifier)." : "Saisissez le prix de l'assurance que vous prendrez.", 10)}
          {field("other", "Autres frais par an (livres, transports, frais semestriels)", null)}
          {field("oneTime", "Frais officiels de visa et de séjour (une fois)", d.oneTime != null ? "Frais officiels connus (à vérifier selon votre nationalité)." : "Non publiés : saisissez le montant.", 10)}
          {field("years", "Durée des études en années", lv.years != null ? "Durée médiane des programmes de ce niveau." : null, 0.5)}
        </div>
        <div className="cc-out" aria-live="polite">
          <div className="cc-big"><span>Coût total estimé</span><b>{fmt(total)} €</b></div>
          <div className="cc-row"><span>Par an</span><b>{fmt(perYear)} €</b></div>
          <div className="cc-row"><span>Première année avec les frais uniques</span><b>{fmt(perYear + num(v.oneTime))} €</b></div>
          {v.tuition === "" && <p className="cc-warn">Ce total ne comprend pas les frais de scolarité : saisissez-les.</p>}
          {d.proof && num(v.living) > 0 && num(v.living) < d.proof && !d.proofExcludesHousing && <p className="cc-warn">Le coût de la vie saisi est inférieur au minimum demandé pour le visa ({fmt(d.proof)} € par mois).</p>}
        </div>
      </div>
      {d.proofText && (
        <div className="cc-facts">
          <h2>Ce que demande l'ambassade (texte officiel en anglais)</h2>
          <p lang="en" dir="ltr">{d.proofText}{d.proofCheck ? " (to check)" : ""} <a href={d.proofSrc} target="_blank" rel="noopener noreferrer">Source ↗</a></p>
        </div>
      )}
      <p className="note">Ce sont des estimations pour préparer votre budget, pas un devis. Le billet d'avion n'est pas compté. Vérifiez chaque chiffre auprès de l'université et de l'ambassade avant de payer. Pour un programme précis, la calculatrice de sa page (en anglais) part de ses propres chiffres : <a href={`${BASE}/en/search`}>trouver un programme</a>.</p>
    </section>
  );
}
