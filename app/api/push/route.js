// Switch deadline alerts on or off for this browser. POST {sub, ids, lang} saves or updates; DELETE {endpoint} removes.
import { sameOrigin, clientIp } from "@/lib/account/http";
import { allow } from "@/lib/account/store";
import { pushConfigured, cleanSub, saveSub, removeSub, MAX_IDS } from "@/lib/push";
import programmes from "@/lib/programmes.json";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
const IDS = new Set(programmes.map((p) => String(p.id)));
const no = (error, status) => Response.json({ error }, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req) {
  if (!sameOrigin(req)) return no("forbidden", 403);
  if (!pushConfigured()) return no("not_configured", 503);
  let b; try { b = await req.json(); } catch { return no("bad_request", 400); }
  const sub = cleanSub(b?.sub);
  if (!sub) return no("bad_request", 400);
  const ids = [...new Set((Array.isArray(b?.ids) ? b.ids : []).map(String).filter((x) => IDS.has(x)))].slice(0, MAX_IDS);
  try {
    if (!(await allow(`push:${clientIp(req)}`, 60, 3600))) return no("limit", 429);
    await saveSub(sub, ids, b?.lang === "en" ? "en" : "ar");
  } catch { return no("failed", 502); }
  return Response.json({ ok: true, count: ids.length }, { headers: { "Cache-Control": "no-store" } });
}

export async function DELETE(req) {
  if (!sameOrigin(req)) return no("forbidden", 403);
  if (!pushConfigured()) return no("not_configured", 503);
  let b; try { b = await req.json(); } catch { return no("bad_request", 400); }
  if (typeof b?.endpoint !== "string" || b.endpoint.length > 600) return no("bad_request", 400);
  try { await removeSub(b.endpoint); } catch { return no("failed", 502); }
  return Response.json({ ok: true }, { headers: { "Cache-Control": "no-store" } });
}
