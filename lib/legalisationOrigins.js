// Legalisation guides for residents of other Arab countries. Egypt's guide stays in legalisationText.js.
// Reviewed 16 November 2026, official sources only.
export const LEGAL_ORIGIN = {
  sa: {
    ar: {
      title: "تصديق الأوراق السعودية وترجمتها",
      lead: "السعودية عضو في اتفاقية لاهاي للأبوستيل منذ 7 ديسمبر 2022. معنى ذلك أن ختم «الأبوستيل» من وزارة الخارجية السعودية يكفي غالباً، ولا تحتاج تصديق سفارة الدولة الأوروبية بعده.",
      apostilleTitle: "ما هو الأبوستيل؟",
      apostille: "شهادة تضعها وزارة الخارجية السعودية على الوثيقة الرسمية تؤكد صحة التوقيع والختم، وتقبلها كل الدول الأعضاء في الاتفاقية، ومنها كل الدول الأوروبية على موقعنا. سفارة المجر في الرياض مثلاً تذكر أن الوثائق السعودية المصدقة بالأبوستيل لا تحتاج تصديقاً إضافياً منها.",
      steps: [
        ["جهّز الوثيقة الأصلية", "الشهادة أو كشف الدرجات أو شهادة الميلاد كما صدرت من الجهة الرسمية."],
        ["قدّم طلب الأبوستيل على موقع وزارة الخارجية", "من خدمات التصديق اختر «أبوستيل»، ثم «إنشاء طلب أبوستيل»، واملأ بياناتك وارفع الوثيقة وأرسل الطلب."],
        ["تحقق من الأبوستيل", "كل الأبوستيلات السعودية متاحة للتحقق في السجل الإلكتروني لوزارة الخارجية، ويمكن للجامعة أو السفارة التحقق منها هناك."],
        ["الترجمة", "ترجم الوثيقة حسب طلب الجامعة أو السفارة. بعض الدول تطلب مترجماً محلّفاً في الدولة نفسها، مثل إسبانيا."],
      ],
      translate: [
        "اقرأ شرط الترجمة في صفحة الجامعة وقائمة أوراق التأشيرة قبل أن تترجم.",
        "كثير من الجامعات تقبل الوثائق بالإنجليزية مباشرة إذا صدرت بالإنجليزية.",
        "إذا طُلبت ترجمة محلّفة في الدولة الأوروبية فلا تكفي ترجمة مكتب في السعودية.",
      ],
      tips: [
        "ضع الأبوستيل على الأصل، ثم صوّر الوثيقة بعد ختمها.",
        "غير السعوديين: الوثائق الصادرة من بلدك الأصلي (مثل شهادة الثانوية من بلدك) تُصدَّق في ذلك البلد وليس في السعودية.",
        "الجامعة أو السفارة قد تطلب شيئاً إضافياً، فاسأل قبل أن تبدأ.",
      ],
      check: ["الشهادة الجامعية أو شهادة الثانوية بالأبوستيل", "كشف الدرجات بالأبوستيل", "شهادة الميلاد (إذا طُلبت)", "شهادة خلو السوابق (إذا طُلبت)", "الترجمات المطلوبة"],
    },
    en: {
      title: "Legalising and translating Saudi documents",
      lead: "Saudi Arabia has been a member of the Hague Apostille Convention since 7 December 2022. An apostille from the Saudi Ministry of Foreign Affairs is usually enough, with no further legalisation by the European embassy.",
      apostilleTitle: "What is an apostille?",
      apostille: "A certificate the Saudi MOFA places on a public document confirming the signature and seal. Every member state accepts it, including all the European countries on this site. The Hungarian Embassy in Riyadh, for example, states that apostilled Saudi documents need no further legalisation by the embassy.",
      steps: [
        ["Prepare the original document", "The certificate, transcript or birth certificate as issued by the official body."],
        ["Request the apostille on the MOFA website", "In the ratification services choose \"Apostille\", then \"Create apostille request\", fill in your details, upload the document and submit."],
        ["Verify the apostille", "All Saudi apostilles can be verified in MOFA's e-Register, where a university or embassy can check them."],
        ["Translation", "Translate the document as the university or embassy requires. Some countries, such as Spain, ask for a sworn translator in that country."],
      ],
      translate: [
        "Check the translation rule on the university page and the visa checklist before translating.",
        "Many universities accept documents issued in English as they are.",
        "If a sworn translation in the European country is required, a translation office in Saudi Arabia is not enough.",
      ],
      tips: [
        "Apostille the original, then copy the document after it is stamped.",
        "Non-Saudis: documents issued in your home country (such as your school certificate) are certified in that country, not in Saudi Arabia.",
        "A university or embassy may ask for more, so ask before you start.",
      ],
      check: ["Degree or school certificate with apostille", "Transcript with apostille", "Birth certificate (if required)", "Police certificate (if required)", "Required translations"],
    },
    src: [
      { name: "سفارة المجر في الرياض: طلب الأبوستيل", en: "Hungarian Embassy Riyadh: requesting the apostille", url: "https://rijad.mfa.gov.hu/en/authenticationlegalisation-services" },
      { name: "سفارة بلجيكا في الرياض: انضمام السعودية للاتفاقية", en: "Belgian Embassy Riyadh: Saudi accession", url: "https://saudiarabia.diplomatie.belgium.be/en/legalisation-documents" },
    ],
    links: [["https://services.mofa.gov.sa/Ratification/RatificationInquiry/Inquiry", { ar: "خدمة الأبوستيل في وزارة الخارجية", en: "MOFA apostille service" }], ["https://ratification.mofa.gov.sa/ApostilleRatification/Search", { ar: "التحقق من الأبوستيل", en: "Verify an apostille" }]],
  },
  ma: {
    ar: {
      title: "تصديق الأوراق المغربية وترجمتها",
      lead: "المغرب عضو في اتفاقية لاهاي للأبوستيل، فيكفي ختم «الأبوستيل» من الجهة المغربية المختصة، ولا تحتاج تصديق وزارة الخارجية ولا سفارة الدولة الأوروبية بعده.",
      apostilleTitle: "من يضع الأبوستيل في المغرب؟",
      apostille: "حسب ردود المغرب الرسمية لمؤتمر لاهاي: للوثائق القضائية مسؤولو المحاكم الابتدائية ومحاكم الاستئناف ومحكمة النقض ووزارة العدل، وللوثائق الإدارية السلطات المحلية في العمالات والأقاليم التابعة لوزارة الداخلية. الأبوستيل مجاني، ويُوضع مباشرة على الوثيقة الأصلية، ويصدر غالباً في اليوم نفسه، ولا يوجد أبوستيل إلكتروني حالياً.",
      steps: [
        ["جهّز الوثيقة الأصلية", "شهادة البكالوريا أو الشهادة الجامعية أو كشف النقط أو عقد الازدياد كما صدرت. الأبوستيل على نسخة مصورة لا قيمة له."],
        ["اعرف الجهة المختصة", "الوثائق الإدارية في العمالة أو الإقليم، والوثائق القضائية والعدلية والتوثيقية في المحكمة الابتدائية. تأكد من الجهة الخاصة بوثيقتك على موقع apostille.ma قبل الذهاب (للتحقق)."],
        ["قدّم الوثيقة بنفسك", "الطلب حضوري، والأبوستيل مجاني ويصدر في اليوم نفسه غالباً."],
        ["الترجمة", "ترجم الوثيقة حسب طلب الجامعة أو السفارة. إسبانيا مثلاً تطلب ترجمة محلّفة، وفرنسا تقبل وثائق كثيرة بالفرنسية."],
      ],
      translate: [
        "إذا كانت الوثيقة بالفرنسية فكثير من الجامعات في فرنسا وبلجيكا تقبلها كما هي.",
        "اقرأ شرط الترجمة في صفحة الجامعة وقائمة أوراق التأشيرة قبل أن تترجم.",
        "إذا طُلبت ترجمة محلّفة في الدولة الأوروبية فلا تكفي ترجمة مكتب في المغرب.",
      ],
      tips: [
        "مع إسبانيا وفرنسا توجد اتفاقيات ثنائية تعفي بعض الوثائق من التصديق أصلاً، فاسأل الجهة التي ستقدم لها.",
        "إيطاليا تطلب عادةً إقرار القيمة أو بيان CIMEA للشهادة بالإضافة إلى الأبوستيل والترجمة.",
        "الجامعة أو السفارة قد تطلب شيئاً إضافياً، فاسأل قبل أن تبدأ.",
      ],
      check: ["شهادة البكالوريا أو الشهادة الجامعية بالأبوستيل", "كشف النقط بالأبوستيل", "عقد الازدياد (إذا طُلب)", "السجل العدلي (إذا طُلب)", "الترجمات المطلوبة"],
    },
    en: {
      title: "Legalising and translating Moroccan documents",
      lead: "Morocco is a member of the Hague Apostille Convention, so an apostille from the competent Moroccan authority is enough, with no MFA step and no European embassy legalisation afterwards.",
      apostilleTitle: "Who issues the apostille in Morocco?",
      apostille: "According to Morocco's official answers to the Hague Conference: for judicial documents, officials of the courts of first instance, courts of appeal, the Court of Cassation and the Ministry of Justice; for administrative documents, the local authorities of the provinces and prefectures under the Ministry of the Interior. The apostille is free, placed directly on the original, usually issued the same day, and there is no e-Apostille yet.",
      steps: [
        ["Prepare the original document", "Your Baccalauréat, degree, transcript or birth certificate as issued. An apostille on a photocopy has no value."],
        ["Find the competent authority", "Administrative documents at the prefecture or province; judicial, adoul and notarial documents at the court of first instance. Check the right office for your document on apostille.ma before you go (to verify)."],
        ["Apply in person", "Requests are in person; the apostille is free and usually issued the same day."],
        ["Translation", "Translate as the university or embassy requires. Spain, for example, asks for a sworn translation; France accepts many documents in French."],
      ],
      translate: [
        "Documents in French are often accepted as they are by universities in France and Belgium.",
        "Check the translation rule on the university page and the visa checklist before translating.",
        "If a sworn translation in the European country is required, a translation office in Morocco is not enough.",
      ],
      tips: [
        "Bilateral agreements with Spain and France exempt some documents from legalisation altogether, so ask the body you are applying to.",
        "Italy usually asks for a declaration of value or CIMEA statement on top of the apostille and translation.",
        "A university or embassy may ask for more, so ask before you start.",
      ],
      check: ["Baccalauréat or degree with apostille", "Transcript with apostille", "Birth certificate (if required)", "Criminal record (if required)", "Required translations"],
    },
    src: [
      { name: "مؤتمر لاهاي: السلطات المختصة في المغرب", en: "HCCH: Morocco's competent authorities", url: "https://www.hcch.net/fr/states/authorities/details3?aid=1044" },
      { name: "ردود المغرب على استبيان الأبوستيل (2021)", en: "Morocco's answers to the Apostille questionnaire (2021)", url: "https://assets.hcch.net/docs/7a7b8c62-e93e-4fe8-a84c-0d74af1abca1.pdf" },
    ],
    links: [["http://www.apostille.ma/", { ar: "الموقع الرسمي للأبوستيل في المغرب", en: "Morocco's official apostille site" }]],
  },
};

export const LEGAL_ORIGIN_UI = {
  ar: { steps: "الترتيب خطوة بخطوة", translate: "الترجمة", tips: "قبل أن تبدأ", check: "قائمة الأوراق", links: "روابط رسمية", src: "المصادر الرسمية", showEg: "عرض دليل الأوراق المصرية", reviewed: "آخر مراجعة: 16 نوفمبر 2026", disclaimer: "الإجراءات تتغير. راجع المصدر الرسمي قبل الذهاب." },
  en: { steps: "Step by step", translate: "Translation", tips: "Before you start", check: "Document checklist", links: "Official links", src: "Official sources", showEg: "Show the guide for Egyptian documents", reviewed: "Last reviewed: 16 November 2026", disclaimer: "Procedures change. Check the official source before you go." },
};
