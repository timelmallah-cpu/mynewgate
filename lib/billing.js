// Study Plus subscriptions through Stripe Checkout with Managed Payments (Stripe is the merchant of record).
// Keys are set in Vercel only: STRIPE_SECRET_KEY, STRIPE_WEBHOOK_SECRET, STRIPE_PRICE_MONTHLY.
import { createHmac, timingSafeEqual } from "node:crypto";

export const billingConfigured = () => Boolean(process.env.STRIPE_SECRET_KEY && process.env.STRIPE_PRICE_MONTHLY);

// Form-encodes nested objects the way the Stripe API expects (a[b][0][c]=…).
function form(obj, prefix = "", out = new URLSearchParams()) {
  for (const [k, v] of Object.entries(obj)) {
    if (v === undefined || v === null) continue;
    const key = prefix ? `${prefix}[${k}]` : k;
    if (typeof v === "object") form(v, key, out);
    else out.append(key, String(v));
  }
  return out;
}

export async function stripe(path, { method = "POST", body } = {}) {
  const r = await fetch(`https://api.stripe.com/v1/${path}`, {
    method,
    headers: { Authorization: `Bearer ${process.env.STRIPE_SECRET_KEY}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: body ? form(body) : undefined,
    cache: "no-store",
  });
  const d = await r.json().catch(() => ({}));
  if (!r.ok) throw new Error(`stripe ${r.status}: ${d?.error?.message || ""}`.slice(0, 300));
  return d;
}

// Verifies the Stripe-Signature header (HMAC-SHA256 of "timestamp.body", 5-minute tolerance).
export function verifyWebhook(body, header) {
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!secret || !header) return false;
  const parts = Object.fromEntries(header.split(",").map((p) => p.split("=")).filter((p) => p.length === 2 && p[0] === "t"));
  const sigs = header.split(",").filter((p) => p.startsWith("v1=")).map((p) => p.slice(3));
  const t = Number(parts.t);
  if (!t || Math.abs(Date.now() / 1000 - t) > 300) return false;
  const expected = createHmac("sha256", secret).update(`${t}.${body}`).digest("hex");
  return sigs.some((s) => s.length === expected.length && timingSafeEqual(Buffer.from(s), Buffer.from(expected)));
}

// The parts of a Stripe subscription we keep on the account. Newer API versions keep the period on the item.
export function subscriptionState(s) {
  const item = s?.items?.data?.[0] || {};
  const end = s.current_period_end || item.current_period_end || null;
  const start = s.current_period_start || item.current_period_start || null;
  return {
    sub: s.id, customer: typeof s.customer === "string" ? s.customer : s.customer?.id,
    status: s.status, periodEnd: end, periodStart: start ? new Date(start * 1000).toISOString().slice(0, 10) : null,
    cancelAtPeriodEnd: Boolean(s.cancel_at_period_end || s.cancel_at),
  };
}
