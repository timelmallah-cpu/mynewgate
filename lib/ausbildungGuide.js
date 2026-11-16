// Germany Ausbildung guide: sectors, pay by profession, where to find a place, programmes for Arab
// countries, and the application steps. Official sources only (BIBB, Federal Employment Agency, Make it in
// Germany, German Embassy Cairo, GIZ). Items with check: true are not from an official source or need
// confirmation. Reviewed 2026-11-15.

export const SRC = {
  bibb: "https://www.bibb.de/dokumente/pdf/2025_Dav-Gesamt%C3%BCbersicht_Ausbildungsverg%C3%BCtungen_Bundesgebiet.pdf",
  bibbPress: "https://www.bibb.de/de/pressemitteilung_218108.php",
  nurse: "https://www.make-it-in-germany.com/en/study-vocational-training/training-in-germany/profiles/clinical-nurse",
  nurseWork: "https://www.make-it-in-germany.com/en/jobs/professions-in-demand/nursing",
  profiles: "https://www.make-it-in-germany.com/en/study-vocational-training/training-in-germany/profiles",
  find: "https://www.make-it-in-germany.com/de/studium-ausbildung/ausbildung-in-deutschland/finden",
  ba: "https://web.arbeitsagentur.de/ausbildungssuche/berufsausbildung-suche",
  jobs: "https://www.arbeitsagentur.de/jobsuche/?angebotsart=4",
  miigJobs: "https://www.make-it-in-germany.com/de/arbeiten-in-deutschland/jobboerse/ausbildung",
  berufenet: "https://web.arbeitsagentur.de/berufenet/",
  ihk: "https://www.ihk.de/themen/ausbildung/ihk-lehrstellenboerse",
  hwk: "https://www.lehrstellen-radar.de",
  cairo: "https://kairo.diplo.de/resource/blob/2696788/b1cbf7bef7b13a8b6b3b75014f1d5e90/250122-aufnahme-einer-ausbildung-oder-ausbildungsplatzsuche-deu-data.pdf",
  visaPdf: "https://www.make-it-in-germany.com/fileadmin/1_Rebrush_2022/a_Fachkraefte/PDF-Dateien/3_Visum_u_Aufenthalt/Visagrafik_EN/Visum_Absolvierung_Berufsausbildung_EN.pdf",
  employers: "https://www.make-it-in-germany.com/fileadmin/1_Rebrush_2022/b_Arbeitgeber/PDF-Dateien/Recruiting_international_trainees_2026_EN.pdf",
  thamm: "https://www.arbeitsagentur.de/vor-ort/zav/projects-programs/crafts-technology-construction/thamm-plus/technik",
  egc: "https://kairo.diplo.de/eg-de/2698696-2698696",
  start: "https://www.arbeitsagentur.de/bildung/datei/checkliste-last-minute-ausbildungplatz_ba023785.pdf",
  medTech: "https://www.make-it-in-germany.com/en/study-vocational-training/training-in-germany/in-demand/medical-orthopaedic-rehabilitation-technology",
};

// Pay rows: [German name, Arabic, English, months, [year 1, 2, 3, 4], area]. BIBB average collectively agreed
// training allowance in Germany as a whole, gross per month, as of 1 October 2025. Area: IH = industry and trade,
// Hw = crafts, FB = liberal professions (practices), Lw = agriculture.
const P = (de, ar, en, m, pay, area) => ({ de, ar, en, months: m, pay, area });

export const SECTORS = [
  {
    slug: "health",
    icon: "🩺",
    ar: { name: "الصحة والتمريض", short: "التمريض ومساعد الطبيب ومساعد طبيب الأسنان. أعلى طلب على العمالة الأجنبية.", },
    en: { name: "Health and nursing", short: "Nursing, medical assistant and dental assistant. The highest demand for foreign trainees." },
    jobs: [
      P("Medizinische/-r Fachangestellte/-r", "مساعد/ة طبي/ة في العيادات", "Medical assistant", 36, [1023, 1115, 1209], "FB"),
      P("Zahnmedizinische/-r Fachangestellte/-r", "مساعد/ة طبيب أسنان", "Dental assistant", 36, [1021, 1115, 1213], "FB"),
    ],
    extra: {
      ar: {
        title: "التمريض (Pflegefachfrau / Pflegefachmann)",
        rows: [
          ["المدة", "3 سنوات. أول سنتين تمريض عام، وقبل السنة الثالثة تختار: تمريض عام أو رعاية المسنين أو تمريض الأطفال."],
          ["الشهادة", "شهادة التمريض العام معترف بها في كل دول الاتحاد الأوروبي."],
          ["الشهادة المدرسية", "شهادة إتمام المرحلة المتوسطة على الأقل."],
          ["الألمانية", "B1 أو B2 حسب الولاية."],
          ["شروط أخرى", "شهادة طبية من طبيب في ألمانيا بأنك لائق للمهنة، وصحيفة حالة جنائية."],
          ["الراتب", "لا يدخل في جدول BIBB لأنه منظم بقانون خاص. في القطاع العام (اتفاقية TVAöD-Pflege) من 1 مايو 2026: 1,490.69 يورو في السنة الأولى، و1,552.07 في الثانية، و1,653.38 في الثالثة شهرياً (للتحقق)."],
          ["بعد التدريب", "تخصصات متقدمة (عناية مركزة، جراحة...) أو بكالوريوس في التمريض أثناء العمل."],
        ],
      },
      en: {
        title: "Nursing (Pflegefachfrau / Pflegefachmann)",
        rows: [
          ["Length", "3 years. The first two years are general nursing; before year 3 you choose general nursing, geriatric care or paediatric nursing."],
          ["Qualification", "The general nursing qualification is recognised throughout the EU."],
          ["School certificate", "At least an intermediate school-leaving certificate."],
          ["German", "B1 or B2 depending on the federal state."],
          ["Other", "A certificate from a doctor in Germany that you are fit for the profession, and a criminal record certificate."],
          ["Pay", "Not in the BIBB table because nursing is regulated by its own law. In the public sector (TVAöD-Pflege) from 1 May 2026: €1,490.69 in year 1, €1,552.07 in year 2 and €1,653.38 in year 3 a month (to verify)."],
          ["After", "Specialist nursing (intensive care, surgery...) or a nursing bachelor's alongside work."],
        ],
      },
      src: "https://www.make-it-in-germany.com/en/study-vocational-training/training-in-germany/profiles/clinical-nurse",
    },
  },
  {
    slug: "hospitality",
    icon: "🍳",
    ar: { name: "الفنادق والمطاعم", short: "الطبخ والفنادق وخدمة المطاعم. مسار شائع للشباب العرب في التدريب المهني." },
    en: { name: "Hotels and restaurants", short: "Cooking, hotels and restaurant service. A common route for young Arab trainees." },
    jobs: [
      P("Koch/Köchin", "طاهٍ (شيف)", "Cook", 36, [1120, 1233, 1346], "IH"),
      P("Hotelfachmann/-frau", "موظف/ة فندقي/ة", "Hotel specialist", 36, [1112, 1231, 1347], "IH"),
      P("Fachmann/-frau für Restaurants und Veranstaltungsgastronomie", "خدمة المطاعم والفعاليات", "Restaurant and events specialist", 36, [1099, 1220, 1332], "IH"),
      P("Fachkraft für Gastronomie", "عامل/ة مؤهل/ة في المطاعم (سنتان)", "Hospitality worker (2 years)", 24, [1114, 1224], "IH"),
    ],
  },
  {
    slug: "electrical-technical",
    icon: "⚡",
    ar: { name: "الكهرباء والميكانيكا", short: "الكهرباء والميكاترونكس وميكانيكا السيارات والسباكة والتكييف. من أعلى رواتب التدريب." },
    en: { name: "Electrical and mechanical", short: "Electronics, mechatronics, car mechanics, plumbing and air conditioning. Among the best-paid training." },
    jobs: [
      P("Elektroniker/-in für Betriebstechnik", "فني كهرباء صناعية", "Industrial electronics technician", 42, [1227, 1310, 1401, 1498], "IH"),
      P("Elektroniker/-in (alle Fachrichtungen)", "فني كهرباء (في الحِرف)", "Electronics technician (crafts)", 42, [979, 1050, 1125, 1201], "Hw"),
      P("Mechatroniker/-in", "فني ميكاترونكس", "Mechatronics technician", 42, [1224, 1297, 1387, 1472], "IH"),
      P("Industriemechaniker/-in", "ميكانيكي صناعي", "Industrial mechanic", 42, [1221, 1287, 1375, 1452], "IH"),
      P("Kraftfahrzeugmechatroniker/-in", "ميكانيكي سيارات (في المصانع والشركات)", "Car mechatronics technician (industry)", 42, [1202, 1276, 1384, 1463], "IH"),
      P("Kraftfahrzeugmechatroniker/-in", "ميكانيكي سيارات (في الورش)", "Car mechatronics technician (workshops)", 42, [1090, 1148, 1222, 1285], "Hw"),
      P("Anlagenmechaniker/-in für Sanitär-, Heizungs- und Klimatechnik", "فني سباكة وتدفئة وتكييف (في الشركات)", "Plumbing, heating and air-con technician (industry)", 42, [1270, 1348, 1445, 1535], "IH"),
      P("Anlagenmechaniker/-in für Sanitär-, Heizungs- und Klimatechnik", "فني سباكة وتدفئة وتكييف (في الورش)", "Plumbing, heating and air-con technician (workshops)", 42, [927, 986, 1071, 1140], "Hw"),
    ],
  },
  {
    slug: "it-office-retail",
    icon: "💻",
    ar: { name: "المعلوماتية والمكاتب والتجارة", short: "متخصص معلوماتية والإدارة المكتبية والبيع. يحتاج ألمانية جيدة للتعامل مع العملاء." },
    en: { name: "IT, office and retail", short: "IT specialist, office management and sales. Needs good German for dealing with customers." },
    jobs: [
      P("Fachinformatiker/-in", "متخصص/ة معلوماتية (برمجة وأنظمة وشبكات)", "IT specialist", 36, [1211, 1279, 1356], "IH"),
      P("Kaufmann/-frau für Büromanagement", "إدارة مكتبية", "Office management assistant", 36, [1161, 1245, 1342], "IH"),
      P("Kaufmann/-frau im Einzelhandel", "تجارة التجزئة", "Retail salesperson", 36, [1087, 1195, 1328], "IH"),
      P("Verkäufer/-in", "بائع/ة (سنتان)", "Sales assistant (2 years)", 24, [1084, 1195], "IH"),
    ],
  },
  {
    slug: "construction-crafts",
    icon: "🧱",
    ar: { name: "البناء والحِرف والمخابز", short: "البناء والأسطح والدهان والنجارة والخبز والجزارة والحلاقة. بعض الحِرف رواتبها أقل." },
    en: { name: "Construction, crafts and bakeries", short: "Masonry, roofing, painting, carpentry, baking, butchery and hairdressing. Some crafts pay less." },
    jobs: [
      P("Maurer/-in", "بنّاء", "Bricklayer", 36, [1079, 1286, 1533], "Hw"),
      P("Dachdecker/-in", "فني أسطح", "Roofer", 36, [1002, 1155, 1403], "Hw"),
      P("Maler/-in und Lackierer/-in", "دهان", "Painter and varnisher", 36, [868, 961, 1127], "Hw"),
      P("Tischler/-in", "نجار", "Carpenter (joiner)", 36, [827, 964, 1085], "Hw"),
      P("Bäcker/-in", "خباز", "Baker", 36, [1021, 1091, 1232], "Hw"),
      P("Fleischer/-in", "جزار", "Butcher", 36, [1031, 1138, 1276], "Hw"),
      P("Friseur/-in", "حلاق/ة", "Hairdresser", 36, [623, 723, 857], "Hw"),
    ],
  },
  {
    slug: "logistics",
    icon: "🚚",
    ar: { name: "النقل والمخازن", short: "لوجستيات المخازن والسائق المحترف. طلب مستمر في ألمانيا." },
    en: { name: "Transport and warehouses", short: "Warehouse logistics and professional driver. Steady demand in Germany." },
    jobs: [
      P("Fachkraft für Lagerlogistik", "متخصص/ة لوجستيات المخازن", "Warehouse logistics specialist", 36, [1171, 1247, 1330], "IH"),
      P("Berufskraftfahrer/-in", "سائق محترف", "Professional driver", 36, [1114, 1200, 1290], "IH"),
    ],
  },
];

// Link to the Federal Employment Agency job search for current training places in one occupation
// ("angebotsart=4" = Ausbildung). The German name is shortened to its main form, e.g. "Koch/Köchin" -> "Koch".
const TERM = { "Anlagenmechaniker/-in für Sanitär-, Heizungs- und Klimatechnik": "Anlagenmechaniker" };
export const searchTerm = (de) => TERM[de] || de.replace(/\/-?[\p{L}]+/gu, "").replace(/\s*\([^)]*\)/g, "").replace(/\s+/g, " ").trim();
export const jobSearchUrl = (de) => `https://www.arbeitsagentur.de/jobsuche/suche?angebotsart=4&was=${encodeURIComponent(searchTerm(de))}`;

export const sectorBySlug = (slug) => SECTORS.find((s) => s.slug === slug);

// Where to find a training place: official boards and who helps.
export const BOARDS = [
  { id: "jobs", url: SRC.jobs, ar: { name: "أماكن التدريب في الشركات (Jobsuche، وكالة العمل)", text: "الإعلانات الحالية لأماكن التدريب في الشركات بأسماء الشركات والمدن وموعد البدء. فلتر «Ausbildung» مفعّل في الرابط." }, en: { name: "Company training places (Jobsuche, Federal Employment Agency)", text: "Current company training-place ads with company names, cities and start dates. The \"Ausbildung\" filter is set in the link." } },
  { id: "miigJobs", url: SRC.miigJobs, ar: { name: "لوحة أماكن التدريب في Make it in Germany", text: "إعلانات تدريب للمتقدمين من خارج ألمانيا على البوابة الرسمية. البحث يشتغل أحسن بالألماني." }, en: { name: "Make it in Germany training-place board", text: "Training ads for applicants from abroad on the official portal. Search works best in German." } },
  { id: "ba", url: SRC.ba, ar: { name: "بحث التدريب في وكالة العمل الاتحادية", text: "أكبر قاعدة رسمية لأماكن التدريب في ألمانيا، مع فلاتر للمهنة والمدينة وموعد البدء." }, en: { name: "Federal Employment Agency training search", text: "The largest official database of training places, with filters for profession, city and start date." } },
  { id: "ihk", url: SRC.ihk, ar: { name: "بورصة التدريب لغرف الصناعة والتجارة (IHK)", text: "أماكن التدريب في الشركات والمصانع والفنادق والمكاتب (حوالي 149,600 مكان حسب Make it in Germany)." }, en: { name: "IHK training board (chambers of industry and commerce)", text: "Training places at companies, factories, hotels and offices (about 149,600 places per Make it in Germany)." } },
  { id: "hwk", url: SRC.hwk, ar: { name: "رادار التدريب لغرف الحِرف (Lehrstellenradar)", text: "أماكن التدريب في الحِرف: الكهرباء والسباكة والبناء والمخابز والورش." }, en: { name: "Crafts chambers training radar (Lehrstellenradar)", text: "Training places in the crafts: electrics, plumbing, construction, bakeries and workshops." } },
  { id: "mig", url: SRC.find, ar: { name: "Make it in Germany", text: "البوابة الرسمية للحكومة الألمانية: كيف تبحث، ولوحة وظائف فيها أماكن تدريب في كل ألمانيا." }, en: { name: "Make it in Germany", text: "The German government's official portal: how to search, plus job listings with training places across Germany." } },
  { id: "berufenet", url: SRC.berufenet, ar: { name: "BERUFENET (وصف المهن)", text: "قبل البحث: وصف رسمي مفصل لكل مهنة تدريب، ومهامها وشروطها." }, en: { name: "BERUFENET (occupation profiles)", text: "Before searching: official, detailed profiles of every training occupation, its tasks and requirements." } },
];

// Programmes and advice for Arab countries.
export const PROGRAMMES = [
  {
    id: "thamm",
    url: SRC.thamm,
    ar: {
      name: "برنامج THAMM Plus (مصر والمغرب وتونس)",
      rows: [
        ["من ينفذه", "الوكالة الألمانية للتعاون الدولي (GIZ) مع مكتب التوظيف في الخارج التابع لوكالة العمل الاتحادية (ZAV)."],
        ["مهن التدريب", "الكهرباء، وميكاترونكس السيارات، والبناء."],
        ["الشروط", "شهادة ثانوية، واستعداد لتعلم الألمانية حتى B1، ودافع للتدريب المزدوج، ويُفضّل خبرة أو تدريب سابق في المهنة."],
        ["المراحل", "اختيار على عدة مراحل، ثم دورة لغة في بلدك وامتحان B1، ثم مطابقة مع شركات ألمانية، ثم دعم في التأشيرة والأوراق، ثم السفر."],
        ["التكلفة", "صاحب العمل يدفع تكلفة السفر. لا تذكر الصفحة تكاليف أخرى."],
        ["كيف تقدم", "عن طريق الجهة الحكومية في بلدك: وزارة الخارجية والهجرة في مصر، وANAPEC في المغرب، وANETI في تونس. أو راسل المشروع على thamm@giz.de."],
      ],
    },
    en: {
      name: "THAMM Plus programme (Egypt, Morocco and Tunisia)",
      rows: [
        ["Run by", "GIZ with the Federal Employment Agency's International Placement Services (ZAV)."],
        ["Training occupations", "Electrical trades, car mechatronics and construction."],
        ["Requirements", "A secondary school certificate, willingness to learn German to B1, motivation for dual training, and ideally some experience or prior training in the trade."],
        ["Stages", "A multi-stage selection, a language course and B1 exam in your country, matching with German employers, help with the visa and paperwork, then travel."],
        ["Cost", "Employers pay the travel costs. The page mentions no other costs."],
        ["How to apply", "Through the government body in your country: the Ministry of Foreign Affairs and Emigration in Egypt, ANAPEC in Morocco, ANETI in Tunisia. Or email the project at thamm@giz.de."],
      ],
    },
  },
  {
    id: "egc",
    url: "https://kairo.diplo.de/eg-de/2698696-2698696",
    ar: {
      name: "المركز المصري الألماني للوظائف والهجرة وإعادة الإدماج (EGC)",
      rows: [
        ["ما هو", "شراكة بين وزارة الخارجية والهجرة المصرية ووكالة GIZ الألمانية التي تنفذه، بتمويل من وزارة التنمية الألمانية والاتحاد الأوروبي."],
        ["ماذا يقدم", "تدريب على المهارات، وإرشاد مهني وخدمات توظيف، واستشارات عن الهجرة النظامية إلى ألمانيا، ودعم العائدين لمصر."],
      ],
    },
    en: {
      name: "Egyptian-German Centre for Jobs, Migration and Reintegration (EGC)",
      rows: [
        ["What it is", "A partnership between the Egyptian Ministry of Foreign Affairs and Emigration and Germany's GIZ, which implements it, funded by the German development ministry and the EU."],
        ["What it offers", "Skills training, career guidance and job placement services, advice on regular migration to Germany, and support for returnees to Egypt."],
      ],
    },
  },
];

// Step-by-step application (Germany, dual training).
export const STEPS = {
  ar: [
    ["اختر المهنة", "ابدأ من أقسام المهن في هذه الصفحة ومن BERUFENET. قارن الراتب ومدة التدريب ومستوى الألمانية المطلوب."],
    ["تعلم الألمانية حتى B1", "شرط التأشيرة كقاعدة عامة B1 (وفي التمريض B1 أو B2 حسب الولاية). الشهادة من Goethe أو telc أو ÖSD أو TestDaF أو ELC، ويُفضّل ألا يزيد عمرها عن سنة عند التقديم."],
    ["جهز أوراقك", "سيرة ذاتية بالألمانية في جدول (Lebenslauf)، وخطاب تقديم (Anschreiben)، والشهادة الثانوية مترجمة ومصدقة. السفارة في القاهرة تطلب الشهادة الثانوية مترجمة ومعادلة ومصدقة."],
    ["ابحث وقدّم", "قدّم مباشرة للشركات عبر بوابة وكالة العمل وبورصة IHK ورادار الحِرف. التدريب يبدأ عادة في 1 أغسطس أو 1 سبتمبر."],
    ["المقابلة والعقد", "المقابلات غالباً أونلاين. العقد يجب أن يذكر المهنة ومدة التدريب وراتب التدريب، ويمكن أن ينص على أنه يسري بعد الحصول على التأشيرة."],
    ["تأشيرة التدريب (16a)", "في مصر: استمارة VIDEX أونلاين، وموعد عند TLScontact، والتقديم ممكن من 3 أشهر قبل السفر. الرسوم 75 يورو بالجنيه. موافقة وكالة العمل إجراء داخلي."],
    ["الوصول إلى ألمانيا", "سجّل عنوانك في البلدية، واحجز موعداً عند مكتب الأجانب، وقدّم على تصريح الإقامة للتدريب قبل انتهاء التأشيرة."],
  ],
  en: [
    ["Choose a profession", "Start from the sectors on this page and BERUFENET. Compare pay, length and the German level needed."],
    ["Learn German to B1", "The visa generally needs B1 (B1 or B2 in nursing depending on the state). Certificates from Goethe, telc, ÖSD, TestDaF or ELC, ideally no more than a year old when you apply."],
    ["Prepare your documents", "A German CV in table form (Lebenslauf), a cover letter (Anschreiben) and your school certificate translated and legalised. The embassy in Cairo asks for the school certificate translated, recognised and legalised."],
    ["Search and apply", "Apply directly to companies via the Federal Employment Agency, the IHK board and the crafts radar. Training usually starts on 1 August or 1 September."],
    ["Interview and contract", "Interviews are often online. The contract must state the occupation, length and training allowance, and may say it only takes effect once the visa is granted."],
    ["Training visa (16a)", "In Egypt: the online VIDEX form, an appointment at TLScontact, and you can apply from 3 months before travel. The fee is €75 in local currency. The Employment Agency's approval is an internal step."],
    ["Arrive in Germany", "Register your address, book an appointment at the foreigners authority and apply for the training residence permit before the visa expires."],
  ],
  src: [SRC.berufenet, SRC.employers, SRC.cairo, SRC.start, SRC.employers, SRC.cairo, SRC.visaPdf],
};

// Visa documents at the German Embassy in Cairo (also covers residents of Yemen, Libya, Sudan and Gaza).
export const CAIRO = {
  ar: [
    "جواز سفر لم يمر عليه أكثر من 10 سنوات، فيه صفحتان فارغتان على الأقل، وصالح 3 أشهر بعد انتهاء التأشيرة.",
    "استمارة VIDEX للتأشيرة الوطنية موقعة، وصور بيومترية.",
    "الشهادة الثانوية مع كشف الدرجات، مترجمة ومعادلة ومصدقة.",
    "عقد تدريب موقّع من شركة تدريب معتمدة أو مدرسة مهنية، فيه اسم المهنة والمدة وراتب التدريب.",
    "شهادة ألمانية B1 (Goethe أو telc أو ÖSD أو TestDaF أو ELC).",
    "سيرة ذاتية وخطاب دافع بقلمك وموقعين.",
    "كل الأوراق أصل مع ترجمة إنجليزية أو ألمانية ونسخة.",
    "الرسوم 75 يورو بالعملة المحلية.",
  ],
  en: [
    "A passport no more than 10 years old, with at least two blank pages and valid 3 months after the visa ends.",
    "A signed VIDEX national visa form and biometric photos.",
    "Your school certificate with transcript, translated, recognised and legalised.",
    "A signed training contract from an approved training company or vocational school, stating the occupation, length and allowance.",
    "A B1 German certificate (Goethe, telc, ÖSD, TestDaF or ELC).",
    "A CV and motivation letter written and signed by you.",
    "Every document as an original with an English or German translation and a copy.",
    "The fee is €75 in local currency.",
  ],
};

export const GUIDE_TEXT = {
  ar: {
    sectorsTitle: "اختر المجال",
    sectorsLead: "قسّمنا مهن التدريب الأكثر طلباً إلى مجالات. في كل مجال: المهن، ومدة التدريب، ومتوسط راتب التدريب في كل سنة.",
    jobs: (n) => (n === 1 ? "مهنة واحدة" : n === 2 ? "مهنتان" : n <= 10 ? `${n} مهن` : `${n} مهنة`),
    payNote: "متوسط راتب التدريب الشهري الإجمالي في الشركات الملتزمة باتفاقيات الأجور، في ألمانيا كلها (BIBB، 1 أكتوبر 2025). الراتب الفعلي يختلف حسب الشركة والولاية، والشركات غير الملتزمة تدفع الحد الأدنى على الأقل (724 يورو في السنة الأولى لمن يبدأ في 2026).",
    profession: "المهنة", length: "المدة", y: (i) => `السنة ${["الأولى", "الثانية", "الثالثة", "الرابعة"][i]}`,
    months: (m) => (m === 24 ? "سنتان" : `${(m / 12).toLocaleString("en-US")} سنوات`),
    area: { IH: "صناعة وتجارة", Hw: "حِرف", FB: "عيادات ومكاتب", Lw: "زراعة" },
    stepsTitle: "كيف تقدّم خطوة بخطوة",
    boardsTitle: "أين تجد أماكن التدريب",
    boardsLead: "هذه المواقع الرسمية التي تنشر فيها الشركات أماكن التدريب. التقديم فيها مجاني ومباشر للشركة.",
    progTitle: "برامج تساعد العرب",
    cairoTitle: "أوراق تأشيرة التدريب في السفارة الألمانية بالقاهرة",
    cairoLead: "السفارة في القاهرة مختصة بالمقيمين في مصر واليمن وليبيا والسودان وغزة. القائمة من ورقة السفارة الرسمية (أغسطس 2026).",
    warn: "البرامج الحكومية ومواقع البحث الرسمية لا تحتاج وسيطاً. إذا تعاملت مع وكالة خاصة فاطلب الرسوم مكتوبة قبل الدفع، ولا تصدق من يعد بمكان مضمون مقابل المال.",
    open: "افتح الموقع",
    findPlaces: "أماكن تدريب معلنة الآن",
    findNote: "زر «أماكن تدريب معلنة الآن» يفتح بحث وكالة العمل الألمانية على اسم المهنة. الإعلانات بتتغير كل يوم، وصاحب الإعلان هو اللي بيقرر يقبل متقدمين من الخارج ولا لأ.",
    source: "المصدر",
    back: "التدريب المهني في ألمانيا",
    otherSectors: "مجالات أخرى",
    sectorTitle: (n) => `التدريب المهني في ألمانيا: ${n}`,
    sectorLead: (n, k) => `${k} في مجال ${n}، بمتوسط راتب التدريب في كل سنة من بيانات المعهد الاتحادي للتدريب المهني (BIBB). التدريب بالألمانية.`,
    apply: "كيف تقدّم",
    toCheck: " (للتحقق)",
  },
  en: {
    sectorsTitle: "Choose a sector",
    sectorsLead: "We grouped the most in-demand training occupations into sectors. Each one shows the occupations, length and average training allowance per year.",
    jobs: (n) => `${n} occupation${n === 1 ? "" : "s"}`,
    payNote: "Average gross monthly training allowance at companies bound by collective agreements, Germany as a whole (BIBB, 1 October 2025). Actual pay varies by company and state; companies without an agreement must pay at least the minimum (€724 in year 1 for training starting in 2026).",
    profession: "Occupation", length: "Length", y: (i) => `Year ${i + 1}`,
    months: (m) => `${(m / 12).toLocaleString("en-US")} years`,
    area: { IH: "Industry and trade", Hw: "Crafts", FB: "Practices and offices", Lw: "Agriculture" },
    stepsTitle: "How to apply, step by step",
    boardsTitle: "Where to find training places",
    boardsLead: "The official sites where companies publish training places. Applying is free and goes straight to the company.",
    progTitle: "Programmes that help Arab applicants",
    cairoTitle: "Training visa documents at the German Embassy in Cairo",
    cairoLead: "The Cairo embassy handles residents of Egypt, Yemen, Libya, Sudan and Gaza. This list is from the embassy's official checklist (August 2026).",
    warn: "Government programmes and the official search sites need no middleman. If you use a private agency, get its fees in writing before paying, and don't trust anyone promising a guaranteed place for money.",
    open: "Open the site",
    findPlaces: "Training places advertised now",
    findNote: "The \"Training places advertised now\" button opens the Federal Employment Agency search for that occupation. Ads change every day, and each company decides whether it accepts applicants from abroad.",
    source: "Source",
    back: "Vocational training in Germany",
    otherSectors: "Other sectors",
    sectorTitle: (n) => `Vocational training in Germany: ${n}`,
    sectorLead: (n, k) => `${k} in ${n}, with the average training allowance per year from the Federal Institute for Vocational Education and Training (BIBB). Training is in German.`,
    apply: "How to apply",
    toCheck: " (to verify)",
  },
};
