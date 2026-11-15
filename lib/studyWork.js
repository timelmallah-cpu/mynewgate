// Working while studying, for non-EU students with a student residence permit, per country.
// hours: the weekly cap during term (null = no fixed weekly cap in the source). check: true = shown as "للتحقق".
// Reviewed 2026-11-15.

export const STUDY_WORK = {
  de: {
    hours: 20,
    ar: "140 يوماً كاملاً أو 280 نصف يوم في السنة بدون موافقة وكالة العمل، أو حتى 20 ساعة أسبوعياً خلال فترة المحاضرات",
    en: "140 full days or 280 half days a year without Federal Employment Agency approval, or up to 20 hours a week during the lecture period",
    src: "https://www.make-it-in-germany.com/en/study-vocational-training/studies-in-germany/work",
  },
  nl: {
    hours: 16,
    ar: "إما 16 ساعة أسبوعياً طوال السنة أو دوام كامل في يونيو ويوليو وأغسطس، وليس الاثنين؛ وصاحب العمل يستخرج لك تصريح عمل (TWV)",
    en: "Either up to 16 hours a week all year or full-time in June, July and August, not both; the employer must get you a work permit (TWV)",
    src: "https://www.eur.nl/en/education/practical-matters/financial-matters/working-netherlands/work-while-you-study/working-non-eueea-student",
    check: true,
  },
  es: {
    hours: 30,
    ar: "حتى 30 ساعة أسبوعياً مع الدراسة حسب لائحة الأجانب الجديدة",
    en: "Up to 30 hours a week alongside studies under the new foreigners regulation",
    src: "https://www.inclusion.gob.es/en/w/el-gobierno-aprueba-un-nuevo-reglamento-de-extranjeria-para-mejorar-la-integracion-de-las-personas-migrantes-a-traves-de-tres-palancas-trabajo-formacion-y-familia",
  },
  be: {
    hours: 20,
    ar: "حتى 20 ساعة أسبوعياً خارج العطلات الرسمية، وبلا حد للساعات في العطلات، بشرط أن يتوافق العمل مع الدراسة",
    en: "Up to 20 hours a week outside official school holidays and no hour limit during them, as long as the work fits your studies",
    src: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-belgium_en",
  },
  ee: {
    hours: null,
    ar: "مسموح بالعمل بدون تصريح عمل وبدون حد ساعات منشور، بشرط ألا يعطل الدراسة بدوام كامل",
    en: "Allowed without a work permit and with no published hour cap, as long as it does not interfere with full-time study",
    src: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-estonia_en",
  },
  pl: {
    hours: null,
    ar: "طلاب الدوام الكامل يعملون بدون تصريح عمل حسب بوابة الهجرة الأوروبية؛ وتعديلات منذ ديسمبر 2025 تربط ذلك بوضع الجامعة حسب مكاتب قانونية (للتحقق)",
    en: "Full-time students may work without a work permit per the EU Immigration Portal; amendments since December 2025 tie this to the university's status, per law firms (to verify)",
    src: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-poland_en",
    check: true,
  },
  hu: {
    hours: 30,
    ar: "حتى 30 ساعة أسبوعياً خلال الدراسة، ودوام كامل خارجها لمدة أقصاها 90 يوماً في السنة",
    en: "Up to 30 hours a week during the study period, and full-time outside it for at most 90 days a year",
    src: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-hungary_en",
  },
  ro: {
    hours: null,
    ar: "عمل جزئي بدون تصريح عمل، بحد أقصى 4 ساعات يومياً",
    en: "Part-time work without a work authorisation, up to 4 hours a day",
    src: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-romania_en",
  },
  lv: {
    hours: 20,
    ar: "حتى 20 ساعة أسبوعياً خلال الدراسة و40 في العطلات؛ وطلاب الماجستير والدكتوراه حتى 40 ساعة أسبوعياً",
    en: "Up to 20 hours a week during studies and 40 in holidays; master's and doctoral students up to 40 hours a week",
    src: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-latvia_en",
  },
  lt: {
    hours: 20,
    ar: "حتى 20 ساعة أسبوعياً ماعدا العطلة الصيفية؛ وطلاب الماجستير والدكتوراه بدون حد الـ 20 ساعة. ومنذ 22 مايو 2026 يُسمح لطلاب البكالوريوس من السنة الثالثة حتى 40 ساعة حسب جامعات ليتوانية (للتحقق)",
    en: "Up to 20 hours a week except the summer holiday; master's and doctoral students without the 20-hour limit. Since 22 May 2026 bachelor's students from year 3 may work up to 40 hours, per Lithuanian universities (to verify)",
    src: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-lithuania_en",
    check: true,
  },
  it: {
    hours: 20,
    ar: "حتى 20 ساعة أسبوعياً وبحد أقصى 1,040 ساعة خلال 52 أسبوعاً",
    en: "Up to 20 hours a week, with a cap of 1,040 hours over 52 weeks",
    src: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-italy_en",
  },
  fi: {
    hours: 30,
    ar: "متوسط 30 ساعة أسبوعياً في أي مجال (1,560 ساعة في السنة)، ويمكن العمل بدوام كامل في العطلات طالما المتوسط السنوي لا يتجاوز ذلك",
    en: "An average of 30 hours a week in any field (1,560 hours a year); full-time in holidays is fine as long as the yearly average stays within it",
    src: "https://migri.fi/en/residence-permit-application-for-studies",
  },
};
