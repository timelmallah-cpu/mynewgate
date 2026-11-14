import { T } from "./i18n";

export const FIELD_IDS = ["cs", "ds", "business", "engineering", "health"];
export const COUNTRY_IDS = ["de", "nl", "es", "be", "ee", "pl", "hu", "ro"];
export const BUDGETS = [
  { id: "0", max: 0 },
  { id: "3000", max: 3000 },
  { id: "8000", max: 8000 },
  { id: "15000", max: 15000 },
  { id: "any", max: Infinity },
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
  const dur = DURATIONS.find((d) => d.id === a.duration) ?? DURATIONS.at(-1);
  return programmes
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
  return t.feeApprox(p.feePerYear.toLocaleString("en-US"));
}
