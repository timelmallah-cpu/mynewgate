"use client";
// Shows euro amounts in the visitor's chosen currency. The choice is kept in this browser only.
import { useEffect, useState } from "react";
import { CURRENCIES } from "../lib/currency";

const KEY = "mng-currency";
const EVT = "mng-currency-change";
let ratesPromise = null;
const getRates = () => (ratesPromise ||= fetch("/api/rates").then((r) => (r.ok ? r.json() : null)).catch(() => null));
const readChoice = () => { try { return localStorage.getItem(KEY) || ""; } catch { return ""; } };

function useCurrency() {
  const [code, setCode] = useState("");
  const [data, setData] = useState(null);
  useEffect(() => {
    setCode(readChoice());
    const on = () => setCode(readChoice());
    window.addEventListener(EVT, on);
    window.addEventListener("storage", on);
    getRates().then(setData);
    return () => { window.removeEventListener(EVT, on); window.removeEventListener("storage", on); };
  }, []);
  return { code, data };
}

const fmt = (n) => Math.round(n).toLocaleString("en-US");

// "≈ 123,456 ج.م" next to a euro amount, or nothing when no currency is chosen.
export function Local({ eur, lang }) {
  const { code, data } = useCurrency();
  const rate = data?.rates?.[code];
  if (!code || !rate || eur === null || eur === undefined) return null;
  const c = CURRENCIES.find((x) => x.code === code);
  return <span className="local-cur">{lang === "ar" ? `حوالي ${fmt(eur * rate)} ${c.sym.ar}` : `≈ ${fmt(eur * rate)} ${c.code}`}</span>;
}

export function CurrencyPicker({ lang }) {
  const { code, data } = useCurrency();
  const ar = lang === "ar";
  const set = (v) => { try { v ? localStorage.setItem(KEY, v) : localStorage.removeItem(KEY); } catch {} window.dispatchEvent(new Event(EVT)); };
  if (data === null) return null; // rates unavailable: show euros only
  const day = data.date ? new Intl.DateTimeFormat(ar ? "ar-u-nu-latn" : "en-GB", { day: "numeric", month: "long", year: "numeric" }).format(new Date(data.date)) : "";
  return (
    <div className="cur-pick">
      <label>
        <span>{ar ? "اعرض المبالغ بعملة بلدك:" : "Show amounts in your currency:"}</span>
        <select value={code} onChange={(e) => set(e.target.value)}>
          <option value="">{ar ? "اليورو فقط" : "Euros only"}</option>
          {CURRENCIES.filter((c) => data.rates[c.code]).map((c) => <option key={c.code} value={c.code}>{c[lang]}</option>)}
        </select>
      </label>
      {code && (
        <small className="meta">
          {ar ? `سعر تقريبي بتاريخ ${day}، والسعر الفعلي في البنك أو الصرافة قد يختلف. ` : `Approximate rate on ${day}; the rate at your bank or exchange may differ. `}
          <a href="https://www.exchangerate-api.com" target="_blank" rel="noopener noreferrer">Rates By Exchange Rate API</a>
        </small>
      )}
    </div>
  );
}
