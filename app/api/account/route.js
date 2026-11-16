// The signed-in person's account: read, update (profile and saved list), delete.
import { res, sameOrigin, currentUser, clearSession } from "@/lib/account/http";
import { accountsConfigured, publicUser, updateUser, deleteUser, touch } from "@/lib/account/store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

async function who() {
  if (!accountsConfigured()) return { error: res({ error: "not_configured" }, 503) };
  const cu = await currentUser();
  if (!cu) { await clearSession(); return { error: res({ error: "signed_out" }, 401) }; }
  return cu;
}

export async function GET() {
  try {
    const cu = await who();
    if (cu.error) return cu.error;
    await touch(cu.uid, cu.user);
    return res({ ok: true, user: publicUser(cu.user) });
  } catch (e) {
    console.error("account get failed", String(e).slice(0, 300));
    return res({ error: "failed" }, 502);
  }
}

export async function PATCH(req) {
  if (!sameOrigin(req)) return res({ error: "forbidden" }, 403);
  let b;
  try { b = await req.json(); } catch { return res({ error: "bad_request" }, 400); }
  try {
    const cu = await who();
    if (cu.error) return cu.error;
    const u = await updateUser(cu.uid, { profile: b?.profile, list: b?.list, lang: b?.lang });
    return res({ ok: true, user: publicUser(u) });
  } catch (e) {
    console.error("account update failed", String(e).slice(0, 300));
    return res({ error: "failed" }, 502);
  }
}

export async function DELETE(req) {
  if (!sameOrigin(req)) return res({ error: "forbidden" }, 403);
  try {
    const cu = await who();
    if (cu.error) return cu.error;
    await deleteUser(cu.uid);
    await clearSession();
    return res({ ok: true });
  } catch (e) {
    console.error("account delete failed", String(e).slice(0, 300));
    return res({ error: "failed" }, 502);
  }
}
