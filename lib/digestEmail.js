// Arabic HTML of the weekly deadlines email (saved as a Kit draft by app/api/digest/cron).
import { SITE_URL } from "./site";

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
export const day = (iso) => new Intl.DateTimeFormat("ar-u-nu-latn", { day: "numeric", month: "long", timeZone: "UTC" }).format(new Date(iso + "T12:00:00Z"));
const STEP = { admission: "آخر موعد للتقديم على البرنامج", scholarship: "آخر موعد لطلب المنحة", both: "آخر موعد للقبول والمنحة معاً" };
export const MAX = 25;
const more = (n) => (n === 1 ? "وبرنامج آخر" : n === 2 ? "وبرنامجان آخران" : n <= 10 ? `و${n} برامج أخرى` : `و${n} برنامجاً آخر`);

export function digestEmail(x) {
  const conf = x.progs.filter((g) => !g.est);
  const li = (href, title, sub) => `<li style="margin:0 0 10px"><a href="${href}" style="color:#13284b;font-weight:700">${title}</a><br><span style="color:#555;font-size:14px">${sub}</span></li>`;
  const sch = x.sch.map((h) => li(`${SITE_URL}/scholarships/${h.id}`, esc(h.name.ar), `${day(h.d)}: ${STEP[h.step] || ""}`)).join("");
  const progs = conf.slice(0, MAX).map((g) => li(`${SITE_URL}/programme/${g.progs[0].id}`, `<bdi>${esc(g.progs[0].name)}</bdi>`,
    `${day(g.d)} · <bdi>${esc(g.uni)}</bdi>${g.progs.length > 1 ? ` · ${more(g.progs.length - 1)}` : ""}`)).join("");
  const page = `${SITE_URL}/deadlines-soon`;
  return `<div dir="rtl" style="font-family:Tahoma,Arial,sans-serif;line-height:1.7;text-align:right">
<p>مرحباً،</p>
<p>هذه مواعيد التقديم في الأسبوعين القادمين (من ${day(x.from)} إلى ${day(x.to)}) في البرامج والمنح المنشورة على بوابة الدراسة. راجع الصفحة الرسمية لكل برنامج قبل التقديم.</p>
${sch ? `<h2 style="font-size:18px;color:#13284b">منح</h2><ul style="padding-right:18px">${sch}</ul>` : ""}
${progs ? `<h2 style="font-size:18px;color:#13284b">برامج (مواعيد مؤكدة)</h2><ul style="padding-right:18px">${progs}</ul>` : "<p>لا توجد مواعيد مؤكدة للبرامج في هذين الأسبوعين.</p>"}
${conf.length > MAX ? `<p>و${conf.length - MAX} موعداً آخر في الصفحة الكاملة.</p>` : ""}
<p><a href="${page}" style="color:#13284b;font-weight:700">كل المواعيد في الثلاثين يوماً القادمة، ومعها المواعيد التقديرية</a></p>
<p><a href="${SITE_URL}/calendars" style="color:#13284b">اشترك في تقويم المواعيد على هاتفك</a></p>
<p style="color:#555;font-size:13px">بوابة الدراسة · bawabatalsafar.com/study</p>
</div>`;
}

