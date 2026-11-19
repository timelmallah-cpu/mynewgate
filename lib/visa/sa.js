// Student visa routes for residents of Saudi Arabia (Saudi citizens and Iqama holders). Official sources only, reviewed 16 November 2026.
// check: true = part of the route is not confirmed on an official page for Saudi Arabia (the text says "للتحقق").
const IQ = {
  ar: "إذا لم تكن سعودي الجنسية فجهّز صورة الإقامة (الإقامة) وتأشيرة الخروج والعودة، وصلاحيتهما تغطي مدة السفر.",
  en: "If you are not a Saudi citizen, bring a copy of your Iqama and exit/re-entry visa, valid for the whole trip.",
};

export const VISA_SA = {
  de: {
    where: { ar: "السفارة الألمانية في الرياض مباشرة (وليس مركز تأشيرات)، بموعد تحجزه بعد رفع طلبك على بوابة الخدمات القنصلية", en: "The German Embassy in Riyadh directly (not a visa centre), by an appointment you book after uploading your application on the Consular Services Portal" },
    steps: {
      ar: ["أنشئ طلب التأشيرة الوطنية على بوابة الخدمات القنصلية (digital.diplo.de) وارفع كل الأوراق.", "بعد اكتمال الرفع يصلك بريد فيه رابط حجز الموعد.", "احضر بنفسك إلى السفارة بالأوراق الأصلية ونسخة منها، ومعك الهوية أو الإقامة.", "الرسوم 75 يورو تُدفع بالريال السعودي نقداً فقط. المعالجة شهر على الأقل وقد تطول."],
      en: ["Create the national visa application on the Consular Services Portal (digital.diplo.de) and upload all documents.", "Once the upload is complete you get an email with a link to book the appointment.", "Attend the embassy in person with the originals and one copy, plus your Saudi ID or Iqama.", "The fee is €75, paid in Saudi riyals in cash only. Processing takes at least a month and can take longer."],
    },
    note: { ar: "السفارة في الرياض مسؤولة عن المقيمين في السعودية، والإقامة تعني عادةً 6 أشهر على الأقل في مكانك الحالي.", en: "The embassy in Riyadh handles residents of Saudi Arabia; residence usually means at least 6 months where you live now." },
    src: "https://saudiarabien.diplo.de/ksa-en/study-preparatory-courses/2195208",
    book: "https://digital.diplo.de/",
  },
  nl: {
    where: { ar: "الجامعة تقدم طلب الإقامة لدائرة الهجرة IND، وبعد الموافقة تستلم ملصق التأشيرة (MVV) من السفارة الهولندية في الرياض إذا ذكرها خطاب IND", en: "Your university applies to the IND; after approval you collect the MVV sticker at the Dutch Embassy in Riyadh if the IND letter names it" },
    steps: {
      ar: ["انتظر خطاب الموافقة من IND وتأكد أنه يذكر الرياض مكاناً لاستلام التأشيرة.", "احجز موعداً أونلاين في السفارة الهولندية بالرياض.", "سلّم جواز سفرك في الموعد. استرجاعه مع الملصق قد يستغرق حتى 10 أيام عمل، ويمكن توصيله بمندوب على حسابك."],
      en: ["Wait for the IND approval letter and check that it names Riyadh as the place to collect the visa.", "Book an appointment online at the Dutch Embassy in Riyadh.", "Hand in your passport at the appointment. Getting it back with the sticker can take up to 10 working days; a courier can deliver it at your cost."],
    },
    src: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-saudi-arabia",
    book: "https://netherlandsworldwide.nl/making-appointment/saudi-arabia",
  },
  es: {
    where: { ar: "سفارة إسبانيا في الرياض نفسها للدراسة أكثر من 6 أشهر (وليس مركز BLS)، بموعد تطلبه بالبريد الإلكتروني emb.riad.vis@maec.es", en: "The Embassy of Spain in Riyadh itself for studies over 6 months (not the BLS centre), by an appointment requested at emb.riad.vis@maec.es" },
    steps: {
      ar: ["جهّز كل الأوراق أولاً، ثم اطلب الموعد بالبريد الإلكتروني.", "شهادة خلو سوابق من كل بلد عشت فيه آخر 5 سنوات؛ شهادة السعودية تُصدّق بالأبوستيل وتُترجم للإسبانية بمترجم محلّف.", "شهادة طبية بخلوك من الأمراض المعدية، مصدقة بالأبوستيل ومترجمة ترجمة محلّفة.", "خطاب القبول وإثبات دفع الرسوم الدراسية، وكشف حساب يغطي الدراسة والإقامة، وتأمين صحي لسنة، وإثبات سكن.", "قدّم قبل السفر بشهرين على الأقل."],
      en: ["Prepare every document first, then request the appointment by email.", "A police certificate from every country you lived in over the last 5 years; the Saudi one must be apostilled and sworn-translated into Spanish.", "A medical certificate showing no infectious disease, apostilled and sworn-translated.", "Admission letter and proof of tuition payment, a bank statement covering studies and stay, one-year health insurance and proof of accommodation.", "Apply at least two months before travel."],
    },
    note: IQ,
    src: "https://saudi.blsspainvisa.com/assets/images/pdf/Student-Visa-requirements-actualizado-EN.pdf",
  },
  be: {
    where: { ar: "مراكز VFS Global في الرياض وجدة والخبر، وهي تستقبل طلبات التأشيرة الطويلة (D) لسفارة بلجيكا", en: "VFS Global centres in Riyadh, Jeddah and Al Khobar, which accept long-stay (D) applications for the Belgian Embassy" },
    steps: {
      ar: ["املأ استمارة التأشيرة الطويلة (D).", "احجز موعداً على موقع VFS بلجيكا في السعودية.", "قدّم الأوراق بنفسك حسب قائمة الدراسة الخاصة بالسعودية."],
      en: ["Fill in the long-stay (D) visa form.", "Book an appointment on the VFS Belgium Saudi Arabia website.", "Submit in person following the Saudi study checklist."],
    },
    note: IQ,
    src: "https://saudiarabia.diplomatie.belgium.be/en/travel-belgium/visa-belgium",
  },
  fr: {
    where: { ar: "Campus France السعودية (في السفارة بالرياض والقنصلية في جدة) لإجراء Études en France، ثم مركز VFS في جدة أو الرياض أو الخبر للتأشيرة", en: "Campus France Saudi Arabia (at the embassy in Riyadh and the consulate in Jeddah) for Études en France, then a VFS centre in Jeddah, Riyadh or Al Khobar for the visa" },
    steps: {
      ar: ["أنشئ ملفك على منصة Études en France واختر Campus France السعودية.", "أكمل إجراء القبول والمقابلة حسب مستواك.", "بعد القبول أنشئ طلب التأشيرة على France-Visas واكتب رقم ملف Études en France.", "قدّم في أي مركز VFS تختاره، أو في قسم التأشيرات بالسفارة في الرياض أو القنصلية في جدة إذا لم ترد استخدام VFS.", "قدّم قبل السفر بشهر على الأقل."],
      en: ["Create your file on Études en France and choose Campus France Saudi Arabia.", "Complete the admission procedure and interview for your level.", "After admission, create the visa application on France-Visas and enter your Études en France number.", "Submit at any VFS centre you choose, or at the visa section of the embassy in Riyadh or the consulate in Jeddah if you prefer not to use VFS.", "Apply at least one month before travel."],
    },
    note: { ar: "التأشيرات تقررها السفارة في الرياض والقنصلية العامة في جدة فقط.", en: "Visas are decided only by the embassy in Riyadh and the consulate general in Jeddah." },
    src: "https://france-visas.gouv.fr/en/web/france-visas/arabie-saoudite",
    book: "https://france-visas.gouv.fr/",
  },
  it: {
    where: { ar: "القنصلية العامة الإيطالية في جدة تتولى طلبات تأشيرة الدراسة مباشرة لمناطقها (مكة والمدينة والباحة وعسير وجازان ونجران والشمالية والقريات). لباقي المناطق راسل السفارة في الرياض (للتحقق)", en: "The Italian Consulate General in Jeddah handles study visas directly for its regions (Makkah, Madinah, Al Bahah, Asir, Jazan, Najran, Northern Borders and Qurayyat). Elsewhere, contact the embassy in Riyadh (to verify)" },
    steps: {
      ar: ["قدّم طلب ما قبل التسجيل على Universitaly وانتظر موافقة الجامعة.", "اطلب إقرار القيمة أو شهادة CIMEA لشهادتك إن طلبتها الجامعة.", "تواصل مع القنصلية أو السفارة المختصة لحجز موعد تقديم التأشيرة الوطنية (D)."],
      en: ["Submit the Universitaly pre-enrolment and wait for the university's approval.", "Get a declaration of value or CIMEA certificate if the university asks.", "Contact the competent consulate or embassy to book the national (D) visa appointment."],
    },
    note: { ar: "للعامين 2026-2027 و2027-2028 يجب إثبات 10,179.85 يورو في السنة على الأقل لتأشيرة التسجيل الجامعي.", en: "For 2026-27 and 2027-28 you must show at least €10,179.85 a year for the university enrolment visa." },
    src: "https://consgedda.esteri.it/en/?p=263",
    book: "https://www.universitaly.it/",
    check: true,
  },
  pl: {
    where: { ar: "القسم القنصلي في سفارة بولندا بالرياض، بموعد عبر نظام e-Konsulat", en: "The consular section of the Polish Embassy in Riyadh, by appointment through e-Konsulat" },
    steps: {
      ar: ["احجز موعداً في نظام e-Konsulat (قبل السفر بين 15 يوماً و6 أشهر).", "جهّز الأوراق الإضافية للدراسة قبل الموعد؛ السفارة لا تساعد في الحصول عليها.", "قدّم بنفسك وادفع الرسوم: 135 يورو منذ 1 يونيو 2024."],
      en: ["Book an appointment in e-Konsulat (between 15 days and 6 months before travel).", "Prepare the extra study documents before the appointment; the embassy does not help obtain them.", "Apply in person and pay the fee: €135 since 1 June 2024."],
    },
    note: { ar: "السفارة لا تتعامل مع أي وسطاء أو مكاتب تأشيرات.", en: "The embassy does not work with any visa agents." },
    src: "https://www.gov.pl/web/saudiarabia/d-type-national-visa/",
    book: "https://secure2.e-konsulat.gov.pl/",
  },
  hu: {
    where: { ar: "القسم القنصلي في سفارة المجر بالرياض (تختص بالسعودية والبحرين واليمن)، بموعد تطلبه بالبريد consular.ryd@mfa.gov.hu", en: "The consular section of the Hungarian Embassy in Riyadh (covering Saudi Arabia, Bahrain and Yemen), by appointment requested at consular.ryd@mfa.gov.hu" },
    steps: {
      ar: ["جهّز استمارة تصريح الإقامة للدراسة من موقع دائرة الهجرة المجرية.", "اطلب موعداً بالبريد الإلكتروني.", "قدّم الطلب بنفسك في السفارة."],
      en: ["Prepare the study residence permit form from the Hungarian immigration authority's website.", "Request an appointment by email.", "Submit the application in person at the embassy."],
    },
    note: { ar: "صفحة السفارة عن تصاريح الإقامة عامة وليست خاصة بالدراسة، فأكد الإجراء مع السفارة وجامعتك (للتحقق).", en: "The embassy's residence permit page is general, not study-specific, so confirm the procedure with the embassy and your university (to verify)." },
    src: "https://rijad.mfa.gov.hu/hu/d-type-visa",
    check: true,
  },
  cz: {
    where: { ar: "سفارة التشيك في الرياض مباشرة، بموعد تطلبه بالبريد riyadh.consulate@mzv.gov.cz", en: "The Czech Embassy in Riyadh directly, by appointment requested at riyadh.consulate@mzv.gov.cz" },
    steps: {
      ar: ["أرسل بريداً فيه اسمك ورقم جوازك ونوع الطلب (تأشيرة طويلة للدراسة) ورقم هاتفك.", "خطاب القبول أو التسجيل يكون باللغة التشيكية، وكل الأوراق الأجنبية تُترجم للتشيكية، والوثائق السعودية تُصدّق بالأبوستيل.", "السفارة تطلب شهادة خلو سوابق.", "قدّم بنفسك وادفع 2,500 كرونة تشيكية (400 ريال نقداً، أو بالبطاقة)."],
      en: ["Email your name, passport number, the type of application (long-term study visa) and your phone number.", "The admission or enrolment letter must be in Czech, all foreign documents translated into Czech, and Saudi documents apostilled.", "The embassy asks for a police clearance certificate.", "Apply in person and pay CZK 2,500 (SAR 400 in cash, or by card)."],
    },
    note: { ar: "غير السعوديين يقبل طلبهم في الرياض فقط إذا أقاموا في السعودية بشكل نظامي ومتصل سنتين على الأقل. والمواعيد قليلة في الصيف بسبب كثرة طلبات الدراسة.", en: "Non-Saudis can apply in Riyadh only after at least two years of continuous legal residence in Saudi Arabia. Slots are scarce in summer because of study applications." },
    src: "https://mzv.gov.cz/riyadh/en/visas_and_consular_information/visa/index.html",
  },
  se: {
    where: { ar: "تقدم أونلاين لدى مصلحة الهجرة السويدية، ثم تحضر إلى السفارة السويدية في الرياض للبصمات واستلام بطاقة الإقامة", en: "Apply online with the Swedish Migration Agency, then attend the Swedish Embassy in Riyadh for biometrics and to collect the residence card" },
    steps: {
      ar: ["قدّم طلب تصريح الإقامة للدراسة وادفع الرسوم على موقع Migrationsverket.", "احضر إلى قسم الهجرة في السفارة بالرياض للبصمات (الأحد إلى الأربعاء 8:30 - 9:15).", "بعد الموافقة تصل بطاقة الإقامة للسفارة خلال 4 أسابيع تقريباً وتستلمها من هناك."],
      en: ["Apply for the study residence permit and pay on the Migrationsverket website.", "Attend the migration section of the embassy in Riyadh for biometrics (Sunday to Wednesday 8:30 - 9:15).", "After approval the residence card reaches the embassy in about 4 weeks and you collect it there."],
    },
    note: { ar: "طلبات الإقامة تُقدم في السفارة بالرياض فقط، وليس في القنصليات الفخرية.", en: "Residence permit applications are handled only at the embassy in Riyadh, not at honorary consulates." },
    src: "https://www.swedenabroad.se/en/embassies/saudi-arabia-riyadh/contact-for-visa-and-migration-matters/",
    book: "https://www.migrationsverket.se/",
  },
  ie: {
    where: { ar: "مراكز VFS Global في الرياض وجدة والخبر فقط؛ السفارة الأيرلندية لا تستقبل الطلبات ولا يوجد بديل", en: "VFS Global centres in Riyadh, Jeddah and Al Khobar only; the Irish Embassy does not take applications and there is no alternative" },
    steps: {
      ar: ["املأ طلب تأشيرة الدراسة الطويلة على نظام AVATS واطبع ملخص الطلب ووقّعه.", "احجز موعداً في VFS وقدّم الأوراق.", "رسوم التأشيرة الحالية 275 ريالاً للدخول مرة واحدة (460 للدخول المتعدد)."],
      en: ["Fill in the long-stay study visa application on AVATS, then print and sign the summary.", "Book a VFS appointment and submit your documents.", "The current visa fee is SAR 275 single entry (SAR 460 multiple)."],
    },
    src: "https://www.ireland.ie/en/saudiarabia/riyadh/services/visas/visas-for-ireland/",
    book: "https://www.visas.inis.gov.ie/AVATS/",
  },
  dk: {
    where: { ar: "مركز التأشيرات الدنماركي (VFS) في الرياض والمراكز الإقليمية، للبصمات وتسليم الجواز والأوراق", en: "The Danish visa application centre (VFS) in Riyadh and regional centres, for biometrics and handing in your passport and documents" },
    steps: {
      ar: ["ادفع رسوم دائرة الهجرة الدنماركية وأنشئ رقم الحالة (Case Order ID) قبل التقديم.", "ادفع رسوم السفارة أونلاين على dys.um.dk/permit واحتفظ بالإيصال.", "احجز موعداً في VFS وقدّم الجواز والأوراق والإيصال، وادفع رسوم VFS (19 يورو، أي 83.22 ريالاً) بالريال."],
      en: ["Pay the Danish immigration fee and create the Case Order ID before applying.", "Pay the embassy fee online at dys.um.dk/permit and keep the receipt.", "Book a VFS appointment and hand in your passport, documents and receipt; pay the VFS fee (€19, SAR 83.22) in riyals."],
    },
    note: { ar: "من خارج الرياض تدفع 5 يورو إضافية للبريد.", en: "Outside Riyadh you pay an extra €5 courier charge." },
    src: "https://visa.vfsglobal.com/one-pager/denmark/SaudiArabia/english/",
    book: "https://dys.um.dk/permit/",
  },
  lv: {
    where: { ar: "سفارة لاتفيا في الإمارات (أبوظبي)، فهي المختصة بطلبات الإقامة والتأشيرات الوطنية لمواطني ومقيمي دول الخليج ومنها السعودية", en: "The Embassy of Latvia in the UAE (Abu Dhabi), which handles residence permit and national visa requests from citizens and residents of the Gulf states, including Saudi Arabia" },
    steps: {
      ar: ["قدّم طلب تصريح الإقامة للدراسة بنفسك في السفارة بأبوظبي، ومعك إثبات إقامتك في السعودية ورقم الدعوة وعقد الدراسة.", "انتظر قرار دائرة الجنسية والهجرة اللاتفية.", "بعد الموافقة قدّم على التأشيرة الطويلة (D)."],
      en: ["Apply in person for the study residence permit at the embassy in Abu Dhabi, with proof of your Saudi residence, the invitation number and the study agreement.", "Wait for the decision of Latvia's Office of Citizenship and Migration Affairs.", "After approval, apply for the long-stay (D) visa."],
    },
    note: { ar: "يعني ذلك السفر إلى أبوظبي، فاحسب تكلفة الرحلة وتأشيرة دخول الإمارات إن احتجتها.", en: "This means travelling to Abu Dhabi, so budget for the trip and a UAE entry visa if you need one." },
    src: "https://www2.mfa.gov.lv/en/uae/consular-information/how-to-apply-for-a-residence-permit-and-a-long-term-visa-for-studies-in-latvia",
  },
  no: {
    where: {"ar": "مراكز VFS Global في الرياض وجدة والخبر، والسفارة النرويجية في أبوظبي مسؤولة عن الطلبات المقدمة من السعودية", "en": "VFS Global centres in Riyadh, Jeddah and Al Khobar; the Norwegian Embassy in Abu Dhabi handles applications from Saudi Arabia"},
    steps: {"ar": ["أنشئ طلب تصريح الإقامة للدراسة على بوابة UDI (Application Portal Norway) وادفع الرسوم أونلاين، ثم اطبع خطاب التقديم (cover letter).", "جهّز الأوراق حسب قائمة UDI للدراسة: خطاب القبول، وإثبات التمويل، وإثبات السكن، وجواز السفر.", "احجز موعداً واحضر بنفسك إلى أحد مراكز VFS في الرياض أو جدة أو الخبر (رسوم خدمة VFS ورسوم بريد إضافية) لتسليم الأوراق وأخذ البصمات.", "يُرسل الملف إلكترونياً إلى UDI، والقرار لـ UDI في النرويج."], "en": ["Create the study residence permit application on UDI's Application Portal Norway, pay the fee online and print the cover letter.", "Prepare the documents on UDI's study checklist: admission letter, proof of funding, proof of housing and passport.", "Book an appointment and go in person to a VFS centre in Riyadh, Jeddah or Al Khobar (VFS service fee plus a courier fee) to hand in the documents and give fingerprints.", "The file is sent electronically to UDI, which decides in Norway."]},
    note: IQ,
    src: "https://www.norway.no/en/saudi-arabia/services-info/visitors-visa-res-permit/",
    book: "https://my.udi.no/",
  },
  gr: {
    where: {"ar": "سفارة اليونان في الرياض مباشرة (طلب التأشيرة الوطنية D لا يُقدَّم في مركز VFS)", "en": "The Hellenic Embassy in Riyadh directly (national D visa applications are not filed at VFS)"},
    steps: {"ar": ["جهّز خطاب القبول من الجامعة اليونانية واستمارة التأشيرة الوطنية (D) الموقّعة وصوراً وجواز سفر ساري.", "أرفق إثبات التمويل وتأمين صحي وشهادة خلو سوابق، وتُطلب عادة مصدّقة ومترجمة (للتحقق من القائمة الحالية مع السفارة).", "قدّم الطلب بنفسك بموعد، وقد تُطلب مقابلة شخصية.", "بعد الوصول تقدّم على تصريح الإقامة للدراسة في اليونان قبل انتهاء التأشيرة."], "en": ["Prepare the admission letter from the Greek university, the signed national (D) visa form, photos and a valid passport.", "Add proof of funds, health insurance and a police certificate, usually legalised and translated (check the current list with the embassy).", "Apply in person by appointment; a personal interview may be requested.", "After arrival, apply for the student residence permit in Greece before the visa expires."]},
    note: IQ,
    src: "https://visa.vfsglobal.com/one-pager/greece/saudiarabia/english/index.html",
    check: true,
  },
  is: {
    where: {"ar": "مديرية الهجرة الآيسلندية أونلاين وبالبريد، ثم سفارة تحددها المديرية لتأشيرة الدخول (للتحقق للمقيمين في السعودية)", "en": "The Icelandic Directorate of Immigration online and by post, then an embassy named by the Directorate for the entry visa (to verify for residents of Saudi Arabia)"},
    steps: {"ar": ["قدّم طلب تصريح الإقامة للدراسة إلى مديرية الهجرة الآيسلندية (Útlendingastofnun) مع كل الأوراق، قبل 1 يوليو لفصل الخريف أو 1 نوفمبر لفصل الربيع.", "الأوراق الأصلية الورقية تُرسل بالبريد إلى المديرية في Dalvegur 18 في كوبافوغور.", "بعد الموافقة، ولأنك تحتاج تأشيرة لدخول آيسلندا، ترسل المديرية طلب تأشيرة الدخول إلى السفارة المختصة.", "بعد الوصول تحجز موعد تصوير لبطاقة الإقامة لدى المديرية أو مكتب المفوض المحلي."], "en": ["Apply for the study residence permit to the Directorate of Immigration (Útlendingastofnun) with all documents, by 1 July for the autumn term or 1 November for spring.", "Paper originals are posted to the Directorate at Dalvegur 18, Kópavogur.", "Once approved, because you need a visa to enter Iceland, the Directorate sends the entry visa request to the competent embassy.", "After arrival, book a photo appointment for the residence card at the Directorate or a district commissioner's office."]},
    note: IQ,
    src: "https://island.is/en/o/directorate-of-immigration/have-received-first-permit",
    book: "https://island.is/en/residence-permit-students",
    check: true,
  },
};
