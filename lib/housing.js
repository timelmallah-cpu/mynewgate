// Student housing guide: how it works in each country, the official providers, and how to avoid rental scams.
// Per-university housing notes come from each programme's own source (lib/programmes.json, field "housing").
// Only official links (national agencies, student-housing foundations, universities, consumer bodies). Reviewed 2026-11-15.

export const HOUSING = {
  de: {
    how: {
      ar: "سكن الطلاب الرخيص في ألمانيا تديره مؤسسة اسمها Studierendenwerk في كل مدينة جامعية، وعندها حوالي 196,000 مكان في كل ألمانيا. أكثر من 40% من الطلاب الدوليين يسكنون فيها. الأماكن تنفد بسرعة، فقدّم مباشرة عند وصول خطاب القبول، وكل مدينة لها طريقتها (قرعة أو بترتيب التقديم).",
      en: "Cheap student housing in Germany is run by a Studierendenwerk in each university town, with about 196,000 places nationwide. More than 40% of international students live in one. Places go fast, so apply as soon as you get your admission letter; each town has its own system (lottery or first come, first served).",
    },
    links: [
      { name: "Studierendenwerk A-Z", url: "https://www.studierendenwerke.de/en/deutsches-studentenwerk/studentenwerke/studierendenwerke-a-z", ar: "اكتب اسم مدينتك ليظهر لك الـ Studierendenwerk المسؤول عنها", en: "Type your town to find the Studierendenwerk responsible for it" },
      { name: "DAAD: Wohnen", url: "https://www.daad.de/en/studying-in-germany/living-in-germany/renting/", ar: "دليل DAAD الرسمي للسكن (سكن طلابي، غرفة مشتركة WG، شقة)", en: "DAAD's official housing guide (halls, shared flats, apartments)" },
    ],
    src: "https://studierendenwerke.de/themen/wohnen/studierendenwohnheime",
  },
  nl: {
    how: {
      ar: "هولندا فيها أزمة سكن قوية. الجامعات لا تملك سكناً، لكنها تحجز عدداً محدوداً من الغرف للطلاب الدوليين الجدد عند شركات سكن الطلاب (DUWO وSSH). أول خطوة دائماً: صفحة السكن في جامعتك، وقدّم فور القبول. جامعات مثل خرونينغن ولايدن تنصح صراحةً بعدم السفر قبل ضمان السكن.",
      en: "The Netherlands has a severe housing shortage. Universities don't own housing, but they reserve a limited number of rooms for new international students with student-housing providers (DUWO and SSH). Always start with your university's housing page and apply right after admission. Universities such as Groningen and Leiden explicitly advise not to come without housing.",
    },
    links: [
      { name: "Study in NL: Finding a place to live", url: "https://www.studyinnl.org/plan-your-stay/finding-a-place-to-live", ar: "الدليل الرسمي الهولندي للسكن", en: "The official Dutch housing guide" },
      { name: "DUWO", url: "https://duwo.nl/en", cities: ["Amsterdam", "Delft", "The Hague", "Leiden"], ar: "أمستردام، دلفت، لاهاي، لايدن", en: "Amsterdam, Delft, The Hague, Leiden" },
      { name: "SSH Student Housing", url: "https://www.sshxl.nl/en", cities: ["Utrecht", "Rotterdam", "Groningen", "Nijmegen"], ar: "أوتريخت، روتردام، خرونينغن، نايميخن", en: "Utrecht, Rotterdam, Groningen, Nijmegen" },
      { name: "LSVb Housing Hotline", url: "https://lsvb.nl/diensten/housing-hotline/", ar: "خط مساعدة مجاني من اتحاد الطلاب: أسئلة السكن، والإيجار القانوني، والاحتيال", en: "Free help from the national student union: housing questions, fair rent and scams" },
    ],
    src: "https://www.studyinnl.org/plan-your-stay/finding-a-place-to-live",
  },
  fi: {
    how: {
      ar: "في فنلندا سكن الطلاب تديره مؤسسات سكن طلابية غير ربحية في كل مدينة، وهي أرخص من السوق. قدّم على موقعها فور قبولك في الجامعة لأن الطلب مرتفع في الخريف. الجامعات نفسها غالباً لا تملك سكناً.",
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
      ar: "في السويد الجامعات في أوبسالا ولوند تضمن سكناً لبعض الطلاب الدوليين (في أوبسالا: من يدفع الرسوم في موعدها). في ستوكهولم لا يوجد ضمان، ويعتمد الطلاب على طابور SSSB والسوق الخاص، فسجّل في الطابور مبكراً.",
      en: "In Sweden, the universities in Uppsala and Lund guarantee housing for some international students (in Uppsala: fee-paying students who pay on time). Stockholm has no guarantee; students rely on the SSSB queue and the private market, so join the queue early.",
    },
    links: [
      { name: "Uppsala University: Housing", url: "https://www.uu.se/en/study/masters-studies/living-in-sweden/housing", cities: ["Uppsala"], ar: "ضمان سكن لطلاب الرسوم الذين يدفعون في الموعد", en: "Housing guarantee for fee-paying students who pay on time" },
      { name: "Lund University: Housing", url: "https://www.lunduniversity.lu.se/student-life/housing", cities: ["Lund"], ar: "LU Accommodation وضمان سكن لفئات معينة من الطلاب الدوليين", en: "LU Accommodation and a housing guarantee for certain international groups" },
      { name: "SSSB", url: "https://sssb.se/en/", cities: ["Stockholm", "Solna"], ar: "طابور سكن الطلاب في ستوكهولم، والأقدمية في الطابور هي التي تحدد", en: "Stockholm's student-housing queue, where queue time decides" },
    ],
    src: "https://www.uu.se/en/study/masters-studies/living-in-sweden/housing",
  },
  bg: {
    how: {
      ar: "في بلغاريا لدى أغلب الجامعات الطبية سكن طلابي (hostel) بسعر رخيص، مثلاً بليفن 75 إلى 95 يورو شهرياً. اسأل مكتب الطلاب الأجانب في جامعتك بعد القبول، وفي صوفيا يستأجر كثيرون شققاً خاصة.",
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
      ar: "في التشيك لدى الجامعات الحكومية مدن جامعية، ويُستخدم سكن الجامعة كإثبات سكن للتأشيرة. احجز مبكراً بعد القبول.",
      en: "In Czechia public universities run dormitories, and a university room serves as proof of accommodation for the visa. Book early after admission.",
    },
    links: [
      { name: "CTU: admission steps and dormitories", url: "https://fit.cvut.cz/en/applicants/admissions-procedure/master-study-program", cities: ["Prague"], ar: "جامعة CTU تطلب حجز سكنها كإثبات للتأشيرة", en: "CTU asks you to book its housing as visa proof" },
    ],
    src: "https://fit.cvut.cz/en/applicants/admissions-procedure/master-study-program",
  },
  at: {
    how: {
      ar: "في النمسا لا توفر الجامعات سكناً تلقائياً. يسكن الطلاب في مدن طلابية أو سكن خاص. توفر OeAD سكناً مفروشاً لحوالي 12,000 طالب دولي في المدن الكبيرة، وحجز سكن طلابي يمنحك إثبات سكن للإقامة.",
      en: "In Austria universities do not allocate housing automatically. Students live in halls of residence or private flats. OeAD offers furnished rooms for about 12,000 international students in the main cities, and a dorm booking gives you proof of accommodation for the permit.",
    },
    links: [
      { name: "OeAD student housing", url: "https://oeadstudenthousing.at/", cities: ["Vienna", "Linz"], ar: "سكن مفروش للطلاب الدوليين في فيينا ولينتس ومدن أخرى", en: "Furnished rooms for international students in Vienna, Linz and other cities" },
      { name: "Study in Austria: Accommodation", url: "https://studyinaustria.at/en/live-and-work/accomodation", ar: "الدليل الرسمي للسكن", en: "The official housing guide" },
    ],
    src: "https://studyinaustria.at/en/live-and-work/accomodation",
  },
  fr: {
    how: {
      ar: "في فرنسا تدير CROUS سكن الطلاب الحكومي في كل مدينة جامعية، والغرفة فيه أرخص كثيراً من السوق لكن الأماكن محدودة. قدّم فور حصولك على القبول، وإذا لم يكن لديك ضامن في فرنسا فاطلب ضمان Visale المجاني.",
      en: "In France public student housing is run by the CROUS in each university town; rooms cost far less than the market but places are limited. Apply as soon as you are admitted, and if you have no guarantor in France ask for the free Visale guarantee.",
    },
    links: [
      { name: "CROUS: find student housing", url: "https://trouverunlogement.lescrous.fr/", ar: "منصة CROUS للبحث عن سكن طلابي حكومي في كل المدن", en: "CROUS platform to search public student housing in every town" },
      { name: "Visale (free rent guarantee)", url: "https://www.visale.fr/", ar: "ضمان إيجار مجاني للطلاب بدل الضامن", en: "Free rent guarantee for students instead of a guarantor" },
    ],
    src: "https://trouverunlogement.lescrous.fr/",
  },
  pt: {
    how: {
      ar: "في البرتغال كل جامعة حكومية لديها خدمات اجتماعية (SAS) تدير مساكن الطلاب، والأولوية للطلاب الحاصلين على منح، لكن توجد أماكن للطلاب الدوليين. جامعة بورتو مثلاً لديها 9 مساكن فيها حوالي 1,216 مكاناً. احجز مبكراً لأن السكن الخاص في لشبونة وبورتو غالي.",
      en: "In Portugal each public university has social services (SAS) that run student residences; grant holders have priority, but there are places for international students. The University of Porto, for example, has 9 residences with about 1,216 places. Book early, as private housing in Lisbon and Porto is expensive.",
    },
    links: [
      { name: "SASUP: University of Porto residences", url: "https://sigarra.up.pt/sasup/pt/web_page.inicial", cities: ["Porto"], ar: "مساكن جامعة بورتو والتقديم عليها", en: "University of Porto residences and how to apply" },
      { name: "SASNOVA: NOVA Lisbon residences", url: "https://sas.unl.pt/", cities: ["Lisbon"], ar: "الخدمات الاجتماعية لجامعة NOVA لشبونة (السكن)", en: "NOVA Lisbon social services (housing)" },
    ],
    src: "https://sigarra.up.pt/sasup/pt/web_page.inicial",
  },
  ie: {
    how: {
      ar: "السكن في أيرلندا صعب ومكلف، خاصة في دبلن. سكن الجامعات محدود ويوزّع غالباً بالقرعة في فترة تقديم قصيرة (UCC بين منتصف فبراير ومنتصف مارس، وDCU من 1 أبريل إلى 31 مايو لطلاب الدراسات العليا والدوليين)، فابدأ البحث مبكراً وجهّز بديلاً في السكن الخاص للطلاب، واحذر من الاحتيال.",
      en: "Housing in Ireland is hard to find and expensive, especially in Dublin. University housing is limited and often allocated by lottery in a short window (UCC from mid-February to mid-March; DCU from 1 April to 31 May for postgraduate and international students), so start early, have a private student-housing backup, and beware of scams.",
    },
    links: [
      { name: "UCC: accommodation for international students", url: "https://www.ucc.ie/en/international/studentinfohub/beforeyouarrive/accommodation", cities: ["Cork"], ar: "خيارات السكن في كورك وقرعة سكن الجامعة", en: "Housing options in Cork and the campus lottery" },
      { name: "DCU Student Accommodation", url: "https://dcuaccommodation.ie", cities: ["Dublin"], ar: "سكن جامعة DCU في دبلن والتقديم عليه", en: "DCU campus housing in Dublin and how to apply" },
    ],
    src: "https://www.ucc.ie/en/international/studentinfohub/beforeyouarrive/accommodation",
  },
  dk: {
    how: {
      ar: "السكن صعب في كوبنهاغن ومحيطها. جامعة كوبنهاغن ترسل قائمة الطلاب الدوليين الجدد لمؤسسة Housing Foundation Copenhagen في بداية يونيو، والمؤسسة ترسل دعوة للحجز؛ لا يمكن الحجز قبل الدعوة. وفي DTU تساعد مؤسسة BDTU طلاب الماجستير الدوليين الجدد. ابدأ مبكراً واحذر من الاحتيال.",
      en: "Housing is hard to find in and around Copenhagen. The University of Copenhagen sends its list of new international students to Housing Foundation Copenhagen in early June, and the foundation sends booking invitations; you cannot book before you are invited. At DTU, the BDTU foundation helps new international MSc students. Start early and beware of scams.",
    },
    links: [
      { name: "Housing Foundation Copenhagen", url: "https://housingfoundation.dk/", cities: ["Copenhagen"], ar: "سكن الطلاب الدوليين في جامعة كوبنهاغن", en: "Housing for international students at the University of Copenhagen" },
      { name: "Boligfonden DTU (BDTU)", url: "https://bdtu.dk/", cities: ["Kongens Lyngby"], ar: "سكن طلاب DTU الدوليين", en: "Housing for DTU's international students" },
    ],
    src: "https://www.studies.ku.dk/masters/global-development/student-life/",
  },
  hr: {
    how: {
      ar: "سكن المدن الجامعية (Studentski centar) محدود ولا يُمنح تلقائياً للطلاب الدوليين: تواصل مع مكتب العلاقات الدولية في جامعتك لترشيحك. أغلب طلاب الدرجة الكاملة من خارج الاتحاد الأوروبي يستأجرون سكناً خاصاً.",
      en: "Student Centre dormitories (Studentski centar) are limited and not given automatically to international students: contact your university's international office to be recommended. Most non-EU full-degree students rent privately.",
    },
    links: [
      { name: "Study in Croatia: accommodation and meals", url: "https://studyincroatia.hr/live-and-work-in-croatia/accommodation-and-meals/", cities: [], ar: "السكن والوجبات للطلاب في كرواتيا", en: "Student housing and meals in Croatia" },
      { name: "Student Centre Zagreb (SC)", url: "https://www.sczg.unizg.hr/informacije/general-information", cities: ["Zagreb"], ar: "معلومات سكن الطلاب الدوليين في زغرب", en: "Housing information for international students in Zagreb" },
    ],
    src: "https://www.sczg.unizg.hr/informacije/general-information",
  },
  sk: {
    how: {
      ar: "كليات الطب في سلوفاكيا عادة تساعد طلاب البرامج الإنجليزية في السكن الجامعي أو تدلّهم على السكن الخاص؛ اسأل مكتب الطلاب الدوليين في الكلية بعد القبول مباشرة.",
      en: "Slovak medical faculties usually help students on English programmes with university dormitories or point them to private housing; ask the faculty's international office right after admission.",
    },
    links: [],
    src: "https://www.studyin.sk/",
    check: true,
  },
  cy: {
    how: {
      ar: "تصريح الإقامة في قبرص يطلب عقد إيجار أو ما يثبت السكن، لذلك رتّب السكن قبل الوصول أو فور وصولك. اسأل مكتب الطلاب الدوليين في جامعتك عن السكن الجامعي والبدائل.",
      en: "The Cypriot residence permit asks for a rental agreement or proof of housing, so arrange housing before or right after you arrive. Ask your university's international office about student housing and alternatives.",
    },
    links: [],
    src: "https://www.ucy.ac.cy/ir/wp-content/uploads/sites/113/2026/04/ENTRY-PERMIT-REGULATIONS.pdf",
  },
  mt: {
    how: {
      ar: "تصريح الإقامة في مالطا يحتاج عقد إيجار مسجّلاً، لذلك احجز سكناً مبكراً وتأكد أن المالك يسجّل العقد. مكتب الطلاب الدوليين في جامعة مالطا يساعد في السكن بعد القبول.",
      en: "The Maltese residence permit needs a registered rental contract, so book early and make sure the landlord registers the lease. The University of Malta's International Office helps with housing after an offer.",
    },
    links: [],
    src: "https://www.um.edu.mt/courses/overview/pmscecnftt5-2026-7-o/",
    check: true,
  },
  ee: {
    how: {
      ar: "في إستونيا لكل جامعة نظامها: بعضها لديه سكن طلابي (TalTech وجامعة تارتو وجامعة تالين) وبعضها لا. مكتب العلاقات الدولية في جامعتك يساعدك أو يدلك على السكن.",
      en: "In Estonia each university has its own setup: some have dormitories (TalTech, the University of Tartu, Tallinn University) and some don't. Your university's international office helps or points you to housing.",
    },
    links: [
      { name: "Study in Estonia: Accommodation", url: "https://studyinestonia.ee/living/accommodation", ar: "الدليل الرسمي للسكن في إستونيا", en: "The official housing guide for Estonia" },
    ],
    src: "https://studyinestonia.ee/living/accommodation",
  },
  be: {
    how: {
      ar: "في بلجيكا الغرفة الطلابية اسمها «كوت» (kot)، وأغلب الطلاب يسكنون في بيوت طلابية خاصة، مع سكن جامعي محدود. أول جهة تتواصل معها: خدمة السكن في جامعتك، فهي تساعدك على إيجاد غرفة حسب ميزانيتك.",
      en: "In Belgium a student room is called a kot. Most students live in private student houses, with limited university housing. Your first contact is your university's housing service, which helps you find a room within your budget.",
    },
    links: [
      { name: "Study in Belgium: Accommodation", url: "https://studyinbelgium.be/en/how-find-accommodation-study-french-speaking-belgium", ar: "الدليل الرسمي (الجزء الناطق بالفرنسية وبروكسل)", en: "The official guide (French-speaking Belgium and Brussels)" },
    ],
    src: "https://studyinbelgium.be/en/how-find-accommodation-study-french-speaking-belgium",
  },
  es: {
    how: {
      ar: "في إسبانيا لدى الجامعات الموجودة في موقعنا سكن جامعي (residencias) داخل الحرم أو بالتعاون مع جهات سكن، والباقي سكن خاص. راجع ملاحظة السكن لكل جامعة أدناه، وصفحة السكن في موقع الجامعة.",
      en: "In Spain the universities we list have university residences on campus or through partners; the rest is private housing. See each university's housing note below and its housing page.",
    },
    links: [],
    src: null,
  },
  it: {
    how: {
      ar: "في إيطاليا السكن الطلابي الرخيص تديره جهة «الحق في الدراسة» (DSU) في كل إقليم، بمسابقة سنوية (bando) حسب الدخل والدرجات، وقد يكون مجانياً لمن يحصل على منحة DSU. ولدى بعض الجامعات أيضاً سكن بالسعر الكامل.",
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
      ar: "في بولندا السكن الأرخص هو المدينة الجامعية (akademik) التابعة للجامعة، والأماكن محدودة. التقديم غالباً من نظام الجامعة بعد قبولك، وبعض الجامعات لا تمنح أماكن لطلاب الدرجة الكاملة الدوليين، فاسأل جامعتك مبكراً.",
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
      { name: "University of Debrecen: Dormitories", cities: ["Debrecen"], url: "https://kollegiumok.unideb.hu/elsossh", ar: "دبرتسن: التقديم على السكن لطلاب المنحة الجدد", en: "Debrecen: dormitory application for new scholarship students" },
      { name: "ELTE Dormitory Centre", cities: ["Budapest"], url: "https://www.elte.hu/en/dormitory-centre", ar: "بودابست: سكن جامعة ELTE", en: "Budapest: ELTE dormitories" },
    ],
    src: "https://www.elte.hu/en/dormitory-centre",
  },
  ro: {
    how: {
      ar: "في رومانيا لدى الجامعات سكن داخل الحرم (camin)، ورسومه تحددها الجامعة كل سنة. السؤال يكون لمكتب الطلاب الدوليين في جامعتك بعد القبول.",
      en: "In Romania universities have on-campus dormitories (camin), with fees set by the university each year. Ask your university's international office after admission.",
    },
    links: [],
    src: null,
  },
  lv: {
    how: {
      ar: "في لاتفيا لدى الجامعات في ريغا سكن طلابي للطلاب المسجلين فيها، وله فترات تقديم محددة. قدّم بعد القبول مباشرة.",
      en: "In Latvia the universities in Riga have dormitories for their registered students, with set application periods. Apply right after admission.",
    },
    links: [
      { name: "Riga Technical University: Dormitories", cities: ["Riga"], url: "https://rtu.lv/en/dormitories", ar: "سكن جامعة ريغا التقنية وفترات التقديم", en: "RTU dormitories and application periods" },
    ],
    src: "https://rtu.lv/en/dormitories",
  },
  lt: {
    how: {
      ar: "في ليتوانيا لدى الجامعات مدن جامعية رخيصة للطلاب المسجلين فيها. لدى جامعة KTU في كاوناس 12 سكناً قرب الحرم، وجامعة فيلنيوس تسكن طلابها في 3 مجمعات.",
      en: "In Lithuania universities have cheap dormitories for their own students. KTU in Kaunas has 12 dormitories near campus, and Vilnius University houses its students in 3 complexes.",
    },
    links: [
      { name: "Vilnius University: Accommodation", cities: ["Vilnius", "Kaunas"], url: "https://www.vu.lt/en/studies/living/accommodation", ar: "فيلنيوس (وطلاب فرع كاوناس)", en: "Vilnius (and its Kaunas faculty)" },
      { name: "KTU Dormitories", cities: ["Kaunas"], url: "https://dormitory.ktu.edu/", ar: "كاوناس: سكن جامعة KTU", en: "Kaunas: KTU dormitories" },
    ],
    src: "https://www.vu.lt/en/studies/living/accommodation",
  },
};

// Rental-scam warning: shown on every country. Each point is paraphrased from the sources below.
export const SCAM = {
  ar: [
    "لا تدفع تأميناً أو إيجاراً قبل أن ترى الغرفة بنفسك (أو بزيارة فيديو مباشرة) وتوقّع عقداً.",
    "إيجار أرخص بكثير من المعتاد، أو ضغط عليك لتدفع بسرعة: علامة احتيال.",
    "«المالك مسافر وسيرسل لك المفتاح بالبريد»، أو الدفع لحساب بنكي في دولة أخرى، أو عن طريق Airbnb أو booking.com لغرفة إيجار طويل: كلها حيل معروفة.",
    "لا ترسل صورة جواز سفرك أو بياناتك البنكية لشخص لا تعرفه.",
    "ابدأ دائماً بالجهات الرسمية في هذه الصفحة وبمكتب السكن في جامعتك. وانتبه: يحدث احتيال كثير في مجموعات وسائل التواصل مثل فيسبوك.",
    "إذا شككت في عرض، أرسله إلى مكتب الطلاب الدوليين في جامعتك قبل أن تدفع.",
    "إذا تعرضت للاحتيال: اتصل بالبنك فوراً لمحاولة إيقاف التحويل، وأبلغ الشرطة والموقع الذي نُشر فيه الإعلان، واحتفظ بكل الرسائل والإيصالات.",
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
  { name: "LSVb Housing Hotline", url: "https://lsvb.nl/diensten/housing-hotline/" },
];

export const HOUSING_TEXT = {
  ar: {
    title: "دليل السكن للطلاب",
    lead: "كيف تجد سكناً طلابياً رسمياً ورخيصاً في كل دولة ومدينة لدينا، وكيف تحمي نفسك من احتيال الإيجار.",
    country: "الدولة",
    city: "المدينة",
    allCities: "كل المدن",
    how: "كيف يعمل السكن هنا",
    official: "روابط رسمية",
    unis: "السكن في جامعات المدينة (من مصدر كل برنامج)",
    cityLink: "الجهة الرسمية في المدينة",
    noLinks: "لا يوجد رابط وطني موحد لهذه الدولة. راجع ملاحظة السكن لكل جامعة أدناه، وصفحة السكن في موقعها.",
    open: "افتح البرنامج",
    source: "المصدر",
    scamTitle: "احذر احتيال الإيجار",
    scamLead: "يزداد الاحتيال على الطلاب الدوليين في السكن كل سنة، خاصة من يبحثون من بلدهم قبل السفر. هذه القواعد تحميك في أي دولة:",
    scamSrc: "مصادر التحذير:",
    early: "قدّم على السكن في يوم وصول القبول نفسه. الأماكن الرخيصة تنفد قبل أي شيء آخر.",
    planner: "أضف موعد السكن إلى خطتك",
    reviewed: "آخر مراجعة: 15 نوفمبر 2026. الأسعار والمواعيد تتغير كل سنة، فتأكد من الموقع الرسمي قبل أن تدفع.",
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
