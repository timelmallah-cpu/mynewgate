"use client";
// Keeps "My list" in this browser and in the account the same, for signed-in visitors only.
import { useEffect } from "react";
import { getSaved, replaceSaved, onSavedChange, signedIn } from "../lib/saved";
import { BASE } from "../lib/site";
import { setPlus } from "../lib/plan";

export default function AccountSync() {
  useEffect(() => {
    if (!signedIn()) { setPlus(false); return; }
    let stop = () => {};
    let timer = null;
    let last = "";
    const push = (list) => {
      const s = JSON.stringify(list);
      if (s === last) return;
      clearTimeout(timer);
      timer = setTimeout(() => {
        fetch(`${BASE}/api/account`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ list }) })
          .then((r) => { if (r.ok) last = s; }).catch(() => {});
      }, 1200);
    };
    fetch(`${BASE}/api/account`, { cache: "no-store" }).then((r) => (r.ok ? r.json() : null)).then((d) => {
      if (!d?.user) return;
      setPlus(Boolean(d.user.plus));
      const server = d.user.list || [];
      const local = getSaved();
      const merged = [...server, ...local.filter((k) => !server.includes(k))];
      last = JSON.stringify(server);
      if (merged.length !== local.length || merged.some((k, i) => k !== local[i])) replaceSaved(merged);
      push(merged);
      stop = onSavedChange((l) => push(l));
    }).catch(() => {});
    return () => { stop(); clearTimeout(timer); };
  }, []);
  return null;
}
