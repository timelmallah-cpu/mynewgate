// Turns a sign-in link into a session. Creates the account on first sign-in.
import { res, sameOrigin, setSession, clientIp } from "@/lib/account/http";
import { accountsConfigured, takeLoginToken, signInEmail, createSession, allow } from "@/lib/account/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  if (!sameOrigin(req)) return res({ error: "forbidden" }, 403);
  if (!accountsConfigured()) return res({ error: "not_configured" }, 503);
  let b;
  try { b = await req.json(); } catch { return res({ error: "bad_request" }, 400); }
  try {
    if (!(await allow(`cf:${clientIp(req)}`, 20, 3600))) return res({ error: "limit" }, 429);
    const tok = await takeLoginToken(b?.t);
    if (!tok) return res({ error: "invalid" }, 400);
    const { uid, created } = await signInEmail(tok.email, tok.lang);
    await setSession(await createSession(uid));
    return res({ ok: true, created, next: tok.next || null });
  } catch (e) {
    console.error("signin confirm failed", String(e).slice(0, 300));
    return res({ error: "failed" }, 502);
  }
}
