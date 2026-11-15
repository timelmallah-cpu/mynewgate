// Calls the Gemini API (paid tier) through its REST endpoint. The model can be changed with GEMINI_MODEL.
export const MODEL = () => process.env.GEMINI_MODEL || "gemini-3.5-flash-lite";
export const geminiConfigured = () => Boolean(process.env.GEMINI_API_KEY);

const SCHEMA = {
  type: "OBJECT",
  properties: {
    answer: { type: "STRING" },
    sources: { type: "ARRAY", items: { type: "STRING" } },
    found: { type: "BOOLEAN" },
  },
  required: ["answer", "sources", "found"],
};

export async function ask({ system, contents, signal, schema = SCHEMA, maxOutputTokens = 1200 }) {
  const r = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${MODEL()}:generateContent`, {
    method: "POST",
    headers: { "Content-Type": "application/json", "x-goog-api-key": process.env.GEMINI_API_KEY },
    body: JSON.stringify({
      systemInstruction: { parts: [{ text: system }] },
      contents,
      generationConfig: { temperature: 0.2, maxOutputTokens, responseMimeType: "application/json", responseSchema: schema },
    }),
    signal,
    cache: "no-store",
  });
  if (!r.ok) throw new Error(`gemini ${r.status}: ${(await r.text()).slice(0, 300)}`);
  const d = await r.json();
  const text = d.candidates?.[0]?.content?.parts?.map((p) => p.text || "").join("") || "";
  const out = JSON.parse(text);
  if (schema !== SCHEMA) return { data: out, usage: d.usageMetadata };
  return { answer: String(out.answer || ""), sources: Array.isArray(out.sources) ? out.sources.map(String) : [], found: out.found !== false, usage: d.usageMetadata };
}
