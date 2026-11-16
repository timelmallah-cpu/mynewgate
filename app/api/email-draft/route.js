// University email assistant. The notes are sent to the Gemini API (paid tier) to draft the email and are not stored by us.
// The student's name never leaves the browser: the draft is signed with {{NAME}} and the page fills it in.
import { ask, geminiConfigured } from "@/lib/assistant/gemini";
import { takeQuestion, limitsConfigured } from "@/lib/assistant/limit";
import { EMAIL_SCHEMA, emailSystem, PURPOSES, EMAIL_LANGS } from "@/lib/assistant/emailDraft";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 45;

const res = (body, status = 200) => Response.json(body, { status, headers: { "Cache-Control": "no-store" } });
const str = (v, n) => (typeof v === "string" ? v.replace(/\r/g, "").trim().slice(0, n) : "");

export async function POST(req) {
  const origin = req.headers.get("origin");
  if (origin && new URL(origin).host !== req.headers.get("host")) return res({ error: "forbidden" }, 403);
  let b;
  try { b = await req.json(); } catch { return res({ error: "bad_request" }, 400); }
  const lang = b?.lang === "en" ? "en" : "ar";
  const purpose = PURPOSES.includes(b?.purpose) ? b.purpose : null;
  const emailLang = EMAIL_LANGS[b?.emailLang] ? b.emailLang : "en";
  const notes = str(b?.notes, 1500);
  const university = str(b?.university, 150);
  const programme = str(b?.programme, 200);
  const recipient = str(b?.recipient, 120);
  const ref = str(b?.ref, 60);
  if (!purpose) return res({ error: "bad_request" }, 400);
  if (notes.length < 15 || !university) return res({ error: "bad_length" }, 400);

  const mock = process.env.ASK_MOCK === "1";
  if (!mock && (!geminiConfigured() || !limitsConfigured())) return res({ error: "not_configured" }, 503);
  let left = null;
  if (!mock) {
    const ip = (req.headers.get("x-forwarded-for") || "").split(",")[0].trim() || req.headers.get("x-real-ip") || "unknown";
    try {
      const r = await takeQuestion(ip, "email");
      if (!r.ok) return res({ error: r.reason === "total" ? "busy" : "limit" }, 429);
      left = r.left;
    } catch { return res({ error: "failed" }, 502); }
  }

  let d;
  if (mock) {
    d = { ok: true, subject: `Question about ${programme || "the programme"}`, body: `Dear Admissions Office,\n\nI am writing to ask about ${programme || "[programme]"} at ${university}.\n\nKind regards,\n{{NAME}}`, placeholders: ["[programme]"], tips: ["نصيحة تجريبية"] };
  } else {
    const user = [
      `University: ${university}`,
      programme && `Programme: ${programme}`,
      recipient && `Send to: ${recipient}`,
      ref && `Applicant or reference number: ${ref}`,
      `Student's notes:\n"""\n${notes}\n"""`,
    ].filter(Boolean).join("\n");
    try {
      const out = await ask({ system: emailSystem(lang, emailLang, purpose), contents: [{ role: "user", parts: [{ text: user }] }], schema: EMAIL_SCHEMA, maxOutputTokens: 1500, signal: AbortSignal.timeout(40000) });
      d = out.data;
    } catch (e) {
      console.error("email draft failed", String(e).slice(0, 300));
      return res({ error: "failed" }, 502);
    }
  }
  if (d.ok === false) return res({ ok: false, reason: String(d.reason || ""), left });
  return res({
    ok: true,
    subject: String(d.subject || "").slice(0, 200),
    body: String(d.body || "").slice(0, 3000),
    placeholders: (Array.isArray(d.placeholders) ? d.placeholders : []).slice(0, 8).map(String),
    tips: (Array.isArray(d.tips) ? d.tips : []).slice(0, 4).map(String),
    left,
  });
}
