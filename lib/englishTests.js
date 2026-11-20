// Which English tests each programme names, read from the programme's own English-requirement text (the English
// version of the catalogue). We only count a test when the source names it; a programme that names none is not
// "no test needed", it means the source does not list tests (ask the university).
import programmes from "./programmes.json";
import { COUNTRY_IDS } from "./options";

import { TESTS, TEST_NAMES, ET_TEXT } from "./englishTestsText";
export { TESTS, TEST_NAMES, ET_TEXT };
const RE = { ielts: /IELTS/i, toefl: /TOEFL/i, pte: /\bPTE\b/, duo: /Duolingo/i, cam: /Cambridge|C1 Advanced|C2 Proficiency|\bCAE\b|\bCPE\b/ };
// First plausible score after the test name (within a short window).
const MIN = {
  ielts: [/IELTS[^0-9]{0,40}?(\d(?:\.\d)?)(?!\d)/i, 4, 9],
  toefl: [/TOEFL[^0-9]{0,30}?(\d{2,3})(?!\d)/i, 30, 120],
  pte: [/\bPTE[^0-9]{0,30}?(\d{2})(?!\d)/, 30, 90],
  duo: [/Duolingo[^0-9]{0,40}?(\d{2,3})(?!\d)/i, 60, 160],
};

function minOf(t, k) {
  const m = MIN[k];
  if (!m) return null;
  const x = t.match(m[0]);
  if (!x) return null;
  const v = parseFloat(x[1]);
  return v >= m[1] && v <= m[2] ? v : null;
}

// Slim rows for the page (built at build time, server side).
export function testRows() {
  return programmes
    .filter((p) => p.level !== "doctorate")
    .map((p) => {
      const t = p.en?.english || "";
      const tests = {};
      for (const k of TESTS) if (RE[k].test(t)) tests[k] = minOf(t, k);
      return { i: p.id, l: p.level, c: p.country, n: p.name, u: p.university, t: tests, e: t.length > 160 ? t.slice(0, 157) + "…" : t };
    });
}

export function testStats() {
  const rows = testRows();
  const named = rows.filter((r) => Object.keys(r.t).length);
  const total = { all: rows.length, named: named.length };
  for (const k of TESTS) total[k] = rows.filter((r) => k in r.t).length;
  const byCountry = COUNTRY_IDS.map((c) => {
    const list = rows.filter((r) => r.c === c);
    const o = { c, n: list.length };
    for (const k of TESTS) o[k] = list.filter((r) => k in r.t).length;
    return o;
  }).filter((o) => o.n);
  return { total, byCountry };
}

