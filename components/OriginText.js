"use client";
// Shows the visitor's own-country version of a piece of text when one exists (Saudi Arabia, Morocco), otherwise the
// default (Egyptian) children. `by` = { sa: node | {ar,en}, ma: ... }.
import { useOrigin } from "./Origin";

export default function OriginText({ by, lang, children }) {
  const [o] = useOrigin();
  const v = by?.[o];
  if (v == null) return children ?? null;
  return typeof v === "object" && !Array.isArray(v) && ("ar" in v || "en" in v) ? v[lang] : v;
}

// Renders children only when the chosen origin is one of `only` (or, with `not`, when it is not).
export function OnlyFor({ only, not, children }) {
  const [o] = useOrigin();
  const ok = only ? only.includes(o) : !(not || []).includes(o);
  return ok ? children : null;
}
