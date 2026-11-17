"use client";
// Keeps "My list" and the application tracker in this browser and in the account the same, for signed-in visitors only.
import { useEffect } from "react";
import { getSaved, replaceSaved, onSavedChange, signedIn } from "../lib/saved";
import { getApps, replaceApps, onAppsChange } from "../lib/apps";
import { mergeApps } from "../lib/appsCore";
import { BASE } from "../lib/site";
import { setPlus } from "../lib/plan";

// Sends one field of the account (list or apps) a moment after the last change, and only when it changed.
function pusher(field) {
  let timer = null;
  let last = "";
  return {
    seen: (v) => { last = JSON.stringify(v); },
    push: (v) => {
      const s = JSON.stringify(v);
      if (s === last) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fetch(`${BASE}/api/account`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ [field]: v }) })
          .then((r) => { if (r.ok) last = s; }).catch(() => {});
      }, 1200);
    },
    stop: () => clearTimeout(timer),
  };
}

export default function AccountSync() {
  useEffect(() => {
    if (!signedIn()) { setPlus(false); return; }
    const offs = [];
    const list = pusher("list");
    const apps = pusher("apps");
    fetch(`${BASE}/api/account`, { cache: "no-store" }).then((r) => (r.ok ? r.json() : null)).then((d) => {
      if (!d?.user) return;
      setPlus(Boolean(d.user.plus));

      const server = d.user.list || [];
      const local = getSaved();
      const merged = [...server, ...local.filter((k) => !server.includes(k))];
      list.seen(server);
      if (merged.length !== local.length || merged.some((k, i) => k !== local[i])) replaceSaved(merged);
      list.push(merged);
      offs.push(onSavedChange((l) => list.push(l)));

      const sApps = d.user.apps || [];
      const lApps = getApps();
      const mApps = mergeApps(sApps, lApps);
      apps.seen(sApps);
      if (JSON.stringify(mApps) !== JSON.stringify(lApps)) replaceApps(mApps);
      apps.push(getApps());
      offs.push(onAppsChange((a) => apps.push(a)));
    }).catch(() => {});
    return () => { offs.forEach((f) => f()); list.stop(); apps.stop(); };
  }, []);
  return null;
}
