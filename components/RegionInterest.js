"use client";
import { useEffect, useState } from "react";
import { BASE } from "../lib/site";

// Anonymous "I want this destination" button: adds one to a per-region counter, nothing about the visitor is stored.
export default function RegionInterest({ id, label, help, thanks }) {
  const key = `mng-want-${id}`;
  const [done, setDone] = useState(false);
  useEffect(() => { try { if (localStorage.getItem(key) === "1") setDone(true); } catch {} }, [key]);
  async function want() {
    setDone(true);
    try { localStorage.setItem(key, "1"); } catch {}
    try { await fetch(`${BASE}/api/interest`, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ region: id }) }); } catch {}
  }
  return (
    <div className="region-want card">
      {done ? <p role="status"><b>{thanks}</b></p> : <button type="button" className="btn gold" onClick={want}>{label}</button>}
      <p className="muted">{help}</p>
    </div>
  );
}
