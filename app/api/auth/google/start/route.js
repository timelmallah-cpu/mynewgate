// Sends the visitor to Google to choose an account. Needs the privacy-policy consent from the sign-in page.
import { cookies } from "next/headers";
import { T } from "@/lib/i18n";
import { baseUrl, clientIp } from "@/lib/account/http";
import { accountsConfigured, allow } from "@/lib/account/store";
import { googleConfigured, startParams, GCOOKIE } from "@/lib/account/google";
import { BASE } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req) {
  const u = new URL(req.url);
  const lang = u.searchParams.get("lang") === "en" ? "en" : "ar";
  const nx = u.searchParams.get("next");
  const next = nx && /^\/[\w\-/]{0,80}$/.test(nx) ? nx : null;
  const base = baseUrl(req);
  const back = (err) => Response.redirect(`${base}${T[lang].base}/login?err=${err}`, 303);
  if (u.searchParams.get("consent") !== "1") return back("consent");
  if (!accountsConfigured() || !googleConfigured()) return back("off");
  try { if (!(await allow(`g:${clientIp(req)}`, 20, 3600))) return back("limit"); } catch { return back("fail"); }
  const redirectUri = `${base}/api/auth/google/callback`;
  const { url, state, verifier } = startParams(redirectUri);
  (await cookies()).set(GCOOKIE, JSON.stringify({ state, verifier, lang, next }), { httpOnly: true, secure: process.env.NODE_ENV === "production", sameSite: "lax", path: `${BASE}/api/auth/google`, maxAge: 600 });
  return Response.redirect(url, 303);
}
