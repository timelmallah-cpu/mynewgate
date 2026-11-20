// /feed/<key>.ics?lang=ar → a calendar people subscribe to (webcal://); refreshed daily from the site's deadlines.
import { parseKey, feedIcs } from "../../../lib/calendarFeed";

export const revalidate = 21600;

export async function GET(req, { params }) {
  const { key } = await params;
  const q = parseKey(key);
  if (!q) return new Response("Not found", { status: 404 });
  const lang = new URL(req.url).searchParams.get("lang") === "en" ? "en" : "ar";
  return new Response(feedIcs(q, lang), {
    headers: { "Content-Type": "text/calendar; charset=utf-8", "Cache-Control": "public, max-age=21600" },
  });
}
