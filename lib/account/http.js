// Shared bits for the account API routes.
import { cookies } from "next/headers";
import { SITE_URL } from "../site";
import { sessionUid, getUser, SESSION_DAYS } from "./store";

export const SID = "dg_sid"; // httpOnly session id
export const FLAG = "dg_in"; // readable "signed in" flag, so pages only call the account API for signed-in visitors

export const res = (body, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });

// Blocks requests sent from other websites.
export function sameOrigin(req) {
  const origin = req.headers.get("origin");
  return !origin || new URL(origin).host === req.headers.get("host");
}

export const clientIp = (req) => (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";

// Address used in sign-in emails: the public site in production, the deployment itself on previews and locally.
export function baseUrl(req) {
  if (process.env.VERCEL_ENV === "production") return SITE_URL;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return new URL(req.url).origin;
}

const secure = () => process.env.NODE_ENV === "production";

export async function setSession(sid) {
  const c = await cookies();
  const maxAge = SESSION_DAYS * 86400;
  c.set(SID, sid, { httpOnly: true, secure: secure(), sameSite: "lax", path: "/", maxAge });
  c.set(FLAG, "1", { httpOnly: false, secure: secure(), sameSite: "lax", path: "/", maxAge });
}

export async function clearSession() {
  const c = await cookies();
  c.delete(SID);
  c.delete(FLAG);
}

export async function currentSid() {
  return (await cookies()).get(SID)?.value || null;
}

// The signed-in account, or null.
export async function currentUser() {
  const sid = await currentSid();
  const uid = await sessionUid(sid);
  if (!uid) return null;
  const user = await getUser(uid);
  return user ? { uid, user, sid } : null;
}
