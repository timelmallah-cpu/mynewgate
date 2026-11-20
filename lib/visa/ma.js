// Student visa routes for residents of Morocco. Official sources only, reviewed 16 November 2026.
// check: true = part of the route is not confirmed on an official page for Morocco (the text says "للتحقق").
const RES = {
  ar: "إذا لم تكن مغربي الجنسية فأرفق بطاقة إقامتك في المغرب.",
  en: "If you are not a Moroccan citizen, include your Moroccan residence card.",
};

export const VISA_MA = {
  fr: {
    where: { ar: "Campus France المغرب (إجراء Études en France إلزامي لأن المغرب من دول الإجراء)، ثم مركز TLScontact لتقديم ملف التأشيرة", en: "Campus France Morocco (Études en France is mandatory because Morocco is a procedure country), then a TLScontact centre to submit the visa file" },
    steps: {
      ar: ["أنشئ ملفك على منصة Études en France، واملأ اختياراتك وقدّم الملف في موعد الحملة.", "ادفع رسوم ملف Campus France: 1,900 درهم أونلاين، أو نقداً في وكالات Crédit du Maroc مع رسوم البنك.", "اجتز المقابلة، وبعد القبول أكمل إجراء ما قبل القنصلية «Je suis accepté».", "بعد اكتمال الملف يرسل لك Campus France إذناً بحجز موعد في TLScontact لتقديم ملف التأشيرة.", "بعد الوصول فعّل التأشيرة أونلاين خلال 3 أشهر."],
      en: ["Create your file on Études en France, add your choices and submit within the campaign dates.", "Pay the Campus France file fee: MAD 1,900 online, or in cash at Crédit du Maroc branches plus bank charges.", "Pass the interview; once admitted, complete the pre-consular step \"Je suis accepté\".", "When the file is complete, Campus France authorises you to book a TLScontact appointment for the visa file.", "After arrival, validate the visa online within 3 months."],
    },
    note: { ar: "يُنصح بمستوى فرنسي B2 للدراسة في فرنسا. الرسوم غير مستردة حتى إذا رُفض الطلب.", en: "French at B2 is recommended for studying in France. The fee is not refunded even if you are refused." },
    src: "https://www.maroc.campusfrance.org/system/files/medias/documents/2025-12/D%C3%A9pliant%20EEF%20V3.pdf",
    book: "https://www.maroc.campusfrance.org/",
  },
  es: {
    where: { ar: "القنصلية الإسبانية التي تتبع لها منطقتك (في المغرب عدة قنصليات). في منطقة الرباط: تقدّم الملف بنفسك في مركز BLS بالرباط (أكدال)، والموعد تطلبه حضورياً من القنصلية", en: "The Spanish consulate covering your area (Morocco has several). In the Rabat district: you file in person at the BLS centre in Rabat (Agdal), and request the appointment in person at the consulate" },
    steps: {
      ar: ["في الرباط: اطلب الموعد حضورياً في القنصلية العامة يوم الجمعة من 10 إلى 12.", "خطاب القبول وإثبات دفع الرسوم الدراسية، وإثبات سكن في إسبانيا.", "إثبات موارد مالية تعادل 100% من مؤشر IPREM: 600 يورو شهرياً (7,200 يورو في السنة)، والرسوم الدراسية تُثبت إضافةً إلى ذلك.", "تأمين صحي بلا تحمل ولا سقف تغطية.", "إذا زادت الإقامة عن 180 يوماً: شهادة طبية حديثة من طبيب ضمن قائمة القنصلية.", "رسوم التأشيرة 874 درهماً. استلم التأشيرة بنفسك خلال شهرين من إبلاغك."],
      en: ["In Rabat: request the appointment in person at the consulate general on Fridays, 10:00 to 12:00.", "Admission letter, proof of tuition payment and proof of accommodation in Spain.", "Funds equal to 100% of IPREM: €600 a month (€7,200 a year), with tuition shown on top.", "Health insurance with no deductible, co-payment or coverage cap.", "For stays over 180 days: a recent medical certificate from a doctor on the consulate's list.", "The visa fee is MAD 874. Collect the visa in person within two months of notification."],
    },
    note: { ar: "هذه شروط قنصلية الرباط. إذا كنت تتبع قنصلية أخرى (الدار البيضاء أو طنجة أو تطوان أو الناظور أو أكادير أو العرائش) فراجع قائمتها.", en: "These are the Rabat consulate's rules. If another consulate covers you (Casablanca, Tangier, Tetouan, Nador, Agadir or Larache), check its own list." },
    src: "https://www.exteriores.gob.es/DocumentosAuxiliaresSC/Marruecos/RABAT%20(C)/Requisitos%20visados/FRA/3.visa%20%C3%A9tudiant.pdf",
  },
  de: {
    where: { ar: "السفارة الألمانية في الرباط، بطلب أونلاين على بوابة الخدمات القنصلية (digital.diplo.de) (للتحقق من خطوات الموعد في الرباط)", en: "The German Embassy in Rabat, with an online application on the Consular Services Portal (digital.diplo.de) (appointment steps in Rabat to verify)" },
    steps: {
      ar: ["قدّم طلب تأشيرة الدراسة على digital.diplo.de/studium وارفع الأوراق.", "احضر الموعد بالأوراق الأصلية كاملة.", "رسوم التأشيرة 75 يورو تُدفع مباشرة للبعثة الألمانية."],
      en: ["Apply for the study visa at digital.diplo.de/studium and upload your documents.", "Attend the appointment with all original documents.", "The visa fee is €75, paid directly to the German mission."],
    },
    note: RES,
    src: "https://www.make-it-in-germany.com/de/service/beratung-anlaufstellen/weltweit/marokko",
    book: "https://digital.diplo.de/studium",
    check: true,
  },
  nl: {
    where: { ar: "الجامعة تقدم طلب الإقامة لدائرة الهجرة IND، وبعد الموافقة تستلم ملصق التأشيرة (MVV) من السفارة الهولندية في الرباط إذا ذكر خطاب IND المغرب", en: "Your university applies to the IND; after approval you collect the MVV sticker at the Dutch Embassy in Rabat if the IND letter names Morocco" },
    steps: {
      ar: ["بعد خطاب الموافقة من IND لديك 3 أشهر لطلب الملصق.", "احجز الموعد مع السفارة في الرباط بالبريد الإلكتروني مبكراً، فالسفارة مزدحمة في الربيع والصيف.", "سلّم جوازك في الموعد، والملصق يستغرق حتى 10 أيام عمل، ثم استلمه بالإيصال."],
      en: ["After the IND approval letter you have 3 months to apply for the sticker.", "Book the appointment with the embassy in Rabat by email early; it is busy in spring and summer.", "Hand in your passport at the appointment; the sticker takes up to 10 working days, then collect it with your receipt."],
    },
    src: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-morocco",
    book: "https://netherlandsworldwide.nl/making-appointment/morocco",
  },
  be: {
    where: { ar: "مركز TLScontact، وطلبات الدراسة تُقدّم في الرباط مع استبيان في سفارة بلجيكا بالرباط في اليوم نفسه (للتحقق)", en: "TLScontact; study applications are filed in Rabat, with a questionnaire at the Belgian Embassy in Rabat the same day (to verify)" },
    steps: {
      ar: ["أكمل ملف التأشيرة D للدراسة حسب قائمة TLScontact.", "إذا كان لديك ضامن، فالضامن يوقّع تعهد التكفل (الملحق 32) بنفسه في سفارة بلجيكا بالرباط بموعد أونلاين، والسفارة تقيّم قدرته المالية.", "قدّم الملف في TLScontact بالرباط."],
      en: ["Complete the D study visa file following the TLScontact checklist.", "If you have a sponsor, the sponsor signs the commitment form (Annex 32) in person at the Belgian Embassy in Rabat by online appointment; the embassy assesses their means.", "File at TLScontact in Rabat."],
    },
    note: { ar: "بدون موافقة السفارة على ملاءة الضامن يُرفض الطلب غالباً.", en: "Without the embassy's approval of the sponsor's means, the visa is usually refused." },
    src: "https://static.tlscontact.com/media/ma/cas/be/annexe_32_engagement_de_prise_en_charge_-_etudiant.pdf",
    check: true,
  },
  it: {
    where: { ar: "مراكز VFS Global: المقيمون في دائرة قنصلية الدار البيضاء يحجزون في VFS الدار البيضاء، والباقون عبر السفارة الإيطالية في الرباط من خلال VFS الرباط", en: "VFS Global: residents of the Casablanca consular district book at VFS Casablanca; everyone else goes through the Italian Embassy in Rabat via VFS Rabat" },
    steps: {
      ar: ["قدّم طلب ما قبل التسجيل على Universitaly وانتظر موافقة الجامعة.", "جهّز شهادة CIMEA أو إقرار القيمة لشهادتك مع ترجمة معتمدة.", "إثبات موارد لا تقل عن 10,179.85 يورو في السنة بحجز بنكي، ولا يُقبل النقد. إذا كانت المنحة أقل من ذلك فأثبت الباقي.", "احجز موعد VFS وقدّم الملف."],
      en: ["Submit the Universitaly pre-enrolment and wait for the university's validation.", "Get a CIMEA statement or declaration of value for your certificate, with a certified translation.", "Show at least €10,179.85 a year through a bank block; cash is not accepted. If a scholarship is smaller, show the rest.", "Book the VFS appointment and submit."],
    },
    note: RES,
    src: "https://conscasablanca.esteri.it/fr/?p=3053",
    book: "https://www.universitaly.it/",
  },
  pl: {
    where: { ar: "القسم القنصلي في سفارة بولندا بالرباط، والموعد عبر نظام e-Konsulat فقط", en: "The consular section of the Polish Embassy in Rabat, with appointments through e-Konsulat only" },
    steps: {
      ar: ["سجّل طلب التأشيرة الوطنية واحجز الموعد على e-Konsulat. السفارة لا تحدد مواعيد بالهاتف أو البريد.", "قدّم بنفسك بالأوراق الإضافية للدراسة."],
      en: ["Register the national visa application and book on e-Konsulat. The embassy does not give appointments by phone or email.", "Apply in person with the extra study documents."],
    },
    note: RES,
    src: "https://www.gov.pl/web/maroko/wiza-typu-d",
    book: "https://secure2.e-konsulat.gov.pl/",
  },
  cz: {
    where: { ar: "سفارة التشيك في الرباط، والطلب تعالجه وزارة الداخلية التشيكية خلال 60 يوماً عادةً", en: "The Czech Embassy in Rabat; the Czech Ministry of the Interior normally decides within 60 days" },
    steps: {
      ar: ["احجز الموعد حسب صفحة المواعيد في موقع السفارة.", "قدّم مبكراً، فالمعالجة تأخذ حتى 60 يوماً من تاريخ الطلب."],
      en: ["Book the appointment as described on the embassy's appointments page.", "Apply early; processing takes up to 60 days from the application date."],
    },
    src: "https://mzv.gov.cz/rabat/fr/visas_et_affaires_consulaires/rabat_en_francais/visa_de_longue_sejour_et_permis_de/demande_de_visa_de_long_sejour_pour.html",
    check: true,
  },
  se: {
    where: { ar: "تقدم أونلاين لدى مصلحة الهجرة السويدية، وتصل بطاقة الإقامة إلى السفارة السويدية في الرباط", en: "Apply online with the Swedish Migration Agency; the residence card is sent to the Swedish Embassy in Rabat" },
    steps: {
      ar: ["بعد القبول قدّم طلب تصريح الإقامة للدراسة أونلاين قبل بدء الدراسة بشهرين إلى ثلاثة.", "إذا طلبت منك مصلحة الهجرة البصمات أو فحص الجواز فاذهب للسفارة يوم الثلاثاء أو الخميس من 2 إلى 3 ظهراً بدون موعد.", "بعد الموافقة تصل البطاقة للسفارة خلال 3 إلى 4 أسابيع، وتستلمها في المواعيد نفسها."],
      en: ["After admission, apply online for the study residence permit two to three months before your studies start.", "If the agency asks for biometrics or a passport check, go to the embassy on Tuesday or Thursday, 2 to 3 pm, without an appointment.", "After approval the card reaches the embassy in 3 to 4 weeks; collect it in the same hours."],
    },
    src: "https://www.swedenabroad.se/en/embassies/morocco-rabat/contact/",
    book: "https://www.migrationsverket.se/",
  },
  dk: {
    where: { ar: "تقدم أونلاين لدى الهجرة الدنماركية، ثم تسلم الأوراق والجواز والبصمات في مركز VFS Global بالمغرب، والملف يُرسل لسفارة الدنمارك في الرباط (للتحقق من مراكز VFS لتصاريح الإقامة)", en: "Apply online with the Danish authorities, then hand in documents, passport and biometrics at a VFS Global centre in Morocco; the file goes to the Danish Embassy in Rabat (VFS centres for residence permits to verify)" },
    steps: {
      ar: ["قدّم طلب الإقامة للدراسة وادفع رسومه، واحصل على رقم الحالة (Case Order ID).", "ادفع رسوم السفارة أونلاين.", "سلّم الأوراق والرقم والجواز والبصمات في مركز VFS."],
      en: ["Apply for the study residence permit, pay its fee and get the Case Order ID.", "Pay the embassy fee online.", "Hand in documents, the ID, passport and biometrics at VFS."],
    },
    src: "https://um.dk/um-en/travel-and-residence/how-to-apply-for-a-residence-permit/",
    book: "https://dys.um.dk/permit/",
    check: true,
  },
  hu: {
    where: { ar: "القسم القنصلي في سفارة المجر بالرباط (يختص بالمغرب وموريتانيا)، ويُقدَّم طلب الإقامة للدراسة بنفسك (للتحقق من طريقة الحجز)", en: "The consular section of the Hungarian Embassy in Rabat (covering Morocco and Mauritania); the study residence permit is filed in person (booking method to verify)" },
    steps: {
      ar: ["جهّز استمارة تصريح الإقامة للدراسة وملحقها من موقع دائرة الهجرة المجرية.", "تواصل مع السفارة لتحديد الموعد وقدّم بنفسك. حاملو منحة Stipendium Hungaricum يتبعون تعليمات المنحة."],
      en: ["Prepare the study residence permit form and its appendix from the Hungarian immigration website.", "Contact the embassy for an appointment and apply in person. Stipendium Hungaricum holders follow the scholarship's instructions."],
    },
    src: "https://consular-protection.ec.europa.eu/representation-offices/hungary-hu-representation-morocco-ma_en",
    check: true,
  },
  at: {
    where: { ar: "السفارة النمساوية في الرباط، حيث تقدم بنفسك طلب تصريح الإقامة للطلاب (Aufenthaltsbewilligung Student) (للتحقق من طريقة الحجز)", en: "The Austrian Embassy in Rabat, where you file the student residence permit (Aufenthaltsbewilligung Student) in person (booking method to verify)" },
    steps: {
      ar: ["بعد القبول المشروط أو النهائي جهّز الأوراق حسب قائمة OeAD.", "تواصل مع السفارة مبكراً للموعد، وقدّم بنفسك.", "بعد الموافقة تحصل على تأشيرة الدخول من السفارة."],
      en: ["After conditional or final admission, prepare the documents on the OeAD checklist.", "Contact the embassy early for an appointment and apply in person.", "After approval, the embassy issues your entry visa."],
    },
    src: "https://oead.at/en/to-austria/entry-and-residence/residence-permit-student-no-mobility-programme",
    check: true,
  },
  no: {
    where: {"ar": "مراكز VFS Global في الرباط والدار البيضاء وطنجة (منذ يناير 2026)", "en": "VFS Global centres in Rabat, Casablanca and Tangier (since January 2026)"},
    steps: {"ar": ["أنشئ طلب تصريح الإقامة للدراسة على بوابة UDI (Application Portal Norway) وادفع الرسوم أونلاين، ثم اطبع خطاب التقديم (cover letter).", "جهّز الأوراق حسب قائمة UDI للدراسة: خطاب القبول، وإثبات التمويل، وإثبات السكن، وجواز السفر.", "احجز موعداً واحضر بنفسك إلى مركز VFS الذي تختاره عند الحجز (الرباط أو الدار البيضاء أو طنجة) لتسليم الأوراق وأخذ البصمات.", "يُرسل الملف إلكترونياً إلى UDI، والقرار لـ UDI في النرويج."], "en": ["Create the study residence permit application on UDI's Application Portal Norway, pay the fee online and print the cover letter.", "Prepare the documents on UDI's study checklist: admission letter, proof of funding, proof of housing and passport.", "Book an appointment and go in person to the VFS centre you choose when booking (Rabat, Casablanca or Tangier) to hand in the documents and give fingerprints.", "The file is sent electronically to UDI, which decides in Norway."]},
    src: "https://www.norway.no/fr/morocco/services-info/visa-de-tourisme-et-permis-de-sejour/",
    book: "https://my.udi.no/",
  },
  gr: {
    where: {"ar": "المكتب القنصلي في سفارة اليونان بالرباط (18 Rue Aït Hdidou، السويسي)؛ مكتب الدار البيضاء أُغلق في 2018", "en": "The consular office of the Embassy of Greece in Rabat (18 Rue Aït Hdidou, Souissi); the Casablanca office closed in 2018"},
    steps: {"ar": ["جهّز خطاب القبول من الجامعة اليونانية واستمارة التأشيرة الوطنية (D) الموقّعة وصوراً وجواز سفر ساري.", "أرفق إثبات التمويل وتأمين صحي وشهادة خلو سوابق، وتُطلب عادة مصدّقة ومترجمة (للتحقق من القائمة الحالية مع السفارة).", "قدّم الطلب بنفسك بموعد، وقد تُطلب مقابلة شخصية.", "بعد الوصول تقدّم على تصريح الإقامة للدراسة في اليونان قبل انتهاء التأشيرة."], "en": ["Prepare the admission letter from the Greek university, the signed national (D) visa form, photos and a valid passport.", "Add proof of funds, health insurance and a police certificate, usually legalised and translated (check the current list with the embassy).", "Apply in person by appointment; a personal interview may be requested.", "After arrival, apply for the student residence permit in Greece before the visa expires."]},
    src: "https://www.mfa.gr/missionsabroad/fr/morocco-fr/news/etablissement-du-bureau-consulaire-aupres-de-lambassade-de-grece-rabat-et-fermeture-du-bureau-consulaire-de-casablanca.html",
    check: true,
  },
  is: {
    where: {"ar": "مديرية الهجرة الآيسلندية أونلاين وبالبريد، ثم سفارة تحددها المديرية لتأشيرة الدخول (للتحقق للمقيمين في المغرب)", "en": "The Icelandic Directorate of Immigration online and by post, then an embassy named by the Directorate for the entry visa (to verify for residents of Morocco)"},
    steps: {"ar": ["قدّم طلب تصريح الإقامة للدراسة إلى مديرية الهجرة الآيسلندية (Útlendingastofnun) مع كل الأوراق، قبل 1 يوليو لفصل الخريف أو 1 نوفمبر لفصل الربيع.", "الأوراق الأصلية الورقية تُرسل بالبريد إلى المديرية في Dalvegur 18 في كوبافوغور.", "بعد الموافقة، ولأنك تحتاج تأشيرة لدخول آيسلندا، ترسل المديرية طلب تأشيرة الدخول إلى السفارة المختصة.", "بعد الوصول تحجز موعد تصوير لبطاقة الإقامة لدى المديرية أو مكتب المفوض المحلي."], "en": ["Apply for the study residence permit to the Directorate of Immigration (Útlendingastofnun) with all documents, by 1 July for the autumn term or 1 November for spring.", "Paper originals are posted to the Directorate at Dalvegur 18, Kópavogur.", "Once approved, because you need a visa to enter Iceland, the Directorate sends the entry visa request to the competent embassy.", "After arrival, book a photo appointment for the residence card at the Directorate or a district commissioner's office."]},
    src: "https://island.is/en/o/directorate-of-immigration/have-received-first-permit",
    book: "https://island.is/en/residence-permit-students",
    check: true,
  },
  tr: {
    where: {"ar": "المغاربة بجواز عادي معفون من التأشيرة حتى 90 يوماً؛ تأشيرة الدراسة إن طلبتها الجامعة تصدر من السفارة التركية في الرباط", "en": "Moroccan ordinary passport holders are visa-exempt for up to 90 days; a study visa, if the university asks for one, is issued by the Turkish Embassy in Rabat"},
    steps: {"ar": ["احصل على خطاب القبول من الجامعة التركية.", "اسأل الجامعة: هل يكفي الدخول بالإعفاء من التأشيرة ثم طلب الإقامة، أم تطلب تأشيرة طالب من السفارة؟", "بعد الوصول والتسجيل في الجامعة قدّم طلب تصريح إقامة الطالب أونلاين على e-ikamet.goc.gov.tr وسلّم الأوراق لمكتب الطلاب الدوليين في الجامعة خلال المهلة التي تحددها."], "en": ["Get the admission letter from the Turkish university.", "Ask the university whether visa-free entry followed by the residence permit is enough, or whether it wants a student visa from the embassy.", "After arrival and university registration, apply for the student residence permit online at e-ikamet.goc.gov.tr and hand the documents to the university's international student office within its deadline."]},
    note: RES,
    src: "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa?level=1",
    check: true,
  },
  my: {
    where: {"ar": "الطلب أونلاين عن طريق الجامعة وEMGS؛ تأشيرة الدخول (إن احتاجتها جنسيتك) عبر بوابة eVISA الماليزية أو سفارة ماليزيا في الرباط", "en": "The application is made online through the university and EMGS; the entry visa (if your nationality needs one) through Malaysia's eVISA portal or the Embassy of Malaysia in Rabat"},
    steps: {"ar": ["احصل على خطاب القبول من الجامعة الماليزية.", "ارفع أوراقك في نظام الجامعة لترسل طلب تصريح الطالب إلى EMGS وتدفع رسومه.", "انتظر خطاب الموافقة eVAL من دائرة الهجرة؛ يجب أن تدخل ماليزيا خلال 6 أشهر منه.", "تحقق هل تحتاج جنسيتك تأشيرة لدخول ماليزيا؛ إن كانت تحتاجها اطلب تأشيرة الدخول الواحدة عبر بوابة eVISA بخطاب eVAL.", "بعد الوصول أجرِ الفحص الطبي في عيادة معتمدة من EMGS خلال 7 أيام، ثم يُلصق تصريح الطالب في جوازك."], "en": ["Get the admission letter from the Malaysian university.", "Upload your documents in the university's system so it sends the Student Pass application to EMGS, and pay its fee.", "Wait for the eVAL approval letter from the Immigration Department; you must enter Malaysia within 6 months of it.", "Check whether your nationality needs a visa for Malaysia; if it does, apply for the Single Entry Visa through the eVISA portal with the eVAL letter.", "After arrival, do the medical check at an EMGS-approved clinic within 7 days, then the Student Pass sticker is put in your passport."]},
    note: RES,
    src: "https://www.imi.gov.my/index.php/en/main-services/pass/student-pass/",
    check: true,
  },
  ca: {
    where: {"ar": "الطلب أونلاين على حساب IRCC؛ البصمات في مركز تأشيرات كندا (VFS Global) في المغرب حسب خطاب البصمات (للتحقق من المدينة)", "en": "Apply online through an IRCC account; biometrics at the Canada visa application centre (VFS Global) in Morocco named in the biometrics letter (check the city)"},
    steps: {"ar": ["احصل على خطاب القبول من جامعة كندية معتمدة (DLI).", "جهّز إثبات المال: رسوم السنة الأولى + 23,448 دولاراً كندياً للمعيشة + السفر، مع مصدر المال.", "قدّم طلب تصريح الدراسة أونلاين وادفع الرسوم (150 + 85 دولاراً كندياً للبصمات).", "قدّم البصمات في مركز التأشيرات بعد وصول خطاب البصمات، وأجرِ الكشف الطبي إن طُلب.", "بعد الموافقة تحصل على خطاب تصريح الدراسة وتأشيرة الدخول إن احتاجتها جنسيتك؛ التصريح يصدر عند الوصول."], "en": ["Get an acceptance letter from a Canadian designated learning institution (DLI).", "Prepare proof of funds: first-year tuition + CAD 23,448 for living + travel, with the source of the money.", "Apply for the study permit online and pay the fees (CAD 150 + CAD 85 biometrics).", "Give biometrics at the visa centre after the biometrics letter, and have a medical exam if asked.", "Once approved you get the port-of-entry letter and an entry visa if your nationality needs one; the permit is issued on arrival."]},
    note: RES,
    src: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html",
    check: true,
  },
  au: {
    where: {"ar": "الطلب أونلاين على ImmiAccount؛ إن طُلبت البصمات تقدمها في المركز الذي تسميه الوزارة في المغرب (للتحقق)", "en": "Apply online through ImmiAccount; if biometrics are requested, give them at the centre the Department names in Morocco (to verify)"},
    steps: {"ar": ["اقبل عرض الجامعة وادفع العربون لتحصل على تأكيد التسجيل الإلكتروني (CoE).", "اشترِ تأمين OSHC وجهّز إثبات المال (رسوم سنة + 29,710 دولاراً أسترالياً للمعيشة + السفر) وشهادة الإنجليزية.", "قدّم طلب تأشيرة الطالب 500 أونلاين وادفع الرسوم (2,500 دولار أسترالي من يوليو 2026).", "قدّم البصمات أو الكشف الطبي إن طُلبا، وانتظر القرار قبل السفر."], "en": ["Accept the offer and pay the deposit to receive the Confirmation of Enrolment (CoE).", "Buy OSHC and prepare proof of funds (a year's tuition + AUD 29,710 for living + travel) and your English certificate.", "Apply for the Student visa (subclass 500) online and pay the charge (AUD 2,500 from July 2026).", "Give biometrics or have a medical exam if asked, and wait for the decision before travelling."]},
    note: RES,
    src: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
    check: true,
  },
  nz: {
    where: {"ar": "الطلب أونلاين على Immigration Online من هيئة الهجرة النيوزيلندية؛ لا تحتاج زيارة سفارة عادةً (للتحقق)", "en": "Apply online through Immigration New Zealand's Immigration Online; usually no embassy visit is needed (to verify)"},
    steps: {"ar": ["احصل على عرض المكان من الجامعة النيوزيلندية.", "جهّز إثبات المال (20,000 دولار نيوزيلندي لكل سنة) والتأمين، والكشف الطبي إن طُلب.", "قدّم طلب تأشيرة الطالب أونلاين.", "بعد الموافقة المبدئية ادفع رسوم السنة الأولى وأرسل الإيصال لتصدر التأشيرة."], "en": ["Get the offer of place from the New Zealand university.", "Prepare proof of funds (NZD 20,000 a year), insurance and a medical exam if asked.", "Apply for the student visa online.", "After approval in principle, pay the first year's tuition and send the receipt so the visa can be issued."]},
    note: RES,
    src: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/visa-factsheet/full-fee-paying-student-visa",
    check: true,
  },
  gb: {
    where: {"ar": "مركز طلبات التأشيرة البريطانية في المغرب الذي تختاره في الطلب (المدن والشركة المشغلة في صفحة Find a visa application centre على gov.uk، للتحقق)", "en": "the UK visa application centre in Morocco you choose in the application (cities and operator on gov.uk's Find a visa application centre page, to verify)"},
    steps: {"ar": ["احصل على القبول غير المشروط من الجامعة البريطانية ورقم CAS.", "جهّز إثبات المال (رسوم السنة الأولى غير المدفوعة + 1,203 جنيهات إسترلينية في الشهر خارج لندن أو 1,570 في لندن لمدة حتى 9 أشهر) واتركه في حسابك 28 يوماً متتالية.", "أجرِ فحص السل (TB) في عيادة معتمدة من وزارة الداخلية البريطانية في بلدك، لأن بلدك في قائمة الفحص.", "قدّم طلب تأشيرة الطالب أونلاين على gov.uk قبل بداية الدراسة بـ 6 أشهر على الأكثر، وادفع رسوم الطلب ورسوم الصحة IHS.", "احجز موعد البصمات في مركز طلبات التأشيرة البريطانية في المغرب الذي تختاره في الطلب (المدن والشركة المشغلة في صفحة Find a visa application centre على gov.uk، للتحقق)."], "en": ["Get an unconditional offer and a CAS number from the UK university.", "Prepare proof of funds (unpaid first-year tuition + £1,203 a month outside London or £1,570 in London for up to 9 months) and keep it in your account for 28 consecutive days.", "Take the tuberculosis (TB) test at a Home Office approved clinic in your country, because your country is on the test list.", "Apply for the Student visa online on gov.uk no earlier than 6 months before your course starts, and pay the application fee and the IHS.", "Book a biometrics appointment at the UK visa application centre in Morocco you choose in the application (cities and operator on gov.uk's Find a visa application centre page, to verify)."]},
    note: {"ar": "المغاربة يحتاجون تأشيرة لبريطانيا. المغرب في قائمة دول فحص السل على gov.uk، فشهادة الفحص مطلوبة للإقامة أكثر من 6 أشهر.", "en": "Moroccans need a visa for the UK. Morocco is on the gov.uk TB test list, so a TB certificate is needed for stays over 6 months."},
    src: "https://www.gov.uk/student-visa",
    check: true,
  },
};
