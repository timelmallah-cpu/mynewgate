// Feedback on assistant answers. A thumbs up/down only adds to a daily counter.
// Only when the visitor chooses to send a report after a thumbs down do we keep that question and answer,
// for 90 days, with no data about the visitor, so we can fix weak answers.
import { sameOrigin } from "@/lib/account/http";
import { pipeline, limitsConfigured, visitorId } from "@/lib/assistant/limit";
import { MODEL } from "@/lib/assistant/gemini";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const res = (body, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
const clip = (x, n) => (typeof x === "string" ? x.slice(0, n) : "");

export async function POST(req) {
  if (!sameOrigin(req)) return res({ error: "forbidden" }, 403);
  let b;
  try { b = await req.json(); } catch { return res({ error: "bad_request" }, 400); }
  const vote = b?.vote === "up" ? "up" : b?.vote === "down" ? "down" : null;
  if (!vote) return res({ error: "bad_request" }, 400);
  if (process.env.ASK_MOCK === "1") return res({ ok: true });
  if (!limitsConfigured()) return res({ error: "not_configured" }, 503);

  const day = new Date().toISOString().slice(0, 10);
  const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || "unknown";
  const ku = `fb:u:${day}:${visitorId(ip, day)}`;
  try {
    const [n] = await pipeline([["INCR", ku], ["EXPIRE", ku, 90000]]);
    if (n > 40) return res({ error: "limit" }, 429);
    const cmds = [["HINCRBY", `fb:c:${day}`, vote, 1], ["EXPIRE", `fb:c:${day}`, 400 * 86400]];
    if (vote === "down" && b.report === true) {
      const report = {
        date: day, lang: b.lang === "en" ? "en" : "ar", model: MODEL(),
        question: clip(b.question, 600), answer: clip(b.answer, 3000),
        sources: Array.isArray(b.sources) ? b.sources.slice(0, 5).map((x) => clip(x, 200)) : [],
      };
      if (report.question) {
        const key = `fb:r:${day}:${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`;
        cmds.push(["SET", key, JSON.stringify(report), "EX", 90 * 86400]);
      }
    }
    await pipeline(cmds);
    return res({ ok: true });
  } catch {
    return res({ error: "failed" }, 502);
  }
}
