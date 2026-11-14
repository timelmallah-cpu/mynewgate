"use client";
import { useState } from "react";
import Link from "next/link";
import { T } from "../lib/i18n";
import { SCHOLARSHIPS, ARAB, ARAB_IDS, eligibility } from "../lib/scholarships";
import { COUNTRY_IDS } from "../lib/options";
import { Hosts, nextDeadline, fmtDate, KindTag } from "./ScholarshipParts";

export default function ScholarshipFinder({ lang }) {
  const t = T[lang];
  const st = t.sch;
  const [nat, setNat] = useState("");
  const [level, setLevel] = useState("");
  const [host, setHost] = useState("");

  const base = SCHOLARSHIPS.filter((s) => (!level || s.levels.includes(level)) && (!host || s.hosts.includes(host)));
  const rank = { yes: 0, any: 0, check: 1 };
  const shown = base
    .map((s) => ({ s, e: eligibility(s, nat) }))
    .filter((x) => x.e !== "no")
    .sort((a, b) => rank[a.e] - rank[b.e] || nextDeadline(a.s).date.localeCompare(nextDeadline(b.s).date));
  const hidden = base.length - shown.length;

  return (
    <>
      <div className="sch-filters">
        <div className="field">
          <label htmlFor="nat">{st.nat}</label>
          <select id="nat" value={nat} onChange={(e) => setNat(e.target.value)}>
            <option value="">{st.natAny}</option>
            {(lang === "ar" ? ARAB_IDS : [...ARAB_IDS].sort((a, b) => ARAB[a].en.localeCompare(ARAB[b].en))).map((c) => (
              <option key={c} value={c}>{ARAB[c][lang]}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="lvl">{st.level}</label>
          <select id="lvl" value={level} onChange={(e) => setLevel(e.target.value)}>
            <option value="">{st.levelAny}</option>
            <option value="bachelor">{st.levels.bachelor}</option>
            <option value="master">{st.levels.master}</option>
          </select>
        </div>
        <div className="field">
          <label htmlFor="host">{st.host}</label>
          <select id="host" value={host} onChange={(e) => setHost(e.target.value)}>
            <option value="">{st.hostAny}</option>
            {COUNTRY_IDS.map((c) => <option key={c} value={c}>{t.countries[c]}</option>)}
          </select>
        </div>
      </div>

      <p className="meta" aria-live="polite">{shown.length ? st.showing(shown.length) : ""}</p>
      {!shown.length && <p className="notice">{st.none}</p>}

      <div className="sch-list">
        {shown.map(({ s, e }) => {
          const d = nextDeadline(s);
          const rough = d.kind === "expected" || d.kind === "varies";
          return (
            <Link key={s.id} className="sch" href={`${t.base}/scholarships/${s.id}`}>
              <span className="sch-type">{st.types[s.type]} · {s.levels.map((l) => st.levels[l]).join(" / ")}</span>
              <span className="name">{s.name[lang]}</span>
              <span className="where"><Hosts s={s} lang={lang} /></span>
              <span className="sum">{s.summary[lang]}</span>
              <span className="sch-foot">
                <span><b>{t.keyDeadline}:</b> {fmtDate(d.date, lang, rough)} <KindTag kind={d.kind} lang={lang} /></span>
                {e === "yes" && <span className="elig yes">{st.yes}</span>}
                {e === "check" && <span className="elig check">{st.check}</span>}
              </span>
              <span className="more">{st.more}</span>
            </Link>
          );
        })}
      </div>
      {nat && hidden > 0 && <p className="meta">{st.notEligible(hidden)}</p>}
    </>
  );
}
