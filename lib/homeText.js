// Home page text (Egyptian Arabic, simple), and the header menu labels.
export const HOME = {
  ar: {
    title: "ادرس في أوروبا بالإنجليزي وبأقل تكلفة",
    lead: (n, c) => `${n} برنامج في جامعات حكومية في ${c} دولة، بالرسوم والمواعيد والشروط من المصدر الرسمي.`,
    askLabel: "اسأل عن أي حاجة في الدراسة بره",
    askPh: "مثلاً: ماجستير ببلاش",
    askBtn: "اسأل",
    or: "أو",
    quiz: "جاوب على 5 أسئلة ونطلعلك البرامج اللي تناسبك",
    stats: (n, free, c) => [[n, "برنامج"], [free, "من غير رسوم دراسية"], [c, "دولة"]],
    promises: [
      ["src", "من المصدر الرسمي بس", "كل معلومة معاها لينك صفحة الجامعة أو الجهة الرسمية."],
      ["free", "ببلاش ومن غير حساب", "كل الأدوات مجانية، وقائمتك محفوظة على موبايلك."],
      ["honest", "مش بنخمّن", "لو الجامعة ما نشرتش معلومة، بنقول كده بوضوح."],
    ],
    journeyTitle: "رحلتك خطوة بخطوة",
    journeyLead: "من اختيار البرنامج لحد ما تخلص وتشتغل.",
    step: (i) => `الخطوة ${i}`,
    more: "كل أدوات الخطوة دي",
    destTitle: "اختار وجهتك",
    destAll: "قارن الدول كلها",
  },
  en: {
    title: "Study in Europe in English, for less",
    lead: (n, c) => `${n} programmes at public universities in ${c} countries, with fees, deadlines and requirements from the official source.`,
    askLabel: "Ask anything about studying abroad",
    askPh: "e.g. free master's in Germany",
    askBtn: "Ask",
    or: "or",
    quiz: "Answer 5 questions and see programmes that fit you",
    stats: (n, free, c) => [[n, "programmes"], [free, "tuition-free"], [c, "countries"]],
    promises: [
      ["src", "Official sources only", "Every fact links to the university's or authority's own page."],
      ["free", "Free, no account", "Every tool is free, and your list stays on your phone."],
      ["honest", "We don't guess", "If a university doesn't publish something, we say so."],
    ],
    journeyTitle: "Your journey, step by step",
    journeyLead: "From choosing a programme to finishing and finding work.",
    step: (i) => `Step ${i}`,
    more: "All tools for this step",
    destTitle: "Pick your destination",
    destAll: "Compare all countries",
  },
};

export const MENU = {
  ar: { programmes: "دوّر على برنامج", scholarships: "المنح", countries: "الدول", all: "كل الأدوات", ask: "اسأل المساعد", list: "قائمتي", menu: "القائمة", close: "اقفل", contact: "تواصل معنا", toolsPage: "صفحة الأدوات" },
  en: { programmes: "Find a programme", scholarships: "Scholarships", countries: "Countries", all: "All tools", ask: "Ask the assistant", list: "My list", menu: "Menu", close: "Close", contact: "Contact us", toolsPage: "Tools page" },
};
