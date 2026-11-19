# Master's in the six fields added on 19 November 2026: political and social sciences, media and communication,
# education, environment, agriculture and tourism (Germany, Estonia, Finland). Slovenia's four Faculty of Social
# Sciences programmes are in slovenia.py; tourism/environment rows reclassified in slovenia.py, italy_more.py and
# france_more.py.
# APPEND-ONLY per country (helpers.append_extra): rows written by estonia.py, finland.py or by hand are left alone,
# and ids of rows already published are kept. estonia.py / finland.py use write(), which replaces the whole country,
# so re-run this script after either of them.
# Sources: official DAAD International Programmes pages and university pages, checked 2026-11-19.
# Run from the repo root:  python3 scripts/catalogue/new_fields_ma.py
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import NP
from helpers import add, append_extra

REVIEWED = "2026-11-19"
DAAD = "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/{}/"
MSC = ("ماجستير (MSc)", "Master of Science (MSc)")
MA_ = ("ماجستير (MA)", "Master of Arts (MA)")
S4 = ("4 فصول دراسية (سنتان)", "4 semesters (2 years)")
Y2 = ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)")
FREE = ("لا توجد رسوم دراسية", "No tuition fees")

# ---------------------------------------------------------------- Germany
DE = []
add(DE, "agri", "Sustainable International Agriculture (SIA)", "University of Göttingen (with the University of Kassel)", "Göttingen", MSC, S4, FREE,
    ("حوالي 460 يورو للفصل، وتشمل غالباً تذكرة المواصلات (لا رسوم إضافية في كاسل)", "About €460 per semester, usually including a public transport ticket (no extra fee at Kassel)"),
    ("1 نوفمبر - 31 يناير للفصل الشتوي (لغير الأوروبيين)", "1 November - 31 January for the winter semester (non-EU applicants)"),
    ("مستوى B2 بشهادة رسمية لا يزيد عمرها عن 3 سنوات: IELTS Academic 6 أو TOEFL iBT 80 (قبل 2026) أو PTE Academic 59 أو كامبريدج B2 First. لا تُقبل إفادة الدراسة السابقة بالإنجليزية",
     "B2 with an official certificate no older than three years: IELTS Academic 6, TOEFL iBT 80 (before 2026), PTE Academic 59 or Cambridge B2 First. Letters saying earlier studies were in English are not accepted"),
    ("بكالوريوس لا يقل عن 6 فصول في العلوم الزراعية أو مجال قريب بتقدير فوق المتوسط (يعادل جيد جداً على الأقل). ثلاثة تخصصات: الأعمال الزراعية الدولية والتنمية الريفية، والزراعة العضوية الدولية، والنظم الزراعية الاستوائية، والدراسة في غوتنغن أو فيتزنهاوزن حسب التخصص",
     "A bachelor's of at least six semesters in agricultural sciences or a related field with an above-average grade (at least an upper second-class equivalent). Three specialisations: International Agribusiness and Rural Development, International Organic Agriculture, and Tropical Agricultural and Agroecosystems Sciences; you study in Göttingen or Witzenhausen depending on the specialisation"),
    ("بوابة الماجستير لكلية الزراعة بجامعة غوتنغن", "The University of Göttingen's agriculture master's portal"),
    ("800 - 1,000 يورو شهرياً للسكن والأكل والتأمين الصحي والكتب", "€800 - 1,000 a month for housing, food, health insurance and books"),
    ("خدمة السكن في المكتب الدولي تساعد في البحث، والأماكن محدودة فتواصل معهم مبكراً", "The International Office's accommodation service helps; places are limited, so contact them early"),
    DAAD.format(3673), "https://www.uni-goettingen.de/en/application/122863.html")
add(DE, "agri", "Agricultural Sciences in the Tropics and Subtropics (AgriTropics)", "University of Hohenheim", "Stuttgart", MSC, S4,
    ("1,500 يورو للفصل لغير الأوروبيين", "€1,500 per semester for non-EU students"),
    ("حوالي 175 يورو للفصل", "About €175 per semester"),
    ("16 نوفمبر - 15 مارس للفصل الشتوي (لغير الأوروبيين)", "16 November - 15 March for the winter semester (non-EU applicants)"),
    ("مستوى B2 بشهادة رسمية: IELTS Academic 6.5 أو TOEFL iBT 90 (قبل 2026، و18 في كل قسم) أو 4.5 في كل قسم (منذ 2026)",
     "B2 with an official certificate: IELTS Academic 6.5 or TOEFL iBT 90 (before 2026, 18 in each section) or 4.5 in each section (since 2026)"),
    ("بكالوريوس فوق المتوسط لا يقل عن 3 سنوات (180 ساعة معتمدة) في العلوم الزراعية أو الطبيعية أو البيئية أو مجال قريب؛ ومن تقديره ليس فوق المتوسط يثبت «كفاءة خاصة» للبرنامج. لا يُطلب مستوى في الألمانية",
     "An above-average bachelor's of at least three years (180 ECTS) in agricultural, natural or environmental sciences or a related field; applicants without an above-average grade must prove special aptitude. No German is required"),
    ("صفحة التقديم الخاصة بالبرنامج في جامعة هوهنهايم", "The programme's application page at the University of Hohenheim"),
    ("950 - 1,000 يورو شهرياً حسب الجامعة", "€950 - 1,000 a month, per the university"),
    ("سكن جامعي بإدارة Studierendenwerk Tübingen-Hohenheim مع حصة للطلاب الدوليين، والطلب عليه كبير، ومدته للماجستير سنتان", "Halls run by Studierendenwerk Tübingen-Hohenheim with a quota for international students; demand is high and master's students may stay two years"),
    DAAD.format(3788), "https://www.uni-hohenheim.de/en/agritropics")
BONN_DL = ("1 - 30 أبريل للفصل الشتوي للمتقدمين الدوليين (موعد كلية الزراعة والتغذية والهندسة بجامعة بون)", "1 - 30 April for the winter semester for international applicants (deadline of the University of Bonn's Faculty of Agricultural, Nutritional and Engineering Sciences)")
BONN_LIVING = ("حوالي 1,000 يورو شهرياً حسب جامعة بون", "About €1,000 a month, per the University of Bonn")
BONN_ADM = ("مساهمة فصلية (Social contribution) يحددها اتحاد الطلاب، وأكثر من نصفها لتذكرة المواصلات في ألمانيا كلها؛ المبلغ الحالي غير منشور في المصدر الذي راجعناه",
            "A semester (social) contribution set by the student body, more than half of it for the Germany-wide transport ticket; the current amount is not published in the source we checked")
add(DE, "agri", "Agricultural Sciences and Resource Management in the Tropics and Subtropics (ARTS)", "University of Bonn", "Bonn", MSC, S4, FREE, BONN_ADM, BONN_DL,
    ("TOEFL iBT 65 أو IELTS 6.5", "TOEFL iBT 65 or IELTS 6.5"),
    ("بكالوريوس في العلوم الزراعية أو البيئية أو البستنة أو الاقتصاد الزراعي أو ما يقاربها، ويُفضَّل من لديه خبرة عملية. عدد المقبولين محدود",
     "A bachelor's in agricultural or environmental sciences, horticulture, agricultural economics or similar, preferably with practical experience. Places are limited"),
    ("بوابة التقديم الإلكترونية لجامعة بون فقط", "Only through the University of Bonn's online application portal"),
    BONN_LIVING, ("سكن طلابي محدود بحوالي 250 - 400 يورو، ويقدّم المقبولون الدوليون طلب الغرفة عبر منسق البرنامج", "Limited student housing at about €250 - 400; admitted international students apply for a room through the programme coordinator"),
    "https://arts.uni-bonn.de/", "https://arts.uni-bonn.de/application")
add(DE, "agri", "Agricultural and Food Economics (AFECO)", "University of Bonn", "Bonn", MSC, S4, FREE, BONN_ADM, BONN_DL, NP,
    ("لحملة البكالوريوس في الزراعة أو الاقتصاد الزراعي أو اقتصاد الغذاء أو الاقتصاد المنزلي أو الاقتصاد أو إدارة الأعمال الزراعية أو ما يقاربها. أربعة تخصصات منها الأعمال الزراعية واقتصاد الموارد والبيئة، مع إمكانية شهادة مزدوجة مع جامعات شريكة",
     "For graduates in agriculture, agricultural, food or household economics, economics, agribusiness or related subjects. Four majors including Agribusiness and Resource and Environmental Economics, with double-degree options with partner universities"),
    ("بوابة التقديم الإلكترونية لجامعة بون", "The University of Bonn's online application portal"),
    BONN_LIVING, NP, "https://www.uni-bonn.de/en/studying/degree-programs/agricultural-and-food-economics-msc",
    "https://www.aei.uni-bonn.de/en/studies/examination-office/master-application")
add(DE, "env", "Environmental and Resource Management (MSc)", "Brandenburg University of Technology Cottbus-Senftenberg (BTU)", "Cottbus", MSC, S4, FREE, NP,
    ("15 مايو للفصل الشتوي لأصحاب الشهادات الأجنبية (حسب دليل DAAD؛ للتحقق مع الجامعة)", "15 May for the winter semester for applicants with foreign qualifications (per DAAD's guide; check with the university)"),
    NP,
    ("بكالوريوس في العلوم البيئية أو الهندسة البيئية أو حماية البيئة أو علم البيئة أو ما يقاربها. ثلاثة تخصصات: العلوم البيئية، والاقتصاد والتخطيط والقانون البيئي، والهندسة البيئية",
     "A bachelor's in environmental science or engineering, environmental protection, ecology or related subjects. Three specialisations: Environmental Science; Environmental Economics, Planning and Law; and Environmental Engineering"),
    ("عبر uni-assist (للتحقق)", "Through uni-assist (to verify)"), NP, NP,
    "https://www.b-tu.de/en/environment-ms/details",
    "https://www.daad.de/en/studying-in-germany/universities/all-degree-programmes/detail/brandenburgische-technische-universitaet-cottbus-senftenberg-environmental-and-resource-management-w6666/?hec-id=w6666")
add(DE, "env", "Environmental Governance (MEG)", "University of Freiburg", "Freiburg", ("ماجستير العلوم في الحوكمة البيئية", "Master of Science in Environmental Governance"), S4,
    ("1,500 يورو للفصل لغير الأوروبيين (والحاصلون على منحة DAAD-EPOS معفون)", "€1,500 per semester for non-EU students (DAAD-EPOS scholarship holders are exempt)"),
    NP, ("15 مايو للفصل الشتوي (وموعد منحة DAAD-EPOS للدول النامية 15 أكتوبر من السنة السابقة)", "15 May for the winter semester (the DAAD-EPOS scholarship deadline for developing countries is 15 October of the previous year)"),
    NP,
    ("برنامج متعدد التخصصات بين الإدارة البيئية التقنية والسياسة البيئية، وحوالي 35 طالباً في الدفعة", "An interdisciplinary programme between technical environmental management and environmental politics, with about 35 students per intake"),
    ("التقديم لمكتب تنسيق البرنامج حسب صفحة القبول", "Apply to the programme coordination office, per the admissions page"), NP,
    ("المكتب الدولي يتيح للطلاب الدوليين الجدد التقديم على السكن الطلابي، مع قائمة غرف خاصة من Studierendenwerk Freiburg", "The International Office lets new international students apply for student housing, and Studierendenwerk Freiburg lists private rooms"),
    "https://www.meg.uni-freiburg.de/admissions/Information for successful applicants", DAAD.format(3734))
add(DE, "env", "Natural Resources Management and Development (NRM)", "TH Köln - University of Applied Sciences", "Cologne", MSC, S4, FREE,
    ("حوالي 335 يورو للفصل (قابلة للتغيير)، وتشمل تذكرة المواصلات في ألمانيا كلها", "About €335 per semester (subject to change), including a Germany-wide transport ticket"),
    ("من بداية مايو حتى 10 يونيو كحد أقصى للفصل الشتوي على بوابة الجامعة (لغير المتقدمين لمنحة DAAD-EPOS، وموعدها 1 أغسطس - 30 سبتمبر من السنة السابقة)",
     "From early May to 10 June at the latest for the winter semester on the university portal (for applicants not seeking a DAAD-EPOS scholarship, whose window is 1 August - 30 September of the previous year)"),
    NP,
    ("برنامج دولي في معهد التكنولوجيا وإدارة الموارد في المناطق الاستوائية (ITT). الفصل الأول وحدات أساسية: الجغرافيا والاقتصاد وإدارة المشاريع والتعاون الدولي",
     "An international programme at the Institute for Technology and Resources Management in the Tropics and Subtropics (ITT). The first semester covers basics: geography, economics, project management and international cooperation"),
    ("بوابة التقديم الإلكترونية للجامعة (CaMS)", "The university's online application portal (CaMS)"), NP, NP, DAAD.format(4189), DAAD.format(4189))
add(DE, "pol", "Master of Public Policy (MPP)", "University of Erfurt - Willy Brandt School of Public Policy", "Erfurt", ("ماجستير السياسات العامة (MPP)", "Master of Public Policy (MPP)"), S4,
    ("2,225 يورو للفصل في 2027/2028 (حسب لائحة الرسوم لمن بدأ في 2026؛ للتحقق لدفعة 2027)", "€2,225 per semester in 2027/2028 (per the fee rules for 2026 starters; to verify for the 2027 intake)"),
    ("مساهمة فصلية 340 يورو (قابلة للتغيير)", "Semester contribution €340 (subject to change)"),
    ("بوابة التقديم تفتح 1 يناير. الموعد ذو الأولوية 28 فبراير، وآخر موعد لمن يحتاج تأشيرة 30 أبريل", "The portal opens on 1 January. Priority deadline 28 February; the deadline for applicants who need a visa is 30 April"),
    ("IELTS 6.5 في كل المهارات، أو TOEFL iBT 4.5 في كل الأقسام (للاختبارات من 21 يناير 2026) أو 90 (قبلها)، أو كامبريدج CAE / CPE",
     "IELTS 6.5 in every band, TOEFL iBT 4.5 overall and in every section (tests from 21 January 2026) or 90 (earlier tests), or Cambridge CAE / CPE"),
    ("مطلوب إثبات خبرة عملية مهنية. حوالي 100 طالب من أكثر من 40 دولة. المدرسة لا تقدّم منحاً ولا إعفاءات من الرسوم، لكنها شريكة في منحة هلموت شميت من DAAD التي تغطي المعيشة والرسوم",
     "Proof of professional work experience is required. About 100 students from more than 40 countries. The school offers no scholarships or fee waivers itself, but it is a partner in DAAD's Helmut Schmidt programme, which covers living costs and tuition"),
    ("بوابة التقديم الإلكترونية للمدرسة", "The school's online application portal"),
    ("992 يورو شهرياً حسب خطة الميزانية الرسمية للبرنامج", "€992 a month, per the programme's official budget plan"), NP,
    "https://www.uni-erfurt.de/en/brandtschool/studies/admissions/faqs",
    "https://www.uni-erfurt.de/fileadmin/Bilddatenbank/Themen/Studium/Studiengaenge/Flyer-Willy-Brandt-School-of-Public-Policy-Uni-Erfurt-Englisch.pdf")
add(DE, "media", "International Media Studies (MA)", "Hochschule Bonn-Rhein-Sieg (with DW Akademie and the University of Bonn)", "Bonn", MA_, S4,
    ("1,500 يورو للفصل لكل الجنسيات (الحاصلون على منح معفون)", "€1,500 per semester for all nationalities (scholarship holders are exempt)"),
    ("367 يورو للفصل في شتاء 2026/2027", "€367 per semester in winter 2026/2027"),
    ("15 نوفمبر - 15 فبراير للفصل الشتوي عبر uni-assist", "15 November - 15 February for the winter semester, through uni-assist"),
    ("مستوى C1 بشهادة رسمية: IELTS Academic 7 أو PTE Academic 76 أو TOEFL iBT 95 (قبل 2026) أو 5 في كل قسم (منذ 2026) أو كامبريدج C1 Advanced. لا يُطلب مستوى في الألمانية",
     "C1 with an official certificate: IELTS Academic 7, PTE Academic 76, TOEFL iBT 95 (before 2026) or 5 in each section (since 2026), or Cambridge C1 Advanced. No German is required"),
    ("بكالوريوس أو ما يعادله، مع أكثر من سنة خبرة عملية في مجال الإعلام بعد الشهادة الأولى (وسنتان على الأقل للمتقدمين للمنح). البرنامج موجّه لخريجين من الدول النامية والانتقالية، ويقبل حتى 30 طالباً في السنة",
     "A bachelor's or equivalent plus more than one year of media-related work experience after the first degree (at least two years for scholarship applicants). Designed for graduates from developing and transition countries; up to 30 students a year"),
    ("عبر uni-assist", "Through uni-assist"),
    ("حوالي 990 يورو شهرياً", "About €990 a month"),
    ("سكن طلابي أو سوق خاص، وإيجار غرفة السكن الطلابي حوالي 300 - 500 يورو", "Student halls or the private market; a room in a student residence costs about €300 - 500"),
    DAAD.format(4047), "https://my.uni-assist.de/")
add(DE, "media", "Media and Communication Science (MA)", "Technische Universität Ilmenau", "Ilmenau", MA_, S4,
    ("لا توجد رسوم دراسية حسب DAAD لبرامج الماجستير الدولية في الجامعة (للتحقق لهذا البرنامج)", "No tuition fees, per DAAD for the university's international master's (to verify for this programme)"),
    NP,
    ("16 يناير - 15 مايو لأصحاب الشهادات من خارج المنطقة الاقتصادية الأوروبية (فترة الجامعة العامة؛ لا قبول في الفصل الصيفي لهذا البرنامج)",
     "16 January - 15 May for applicants with qualifications from outside the EEA (the university-wide period; no summer-semester intake for this programme)"),
    ("مستوى C1 بشهادة رسمية (مثل TOEFL iBT 95 أو IELTS 7، حسب قائمة الجامعة)", "C1 with an official certificate (such as TOEFL iBT 95 or IELTS 7, per the university's list)"),
    ("برنامج في علوم الإعلام والاتصال ذو توجه اجتماعي، ويمكن دراسته بالكامل بالإنجليزية، وكتابة الأبحاث ورسالة الماجستير بالإنجليزية أو الألمانية",
     "A social-science programme in media and communication that can be studied entirely in English, with papers and the thesis in English or German"),
    ("بوابة التقديم الإلكترونية للجامعة", "The university's online application portal"), NP, NP,
    DAAD.format(3876), "https://www.tu-ilmenau.de/en/study/before-the-study/range-of-courses/application/language-certificates")

# ---------------------------------------------------------------- Estonia
EE = []
UT_DL = ("نظام التقديم يفتح 2 يناير، وآخر موعد 15 مارس، والنتائج 30 أبريل (حسب دورة 2026؛ للتحقق من مواعيد 2027)", "Applications open 2 January, deadline 15 March, results 30 April (2026 cycle; check the 2027 dates)")
UT_EN = ("إثبات إتقان الإنجليزية مطلوب (الحد الأدنى في صفحة متطلبات اللغة بالجامعة)", "Proof of English proficiency is required (minimum scores on the university's language requirements page)")
UT_HOW = ("التقديم أونلاين على DreamApply فقط، ولا تُقبل الطلبات بالبريد الإلكتروني", "Online on DreamApply only; applications by e-mail are not accepted")
add(EE, "pol", "Politics and Governance in the Digital Age", "University of Tartu", "Tartu", MA_, Y2,
    ("4,800 يورو سنوياً لغير الأوروبيين", "€4,800 a year for non-EU citizens"),
    ("رسوم طلب 100 يورو", "€100 application fee"), UT_DL, UT_EN,
    ("17 مقعداً. التقييم: خطاب الدافع 50% ومقابلة أونلاين 50%، ويلزم 51 نقطة على الأقل في كل منهما و66 نقطة في المجموع. أعلى خمسة مقبولين من غير الأوروبيين يحصلون على إعفاء كامل من رسوم الفصل الأول",
     "17 places. Scoring: motivation letter 50% and an online interview 50%, with at least 51 points in each and 66 combined. The five highest-ranked non-EU admits get a 100% fee reduction for the first semester"),
    UT_HOW, NP, NP, "https://ut.ee/en/curriculum/politics-and-governance-digital-age", "https://estonia.dreamapply.com/courses/course/363")
add(EE, "pol", "International Relations and Regional Studies", "University of Tartu", "Tartu", MA_, Y2,
    ("4,800 يورو سنوياً لغير الأوروبيين", "€4,800 a year for non-EU citizens"),
    ("رسوم طلب 100 يورو (لمن درس المرحلة السابقة خارج إستونيا)", "€100 application fee (for previous studies outside Estonia)"), UT_DL, UT_EN,
    ("أحد برنامجي الماجستير الدوليين في معهد يوهان سكيته للدراسات السياسية. خمسة طلاب من غير الأوروبيين في كل برنامج يحصلون سنوياً على إعفاء كامل من رسوم الفصل الأول",
     "One of the two international master's at the Johan Skytte Institute of Political Studies. Each year five non-EU students per programme get a 100% fee reduction for the first semester"),
    UT_HOW, NP, NP, "https://studyinestonia.ee/study/programmes/masters-programmes",
    "https://skytte.ut.ee/en/content/applications-open-international-masters-programmes-johan-skytte-institute-political-studies")
TLU_DL = ("مواعيد التقديم في صفحة مواعيد جامعة تالين (القبول مرة واحدة في السنة؛ غير منشور في الصفحة التي راجعناها)", "Dates on Tallinn University's application deadlines page (one intake a year; not published on the page we checked)")
TLU_ADM = ("رسوم طلب 100 يورو لمن درس خارج إستونيا", "€100 application fee for previous studies outside Estonia")
TLU_OTHER = ("امتحان القبول قد يشمل مهام مكتوبة ودائماً مقابلة بالفيديو. غير الأوروبيين يدفعون رسوم الفصل الأول بعد التقييم الإيجابي لاستلام خطاب القبول النهائي",
             "The admission exam may include written tasks and always a video interview. Non-EU students pay the first semester's fee after a positive evaluation to receive the final acceptance letter")
TLU_HOW = ("التقديم أونلاين على DreamApply", "Online on DreamApply")
TLU_FEES = "https://www.tlu.ee/en/tuition-fees"
for field, name, n in [("pol", "International Relations", 5000), ("media", "Communication Management", 5000), ("edu", "Educational Innovation and Leadership", 4800)]:
    add(EE, field, name, "Tallinn University", "Tallinn", MA_, Y2,
        (f"{n:,} يورو سنوياً لدفعة 2027/2028 (تُدفع على فصلين، {n // 2:,} يورو كل فصل دراسي)", f"€{n:,} a year (€{n // 2:,} per semester) for the 2027/2028 intake"),
        TLU_ADM, TLU_DL, ("إثبات الإنجليزية يجب أن يكون سارياً عند بداية الدراسة (الحد الأدنى في صفحة إثبات الإنجليزية بالجامعة)", "Proof of English must be valid at the start of studies (minimum scores on the university's English proficiency page)"),
        TLU_OTHER, TLU_HOW, NP, NP, TLU_FEES, "https://www.tlu.ee/en/application-procedure-non-eu")

# ---------------------------------------------------------------- Finland
FI = []
add(FI, "edu", "Master's in Education for Global Futures and Leadership (EdGloLead)", "University of Oulu (with Tallinn University)", "Oulu", MA_, Y2,
    ("8,500 يورو سنوياً لغير الأوروبيين", "€8,500 a year for non-EU/EEA students"), NP,
    ("فترة التقديم 7 - 21 يناير 2027 (التقديم المشترك لبرامج جامعة أولو الدولية لدراسة تبدأ في خريف 2027)", "Application period 7 - 21 January 2027 (joint application to the University of Oulu's international programmes for studies starting in autumn 2027)"),
    NP,
    ("شهادة دولية بالشراكة مع جامعة تالين، والدراسة في الحرم مع بعض المقررات الهجينة وأونلاين. منحة إعفاء 10% من رسوم السنة الثانية",
     "An international degree in partnership with Tallinn University, studied on campus with some hybrid and online courses. A 10% tuition waiver for the second year"),
    ("التقديم المشترك على Studyinfo.fi", "Joint application on Studyinfo.fi"), NP, NP,
    "https://www.oulu.fi/en/masters-education-for-global-futures", "https://oulu.fi/en/apply/how-apply/applying-masters-programmes")

if __name__ == "__main__":
    append_extra("ألمانيا", "germany", DE, REVIEWED)
    append_extra("إستونيا", "estonia", EE, REVIEWED)
    append_extra("فنلندا", "finland", FI, REVIEWED)
    print("new fields:", len(DE), "Germany,", len(EE), "Estonia,", len(FI), "Finland")
