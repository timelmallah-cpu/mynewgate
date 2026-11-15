// Motivation-letter review with Gemini. The letter is sent to the Gemini API (paid tier) for the review and is not stored by us.
import { ask, geminiConfigured } from "@/lib/assistant/gemini";
import { takeQuestion, limitsConfigured } from "@/lib/assistant/limit";
import { CRITERIA, REVIEW_SCHEMA, reviewSystem } from "@/lib/assistant/review";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 45;

const res = (body, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
const words = (t) => (t.trim().match(/\S+/g) || []).length;

export async function POST(req) {
  const origin = req.headers.get("origin");
  if (origin && new URL(origin).host !== req.headers.get("host")) return res({ error: "forbidden" }, 403);
  let b;
  try { b = await req.json(); } catch { return res({ error: "bad_request" }, 400); }
  const lang = b?.lang === "en" ? "en" : "ar";
  const letter = typeof b?.letter === "string" ? b.letter.replace(/\r/g, "").trim() : "";
  const programme = typeof b?.programme === "string" ? b.programme.trim().slice(0, 200) : "";
  const limit = Number.isFinite(Number(b?.wordLimit)) && Number(b.wordLimit) >= 50 && Number(b.wordLimit) <= 5000 ? Math.round(Number(b.wordLimit)) : null;
  if (letter.length < 400 || letter.length > 9000) return res({ error: "bad_length" }, 400);

  const count = words(letter);
  const mock = process.env.ASK_MOCK === "1";
  if (!mock && (!geminiConfigured() || !limitsConfigured())) return res({ error: "not_configured" }, 503);

  let left = null;
  if (!mock) {
    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";
    try {
      const r = await takeQuestion(ip, "review");
      if (!r.ok) return res({ error: r.reason === "total" ? "busy" : "limit" }, 429);
      left = r.left;
    } catch { return res({ error: "failed" }, 502); }
  }

  let data;
  if (mock) {
    data = { is_letter: true, summary: "مراجعة تجريبية.", checks: CRITERIA.map((c, i) => ({ id: c.id, status: ["good", "improve", "missing"][i % 3], note: "ملاحظة تجريبية.", quote: i === 1 ? letter.slice(0, 40) : "" })), language_issues: [{ quote: "I am interesting in", fix: "I am interested in" }], top_actions: ["أول حاجة", "تاني حاجة", "تالت حاجة"] };
  } else {
    const user = `${programme ? `The student says they are applying to: ${programme}\n` : ""}LETTER (${count} words):\n"""\n${letter}\n"""`;
    try {
      const out = await ask({ system: reviewSystem(lang), contents: [{ role: "user", parts: [{ text: user }] }], schema: REVIEW_SCHEMA, maxOutputTokens: 2500, signal: AbortSignal.timeout(40000) });
      data = out.data;
    } catch (e) {
      console.error("review failed", String(e).slice(0, 300));
      return res({ error: "failed" }, 502);
    }
  }

  // Keep only known criteria, in our order, and cap list sizes.
  const byId = new Map((Array.isArray(data.checks) ? data.checks : []).map((c) => [c.id, c]));
  const checks = data.is_letter === false ? [] : CRITERIA.map((c) => {
    const x = byId.get(c.id) || {};
    return { id: c.id, label: c[lang], status: ["good", "improve", "missing"].includes(x.status) ? x.status : "improve", note: String(x.note || ""), quote: String(x.quote || "").slice(0, 200) };
  });
  return res({
    isLetter: data.is_letter !== false,
    summary: String(data.summary || ""),
    checks,
    languageIssues: (Array.isArray(data.language_issues) ? data.language_issues : []).slice(0, 5).map((x) => ({ quote: String(x.quote || "").slice(0, 200), fix: String(x.fix || "").slice(0, 200) })),
    topActions: (Array.isArray(data.top_actions) ? data.top_actions : []).slice(0, 3).map(String),
    words: count,
    wordLimit: limit,
    left,
  });
}
