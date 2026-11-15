// The assistant endpoint. Answers only from the site's own data (lib/assistant), with a daily limit per visitor.
// Questions are sent to the Gemini API (paid tier) to write the answer and are not stored by us.
import { retrieve, overviewText } from "@/lib/assistant/retrieve";
import { DOCS } from "@/lib/assistant/knowledge";
import { SYSTEM, contextBlock } from "@/lib/assistant/prompt";
import { ask, geminiConfigured } from "@/lib/assistant/gemini";
import { takeQuestion, limitsConfigured, PER_USER } from "@/lib/assistant/limit";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 30;

const TITLES = new Map();
for (const d of DOCS) if (!TITLES.has(d.url)) TITLES.set(d.url, d.title);

const bad = (error, status) => Response.json({ error }, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(req) {
  const origin = req.headers.get("origin");
  if (origin && new URL(origin).host !== req.headers.get("host")) return bad("forbidden", 403);

  let body;
  try { body = await req.json(); } catch { return bad("bad_request", 400); }
  const lang = body?.lang === "en" ? "en" : "ar";
  const message = typeof body?.message === "string" ? body.message.trim() : "";
  if (message.length < 2 || message.length > 600) return bad("bad_length", 400);
  const history = (Array.isArray(body?.history) ? body.history : [])
    .filter((h) => h && (h.role === "user" || h.role === "model") && typeof h.text === "string")
    .slice(-6).map((h) => ({ role: h.role, text: h.text.slice(0, 1500) }));

  const mock = process.env.ASK_MOCK === "1";
  if (!mock && !geminiConfigured()) return bad("not_configured", 503);
  if (!mock && !limitsConfigured()) return bad("not_configured", 503);

  let left = PER_USER();
  if (!mock) {
    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";
    try {
      const r = await takeQuestion(ip);
      if (!r.ok) return bad(r.reason === "total" ? "busy" : "limit", 429);
      left = r.left;
    } catch { return bad("failed", 502); }
  }

  const { docs } = retrieve(message, history);
  const allowed = new Set([...docs.map((d) => d.url), ...DOCS.filter((d) => d.overview).map((d) => d.url)]);

  let out;
  if (mock) {
    out = { answer: lang === "ar" ? `إجابة تجريبية عن: ${message}` : `Test answer about: ${message}`, sources: docs.slice(0, 3).map((d) => d.url), found: docs.length > 0 };
  } else {
    // Gemini needs turns that alternate and start with the user.
    const turns = [];
    for (const h of history) {
      if (!turns.length && h.role !== "user") continue;
      if (turns.length && turns[turns.length - 1].role === h.role) continue;
      turns.push({ role: h.role, parts: [{ text: h.text }] });
    }
    if (turns.length && turns[turns.length - 1].role === "user") turns.pop();
    turns.push({ role: "user", parts: [{ text: `${contextBlock(docs, overviewText(lang), lang)}\n\nQUESTION (${lang === "ar" ? "answer in Egyptian Arabic unless it is written in English" : "answer in English"}):\n${message}` }] });
    try {
      out = await ask({ system: SYSTEM, contents: turns, signal: AbortSignal.timeout(25000) });
    } catch (e) {
      console.error("ask failed", String(e).slice(0, 300));
      return bad("failed", 502);
    }
  }

  const sources = [...new Set(out.sources.map((u) => u.trim()))].filter((u) => allowed.has(u)).slice(0, 5)
    .map((url) => ({ url, title: (TITLES.get(url) || { ar: url, en: url })[lang] }));
  return Response.json({ answer: out.answer, sources, found: out.found, left }, { headers: { "Cache-Control": "no-store" } });
}
