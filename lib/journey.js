// The student's journey, used to organise the home page, the tools page and the site menu.
// Each step lists tool ids from lib/tools.js; "home" are the ones shown on the home page.
export const STEPS = [
  { id: "choose", tools: ["quiz", "countries", "cities", "compare", "study"], home: ["quiz", "countries", "cities"],
    ar: { title: "اختر برنامجك ودولتك", text: "ابحث عن البرامج التي تناسب تخصصك وميزانيتك، وقارن بين الدول والمدن." },
    en: { title: "Choose a programme and country", text: "Find programmes that fit your field and budget, and compare countries and cities." } },
  { id: "fund", tools: ["sch", "cost"], home: ["sch", "cost"],
    ar: { title: "خطط للتمويل", text: "منح تغطي الرسوم والمعيشة، وحساب التكلفة الحقيقية قبل التقديم." },
    en: { title: "Plan the money", text: "Scholarships that cover fees and living costs, and the real cost before you apply." } },
  { id: "prepare", tools: ["english", "noielts", "language", "institutes", "gpa", "cert", "letter", "email", "legal", "docs"], home: ["english", "letter", "legal"],
    ar: { title: "جهّز أوراقك", text: "اللغة، والمعدل، وخطاب الدافع، وتصديق الشهادات." },
    en: { title: "Get your documents ready", text: "Language, grades, motivation letter and legalising certificates." } },
  { id: "go", tools: ["planner", "guide", "visa", "housing"], home: ["planner", "visa", "housing"],
    ar: { title: "قدّم وسافر", text: "مواعيد التقديم، والتأشيرة، والسكن في مدينتك." },
    en: { title: "Apply and travel", text: "Application dates, the visa and housing in your city." } },
  { id: "after", tools: ["after", "ausb"], home: ["after"],
    ar: { title: "بعد التخرج", text: "كم تبقى للبحث عن عمل، وكيف تنتقل إلى إقامة عمل." },
    en: { title: "After graduation", text: "How long you can stay to look for work, and how to switch to a work permit." } },
];

// Tools that help at every step.
export const ALWAYS = ["ask", "list", "glossary", "install"];
export const ALWAYS_TEXT = { ar: "في كل خطوة", en: "At every step" };
