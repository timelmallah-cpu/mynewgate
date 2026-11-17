"use client";
import { useEffect, useState } from "react";
import Link from "@/components/Link";
import { SUBSCRIBED } from "./Privacy";
import { BASE } from "../lib/site";

// Kit sends everyone to one URL after they confirm, so we show the language they subscribed in
// (remembered in this browser). If they confirm on another device we don't know it, so we show both.
export default function Subscribed({ fixed }) {
  const [langs, setLangs] = useState(null);
  useEffect(() => {
    let l = null;
    try { l = localStorage.getItem("mng-nl-lang"); } catch {}
    if (fixed) return setLangs([fixed]);
    // English subscribers land on the Arabic URL (Kit allows one redirect), so move them to the English page.
    if (l === "en") return window.location.replace(`${BASE}/en/subscribed`);
    setLangs(l === "ar" ? ["ar"] : ["ar", "en"]);
  }, [fixed]);
  if (!langs) return null;
  return (
    <div className="subscribed">
      {langs.map((l) => (
        <section key={l} lang={l} dir={l === "ar" ? "rtl" : "ltr"}>
          <h1>{SUBSCRIBED[l][0]}</h1>
          <p>{SUBSCRIBED[l][1]}</p>
          <p className="row">
            <Link className="btn gold small" href={l === "ar" ? "/quiz" : "/en/quiz"}>{l === "ar" ? "ابحث عن برنامج" : "Find a programme"}</Link>
            <Link className="btn ghost small" href={l === "ar" ? "/scholarships" : "/en/scholarships"}>{l === "ar" ? "المنح" : "Scholarships"}</Link>
          </p>
        </section>
      ))}
    </div>
  );
}
