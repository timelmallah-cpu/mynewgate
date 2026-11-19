"use client";
// "My study journey" (/journey): the student's dashboard, built on the eligibility answers kept in the account.
// Free: answers, fitting programmes, My list, the tracker, the next deadline and one next step.
// Study Plus: every upcoming deadline with a calendar file (reminders), all next steps, and a personal plan.
import { useEffect, useMemo, useState } from "react";
import Link from "@/components/Link";
import deadlines from "../lib/deadlines.json";
import { T } from "../lib/i18n";
import { BUDGETS } from "../lib/options";
import { JOURNEY_TEXT } from "../lib/journeyText";
import { evaluate, toGerman, loadProfile, deleteProfile } from "../lib/eligibility";
import { getSaved, onSavedChange, signedIn } from "../lib/saved";
import { getApps, onAppsChange } from "../lib/apps";
import { DOC_IDS } from "../lib/appsCore";
import { hasPlus } from "../lib/plan";
import { useOrigin } from "./Origin";
import { BASE } from "../lib/site";
import { download } from "./MyList";
import Flag from "../lib/Flag";
import DocList from "./DocList";

const today = () => new Date().toISOString().slice(0, 10);
const daysLeft = (iso) => Math.round((new Date(iso + "T12:00:00Z") - new Date(today() + "T12:00:00Z")) / 864e5);
const minus = (iso, n) => { const d = new Date(iso + "T12:00:00Z"); d.setUTCDate(d.getUTCDate() - n); return d.toISOString().slice(0, 10); };
const byId = (id) => deadlines.find((x) => String(x.id) === String(id));
const FREE_FIT = 5, PLUS_FIT = 15;

function Box({ title, children, plusTag, s }) {
  return (
    <section className="acc-box jr-box">
      <h2>{title}{plusTag && <span className="jr-plus"> {s.plus}</span>}</h2>
      {children}
    </section>
  );
}

export default function Journey({ lang }) {
  const t = T[lang];
  const s = JOURNEY_TEXT[lang];
  const [state, setState] = useState("loading"); // loading | out | failed | ready
  const [a, setA] = useState(null);
  const [data, setData] = useState(null);
  const [saved, setSaved] = useState([]);
  const [apps, setApps] = useState([]);
  const [plus, setPlusState] = useState(false);
  const [confirm, setConfirm] = useState(false);
  const [origin] = useOrigin();

  useEffect(() => {
    setSaved(getSaved()); setApps(getApps()); setPlusState(hasPlus());
    const offs = [onSavedChange(setSaved), onAppsChange(setApps)];
    const onPlan = () => setPlusState(hasPlus());
    window.addEventListener("mng-plan-change", onPlan);
    if (!signedIn()) { setState("out"); return () => { offs.forEach((f) => f()); window.removeEventListener("mng-plan-change", onPlan); }; }
    fetch(`${BASE}/data/compare-${lang}.json`).then((r) => r.json()).then(setData).catch(() => setData([]));
    loadProfile().then((e) => { setA(e); setState("ready"); }).catch(() => setState("failed"));
    return () => { offs.forEach((f) => f()); window.removeEventListener("mng-plan-change", onPlan); };
  }, [lang]);

  const res = useMemo(() => (a && data && a.field ? evaluate(data, a, lang) : null), [a, data, lang]);

  // Upcoming official dates: tracked first, then saved, then the best-fitting programmes.
  const dl = useMemo(() => {
    const ids = [...apps.filter((x) => x.k.startsWith("p:")).map((x) => x.k.slice(2)),
      ...saved.filter((k) => k.startsWith("p:")).map((k) => k.slice(2)),
      ...(res ? res.fit.slice(0, plus ? PLUS_FIT : FREE_FIT).map((x) => String(x.p.i)) : [])];
    const seen = new Set();
    const out = [];
    for (const id of ids) {
      if (seen.has(id)) continue;
      seen.add(id);
      const p = byId(id);
      if (!p) continue;
      const next = p.dates.find((d) => d.d >= today());
      out.push({ p, next });
    }
    // Deadlines the student typed in the tracker for their own programmes count too.
    for (const x of apps) if (x.k.startsWith("c:") && x.dl && x.dl >= today()) out.push({ c: x.c, next: { d: x.dl, own: true } });
    const withDate = out.filter((x) => x.next).sort((x, y) => x.next.d.localeCompare(y.next.d));
    return { withDate, without: out.filter((x) => !x.next) };
  }, [apps, saved, res, plus]);

  // Programmes the student tracks or saved, for the tailored document list.
  const docItems = useMemo(() => {
    if (!data) return [];
    const ids = [...new Set([...apps.filter((x) => x.k.startsWith("p:")).map((x) => x.k.slice(2)), ...saved.filter((k) => k.startsWith("p:")).map((k) => k.slice(2))])];
    return ids.map((id) => data.find((p) => String(p.i) === id)).filter(Boolean);
  }, [apps, saved, data]);

  if (state === "loading") return <><h1>{s.title}</h1><p className="meta">{s.loading}</p></>;
  if (state === "failed") return <><h1>{s.title}</h1><p className="ask-err" role="alert">{s.failed}</p></>;
  if (state === "out") return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <section className="acc-box">
        <h2>{s.outTitle}</h2>
        <p>{s.outText}</p>
        <Link className="btn gold" href={`${t.base}/login?next=${encodeURIComponent(`${t.base}/journey`)}`}>{s.signIn}</Link>
      </section>
    </>
  );

  if (!a?.field) return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <section className="acc-box">
        <h2>{s.noAnswers}</h2>
        <p>{s.noAnswersText}</p>
        <Link className="btn gold" href={`${t.base}/eligibility`}>{s.start}</Link>
      </section>
      <p className="meta">{s.privacy}</p>
    </>
  );

  // Answers summary
  const de = toGerman(a);
  const gradeTxt = a.grade ? `${a.grade}${a.scale !== "de" ? ` / ${a.max}` : ""}${de && !de.err && a.scale !== "de" ? ` (${lang === "ar" ? "ألماني" : "German"} ${de})` : ""}` : s.noGrade;
  const enTxt = a.test === "none" ? s.noTest : a.score ? `${a.test === "ielts" ? "IELTS" : "TOEFL"} ${a.score}` : `${a.test === "ielts" ? "IELTS" : "TOEFL"} (${s.noGrade})`;

  // Progress
  const pApps = apps;
  const steps = [
    ["answers", true],
    ["saved", saved.length > 0],
    ["tracked", pApps.length > 0],
    ["sent", pApps.some((x) => ["sent", "interview", "offer", "rejected"].includes(x.st))],
    ["offer", pApps.some((x) => x.st === "offer")],
  ];
  const doneN = steps.filter((x) => x[1]).length;

  // Next steps, most urgent first.
  const missingDocs = pApps.filter((x) => ["plan", "prep"].includes(x.st)).reduce((n, x) => n + (DOC_IDS.length - x.done.length), 0);
  const studyCountry = (() => {
    const k = pApps.find((x) => x.k.startsWith("p:"))?.k.slice(2) || saved.find((k) => k.startsWith("p:"))?.slice(2);
    return byId(k)?.country || a.countries?.[0] || "";
  })();
  const next = [];
  if (a.test === "none" || !a.score) next.push(["english", a.test === "none" ? "/language" : "/eligibility"]);
  if (!a.grade) next.push(["grade", "/eligibility"]);
  if (!saved.some((k) => k.startsWith("p:"))) next.push(["save", "/eligibility"]);
  if (!pApps.length) next.push(["track", "/applications"]);
  if (missingDocs > 0) next.push(["docs", "/applications"]);
  next.push(a.level === "bachelor" ? ["cert", "/school-certificate"] : ["recog", "/guide#recognition"]);
  next.push(["legal", "/legalisation"]);
  next.push(["cost", "/quiz"]);
  next.push(["sch", "/scholarships"]);
  if (pApps.some((x) => x.st === "offer") || pApps.length) next.push(["visa", `/visa${studyCountry ? `?to=${studyCountry}${origin ? `&from=${origin}` : ""}` : ""}`]);
  const nextShown = plus ? next : next.slice(0, 1);
  const nextText = (id) => (id === "docs" ? s.next.docs(missingDocs) : s.next[id]);

  // Personal plan from the nearest deadline (a tracked application's own date first).
  const target = (() => {
    const own = pApps.filter((x) => x.dl && x.dl >= today()).sort((x, y) => x.dl.localeCompare(y.dl))[0];
    if (own) return { d: own.dl, name: own.k.startsWith("p:") ? byId(own.k.slice(2))?.name || "" : own.c?.n || "" };
    const f = dl.withDate.find((x) => x.p);
    return f ? { d: f.next.d, name: f.p.name } : null;
  })();

  const fitList = res ? res.fit.slice(0, plus ? PLUS_FIT : FREE_FIT) : [];
  const dlShown = plus ? dl.withDate : dl.withDate.slice(0, 1);
  const icsItems = dl.withDate.filter((x) => x.p).map((x) => ({
    k: `p-${x.p.id}`, title: x.p.name, sub: `${x.p.university} · ${t.countries[x.p.country]}`, href: `${t.base}/programme/${x.p.id}`,
    text: x.p[lang], dates: x.p.dates.filter((d) => d.d >= today()),
  }));

  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>

      <Box title={s.progress} s={s}>
        <div className="jr-bar" role="progressbar" aria-valuemin={0} aria-valuemax={steps.length} aria-valuenow={doneN}><span style={{ width: `${(doneN / steps.length) * 100}%` }} /></div>
        <ol className="jr-steps">
          {steps.map(([id, ok]) => <li key={id} className={ok ? "ok" : ""}><span aria-hidden="true">{ok ? "✓" : "○"}</span> {s.steps[id]}</li>)}
        </ol>
      </Box>

      <Box title={s.nextTitle} s={s}>
        <ul className="jr-next">
          {nextShown.map(([id, href]) => {
            const [h, d] = nextText(id);
            return <li key={id}><Link href={`${t.base}${href}`}><b>{h}</b></Link><span>{d}</span></li>;
          })}
        </ul>
        {!plus && <p className="note">{s.nextMoreFree} <Link href={`${t.base}/pricing`}>{s.seePlus}</Link></p>}
      </Box>

      <Box title={s.answers} s={s}>
        <dl className="ps-dl">
          <div><dt>{s.a.level}</dt><dd>{t.levels[a.level]}</dd></div>
          <div><dt>{s.a.field}</dt><dd>{a.field === "any" ? t.anyField : t.fields[a.field]}</dd></div>
          <div><dt>{s.a.countries}</dt><dd>{a.countries?.length ? a.countries.map((c) => <span key={c} className="jr-c"><Flag code={c} size={14} /> {t.countries[c]}</span>) : s.allCountries}</dd></div>
          <div><dt>{s.a.budget}</dt><dd>{t.budgets[(BUDGETS.find((b) => b.id === a.budget) || BUDGETS.at(-1)).id]}</dd></div>
          <div><dt>{s.a.grade}</dt><dd>{gradeTxt}</dd></div>
          <div><dt>{s.a.english}</dt><dd>{enTxt}</dd></div>
        </dl>
        {a.at && <p className="meta">{s.savedAt(a.at)}</p>}
        <p className="pl-actions">
          <Link className="btn ghost small" href={`${t.base}/eligibility`}>{s.edit}</Link>
          {!confirm ? <button type="button" className="linkbtn" onClick={() => setConfirm(true)}>{s.del}</button> : (
            <span role="alert">{s.delConfirm}{" "}
              <button type="button" className="btn small" onClick={async () => { if (await deleteProfile()) { setA(null); setConfirm(false); } }}>{s.delYes}</button>{" "}
              <button type="button" className="linkbtn" onClick={() => setConfirm(false)}>{s.cancel}</button>
            </span>
          )}
        </p>
      </Box>

      <Box title={s.matchTitle} s={s}>
        {!res ? <p className="meta">{s.loading}</p> : (
          <>
            <p>{s.matchCounts(res.fit.length, res.check.length, res.miss.length)}</p>
            {fitList.length ? (
              <ul className="jr-list">
                {fitList.map(({ p }) => (
                  <li key={p.i}><Flag code={p.c} size={16} /> <Link href={`${t.base}/programme/${p.i}`}>{p.n}</Link> <span className="meta">· {p.u} · {s.fee(p.f)}</span></li>
                ))}
              </ul>
            ) : <p className="note">{s.noFit}</p>}
            <p><Link href={`${t.base}/eligibility`}>{s.allResults}</Link></p>
          </>
        )}
      </Box>

      <Box title={s.dlTitle} s={s}>
        <p className="meta">{s.dlLead}</p>
        {dlShown.length ? (
          <ul className="jr-list">
            {dlShown.map((x) => {
              const n = daysLeft(x.next.d);
              return (
                <li key={x.p ? x.p.id : x.c.n + x.next.d}>
                  <b>{x.next.d}</b> <span className="meta">({s.dlDays(n)}{x.next.est ? ` · ${s.dlEst}` : ""})</span> —{" "}
                  {x.p ? <Link href={`${t.base}/programme/${x.p.id}`}>{x.p.name}</Link> : x.c.n}
                </li>
              );
            })}
          </ul>
        ) : <p className="note">{s.dlEmpty}</p>}
        {plus && dl.without.length > 0 && (
          <ul className="jr-list">{dl.without.map((x) => <li key={x.p.id}><span className="meta">{s.dlNone}</span> — <Link href={`${t.base}/programme/${x.p.id}`}>{x.p.name}</Link></li>)}</ul>
        )}
        {!plus && dl.withDate.length > 1 && <p className="note">{s.dlMoreFree(dl.withDate.length - 1)} <Link href={`${t.base}/pricing`}>{s.seePlus}</Link></p>}
        {plus && icsItems.length > 0 && <p><button type="button" className="btn ghost small" onClick={() => download(icsItems, lang, "my-deadlines.ics")}>{s.dlIcs}</button></p>}
        <p className="meta">{s.dlMail}</p>
      </Box>

      <Box title={s.planTitle} s={s} plusTag>
        {!plus ? <p>{s.planLocked} <Link href={`${t.base}/pricing`}>{s.seePlus}</Link></p> : !target ? <p className="note">{s.planNone}</p> : (
          <>
            <p className="meta">{s.planLead(target.name, target.d)}</p>
            <ol className="jr-plan">
              {s.plan.map(([days, text, href]) => {
                const d = minus(target.d, days);
                const late = d < today();
                return <li key={days} className={late ? "late" : ""}><b>{d}</b> <Link href={`${t.base}/${href}`}>{text}</Link></li>;
              })}
              <li><b>{target.d}</b> {lang === "ar" ? "آخر موعد للتقديم" : "Application deadline"}</li>
            </ol>
          </>
        )}
      </Box>

      <Box title={s.docsTitle} s={s} plusTag>
        <DocList lang={lang} plus={plus} items={docItems} origin={origin} />
      </Box>

      <div className="jr-two">
        <Box title={s.listTitle} s={s}>
          <p>{saved.length ? s.listCount(saved.length) : s.listEmpty}</p>
          <Link className="btn ghost small" href={`${t.base}/my-list`}>{s.openList}</Link>
        </Box>
        <Box title={s.appsTitle} s={s}>
          {pApps.length ? (
            <ul className="jr-list">
              {pApps.slice(0, 5).map((x) => (
                <li key={x.k}>{x.k.startsWith("p:") ? byId(x.k.slice(2))?.name || "" : x.c?.n} <span className="meta">· {s.status[x.st]}</span></li>
              ))}
            </ul>
          ) : <p>{s.appsEmpty}</p>}
          <Link className="btn ghost small" href={`${t.base}/applications`}>{s.openApps}</Link>
        </Box>
      </div>

      <p className="meta">{s.privacy}</p>
    </>
  );
}
