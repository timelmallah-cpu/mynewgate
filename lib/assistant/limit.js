// Daily question limits, stored in Upstash Redis (REST API). Only counters are stored: a hashed visitor id per day, never the questions.
import { createHash } from "node:crypto";

const URL_ = () => process.env.KV_REST_API_URL || process.env.UPSTASH_REDIS_REST_URL;
const TOKEN = () => process.env.KV_REST_API_TOKEN || process.env.UPSTASH_REDIS_REST_TOKEN;
export const PER_USER = () => Number(process.env.ASK_DAILY_PER_USER) || 15;
export const TOTAL = () => Number(process.env.ASK_DAILY_TOTAL) || 1500;
export const limitsConfigured = () => Boolean(URL_() && TOKEN());

export async function pipeline(cmds) {
  const r = await fetch(`${URL_()}/pipeline`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN()}`, "Content-Type": "application/json" },
    body: JSON.stringify(cmds),
    cache: "no-store",
  });
  if (!r.ok) throw new Error(`redis ${r.status}`);
  return (await r.json()).map((x) => x.result);
}

// Counts one use. kind "ask" = a question, "review" = a letter review (separate daily limits).
// Returns { ok, left } or { ok: false, reason: "user" | "total" }.
const KINDS = {
  ask: { per: PER_USER, total: TOTAL },
  review: { per: () => Number(process.env.REVIEW_DAILY_PER_USER) || 5, total: () => Number(process.env.REVIEW_DAILY_TOTAL) || 300 },
  email: { per: () => Number(process.env.EMAIL_DAILY_PER_USER) || 10, total: () => Number(process.env.EMAIL_DAILY_TOTAL) || 500 },
  cv: { per: () => Number(process.env.REVIEW_DAILY_PER_USER) || 5, total: () => Number(process.env.REVIEW_DAILY_TOTAL) || 300 },
};
export async function takeQuestion(ip, kind = "ask") {
  const k = KINDS[kind];
  const day = new Date().toISOString().slice(0, 10);
  const who = visitorId(ip, day);
  const p = kind === "ask" ? "ask" : kind;
  const ku = `${p}:u:${day}:${who}`, kt = `${p}:t:${day}`;
  const [u, , t] = await pipeline([["INCR", ku], ["EXPIRE", ku, 90000], ["INCR", kt], ["EXPIRE", kt, 90000]]);
  if (t > k.total()) return { ok: false, reason: "total" };
  if (u > k.per()) return { ok: false, reason: "user" };
  return { ok: true, left: k.per() - u };
}

export const visitorId = (ip, day) => createHash("sha256").update(`mng-ask|${day}|${ip}`).digest("hex").slice(0, 24);

// Plan-aware use counters (lib/plans.js). Signed-in visitors are counted per account; other visitors per device
// (a random id in a first-party cookie, see usage.js), or per hashed IP address when there is no device id.
// Free use by signed-in visitors is also counted per device, so a new email on the same phone does not give new
// free uses, while another phone on the same network still gets its own. Only counters are stored.
// Returns { ok, left, limit } or { ok: false, reason: "user" | "total" }.
export async function takeUse(kind, { uid, ip, dev, plus, cycleStart, rule }) {
  const totalKey = `${kind}:t:${new Date().toISOString().slice(0, 10)}`;
  const total = (KINDS[kind] || KINDS.ask).total();
  const month = new Date().toISOString().slice(0, 7);
  const life = rule.per === "life";
  const devKey = dev ? `use:${kind}:d:${visitorId(dev, life ? "dev" : month)}${life ? "" : ":" + month}` : null;
  const freeTtl = life ? 400 * 86400 : 35 * 86400;
  let key, ttl;
  if (plus) { key = `use:${kind}:p:${uid}:${cycleStart || month}`; ttl = 40 * 86400; }
  else if (!uid && devKey) { key = devKey; ttl = freeTtl; }
  else if (life) { key = `use:${kind}:l:${uid || visitorId(ip, "life")}`; ttl = freeTtl; }
  else { key = `use:${kind}:m:${uid || visitorId(ip, month)}:${month}`; ttl = freeTtl; }
  const guard = !plus && uid && devKey ? devKey : null;
  // The device counter is read first and only raised when the use is allowed, so a refused try does not use up
  // the device's allowance, and the account's own counter is given back.
  const [u, , t, , g] = await pipeline([["INCR", key], ["EXPIRE", key, ttl], ["INCR", totalKey], ["EXPIRE", totalKey, 90000], ...(guard ? [["GET", guard]] : [])]);
  if (t > total) return { ok: false, reason: "total" };
  if (u > rule.n) return { ok: false, reason: "user", limit: rule.n };
  if (guard && Number(g || 0) >= rule.n) { await pipeline([["DECR", key]]); return { ok: false, reason: "user", limit: rule.n }; }
  if (guard) await pipeline([["INCR", guard], ["EXPIRE", guard, freeTtl]]);
  return { ok: true, left: rule.n - u, limit: rule.n };
}
