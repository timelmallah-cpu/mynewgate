// Accounts, stored in Upstash Redis (the same database as the assistant's daily counters).
// Keys:
//   user:<uid>        JSON {email, created, lang, consentAt, policy, profile, list}   expires 2 years after the last sign-in or visit
//   email:<hash>      uid                                                              same expiry
//   tok:<hash>        JSON {email, lang, next}   one-time sign-in link, 15 minutes
//   sess:<hash>       uid                        a signed-in browser, 90 days
//   usess:<uid>       set of session hashes, so deleting the account signs out everywhere
// Tokens and session ids are only stored as SHA-256 hashes.
import { createHash, randomBytes } from "node:crypto";
import { pipeline, limitsConfigured } from "../assistant/limit";
import { COUNTRY_IDS } from "../options";
import { PRIVACY_UPDATED } from "../../components/Privacy";

export const accountsConfigured = limitsConfigured;
export const SESSION_DAYS = 90;
const KEEP = 730 * 86400;
const TOKEN_TTL = 15 * 60;

const h = (s) => createHash("sha256").update(`dg|${s}`).digest("hex");
const rand = (n) => randomBytes(n).toString("base64url");

export function normEmail(e) {
  const s = typeof e === "string" ? e.trim().toLowerCase() : "";
  return s.length <= 254 && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(s) ? s : null;
}

// Fixed-window counter. Returns true while the count is within max.
export async function allow(key, max, ttl) {
  const k = `rl:${h(key)}`;
  const [n] = await pipeline([["INCR", k], ["EXPIRE", k, ttl, "NX"]]);
  return n <= max;
}

export async function createLoginToken({ email, lang, next }) {
  const t = rand(32);
  await pipeline([["SET", `tok:${h(t)}`, JSON.stringify({ email, lang, next }), "EX", TOKEN_TTL]]);
  return t;
}

// One use only: the token is deleted as it is read.
export async function takeLoginToken(t) {
  if (typeof t !== "string" || !/^[\w-]{40,60}$/.test(t)) return null;
  const [v] = await pipeline([["GETDEL", `tok:${h(t)}`]]);
  try { return v ? JSON.parse(v) : null; } catch { return null; }
}

export async function getUser(uid) {
  if (!uid) return null;
  const [v] = await pipeline([["GET", `user:${uid}`]]);
  try { return v ? JSON.parse(v) : null; } catch { return null; }
}

async function saveUser(uid, u) {
  await pipeline([
    ["SET", `user:${uid}`, JSON.stringify(u), "EX", KEEP],
    ["SET", `email:${h(u.email)}`, uid, "EX", KEEP],
  ]);
}

// Finds the account for an email, or creates it (the sign-in link is the proof the person owns the address).
export async function signInEmail(email, lang) {
  const [found] = await pipeline([["GET", `email:${h(email)}`]]);
  let uid = found;
  let u = await getUser(uid);
  const created = !u;
  if (!u) {
    uid = rand(12);
    u = { email, created: new Date().toISOString(), lang, consentAt: new Date().toISOString(), policy: PRIVACY_UPDATED, profile: {}, list: [] };
  }
  u.lastSeen = new Date().toISOString().slice(0, 10);
  await saveUser(uid, u);
  return { uid, user: u, created };
}

export async function createSession(uid) {
  const sid = rand(32);
  const sh = h(sid);
  await pipeline([
    ["SET", `sess:${sh}`, uid, "EX", SESSION_DAYS * 86400],
    ["SADD", `usess:${uid}`, sh],
    ["EXPIRE", `usess:${uid}`, KEEP],
  ]);
  return sid;
}

export async function sessionUid(sid) {
  if (typeof sid !== "string" || !/^[\w-]{40,60}$/.test(sid)) return null;
  const [uid] = await pipeline([["GET", `sess:${h(sid)}`]]);
  return uid || null;
}

export async function endSession(sid) {
  if (typeof sid !== "string") return;
  const sh = h(sid);
  const [uid] = await pipeline([["GETDEL", `sess:${sh}`]]);
  if (uid) await pipeline([["SREM", `usess:${uid}`, sh]]);
}

// Keeps an active account from expiring: called at most once a day per account.
export async function touch(uid, u) {
  const day = new Date().toISOString().slice(0, 10);
  if (u.lastSeen === day) return;
  u.lastSeen = day;
  await saveUser(uid, u);
}

const LEVELS = ["bachelor", "master", "phd", "vocational", "foundation"];
const KEY_RE = /^[ps]:[\w-]{1,60}$/;

export function cleanProfile(p) {
  const o = {};
  if (!p || typeof p !== "object") return o;
  if (LEVELS.includes(p.level)) o.level = p.level;
  if (Array.isArray(p.countries)) o.countries = [...new Set(p.countries.filter((c) => COUNTRY_IDS.includes(c)))];
  if (typeof p.field === "string" && p.field.trim()) o.field = p.field.trim().slice(0, 80);
  const y = Number(p.intakeYear);
  if (Number.isInteger(y) && y >= 2026 && y <= 2035) o.intakeYear = y;
  return o;
}

export const cleanList = (l) => (Array.isArray(l) ? [...new Set(l.filter((k) => typeof k === "string" && KEY_RE.test(k)))].slice(0, 300) : null);

export async function updateUser(uid, { profile, list, lang }) {
  const u = await getUser(uid);
  if (!u) return null;
  if (profile !== undefined) u.profile = cleanProfile(profile);
  if (list !== undefined) { const l = cleanList(list); if (l) u.list = l; }
  if (lang === "ar" || lang === "en") u.lang = lang;
  await saveUser(uid, u);
  return u;
}

export async function deleteUser(uid) {
  const u = await getUser(uid);
  const [sessions] = await pipeline([["SMEMBERS", `usess:${uid}`]]);
  const cmds = [["DEL", `user:${uid}`], ["DEL", `usess:${uid}`]];
  if (u?.email) cmds.push(["DEL", `email:${h(u.email)}`]);
  for (const sh of sessions || []) cmds.push(["DEL", `sess:${sh}`]);
  await pipeline(cmds);
}

// Study Plus: the subscription state from Stripe, and the Stripe customer -> account link used by webhooks.
export async function setPlus(uid, plus) {
  const u = await getUser(uid);
  if (!u) return null;
  u.plus = plus;
  await saveUser(uid, u);
  if (plus?.customer) await pipeline([["SET", `cust:${plus.customer}`, uid, "EX", KEEP]]);
  return u;
}
export async function uidForCustomer(customer) {
  if (!customer) return null;
  const [uid] = await pipeline([["GET", `cust:${customer}`]]);
  return uid || null;
}

// What the person sees about themselves (account page and data export).
export const publicUser = (u) => ({
  email: u.email, created: u.created, lang: u.lang, consentAt: u.consentAt, policy: u.policy,
  profile: u.profile || {}, list: u.list || [],
  plan: u.plus ? { status: u.plus.status, periodEnd: u.plus.periodEnd, cancelAtPeriodEnd: !!u.plus.cancelAtPeriodEnd } : null,
});
