"use client";
// Application tracker in this browser (and in the account for signed-in visitors, see AccountSync).
import { cleanApps } from "./appsCore";
import { limitOf } from "./plan";
const KEY = "mng-apps-v1";
const EVT = "mng-apps";

export function getApps() {
  try { return cleanApps(JSON.parse(localStorage.getItem(KEY) || "[]")) || []; } catch { return []; }
}
function setApps(list) {
  try { localStorage.setItem(KEY, JSON.stringify(list)); } catch {}
  window.dispatchEvent(new Event(EVT));
}
export const replaceApps = (list) => setApps(cleanApps(list) || []);
export const isTracked = (k) => getApps().some((a) => a.k === k);

// Returns false when the free plan's limit stops a new application (applications over the limit are kept).
export function addApp(k, seed = {}) {
  const l = getApps();
  if (l.some((a) => a.k === k)) return true;
  if (l.length >= limitOf("apps")) return false;
  setApps(cleanApps([...l, { st: "plan", dl: "", sent: "", done: [], extra: [], note: "", ...seed, k, u: Date.now() }]));
  return true;
}
export function updateApp(k, patch) {
  setApps(cleanApps(getApps().map((a) => (a.k === k ? { ...a, ...patch, u: Date.now() } : a))));
}
export function removeApp(k) { setApps(getApps().filter((a) => a.k !== k)); }
export const newCustomKey = () => "c:" + Math.random().toString(36).slice(2, 10).padEnd(8, "0");

export function onAppsChange(fn) {
  const h = () => fn(getApps());
  window.addEventListener(EVT, h);
  window.addEventListener("storage", h);
  return () => { window.removeEventListener(EVT, h); window.removeEventListener("storage", h); };
}
