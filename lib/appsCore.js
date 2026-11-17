// Application tracker: the data shape, shared by the browser (lib/apps.js) and the account store.
// One entry per application:
//   k     "p:<programme id>" for a programme in our catalogue, or "c:<random>" for one the student adds by hand
//   st    status, one of STATUSES
//   dl    the application deadline the student is working to (YYYY-MM-DD, or "")
//   sent  the date the application was sent (YYYY-MM-DD, or "")
//   done  ids from DOC_IDS that are ready
//   extra documents the student added: [{ t: text, d: ready }]
//   note  free text
//   c     for "c:" entries only: { n: programme name, u: university, co: country }
//   u     last change (ms since 1970), used to merge the browser and the account copies
export const STATUSES = ["plan", "prep", "sent", "interview", "offer", "rejected"];
export const DONE_STATUSES = ["offer", "rejected"];
export const DOC_IDS = ["degree", "transcript", "english", "cv", "letter", "refs", "passport", "fee"];

const DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
const KEY_RE = /^(p:[\w-]{1,60}|c:[a-z0-9]{6,12})$/;
const str = (v, n) => (typeof v === "string" ? v.trim().slice(0, n) : "");
const date = (v) => (typeof v === "string" && DATE_RE.test(v) ? v : "");

export const MAX_APPS = 100;

export function cleanApp(a) {
  if (!a || typeof a !== "object" || typeof a.k !== "string" || !KEY_RE.test(a.k)) return null;
  const o = {
    k: a.k,
    st: STATUSES.includes(a.st) ? a.st : "plan",
    dl: date(a.dl),
    sent: date(a.sent),
    done: Array.isArray(a.done) ? [...new Set(a.done.filter((d) => DOC_IDS.includes(d)))] : [],
    extra: Array.isArray(a.extra) ? a.extra.map((x) => ({ t: str(x?.t, 120), d: !!x?.d })).filter((x) => x.t).slice(0, 20) : [],
    note: str(a.note, 1000),
    u: Number.isFinite(a.u) ? Math.round(a.u) : 0,
  };
  if (a.k.startsWith("c:")) {
    const n = str(a.c?.n, 120);
    if (!n) return null;
    o.c = { n, u: str(a.c?.u, 120), co: str(a.c?.co, 60) };
  }
  return o;
}

export function cleanApps(list) {
  if (!Array.isArray(list)) return null;
  const seen = new Set();
  const out = [];
  for (const a of list) {
    const c = cleanApp(a);
    if (!c || seen.has(c.k)) continue;
    seen.add(c.k);
    out.push(c);
    if (out.length >= MAX_APPS) break;
  }
  return out;
}

// Browser and account copies: for each application the most recently changed copy wins.
export function mergeApps(a, b) {
  const m = new Map();
  for (const x of [...(a || []), ...(b || [])]) {
    const cur = m.get(x.k);
    if (!cur || (x.u || 0) > (cur.u || 0)) m.set(x.k, x);
  }
  return [...m.values()];
}
