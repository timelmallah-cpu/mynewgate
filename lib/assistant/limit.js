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

// Counts one question. Returns { ok, left } or { ok: false, reason: "user" | "total" }.
export async function takeQuestion(ip) {
  const day = new Date().toISOString().slice(0, 10);
  const who = visitorId(ip, day);
  const ku = `ask:u:${day}:${who}`, kt = `ask:t:${day}`;
  const [u, , t] = await pipeline([["INCR", ku], ["EXPIRE", ku, 90000], ["INCR", kt], ["EXPIRE", kt, 90000]]);
  if (t > TOTAL()) return { ok: false, reason: "total" };
  if (u > PER_USER()) return { ok: false, reason: "user" };
  return { ok: true, left: PER_USER() - u };
}

export const visitorId = (ip, day) => createHash("sha256").update(`mng-ask|${day}|${ip}`).digest("hex").slice(0, 24);
