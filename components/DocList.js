"use client";
// "My documents" in My Study Journey. Free: the general list every application needs.
// Study Plus: one list per tracked or saved programme, built from what that programme's official text asks for
// (dk keys from build-data), the destination's visa proof of funds (lib/costs) and the visitor's country.
import Link from "@/components/Link";
import { COSTS } from "../lib/costs";
import { T } from "../lib/i18n";
import Flag from "../lib/Flag";

const TXT = {
  ar: {
    title: "قائمة مستنداتك",
    general: "كل طلب تقريباً يحتاج هذه المستندات. جهّزها مبكراً لأن التصديق والترجمة يأخذان وقتاً:",
    base: [
      "جواز سفر ساري لمدة الدراسة كلها تقريباً",
      "شهادة البكالوريوس (أو الثانوية للبكالوريوس) وكشف الدرجات، مع ترجمة معتمدة إن لم تكن بالإنجليزية",
      "إثبات اللغة الإنجليزية (اختبار معترف به) حسب شرط كل برنامج",
      "سيرة ذاتية مختصرة وخطاب دافع، فكثير من البرامج تطلبهما",
    ],
    legal: "تصديق الشهادات من بلدك",
    tailored: "قائمة مخصصة لكل برنامج تتابعه أو حفظته، مبنية على ما تطلبه صفحته الرسمية وعلى تأشيرة بلد الدراسة.",
    locked: "القائمة المخصصة لكل برنامج متاحة في Study Plus.",
    seePlus: "اعرف المزيد",
    none: "تابع برنامجاً أو احفظه لتظهر قائمته هنا.",
    admission: "للقبول",
    visa: "للتأشيرة",
    english: (e) => `إثبات الإنجليزية: ${e}`,
    docs: {
      ua: "التقديم يمر عبر uni-assist: جهّز نسخاً مصدّقة ورسوم uni-assist",
      aps: "شهادة APS إن كانت مطلوبة لبلد شهادتك",
      ml: "خطاب دافع (Motivation letter / Statement of purpose)",
      ref: "خطابات توصية",
      cv: "سيرة ذاتية (CV)",
      port: "ملف أعمال (Portfolio)",
      gre: "نتيجة GRE أو GMAT (راجع هل هي شرط أم اختيارية)",
      int: "استعد لمقابلة ضمن الاختيار",
      exam: "اختبار قبول أو قدرات",
      wri: "عينة كتابة أكاديمية",
      fee: "رسوم الطلب (ادفعها قبل الموعد)",
    },
    funds: (x) => `إثبات القدرة المالية: ${x}`,
    insurance: "تأمين صحي يغطي فترة الإقامة",
    visaLink: "طريقة التأشيرة من بلدك",
    note: "القائمة مأخوذة من نص البرنامج المنشور عندنا وقد لا تذكر كل شيء. راجع صفحة البرنامج الرسمية قبل التقديم.",
  },
  en: {
    title: "Your document list",
    general: "Almost every application needs these. Start early, because legalisation and translation take time:",
    base: [
      "A passport valid for about the whole study period",
      "Your bachelor's certificate (or school certificate for a bachelor's) and transcript, with a certified translation if not in English",
      "Proof of English (a recognised test) per each programme's requirement",
      "A short CV and a motivation letter, which many programmes ask for",
    ],
    legal: "Legalising certificates from your country",
    tailored: "A list for each programme you track or saved, built from what its official page asks for and the destination's visa.",
    locked: "A tailored list for each programme is part of Study Plus.",
    seePlus: "Learn more",
    none: "Track or save a programme to see its list here.",
    admission: "For admission",
    visa: "For the visa",
    english: (e) => `Proof of English: ${e}`,
    docs: {
      ua: "Applications go through uni-assist: prepare certified copies and the uni-assist fee",
      aps: "An APS certificate if required for your country of education",
      ml: "Motivation letter / statement of purpose",
      ref: "Recommendation letters",
      cv: "CV",
      port: "Portfolio",
      gre: "GRE or GMAT score (check whether it is required or optional)",
      int: "Prepare for an interview in the selection",
      exam: "An admission or aptitude test",
      wri: "An academic writing sample",
      fee: "Application fee (pay before the deadline)",
    },
    funds: (x) => `Proof of funds: ${x}`,
    insurance: "Health insurance covering your stay",
    visaLink: "The visa route from your country",
    note: "The list comes from the programme text we publish and may not cover everything. Check the official programme page before you apply.",
  },
};

// items: compare-*.json entries for the student's tracked and saved programmes.
export default function DocList({ lang, plus, items, origin }) {
  const t = TXT[lang];
  const base = T[lang].base;
  return (
    <>
      <p>{t.general}</p>
      <ul className="jr-docs">{t.base.map((x) => <li key={x}>{x}</li>)}</ul>
      <p><Link href={`${base}/legalisation`}>{t.legal}</Link></p>
      {!plus ? <p>{t.locked} <Link href={`${base}/pricing`}>{t.seePlus}</Link></p> : !items.length ? <p className="note">{t.none}</p> : (
        <>
          <p className="meta">{t.tailored}</p>
          {items.slice(0, 10).map((p) => {
            const c = COSTS[p.c];
            const proof = c?.proof?.[lang];
            return (
              <details key={p.i} className="jr-doc-prog">
                <summary><Flag code={p.c} size={16} /> <bdi>{p.n}</bdi> <span className="meta">· <bdi>{p.u}</bdi></span></summary>
                <h4>{t.admission}</h4>
                <ul className="jr-docs">
                  <li>{t.base[1]}</li>
                  {p.e && <li>{t.english(p.e)}</li>}
                  {(p.dk || []).map((k) => t.docs[k] && <li key={k}>{t.docs[k]}</li>)}
                </ul>
                <h4>{t.visa}</h4>
                <ul className="jr-docs">
                  <li>{t.base[0]}</li>
                  {proof && <li>{t.funds(proof)}</li>}
                  <li>{t.insurance}</li>
                </ul>
                <p><Link href={`${base}/programme/${p.i}`}>{p.n}</Link> · <Link href={`${base}/visa?to=${p.c}${origin && origin !== "eg" ? `&from=${origin}` : ""}`}>{t.visaLink}</Link></p>
              </details>
            );
          })}
          <p className="meta">{t.note}</p>
        </>
      )}
    </>
  );
}
