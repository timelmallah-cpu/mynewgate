# Austria, second batch: English-taught master's at TU Wien, TU Graz, WU Vienna, the University of Vienna and the
# University of Innsbruck. Public universities charge non-EU students the same tuition (EUR 726.72 per semester).
# APPEND-ONLY: the rows written by austria.py are left untouched.
# Sources: official university pages, checked 2026-11-19. Run from the repo root:  python3 scripts/catalogue/austria_more.py
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import NP
from helpers import add, append_extra

ROWS = []
DI = ("ماجستير (Dipl.-Ing. / MSc)", "Master's degree (Dipl.-Ing. / MSc)")
MSC = ("ماجستير علوم (MSc)", "Master of Science (MSc)")
Y2 = ("سنتان (4 فصول، 120 ساعة معتمدة)", "2 years (4 semesters, 120 ECTS)")
FEE = ("1,453.44 يورو سنوياً لغير الأوروبيين (726.72 يورو كل فصل دراسي) زائد رسوم اتحاد الطلاب ÖH",
       "€1,453.44 a year for non-EU students (€726.72 per semester) plus the ÖH student union fee")
B2 = ("مستوى B2 في الإنجليزية على الأقل؛ الشهادات المقبولة في صفحة الجامعة", "English at least at B2; accepted certificates are on the university page")

# ---------- TU Wien ----------
TUW_DL = ("لغير الأوروبيين موعد خاص: يجب أن يصل الطلب كاملاً بكل الأوراق قبل 15 يوليو للفصل الشتوي (بداية أكتوبر)، أو قبل 15 يناير للفصل الصيفي (بداية مارس)",
          "Special deadline for non-EU applicants: the complete application must arrive by 15 July for the winter semester (October start) or by 15 January for the summer semester (March start)")
TUW_OTHER = ("البرنامج كله بالإنجليزية. القبول بدون عدد محدود إذا كان البكالوريوس مطابقاً لشروط البرنامج، وقد تُطلب مواد تكميلية. الأوراق الأجنبية تحتاج تصديقاً وترجمة رسمية",
             "Taught entirely in English. No cap on places if your bachelor's meets the programme's requirements; supplementary courses may be required. Foreign documents need legalisation and an official translation")
TUW_HOW = ("التقديم أونلاين لمكتب القبول في TU Wien", "Apply online to the TU Wien admission office")
TUW_APPLY = "https://tuwien.at/en/studies/admission/the-conditions-for-international-students/masters-programme/step-1-application"
TUW_LIST = "https://www.tuwien.at/en/studies/studies/master-programmes/english-taught-masters-programmes"
for name, field, url in [
    ("Aeronautical Engineering", "eng", TUW_LIST),
    ("Biomedical Engineering", "eng", TUW_LIST),
    ("Embedded Computing Systems", "cs", "https://www.tuwien.at/en/studies/studies/master-programmes/electrical-engineering-and-information-technology/embedded-computing-systems"),
    ("Information and Communication Engineering", "eng", "https://www.tuwien.at/en/studies/studies/master-programmes"),
    ("Manufacturing and Robotics", "eng", TUW_LIST),
    ("Software Engineering", "cs", TUW_LIST),
    ("Media and Human-Centered Computing", "cs", TUW_LIST),
]:
    add(ROWS, field, name, "TU Wien", "Vienna", DI, Y2, FEE, NP, TUW_DL, B2, TUW_OTHER, TUW_HOW, NP, NP, url, TUW_APPLY)

# ---------- TU Graz ----------
TUG_DL = ("إذا كان البرنامج يتطلب إجراء قبول: التسجيل لعام 2027/2028 من 15 أكتوبر حتى 15 ديسمبر 2026. بعد القبول يقدّم مواطنو الدول الثالثة طلب المقعد الدراسي للفصل الشتوي 2027/2028 من 1 مايو حتى 15 أغسطس 2027 (بعض الخريجين معفون من إجراء القبول، راجع صفحة البرنامج)",
          "If the programme has an admission procedure: registration for 2027/2028 runs 15 October - 15 December 2026. After admission, third-country nationals apply for a study place for winter semester 2027/2028 from 1 May to 15 August 2027 (some graduates are exempt from the procedure; see the programme page)")
TUG_OTHER = ("البرنامج كله بالإنجليزية. كل البرامج الإنجليزية في TU Graz لها إجراء قبول لمن ليس من خريجي برامج معينة، ويمكن إكماله قبل نهاية البكالوريوس. لبعض الدول حد أدنى للمعدل",
             "Taught entirely in English. All of TU Graz's English master's have an admission procedure for applicants who are not graduates of specified programmes, and it can be completed before finishing the bachelor's. Some countries have a minimum GPA")
TUG_HOW = ("إجراء القبول أونلاين، ثم طلب المقعد الدراسي لدى مكتب التسجيل (لا تُقبل الطلبات بالبريد الإلكتروني)", "Online admission procedure, then the study-place application to the Registrar's Office (applications by email are not accepted)")
TUG_APPLY = "https://tugraz.at/en/studying-and-teaching/studying-at-tu-graz/prospective-students/registration-and-admission/admission-of-international-degree-programme-applicants"
TUG = "https://www.tugraz.at/en/studying-and-teaching/degree-and-certificate-programmes/masters-degree-programmes/"
for name, field, slug in [
    ("Computer Science", "cs", "computer-science"),
    ("Software Engineering and Management", "cs", "software-engineering-and-management/"),
    ("Information and Computer Engineering", "cs", "information-and-computer-engineering"),
    ("Data Science", "ds", "data-science"),
    ("Biomedical Engineering", "eng", "biomedical-engineering"),
    ("Production Science and Management", "eng", "production-science-and-management"),
    ("Electrical Engineering", "eng", "electrical-engineering"),
]:
    add(ROWS, field, name, "TU Graz (Graz University of Technology)", "Graz", DI, Y2, FEE, NP, TUG_DL, B2, TUG_OTHER, TUG_HOW, NP, NP, TUG + slug, TUG_APPLY)

# ---------- WU Vienna ----------
WU_DL = ("القبول المتدرج لدفعة 2027/2028: الموعد الأول 8 أكتوبر 2026 (انتهى، والجامعة تنصح غير الأوروبيين به)، والثاني 8 يناير 2027، والثالث 8 مارس 2027. التقديم بعد الموعد الأول قد لا يترك وقتاً كافياً لتصريح الإقامة",
         "Rolling admission for 2027/2028: priority deadline I was 8 October 2026 (closed; WU advises non-EU applicants to use it), II is 8 January 2027 and III is 8 March 2027. Applying after the first deadline may not leave enough time for the residence permit")
WU_DL_CEMS = ("لدفعة 2027/2028 موعدان فقط: 8 أكتوبر 2026 (انتهى) و8 يناير 2027 (آخر موعد لهذا البرنامج)",
              "Only two deadlines for 2027/2028: 8 October 2026 (closed) and 8 January 2027 (the last one for this programme)")
WU_EN = ("مطلوب إثبات الإنجليزية؛ الشهادات المقبولة والحد الأدنى في صفحة البرنامج (غير منشور في المصدر الذي راجعناه كرقم)",
         "Proof of English is required; accepted certificates and minimum scores are on the programme page (no number in the source we reviewed)")
WU_OTHER = ("البرنامج كله بالإنجليزية والقبول تنافسي. من يريد أكثر من برنامج يقدّم عليها كلها في نفس الوقت ويرتبها حسب الأفضلية. يكفي كشف درجات حالي إذا لم تتخرج بعد",
            "Taught entirely in English with competitive admission. To apply to several programmes, apply to all at once and rank them. A current transcript is enough if you have not graduated yet")
WU_HOW = ("التقديم أونلاين على بوابة WU", "Apply online on the WU portal")
WU_APPLY = "https://www.wu.ac.at/en/programs/application-and-admission/deadlines-rolling-admission"
for name, field, dl, url in [
    ("Digital Economy", "bus", WU_DL, WU_APPLY),
    ("Economics", "econ", WU_DL, "https://www.wu.ac.at/en/programs/masters-programs/detail/master-economics"),
    ("Marketing", "bus", WU_DL, "https://www.wu.ac.at/studium/master/marketing/ueberblick"),
    ("Quantitative Finance", "econ", WU_DL, WU_APPLY),
    ("Socio-Ecological Economics and Policy", "econ", WU_DL, WU_APPLY),
    ("Supply Chain Management", "bus", WU_DL, WU_APPLY),
    ("International Management/CEMS", "bus", WU_DL_CEMS, "https://www.wu.ac.at/en/programs/masters-programs/international-management-cems/overview"),
    ("Strategy, Innovation, and Management Control", "bus", WU_DL, "https://www.wu.ac.at/en/programs/masters-programs/strategy-innovation-and-management-control/overview/application-admission"),
    ("Business Communication", "bus", WU_DL, WU_APPLY),
]:
    add(ROWS, field, name, "WU Vienna (Vienna University of Economics and Business)", "Vienna", MSC, Y2, FEE, NP, dl, WU_EN, WU_OTHER, WU_HOW, NP, NP, url, WU_APPLY)

# ---------- University of Vienna ----------
UV_HOW = ("التقديم أونلاين لجامعة فيينا", "Apply online to the University of Vienna")
add(ROWS, "cs", "Computer Science", "University of Vienna", "Vienna", MSC, Y2, FEE, NP,
    ("مواعيد الفصل الشتوي 2027/2028 لم تُنشر بعد. لغير الأوروبيين كانت فترة التقديم للفصل الشتوي 2026/2027 من 22 يونيو حتى 3 أغسطس 2026، وللفصل الصيفي 2027 من 16 نوفمبر 2026 حتى 7 يناير 2027 (للتحقق من مواعيد 2027)",
     "Winter semester 2027/2028 dates are not yet published. For non-EU applicants the winter 2026/2027 period was 22 June - 3 August 2026, and summer 2027 is 16 November 2026 - 7 January 2027 (2027 dates to verify)"),
    ("مستوى B2 في الإنجليزية شرط للقبول", "English at B2 is an admission requirement"),
    ("البرنامج كله بالإنجليزية", "Taught entirely in English"), UV_HOW, NP, NP,
    "https://studieren.univie.ac.at/en/master-programmes/degree-programmes-in-foreign-languages/",
    "https://studieren.univie.ac.at/en/applying-for-a-programme/deadlines")
add(ROWS, "ds", "Business Analytics", "University of Vienna", "Vienna", MSC, Y2, FEE, NP,
    ("التقديم مرة واحدة في السنة؛ مواعيد 2027/2028 غير منشورة في المصدر بعد", "Applications once a year; 2027/2028 dates not yet published in the source"),
    NP,
    ("اختيار تنافسي و40 مقعداً في السنة، والبرنامج بالإنجليزية لمجموعات صغيرة", "Competitive selection with 40 places a year; taught in English in small groups"),
    UV_HOW, NP, NP, "https://datascience.univie.ac.at/master23/",
    "https://studieren.univie.ac.at/en/find-your-degree-programme/masters-programmes/business-analytics-masters-programme")

# ---------- University of Innsbruck ----------
IN_DL = ("لغير الأوروبيين: في 2026 كانت فترة التسجيل في الماجستير للفصل الشتوي من 13 يوليو حتى 5 سبتمبر، وللفصل الصيفي 2027 من 11 يناير حتى 5 فبراير 2027، وقبلها يجب الحصول على خطاب القبول (Letter of Acceptance) (للتحقق من مواعيد 2027 وموعد طلب خطاب القبول)",
         "Non-EU applicants: in 2026 master's admission for the winter semester ran 13 July - 5 September, and for summer 2027 it runs 11 January - 5 February 2027; a Letter of Acceptance is needed first (2027 dates and the Letter of Acceptance deadline to verify)")
IN_EN = ("مستوى B2 في الإنجليزية، ويُقدَّم الإثبات مع طلب التقديم", "English at B2, with proof submitted at the time of application")
IN_HOW = ("طلب خطاب القبول ثم التسجيل الشخصي بموعد في مكتب القبول بجامعة إنسبروك", "Request the Letter of Acceptance, then enrol in person by appointment at the University of Innsbruck admission office")
IN_APPLY = "https://www.uibk.ac.at/studium/anmeldung-zulassung/masterstudium/index.html.en"
add(ROWS, "bus", "Strategic Management and Innovation", "University of Innsbruck", "Innsbruck", MSC, Y2, FEE, NP, IN_DL, IN_EN,
    ("بكالوريوس مناسب أو ما يعادله، والبرنامج بالإنجليزية. الجامعة تنصح بالبدء في الفصل الشتوي", "A relevant bachelor's or equivalent; taught in English. Starting in the winter semester is recommended"),
    IN_HOW, NP, NP, "https://www.uibk.ac.at/en/programmes/ma-strategic-management-and-innovation/", IN_APPLY)
add(ROWS, "bus", "International Management", "University of Innsbruck", "Innsbruck", MSC, Y2, FEE, NP, IN_DL, IN_EN,
    ("بكالوريوس مناسب أو ما يعادله، والبرنامج بالإنجليزية وبدأ في الفصل الشتوي 2026/2027", "A relevant bachelor's or equivalent; taught in English, started in winter semester 2026/2027"),
    IN_HOW, NP, NP, "https://uibk.ac.at/en/programmes/ma-international-management", IN_APPLY)

append_extra("النمسا", "austria", ROWS, "2026-11-19")
