"use client";
// On a country page: a link to "studying in X from <your country>" for the visitor's own country only (Egypt when
// the visitor has not chosen one). Other countries' versions are never linked.
import Link from "@/components/Link";
import { useOrigin } from "./Origin";
import { slugOfOrigin, FROM } from "../lib/fromOrigin";

export default function FromOriginLink({ c, cn, lang, base }) {
  const [o, loaded] = useOrigin();
  if (!loaded) return null;
  const slug = slugOfOrigin(o || "eg");
  if (!slug) return null;
  const on = FROM[slug][lang === "ar" ? "ar" : "en"];
  return (
    <p className="from-link">
      <Link className="btn ghost small" href={`${base}/study-from/${slug}/${c}`}>
        {lang === "ar" ? `الدراسة في ${cn} من ${on}: التكلفة الكاملة بعملة بلدك والتأشيرة` : `Studying in ${cn} from ${on}: full cost in your currency and the visa`}
      </Link>
    </p>
  );
}
