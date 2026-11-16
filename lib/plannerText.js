// Text and the suggested schedule for the application timeline planner.
// The offsets are our own planning suggestions, counted back from the official deadline or the study start.
// They are not official dates; the only official date is the programme's application deadline.

// from: "deadline" or "start"; weeks: how many weeks before that date.
export const PLAN_STEPS = [
  { key: "test", from: "deadline", weeks: 12 },
  { key: "docs", from: "deadline", weeks: 10 },
  { key: "letters", from: "deadline", weeks: 6 },
  { key: "submit", from: "deadline", weeks: 2 },
  { key: "deadline", from: "deadline", weeks: 0 },
  { key: "visa", from: "start", weeks: 12 },
  { key: "housing", from: "start", weeks: 8 },
  { key: "travel", from: "start", weeks: 1 },
  { key: "start", from: "start", weeks: 0 },
];

export const PL_TEXT = {
  ar: {
    title: "خطط مواعيد التقديم",
    lead: "اختر البرنامج وموعد التقديم، ونرتب لك خطة بالعكس من الموعد: اختبار اللغة، والمستندات والترجمة، والتقديم، ثم موعد السفارة والسفر. وتقدر تضيفها لتقويم موبايلك.",
    search: "ابحث باسم البرنامج أو الجامعة", pick: "اختر", change: "غيّر البرنامج",
    deadline: "موعد التقديم", manual: "اكتب الموعد بنفسك",
    noDate: "لم نستطع قراءة تاريخ من نص الموعد. اكتب التاريخ بنفسك من صفحة البرنامج.",
    est: "تقديري من موعد السنة الماضية",
    startLabel: "متى تبدأ الدراسة؟", startHint: "عدّله حسب صفحة البرنامج",
    plan: "خطتك", past: "فات موعده", today: "اليوم",
    steps: {
      test: ["خذ اختبار اللغة (IELTS أو TOEFL)", "قبل الموعد بـ 12 أسبوعاً تقريباً، ليبقى وقت لإعادة الاختبار إن احتجت."],
      docs: ["جهّز الشهادات وكشوف الدرجات والترجمة الرسمية", "الترجمة والتصديق ومعادلة الشهادة قد تأخذ أسابيع. راجع دليل المستندات للدولة."],
      letters: ["اكتب السيرة الذاتية وخطاب الدافع واطلب التوصيات", "أعطِ أساتذتك وقتاً كافياً لكتابة التوصيات."],
      submit: ["قدّم الطلب وادفع رسوم الطلب إن وُجدت", "قدّم قبل الموعد بأسبوعين على الأقل تحسباً لأي مشكلة في الرفع أو الدفع."],
      deadline: ["آخر موعد للتقديم", "هذا هو الموعد الرسمي المنشور. تأكد منه في صفحة البرنامج."],
      visa: ["اطلب موعد السفارة وقدّم طلب التأشيرة أو الإقامة", "فور وصول القبول. مواعيد السفارات قد تتأخر، ويلزم إثبات المال والتأمين."],
      housing: ["ابحث عن سكن", "سكن الطلاب يمتلئ مبكراً في مدن كثيرة."],
      travel: ["سافر واستلم السكن", "خطط للوصول قبل بداية الدراسة بأيام."],
      start: ["بداية الدراسة", "التاريخ الذي اخترته أعلاه."],
    },
    ics: "أضف الخطة لتقويمي (.ics)", print: "اطبع الخطة",
    icsTitle: "بوابة السفر",
    note: "المواعيد في هذه الخطة اقتراحات منا لترتيب وقتك، وليست مواعيد رسمية. الموعد الرسمي الوحيد هو موعد التقديم المنشور في صفحة البرنامج، فتأكد منه قبل أي خطوة.",
    open: "صفحة البرنامج", loading: "جارٍ التحميل…", failed: "تعذر تحميل البيانات. أعد تحميل الصفحة.",
  },
  en: {
    title: "Plan your application dates",
    lead: "Pick a programme and its deadline, and we lay out a plan backwards from it: language test, documents and translation, applying, then the embassy appointment and travel. You can add it to your phone's calendar.",
    search: "Search by programme or university", pick: "Pick", change: "Change programme",
    deadline: "Application deadline", manual: "Enter the date yourself",
    noDate: "We couldn't read a date from the deadline text. Enter the date yourself from the programme page.",
    est: "estimated from last year's date",
    startLabel: "When do studies start?", startHint: "adjust it to the programme page",
    plan: "Your plan", past: "already passed", today: "Today",
    steps: {
      test: ["Take the language test (IELTS or TOEFL)", "About 12 weeks before the deadline, so there is time to retake it if needed."],
      docs: ["Get certificates, transcripts and official translations ready", "Translation, legalisation and recognition can take weeks. See the country's document guide."],
      letters: ["Write your CV and motivation letter, ask for references", "Give your teachers enough time to write references."],
      submit: ["Submit the application and pay any application fee", "Apply at least two weeks early in case uploading or paying goes wrong."],
      deadline: ["Application deadline", "This is the official published date. Confirm it on the programme page."],
      visa: ["Book the embassy appointment and apply for the visa or residence permit", "As soon as the offer arrives. Embassy slots can take time, and you need proof of funds and insurance."],
      housing: ["Look for housing", "Student housing fills up early in many cities."],
      travel: ["Travel and move in", "Plan to arrive a few days before studies start."],
      start: ["Studies start", "The date you chose above."],
    },
    ics: "Add the plan to my calendar (.ics)", print: "Print the plan",
    icsTitle: "Bawabat AlSafar",
    note: "The dates in this plan are our suggestions to organise your time, not official dates. The only official date is the application deadline published on the programme page, so confirm it before you act.",
    open: "Programme page", loading: "Loading…", failed: "Couldn't load the data. Reload the page.",
  },
};
