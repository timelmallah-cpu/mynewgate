// The other sections of Bawabat AlSafar, shown as "coming soon" (Hatem, 20 Nov 2026). Each gets its own page under
// /study/soon/<id> for now (the umbrella site at bawabatalsafar.com/ is not built yet), with an anonymous interest button
// and the newsletter. When a section is built it will live at its own path (/visas, /work, /tourism).
export const SECTIONS = [
  { id: "visas-immigration", icon: "M4 4h16v16H4zM8 8h8M8 12h8M8 16h5" },
  { id: "work", icon: "M4 8h16v11H4zM9 8V5h6v3M4 13h16" },
  { id: "tourism", icon: "M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" },
];
export const SECTION_IDS = SECTIONS.map((s) => s.id);
// Sections that are live, with their public address at the domain root (outside the /study basePath: use plain <a>).
export const SECTION_LIVE = { "visas-immigration": { ar: "/visas", en: "/en/visas" } };
export const SOON_IDS = SECTION_IDS.filter((id) => !SECTION_LIVE[id]);

export const SECTION_TEXT = {
  ar: {
    title: "أقسام بوابة السفر",
    lead: "بوابة الدراسة هي أول قسم في بوابة السفر. هذه الأقسام قادمة قريباً.",
    soon: "قريباً", live: "متاح الآن",
    names: { "visas-immigration": "بوابة التأشيرات والهجرة", work: "بوابة العمل", tourism: "بوابة السياحة" },
    blurbs: {
      "visas-immigration": "هل تحتاج تأشيرة؟ تأشيرات الزيارة لأشهر 10 وجهات لكل الجنسيات العربية، من المواقع الرسمية. والهجرة والعمل قريباً.",
      work: "العمل في الخارج: البطاقات وتأشيرات العمل، والمهن المطلوبة، ومعادلة الشهادات المهنية، والبحث عن عمل بعد الدراسة.",
      tourism: "السفر والسياحة: تأشيرات الزيارة للجوازات العربية، وتكاليف الرحلات، ونصائح عملية لكل دولة.",
    },
    pageTitle: (n) => `${n}: قريباً`,
    pageLead: "نعمل على هذا القسم بنفس طريقة بوابة الدراسة: معلومات من المصادر الرسمية فقط، منظمة ومكتوبة بالعربية. لن يقدم القسم استشارة قانونية أو هجرة لحالتك الشخصية.",
    want: "أريد هذا القسم",
    wantHelp: "اضغط ليعرف فريق الموقع أنك تريد هذا القسم؛ نبدأ بالأقسام التي يطلبها الزوار أكثر. لا نحفظ أي بيانات عنك.",
    thanks: "شكراً! سجلنا اهتمامك.",
    notifyTitle: "تريد أن تعرف أول ما يفتح؟",
    notifyText: "اشترك في النشرة الأسبوعية؛ نعلن فيها كل قسم جديد.",
    meanwhile: "حتى ذلك الوقت",
    studyLinks: [["/visa", "تأشيرة الدراسة من بلدك"], ["/after-graduation", "البقاء والعمل بعد التخرج"], ["/ausbildung", "التدريب المهني"]],
    other: "أقسام أخرى",
  },
  en: {
    title: "Bawabat AlSafar sections",
    lead: "Bawabat AlDirasa is the first section of Bawabat AlSafar. These sections are coming soon.",
    soon: "Coming soon", live: "Live now",
    names: { "visas-immigration": "Visas and immigration", work: "Work abroad", tourism: "Tourism" },
    blurbs: {
      "visas-immigration": "Do you need a visa? Visit visas for 10 top destinations for every Arab nationality, from official sources. Immigration and work coming soon.",
      work: "Working abroad: work cards and visas, in-demand jobs, recognition of professional qualifications, and finding a job after your studies.",
      tourism: "Travel and tourism: visit visas for Arab passports, trip costs and practical tips for each country.",
    },
    pageTitle: (n) => `${n}: coming soon`,
    pageLead: "We are building this section the same way as Bawabat AlDirasa: information from official sources only, organised and written in Arabic. It will not give legal or immigration advice on your personal case.",
    want: "I want this section",
    wantHelp: "Tap to tell the site team you want this section; we start with the ones visitors ask for most. We don't store any data about you.",
    thanks: "Thanks! We've noted your interest.",
    notifyTitle: "Want to know as soon as it opens?",
    notifyText: "Subscribe to the weekly newsletter; we announce every new section in it.",
    meanwhile: "Meanwhile",
    studyLinks: [["/visa", "Student visa from your country"], ["/after-graduation", "Staying and working after graduation"], ["/ausbildung", "Vocational training"]],
    other: "Other sections",
  },
};
