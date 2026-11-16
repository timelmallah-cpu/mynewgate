// Foundation year / Studienkolleg guide (/foundation). Official sources only; check: true = not fully confirmed (shown as "للتحقق").
// Germany: the register of the consortium of German Studienkollegs (26 March 2026), university and uni-assist pages.
// Reviewed 2026-11-16.
export const FOUND_REVIEWED = "2026-11-16";

export const FOUND_SRC = {
  register: "https://studienkollegs.de/pdfs/Contact-information-German-Studienkollegs.pdf",
  uniassist: "https://www.uni-assist.de/en/tools/glossary-of-terms/description/term/studienkolleg-preparatory-course",
  daad: "https://www.study-in-germany.com/en/plan-your-studies/requirements/prep-foundation-courses/",
  daadDb: "https://www.daad.de/en/studying-in-germany/requirements/admission-database/",
  frankfurt: "https://www.uni-frankfurt.de/38294330/FSP",
  fu: "https://fu-berlin.de/en/sites/studienkolleg/bewerbung/index.html",
  kit: "https://www.intl.kit.edu/istudies/9424.php",
  amman: "https://amman.diplo.de/blob/2593384/78f226acade599a90288887489121880/merkblatt-studium-ab-01-07-2023-data.pdf",
  cairo: "https://goethe.de/ins/ae/en/spr/klg/faq.html",
  cairoTu: "https://www.goethe.de/ins/eg/de/spr/stu/skb/nws/22069636.html",
  cairoCost: "https://www.goethe.de/ins/eg/de/spr/stu/skb/nws/26943589.html",
  debrecen: "https://edu.unideb.hu/page.php?id=172",
  debrecenInfo: "https://southasia.edu.unideb.hu/foundation-program/",
  nova: "https://www.novasbe.unl.pt/en/programs/apply/bachelors/international-students",
};

// Course types. Subjects are those listed by Goethe University Frankfurt; each Studienkolleg can differ slightly.
export const COURSES = [
  { code: "T", ar: { for: "الهندسة والرياضيات والعلوم وعلوم الحاسب", subj: "ألماني، رياضيات، معلوماتية، كيمياء، فيزياء" }, en: { for: "Engineering, mathematics, sciences and computer science", subj: "German, mathematics, computer science, chemistry, physics" } },
  { code: "M", ar: { for: "الطب والأحياء والصيدلة", subj: "ألماني، رياضيات، أحياء، كيمياء، فيزياء" }, en: { for: "Medicine, biology and pharmacy", subj: "German, mathematics, biology, chemistry, physics" } },
  { code: "W", ar: { for: "الاقتصاد وإدارة الأعمال والعلوم الاجتماعية", subj: "ألماني، رياضيات، اقتصاد، علم اجتماع أو جغرافيا" }, en: { for: "Business, economics and social sciences", subj: "German, mathematics, economics, sociology or geography" } },
  { code: "G", ar: { for: "العلوم الإنسانية", subj: "ألماني، تاريخ، أدب ألماني، علم اجتماع أو جغرافيا" }, en: { for: "Humanities", subj: "German, history, German literature, sociology or geography" } },
  { code: "S", ar: { for: "دراسة اللغات (تختلف المواد حسب الكلية التحضيرية)", subj: "حسب الكلية التحضيرية" }, en: { for: "Language studies (subjects vary by Studienkolleg)", subj: "Varies by Studienkolleg" } },
  { code: "TI / WW / SW", ar: { for: "نسخ الكورسات في كليات جامعات العلوم التطبيقية (Fachhochschule): التقنية والاقتصاد والاجتماعية", subj: "حسب الكلية التحضيرية" }, en: { for: "The universities-of-applied-sciences (Fachhochschule) versions: technical, business and social", subj: "Varies by Studienkolleg" } },
];

// State and state-recognised Studienkollegs in the consortium register (26 March 2026). uni: true = a university
// Studienkolleg (its exam opens universities and universities of applied sciences); uni: false = Fachhochschule only.
export const KOLLEGS = [
  { name: "Internationales Studienzentrum, Universität Heidelberg", city: "Heidelberg", ar: "هايدلبرغ", uni: true, courses: "M, T, W, G, S", url: "http://www.isz.uni-heidelberg.de/d_kurse_sk.html" },
  { name: "Studienkolleg / Sprachenzentrum des KIT", city: "Karlsruhe", ar: "كارلسروه", uni: true, courses: "T", url: "https://www.stk.kit.edu" },
  { name: "Studienkolleg an der HTWG Konstanz", city: "Konstanz", ar: "كونستانس", uni: false, courses: "T, W", url: "http://www.htwg-konstanz.de/StudienkollegKonstanz.107.0.html" },
  { name: "Studienkolleg bei den Universitäten des Freistaates Bayern", city: "München", ar: "ميونخ", uni: true, courses: "M, T, W, G", url: "https://studienkolleg-münchen.de" },
  { name: "Studienkolleg bei den Fachhochschulen des Freistaates Bayern", city: "Coburg", ar: "كوبورغ", uni: false, courses: "TI, WW", url: "http://www.studienkolleg-coburg.de/" },
  { name: "Internationales Studienkolleg der TU Berlin", city: "Berlin", ar: "برلين", uni: true, courses: "T, TI, W, WW", url: "https://www.studienkolleg.tu-berlin.de" },
  { name: "Studienkolleg der FU Berlin", city: "Berlin", ar: "برلين", uni: true, courses: "T, M, W, G, S", url: "https://www.fu-berlin.de/studienkolleg" },
  { name: "Studienkolleg für ausländische Studierende, Universität Hamburg", city: "Hamburg", ar: "هامبورغ", uni: true, courses: "M, T, W, G", url: "https://www.studienkolleg-hamburg.de" },
  { name: "Internationales Studienzentrum, Goethe-Universität Frankfurt", city: "Frankfurt am Main", ar: "فرانكفورت", uni: true, courses: "M, T, W, G", url: "https://www.isz.uni-frankfurt.de" },
  { name: "Studienkolleg, TU Darmstadt", city: "Darmstadt", ar: "دارمشتات", uni: true, courses: "T, G", url: "https://www.stk.tu-darmstadt.de" },
  { name: "Studienkolleg, Universität Kassel", city: "Kassel", ar: "كاسل", uni: true, courses: "T, W", url: "https://www.uni-kassel.de/einrichtung/studienkolleg" },
  { name: "Studienkolleg Mittelhessen, Universität Marburg", city: "Marburg", ar: "ماربورغ", uni: true, courses: "M, T, W, G", url: "https://www.uni-marburg.de/studienkolleg" },
  { name: "Studienkolleg, Hochschule Wismar", city: "Wismar", ar: "فيسمار", uni: true, courses: "TI, W, WW", url: "https://www.hs-wismar.de/international/aus-demausland/studienkolleg/" },
  { name: "Niedersächsisches Studienkolleg, Universität Hannover", city: "Hannover", ar: "هانوفر", uni: true, courses: "G, M, T, W", url: "https://www.stk.uni-hannover.de" },
  { name: "Studienkolleg des Ökumenischen Studienwerks", city: "Bochum", ar: "بوخوم", uni: null, courses: "T", url: "https://www.studienkolleg-bochum.de" },
  { name: "Studienkolleg Mettingen", city: "Mettingen", ar: "ميتينغن", uni: null, courses: "T, W, G, M", url: "https://www.studienkolleg-mettingen.de" },
  { name: "Internationales Studienkolleg, Universität Mainz", city: "Mainz", ar: "ماينتس", uni: true, courses: "M, T, W, G, S", url: "https://www.issk.uni-mainz.de/studienkolleg/" },
  { name: "Internationales Studienkolleg, Hochschule Kaiserslautern", city: "Kaiserslautern", ar: "كايزرسلاوترن", uni: true, courses: "TI/T, WW/W", url: "https://www.hs-kl.de/internationales-studienkolleg" },
  { name: "TUDIAS-Studienkolleg, TU Dresden", city: "Dresden", ar: "دريسدن", uni: null, courses: "M, T, W", url: "https://www.tudias.de" },
  { name: "Studienkolleg Glauchau", city: "Glauchau", ar: "غلاوخاو", uni: null, courses: "T, TI, W, WW", url: "https://www.studiencolleg-glauchau.de" },
  { name: "Studienkolleg Sachsen, Universität Leipzig", city: "Leipzig", ar: "لايبزيغ", uni: true, courses: "M, T, W, G, S", url: "https://www.uni-leipzig.de/stksachs" },
  { name: "Studienkolleg Zittau, Hochschule Zittau/Görlitz", city: "Zittau", ar: "تسيتاو", uni: false, courses: "TI, WW", url: "https://www.studienkolleg.hszg.de" },
  { name: "Studienkolleg, Universität Halle-Wittenberg", city: "Halle", ar: "هاله", uni: true, courses: "M, T, W, G, S", url: "https://www.studienkolleg.uni-halle.de" },
  { name: "Landesstudienkolleg Sachsen-Anhalt, Hochschule Anhalt", city: "Köthen", ar: "كوتن", uni: true, courses: "T, W, G", url: "https://www.hs-anhalt.de/studienkolleg" },
  { name: "Studienkolleg, FH Kiel", city: "Kiel", ar: "كيل", uni: false, courses: "TI, SW, WW", url: "https://www.fh-kiel.de/studium/studieninteressierte/studienkolleg/" },
  { name: "Staatliches Studienkolleg Nordhausen", city: "Nordhausen", ar: "نوردهاوزن", uni: true, courses: "M, T, W, G, SW", url: "https://www.hs-nordhausen.de/international/staatlichesstudienkolleg/" },
];

export const OTHERS = [
  {
    id: "cairo", country: "eg", src: FOUND_SRC.cairo, src2: FOUND_SRC.cairoTu,
    ar: {
      name: "الكلية التحضيرية في مصر (Studienkolleg Ägypten) - معهد جوته بالقاهرة مع جامعة TU Berlin",
      rows: [
        ["الكورس", "كورس T فقط (الهندسة والعلوم والرياضيات وعلوم الحاسب). الطب غير متاح."],
        ["المكان", "معهد جوته بالقاهرة في وسط البلد، والحضور إلزامي."],
        ["الألماني", "شهادة B1 قبل 30 يونيو. الهدف B2 أثناء الكورس، والجامعات تطلب C1 بعده."],
        ["القبول", "اختبار رياضيات، وربما اختبار ألماني. التقديم عن طريق uni-assist باختيار TU Berlin."],
        ["المدة", "من سبتمبر إلى يناير (الكورس الأول) ثم من فبراير إلى مايو (الكورس الثاني)."],
        ["الرسوم", "105,000 جنيه في 2022/2023 على 3 دفعات (رقم قديم، للتحقق من الرسوم الحالية)."],
        ["بعد النجاح", "امتحان Feststellungsprüfung يفتح لك التقديم على كل الجامعات الألمانية في التخصصات التقنية والعلمية. يمكنك إعادة الامتحان مرتين على الأكثر."],
        ["الميزة", "حسب معهد جوته: لا تحتاج حساباً مغلقاً لسنة الكلية التحضيرية لأنك تدرسها في مصر، ويساعدك الفريق في التأشيرة بعد النجاح."],
      ],
    },
    en: {
      name: "Studienkolleg Ägypten - Goethe-Institut Cairo with TU Berlin",
      rows: [
        ["Course", "T course only (engineering, sciences, mathematics, computer science). Medicine is not available."],
        ["Where", "Goethe-Institut Cairo, Downtown; attendance is compulsory."],
        ["German", "A B1 certificate by 30 June. The target is B2 during the course; universities require C1 afterwards."],
        ["Admission", "A mathematics test and possibly a German test. Apply through uni-assist, choosing TU Berlin."],
        ["Length", "September to January (lower course), then February to May (upper course)."],
        ["Fees", "EGP 105,000 in 2022/2023 in three instalments (an old figure; check the current fee)."],
        ["After passing", "The Feststellungsprüfung lets you apply to every German university in technical and science subjects. You can retake it at most twice."],
        ["Advantage", "Per the Goethe-Institut: no blocked account is needed for the foundation year because you study it in Egypt, and the team helps with the visa afterwards."],
      ],
    },
    check: true,
  },
  {
    id: "debrecen", country: "hu", src: FOUND_SRC.debrecen, src2: FOUND_SRC.debrecenInfo,
    ar: {
      name: "Basic Medicine Course - جامعة ديبريتسن (المجر)، بالإنجليزية",
      rows: [
        ["لمن", "لمن يريد الطب أو طب الأسنان أو الصيدلة ومستواه في الأحياء والكيمياء والفيزياء من الثانوية لا يكفي."],
        ["المدة", "سنة (فصلان من سبتمبر إلى يونيو)، أو كورس مكثف فصل واحد من يناير إلى يوليو."],
        ["الرسوم", "7,500 دولار للكورس (2026/2027)."],
        ["القبول", "اختبار مكتوب وشفهي في الأحياء والكيمياء والفيزياء."],
        ["بعد النجاح", "قبول مباشر في البرنامج الذي اخترته في الجامعة."],
      ],
    },
    en: {
      name: "Basic Medicine Course - University of Debrecen (Hungary), in English",
      rows: [
        ["For", "Applicants to medicine, dentistry or pharmacy whose school biology, chemistry and physics are not strong enough."],
        ["Length", "One year (two semesters, September to June), or an intensive one-semester course from January to July."],
        ["Fees", "USD 7,500 for the course (2026/2027)."],
        ["Admission", "Written and oral test in biology, chemistry and physics."],
        ["After passing", "Direct admission to the chosen programme at the university."],
      ],
    },
  },
  {
    id: "supernova", country: "pt", src: FOUND_SRC.nova,
    ar: {
      name: "SUPERNOVA Foundation Programme - Nova SBE (البرتغال)، بالإنجليزية",
      rows: [
        ["لمن", "للطلاب الدوليين الذين لا يستوفون شروط القبول المباشر في بكالوريوس الإدارة أو الاقتصاد أو دراسات المحيطات."],
        ["بعد النجاح", "قبول مشروط في الإدارة أو الاقتصاد إذا اجتزت البرنامج واستوفيت شروط Nova SBE."],
        ["الرسوم والمدة", "غير منشور في المصدر الذي راجعناه."],
      ],
    },
    en: {
      name: "SUPERNOVA Foundation Programme - Nova SBE (Portugal), in English",
      rows: [
        ["For", "International applicants who don't meet the direct-entry criteria for the bachelor's in Management, Economics or Ocean Studies."],
        ["After passing", "Conditional acceptance to Management or Economics once you complete the programme and meet Nova SBE's criteria."],
        ["Fees and length", "Not published in the source we checked."],
      ],
    },
  },
];

export const FOUND_TEXT = {
  ar: {
    title: "السنة التحضيرية و Studienkolleg",
    lead: "إذا كانت شهادة الثانوية لا تكفي لدخول الجامعة مباشرة، فالطريق غالباً سنة تحضيرية. هنا الكليات التحضيرية في ألمانيا (Studienkolleg) خطوة بخطوة، والكلية التحضيرية الموجودة في القاهرة، وسنوات تأسيسية بالإنجليزية في دول أخرى.",
    whatTitle: "ما هي الـ Studienkolleg؟",
    what: [
      "كلية تحضيرية مدتها سنة، تجهزك في الألماني والمواد المطلوبة لتخصصك. في نهايتها امتحان اسمه Feststellungsprüfung (FSP)، وإذا نجحت يمكنك التقديم على البكالوريوس في مجموعة التخصصات التي درستها.",
      "الكلية التحضيرية التابعة لجامعة (Universität) تفتح لك الجامعات وجامعات العلوم التطبيقية، أما التابعة لجامعة علوم تطبيقية (Fachhochschule) فتفتح لك جامعات العلوم التطبيقية فقط.",
      "الدراسة بالألمانية. لا توجد Studienkolleg حكومية بالإنجليزية.",
    ],
    egTitle: "هل تحتاجها بالثانوية العامة؟",
    eg: "حسب أدلة تنقل عن قاعدة anabin، الثانوية العامة أو الأزهرية وحدها لا تكفي لدخول الجامعة الألمانية مباشرة، والطريق Studienkolleg ثم FSP، أو سنة أو سنتان دراسة ناجحة في جامعة مصرية في تخصص قريب. تأكد من شهادتك في قاعدة بيانات DAAD أو أداة uni-assist قبل أي خطوة.",
    coursesTitle: "أنواع الكورسات",
    course: "الكورس", forWhat: "يؤهلك لـ", subjects: "المواد (مثال من فرانكفورت)",
    stepsTitle: "الخطوات",
    steps: [
      ["تأكد من شهادتك", "ابحث في قاعدة بيانات DAAD عن شهادتك، وحدد التخصص الذي تريده لأن الكورس يتحدد على أساسه."],
      ["تعلّم الألماني", "اختبار القبول فيه ألماني، وسفارات ألمانيا في المنطقة (مثل عمّان) تطلب B1 على الأقل لتأشيرة الـ Studienkolleg. بعض الكليات تطلب B2 (للتحقق مع كل كلية ومع سفارة القاهرة)."],
      ["قدّم", "أغلب الكليات الحكومية تستقبل الطلبات عن طريق uni-assist أو الجامعة التابعة لها، وليس مباشرة. مثلاً الكلية التحضيرية في FU Berlin تقبل عن طريق uni-assist فقط، من 1 يونيو إلى 15 يوليو للفصل الشتوي."],
      ["اختبار القبول (Aufnahmeprüfung)", "ألماني، ورياضيات لكورس T غالباً. الأماكن محدودة وتوزع حسب ترتيب النتيجة. في KIT مثلاً لا يمكنك دخول اختبار القبول إلا بتأشيرة دراسة."],
      ["التأشيرة", "بعد خطاب القبول أو الدعوة للاختبار تقدّم على التأشيرة ومعك الحساب المغلق. التفاصيل في صفحة التأشيرة."],
      ["سنة الدراسة ثم FSP", "سنة كاملة بحضور إلزامي، وفي آخرها امتحان FSP مرتين في السنة."],
      ["البكالوريوس", "بشهادة FSP تقدّم على البكالوريوس في مجموعة تخصصات كورسك."],
    ],
    costTitle: "التكلفة",
    cost: "الكليات التحضيرية الحكومية لا تأخذ رسوم دراسية في الغالب، وتدفع رسوم الفصل الدراسي (Semesterbeitrag) مثل طلاب الجامعة. بعض الكليات المعترف بها من الدولة خاصة وقد تأخذ رسوماً. وتحتاج حساباً مغلقاً للمعيشة مثل أي طالب في ألمانيا.",
    costCheck: " (للتحقق مع كل كلية)",
    cairoTitle: "الكلية التحضيرية في القاهرة",
    listTitle: "الكليات التحضيرية في ألمانيا",
    listLead: (n) => `${n} كلية تحضيرية حكومية أو معترف بها من الدولة حسب سجل اتحاد الكليات التحضيرية الألمانية (مارس 2026). المواعيد والشروط تختلف من كلية لأخرى، فراجع موقع كل كلية.`,
    colName: "الكلية", colCity: "المدينة", colType: "تفتح لك", colCourses: "الكورسات",
    typeUni: "الجامعات وجامعات العلوم التطبيقية", typeFh: "جامعات العلوم التطبيقية فقط", typeRec: "معترف بها من الدولة (راجع الكلية)",
    othersTitle: "سنوات تأسيسية بالإنجليزية في دول أخرى",
    source: "المصدر", source2: "مصدر إضافي", visit: "موقع الكلية",
    toCheck: " (للتحقق)",
    links: [["/school-certificate#cert-de", "هل تكفي الثانوية في كل دولة؟"], ["/visa?to=de", "تأشيرة الدراسة في ألمانيا"], ["/language", "اللغة والاختبارات"], ["/legalisation", "تصديق الأوراق"]],
    warn: "المعلومات من مصادر رسمية، لكن الشروط والمواعيد تتغير. تأكد دائماً من موقع الكلية قبل التقديم.",
    reviewed: `آخر مراجعة: ${FOUND_REVIEWED}`,
  },
  en: {
    title: "Foundation year and Studienkolleg",
    lead: "If your school certificate doesn't give direct university entry, the route is usually a foundation year. Here are Germany's preparatory colleges (Studienkolleg) step by step, the Studienkolleg in Cairo, and English-taught foundation years in other countries.",
    whatTitle: "What is a Studienkolleg?",
    what: [
      "A one-year preparatory college that prepares you in German and the subjects your field needs. It ends with the Feststellungsprüfung (FSP); passing it lets you apply for a bachelor's in the subject group you studied.",
      "A Studienkolleg at a university (Universität) opens universities and universities of applied sciences; one at a university of applied sciences (Fachhochschule) opens only universities of applied sciences.",
      "Teaching is in German. There is no state Studienkolleg in English.",
    ],
    egTitle: "Do you need one with the Thanaweya Amma?",
    eg: "Per guides quoting the anabin database, the Thanaweya Amma or Al-Azhar certificate alone does not give direct entry to German universities; the route is a Studienkolleg then the FSP, or one or two successful years at an Egyptian university in a related field. Check your certificate in the DAAD database or the uni-assist tool before anything else.",
    coursesTitle: "Course types",
    course: "Course", forWhat: "Leads to", subjects: "Subjects (Frankfurt example)",
    stepsTitle: "Steps",
    steps: [
      ["Check your certificate", "Look up your certificate in the DAAD database and decide on your field, because it decides your course."],
      ["Learn German", "The entrance test includes German, and German embassies in the region (e.g. Amman) ask for at least B1 for a Studienkolleg visa. Some colleges ask for B2 (check with each college and the embassy in Cairo)."],
      ["Apply", "Most state colleges take applications through uni-assist or their university, not directly. FU Berlin's Studienkolleg, for example, accepts only via uni-assist, 1 June - 15 July for the winter semester."],
      ["Entrance test (Aufnahmeprüfung)", "German, and usually mathematics for the T course. Places are limited and go by ranking. At KIT, for example, you can only sit the entrance test with a student visa."],
      ["Visa", "With the admission letter or the test invitation, apply for the visa with your blocked account. Details on the visa page."],
      ["The year, then the FSP", "A full year with compulsory attendance, ending with the FSP, held twice a year."],
      ["Bachelor's", "With the FSP certificate you apply for a bachelor's in your course's subject group."],
    ],
    costTitle: "Costs",
    cost: "State Studienkollegs usually charge no tuition; you pay the semester contribution (Semesterbeitrag) like university students. Some state-recognised colleges are private and may charge fees. You also need a blocked account for living costs, like any student in Germany.",
    costCheck: " (check with each college)",
    cairoTitle: "The Studienkolleg in Cairo",
    listTitle: "Studienkollegs in Germany",
    listLead: (n) => `${n} state or state-recognised Studienkollegs in the register of the consortium of German Studienkollegs (March 2026). Dates and rules differ between colleges, so check each college's site.`,
    colName: "College", colCity: "City", colType: "Opens", colCourses: "Courses",
    typeUni: "Universities and universities of applied sciences", typeFh: "Universities of applied sciences only", typeRec: "State-recognised (check with the college)",
    othersTitle: "English-taught foundation years in other countries",
    source: "Source", source2: "More", visit: "College site",
    toCheck: " (to verify)",
    links: [["/school-certificate#cert-de", "Is your school certificate enough in each country?"], ["/visa?to=de", "Student visa for Germany"], ["/language", "Languages and tests"], ["/legalisation", "Legalising documents"]],
    warn: "This information comes from official sources, but rules and dates change. Always check the college's site before applying.",
    reviewed: `Last reviewed: ${FOUND_REVIEWED}`,
  },
};
