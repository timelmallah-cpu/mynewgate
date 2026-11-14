import Link from "next/link";
import { notFound } from "next/navigation";
import programmes from "../../../lib/programmes.json";

export function generateStaticParams() {
  return programmes.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }) {
  const { id } = await params;
  const p = programmes.find((x) => String(x.id) === id);
  return { title: p ? `${p.name} | بوابتي الجديدة` : "غير موجود" };
}

const FIELDS = [
  ["الدرجة", "degree"],
  ["المدة", "duration"],
  ["الرسوم الدراسية لغير الأوروبيين", "feeText"],
  ["رسوم إدارية / رسوم التقديم", "adminFee"],
  ["موعد التقديم لغير الأوروبيين", "deadline"],
  ["شرط اللغة الإنجليزية", "english"],
  ["شروط مهمة أخرى", "other"],
  ["طريقة التقديم", "howToApply"],
  ["متوسط تكلفة المعيشة الشهرية", "living"],
  ["السكن الجامعي", "housing"],
];

export default async function Programme({ params }) {
  const { id } = await params;
  const p = programmes.find((x) => String(x.id) === id);
  if (!p) notFound();
  const url = p.source.split(" ")[0];
  return (
    <>
      <Link href="/quiz">رجوع إلى الأسئلة</Link>
      <h1 className="ltr" style={{ textAlign: "right" }}>{p.name}</h1>
      <p className="meta">
        <span className="ltr">{p.university}</span> · المدينة: {p.city} · {p.countryAr} · {p.fieldAr}
      </p>
      <div className="card">
        <dl>
          {FIELDS.map(([label, k]) => (
            <div key={k}>
              <dt>{label}</dt>
              <dd>{p[k]}</dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="notice">
        المصدر الرسمي: <a className="ltr" href={url} target="_blank" rel="noopener noreferrer">{url}</a>
        <br />
        تاريخ المراجعة: {p.reviewed} · الحالة: {p.status}
      </div>
    </>
  );
}
