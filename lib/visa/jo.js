// Student visa routes for residents of Jordan. Official sources only, reviewed 19 November 2026.
// check: true = part of the route is not confirmed on an official page for Jordan (the text says "للتحقق").
const RES = {
  ar: "إذا لم تكن أردني الجنسية فأرفق ما يثبت إقامتك المعتادة في الأردن (مثل تصريح إقامة ساري).",
  en: "If you are not a Jordanian citizen, include proof of your habitual residence in Jordan (such as a valid residence permit).",
};

export const VISA_JO = {
  de: {
    where: { ar: "السفارة الألمانية في عمّان، بطلب أونلاين على بوابة الخدمات القنصلية (digital.diplo.de)", en: "The German Embassy in Amman, with an online application on the Consular Services Portal (digital.diplo.de)" },
    steps: {
      ar: ["قدّم طلب التأشيرة الوطنية للدراسة أو للسنة التحضيرية (Studienkolleg) أو لدورة اللغة التحضيرية على digital.diplo.de وارفع الأوراق.", "جهّز حسب قائمة السفارة: جواز سفر ساري، استمارة التأشيرة الوطنية الموقّعة، صورة بيومترية، خطاب القبول مع لغة الدراسة، شهادة الثانوية والشهادات الجامعية مع كشوف الدرجات.", "للدراسة بالألمانية بدون دورة لغة تحضيرية أو Studienkolleg: شهادة ألمانية بمستوى B2 على الأقل.", "احضر الموعد في السفارة بالأوراق الأصلية ولا تحجز الطيران قبل استلام التأشيرة."],
      en: ["Apply for the national visa for studies, a Studienkolleg or a preparatory language course at digital.diplo.de and upload your documents.", "Prepare per the embassy's sheet: valid passport, signed national visa form, biometric photo, admission letter showing the language of study, school certificate and degree certificates with transcripts.", "For German-taught studies without a preparatory course or Studienkolleg: a German certificate of at least B2.", "Attend the embassy appointment with the originals, and book your flight only after receiving the visa."],
    },
    note: RES,
    src: "https://amman.diplo.de/resource/blob/2593384/d4f82b4756bb04d95b15b006ac7d3a12/merkblatt-studium-12-2024-data.pdf",
    book: "https://digital.diplo.de/visa",
  },
  fr: {
    where: { ar: "Campus France في عمّان (إجراء Études en France)، ثم مركز TLScontact في عمّان لتقديم ملف التأشيرة، والقرار لقسم التأشيرات في السفارة الفرنسية بعمّان", en: "Campus France in Amman (Études en France procedure), then the TLScontact centre in Amman for the visa file; the French Embassy's visa section in Amman decides" },
    steps: {
      ar: ["أنشئ ملفك على منصة Études en France وأكمل إجراء Campus France في عمّان (رسوم الملف للتحقق من Campus France).", "بعد القبول أكمل خطوة «Je suis accepté» وطلب التأشيرة على France-Visas.", "احجز موعداً في مركز TLScontact بعمّان قبل السفر بثلاثة أسابيع على الأقل، وقدّم الملف بنفسك.", "رسوم التأشيرة لا تُسترد حتى إذا رُفض الطلب."],
      en: ["Create your file on Études en France and complete the Campus France procedure in Amman (file fee to check with Campus France).", "Once admitted, complete \"Je suis accepté\" and the visa application on France-Visas.", "Book a TLScontact appointment in Amman at least three weeks before departure and file in person.", "The visa fee is kept even if the visa is refused."],
    },
    src: "https://france-visas.gouv.fr/jordanie",
    book: "https://france-visas.gouv.fr/jordanie",
    check: true,
  },
  es: {
    where: { ar: "مركز BLS International في عمّان (التقديم شخصياً بموعد)، والقرار للسفارة الإسبانية في عمّان", en: "The BLS International centre in Amman (in person, by appointment); the Spanish Embassy in Amman decides" },
    steps: {
      ar: ["احجز موعداً على موقع BLS في الأردن.", "كل الأوراق أصلية ومترجمة إلى الإسبانية.", "لإقامة أكثر من 180 يوماً: صحيفة السوابق من دول إقامتك في آخر 5 سنوات، وشهادة طبية.", "رسوم تأشيرة الدراسة 67 ديناراً أردنياً، مع رسوم خدمة 12.6 ديناراً لـ BLS."],
      en: ["Book an appointment on the BLS Jordan website.", "All documents must be originals translated into Spanish.", "For stays over 180 days: criminal record certificates from your countries of residence for the past 5 years, and a medical certificate.", "The study visa fee is JOD 67, plus a BLS service charge of JOD 12.6."],
    },
    src: "https://www.exteriores.gob.es/Embajadas/amman/en/ServiciosConsulares/Paginas/Consular/Visado-de-estudios.aspx",
    book: "https://jordan.blsspainvisa.com/national_student_visa.php",
  },
  it: {
    where: { ar: "قسم التأشيرات في السفارة الإيطالية بعمّان: تأشيرات الدراسة الطويلة لا تُحجز عبر VFS، بل تطلب الموعد مباشرة من السفارة بالبريد الإلكتروني visti.amman@esteri.it", en: "The visa section of the Italian Embassy in Amman: long-stay study visas are not booked through VFS; request the appointment directly from the embassy at visti.amman@esteri.it" },
    steps: {
      ar: ["قدّم طلب ما قبل التسجيل على بوابة Universitaly واختر السفارة في عمّان.", "بعد موافقة الجامعة اطلب موعد التأشيرة من قسم التأشيرات بالسفارة بالبريد الإلكتروني.", "قدّم استمارة التأشيرة الوطنية (D) والأوراق الأصلية في الموعد."],
      en: ["Submit your pre-enrolment on Universitaly and choose the embassy in Amman.", "After the university approves it, request the visa appointment from the embassy's visa section by email.", "Submit the national (D) visa form and original documents at the appointment."],
    },
    note: { ar: "VFS في عمّان مخصص لتأشيرات السياحة والأعمال القصيرة فقط، حسب موقع السفارة.", en: "Per the embassy's site, VFS in Amman handles only short tourism and business visas." },
    src: "https://ambamman.esteri.it/en/?p=249",
  },
  nl: {
    where: { ar: "الجامعة تقدم طلب الإقامة لدائرة الهجرة IND، وبعد الموافقة تستلم ملصق التأشيرة (MVV) من السفارة الهولندية في عمّان إذا ذكر خطاب IND الأردن", en: "Your university applies to the IND; after approval you collect the MVV sticker at the Dutch Embassy in Amman if the IND letter names Jordan" },
    steps: {
      ar: ["انتظر خطاب الموافقة من IND، ثم احجز موعداً أونلاين في السفارة بعمّان.", "اذكر في الحجز اسمك الكامل وتاريخ ميلادك ورقم V وبيانات الاتصال كما تطلب السفارة.", "احضر الموعد بنفسك بجواز السفر والأوراق المطلوبة لاستلام الملصق."],
      en: ["Wait for the IND approval letter, then book an online appointment at the embassy in Amman.", "Give your full name, date of birth, V-number and contact details as the embassy asks.", "Attend in person with your passport and the required documents to get the sticker."],
    },
    note: { ar: "السفارة لا تأخذ رسوماً على حجز المواعيد وتنصح بالحجز بنفسك.", en: "The embassy charges nothing for appointments and recommends booking yourself." },
    src: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-jordan",
    book: "https://www.netherlandsworldwide.nl/making-appointment/jordan",
  },
  be: {
    where: { ar: "مركز TLScontact في عمّان، والقرار لمكتب الأجانب في بلجيكا عبر السفارة البلجيكية بعمّان", en: "The TLScontact centre in Amman; the Belgian Immigration Office decides through the Belgian Embassy in Amman" },
    steps: {
      ar: ["احجز موعداً على موقع TLScontact وادفع رسوم الخدمة أونلاين عند الحجز.", "جهّز قائمة أوراق التأشيرة D للدراسة من موقع السفارة، والوثائق العربية تُترجم إلى الإنجليزية أو لغة بلجيكية وتُصدَّق.", "رسوم التأشيرة D من 1 يوليو 2026: 250 يورو (212.50 ديناراً)."],
      en: ["Book on the TLScontact website and pay the service fee online when booking.", "Prepare the D study visa checklist from the embassy site; Arabic documents must be translated into English or a Belgian language and legalised.", "The D visa fee from 1 July 2026 is €250 (JOD 212.50)."],
    },
    note: { ar: "لأسئلة حالة الطلب تواصل مع مكتب الأجانب، ولأسئلة التقديم مع TLScontact.", en: "For the status of an application contact the Immigration Office; for filing questions, TLScontact." },
    src: "https://jordan.diplomatie.belgium.be/en/travel-belgium/visa-belgium",
    book: "https://visas-be.tlscontact.com/en-us/country/jo/vac/joAMM2be/news",
  },
  pl: {
    where: { ar: "القسم القنصلي في السفارة البولندية بعمّان، بموعد على نظام e-Konsulat (لا وسطاء)", en: "The consular section of the Polish Embassy in Amman, by appointment on e-Konsulat (no intermediaries)" },
    steps: {
      ar: ["سجّل استمارة التأشيرة الوطنية (D) على e-Konsulat واختر خدمة الدراسة.", "مواعيد جديدة تُفتح كل أسبوعين يوم الأربعاء أو الخميس.", "قدّم الطلب بنفسك؛ السفارة لا تقبل الطلبات بالبريد أو الفاكس.", "لطلاب المرحلة الأولى: أوراق إضافية حسب متطلبات الوكالة الوطنية NAWA لحملة الشهادة الأردنية."],
      en: ["Register the national (D) visa form on e-Konsulat and choose the study service.", "New slots open every two weeks on Wednesday or Thursday.", "Apply in person; the embassy does not accept applications by post or fax.", "First-cycle students: extra documents per NAWA's requirements for Jordanian certificates."],
    },
    src: "https://www.gov.pl/web/jordan/d-type-national-visa",
    book: "https://www.e-konsulat.gov.pl/",
  },
  hu: {
    where: { ar: "المواطنون الأردنيون: موعد في القنصلية المجرية بعمّان عبر نظام الحجز الأونلاين. الجنسيات الأخرى المقيمة في الأردن: عبر مركز VFS", en: "Jordanian citizens: an appointment at the Hungarian consulate in Amman via the online booking system. Other nationalities resident in Jordan: through VFS" },
    steps: {
      ar: ["لفصل الخريف 2026/2027 بدأ تقديم طلبات التأشيرة D من 8 يونيو 2026.", "احجز موعد «Visa application (long-term; residence permit – D)».", "اختر رحلة مباشرة من عمّان إلى بودابست أو ترانزيت خارج شنغن، وإلا تحتاج طلباً جديداً."],
      en: ["For the autumn semester 2026/2027, D visa applications opened on 8 June 2026.", "Book \"Visa application (long-term; residence permit – D)\".", "Fly direct from Amman to Budapest or transit outside Schengen; otherwise a new application is needed."],
    },
    src: "https://amman.mfa.gov.hu/en/visa-process-2026-self-paid-students",
    book: "https://konzinfobooking.mfa.gov.hu/",
  },
  se: {
    where: { ar: "طلب الإقامة أونلاين لدى دائرة الهجرة السويدية (Migrationsverket)، والبصمات والصورة في السفارة السويدية بعمّان", en: "Apply online to the Swedish Migration Agency (Migrationsverket); photo and fingerprints at the Swedish Embassy in Amman" },
    steps: {
      ar: ["قدّم طلب تصريح الإقامة للدراسة أونلاين مع خطاب القبول.", "احجز موعداً في السفارة فقط بعد أن تطلب منك دائرة الهجرة ذلك.", "في السفارة: فحص الجواز والبصمات، وقد تُجرى مقابلة.", "بعد القرار تصل بطاقة الإقامة إلى السفارة خلال حوالي 4 أسابيع، ولا يمكن تسريعها."],
      en: ["Apply online for the study residence permit with your admission letter.", "Book an embassy appointment only after the Migration Agency asks you to.", "At the embassy: passport check and biometrics, and possibly an interview.", "After the decision the card reaches the embassy in about 4 weeks; this cannot be expedited."],
    },
    note: { ar: "يجب أن يصدر التصريح قبل السفر إلى السويد.", en: "The permit must be granted before you travel to Sweden." },
    src: "https://swedenabroad.se/en/about-sweden-non-swedish-citizens/jordan/going-to-sweden/studying-in-sweden/applying-for-a-residence-permit-to-study-in-sweden/how-to-apply2",
    book: "https://www.swedenabroad.se/en/embassies/jordan-amman/contact/contact-for-visa-and-migration-matters2/",
  },
  no: {
    where: {"ar": "مركز VFS Global في عمّان (غاليريا مول، الصويفية)، والسفارة النرويجية في عمّان مسؤولة عن الطلبات", "en": "The VFS Global centre in Amman (Galleria Mall, Sweifieh); the Norwegian Embassy in Amman handles the applications"},
    steps: {"ar": ["أنشئ طلب تصريح الإقامة للدراسة على بوابة UDI (Application Portal Norway) وادفع الرسوم أونلاين، ثم اطبع خطاب التقديم (cover letter).", "جهّز الأوراق حسب قائمة UDI للدراسة: خطاب القبول، وإثبات التمويل، وإثبات السكن، وجواز السفر.", "احجز موعداً واحضر بنفسك إلى مركز VFS في عمّان (رسوم خدمة VFS تُدفع نقداً في المركز) لتسليم الأوراق وأخذ البصمات.", "يُرسل الملف إلكترونياً إلى UDI، والقرار لـ UDI في النرويج."], "en": ["Create the study residence permit application on UDI's Application Portal Norway, pay the fee online and print the cover letter.", "Prepare the documents on UDI's study checklist: admission letter, proof of funding, proof of housing and passport.", "Book an appointment and go in person to the VFS centre in Amman (the VFS service fee is paid in cash at the centre) to hand in the documents and give fingerprints.", "The file is sent electronically to UDI, which decides in Norway."]},
    note: RES,
    src: "https://www.norway.no/en/jordan/services-info/visitors-visa-res-permit/",
    book: "https://my.udi.no/",
  },
  gr: {
    where: {"ar": "مركز تأشيرات اليونان (VFS Global) في عمّان، والقرار لسفارة اليونان في عمّان التي قد تطلب مقابلة", "en": "The Greece visa centre (VFS Global) in Amman; the Hellenic Embassy in Amman decides and may call you for an interview"},
    steps: {"ar": ["جهّز خطاب القبول من الجامعة اليونانية واستمارة التأشيرة الوطنية (D) الموقّعة وصوراً وجواز سفر ساري.", "أرفق إثبات التمويل وتأمين صحي وشهادة خلو سوابق، وتُطلب عادة مصدّقة ومترجمة (للتحقق من القائمة الحالية مع السفارة).", "قدّم الطلب بنفسك بموعد، وقد تُطلب مقابلة شخصية.", "بعد الوصول تقدّم على تصريح الإقامة للدراسة في اليونان قبل انتهاء التأشيرة."], "en": ["Prepare the admission letter from the Greek university, the signed national (D) visa form, photos and a valid passport.", "Add proof of funds, health insurance and a police certificate, usually legalised and translated (check the current list with the embassy).", "Apply in person by appointment; a personal interview may be requested.", "After arrival, apply for the student residence permit in Greece before the visa expires."]},
    note: RES,
    src: "https://www.vfsglobal.com/one-pager/greece/jordan/english/",
    check: true,
  },
  is: {
    where: {"ar": "مديرية الهجرة الآيسلندية أونلاين وبالبريد؛ وفي الأردن تتولى السفارة النرويجية في عمّان تأشيرات آيسلندا (عبر VFS عمّان)", "en": "The Icelandic Directorate of Immigration online and by post; in Jordan the Norwegian Embassy in Amman handles visas for Iceland (via VFS Amman)"},
    steps: {"ar": ["قدّم طلب تصريح الإقامة للدراسة إلى مديرية الهجرة الآيسلندية (Útlendingastofnun) مع كل الأوراق، قبل 1 يوليو لفصل الخريف أو 1 نوفمبر لفصل الربيع.", "الأوراق الأصلية الورقية تُرسل بالبريد إلى المديرية في Dalvegur 18 في كوبافوغور.", "بعد الموافقة، ولأنك تحتاج تأشيرة لدخول آيسلندا، ترسل المديرية طلب تأشيرة الدخول إلى السفارة المختصة.", "بعد الوصول تحجز موعد تصوير لبطاقة الإقامة لدى المديرية أو مكتب المفوض المحلي."], "en": ["Apply for the study residence permit to the Directorate of Immigration (Útlendingastofnun) with all documents, by 1 July for the autumn term or 1 November for spring.", "Paper originals are posted to the Directorate at Dalvegur 18, Kópavogur.", "Once approved, because you need a visa to enter Iceland, the Directorate sends the entry visa request to the competent embassy.", "After arrival, book a photo appointment for the residence card at the Directorate or a district commissioner's office."]},
    note: RES,
    src: "https://island.is/en/o/directorate-of-immigration/have-received-first-permit",
    book: "https://island.is/en/residence-permit-students",
    check: true,
  },
  tr: {
    where: {"ar": "الأردنيون بجواز عادي معفون من التأشيرة للسياحة 90 يوماً خلال 6 أشهر؛ للدراسة تصدر التأشيرة من السفارة التركية في عمّان إن طلبتها الجامعة", "en": "Jordanian ordinary passport holders are visa-exempt for tourism for 90 days within six months; for study, the Turkish Embassy in Amman issues the visa if the university asks for one"},
    steps: {"ar": ["احصل على خطاب القبول من الجامعة التركية.", "الإعفاء الأردني للسياحة فقط، فاسأل الجامعة والسفارة في عمّان: هل تحتاج تأشيرة طالب قبل السفر؟", "بعد الوصول والتسجيل في الجامعة قدّم طلب تصريح إقامة الطالب أونلاين على e-ikamet.goc.gov.tr وسلّم الأوراق لمكتب الطلاب الدوليين في الجامعة خلال المهلة التي تحددها."], "en": ["Get the admission letter from the Turkish university.", "The Jordanian exemption is for tourism only, so ask the university and the embassy in Amman whether you need a student visa before travelling.", "After arrival and university registration, apply for the student residence permit online at e-ikamet.goc.gov.tr and hand the documents to the university's international student office within its deadline."]},
    note: RES,
    src: "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa?level=1",
    check: true,
  },
};
