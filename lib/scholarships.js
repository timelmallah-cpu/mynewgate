// Fully funded scholarships (tuition covered or waived + a monthly living allowance)
// for Arab nationals, for bachelor's and master's study in the 11 countries we cover.
// Rules: official sources first; anything not published is written as such; anything
// taken only from secondary sources or from the previous cycle is marked "to verify".

export const SCHOLARSHIPS_REVIEWED = "2026-11-22";

// The 22 Arab League states.
export const ARAB = {
  dz: { ar: "الجزائر", en: "Algeria" },
  bh: { ar: "البحرين", en: "Bahrain" },
  km: { ar: "جزر القمر", en: "Comoros" },
  dj: { ar: "جيبوتي", en: "Djibouti" },
  eg: { ar: "مصر", en: "Egypt" },
  iq: { ar: "العراق", en: "Iraq" },
  jo: { ar: "الأردن", en: "Jordan" },
  kw: { ar: "الكويت", en: "Kuwait" },
  lb: { ar: "لبنان", en: "Lebanon" },
  ly: { ar: "ليبيا", en: "Libya" },
  mr: { ar: "موريتانيا", en: "Mauritania" },
  ma: { ar: "المغرب", en: "Morocco" },
  om: { ar: "عُمان", en: "Oman" },
  ps: { ar: "فلسطين", en: "Palestine" },
  qa: { ar: "قطر", en: "Qatar" },
  sa: { ar: "السعودية", en: "Saudi Arabia" },
  so: { ar: "الصومال", en: "Somalia" },
  sd: { ar: "السودان", en: "Sudan" },
  sy: { ar: "سوريا", en: "Syria" },
  tn: { ar: "تونس", en: "Tunisia" },
  ae: { ar: "الإمارات", en: "United Arab Emirates" },
  ye: { ar: "اليمن", en: "Yemen" },
};
export const ARAB_IDS = Object.keys(ARAB).sort((a, b) => ARAB[a].ar.localeCompare(ARAB[b].ar, "ar"));
const ALL = Object.keys(ARAB);
const GULF = ["bh", "kw", "om", "qa", "sa", "ae"];
const NON_GULF = ALL.filter((c) => !GULF.includes(c));
const AFRICAN_ARAB = ["dz", "km", "dj", "eg", "ly", "mr", "ma", "so", "sd", "tn"];

// kind: "official" = read on the funder's own site/call; "secondary" = only from
// scholarship portals, verify; "expected" = based on the previous cycle; "varies" = per programme.
export const SCHOLARSHIPS = [
  {
    id: "erasmus-mundus",
    type: "eu",
    funder: { ar: "الاتحاد الأوروبي (برنامج إيراسموس+)", en: "European Union (Erasmus+)" },
    name: { ar: "منحة إيراسموس موندوس للماجستير المشترك", en: "Erasmus Mundus Joint Masters scholarship" },
    hosts: ["de", "nl", "es", "be", "ee", "pl", "hu", "ro", "lv", "lt", "it", "fi", "bg", "se", "cz", "at", "fr", "pt", "ie", "dk", "hr", "sk", "cy", "mt", "no", "lu", "ch", "si", "gr", "is", "li", "tr"],
    hostsNote: { ar: "تدرس في دولتين أوروبيتين على الأقل حسب البرنامج", en: "You study in at least two European countries, depending on the programme" },
    levels: ["master"],
    eligible: ALL,
    check: [],
    eligibilityNote: { ar: "مفتوحة لكل الجنسيات.", en: "Open to all nationalities." },
    summary: {
      ar: "رسوم الدراسة كاملة + 1,400 يورو شهرياً طوال مدة البرنامج (12 إلى 24 شهراً) + تكاليف السفر والاستقرار.",
      en: "Full tuition + €1,400 a month for the whole programme (12 to 24 months) + travel and installation costs.",
    },
    covers: {
      ar: ["رسوم المشاركة (الرسوم الدراسية) كاملة تُدفع للجامعات مباشرة.", "1,400 يورو شهرياً لمدة البرنامج.", "تكاليف السفر والاستقرار.", "تأمين صحي وتأمين حوادث."],
      en: ["Full participation costs (tuition), paid to the universities directly.", "€1,400 a month for the length of the programme.", "Travel and installation costs.", "Health and accident insurance."],
    },
    conditions: {
      ar: [
        "المنحة مرتبطة ببرامج إيراسموس موندوس فقط، وليست لأي ماجستير. ابحث في الكتالوج الرسمي عن البرامج المموّلة.",
        "كل برنامج له موعد وشروط وطريقة تقديم خاصة به.",
        "يمكنك التقديم على 3 برامج كحد أقصى في نفس السنة.",
        "لا يحق لمن حصل على منحة إيراسموس موندوس للماجستير من قبل أن يحصل عليها مرة ثانية.",
      ],
      en: [
        "The scholarship is tied to Erasmus Mundus programmes only, not any master's. Search the official catalogue for funded programmes.",
        "Each programme has its own deadline, requirements and application process.",
        "You can apply to a maximum of 3 programmes in the same year.",
        "If you already held an Erasmus Mundus master's scholarship, you cannot get another one.",
      ],
    },
    deadlines: [
      { date: "2027-01-15", kind: "varies", step: "both", label: { ar: "معظم البرامج: من أكتوبر 2026 إلى يناير 2027 (لدفعة سبتمبر 2027)", en: "Most programmes: October 2026 to January 2027 (for the September 2027 intake)" } },
    ],
    language: { ar: "الإنجليزية في أغلب البرامج", en: "English in most programmes" },
    howToApply: {
      ar: "اختر البرنامج من الكتالوج الرسمي، ثم قدّم على موقع البرنامج نفسه. طلب القبول وطلب المنحة يكونان في نفس الملف غالباً.",
      en: "Pick a programme from the official catalogue, then apply on that programme's own website. Admission and scholarship are usually one application.",
    },
    url: "https://www.eacea.ec.europa.eu/scholarships/erasmus-mundus-catalogue_en",
    links: null,
  },
  {
    id: "stipendium-hungaricum",
    type: "gov",
    funder: { ar: "حكومة المجر (مؤسسة Tempus العامة)", en: "Government of Hungary (Tempus Public Foundation)" },
    name: { ar: "منحة ستيبنديوم هنغاريكوم", en: "Stipendium Hungaricum" },
    hosts: ["hu"],
    levels: ["bachelor", "master"],
    eligible: ["dz", "bh", "eg", "iq", "jo", "lb", "ly", "ma", "om", "ps", "sd", "sy", "tn", "ae", "ye"],
    check: [],
    eligibilityNote: {
      ar: "متاحة فقط لمواطني الدول التي لها جهة إرسال شريكة. الدول العربية غير الموجودة في قائمة الشركاء الرسمية: جزر القمر، جيبوتي، الكويت، موريتانيا، قطر، السعودية، الصومال. العراق يشمل إقليم كردستان.",
      en: "Only for nationals of countries with a sending partner. Arab states not on the official partner list: Comoros, Djibouti, Kuwait, Mauritania, Qatar, Saudi Arabia, Somalia. Iraq includes the Kurdistan Region.",
    },
    summary: {
      ar: "دراسة بدون رسوم + 43,700 فورنت شهرياً + سكن جامعي أو 40,000 فورنت شهرياً للسكن + تأمين صحي.",
      en: "Tuition-free study + HUF 43,700 a month + a dormitory place or HUF 40,000 a month for housing + health insurance.",
    },
    covers: {
      ar: ["إعفاء كامل من الرسوم الدراسية.", "43,700 فورنت شهرياً (حوالي 110 يورو) لمدة 12 شهراً في السنة.", "مكان في السكن الجامعي، أو 40,000 فورنت شهرياً كمساهمة في السكن.", "تأمين صحي (وتأمين إضافي حتى 65,000 فورنت في السنة)."],
      en: ["Full tuition waiver.", "HUF 43,700 a month (about €110), 12 months a year.", "A dormitory place, or HUF 40,000 a month towards housing.", "Health insurance (plus supplementary cover up to HUF 65,000 a year)."],
    },
    conditions: {
      ar: [
        "المبلغ الشهري صغير مقارنة بتكلفة المعيشة في بودابست، فخطط لمصدر دخل إضافي.",
        "تقدّم على بوابة المنحة، ويجب أيضاً أن ترشحك جهة الإرسال في بلدك (غالباً وزارة التعليم العالي). بعض الدول لها شروط وموعد داخلي أبكر.",
        "تختار حتى برنامجين من قائمة برامج المنحة.",
      ],
      en: [
        "The monthly amount is small compared with living costs in Budapest, so plan for extra income.",
        "You apply on the scholarship portal and must also be nominated by your country's sending partner (often the higher-education ministry). Some countries have extra rules and an earlier internal deadline.",
        "You choose up to two programmes from the scholarship's programme list.",
      ],
    },
    deadlines: [
      { date: "2027-01-15", kind: "expected", step: "scholarship", label: { ar: "حوالي 15 يناير 2027 (كان 15 يناير 2026 الساعة 14:00 بتوقيت وسط أوروبا في الدورة الماضية). حتى 19 نوفمبر 2026 لم تُنشر دعوة 2027/2028 على الموقع الرسمي، وكانت الدعوة الماضية قد فُتحت في 17 نوفمبر 2025.", en: "Around 15 January 2027 (last cycle: 15 January 2026, 14:00 CET). As of 19 November 2026 the 2027/2028 call is not on the official site; last year's call opened on 17 November 2025." } },
    ],
    language: { ar: "برامج بالإنجليزية وبالمجرية", en: "Programmes in English and in Hungarian" },
    howToApply: {
      ar: "قدّم على apply.stipendiumhungaricum.hu، وتواصل مع جهة الإرسال في بلدك حسب تعليماتها.",
      en: "Apply on apply.stipendiumhungaricum.hu, and contact your country's sending partner as it instructs.",
    },
    url: "https://stipendiumhungaricum.hu/partners/",
    links: { countries: ["hu"], note: { ar: "تحقق أن البرنامج موجود في قائمة برامج المنحة.", en: "Check that the programme is on the scholarship's programme list." } },
  },
  {
    id: "chevening",
    type: "gov",
    funder: { ar: "حكومة بريطانيا (وزارة الخارجية والكومنولث والتنمية FCDO)", en: "UK Government (Foreign, Commonwealth and Development Office, FCDO)" },
    name: { ar: "منحة تشيفنينغ للماجستير في بريطانيا", en: "Chevening Scholarships (UK)" },
    hosts: ["gb"],
    levels: ["master"],
    eligible: ["dz", "eg", "iq", "jo", "lb", "ma", "ps", "sa", "sd", "sy", "tn", "ae", "ye"],
    check: ["bh", "km", "dj", "kw", "ly", "mr", "om", "qa", "so"],
    eligibilityNote: {
      ar: "لمواطني الدول المؤهلة لتشيفنينغ؛ لكل دولة صفحة على موقع المنحة (رأينا صفحات مصر والأردن والمغرب والجزائر وتونس والعراق ولبنان وفلسطين). يجب أن تعود إلى بلدك سنتين على الأقل بعد المنحة. تحقق من صفحة بلدك قبل التقديم.",
      en: "For citizens of Chevening-eligible countries; each country has its own page on the scholarship site (we saw pages for Egypt, Jordan, Morocco, Algeria, Tunisia, Iraq, Lebanon and Palestine). You must return to your country for at least two years after the award. Check your country's page before applying.",
    },
    summary: {
      ar: "ماجستير لمدة سنة في أي جامعة بريطانية: الرسوم الدراسية + مبلغ شهري للمعيشة + تذاكر السفر ذهاباً وعودة + منحة للرسالة.",
      en: "A one-year master's at any UK university: tuition + a monthly living stipend + return travel + a dissertation grant.",
    },
    covers: {
      ar: ["الرسوم الدراسية.", "مبلغ شهري للمعيشة.", "تذكرة السفر من بلدك وإليه.", "منحة لمصاريف الرسالة."],
      en: ["Tuition fees.", "A monthly living stipend.", "Travel to and from your country.", "A dissertation grant."],
    },
    conditions: {
      ar: [
        "للماجستير الذي مدته سنة واحدة في جامعة بريطانية.",
        "تقدّم على 3 برامج مختلفة، ويجب أن يكون معك قبول غير مشروط من أحدها قبل 8 يوليو 2027 (لدفعة 2027-2028).",
        "يجب أن تعود إلى بلدك سنتين على الأقل بعد انتهاء المنحة.",
        "دورة 2027-2028 أُغلقت في 6 أكتوبر 2026، والمقابلات للمرشحين بعد منتصف فبراير 2027.",
      ],
      en: [
        "For a one-year master's at a UK university.",
        "You apply to 3 different courses and must hold an unconditional offer from one of them by 8 July 2027 (2027-28 cohort).",
        "You must return to your country for at least two years after the award ends.",
        "The 2027-28 round closed on 6 October 2026; shortlisted candidates are interviewed from mid-February 2027.",
      ],
    },
    deadlines: [
      { date: "2027-10-06", kind: "expected", step: "scholarship", label: { ar: "دورة 2028-2029: متوقعة من أوائل أغسطس حتى أوائل أكتوبر 2027 مثل الدورات السابقة (دورة 2027-2028 كانت من 4 أغسطس حتى 6 أكتوبر 2026)", en: "2028-29 round: expected from early August to early October 2027, as in earlier rounds (the 2027-28 round ran 4 August - 6 October 2026)" } },
    ],
    language: { ar: "الدراسة بالإنجليزية", en: "Taught in English" },
    howToApply: {
      ar: "قدّم أونلاين على موقع تشيفنينغ من صفحة بلدك خلال فترة التقديم، واختر 3 برامج ماجستير في بريطانيا، وقدّم على الجامعات بنفسك.",
      en: "Apply online on the Chevening website from your country's page during the application window, choose 3 UK master's courses, and apply to the universities yourself.",
    },
    url: "https://www.chevening.org/apply/",
    links: { countries: ["gb"] },
  },
  {
    id: "australia-awards",
    type: "gov",
    funder: { ar: "حكومة أستراليا (وزارة الخارجية والتجارة DFAT)", en: "Australian Government (Department of Foreign Affairs and Trade, DFAT)" },
    name: { ar: "منح أستراليا (Australia Awards Scholarships)", en: "Australia Awards Scholarships" },
    hosts: ["au"],
    levels: ["master"],
    eligible: ["dz", "eg", "ma"],
    check: ["jo", "iq", "ps"],
    eligibilityNote: {
      ar: "لدفعة 2027 كانت مفتوحة لمواطني الجزائر ومصر والمغرب ضمن برنامج أفريقيا (ماجستير بالمقررات في مجالات الأولوية). الأردن والعراق وفلسطين مذكورة في برامج أخرى للمنحة، فتحقق من صفحة الدول المشاركة. يجب أن تغادر أستراليا سنتين على الأقل بعد المنحة.",
      en: "For the 2027 intake it was open to citizens of Algeria, Egypt and Morocco under the Africa program (master's by coursework in priority fields). Jordan, Iraq and Palestine appear in other parts of the program, so check the participating countries page. You must leave Australia for at least two years after the award.",
    },
    summary: {
      ar: "ماجستير في جامعة أسترالية: الرسوم كاملة + تذكرة سفر ذهاباً وعودة + بدل استقرار + مبلغ للمعيشة كل أسبوعين + التأمين الصحي للطلاب OSHC.",
      en: "A master's at an Australian university: full tuition + a return airfare + an establishment allowance + a fortnightly contribution to living expenses + Overseas Student Health Cover.",
    },
    covers: {
      ar: ["الرسوم الدراسية كاملة.", "تذكرة سفر ذهاباً وعودة بالدرجة الاقتصادية.", "بدل استقرار يُدفع مرة واحدة للسكن والكتب.", "مساهمة في مصاريف المعيشة كل أسبوعين بسعر تحدده الوزارة.", "التأمين الصحي للطلاب الأجانب (OSHC).", "دعم في اللغة والدراسة عند الحاجة."],
      en: ["Full tuition fees.", "A return economy airfare.", "A one-off establishment allowance for housing and books.", "A fortnightly contribution to living expenses at a rate set by the department.", "Overseas Student Health Cover (OSHC).", "Language and academic support where needed."],
    },
    conditions: {
      ar: [
        "الدراسة في مجالات الأولوية المحددة لبلدك في Country Profile.",
        "يجب أن تغادر أستراليا سنتين على الأقل بعد انتهاء المنحة، والمنحة ليست للراغبين في الهجرة.",
        "دفعة 2027 كان التقديم لها من 1 فبراير حتى 30 أبريل 2026، وأُبلغ المرشحون بنهاية منتصف أغسطس 2026.",
      ],
      en: [
        "Study must be in the priority fields set for your country in its Country Profile.",
        "You must leave Australia for at least two years after the award; it is not for intending migrants.",
        "Applications for the 2027 intake ran from 1 February to 30 April 2026, with shortlisting by mid-August 2026.",
      ],
    },
    deadlines: [
      { date: "2027-04-30", kind: "expected", step: "scholarship", label: { ar: "دفعة 2028: متوقعة من فبراير حتى نهاية أبريل 2027 مثل الدورة السابقة (دفعة 2027 كانت من 1 فبراير حتى 30 أبريل 2026)", en: "2028 intake: expected February to end of April 2027, as in the previous round (2027 intake: 1 February - 30 April 2026)" } },
    ],
    language: { ar: "الدراسة بالإنجليزية", en: "Taught in English" },
    howToApply: {
      ar: "قدّم أونلاين على نظام OASIS التابع لوزارة الخارجية الأسترالية تحت برنامج بلدك خلال فترة التقديم.",
      en: "Apply online on DFAT's OASIS system under your country's scheme during the application window.",
    },
    url: "https://www.dfat.gov.au/people-to-people/australia-awards/participating-countries",
    links: { countries: ["au"] },
  },
  {
    id: "manaaki-nz",
    type: "gov",
    funder: { ar: "حكومة نيوزيلندا (وزارة الخارجية والتجارة MFAT)", en: "New Zealand Government (Ministry of Foreign Affairs and Trade, MFAT)" },
    name: { ar: "منح نيوزيلندا مناكي (Manaaki New Zealand Scholarships)", en: "Manaaki New Zealand Scholarships" },
    hosts: ["nz"],
    levels: ["master"],
    eligible: ["eg"],
    check: ["dz", "dj", "jo", "ma", "tn"],
    eligibilityNote: {
      ar: "لمواطني الدول الشريكة؛ القائمة تتغير كل سنة. مصر من الدول التي حصل مواطنوها على المنحة في جولتي 2025 و2026 حسب وزارة الخارجية النيوزيلندية، والجزائر وجيبوتي والأردن والمغرب وتونس ذُكرت في قوائم سابقة (للتحقق). يجب أن تعود إلى بلدك سنتين على الأقل بعد المنحة.",
      en: "For citizens of partner countries; the list changes every year. Egypt had recipients in the 2025 and 2026 rounds according to New Zealand's foreign ministry, and Algeria, Djibouti, Jordan, Morocco and Tunisia appeared on earlier lists (to verify). You must return to your country for at least two years after the award.",
    },
    summary: {
      ar: "دراسات عليا في جامعة نيوزيلندية: الرسوم كاملة + مبلغ للمعيشة + بدل استقرار + تأمين صحي وتأمين سفر + تذاكر السفر ذهاباً وعودة.",
      en: "Postgraduate study at a New Zealand university: full tuition + a living allowance + an establishment allowance + medical and travel insurance + return travel.",
    },
    covers: {
      ar: ["الرسوم الدراسية كاملة.", "مبلغ لمصاريف المعيشة الأساسية.", "بدل استقرار للبداية.", "تأمين صحي في نيوزيلندا وتأمين سفر.", "تذكرة السفر من بلدك وإليه في بداية المنحة ونهايتها.", "مساعدة في تكاليف البحث والرسالة لكثير من طلاب الدراسات العليا."],
      en: ["Full tuition fees.", "An allowance for basic living costs.", "An establishment allowance.", "Medical insurance in New Zealand and travel insurance.", "Travel between your country and New Zealand at the start and end.", "Help with research and thesis costs for many postgraduate students."],
    },
    conditions: {
      ar: [
        "الدراسة في المجالات الموصى بها لبلدك فقط.",
        "يجب أن تعود إلى بلدك سنتين على الأقل بعد انتهاء المنحة.",
        "المنحة لا تشمل مصاريف الأسرة.",
        "جولة الدراسة في 2027 كان التقديم لها من 1 حتى 31 مارس 2026.",
      ],
      en: [
        "Only in the subjects recommended for your country.",
        "You must return to your country for at least two years after the award.",
        "The scholarship does not cover family costs.",
        "Applications for study starting in 2027 ran from 1 to 31 March 2026.",
      ],
    },
    deadlines: [
      { date: "2027-03-31", kind: "expected", step: "scholarship", label: { ar: "للدراسة في 2028: متوقع في مارس 2027 مثل الجولة السابقة (كانت من 1 حتى 31 مارس 2026)", en: "For study in 2028: expected in March 2027, as in the previous round (1 - 31 March 2026)" } },
    ],
    language: { ar: "الدراسة بالإنجليزية", en: "Taught in English" },
    howToApply: {
      ar: "تأكد أولاً أن بلدك في قائمة الدول المؤهلة على موقع المنحة، ثم قدّم أونلاين خلال فترة التقديم.",
      en: "First check that your country is on the eligible list on the scholarship website, then apply online during the application window.",
    },
    url: "https://www.auckland.ac.nz/en/study/international-students/scholarships-loans-and-funding/manaaki-new-zealand-scholarships.html",
    links: { countries: ["nz"] },
  },
  {
    id: "malaysia-mis",
    type: "gov",
    funder: { ar: "حكومة ماليزيا (وزارة التعليم العالي MOHE)", en: "Government of Malaysia (Ministry of Higher Education, MOHE)" },
    name: { ar: "منحة ماليزيا الدولية (MIS) للماجستير والدكتوراه", en: "Malaysia International Scholarship (MIS)" },
    hosts: ["my"],
    levels: ["master"],
    eligible: ["dz", "bh", "eg", "iq", "jo", "kw", "ly", "ma", "ps", "qa", "sa", "sd", "sy", "tn", "ae", "ye"],
    check: [],
    eligibilityNote: {
      ar: "حسب إرشادات دورة 2026: مفتوحة لمواطني الجزائر والبحرين ومصر والعراق والأردن والكويت وليبيا والمغرب وفلسطين وقطر والسعودية والسودان وسوريا وتونس والإمارات واليمن. ليست مفتوحة لجزر القمر وجيبوتي ولبنان وموريتانيا وعُمان والصومال. العمر 40 سنة أو أقل للماجستير.",
      en: "Per the 2026 guidelines: open to citizens of Algeria, Bahrain, Egypt, Iraq, Jordan, Kuwait, Libya, Morocco, Palestine, Qatar, Saudi Arabia, Sudan, Syria, Tunisia, the UAE and Yemen. Not open to Comoros, Djibouti, Lebanon, Mauritania, Oman or Somalia. Age 40 or under for master's.",
    },
    summary: {
      ar: "ماجستير في جامعة ماليزية: الرسوم الدراسية تُدفع للجامعة مباشرة + 1,500 رينغيت شهرياً للمعيشة.",
      en: "A master's at a Malaysian university: tuition paid to the university directly + RM 1,500 a month for living costs.",
    },
    covers: {
      ar: ["الرسوم الدراسية (تدفعها الوزارة للجامعة).", "1,500 رينغيت ماليزي شهرياً للمعيشة، تُصرف كل 4 أشهر بعد تقرير التقدم الدراسي."],
      en: ["Tuition fees (paid by the ministry to the university).", "RM 1,500 a month for living costs, paid every four months after a progress report."],
    },
    conditions: {
      ar: [
        "معدل البكالوريوس 3.00 على الأقل أو تقدير Second Class Upper.",
        "IELTS 6.0 أو TOEFL ورقي 550 أو شهادة جامعية بالإنجليزية مع إفادة رسمية.",
        "الطب والتمريض والصيدلة غير مشمولة.",
        "خطاب القبول من جامعة ماليزية مطلوب فقط إذا كنت تدرس بالفعل أو حصلت على قبول.",
        "دورة 2026/2027 كانت من 4 مارس حتى 3 أبريل 2026.",
      ],
      en: [
        "A bachelor's CGPA of at least 3.00 or Second Class Upper.",
        "IELTS 6.0, TOEFL paper-based 550, or an English-taught degree with an official declaration.",
        "Medicine, nursing and pharmacy are excluded.",
        "A Malaysian admission letter is needed only if you already study there or already have admission.",
        "The 2026/27 round ran from 4 March to 3 April 2026.",
      ],
    },
    deadlines: [
      { date: "2027-04-03", kind: "expected", step: "scholarship", label: { ar: "دورة 2027/2028: متوقعة في مارس وأبريل 2027 مثل الدورة السابقة (كانت من 4 مارس حتى 3 أبريل 2026)", en: "2027/28 round: expected in March and April 2027, as in the previous round (4 March - 3 April 2026)" } },
    ],
    language: { ar: "الدراسة بالإنجليزية في أغلب برامج الدراسات العليا", en: "Most postgraduate programmes are taught in English" },
    howToApply: {
      ar: "قدّم أونلاين على بوابة المنح في وزارة التعليم العالي الماليزية (biasiswa.mohe.gov.my) خلال فترة التقديم.",
      en: "Apply online on the Malaysian Ministry of Higher Education scholarship portal (biasiswa.mohe.gov.my) during the application window.",
    },
    url: "https://biasiswa.mohe.gov.my/INTER/doc/MIS/Guidelines%20MIS%202026.pdf",
    links: { countries: ["my"] },
  },
  {
    id: "turkiye-burslari",
    type: "gov",
    funder: { ar: "حكومة تركيا (رئاسة أتراك المهجر والمجتمعات ذات القربى YTB)", en: "Government of Türkiye (Presidency for Turks Abroad and Related Communities, YTB)" },
    name: { ar: "منح تركيا (Türkiye Bursları)", en: "Türkiye Scholarships (Türkiye Bursları)" },
    hosts: ["tr"],
    levels: ["bachelor", "master"],
    eligible: ALL,
    check: [],
    eligibilityNote: {
      ar: "مفتوحة لمواطني كل الدول عدا تركيا. لكل مستوى حد أدنى للمعدل وشروط سن منشورة على الموقع الرسمي. لا تُمنح منح الدراسات العليا في العلوم الصحية.",
      en: "Open to nationals of every country except Türkiye. Each level has a minimum grade and age rules on the official site. Graduate scholarships are not given in the health sciences.",
    },
    summary: {
      ar: "قبول في جامعة تركية + إعفاء من الرسوم + مبلغ شهري (6,500 ليرة للبكالوريوس و9,500 للماجستير) + سكن + تأمين صحي + سنة لغة تركية.",
      en: "A place at a Turkish university + tuition waiver + a monthly stipend (TRY 6,500 for bachelor's, TRY 9,500 for master's) + housing + health insurance + a Turkish language year.",
    },
    covers: {
      ar: ["تحديد الجامعة والقسم لك من الجهة المانحة.", "إعفاء كامل من الرسوم الدراسية.", "مبلغ شهري: 6,500 ليرة تركية للبكالوريوس، 9,500 للماجستير، 13,000 للدكتوراه.", "سكن.", "تأمين صحي.", "دورة لغة تركية لمدة سنة."],
      en: ["University and department placement by the scholarship body.", "Full tuition waiver.", "Monthly stipend: TRY 6,500 for bachelor's, 9,500 for master's, 13,000 for PhD.", "Accommodation.", "Health insurance.", "A one-year Turkish language course."],
    },
    conditions: {
      ar: [
        "المنحة تشمل سنة لدراسة اللغة التركية، فخطط لمدة دراسة أطول بسنة.",
        "تقدّم مرة واحدة فقط في الدورة على نظام TBBS، وتختار عدة برامج بالترتيب.",
        "المبلغ الشهري بالليرة التركية، وقيمته تتغير مع سعر الصرف.",
      ],
      en: [
        "The scholarship includes a Turkish language year, so plan for one extra year of study.",
        "You apply once per cycle on the TBBS system and rank several programmes.",
        "The stipend is in Turkish lira, so its value moves with the exchange rate.",
      ],
    },
    deadlines: [
      { date: "2027-02-20", kind: "expected", step: "both", label: { ar: "من 10 يناير حتى 20 فبراير 2027 (الموقع الرسمي يقول إن هذه هي فترة التقديم كل سنة)", en: "10 January to 20 February 2027 (the official site says this is the application period every year)" } },
    ],
    language: { ar: "برامج بالتركية وبالإنجليزية", en: "Programmes in Turkish and in English" },
    howToApply: {
      ar: "قدّم على نظام منح تركيا TBBS على turkiyeburslari.gov.tr خلال فترة التقديم. المنحة تختار لك الجامعة، فلا تحتاج قبولاً مسبقاً.",
      en: "Apply on the Türkiye Scholarships system (TBBS) at turkiyeburslari.gov.tr during the application period. The scholarship places you at a university, so no prior admission is needed.",
    },
    url: "https://cdnweb.turkiyeburslari.gov.tr/fulltimeprograms",
    links: { countries: ["tr"], note: { ar: "الجامعة يحددها برنامج المنحة، وبرامج تركيا في دليلنا للمقارنة فقط.", en: "The scholarship decides the university; our Türkiye programmes are only for comparison." } },
  },
  {
    id: "global-korea-scholarship",
    type: "gov",
    funder: { ar: "حكومة كوريا الجنوبية (المعهد الوطني للتعليم الدولي NIIED)", en: "Government of the Republic of Korea (National Institute for International Education, NIIED)" },
    name: { ar: "منحة الحكومة الكورية (GKS)", en: "Global Korea Scholarship (GKS)" },
    hosts: ["kr"],
    levels: ["bachelor", "master"],
    eligible: ["dz", "bh", "eg", "iq", "jo", "lb", "ly", "mr", "ma", "om", "ps", "sa", "sd", "sy", "tn", "ae", "kw"],
    check: [],
    eligibilityNote: {
      ar: "حسب دليل منحة الماجستير والدكتوراه 2026 لها حصص لمواطني: الجزائر والبحرين ومصر والعراق والأردن ولبنان وليبيا وموريتانيا والمغرب وعُمان وفلسطين والسعودية والسودان وسوريا وتونس والإمارات، والكويت في مسار الجامعات فقط. اليمن وقطر غير موجودتين في الجداول. العمر أقل من 40 سنة، والمعدل 80% أو أعلى (أو ضمن أعلى 20% من الدفعة).",
      en: "Per the 2026 graduate guidelines there are quotas for citizens of Algeria, Bahrain, Egypt, Iraq, Jordan, Lebanon, Libya, Mauritania, Morocco, Oman, Palestine, Saudi Arabia, Sudan, Syria, Tunisia and the UAE, and Kuwait on the university track only. Yemen and Qatar are not in the tables. Under 40 years of age, and a grade of 80% or more (or the top 20% of the class).",
    },
    summary: {
      ar: "رسوم الدراسة + تذكرة طيران + مبلغ شهري (16,560,000 وون في السنة لبرنامج الدرجة، أي 1,380,000 وون في الشهر) + سنة لغة كورية.",
      en: "Tuition + airfare + a monthly allowance (KRW 16,560,000 a year in the degree programme, i.e. KRW 1,380,000 a month) + a Korean language year.",
    },
    covers: {
      ar: ["الرسوم الدراسية كاملة، والجامعة تتحمل رسوم القبول.", "تذكرة طيران بالدرجة الاقتصادية.", "مبلغ شهري: 14,400,000 وون في السنة أثناء سنة اللغة و16,560,000 وون في السنة أثناء الدرجة (حسب الميزانية).", "سنة لغة كورية قبل الدرجة (إلا لمن لديه مستوى TOPIK 5 أو أعلى)."],
      en: ["Full tuition; the university covers the admission fee.", "Economy-class airfare.", "Monthly allowance: KRW 14,400,000 a year during the language year and KRW 16,560,000 a year during the degree (subject to budget).", "A Korean language year before the degree (unless you hold TOPIK level 5 or higher)."],
    },
    conditions: {
      ar: ["تختار مساراً واحداً فقط: مسار السفارة (عن طريق السفارة الكورية في بلدك) أو مسار الجامعة (عن طريق الجامعة الكورية مباشرة).", "الاختيار على مرحلتين: السفارة أو الجامعة أولاً، ثم NIIED.", "الأرقام من دليل 2026؛ دليل 2027 للماجستير لم يُنشر بعد."],
      en: ["Choose one track only: the embassy track (through the Korean embassy in your country) or the university track (directly through a Korean university).", "Selection is in two rounds: the embassy or university first, then NIIED.", "Figures are from the 2026 guidelines; the 2027 graduate guidelines are not out yet."],
    },
    deadlines: [
      { date: "2027-02-25", kind: "expected", step: "scholarship", label: { ar: "منحة الماجستير والدكتوراه 2027: متوقعة في فبراير 2027 (مسار السفارة في دورة 2026 كان من 12 حتى 25 فبراير 2026 على موقع Study in Korea، وبعض السفارات تحدد موعداً أبكر)", en: "2027 graduate scholarship: expected in February 2027 (the 2026 embassy track ran 12-25 February 2026 on Study in Korea; some embassies set an earlier date)" } },
      { date: "2027-09-30", kind: "expected", step: "scholarship", label: { ar: "منحة البكالوريوس 2028: متوقعة في سبتمبر وأكتوبر 2027 (دعوة 2027 فُتحت في سبتمبر 2026)، والموعد الدقيق تحدده كل سفارة", en: "2028 undergraduate scholarship: expected September-October 2027 (the 2027 call opened in September 2026); each embassy sets the exact date" } },
    ],
    language: { ar: "برامج بالكورية وبالإنجليزية (سنة اللغة الكورية جزء من المنحة)", en: "Programmes in Korean and in English (the Korean language year is part of the scholarship)" },
    howToApply: {
      ar: "قدّم أونلاين على موقع Study in Korea (studyinkorea.go.kr) واختر المسار، ثم تابع إعلان السفارة الكورية في بلدك لمسار السفارة.",
      en: "Apply online on Study in Korea (studyinkorea.go.kr) and choose the track; for the embassy track, follow the Korean embassy's notice in your country.",
    },
    url: "https://www.studyinkorea.go.kr/",
    sources: ["https://www.esteri.it/wp-content/uploads/2026/02/2026-GKS-G-Application-Guidelines-English.pdf", "https://www.mofa.go.kr/ca-en/brd/m_5231/view.do?seq=761813"],
  },
  {
    id: "mext-japan",
    type: "gov",
    funder: { ar: "حكومة اليابان (وزارة التعليم والثقافة والرياضة والعلوم والتكنولوجيا MEXT)", en: "Government of Japan (Ministry of Education, Culture, Sports, Science and Technology, MEXT)" },
    name: { ar: "منحة الحكومة اليابانية (MEXT) للدراسات العليا", en: "Japanese Government (MEXT) Scholarship for Research Students" },
    hosts: ["jp"],
    levels: ["master"],
    eligible: ["eg", "ae", "sd"],
    check: ["dz", "bh", "km", "dj", "iq", "jo", "kw", "lb", "ly", "mr", "ma", "om", "ps", "qa", "sa", "so", "sy", "tn", "ye"],
    eligibilityNote: {
      ar: "التقديم عن طريق السفارة اليابانية في بلد جنسيتك، ولكل سفارة شروطها ومواعيدها. رأينا إعلانات رسمية لمصر والإمارات، والسودانيون يحضرون الاختبارات في سفارة اليابان بالقاهرة. باقي الدول: راجع موقع سفارة اليابان في بلدك.",
      en: "You apply through the Japanese embassy in your country of nationality, and each embassy sets its own rules and dates. We saw official calls for Egypt and the UAE, and Sudanese applicants sit the exams at the Japanese Embassy in Cairo. Other countries: check the Japanese embassy site in your country.",
    },
    summary: {
      ar: "إعفاء من الرسوم + تذكرة طيران + مبلغ شهري 143,000 ين (طالب بحث) أو 144,000 (ماجستير) أو 145,000 (دكتوراه).",
      en: "Tuition waiver + airfare + a monthly allowance of JPY 143,000 (research student), 144,000 (master's) or 145,000 (PhD).",
    },
    covers: {
      ar: ["إعفاء من رسوم الامتحان والقبول والدراسة.", "تذكرة الذهاب إلى اليابان والعودة.", "مبلغ شهري: 143,000 ين للطالب غير النظامي أو في فترة التحضير، 144,000 للماجستير، 145,000 للدكتوراه (قابل للتغيير).", "زيادة 2,000 أو 3,000 ين في بعض المناطق."],
      en: ["Exemption from examination, admission and tuition fees.", "Return airfare to Japan.", "Monthly allowance: JPY 143,000 for non-regular or preparatory students, 144,000 for master's, 145,000 for PhD (subject to change).", "An extra JPY 2,000 or 3,000 in some areas."],
    },
    conditions: {
      ar: ["ترشيح السفارة لا يضمن القبول؛ بعد الترشيح تحصل بنفسك على قبول من جامعة يابانية.", "كثير من الطلاب يبدأون كطلاب بحث غير نظاميين ثم يدخلون اختبار الماجستير.", "في مصر الاختبارات والمقابلة في القاهرة فقط، ولا توجد اختبارات أونلاين."],
      en: ["The embassy's recommendation does not guarantee admission; after it you must obtain acceptance from a Japanese university yourself.", "Many students start as non-regular research students and then sit the master's entrance exam.", "In Egypt the exams and interview are in Cairo only; there are no online exams."],
    },
    deadlines: [
      { date: "2027-05-31", kind: "expected", step: "scholarship", label: { ar: "منحة 2028: متوقعة من أبريل حتى مايو 2027 (دورة 2027 أُعلنت في أبريل 2026 وأُغلقت في مايو 2026 في مصر والإمارات)، والموعد الدقيق على موقع سفارة اليابان في بلدك", en: "2028 scholarship: expected April-May 2027 (the 2027 cycle was announced in April 2026 and closed in May 2026 in Egypt and the UAE); the exact date is on the Japanese embassy site in your country" } },
    ],
    language: { ar: "بالإنجليزية أو اليابانية حسب الجامعة والبرنامج", en: "In English or Japanese, depending on the university and programme" },
    howToApply: {
      ar: "تابع إعلان سفارة اليابان في بلدك في أبريل، وأرسل استمارة الطلب وخطة البحث والشهادة الصحية وخطاب التوصية للسفارة (لا ترسل شيئاً لوزارة MEXT في اليابان مباشرة).",
      en: "Watch for the Japanese embassy's call in your country in April, and send the application form, research plan, health certificate and recommendation letter to the embassy (do not send anything to MEXT in Japan directly).",
    },
    url: "https://www.studyinjapan.go.jp/en/smap_stopj-applications_research.html",
    sources: ["https://www.in.emb-japan.go.jp/education/Research_Student.html", "https://www.eg.emb-japan.go.jp/itpr_en/00_000042.html", "https://www.uae.emb-japan.go.jp/itpr_en/r_mext2027.html"],
  },
  {
    id: "romania-government",
    type: "gov",
    funder: { ar: "حكومة رومانيا (وزارة الخارجية)", en: "Government of Romania (Ministry of Foreign Affairs)" },
    name: { ar: "منح الحكومة الرومانية لغير الأوروبيين", en: "Romanian Government scholarships for non-EU citizens" },
    hosts: ["ro"],
    levels: ["bachelor", "master"],
    eligible: ALL,
    check: [],
    eligibilityNote: {
      ar: "مفتوحة لمواطني الدول غير الأعضاء في الاتحاد الأوروبي. لا يحق التقديم لمن يحمل جنسية دولة أوروبية أيضاً، ولذوي الأصل الروماني (لهم برنامج آخر).",
      en: "Open to citizens of non-EU countries. Not open to people who also hold an EU citizenship, or to ethnic Romanians (they have a separate programme).",
    },
    summary: {
      ar: "دراسة بدون رسوم + سكن في المدن الجامعية + مبلغ شهري.",
      en: "Tuition-free study + a place in student housing + a monthly allowance.",
    },
    covers: {
      ar: ["إعفاء من الرسوم الدراسية.", "سكن في المدن الجامعية حسب توفر الأماكن.", "مبلغ شهري: 65 يورو للبكالوريوس و75 يورو للماجستير حسب مصادر غير رسمية (للتحقق)."],
      en: ["Tuition waiver.", "Student housing, subject to availability.", "Monthly allowance: €65 for bachelor's and €75 for master's according to unofficial sources (to verify)."],
    },
    conditions: {
      ar: [
        "المبلغ الشهري صغير جداً ولا يغطي المعيشة وحده.",
        "أغلب المنح للدراسة بالرومانية مع سنة تحضيرية للغة. تحقق إن كان البرنامج الذي تريده بالإنجليزية مقبولاً في المنحة (للتحقق).",
      ],
      en: [
        "The monthly amount is very small and does not cover living costs on its own.",
        "Most places are for study in Romanian, with a preparatory language year. Check whether an English-taught programme is accepted (to verify).",
      ],
    },
    deadlines: [
      { date: "2027-03-31", kind: "expected", step: "scholarship", label: { ar: "حوالي 31 مارس 2027 (فترة الدورة الماضية: 16 فبراير إلى 31 مارس 2026). النتائج عادة في منتصف يوليو.", en: "Around 31 March 2027 (last cycle: 16 February to 31 March 2026). Results usually mid-July." } },
    ],
    language: { ar: "الرومانية غالباً (مع سنة تحضيرية)", en: "Mostly Romanian (with a preparatory year)" },
    howToApply: {
      ar: "التقديم إلكتروني على بوابة المنح الرسمية لوزارة الخارجية الرومانية.",
      en: "Online, on the Romanian Ministry of Foreign Affairs scholarship portal.",
    },
    url: "https://scholarships.studyinromania.gov.ro",
    links: { countries: ["ro"], note: { ar: "أغلب منح الحكومة للدراسة بالرومانية. تحقق من قبول البرامج الإنجليزية.", en: "Most government places are for study in Romanian. Check whether English-taught programmes are accepted." } },
  },
  {
    id: "nawa-banach",
    type: "gov",
    funder: { ar: "الوكالة البولندية للتبادل الأكاديمي (NAWA)", en: "Polish National Agency for Academic Exchange (NAWA)" },
    name: { ar: "منحة باناخ للماجستير", en: "Banach Scholarship Programme" },
    hosts: ["pl"],
    levels: ["master"],
    eligible: ["iq", "jo", "lb", "ps", "tn"],
    check: [],
    eligibilityNote: {
      ar: "الدول العربية المؤهلة في دعوة 2026: العراق، الأردن، لبنان، فلسطين، تونس. يجب أن تكون حصلت على البكالوريوس من جامعة في إحدى الدول المؤهلة في 2024 أو بعدها.",
      en: "Eligible Arab states in the 2026 call: Iraq, Jordan, Lebanon, Palestine, Tunisia. Your bachelor's must be from a university in an eligible country, obtained in 2024 or later.",
    },
    summary: {
      ar: "إعفاء من الرسوم في الجامعات الحكومية + 2,500 زلوتي شهرياً + مبلغ مقطوع للسفر.",
      en: "Tuition exemption at public universities + PLN 2,500 a month + a one-time travel lump sum.",
    },
    covers: {
      ar: ["إعفاء من الرسوم الدراسية في الجامعات الحكومية.", "2,500 زلوتي شهرياً (حتى 12 شهراً حسب دعوة 2026).", "مبلغ مقطوع لمرة واحدة للسفر."],
      en: ["Tuition exemption at public universities.", "PLN 2,500 a month (up to 12 months under the 2026 call).", "A one-time travel lump sum."],
    },
    conditions: {
      ar: ["مستوى إنجليزية B2 على الأقل.", "دمجت NAWA برنامج Łukasiewicz داخل باناخ.", "المجالات المقبولة محددة في الدعوة الرسمية، راجعها قبل اختيار البرنامج."],
      en: ["English at B2 level or higher.", "NAWA merged the Łukasiewicz programme into Banach.", "Eligible fields are set in the official call; check them before choosing a programme."],
    },
    deadlines: [
      { date: "2027-05-08", kind: "expected", step: "scholarship", label: { ar: "حوالي مايو 2027 (موعد دعوة 2026 كان 8 مايو 2026 الساعة 15:00، والنتائج حتى 31 يوليو).", en: "Around May 2027 (the 2026 call closed on 8 May 2026 at 15:00, results by 31 July)." } },
    ],
    language: { ar: "الإنجليزية", en: "English" },
    howToApply: { ar: "عبر نظام NAWA الإلكتروني عند فتح الدعوة.", en: "Through the NAWA online system when the call opens." },
    url: "https://www.nawa.gov.pl/en/students/foreign-students/the-banach-scholarship-programme",
    links: { countries: ["pl"], note: { ar: "للجامعات الحكومية فقط، وللمجالات المذكورة في الدعوة.", en: "Public universities only, in the fields named in the call." } },
  },
  {
    id: "si-sisgp",
    type: "gov",
    funder: { ar: "المعهد السويدي (Swedish Institute)", en: "Swedish Institute (SI)" },
    name: { ar: "منحة المعهد السويدي للمهنيين العالميين (SISGP)", en: "SI Scholarship for Global Professionals (SISGP)" },
    hosts: ["se"],
    levels: ["master"],
    eligible: ["eg", "iq", "jo", "ma"],
    check: [],
    eligibilityNote: {
      ar: "الدول العربية المؤهلة: مصر، العراق، الأردن، المغرب. يجب أن تكون لديك خبرة عمل 3,000 ساعة على الأقل.",
      en: "Eligible Arab countries: Egypt, Iraq, Jordan, Morocco. You need at least 3,000 hours of work experience.",
    },
    summary: {
      ar: "الرسوم الدراسية كاملة + 12,000 كرونة سويدية شهرياً + منحة سفر.",
      en: "Full tuition + SEK 12,000 a month + a travel grant.",
    },
    covers: {
      ar: ["الرسوم الدراسية كاملة.", "12,000 كرونة سويدية شهرياً للمعيشة.", "منحة سفر لمرة واحدة."],
      en: ["Full tuition.", "SEK 12,000 a month for living costs.", "A one-time travel grant."],
    },
    conditions: {
      ar: ["يجب أن تقدّم أولاً على الماجستير في universityadmissions.se قبل 15 يناير 2027.", "3,000 ساعة خبرة عمل على الأقل.", "البرامج المؤهلة محددة في قائمة المعهد السويدي."],
      en: ["You must first apply for the master's on universityadmissions.se by 15 January 2027.", "At least 3,000 hours of work experience.", "Eligible programmes are listed by the Swedish Institute."],
    },
    deadlines: [
      { date: "2027-01-15", kind: "official", step: "admission", label: { ar: "التقديم على الماجستير حتى 15 يناير 2027", en: "Master's application by 15 January 2027" } },
      { date: "2027-02-24", kind: "official", step: "scholarship", label: { ar: "طلب المنحة من 8 إلى 24 فبراير 2027، والنتائج 22 أبريل 2027", en: "Scholarship application 8–24 February 2027; results 22 April 2027" } },
    ],
    language: { ar: "الإنجليزية", en: "English" },
    howToApply: { ar: "قدّم على الماجستير أولاً، ثم قدّم على المنحة في موقع المعهد السويدي في فترة فبراير.", en: "Apply for the master's first, then apply for the scholarship on the Swedish Institute site in the February window." },
    url: "https://si.se/en/apply/scholarships/swedish-institute-scholarships-for-global-professionals/",
    links: { countries: ["se"], note: { ar: "للبرامج المؤهلة فقط في قائمة المعهد السويدي.", en: "Eligible programmes on the Swedish Institute list only." } },
  },
  {
    id: "aecid-africa-med",
    type: "gov",
    funder: { ar: "الوكالة الإسبانية للتعاون الدولي من أجل التنمية (AECID)", en: "Spanish Agency for International Development Cooperation (AECID)" },
    name: { ar: "منح MAEC-AECID برنامج أفريقيا-المتوسط للماجستير", en: "MAEC-AECID scholarships, África-Med Master programme" },
    hosts: ["es"],
    levels: ["master"],
    eligible: ["dz", "eg", "iq", "jo", "lb", "ly", "ma", "mr", "ps", "sd", "tn"],
    check: [],
    eligibilityNote: {
      ar: "الدول العربية المذكورة في دعوة 2026-2027: الجزائر، مصر، العراق، الأردن، لبنان، ليبيا، المغرب، موريتانيا، فلسطين، السودان، تونس. الدورات السابقة اشترطت أن يكون المتقدم موظفاً في القطاع العام في بلده (للتحقق في الدعوة القادمة).",
      en: "Arab states named in the 2026-2027 call: Algeria, Egypt, Iraq, Jordan, Lebanon, Libya, Morocco, Mauritania, Palestine, Sudan, Tunisia. Earlier editions required applicants to work in their country's public sector (to verify in the next call).",
    },
    summary: {
      ar: "2,000 يورو شهرياً لمدة 11 شهراً + تأمين صحي في إسبانيا.",
      en: "€2,000 a month for 11 months + health insurance in Spain.",
    },
    covers: {
      ar: ["2,000 يورو شهرياً من 1 سبتمبر إلى 31 يوليو.", "تأمين صحي في إسبانيا طوال فترة المنحة.", "دفع الرسوم الدراسية بشكل منفصل: غير منشور في المصدر. المبلغ الشهري هو كل المنحة."],
      en: ["€2,000 a month from 1 September to 31 July.", "Health insurance in Spain for the grant period.", "Separate payment of tuition: not published in the source. The monthly amount is the whole grant."],
    },
    conditions: {
      ar: ["يجب إثبات معرفة باللغة الإسبانية.", "الماجستير يجب أن يكون رسمياً وحضورياً و60 ساعة معتمدة (ECTS) كحد أقصى.", "30 منحة فقط في دعوة 2026-2027، وغير قابلة للتجديد."],
      en: ["You must show knowledge of Spanish.", "The master's must be official, on campus and 60 ECTS at most.", "Only 30 grants in the 2026-2027 call, not renewable."],
    },
    deadlines: [
      { date: "2027-07-15", kind: "expected", step: "scholarship", label: { ar: "حوالي يوليو 2027 (دعوة 2026-2027 كانت مفتوحة من 2 إلى 15 يوليو 2026).", en: "Around July 2027 (the 2026-2027 call was open from 2 to 15 July 2026)." } },
    ],
    language: { ar: "الإسبانية مطلوبة", en: "Spanish required" },
    howToApply: { ar: "على الموقع الإلكتروني للوكالة (sede electrónica) عند نشر الدعوة في الجريدة الرسمية الإسبانية.", en: "On AECID's e-office (sede electrónica) once the call is published in Spain's official gazette." },
    url: "https://exteriores.gob.es/Embajadas/rabat/es/Comunicacion/Noticias/Paginas/Articulos/CONVOCATORIA-DE-BECAS-MAEC-AECID-PARA-LA-CIUDADANIA-DE-PAISES-DE-AFRICA-Y-ORIENTE-MEDIO-2026-2027.aspx",
    links: { countries: ["es"], note: { ar: "تشترط معرفة الإسبانية وماجستير رسمي لا يتجاوز 60 ساعة معتمدة.", en: "Requires Spanish and an official master's of 60 ECTS or less." } },
  },
  {
    id: "learn-africa",
    type: "foundation",
    funder: { ar: "مؤسسة نساء من أجل أفريقيا (إسبانيا)", en: "Fundación Mujeres por África (Spain)" },
    name: { ar: "برنامج Learn Africa للنساء الأفريقيات", en: "Learn Africa programme for African women" },
    hosts: ["es"],
    levels: ["master"],
    eligible: [],
    check: AFRICAN_ARAB,
    eligibilityNote: {
      ar: "للنساء من الدول الأفريقية فقط. الدول العربية الأفريقية: الجزائر، جزر القمر، جيبوتي، مصر، ليبيا، موريتانيا، المغرب، الصومال، السودان، تونس. قائمة الدول الرسمية للتحقق.",
      en: "For women from African countries only. African Arab states: Algeria, Comoros, Djibouti, Egypt, Libya, Mauritania, Morocco, Somalia, Sudan, Tunisia. Official country list to verify.",
    },
    summary: {
      ar: "الرسوم الدراسية + السفر ذهاباً وإياباً + السكن + المعيشة + التأمين الصحي.",
      en: "Tuition + return travel + accommodation + living costs + health insurance.",
    },
    covers: {
      ar: ["الرسوم الدراسية.", "تذكرة سفر ذهاباً وإياباً.", "السكن والمعيشة.", "تأمين صحي."],
      en: ["Tuition.", "Return ticket.", "Accommodation and living costs.", "Health insurance."],
    },
    conditions: {
      ar: ["للنساء فقط.", "البرامج محددة في جامعات إسبانية شريكة، وأكثر من 100 منحة في دورة 2026-2027.", "لغة البرنامج حسب الجامعة."],
      en: ["Women only.", "Specific programmes at partner Spanish universities; more than 100 grants in the 2026-2027 cycle.", "Teaching language depends on the university."],
    },
    deadlines: [
      { date: "2027-04-19", kind: "expected", step: "scholarship", label: { ar: "حوالي أبريل 2027 (آخر موعد في دورة 2026 كان 19 أبريل 2026).", en: "Around April 2027 (the 2026 cycle closed on 19 April 2026)." } },
    ],
    language: { ar: "حسب البرنامج (إسبانية أو إنجليزية)", en: "Depends on the programme (Spanish or English)" },
    howToApply: { ar: "على موقع المؤسسة عند فتح الدعوة.", en: "On the foundation's website when the call opens." },
    url: "https://mujeresporafrica.es/learn-africa-programa-2026/",
    links: null,
  },
  {
    id: "daad-epos",
    type: "gov",
    funder: { ar: "الهيئة الألمانية للتبادل العلمي (DAAD)", en: "German Academic Exchange Service (DAAD)" },
    name: { ar: "منح DAAD لبرامج الدراسات العليا المرتبطة بالتنمية (EPOS)", en: "DAAD Development-Related Postgraduate Courses (EPOS)" },
    hosts: ["de"],
    levels: ["master"],
    eligible: [],
    check: NON_GULF,
    eligibilityNote: {
      ar: "لمواطني الدول النامية في قائمة DAC. يُتوقع أن تشمل كل الدول العربية ما عدا دول الخليج الست، لكن القائمة الرسمية لكل برنامج للتحقق.",
      en: "For nationals of developing countries on the DAC list. This likely covers every Arab state except the six Gulf states, but the official list for each course is to verify.",
    },
    summary: {
      ar: "992 يورو شهرياً + تأمين صحي + بدل سفر، والدراسة في أغلب الجامعات الحكومية الألمانية بدون رسوم.",
      en: "€992 a month + health insurance + travel allowance; most German public universities charge no tuition.",
    },
    covers: {
      ar: ["992 يورو شهرياً.", "تأمين صحي.", "بدل سفر.", "الرسوم الدراسية: أغلب الجامعات الحكومية الألمانية بدون رسوم. التفاصيل حسب كل برنامج."],
      en: ["€992 a month.", "Health insurance.", "Travel allowance.", "Tuition: most German public universities charge none. Details depend on each course."],
    },
    conditions: {
      ar: ["خبرة عملية سنتان على الأقل.", "فقط لبرامج محددة في قائمة EPOS، وكل برنامج له موعده.", "برامج قائمتنا الحالية في ألمانيا ليست ضمن قائمة EPOS حسب علمنا، فتحقق من القائمة الرسمية."],
      en: ["At least two years of work experience.", "Only for courses on the EPOS list, each with its own deadline.", "As far as we know, the German programmes in our catalogue are not on the EPOS list; check the official list."],
    },
    deadlines: [
      { date: "2027-08-31", kind: "varies", step: "scholarship", label: { ar: "حسب البرنامج: من يونيو إلى أكتوبر تقريباً، قبل سنة من بدء الدراسة. مواعيد دورة 2027/2028 كانت يونيو إلى أكتوبر 2026.", en: "Per course: roughly June to October, a year before the start. Deadlines for 2027/28 were June to October 2026." } },
    ],
    language: { ar: "الإنجليزية أو الألمانية حسب البرنامج", en: "English or German, depending on the course" },
    howToApply: { ar: "مباشرة لدى الجامعة الألمانية المعنية حسب تعليمات البرنامج، باستخدام قاعدة بيانات منح DAAD.", en: "Directly with the German university running the course, as its instructions say; find it in the DAAD scholarship database." },
    url: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/",
    links: null,
  },
  {
    id: "daad-helmut-schmidt",
    type: "gov",
    funder: { ar: "الهيئة الألمانية للتبادل العلمي (DAAD)", en: "German Academic Exchange Service (DAAD)" },
    name: { ar: "منح هيلموت شميت للماجستير في السياسات العامة والحكم الرشيد", en: "Helmut Schmidt Programme: master's in public policy and good governance" },
    hosts: ["de"],
    levels: ["master"],
    eligible: [],
    check: NON_GULF,
    eligibilityNote: {
      ar: "متاحة لمعظم الدول العربية ما عدا البحرين والكويت وعُمان وقطر والسعودية والإمارات (حسب مصدر إعلامي). القائمة الرسمية للتحقق.",
      en: "Open to most Arab states except Bahrain, Kuwait, Oman, Qatar, Saudi Arabia and the UAE (according to a media source). Official list to verify.",
    },
    summary: {
      ar: "منحة DAAD شهرية + تأمين صحي + سفر، لبرامج ماجستير محددة في السياسات العامة والقانون والاقتصاد والعلوم السياسية.",
      en: "Monthly DAAD stipend + health insurance + travel, for selected master's in public policy, law, economics and political science.",
    },
    covers: {
      ar: ["مبلغ شهري من DAAD (القيمة: غير منشور في المصدر الذي اطلعنا عليه).", "تأمين صحي وبدل سفر.", "الرسوم: البرامج في جامعات ألمانية محددة، والتفاصيل حسب البرنامج."],
      en: ["A monthly DAAD stipend (amount: not published in the source we read).", "Health insurance and travel allowance.", "Tuition: courses are at specific German universities; details per course."],
    },
    conditions: {
      ar: ["البرامج محددة في مجالات السياسات العامة والحكم، وليست في تخصصات قائمتنا الحالية.", "تشمل غالباً دورة لغة ألمانية قبل الدراسة."],
      en: ["Courses are limited to public policy and governance fields, not the fields in our catalogue.", "Usually includes a German language course before the studies."],
    },
    deadlines: [
      { date: "2027-07-31", kind: "expected", step: "scholarship", label: { ar: "حوالي نهاية يوليو 2027 (كان 31 يوليو 2026 في الدورة الماضية).", en: "Around the end of July 2027 (last cycle: 31 July 2026)." } },
    ],
    language: { ar: "الإنجليزية أو الألمانية حسب البرنامج", en: "English or German, depending on the course" },
    howToApply: { ar: "عبر بوابة DAAD حسب تعليمات الدعوة، ابحث عنها في قاعدة بيانات منح DAAD.", en: "Through the DAAD portal as the call says; find it in the DAAD scholarship database." },
    url: "https://www2.daad.de/deutschland/stipendium/datenbank/en/21148-scholarship-database/",
    links: null,
  },
  {
    id: "tu-delft-van-effen",
    type: "uni",
    funder: { ar: "جامعة دلفت للتكنولوجيا (TU Delft)", en: "Delft University of Technology (TU Delft)" },
    name: { ar: "منحة جوستوس ولويز فان إيفن للتميز", en: "Justus & Louise van Effen Excellence Scholarship" },
    hosts: ["nl"],
    levels: ["master"],
    eligible: ALL,
    check: [],
    eligibilityNote: { ar: "للطلاب الدوليين المتفوقين المتقدمين لماجستير مدته سنتان في TU Delft.", en: "For excellent international applicants to a two-year TU Delft MSc." },
    summary: {
      ar: "الرسوم الدراسية كاملة + مساهمة شهرية في تكاليف المعيشة لمدة سنتين.",
      en: "Full tuition + a monthly contribution to living costs for two years.",
    },
    covers: {
      ar: ["الرسوم الدراسية كاملة حسب فئة جنسيتك.", "مساهمة في المعيشة. المبلغ غير منشور في صفحة الجامعة العامة ويُذكر في خطاب المنحة. مصادر غير رسمية تقدّر الحزمة بحوالي 30,000 يورو سنوياً لغير الأوروبيين (للتحقق)."],
      en: ["Full tuition at the rate for your nationality.", "A living-cost contribution. The amount is not on the public page and is set in the award letter. Unofficial sources put the package at about €30,000 a year for non-EU students (to verify)."],
    },
    conditions: {
      ar: ["لماجستير سنتين عادي فقط، ولا تشمل البرامج المشتركة مع جامعات أخرى.", "تنافسية جداً: منحتان فقط لكل كلية (16 منحة كاملة في الجامعة كلها)، وتذكر الجامعة كمؤشر أن المتقدم يكون تقريباً من أعلى 10% في دفعته.", "لا يمكن الجمع بينها وبين أي منحة أخرى.", "السنة الثانية تستمر إذا أنجزت 48 ساعة معتمدة على الأقل في السنة الأولى."],
      en: ["Regular two-year MSc only; joint programmes are excluded.", "Very competitive: two per faculty (16 full scholarships in total); as an indication, the university says applicants are around the top 10% of their class.", "Cannot be combined with any other scholarship.", "Year two continues if you pass at least 48 ECTS in year one."],
    },
    deadlines: [
      { date: "2026-12-01", kind: "official", step: "both", label: { ar: "1 ديسمبر 2026 الساعة 23:59 بتوقيت وسط أوروبا: آخر موعد لإكمال طلب الماجستير ومعه نموذج المنحة وخطاب توصية وشهادة الإنجليزية، للدراسة في سبتمبر 2027. تصل النتيجة بالبريد الإلكتروني قبل نهاية مارس 2027.", en: "1 December 2026, 23:59 CET: complete your MSc application with the scholarship form, a reference letter and your English test, for September 2027. Winners are emailed by the end of March 2027." } },
    ],
    language: { ar: "الإنجليزية", en: "English" },
    howToApply: { ar: "ضمن طلب القبول في ماجستير TU Delft قبل الموعد، باتباع تعليمات صفحة المنحة.", en: "As part of your TU Delft MSc application before the deadline, following the scholarship page." },
    url: "https://www.tudelft.nl/en/education/study-programme-orientation/practical-matters/scholarships",
    links: { universities: ["Delft University of Technology"], minYears: 2, note: { ar: "لماجستير السنتين العادي فقط.", en: "Regular two-year MSc only." } },
  },
  {
    id: "maastricht-nl-high-potential",
    type: "uni",
    funder: { ar: "جامعة ماستريخت + وزارة التعليم الهولندية", en: "Maastricht University + Dutch Ministry of Education" },
    name: { ar: "منحة ماستريخت NL-High Potential", en: "Maastricht University NL-High Potential Scholarship" },
    hosts: ["nl"],
    levels: ["master"],
    eligible: ALL,
    check: [],
    eligibilityNote: { ar: "لغير مواطني الاتحاد الأوروبي، ولا يحق التقديم لمن يحمل جنسية أوروبية مزدوجة.", en: "For non-EU nationals; not open to people who also hold an EU/EEA citizenship." },
    summary: {
      ar: "إعفاء من الرسوم + 1,550 يورو شهرياً + تأمين + تكاليف التأشيرة.",
      en: "Tuition waiver + €1,550 a month + insurance + visa costs.",
    },
    covers: {
      ar: ["إعفاء من الرسوم الدراسية.", "مبلغ معيشة 20,150 يورو (13 شهراً) أو 38,750 يورو (25 شهراً)، أي حوالي 1,550 يورو شهرياً.", "تأمين صحي وتأمين مسؤولية.", "تكاليف طلب التأشيرة والإقامة."],
      en: ["Tuition waiver.", "Living allowance of €20,150 (13 months) or €38,750 (25 months), about €1,550 a month.", "Health and liability insurance.", "Visa and residence permit costs."],
    },
    conditions: {
      ar: ["18 منحة فقط لعام 2027-2028، ونسبة الفوز حوالي 2% من المتقدمين.", "لبرامج ماجستير مشاركة فقط، راجع القائمة الرسمية.", "تدريب إلزامي قبل الدراسة لمدة أسبوعين في أغسطس.", "تذاكر الطيران غير مشمولة (حسب مصدر غير رسمي)."],
      en: ["Only 18 awards for 2027-2028; about 2% of applicants win.", "Participating master's programmes only; check the official list.", "Mandatory two-week pre-academic training in August.", "Flights are not covered (according to an unofficial source)."],
    },
    deadlines: [
      { date: "2026-12-10", kind: "official", step: "admission", label: { ar: "10 ديسمبر 2026: إكمال طلب القبول في البرنامج (صفحة أخرى للجامعة تذكر 8 ديسمبر، اعتمد الأبكر).", en: "10 December 2026: complete programme application (another university page says 8 December; go by the earlier date)." } },
      { date: "2027-02-01", kind: "official", step: "scholarship", label: { ar: "1 فبراير 2027 الساعة 23:59 بتوقيت وسط أوروبا: طلب المنحة.", en: "1 February 2027, 23:59 CET: scholarship application." } },
    ],
    language: { ar: "الإنجليزية", en: "English" },
    howToApply: { ar: "قدّم على البرنامج عبر Studielink، ثم أكمل نموذج المنحة في حسابك بجامعة ماستريخت.", en: "Apply to the programme through Studielink, then complete the scholarship form in your Maastricht University account." },
    url: "https://www.maastrichtuniversity.nl/maastricht-university-nl-high-potential-scholarship",
    links: { universities: ["Maastricht University"], note: { ar: "تحقق أن البرنامج ضمن البرامج المشاركة لهذا العام.", en: "Check that the programme participates this year." } },
  },
  {
    id: "groningen-eric-bleumink",
    type: "uni",
    funder: { ar: "جامعة خرونينغن (صندوق إريك بلويمنك)", en: "University of Groningen (Eric Bleumink Fund)" },
    name: { ar: "منحة صندوق إريك بلويمنك", en: "Eric Bleumink Fund scholarship" },
    hosts: ["nl"],
    levels: ["master"],
    eligible: [],
    check: NON_GULF,
    eligibilityNote: {
      ar: "لطلاب من دول نامية مذكورة في الملحق رقم 1 بصفحة الجامعة. لم نطّلع على القائمة الرسمية بعد، فأهلية كل دولة عربية للتحقق.",
      en: "For students from developing countries listed in Appendix 1 of the university page. We have not read the official list yet, so each Arab state's eligibility is to verify.",
    },
    summary: {
      ar: "الرسوم الدراسية + السفر الدولي + المعيشة + الكتب + التأمين الصحي.",
      en: "Tuition + international travel + living costs + books + health insurance.",
    },
    covers: {
      ar: ["الرسوم الدراسية.", "السفر الدولي.", "تكاليف المعيشة (1,250 يورو شهرياً حسب مصدر غير رسمي، للتحقق).", "الكتب.", "التأمين الصحي."],
      en: ["Tuition.", "International travel.", "Living costs (€1,250 a month according to an unofficial source, to verify).", "Books.", "Health insurance."],
    },
    conditions: {
      ar: ["لا يمكنك التقديم مباشرة. ترشّح الجامعة اثنين فقط من كل كلية من بين طلبات القبول.", "4 منح بحد أقصى في السنة.", "لا يوجد إعفاء من رسوم طلب القبول لمرشحي المنحة."],
      en: ["You cannot apply directly. The university nominates at most two candidates per faculty from admission applications.", "A maximum of four grants a year.", "No application fee waiver for scholarship candidates."],
    },
    deadlines: [
      { date: "2026-12-01", kind: "official", step: "both", label: { ar: "قبل 1 ديسمبر 2026: إكمال طلب الماجستير على Studielink وبوابة الجامعة ليُنظر في ترشيحك (لا يوجد طلب منحة منفصل). ويجب أن تحصل على قبول مبدئي قبل 1 فبراير 2027.", en: "Before 1 December 2026: complete your master's application in Studielink and the university portal to be considered (there is no separate scholarship form). You also need a provisional admission offer before 1 February 2027." } },
    ],
    language: { ar: "الإنجليزية", en: "English" },
    howToApply: { ar: "قدّم على برنامج الماجستير مبكراً. إذا رُشّحت، ستتواصل معك الجامعة.", en: "Apply early to the master's programme. If you are nominated, the university contacts you." },
    url: "https://www.rug.nl/education/scholarships/eric-bleumink-fellowship?lang=en",
    links: { universities: ["University of Groningen"], note: { ar: "بالترشيح فقط، ولمواطني الدول المذكورة في القائمة الرسمية.", en: "Nomination only, for nationals of the countries on the official list." } },
  },
  {
    id: "vlir-uos-icp",
    type: "gov",
    funder: { ar: "VLIR-UOS (التعاون الجامعي الفلمنكي، بلجيكا)", en: "VLIR-UOS (Flemish university cooperation, Belgium)" },
    name: { ar: "منح VLIR-UOS لبرامج ICP Connect", en: "VLIR-UOS ICP Connect scholarships" },
    hosts: ["be"],
    levels: ["bachelor", "master"],
    eligible: ["ma", "ps"],
    check: [],
    eligibilityNote: { ar: "من الدول العربية: المغرب وفلسطين فقط (ضمن 25 دولة مؤهلة في دعوة 2027-2028). يجب أن تحمل الجنسية وتقيم في إحدى الدول المؤهلة وقت التقديم.", en: "Arab states: Morocco and Palestine only (out of 25 eligible countries in the 2027-2028 call). You must hold the nationality of, and live in, an eligible country when you apply." },
    summary: { ar: "الرسوم + السفر + التأمين + المعيشة.", en: "Tuition + travel + insurance + living costs." },
    covers: {
      ar: ["الرسوم الدراسية.", "السفر.", "التأمين.", "مبلغ للمعيشة (القيمة: غير منشور في المصدر الذي اطلعنا عليه)."],
      en: ["Tuition.", "Travel.", "Insurance.", "A living allowance (amount: not published in the source we read)."],
    },
    conditions: { ar: ["فقط لبرامج ICP Connect المحددة في جامعات فلاندرز (12 برنامجاً في دعوة 2027-2028، منها بكالوريوس علوم الحاسب التطبيقية وبكالوريوس إدارة الفنادق)، وليست لكل البرامج.", "العمر: لا يزيد عن 35 سنة في 1 يناير 2027 للبكالوريوس والماجستير الأول، و45 سنة للماجستير المتقدم، ولا يقل عن 19 سنة للبكالوريوس.", "لا يجوز التقديم على أكثر من برنامج ICP واحد في السنة، ولا توجد رسوم تقديم."], en: ["Only for the selected ICP Connect programmes at Flemish institutions (12 in the 2027-2028 call, including bachelor's in Applied Computer Science and Hotel Management), not any programme.", "Age: at most 35 on 1 January 2027 for bachelor's and initial master's, 45 for advanced master's, and at least 19 for bachelor's.", "Apply to only one ICP programme a year; there is no application fee."] },
    deadlines: [
      { date: "2027-02-28", kind: "varies", step: "both", label: { ar: "دعوة 2027-2028 مفتوحة. آخر موعد عام 28 فبراير 2027، لكن لكل برنامج موعده الخاص وقد يكون أبكر (مثلاً بكالوريوس علوم الحاسب التطبيقية حتى 15 يناير 2027). الدراسة تبدأ 1 سبتمبر 2027.", en: "The 2027-2028 call is open. General deadline 28 February 2027, but each programme sets its own and some are earlier (for example the Applied Computer Science bachelor's by 15 January 2027). Studies start 1 September 2027." } },
    ],
    language: { ar: "الإنجليزية", en: "English" },
    howToApply: { ar: "عبر الجامعة البلجيكية التي تدير برنامج ICP، حسب تعليمات VLIR-UOS.", en: "Through the Belgian university running the ICP programme, as VLIR-UOS instructs." },
    url: "https://www.vliruos.be/get-funded/calls/icp-connect-2027-2028",
    links: null,
  },
  {
    id: "invest-your-talent-italy",
    type: "gov",
    funder: { ar: "وزارة الخارجية الإيطالية (MAECI) مع وكالة التجارة الإيطالية ICE وUni-Italia", en: "Italian Ministry of Foreign Affairs (MAECI) with the Italian Trade Agency (ICE) and Uni-Italia" },
    name: { ar: "منحة Invest Your Talent in Italy", en: "Invest Your Talent in Italy scholarship" },
    hosts: ["it"],
    levels: ["master"],
    eligible: ["eg", "tn"],
    check: [],
    eligibilityNote: {
      ar: "من الدول العربية: مصر وتونس فقط (ضمن 23 دولة في دعوة 2026-2027). يجب أن تكون مقيماً في بلدك إقامة دائمة.",
      en: "Arab states: Egypt and Tunisia only (out of 23 countries in the 2026-2027 call). You must be permanently resident in your country.",
    },
    summary: {
      ar: "إعفاء من رسوم التسجيل والدراسة + 10,800 يورو لمدة 9 أشهر + تدريب إلزامي في شركة إيطالية.",
      en: "Enrolment and tuition fees waived + €10,800 for 9 months + a compulsory internship at an Italian company.",
    },
    covers: {
      ar: [
        "إعفاء من رسوم التسجيل ومساهمات الجامعة. لا يشمل الضريبة الإقليمية لحق الدراسة ورسوم الدمغة والتأمينات.",
        "10,800 يورو للسنة على 3 دفعات (4,800 ثم 3,000 ثم 3,000 يورو) لمدة 9 أشهر.",
        "تتجدد للسنة الثانية بشروط (30 ساعة معتمدة وحضور دورة لغة إيطالية).",
      ],
      en: [
        "Enrolment fees and university contributions waived. Not the regional right-to-study tax, stamp duty or insurance.",
        "€10,800 a year in 3 instalments (€4,800, then €3,000, then €3,000) for 9 months.",
        "Renewable for a second year on conditions (30 credits and attending an Italian language course).",
      ],
    },
    conditions: {
      ar: [
        "لبرامج ماجستير وما بعد التخرج محددة في قائمة البرنامج فقط، أغلبها هندسة وتكنولوجيا واقتصاد وإدارة وعمارة وتصميم.",
        "شهادة إنجليزية بمستوى B2 على الأقل، والإيطالية اختيارية لكنها تزيد التقييم.",
        "يجب أن تكون قد قدّمت طلب قبول مبدئي في البرنامج.",
        "في دعوة 2026-2027 كان الشرط مواليد 1 يناير 2000 أو بعده.",
        "المنحة لا تغطي السفر ولا السكن، والتأمين الصحي على الطالب.",
        "تدريب إلزامي في شركة أو جهة مهنية إيطالية قبل نهاية السنة الثانية.",
      ],
      en: [
        "Only for the master's and postgraduate courses on the programme's list, mostly engineering, technology, economics, management, architecture and design.",
        "English certificate at B2 or above; Italian is optional but adds to your score.",
        "You must have applied for pre-admission to the course.",
        "The 2026-2027 call required applicants born on or after 1 January 2000.",
        "The scholarship does not cover travel or housing, and health insurance is on the student.",
        "A compulsory internship at an Italian company or professional body before the end of the second year.",
      ],
    },
    deadlines: [
      { date: "2027-05-11", kind: "expected", step: "scholarship", label: { ar: "حوالي أبريل ومايو 2027 (دعوة 2026-2027 كانت من 20 أبريل إلى 11 مايو 2026 الساعة 18:00 بتوقيت إيطاليا).", en: "Around April-May 2027 (the 2026-2027 call ran from 20 April to 11 May 2026, 18:00 Italian time)." } },
    ],
    language: { ar: "الإنجليزية (B2)", en: "English (B2)" },
    howToApply: {
      ar: "قدّم أونلاين على بوابة Invest Your Talent in Italy خلال فترة الدعوة، بعد ما تقدّم طلب القبول المبدئي في البرنامج.",
      en: "Apply online on the Invest Your Talent in Italy portal during the call, after applying for pre-admission to the course.",
    },
    url: "https://investyourtalent.esteri.it/SitoIYT/EN/current-call",
    links: null,
  },
  {
    id: "eth-esop",
    type: "uni",
    funder: { ar: "المعهد الفيدرالي السويسري للتكنولوجيا في زيورخ (ETH Zurich)", en: "ETH Zurich" },
    name: { ar: "منحة التميز في ETH زيورخ (ESOP)", en: "ETH Zurich Excellence Scholarship & Opportunity Programme (ESOP)" },
    hosts: ["ch"],
    levels: ["master"],
    eligible: ALL,
    check: [],
    eligibilityNote: { ar: "مفتوحة لكل الجنسيات. لا يحق لمن يدرس ماجستير في ETH حالياً أو يحمل ماجستير التقديم.", en: "Open to all nationalities. Students already in an ETH master's, or holding a master's degree, are not eligible." },
    summary: {
      ar: "إعفاء من الرسوم الدراسية + 13,500 فرنك سويسري لكل فصل دراسي (من خريف 2027) لتغطية المعيشة والدراسة.",
      en: "Tuition waiver + CHF 13,500 per semester (from autumn 2027) for living and study costs.",
    },
    covers: {
      ar: ["إعفاء كامل من الرسوم الدراسية طوال المدة العادية للماجستير (3 أو 4 فصول).", "13,500 فرنك سويسري لكل فصل دراسي من خريف 2027.", "إرشاد أكاديمي وشبكة مؤسسة ETH."],
      en: ["Full tuition waiver for the regular length of the master's (three or four semesters).", "CHF 13,500 per semester from autumn 2027.", "Mentoring and the ETH Foundation network."],
    },
    conditions: {
      ar: [
        "تنافسية جداً: حوالي 60 منحة لعام 2027/2028، وتطلب الجامعة نتائج بكالوريوس ممتازة (تقريباً أعلى 10%).",
        "يجب التقديم في نافذة التقديم الأولى فقط (1 إلى 30 نوفمبر 2026) عبر بوابة eApply.",
        "تحتاج مقترحاً مكتوباً بنفسك لرسالة الماجستير، وسيرة ذاتية، وخطابي توصية من أستاذين إذا لم يطلبهما البرنامج.",
        "قد تُجرى مقابلة بالهاتف أو الفيديو في فبراير، والقرار يُعلن بنهاية مارس 2027.",
      ],
      en: [
        "Very competitive: about 60 scholarships for 2027/2028; the university asks for an excellent bachelor's result (roughly top 10%).",
        "You must apply in the first application window only (1 to 30 November 2026) via eApply.",
        "You need a self-written master's thesis pre-proposal, a CV, and two professor references if your programme does not already ask for them.",
        "A phone or video interview may take place in February; decisions come by the end of March 2027.",
      ],
    },
    deadlines: [
      { date: "2026-11-30", kind: "official", step: "both", label: { ar: "30 نوفمبر 2026 الساعة 11:59 صباحاً بتوقيت وسط أوروبا: آخر موعد لطلب الماجستير ومعه طلب المنحة، للدراسة في خريف 2027.", en: "30 November 2026, 11:59 CET: deadline for the master's application together with the scholarship application, for autumn 2027." } },
    ],
    language: { ar: "الإنجليزية في أغلب برامج الماجستير", en: "English in most master's programmes" },
    howToApply: { ar: "قدّم على الماجستير في بوابة eApply خلال نافذة نوفمبر، واختر التقديم على منحة ESOP، وارفع مقترح الرسالة وبقية المستندات.", en: "Apply for the master's on eApply during the November window, choose ESOP, and upload the thesis pre-proposal and other documents." },
    url: "https://ethz.ch/students/en/studies/financial/scholarships/excellencescholarship.html",
    links: { universities: ["ETH Zurich"], note: { ar: "لبرامج الماجستير في ETH زيورخ (ليس برامج MAS).", en: "For ETH Zurich master's programmes (not MAS)." } },
  },
  {
    id: "goi-ies-ireland",
    type: "gov",
    funder: { ar: "حكومة أيرلندا (هيئة التعليم العالي HEA)", en: "Government of Ireland (Higher Education Authority, HEA)" },
    name: { ar: "منحة حكومة أيرلندا للتعليم الدولي (GOI-IES)", en: "Government of Ireland International Education Scholarship (GOI-IES)" },
    hosts: ["ie"],
    levels: ["master"],
    eligible: ALL,
    check: [],
    eligibilityNote: { ar: "لمن موطنه الأصلي خارج الاتحاد الأوروبي والمنطقة الاقتصادية الأوروبية وسويسرا والمملكة المتحدة، ومعه عرض قبول من جامعة أيرلندية.", en: "For applicants whose domicile of origin is outside the EU/EEA, Switzerland and the UK, with an offer from an Irish institution." },
    summary: {
      ar: "إعفاء كامل من الرسوم الدراسية ورسوم التسجيل + 10,000 يورو للمعيشة، لسنة دراسية واحدة.",
      en: "Full tuition and registration fee waiver + €10,000 for living costs, for one academic year.",
    },
    covers: {
      ar: ["إعفاء كامل من الرسوم الدراسية ورسوم التسجيل من الجامعة المضيفة.", "10,000 يورو للمعيشة تدفعها الهيئة عن طريق الجامعة."],
      en: ["Full tuition and registration fee waiver from the host institution.", "€10,000 stipend, paid by the HEA through the institution."],
    },
    conditions: {
      ar: [
        "سنة دراسية واحدة فقط، فهي مناسبة لماجستير السنة الواحدة الشائع في أيرلندا.",
        "يجب أن يكون معك عرض قبول (مشروط أو نهائي) في ماجستير بدوام كامل وحضوري قبل التقديم على المنحة، وترفعه مع الطلب.",
        "طلب واحد فقط لكل شخص، وخطابا توصية يرفعهما المتقدم بنفسه.",
        "الطلب يجب أن يكون من كتابتك؛ الهيئة تمنع الصياغة بواسطة طرف آخر أو بالذكاء الاصطناعي.",
        "حوالي 60 منحة في السنة، ولكل جامعة 5 منح كحد أقصى.",
      ],
      en: [
        "One academic year only, which suits Ireland's common one-year master's.",
        "You need an offer (conditional or final) for a full-time, in-person master's before applying, and you upload it with the application.",
        "One application per person; you upload two references yourself.",
        "The application must be your own work; third-party drafting and AI-generated content are prohibited.",
        "About 60 awards a year, at most five per institution.",
      ],
    },
    deadlines: [
      { date: "2027-03-12", kind: "expected", step: "scholarship", label: { ar: "حوالي منتصف مارس 2027 (دعوة 2026 كانت حتى 12 مارس 2026 الساعة 5 مساءً بتوقيت أيرلندا، والنتائج أوائل يونيو). دعوة 2027 لم تُنشر بعد.", en: "Around mid-March 2027 (the 2026 call closed on 12 March 2026 at 5pm Irish time; results in early June). The 2027 call is not published yet." } },
    ],
    language: { ar: "الإنجليزية", en: "English" },
    howToApply: { ar: "قدّم أولاً على الماجستير في الجامعة الأيرلندية واحصل على عرض قبول، ثم قدّم على المنحة في بوابة GOI-IES الإلكترونية التابعة للهيئة.", en: "Apply first for the master's at the Irish institution and get an offer, then apply on the HEA's online GOI-IES portal." },
    url: "https://hea.ie/assets/uploads/2026/01/2026-GOI-IES-Call-Document.pdf",
    links: { countries: ["ie"], note: { ar: "لماجستير بدوام كامل وحضوري، والمنحة لسنة واحدة.", en: "For full-time, in-person master's; the award covers one year." } },
  },
  {
    id: "boell-foundation",
    type: "foundation",
    funder: { ar: "مؤسسة هاينريش بُل (بتمويل من وزارة الخارجية الألمانية)", en: "Heinrich Böll Foundation (funded by the German Federal Foreign Office)" },
    name: { ar: "منحة مؤسسة هاينريش بُل للماجستير في ألمانيا", en: "Heinrich Böll Foundation scholarship for master's study in Germany" },
    hosts: ["de"],
    levels: ["master"],
    eligible: NON_GULF,
    check: GULF,
    eligibilityNote: { ar: "للطلاب الدوليين من خارج الاتحاد الأوروبي، والأولوية لدول قائمة DAC (الدول النامية) ولمن لم ينتقل إلى ألمانيا وقت التقديم. دول الخليج ليست في قائمة DAC.", en: "For international students from outside the EU, with priority for DAC (developing) countries and for applicants not yet living in Germany. Gulf states are not on the DAC list." },
    summary: {
      ar: "992 يورو شهرياً + بدل تأمين صحي حتى 100 يورو شهرياً، طوال المدة العادية للماجستير. الجامعات الحكومية الألمانية في أغلبها بدون رسوم دراسية.",
      en: "€992 a month + a health insurance allowance of up to €100 a month, for the regular length of the master's. Most German public universities charge no tuition.",
    },
    covers: {
      ar: ["992 يورو شهرياً.", "بدل تأمين صحي حتى 100 يورو شهرياً.", "ندوات وبرنامج مرافقة من المؤسسة."],
      en: ["€992 a month.", "A health insurance allowance of up to €100 a month.", "Seminars and an accompanying programme."],
    },
    conditions: {
      ar: [
        "تطلب المؤسسة مستوى B2 في الألمانية (أو DSH 1) بشهادة، حتى لو كان البرنامج بالإنجليزية.",
        "لماجستير بدوام كامل مدته العادية 4 فصول على الأقل في جامعة حكومية أو معترف بها.",
        "المؤسسة لا تدفع الرسوم الدراسية، فانتبه للولايات التي تفرض رسوماً على غير الأوروبيين مثل بادن فورتمبيرغ.",
        "تبحث المؤسسة عن طلاب مهتمين بالشأن العام والديمقراطية وحقوق الإنسان والبيئة، وتقبل حوالي 70 طالباً دولياً في السنة.",
        "تطلب إثبات القبول أو التسجيل في الماجستير، ويمكن تقديمه لاحقاً حتى موعد المقابلة.",
        "صفحة التقديم تذكر أن المؤسسة ستقبل من 1 مارس 2027 طلبات برامج المرحلة الأولى فقط، وفي نفس الوقت تعرض موعد ربيع 2027 للماجستير (للتحقق مع المؤسسة).",
      ],
      en: [
        "The foundation asks for German at B2 (or DSH 1) with a certificate, even for English-taught programmes.",
        "Full-time master's with a standard length of at least four semesters at a state or state-recognised university.",
        "The foundation does not pay tuition, so watch out for states that charge non-EU students, such as Baden-Württemberg.",
        "It looks for students engaged in public life, democracy, human rights and ecology, and takes about 70 international students a year.",
        "Proof of admission or enrolment is required; it can be sent later, up to the interview.",
        "The application page says that from 1 March 2027 only first-cycle applications will be accepted, while still listing a spring 2027 master's round (to verify with the foundation).",
      ],
    },
    deadlines: [
      { date: "2027-03-01", kind: "official", step: "scholarship", label: { ar: "من 15 يناير إلى 1 مارس 2027 (جولة الربيع)، والجولة التالية من 15 يوليو إلى 1 سبتمبر 2027.", en: "15 January to 1 March 2027 (spring round); the next round is 15 July to 1 September 2027." } },
    ],
    language: { ar: "الألمانية B2 مطلوبة للمنحة، والبرنامج نفسه قد يكون بالإنجليزية", en: "German B2 required for the scholarship; the programme itself may be in English" },
    howToApply: { ar: "قدّم أونلاين على بوابة المؤسسة خلال فترة التقديم. الاختيار على ثلاث مراحل: الطلب المكتوب ثم مقابلة ثم لجنة الاختيار.", en: "Apply online on the foundation's portal during the window. Selection has three stages: written application, interview, then the selection committee." },
    url: "https://boell.de/en/applying-scholarship",
    links: { countries: ["de"], note: { ar: "تحتاج الألمانية B2، وتغطي المعيشة فقط وليس الرسوم.", en: "Needs German B2; covers living costs, not tuition." } },
  },
  {
    id: "padua-excellence",
    type: "uni",
    funder: { ar: "جامعة بادوفا", en: "University of Padova" },
    name: { ar: "منحة بادوفا الدولية للتميز", en: "Padua International Excellence Scholarship" },
    hosts: ["it"],
    levels: ["bachelor", "master"],
    eligible: ALL,
    check: [],
    eligibilityNote: { ar: "لغير الحاملين للجنسية الإيطالية (يُسمح بالجنسية المزدوجة) غير المقيمين في إيطاليا، وشهادتهم من خارج إيطاليا.", en: "For non-Italian citizens (dual citizens allowed) not resident in Italy, with a foreign qualification." },
    summary: {
      ar: "إعفاء من الرسوم الدراسية + 8,000 يورو (إجمالي قبل الخصم) كل سنة دراسية.",
      en: "Tuition waiver + €8,000 gross per academic year.",
    },
    covers: {
      ar: ["إعفاء من الرسوم الدراسية؛ يدفع الطالب فقط الضريبة الإقليمية وطابع الدمغة.", "8,000 يورو إجمالي سنوياً على دفعتين (4,000 لكل دفعة) بشرط النجاح الدراسي.", "المدة: حتى سنتين للماجستير وثلاث سنوات للبكالوريوس."],
      en: ["Tuition waiver; you pay only the regional tax and revenue stamp.", "€8,000 gross a year in two instalments of €4,000, subject to academic progress.", "Duration: up to two years for master's, three for bachelor's."],
    },
    conditions: {
      ar: [
        "للبرامج التي تُدرّس بالكامل بالإنجليزية في بادوفا فقط، وحتى 76 منحة في السنة.",
        "لا يوجد طلب منفصل: تُرشّح تلقائياً عندما تقدّم على البرنامج.",
        "المنح تُعطى غالباً لمتقدمي الجولة الأولى. جولة 2027/2028 الأولى للبرامج غير محدودة الأماكن انتهت في 15 نوفمبر 2026، أما البرامج محدودة الأماكن فجولة غير الأوروبيين من 7 يناير إلى 7 مارس 2027.",
        "شروط دعوة 2027/2028 تُنشر في نوفمبر 2026 (للتحقق من الدعوة نفسها).",
      ],
      en: [
        "Only for degrees taught fully in English at Padova; up to 76 scholarships a year.",
        "No separate application: applying to the degree makes you eligible.",
        "Awards go mainly to first-call applicants. For 2027/2028 the first call for open-access degrees closed on 15 November 2026; for limited-access degrees the non-EU call runs 7 January to 7 March 2027.",
        "The 2027/2028 call rules are published in November 2026 (check the call itself).",
      ],
    },
    deadlines: [
      { date: "2027-03-07", kind: "varies", step: "both", label: { ar: "بحسب نوع البرنامج: البرامج محدودة الأماكن من 7 يناير إلى 7 مارس 2027 لغير الأوروبيين، والجولة الأولى للبرامج غير المحدودة انتهت في 15 نوفمبر 2026.", en: "Depends on the degree: limited-access degrees 7 January to 7 March 2027 for non-EU applicants; the first call for open-access degrees closed on 15 November 2026." } },
    ],
    language: { ar: "الإنجليزية", en: "English" },
    howToApply: { ar: "قدّم على البرنامج الإنجليزي في بوابة apply.unipd.it في الجولة الأولى؛ لا يوجد نموذج منحة منفصل.", en: "Apply to the English-taught degree on apply.unipd.it in the first call; there is no separate scholarship form." },
    url: "https://www.unipd.it/en/padua-international-excellence-scholarship-programme",
    links: { universities: ["University of Padova"], note: { ar: "للبرامج الإنجليزية في بادوفا، والأولوية لمتقدمي الجولة الأولى.", en: "For Padova's English-taught degrees, mainly first-call applicants." } },
  },
];

// Scholarships we checked and left out, because they are not fully funded.
export const EXCLUDED = {
  ar: [
    ["منحة NL (Holland Scholarship) - هولندا", "5,000 يورو مرة واحدة في السنة الأولى."],
    ["منحة لايدن للتميز (LExS)", "تخصم من 10,000 إلى 19,000 يورو من الرسوم فقط، بدون معيشة."],
    ["منحة أيندهوفن للتميز (TU/e)", "7,500 يورو سنوياً، وتصرّح الجامعة بأنها ليست منحة كاملة."],
    ["منحة أوترخت للتميز (UES)", "أوقفتها الجامعة ابتداءً من العام الدراسي 2026-2027."],
    ["منحة Master Mind الفلمنكية ومنحة Science@Leuven - بلجيكا", "مبلغ للمعيشة مع رسوم مخفضة يبقى على الطالب دفعها، فليست كاملة."],
    ["منحة حكومة إستونيا", "350 يورو شهرياً للبكالوريوس والماجستير، ولدول لها اتفاقيات ثنائية فقط."],
    ["منح الحكومة الإيطالية (MAECI)", "10,800 يورو لمدة 9 أشهر وتأمين صحي، لكن الإعفاء من الرسوم غير مضمون ويرجع لكل جامعة."],
    ["المنح الحكومية في لاتفيا (VIAA)", "500 يورو شهرياً لمدة 10 أشهر كحد أقصى، ولا تغطي الرسوم الدراسية. من الدول العربية: مصر فقط."],
    ["المنح الحكومية في ليتوانيا للماجستير", "تغطي الرسوم و592 يورو شهرياً، لكن لا توجد دولة عربية في قائمة الدول المؤهلة لعام 2026."],
    ["منحة إيفل للتميز (الحكومة الفرنسية)", "1,200 يورو شهرياً مع السفر والتأمين، لمن عمره 29 سنة أو أقل في الماجستير، لكن البرنامج لا يغطي الرسوم الدراسية. الترشيح يكون عن طريق الجامعة الفرنسية فقط، وآخر موعد للجامعات 6 يناير 2027 (وموعد الجامعة الداخلي أبكر)."],
    ["منحة التميز في EPFL (لوزان، سويسرا)", "10,000 فرنك سويسري لكل فصل لمدة 4 فصول كحد أقصى، لكن الرسوم الدراسية على الطالب. للتقديم: طلب الماجستير مدفوع ومكتمل قبل 15 ديسمبر 2026."],
    ["منحة أمستردام للتميز (AES)", "لم تعد موجودة في صفحات جامعة أمستردام، وحلت محلها منحة Amsterdam Merit التي تختلف قيمتها حسب الكلية."],
    ["منح GREAT (بريطانيا)", "10,000 جنيه إسترليني على الأقل تُخصم من رسوم ماجستير مدته سنة واحدة، من المجلس الثقافي البريطاني مع الجامعة، فليست منحة كاملة. من الدول العربية: مصر فقط (للمصريين المقيمين في مصر). كل جامعة مشاركة لها موعدها، وكانت مواعيد دورة 2025 بين أبريل ومايو."],
  ],
  en: [
    ["NL Scholarship (Holland Scholarship), Netherlands", "€5,000 once, in the first year."],
    ["Leiden University Excellence Scholarship (LExS)", "€10,000 to €19,000 off tuition only, no living costs."],
    ["TU/e Scholarship for Excellence (Eindhoven)", "€7,500 a year; the university says it is not a full scholarship."],
    ["Utrecht Excellence Scholarship (UES)", "Discontinued from 2026-2027."],
    ["Flemish Master Mind and Science@Leuven (Belgium)", "A living allowance plus a reduced fee the student still pays, so not full."],
    ["Estonian government scholarship", "€350 a month for bachelor's and master's, and only for countries with bilateral agreements."],
    ["Italian Government (MAECI) scholarships", "€10,800 for 9 months plus health insurance, but the tuition waiver is not guaranteed and depends on each university."],
    ["Latvian state scholarships (VIAA)", "€500 a month for up to 10 months, with no tuition cover. Arab states: Egypt only."],
    ["Lithuanian state scholarships for master's", "Cover tuition plus €592 a month, but no Arab state is on the 2026 eligible list."],
    ["France Excellence Eiffel (French government)", "€1,200 a month plus travel and insurance, for master's applicants aged 29 or under, but tuition is not covered by the programme. Only the French institution can nominate you; institutions must submit by 6 January 2027 (their internal deadline is earlier)."],
    ["EPFL Excellence Fellowships (Lausanne, Switzerland)", "CHF 10,000 per semester for up to four semesters, but tuition is on the student. To apply: a paid, validated master's application by 15 December 2026."],
    ["Amsterdam Excellence Scholarship (AES)", "No longer on the University of Amsterdam's pages; replaced by the Amsterdam Merit Scholarship, whose value varies by faculty."],
    ["GREAT Scholarships (UK)", "At least £10,000 off the tuition of a one-year master's, from the British Council with the university, so not a full scholarship. Among Arab states: Egypt only (Egyptians living in Egypt). Each participating university sets its own deadline; in the 2025 round they fell between April and May."],
  ],
};

// Scholarships that may cover a given catalogue programme.
export function scholarshipsFor(p) {
  return SCHOLARSHIPS.filter((s) => {
    const l = s.links;
    if (!l) return false;
    if (!s.levels.includes(p.level || "master")) return false;
    if (l.countries && !l.countries.includes(p.country)) return false;
    if (l.universities && !l.universities.includes(p.university)) return false;
    if (l.minYears && !(p.years >= l.minYears)) return false;
    return true;
  });
}

export function eligibility(s, nat) {
  if (!nat) return "any";
  if (s.eligible.includes(nat)) return "yes";
  if (s.check.includes(nat)) return "check";
  return "no";
}
