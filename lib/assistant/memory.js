// The assistant's memory of a signed-in student: what their account already holds (eligibility answers, saved
// programmes, tracked applications), turned into a short text the model reads before answering, plus the next step.
// Nothing new is stored: this only reads the account, and only when the student is signed in and has not switched
// it off in the assistant ("use my account").
import programmes from "../programmes.json";
import deadlines from "../deadlines.json";
import { T } from "../i18n";
import { BUDGETS } from "../options";

const byId = new Map(programmes.map((p) => [String(p.id), p]));
const dlById = new Map(deadlines.map((d) => [String(d.id), d]));
const STATUS = { plan: "planning", prep: "preparing documents", sent: "sent", interview: "interview", offer: "offer received", rejected: "rejected" };
const DOCS = 8;

function nextDate(id, today) {
  const d = dlById.get(String(id));
  const n = d?.dates?.filter((x) => x.d >= today).sort((a, b) => a.d.localeCompare(b.d))[0];
  return n ? `${n.d}${n.est ? " (estimate)" : ""}` : "none published";
}

const progLine = (p, today) => `${p.name} at ${p.university} (${T.en.countries[p.country] || p.country}, ${p.level}, fee/yr ${p.feePerYear == null ? "not published" : `EUR ${p.feePerYear}`}, next deadline ${nextDate(p.id, today)}, page /programme/${p.id})`;

// Returns "" when there is nothing to tell.
export function studentContext(user) {
  if (!user) return "";
  const today = new Date().toISOString().slice(0, 10);
  const lines = [];
  const a = user.elig;
  if (a) {
    const budget = BUDGETS.find((b) => b.id === a.budget);
    lines.push(`Answers saved in the eligibility check (${a.at || "date unknown"}): level ${a.level}; field ${a.field === "any" ? "any" : T.en.fields[a.field] || a.field}; countries ${a.countries?.length ? a.countries.map((c) => T.en.countries[c] || c).join(", ") : "any"}; budget ${budget ? (budget.max === Infinity ? "no limit" : `up to EUR ${budget.max}/year`) : "not set"}; English ${a.test === "none" ? "no certificate yet" : `${a.test.toUpperCase()} ${a.score || "(score not entered)"}`}; grade ${a.grade ? `${a.grade} (scale ${a.scale}${a.max ? `, max ${a.max}` : ""})` : "not entered"}.`);
  } else if (user.profile && Object.keys(user.profile).length) {
    const p = user.profile;
    lines.push(`Profile: level ${p.level || "?"}; field ${p.field || "?"}; countries ${(p.countries || []).join(", ") || "?"}; intake ${p.intakeYear || "?"}.`);
  }
  const saved = (user.list || []).filter((k) => k.startsWith("p:")).map((k) => byId.get(k.slice(2))).filter(Boolean);
  if (saved.length) lines.push(`Saved programmes (${saved.length}): ${saved.slice(0, 8).map((p) => progLine(p, today)).join("; ")}.`);
  const sch = (user.list || []).filter((k) => k.startsWith("s:"));
  if (sch.length) lines.push(`Saved scholarships: ${sch.slice(0, 8).map((k) => k.slice(2)).join(", ")}.`);
  const apps = user.apps || [];
  if (apps.length) {
    lines.push(`Application tracker (${apps.length}): ${apps.slice(0, 10).map((x) => {
      const p = x.k.startsWith("p:") ? byId.get(x.k.slice(2)) : null;
      const name = p ? `${p.name} at ${p.university}` : x.c ? `${x.c.n}${x.c.u ? ` at ${x.c.u}` : ""}` : x.k;
      return `${name}: status ${STATUS[x.st] || x.st}, own deadline ${x.dl || "not set"}, documents ready ${x.done?.length || 0}/${DOCS}`;
    }).join("; ")}.`);
  }
  if (!lines.length) return "";

  // Next step, in the same order as "My study journey" (/journey).
  let next;
  const live = apps.filter((x) => x.st !== "rejected");
  if (live.some((x) => x.st === "offer")) next = "They have an offer: the next step is the student visa (/visa) and proof of funds.";
  else if (!a) next = "They have not done the eligibility check yet: suggest /eligibility.";
  else if (a.test === "none" || !a.score) next = "They have no English score yet: the next step is booking an English test (/language).";
  else if (!saved.length) next = "They have not saved any programme: suggest choosing programmes from /eligibility or /my-plan and saving them.";
  else if (!live.length) next = "They saved programmes but track no application: suggest adding them to the tracker (/applications).";
  else if (live.some((x) => (x.done?.length || 0) < DOCS)) next = "Some tracked applications still miss documents: suggest preparing and legalising them (/legalisation).";
  else next = "Their applications look complete: suggest checking deadlines and scholarships (/scholarships).";
  return `${lines.join("\n")}\nSuggested next step: ${next}`;
}
