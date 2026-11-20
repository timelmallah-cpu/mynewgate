// Deadline alerts on the phone (Web Push), without email. A browser that switches alerts on sends its push
// subscription and the programme ids it follows (My list + application tracker on that device); we keep only that,
// in Redis hash "push:subs" (field = hash of the endpoint), with no name, email or account. A daily cron
// (/api/push/cron, vercel.json) sends one alert per device when a followed programme's deadline is 14, 3 or 1 days away.
// Needs in Vercel: NEXT_PUBLIC_VAPID_PUBLIC_KEY, VAPID_PRIVATE_KEY and CRON_SECRET (Hatem sets them; never in the repo).
import { createHash } from "node:crypto";
import { pipeline, limitsConfigured } from "./assistant/limit";

export const pushConfigured = () => Boolean(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY && process.env.VAPID_PRIVATE_KEY && limitsConfigured());
export const subKey = (endpoint) => createHash("sha256").update(endpoint).digest("hex").slice(0, 32);
export const HASH = "push:subs";
export const MAX_IDS = 200;

// Keeps only a well-formed subscription: an https endpoint and the two keys the browser gives.
export function cleanSub(s) {
  if (!s || typeof s !== "object" || typeof s.endpoint !== "string" || s.endpoint.length > 600) return null;
  let u;
  try { u = new URL(s.endpoint); } catch { return null; }
  if (u.protocol !== "https:") return null;
  const k = s.keys || {};
  if (typeof k.p256dh !== "string" || typeof k.auth !== "string" || k.p256dh.length > 200 || k.auth.length > 100) return null;
  return { endpoint: s.endpoint, keys: { p256dh: k.p256dh, auth: k.auth } };
}

export async function saveSub(sub, ids, lang) {
  const v = JSON.stringify({ sub, ids, lang, at: new Date().toISOString().slice(0, 10) });
  await pipeline([["HSET", HASH, subKey(sub.endpoint), v]]);
}
export async function removeSub(endpoint) {
  await pipeline([["HDEL", HASH, subKey(endpoint)]]);
}
export async function allSubs() {
  const [flat] = await pipeline([["HGETALL", HASH]]);
  const out = [];
  for (let i = 0; i + 1 < (flat || []).length; i += 2) {
    try { out.push({ key: flat[i], ...JSON.parse(flat[i + 1]) }); } catch {}
  }
  return out;
}
