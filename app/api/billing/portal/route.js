// Lets a subscriber manage or cancel Study Plus. Stripe's customer portal when it is available for the
// subscription; otherwise Link (Stripe's merchant of record), where Managed Payments subscriptions are managed.
import { T } from "@/lib/i18n";
import { res, sameOrigin, currentUser, baseUrl } from "@/lib/account/http";
import { billingConfigured, stripe } from "@/lib/billing";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const LINK = "https://link.com";

export async function POST(req) {
  if (!sameOrigin(req)) return res({ error: "forbidden" }, 403);
  let b = {};
  try { b = await req.json(); } catch {}
  const lang = b?.lang === "en" ? "en" : "ar";
  if (!billingConfigured()) return res({ error: "not_configured" }, 503);
  const cu = await currentUser().catch(() => null);
  if (!cu) return res({ error: "signin" }, 401);
  const customer = cu.user.plus?.customer;
  if (!customer) return res({ url: LINK });
  try {
    const s = await stripe("billing_portal/sessions", { body: { customer, return_url: `${baseUrl(req)}${T[lang].base}/account` } });
    return res({ url: s.url });
  } catch (e) {
    console.error("portal failed", String(e).slice(0, 300));
    return res({ url: LINK });
  }
}
