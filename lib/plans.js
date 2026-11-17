// Free and Study Plus limits (agreed Nov 2026). Official information stays free for everyone;
// the subscription buys higher limits on the AI tools and the personal planning tools.
// per: "month" = calendar month, "life" = once per account (or browser), "cycle" = the paid billing period.
export const PLAN_LIMITS = {
  free: {
    ask: { n: 3, per: "month" },
    review: { n: 1, per: "life" },
    cv: { n: 1, per: "life" },
    email: { n: 1, per: "life" },
    compare: 3,
    saved: 5,
    apps: 3,
  },
  plus: {
    ask: { n: 100, per: "cycle" },
    review: { n: 20, per: "cycle" },
    cv: { n: 20, per: "cycle" },
    email: { n: 20, per: "cycle" },
    compare: 10,
    saved: Infinity,
    apps: Infinity,
  },
};

export const PRICE = { amount: "4.99", currency: "USD" };

// A subscription keeps its benefits until the paid period ends, also after cancelling.
export function isPlus(u) {
  const p = u?.plus;
  if (!p || !["active", "trialing", "past_due"].includes(p.status)) return false;
  return !p.periodEnd || p.periodEnd * 1000 > Date.now();
}
