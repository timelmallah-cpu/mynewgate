// Text for the English score checker.
import { progsAr } from "./arCount";
export const EC_TEXT = {
  ar: {
    title: "هل درجتك في الإنجليزية تكفي؟",
    lead: "اكتب درجتك في IELTS أو TOEFL، ونعرض لك البرامج التي شرطها المنشور يساوي درجتك أو أقل منها.",
    test: "الاختبار", score: "درجتك الكلية", level: "المستوى", anyLevel: "كل المستويات", country: "الدولة", anyCountry: "كل الدول",
    ieltsHint: "من 4 إلى 9", toeflHint: "من 30 إلى 120 (المقياس القديم)",
    meets: (n) => `${progsAr(n)}: الشرط المنشور يساوي درجتك أو أقل`,
    above: (n) => `${progsAr(n)}: يُطلب درجة أعلى`,
    other: (n) => `${progsAr(n)}: الشرط بصيغة أخرى (اختبار آخر أو مستوى B2 أو C1)`,
    none: (n) => `${progsAr(n)}: لا يوجد رقم منشور في المصدر`,
    req: "المطلوب", need: (g) => `ينقصك ${g}`,
    empty: "اكتب درجتك لترى النتيجة.",
    bad: "الدرجة خارج النطاق المسموح لهذا الاختبار.",
    loading: "جارٍ التحميل…", failed: "تعذر تحميل البيانات. أعد تحميل الصفحة.",
    open: "صفحة البرنامج", verify: "للتحقق",
    notes: [
      "نقارن بالدرجة الكلية فقط. كثير من الجامعات تشترط أيضاً حداً أدنى لكل قسم (مثل الكتابة)، فاقرأ نص الشرط في صفحة البرنامج.",
      "اختبار TOEFL iBT تغيّر مقياسه في يناير 2026 إلى درجات من 1 إلى 6. الأرقام هنا بالمقياس القديم (حتى 120)، فإن كانت نتيجتك بالمقياس الجديد اسأل الجامعة عن المقابل.",
      "نتائج IELTS وTOEFL صالحة عادةً سنتين، وبعض الجامعات تعفي من درس بالإنجليزية. الشرط الرسمي في صفحة البرنامج هو المرجع.",
    ],
  },
  en: {
    title: "Is your English score enough?",
    lead: "Enter your IELTS or TOEFL score and we show the programmes whose published minimum is the same as your score or lower.",
    test: "Test", score: "Your overall score", level: "Level", anyLevel: "All levels", country: "Country", anyCountry: "All countries",
    ieltsHint: "4 to 9", toeflHint: "30 to 120 (old scale)",
    meets: (n) => `${n} programmes whose published minimum is your score or lower`,
    above: (n) => `${n} programmes that ask for a higher score`,
    other: (n) => `${n} programmes that state the requirement another way (another test, or level B2 or C1)`,
    none: (n) => `${n} programmes with no number published in the source`,
    req: "Required", need: (g) => `${g} short`,
    empty: "Enter your score to see the result.",
    bad: "That score is outside the range for this test.",
    loading: "Loading…", failed: "Couldn't load the data. Reload the page.",
    open: "Programme page", verify: "to verify",
    notes: [
      "We compare the overall score only. Many universities also set a minimum per section (such as Writing), so read the requirement on the programme page.",
      "TOEFL iBT moved to a 1-6 score scale in January 2026. The numbers here use the old scale (up to 120); if your result is on the new scale, ask the university for the equivalent.",
      "IELTS and TOEFL results are usually valid for two years, and some universities waive the test if you studied in English. The official requirement on the programme page is what counts.",
    ],
  },
};

