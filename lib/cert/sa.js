// The Saudi General Secondary Certificate (الثانوية العامة / Tawjihiyah), per destination. Reviewed 16 November 2026.
// Only destinations with a published rule for this certificate, or a rule that applies to every foreign certificate.
// Destinations whose published rule is the same for every foreign (or non-EU) certificate: the Saudi entry reuses that rule.
export const CERT_SA_SAME = ["pt", "hr", "sk", "cy", "mt", "be", "ee", "hu", "ro", "lv", "lt", "at"];

export const CERT_SA = {
  de: {
    kind: "extra",
    ar: "السفارة الألمانية في الرياض تقول إن حامل شهادة الثانوية السعودية «العادية» يحتاج سنة تحضيرية (Studienkolleg) في ألمانيا قبل الجامعة. ومعهد غوته في الرياض يقدم «Studienkolleg Middle East» لمدة سنة للتخصصات العلمية والهندسية، ويمنح أهلية الدخول المباشر للجامعات الألمانية.",
    en: "The German Embassy in Riyadh says holders of a \"regular\" Saudi secondary certificate must attend a Studienkolleg in Germany before university. The Goethe-Institut Riyadh runs the one-year \"Studienkolleg Middle East\" for science and engineering subjects, leading to direct access to German universities.",
    src: "https://saudiarabien.diplo.de/ksa-en/deutschland-und-saudi-arabien/1686436-1686436",
  },
  nl: {
    kind: "extra",
    ar: "Nuffic تعادل شهادة إتمام الثانوية السعودية بشهادة HAVO. وHAVO تؤهل عادةً لجامعات العلوم التطبيقية (HBO)، أما الجامعات البحثية (WO) فتطلب عادةً مستوى أعلى (VWO)، فقد تحتاج سنة تأسيسية أو سنة جامعية أولاً.",
    en: "Nuffic compares the Saudi secondary school graduation certificate to a HAVO diploma. HAVO usually gives access to universities of applied sciences (HBO); research universities (WO) usually ask for a higher level (VWO), so you may need a foundation year or a year of university first.",
    src: "https://www.nuffic.nl/en/taxonomy/term/129",
  },
  it: {
    kind: "direct",
    ar: "إيطاليا تشترط 12 سنة دراسة مدرسية، والتعليم العام في السعودية 12 سنة (6 ابتدائي + 3 متوسط + 3 ثانوي)، فالثانوية العامة تكفي من ناحية عدد السنوات. تحتاج ترجمة الشهادة وإقرار القيمة أو بيان CIMEA، وتنجح في اختبار القبول إن كان البرنامج يطلبه.",
    en: "Italy requires 12 years of schooling, and general education in Saudi Arabia lasts 12 years (6 primary + 3 intermediate + 3 secondary), so the certificate meets the years requirement. You need it translated with a Declaration of Value or a CIMEA statement, and to pass any entrance test the programme sets.",
  },
  fr: {
    kind: "extra",
    ar: "للسنة الأولى من البكالوريوس (Licence 1) في جامعة حكومية تقدّم طلب قبول مسبق (DAP) عن طريق Campus France السعودية على منصة Études en France، ويُطلب مستوى فرنسي B1 أو B2. البرامج بالإنجليزية قليلة، ولكل مدرسة طريقتها.",
    en: "For the first year of a bachelor's (Licence 1) at a public university you file a prior admission request (DAP) through Campus France Saudi Arabia on Études en France, with French at B1 or B2. English-taught bachelor's programmes are few and each school has its own route.",
    src: "https://www.arabiesaoudite.campusfrance.org/en/node/65",
  },
  es: {
    kind: "recog",
    ar: "تحتاج معادلة الثانوية بالبكالوريا الإسبانية (homologación) من وزارة التعليم، ثم اعتماد UNEDasiss لحساب درجتك. يمكن التسجيل مؤقتاً بإيصال طلب المعادلة. نفس الخطوات لكل الشهادات من خارج الاتحاد الأوروبي.",
    en: "You need your certificate recognised as the Spanish Bachillerato (homologación) by the Ministry of Education, then UNEDasiss accreditation to calculate your grade. You can enrol provisionally with the homologación receipt. The same steps apply to every non-EU certificate.",
  },
  cz: {
    kind: "recog",
    ar: "قبل التسجيل في البكالوريوس يجب معادلة الثانوية (nostrification) من السلطة الإقليمية في التشيك، وقد تطلب منك امتحاناً في بعض المواد. تقيّم بعض الجامعات الشهادة بنفسها لغرض القبول لديها فقط. نفس الإجراء لكل الشهادات من خارج الاتحاد الأوروبي.",
    en: "Before enrolling in a bachelor's you need recognition (nostrification) of your school certificate by a Czech regional authority, which may set an exam in a few subjects. Some universities assess certificates themselves, valid only for admission there. The same procedure applies to every non-EU certificate.",
  },
  pl: {
    kind: "recog",
    ar: "شهادة الثانوية من خارج الاتحاد الأوروبي تحتاج اعترافاً: بيان من NAWA أو معادلة (nostrification) من مكتب التعليم الإقليمي، مع أبوستيل على الشهادة السعودية. والقبول بعدها للجامعة.",
    en: "A non-EU school certificate needs recognition: a NAWA statement or nostrification by the regional education office, with an apostille on the Saudi certificate. Admission then rests with the university.",
  },
  fi: {
    kind: "direct",
    ar: "في فنلندا تكفي شهادة أجنبية تؤهلك لدخول الجامعة في البلد الذي صدرت منه، والثانوية العامة السعودية تؤهل للجامعات السعودية. بعدها الاختيار حسب معايير كل برنامج (درجات، أو SAT، أو اختبار قبول).",
    en: "In Finland a foreign certificate that gives access to higher education in the country that issued it is enough, and the Saudi certificate gives access to Saudi universities. Selection then follows each programme's criteria (grades, SAT or an entrance exam).",
  },
  se: {
    kind: "uni",
    ar: "في السويد القاعدة العامة أن الشهادة التي تؤهلك لدخول الجامعة في بلدك تكفي غالباً للشرط العام، والتقديم وتقييم الأوراق عبر universityadmissions.se. اقرأ تعليمات السعودية تحديداً في صفحة تعليمات الدول.",
    en: "In Sweden the general rule is that a certificate giving university access in your country usually meets the general entry requirement; you apply and the documents are assessed through universityadmissions.se. Read the Saudi Arabia instructions on the country-instructions page.",
    check: true,
  },
  bg: {
    kind: "recog",
    ar: "تقدّم للجامعة البلغارية، والجامعة ترسل ملفك لوزارة التعليم التي تصدر الشهادة المطلوبة لتأشيرة D. الأوراق يجب أن تكون مصدقة، والسعودية عضو في اتفاقية الأبوستيل فيكفي غالباً ختم الأبوستيل (للتحقق مع الجامعة).",
    en: "You apply to the Bulgarian university, which sends your file to the Ministry of Education for the certificate needed for the D visa. Documents must be certified; Saudi Arabia is in the Apostille Convention, so an apostille is usually enough (check with the university).",
    check: true,
  },
};
