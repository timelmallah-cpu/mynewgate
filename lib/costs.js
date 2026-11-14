// Country cost facts for the cost calculator. EUR. null = not published in a source we checked.
// check: true = taken from a non-official page or not confirmed on the official site (shown as "للتحقق").
// Reviewed 2026-11-14.

export const COSTS = {
  de: {
    proofMonthly: 992,
    proof: { ar: "حساب بنكي مغلق (Sperrkonto) بمبلغ 11,904 يورو للسنة، أي 992 يورو شهرياً", en: "Blocked account (Sperrkonto) of €11,904 a year, i.e. €992 a month" },
    proofSrc: "https://www.auswaertiges-amt.de/en/sperrkonto/388600",
    fees: [{ ar: "رسوم التأشيرة الوطنية (D)", en: "National (D) visa fee", eur: 75, check: true, src: "https://www.auswaertiges-amt.de/en/sperrkonto/388600" }],
    insurance: { eur: 140, check: true, ar: "تقدير تقريبي للتأمين الصحي الحكومي للطلاب، يختلف حسب الشركة والعمر", en: "Rough estimate for public student health insurance; varies by insurer and age" },
  },
  nl: {
    proofMonthly: 1131,
    proof: { ar: "إثبات 1,130.77 يورو شهرياً لمدة 12 شهراً (معيار IND للطلاب لعام 2026، بدون الرسوم الدراسية)", en: "Proof of €1,130.77 a month for 12 months (IND study norm 2026, tuition not included)" },
    proofSrc: "https://ind.nl/en/news/fees-and-required-amounts-for-2026-known",
    fees: [{ ar: "رسوم طلب الإقامة لدى IND (2026)", en: "IND residence permit fee (2026)", eur: 254, check: false, src: "https://ind.nl/en/news/fees-and-required-amounts-for-2026-known" }],
    insurance: null,
  },
  es: {
    proofMonthly: 600,
    proof: { ar: "إثبات 100% من مؤشر IPREM، أي 600 يورو عن كل شهر إقامة (بدون الرسوم الدراسية)", en: "Proof of 100% of IPREM, i.e. €600 for each month of stay (tuition not included)" },
    proofSrc: "https://www.exteriores.gob.es/",
    proofCheck: true,
    fees: [{ ar: "رسوم تأشيرة الدراسة", en: "Student visa fee", eur: null, check: true }],
    insurance: null,
  },
  be: {
    proofMonthly: 1062,
    proof: { ar: "إثبات 1,062 يورو صافية شهرياً للعام الدراسي 2026-2027، أي 12,744 يورو للسنة", en: "Proof of €1,062 net a month for 2026-2027, i.e. €12,744 a year" },
    proofSrc: "https://www.uantwerpen.be/en/life-in-antwerp/visa-and-permits/students/non-eea-nationals/sufficient-means-of-subsistence/",
    fees: [{ ar: "رسوم التأشيرة D والإقامة", en: "D visa and residence fees", eur: null, check: true }],
    insurance: null,
  },
  ee: {
    proofMonthly: null,
    proof: { ar: "المبلغ الشهري المطلوب غير منشور في المصدر الذي راجعناه", en: "The required monthly amount is not published in the source we checked" },
    proofSrc: "https://www.politsei.ee/files/2026-01/student-guide.pdf",
    fees: [
      { ar: "رسوم التأشيرة الطويلة (D)", en: "Long-stay (D) visa fee", eur: 120, check: false, src: "https://www.politsei.ee/files/2026-01/student-guide.pdf" },
      { ar: "رسوم تصريح الإقامة المؤقتة للدراسة (للبرامج أطول من سنة)", en: "Temporary residence permit for study (programmes over a year)", eur: null, check: true },
    ],
    insurance: null,
  },
  pl: {
    proofMonthly: 176,
    proof: { ar: "776 زلوتي شهرياً للمعيشة (حوالي 176 يورو) + تكلفة السكن كاملة + 2,500 زلوتي لتذكرة العودة. بعض القنصليات تطلب 1,010 زلوتي شهرياً (للتحقق)", en: "PLN 776 a month for living (about €176) + full housing cost + PLN 2,500 for the return ticket. Some consulates ask for PLN 1,010 a month (to check)" },
    proofSrc: "https://migrant.poznan.uw.gov.pl/en/node/1583",
    proofExtra: 570,
    proofExcludesHousing: true,
    fees: [{ ar: "رسوم التأشيرة الوطنية (D)", en: "National (D) visa fee", eur: null, check: true }],
    insurance: null,
  },
  hu: {
    proofMonthly: null,
    proof: { ar: "يجب إثبات وسائل معيشة كافية، ولا يوجد مبلغ ثابت منشور", en: "Sufficient means must be proven; no fixed amount is published" },
    proofSrc: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-hungary_en",
    fees: [{ ar: "رسوم طلب الإقامة للدراسة في السفارة", en: "Study residence permit fee at the embassy", eur: 110, check: false, src: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-hungary_en" }],
    insurance: null,
  },
  ro: {
    proofMonthly: null,
    proof: { ar: "إثبات مبلغ يساوي الحد الأدنى للأجر الإجمالي في رومانيا عن كل شهر من مدة التأشيرة (الرقم الحالي للتحقق)", en: "Proof equal to Romania's minimum gross wage for each month of the visa (current figure to check)" },
    proofSrc: "https://www.uav.ro/en/internationalisation/international-students/obtaining-a-romania-student-visa",
    fees: [{ ar: "رسوم تأشيرة الدراسة D/SD", en: "D/SD study visa fee", eur: 120, check: false, src: "https://www.uav.ro/en/internationalisation/international-students/obtaining-a-romania-student-visa" }],
    insurance: null,
  },
};
