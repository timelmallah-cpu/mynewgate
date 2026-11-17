// The visitor's plan in this browser (set from the account; used for the limits that apply in the page).
import { PLAN_LIMITS } from "./plans";
const KEY = "mng-plus";
export const hasPlus = () => { try { return localStorage.getItem(KEY) === "1"; } catch { return false; } };
export const setPlus = (on) => { try { on ? localStorage.setItem(KEY, "1") : localStorage.removeItem(KEY); window.dispatchEvent(new Event("mng-plan-change")); } catch {} };
// Until subscriptions open (NEXT_PUBLIC_PLUS_OPEN=1 in Vercel), the page limits stay as before.
const OPEN = process.env.NEXT_PUBLIC_PLUS_OPEN === "1";
export const limitOf = (what) => (OPEN ? PLAN_LIMITS[hasPlus() ? "plus" : "free"][what] : { compare: 3, saved: Infinity, apps: Infinity }[what]);
