// Student visa routes for residents of Tunisia. Official sources only, reviewed 21 November 2026.
// check: true = part of the route is not confirmed on an official page for Tunisia (the text says "للتحقق").
const RES = {
  ar: "إذا لم تكن تونسي الجنسية فأرفق إقامة قانونية سارية في تونس.",
  en: "If you are not a Tunisian citizen, include a valid legal residence permit for Tunisia.",
};

export const VISA_TN = {
  fr: {
    where: { ar: "Campus France تونس (إجراء Études en France إلزامي، مع مقابلة في تونس أو صفاقس أو سوسة)، ثم مركز TLScontact في تونس العاصمة أو صفاقس. القرار للقنصلية العامة الفرنسية في تونس", en: "Campus France Tunisia (Études en France is mandatory, with an interview in Tunis, Sfax or Sousse), then the TLScontact centre in Tunis or Sfax. The French Consulate General in Tunis decides" },
    steps: {
      ar: ["أنشئ حسابك على موقع Campus France تونس وملفك على منصة Études en France، وأكمل الإجراء في مواعيد الحملة (الرسوم والمواعيد على موقع Campus France تونس).", "احضر المقابلة في فضاء Campus France (تونس أو صفاقس أو سوسة).", "بعد موافقة Campus France املأ طلب التأشيرة أونلاين على France-Visas.", "احجز موعد إيداع الملف والبصمات أونلاين على موقع TLScontact (تونس أو صفاقس)، وادفع رسوم الخدمة لتأكيد الموعد."],
      en: ["Create your account on Campus France Tunisia and your file on Études en France, and complete the procedure within the campaign dates (fees and dates on Campus France Tunisia).", "Attend the interview at a Campus France office (Tunis, Sfax or Sousse).", "After Campus France's approval, fill in the visa application on France-Visas.", "Book the filing and biometrics appointment online on the TLScontact site (Tunis or Sfax), and pay the service fee to confirm it."],
    },
    note: RES,
    src: "https://france-visas.gouv.fr/tunisie",
    book: "https://www.tunisie.campusfrance.org/",
  },
  de: {
    where: { ar: "السفارة الألمانية في تونس العاصمة (القنصل الفخري في جربة لا يصدر التأشيرات)، بطلب على بوابة الخدمات القنصلية digital.diplo.de (خطوات الموعد في تونس للتحقق من موقع السفارة)", en: "The German Embassy in Tunis (the honorary consul in Djerba does not issue visas), with an application on the Consular Services Portal digital.diplo.de (appointment steps in Tunis to verify on the embassy site)" },
    steps: {
      ar: ["احصل على القبول من الجامعة الألمانية، وافتح حساباً بنكياً مغلقاً أو جهّز إثبات تمويل آخر.", "قدّم طلب تأشيرة الدراسة على digital.diplo.de وارفع الأوراق، مع ترجمة الوثائق العربية.", "احضر الموعد في السفارة بالأوراق الأصلية كاملة؛ التأشيرة تحتاج غالباً موافقة مكتب الأجانب في المدينة الألمانية."],
      en: ["Get the German university's admission, and open a blocked account or prepare another proof of funding.", "Apply for the study visa at digital.diplo.de and upload your documents, with translations of Arabic documents.", "Attend the appointment at the embassy with all original documents; the visa usually needs the approval of the foreigners' office in the German city."],
    },
    note: RES,
    src: "https://www.auswaertiges-amt.de/de/service/laender/tunesien-node/tunesien/219028",
    book: "https://digital.diplo.de/visa",
    check: true,
  },
  it: {
    where: { ar: "السفارة الإيطالية في تونس العاصمة، بعد طلب ما قبل التسجيل على بوابة Universitaly (طريقة حجز الموعد وآخر موعد للطلبات على موقع السفارة؛ في الدورة الماضية حتى 30 نوفمبر)", en: "The Italian Embassy in Tunis, after the pre-enrolment request on Universitaly (booking method and closing date on the embassy site; last cycle until 30 November)" },
    steps: {
      ar: ["قدّم طلب ما قبل التسجيل على Universitaly واختر السفارة في تونس.", "جهّز قائمة أوراق «الدراسة – التسجيل الجامعي» من موقع السفارة: الاستمارة، جواز صالح 15 شهراً على الأقل، خطاب ما قبل التسجيل بنسختين، شهادة الثانوية مترجمة للإيطالية ومعها أبوستيل وإعلان القيمة أو شهادة CIMEA، شهادة لغة B2 (أو إثبات الإنجليزية للبرامج الإنجليزية)، حجز ذهاب وعودة، سكن، تأمين صحي.", "إثبات المال: 783.06 يورو شهرياً لمدة 13 شهراً (10,179.85 يورو على الأقل) محجوزة في البنك بشكل غير قابل للإلغاء مع تحويل شهري إلى إيطاليا، إلا لمن عنده منحة حكومية إيطالية تغطي المبلغ.", "قد تستدعيك السفارة لمقابلة قصيرة. بعد الوصول أمامك 8 أيام لطلب تصريح الإقامة من الشرطة (Questura)."],
      en: ["Submit the pre-enrolment request on Universitaly and choose the embassy in Tunis.", "Prepare the embassy's \"Study – university enrolment\" checklist: form, passport valid at least 15 months, pre-enrolment letter in two copies, school-leaving certificate translated into Italian with apostille and a declaration of value or CIMEA certificate, B2 language certificate (or English proof for English-taught programmes), return booking, accommodation, health insurance.", "Proof of funds: €783.06 a month for 13 months (at least €10,179.85) irrevocably blocked at the bank with a monthly transfer to Italy, unless an Italian government grant covers it.", "The embassy may invite you to a short interview. After arrival you have 8 days to ask the police (Questura) for the residence permit."],
    },
    note: RES,
    src: "https://ambtunisi.esteri.it/wp-content/uploads/2026/07/scheda_informativa_visto_studio_immatricolazione-ENG-FRA.pdf",
    check: true,
  },
  es: {
    where: { ar: "مركز BLS International في تونس (البحيرة 1)، بعد طلب موعد مسبق بالبريد الإلكتروني من السفارة الإسبانية في تونس (العنوان على صفحة تأشيرة الدراسة)", en: "The BLS International centre in Tunis (Lac 1), after asking the Spanish Embassy in Tunis for an appointment by email (address on the study visa page)" },
    steps: {
      ar: ["اطلب موعداً بالبريد الإلكتروني كما في صفحة تأشيرة الدراسة على موقع السفارة.", "جهّز: استمارة التأشيرة الوطنية، جواز صالح طوال الإقامة (لا يُقبل جواز صدر قبل أكثر من 10 سنوات)، صورتين، خطاب القبول، إثبات دفع الرسوم الدراسية، تأميناً صحياً يغطي مثل النظام العام الإسباني (لا يُقبل تأمين السفر)، شهادة طبية، وصحيفة سوابق للإقامة أكثر من 180 يوماً.", "إثبات المال: 100% من مؤشر IPREM عن كل شهر إقامة (حساب مجمّد غير قابل للإلغاء أو كشوف آخر 3 أشهر مختومة من البنك، أو منحة).", "الوثائق التونسية بأبوستيل ومترجمة ترجمة محلفة إلى الإسبانية.", "الرسوم: 305.93 ديناراً للتأشيرة و57.45 ديناراً لخدمة BLS. مهلة القرار القانونية شهران."],
      en: ["Ask for an appointment by email as shown on the embassy's study visa page.", "Prepare: national visa form, passport valid for the whole stay (passports issued more than 10 years ago are not accepted), two photos, admission letter, proof of tuition payment, health insurance covering what the Spanish public system covers (travel insurance not accepted), a medical certificate, and a criminal record certificate for stays over 180 days.", "Proof of funds: 100% of the IPREM for each month of stay (an irrevocable blocked account, bank-stamped statements for the last 3 months, or a scholarship).", "Tunisian documents with an apostille and a sworn Spanish translation.", "Fees: TND 305.93 for the visa and TND 57.45 for the BLS service. The legal decision period is two months."],
    },
    note: RES,
    src: "https://www.exteriores.gob.es/Embajadas/tunez/fr/ServiciosConsulares/Paginas/Consular/Visado-de-estudios.aspx",
  },
  be: {
    where: { ar: "مركز TLScontact في تونس العاصمة (البحيرة 1)، بعد ملء الطلب على Visa On Web؛ القرار لسفارة بلجيكا ومكتب الأجانب في بلجيكا", en: "The TLScontact centre in Tunis (Lac 1), after filling in the application on Visa On Web; the Belgian Embassy and the Immigration Office in Belgium decide" },
    steps: {
      ar: ["املأ طلب التأشيرة D على Visa On Web واحجز الموعد في TLScontact تونس.", "جهّز قائمة أوراق «إقامة طويلة – دراسات عليا» من TLScontact تونس: شهادة التسجيل من مؤسسة معترف بها، معادلة الشهادة أو إثبات طلبها، إثبات التمويل (الحد الأدنى الشهري يتغير كل سنة)، شهادة طبية.", "صحيفة السوابق (البطاقة عدد 3) لمن تجاوز 21 سنة، مصدّقة من وزارة الخارجية التونسية ثم من قنصلية بلجيكا في تونس (التصديق عبر خدمة TLScontact).", "رسوم التأشيرة D حسب جدول السفارة (250 يورو منذ 1 يوليو 2026، للتحقق)."],
      en: ["Fill in the D visa application on Visa On Web and book the appointment at TLScontact Tunis.", "Prepare the TLScontact Tunis \"long stay – higher education\" checklist: enrolment certificate from a recognised institution, diploma equivalence or proof you applied, proof of funding (the monthly minimum changes every year), medical certificate.", "Criminal record extract (bulletin n°3) if you are over 21, legalised by the Tunisian Ministry of Foreign Affairs and then by the Belgian consulate in Tunis (legalisation through TLScontact).", "D visa fee per the embassy's table (€250 since 1 July 2026, to verify)."],
    },
    note: RES,
    src: "https://static.tlscontact.com/media/tn/tun/etudes_public_2_.pdf",
    book: "https://visas-be.tlscontact.com/",
    check: true,
  },
  tr: {
    where: { ar: "التونسيون معفون من التأشيرة لدخول تركيا حسب قائمة وزارة الخارجية التركية؛ تأشيرة الدراسة إن طلبتها الجامعة تصدر من السفارة التركية في تونس", en: "Tunisians are visa-exempt for Türkiye per the Turkish MFA list; a study visa, if the university asks for one, is issued by the Turkish Embassy in Tunis" },
    steps: {
      ar: ["احصل على خطاب القبول من الجامعة التركية.", "اسأل الجامعة: هل يكفي الدخول بالإعفاء من التأشيرة ثم طلب الإقامة، أم تطلب تأشيرة طالب من السفارة؟", "بعد الوصول والتسجيل في الجامعة قدّم طلب تصريح إقامة الطالب أونلاين على e-ikamet.goc.gov.tr وسلّم الأوراق لمكتب الطلاب الدوليين في الجامعة خلال المهلة التي تحددها."],
      en: ["Get the admission letter from the Turkish university.", "Ask the university whether visa-free entry followed by the residence permit is enough, or whether it wants a student visa from the embassy.", "After arrival and university registration, apply for the student residence permit online at e-ikamet.goc.gov.tr and hand the documents to the university's international student office within its deadline."],
    },
    note: RES,
    src: "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa?level=1",
    check: true,
  },
  ca: {
    where: { ar: "الطلب أونلاين على حساب IRCC؛ البصمات في مركز تأشيرات كندا (VFS Global) في تونس العاصمة بموعد إلزامي", en: "Apply online through an IRCC account; biometrics at the Canada visa application centre (VFS Global) in Tunis, appointment required" },
    steps: {
      ar: ["احصل على خطاب القبول من جامعة كندية معتمدة (DLI).", "جهّز إثبات المال: رسوم السنة الأولى + 23,448 دولاراً كندياً للمعيشة + السفر، مع مصدر المال.", "قدّم طلب تصريح الدراسة أونلاين وادفع الرسوم (150 + 85 دولاراً كندياً للبصمات).", "بعد وصول خطاب البصمات احجز موعداً (مجاناً) في مركز VFS بتونس، وأجرِ الكشف الطبي إن طُلب.", "بعد الموافقة تحصل على خطاب تصريح الدراسة وتأشيرة الدخول؛ التصريح يصدر عند الوصول."],
      en: ["Get an acceptance letter from a Canadian designated learning institution (DLI).", "Prepare proof of funds: first-year tuition + CAD 23,448 for living + travel, with the source of the money.", "Apply for the study permit online and pay the fees (CAD 150 + CAD 85 biometrics).", "After the biometrics letter, book a (free) appointment at the VFS centre in Tunis, and have a medical exam if asked.", "Once approved you get the port-of-entry letter and the entry visa; the permit is issued on arrival."],
    },
    note: RES,
    src: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html",
    book: "https://visa.vfsglobal.com/tun/en/can/book-an-appointment",
  },
  gb: {
    where: { ar: "مركز طلبات التأشيرة البريطانية في تونس العاصمة (الشركة المشغلة في صفحة Find a visa application centre على gov.uk، للتحقق)", en: "The UK visa application centre in Tunis (operator on gov.uk's Find a visa application centre page, to verify)" },
    steps: {
      ar: ["احصل على القبول غير المشروط من الجامعة البريطانية ورقم CAS.", "جهّز إثبات المال (رسوم السنة الأولى غير المدفوعة + 1,203 جنيهات إسترلينية في الشهر خارج لندن أو 1,570 في لندن لمدة حتى 9 أشهر) واتركه في حسابك 28 يوماً متتالية.", "تحقق من قائمة دول فحص السل (TB) على gov.uk؛ إن كانت تونس فيها فأجرِ الفحص في عيادة معتمدة.", "قدّم طلب تأشيرة الطالب أونلاين على gov.uk قبل بداية الدراسة بـ 6 أشهر على الأكثر، وادفع رسوم الطلب ورسوم الصحة IHS.", "احجز موعد البصمات في مركز التأشيرات البريطانية بتونس."],
      en: ["Get an unconditional offer and a CAS number from the UK university.", "Prepare proof of funds (unpaid first-year tuition + £1,203 a month outside London or £1,570 in London for up to 9 months) and keep it in your account for 28 consecutive days.", "Check the gov.uk TB test country list; if Tunisia is on it, take the test at an approved clinic.", "Apply for the Student visa online on gov.uk no earlier than 6 months before your course starts, and pay the application fee and the IHS.", "Book a biometrics appointment at the UK visa centre in Tunis."],
    },
    note: { ar: "التونسيون يحتاجون تأشيرة لبريطانيا.", en: "Tunisians need a visa for the UK." },
    src: "https://www.gov.uk/student-visa",
    check: true,
  },
};
