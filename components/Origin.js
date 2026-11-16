"use client";
// The visitor's country, chosen once and kept in this browser only. Visa, certificate and scholarship pages start from it.
import { useEffect, useState } from "react";
import { ARAB, ARAB_IDS } from "../lib/scholarships";

const KEY = "mng-origin";
const EVT = "mng-origin-change";
const CUR_KEY = "mng-currency";
const CUR_EVT = "mng-currency-change";
export const CURRENCY_OF = {
  dz: "DZD", bh: "BHD", km: "KMF", dj: "DJF", eg: "EGP", iq: "IQD", jo: "JOD", kw: "KWD", lb: "LBP", ly: "LYD", mr: "MRU",
  ma: "MAD", om: "OMR", ps: "ILS", qa: "QAR", sa: "SAR", so: "SOS", sd: "SDG", sy: "SYP", tn: "TND", ae: "AED", ye: "YER",
};
const read = () => { try { const v = localStorage.getItem(KEY) || ""; return ARAB[v] ? v : ""; } catch { return ""; } };

export function setOrigin(v) {
  try {
    if (v) {
      localStorage.setItem(KEY, v);
      // Show amounts in the chosen country's currency (the visitor can still change it in any cost table).
      if (CURRENCY_OF[v]) { localStorage.setItem(CUR_KEY, CURRENCY_OF[v]); window.dispatchEvent(new Event(CUR_EVT)); }
    } else localStorage.removeItem(KEY);
  } catch {}
  window.dispatchEvent(new Event(EVT));
}

// Returns [origin, loaded]. origin is "" until the visitor chooses.
export function useOrigin() {
  const [o, setO] = useState("");
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setO(read()); setLoaded(true);
    const on = () => setO(read());
    window.addEventListener(EVT, on);
    window.addEventListener("storage", on);
    return () => { window.removeEventListener(EVT, on); window.removeEventListener("storage", on); };
  }, []);
  return [o, loaded];
}

export const originIds = (lang) => (lang === "ar" ? ARAB_IDS : [...ARAB_IDS].sort((a, b) => ARAB[a].en.localeCompare(ARAB[b].en)));

export function OriginPicker({ lang, compact = false }) {
  const [o] = useOrigin();
  const ar = lang === "ar";
  return (
    <div className={`origin-pick${compact ? " compact" : ""}`}>
      <label>
        <span>{ar ? "أنت من أي بلد؟" : "Where are you from?"}</span>
        <select value={o} onChange={(e) => setOrigin(e.target.value)}>
          <option value="">{ar ? "اختر بلدك" : "Choose your country"}</option>
          {originIds(lang).map((c) => <option key={c} value={c}>{ARAB[c][lang]}</option>)}
        </select>
      </label>
      {!compact && <p className="meta">{ar ? "نستخدم اختيارك لنعرض لك تفاصيل التأشيرة ومعادلة الشهادة والمنح المتاحة لجنسيتك، وعملة بلدك. يُحفظ في متصفحك فقط." : "We use it to show visa steps, certificate recognition and scholarships open to your nationality, plus your currency. It is kept in your browser only."}</p>}
    </div>
  );
}

// Shown on pages whose details are written for Egypt only, when the visitor chose another country.
export function EgyptOnlyNote({ lang, what }) {
  const [o] = useOrigin();
  if (!o || o === "eg") return null;
  const ar = lang === "ar";
  return (
    <div className="notice origin-note" role="note">
      {ar
        ? `اخترت ${ARAB[o].ar}. ${what?.ar || "تفاصيل هذه الصفحة (العناوين والرسوم والجهات)"} مكتوبة حالياً للمقيمين في مصر، ولم نضف تفاصيل ${ARAB[o].ar} بعد. الخطوات العامة تفيدك، لكن تأكد من الجهة المختصة في بلدك.`
        : `You chose ${ARAB[o].en}. ${what?.en || "The details on this page (addresses, fees and offices)"} are currently written for residents of Egypt; ${ARAB[o].en} is not added yet. The general steps still help, but check with the competent office in your country.`}
    </div>
  );
}
