import { res, sameOrigin, currentSid, clearSession } from "@/lib/account/http";
import { endSession, accountsConfigured } from "@/lib/account/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function POST(req) {
  if (!sameOrigin(req)) return res({ error: "forbidden" }, 403);
  try { if (accountsConfigured()) await endSession(await currentSid()); } catch {}
  await clearSession();
  return res({ ok: true });
}
