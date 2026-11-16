// Stripe webhook: keeps each account's Study Plus state in step with its subscription.
// Events: checkout.session.completed, customer.subscription.created / updated / deleted.
import { verifyWebhook, stripe, subscriptionState } from "@/lib/billing";
import { setPlus, uidForCustomer } from "@/lib/account/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const ok = () => Response.json({ received: true });

export async function POST(req) {
  const body = await req.text();
  if (!verifyWebhook(body, req.headers.get("stripe-signature"))) return Response.json({ error: "bad_signature" }, { status: 400 });
  let ev;
  try { ev = JSON.parse(body); } catch { return Response.json({ error: "bad_request" }, { status: 400 }); }
  const o = ev.data?.object || {};
  try {
    if (ev.type === "checkout.session.completed" && o.mode === "subscription" && o.subscription) {
      const uid = o.client_reference_id || o.metadata?.uid;
      const sub = await stripe(`subscriptions/${o.subscription}`, { method: "GET" });
      if (uid) await setPlus(uid, subscriptionState(sub));
    } else if (ev.type.startsWith("customer.subscription.")) {
      const state = subscriptionState(o);
      const uid = o.metadata?.uid || (await uidForCustomer(state.customer));
      if (uid) await setPlus(uid, ev.type === "customer.subscription.deleted" ? { ...state, status: "canceled" } : state);
    }
  } catch (e) {
    console.error("webhook failed", ev.type, String(e).slice(0, 300));
    return Response.json({ error: "failed" }, { status: 500 });
  }
  return ok();
}
