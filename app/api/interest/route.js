// Anonymous interest counter for "coming soon" regions (Redis hash interest:regions) and sections (interest:sections). Only the region is counted;
// the IP is used for a short rate limit (hashed key, 1 day) and never stored with the count.
import { REGIONS } from "@/lib/regions";
import { SECTION_IDS } from "@/lib/sections";
import { pipeline, limitsConfigured } from "@/lib/assistant/limit";
import { allow } from "@/lib/account/store";
import { sameOrigin, clientIp, res } from "@/lib/account/http";

const SOON = new Set(REGIONS.filter((r) => !r.countries.length).map((r) => r.id));
const SECTIONS = new Set(SECTION_IDS);

export async function POST(req) {
  if (!sameOrigin(req)) return res({ error: "origin" }, 403);
  const b = await req.json().catch(() => ({}));
  const isSection = SECTIONS.has(b?.region);
  if (!SOON.has(b?.region) && !isSection) return res({ error: "region" }, 400);
  if (!limitsConfigured()) return res({ ok: true });
  if (!(await allow(`want|${b.region}|${clientIp(req)}`, 1, 86400))) return res({ ok: true });
  await pipeline([["HINCRBY", isSection ? "interest:sections" : "interest:regions", b.region, 1]]);
  return res({ ok: true });
}
