// Student visa routes for residents of Algeria. Official sources only, reviewed 19 November 2026.
// check: true = part of the route is not confirmed on an official page for Algeria (the text says "للتحقق").
const RES = {
  ar: "إذا لم تكن جزائري الجنسية فأرفق إقامة قانونية سارية في الجزائر.",
  en: "If you are not an Algerian citizen, include a valid legal residence permit for Algeria.",
};

export const VISA_DZ = {
  fr: {
    where: { ar: "Campus France الجزائر (إجراء Études en France إلزامي)، ثم مركز Capago حسب ولاية إقامتك: الجزائر العاصمة أو وهران أو عنابة وقسنطينة. القرار للقنصلية الفرنسية المختصة (الجزائر أو وهران أو عنابة)", en: "Campus France Algeria (Études en France is mandatory), then the Capago centre for your area: Algiers, Oran, or Annaba and Constantine. The competent French consulate (Algiers, Oran or Annaba) decides" },
    steps: {
      ar: ["أنشئ ملفك على منصة Études en France وأكمل إجراء Campus France الجزائر في مواعيد الحملة (للتحقق من الرسوم والمواعيد على موقع Campus France الجزائر).", "بعد رسالة نهاية إجراء Campus France املأ طلب التأشيرة أونلاين على France-Visas.", "احجز موعد إيداع الملف والبصمات في مركز Capago التابع لمنطقتك.", "اترك شهراً على الأقل بين إيداع الملف وموعد سفرك."],
      en: ["Create your file on Études en France and complete the Campus France Algeria procedure within the campaign dates (check fees and dates on Campus France Algeria).", "After the end-of-procedure message from Campus France, fill in the visa application on France-Visas.", "Book the appointment to file and give biometrics at the Capago centre for your area.", "Allow at least one month between filing and your departure date."],
    },
    note: RES,
    src: "https://france-visas.gouv.fr/algerie",
    book: "https://fr-dz.capago.eu/",
    check: true,
  },
  es: {
    where: { ar: "حسب القنصلية الإسبانية التي تتبعها: في دائرة وهران تُقدَّم طلبات تأشيرة الدراسة في مركز BLS بوهران بموعد على موقع BLS. في دائرة الجزائر العاصمة راجع تعليمات القنصلية العامة (للتحقق)", en: "Depending on your Spanish consulate: in the Oran district, study visa applications are filed at the BLS centre in Oran by appointment on the BLS site. In the Algiers district, check the consulate general's instructions (to verify)" },
    steps: {
      ar: ["احجز الموعد على موقع BLS الجزائر (لدائرة وهران).", "جهّز قائمة أوراق تأشيرة الطالب من BLS: الاستمارة الموقّعة، صورة حديثة، خطاب القبول، وإثبات الموارد.", "الوثائق المدنية الجزائرية تُصدَّق في وزارة الخارجية الجزائرية وتُترجم."],
      en: ["Book on the BLS Algeria site (Oran district).", "Prepare the BLS student checklist: signed form, recent photo, admission letter and proof of means.", "Algerian civil documents must be legalised by the Algerian Ministry of Foreign Affairs and translated."],
    },
    note: RES,
    src: "https://www.exteriores.gob.es/Consulados/oran/es/Comunicacion/Noticias/Paginas/Articulos/AVISO-IMPORTANTE-VISADOS-NACIONALES.aspx",
    book: "https://algeria.blsspainvisa.com/",
    check: true,
  },
  it: {
    where: { ar: "السفارة الإيطالية في الجزائر العاصمة، بعد طلب ما قبل التسجيل على بوابة Universitaly (طريقة حجز الموعد للتحقق من موقع السفارة)", en: "The Italian Embassy in Algiers, after the pre-enrolment request on Universitaly (appointment method to check on the embassy site)" },
    steps: {
      ar: ["قدّم طلب ما قبل التسجيل على Universitaly واختر السفارة في الجزائر.", "جهّز قائمة أوراق «الدراسة – القبول الجامعي» من موقع السفارة، ومنها شهادة ما قبل التسجيل المرسلة عبر Universitaly فقط، وإثبات السكن في إيطاليا، ومال كافٍ للعودة (مثل تذكرة عودة)."],
      en: ["Submit the pre-enrolment request on Universitaly and choose the embassy in Algiers.", "Prepare the embassy's \"Study – university admission\" checklist, including the pre-enrolment certificate sent only through Universitaly, proof of accommodation in Italy, and funds for the return trip (such as a return ticket)."],
    },
    src: "https://ambalgeri.esteri.it/wp-content/uploads/2026/06/12.2-Study_University-admission_EN.pdf",
    check: true,
  },
  be: {
    where: { ar: "مركز TLScontact في الجزائر العاصمة، ثم استبيان شخصي في سفارة بلجيكا مباشرة بعد إيداع الملف", en: "The TLScontact centre in Algiers, then an in-person questionnaire at the Belgian Embassy right after filing" },
    steps: {
      ar: ["أكمل قائمة أوراق الدراسة (المادة 58) من TLScontact.", "معادلة الشهادة الجزائرية من المجموعة الفرنسية في بلجيكا (أو إثبات تقديم طلبها)، إلا للسنة التحضيرية وبعض الحالات.", "إثبات التمويل: منحة، أو تعهد تكفل (الملحق 32) يصادق عليه ضامن واحد فقط.", "الوثائق الجزائرية تُصدَّق في وزارة الخارجية الجزائرية ثم في سفارة بلجيكا. صحيفة السوابق لمن تجاوز 21 سنة.", "بعد الإيداع في TLScontact توجّه مباشرة إلى السفارة لملء الاستبيان."],
      en: ["Complete the TLScontact study checklist (Article 58).", "Equivalence of your Algerian diploma from the French Community of Belgium (or proof you applied), except for a preparatory year and some cases.", "Proof of funding: a scholarship, or a commitment form (Annex 32) signed by a single sponsor.", "Algerian documents are legalised by the Algerian MFA, then by the Belgian Embassy. A criminal record extract if you are over 21.", "After filing at TLScontact, go straight to the embassy to fill in the questionnaire."],
    },
    src: "https://static.tlscontact.com/media/dz/alg/be/etudes-art-58-59.pdf",
    book: "https://static.tlscontact.com/media/dz/alg/be/6-ls_study.pdf",
  },
  de: {
    where: { ar: "السفارة الألمانية في الجزائر العاصمة، بطلب على بوابة الخدمات القنصلية (digital.diplo.de) (للتحقق من خطوات الموعد في الجزائر)", en: "The German Embassy in Algiers, with an application on the Consular Services Portal (digital.diplo.de) (appointment steps in Algiers to verify)" },
    steps: {
      ar: ["قدّم طلب تأشيرة الدراسة على digital.diplo.de وارفع الأوراق.", "احضر الموعد بالأوراق الأصلية كاملة."],
      en: ["Apply for the study visa at digital.diplo.de and upload your documents.", "Attend the appointment with all original documents."],
    },
    note: RES,
    src: "https://www.auswaertiges-amt.de/en/visa-service/consular-services-portal",
    book: "https://digital.diplo.de/visa",
    check: true,
  },
};
