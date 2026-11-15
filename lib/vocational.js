// Vocational training in Europe for non-EU nationals. Official sources first; check: true = partly from
// secondary sources or not confirmed (shown as "للتحقق"). Reviewed 2026-11-15.
// Germany has its own detailed page (/ausbildung, lib/ausbildung.js).

export const VOC = [
  {
    code: "es",
    country: { ar: "إسبانيا", en: "Spain" },
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
    check: true,
  },
  {
    code: "fi",
    country: { ar: "فنلندا", en: "Finland" },
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
    src2: "https://migri.fi/faq-students",
    check: true,
  },
  {
    code: "nl",
    country: { ar: "هولندا", en: "Netherlands" },
    name: { ar: "التعليم المهني (MBO)", en: "Vocational education (MBO)" },
    route: { ar: "إقامة طالب للتعليم الثانوي أو المهني", en: "Student residence permit for secondary or vocational education" },
    what: {
      ar: "دراسة في معهد MBO معترف به كجهة راعية لدى دائرة الهجرة IND. المعهد هو من يقدّم الطلب.",
      en: "Study at an MBO institution recognised as a sponsor by the IND. The institution applies for you.",
    },
    who: {
      ar: "شروط صعبة جداً لمعظم العرب: لازم تكون هولندا أنسب بلد لدراستك، وتحقق شرطين من ثلاثة: جنسية سورينام أو إندونيسيا أو جنوب أفريقيا، أو أقارب مقيمون في هولندا، أو إجادة الهولندية.",
      en: "Very hard for most Arab applicants: the Netherlands must be the most suitable country for your studies, and you must meet two of three conditions: Surinamese, Indonesian or South African nationality, family living in the Netherlands, or speaking Dutch.",
    },
    money: { ar: "حسب جدول الدخل لدى IND.", en: "Per the IND income table." },
    work: {
      ar: "كموظف: صاحب العمل يحتاج تصريح عمل (TWV)، وحتى 16 ساعة أسبوعياً أو دوام كامل في يونيو ويوليو وأغسطس. العمل الحر بدون تصريح.",
      en: "As an employee: your employer needs a work permit (TWV), up to 16 hours a week or full-time in June, July and August. Self-employment needs no permit.",
    },
    length: { ar: "مدة الدراسة + 3 أشهر، وحد أقصى 5 سنوات.", en: "The length of study + 3 months, up to 5 years." },
    after: { ar: "يمكن التقديم على إقامة أخرى بعد الدراسة، مثل إقامة عمل.", en: "You can apply for another permit after studying, such as a work permit." },
    language: { ar: "الهولندية في الأغلب.", en: "Mostly Dutch." },
    note: {
      ar: "وفيه مشروع تجريبي لإكمال السنة الأخيرة من MBO4 لمن عمره 18 فأكثر وIELTS 4.5، عبر معاهد مسجلة في مدونة السلوك الخاصة به.",
      en: "There is also a pilot for completing the last year of MBO4 for those aged 18+ with IELTS 4.5, through institutions registered under its code of conduct.",
    },
    src: "https://ind.nl/en/residence-permits/study/student-residence-permit-secondary-or-vocational-education",
    src2: "https://www.ind.nl/en/residence-permits/study/pilot-to-complete-last-year-of-vocational-training-in-the-netherlands",
    hard: true,
  },
];

export const VOC_NOT = [
  {
    code: "at",
    name: { ar: "النمسا (Lehre)", en: "Austria (Lehre)" },
    why: {
      ar: "قانون الإقامة النمساوي ليس فيه تصريح مخصص للقدوم من الخارج بغرض التدريب المهني، والتدريب متاح فقط لمن هو مقيم في النمسا بالفعل (للتحقق).",
      en: "Austrian residence law has no permit for coming from abroad for an apprenticeship; it is only open to people already living in Austria (to verify).",
    },
    src: "https://www.lansky.at/en/newsroom/news/general-news/immigration-from-third-countries-for-training-purposes-harnessing-globalisation-a-matter-of-opinion/",
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
  },
};
