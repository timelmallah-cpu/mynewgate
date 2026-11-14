"use client";
// "My list": saved programmes ("p:<id>") and scholarships ("s:<id>") in this browser only.
const KEY = "mng-saved-v1";
const EVT = "mng-saved";

export function getSaved() {
  try { return JSON.parse(localStorage.getItem(KEY) || "[]"); } catch { return []; }
}
function setSaved(list) {
  try { localStorage.setItem(KEY, JSON.stringify(list)); } catch {}
  window.dispatchEvent(new Event(EVT));
}
export function toggleSaved(k) {
  const l = getSaved();
  setSaved(l.includes(k) ? l.filter((x) => x !== k) : [...l, k]);
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
  setSaved([...l, ...keys.filter((k) => !l.includes(k))]);
}
