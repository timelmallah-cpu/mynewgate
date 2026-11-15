// Student housing guide: how it works in each country, the official providers, and how to avoid rental scams.
// Per-university housing notes come from each programme's own source (lib/programmes.json, field "housing").
// Only official links (national agencies, student-housing foundations, universities, consumer bodies). Reviewed 2026-11-15.

export const HOUSING = {
  de: {
    how: {
      ar: "سكن الطلاب الرخيص في ألمانيا تديره مؤسسة اسمها Studierendenwerk في كل مدينة جامعية، وعندها حوالي 196,000 مكان في كل ألمانيا. أكثر من 40% من الطلاب الدوليين يسكنون فيها. الأماكن تخلص بسرعة، فقدّم مباشرة لما توصلك ورقة القبول، وكل مدينة لها طريقتها (قرعة أو بترتيب التقديم).",
      en: "Cheap student housing in Germany is run by a Studierendenwerk in each university town, with about 196,000 places nationwide. More than 40% of international students live in one. Places go fast, so apply as soon as you get your admission letter; each town has its own system (lottery or first come, first served).",
    },
    links: [
      { name: "Studierendenwerk A-Z", url: "https://www.studierendenwerke.de/en/deutsches-studentenwerk/studentenwerke/studierendenwerke-a-z", ar: "اكتب اسم مدينتك ويطلع لك الـ Studierendenwerk المسؤول عنها", en: "Type your town to find the Studierendenwerk responsible for it" },
      { name: "DAAD: Wohnen", url: "https://www.daad.de/ziel-deutschland/pages/de/wohnen.html", ar: "دليل DAAD الرسمي للسكن (سكن طلابي، غرفة مشتركة WG، شقة)", en: "DAAD's official housing guide (halls, shared flats, apartments)" },
    ],
    src: "https://studierendenwerke.de/themen/wohnen/studierendenwohnheime",
  },
  nl: {
    how: {
      ar: "هولندا فيها أزمة سكن قوية. الجامعات لا تملك سكناً، لكنها تحجز عدداً محدوداً من الغرف للطلاب الدوليين الجدد عند شركات سكن الطلاب (DUWO وSSH). أول خطوة دائماً: صفحة السكن في جامعتك، وقدّم فور القبول. جامعات مثل خرونينغن ولايدن تنصح صراحةً بعدم السفر قبل ما تضمن سكن.",
      en: "The Netherlands has a severe housing shortage. Universities don't own housing, but they reserve a limited number of rooms for new international students with student-housing providers (DUWO and SSH). Always start with your university's housing page and apply right after admission. Universities such as Groningen and Leiden explicitly advise not to come without housing.",
    },
    links: [
      { name: "Study in NL: Finding a place to live", url: "https://www.studyinnl.org/plan-your-stay/finding-a-place-to-live", ar: "الدليل الرسمي الهولندي للسكن", en: "The official Dutch housing guide" },
      { name: "DUWO", url: "https://duwo.nl/en", cities: ["Amsterdam", "Delft", "The Hague", "Leiden"], ar: "أمستردام، دلفت، لاهاي، لايدن", en: "Amsterdam, Delft, The Hague, Leiden" },
      { name: "SSH Student Housing", url: "https://www.sshxl.nl/en", cities: ["Utrecht", "Rotterdam", "Groningen", "Nijmegen"], ar: "أوتريخت، روتردام، خرونينغن، نايميخن", en: "Utrecht, Rotterdam, Groningen, Nijmegen" },
      { name: "LSVb Housing Hotline", url: "https://lsvb.nl/housinghotline/", ar: "خط مساعدة مجاني من اتحاد الطلاب: أسئلة السكن، الإيجار القانوني، والنصب", en: "Free help from the national student union: housing questions, fair rent and scams" },
    ],
    src: "https://www.studyinnl.org/plan-your-stay/finding-a-place-to-live",
  },
  fi: {
    how: {
      ar: "في فنلندا سكن الطلاب تديره مؤسسات سكن طلابية غير ربحية في كل مدينة، وهي أرخص من السوق. قدّم على موقعها أول ما تقبل في الجامعة لأن الطلب عالي في الخريف. الجامعات نفسها غالباً لا تملك سكناً.",
      en: "In Finland, student housing is run by non-profit student-housing foundations in each city, cheaper than the market. Apply on their site as soon as you are admitted, because demand peaks in autumn. Universities themselves usually don't own housing.",
    },
    links: [
      { name: "Study in Finland: Accommodation", url: "https://www.studyinfinland.fi/life-finland/accommodation", ar: "الدليل الرسمي، وفيه قائمة مؤسسات السكن", en: "The official guide, with the list of housing foundations" },
      { name: "HOAS", url: "https://hoas.fi/en", cities: ["Helsinki", "Espoo"], ar: "هلسنكي وإسبو (منطقة العاصمة)", en: "Helsinki and Espoo (capital region)" },
      { name: "TOAS", url: "https://toas.fi/en/two-ways-to-apply/", cities: ["Tampere"], ar: "تامبيري، وفيه طلب خاص للطلاب الدوليين الجدد بغرف مفروشة", en: "Tampere, with a separate application for new international students (furnished rooms)" },
      { name: "PSOAS", url: "https://www.psoas.fi/en", cities: ["Oulu"], ar: "أولو", en: "Oulu" },
      { name: "LOAS", url: "https://www.loas.fi/en", cities: ["Lappeenranta"], ar: "لابينرانتا", en: "Lappeenranta" },
      { name: "Kuopio: student housing", url: "https://kuopio.fi/en/environment-and-housing/housing/student-and-youth-housing", cities: ["Kuopio"], ar: "صفحة مدينة كوبيو: شركتا سكن الطلاب Kuopas وTekman Tuki", en: "City of Kuopio page: the student-housing companies Kuopas and Tekman Tuki" },
    ],
    src: "https://www.studyinfinland.fi/life-finland/accommodation",
  },
  se: {
    how: {
      ar: "في السويد الجامعات في أوبسالا ولوند تضمن سكناً لبعض الطلاب الدوليين (في أوبسالا: من يدفع الرسوم في موعدها). في ستوكهولم مفيش ضمان، والطلاب بيعتمدوا على طابور SSSB والسوق الخاص، فسجّل في الطابور بدري.",
      en: "In Sweden, the universities in Uppsala and Lund guarantee housing for some international students (in Uppsala: fee-paying students who pay on time). Stockholm has no guarantee; students rely on the SSSB queue and the private market, so join the queue early.",
    },
    links: [
      { name: "Uppsala University: Housing", url: "https://www.uu.se/en/study/masters-studies/living-in-sweden/housing", cities: ["Uppsala"], ar: "ضمان سكن لطلاب الرسوم الذين يدفعون في الموعد", en: "Housing guarantee for fee-paying students who pay on time" },
      { name: "Lund University: Housing", url: "https://www.lunduniversity.lu.se/student-life/housing", cities: ["Lund"], ar: "LU Accommodation وضمان سكن لفئات معينة من الطلاب الدوليين", en: "LU Accommodation and a housing guarantee for certain international groups" },
      { name: "SSSB", url: "https://sssb.se/en/", cities: ["Stockholm", "Solna"], ar: "طابور سكن الطلاب في ستوكهولم، والأقدمية في الطابور هي اللي بتفرق", en: "Stockholm's student-housing queue, where queue time decides" },
    ],
    src: "https://www.uu.se/en/study/masters-studies/living-in-sweden/housing",
  },
  bg: {
    how: {
      ar: "في بلغاريا أغلب الجامعات الطبية عندها سكن طلابي (hostel) بسعر رخيص، مثلاً بليفن 75 إلى 95 يورو شهرياً. اسأل مكتب الطلاب الأجانب في جامعتك بعد القبول، وفي صوفيا ناس كتير بتأجر شقق خاصة.",
      en: "In Bulgaria most medical universities have cheap student hostels, e.g. €75–95 a month in Pleven. Ask your university's foreign-students office after admission; in Sofia many students rent private flats.",
    },
    links: [
      { name: "MU Pleven: fees and hostel", url: "https://www.mu-pleven.bg/index.php/admission/specialty-medicine/641-fees?lang=en", cities: ["Pleven"], ar: "سعر السكن الطلابي ضمن صفحة الرسوم", en: "Hostel prices on the fees page" },
      { name: "MU Varna: costs of living", url: "https://www.mu-varna.bg/EN/Admission/Pages/tuition-fees-cost-living.aspx", cities: ["Varna"], ar: "الرسوم وتكلفة المعيشة في فارنا", en: "Fees and cost of living in Varna" },
    ],
    src: "https://www.mu-pleven.bg/index.php/admission/specialty-medicine/641-fees?lang=en",
  },
  cz: {
    how: {
      ar: "في التشيك الجامعات الحكومية عندها مدن جامعية، وسكن الجامعة بيستخدم كإثبات سكن للتأشيرة. احجز بدري بعد القبول.",
      en: "In Czechia public universities run dormitories, and a university room serves as proof of accommodation for the visa. Book early after admission.",
    },
    links: [
      { name: "CTU: admission steps and dormitories", url: "https://fit.cvut.cz/en/applicants/admissions-procedure/master-study-program", cities: ["Prague"], ar: "جامعة CTU بتطلب حجز سكنها كإثبات للتأشيرة", en: "CTU asks you to book its housing as visa proof" },
    ],
    src: "https://fit.cvut.cz/en/applicants/admissions-procedure/master-study-program",
  },
  at: {
    how: {
      ar: "في النمسا الجامعات مش بتدي سكن تلقائي. الطلاب بيسكنوا في مدن طلابية أو سكن خاص. OeAD بيوفر سكن مفروش لحوالي 12,000 طالب دولي في المدن الكبيرة، وحجز سكن طلابي بيدّيك إثبات سكن للإقامة.",
      en: "In Austria universities do not allocate housing automatically. Students live in halls of residence or private flats. OeAD offers furnished rooms for about 12,000 international students in the main cities, and a dorm booking gives you proof of accommodation for the permit.",
    },
    links: [
      { name: "OeAD student housing", url: "https://oeadstudenthousing.at/", cities: ["Vienna", "Linz"], ar: "سكن مفروش للطلاب الدوليين في فيينا ولينتس ومدن تانية", en: "Furnished rooms for international students in Vienna, Linz and other cities" },
      { name: "Study in Austria: Accommodation", url: "https://studyinaustria.at/en/living/accommodation", ar: "الدليل الرسمي للسكن", en: "The official housing guide" },
    ],
    src: "https://studyinaustria.at/en/living/accommodation",
  },
  ee: {
    how: {
      ar: "في إستونيا كل جامعة لها نظامها: بعضها عنده سكن طلابي (TalTech وجامعة تارتو وجامعة تالين) وبعضها لا. مكتب العلاقات الدولية في جامعتك يساعدك أو يدلك على السكن.",
      en: "In Estonia each university has its own setup: some have dormitories (TalTech, the University of Tartu, Tallinn University) and some don't. Your university's international office helps or points you to housing.",
    },
    links: [
      { name: "Study in Estonia: Accommodation", url: "https://studyinestonia.ee/living/accommodation", ar: "الدليل الرسمي للسكن في إستونيا", en: "The official housing guide for Estonia" },
    ],
    src: "https://studyinestonia.ee/living/accommodation",
  },
  be: {
    how: {
      ar: "في بلجيكا الغرفة الطلابية اسمها «كوت» (kot)، وأغلب الطلاب يسكنون في بيوت طلابية خاصة، مع سكن جامعي محدود. أول جهة تكلمها: خدمة السكن في جامعتك، فهي تساعدك تلاقي غرفة حسب ميزانيتك.",
      en: "In Belgium a student room is called a kot. Most students live in private student houses, with limited university housing. Your first contact is your university's housing service, which helps you find a room within your budget.",
    },
    links: [
      { name: "Study in Belgium: Accommodation", url: "https://studyinbelgium.be/en/how-find-accommodation-study-french-speaking-belgium", ar: "الدليل الرسمي (الجزء الناطق بالفرنسية وبروكسل)", en: "The official guide (French-speaking Belgium and Brussels)" },
    ],
    src: "https://studyinbelgium.be/en/how-find-accommodation-study-french-speaking-belgium",
  },
  es: {
    how: {
      ar: "في إسبانيا الجامعات التي عندنا عندها سكن جامعي (residencias) داخل الحرم أو بالتعاون مع جهات سكن، والباقي سكن خاص. شوف ملاحظة السكن لكل جامعة تحت، وصفحة السكن في موقع الجامعة.",
      en: "In Spain the universities we list have university residences on campus or through partners; the rest is private housing. See each university's housing note below and its housing page.",
    },
    links: [],
    src: null,
  },
  it: {
    how: {
      ar: "في إيطاليا السكن الطلابي الرخيص تديره جهة «الحق في الدراسة» (DSU) في كل إقليم، بمسابقة سنوية (bando) حسب الدخل والدرجات، وممكن يكون مجاني لمن يأخذ منحة DSU. بعض الجامعات عندها كمان سكن بالسعر الكامل.",
      en: "In Italy cheap student housing is run by each region's right-to-study (DSU) agency through a yearly call (bando) based on income and merit; it can be free for DSU scholarship holders. Some universities also offer full-rate residences.",
    },
    links: [
      { name: "ER.GO (Bologna)", cities: ["Bologna"], url: "https://www.unibo.it/en/study/life-at-university-and-in-the-city/housing-and-residences/housing", ar: "بولونيا: سكن ER.GO، وخدمة Vetrina Alloggi لإعلانات سكن خاص تراجعها الجامعة", en: "Bologna: ER.GO residences, and Vetrina Alloggi, private listings checked by the university" },
      { name: "Politecnico di Milano: Residences", cities: ["Milan"], url: "https://www.residenze.polimi.it/en/", ar: "ميلانو: سكن البوليتكنيكو، يفتح الحجز كل سنة من يونيو", en: "Milan: Politecnico residences; booking opens every June" },
      { name: "EDiSU Pavia", cities: ["Pavia"], url: "https://www.edisu.pv.it/en/", ar: "بافيا: الكليات والمساكن الجامعية، والمسابقة تنزل عادةً في يوليو", en: "Pavia: university colleges and residences; the call is usually published in July" },
      { name: "ERSU Messina", cities: ["Messina"], url: "https://www.ersumessina.it/", ar: "ميسينا: أماكن السكن ضمن مسابقة المنح السنوية (بالإيطالية)", en: "Messina: housing places within the yearly grants call (in Italian)" },
    ],
    src: "https://www.unibo.it/en/study/life-at-university-and-in-the-city/housing-and-residences/housing",
  },
  pl: {
    how: {
      ar: "في بولندا السكن الأرخص هو المدينة الجامعية (akademik) التابعة للجامعة، والأماكن محدودة. التقديم غالباً من نظام الجامعة بعد ما تتقبل، وبعض الجامعات لا تعطي أماكن لطلاب الدرجة الكاملة الدوليين، فاسأل جامعتك بدري.",
      en: "In Poland the cheapest option is the university dormitory (akademik), with limited places. You usually apply through the university's system after admission, and some universities don't give places to full-degree international students, so ask early.",
    },
    links: [
      { name: "Warsaw University of Technology: Accommodation", url: "https://www.students.pw.edu.pl/layout/set/print/Resources/Students-Life/Accommodation", ar: "مثال رسمي: التقديم على السكن بعد حالة «مقبول» في نظام IRK", en: "Official example: apply for housing once your IRK status is “admitted”" },
    ],
    src: "https://www.students.pw.edu.pl/layout/set/print/Resources/Students-Life/Accommodation",
  },
  hu: {
    how: {
      ar: "في المجر أرخص سكن هو المدينة الجامعية التابعة لجامعتك، والجامعات تسكن الطلاب حسب الأماكن المتاحة فقط. طلاب منحة Stipendium Hungaricum لهم مواعيد تقديم خاصة على السكن.",
      en: "In Hungary the cheapest housing is your university's dormitory, and universities house students only up to capacity. Stipendium Hungaricum scholarship holders have their own dormitory application dates.",
    },
    links: [
      { name: "Study in Hungary: Accommodation", url: "https://studyinhungary.hu/living-in-hungary/menu/accommodation.html", ar: "الدليل الرسمي", en: "The official guide" },
      { name: "University of Debrecen: Dormitories", cities: ["Debrecen"], url: "https://kollegiumok.unideb.hu/elsossh", ar: "دبرتسن: التقديم على السكن لطلاب المنحة الجدد", en: "Debrecen: dormitory application for new scholarship students" },
      { name: "ELTE Dormitory Centre", cities: ["Budapest"], url: "https://www.elte.hu/en/dormitory-centre", ar: "بودابست: سكن جامعة ELTE", en: "Budapest: ELTE dormitories" },
    ],
    src: "https://studyinhungary.hu/living-in-hungary/menu/accommodation.html",
  },
  ro: {
    how: {
      ar: "في رومانيا الجامعات عندها سكن داخل الحرم (camin)، ورسومه تحددها الجامعة كل سنة. السؤال يكون لمكتب الطلاب الدوليين في جامعتك بعد القبول.",
      en: "In Romania universities have on-campus dormitories (camin), with fees set by the university each year. Ask your university's international office after admission.",
    },
    links: [],
    src: null,
  },
  lv: {
    how: {
      ar: "في لاتفيا الجامعات في ريغا عندها سكن طلابي للطلاب المسجلين فيها، وله فترات تقديم محددة. قدّم بعد القبول مباشرة.",
      en: "In Latvia the universities in Riga have dormitories for their registered students, with set application periods. Apply right after admission.",
    },
    links: [
      { name: "Riga Technical University: Dormitories", cities: ["Riga"], url: "https://rtu.lv/en/dormitories", ar: "سكن جامعة ريغا التقنية وفترات التقديم", en: "RTU dormitories and application periods" },
    ],
    src: "https://rtu.lv/en/dormitories",
  },
  lt: {
    how: {
      ar: "في ليتوانيا الجامعات عندها مدن جامعية رخيصة للطلاب المسجلين فيها. جامعة KTU في كاوناس عندها 12 سكن قرب الحرم، وجامعة فيلنيوس تسكن طلابها في 3 مجمعات.",
      en: "In Lithuania universities have cheap dormitories for their own students. KTU in Kaunas has 12 dormitories near campus, and Vilnius University houses its students in 3 complexes.",
    },
    links: [
      { name: "Vilnius University: Accommodation", cities: ["Vilnius"], url: "https://www.vu.lt/en/studies/living/accommodation", ar: "فيلنيوس (وطلاب فرع كاوناس)", en: "Vilnius (and its Kaunas faculty)" },
      { name: "KTU Dormitories", cities: ["Kaunas"], url: "https://dormitory.ktu.edu/", ar: "كاوناس: سكن جامعة KTU", en: "Kaunas: KTU dormitories" },
    ],
    src: "https://www.vu.lt/en/studies/living/accommodation",
  },
};

// Rental-scam warning: shown on every country. Each point is paraphrased from the sources below.
export const SCAM = {
  ar: [
    "لا تدفع تأمين أو إيجار قبل ما تشوف الغرفة بنفسك (أو بزيارة فيديو مباشرة) وتمضي عقد.",
    "إيجار أرخص بكثير من المعتاد، أو ضغط عليك تدفع بسرعة: علامة نصب.",
    "«المالك مسافر وهيبعتلك المفتاح بالبريد»، أو الدفع لحساب بنك في دولة تانية، أو عن طريق Airbnb أو booking.com لغرفة إيجار طويل: كلها حيل مشهورة.",
    "لا تبعت صورة جواز سفرك أو بيانات بنكك لحد ما تعرفوش.",
    "ابدأ دايماً بالجهات الرسمية اللي في الصفحة دي وبمكتب السكن في جامعتك. وخد بالك: نصب كتير بيحصل في جروبات السوشيال ميديا زي فيسبوك.",
    "لو شاكك في عرض، ابعته لمكتب الطلاب الدوليين في جامعتك قبل ما تدفع.",
    "لو حصل نصب: كلم البنك فوراً تحاول توقف التحويل، وبلّغ الشرطة والموقع اللي فيه الإعلان، واحتفظ بكل الرسائل والإيصالات.",
  ],
  en: [
    "Don't pay a deposit or rent before you see the room yourself (or by a live video viewing) and sign a contract.",
    "Rent far below similar listings, or pressure to pay quickly, is a scam sign.",
    "“The owner is abroad and will post you the keys”, payment to a bank account in another country, or paying through Airbnb or booking.com for a long-term room are well-known tricks.",
    "Don't send your passport copy or bank details to people you don't know.",
    "Always start with the official providers on this page and your university's housing office. Be careful: many scams happen in social-media groups such as Facebook.",
    "If an offer looks suspicious, send it to your university's international office before paying.",
    "If you are scammed: call your bank at once to try to stop the transfer, report it to the police and to the site that ran the ad, and keep all messages and receipts.",
  ],
};

export const SCAM_SRC = [
  { name: "Europäisches Verbraucherzentrum Deutschland", url: "https://www.cec-zev.eu/de/immobilien/anzeigenbetrug/" },
  { name: "Verbraucherzentrale", url: "https://www.verbraucherzentrale.de/wissen/vertraege-reklamation/abzocke/fakewohnungen-im-internet-so-erkennen-sie-falsche-immobilienanzeigen-27576" },
  { name: "Erasmus University Rotterdam", url: "https://www.eur.nl/en/eshcc/education/practical-matters/housing-international-students/housing-contract" },
  { name: "University of Groningen", url: "https://www.rug.nl/education/bachelor/international-students/study-in-the-netherlands-groningen/living-in-the-netherlands/accommodation" },
  { name: "LSVb Housing Hotline", url: "https://lsvb.nl/housinghotline/" },
];

export const HOUSING_TEXT = {
  ar: {
    title: "دليل السكن للطلاب",
    lead: "إزاي تلاقي سكن طلابي رسمي ورخيص في كل دولة ومدينة عندنا، وإزاي تحمي نفسك من نصب الإيجار.",
    country: "الدولة",
    city: "المدينة",
    allCities: "كل المدن",
    how: "السكن هنا بيمشي إزاي",
    official: "روابط رسمية",
    unis: "السكن في جامعات المدينة (من مصدر كل برنامج)",
    cityLink: "الجهة الرسمية في المدينة",
    noLinks: "لا يوجد رابط وطني موحد لهذه الدولة. شوف ملاحظة السكن لكل جامعة تحت، وصفحة السكن في موقعها.",
    open: "افتح البرنامج",
    source: "المصدر",
    scamTitle: "احذر نصب الإيجار",
    scamLead: "النصب على الطلاب الدوليين في السكن بيزيد كل سنة، خصوصاً اللي بيدوروا من بلدهم قبل السفر. القواعد دي تحميك في أي دولة:",
    scamSrc: "مصادر التحذير:",
    early: "قدّم على السكن في نفس يوم وصول القبول. الأماكن الرخيصة تخلص قبل أي حاجة تانية.",
    planner: "حط موعد السكن في خطتك",
    reviewed: "آخر مراجعة: 15 نوفمبر 2026. الأسعار والمواعيد بتتغير كل سنة، فتأكد من الموقع الرسمي قبل ما تدفع.",
    notPublished: "غير منشور في المصدر",
  },
  en: {
    title: "Student housing guide",
    lead: "How to find official, affordable student housing in every country and city we cover, and how to protect yourself from rental scams.",
    country: "Country",
    city: "City",
    allCities: "All cities",
    how: "How housing works here",
    official: "Official links",
    unis: "Housing at the city's universities (from each programme's source)",
    cityLink: "Official provider in this city",
    noLinks: "There is no single national link for this country. See each university's housing note below and its housing page.",
    open: "Open programme",
    source: "Source",
    scamTitle: "Watch out for rental scams",
    scamLead: "Housing scams against international students grow every year, especially for those searching from home before they travel. These rules protect you in any country:",
    scamSrc: "Warning sources:",
    early: "Apply for housing the day your admission arrives. Cheap places run out before anything else.",
    planner: "Add housing to your plan",
    reviewed: "Last reviewed: 15 November 2026. Prices and dates change every year, so check the official site before you pay.",
    notPublished: "Not published in the source",
  },
};
