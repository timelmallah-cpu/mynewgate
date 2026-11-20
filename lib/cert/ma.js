// The Moroccan Baccalauréat (البكالوريا المغربية), per destination. Reviewed 16 November 2026.
export const CERT_MA_SAME = ["pt", "hr", "sk", "cy", "mt", "be", "ee", "hu", "ro", "lv", "lt", "at"];

export const CERT_MA = {
  gb: {
    kind: "extra",
    ar: "لا توجد قاعدة بريطانية واحدة؛ كل جامعة تقرر. جامعة إدنبرة مثلاً تقول إن حامل البكالوريا المغربية لا يُقبل عادةً مباشرة في البكالوريوس، وعليه أن يدرس برنامجاً تأسيسياً أولاً.",
    en: "There is no single UK rule; each university decides. The University of Edinburgh, for example, says holders of the Moroccan Baccalauréat are not normally considered for direct entry to bachelor's programmes and would be expected to take a foundation programme first.",
    src: "https://edwebprofiles.ed.ac.uk/node/137987",
  },
  de: {
    kind: "extra",
    ar: "البكالوريا المغربية لا تُعادل شهادة Abitur الألمانية، فتحتاج سنة تحضيرية (Studienkolleg) وامتحان FSP قبل الجامعة، حسب جامعة FH Aachen التي تقدم برنامجاً تحضيرياً في المغرب.",
    en: "The Moroccan Baccalauréat is not equivalent to the German Abitur, so you need a Studienkolleg and the FSP exam before university, according to FH Aachen, which runs a preparatory programme in Morocco.",
    src: "https://www.fh-aachen.de/en/freshman/freshman-program-in-morocco",
  },
  nl: {
    kind: "uni",
    ar: "Nuffic تعادل البكالوريا المغربية (Attestation du Baccalauréat) بمستوى «HAVO على الأقل»، أي بين HAVO وVWO. تكفي غالباً لجامعات العلوم التطبيقية، أما الجامعات البحثية فتقرر حسب المسار والمواد والدرجات. البكالوريا التقنية والمهنية تعادل HAVO بمواد مهنية.",
    en: "Nuffic compares the Moroccan Attestation du Baccalauréat to \"at least a HAVO diploma\", between HAVO and VWO. It usually works for universities of applied sciences; research universities decide by track, subjects and grades. The technological and vocational Bac compares to HAVO with vocational subjects.",
    src: "https://nuffic.nl/en/education-systems/morocco/level-of-diplomas",
  },
  it: {
    kind: "direct",
    ar: "إيطاليا تشترط 12 سنة دراسة مدرسية، والبكالوريا المغربية تأتي بعد 12 سنة، فتكفي من ناحية عدد السنوات. تحتاج ترجمة معتمدة وتصديقاً بالأبوستيل، مع إقرار القيمة أو بيان CIMEA، وتنجح في اختبار القبول إن كان البرنامج يطلبه.",
    en: "Italy requires 12 years of schooling, and the Moroccan Bac comes after 12 years, so it meets the years requirement. You need a certified translation and apostille, plus a declaration of value or CIMEA statement, and to pass any entrance test the programme sets.",
    src: "https://conscasablanca.esteri.it/wp-content/uploads/2026/06/Studi-universitari-2026_2027-italiano-1.pdf",
  },
  fr: {
    kind: "extra",
    ar: "للسنة الأولى من البكالوريوس (Licence 1) في جامعة حكومية تقدّم طلب قبول مسبق (DAP) عبر Campus France المغرب على منصة Études en France، والحملة تفتح عادةً في أكتوبر. يُنصح بمستوى فرنسي B2. البرامج بالإنجليزية قليلة، ولكل مدرسة طريقتها.",
    en: "For the first year of a bachelor's (Licence 1) at a public university you file a prior admission request (DAP) through Campus France Morocco on Études en France; the campaign usually opens in October. French at B2 is recommended. English-taught bachelor's programmes are few and each school has its own route.",
    src: "https://www.maroc.campusfrance.org/system/files/medias/documents/2025-12/D%C3%A9pliant%20EEF%20V3.pdf",
  },
  es: {
    kind: "recog",
    ar: "تحتاج معادلة البكالوريا المغربية بالبكالوريا الإسبانية (homologación). يُقدَّم الطلب في مكاتب القنصليات أو مكتب المستشارية التعليمية الإسبانية في المغرب مع نسخة مصدقة من الشهادة وكشف الدرجات وإيصال الرسوم، ثم اعتماد UNEDasiss لحساب درجتك. ولـUNED مراكز في طنجة والرباط والدار البيضاء.",
    en: "You need the Moroccan Bac recognised as the Spanish Bachillerato (homologación). You file at the consulates or the Spanish Education Office in Morocco with a certified copy of the certificate, transcript and fee receipt, then get UNEDasiss accreditation for your grade. UNED has centres in Tangier, Rabat and Casablanca.",
    src: "https://libreria.educacion.gob.es/ebook/176834/free_download",
  },
  cz: {
    kind: "recog",
    ar: "قبل التسجيل في البكالوريوس يجب معادلة الشهادة (nostrification) من السلطة الإقليمية في التشيك، وقد تطلب امتحاناً في بعض المواد. تقيّم بعض الجامعات الشهادة بنفسها لغرض القبول لديها فقط. نفس الإجراء لكل الشهادات من خارج الاتحاد الأوروبي.",
    en: "Before enrolling in a bachelor's you need nostrification by a Czech regional authority, which may set an exam in a few subjects. Some universities assess certificates themselves, valid only for admission there. The same procedure applies to every non-EU certificate.",
  },
  pl: {
    kind: "recog",
    ar: "شهادة الثانوية من خارج الاتحاد الأوروبي تحتاج اعترافاً: بيان من NAWA أو معادلة من مكتب التعليم الإقليمي، مع أبوستيل على الشهادة المغربية. والقبول بعدها للجامعة.",
    en: "A non-EU school certificate needs recognition: a NAWA statement or nostrification by the regional education office, with an apostille on the Moroccan certificate. Admission then rests with the university.",
  },
  fi: {
    kind: "direct",
    ar: "في فنلندا تكفي شهادة أجنبية تؤهلك لدخول الجامعة في البلد الذي صدرت منه، والبكالوريا المغربية تؤهل للجامعات المغربية. بعدها الاختيار حسب معايير كل برنامج.",
    en: "In Finland a foreign certificate that gives access to higher education in the issuing country is enough, and the Moroccan Bac gives access to Moroccan universities. Selection then follows each programme's criteria.",
  },
  se: {
    kind: "uni",
    ar: "في السويد الشهادة التي تؤهلك لدخول الجامعة في بلدك تكفي غالباً للشرط العام، والتقديم وتقييم الأوراق عبر universityadmissions.se. اقرأ تعليمات المغرب تحديداً في صفحة تعليمات الدول.",
    en: "In Sweden a certificate giving university access in your country usually meets the general requirement; you apply and documents are assessed through universityadmissions.se. Read the Morocco instructions on the country-instructions page.",
    check: true,
  },
  bg: {
    kind: "recog",
    ar: "تقدّم للجامعة البلغارية، والجامعة ترسل ملفك لوزارة التعليم التي تصدر الشهادة المطلوبة لتأشيرة D. الأوراق يجب أن تكون مصدقة، والمغرب عضو في اتفاقية الأبوستيل فيكفي غالباً ختم الأبوستيل (للتحقق مع الجامعة).",
    en: "You apply to the Bulgarian university, which sends your file to the Ministry of Education for the certificate needed for the D visa. Documents must be certified; Morocco is in the Apostille Convention, so an apostille is usually enough (check with the university).",
    check: true,
  },
};
