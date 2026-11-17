"use client";
// Header account button: "Sign in" for visitors, the account icon once signed in. Shown on phones too.
import { useEffect, useState } from "react";
import Link from "@/components/Link";
import { signedIn } from "../lib/saved";

export default function TopAccount({ lang, base, label }) {
  const [si, setSi] = useState(false);
  useEffect(() => setSi(signedIn()), []);
  if (si) {
    return (
      <Link className="top-acc in" href={`${base}/account`} aria-label={label} title={label}>
        <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M4 21c1.5-4 4.5-6 8-6s6.5 2 8 6" /></svg>
      </Link>
    );
  }
  return <Link className="top-acc" href={`${base}/login`}>{lang === "ar" ? "دخول" : "Sign in"}</Link>;
}
