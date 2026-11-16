// Everything we keep about the signed-in person, as a JSON file.
import { res, currentUser } from "@/lib/account/http";
import { accountsConfigured, publicUser } from "@/lib/account/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  if (!accountsConfigured()) return res({ error: "not_configured" }, 503);
  const cu = await currentUser();
  if (!cu) return res({ error: "signed_out" }, 401);
  const body = JSON.stringify({ exported: new Date().toISOString(), account: publicUser(cu.user), lastSeen: cu.user.lastSeen }, null, 2);
  return new Response(body, { headers: { "Content-Type": "application/json; charset=utf-8", "Content-Disposition": 'attachment; filename="my-data.json"', "Cache-Control": "no-store" } });
}
