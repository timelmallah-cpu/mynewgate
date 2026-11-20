// Daily run (vercel.json): one alert per device when a followed programme's deadline is 14, 3 or 1 days away.
// Vercel sends "Authorization: Bearer <CRON_SECRET>"; anything else is refused.
import webpush from "web-push";
import { pushConfigured, allSubs, removeSub } from "@/lib/push";
import programmes from "@/lib/programmes.json";
import deadlines from "@/lib/deadlines.json";
import { SITE_ORIGIN, BASE } from "@/lib/site";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 60;

const byId = new Map(programmes.map((p) => [String(p.id), p]));
const dl = new Map(deadlines.map((d) => [String(d.id), d.dates || []]));
const AHEAD = [14, 3, 1];
const DAY = 86400000;
const iso = (t) => new Date(t).toISOString().slice(0, 10);

function message(hits, lang) {
  const [h] = hits;
  const p = byId.get(h.id);
  const when = lang === "ar" ? (h.days === 1 ? "غداً" : `بعد ${h.days} ${h.days === 3 ? "أيام" : "يوماً"}`) : (h.days === 1 ? "tomorrow" : `in ${h.days} days`);
  const est = h.est ? (lang === "ar" ? " (موعد تقديري، تأكد من الجامعة)" : " (estimated date, check with the university)") : "";
  const more = hits.length > 1 ? (lang === "ar" ? ` و${hits.length - 1} موعد آخر قريب` : ` and ${hits.length - 1} more`) : "";
  return {
    title: lang === "ar" ? "موعد تقديم قريب" : "Deadline coming up",
    body: `${p.name} (${p.university}): ${lang === "ar" ? "آخر موعد" : "deadline"} ${when}${est}${more}`,
    url: `${BASE}${lang === "en" ? "/en" : ""}/programme/${h.id}`,
  };
}

export async function GET(req) {
  const secret = process.env.CRON_SECRET;
  if (!secret || req.headers.get("authorization") !== `Bearer ${secret}`) return new Response("forbidden", { status: 403 });
  if (!pushConfigured()) return Response.json({ error: "not_configured" }, { status: 503 });
  webpush.setVapidDetails(SITE_ORIGIN, process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY, process.env.VAPID_PRIVATE_KEY);
  const today = Date.now();
  const targets = new Map(AHEAD.map((d) => [iso(today + d * DAY), d]));
  let sent = 0, gone = 0, failed = 0;
  for (const s of await allSubs()) {
    const hits = [];
    for (const id of s.ids || []) for (const x of dl.get(String(id)) || []) if (targets.has(x.d) && byId.has(String(id))) hits.push({ id: String(id), days: targets.get(x.d), est: !!x.est });
    if (!hits.length) continue;
    hits.sort((a, b) => a.days - b.days);
    try {
      await webpush.sendNotification(s.sub, JSON.stringify(message(hits, s.lang)), { TTL: 86400 });
      sent++;
    } catch (e) {
      if (e?.statusCode === 404 || e?.statusCode === 410) { gone++; try { await removeSub(s.sub.endpoint); } catch {} } else failed++;
    }
  }
  return Response.json({ sent, gone, failed });
}
