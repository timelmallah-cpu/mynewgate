"use client";
// "My list": saved programmes ("p:<id>") and scholarships ("s:<id>") in this browser only.
import { limitOf } from "./plan";
const KEY = "mng-saved-v1";
const EVT = "mng-saved";

export function getSaved() {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
}
function setSaved(list) {
  try { localStorage.setItem(KEY, JSON.stringify(list)); } catch {}
  window.dispatchEvent(new Event(EVT));
}
// Returns false when the free plan's limit stops the item from being added (lists over the limit are kept).
export function toggleSaved(k) {
  const l = getSaved();
  if (l.includes(k)) { setSaved(l.filter((x) => x !== k)); return true; }
  if (l.length >= limitOf("saved")) return false;
  setSaved([...l, k]);
  return true;
}
export function removeSaved(k) { setSaved(getSaved().filter((x) => x !== k)); }
export function onSavedChange(fn) {
  const h = () => fn(getSaved());
  window.addEventListener(EVT, h);
  window.addEventListener("storage", h);
  return () => { window.removeEventListener(EVT, h); window.removeEventListener("storage", h); };
}

// Share link: the list travels in the URL hash (#l=...), which browsers never send to a server.
export function shareUrl(list) {
  return `${window.location.origin}${window.location.pathname}#l=${list.map(encodeURIComponent).join(",")}`;
}
export function readShared() {
  const m = window.location.hash.match(/^#l=(.*)$/);
  if (!m) return null;
  return m[1].split(",").map((x) => { try { return decodeURIComponent(x); } catch { return ""; } })
    .filter((k) => /^[ps]:[\w-]{1,60}$/.test(k));
}
export function addSaved(keys) {
  const l = getSaved();
  const room = Math.max(0, limitOf("saved") - l.length);
  const add = keys.filter((k) => !l.includes(k)).slice(0, room);
  setSaved([...l, ...add]);
  return add.length === keys.filter((k) => !l.includes(k)).length;
}

// Replaces the whole list (used when merging with the list saved in the account).
export function replaceSaved(list) { setSaved(list); }

// Account sync: true when this browser is signed in (a readable flag cookie set at sign-in).
export const signedIn = () => typeof document !== "undefined" && /(?:^|;\s*)dg_in=1/.test(document.cookie);
