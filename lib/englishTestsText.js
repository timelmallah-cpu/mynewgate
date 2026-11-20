// Test names and page text for the English tests page (no programme data, so the client bundle stays small).
import { progsAr } from "./arCount";

export const TESTS = ["ielts", "toefl", "pte", "duo", "cam"];
export const TEST_NAMES = { ielts: "IELTS", toefl: "TOEFL", pte: "PTE Academic", duo: "Duolingo English Test", cam: "Cambridge (C1/C2)" };

export const ET_TEXT = {
  ar: {
    title: "أي اختبار إنجليزية تقبله البرامج؟",
    lead: "IELTS ليس الاختيار الوحيد: كثير من البرامج تقبل TOEFL أو PTE أو Duolingo، وبعض هذه الاختبارات أرخص أو أسرع في النتيجة. هنا ترى كل برنامج في موقعنا وما يذكره مصدره الرسمي من اختبارات، والحد الأدنى إن كان منشوراً.",
    summary: "البرامج التي تذكر كل اختبار بالاسم",
    of: (k, n) => `${k} من ${progsAr(n)}`,
    noneNote: (n) => `${progsAr(n)} لا يذكر مصدرها اسم اختبار (تكتفي بمستوى مثل B2 أو «شهادة مقبولة»). هذا لا يعني أن الاختبار غير مطلوب: اسأل الجامعة عن الاختبارات التي تقبلها.`,
    byCountry: "حسب الدولة",
    country: "الدولة", progs: "البرامج",
    find: "ابحث بالاختبار الذي معك",
    test: "الاختبار", score: "درجتك (اختياري)", level: "المرحلة", any: "الكل", master: "ماجستير", bachelor: "بكالوريوس", allCountries: "كل الدول",
    min: "الحد الأدنى المنشور", notPub: "غير منشور",
    results: (n) => `${progsAr(n)} يذكر هذا الاختبار`,
    resultsOk: (n) => `${progsAr(n)} يذكر هذا الاختبار وحدّه الأدنى المنشور أقل من درجتك أو يساويها، أو لم ينشر حداً`,
    more: (n) => `اعرض ${n} أخرى`,
    req: "شرط اللغة كما في المصدر",
    notes: [
      "نقرأ اسم الاختبار والحد الأدنى من نص شرط اللغة في مصدر كل برنامج. إذا لم يذكر المصدر اختباراً، فقد تقبله الجامعة رغم ذلك: اسألها.",
      "تأكد دائماً من نوع الاختبار المطلوب (مثلاً IELTS Academic وليس General، وTOEFL iBT) ومن مدة صلاحية النتيجة.",
      "الحد الأدنى هنا هو الرقم الأول المذكور بعد اسم الاختبار، وقد تطلب الجامعة حداً لكل مهارة أيضاً.",
    ],
    links: "أدوات مرتبطة",
    l1: "هل درجتك في IELTS أو TOEFL كافية؟", l2: "الدراسة بدون IELTS", l3: "مقارنة الاختبارات ومراكزها في بلدك",
  },
  en: {
    title: "Which English tests do programmes accept?",
    lead: "IELTS is not the only option: many programmes accept TOEFL, PTE or Duolingo, and some of these are cheaper or faster. Here you see every programme on our site and the tests its official source names, with the minimum score when published.",
    summary: "Programmes naming each test",
    of: (k, n) => `${k} of ${n} programmes`,
    noneNote: (n) => `${n} programmes name no test in their source (only a level such as B2 or "an accepted certificate"). That does not mean no test is needed: ask the university which tests it accepts.`,
    byCountry: "By country",
    country: "Country", progs: "Programmes",
    find: "Search by the test you have",
    test: "Test", score: "Your score (optional)", level: "Level", any: "All", master: "Master's", bachelor: "Bachelor's", allCountries: "All countries",
    min: "Published minimum", notPub: "Not published",
    results: (n) => `${n} programmes name this test`,
    resultsOk: (n) => `${n} programmes name this test with a published minimum at or below your score, or no minimum`,
    more: (n) => `Show ${n} more`,
    req: "Language requirement in the source",
    notes: [
      "We read the test name and minimum from each programme's language requirement in its source. If a source names no test, the university may still accept it: ask.",
      "Always check the exact test type (e.g. IELTS Academic, not General; TOEFL iBT) and how long results stay valid.",
      "The minimum shown is the first figure after the test name; universities may also set a minimum per skill.",
    ],
    links: "Related tools",
    l1: "Is your IELTS or TOEFL score enough?", l2: "Studying without IELTS", l3: "Tests compared and test centres in your country",
  },
};
