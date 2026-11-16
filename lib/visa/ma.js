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
    book: "https://pastel.diplomatie.gouv.fr/etudesenfrance",
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
    book: "https://morocco.diplomatie.belgium.be/fr/ambassade-et-consulats/ambassade-rabat/rendez-vous-en-ligne",
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
};
