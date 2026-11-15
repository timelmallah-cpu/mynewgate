// Daily euro exchange rates for Arab currencies, from ExchangeRate-API's open endpoint (attribution shown on the site).
// Cached by Vercel for a day, so the site calls the provider at most about once a day.
import { CURRENCIES } from "@/lib/currency";

export const revalidate = 86400;

export async function GET() {
  try {
    const r = await fetch("https://open.er-api.com/v6/latest/EUR", { next: { revalidate: 86400 } });
    const d = await r.json();
    if (d.result !== "success") throw new Error("bad response");
    const rates = Object.fromEntries(CURRENCIES.map((c) => [c.code, d.rates[c.code]]).filter(([, v]) => typeof v === "number"));
    return Response.json({ date: d.time_last_update_utc, rates });
  } catch {
    return Response.json({ error: "unavailable" }, { status: 503 });
  }
}
