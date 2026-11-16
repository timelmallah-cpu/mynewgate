// Studying after 30 or 40 (/after-30): where age matters, and where experience helps. Official sources only.
// The lists of programmes that ask for work experience or set an age limit for housing are computed from the data.
// Reviewed 2026-11-16.
import { COSTS } from "./costs";

export const A30_REVIEWED = "2026-11-16";

export const A30_SRC = {
  daadAge: "https://www.daad.de/en/study-and-research-in-germany/scholarships/important-information-for-scholarship-applicants/",
  epos: "https://static.daad.de/media/daad_de/pdfs_nicht_barrierefrei/in-deutschland-studieren-forschen-lehren/epos_faq_en.pdf",
  erasmus: "https://erasmusplus.am/?p=698",
  insurance: "https://www.daad.de/en/studying-in-germany/living-in-germany/health-insurance/",
  training: "https://www.make-it-in-germany.com/en/visa-residence/types/training",
  opportunity: "https://www.make-it-in-germany.com/en/visa-residence/types/jobseekers",
  family: "https://www.auswaertiges-amt.de/en/visa-service/buergerservice/faq/studium/606700",
  austria: COSTS.at?.proofSrc,
};

// Where age changes something. country: flag code; check: true = shown as "للتحقق".
export const AGE_RULES = [
  {
    country: "de", src: A30_SRC.insurance,
    ar: { what: "التأمين الصحي للطلاب في ألمانيا", rule: "سعر الطالب المخفض في التأمين الحكومي (حوالي 110 يورو في الشهر حسب DAAD) لمن هم أقل من 30 سنة. بعد 30 تحتاج تأميناً اختيارياً بسعر أعلى أو تأميناً خاصاً، فاحسب الفرق في ميزانيتك." },
    en: { what: "Student health insurance in Germany", rule: "The reduced student rate in public insurance (about €110 a month per the DAAD) is for students under 30. After 30 you need voluntary public insurance at a higher rate or private insurance, so budget for the difference." },
  },
  {
    country: "at", src: A30_SRC.austria,
    ar: { what: "إثبات المال في النمسا", rule: "المبلغ المطلوب أعلى من سن 24: 722.58 يورو في الشهر تحت 24، و1,308.39 يورو من 24 فما فوق (2026)." },
    en: { what: "Proof of funds in Austria", rule: "The amount is higher from age 24: €722.58 a month under 24 and €1,308.39 from 24 (2026)." },
  },
  {
    country: "de", src: A30_SRC.training,
    ar: { what: "تأشيرة البحث عن مكان تدريب مهني في ألمانيا", rule: "لمن هم أقل من 35 سنة فقط. صفحة Make it in Germany لا تذكر حداً للسن في تأشيرة التدريب نفسها لمن معه عقد تدريب." },
    en: { what: "Germany's visa to look for a vocational training place", rule: "Only for applicants under 35. Make it in Germany lists no age limit for the training visa itself when you already have a training contract." },
  },
  {
    country: "de", src: A30_SRC.opportunity,
    ar: { what: "بطاقة الفرص (Chancenkarte) في ألمانيا للبحث عن عمل", rule: "السن جزء من نظام النقاط: نقطتان حتى 35 سنة، ونقطة واحدة من 35 إلى 40. بعد 40 تعوض بالخبرة واللغة." },
    en: { what: "Germany's Opportunity Card (Chancenkarte) to look for work", rule: "Age is part of the points system: two points up to 35, one point from 35 to 40. After 40 you make up the points with experience and language." },
  },
  {
    country: "de", src: A30_SRC.epos,
    ar: { what: "منحة DAAD EPOS", rule: "لا يوجد حد للسن، لكن آخر شهادة جامعية يجب ألا يكون عمرها أكثر من 6 سنوات، ومطلوب سنتان خبرة عمل بعد البكالوريوس." },
    en: { what: "DAAD EPOS scholarship", rule: "No age limit, but your latest degree should not be older than 6 years, and you need two years of work experience after the bachelor's." },
  },
];

export const A30_TEXT = {
  ar: {
    title: "الدراسة بعد الثلاثين والأربعين",
    lead: "لو عندك سنوات خبرة وعايز تغير مجالك أو ترجع للدراسة، فالسن في الغالب ليس عائقاً. هنا الأماكن التي يفرق فيها السن فعلاً، والبرامج والمنح التي تعتبر الخبرة ميزة.",
    noLimitTitle: "هل يوجد حد أقصى للسن؟",
    noLimit: [
      "شروط القبول في برامج الماجستير والبكالوريوس على موقعنا مبنية على الشهادة والدرجات واللغة، ولم نجد فيها حداً أقصى للسن.",
      "منح DAAD ليس لها حد ثابت للسن عادة، إلا في برامج يطلبها شريك دولي، وبعضها يحدد عمر آخر شهادة. ومنح Erasmus Mundus ليس لها حد للسن حسب مكتب Erasmus+ الوطني.",
    ],
    rulesTitle: "أين يفرق السن؟",
    colWhat: "الموضوع", colRule: "القاعدة",
    housingTitle: "سكن جامعي بشرط سن",
    housingLead: "بعض السكن الجامعي له حد للسن، فراجع شروط السكن قبل ما تعتمد عليه:",
    expTitle: "برامج تعتبر الخبرة ميزة أو شرطاً",
    expLead: (n) => `${n} برنامج على موقعنا يذكر خبرة العمل في شروط القبول:`,
    schTitle: "منح تطلب خبرة عمل",
    familyTitle: "لو معك أسرة",
    family: [
      "في ألمانيا، يقدر الزوج أو الزوجة والأطفال يلحقوا بالطالب بتأشيرة لم شمل أسرة من السفارة، وعادة بشرط أن يكون الطالب معه تصريح إقامة، وأن يكون الزواج موجوداً عند منح التصريح، وأن تزيد مدة الإقامة عن سنة، وأن يقدر يصرف على نفسه وأسرته من غير مساعدات حكومية.",
      "باقي الدول لها قواعدها، وغالباً تطلب مبلغاً أكبر في إثبات المال لكل فرد. اسأل سفارة الدولة قبل ما تقدّم.",
    ],
    moneyTitle: "حساباتك المالية",
    money: [
      "غالباً ستترك عملك أو تقلله، فاحسب مصاريف السنة كاملة: الرسوم، وإثبات المال، والتأمين (أعلى بعد 30 في ألمانيا)، والسكن.",
      "ساعات العمل المسموحة للطلاب محدودة في أغلب الدول، فلا تعتمد عليها في تغطية مصاريف أسرة.",
      "بعد التخرج، كثير من الدول تعطيك مدة للبحث عن عمل، وخبرتك السابقة تفيدك فيها.",
    ],
    tipsTitle: "نصائح",
    tips: [
      "اكتب في خطاب الدافع لماذا تغير مجالك الآن، وكيف تربط خبرتك بالبرنامج.",
      "ابحث عن برامج تطلب خبرة، مثل برامج MBA والصحة العامة، فخبرتك فيها ميزة.",
      "لو آخر شهادة لك قديمة، تأكد من شروط المنح التي تحدد عمر الشهادة.",
    ],
    source: "المصدر", toCheck: " (للتحقق)", progLink: "صفحة البرنامج",
    links: [["/countries", "قارن الدول (التكاليف والعمل وما بعد التخرج)"], ["/scholarships", "المنح"], ["/motivation-letter", "خطاب الدافع والسيرة الذاتية"], ["/after-graduation", "البقاء بعد التخرج"]],
    warn: "المعلومات من مصادر رسمية وقت المراجعة، والقواعد تتغير. تأكد من الجهة الرسمية قبل أي قرار.",
    reviewed: `آخر مراجعة: ${A30_REVIEWED}`,
  },
  en: {
    title: "Studying after 30 or 40",
    lead: "If you have years of experience and want to change field or return to study, age is usually not a barrier. Here are the places where age really matters, and the programmes and scholarships that treat experience as an advantage.",
    noLimitTitle: "Is there an upper age limit?",
    noLimit: [
      "Admission to the master's and bachelor's programmes on our site is based on your degree, grades and language; we found no upper age limit in them.",
      "DAAD scholarships usually have no fixed age limit, except programmes where an international partner asks for one, and some limit how old your last degree can be. Erasmus Mundus scholarships have no age limit, per the National Erasmus+ Office.",
    ],
    rulesTitle: "Where age matters",
    colWhat: "Topic", colRule: "Rule",
    housingTitle: "University housing with an age limit",
    housingLead: "Some university housing has an age limit, so check the conditions before relying on it:",
    expTitle: "Programmes where experience is an advantage or a requirement",
    expLead: (n) => `${n} programmes on our site mention work experience in their admission requirements:`,
    schTitle: "Scholarships that ask for work experience",
    familyTitle: "If you have a family",
    family: [
      "In Germany, a spouse and children can join a student with a family reunification visa from the embassy, usually if the student holds a residence permit, the marriage existed when it was granted, the stay is expected to exceed a year, and the student can support the family without public funds.",
      "Other countries have their own rules and usually ask for more proof of funds for each family member. Ask the country's embassy before you apply.",
    ],
    moneyTitle: "Your finances",
    money: [
      "You will probably leave or reduce your job, so budget for the whole year: fees, proof of funds, insurance (higher after 30 in Germany) and housing.",
      "Student work hours are limited in most countries, so don't count on them to cover a family's costs.",
      "After graduation, many countries give you time to look for work, and your earlier experience helps.",
    ],
    tipsTitle: "Tips",
    tips: [
      "Explain in your motivation letter why you are changing field now and how your experience fits the programme.",
      "Look for programmes that ask for experience, such as MBA and public health programmes, where your experience is an advantage.",
      "If your last degree is old, check scholarships that limit how old the degree can be.",
    ],
    source: "Source", toCheck: " (to verify)", progLink: "Programme page",
    links: [["/countries", "Compare countries (costs, work, after graduation)"], ["/scholarships", "Scholarships"], ["/motivation-letter", "Motivation letter and CV"], ["/after-graduation", "Staying after graduation"]],
    warn: "This information comes from official sources at the time of review, and rules change. Check with the official body before any decision.",
    reviewed: `Last reviewed: ${A30_REVIEWED}`,
  },
};

// Programme rows that mention work experience as a requirement or advantage (not "not required").
export function needsExperience(p) {
  const t = p.other || "";
  return /خبرة|خبره/.test(t) && !/(غير مطلوبة|ليست شرطاً|ليست شرطا|لا تشترط)/.test(t);
}
// Programme rows whose housing note sets an age limit.
export function housingAgeLimit(p) {
  return /(العمر \d+|دون \d\d عاماً|تحت سن|أقل من \d\d سنة)/.test(p.housing || "");
}
