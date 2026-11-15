// Does an Arab secondary-school certificate give direct access to a bachelor's? Per country.
// Detailed for the Egyptian Thanaweya Amma and Al-Azhar certificate; general rule for others.
// kind: direct = enough on its own (with the usual documents); recog = needs an official recognition step first;
// extra = usually needs something more (foundation year, Studienkolleg or university year); uni = the university decides case by case.
// check: true = part of the entry is from a non-official source (shown as "للتحقق"). Reviewed 2026-11-15.

export const CERT = {
  de: {
    kind: "extra",
    eg: {
      ar: "الثانوية العامة وحدها (أو الأزهرية) لا تكفي للدخول المباشر حسب أدلة تنقل عن قاعدة anabin. الطريق: سنة تحضيرية (Studienkolleg) ثم امتحان «تقييم الأهلية» (Feststellungsprüfung)، أو دراسة سنة أو سنتين بنجاح في جامعة مصرية في تخصص قريب ثم التقديم.",
      en: "The Thanaweya Amma (or Al-Azhar certificate) alone is not enough for direct entry, per guides quoting the anabin database. The route: a Studienkolleg then the Feststellungsprüfung, or one or two successful years at an Egyptian university in a related field before applying.",
    },
    general: {
      ar: "قاعدة بيانات القبول في DAAD تصنف كل شهادة: دخول مباشر، أو دخول مباشر لتخصصات معينة، أو بعد سنة أو سنتين دراسة جامعية في بلدك، أو عن طريق Studienkolleg.",
      en: "The DAAD admission database classifies each certificate: direct access, direct access for certain fields, after one or two years of university in your country, or via a Studienkolleg.",
    },
    note: { ar: "Studienkolleg بالألمانية غالباً ويحتاج لغة ألمانية (B1 عادةً). تأكد من شهادتك في قاعدة DAAD قبل أي خطوة.", en: "Studienkollegs are mostly in German and usually need German at B1. Check your certificate in the DAAD database first." },
    src: "https://www.study-in-germany.com/en/plan-your-studies/requirements/entrance-qualification/",
    tool: "https://www2.daad.de/deutschland/nach-deutschland/voraussetzungen/en/57293-database-on-admission-requirements/",
    check: true,
  },
  nl: {
    kind: "extra",
    eg: {
      ar: "Nuffic (الجهة الرسمية الهولندية) تعادل الثانوية العامة المصرية والثانوية الأزهرية بشهادة HAVO. وHAVO في هولندا تؤهل عادةً لجامعات العلوم التطبيقية (HBO)، أما الجامعات البحثية (WO) فتطلب عادةً مستوى أعلى (VWO)، فقد تحتاج سنة تأسيسية أو سنة جامعية أولاً.",
      en: "Nuffic (the official Dutch body) compares the Egyptian Thanaweya Amma and the Al-Azhar certificate to a HAVO diploma. HAVO usually gives access to universities of applied sciences (HBO); research universities (WO) usually ask for a higher level (VWO), so you may need a foundation year or a year of university first.",
    },
    general: { ar: "الجامعة تقيّم شهادتك ضمن القبول، وكثير منها يقارنها بتقييم Nuffic للبلد.", en: "The university assesses your certificate during admission; many compare it with Nuffic's country evaluation." },
    note: { ar: "اسأل الجامعة: هل تقبل شهادتك مباشرة لهذا البرنامج، أم تطلب سنة تأسيسية؟", en: "Ask the university whether it accepts your certificate directly for this programme or asks for a foundation year." },
    src: "https://www.nuffic.nl/en/node/276",
    tool: "https://www.nuffic.nl/en/node/276",
  },
  es: {
    kind: "recog",
    eg: {
      ar: "تحتاج معادلة الثانوية بالبكالوريا الإسبانية (homologación) من وزارة التعليم، ثم اعتماد UNEDasiss لحساب درجتك. يمكن التسجيل مؤقتاً بإيصال طلب المعادلة.",
      en: "You need your certificate recognised as the Spanish Bachillerato (homologación) by the Ministry of Education, then UNEDasiss accreditation to calculate your grade. You can enrol provisionally with the homologación receipt.",
    },
    general: { ar: "نفس الخطوات لكل الشهادات من خارج الاتحاد الأوروبي التي ليس لها اتفاقية مع إسبانيا.", en: "The same steps apply to every non-EU certificate without an agreement with Spain." },
    note: { ar: "ابدأ المعادلة مبكراً لأنها قد تأخذ شهوراً.", en: "Start the homologación early; it can take months." },
    src: "https://uc3m.es/grado/admision/solicitud/preinscripcion/acreditacion-uned",
    tool: "https://www.uam.es/uam/estudios/sistemas-educativos-extranjeros",
  },
  it: {
    kind: "direct",
    eg: {
      ar: "إيطاليا تشترط 12 سنة دراسة مدرسية، ونظام التعليم المصري 12 سنة (6 ابتدائي + 3 إعدادي + 3 ثانوي)، فالثانوية العامة تكفي من ناحية عدد السنوات. تحتاج ترجمة وتصديق الشهادة وإقرار القيمة أو بيان CIMEA، وتنجح في اختبار القبول إن كان البرنامج يطلبه.",
      en: "Italy requires 12 years of schooling, and Egypt's system has 12 (6 primary + 3 preparatory + 3 secondary), so the Thanaweya Amma meets the years requirement. You need the certificate translated and legalised with a Declaration of Value or a CIMEA statement, and to pass any entrance test the programme sets.",
    },
    general: { ar: "شرط وزارة الجامعات الإيطالية: شهادة بعد 12 سنة دراسة على الأقل وتؤهل للجامعة في بلدك. إذا كانت أقل من 12 سنة فتحتاج إلى سنة جامعية أو سنة تأسيسية.", en: "The Italian ministry's rule: a certificate after at least 12 years of schooling that gives university access in your country. With fewer than 12 years you need a university year or a foundation year." },
    note: { ar: "الشهادة يجب أن تؤهلك لبرنامج مشابه في بلدك.", en: "The certificate must qualify you for a similar programme in your country." },
    src: "https://www.unibo.it/en/teaching/enrolment-transfer-and-final-examination/enrolling-in-first-or-single-cycle-degree-programme-foreign-qualification",
    tool: "https://www.studiare-in-italia.it/studentistranieri/",
  },
  fi: {
    kind: "direct",
    eg: {
      ar: "في فنلندا تكفي شهادة أجنبية تؤهلك لدخول الجامعة في البلد الذي صدرت منه، والثانوية العامة تؤهل للجامعات المصرية. بعدها الاختيار حسب معايير كل برنامج (درجات، أو SAT، أو اختبار قبول).",
      en: "In Finland a foreign certificate that gives access to higher education in the country that issued it is enough, and the Thanaweya Amma gives access to Egyptian universities. Selection then follows each programme's criteria (grades, SAT or an entrance exam).",
    },
    general: { ar: "نفس القاعدة لكل الشهادات الأجنبية.", en: "The same rule applies to every foreign certificate." },
    note: { ar: "كثير من البرامج الإنجليزية تطلب SAT أو اختبار قبول، فاقرأ معايير الاختيار على Studyinfo.", en: "Many English-taught programmes ask for the SAT or an entrance exam; read the selection criteria on Studyinfo." },
    src: "https://www.vamk.fi/bachelors-degrees-2",
    tool: "https://studyinfo.fi/konfo/en/",
  },
  se: {
    kind: "uni",
    eg: {
      ar: "في السويد القاعدة العامة أن الشهادة التي تؤهلك لدخول الجامعة في بلدك تكفي غالباً للشرط العام، والتقديم وتقييم الأوراق عبر universityadmissions.se. تعليمات مصر تحديداً اقرأها في صفحة تعليمات الدول (للتحقق).",
      en: "In Sweden the general rule is that a certificate giving university access in your country usually meets the general entry requirement; you apply and the documents are assessed through universityadmissions.se. Read the Egypt-specific instructions on the country-instructions page (to verify).",
    },
    general: { ar: "نفس القاعدة لكل الشهادات الأجنبية، مع شرط الإنجليزية (English 6).", en: "The same rule applies to every foreign certificate, plus the English requirement (English 6)." },
    note: { ar: "البكالوريوس بالإنجليزية في السويد قليل، فلم نضف برامج بكالوريوس سويدية.", en: "English-taught bachelor's programmes are few in Sweden, so we have not added Swedish bachelor's programmes." },
    src: "https://www.universityadmissions.se/en/apply-to-bachelors/provide-application-documents-bachelors/country-instructions/",
    tool: "https://www.universityadmissions.se/en/apply-to-bachelors/provide-application-documents-bachelors/country-instructions/",
    check: true,
  },
  bg: {
    kind: "recog",
    eg: {
      ar: "تقدّم للجامعة البلغارية، والجامعة ترسل ملفك لوزارة التعليم التي تصدر الشهادة المطلوبة لتأشيرة D. يجب أن تكون الأوراق مصدقة: الخارجية المصرية ثم السفارة البلغارية، لأن مصر ليست في اتفاقية لاهاي (للتحقق).",
      en: "You apply to the Bulgarian university, which sends your file to the Ministry of Education; the Ministry issues the certificate needed for the D visa. Documents must be legalised by the Egyptian MFA and then the Bulgarian embassy, because Egypt is not in the Hague convention (to verify).",
    },
    general: { ar: "نفس الإجراء لكل المتقدمين من خارج الاتحاد الأوروبي (للتحقق).", en: "The same procedure applies to every non-EU applicant (to verify)." },
    note: { ar: "الطب في بلغاريا غالباً فيه اختبار قبول في الأحياء والكيمياء.", en: "Medicine in Bulgaria usually has an entrance exam in biology and chemistry." },
    src: "https://tu-sofia.bg/foreign-applications/site/index/page/visa",
    check: true,
  },
  cz: {
    kind: "recog",
    eg: {
      ar: "قبل التسجيل في البكالوريوس يجب معادلة الثانوية (nostrification) من السلطة الإقليمية في التشيك، وقد تطلب منك امتحاناً في بعض المواد. تقيّم بعض الجامعات الشهادة بنفسها لغرض القبول لديها فقط.",
      en: "Before enrolling in a bachelor's you need recognition (nostrification) of your school certificate by a Czech regional authority, which may set an exam in a few subjects. Some universities assess certificates themselves, valid only for admission there.",
    },
    general: { ar: "نفس الإجراء لكل الشهادات من خارج الاتحاد الأوروبي.", en: "The same procedure applies to every certificate from outside the EU." },
    note: { ar: "قد يستغرق الإجراء شهوراً، فقدّم مبكراً ومعه ترجمة تشيكية معتمدة.", en: "It can take months, so start early, with a certified Czech translation." },
    src: "https://portal.gov.cz/en/sluzby-vs/nostrifikace-zahranicniho-vysvedceni-S1101",
  },
  at: {
    kind: "extra",
    eg: {
      ar: "تطلب النمسا من غير الأوروبيين شهادة ثانوية تؤهل للجامعة، وكذلك ما يثبت أنها تؤهلك للتخصص نفسه في بلدك (للتحقق مع الجامعة).",
      en: "Austria asks non-EU applicants for a school certificate giving university access, plus proof that it admits you to the same field at home (check with the university).",
    },
    general: { ar: "نفس القاعدة لكل الشهادات من خارج الاتحاد الأوروبي.", en: "The same rule applies to every certificate from outside the EU." },
    note: { ar: "يجب أن تكون الأوراق مصدقة ومترجمة حسب طلب الجامعة.", en: "Documents must be legalised and translated as the university requires." },
    src: "https://www.european-funding-guide.eu/articles/funding-overview/financing-your-studies-austria",
    check: true,
  },
  be: {
    kind: "uni",
    eg: { ar: "الجامعة هي التي تقيّم شهادتك ضمن القبول (في فلاندرز غالباً بدون معادلة رسمية منفصلة).", en: "The university assesses your certificate during admission (in Flanders usually without separate official recognition)." },
    general: { ar: "في فلاندرز الجامعة تقرر، والجامعات الناطقة بالفرنسية تتبع نظام معادلة آخر.", en: "In Flanders the university decides; French-speaking universities follow a separate equivalence system." },
    note: { ar: "بعض البرامج تطلب اختبار قبول أو مواد معينة في الثانوية.", en: "Some programmes ask for an entrance test or specific school subjects." },
    src: "https://www.vlaanderen.be/en/studying/studying-in-flanders-with-a-foreign-diploma",
  },
  ee: {
    kind: "uni",
    eg: { ar: "الجامعة ترسل شهادتك لمركز المعادلة الإستوني (مجاناً)، والقرار للجامعة. كثير من البرامج تطلب اختبار قبول أو مقابلة.", en: "The university sends your certificate to the Estonian recognition centre (free) and makes the decision. Many programmes add an entrance test or interview." },
    general: { ar: "نفس الإجراء لكل الشهادات الأجنبية.", en: "The same procedure applies to every foreign certificate." },
    note: { ar: "بعض الجامعات تطلب تقييماً إيجابياً قبل القبول النهائي.", en: "Some universities require a positive evaluation before final admission." },
    src: "https://harno.ee/en/recognition-qualifications/qualifications/academic-recognition",
  },
  pl: {
    kind: "recog",
    eg: { ar: "شهادة الثانوية من خارج الاتحاد الأوروبي تحتاج اعترافاً: بيان من NAWA أو معادلة (nostrification) من مكتب التعليم الإقليمي، مع أبوستيل أو تصديق. والقبول بعدها للجامعة.", en: "A non-EU school certificate needs recognition: a NAWA statement or nostrification by the regional education office, with an apostille or legalisation. Admission then rests with the university." },
    general: { ar: "نفس الإجراء لكل الشهادات من خارج الاتحاد الأوروبي والدول التي لها اتفاقيات.", en: "The same procedure applies to certificates from outside the EU and agreement countries." },
    note: { ar: "بعض الجامعات تسمح بإكمال المعادلة حتى نهاية الفصل الأول.", en: "Some universities let you finish nostrification by the end of the first semester." },
    src: "https://www.nawa.gov.pl/en/recognition/recognition-for-academic-purposes/faq-frequently-asked-questions",
  },
  hu: {
    kind: "uni",
    eg: { ar: "الجامعة نفسها تجري الاعتراف بشهادتك ضمن القبول في البرامج الإنجليزية، وغالباً مع اختبار قبول (خاصة الطب).", en: "The university runs the recognition of your certificate as part of admission to English-taught programmes, often with an entrance exam (especially Medicine)." },
    general: { ar: "نفس الإجراء لكل الشهادات الأجنبية.", en: "The same procedure applies to every foreign certificate." },
    note: { ar: "برامج الطب تشترط عادةً الأحياء والكيمياء في الثانوية.", en: "Medicine usually requires Biology and Chemistry at school." },
    src: "https://www.nefmi.gov.hu/english/hungarian-equivalence/information-bulletin-on",
  },
  ro: {
    kind: "recog",
    eg: { ar: "تقدم للجامعة، والجامعة ترسل ملفك لوزارة التعليم التي تصدر «خطاب القبول للدراسة» بعد التحقق من شهادتك. الأوراق مترجمة للرومانية ومصدقة.", en: "You apply to the university, which sends your file to the Ministry of Education; the Ministry issues the Letter of Acceptance after checking your certificate. Documents must be translated into Romanian and legalised." },
    general: { ar: "نفس الإجراء لكل المتقدمين من خارج الاتحاد الأوروبي.", en: "The same procedure applies to every non-EU applicant." },
    note: { ar: "خطاب القبول مطلوب لتأشيرة الدراسة.", en: "The Letter of Acceptance is needed for the study visa." },
    src: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-romania_en",
  },
  lv: {
    kind: "uni",
    eg: { ar: "الجامعة ترسل شهادتك لمركز المعلومات الأكاديمية (AIC) للتقييم، والقرار للجامعة بناءً عليه. بعض البرامج تطلب SAT لمن درس خارج الاتحاد الأوروبي.", en: "The university sends your certificate to the Academic Information Centre (AIC) for evaluation and decides based on it. Some programmes ask non-EU-educated applicants for the SAT." },
    general: { ar: "نفس الإجراء لكل الشهادات الأجنبية.", en: "The same procedure applies to every foreign certificate." },
    note: { ar: "بدون تقييم إيجابي من AIC قد تغلق الجامعة طلبك.", en: "Without a positive AIC evaluation the university can close your application." },
    src: "https://aic.lv/en/arvalstis-iegutu-izglitibas-dokumentu-akademiska-atzisana-latvija/",
  },
  lt: {
    kind: "uni",
    eg: { ar: "الاعتراف جزء من القبول في الجامعة نفسها ولا يحتاج طلباً منفصلاً في الجامعات المفوضة.", en: "Recognition is part of admission at the university itself, with no separate application at authorised universities." },
    general: { ar: "نفس الإجراء لكل الشهادات الأجنبية.", en: "The same procedure applies to every foreign certificate." },
    note: { ar: "الاعتراف بالشهادة لا يعني القبول.", en: "Recognition does not mean admission." },
    src: "https://en.viko.lt/for-students/qualification-recognition/",
  },
};

export const CERTS = [
  { id: "eg", ar: "الثانوية العامة المصرية أو الأزهرية", en: "Egyptian Thanaweya Amma or Al-Azhar certificate", ready: true },
  { id: "other", ar: "شهادة ثانوية عربية أخرى", en: "Another Arab school certificate", ready: false },
];

export const CERT_KIND = {
  ar: { direct: "تكفي بالأوراق المعتادة", recog: "تحتاج معادلة رسمية أولاً", extra: "غالباً تحتاج سنة إضافية", uni: "الجامعة تقرر لكل حالة" },
  en: { direct: "Enough with the usual documents", recog: "Needs official recognition first", extra: "Usually needs an extra year", uni: "The university decides case by case" },
};

export const CERT_TEXT = {
  ar: {
    title: "ثانويتك تدخلك الجامعة على طول؟",
    lead: "لطلاب البكالوريوس: اختر شهادتك وشوف في كل دولة هل تكفي للتقديم مباشرة، أم تحتاج معادلة أو سنة إضافية قبلها.",
    cert: "شهادتك", country: "الدولة", all: "كل الدول",
    otherNote: "نضيف تفاصيل باقي الشهادات العربية تباعاً. إلى أن نضيف شهادتك، هذه هي القاعدة العامة في الدولة:",
    source: "المصدر", check: "أداة التحقق الرسمية", toCheck: " (للتحقق)",
    note: "انتبه",
    warn: "هذه هي القاعدة العامة. الجامعة هي صاحبة القرار النهائي، وبعض البرامج تطلب درجات أو مواد معينة أو اختبار قبول. البكالوريا المصرية الجديدة لم نجد لها تقييماً رسمياً بعد.",
    reviewed: "آخر مراجعة: 15 نوفمبر 2026",
    programmes: "برامج البكالوريوس في الدولة",
  },
  en: {
    title: "Does your school certificate get you straight into university?",
    lead: "For bachelor's applicants: pick your certificate and see, country by country, whether it is enough to apply directly or needs recognition or an extra year first.",
    cert: "Your certificate", country: "Country", all: "All countries",
    otherNote: "Details for other Arab certificates are being added one by one. Until yours is added, here is the country's general rule:",
    source: "Source", check: "Official checking tool", toCheck: " (to verify)",
    note: "Watch out",
    warn: "This is the general rule. The university has the final say, and some programmes require certain grades, subjects or an entrance test. We have not found an official evaluation of Egypt's new Baccalaureate yet.",
    reviewed: "Last reviewed: 15 November 2026",
    programmes: "Bachelor's programmes in this country",
  },
};
