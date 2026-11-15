"use client";
import { useState } from "react";
import Link from "next/link";
import Flag from "../lib/Flag";
import { CC_TEXT } from "../lib/countriesText";

const fmt = (n) => Math.round(n).toLocaleString("en-US");
// Column -> value used for sorting, and whether bigger is better (sorted first).
const COLS = [
  { key: "fee", val: (r) => r.feeMed, desc: false },
  { key: "living", val: (r) => r.living, desc: false },
  { key: "proof", val: (r) => r.proof, desc: false },
  { key: "work", val: (r) => (r.hours === null ? null : r.hours), desc: true },
  { key: "after", val: (r) => r.months, desc: true },
];

export default function CountriesTable({ lang, rows, names }) {
  const s = CC_TEXT[lang];
  const base = lang === "en" ? "/en" : "";
  const chk = " *";
  const [sort, setSort] = useState(null);
  const col = COLS.find((c) => c.key === sort);
  const list = col
    ? [...rows].sort((a, b) => {
        const x = col.val(a), y = col.val(b);
        if (x === null && y === null) return 0;
        if (x === null) return 1;
        if (y === null) return -1;
        return col.desc ? y - x : x - y;
      })
    : rows;
  const head = (key) => (
    <th scope="col" aria-sort={sort === key ? "ascending" : "none"}>
      <button type="button" className={`cc-sort${sort === key ? " on" : ""}`} onClick={() => setSort(sort === key ? null : key)}>
        {s[key]}
      </button>
    </th>
  );
  return (
    <div className="cc-scroll" tabIndex={0} aria-label={s.title}>
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
              <td>
                {r.feeMin === null ? s.na : <>{s.range(fmt(r.feeMin), fmt(r.feeMax))}<small>{s.median(fmt(r.feeMed))}</small></>}
                {r.free > 0 && <small>{s.free(r.free)}</small>}
              </td>
              <td>{r.living === null ? s.na : s.eur(fmt(r.living))}</td>
              <td>{r.proof === null ? s.na : s.eur(fmt(r.proof))}{r.proofCheck ? chk : ""}</td>
              <td><a href={`#cc-${r.c}`}>{s.hours(r.hours)}</a>{r.workCheck ? chk : ""}</td>
              <td>{r.months === null ? s.na : s.months(r.months)}{r.afterCheck ? chk : ""}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="meta cc-star">{lang === "en" ? "* to verify" : "* للتحقق"}</p>
    </div>
  );
}
