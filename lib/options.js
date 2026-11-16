import { T } from "./i18n";

export const LEVEL_IDS = ["bachelor", "master", "doctorate"];
export const FIELD_IDS = ["cs", "ds", "business", "economics", "engineering", "architecture", "law", "health"];
export const BA_FIELD_IDS = ["cs", "ds", "business", "economics", "engineering", "health", "medicine", "dentistry", "pharmacy", "nursing", "architecture", "law"];
export const COUNTRY_IDS = ["de", "nl", "es", "be", "ee", "pl", "hu", "ro", "lv", "lt", "it", "fi", "bg", "se", "cz", "at", "fr", "pt"];
export const BUDGETS = [
  { id: "0", max: 0 },
  { id: "3000", max: 3000 },
  { id: "8000", max: 8000 },
  { id: "15000", max: 15000 },
  { id: "any", max: Infinity },
];
export const BA_DURATIONS = [
  { id: "3", test: (y) => y !== null && y <= 3.5 },
  { id: "4", test: (y) => y !== null && y >= 4 && y <= 5 },
  { id: "6", test: (y) => y !== null && y >= 5.5 },
  { id: "any", test: () => true },
];
export const DURATIONS = [
  { id: "1", test: (y) => y !== null && y <= 1 },
  { id: "2", test: (y) => y !== null && y >= 1.5 },
  { id: "any", test: () => true },
];

// Deterministic matching. Programmes with an unpublished fee are kept
// (shown separately) rather than hidden, unless the user wants tuition-free only.
export function match(programmes, a) {
  const budget = BUDGETS.find((b) => b.id === a.budget) ?? BUDGETS.at(-1);
  const level = a.level || "master";
  const DS = level === "bachelor" ? BA_DURATIONS : level === "doctorate" ? [{ id: "any", test: () => true }] : DURATIONS;
  const dur = DS.find((d) => d.id === a.duration) ?? DS.at(-1);
  return programmes
    .filter((p) => (p.level || "master") === level)
    .filter((p) => !a.field || a.field === "any" || p.field === a.field)
    .filter((p) => !a.countries?.length || a.countries.includes(p.country))
    .filter((p) => dur.test(p.years) || (a.duration !== "any" && p.years === null))
    .filter((p) => (p.feePerYear === null ? budget.max > 0 : p.feePerYear <= budget.max))
    .sort((x, y) => (x.feePerYear ?? Infinity) - (y.feePerYear ?? Infinity));
}

export function feeLabel(p, lang) {
  const t = T[lang];
  if (p.feePerYear === null) return t.feeUnknown;
  if (p.feePerYear === 0) return t.feeFree;
  if (!p.feePeriod) return t.feePeriodNA;
  const v = p.feePerYear.toLocaleString("en-US");
  return t.feeApprox(p.feePerYearMax ? `${v} - ${p.feePerYearMax.toLocaleString("en-US")}` : v);
}
