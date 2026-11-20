// Starting figures for a programme's cost and the full-cost estimate built from them. Used by the cost calculator
// (as its starting values) and by the "full cost" line at the top of the programme page, so both always agree.
// Travel is never included: flight prices are not published by any official source.
import { COSTS } from "./costs";

export function costDefaults(p, origin) {
  const c = COSTS[p.country] || { fees: [], proof: null };
  const fees = (c.fees || []).filter((f) => !f.only || f.only === (origin || "eg"));
  const knownFees = fees.reduce((a, f) => a + (f.eur || 0), 0);
  const floor = c.proofExcludesHousing ? null : c.proofMonthly;
  return {
    c, fees, knownFees, floor,
    tuition: p.feePerYear ?? null,
    living: p.livingMonthly != null && floor ? Math.max(p.livingMonthly, floor) : p.livingMonthly ?? floor ?? null,
    insurance: c.insurance && c.insurance.eur != null ? c.insurance.eur : null,
    oneTime: knownFees || null,
    years: p.years ?? null,
  };
}

// { total, perYear, once, years } in euros, or { missing: [...] } when a needed figure is not published.
export function estimateTotal(p, origin) {
  const d = costDefaults(p, origin);
  const missing = [];
  if (d.tuition == null) missing.push("tuition");
  if (d.living == null) missing.push("living");
  if (d.years == null) missing.push("years");
  if (missing.length) return { missing };
  const perYear = d.tuition + 12 * (d.living + (d.insurance || 0));
  const once = d.oneTime || 0;
  return { total: perYear * d.years + once, perYear, once, years: d.years, insuranceKnown: d.insurance != null, visaKnown: d.oneTime != null };
}
