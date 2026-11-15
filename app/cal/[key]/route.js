// /cal/p-12?lang=ar → an .ics file with the programme's upcoming deadlines (opens in Apple Calendar / Outlook).
import { calendarItem, icsText } from "../../../lib/calendar";

export const revalidate = 86400;

export async function GET(req, { params }) {
  const { key } = await params;
  const lang = new URL(req.url).searchParams.get("lang") === "en" ? "en" : "ar";
  const clean = key.replace(/\.ics$/, "");
  const item = calendarItem(clean, lang);
  if (!item || !item.dates.length) return new Response("Not found", { status: 404 });
  return new Response(icsText(item, lang, clean), {
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `inline; filename="mynewgate-${clean}.ics"`,
      "Cache-Control": "public, max-age=3600",
    },
  });
}
