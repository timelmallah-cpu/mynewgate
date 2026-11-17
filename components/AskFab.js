"use client";
// Floating "Ask the assistant" button on every page except the assistant page itself.
import Link from "@/components/Link";
import { usePathname } from "next/navigation";

export default function AskFab({ lang }) {
  const path = usePathname() || "";
  const base = lang === "en" ? "/en" : "";
  if (path === `${base}/ask` || path.endsWith("/ask")) return null;
  const label = lang === "en" ? "Ask the assistant" : "اسأل المساعد";
  return (
    <Link href={`${base}/ask`} className="ask-fab" aria-label={label}>
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 5h16v11H9l-5 4z" /><path d="M9 9h6M9 12h4" />
      </svg>
      <span>{label}</span>
    </Link>
  );
}
