// The Algerian Baccalauréat (شهادة بكالوريا التعليم الثانوي), per destination. Reviewed 19 November 2026.
export const CERT_DZ_SAME = ["pt", "hr", "sk", "cy", "mt", "be", "ee", "hu", "ro", "lv", "lt", "at"];

export const CERT_DZ = {
  de: {
    kind: "extra",
    ar: "حسب uni-assist، البكالوريا الجزائرية وحدها لا تمنح حق الدراسة المباشرة في ألمانيا، بل تؤهلك للسنة التحضيرية (Studienkolleg) وامتحان FSP. ومع الطلب يُرفق كشف النقاط الرسمي (Relevé de Notes).",
    en: "According to uni-assist, the Algerian Baccalauréat alone does not give direct access to study in Germany; it qualifies you for a Studienkolleg and the FSP exam. Include the official transcript (Relevé de Notes) with your application.",
    src: "https://www.uni-assist.de/tools/laenderhinweise/laenderdetails/country/dz/",
  },
  nl: {
    kind: "uni",
    ar: "Nuffic تعادل البكالوريا الجزائرية بمستوى «HAVO على الأقل»، أي بين HAVO وVWO. تكفي غالباً لجامعات العلوم التطبيقية، أما الجامعات البحثية فتقرر حسب الشعبة والمواد والنقاط.",
    en: "Nuffic compares the Algerian Baccalauréat to \"at least a HAVO diploma\", between HAVO and VWO. It usually works for universities of applied sciences; research universities decide by stream, subjects and marks.",
    src: "https://nuffic.nl/en/education-systems/algeria/level-of-diplomas",
  },
  it: {
    kind: "direct",
    ar: "إيطاليا تشترط 12 سنة دراسة مدرسية، والبكالوريا الجزائرية تأتي بعد 12 سنة (5 ابتدائي و4 متوسط و3 ثانوي). تحتاج ترجمة معتمدة وتصديقاً، مع إقرار القيمة أو بيان CIMEA، وتنجح في اختبار القبول إن كان البرنامج يطلبه.",
    en: "Italy requires 12 years of schooling, and the Algerian Bac comes after 12 years (5 primary, 4 middle, 3 secondary). You need a certified translation and legalisation, plus a declaration of value or CIMEA statement, and to pass any entrance test the programme sets.",
    src: "https://nuffic.nl/en/education-systems/algeria/primary-and-secondary-education",
    check: true,
  },
  fr: {
    kind: "extra",
    ar: "للسنة الأولى من البكالوريوس (Licence 1) في جامعة حكومية تقدّم طلب قبول مسبق (DAP) عبر Campus France الجزائر على منصة Études en France في مواعيد الحملة، ورسوم الملف تُدفع أونلاين (للتحقق من المواعيد والرسوم على موقع Campus France الجزائر). أغلب البرامج بالفرنسية.",
    en: "For the first year of a bachelor's (Licence 1) at a public university you file a prior admission request (DAP) through Campus France Algeria on Études en France within the campaign dates, with the file fee paid online (check dates and fees on Campus France Algeria). Most programmes are in French.",
    src: "https://france-visas.gouv.fr/algerie",
    check: true,
  },
  es: {
    kind: "recog",
    ar: "شهادة الثانوية من خارج الاتحاد الأوروبي تحتاج معادلة بالبكالوريا الإسبانية (homologación) من وزارة التعليم الإسبانية، ثم اعتماد UNEDasiss لحساب درجتك إن طلبته الجامعة. الوثائق الجزائرية تحتاج الأبوستيل (الجزائر عضو في الاتفاقية منذ 9 يوليو 2026) وترجمة.",
    en: "A non-EU school certificate needs homologación to the Spanish Bachillerato from the Spanish Ministry of Education, then UNEDasiss accreditation for your grade if the university asks. Algerian documents need the apostille (Algeria joined the Convention on 9 July 2026) and a translation.",
    check: true,
  },
  cz: {
    kind: "recog",
    ar: "قبل التسجيل في البكالوريوس يجب معادلة الشهادة (nostrification) من السلطة الإقليمية في التشيك، وقد تطلب امتحاناً في بعض المواد. تقيّم بعض الجامعات الشهادة بنفسها لغرض القبول لديها فقط. نفس الإجراء لكل الشهادات من خارج الاتحاد الأوروبي.",
    en: "Before enrolling in a bachelor's you need nostrification by a Czech regional authority, which may set an exam in a few subjects. Some universities assess certificates themselves, valid only for admission there. The same procedure applies to every non-EU certificate.",
  },
  pl: {
    kind: "recog",
    ar: "شهادة الثانوية من خارج الاتحاد الأوروبي تحتاج اعترافاً: بيان من NAWA أو معادلة من مكتب التعليم الإقليمي. والقبول بعدها للجامعة.",
    en: "A non-EU school certificate needs recognition: a NAWA statement or nostrification by the regional education office. Admission then rests with the university.",
  },
  fi: {
    kind: "direct",
    ar: "في فنلندا تكفي شهادة أجنبية تؤهلك لدخول الجامعة في البلد الذي صدرت منه، والبكالوريا الجزائرية تؤهل للجامعات الجزائرية. بعدها الاختيار حسب معايير كل برنامج.",
    en: "In Finland a foreign certificate that gives access to higher education in the issuing country is enough, and the Algerian Bac gives access to Algerian universities. Selection then follows each programme's criteria.",
  },
  se: {
    kind: "uni",
    ar: "في السويد الشهادة التي تؤهلك لدخول الجامعة في بلدك تكفي غالباً للشرط العام، والتقديم وتقييم الأوراق عبر universityadmissions.se. اقرأ تعليمات الجزائر تحديداً في صفحة تعليمات الدول.",
    en: "In Sweden a certificate giving university access in your country usually meets the general requirement; you apply and documents are assessed through universityadmissions.se. Read the Algeria instructions on the country-instructions page.",
    check: true,
  },
  bg: {
    kind: "recog",
    ar: "تقدّم للجامعة البلغارية، والجامعة ترسل ملفك لوزارة التعليم التي تصدر الشهادة المطلوبة لتأشيرة D. الأوراق يجب أن تكون مصدقة حسب طلب الجامعة (للتحقق مع الجامعة).",
    en: "You apply to the Bulgarian university, which sends your file to the Ministry of Education for the certificate needed for the D visa. Documents must be legalised as the university asks (check with the university).",
    check: true,
  },
};
