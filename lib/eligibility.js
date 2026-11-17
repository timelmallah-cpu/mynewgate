// Eligibility check: compares a student's answers with each programme's published numeric requirements.
// Programmes come from public/data/compare-<lang>.json (see scripts/build-data.mjs):
// f fee/year (null = unknown), il/tf English minimums, cf CEFR level, g {s, v} minimum grade, gw grade asked in words only.
import { BUDGETS } from "./options";
import { EL_TEXT } from "./eligibilityText";

export const PROFILE_KEY = "mng-elig-v1";
export const SCALES = { pct: { max: 100, min: 50 }, g4: { max: 4, min: 2 }, de: { max: 1, min: 4 }, other: { max: "", min: "" } };
export const SCORE_RANGE = { ielts: [4, 9], toefl: [30, 120] };

const num = (x) => (x === "" || x === undefined || x === null ? NaN : parseFloat(String(x).replace(",", ".")));

// Modified Bavarian formula, as on the /gpa page: 1 + 3 × (Nmax − Nd) / (Nmax − Nmin).
export function toGerman(a) {
  const g = num(a.grade);
  if (Number.isNaN(g)) return null;
  if (a.scale === "de") return g >= 1 && g <= 4 ? g : { err: true };
  const max = num(a.max), min = num(a.min);
  if (Number.isNaN(max) || Number.isNaN(min) || max === min) return { err: true };
  if (g < Math.min(max, min) || g > Math.max(max, min)) return { err: true };
  return Math.round((1 + (3 * (max - g)) / (max - min)) * 10) / 10;
}

export function scoreValid(a) {
  if (a.test === "none" || !a.test) return true;
  const v = num(a.score);
  if (Number.isNaN(v)) return true; // empty: treated as "not entered"
  const [lo, hi] = SCORE_RANGE[a.test];
  return v >= lo && v <= hi;
}

const reqText = (g, s) => (g.s === "de" ? s.reqDe(g.v) : g.s === "pct" ? s.reqPct(g.v) : g.s === "g4" ? s.reqG4(g.v) : s.reqI30(g.v));

// Returns the list of checks for one programme: { k, st: "ok" | "miss" | "check" | "info", m, gap }.
export function checkProgramme(p, a, lang, de) {
  const s = EL_TEXT[lang];
  const out = [];
  // Fees
  const budget = (BUDGETS.find((b) => b.id === a.budget) ?? BUDGETS.at(-1)).max;
  if (p.f === null || p.f === undefined) out.push({ k: "fee", st: budget === Infinity ? "info" : "check", m: s.feeCheck });
  else if (p.f <= budget) out.push({ k: "fee", st: "ok", m: s.feeOk(p.f) });
  else out.push({ k: "fee", st: "miss", m: s.feeMiss(p.f, p.f - budget), gap: p.f - budget });

  // English
  const reqs = [p.il ? `IELTS ${p.il}` : null, p.tf ? `TOEFL ${p.tf}` : null].filter(Boolean).join(lang === "ar" ? " أو " : " or ");
  const score = num(a.score);
  if (a.test === "none") {
    if (reqs || p.cf) out.push({ k: "en", st: "miss", m: s.enNeed(reqs || p.cf) });
    else out.push({ k: "en", st: "check", m: s.enNP });
  } else if (Number.isNaN(score)) {
    out.push({ k: "en", st: reqs || p.cf ? "check" : "info", m: s.enSkip });
  } else {
    const key = a.test === "ielts" ? "il" : "tf";
    const name = a.test === "ielts" ? "IELTS" : "TOEFL";
    if (p[key]) {
      if (score >= p[key]) out.push({ k: "en", st: "ok", m: s.enOk(`${name} ${p[key]}`) });
      else {
        const g = p[key] - score;
        out.push({ k: "en", st: "miss", m: s.enMiss(`${name} ${p[key]}`, a.test === "ielts" ? g.toFixed(1) : String(Math.round(g))), gap: g });
      }
    } else if (p.il || p.tf || p.cf) out.push({ k: "en", st: "check", m: s.enOther(p.e) });
    else out.push({ k: "en", st: "check", m: s.enNP });
  }

  // Grade
  const g = p.g;
  const raw = num(a.grade);
  if (Number.isNaN(raw) || de === null || de?.err) {
    out.push({ k: "gr", st: g ? "check" : "info", m: g ? `${s.grSkip} (${reqText(g, s)})` : s.grSkip });
  } else if (g) {
    const r = reqText(g, s);
    let pass = null;
    if (g.s === "de") pass = de <= g.v;
    else if (g.s === "pct" && a.scale === "pct") pass = raw >= g.v;
    else if (g.s === "g4" && a.scale === "g4") pass = raw >= g.v;
    else if (g.s === "i30" && a.scale === "other" && num(a.max) === 30) pass = raw >= g.v;
    if (pass === null) out.push({ k: "gr", st: "check", m: s.grScale(r) });
    else out.push({ k: "gr", st: pass ? "ok" : "miss", m: pass ? s.grOk(r) : s.grMiss(r) });
  } else if (p.gw) out.push({ k: "gr", st: "check", m: s.grWords });
  else out.push({ k: "gr", st: "info", m: s.grNone });
  return out;
}

// Splits the programmes into fit / check / miss for the student's answers.
export function evaluate(data, a, lang) {
  const de = toGerman(a);
  const list = data
    .filter((p) => p.l === a.level)
    .filter((p) => !a.field || a.field === "any" || p.fd === a.field)
    .filter((p) => !a.country || a.country === "any" || p.c === a.country)
    .map((p) => {
      const checks = checkProgramme(p, a, lang, de);
      const miss = checks.filter((c) => c.st === "miss").length;
      const check = checks.filter((c) => c.st === "check").length;
      return { p, checks, miss, check };
    });
  const byFee = (x, y) => (x.p.f ?? Infinity) - (y.p.f ?? Infinity);
  return {
    de,
    fit: list.filter((x) => !x.miss && !x.check).sort(byFee),
    check: list.filter((x) => !x.miss && x.check).sort((x, y) => x.check - y.check || byFee(x, y)),
    miss: list.filter((x) => x.miss).sort((x, y) => x.miss - y.miss || byFee(x, y)),
  };
}

// The answers are kept in this browser (and read later by the student dashboard).
export function loadProfile() {
  try { return JSON.parse(localStorage.getItem(PROFILE_KEY) || "null"); } catch { return null; }
}
export function saveProfile(a) {
  try { localStorage.setItem(PROFILE_KEY, JSON.stringify({ ...a, at: new Date().toISOString().slice(0, 10) })); } catch {}
  try { window.dispatchEvent(new Event("mng-elig")); } catch {}
}
