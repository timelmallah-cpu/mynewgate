"use client";
import { usePathname } from "next/navigation";
import { BASE } from "../lib/site";

// Links to the same page in the other language.
export default function LangSwitch({ lang, label }) {
  const path = usePathname() || "/";
  const href = lang === "ar" ? (path === "/" ? "/en" : `/en${path}`) : path.replace(/^\/en/, "") || "/";
  return <a className="lang" href={BASE + (href === "/" ? "" : href)} lang={lang === "ar" ? "en" : "ar"}>{label}</a>;
}
