// Sends a one-time sign-in link. The answer is the same whether or not the email already has an account.
import { T } from "@/lib/i18n";
import { res, sameOrigin, clientIp, baseUrl } from "@/lib/account/http";
import { accountsConfigured, normEmail, allow, createLoginToken } from "@/lib/account/store";
import { mailConfigured, mockMail, sendSignIn } from "@/lib/account/mail";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  if (!sameOrigin(req)) return res({ error: "forbidden" }, 403);
  let b;
  try { b = await req.json(); } catch { return res({ error: "bad_request" }, 400); }
  const lang = b?.lang === "en" ? "en" : "ar";
  const email = normEmail(b?.email);
  if (!email) return res({ error: "email" }, 400);
  if (b?.consent !== true) return res({ error: "consent" }, 400);
  const next = typeof b?.next === "string" && /^\/[\w\-/]{0,80}$/.test(b.next) ? b.next : null;
  if (!accountsConfigured() || (!mailConfigured() && !mockMail())) return res({ error: "not_configured" }, 503);

  try {
    if (!(await allow(`ip:${clientIp(req)}`, 10, 3600)) || !(await allow(`em:${email}`, 3, 900))) return res({ error: "limit" }, 429);
    const token = await createLoginToken({ email, lang, next });
    // The token travels after "#", so it never reaches server logs or link scanners; the page sends it back with a button press.
    const link = `${baseUrl(req)}${T[lang].base}/login/confirm#t=${token}`;
    if (mockMail()) return res({ ok: true, devLink: link });
    await sendSignIn({ to: email, link, lang, brand: T[lang].brand });
    return res({ ok: true });
  } catch (e) {
    console.error("signin request failed", String(e).slice(0, 300));
    return res({ error: "failed" }, 502);
  }
}
