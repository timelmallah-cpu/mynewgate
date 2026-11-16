// Home page text (Egyptian Arabic, simple), and the header menu labels.
import { progsAr } from "./arCount";
export const HOME = {
  ar: {
    title: "ادرس في أوروبا بالإنجليزية وبأقل تكلفة",
    lead: (n, c) => `${progsAr(n)} في جامعات حكومية في ${c} دولة، بالرسوم والمواعيد والشروط من المصدر الرسمي.`,
    askLabel: "اسأل عن أي شيء في الدراسة بالخارج",
    askPh: "مثلاً: ماجستير مجاني",
    askBtn: "اسأل",
    or: "أو",
    quiz: "أجب عن 5 أسئلة لتظهر لك البرامج المناسبة",
    stats: (n, free, c) => [[n, "برنامج"], [free, "بدون رسوم دراسية"], [c, "دولة"]],
    promises: [
      ["src", "من المصدر الرسمي فقط", "كل معلومة معها رابط صفحة الجامعة أو الجهة الرسمية."],
      ["free", "المعلومات مجانية للجميع", "كل البرامج والمنح والأدلة متاحة بدون حساب، وقائمتك محفوظة على هاتفك."],
      ["honest", "لا نخمّن", "إذا لم تنشر الجامعة معلومة ما، نقول ذلك بوضوح."],
    ],
    vocTitle: "لا تريد الجامعة؟ تدريب مهني براتب في ألمانيا",
    vocText: "في التدريب المهني (Ausbildung) تعمل في شركة وتدرس في مدرسة مهنية، وتأخذ راتباً شهرياً من أول يوم، وفي النهاية شهادة مهنية معترف بها. يحتاج ألمانية بمستوى B1.",
    vocBtn: "دليل التدريب المهني",
    journeyTitle: "رحلتك خطوة بخطوة",
    journeyLead: "من اختيار البرنامج حتى التخرج والعمل.",
    step: (i) => `الخطوة ${i}`,
    more: "كل أدوات هذه الخطوة",
    destTitle: "اختر وجهتك",
    destAll: "قارن الدول كلها",
  },
  en: {
    title: "Study in Europe in English, for less",
    lead: (n, c) => `${n.toLocaleString("en-US")} programmes at public universities in ${c} countries, with fees, deadlines and requirements from the official source.`,
    askLabel: "Ask anything about studying abroad",
    askPh: "e.g. free master's in Germany",
    askBtn: "Ask",
    or: "or",
    quiz: "Answer 5 questions and see programmes that fit you",
    stats: (n, free, c) => [[n, "programmes"], [free, "tuition-free"], [c, "countries"]],
    promises: [
      ["src", "Official sources only", "Every fact links to the university's or authority's own page."],
      ["free", "The information is free for everyone", "Every programme, scholarship and guide is open without an account, and your list stays on your phone."],
      ["honest", "We don't guess", "If a university doesn't publish something, we say so."],
    ],
    vocTitle: "Not after university? Paid vocational training in Germany",
    vocText: "In an Ausbildung you work at a company and study at a vocational school, earn a monthly allowance from day one, and finish with a recognised qualification. It needs German at B1.",
    vocBtn: "Vocational training guide",
    journeyTitle: "Your journey, step by step",
    journeyLead: "From choosing a programme to finishing and finding work.",
    step: (i) => `Step ${i}`,
    more: "All tools for this step",
    destTitle: "Pick your destination",
    destAll: "Compare all countries",
  },
};

export const MENU = {
  ar: { programmes: "ابحث عن برنامج", scholarships: "المنح", countries: "الدول", voc: "التدريب المهني", all: "كل الأدوات", ask: "اسأل المساعد", list: "قائمتي", account: "حسابي", menu: "القائمة", close: "إغلاق", contact: "تواصل معنا", toolsPage: "صفحة الأدوات" },
  en: { programmes: "Find a programme", scholarships: "Scholarships", countries: "Countries", voc: "Vocational training", all: "All tools", ask: "Ask the assistant", list: "My list", account: "My account", menu: "Menu", close: "Close", contact: "Contact us", toolsPage: "Tools page" },
};
