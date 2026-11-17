// Counts one use of an AI tool against the visitor's plan (free or Study Plus).
import { currentUser, clientIp } from "../account/http";
import { isPlus, PLAN_LIMITS } from "../plans";
import { takeUse, takeQuestion } from "./limit";
import { billingConfigured } from "../billing";
import { cookies } from "next/headers";
import { randomBytes } from "node:crypto";
import { BASE } from "../site";

// A random id for this browser in a first-party cookie, used only to count free uses of the AI tools
// (so a new email on the same device does not give new free uses). It holds no personal data.
export const DEV_COOKIE = "mng_dev";
async function deviceId() {
  const jar = await cookies();
  let id = jar.get(DEV_COOKIE)?.value;
  if (!/^[a-f0-9]{32}$/.test(id || "")) {
    id = randomBytes(16).toString("hex");
    jar.set(DEV_COOKIE, id, { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: BASE, maxAge: 400 * 86400 });
  }
  return id;
}

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
  let dev = null;
  if (!plus) { try { dev = await deviceId(); } catch {} }
  const r = await takeUse(kind, { uid: cu?.uid, ip: clientIp(req), dev, plus, cycleStart: cu?.user?.plus?.periodStart, rule });
  return { ...r, plus, signedIn: Boolean(cu), per: plus ? "cycle" : rule.per };
}

// The JSON a tool returns when the limit is reached: the page shows what the subscription adds.
export const limitBody = (r) => ({ error: r.reason === "total" ? "busy" : "limit", plus: r.plus, signedIn: r.signedIn, per: r.per, limit: r.limit });
