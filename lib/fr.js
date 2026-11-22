// French version (phase 5, for students from Algeria, Morocco and Tunisia). Version 1 covers the home page,
// one summary page per country and the common questions. Every figure is computed from the same data as the
// Arabic and English pages; only the sentences around the numbers are written in French. Text that exists only
// in Arabic and English (programme details, official notes) is never machine-translated: the French pages link to it.
import programmes from "./programmes.json";
import { COUNTRY_IDS } from "./options";
import { COSTS } from "./costs";
import { STUDY_WORK } from "./studyWork";
import { POST_STUDY } from "./postStudy";
import { SCHOLARSHIPS } from "./scholarships";
import { rows } from "./questions";

export const FR_NAMES = {
  de: ["Allemagne", "en"], nl: ["Pays-Bas", "aux"], es: ["Espagne", "en"], be: ["Belgique", "en"], ee: ["Estonie", "en"], pl: ["Pologne", "en"],
  hu: ["Hongrie", "en"], ro: ["Roumanie", "en"], lv: ["Lettonie", "en"], lt: ["Lituanie", "en"], it: ["Italie", "en"], fi: ["Finlande", "en"],
  bg: ["Bulgarie", "en"], se: ["Suède", "en"], cz: ["Tchéquie", "en"], at: ["Autriche", "en"], fr: ["France", "en"], pt: ["Portugal", "au"],
  ie: ["Irlande", "en"], dk: ["Danemark", "au"], hr: ["Croatie", "en"], sk: ["Slovaquie", "en"], cy: ["Chypre", "à"], mt: ["Malte", "à"],
  no: ["Norvège", "en"], lu: ["Luxembourg", "au"], ch: ["Suisse", "en"], si: ["Slovénie", "en"], gr: ["Grèce", "en"], is: ["Islande", "en"],
  li: ["Liechtenstein", "au"], tr: ["Turquie", "en"], my: ["Malaisie", "en"], ca: ["Canada", "au"], au: ["Australie", "en"],
  nz: ["Nouvelle-Zélande", "en"], gb: ["Royaume-Uni", "au"], kr: ["Corée du Sud", "en"], jp: ["Japon", "au"],
};
export const frName = (c) => FR_NAMES[c]?.[0] || c;
export const frIn = (c) => `${FR_NAMES[c]?.[1] || "en"} ${frName(c)}`; // "en Allemagne", "aux Pays-Bas"

export const n = (v) => Math.round(v).toLocaleString("fr-FR").replace(/ /g, " ");
const UNIT = { week: "heures par semaine", fortnight: "heures par quinzaine", month: "heures par mois", day: "heures par jour", year: "heures par an" };
export const months = (m) => (m % 12 === 0 ? `${m / 12} an${m === 12 ? "" : "s"}` : `${m} mois`);
const chk = (on) => (on ? " (à vérifier)" : "");

export function frCountry(c) {
  const r = rows().find((x) => x.c === c);
  const list = programmes.filter((p) => p.country === c);
  return {
    r,
    list,
    proof: COSTS[c] ? { eur: COSTS[c].proofMonthly, src: COSTS[c].proofSrc, check: !!COSTS[c].proofCheck } : null,
    work: STUDY_WORK[c] ? { hours: STUDY_WORK[c].hours, unit: UNIT[STUDY_WORK[c].per || "week"], src: STUDY_WORK[c].src, check: !!STUDY_WORK[c].check } : null,
    post: POST_STUDY[c] ? { months: POST_STUDY[c].months, name: POST_STUDY[c].name.en, src: POST_STUDY[c].src, canWork: POST_STUDY[c].canWork, check: !!POST_STUDY[c].check } : null,
    sch: SCHOLARSHIPS.filter((s) => s.hosts.includes(c)),
  };
}

const feeLine = (d, lv) => {
  if (!d.count) return null;
  const parts = [];
  if (d.free) parts.push(`${d.free} sans frais de scolarité`);
  if (d.min !== null) parts.push(d.min === d.max ? `${n(d.min)} € par an pour les programmes payants` : `de ${n(d.min)} à ${n(d.max)} € par an pour les programmes payants (médiane ${n(d.med)} €)`);
  if (d.unknown) parts.push(`${d.unknown} dont les frais ne sont pas publiés`);
  return `${d.count} ${lv} en anglais : ${parts.join(" ; ")}.`;
};

// Questions for one country (shown on its page with FAQPage structured data).
export function frCountryFaq(c) {
  const { r, proof, work, post, sch } = frCountry(c);
  if (!r) return [];
  const out = [];
  const m = feeLine(r.master, "masters");
  if (m) out.push({ q: `Combien coûte un master ${frIn(c)} ?`, a: `Notre site recense ${m}` });
  const b = feeLine(r.bachelor, "licences (bachelors)");
  if (b) out.push({ q: `Combien coûte une licence ${frIn(c)} ?`, a: `Notre site recense ${b}` });
  if (r.living && r.livingN >= 3) out.push({ q: `Quel est le coût de la vie pour un étudiant ${frIn(c)} ?`, a: `Environ ${n(r.living)} € par mois en moyenne dans les villes de nos programmes ; cela dépend de la ville et du logement.` });
  if (proof?.eur) out.push({ q: `Combien d'argent faut-il pour le visa étudiant ${frIn(c)} ?`, a: `Environ ${n(proof.eur)} € par mois à justifier pour le séjour, hors frais de scolarité${chk(proof.check)}.` });
  if (work) out.push({ q: `Peut-on travailler pendant les études ${frIn(c)} ?`, a: work.hours != null ? `Oui, jusqu'à ${work.hours} ${work.unit} pendant l'année universitaire, selon la source officielle${chk(work.check)}.` : `Il n'y a pas de plafond d'heures fixe dans la source officielle ; les conditions sont sur la page du pays${chk(work.check)}.` });
  if (post) out.push({ q: `Peut-on rester ${frIn(c)} après le diplôme ?`, a: post.months ? `Oui : ${post.name}, jusqu'à ${months(post.months)}${post.canWork === false ? " (sans droit de travailler pendant ce titre)" : ""}${chk(post.check)}.` : `${post.name} ; la durée n'est pas publiée dans la source${chk(post.check)}.` });
  if (sch.length) out.push({ q: `Existe-t-il des bourses entièrement financées pour étudier ${frIn(c)} ?`, a: `Oui, notre site en recense ${sch.length} ouvertes aux étudiants arabes : ${sch.map((s) => s.name.en).join(", ")}.` });
  return out;
}

// The same cross-country questions as lib/questions.js, answered in French from the same rows.
export const FR_QUESTIONS = [
  {
    slug: "cheapest-countries-masters", ar: "cheapest-countries-masters",
    q: "Quels sont les pays les moins chers pour un master en anglais ?",
    answer() {
      const r = rows().filter((x) => x.master.paid >= 3).sort((a, b) => a.master.med - b.master.med).slice(0, 12);
      return {
        short: `Parmi les masters payants de notre site, la médiane des frais annuels pour les étudiants hors UE la plus basse est ${frIn(r[0].c)} (${n(r[0].master.med)} €), puis ${frIn(r[1].c)} et ${frIn(r[2].c)}. Certains pays proposent aussi des programmes sans frais de scolarité.`,
        items: r.map((x) => ({ c: x.c, text: x.master.min === x.master.max ? `${n(x.master.med)} € par an pour tous les programmes payants (${x.master.paid})` : `${n(x.master.med)} € par an (médiane), de ${n(x.master.min)} à ${n(x.master.max)} €, ${x.master.paid} programmes payants${x.master.free ? `, plus ${x.master.free} sans frais` : ""}` })),
        note: "Classement par médiane des masters payants de notre site, pour les pays qui en ont au moins 3 ; ce n'est pas une moyenne de toutes les universités du pays. Le coût de la vie n'est pas inclus.",
      };
    },
  },
  {
    slug: "tuition-free-study-abroad", ar: "tuition-free-study-abroad",
    q: "Où étudier à l'étranger sans frais de scolarité ?",
    answer() {
      const r = rows().filter((x) => x.master.free + x.bachelor.free > 0).sort((a, b) => (b.master.free + b.bachelor.free) - (a.master.free + a.bachelor.free));
      const tot = r.reduce((s, x) => s + x.master.free + x.bachelor.free, 0);
      return {
        short: `Notre site recense ${tot} programmes en anglais sans frais de scolarité pour les étudiants hors UE dans ${r.length} pays, surtout ${frIn(r[0].c)}. Des frais semestriels peuvent s'appliquer, et il faut toujours financer la vie sur place et le visa.`,
        items: r.map((x) => ({ c: x.c, text: [x.master.free && `${x.master.free} masters`, x.bachelor.free && `${x.bachelor.free} licences`].filter(Boolean).join(" et ") + " sans frais de scolarité" })),
        note: "« Sans frais » signifie que la source officielle indique zéro frais de scolarité ; les frais semestriels figurent sur la page de chaque programme.",
      };
    },
  },
  {
    slug: "work-while-studying-abroad", ar: "work-while-studying-abroad",
    q: "Combien d'heures un étudiant peut-il travailler pendant ses études à l'étranger ?",
    answer() {
      const r = rows().filter((x) => x.weekly !== null).sort((a, b) => b.weekly - a.weekly);
      return {
        short: `Cela dépend du pays. Le plafond hebdomadaire le plus élevé parmi nos pays est ${frIn(r[0].c)} (${r[0].hours} ${UNIT[r[0].per]}) ; la plupart autorisent environ 20 heures par semaine pendant les cours et le temps plein pendant les vacances. Certains exigent un permis de travail ou une autorisation.`,
        items: r.map((x) => ({ c: x.c, text: `${x.hours} ${UNIT[x.per]}${chk(x.workCheck)}` })),
        note: "Chaque plafond est donné dans l'unité de la source officielle (semaine, mois ou année).",
      };
    },
  },
  {
    slug: "stay-after-graduation", ar: "stay-after-graduation",
    q: "Quels pays permettent de rester après le diplôme pour chercher un emploi ?",
    answer() {
      const r = rows().filter((x) => x.months).sort((a, b) => b.months - a.months);
      return {
        short: `${r.length} de nos pays délivrent aux diplômés un titre de séjour pour chercher un emploi ou créer une entreprise. Le plus long est ${frIn(r[0].c)} (${months(r[0].months)}), puis ${frIn(r[1].c)} (${months(r[1].months)}).`,
        items: r.map((x) => ({ c: x.c, text: `${months(x.months)}${chk(x.psCheck)} : ${POST_STUDY[x.c].name.en}${POST_STUDY[x.c].canWork === false ? " (sans droit de travailler)" : ""}` })),
        note: "Durée maximale selon la source officielle ; les conditions sont sur la page de chaque pays.",
      };
    },
  },
  {
    slug: "proof-of-funds-student-visa", ar: "proof-of-funds-student-visa",
    q: "Combien d'argent faut-il sur son compte pour un visa étudiant ?",
    answer() {
      const r = rows().filter((x) => x.proof).sort((a, b) => a.proof - b.proof);
      const last = r[r.length - 1];
      return {
        short: `Chaque pays fixe un montant mensuel à justifier pour le séjour (souvent un an). Le plus bas parmi nos pays est ${frIn(r[0].c)} (environ ${n(r[0].proof)} € par mois) et le plus élevé ${frIn(last.c)} (environ ${n(last.proof)} € par mois). En Allemagne, par exemple, il est versé sur un compte bloqué.`,
        items: r.map((x) => ({ c: x.c, text: `environ ${n(x.proof)} € par mois${chk(x.proofCheck)}` })),
        note: "Montants hors frais de scolarité, convertis en euros si besoin ; la source officielle de chaque pays est sur sa page.",
      };
    },
  },
  {
    slug: "cheapest-living-costs", ar: "cheapest-living-costs",
    q: "Quels pays ont le coût de la vie le plus bas pour les étudiants ?",
    answer() {
      const r = rows().filter((x) => x.living && x.livingN >= 5).sort((a, b) => a.living - b.living);
      return {
        short: `D'après le coût de la vie mensuel moyen dans les villes de nos programmes, le plus bas est ${frIn(r[0].c)} (environ ${n(r[0].living)} €), puis ${frIn(r[1].c)} et ${frIn(r[2].c)}.`,
        items: r.slice(0, 15).map((x) => ({ c: x.c, text: `environ ${n(x.living)} € par mois` })),
        note: "Moyenne approximative du coût de la vie indiqué sur les pages des programmes, pour les pays qui ont au moins 5 programmes avec ce chiffre ; il varie selon la ville et le logement.",
      };
    },
  },
  {
    slug: "fully-funded-scholarships-arab-students", ar: "fully-funded-scholarships-arab-students",
    q: "Quelles bourses entièrement financées sont ouvertes aux étudiants arabes ?",
    answer() {
      return {
        short: `Notre site recense ${SCHOLARSHIPS.length} bourses entièrement financées ouvertes aux étudiants arabes (frais de scolarité et allocation mensuelle), dont des bourses gouvernementales comme Chevening au Royaume-Uni, les bourses de Turquie et de Malaisie, et Erasmus Mundus. Chacune a ses pays éligibles et sa date limite.`,
        items: SCHOLARSHIPS.map((s) => ({ id: s.id, text: s.name.en })),
        note: "Les détails de chaque bourse sont en arabe et en anglais ; choisissez votre nationalité sur la page des bourses.",
      };
    },
  },
];
export const frQuestion = (slug) => FR_QUESTIONS.find((q) => q.slug === slug);
export const FR_COUNTRY_IDS = COUNTRY_IDS;

// French field names (both levels).
export const FR_FIELDS = {
  cs: "Informatique", ds: "Science des données et IA", business: "Gestion et commerce", economics: "Économie et finance",
  engineering: "Ingénierie", architecture: "Architecture", law: "Droit", health: "Santé publique", psychology: "Psychologie",
  politics: "Sciences politiques et sociales", media: "Médias et communication", education: "Éducation", environment: "Environnement",
  agriculture: "Agriculture", tourism: "Tourisme", science: "Sciences naturelles", humanities: "Langues et lettres", art: "Arts et design",
  sport: "Sciences du sport", food: "Sciences des aliments", socialwork: "Travail social", urban: "Urbanisme", medicine: "Médecine",
  dentistry: "Médecine dentaire", pharmacy: "Pharmacie", veterinary: "Médecine vétérinaire", nursing: "Soins infirmiers",
  physio: "Kinésithérapie et nutrition",
};
