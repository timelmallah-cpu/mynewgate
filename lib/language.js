// Language section (/language): which English test to take, and the local language of each study country.
// Official sources only (test owners, test centres, cultural institutes, national agencies). Reviewed 2026-11-15.
export const LANG_REVIEWED = "2026-11-15";

// re = how to spot the test in a programme's English requirement text (English version).
export const TESTS = [
  {
    id: "ielts", name: "IELTS Academic", re: /IELTS/i,
    fee: { ar: "7,500 جنيه في مراكز British Council في مصر", en: "EGP 7,500 at British Council centres in Egypt" },
    where: { ar: "مراكز British Council في القاهرة والإسكندرية والمنصورة وبورسعيد وطنطا والأقصر وجامعات تانية", en: "British Council centres in Cairo, Alexandria, Mansoura, Port Said, Tanta, Luxor and partner universities" },
    results: { ar: "غير منشور في المصدر الذي راجعناه", en: "Not published in the source we checked" },
    note: { ar: "الأكثر قبولاً في الجامعات الأوروبية. اختار Academic مش General Training.", en: "The most widely accepted in European universities. Choose Academic, not General Training." },
    src: "https://ielts.org/test-centres/british-council-alexandria", src2: "https://www.britishcouncil.org.eg/en/exam/ielts/dates-locations",
  },
  {
    id: "toefl", name: "TOEFL iBT", re: /TOEFL/i,
    fee: { ar: "بيختلف حسب الدولة؛ السعر في مصر بيظهر عند الحجز على موقع ETS", en: "Varies by country; the Egypt price shows when you book on the ETS site" },
    where: { ar: "مراكز اختبار معتمدة من ETS في مصر، أو من البيت (Home Edition)", en: "ETS-authorised test centres in Egypt, or at home (Home Edition)" },
    results: { ar: "غير منشور في المصدر الذي راجعناه", en: "Not published in the source we checked" },
    note: { ar: "مقبول في أغلب الجامعات. اتأكد إن الجامعة بتقبل Home Edition لو هتمتحن من البيت.", en: "Accepted by most universities. Check whether the university accepts the Home Edition if you test at home." },
    src: "https://www.ets.org/toefl/test-takers/ibt/register.html", src2: null,
  },
  {
    id: "duolingo", name: "Duolingo English Test", re: /Duolingo/i,
    fee: { ar: "70 دولار (حسب دليل Duolingo الرسمي)، وفيه اختيار نتيجة أسرع بفلوس زيادة", en: "$70 (per Duolingo's official guide), with a paid faster-results option" },
    where: { ar: "من البيت على الكمبيوتر، في أي وقت خلال 21 يوم من الشراء", en: "At home on a computer, any time within 21 days of purchase" },
    results: { ar: "خلال يومين", en: "Within 2 days" },
    note: { ar: "الأرخص والأسرع، بس جامعات كتير في أوروبا مش بتقبله. شوف صفحة \"من غير IELTS\" قبل ما تشتريه.", en: "The cheapest and fastest, but many European universities do not accept it. Check the \"without IELTS\" page before buying." },
    src: "https://englishtest.duolingo.com/applicants", src2: null,
  },
  {
    id: "pte", name: "PTE Academic", re: /PTE/i,
    fee: { ar: "غير منشور في المصدر الرسمي الذي راجعناه (للتحقق عند الحجز)", en: "Not published in the official source we checked (check when booking)" },
    where: { ar: "مركز Pearson في جامعة مصر للعلوم والتكنولوجيا (MUST) بالجيزة", en: "Pearson test centre at Misr University for Science and Technology (MUST), Giza" },
    results: { ar: "غير منشور في المصدر الذي راجعناه", en: "Not published in the source we checked" },
    note: { ar: "أقل انتشاراً من IELTS و TOEFL في الجامعات اللي عندنا، فاتأكد من البرنامج الأول.", en: "Less widely listed than IELTS and TOEFL by our universities, so check the programme first." },
    src: "https://www.pearsonpte.com/news/pearson-partners-with-must-test-centre-in-egypt-to-offer-pte-for-uk-visas.html", src2: null,
  },
];

// Local language per country: only what an official source says. Countries without an entry show the language name only.
export const LOCAL = {
  de: {
    exam: { ar: "Goethe-Zertifikat من B1 لـ C2 (وكمان telc و TestDaF)", en: "Goethe-Zertifikat B1 to C2 (also telc and TestDaF)" },
    egypt: { ar: "معهد جوته بيدّي كورسات لكل المستويات في القاهرة والإسكندرية والقاهرة الجديدة و6 أكتوبر والغردقة، وبيعمل امتحاناته في القاهرة والإسكندرية", en: "The Goethe-Institut teaches all levels in Cairo, Alexandria, New Cairo, 6th of October and Hurghada, and holds its exams in Cairo and Alexandria" },
    egyptUrl: "https://www.goethe.de/ins/eg/ar/sta/kai/prf.html",
    free: { name: "DW Learn German", url: "https://learngerman.dw.com/", ar: "كورسات ألماني مجانية أونلاين من الإذاعة الألمانية الرسمية", en: "Free online German courses from Germany's public broadcaster" },
    src: "https://www.goethe.de/resources/files/pdf360/2026_image-broschure_digital_deu_fv.pdf",
  },
  at: {
    exam: { ar: "شهادات الألماني المعترف بيها زي Goethe-Zertifikat", en: "Recognised German certificates such as the Goethe-Zertifikat" },
    egypt: { ar: "نفس معهد جوته في مصر (الألماني واحد في ألمانيا والنمسا)", en: "The same Goethe-Institut in Egypt (German is the language in both Germany and Austria)" },
    egyptUrl: "https://www.goethe.de/ins/eg/ar/sta/kai/prf.html",
    free: { name: "DW Learn German", url: "https://learngerman.dw.com/", ar: "كورسات ألماني مجانية أونلاين", en: "Free online German courses" },
    src: "https://www.goethe.de/ins/eg/ar/sta/kai/prf.html",
  },
  es: {
    exam: { ar: "DELE، شهادة رسمية بيمنحها معهد ثربانتس باسم وزارة التعليم الإسبانية، وصالحة من غير تاريخ انتهاء", en: "DELE, an official diploma awarded by the Instituto Cervantes on behalf of Spain's Ministry of Education, with no expiry" },
    egypt: { ar: "معهد ثربانتس في القاهرة بيدّي كورسات إسباني وكورسات تحضير لامتحان DELE", en: "The Instituto Cervantes in Cairo runs Spanish courses and DELE preparation courses" },
    egyptUrl: "https://clicelcairo.cervantes.es/en/cursos/sobre-nosotros",
    free: null,
    src: "https://www.uc3m.es/ss/Satellite/Idiomas/es/TextoDosColumnas/1371241419170",
  },
  it: {
    exam: { ar: "CILS (جامعة سيينا) أو CELI (جامعة بيروجيا) أو PLIDA (جمعية دانتي أليجيري)", en: "CILS (University for Foreigners of Siena), CELI (Perugia) or PLIDA (Dante Alighieri Society)" },
    egypt: { ar: "المعهد الثقافي الإيطالي في الزمالك بيدّي كورسات إيطالي وتحضير وامتحانات CELI و CILS", en: "The Italian Cultural Institute in Zamalek runs Italian courses plus CELI and CILS preparation and exams" },
    egyptUrl: "https://iiccairo.esteri.it/it/",
    free: null,
    src: "https://iiccairo.esteri.it/it/wp-json/wp/v2/posts/7194",
  },
  se: {
    exam: { ar: "مفيش امتحان مطلوب للدراسة بالإنجليزي", en: "No exam is needed for English-taught study" },
    egypt: null, egyptUrl: null,
    free: { name: "SFI (Svenska för invandrare)", url: "https://www.informationsverige.se/en/om-sverige/att-forsorja-sig-och-utvecklas-i-sverige/utbildning-for-vuxna.html", ar: "كورس سويدي ببلاش للي متسجل في سجل السكان السويدي ومعندوش أساسيات اللغة", en: "Free Swedish for anyone registered in the Swedish Population Register who lacks basic Swedish" },
    src: "https://utbildningsguiden.skolverket.se/in-english/education-programmes-for-adults/about-education-programmes-for-adults/about-municipal-adult-education-in-swedish-for-immigrants-sfi",
  },
};

export const LANG_TEXT = {
  ar: {
    title: "اللغة: اختبار الإنجليزي ولغة البلد",
    lead: "البرامج اللي عندنا كلها بالإنجليزي، فأول خطوة إنك تختار اختبار الإنجليزي الصح. وبعدها لغة البلد اللي هتعيش فيه، لأنها بتفرق في الشغل وأنت بتدرس وبعد التخرج.",
    testsTitle: "أي اختبار إنجليزي تعمل؟",
    testsLead: "قبل ما تدفع، اتأكد إن البرامج اللي عايزها بتقبل الاختبار ده. الأرقام تحت هي عدد البرامج عندنا اللي ذكرت الاختبار في شرط الإنجليزي.",
    fee: "السعر", where: "فين في مصر", results: "النتيجة", progs: (n) => `${n} برنامج عندنا بيذكره`, src: "المصدر",
    duoAlt: (n) => `و${n} جامعات راجعناها بتقبله رسمياً`,
    checkLink: "عندك درجة؟ شوف البرامج اللي بتقبلها",
    noIelts: "مش معاك IELTS؟ الجامعات اللي بتقبل بدائل",
    localTitle: "لغة البلد اللي هتعيش فيه",
    localLead: "مش مطلوبة للقبول في البرامج الإنجليزي، بس بتفرق جامد في الشغل الجزئي وفي إنك تلاقي شغل بعد التخرج.",
    lang: "اللغة", exam: "الامتحان الرسمي", egypt: "في مصر", free: "كورس مجاني رسمي", none: "لسه ما راجعناش مصدر رسمي لكورسات أو امتحانات اللغة دي.",
    reviewed: "آخر مراجعة",
    warn: "الأسعار والمواعيد بتتغير. اتأكد من موقع الجهة الرسمية قبل ما تدفع.",
  },
  en: {
    title: "Language: your English test and the local language",
    lead: "All our programmes are taught in English, so the first step is choosing the right English test. Then comes the local language, which matters for part-time work and for finding a job after graduating.",
    testsTitle: "Which English test should you take?",
    testsLead: "Before you pay, make sure the programmes you want accept the test. The numbers show how many of our programmes mention each test in their English requirement.",
    fee: "Price", where: "Where in Egypt", results: "Results", progs: (n) => `${n} of our programmes mention it`, src: "Source",
    duoAlt: (n) => `and ${n} universities we checked accept it officially`,
    checkLink: "Have a score? See which programmes accept it",
    noIelts: "No IELTS? Universities that accept alternatives",
    localTitle: "The language of the country you'll live in",
    localLead: "Not needed for admission to English-taught programmes, but it makes a big difference for part-time work and for finding a job after graduating.",
    lang: "Language", exam: "Official exam", egypt: "In Egypt", free: "Free official course", none: "We have not reviewed an official source on courses or exams for this language yet.",
    reviewed: "Last reviewed",
    warn: "Prices and dates change. Check the official provider's site before you pay.",
  },
};
