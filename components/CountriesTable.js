"use client";
import { useState } from "react";
import Link from "@/components/Link";
import Flag from "../lib/Flag";
import { CC_TEXT } from "../lib/countriesText";
import { Local, CurrencyPicker } from "./Currency";

const PER_WEEK = { week: 1, month: 12 / 52, day: 5, year: 1 / 52 };
const fmt = (n) => Math.round(n).toLocaleString("en-US");
// Column -> value used for sorting, and whether bigger is better (sorted first).
const COLS = [
  { key: "fee", val: (r, lv) => r.fee[lv].med, desc: false },
  { key: "living", val: (r) => r.living, desc: false },
  { key: "proof", val: (r) => r.proof, desc: false },
  // Sorted by the weekly equivalent, shown in the source's own unit.
  { key: "work", val: (r) => (r.hours === null ? null : r.hours * PER_WEEK[r.per || "week"]), desc: true },
  { key: "after", val: (r) => r.months, desc: true },
];

function FeeCell({ f, s, lang }) {
  if (!f.count) return <span className="cc-none">{s.noProgs}</span>;
  return (
    <>
      {f.free > 0 && <span className="cc-free">{s.free(f.free)}</span>}
      {f.min !== null
        ? <span className="cc-paid">{f.free > 0 && <b>{s.paidLabel}: </b>}{s.range(fmt(f.min), fmt(f.max))}{f.toCheck ? " *" : ""}<small>{s.median(fmt(f.med))}<Local eur={f.med} lang={lang} /></small></span>
        : f.free === 0 && <span>{s.na}</span>}
      {f.unknown + f.noPeriod > 0 && <small className="cc-unk">{s.unknown(f.unknown + f.noPeriod)}</small>}
    </>
  );
}

export default function CountriesTable({ lang, rows, names }) {
  const s = CC_TEXT[lang];
  const base = lang === "en" ? "/en" : "";
  const chk = " *";
  const [sort, setSort] = useState(null);
  const [lv, setLv] = useState("master");
  const col = COLS.find((c) => c.key === sort);
  const list = col
    ? [...rows].sort((a, b) => {
        const x = col.val(a, lv), y = col.val(b, lv);
        if (x === null && y === null) return 0;
        if (x === null) return 1;
        if (y === null) return -1;
        return col.desc ? y - x : x - y;
      })
    : rows;
  const head = (key) => (
    <th scope="col" aria-sort={sort === key ? "ascending" : "none"}>
      <button type="button" className={`cc-sort${sort === key ? " on" : ""}`} onClick={() => setSort(sort === key ? null : key)}>
        {key === "fee" ? s.feeHead[lv] : s[key]}
      </button>
    </th>
  );
  return (
    <>
    <CurrencyPicker lang={lang} />
    <div className="cc-level" role="group" aria-label={s.levelLabel}>
      {["master", "bachelor"].map((l) => (
        <button key={l} type="button" className={`chip${lv === l ? " on" : ""}`} aria-pressed={lv === l} onClick={() => setLv(l)}>{s.levels[l]}</button>
      ))}
    </div>
    <div className="cc-scroll" aria-label={s.title}>
      <div className="cc-mobsort">
        <span>{s.sortBy}:</span>
        {COLS.map((c) => (
          <button key={c.key} type="button" className={`chip${sort === c.key ? " on" : ""}`} onClick={() => setSort(sort === c.key ? null : c.key)}>{c.key === "fee" ? s.feeHead[lv] : s[c.key]}</button>
        ))}
      </div>
      <table className="cc-table">
        <thead>
          <tr>
            <th scope="col">{s.country}</th>
            {head("fee")}{head("living")}{head("proof")}{head("work")}{head("after")}
          </tr>
        </thead>
        <tbody>
          {list.map((r) => (
            <tr key={r.c}>
              <th scope="row"><Link href={`${base}/country/${r.c}`}><Flag code={r.c} size={18} /> {names[r.c]}</Link></th>
              <td data-label={s.feeHead[lv]} className="cc-fee">
                <FeeCell f={r.fee[lv]} s={s} lang={lang} />
              </td>
              <td data-label={s.living}><span>{r.living === null ? s.na : <>{s.eur(fmt(r.living))}<Local eur={r.living} lang={lang} /></>}</span></td>
              <td data-label={s.proof}><span>{r.proof === null ? s.na : <>{s.eur(fmt(r.proof))}<Local eur={r.proof} lang={lang} /></>}{r.proofCheck ? chk : ""}</span></td>
              <td data-label={s.work}><span><a href={`#cc-${r.c}`}>{s.hours(r.hours, r.per)}</a>{r.workCheck ? chk : ""}</span></td>
              <td data-label={s.after}>{r.months === null ? s.na : s.months(r.months)}{r.afterCheck ? chk : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="meta cc-star">{lang === "en" ? "* to verify (in the fee column: some figures in the range still need confirmation)" : "* للتحقق (في عمود الرسوم: بعض الأرقام داخل النطاق ما زالت تحتاج تأكيداً)"}</p>
    </div>
    </>
  );
}
