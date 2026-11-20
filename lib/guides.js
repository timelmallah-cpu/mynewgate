// Text and official links for the practical guides: parents (/parents), Muslim student life (/muslim-life)
// and the offer checker (/check-offer). Facts carry their source; the rest is general safety advice, written as advice.
const S = (ar, en) => ({ ar, en });

// Official registers to check that a university is recognised.
export const REGISTERS = [
  { c: "gb", name: S("سجل مكتب الطلاب (OfS) في إنجلترا، وصفحة الحكومة للتحقق من الجهات التي تمنح شهادات معترفاً بها", "Office for Students Register (England) and the UK government page on recognised degree-awarding bodies"), url: "https://www.gov.uk/check-university-award-degree", note: S("إذا لم تكن الجهة في السجل فليس لها حق منح شهادة جامعية.", "If a provider is not on the register, it cannot award degrees.") },
  { c: "nl", name: S("سجل RIO وقاعدة بيانات NVAO (عن طريق Nuffic)", "RIO register and the NVAO database (via Nuffic)"), url: "https://nuffic.nl/en/education-systems/the-netherlands/educational-institutions-and-study-programmes", note: S("البرنامج غير الموجود فيهما لا تضمن جودته هيئة الاعتماد الهولندية.", "A programme not listed there is not quality-assured by the Dutch accreditation body.") },
  { c: "de", name: S("دليل الجامعات الألمانية Hochschulkompass (مؤتمر رؤساء الجامعات)", "Hochschulkompass, the German Rectors' Conference directory"), url: "https://www.hochschulkompass.de/", note: null },
  { c: "au", name: S("سجل CRICOS للجامعات والبرامج المسموح لها بقبول الطلاب الدوليين", "CRICOS register of providers and courses for international students"), url: "https://cricos.education.gov.au/", note: null },
  { c: "ca", name: S("قائمة المؤسسات التعليمية المعتمدة لقبول الطلاب الدوليين (DLI)", "List of designated learning institutions (DLI)"), url: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html", note: null },
];

export const SCAM_FLAGS = [
  { id: "pay", w: 3, q: S("يطلبون تحويل الرسوم إلى حساب شخص أو عن طريق شركة تحويل أو عملات رقمية، وليس إلى حساب الجامعة نفسها", "They ask you to pay fees to a person, a money-transfer service or crypto, not to the university's own account") },
  { id: "visa", w: 3, q: S("يضمنون لك التأشيرة أو القبول مقابل مبلغ", "They guarantee a visa or admission for a fee") },
  { id: "rush", w: 2, q: S("يضغطون عليك لتدفع خلال ساعات أو أيام قليلة", "They push you to pay within hours or a few days") },
  { id: "mail", w: 2, q: S("الرسائل تأتي من بريد عام (gmail أو hotmail) وليس من نطاق الجامعة الرسمي", "Messages come from a free email address (gmail, hotmail), not the university's official domain") },
  { id: "reg", w: 3, q: S("الجامعة غير موجودة في السجل الرسمي للدولة، أو اسمها قريب من اسم جامعة معروفة", "The university is not on the country's official register, or its name imitates a well-known one") },
  { id: "noapp", w: 2, q: S("قبول بدون أن تقدّم أوراقاً أو بدون امتحان أو مقابلة، والبرنامج يطلبها عادة", "An offer without documents, test or interview where the programme normally asks for them") },
  { id: "house", w: 2, q: S("سكن يطلب صاحبه عربوناً قبل أن تراه أو توقّع عقداً، ويقول إنه خارج البلد", "A landlord asks for a deposit before you see the place or sign a contract, and says they are abroad") },
  { id: "cheap", w: 1, q: S("السعر أقل بكثير من أسعار المدينة نفسها", "The price is far below normal for that city") },
];

export const GUIDE_TEXT = {
  ar: {
    check: {
      title: "كشف النصب: هل هذا القبول أو السكن حقيقي؟",
      lead: "اختر العلامات التي تراها في العرض الذي وصلك. هذه علامات شائعة للنصب على الطلاب، وليست حكماً نهائياً؛ تأكد دائماً من الجهة الرسمية.",
      result: (n) => (n === 0 ? "لم تختر أي علامة. تأكد مع ذلك من السجل الرسمي ومن موقع الجامعة نفسه." : n < 3 ? "علامة تحذير: لا تدفع شيئاً قبل أن تتأكد من الجامعة أو صاحب السكن مباشرة." : "علامات نصب قوية: لا تدفع، وتواصل مع الجامعة من البريد والهاتف المنشورين على موقعها الرسمي."),
      steps: "قبل أن تدفع أي مبلغ",
      stepList: [
        "ادخل موقع الجامعة بنفسك (لا من الرابط الذي وصلك) وتأكد أن البرنامج موجود وأن البريد الذي راسلك من نطاقها.",
        "اسأل مكتب القبول أو الطلاب الدوليين عن رقم الحساب البنكي الرسمي للرسوم، وقارنه بالذي وصلك.",
        "تأكد أن الجامعة في السجل الرسمي للدولة (القائمة تحت).",
        "لا ترسل صور جوازك أو مستنداتك لجهة لم تتأكد منها.",
        "في السكن: لا تدفع عربوناً قبل أن ترى المكان أو عقداً موقّعاً، وفضّل سكن الجامعة أو المواقع التي تنصح بها.",
      ],
      registers: "سجلات رسمية للتأكد من الجامعة", housing: "تحذيرات السكن", ours: "كل البرامج في دليلنا من جامعات حكومية؛ ابحث عن الجامعة هنا أيضاً",
    },
    parents: {
      title: "دليل أولياء الأمور",
      lead: "لأولياء أمور الطلاب العرب: كم تكلف الدراسة فعلاً، وكيف يُثبت المال وينتقل، وكيف تتأكد أن الجامعة حكومية ومعترف بها.",
      costT: "التكلفة الحقيقية", cost: "التكلفة ليست الرسوم الدراسية فقط: المعيشة كل شهر، والتأمين الصحي، ورسوم التأشيرة والإقامة. في صفحة كل برنامج سطر «التكلفة الكاملة التقديرية»، وفي «خطتي في دقيقة» تراها بعملة بلدك.",
      costLinks: [["/my-plan", "خطتي في دقيقة"], ["/compare-countries", "مقارنة بين دولتين"], ["/earnings", "هل يكفي العمل لمصاريفه؟"]],
      proofT: "إثبات المال للتأشيرة", proof: "أغلب الدول تطلب أن يثبت الطالب أن معه مبلغاً محدداً للمعيشة قبل التأشيرة. المبلغ لكل دولة في صفحة التأشيرة وصفحة الدولة.",
      blockedT: "الحساب المغلق في ألمانيا (Sperrkonto)", blocked: "في ألمانيا يُثبت المال غالباً بحساب مغلق: يُودَع فيه 11,904 يورو للسنة، ولا يسحب الطالب منه إلا 992 يورو شهرياً. تختار مقدم الخدمة بنفسك وتدفع رسومه، والخارجية الألمانية لا توصي بمقدم معين، وتنشر قائمة بمقدمي الخدمة.", blockedSrc: "https://www.auswaertiges-amt.de/en/sperrkonto/388600",
      payT: "دفع الرسوم بأمان", pay: ["ادفع الرسوم الدراسية إلى حساب الجامعة نفسها بالاسم الرسمي للجامعة، كما يظهر في خطاب القبول أو على موقعها.", "احتفظ بإيصال التحويل وخطاب القبول؛ ستحتاجهما للتأشيرة.", "لا تدفع لوسيط يعدكم بقبول أو تأشيرة مضمونة."],
      verifyT: "هل الجامعة حكومية ومعترف بها؟", verify: "كل البرامج على موقعنا من جامعات حكومية مفتوحة للطلاب العرب. للتأكد من أي جامعة أخرى استخدم السجل الرسمي للدولة:",
      visa: "طرق التأشيرة من بلدك",
    },
    muslim: {
      title: "الحياة كطالب مسلم في الخارج",
      lead: "نصائح عملية للصلاة والطعام الحلال ورمضان أثناء الدراسة.",
      ramadanT: "رمضان 2027 والامتحانات", ramadan: "بحسب الحسابات الفلكية لمركز الفلك الدولي، يُتوقع أن يبدأ رمضان 1448 يوم الاثنين 8 فبراير 2027، وأن يكون عيد الفطر في 9 أو 10 مارس 2027، والموعد النهائي حسب رؤية الهلال. هذه الفترة قد تكون فترة امتحانات أو بداية فصل في جامعات كثيرة؛ راجع التقويم الأكاديمي لجامعتك مبكراً.",
      ramadanSrc: "https://www.khaleejtimes.com/uae/ramadan-eid-al-fitr-eid-al-adha-2027-likely-dates",
      prayT: "الصلاة", pray: ["اسأل مكتب الطلاب الدوليين أو اتحاد الطلاب: هل في الحرم غرفة صلاة أو غرفة هادئة؟", "ابحث عن جمعية الطلاب المسلمين في جامعتك؛ غالباً تعرف أقرب مسجد وأوقات صلاة الجمعة.", "إذا تعارضت محاضرة مع صلاة الجمعة أو امتحان مع العيد، تكلم مع الأستاذ أو مكتب الامتحانات مبكراً."],
      foodT: "الطعام الحلال", food: ["في المدن الكبيرة توجد عادة محلات ولحوم حلال؛ اسأل جمعية الطلاب المسلمين عن أماكن موثوقة.", "اقرأ مكونات المنتجات (الجيلاتين ودهون الحيوانات)، واختر البدائل النباتية أو السمك عند الشك.", "مطاعم الجامعة كثيراً ما تعلن عن خيارات نباتية؛ اسأل عن خيار حلال إذا لم تجده."],
      note: "هذه نصائح عامة، والمعلومة عن جامعتك ومدينتك تجدها عند مكتب الطلاب الدوليين وجمعية الطلاب المسلمين هناك.",
    },
    first: {
      title: "أول أسبوع بعد الوصول",
      lead: "الخطوات الرسمية بالترتيب بعد أن تصل: تسجيل السكن، والإقامة، والحساب البنكي، والتأمين الصحي، وغيرها. بدأنا بست دول، ونضيف الباقي تباعاً.",
      other: "لدول أخرى: مكتب الطلاب الدوليين في جامعتك يرسل لك قائمة الخطوات قبل الوصول.", src: "المصدر",
    },
    reviewed: (d) => `آخر مراجعة: ${d}.`,
  },
  en: {
    check: {
      title: "Scam check: is this offer or room real?",
      lead: "Tick the signs you see in the offer you received. These are common signs of scams targeting students, not a final verdict; always confirm with the official body.",
      result: (n) => (n === 0 ? "No signs ticked. Still check the official register and the university's own website." : n < 3 ? "Warning: don't pay anything until you have confirmed directly with the university or landlord." : "Strong scam signs: don't pay, and contact the university through the email and phone on its official website."),
      steps: "Before you pay anything",
      stepList: [
        "Open the university's website yourself (not from the link you received), check the programme exists and the email came from its domain.",
        "Ask the admissions or international office for the official bank account for fees and compare it with the one you got.",
        "Check the university is on the country's official register (list below).",
        "Don't send copies of your passport or documents to anyone you haven't verified.",
        "For housing: never pay a deposit before seeing the place or signing a contract; prefer university housing or sites it recommends.",
      ],
      registers: "Official registers to check a university", housing: "Housing warnings", ours: "All programmes in our guide are at public universities; search for the university here too",
    },
    parents: {
      title: "A guide for parents",
      lead: "For parents of Arab students: what studying really costs, how money is proven and moved, and how to check a university is public and recognised.",
      costT: "The real cost", cost: "Cost is not just tuition: living costs every month, health insurance, visa and residence fees. Every programme page has an \"estimated full cost\" line, and \"My plan in a minute\" shows it in your currency.",
      costLinks: [["/my-plan", "My plan in a minute"], ["/compare-countries", "Country vs country"], ["/earnings", "Can work cover living costs?"]],
      proofT: "Proof of funds for the visa", proof: "Most countries ask the student to prove a set amount for living costs before the visa. The amount for each country is on the visa and country pages.",
      blockedT: "Germany's blocked account (Sperrkonto)", blocked: "In Germany funds are usually proven with a blocked account: €11,904 a year is paid in and the student can withdraw only €992 a month. You choose the provider and pay its fees; the Federal Foreign Office does not recommend any provider and publishes a list of them.", blockedSrc: "https://www.auswaertiges-amt.de/en/sperrkonto/388600",
      payT: "Paying fees safely", pay: ["Pay tuition into the university's own account in its official name, as shown in the offer letter or on its website.", "Keep the transfer receipt and the offer letter; the visa needs them.", "Don't pay an agent who promises guaranteed admission or a visa."],
      verifyT: "Is the university public and recognised?", verify: "All programmes on our site are at public universities open to Arab students. To check any other university, use the country's official register:",
      visa: "Visa routes from your country",
    },
    muslim: {
      title: "Life as a Muslim student abroad",
      lead: "Practical tips on prayer, halal food and Ramadan while studying.",
      ramadanT: "Ramadan 2027 and exams", ramadan: "According to the International Astronomical Center's calculations, Ramadan 1448 is expected to begin on Monday 8 February 2027, with Eid al-Fitr on 9 or 10 March 2027; the final date depends on moon sighting. That period can fall in exam season or at the start of a semester at many universities, so check your university's academic calendar early.",
      ramadanSrc: "https://www.khaleejtimes.com/uae/ramadan-eid-al-fitr-eid-al-adha-2027-likely-dates",
      prayT: "Prayer", pray: ["Ask the international office or students' union whether there is a prayer room or quiet room on campus.", "Look for the Muslim students' society at your university; it usually knows the nearest mosque and Friday prayer times.", "If a lecture clashes with Friday prayer or an exam with Eid, talk to the lecturer or exams office early."],
      foodT: "Halal food", food: ["Big cities usually have halal shops and butchers; ask the Muslim students' society for trusted places.", "Read ingredient lists (gelatine, animal fats) and choose vegetarian or fish options when unsure.", "University canteens often label vegetarian options; ask for a halal option if you don't see one."],
      note: "These are general tips; for your own university and city, ask the international office and the Muslim students' society there.",
    },
    first: {
      title: "Your first week after arrival",
      lead: "The official steps, in order, after you arrive: registering your address, residence permit, bank account, health insurance and more. We started with six countries and will add the rest.",
      other: "For other countries: your university's international office sends you the steps before you arrive.", src: "Source",
    },
    reviewed: (d) => `Last reviewed: ${d}.`,
  },
};
