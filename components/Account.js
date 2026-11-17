"use client";
import { useEffect, useState } from "react";
import Link from "@/components/Link";
import { T } from "../lib/i18n";
import { COUNTRY_IDS } from "../lib/options";
import { ACC, LEVEL_LABELS } from "../lib/accountText";
import { getSaved } from "../lib/saved";
import { BASE } from "../lib/site";
import PlanBox from "./PlanBox";

const YEARS = [2026, 2027, 2028, 2029, 2030];

export default function Account({ lang }) {
  const a = ACC[lang];
  const t = T[lang];
  const [user, setUser] = useState(undefined); // undefined = loading, null = signed out
  const [err, setErr] = useState("");
  const [p, setP] = useState({});
  const [saveState, setSaveState] = useState("");
  const [del, setDel] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    fetch(`${BASE}/api/account`, { cache: "no-store" }).then(async (r) => {
      const d = await r.json().catch(() => ({}));
      if (r.ok) { setUser(d.user); setP(d.user.profile || {}); }
      else { setUser(null); if (d.error === "not_configured") setErr(a.errOff); }
    }).catch(() => { setUser(null); setErr(a.errFail); });
  }, [a]);

  async function saveProfile(e) {
    e.preventDefault();
    setSaveState("busy");
    const r = await fetch(`${BASE}/api/account`, { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ profile: p, lang }) }).catch(() => null);
    if (r?.ok) { const d = await r.json(); setP(d.user.profile); setSaveState("ok"); } else setSaveState("err");
  }
  async function logout() {
    await fetch(`${BASE}/api/auth/logout`, { method: "POST" }).catch(() => {});
    window.location.replace(BASE + (t.base || "/"));
  }
  async function remove() {
    const r = await fetch(`${BASE}/api/account`, { method: "DELETE" }).catch(() => null);
    if (r?.ok) { setGone(true); setUser(null); } else setErr(a.errFail);
  }
  const toggleCountry = (c) => setP((x) => {
    const l = x.countries || [];
    return { ...x, countries: l.includes(c) ? l.filter((y) => y !== c) : [...l, c] };
  });

  if (user === undefined) return <article className="acc"><h1>{a.accTitle}</h1><p>{a.loading}</p></article>;
  if (!user) return (
    <article className="acc">
      <h1>{a.accTitle}</h1>
      <div className="acc-box">
        <p>{gone ? a.deleted : err || a.notSigned}</p>
        {!err && <Link className="btn" href={`${t.base}/login`}>{a.signIn}</Link>}
      </div>
    </article>
  );

  const listCount = Math.max(user.list.length, getSaved().length);
  return (
    <article className="acc">
      <h1>{a.accTitle}</h1>
      <p className="acc-who">{a.signedAs} <bdi dir="ltr">{user.email}</bdi></p>

      <PlanBox lang={lang} user={user} />

      <section className="acc-box">
        <h2>{a.listTitle}</h2>
        <p>{a.listText(listCount)}</p>
        <Link href={`${t.base}/my-list`}>{a.listLink}</Link>
        {" · "}<Link href={`${t.base}/applications`}>{lang === "ar" ? "متابعة طلبات التقديم" : "Application tracker"}</Link>
      </section>

      <form className="acc-box acc-form" onSubmit={saveProfile}>
        <h2>{a.profileTitle}</h2>
        <p className="acc-note">{a.profileLead}</p>
        <label htmlFor="acc-level">{a.level}</label>
        <select id="acc-level" value={p.level || ""} onChange={(e) => setP({ ...p, level: e.target.value || undefined })}>
          <option value="">{a.any}</option>
          {Object.entries(LEVEL_LABELS[lang]).map(([k, v]) => <option key={k} value={k}>{v}</option>)}
        </select>
        <fieldset className="acc-countries">
          <legend>{a.countries}</legend>
          {COUNTRY_IDS.map((c) => (
            <label key={c} className="acc-check"><input type="checkbox" checked={(p.countries || []).includes(c)} onChange={() => toggleCountry(c)} /><span>{t.countries[c]}</span></label>
          ))}
        </fieldset>
        <label htmlFor="acc-field">{a.field}</label>
        <input id="acc-field" maxLength={80} placeholder={a.fieldPh} value={p.field || ""} onChange={(e) => setP({ ...p, field: e.target.value })} />
        <label htmlFor="acc-year">{a.intake}</label>
        <select id="acc-year" value={p.intakeYear || ""} onChange={(e) => setP({ ...p, intakeYear: e.target.value ? Number(e.target.value) : undefined })}>
          <option value="">{a.any}</option>
          {YEARS.map((y) => <option key={y} value={y}>{y}</option>)}
        </select>
        <button className="btn" type="submit" disabled={saveState === "busy"}>{saveState === "busy" ? a.saving : a.save}</button>
        {saveState === "ok" && <p role="status">{a.saved}</p>}
        {saveState === "err" && <p className="acc-err" role="alert">{a.errFail}</p>}
      </form>

      <section className="acc-box">
        <h2>{a.dataTitle}</h2>
        <p>{a.dataLead}</p>
        <div className="acc-actions">
          <a className="btn ghost" href={`${BASE}/api/account/export`} download>{a.export}</a>
          {!del && <button className="btn ghost acc-danger" onClick={() => setDel(true)}>{a.del}</button>}
        </div>
        {del && (
          <div className="acc-confirm" role="alertdialog" aria-label={a.del}>
            <p>{a.delSure}</p>
            {user.plus && <p><b>{lang === "ar" ? "حذف الحساب يلغي اشتراكك في Study Plus فوراً، وتتوقف مميزاته في الحال." : "Deleting your account cancels your Study Plus subscription immediately, and its features stop at once."}</b></p>}
            <div className="acc-actions">
              <button className="btn acc-danger-solid" onClick={remove}>{a.delYes}</button>
              <button className="btn ghost" onClick={() => setDel(false)}>{a.cancel}</button>
            </div>
          </div>
        )}
        {err && <p className="acc-err" role="alert">{err}</p>}
        <p><Link href={`${t.base}/privacy`}>{a.privacy}</Link></p>
      </section>

      <button className="btn ghost" onClick={logout}>{a.logout}</button>
    </article>
  );
}
