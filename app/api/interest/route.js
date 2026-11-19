// Anonymous interest counter for "coming soon" regions (Redis hash interest:regions). Only the region is counted;
// the IP is used for a short rate limit (hashed key, 1 day) and never stored with the count.
import { REGIONS } from "@/lib/regions";
import { pipeline, limitsConfigured } from "@/lib/assistant/limit";
import { allow } from "@/lib/account/store";
import { sameOrigin, clientIp, res } from "@/lib/account/http";

const SOON = new Set(REGIONS.filter((r) => !r.countries.length).map((r) => r.id));

export async function POST(req) {
  if (!sameOrigin(req)) return res({ error: "origin" }, 403);
  const b = await req.json().catch(() => ({}));
  if (!SOON.has(b?.region)) return res({ error: "region" }, 400);
  if (!limitsConfigured()) return res({ ok: true });
  if (!(await allow(`want|${b.region}|${clientIp(req)}`, 1, 86400))) return res({ ok: true });
  await pipeline([["HINCRBY", "interest:regions", b.region, 1]]);
  return res({ ok: true });
}
