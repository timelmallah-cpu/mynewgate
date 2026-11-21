// Bawabat AlSafar, visas section: long-stay routes (20 Nov 2026).
// Germany's Opportunity Card (Chancenkarte, § 20a AufenthG) and Spain's international teleworker
// ("digital nomad") visa (Ley 14/2013, chapter V bis, added by Ley 28/2022). Official sources only, checked 20 Nov 2026.
// check: true = to verify ("للتحقق").
const T = (ar, en) => ({ ar, en });

const MIIG = "https://www.make-it-in-germany.com/en/visa/kinds-of-visa/jobseekers/";
const MIIG_PDF = "https://www.make-it-in-germany.com/fileadmin/1_Rebrush_2022/a_Fachkraefte/PDF-Dateien/3_Visum_u_Aufenthalt/Visagrafik_EN/Chancenkarte_zur_Jobsuche_EN.pdf";
const SELF_CHECK = "https://www.make-it-in-germany.com/en/visa-residence/opportunity-card/self-check";
const PORTAL = "https://digital.diplo.de/Chancenkarte";
const CAIRO_AR = "https://kairo.diplo.de/resource/blob/2562520/0fee7e933d245dead41437c6ef434a96/250122-arab-merkblatt-chancenkarte-data.pdf";
const BERN = "https://bern.diplo.de/ch-de/service/visa/opportunity-card-2757060";

const BLS_EG = "https://egypt.blsspainvisa.com/national_digital_nomad_visa.php";
const UGE_FAQ = "https://bibliovirtual.inclusion.gob.es/documents/d/unidadgrandesempresas/digital-nomad-faqs-english";
const UGE_DOCS = "https://www.inclusion.gob.es/documents/d/unidadgrandesempresas/informacion-documentacion-titulares";
const SMI = "https://www.boe.es/eli/es/rd/2026/02/18/126/con";
const TEL_PDF = "https://exteriores.gob.es/Consulados/santiagodechile/es/ServiciosConsulares/Documents/Info%20visado%20TELETRABAJO.pdf";

const AT = "https://migration.gv.at/en/types-of-immigration/permanent-immigration/very-highly-qualified-workers";
const AT_FAQ = "https://migration.gv.at/en/faq";
const AT_CALC = "https://www.migration.gv.at/en/service-and-links/points-calculator/";
const AT_DEG = "https://www.migration.gv.at/fileadmin/downloads/infoblaetter/Recognition_of_degrees.pdf";
const SE = "https://www.migrationsverket.se/en/you-want-to-apply/work/look-for-work/look-for-work-or-start-a-business.html";
const SE_KNOW = "https://www.migrationsverket.se/en/you-want-to-apply/work/look-for-work/look-for-work-or-start-a-business/flikar/important-to-know.html";
const SE_APPLY = "https://www.migrationsverket.se/en/you-want-to-apply/work/look-for-work/look-for-work-or-start-a-business/flikar/apply.html";
const SE_FORM = "https://migrationsverket.se/download/18.2cd2e409193b84c506a34fee/1738227350485/265511_Ansokning_CAT_en.pdf";
const AE = "https://gdrfad.gov.ae/en/node/13886";
const AE_DXB = "https://www.dubai.ae/web/dubai.ae/visiting-dubai-for-business-or-job-opportunities";
const AE_ICP = "https://smartservices.icp.gov.ae/echannels/web/client/guest/index.html#/dashboard?categoryId=3";
const PT_LAW = "https://diariodarepublica.pt/dr/detalhe/lei/61-2025-941547426";
const PT_NOTE = "https://www.rtp.pt/noticias/economia/agendamentos-para-vistos-de-trabalho-em-portugal-cancelados-a-partir-de-quinta-feira_n1692981";
const PT_IEFP = "https://www.gov.pt/guias/migrantes-trabalhar-e-criar-um-negocio-em-portugal";

const BC = "https://www.make-it-in-germany.com/en/visa-residence/types/eu-blue-card";
const BC_PDF = "https://www.make-it-in-germany.com/pdf-blue-card-eu";
const BC_BA = "https://www.arbeitsagentur.de/vor-ort/zav/working-and-living-in-germany/iss-en/issue-03-2026/blue-card";
const BC_LIST = "https://www.germany.info/resource/blob/2435484/ffe411670fb3aa496edfb1a77e7136f2/eu-blue-card-data.pdf";
const FSW = "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/who-can-apply/federal-skilled-workers.html";
const FSW_PTS = "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/become-candidate/eligibility/federal-skilled-workers/six-selection-factors-federal-skilled-workers.html";
const CA_FUNDS = "https://www.canada.ca/en/immigration-refugees-citizenship/services/immigrate-canada/express-entry/documents/proof-funds.html";
const CA_EE = "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/permanent-residence/express-entry.html";
const CA_EE_PUB = "https://publications.gc.ca/collections/collection_2024/ircc/Ci4-257-2024-eng.pdf";
const CA_FEE = "https://www.canada.ca/en/immigration-refugees-citizenship/news/notices/permanent-residence-fees-increasing.html";
const CA_CRS = "https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/operational-bulletins-manuals/permanent-residence/express-entry/comprehensive-ranking-system.html";

// Canada, Federal Skilled Worker selection grid (67 of 100), from the six selection factors page and IRPR s. 78.
export const FSW_GRID = {
  lang1: [[24, "CLB 9+"], [20, "CLB 8"], [16, "CLB 7"]],
  edu: [[5, T("ثانوية", "Secondary school")], [15, T("دبلوم بعد الثانوية سنة واحدة", "One-year post-secondary")], [19, T("دبلوم سنتين", "Two-year post-secondary")], [21, T("بكالوريوس أو دراسة 3 سنوات أو أكثر", "Bachelor's or a programme of three years or more")], [22, T("مؤهلان أو أكثر أحدهما 3 سنوات", "Two or more credentials, one of three years or more")], [23, T("ماجستير أو شهادة مهنية (طب، أسنان، صيدلة، قانون...)", "Master's or an entry-to-practice professional degree")], [25, T("دكتوراه", "Doctorate")]],
  exp: [[9, T("سنة واحدة", "1 year")], [11, T("2 إلى 3 سنوات", "2-3 years")], [13, T("4 إلى 5 سنوات", "4-5 years")], [15, T("6 سنوات أو أكثر", "6 years or more")]],
  age: (a) => (a < 18 ? 0 : a <= 35 ? 12 : a >= 47 ? 0 : 47 - a),
  adapt: [["sl", 5, T("لغة الزوج أو الشريك CLB 4 أو أعلى في المهارات الأربع", "Spouse or partner's language at CLB 4 or higher in all four abilities")], ["st", 5, T("درستَ في كندا سنتين دراسيتين على الأقل بدوام كامل", "You studied in Canada for at least two full-time academic years")], ["sst", 5, T("درس زوجك في كندا سنتين على الأقل", "Your spouse studied in Canada for at least two years")], ["wk", 10, T("عملتَ في كندا سنة على الأقل بدوام كامل بتصريح عمل", "You worked in Canada for at least one full-time year with authorisation")], ["swk", 5, T("عمل زوجك في كندا سنة على الأقل", "Your spouse worked in Canada for at least one year")], ["job", 5, T("معك عرض عمل في كندا (نقاط التكيف)", "You have a job offer in Canada (adaptability points)")], ["rel", 5, T("لك قريب في كندا مواطن أو مقيم دائم (أب، جد، ابن، أخ، عم أو خال، ابن أخ...) عمره 18 سنة أو أكثر", "You have a relative in Canada aged 18+ who is a citizen or permanent resident (parent, grandparent, child, sibling, aunt or uncle, niece or nephew)")]],
};

// Austria, Very Highly Qualified Workers points (migration.gv.at, checked 21 Nov 2026). Each group is capped at max.
export const AT_POINTS = [
  { id: "q", max: 40, t: T("المؤهلات والمهارات الخاصة", "Special qualifications and skills"), items: [
    { id: "deg", pick: [[0, T("لا شيء مما يلي", "None of these")], [20, T("شهادة جامعية لبرنامج مدته 4 سنوات على الأقل", "Degree from a programme of at least 4 years")], [30, T("الشهادة في الرياضيات أو المعلوماتية أو العلوم الطبيعية أو التكنولوجيا (MINT)", "The degree is in maths, informatics, natural sciences or technology (MINT)")], [40, T("دكتوراه أو تأهيل أستاذية (Habilitation)", "PhD or habilitation")]], t: T("أعلى مؤهل", "Highest qualification") },
    { id: "sal", pick: [[0, T("لا ينطبق", "Not applicable")], [20, T("من 50,000 إلى 60,000 يورو", "€50,000 to €60,000")], [25, T("من 60,000 إلى 70,000 يورو", "€60,000 to €70,000")], [30, T("أكثر من 70,000 يورو", "More than €70,000")]], t: T("راتبك الإجمالي في السنة الماضية في منصب إدارة عليا (شركة مدرجة في البورصة أو بتقرير إيجابي من مكتب التجارة الخارجية النمساوي)", "Last year's gross salary in a senior management post (listed company or one with a positive Austrian foreign trade office report)") },
    { id: "res", pts: 20, t: T("أبحاث وابتكار: طلبات براءات اختراع أو منشورات علمية", "Research and innovation: patent applications or publications") },
    { id: "award", pts: 20, t: T("جوائز معترف بها", "Recognised awards") },
  ] },
  { id: "w", max: 20, t: T("الخبرة العملية المناسبة لمؤهلك", "Work experience matching your qualification"), items: [
    { id: "yrs", pick: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((y) => [y * 2, T(y === 0 ? "لا شيء" : `${y} ${y === 1 ? "سنة" : y === 2 ? "سنتان" : y <= 10 ? "سنوات" : "سنة"}`, y === 1 ? "1 year" : `${y} years`)]), t: T("سنوات الخبرة (نقطة لكل نصف سنة)", "Years of experience (1 point per half-year)") },
    { id: "atw", pts: 10, t: T("عملت 6 أشهر في النمسا", "Six months of work in Austria") },
  ] },
  { id: "l", max: 10, t: T("اللغات", "Languages"), items: [
    { id: "deen", pick: [[0, T("أقل من A1", "Below A1")], [5, "A1"], [10, T("A2 أو أعلى", "A2 or higher")]], t: T("الألمانية أو الإنجليزية", "German or English") },
    { id: "fr", pts: 5, t: T("الفرنسية B1", "French B1") },
    { id: "es", pts: 5, t: T("الإسبانية B1", "Spanish B1") },
    { id: "bcs", pts: 5, t: T("البوسنية أو الكرواتية أو الصربية B1", "Bosnian, Croatian or Serbian B1") },
  ] },
  { id: "a", max: 20, t: T("العمر", "Age"), items: [
    { id: "age", pick: [[20, T("أقل من 35", "Under 35")], [15, T("من 35 إلى أقل من 40", "35 to under 40")], [10, T("من 40 إلى أقل من 45", "40 to under 45")], [0, T("45 أو أكثر", "45 or over")]], t: T("عمرك", "Your age") },
  ] },
  { id: "s", max: 10, t: T("الدراسة في النمسا", "Studies in Austria"), items: [
    { id: "st", pick: [[0, T("لا", "No")], [5, T("الجزء الثاني من برنامج دبلوم أو نصف النقاط المطلوبة (ECTS)", "Second part of a diploma programme, or half the required ECTS")], [10, T("أنهيت برنامج دبلوم أو بكالوريوس وماجستير", "Completed a diploma, or a bachelor's and master's")]], t: T("هل درست في النمسا؟", "Did you study in Austria?") },
  ] },
];

// Opportunity Card points (Make it in Germany, 2026). Used by the points tool.
export const CK_POINTS = [
  { id: "partial", pts: 4, t: T("مؤهلك معترف به جزئياً في ألمانيا (أو تحتاج إجراءات تكميلية لمهنة منظمة)", "Your qualification is partly recognised in Germany (or needs compensation measures for a regulated profession)") },
  { id: "shortage", pts: 1, t: T("مؤهلك في مهنة عليها نقص في ألمانيا (القائمة الرسمية)", "Your qualification is in a shortage occupation (official list)") },
  { id: "exp", pick: [[0, T("أقل من سنتين", "Under 2 years")], [2, T("سنتان على الأقل خلال آخر 5 سنوات", "At least 2 years in the last 5 years")], [3, T("5 سنوات على الأقل خلال آخر 7 سنوات", "At least 5 years in the last 7 years")]], t: T("الخبرة العملية في مجالك بعد التخرج", "Work experience in your field after graduating") },
  { id: "de", pick: [[0, T("A1 أو لا شيء", "A1 or none")], [1, "A2"], [2, "B1"], [3, T("B2 أو أعلى", "B2 or higher")]], t: T("مستوى اللغة الألمانية", "German level") },
  { id: "en", pts: 1, t: T("إنجليزية C1 أو أعلى، أو هي لغتك الأم", "English C1 or higher, or English is your native language") },
  { id: "age", pick: [[0, T("أكثر من 40", "Over 40")], [1, T("من 35 إلى 40", "35 to 40")], [2, T("أقل من 35 سنة", "Under 35")]], t: T("العمر", "Age") },
  { id: "stay", pts: 1, t: T("أقمت في ألمانيا إقامة قانونية 6 أشهر متصلة على الأقل خلال آخر 5 سنوات (دراسة أو لغة أو عمل، وليس سياحة)", "You lived legally in Germany for at least 6 continuous months in the last 5 years (study, language course or work, not tourism)") },
  { id: "partner", pts: 1, t: T("زوجك أو شريكك يستوفي هو أيضاً شروط بطاقة الفرص ويأتي معك", "Your spouse or partner also meets the Opportunity Card requirements and comes with you") },
];

export const ROUTES = [
  {
    id: "de", slug: "germany-opportunity-card", tool: "points", job: true,
    name: T("بطاقة الفرص الألمانية (Chancenkarte)", "Germany's Opportunity Card (Chancenkarte)"),
    short: T("تأشيرة للبحث عن عمل في ألمانيا لمدة سنة، بنظام نقاط", "A one-year job-search visa for Germany, with a points system"),
    lead: T(
      "بطاقة الفرص تسمح لك بالسفر إلى ألمانيا والبحث عن عمل لمدة تصل إلى سنة بدون عقد عمل مسبق، مع العمل بدوام جزئي أثناء البحث. هي لمن يحمل شهادة جامعية أو مؤهلاً مهنياً من خارج الاتحاد الأوروبي (المادة 20a من قانون الإقامة الألماني).",
      "The Opportunity Card lets you go to Germany and look for a job for up to one year without a job offer, working part-time while you search. It is for non-EU nationals with a university degree or a vocational qualification (Section 20a of the German Residence Act)."),
    facts: [
      [T("المدة", "Validity"), T("حتى سنة واحدة.", "Up to one year."), MIIG],
      [T("العمل أثناء البحث", "Work while searching"), T("عمل جانبي حتى 20 ساعة في الأسبوع، وعمل تجريبي حتى أسبوعين لدى كل صاحب عمل.", "Side jobs of up to 20 hours a week, and trial work of up to two weeks per employer."), MIIG],
      [T("إثبات المال", "Proof of funds"), T("1,091 يورو صافياً في الشهر (رقم 2026)، أي 13,092 يورو لسنة كاملة، في حساب مغلق (Sperrkonto) أو بتعهد كفالة (Verpflichtungserklärung) من مقيم في ألمانيا.", "€1,091 net a month (2026 figure), so €13,092 for a full year, in a blocked account (Sperrkonto) or through a declaration of commitment (Verpflichtungserklärung) by someone living in Germany."), BERN],
      [T("الرسوم", "Fees"), T("حتى 100 يورو (المادة 45 وما بعدها من لائحة الإقامة).", "Up to €100 (Sections 45 ff. of the Residence Ordinance)."), MIIG_PDF],
      [T("التأمين الصحي", "Health insurance"), T("تأمين صحي يغطي كل مدة البطاقة، بحد أدنى للتغطية 30,000 يورو (نشرة سفارة القاهرة).", "Health insurance for the whole validity of the card, with cover of at least €30,000 (Cairo embassy leaflet)."), CAIRO_AR],
      [T("أين تقدّم", "Where to apply"), T("إلكترونياً عبر بوابة الخدمات القنصلية الألمانية، أو لدى السفارة الألمانية في بلد إقامتك حسب ما تحدده. في مصر: السفارة الألمانية في القاهرة، ولها نشرة بالعربية بقائمة الأوراق.", "Online through the German Foreign Office's consular portal, or at the German mission in your country of residence as it directs. In Egypt: the German Embassy in Cairo, which has an Arabic leaflet with the document list."), PORTAL],
      [T("بعد أن تجد عملاً", "Once you find a job"), T("تقدّم في مكتب الأجانب (Ausländerbehörde) في مدينتك على إقامة عمل للعمالة الماهرة أو التدريب. وإذا حصلت على عرض عمل مؤهل ولا تستوفي بعد شروط إقامة عمل عادية، يمكن منحك بطاقة فرص لاحقة حتى سنتين.", "Apply at your local foreigners authority (Ausländerbehörde) for a residence permit for qualified work or training. If you have a qualified job offer but cannot yet get a regular work permit, a follow-up Opportunity Card of up to two years can be issued."), MIIG],
    ],
    who: {
      title: T("طريقان للحصول عليها", "Two ways to qualify"),
      items: [
        T("الطريق الأول (بدون نقاط): شهادتك الجامعية أو المهنية معترف بها اعترافاً كاملاً في ألمانيا، فتُعد عاملاً ماهراً. يكفي إثبات المال.", "Path 1 (no points): your degree or vocational qualification is fully recognised in Germany, so you count as a skilled worker. Proof of funds is enough."),
        T("الطريق الثاني (بالنقاط): مؤهلك معترف به في البلد الذي حصلت عليه منه (جامعة بتقييم إيجابي في anabin أو بيان مقارنة من ZAB، أو مؤهل مهني لا تقل دراسته عن سنتين)، ومعك ألمانية A1 على الأقل أو إنجليزية B2 على الأقل، وتجمع 6 نقاط على الأقل.", "Path 2 (points): your qualification is recognised in the country where you got it (a positive anabin result or a ZAB Statement of Comparability for a degree, or a vocational qualification of at least two years), you have at least German A1 or English B2, and you score at least 6 points."),
      ],
      src: MIIG,
    },
    docs: {
      ar: ["جواز سفر ساري", "طلب التأشيرة الوطنية واستمارة بطاقة الفرص", "الشهادة الجامعية أو المهنية وإثبات الاعتراف بها (anabin أو بيان ZAB أو قرار الاعتراف)", "شهادة اللغة الألمانية أو الإنجليزية", "إثبات الخبرة العملية إن كنت تحسب نقاطها", "إثبات المال: حساب مغلق أو تعهد كفالة", "تأمين صحي لكل المدة", "خطة زمنية وموضوعية لإقامتك وبحثك عن عمل (تطلبها سفارة القاهرة)"],
      en: ["Valid passport", "National visa application and the Opportunity Card form", "Your degree or vocational certificate and proof of recognition (anabin, ZAB statement or recognition notice)", "German or English language certificate", "Proof of work experience if you count points for it", "Proof of funds: blocked account or declaration of commitment", "Health insurance for the whole stay", "A timeline and plan for your stay and job search (the Cairo embassy asks for it)"],
      src: CAIRO_AR,
    },
    links: [[T("الاختبار الرسمي للنقاط (Self-Check)", "Official points self-check"), SELF_CHECK], [T("بوابة التقديم الإلكتروني", "Online application portal"), PORTAL], [T("نشرة سفارة القاهرة بالعربية", "Cairo embassy leaflet (Arabic)"), CAIRO_AR], [T("صفحة Make it in Germany", "Make it in Germany page"), MIIG]],
    note: T("الحساب في الأداة تقريبي؛ اختبار Make it in Germany الرسمي والسفارة هما المرجع، وكل نقطة تحتاج إثباتاً.", "The tool's count is a guide only; the official Make it in Germany self-check and the embassy decide, and every point needs evidence."),
  },
  {
    id: "at", slug: "austria-job-seeker", tool: "at-points", job: true,
    name: T("تأشيرة الباحث عن عمل في النمسا (للمؤهلين جداً)", "Austria's job seeker visa (very highly qualified)"),
    short: T("6 أشهر للبحث عن عمل في النمسا، بنظام نقاط (70 من 100)", "Six months to look for work in Austria, with a points system (70 of 100)"),
    lead: T(
      "تأشيرة دخول من الفئة D لمدة 6 أشهر للبحث عن عمل في النمسا بدون عرض عمل مسبق. هي فقط لفئة «المؤهلين جداً» (Very Highly Qualified Workers) الذين يجمعون 70 نقطة على الأقل من 100، مثل العلماء والمديرين في المناصب العليا. إذا وجدت عملاً مناسباً لمؤهلك خلال المدة تتقدم على بطاقة الأحمر-الأبيض-الأحمر (Rot-Weiß-Rot-Karte).",
      "A category D visa for six months to look for work in Austria without a job offer. It is only for 'very highly qualified workers' who score at least 70 of 100 points, such as scientists and senior managers. If you find a job matching your qualification within that time, you apply for the Red-White-Red Card."),
    facts: [
      [T("المدة", "Validity"), T("6 أشهر للبحث عن عمل. وإذا لم تجد عملاً مناسباً خلالها يجب أن تغادر، ولا يمكنك طلب تأشيرة جديدة إلا بعد 12 شهراً.", "Six months to look for work. If you do not find suitable work in that time you must leave, and you can apply for a new one only after 12 months."), AT_FAQ],
      [T("النقاط", "Points"), T("70 نقطة على الأقل من 100: المؤهلات الخاصة (حتى 40)، والخبرة (حتى 20)، واللغات (حتى 10)، والعمر (حتى 20)، والدراسة في النمسا (حتى 10). تمنح التأشيرة بعد أن تؤكد هيئة التوظيف العامة (AMS) للسفارة أنك حققت النقاط.", "At least 70 of 100: special qualifications (up to 40), experience (up to 20), languages (up to 10), age (up to 20) and studies in Austria (up to 10). The visa is issued once the Public Employment Service (AMS) confirms to the embassy that you reached the points."), AT],
      [T("الشهادة", "Degree"), T("نقاط الشهادة الجامعية لبرنامج مدته 4 سنوات على الأقل.", "Degree points need a programme of at least four years."), AT_DEG],
      [T("الرسوم", "Fees"), T("195 يورو لتأشيرة الباحث عن عمل.", "€195 for the job seeker visa."), AT],
      [T("أين تقدّم", "Where to apply"), T("شخصياً في السفارة أو القنصلية النمساوية في بلدك أو في البلد الذي تقيم فيه إقامة قانونية. ومن يستطيع دخول النمسا بدون تأشيرة لا يحتاج هذه التأشيرة، ويمكنه التقدم على البطاقة خلال إقامته القانونية إذا وجد عملاً.", "In person at the Austrian embassy or consulate in your home country or where you legally live. If you can enter Austria without a visa you do not need it, and you can apply for the card during your legal stay if you find a job."), AT],
      [T("بعد أن تجد عملاً", "Once you find a job"), T("تقدّم على بطاقة الأحمر-الأبيض-الأحمر للمؤهلين جداً لدى سلطة الإقامة المختصة في النمسا. لا تبدأ العمل قبل استلام البطاقة.", "Apply for the Red-White-Red Card for very highly qualified workers at the competent residence authority in Austria. You start work only once you hold the card."), AT_FAQ],
    ],
    who: {
      title: T("من يستطيع التقديم", "Who can apply"),
      items: [
        T("مواطن من خارج الاتحاد الأوروبي يحقق 70 نقطة على الأقل في نظام «المؤهلين جداً».", "A non-EU national who scores at least 70 points in the 'very highly qualified' system."),
        T("معه سكن مناسب طوال المدة، وتأمين صحي يغطي كل المخاطر، وما يكفي للمعيشة.", "Has suitable accommodation for the whole stay, health insurance covering all risks, and enough to live on."),
        T("لا توجد تأشيرة باحث عن عمل لغير «المؤهلين جداً»؛ الفئات الأخرى تحتاج عرض عمل.", "There is no job seeker visa for anyone outside 'very highly qualified'; other categories need a job offer."),
      ],
      src: AT_FAQ,
    },
    docs: {
      ar: ["جواز سفر ساري", "صورة 45×35 مم حديثة (آخر 6 أشهر)", "إثبات سكن مناسب (عقد إيجار أو عقد مبدئي أو ملكية)", "تأمين صحي يغطي كل المخاطر", "إثبات وسائل المعيشة (كشوف راتب، عقد عمل، معاش أو استثمارات)", "ما يثبت كل نقطة: الشهادات، إثبات الراتب، شهادات اللغة، شهادات الخبرة", "الأصول والنسخ، وترجمة ما ليس بالألمانية أو الإنجليزية، وقد يُطلب توثيق"],
      en: ["Valid passport", "Recent 45x35 mm photo (last six months)", "Proof of accommodation (lease, pre-agreement or ownership)", "Health insurance covering all risks", "Proof of means of subsistence (payslips, employment contract, pension or investments)", "Evidence for every point: degrees, salary proof, language certificates, work references", "Originals and copies; translations of anything not in German or English; legalisation may be requested"],
      src: AT,
    },
    links: [[T("حاسبة النقاط الرسمية", "Official points calculator"), AT_CALC], [T("صفحة المؤهلين جداً", "Very highly qualified workers page"), AT], [T("الأسئلة الشائعة", "FAQ"), AT_FAQ]],
    note: T("الحساب في الأداة تقريبي؛ الحاسبة الرسمية وهيئة AMS هما المرجع، وكل نقطة تحتاج إثباتاً.", "The tool's count is a guide only; the official calculator and the AMS decide, and every point needs evidence."),
  },
  {
    id: "se", slug: "sweden-job-seeker", tool: null, job: true,
    name: T("إقامة البحث عن عمل في السويد (لحملة الماجستير)", "Sweden's residence permit to look for work (master's holders)"),
    short: T("حتى 9 أشهر للبحث عن عمل أو بدء مشروع في السويد بعد الماجستير", "Up to nine months to look for work or start a business in Sweden after a master's"),
    lead: T(
      "إقامة لمن أنهى دراسة بمستوى الماجستير أو أعلى، ليأتي إلى السويد ويبحث عن عمل أو يدرس إمكانية بدء مشروعه. ليست لخريجي الجامعات السويدية فقط؛ لهم طريق آخر منفصل.",
      "A residence permit for people who have completed studies at master's level or above, to come to Sweden and look for work or explore starting a business. It is not only for graduates of Swedish universities; they have a separate route."),
    facts: [
      [T("الشهادة", "Degree"), T("ماجستير 60 أو 120 نقطة، أو شهادة مهنية من 60 إلى 330 نقطة، أو دكتوراه. الشهادات العربية تُقيّم بما يعادلها.", "A 60- or 120-credit master's, a professional degree of 60 to 330 credits, or a PhD. Foreign degrees are assessed for equivalence."), SE],
      [T("المدة", "Validity"), T("حتى 9 أشهر، ولا تزيد على صلاحية جواز سفرك.", "Up to nine months, never longer than your passport is valid."), SE_KNOW],
      [T("المال", "Funds"), T("13,000 كرونة سويدية على الأقل في حساب بنكي عن كل شهر تطلبه، ويُفضّل أن يكون معك أيضاً ما يكفي لرحلة العودة.", "At least SEK 13,000 in bank assets for each month you apply for; you should also have money for your journey home."), SE],
      [T("التأمين الصحي", "Health insurance"), T("تأمين صحي شامل صالح للعلاج في السويد طوال المدة.", "Comprehensive health insurance valid for care in Sweden for the whole period."), SE_KNOW],
      [T("الرسوم", "Fee"), T("2,200 كرونة سويدية.", "SEK 2,200."), SE_APPLY],
      [T("أين تقدّم", "Where to apply"), T("إلكترونياً على موقع مصلحة الهجرة السويدية (لمن عمره 18 سنة أو أكثر، والدفع ببطاقة Visa أو Mastercard)، أو بالاستمارة 265511 في سفارة أو قنصلية سويدية.", "Online with the Swedish Migration Agency (aged 18 or over, paying by Visa or Mastercard), or with form 265511 at a Swedish embassy or consulate-general."), SE_APPLY],
      [T("مدة الانتظار", "Waiting time"), T("المصلحة تقول إنها لا تستطيع تحديد مدة القرار.", "The agency says it cannot say exactly how long a decision takes."), SE_KNOW],
      [T("بعد أن تجد عملاً", "Once you find a job"), T("تحتاج تصريح عمل، ومن شروطه راتب شهري لا يقل عن 34,470 كرونة (90% من الراتب الوسيط) منذ 16 يونيو 2026.", "You need a work permit; one requirement is a monthly salary of at least SEK 34,470 (90% of the median salary) since 16 June 2026."), SE],
    ],
    who: {
      title: T("من يستطيع التقديم", "Who can apply"),
      items: [
        T("أنهى دراسة بمستوى الماجستير أو أعلى (في أي بلد).", "Has completed studies at master's level or above (in any country)."),
        T("ينوي البحث عن عمل أو دراسة بدء مشروع في السويد.", "Plans to look for work or explore starting a business in Sweden."),
        T("يستطيع إعالة نفسه طوال المدة، ومعه تأمين صحي شامل.", "Can support themself for the whole period, with comprehensive health insurance."),
      ],
      src: SE_KNOW,
    },
    docs: {
      ar: ["جواز سفر ساري", "نسخة رقمية من الشهادة", "قائمة المواد التي درستها", "كشوف بنكية بالمبلغ المطلوب لكل شهر", "إثبات التأمين الصحي الشامل", "خطاب موافقة يسمح لمجلس التعليم العالي السويدي بالتواصل مع بلد دراستك (الاستمارة 265611)"],
      en: ["Valid passport", "Digital copy of your degree certificate", "List of the subjects you studied", "Bank statements showing the amount for every month", "Proof of comprehensive health insurance", "Letter of consent for the Swedish Council for Higher Education to contact your country of education (form 265611)"],
      src: SE,
    },
    links: [[T("صفحة مصلحة الهجرة", "Migration Agency page"), SE], [T("التقديم الإلكتروني والرسوم", "Online application and fee"), SE_APPLY], [T("الاستمارة 265511 (PDF)", "Form 265511 (PDF)"), SE_FORM]],
    note: T("المصلحة تقيّم شهادتك لتتأكد أنها تعادل مستوى الماجستير السويدي.", "The agency assesses your degree to check it matches the Swedish master's level."),
  },
  {
    id: "ae", slug: "uae-job-seeker", tool: null, job: true,
    name: T("تأشيرة استكشاف فرص العمل في الإمارات", "UAE visit visa to explore job opportunities"),
    short: T("60 أو 90 أو 120 يوماً للبحث عن عمل بدون كفيل", "60, 90 or 120 days to look for work without a sponsor"),
    lead: T(
      "تأشيرة زيارة تسمح للأجنبي بدخول الإمارات للبحث عن فرص عمل بدون مضيف أو كفيل داخل الدولة. هي للعمالة الماهرة أو لخريجي أفضل 500 جامعة في العالم. مواطنو دول الخليج لا يحتاجون تأشيرة لدخول الإمارات.",
      "A visit visa that lets a foreigner enter the UAE to look for work without a host or sponsor in the country. It is for skilled workers or graduates of the world's top 500 universities. GCC citizens need no visa to enter the UAE."),
    facts: [
      [T("المدة", "Validity"), T("60 أو 90 أو 120 يوماً، لزيارة واحدة أو أكثر. يوجد تمديد كخدمة منفصلة.", "60, 90 or 120 days, for one or more visits. Extension is a separate service."), AE],
      [T("الرسوم", "Fees"), T("60 يوماً: 200 درهم، 90 يوماً: 300 درهم، 120 يوماً: 400 درهم، يضاف إليها 5% ضريبة. وضمان مالي 1,000 درهم مع 20 درهماً رسوم الضمان و40 درهماً للتحصيل والاسترداد. ومن يقدّم وهو داخل الدولة يدفع 500 درهم إضافية و20 درهماً. الإجمالي قد يختلف حسب الحالة.", "60 days: AED 200, 90 days: AED 300, 120 days: AED 400, plus 5% VAT. A AED 1,000 financial guarantee with AED 20 guarantee fee and AED 40 for collection and refund. Applying from inside the country adds AED 500 and AED 20. The total may vary."), AE],
      [T("مدة الإنجاز", "Processing"), T("48 ساعة متوقعة.", "48 hours expected."), AE],
      [T("أين تقدّم", "Where to apply"), T("لتأشيرة صادرة من دبي: موقع أو تطبيق الإقامة وشؤون الأجانب في دبي (GDRFA) أو مراكز آمر. لباقي الإمارات: الخدمات الذكية للهيئة الاتحادية للهوية والجنسية (ICP).", "For a Dubai visa: the GDRFA Dubai website or app, or Amer centres. For the other emirates: the ICP smart services."), AE],
    ],
    who: {
      title: T("الشروط", "Requirements"),
      items: [
        T("أن تكون في المستوى المهاري الأول أو الثاني أو الثالث حسب تصنيف وزارة الموارد البشرية والتوطين، أو", "Be at skill level 1, 2 or 3 in the classification of the Ministry of Human Resources and Emiratisation, or"),
        T("خريجاً من إحدى أفضل 500 جامعة في العالم حسب تصنيف وزارة التربية والتعليم.", "Be a graduate of one of the world's top 500 universities per the Ministry of Education's ranking."),
        T("الحد الأدنى للتعليم: بكالوريوس أو ما يعادله.", "Minimum education: a bachelor's degree or equivalent."),
      ],
      src: AE,
    },
    docs: {
      ar: ["صورة شخصية", "نسخة جواز سفر صالح 6 أشهر على الأقل", "الشهادة الجامعية"],
      en: ["Personal photo", "Copy of a passport valid for at least six months", "University degree"],
      src: AE,
    },
    links: [[T("خدمة GDRFA دبي", "GDRFA Dubai service"), AE], [T("حكومة دبي: زيارة للعمل", "Dubai government: visiting for work"), AE_DXB], [T("الخدمات الذكية ICP", "ICP smart services"), AE_ICP]],
    note: T("صفحة الخدمة لا تذكر شرط «التخرج خلال آخر سنتين» الذي تذكره الصحف لخريجي أفضل 500 جامعة؛ اسأل الجهة قبل التقديم.", "The service page does not mention the 'graduated in the last two years' condition that newspapers report for top-500 graduates; ask before applying."),
  },
  {
    id: "pt", slug: "portugal-job-seeker", tool: null, job: true, closed: true,
    name: T("تأشيرة البحث عن عمل في البرتغال", "Portugal's job seeker visa"),
    short: T("متوقفة منذ 23 أكتوبر 2025؛ البديل لأصحاب المهارات العالية لم يُفتح بعد", "Suspended since 23 October 2025; the skilled replacement is not open yet"),
    lead: T(
      "كانت البرتغال تمنح تأشيرة بحث عن عمل لمدة 120 يوماً. القانون 61/2025 الصادر في 22 أكتوبر 2025 ألغاها في صورتها القديمة واستبدلها بـ«تأشيرة البحث عن عمل المؤهل» لأصحاب المهارات التقنية المتخصصة فقط. ألغت الحكومة كل المواعيد من 23 أكتوبر 2025، وأعلنت أن طلبات التأشيرة الجديدة لا تُقبل إلا بعد صدور قرار تنظيمي (portaria) يحدد المهن المشمولة.",
      "Portugal used to grant a 120-day job seeker visa. Law 61/2025 of 22 October 2025 ended it in its old form and replaced it with a 'qualified job seeker visa' for people with specialised technical skills only. The government cancelled all appointments from 23 October 2025 and said applications for the new visa will be accepted only once a regulation (portaria) defines the occupations covered."),
    facts: [
      [T("الحالة الآن", "Status now"), T("لا تُقبل طلبات. لم نجد قراراً تنظيمياً منشوراً حتى 21 نوفمبر 2026 (للتحقق).", "No applications accepted. We found no published regulation as of 21 November 2026 (to verify)."), PT_NOTE],
      [T("القانون", "Law"), T("القانون 61/2025 عدّل المادة 57-A من قانون الأجانب (القانون 23/2007).", "Law 61/2025 amended Article 57-A of the Foreigners' Law (Law 23/2007)."), PT_LAW],
      [T("لمن ستكون", "Who it will be for"), T("أصحاب المهارات التقنية المتخصصة فقط؛ المهن تحددها اللائحة عند صدورها.", "Only people with specialised technical skills; the regulation will list the occupations."), PT_LAW],
    ],
    who: {
      title: T("ماذا تفعل الآن؟", "What can you do now?"),
      items: [
        T("العمل في البرتغال يحتاج الآن عقد عمل أو وعداً بعقد قبل التأشيرة.", "Working in Portugal now needs a job contract or a promise of one before the visa."),
        T("إذا كنت تعمل عن بُعد فراجع تأشيرة الرحالة الرقميين البرتغالية في قسم العمل عن بُعد.", "If you work remotely, see Portugal's digital nomad visa in the remote work section."),
      ],
      src: PT_IEFP,
    },
    docs: { ar: ["لا توجد قائمة أوراق حالياً لأن التأشيرة لا تقبل طلبات."], en: ["There is no document list now because the visa is not accepting applications."], src: PT_NOTE },
    links: [[T("نص القانون 61/2025", "Law 61/2025"), PT_LAW], [T("إعلان الحكومة بإلغاء المواعيد", "Government notice cancelling appointments"), PT_NOTE], [T("دليل الحكومة: العمل في البرتغال", "Government guide: working in Portugal"), PT_IEFP]],
    note: T("سنحدّث هذه الصفحة عند صدور اللائحة وفتح الطلبات.", "We will update this page when the regulation is published and applications open."),
  },
  {
    id: "es", slug: "spain-digital-nomad", tool: null, nomad: true,
    name: T("تأشيرة العمل عن بُعد في إسبانيا (الرحّالة الرقميون)", "Spain's digital nomad visa (international teleworker)"),
    short: T("إقامة في إسبانيا لمن يعمل عن بُعد لشركات خارجها", "Live in Spain while working remotely for companies outside it"),
    lead: T(
      "تأشيرة الإقامة للعمل عن بُعد ذي الطابع الدولي تسمح لمن يعمل عن بُعد لشركة أو عملاء خارج إسبانيا بالعيش فيها. أنشأها قانون الشركات الناشئة (القانون 28/2022) في القانون 14/2013. الموظف يعمل فقط لشركات خارج إسبانيا، والعامل الحر يجوز أن يأتي حتى 20% من عمله من عملاء في إسبانيا.",
      "The residence visa for international telework lets people who work remotely for a company or clients outside Spain live there. It was created in Law 14/2013 by the Startups Law (Law 28/2022). Employees may work only for companies outside Spain; freelancers may take up to 20% of their work from Spanish clients."),
    facts: [
      [T("المدة", "Validity"), T("التأشيرة من القنصلية: سنة واحدة للإقامة والعمل عن بُعد. قبل انتهائها بـ60 يوماً تطلب من داخل إسبانيا تصريح إقامة لمدة أقصاها 3 سنوات. التجديد لمدة سنتين ورد في ملخصات قانونية (للتحقق).", "The consular visa: one year of residence and remote work. Within 60 days before it expires you apply in Spain for a residence authorisation of up to 3 years. Renewal for 2 years appears in legal summaries (to verify)."), TEL_PDF],
      [T("الدخل المطلوب", "Required income"), T("200% من الحد الأدنى للأجور (SMI) شهرياً، إجمالي قبل الضرائب. الحد الأدنى في 2026 هو 1,221 يورو شهرياً على 14 دفعة (17,094 يورو سنوياً)، فيكون المطلوب 2,442 يورو شهرياً بالحساب الشهري، أو نحو 2,849 يورو إذا قُسّم المبلغ السنوي على 12 شهراً. اسأل القنصلية أي حساب تعتمد (للتحقق).", "200% of the minimum wage (SMI) a month, gross. The 2026 SMI is €1,221 a month in 14 payments (€17,094 a year), so the figure is €2,442 a month on the monthly basis, or about €2,849 if the yearly amount is divided by 12. Ask the consulate which basis it uses (to verify)."), UGE_DOCS],
      [T("العائلة", "Family"), T("75% من الحد الأدنى للأجور لأول فرد من العائلة، و25% لكل فرد إضافي. يمكن أن يأتي الزوج أو الشريك والأبناء المعالون والوالدان المعالون، ويحق لهم العمل.", "75% of the SMI for the first family member and 25% for each extra one. A spouse or partner, dependent children and dependent parents may come, and they may work."), UGE_FAQ],
      [T("علاقة العمل", "Work relationship"), T("تعمل لدى الشركة أو مع العملاء منذ 3 أشهر على الأقل، والشركة قائمة منذ سنة على الأقل، ومعك موافقة صريحة على العمل عن بُعد.", "At least 3 months with the employer or clients, a company that has existed for at least one year, and express permission to work remotely."), BLS_EG],
      [T("المؤهل", "Qualification"), T("شهادة جامعية أو مهنية، أو خبرة 3 سنوات على الأقل في عمل مشابه. المهن المنظمة تحتاج معادلة الشهادة.", "A university or vocational degree, or at least 3 years of similar work experience. Regulated professions need the degree recognised."), BLS_EG],
      [T("أين تقدّم", "Where to apply"), T("من خارج إسبانيا: قنصلية إسبانيا في بلد إقامتك (في مصر عبر مركز BLS، والقرار خلال 10 أيام من اليوم التالي للتقديم ما لم تُطلب أوراق أو مقابلة). من داخل إسبانيا بإقامة قانونية: طلب إقامة مباشرة لدى وحدة الشركات الكبرى (UGE) التابعة لوزارة الإدماج.", "From outside Spain: the Spanish consulate in your country of residence (in Egypt through BLS; a decision within 10 days from the day after you apply unless documents or an interview are requested). From inside Spain with legal stay: a residence application straight to the Large Companies Unit (UGE) of the Ministry of Inclusion."), BLS_EG],
      [T("الرسوم", "Fees"), T("رسوم التأشيرة من القنصلية: غير منشور في المصدر (راجع موقع BLS، تُدفع نقداً ولا تُسترد). طلب الإقامة من داخل إسبانيا: 73.26 يورو لكل شخص.", "Consular visa fee: not published in the source (check the BLS site; paid in cash, not refunded). Residence application inside Spain: €73.26 per person."), UGE_FAQ],
      [T("بعد الوصول", "After arrival"), T("قائمة BLS تقول إن التأشيرة تكفي لإثبات الإقامة خلال مدتها، وتطلب في الوقت نفسه التقدّم شخصياً على بطاقة الأجنبي (TIE) خلال شهر من الدخول لدى شرطة الأجانب في مقاطعتك. اسأل القنصلية (للتحقق).", "The BLS list says the visa proves residence while it is valid, and also asks you to apply in person for the foreigner's card (TIE) within one month of entry at the provincial foreigners' police office. Ask the consulate (to verify)."), BLS_EG],
    ],
    who: {
      title: T("من يستطيع التقديم", "Who can apply"),
      items: [
        T("مواطن من خارج الاتحاد الأوروبي، بالغ، ولم يكن في إسبانيا بوضع غير قانوني.", "A non-EU national, adult, not staying in Spain irregularly."),
        T("يعمل عن بُعد بالكامل عبر الإنترنت لشركة أو عملاء خارج إسبانيا (موظف أو عامل حر).", "Working fully remotely online for a company or clients outside Spain (employee or freelancer)."),
        T("يلتزم بالضمان الاجتماعي: يسجّل في الضمان الإسباني، أو يقدّم شهادة التشريع المطبق إذا كان بين بلده وإسبانيا اتفاق ضمان اجتماعي.", "Meets social security rules: registers with Spanish social security, or brings a certificate of applicable legislation if his country has a social security agreement with Spain."),
      ],
      src: UGE_FAQ,
    },
    docs: {
      ar: ["استمارة التأشيرة الوطنية وصورة", "جواز سفر ساري لسنة على الأقل", "شهادة خلو من السوابق من بلدان إقامتك صادرة خلال آخر سنتين (في مصر مع إقرار عن آخر 5 سنوات موثق من الخارجية والسفارة الإسبانية)", "تأمين صحي من شركة مرخصة في إسبانيا يغطي ما يغطيه النظام العام، أو تغطية الضمان الإسباني", "خطاب من صاحب العمل بمدة العمل والموافقة على العمل عن بُعد، أو عقود العامل الحر", "سجل تجاري للشركة يثبت أنها قائمة منذ سنة", "إقرار الالتزام بالضمان الاجتماعي وما يثبت التسجيل", "إثبات الدخل", "الشهادة أو إثبات خبرة 3 سنوات", "ترجمة الأوراق الرسمية إلى الإسبانية بمترجم محلّف (ما عدا كشوف البنك، حسب BLS مصر)"],
      en: ["National visa form and photo", "Passport valid for at least one year", "Criminal record certificate from your countries of residence issued in the last two years (in Egypt also a sworn statement for the last 5 years legalised by the Foreign Ministry and the Spanish Embassy)", "Health insurance from an insurer authorised in Spain covering what the public system covers, or Spanish social security cover", "Employer letter with length of service and permission to work remotely, or a freelancer's contracts", "Company registry certificate showing it has existed for a year", "Social security commitment statement and proof of registration", "Proof of income", "Degree or proof of 3 years' experience", "Official documents translated into Spanish by a sworn translator (except bank statements, per BLS Egypt)"],
      src: BLS_EG,
    },
    links: [[T("قائمة أوراق BLS مصر", "BLS Egypt document list"), BLS_EG], [T("أسئلة وزارة الإدماج (بالإنجليزية)", "Ministry of Inclusion FAQ"), UGE_FAQ], [T("الحد الأدنى للأجور 2026 (الجريدة الرسمية)", "2026 minimum wage (Official Gazette)"), SMI]],
    note: T("القواعد والمبالغ تتغير مع الحد الأدنى للأجور كل سنة؛ راجع قنصلية إسبانيا في بلد إقامتك قبل التقديم.", "Rules and amounts change with the minimum wage every year; check with the Spanish consulate in your country of residence before applying."),
  },
  {
    id: "de", slug: "germany-eu-blue-card", tool: null, imm: true,
    name: T("البطاقة الزرقاء الأوروبية في ألمانيا (EU Blue Card)", "Germany's EU Blue Card"),
    short: T("إقامة عمل لأصحاب الشهادات الجامعية مع عرض عمل براتب 50,700 يورو سنوياً (45,934.20 لمهن النقص)، وإقامة دائمة بعد 21 إلى 27 شهراً", "A work permit for graduates with a job offer paying €50,700 a year (€45,934.20 in shortage occupations), and settlement after 21 to 27 months"),
    lead: T(
      "البطاقة الزرقاء الأوروبية إقامة عمل خاصة لأصحاب المؤهلات العالية من خارج الاتحاد الأوروبي (المادة 18g من قانون الإقامة الألماني). تحتاج عرض عمل في ألمانيا يناسب مؤهلك، براتب لا يقل عن الحد السنوي المحدد. كل دولة أوروبية تطبق البطاقة بحدود رواتب خاصة بها؛ هذه الصفحة عن ألمانيا لأنها أكثر الوجهات طلباً.",
      "The EU Blue Card is a special work permit for highly qualified non-EU nationals (Section 18g of the German Residence Act). You need a job offer in Germany matching your qualification, paying at least the yearly threshold. Each EU country runs the card with its own salary thresholds; this page covers Germany, the most requested destination."),
    facts: [
      [T("الراتب (2026)", "Salary (2026)"), T("50,700 يورو إجمالي في السنة على الأقل. و45,934.20 يورو لمهن النقص وللخريجين الجدد (آخر شهادة منذ أقل من 3 سنوات)، وهنا تحتاج موافقة وكالة التوظيف الاتحادية.", "At least €50,700 gross a year. €45,934.20 for shortage occupations and new graduates (last degree under three years ago), which then need Federal Employment Agency approval."), BC],
      [T("الشهادة", "Qualification"), T("شهادة جامعية ألمانية أو أجنبية معادلة لها، أو مؤهل عالٍ لا تقل مدته عن 3 سنوات (المستوى 6). وخبراء تقنية المعلومات بدون شهادة: 3 سنوات خبرة على الأقل خلال آخر 7 سنوات وراتب 45,934.20 يورو.", "A German degree or a comparable foreign one, or a tertiary qualification of at least three years (level 6). IT specialists without a degree: at least three years of experience in the last seven and a salary of €45,934.20."), BC],
      [T("عرض العمل", "Job offer"), T("عقد أو عرض لا تقل مدته عن 6 أشهر ويناسب مؤهلك. المهن المنظمة (مثل الطب) تحتاج ترخيص مزاولة.", "A contract or offer of at least six months that matches your qualification. Regulated professions (such as medicine) need a licence to practise."), BC],
      [T("المدة", "Validity"), T("مدة عقد العمل + 3 أشهر، وبحد أقصى 4 سنوات، ويمكن تجديدها في ألمانيا.", "The length of the employment contract plus three months, up to four years, renewable in Germany."), BC],
      [T("الإقامة الدائمة", "Settlement permit"), T("بعد 27 شهراً مع ألمانية A1، أو بعد 21 شهراً مع ألمانية B1.", "After 27 months with German A1, or after 21 months with German B1."), BC],
      [T("الرسوم", "Fees"), T("حتى 100 يورو.", "Up to €100."), BC_PDF],
      [T("أين تقدّم", "Where to apply"), T("تأشيرة عمل من السفارة الألمانية في بلد إقامتك أو عبر بوابة الخدمات القنصلية الإلكترونية، ثم البطاقة من مكتب الأجانب في ألمانيا.", "A work visa from the German mission where you live or through the online consular services portal, then the card from the foreigners authority in Germany."), BC],
      [T("العائلة", "Family"), T("لمّ شمل الأسرة متاح.", "Family reunification is possible."), BC],
    ],
    who: {
      title: T("من يستطيع التقديم", "Who can apply"),
      items: [
        T("صاحب شهادة جامعية معترف بها أو معادلة في ألمانيا (يمكن التحقق في anabin أو ببيان مقارنة من ZAB).", "A holder of a degree recognised or comparable in Germany (check anabin or get a ZAB Statement of Comparability)."),
        T("معه عرض عمل في ألمانيا يناسب مؤهله، لمدة 6 أشهر على الأقل، وبالراتب المطلوب.", "Has a job offer in Germany matching the qualification, for at least six months, at the required salary."),
        T("لا تحتاج لغة ألمانية للحصول على البطاقة نفسها؛ اللغة تُسرّع الإقامة الدائمة.", "No German is needed for the card itself; German speeds up the settlement permit."),
        T("إذا غيّرت عملك في أول سنة تُبلغ مكتب الأجانب ليتحقق من استمرار الشروط.", "If you change jobs in the first year, you notify the foreigners authority, which checks you still qualify."),
      ],
      src: BC,
    },
    docs: {
      ar: ["جواز سفر ساري واستمارة التأشيرة الوطنية", "عقد العمل أو عرض العمل الموقّع", "الشهادة الجامعية وإثبات معادلتها (anabin أو بيان ZAB)", "سيرة ذاتية", "تأمين صحي", "ترخيص المزاولة للمهن المنظمة إن وُجد", "ما تطلبه السفارة في بلدك في قائمتها الخاصة"],
      en: ["Valid passport and the national visa form", "Signed employment contract or job offer", "Degree certificate and proof it is comparable (anabin or ZAB statement)", "CV", "Health insurance", "Licence to practise for regulated professions, if any", "Anything your local German mission lists in its own checklist"],
      src: BC_LIST,
    },
    links: [[T("صفحة البطاقة الزرقاء في Make it in Germany", "Make it in Germany: EU Blue Card"), BC], [T("ملخص البطاقة (PDF)", "At a glance (PDF)"), BC_PDF], [T("وكالة التوظيف: البطاقة الزرقاء", "Federal Employment Agency: EU Blue Card"), BC_BA]],
    note: T("حدود الراتب تتغير كل سنة في يناير؛ رقم 2026 هو المعروض هنا.", "The salary thresholds change every January; the 2026 figures are shown here."),
  },
  {
    id: "ca", slug: "canada-express-entry", tool: "fsw", imm: true,
    name: T("الهجرة إلى كندا عبر الإكسبريس إنتري (Express Entry)", "Immigrating to Canada through Express Entry"),
    short: T("إقامة دائمة في كندا بنظام نقاط، بدون عرض عمل؛ الحد الأدنى لبرنامج العمال المهرة 67 نقطة من 100", "Permanent residence in Canada through a points system, no job offer needed; the skilled worker programme needs 67 of 100 points"),
    lead: T(
      "الإكسبريس إنتري هو النظام الإلكتروني الذي تدير به كندا ثلاثة برامج للإقامة الدائمة للعمالة الماهرة. لمن يعيش خارج كندا، الطريق المعتاد هو برنامج العمال المهرة الفيدرالي (Federal Skilled Worker). تنشئ ملفاً إلكترونياً، فتحصل على نقاط في نظام الترتيب الشامل (CRS)، وتدعو كندا أصحاب أعلى النقاط في جولات دورية للتقديم على الإقامة الدائمة.",
      "Express Entry is the online system Canada uses to manage three permanent residence programmes for skilled workers. For people living outside Canada, the usual route is the Federal Skilled Worker Program. You create an online profile, get a score in the Comprehensive Ranking System (CRS), and Canada invites the highest-ranked candidates in regular rounds to apply for permanent residence."),
    facts: [
      [T("الشروط الأساسية (العمال المهرة)", "Minimum requirements (skilled workers)"), T("سنة عمل متصلة على الأقل بدوام كامل في وظيفة ماهرة خلال آخر 10 سنوات، ولغة بمستوى CLB 7 في المهارات الأربع، وتعليم ثانوي على الأقل مع تقييم الشهادة الأجنبية (ECA)، و67 نقطة من 100.", "At least one year of continuous full-time skilled work in the last 10 years, language at CLB 7 in all four abilities, at least secondary education with an assessment of foreign credentials (ECA), and 67 of 100 points."), FSW],
      [T("إثبات المال", "Proof of funds"), T("15,263 دولاراً كندياً لشخص واحد، و19,001 لشخصين، و23,360 لثلاثة، و28,362 لأربعة (أرقام 7 يوليو 2025). لا يلزم لمن يعمل في كندا بتصريح ومعه عرض عمل صالح.", "CAD 15,263 for one person, 19,001 for two, 23,360 for three, 28,362 for four (7 July 2025 figures). Not needed if you are authorised to work in Canada and have a valid job offer."), CA_FUNDS],
      [T("الخطوات", "Steps"), T("تنشئ ملفاً في حسابك الإلكتروني ← تدخل قائمة المرشحين بنقاط CRS ← إذا وصلتك دعوة (ITA) لديك 60 يوماً لتقديم الطلب الكامل.", "Create a profile in your online account → join the pool with a CRS score → if you get an invitation (ITA), you have 60 days to send the full application."), CA_EE],
      [T("مدة المعالجة", "Processing"), T("معظم الطلبات الكاملة تُعالج في 6 أشهر أو أقل بعد تقديمها.", "Most complete applications are processed in six months or less after you apply."), CA_EE_PUB],
      [T("الرسوم", "Fees"), T("رسم حق الإقامة الدائمة 600 دولار كندي للمتقدم الرئيسي وزوجه من 30 أبريل 2026، بالإضافة إلى رسوم المعالجة (990 دولاراً للمتقدم الرئيسي حسب الأخبار، للتحقق في قائمة الرسوم الرسمية) والبصمات.", "The right of permanent residence fee is CAD 600 for the principal applicant and spouse from 30 April 2026, plus the processing fee (CAD 990 for the principal applicant per the news, to verify on the official fee list) and biometrics."), CA_FEE],
      [T("تغيير نوفمبر 2026", "November 2026 change"), T("من 3 نوفمبر 2026 أُضيفت نقاط CRS لعروض العمل والخبرة الكندية في المهن مرتفعة الأجر، بدون حاجة لتقييم سوق العمل (LMIA)، حسب إعلان الحكومة في 16 أكتوبر 2026 (للتحقق من التفاصيل في صفحة نظام CRS).", "From 3 November 2026, CRS points were added for job offers and Canadian experience in high-wage occupations, with no LMIA needed, per the government announcement of 16 October 2026 (check the details on the CRS page)."), CA_CRS],
      [T("بعد الوصول", "After arrival"), T("مقيم دائم: تعيش وتعمل في أي مكان في كندا.", "Permanent resident: live and work anywhere in Canada."), CA_EE],
    ],
    who: {
      title: T("قبل أن تبدأ", "Before you start"),
      items: [
        T("اختبار لغة معتمد من الهجرة الكندية (للإنجليزية مثل IELTS General Training أو CELPIP أو PTE Core) لا يزيد عمره عن سنتين.", "A language test approved by IRCC (for English, such as IELTS General Training, CELPIP or PTE Core) less than two years old."),
        T("تقييم الشهادة التعليمية الأجنبية (ECA) من جهة معتمدة.", "An Educational Credential Assessment (ECA) from a designated organisation."),
        T("تحديد كود وظيفتك في التصنيف الكندي للمهن (NOC) وأنها من فئات TEER 0 إلى 3.", "Find your job's National Occupational Classification (NOC) code and check it is TEER 0 to 3."),
        T("الدعوات تذهب لأعلى النقاط في كل جولة، وبعض الجولات لفئات مهن محددة؛ تحقيق 67 نقطة يجعلك مؤهلاً لدخول القائمة فقط، ولا يضمن الدعوة.", "Invitations go to the highest scores in each round, and some rounds are for specific occupation categories; 67 points only makes you eligible for the pool and does not guarantee an invitation."),
      ],
      src: FSW,
    },
    docs: {
      ar: ["جواز سفر ساري", "نتيجة اختبار اللغة", "تقييم الشهادة (ECA)", "خطابات الخبرة من أصحاب العمل (المهام والساعات والراتب)", "إثبات المال (خطابات رسمية من البنك)", "شهادات حسن السير والسلوك من كل بلد عشت فيه 6 أشهر أو أكثر منذ سن 18", "الفحص الطبي لدى طبيب معتمد", "البصمات"],
      en: ["Valid passport", "Language test result", "Educational Credential Assessment (ECA)", "Reference letters from employers (duties, hours, salary)", "Proof of funds (official bank letters)", "Police certificates from each country you lived in for six months or more since age 18", "Medical exam with an approved panel physician", "Biometrics"],
      src: CA_EE,
    },
    links: [[T("برنامج العمال المهرة الفيدرالي", "Federal Skilled Worker Program"), FSW], [T("نقاط الاختيار الستة", "The six selection factors"), FSW_PTS], [T("إثبات المال", "Proof of funds"), CA_FUNDS], [T("نظام الترتيب الشامل CRS", "Comprehensive Ranking System"), CA_CRS]],
    note: T("الحساب في الأداة يخص شرط الـ67 نقطة فقط، وليس نقاط CRS التي تحدد الدعوة؛ أداة كندا الرسمية هي المرجع.", "The tool counts only the 67-point eligibility grid, not the CRS score that decides invitations; Canada's official tools decide."),
  },
];
export const ROUTE_BY_SLUG = Object.fromEntries(ROUTES.map((r) => [r.slug, r]));
export const ROUTE_SLUGS = ROUTES.map((r) => r.slug);

export const RTEXT = {
  ar: {
    section: "تأشيرات الإقامة الطويلة", disclaimer: "معلومات عامة من المصادر الرسمية وليست استشارة قانونية. السفارة أو القنصلية وسلطات الهجرة هي التي تقرر، والمبالغ والقواعد تتغير؛ راجع المصدر الرسمي قبل التقديم.", sectionLead: "طرق للإقامة والعمل، بالتفاصيل الرسمية.", who: "الشروط", docs: "الأوراق الأساسية", links: "روابط رسمية", src: "المصدر",
    meta: (n) => `${n}: الشروط والمال والأوراق وأين تقدّم | بوابة السفر`,
    desc: (n) => `${n} للجوازات العربية: من يستحقها، والمال المطلوب، والمدة، والعمل، والأوراق وأين تقدّم، من المصادر الرسمية.`,
    jobSection: "تأشيرات البحث عن عمل", jobLead: "تدخل الدولة وتبحث عن عمل بدون عرض عمل مسبق.", closed: "متوقفة حالياً", longSection: "إقامات طويلة أخرى", immSection: "الهجرة والعمل بعرض عمل", immLead: "إقامات عمل وإقامة دائمة، بالشروط والأرقام الرسمية.",
    fsw: { title: "احسب نقاط برنامج العمال المهرة الكندي (تقريبي)", lang1: "مستواك في الإنجليزية أو الفرنسية (أقل مهارة من الأربع)", lang2: "اللغة الرسمية الثانية CLB 5 أو أعلى في المهارات الأربع (+4)", edu: "التعليم (حسب تقييم ECA)", exp: "سنوات الخبرة الماهرة", age: "العمر", job: "معك عرض عمل مؤهل في كندا لمدة سنة على الأقل (+10)", adapt: "التكيف (الحد الأقصى 10)", total: "مجموع نقاطك", of: "من 100، والحد الأدنى 67", ok: "تبدو مؤهلاً لدخول قائمة الإكسبريس إنتري. الدعوة تعتمد على نقاط CRS، وهي نظام آخر.", need: "تحتاج 67 نقطة على الأقل لتكون مؤهلاً.", low: "أقل من CLB 7 في أي مهارة: لا يحق لك التقديم في هذا البرنامج.", calc: "صفحة النقاط الرسمية", none: "أقل من CLB 7" },
    atp: { title: "احسب نقاطك للنمسا (تقريبي)", total: "مجموع نقاطك", of: "من 100، والحد الأدنى 70", ok: "تبدو محققاً للحد الأدنى. تأكد بالحاسبة الرسمية قبل التقديم.", need: "تحتاج 70 نقطة على الأقل.", cap: "الحد الأقصى", calc: "الحاسبة الرسمية" },
    pts: { title: "احسب نقاطك (تقريبي)", basic: "الشروط الأساسية للطريق الثاني", qual: "مؤهلي معترف به في البلد الذي حصلت عليه منه", lang: "معي ألمانية A1 أو إنجليزية B2 على الأقل", money: "أستطيع إثبات المال (13,092 يورو لسنة)", full: "شهادتي معترف بها اعترافاً كاملاً في ألمانيا (الطريق الأول، بدون نقاط)", total: "مجموع نقاطك", need: "تحتاج 6 نقاط على الأقل.", ok: "تبدو مستوفياً للحد الأدنى من النقاط. تأكد بالاختبار الرسمي قبل التقديم.", fullOk: "مع الاعتراف الكامل لا تحتاج نقاطاً؛ يكفي إثبات المال.", miss: "ينقصك شرط أساسي:", self: "الاختبار الرسمي" },
  },
  en: {
    section: "Long-stay visas", disclaimer: "General information from official sources, not legal advice. The embassy or consulate and the immigration authorities decide, and amounts and rules change; check the official source before applying.", sectionLead: "Routes to live and work abroad, with the official details.", who: "Requirements", docs: "Main documents", links: "Official links", src: "Source",
    meta: (n) => `${n}: requirements, funds, documents and where to apply | Bawabat AlSafar`,
    desc: (n) => `${n} for Arab passport holders: who qualifies, the money you need, how long it lasts, work rights, documents and where to apply, from official sources.`,
    jobSection: "Job seeker visas", jobLead: "Enter the country and look for work without a job offer.", closed: "Suspended", longSection: "Other long-stay routes", immSection: "Immigration and work with a job offer", immLead: "Work permits and permanent residence, with the official rules and figures.",
    fsw: { title: "Count your Canadian skilled worker points (a guide)", lang1: "Your English or French level (your weakest of the four abilities)", lang2: "Second official language at CLB 5 or higher in all four abilities (+4)", edu: "Education (per your ECA)", exp: "Years of skilled work experience", age: "Age", job: "You have a qualifying job offer in Canada of at least one year (+10)", adapt: "Adaptability (maximum 10)", total: "Your points", of: "of 100; the minimum is 67", ok: "You seem eligible to enter the Express Entry pool. Invitations depend on your CRS score, which is a different system.", need: "You need at least 67 points to be eligible.", low: "Below CLB 7 in any ability: you cannot apply under this programme.", calc: "Official points page", none: "Below CLB 7" },
    atp: { title: "Count your points for Austria (a guide)", total: "Your points", of: "of 100; the minimum is 70", ok: "You seem to reach the minimum. Confirm with the official calculator before applying.", need: "You need at least 70 points.", cap: "maximum", calc: "Official calculator" },
    pts: { title: "Count your points (a guide)", basic: "Basic requirements for path 2", qual: "My qualification is recognised in the country where I got it", lang: "I have at least German A1 or English B2", money: "I can prove the funds (€13,092 for a year)", full: "My degree is fully recognised in Germany (path 1, no points)", total: "Your points", need: "You need at least 6 points.", ok: "You seem to reach the minimum points. Confirm with the official self-check before applying.", fullOk: "With full recognition you need no points; proof of funds is enough.", miss: "A basic requirement is missing:", self: "Official self-check" },
  },
};
