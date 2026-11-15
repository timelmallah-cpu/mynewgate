// Language institutes directory (/institutes).
// OFFICIAL: cultural institutes and official test organisers, from their own websites. Shown first, never paid.
// SPONSORED: paid listings. Each is labelled "إعلان / Ad", links use rel="sponsored", and they never change the official
// list or any data on the site. Add an entry only after the advertiser has paid and passed the checks in AD_POLICY.
// Fields: id, lang ("en" | "de" | "es" | "it" | "fr" | "other"), name, city {ar,en}, text {ar,en} (max ~200 chars),
// url, phone (optional), from and until (YYYY-MM-DD; the listing shows only between these dates).
export const SPONSORED = [];

export const LANGS = ["en", "de", "es", "it"];

// At most this many paid listings show per language section (earliest start date first).
export const MAX_ADS_PER_LANG = 3;

export const OFFICIAL = [
  {
    lang: "en", name: "British Council Egypt",
    text: { ar: "الجهة اللي بتنظم امتحان IELTS في مراكزها في مصر.", en: "Runs the IELTS test at its own centres in Egypt." },
    cities: { ar: "القاهرة، الإسكندرية، المنصورة، بورسعيد، طنطا، الأقصر", en: "Cairo, Alexandria, Mansoura, Port Said, Tanta, Luxor" },
    url: "https://www.britishcouncil.org.eg/en/exam/ielts/dates-locations",
  },
  {
    lang: "de", name: "Goethe-Institut Ägypten",
    text: { ar: "المعهد الثقافي الألماني الرسمي: بيدّي كورسات ألماني لكل المستويات، وبيعمل امتحانات Goethe-Zertifikat في مصر.", en: "Germany's official cultural institute: German courses at all levels and Goethe-Zertifikat exams." },
    cities: { ar: "القاهرة، الإسكندرية، القاهرة الجديدة، 6 أكتوبر، الغردقة", en: "Cairo, Alexandria, New Cairo, 6th of October, Hurghada" },
    url: "https://www.goethe.de/ins/eg/ar/sta/kai/prf.html",
  },
  {
    lang: "es", name: "Instituto Cervantes El Cairo",
    text: { ar: "المعهد الرسمي لإسبانيا: كورسات إسباني وتحضير لامتحان DELE في القاهرة.", en: "Spain's official institute: Spanish courses and DELE preparation." },
    cities: { ar: "القاهرة", en: "Cairo" },
    url: "https://clicelcairo.cervantes.es/en/cursos/sobre-nosotros",
  },
  {
    lang: "it", name: "Istituto Italiano di Cultura del Cairo",
    text: { ar: "المعهد الثقافي الإيطالي: كورسات إيطالي وامتحانات CELI و CILS في القاهرة.", en: "Italy's cultural institute: Italian courses plus CELI and CILS exams." },
    cities: { ar: "القاهرة (الزمالك)", en: "Cairo (Zamalek)" },
    url: "https://iiccairo.esteri.it/it/",
  },
];

export const INST_TEXT = {
  ar: {
    title: "دليل معاهد اللغة",
    lead: "فين تتعلم الإنجليزي أو لغة البلد اللي هتدرس فيه. المعاهد الرسمية الأول، وبعدها إعلانات معاهد خاصة مكتوب عليها \"إعلان\" بوضوح.",
    langs: { en: "الإنجليزي", de: "الألماني", es: "الإسباني", it: "الإيطالي", fr: "الفرنساوي", other: "لغات تانية" },
    official: "معهد رسمي", ad: "إعلان", visit: "الموقع الرسمي", adVisit: "موقع المعهد", cities: "الفروع",
    adNote: "الإعلانات مدفوعة. مراجعتنا ليها بتتأكد إن المعهد حقيقي، لكن مش بنضمن جودة الكورسات. اسأل وقارن قبل ما تدفع.",
    advTitle: "عندك معهد لغة؟",
    advText: "اعرض معهدك قدام طلاب عرب بيجهزوا للدراسة في أوروبا. الإعلان بيظهر في قسم لغته ومكتوب عليه \"إعلان\".",
    advBtn: "اعلن معانا",
    policyTitle: "قواعد الإعلان",
    policy: [
      "كل إعلان مكتوب عليه \"إعلان\" وبيظهر بعد المعاهد الرسمية، ومش بيغير أي معلومة على الموقع.",
      "بنقبل معاهد لغة ليها عنوان حقيقي وترخيص أو سجل تجاري، أو كورسات أونلاين من جهة معروفة.",
      "ممنوع الوعود اللي ما تتضمنش: ضمان قبول في جامعة، أو ضمان تأشيرة، أو ضمان درجة معينة في الامتحان.",
      "ممنوع الإعلان عن بيع شهادات أو امتحانات أو أي حاجة مخالفة.",
      "من حقنا نرفض أو نشيل أي إعلان لو وصلتنا شكاوى أو لقينا معلومة غلط فيه.",
    ],
    report: "شفت إعلان فيه مشكلة؟ بلغنا",
    langLink: "أي اختبار إنجليزي تعمل؟ ولغة كل بلد",
  },
  en: {
    title: "Language institutes directory",
    lead: "Where to learn English or the language of the country you'll study in. Official institutes first, then private institutes' ads, each clearly labelled \"Ad\".",
    langs: { en: "English", de: "German", es: "Spanish", it: "Italian", fr: "French", other: "Other languages" },
    official: "Official institute", ad: "Ad", visit: "Official website", adVisit: "Institute's website", cities: "Branches",
    adNote: "Ads are paid. We check that the institute is real, but we do not vouch for course quality. Ask and compare before you pay.",
    advTitle: "Do you run a language institute?",
    advText: "Show your institute to Arab students getting ready to study in Europe. Your ad appears in its language's section, labelled \"Ad\".",
    advBtn: "Advertise with us",
    policyTitle: "Advertising rules",
    policy: [
      "Every ad is labelled \"Ad\" and appears after the official institutes, and it never changes any information on the site.",
      "We accept language institutes with a real address and a licence or commercial registration, or online courses from a known provider.",
      "No promises that cannot be guaranteed: guaranteed university admission, guaranteed visas or guaranteed test scores.",
      "No ads for selling certificates or tests, or anything unlawful.",
      "We can refuse or remove any ad if we receive complaints or find wrong information in it.",
    ],
    report: "Seen a problem with an ad? Tell us",
    langLink: "Which English test? And each country's language",
  },
};

export function activeAds(today = new Date().toISOString().slice(0, 10)) {
  const live = SPONSORED.filter((a) => (!a.from || a.from <= today) && (!a.until || a.until >= today))
    .sort((a, b) => (a.from || "").localeCompare(b.from || ""));
  const count = {};
  return live.filter((a) => (count[a.lang] = (count[a.lang] || 0) + 1) <= MAX_ADS_PER_LANG);
}

export const ADV_TEXT = {
  ar: {
    title: "اعلن معانا",
    lead: "بوابتي الجديدة موقع عربي بيساعد الطلاب العرب يدرسوا في أوروبا. لو عندك معهد لغة أو مركز تحضير لامتحانات الإنجليزي، اعرض معهدك قدام طلاب محتاجين يتعلموا اللغة قبل ما يسافروا.",
    whereTitle: "إعلانك هيظهر فين؟",
    where: [
      "في دليل معاهد اللغة، في قسم اللغة اللي بتعلمها (إنجليزي، ألماني، إسباني، إيطالي، أو غيرهم).",
      "بيظهر بعد المعاهد الرسمية، ومكتوب عليه \"إعلان\" بوضوح.",
      "بحد أقصى 3 إعلانات في كل لغة، عشان إعلانك يبان وما يضيعش وسط إعلانات كتير.",
    ],
    whatTitle: "الإعلان فيه إيه؟",
    what: "اسم المعهد، والمدينة، ووصف قصير (لحد 200 حرف تقريباً) بالعربي والإنجليزي، ولينك موقعكم أو صفحتكم، ورقم تليفون لو حابب.",
    termTitle: "المدة والسعر",
    term: [
      "الاشتراك الأساسي 3 شهور، وفيه إمكانية لمدة أطول.",
      "السعر بيتحدد بالاتفاق حسب المعهد واللغة والمدة. تواصل معانا ونتكلم.",
      "الإعلان بيقف لوحده في آخر يوم في الاشتراك، ولو حابب تجدد بلغنا قبلها.",
    ],
    stepsTitle: "الخطوات",
    steps: [
      "تبعتلنا اسم المعهد واللغة والمدينة ولينك موقعكم.",
      "بنراجع إن المعهد حقيقي وإنه ماشي على قواعد الإعلان.",
      "نتفق على السعر والمدة.",
      "بعد الدفع، بنعرض عليك شكل الإعلان، وبعدها ينزل على الموقع.",
    ],
    rulesTitle: "قواعد الإعلان",
    cta: "تواصل معانا عشان تعلن",
    orMail: "أو ابعت إيميل على",
    mailSubject: "إعلان معهد لغة على بوابتي الجديدة",
    see: "شوف دليل معاهد اللغة",
  },
  en: {
    title: "Advertise with us",
    lead: "MyNewGate is an Arabic website that helps Arab students study in Europe. If you run a language institute or an English test preparation centre, show it to students who need to learn a language before they travel.",
    whereTitle: "Where will your ad appear?",
    where: [
      "In the language institutes directory, in the section for the language you teach (English, German, Spanish, Italian or others).",
      "After the official institutes, clearly labelled \"Ad\".",
      "At most 3 ads per language, so your ad stands out instead of getting lost among many.",
    ],
    whatTitle: "What does the ad include?",
    what: "Your institute's name, city, a short description (about 200 characters) in Arabic and English, a link to your website or page, and a phone number if you like.",
    termTitle: "Term and price",
    term: [
      "The basic term is 3 months, with longer terms available.",
      "The price is agreed case by case, depending on the institute, the language and the term. Contact us and we'll talk.",
      "The ad stops on the last day of the term. If you want to renew, tell us before then.",
    ],
    stepsTitle: "How it works",
    steps: [
      "Send us your institute's name, language, city and website.",
      "We check that the institute is real and follows the advertising rules.",
      "We agree on the price and term.",
      "After payment, we show you how the ad will look, then it goes live.",
    ],
    rulesTitle: "Advertising rules",
    cta: "Contact us to advertise",
    orMail: "Or email",
    mailSubject: "Language institute ad on MyNewGate",
    see: "See the language institutes directory",
  },
};
