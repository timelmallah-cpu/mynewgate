export const FIELDS = [
  { id: "cs", label: "علوم الحاسب" },
  { id: "ds", label: "علوم البيانات" },
  { id: "business", label: "إدارة الأعمال" },
  { id: "engineering", label: "الهندسة" },
  { id: "health", label: "الصحة العامة" },
];

export const COUNTRIES = [
  { id: "de", label: "ألمانيا" },
  { id: "nl", label: "هولندا" },
  { id: "es", label: "إسبانيا" },
  { id: "be", label: "بلجيكا" },
];

export const BUDGETS = [
  { id: "0", label: "بدون رسوم دراسية", max: 0 },
  { id: "3000", label: "حتى 3,000 يورو في السنة", max: 3000 },
  { id: "8000", label: "حتى 8,000 يورو في السنة", max: 8000 },
  { id: "15000", label: "حتى 15,000 يورو في السنة", max: 15000 },
  { id: "any", label: "لا يهم", max: Infinity },
];

export const DURATIONS = [
  { id: "1", label: "سنة واحدة تقريباً", test: (y) => y !== null && y <= 1 },
  { id: "2", label: "سنة ونصف إلى سنتين", test: (y) => y !== null && y >= 1.5 },
  { id: "any", label: "لا يهم", test: () => true },
];

// Deterministic matching. Programmes with an unpublished fee are kept
// (marked) rather than hidden, unless the user wants tuition-free only.
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

export function feeLabel(p) {
  if (p.feePerYear === null) return "الرسوم غير منشورة بوضوح";
  if (p.feePerYear === 0) return "بدون رسوم دراسية";
  return `حوالي ${p.feePerYear.toLocaleString("en-US")} يورو سنوياً`;
}
