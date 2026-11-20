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

const BLS_EG = "https://egypt.blsspainvisa.com/spanish/pdf/checklist-digital-nomad.pdf";
const UGE_FAQ = "https://bibliovirtual.inclusion.gob.es/documents/d/unidadgrandesempresas/digital-nomad-faqs-english";
const UGE_DOCS = "https://www.inclusion.gob.es/documents/d/unidadgrandesempresas/informacion-documentacion-titulares";
const SMI = "https://www.boe.es/eli/es/rd/2026/02/18/126/con";
const TEL_PDF = "https://exteriores.gob.es/Consulados/santiagodechile/es/ServiciosConsulares/Documents/Info%20visado%20TELETRABAJO.pdf";

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
    id: "de", slug: "germany-opportunity-card", tool: "points",
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
    id: "es", slug: "spain-digital-nomad", tool: null,
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
      ar: ["استمارة التأشيرة الوطنية وصورة", "جواز سفر ساري لسنة على الأقل", "شهادة خلو من السوابق من بلدان إقامتك صادرة خلال آخر سنتين (في مصر مع إقرار عن آخر 5 سنوات موثق من الخارجية والسفارة الإسبانية)", "تأمين صحي من شركة مرخصة في إسبانيا يغطي ما يغطيه النظام العام، أو تغطية الضمان الإسباني", "خطاب من صاحب العمل بمدة العمل والموافقة على العمل عن بُعد، أو عقود العامل الحر", "سجل تجاري للشركة يثبت أنها قائمة منذ سنة", "إقرار الالتزام بالضمان الاجتماعي وما يثبت التسجيل", "إثبات الدخل", "الشهادة أو إثبات خبرة 3 سنوات"],
      en: ["National visa form and photo", "Passport valid for at least one year", "Criminal record certificate from your countries of residence issued in the last two years (in Egypt also a sworn statement for the last 5 years legalised by the Foreign Ministry and the Spanish Embassy)", "Health insurance from an insurer authorised in Spain covering what the public system covers, or Spanish social security cover", "Employer letter with length of service and permission to work remotely, or a freelancer's contracts", "Company registry certificate showing it has existed for a year", "Social security commitment statement and proof of registration", "Proof of income", "Degree or proof of 3 years' experience"],
      src: BLS_EG,
    },
    links: [[T("قائمة أوراق BLS مصر", "BLS Egypt document list"), BLS_EG], [T("أسئلة وزارة الإدماج (بالإنجليزية)", "Ministry of Inclusion FAQ"), UGE_FAQ], [T("الحد الأدنى للأجور 2026 (الجريدة الرسمية)", "2026 minimum wage (Official Gazette)"), SMI]],
    note: T("القواعد والمبالغ تتغير مع الحد الأدنى للأجور كل سنة؛ راجع قنصلية إسبانيا في بلد إقامتك قبل التقديم.", "Rules and amounts change with the minimum wage every year; check with the Spanish consulate in your country of residence before applying."),
  },
];
export const ROUTE_BY_SLUG = Object.fromEntries(ROUTES.map((r) => [r.slug, r]));
export const ROUTE_SLUGS = ROUTES.map((r) => r.slug);

export const RTEXT = {
  ar: {
    section: "تأشيرات الإقامة الطويلة", disclaimer: "معلومات عامة من المصادر الرسمية وليست استشارة قانونية. السفارة أو القنصلية وسلطات الهجرة هي التي تقرر، والمبالغ والقواعد تتغير؛ راجع المصدر الرسمي قبل التقديم.", sectionLead: "طرق للإقامة والعمل، بالتفاصيل الرسمية.", who: "الشروط", docs: "الأوراق الأساسية", links: "روابط رسمية", src: "المصدر",
    meta: (n) => `${n}: الشروط والمال والأوراق وأين تقدّم | بوابة السفر`,
    desc: (n) => `${n} للجوازات العربية: من يستحقها، والمال المطلوب، والمدة، والعمل، والأوراق وأين تقدّم، من المصادر الرسمية.`,
    pts: { title: "احسب نقاطك (تقريبي)", basic: "الشروط الأساسية للطريق الثاني", qual: "مؤهلي معترف به في البلد الذي حصلت عليه منه", lang: "معي ألمانية A1 أو إنجليزية B2 على الأقل", money: "أستطيع إثبات المال (13,092 يورو لسنة)", full: "شهادتي معترف بها اعترافاً كاملاً في ألمانيا (الطريق الأول، بدون نقاط)", total: "مجموع نقاطك", need: "تحتاج 6 نقاط على الأقل.", ok: "تبدو مستوفياً للحد الأدنى من النقاط. تأكد بالاختبار الرسمي قبل التقديم.", fullOk: "مع الاعتراف الكامل لا تحتاج نقاطاً؛ يكفي إثبات المال.", miss: "ينقصك شرط أساسي:", self: "الاختبار الرسمي" },
  },
  en: {
    section: "Long-stay visas", disclaimer: "General information from official sources, not legal advice. The embassy or consulate and the immigration authorities decide, and amounts and rules change; check the official source before applying.", sectionLead: "Routes to live and work abroad, with the official details.", who: "Requirements", docs: "Main documents", links: "Official links", src: "Source",
    meta: (n) => `${n}: requirements, funds, documents and where to apply | Bawabat AlSafar`,
    desc: (n) => `${n} for Arab passport holders: who qualifies, the money you need, how long it lasts, work rights, documents and where to apply, from official sources.`,
    pts: { title: "Count your points (a guide)", basic: "Basic requirements for path 2", qual: "My qualification is recognised in the country where I got it", lang: "I have at least German A1 or English B2", money: "I can prove the funds (€13,092 for a year)", full: "My degree is fully recognised in Germany (path 1, no points)", total: "Your points", need: "You need at least 6 points.", ok: "You seem to reach the minimum points. Confirm with the official self-check before applying.", fullOk: "With full recognition you need no points; proof of funds is enough.", miss: "A basic requirement is missing:", self: "Official self-check" },
  },
};
