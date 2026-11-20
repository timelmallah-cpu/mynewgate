// Answers to common Google questions, computed from our own data (programmes.json, costs, study work,
// post-study, scholarships). Nothing here is typed by hand except the wording: every number comes from the
// same sources as the rest of the site, so the answers change when the data changes.
import programmes from "./programmes.json";
import { T } from "./i18n";
import { COUNTRY_IDS } from "./options";
import { COSTS } from "./costs";
import { STUDY_WORK } from "./studyWork";
import { POST_STUDY } from "./postStudy";
import { SCHOLARSHIPS } from "./scholarships";
import { feeStats } from "./feeStats";
import { progsAr } from "./arCount";

const n = (v) => Math.round(v).toLocaleString("en-US");
const PER_WEEK = { week: 1, fortnight: 0.5, month: 12 / 52, day: 5, year: 1 / 52 };
const UNIT = {
  ar: { week: "ساعة أسبوعياً", fortnight: "ساعة كل أسبوعين", month: "ساعة شهرياً", day: "ساعات يومياً", year: "ساعة سنوياً" },
  en: { week: "hours a week", fortnight: "hours a fortnight", month: "hours a month", day: "hours a day", year: "hours a year" },
};
// "N برنامج ماجستير" (construct state: no tanween before the level word).
const progsOf = (k, lv) => (k === 1 ? `برنامج ${lv} واحد` : k === 2 ? `برنامجا ${lv}` : k % 100 >= 3 && k % 100 <= 10 ? `${k.toLocaleString("en-US")} برامج ${lv}` : `${k.toLocaleString("en-US")} برنامج ${lv}`);
export const countriesAr = (k) => (k === 1 ? "دولة واحدة" : k === 2 ? "دولتين" : k % 100 >= 3 && k % 100 <= 10 ? `${k} دول` : `${k} دولة`);
const monthsAr = (m) => (m === 12 ? "سنة" : m === 24 ? "سنتان" : m === 36 ? "3 سنوات" : m === 18 ? "سنة ونصف" : m <= 10 ? `${m} أشهر` : `${m} شهراً`);
const monthsEn = (m) => (m % 12 === 0 ? `${m / 12} year${m === 12 ? "" : "s"}` : `${m} months`);

// One row of figures per country (the same figures as the countries table).
export function rows() {
  return COUNTRY_IDS.map((c) => {
    const list = programmes.filter((p) => p.country === c);
    const living = list.filter((p) => p.livingMonthly).map((p) => p.livingMonthly);
    const w = STUDY_WORK[c];
    const ps = POST_STUDY[c];
    return {
      c,
      master: feeStats(list.filter((p) => p.level === "master")),
      bachelor: feeStats(list.filter((p) => p.level === "bachelor")),
      living: living.length ? Math.round(living.reduce((a, b) => a + b, 0) / living.length / 10) * 10 : null,
      livingN: living.length,
      proof: COSTS[c]?.proofMonthly ?? null,
      proofCheck: !!COSTS[c]?.proofCheck,
      hours: w?.hours ?? null,
      per: w?.per || "week",
      weekly: w?.hours == null ? null : w.hours * PER_WEEK[w.per || "week"],
      workCheck: !!w?.check,
      months: ps?.months ?? null,
      psCheck: !!ps?.check,
      sch: SCHOLARSHIPS.filter((s) => s.hosts.includes(c)),
    };
  });
}

const name = (c, lang) => T[lang].countries[c];
const tc = (lang, on) => (on ? T[lang].toCheck : "");

// Cross-country questions. Each `answer` returns { short, items: [{ c, text }], note } in one language.
export const QUESTIONS = [
  {
    slug: "cheapest-countries-masters",
    q: { ar: "ما أرخص الدول لدراسة الماجستير بالإنجليزية؟", en: "Which countries are cheapest for an English-taught master's?" },
    answer(lang) {
      const r = rows().filter((x) => x.master.paid >= 3).sort((a, b) => a.master.med - b.master.med).slice(0, 12);
      const items = r.map((x) => ({
        c: x.c,
        text: lang === "ar"
          ? `${x.master.min === x.master.max ? `${n(x.master.med)} يورو في السنة لكل البرامج المدفوعة` : `${n(x.master.med)} يورو في السنة (الوسيط)، من ${n(x.master.min)} إلى ${n(x.master.max)} يورو`}، عدد البرامج المدفوعة ${n(x.master.paid)}${x.master.free ? `، و${progsAr(x.master.free)} بدون رسوم` : ""}`
          : `${x.master.min === x.master.max ? `€${n(x.master.med)} a year for every paid programme` : `€${n(x.master.med)} a year (median), from €${n(x.master.min)} to €${n(x.master.max)}`}, ${x.master.paid} paid programmes${x.master.free ? `, plus ${x.master.free} with no tuition fee` : ""}`,
      }));
      return {
        short: lang === "ar"
          ? `حسب برامج الماجستير المدفوعة على موقعنا، أقل وسيط للرسوم السنوية لغير الأوروبيين في ${name(r[0].c, lang)} (${n(r[0].master.med)} يورو)، ثم ${name(r[1].c, lang)} و${name(r[2].c, lang)}. وفي بعض الدول برامج بدون رسوم دراسية أصلاً.`
          : `Among the paid master's programmes on our site, the lowest median annual non-EU fee is in ${name(r[0].c, lang)} (€${n(r[0].master.med)}), then ${name(r[1].c, lang)} and ${name(r[2].c, lang)}. Some countries also have programmes with no tuition fee at all.`,
        items,
        note: lang === "ar"
          ? "الترتيب بالوسيط (نصف البرامج أرخص منه ونصفها أغلى) لبرامج الماجستير المدفوعة على موقعنا في كل دولة لها 3 برامج مدفوعة على الأقل، وليس متوسط كل جامعات الدولة. تكاليف المعيشة غير محسوبة هنا."
          : "Ranked by the median (half the programmes cost less, half more) of the paid master's programmes on our site, for countries with at least 3 paid programmes; it is not an average of all the country's universities. Living costs are not included here.",
        links: [["/countries", "قارن كل الدول", "Compare all countries"], ["/search/tuition-free-masters", "ماجستير بدون رسوم", "Tuition-free master's"]],
      };
    },
  },
  {
    slug: "tuition-free-study-abroad",
    q: { ar: "أين أدرس في الخارج بدون رسوم دراسية؟", en: "Where can I study abroad with no tuition fee?" },
    answer(lang) {
      const r = rows().filter((x) => x.master.free + x.bachelor.free > 0).sort((a, b) => (b.master.free + b.bachelor.free) - (a.master.free + a.bachelor.free));
      const tot = r.reduce((s, x) => s + x.master.free + x.bachelor.free, 0);
      const items = r.map((x) => ({
        c: x.c,
        text: lang === "ar"
          ? [x.master.free && progsOf(x.master.free, "ماجستير"), x.bachelor.free && progsOf(x.bachelor.free, "بكالوريوس")].filter(Boolean).join(" و") + " بدون رسوم دراسية"
          : [x.master.free && `${x.master.free} master's`, x.bachelor.free && `${x.bachelor.free} bachelor's`].filter(Boolean).join(" and ") + " with no tuition fee",
      }));
      return {
        short: lang === "ar"
          ? `على موقعنا ${progsAr(tot)} بالإنجليزية بدون رسوم دراسية لغير الأوروبيين في ${countriesAr(r.length)}، أكثرها في ${name(r[0].c, lang)}. قد توجد رسوم فصل إدارية صغيرة، وتظل تكاليف المعيشة وإثبات المال للتأشيرة مطلوبة.`
          : `Our site lists ${tot} English-taught programmes with no tuition fee for non-EU students in ${r.length} countries, most of them in ${name(r[0].c, lang)}. Small semester fees may apply, and you still need living costs and visa proof of funds.`,
        items,
        note: lang === "ar" ? "«بدون رسوم» يعني أن الرسوم الدراسية صفر في المصدر الرسمي؛ رسوم الفصل الإدارية مذكورة في صفحة كل برنامج." : "\"No tuition fee\" means the official source states zero tuition; semester or administration fees are on each programme page.",
        links: [["/search/tuition-free-masters", "ماجستير بدون رسوم", "Tuition-free master's"], ["/search/tuition-free-bachelors", "بكالوريوس بدون رسوم", "Tuition-free bachelor's"]],
      };
    },
  },
  {
    slug: "work-while-studying-abroad",
    q: { ar: "كم ساعة يمكن للطالب العمل أثناء الدراسة في الخارج؟", en: "How many hours can a student work while studying abroad?" },
    answer(lang) {
      const all = rows();
      const r = all.filter((x) => x.weekly !== null).sort((a, b) => b.weekly - a.weekly);
      const none = all.filter((x) => x.weekly === null);
      const items = r.map((x) => ({ c: x.c, text: `${x.hours} ${UNIT[lang][x.per]}${tc(lang, x.workCheck)} — ${STUDY_WORK[x.c][lang]}` }))
        .concat(none.filter((x) => STUDY_WORK[x.c]).map((x) => ({ c: x.c, text: (lang === "ar" ? "لا يوجد حد ساعات ثابت في المصدر: " : "No fixed hour cap in the source: ") + STUDY_WORK[x.c][lang] })));
      return {
        short: lang === "ar"
          ? `يختلف من دولة لأخرى. أعلى حد أسبوعي بين الدول على موقعنا في ${name(r[0].c, lang)} (${r[0].hours} ${UNIT[lang][r[0].per]})، وأغلب الدول تسمح بحوالي 20 ساعة أسبوعياً أثناء الدراسة ودوام كامل في العطلات. بعض الدول تحتاج تصريح عمل أو موافقة مسبقة.`
          : `It depends on the country. The highest weekly cap among the countries on our site is in ${name(r[0].c, lang)} (${r[0].hours} ${UNIT[lang][r[0].per]}); most allow around 20 hours a week in term and full time in holidays. Some need a work permit or prior approval.`,
        items,
        note: lang === "ar" ? "الحد مكتوب بنفس الوحدة التي يستخدمها المصدر الرسمي (أسبوع أو شهر أو سنة)." : "Each cap is written in the unit the official source uses (week, month or year).",
        links: [["/countries", "جدول المقارنة", "Comparison table"]],
      };
    },
  },
  {
    slug: "stay-after-graduation",
    q: { ar: "ما الدول التي تسمح بالبقاء بعد التخرج للبحث عن عمل؟", en: "Which countries let you stay after graduation to look for work?" },
    answer(lang) {
      const r = rows().filter((x) => x.months).sort((a, b) => b.months - a.months);
      const items = r.map((x) => ({
        c: x.c,
        text: `${lang === "ar" ? monthsAr(x.months) : monthsEn(x.months)}${tc(lang, x.psCheck)} — ${POST_STUDY[x.c].name[lang]}${POST_STUDY[x.c].canWork === false ? (lang === "ar" ? " (بدون حق العمل أثناءها)" : " (no right to work during it)") : ""}`,
      }));
      return {
        short: lang === "ar"
          ? `${countriesAr(r.length)} من الدول على موقعنا تعطي الخريجين إقامة بعد التخرج للبحث عن عمل أو بدء مشروع. أطولها في ${name(r[0].c, lang)} (${monthsAr(r[0].months)})${r[1] ? ` ثم ${name(r[1].c, lang)} (${monthsAr(r[1].months)})` : ""}.`
          : `${r.length} of the countries on our site give graduates a residence permit to look for work or start a business. The longest is in ${name(r[0].c, lang)} (${monthsEn(r[0].months)})${r[1] ? `, then ${name(r[1].c, lang)} (${monthsEn(r[1].months)})` : ""}.`,
        items,
        note: lang === "ar" ? "المدة هي الحد الأقصى في المصدر الرسمي، والشروط (التقديم قبل انتهاء الإقامة، إثبات المال) في صفحة كل دولة." : "Lengths are the maximum in the official source; conditions (applying before your permit ends, funds) are on each country page.",
        links: [["/after-graduation", "البقاء بعد التخرج", "Staying after graduation"]],
      };
    },
  },
  {
    slug: "proof-of-funds-student-visa",
    q: { ar: "كم المبلغ المطلوب في البنك لتأشيرة الدراسة؟", en: "How much money do I need in the bank for a student visa?" },
    answer(lang) {
      const r = rows().filter((x) => x.proof).sort((a, b) => a.proof - b.proof);
      const items = r.map((x) => ({ c: x.c, text: (lang === "ar" ? `حوالي ${n(x.proof)} يورو شهرياً — ` : `About €${n(x.proof)} a month — `) + COSTS[x.c].proof[lang] + tc(lang, x.proofCheck) }));
      return {
        short: lang === "ar"
          ? `كل دولة تحدد مبلغاً شهرياً تثبت أنك تملكه لمدة الدراسة (غالباً سنة). أقل مبلغ بين الدول على موقعنا في ${name(r[0].c, lang)} (حوالي ${n(r[0].proof)} يورو شهرياً) وأعلاه في ${name(r[r.length - 1].c, lang)} (حوالي ${n(r[r.length - 1].proof)} يورو شهرياً). في ألمانيا مثلاً يكون في حساب بنكي مغلق.`
          : `Each country sets a monthly amount you must show for your stay (usually a year). The lowest among the countries on our site is ${name(r[0].c, lang)} (about €${n(r[0].proof)} a month) and the highest ${name(r[r.length - 1].c, lang)} (about €${n(r[r.length - 1].proof)} a month). In Germany, for example, it goes into a blocked account.`,
        items,
        note: lang === "ar" ? "المبالغ بدون الرسوم الدراسية، ومحوّلة لليورو عند الحاجة؛ المصدر الرسمي لكل دولة في صفحتها." : "Amounts exclude tuition and are converted to euros where needed; each country's official source is on its page.",
        links: [["/visa", "تأشيرة الدراسة من بلدك", "Student visa from your country"]],
      };
    },
  },
  {
    slug: "cheapest-living-costs",
    q: { ar: "ما الدول الأقل في تكاليف المعيشة للطلاب؟", en: "Which countries have the lowest living costs for students?" },
    answer(lang) {
      const r = rows().filter((x) => x.living && x.livingN >= 5).sort((a, b) => a.living - b.living);
      const items = r.slice(0, 15).map((x) => ({ c: x.c, text: lang === "ar" ? `حوالي ${n(x.living)} يورو شهرياً` : `About €${n(x.living)} a month` }));
      return {
        short: lang === "ar"
          ? `حسب متوسط تكلفة المعيشة الشهرية في مدن البرامج على موقعنا، الأقل في ${name(r[0].c, lang)} (حوالي ${n(r[0].living)} يورو) ثم ${name(r[1].c, lang)} و${name(r[2].c, lang)}.`
          : `By the average monthly living cost in the cities of the programmes on our site, the lowest is ${name(r[0].c, lang)} (about €${n(r[0].living)}), then ${name(r[1].c, lang)} and ${name(r[2].c, lang)}.`,
        items,
        note: lang === "ar" ? "متوسط تقريبي لتكلفة المعيشة المذكورة في صفحات البرامج، للدول التي لها 5 برامج على الأقل فيها هذا الرقم، ويختلف حسب المدينة والسكن." : "A rough average of the living costs given on the programme pages, for countries with at least 5 programmes that give this figure; it varies by city and housing.",
        links: [["/cities", "المدن", "Cities"], ["/housing", "السكن", "Housing"]],
      };
    },
  },
  {
    slug: "fully-funded-scholarships-arab-students",
    q: { ar: "ما المنح الممولة بالكامل المتاحة للطلاب العرب؟", en: "Which fully funded scholarships are open to Arab students?" },
    answer(lang) {
      const items = SCHOLARSHIPS.map((s) => ({ id: s.id, text: `${s.name[lang]} — ${s.summary[lang]}` }));
      return {
        short: lang === "ar"
          ? `على موقعنا ${SCHOLARSHIPS.length} منحة ممولة بالكامل مفتوحة للطلاب العرب (تغطي الرسوم ومصروفاً شهرياً)، منها منح حكومية مثل تشيفنينغ في بريطانيا ومنح تركيا وماليزيا، ومنحة إيراسموس موندوس الأوروبية. لكل منحة دول مؤهلة وموعد خاص.`
          : `Our site lists ${SCHOLARSHIPS.length} fully funded scholarships open to Arab students (tuition plus a monthly allowance), including government awards such as Chevening in the UK, Türkiye and Malaysia scholarships, and the EU's Erasmus Mundus. Each has its own eligible countries and deadline.`,
        items,
        note: lang === "ar" ? "اختر جنسيتك في صفحة المنح لترى المنح المفتوحة لك فقط." : "Pick your nationality on the scholarships page to see only those open to you.",
        links: [["/scholarships", "كل المنح", "All scholarships"]],
      };
    },
  },
];

export const questionBySlug = (slug) => QUESTIONS.find((q) => q.slug === slug);

// Per-country questions for the country page (FAQ block + FAQPage structured data).
export function countryFaq(c, lang) {
  const x = rows().find((r) => r.c === c);
  if (!x) return [];
  const nm = name(c, lang);
  const out = [];
  const fee = (d, lvAr, lvEn) => {
    if (!d.count) return null;
    if (lang === "ar") {
      const parts = [];
      if (d.free) parts.push(`${progsAr(d.free)} بدون رسوم دراسية`);
      if (d.min !== null) parts.push(`الرسوم السنوية لغير الأوروبيين في البرامج المدفوعة من ${n(d.min)} إلى ${n(d.max)} يورو، والوسيط ${n(d.med)} يورو`);
      if (d.unknown) parts.push(`و${progsAr(d.unknown)} رسومها غير منشورة`);
      return `على موقعنا ${progsOf(d.count, lvAr)} بالإنجليزية في ${nm}: ${parts.join("، ")}.`;
    }
    const parts = [];
    if (d.free) parts.push(`${d.free} with no tuition fee`);
    if (d.min !== null) parts.push(`annual non-EU fees for paid programmes from €${n(d.min)} to €${n(d.max)}, median €${n(d.med)}`);
    if (d.unknown) parts.push(`${d.unknown} with no published fee`);
    return `Our site lists ${d.count} English-taught ${lvEn} in ${nm}: ${parts.join("; ")}.`;
  };
  const m = fee(x.master, "ماجستير", "master's programmes");
  if (m) out.push({ q: lang === "ar" ? `كم تكلفة دراسة الماجستير في ${nm}؟` : `How much does a master's cost in ${nm}?`, a: m });
  const b = fee(x.bachelor, "بكالوريوس", "bachelor's programmes");
  if (b) out.push({ q: lang === "ar" ? `كم تكلفة دراسة البكالوريوس في ${nm}؟` : `How much does a bachelor's cost in ${nm}?`, a: b });
  if (x.living && x.livingN >= 3) out.push({ q: lang === "ar" ? `كم تكلفة المعيشة للطالب في ${nm}؟` : `What are student living costs in ${nm}?`, a: lang === "ar" ? `حوالي ${n(x.living)} يورو شهرياً في المتوسط حسب مدن البرامج على موقعنا، وتختلف حسب المدينة والسكن.` : `About €${n(x.living)} a month on average across the cities of our programmes; it varies by city and housing.` });
  if (COSTS[c]) out.push({ q: lang === "ar" ? `كم المبلغ المطلوب في البنك لتأشيرة الدراسة في ${nm}؟` : `How much money do I need for a ${nm} student visa?`, a: COSTS[c].proof[lang] + tc(lang, x.proofCheck) });
  if (STUDY_WORK[c]) out.push({ q: lang === "ar" ? `هل يمكن العمل أثناء الدراسة في ${nm}؟` : `Can I work while studying in ${nm}?`, a: STUDY_WORK[c][lang] + tc(lang, x.workCheck) });
  if (POST_STUDY[c]) {
    const ps = POST_STUDY[c];
    out.push({
      q: lang === "ar" ? `هل يمكن البقاء في ${nm} بعد التخرج؟` : `Can I stay in ${nm} after graduation?`,
      a: ps.months
        ? (lang === "ar" ? `نعم: ${ps.name.ar}، لمدة تصل إلى ${monthsAr(ps.months)}. ${ps.work?.ar || ""}` : `Yes: ${ps.name.en}, for up to ${monthsEn(ps.months)}. ${ps.work?.en || ""}`) + tc(lang, x.psCheck)
        : `${ps.name[lang]}. ${ps.work?.[lang] || ""}`.trim() + tc(lang, x.psCheck),
    });
  }
  if (x.sch.length) out.push({ q: lang === "ar" ? `هل توجد منح ممولة بالكامل للدراسة في ${nm}؟` : `Are there fully funded scholarships for ${nm}?`, a: (lang === "ar" ? `نعم، على موقعنا ${x.sch.length === 1 ? "منحة واحدة" : x.sch.length === 2 ? "منحتان" : `${x.sch.length} منح`} ممولة بالكامل مفتوحة للعرب: ` : `Yes, our site lists ${x.sch.length} fully funded scholarship${x.sch.length === 1 ? "" : "s"} open to Arab students: `) + x.sch.map((s) => s.name[lang]).join(lang === "ar" ? "، " : ", ") + "." });
  return out;
}

export const Q_TEXT = {
  ar: {
    hub: "أسئلة شائعة عن الدراسة في الخارج",
    hubLead: "إجابات قصيرة على أكثر الأسئلة التي يبحث عنها الطلاب العرب، محسوبة من بيانات البرامج والمصادر الرسمية على موقعنا، وتتحدث تلقائياً.",
    short: "الإجابة باختصار",
    details: "التفاصيل حسب الدولة",
    more: "اقرأ أيضاً",
    countryFaq: "أسئلة شائعة",
    all: "كل الأسئلة",
    updated: "الأرقام محسوبة من بيانات الموقع وقت بناء الصفحة.",
  },
  en: {
    hub: "Common questions about studying abroad",
    hubLead: "Short answers to the questions Arab students search for most, computed from the programme data and official sources on our site, and updated automatically.",
    short: "Short answer",
    details: "By country",
    more: "Read also",
    countryFaq: "Common questions",
    all: "All questions",
    updated: "Figures are computed from the site's data when the page is built.",
  },
};
