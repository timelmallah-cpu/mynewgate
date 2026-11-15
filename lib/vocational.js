// Vocational training in Europe for non-EU nationals. Official sources first; check: true = partly from
// secondary sources or not confirmed (shown as "للتحقق"). Reviewed 2026-11-15.
// Germany has its own detailed page (/ausbildung, lib/ausbildung.js).

export const VOC = [
  {
    code: "es",
    country: { ar: "إسبانيا", en: "Spain" },
    short: { ar: "دراسة مهنية رسمية بإقامة الدراسة، مع إمكانية العمل أثناء الدراسة.", en: "Official vocational study on a study stay, with the option to work while studying." },
    name: { ar: "التكوين المهني (Formación Profesional - FP)", en: "Vocational training (Formación Profesional, FP)" },
    route: { ar: "إقامة دراسة (estancia por estudios)", en: "Study stay authorisation (estancia por estudios)" },
    what: {
      ar: "دراسة مهنية رسمية في معهد معتمد، بمستويين: grado medio (متوسط) وgrado superior (عالي).",
      en: "Official vocational study at an accredited centre, at two levels: grado medio (intermediate) and grado superior (higher).",
    },
    who: {
      ar: "grado superior من سن 17، وgrado medio من سن 18. الحضور الفعلي 50% على الأقل.",
      en: "Grado superior from age 17, grado medio from age 18. At least 50% in-person attendance.",
    },
    money: {
      ar: "100% من مؤشر IPREM شهرياً (600 يورو في 2026)، إلا إذا كان السكن مدفوعاً مقدماً. الرسوم الدراسية لا تُحسب ضمن المبلغ. وتأمين صحي خاص.",
      en: "100% of the IPREM index a month (€600 in 2026), unless housing is prepaid. Tuition does not count towards it. Plus private health insurance.",
    },
    work: {
      ar: "حتى 30 ساعة أسبوعياً حسب تعليمات وزارة الهجرة (للتحقق).",
      en: "Up to 30 hours a week under the migration ministry's instructions (to verify).",
    },
    length: {
      ar: "grado superior: طول مدة الدراسة. grado medio: سنة وتُجدد سنوياً (حتى مرتين).",
      en: "Grado superior: the length of the studies. Grado medio: one year, renewable yearly (up to twice).",
    },
    after: {
      ar: "بعد الحصول على الشهادة يمكن تحويل الإقامة إلى إقامة وعمل (للتحقق). إقامة البحث عن عمل لمدة 24 شهراً لخريجي المستوى 6 فأعلى فقط، ولا تشمل التكوين المهني.",
      en: "After the qualification you can switch to a residence and work permit (to verify). The 24-month job-search residence is only for EQF level 6+ graduates, so it does not cover FP.",
    },
    language: { ar: "حسب البرنامج، وأغلبها بالإسبانية (للتحقق).", en: "Depends on the programme; most are in Spanish (to verify)." },
    src: "https://www.inclusion.gob.es/web/migraciones/w/estancia-por-estudios",
    find: { ar: "ابدأ من بوابة TodoFP التابعة لوزارة التعليم الإسبانية: فيها كل برامج التكوين المهني وأين تُدرّس ومواعيد التسجيل في كل إقليم.", en: "Start with TodoFP, the Spanish Education Ministry's portal: it lists every FP programme, where it is taught and enrolment dates in each region." },
    findUrl: "https://www.todofp.es/inicio.html",
    second: { href: "/country/es", ar: "صفحة إسبانيا", en: "Spain page" },
    check: true,
  },
  {
    code: "fi",
    country: { ar: "فنلندا", en: "Finland" },
    short: { ar: "تعليم مهني ينتهي بمؤهل مهني، مع عمل حتى 30 ساعة أسبوعياً.", en: "Vocational education leading to a qualification, with up to 30 hours of work a week." },
    name: { ar: "التعليم المهني (ammatillinen koulutus)", en: "Vocational education (ammatillinen koulutus)" },
    route: { ar: "تصريح إقامة للدراسة (نوع B مؤقت)", en: "Residence permit for studies (temporary B permit)" },
    what: {
      ar: "دراسة في مؤسسة تعليم مهني تنتهي بمؤهل مهني (vocational qualification).",
      en: "Study at a vocational institution leading to a vocational qualification.",
    },
    who: {
      ar: "لازم تكون حاصلاً على مقعد في برنامج ينتهي بمؤهل مهني أو شهادة.",
      en: "You need a place on a programme that leads to a vocational qualification or a degree.",
    },
    money: {
      ar: "800 يورو شهرياً على الأقل، أي 9,600 يورو في حسابك للسنة الأولى عند التقديم، بالإضافة إلى الرسوم الدراسية. من 1 أغسطس 2026 يدفع مواطنو الدول خارج الاتحاد الأوروبي رسوماً للتعليم المهني، وقيمتها حسب المؤسسة.",
      en: "At least €800 a month, so €9,600 in your account for the first year when you apply, plus tuition. From 1 August 2026, non-EU nationals pay tuition for vocational education; the amount depends on the institution.",
    },
    work: { ar: "بمتوسط 30 ساعة أسبوعياً، ودوام كامل في العطلات.", en: "An average of 30 hours a week, and full-time in holidays." },
    length: { ar: "طول مدة الدراسة.", en: "The length of the studies." },
    after: {
      ar: "بعد إكمال المؤهل يمكنك التقديم على تصريح إقامة للعمل أو للبحث عن عمل.",
      en: "After completing the qualification you can apply for a residence permit to work or to look for work.",
    },
    language: { ar: "حسب البرنامج، وأغلبها بالفنلندية أو السويدية (للتحقق).", en: "Depends on the programme; most are in Finnish or Swedish (to verify)." },
    src: "https://migri.fi/en/residence-permit-application-for-studies",
    find: { ar: "ابحث في بوابة Studyinfo (Opintopolku) الرسمية، وفيها البرامج بالإنجليزية. بعض المعاهد تقبل فقط المقيمين في فنلندا، فتأكد من المعهد قبل التقديم.", en: "Search the official Studyinfo (Opintopolku) portal, which lists English-taught programmes. Some institutions only accept people already living in Finland, so check with the institution before applying." },
    findUrl: "https://opintopolku.fi/konfo/en/",
    second: { href: "/country/fi", ar: "صفحة فنلندا", en: "Finland page" },
    src2: "https://migri.fi/faq-students",
    check: true,
  },
];

export const VOC_TEXT = {
  ar: {
    title: "التدريب المهني في أوروبا",
    lead: "دول أوروبية تسمح لمواطني الدول خارج الاتحاد الأوروبي بالقدوم للتدريب أو التعليم المهني، بالشروط من المصادر الرسمية. التدريب المهني غالباً بلغة البلد وليس بالإنجليزية.",
    deTitle: "ألمانيا: التدريب المهني (Ausbildung)",
    deText: "تدريب مدفوع في شركة مع مدرسة مهنية، وتأشيرة خاصة به. أوضح طريق للعرب.",
    deBtn: "التفاصيل الكاملة",
    route: "نوع الإقامة", what: "ما هو", who: "الشروط", money: "المال المطلوب", work: "العمل أثناء الدراسة", length: "مدة الإقامة", after: "بعد التخرج", language: "لغة الدراسة",
    hard: "صعب لمعظم العرب",
    notTitle: "دول راجعناها ولا تناسب القادمين من خارج الاتحاد الأوروبي",
    source: "المصدر", toCheck: " (للتحقق)",
    note: "الشروط تتغير. راجع المصدر الرسمي للدولة والمعهد قبل أي قرار. ما كتبنا بجانبه «للتحقق» من مصدر غير رسمي أو لم نجد له تأكيداً رسمياً.",
    landingTitle: "التدريب المهني",
    landingText: "ألمانيا وإسبانيا وفنلندا: الشروط والتأشيرة لغير الأوروبيين.",
    back: "كل دول التدريب المهني",
    findTitle: "أين تجد برنامجاً؟",
    findBtn: "ابحث عن برنامج",
  },
  en: {
    title: "Vocational training in Europe",
    lead: "European countries that let non-EU nationals come for vocational training or education, with the conditions from official sources. Vocational training is usually in the local language, not English.",
    deTitle: "Germany: vocational training (Ausbildung)",
    deText: "Paid training at a company plus vocational school, with its own visa. The clearest route for Arab applicants.",
    deBtn: "Full details",
    route: "Permit", what: "What it is", who: "Conditions", money: "Money needed", work: "Work while studying", length: "Permit length", after: "After you finish", language: "Language",
    hard: "Hard for most Arab applicants",
    notTitle: "Countries we checked that don't suit non-EU applicants",
    source: "Source", toCheck: " (to verify)",
    note: "Rules change. Check the country's official source and the institution before deciding. Items marked \"to verify\" come from an unofficial source or lack official confirmation.",
    landingTitle: "Vocational training",
    landingText: "Germany, Spain and Finland: conditions and visas for non-EU applicants.",
    back: "All vocational training countries",
    findTitle: "Where to find a programme",
    findBtn: "Find a programme",
  },
};
