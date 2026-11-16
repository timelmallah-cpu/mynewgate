// Fully funded scholarships (tuition covered or waived + a monthly living allowance)
// for Arab nationals, for bachelor's and master's study in the 11 countries we cover.
// Rules: official sources first; anything not published is written as such; anything
// taken only from secondary sources or from the previous cycle is marked "to verify".

export const SCHOLARSHIPS_REVIEWED = "2026-11-15";

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
    hosts: ["de", "nl", "es", "be", "ee", "pl", "hu", "ro", "lv", "lt", "it", "fi", "bg", "se", "cz", "at", "fr", "pt"],
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
      { date: "2027-01-15", kind: "varies", label: { ar: "معظم البرامج: من أكتوبر 2026 إلى يناير 2027 (لدفعة سبتمبر 2027)", en: "Most programmes: October 2026 to January 2027 (for the September 2027 intake)" } },
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
      { date: "2027-01-15", kind: "expected", label: { ar: "حوالي 15 يناير 2027 (كان 15 يناير 2026 الساعة 14:00 بتوقيت وسط أوروبا في الدورة الماضية). يُتوقع فتح التقديم منتصف نوفمبر 2026.", en: "Around 15 January 2027 (last cycle: 15 January 2026, 14:00 CET). The call is expected to open in mid-November 2026." } },
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
      { date: "2027-03-31", kind: "expected", label: { ar: "حوالي 31 مارس 2027 (فترة الدورة الماضية: 16 فبراير إلى 31 مارس 2026). النتائج عادة في منتصف يوليو.", en: "Around 31 March 2027 (last cycle: 16 February to 31 March 2026). Results usually mid-July." } },
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
      { date: "2027-05-08", kind: "expected", label: { ar: "حوالي مايو 2027 (موعد دعوة 2026 كان 8 مايو 2026 الساعة 15:00، والنتائج حتى 31 يوليو).", en: "Around May 2027 (the 2026 call closed on 8 May 2026 at 15:00, results by 31 July)." } },
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
      { date: "2027-01-15", kind: "official", label: { ar: "التقديم على الماجستير حتى 15 يناير 2027", en: "Master's application by 15 January 2027" } },
      { date: "2027-02-24", kind: "official", label: { ar: "طلب المنحة من 8 إلى 24 فبراير 2027، والنتائج 22 أبريل 2027", en: "Scholarship application 8–24 February 2027; results 22 April 2027" } },
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
      { date: "2027-07-15", kind: "expected", label: { ar: "حوالي يوليو 2027 (دعوة 2026-2027 كانت مفتوحة من 2 إلى 15 يوليو 2026).", en: "Around July 2027 (the 2026-2027 call was open from 2 to 15 July 2026)." } },
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
      { date: "2027-04-19", kind: "expected", label: { ar: "حوالي أبريل 2027 (آخر موعد في دورة 2026 كان 19 أبريل 2026).", en: "Around April 2027 (the 2026 cycle closed on 19 April 2026)." } },
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
      { date: "2027-08-31", kind: "varies", label: { ar: "حسب البرنامج: من يونيو إلى أكتوبر تقريباً، قبل سنة من بدء الدراسة. مواعيد دورة 2027/2028 كانت يونيو إلى أكتوبر 2026.", en: "Per course: roughly June to October, a year before the start. Deadlines for 2027/28 were June to October 2026." } },
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
      { date: "2027-07-31", kind: "expected", label: { ar: "حوالي نهاية يوليو 2027 (كان 31 يوليو 2026 في الدورة الماضية).", en: "Around the end of July 2027 (last cycle: 31 July 2026)." } },
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
      { date: "2026-12-01", kind: "official", label: { ar: "1 ديسمبر 2026 الساعة 23:59 بتوقيت وسط أوروبا: آخر موعد لإكمال طلب الماجستير ومعه نموذج المنحة وخطاب توصية وشهادة الإنجليزية، للدراسة في سبتمبر 2027. تصل النتيجة بالبريد الإلكتروني قبل نهاية مارس 2027.", en: "1 December 2026, 23:59 CET: complete your MSc application with the scholarship form, a reference letter and your English test, for September 2027. Winners are emailed by the end of March 2027." } },
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
      { date: "2026-12-10", kind: "official", label: { ar: "10 ديسمبر 2026: إكمال طلب القبول في البرنامج (صفحة أخرى للجامعة تذكر 8 ديسمبر، اعتمد الأبكر).", en: "10 December 2026: complete programme application (another university page says 8 December; go by the earlier date)." } },
      { date: "2027-02-01", kind: "official", label: { ar: "1 فبراير 2027 الساعة 23:59 بتوقيت وسط أوروبا: طلب المنحة.", en: "1 February 2027, 23:59 CET: scholarship application." } },
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
      { date: "2026-12-01", kind: "official", label: { ar: "قبل 1 ديسمبر 2026: إكمال طلب الماجستير على Studielink وبوابة الجامعة ليُنظر في ترشيحك (لا يوجد طلب منحة منفصل). ويجب أن تحصل على قبول مبدئي قبل 1 فبراير 2027.", en: "Before 1 December 2026: complete your master's application in Studielink and the university portal to be considered (there is no separate scholarship form). You also need a provisional admission offer before 1 February 2027." } },
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
    levels: ["master"],
    eligible: ["ma", "ps"],
    check: [],
    eligibilityNote: { ar: "من الدول العربية: المغرب وفلسطين فقط (ضمن 29 دولة مؤهلة).", en: "Arab states: Morocco and Palestine only (out of 29 eligible countries)." },
    summary: { ar: "الرسوم + السفر + التأمين + المعيشة.", en: "Tuition + travel + insurance + living costs." },
    covers: {
      ar: ["الرسوم الدراسية.", "السفر.", "التأمين.", "مبلغ للمعيشة (القيمة: غير منشور في المصدر الذي اطلعنا عليه)."],
      en: ["Tuition.", "Travel.", "Insurance.", "A living allowance (amount: not published in the source we read)."],
    },
    conditions: { ar: ["فقط لبرامج ICP المحددة في جامعات فلاندرز، وليست لكل الماجستيرات."], en: ["Only for the selected ICP programmes at Flemish universities, not any master's."] },
    deadlines: [
      { date: "2027-02-01", kind: "expected", label: { ar: "دعوة 2027-2028 متوقعة منتصف نوفمبر 2026. الموعد النهائي: غير منشور في المصدر بعد.", en: "The 2027-2028 call is expected mid-November 2026. Deadline: not yet published." } },
    ],
    language: { ar: "الإنجليزية", en: "English" },
    howToApply: { ar: "عبر الجامعة البلجيكية التي تدير برنامج ICP، حسب تعليمات VLIR-UOS.", en: "Through the Belgian university running the ICP programme, as VLIR-UOS instructs." },
    url: "https://www.vliruos.be",
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
      { date: "2027-05-11", kind: "expected", label: { ar: "حوالي أبريل ومايو 2027 (دعوة 2026-2027 كانت من 20 أبريل إلى 11 مايو 2026 الساعة 18:00 بتوقيت إيطاليا).", en: "Around April-May 2027 (the 2026-2027 call ran from 20 April to 11 May 2026, 18:00 Italian time)." } },
    ],
    language: { ar: "الإنجليزية (B2)", en: "English (B2)" },
    howToApply: {
      ar: "قدّم أونلاين على بوابة Invest Your Talent in Italy خلال فترة الدعوة، بعد ما تقدّم طلب القبول المبدئي في البرنامج.",
      en: "Apply online on the Invest Your Talent in Italy portal during the call, after applying for pre-admission to the course.",
    },
    url: "https://investyourtalent.esteri.it/SitoIYT/EN/current-call",
    links: null,
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
