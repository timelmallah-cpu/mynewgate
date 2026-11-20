// The Jordanian Tawjihi (التوجيهي / General Secondary Education Certificate), per destination. Reviewed 19 November 2026.
export const CERT_JO_SAME = ["pt", "hr", "sk", "cy", "mt", "be", "ee", "hu", "ro", "lv", "lt", "at"];

export const CERT_JO = {
  gb: {
    kind: "extra",
    ar: "لا توجد قاعدة بريطانية واحدة؛ كل جامعة تقرر. جامعة لافبرة مثلاً تقول إن حامل التوجيهي الأردني يحتاج سنة تأسيسية مناسبة قبل البكالوريوس.",
    en: "There is no single UK rule; each university decides. Loughborough University, for example, says holders of the Jordanian Tawjihi need a suitable Foundation Year before a bachelor's.",
    src: "https://lboro.ac.uk/international/country/jordan/applicationinformation/entryrequirements/undergraduate/",
  },
  de: {
    kind: "extra",
    ar: "النتيجة في ألمانيا تعتمد على التوجيهي ودرجاته، فافحصها في أداة «Check Hochschulzugang» من uni-assist وDAAD. إذا لم يمنحك التوجيهي وحده وصولاً مباشراً فتحتاج سنة تحضيرية (Studienkolleg) وامتحان FSP، أو سنوات دراسة جامعية في الأردن في نفس المجال. والقرار النهائي للجامعة.",
    en: "In Germany the outcome depends on your Tawjihi and its grades, so check it in the uni-assist/DAAD \"Check Hochschulzugang\" tool. If the Tawjihi alone does not give direct access, you need a Studienkolleg and the FSP exam, or university years in Jordan in the same field. The university decides.",
    src: "https://www.uni-assist.de/tools/check-hochschulzugang",
    check: true,
  },
  nl: {
    kind: "uni",
    ar: "Nuffic تعادل شهادة الدراسة الثانوية العامة الأردنية بشهادة HAVO. تكفي غالباً لجامعات العلوم التطبيقية (HBO)، أما الجامعات البحثية فقد تطلب دراسة إضافية. والفرع المهني يعادل MBO من المستوى 2 أو 3.",
    en: "Nuffic compares the Jordanian General Secondary Education Certificate to a HAVO diploma. It usually works for universities of applied sciences (HBO); research universities may ask for extra study. The vocational stream compares to MBO level 2 or 3.",
    src: "https://nuffic.nl/en/education-systems/jordan",
  },
  it: {
    kind: "direct",
    ar: "إيطاليا تشترط 12 سنة دراسة مدرسية، والتوجيهي يأتي بعد 12 سنة (10 سنوات أساسية وسنتان ثانوية). تحتاج ترجمة معتمدة وتصديقاً، مع إقرار القيمة أو بيان CIMEA حسب طلب الجامعة، وتنجح في اختبار القبول إن كان البرنامج يطلبه.",
    en: "Italy requires 12 years of schooling, and the Tawjihi comes after 12 years (10 basic plus 2 secondary). You need a certified translation and legalisation, plus a declaration of value or CIMEA statement as the university asks, and to pass any entrance test the programme sets.",
    src: "https://www.universitaly.it/",
    check: true,
  },
  fr: {
    kind: "extra",
    ar: "للسنة الأولى من البكالوريوس في جامعة حكومية فرنسية يمر الطلب عبر إجراء Études en France مع Campus France في عمّان، ولكل مدرسة طريقتها. أغلب برامج البكالوريوس بالفرنسية، والبرامج بالإنجليزية قليلة.",
    en: "For the first year of a bachelor's at a French public university, applications go through Études en France with Campus France in Amman, and each school has its own route. Most bachelor's programmes are in French; English-taught ones are few.",
    src: "https://france-visas.gouv.fr/jordanie",
    check: true,
  },
  es: {
    kind: "recog",
    ar: "شهادة الثانوية من خارج الاتحاد الأوروبي تحتاج معادلة بالبكالوريا الإسبانية (homologación) من وزارة التعليم الإسبانية، ثم اعتماد UNEDasiss لحساب درجتك إن طلبته الجامعة.",
    en: "A non-EU school certificate needs homologación to the Spanish Bachillerato from the Spanish Ministry of Education, then UNEDasiss accreditation for your grade if the university asks for it.",
    check: true,
  },
  cz: {
    kind: "recog",
    ar: "قبل التسجيل في البكالوريوس يجب معادلة الشهادة (nostrification) من السلطة الإقليمية في التشيك، وقد تطلب امتحاناً في بعض المواد. تقيّم بعض الجامعات الشهادة بنفسها لغرض القبول لديها فقط. نفس الإجراء لكل الشهادات من خارج الاتحاد الأوروبي.",
    en: "Before enrolling in a bachelor's you need nostrification by a Czech regional authority, which may set an exam in a few subjects. Some universities assess certificates themselves, valid only for admission there. The same procedure applies to every non-EU certificate.",
  },
  pl: {
    kind: "recog",
    ar: "شهادة الثانوية من خارج الاتحاد الأوروبي تحتاج اعترافاً: بيان من NAWA أو معادلة من مكتب التعليم الإقليمي. والسفارة البولندية في عمّان تحيل حملة الشهادة الأردنية إلى متطلبات NAWA الخاصة بالأردن.",
    en: "A non-EU school certificate needs recognition: a NAWA statement or nostrification by the regional education office. The Polish Embassy in Amman points holders of Jordanian certificates to NAWA's Jordan-specific requirements.",
    src: "https://www.gov.pl/web/jordan/students--important-changes-regarding-supporting-documents--national-visa-type-d",
  },
  fi: {
    kind: "direct",
    ar: "في فنلندا تكفي شهادة أجنبية تؤهلك لدخول الجامعة في البلد الذي صدرت منه، والتوجيهي يؤهل للجامعات الأردنية. بعدها الاختيار حسب معايير كل برنامج.",
    en: "In Finland a foreign certificate that gives access to higher education in the issuing country is enough, and the Tawjihi gives access to Jordanian universities. Selection then follows each programme's criteria.",
  },
  se: {
    kind: "uni",
    ar: "في السويد الشهادة التي تؤهلك لدخول الجامعة في بلدك تكفي غالباً للشرط العام، والتقديم وتقييم الأوراق عبر universityadmissions.se. اقرأ تعليمات الأردن تحديداً في صفحة تعليمات الدول.",
    en: "In Sweden a certificate giving university access in your country usually meets the general requirement; you apply and documents are assessed through universityadmissions.se. Read the Jordan instructions on the country-instructions page.",
    check: true,
  },
  bg: {
    kind: "recog",
    ar: "تقدّم للجامعة البلغارية، والجامعة ترسل ملفك لوزارة التعليم التي تصدر الشهادة المطلوبة لتأشيرة D. الأوراق يجب أن تكون مصدقة حسب طلب الجامعة (للتحقق مع الجامعة).",
    en: "You apply to the Bulgarian university, which sends your file to the Ministry of Education for the certificate needed for the D visa. Documents must be legalised as the university asks (check with the university).",
    check: true,
  },
};
