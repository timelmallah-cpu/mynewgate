// Language institutes directory (/institutes).
// OFFICIAL: cultural institutes and official test organisers, from their own websites. Shown first, never paid.
// SPONSORED: paid listings. Each is labelled "إعلان / Ad", links use rel="sponsored", and they never change the official
// list or any data on the site. Add an entry only after the advertiser has paid and passed the checks in AD_POLICY.
// Fields: id, lang ("en" | "de" | "es" | "it" | "fr" | "other"), name, city {ar,en}, text {ar,en} (max ~200 chars),
// url, phone (optional), from and until (YYYY-MM-DD; the listing shows only between these dates).
export const SPONSORED = [];

export const LANGS = ["en", "de", "es", "it"];

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
  return SPONSORED.filter((a) => (!a.from || a.from <= today) && (!a.until || a.until >= today));
}
