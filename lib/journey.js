// The student's journey, used to organise the home page, the tools page and the site menu.
// Each step lists tool ids from lib/tools.js; "home" are the ones shown on the home page.
export const STEPS = [
  { id: "choose", tools: ["quiz", "countries", "cities", "compare", "study"], home: ["quiz", "countries", "cities"],
    ar: { title: "اختار برنامجك ودولتك", text: "دوّر على البرامج اللي تناسب تخصصك وميزانيتك، وقارن الدول والمدن." },
    en: { title: "Choose a programme and country", text: "Find programmes that fit your field and budget, and compare countries and cities." } },
  { id: "fund", tools: ["sch", "cost"], home: ["sch", "cost"],
    ar: { title: "دبّر التمويل", text: "منح بتغطي الرسوم والمعيشة، وحساب التكلفة الحقيقية قبل ما تقدّم." },
    en: { title: "Plan the money", text: "Scholarships that cover fees and living costs, and the real cost before you apply." } },
  { id: "prepare", tools: ["english", "noielts", "language", "institutes", "gpa", "cert", "letter", "legal", "docs"], home: ["english", "letter", "legal"],
    ar: { title: "جهّز أوراقك", text: "اللغة، وتقديرك، وخطاب الدافع، وتصديق الشهادات." },
    en: { title: "Get your documents ready", text: "Language, grades, motivation letter and legalising certificates." } },
  { id: "go", tools: ["planner", "guide", "visa", "housing"], home: ["planner", "visa", "housing"],
    ar: { title: "قدّم وسافر", text: "مواعيد التقديم، والتأشيرة، والسكن في مدينتك." },
    en: { title: "Apply and travel", text: "Application dates, the visa and housing in your city." } },
  { id: "after", tools: ["after", "ausb"], home: ["after"],
    ar: { title: "بعد التخرج", text: "تقعد تدور على شغل قد إيه، وتحوّل لإقامة عمل إزاي." },
    en: { title: "After graduation", text: "How long you can stay to look for work, and how to switch to a work permit." } },
];

// Tools that help at every step.
export const ALWAYS = ["ask", "list", "glossary", "install"];
export const ALWAYS_TEXT = { ar: "في كل خطوة", en: "At every step" };
