// Starts a Study Plus subscription: sends the signed-in visitor to Stripe Checkout (Managed Payments).
import { T } from "@/lib/i18n";
import { res, sameOrigin, currentUser, baseUrl } from "@/lib/account/http";
import { billingConfigured, stripe } from "@/lib/billing";
import { isPlus } from "@/lib/plans";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  if (!sameOrigin(req)) return res({ error: "forbidden" }, 403);
  let b = {};
  try { b = await req.json(); } catch {}
  const lang = b?.lang === "en" ? "en" : "ar";
  if (!billingConfigured()) return res({ error: "not_configured" }, 503);
  try {
    const cu = await currentUser();
    if (!cu) return res({ error: "signin" }, 401);
    if (isPlus(cu.user)) return res({ error: "already" }, 409);
    const base = baseUrl(req) + T[lang].base;
    const session = await stripe("checkout/sessions", {
      body: {
        mode: "subscription",
        line_items: [{ price: process.env.STRIPE_PRICE_MONTHLY, quantity: 1 }],
        managed_payments: { enabled: true },
        client_reference_id: cu.uid,
        metadata: { uid: cu.uid },
        subscription_data: { metadata: { uid: cu.uid } },
        ...(cu.user.plus?.customer ? { customer: cu.user.plus.customer } : { customer_email: cu.user.email }),
        success_url: `${base}/account?sub=ok`,
        cancel_url: `${base}/pricing?sub=cancel`,
        locale: "auto",
      },
    });
    return res({ url: session.url });
  } catch (e) {
    console.error("checkout failed", String(e).slice(0, 300));
    return res({ error: "failed" }, 502);
  }
}
