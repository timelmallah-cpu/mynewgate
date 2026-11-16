// Counts one use of an AI tool against the visitor's plan (free or Study Plus).
import { currentUser, clientIp } from "../account/http";
import { isPlus, PLAN_LIMITS } from "../plans";
import { takeUse, takeQuestion } from "./limit";
import { billingConfigured } from "../billing";

export async function useQuota(req, kind) {
  // Until subscriptions are open, the earlier daily limits stay, so nobody hits a limit they can't lift.
  if (!billingConfigured()) {
    const r = await takeQuestion(clientIp(req), kind);
    return { ...r, plus: false, signedIn: false, per: "day" };
  }
  let cu = null;
  try { cu = await currentUser(); } catch {}
  const plus = isPlus(cu?.user);
  const rule = PLAN_LIMITS[plus ? "plus" : "free"][kind];
  const r = await takeUse(kind, { uid: cu?.uid, ip: clientIp(req), plus, cycleStart: cu?.user?.plus?.periodStart, rule });
  return { ...r, plus, signedIn: Boolean(cu), per: plus ? "cycle" : rule.per };
}

// The JSON a tool returns when the limit is reached: the page shows what the subscription adds.
export const limitBody = (r) => ({ error: r.reason === "total" ? "busy" : "limit", plus: r.plus, signedIn: r.signedIn, per: r.per, limit: r.limit });
