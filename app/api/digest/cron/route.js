// Weekly run (vercel.json, Mondays): builds the "deadlines coming up" email from the site's data and saves it in Kit
// as a DRAFT broadcast (send_at null). Hatem reviews and sends it from Kit; nothing is sent automatically.
// Needs in Vercel: KIT_API_KEY (a Kit V4 key, starts with "kit_") and CRON_SECRET. Hatem sets them; never in the repo.
import { digest, isoDay } from "@/lib/digest";
import { digestEmail, day } from "@/lib/digestEmail";
import { pipeline, limitsConfigured } from "@/lib/assistant/limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

export async function GET(req) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) return new Response("forbidden", { status: 403 });
  const key = process.env.KIT_API_KEY;
  if (!key) return Response.json({ error: "not_configured" }, { status: 503 });
  const x = digest(isoDay(Date.now()), 14);
  // One draft per week, even if Vercel retries the run.
  if (limitsConfigured()) {
    const [ok] = await pipeline([["SET", `digest:week:${x.from}`, "1", "NX", "EX", 6 * 86400]]);
    if (ok !== "OK") return Response.json({ skipped: "already_created" });
  }
  const r = await fetch("https://api.kit.com/v4/broadcasts", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json", "X-Kit-Api-Key": key },
    body: JSON.stringify({
      subject: `مواعيد التقديم القريبة: ${day(x.from)} - ${day(x.to)}`,
      preview_text: `${x.confirmed} موعداً مؤكداً للبرامج و${x.sch.length} للمنح في الأسبوعين القادمين`,
      description: `Weekly deadlines draft ${x.from}`,
      content: digestEmail(x),
      public: false,
      send_at: null,
    }),
  });
  const j = await r.json().catch(() => ({}));
  if (!r.ok) return Response.json({ error: "kit", status: r.status, detail: j.errors || null }, { status: 502 });
  return Response.json({ draft: j.broadcast?.id ?? true, confirmed: x.confirmed, scholarships: x.sch.length });
}
