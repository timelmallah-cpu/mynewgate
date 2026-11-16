// Language section (/language): which English test to take, and the local language of each study country.
import { progsAr } from "./arCount";
// Official sources only (test owners, test centres, cultural institutes, national agencies). Reviewed 2026-11-15.
export const LANG_REVIEWED = "2026-11-15";

// re = how to spot the test in a programme's English requirement text (English version).
export const TESTS = [
  {
    id: "ielts", name: "IELTS Academic", re: /IELTS/i,
    fee: { ar: "9,400 جنيه (Academic) في مركز British Council بالإسكندرية", en: "EGP 9,400 (Academic) at British Council Alexandria" },
    where: { ar: "مراكز British Council في القاهرة والإسكندرية والمنصورة وبورسعيد وطنطا والأقصر وجامعات أخرى", en: "British Council centres in Cairo, Alexandria, Mansoura, Port Said, Tanta, Luxor and partner universities" },
    results: { ar: "غير منشور في المصدر الذي راجعناه", en: "Not published in the source we checked" },
    note: { ar: "الأكثر قبولاً في الجامعات الأوروبية. اختر Academic وليس General Training.", en: "The most widely accepted in European universities. Choose Academic, not General Training." },
    src: "https://ielts.org/test-centres/british-council-alexandria", src2: "https://www.britishcouncil.org.eg/en/exam/ielts/dates-locations",
  },
  {
    id: "toefl", name: "TOEFL iBT", re: /TOEFL/i,
    fee: { ar: "يختلف حسب الدولة؛ يظهر السعر في مصر عند الحجز على موقع ETS", en: "Varies by country; the Egypt price shows when you book on the ETS site" },
    where: { ar: "مراكز اختبار معتمدة من ETS في مصر، أو من المنزل (Home Edition)", en: "ETS-authorised test centres in Egypt, or at home (Home Edition)" },
    results: { ar: "غير منشور في المصدر الذي راجعناه", en: "Not published in the source we checked" },
    note: { ar: "مقبول في أغلب الجامعات. تأكد أن الجامعة تقبل Home Edition إذا كنت ستختبر من المنزل.", en: "Accepted by most universities. Check whether the university accepts the Home Edition if you test at home." },
    src: "https://www.ets.org/toefl/test-takers/ibt/register.html", src2: null,
  },
  {
    id: "duolingo", name: "Duolingo English Test", re: /Duolingo/i,
    fee: { ar: "70 دولاراً (حسب دليل Duolingo الرسمي)، مع خيار نتيجة أسرع بتكلفة إضافية", en: "$70 (per Duolingo's official guide), with a paid faster-results option" },
    where: { ar: "من المنزل على الكمبيوتر، في أي وقت خلال 21 يوماً من الشراء", en: "At home on a computer, any time within 21 days of purchase" },
    results: { ar: "خلال يومين", en: "Within 2 days" },
    note: { ar: "الأرخص والأسرع، لكن جامعات كثيرة في أوروبا لا تقبله. راجع صفحة \"الدراسة بدون IELTS\" قبل شرائه.", en: "The cheapest and fastest, but many European universities do not accept it. Check the \"without IELTS\" page before buying." },
    src: "https://englishtest.duolingo.com/applicants", src2: null,
  },
  {
    id: "pte", name: "PTE Academic", re: /PTE/i,
    fee: { ar: "غير منشور في المصدر الرسمي الذي راجعناه (للتحقق عند الحجز)", en: "Not published in the official source we checked (check when booking)" },
    where: { ar: "مركز Pearson في جامعة مصر للعلوم والتكنولوجيا (MUST) بالجيزة", en: "Pearson test centre at Misr University for Science and Technology (MUST), Giza" },
    results: { ar: "غير منشور في المصدر الذي راجعناه", en: "Not published in the source we checked" },
    note: { ar: "أقل انتشاراً من IELTS و TOEFL في الجامعات الموجودة لدينا، فتأكد من البرنامج أولاً.", en: "Less widely listed than IELTS and TOEFL by our universities, so check the programme first." },
    src: "https://www.pearsonpte.com/news/pearson-partners-with-must-test-centre-in-egypt-to-offer-pte-for-uk-visas.html", src2: null,
  },
];

// Local language per country: only what an official source says. Countries without an entry show the language name only.
export const LOCAL = {
  de: {
    exam: { ar: "Goethe-Zertifikat من B1 إلى C2 (وكذلك telc و TestDaF)", en: "Goethe-Zertifikat B1 to C2 (also telc and TestDaF)" },
    egypt: { ar: "يقدّم معهد جوته دورات لكل المستويات في القاهرة والإسكندرية والقاهرة الجديدة و6 أكتوبر والغردقة، ويعقد امتحاناته في القاهرة والإسكندرية", en: "The Goethe-Institut teaches all levels in Cairo, Alexandria, New Cairo, 6th of October and Hurghada, and holds its exams in Cairo and Alexandria" },
    egyptUrl: "https://www.goethe.de/ins/eg/ar/sta/kai/prf.html",
    free: { name: "DW Learn German", url: "https://learngerman.dw.com/", ar: "دورات ألمانية مجانية عبر الإنترنت من الإذاعة الألمانية الرسمية", en: "Free online German courses from Germany's public broadcaster" },
    src: "https://www.goethe.de/resources/files/pdf360/2026_image-broschure_digital_deu_fv.pdf",
  },
  at: {
    exam: { ar: "شهادات اللغة الألمانية المعترف بها مثل Goethe-Zertifikat", en: "Recognised German certificates such as the Goethe-Zertifikat" },
    egypt: { ar: "معهد جوته نفسه في مصر (اللغة الألمانية واحدة في ألمانيا والنمسا)", en: "The same Goethe-Institut in Egypt (German is the language in both Germany and Austria)" },
    egyptUrl: "https://www.goethe.de/ins/eg/ar/sta/kai/prf.html",
    free: { name: "DW Learn German", url: "https://learngerman.dw.com/", ar: "دورات ألمانية مجانية عبر الإنترنت", en: "Free online German courses" },
    src: "https://www.goethe.de/ins/eg/ar/sta/kai/prf.html",
  },
  es: {
    exam: { ar: "DELE، شهادة رسمية يمنحها معهد ثربانتس باسم وزارة التعليم الإسبانية، وهي صالحة بدون تاريخ انتهاء", en: "DELE, an official diploma awarded by the Instituto Cervantes on behalf of Spain's Ministry of Education, with no expiry" },
    egypt: { ar: "يقدّم معهد ثربانتس في القاهرة دورات في الإسبانية ودورات تحضيرية لامتحان DELE", en: "The Instituto Cervantes in Cairo runs Spanish courses and DELE preparation courses" },
    egyptUrl: "https://clicelcairo.cervantes.es/en/cursos/sobre-nosotros",
    free: null,
    src: "https://www.uc3m.es/ss/Satellite/Idiomas/es/TextoDosColumnas/1371241419170",
  },
  it: {
    exam: { ar: "CILS (جامعة سيينا) أو CELI (جامعة بيروجيا) أو PLIDA (جمعية دانتي أليجيري)", en: "CILS (University for Foreigners of Siena), CELI (Perugia) or PLIDA (Dante Alighieri Society)" },
    egypt: { ar: "يقدّم المعهد الثقافي الإيطالي في الزمالك دورات في الإيطالية وتحضيراً وامتحانات CELI و CILS", en: "The Italian Cultural Institute in Zamalek runs Italian courses plus CELI and CILS preparation and exams" },
    egyptUrl: "https://iiccairo.esteri.it/it/",
    free: null,
    src: "https://iiccairo.esteri.it/it/wp-json/wp/v2/posts/7194",
  },
  se: {
    exam: { ar: "لا يُطلب امتحان للدراسة بالإنجليزية", en: "No exam is needed for English-taught study" },
    egypt: null, egyptUrl: null,
    free: { name: "SFI (Svenska för invandrare)", url: "https://www.informationsverige.se/en/om-sverige/att-forsorja-sig-och-utvecklas-i-sverige/utbildning-for-vuxna.html", ar: "دورة مجانية في السويدية للمسجلين في سجل السكان السويدي ممن ليست لديهم أساسيات اللغة", en: "Free Swedish for anyone registered in the Swedish Population Register who lacks basic Swedish" },
    src: "https://utbildningsguiden.skolverket.se/in-english/education-programmes-for-adults/about-education-programmes-for-adults/about-municipal-adult-education-in-swedish-for-immigrants-sfi",
  },
};

export const LANG_TEXT = {
  ar: {
    title: "اللغة: اختبار الإنجليزية ولغة البلد",
    lead: "كل البرامج لدينا بالإنجليزية، لذا فالخطوة الأولى هي اختيار اختبار الإنجليزية المناسب. ثم لغة البلد الذي ستعيش فيه، لأنها تُحدث فرقاً في العمل أثناء الدراسة وبعد التخرج.",
    testsTitle: "أي اختبار إنجليزية تختار؟",
    testsLead: "قبل أن تدفع، تأكد أن البرامج التي تريدها تقبل هذا الاختبار. الأرقام أدناه هي عدد البرامج لدينا التي ذكرت الاختبار في شرط الإنجليزية.",
    fee: "السعر", where: "أين في مصر", results: "النتيجة", progs: (n) => `${progsAr(n)} لدينا ${n > 2 && n % 100 >= 3 && n % 100 <= 10 ? "تذكره" : "يذكره"}`, src: "المصدر",
    duoAlt: (n) => `و${n} جامعات راجعناها بتقبله رسمياً`,
    checkLink: "لديك درجة؟ اعرف البرامج التي تقبلها",
    noIelts: "ليس لديك IELTS؟ الجامعات التي تقبل بدائل",
    localTitle: "لغة البلد الذي ستعيش فيه",
    localLead: "ليست مطلوبة للقبول في البرامج الإنجليزية، لكنها تُحدث فرقاً كبيراً في العمل الجزئي وفي إيجاد عمل بعد التخرج.",
    lang: "اللغة", exam: "الامتحان الرسمي", egypt: "في مصر", free: "دورة مجانية رسمية", none: "لم نراجع بعد مصدراً رسمياً لدورات أو امتحانات هذه اللغة.",
    reviewed: "آخر مراجعة",
    instLink: "دليل معاهد اللغة في مصر",
    warn: "الأسعار والمواعيد تتغير. تأكد من موقع الجهة الرسمية قبل أن تدفع.",
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
    instLink: "Language institutes directory",
    warn: "Prices and dates change. Check the official provider's site before you pay.",
  },
};
