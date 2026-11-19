# Croatia and Slovakia: first English-taught master's (both countries had bachelor's/medicine only).
# Writes data/programmes/croatia.csv and slovakia.csv (master's level only; bachelor's files untouched) and copies them into
# all_programmes.csv with stable ids. Re-running is safe.
# Croatia source: University of Zagreb "Study in English 2025/2026" brochure + faculty pages. 2027/2028 dates are not out.
# Slovakia: FEI STU (no tuition for English master's), FIIT STU + FEI TUKE joint AI, TUKE Faculty of Economics.
# FER Zagreb skipped (master's in English suspended, quotas 0). STU FCHPT skipped (programmes taught in Slovak).
# Checked 2026-11-19.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import write, NP
from helpers import add, append_master

MA_D = ("ماجستير", "Master's degree")
Y1 = ("سنة واحدة (60 ساعة معتمدة)", "1 year (60 credits)")
Y2 = ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)")

# ---------------- Croatia (University of Zagreb) ----------------
HR = []
UNIZG_PDF = "https://www.unizg.hr/fileadmin/rektorat/Studiji_studiranje/Studiji/Studiranje/studiji_na_engleskom/2025_26__Study_in_english_e_izdanje.pdf"
HR_HOW = ("التقديم أونلاين على صفحة الكلية، ثم الاعتراف بالشهادة الأجنبية، ثم تصريح الإقامة المؤقتة للدراسة من السفارة الكرواتية أو قسم الشرطة في كرواتيا",
          "Apply online on the faculty's page, get the foreign degree recognised, then the temporary stay permit for study via the Croatian embassy or the police in Croatia")

# Faculty of Economics and Business: one-year Master Degree in Business (five majors) and Master Degree in Economics
EFZG_FEE = ("5,000 يورو سنوياً، ويمكن دفعها على 4 أقساط", "€5,000 per year, payable in four instalments")
EFZG_ADM = ("رسوم قيد 66.36 يورو بجانب الرسوم الدراسية", "€66.36 enrolment fee on top of the tuition fee")
EFZG_DL = ("التقديم أونلاين للمتقدمين الدوليين مفتوح حتى بدء الدراسة في الأسبوع الأول من نوفمبر (حسب دورة 2026/2027)؛ مواعيد 2027/2028 غير منشورة بعد (للتحقق)",
           "Online applications for international applicants stay open until classes start in the first week of November (2026/2027 cycle); 2027/2028 dates not published yet (to verify)")
EFZG_EN = ("غير منشور في المصدر: البرنامج بالإنجليزية بالكامل ولا تذكر الصفحة اختباراً بحد أدنى", "Not published in the source: the programme is taught fully in English and the page names no minimum test score")
EFZG_REQ = "يشترط بكالوريوس في الاقتصاد أو إدارة الأعمال يعادل 240 ساعة معتمدة (4 سنوات)"
EFZG_REQ_EN = "Requires a bachelor's in economics or business equivalent to 240 ECTS (4 years)"
EFZG_LIST = "https://www.efzg.unizg.hr/english-taught-study-programmes/11770"
for field, name, ar, en, src in [
    ("bus", "Master Degree in Business: Managerial Informatics", "إدارة نظم المعلومات في الشركات (التجارة الإلكترونية وإدارة تقنية المعلومات)", "Managing information systems in companies (e-business, ICT management)", "https://www.efzg.unizg.hr/default.aspx?id=17070"),
    ("bus", "Master Degree in Business: Management", "إدارة الشركات الخاصة والعامة والمنظمات غير الربحية", "Management of private and public companies and non-profit organisations", "https://www.efzg.unizg.hr/management-23598/23598"),
    ("bus", "Master Degree in Business: Marketing", "مهارات التسويق وتطبيقها في الأعمال", "Marketing skills and their application in business", "https://www.efzg.unizg.hr/default.aspx?id=43493"),
    ("bus", "Master Degree in Business: Trade and International Business", "اقتصاديات التجارة وإدارة تجارة التجزئة والجملة وبورصات السلع", "Trade economics, retail and wholesale management and commodity exchanges", EFZG_LIST),
    ("bus", "Master Degree in Business: Leadership", "القيادة في الأعمال والقطاع الحكومي وغير الربحي", "Leadership in business, government and non-profit management", EFZG_LIST),
    ("econ", "Master Degree in Economics", "تطبيق التحليل الاقتصادي الجزئي والكلي؛ اللقب Master of Economics (mag. oec.)", "Applying micro- and macroeconomic analysis; title Master of Economics (mag. oec.)", "https://www.efzg.unizg.hr/mdie"),
]:
    add(HR, field, name, "University of Zagreb, Faculty of Economics and Business", "Zagreb", MA_D, Y1, EFZG_FEE, EFZG_ADM, EFZG_DL, EFZG_EN,
        (f"ماجستير سنة واحدة بالإنجليزية بالكامل: {ar}. {EFZG_REQ}", f"A one-year master's taught fully in English: {en}. {EFZG_REQ_EN}"),
        HR_HOW, NP, NP, src, src)

add(HR, "agri", "Environment, Agriculture and Resource Management (INTER-EnAgro)", "University of Zagreb, Faculty of Agriculture", "Zagreb", MA_D, Y2,
    ("2,500 يورو سنوياً (الكرواتيون والأوروبيون يدفعون النصف)", "€2,500 per year (Croatian and EU students pay half)"), NP,
    ("غير منشور في المصدر لدفعة 2027/2028؛ الدراسة تبدأ في الفصل الشتوي (أكتوبر)", "Not published in the source for 2027/2028; studies start in the winter semester (October)"),
    ("غير منشور في المصدر: كل المحاضرات والتمارين بالإنجليزية", "Not published in the source: all lectures and exercises are in English"),
    ("الزراعة وحماية البيئة وإدارة الموارد، بالإنجليزية بالكامل مع محاضرين محليين ودوليين", "Agriculture, environmental protection and resource management, fully in English with national and international lecturers"),
    HR_HOW, NP, NP, UNIZG_PDF, "https://www.agr.unizg.hr/en/group/395/INTER-EnAgro")
add(HR, "eng", "Petroleum and Geoenergy Engineering and Management", "University of Zagreb, Faculty of Mining, Geology and Petroleum Engineering", "Zagreb", MA_D, Y2,
    ("4,000 يورو للبرنامج كاملاً (1,000 يورو كل فصل)", "€4,000 for the whole programme (€1,000 each semester)"), NP,
    ("غير منشور في المصدر لدفعة 2027/2028 (للتحقق على موقع البرنامج)", "Not published in the source for 2027/2028 (check the programme website)"),
    ("IELTS Academic 6.5 في كل المهارات أو TOEFL iBT 80 أو TOEFL ورقي 550 أو مستوى B2", "IELTS Academic 6.5 in every band, TOEFL iBT 80, TOEFL paper 550 or CEFR B2"),
    ("هندسة البترول والطاقة الجوفية وإدارتها، بالإنجليزية بالكامل", "Petroleum and geoenergy engineering and management, taught fully in English"),
    HR_HOW, NP, NP, UNIZG_PDF, "https://www.petroeng-master-rgn.eu/")
add(HR, "eng", "Chemical and Environmental Technology", "University of Zagreb, Faculty of Chemical Engineering and Technology", "Zagreb", MA_D, Y2,
    ("1,115 يورو سنوياً", "€1,115 per year"), NP,
    ("غير منشور في المصدر لدفعة 2027/2028؛ الدراسة تبدأ أوائل أكتوبر", "Not published in the source for 2027/2028; classes start in early October"),
    ("مستوى B2 إلزامي يُثبت بـ TOEFL أو اختبار مماثل", "Mandatory B2 level, shown by TOEFL or an equivalent test"),
    ("برنامج مشترك بين تخصصات الهندسة الكيميائية والبيئية والمواد، والمحاضرات بالإنجليزية فقط", "A joint interdisciplinary programme in chemical, environmental and materials engineering; lectures only in English"),
    HR_HOW, NP, NP, UNIZG_PDF, "https://www.fkit.unizg.hr/en/curricula/graduate_study_CET/CET_adm")
add(HR, "pol", "Master of European Studies", "University of Zagreb, Faculty of Political Science", "Zagreb", ("ماجستير (MA)", "Master's degree (MA)"), Y1,
    ("2,000 يورو", "€2,000"), NP,
    ("دورة 2026/2027: الإعلان في يوليو 2026 والترتيب النهائي 24 سبتمبر 2026؛ دورة 2027/2028 لم تُعلن بعد (للتحقق)", "2026/2027 cycle: call in July 2026, final ranking on 24 September 2026; the 2027/2028 call is not out yet (to verify)"),
    ("غير منشور في المصدر", "Not published in the source"),
    ("30 مقعداً؛ يشترط بكالوريوس 4 سنوات (240 ساعة) في العلوم الاجتماعية أو الإنسانية", "30 places; requires a 4-year bachelor's (240 ECTS) in social sciences or humanities"),
    HR_HOW, NP, NP, "https://fpzg.unizg.hr/en/study/graduate_study/master_of_european_studies", "https://fpzg.unizg.hr/en/study/graduate_study/master_of_european_studies")
add(HR, "ds", "Biomedical Mathematics", "University of Zagreb, Faculty of Science", "Zagreb", MA_D, ("سنتان (4 فصول)", "2 years (4 semesters)"),
    ("7,500 يورو سنوياً", "€7,500 per year"), NP,
    ("غير منشور في المصدر لدفعة 2027/2028؛ الدراسة تبدأ في أكتوبر", "Not published in the source for 2027/2028; classes start in October"),
    ("مستوى B2 على الأقل", "At least B2"),
    ("الرياضيات والنمذجة الإحصائية لتطبيقات الطب والأحياء", "Mathematics and statistical modelling for medicine and biology"),
    HR_HOW, NP, NP, UNIZG_PDF, "https://biomedmath.math.hr/admission/application-procedure/")
add(HR, "env", "Close to Nature Forestry", "University of Zagreb, Faculty of Forestry and Wood Technology", "Zagreb", MA_D, Y2,
    ("4,100 يورو سنوياً، بدون رسوم قيد", "€4,100 per year, no enrolment fee"), NP,
    ("الطلبات تُقبل حتى 1 يوليو للسنة التي تبدأ أوائل أكتوبر (حسب كتيب 2025/2026؛ للتحقق لدفعة 2027)", "Applications are considered until 1 July for the year starting in early October (2025/2026 brochure; to verify for 2027)"),
    ("اختبار شفهي لتقييم الإنجليزية", "An oral test assesses your English"),
    ("الغابات القريبة من الطبيعة وإدارتها المستدامة، بالإنجليزية", "Close-to-nature forestry and sustainable forest management, taught in English"),
    HR_HOW, NP, NP, UNIZG_PDF, "https://www.sumfak.unizg.hr/en/study-programmes/forestrystudies/graduate-studies-programme-close-to-nature-forestry/")
add(HR, "bus", "Logistics and Mobility Management (TALENT)", "University of Zagreb, Faculty of Transport and Traffic Sciences", "Zagreb", MA_D, Y2,
    ("4,500 يورو سنوياً تُدفع قبل بدء السنة الدراسية", "€4,500 per year, paid before the academic year starts"),
    ("رسوم قيد 50 يورو", "€50 enrolment fee"),
    ("غير منشور في المصدر لدفعة 2027/2028؛ الدراسة تبدأ أوائل أكتوبر", "Not published in the source for 2027/2028; classes start in early October"),
    ("اجتياز مقابلة بالإنجليزية", "Passing an interview held in English"),
    ("إدارة اللوجستيات والتنقل، برنامج جديد بالإنجليزية راجعه خبراء دوليون واعتمدته وزارة العلوم الكرواتية", "Logistics and mobility management, a new English-taught programme reviewed by international experts and approved by the Croatian ministry"),
    HR_HOW, NP, NP, UNIZG_PDF, "https://www.fpz.unizg.hr/hr/studiji-i-upisi/talent/")

write("كرواتيا", "Croatia", "croatia", HR, level="master")
append_master("كرواتيا", "croatia")

# ---------------- Slovakia ----------------
SK = []
SK_HOW = ("طلب إلكتروني في نظام الجامعة (AIS) ودفع رسوم التقديم، ثم تصريح الإقامة المؤقتة للدراسة من السفارة السلوفاكية", "E-application in the university system (AIS) and the application fee, then the temporary residence permit for study via the Slovak embassy")

FEI = "https://www.fei.stuba.sk/2281"
for name, ar, en in [
    ("Electronics and Photonics", "الإلكترونيات والفوتونيات (15 مقعداً)", "Electronics and photonics (15 places)"),
    ("Management in Nuclear", "الإدارة في قطاع الطاقة النووية (21 مقعداً)", "Management in the nuclear sector (21 places)"),
    ("Space Engineering", "هندسة الفضاء (10 مقاعد)", "Space engineering (10 places)"),
]:
    add(SK, "eng", name, "Slovak University of Technology in Bratislava, Faculty of Electrical Engineering and Information Technology", "Bratislava", MA_D, Y2,
        ("لا توجد رسوم دراسية لبرامج الماجستير بالإنجليزية في الكلية", "No tuition fee for the faculty's master's programmes taught in English"),
        ("رسوم التقديم 60 يورو", "€60 application fee"),
        ("تقديم 2027/2028 يُتوقع أن يفتح في فبراير 2027؛ في 2026 كانت الجولة الأولى حتى 31 مارس والثانية 1-31 مايو (للتحقق)", "2027/2028 admission is expected to open in February 2027; in 2026 the first round closed on 31 March and the second ran 1-31 May (to verify)"),
        ("مستوى B1 على الأقل (شهادة لغة أو TOEFL أو IELTS)، أو دراسة سابقة بالإنجليزية بالكامل", "At least B1 (language certificate, TOEFL or IELTS), or previous higher education fully in English"),
        (f"{ar}. امتحان قبول إلزامي (60 درجة) + المعدل السابق (40 درجة)، والحد الأدنى 60 درجة منها 30 في الامتحان؛ قد يُطلب قرار معادلة الشهادة الأجنبية من جامعة سلوفاكية",
         f"{en}. Compulsory entrance exam (60 points) + previous grades (40 points); minimum 60 points with at least 30 in the exam; a recognition decision from a Slovak university may be required for foreign degrees"),
        SK_HOW, NP, NP, FEI, FEI)

add(SK, "cs", "Artificial Intelligence (joint programme)", "Slovak University of Technology in Bratislava (FIIT) and Technical University of Košice (FEI)", "Bratislava", MA_D, Y2,
    ("7,000 يورو سنوياً", "€7,000 per year"), ("رسوم التقديم 60 يورو", "€60 application fee"),
    ("دفعة 2026/2027: حتى 6 يوليو 2026؛ دفعة 2027/2028 غير منشورة بعد (للتحقق)", "2026/2027 intake: by 6 July 2026; the 2027/2028 date is not published yet (to verify)"),
    ("شهادة إتقان الإنجليزية إلا لو كانت الدراسة السابقة بالإنجليزية", "An English proficiency certificate unless your previous studies were in English"),
    ("أول ماجستير مشترك في الذكاء الاصطناعي في سلوفاكيا: الفصلان 1 و4 في براتيسلافا والفصلان 2 و3 في كوشيتسه. امتحان القبول مقابلة أونلاين، ويُطلب بكالوريوس مع معادلة وأبوستيل",
     "Slovakia's first joint AI master's: semesters 1 and 4 in Bratislava, 2 and 3 in Košice. The entrance exam is an online interview; a recognised, apostilled bachelor's diploma is required"),
    SK_HOW, NP, NP, "https://www.fiit.stuba.sk/341", "https://www.fiit.stuba.sk/341")

TUKE_FEE = ("6,000 يورو سنوياً لبرامج الماجستير بالإنجليزية في كلية الاقتصاد، تُدفع قبل 15 سبتمبر (حسب صفحة 2024/2025؛ للتحقق)", "€6,000 per year for English master's at the Faculty of Economics, paid before 15 September (2024/2025 page; to verify)")
TUKE_ADM = ("رسوم التقديم 50 يورو للطلب الإلكتروني (60 للورقي)، غير مستردة", "€50 application fee for the e-application (€60 on paper), non-refundable")
TUKE_DOCS = "شهادة مصدّقة بالأبوستيل مع ترجمة سلوفاكية معتمدة من مترجم محلف في سلوفاكيا، والدول غير الأعضاء في الأبوستيل تحتاج تصديقاً كاملاً"
TUKE_DOCS_EN = "an apostilled certificate with a sworn Slovak translation made in Slovakia; countries outside the Apostille Convention need full legalisation"
add(SK, "econ", "Finance, Banking and Investment", "Technical University of Košice, Faculty of Economics", "Košice", MA_D, Y2, TUKE_FEE, TUKE_ADM,
    ("دفعة 2026/2027: حتى 30 يونيو 2026؛ دفعة 2027/2028 غير منشورة بعد (للتحقق)", "2026/2027 intake: by 30 June 2026; 2027/2028 not published yet (to verify)"),
    ("غير منشور في المصدر", "Not published in the source"),
    (f"المالية والبنوك والاستثمار، 4 فصول بدوام كامل. {TUKE_DOCS}", f"Finance, banking and investment, 4 semesters full-time. Documents: {TUKE_DOCS_EN}"),
    SK_HOW, NP, NP, "https://ekf.tuke.sk/en/information-for-applicants-for-the-second-master-degree-of-study-at-ekf-tuke", "https://ekf.tuke.sk/en/information-for-applicants-for-the-second-master-degree-of-study-at-ekf-tuke")
add(SK, "pol", "Economics and Management of Public Administration", "Technical University of Košice, Faculty of Economics", "Košice", MA_D, Y2, TUKE_FEE, TUKE_ADM,
    ("غير منشور في المصدر", "Not published in the source"),
    ("غير منشور في المصدر", "Not published in the source"),
    (f"اقتصاد وإدارة الإدارة العامة، بدون امتحان قبول، حوالي 25 مقعداً. يُطلب بكالوريوس وسيرة ذاتية و{TUKE_DOCS}", f"Economics and management of public administration; no entrance exam, about 25 places. Requires a bachelor's, CV and {TUKE_DOCS_EN}"),
    SK_HOW, NP, NP, "https://krvam.ekf.tuke.sk/index.php/inzinierske-studium/?lang=en", "https://krvam.ekf.tuke.sk/index.php/inzinierske-studium/?lang=en")

write("سلوفاكيا", "Slovakia", "slovakia", SK, level="master")
append_master("سلوفاكيا", "slovakia")
