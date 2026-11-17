// Google sends the visitor back here. Creates the account on first sign-in, then opens the account page.
import { cookies } from "next/headers";
import { T } from "@/lib/i18n";
import { baseUrl, setSession, clientIp } from "@/lib/account/http";
import { accountsConfigured, normEmail, signInEmail, createSession } from "@/lib/account/store";
import { googleConfigured, finish, GCOOKIE } from "@/lib/account/google";
import { BASE } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET(req) {
  const u = new URL(req.url);
  const base = baseUrl(req);
  const jar = await cookies();
  let st = null;
  try { st = JSON.parse(jar.get(GCOOKIE)?.value || "null"); } catch {}
  jar.delete({ name: GCOOKIE, path: `${BASE}/api/auth/google` });
  const lang = st?.lang === "en" ? "en" : "ar";
  const back = (err) => Response.redirect(`${base}${T[lang].base}/login?err=${err}`, 303);
  if (!accountsConfigured() || !googleConfigured()) return back("off");
  const code = u.searchParams.get("code");
  if (!st || !code || u.searchParams.get("state") !== st.state) return back(u.searchParams.get("error") === "access_denied" ? "cancel" : "google");
  try {
    const email = normEmail(await finish({ code, verifier: st.verifier, redirectUri: `${base}/api/auth/google/callback` }));
    if (!email) return back("google");
    const r = await signInEmail(email, lang, clientIp(req));
    if (r.limited) return back("limit");
    const { uid } = r;
    await setSession(await createSession(uid));
    return Response.redirect(`${base}${st.next || `${T[lang].base}/account`}`, 303);
  } catch (e) {
    console.error("google sign-in failed", String(e).slice(0, 300));
    return back("google");
  }
}
