# Cyprus batch 2 (2026-11-20): English-taught master's at the University of Cyprus (UCY, Nicosia), on campus.
# Append-only through helpers.append_extra: re-run after cyprus.py or se_pt_cy.py.
# Sources: UCY "Study at the University of Cyprus - Taught in English" brochure (June 2026, programme list and language),
# the Graduate School call for postgraduate places (tuition: EUR 5,125 per conventional master's programme; MBA EUR 10,250),
# the Graduate School news page (fall 2026/27 applications extended to 31 March 2026). Minimum duration 3 semesters: UCY FAQ (ucy.ac.cy/sap) and General Rules of Postgraduate Studies.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import NP
from helpers import add, append_extra

REVIEWED = "2026-11-20"
MA = []
UCY = "University of Cyprus (UCY)"
BROCHURE = "https://www.timeshighereducation.com/cms-academic/sites/default/files/institution_downloads/2026-09/Study%20at%20UCY%20in%20ENGLISH-%202026%20PAGED.pdf"
APPLY = "https://www.ucy.ac.cy/graduateschool/?lang=en"
FEE = ("5,125 يورو للبرنامج كاملاً (رسوم الماجستير العادي في جامعة قبرص لكل الطلاب مهما كانت الجنسية)",
       "€5,125 for the whole programme (the University of Cyprus fee for a conventional master's, for all students whatever their nationality)")
DUR = ("3 فصول دراسية على الأقل بدوام كامل (سنة ونصف) حسب قواعد الدراسات العليا في جامعة قبرص", "At least 3 semesters full time (1.5 years) under the University of Cyprus postgraduate rules")
DL = ("إعلان دفعة سبتمبر 2027 لم يُنشر بعد؛ لدفعة سبتمبر 2026 أُغلق التقديم في 31 مارس 2026 بعد التمديد؛ غير الأوروبيين يحتاجون تصريح دخول إلى قبرص فالتقديم المبكر أفضل",
      "The September 2027 call is not out yet; for September 2026 applications closed on 31 March 2026 after an extension; non-EU students need an entry permit for Cyprus, so apply early")
EN = ("يُدرَّس بالإنجليزية؛ المستوى المطلوب في إعلان القبول (للتحقق)", "Taught in English; required level in the call for places (to verify)")
HOW = ("التقديم أونلاين فقط على نظام طلبات الدراسات العليا في جامعة قبرص، مع السيرة الذاتية والشهادات المعترف بها وكشوف الدرجات",
       "Apply online only through the University of Cyprus postgraduate application system, with a CV, recognised degrees and transcripts")
MSC = ("ماجستير (MSc)", "Master's degree (MSc)")
MA_ = ("ماجستير (MA)", "Master's degree (MA)")
MENG = ("ماجستير (MEng أو MSc)", "Master's degree (MEng or MSc)")

for field, name, deg, other in [
    ("ds", "MSc Data Science", MSC, ("مسارات: تحليلات الأعمال أو علوم الحاسب أو الإحصاء (برنامج مشترك بين أقسام)", "Tracks: Business Analytics, Computer Science or Statistics (interdepartmental)")),
    ("bus", "MSc Finance", MSC, ("كلية الاقتصاد والإدارة", "Faculty of Economics and Management")),
    ("econ", "MSc Economic Analysis", MSC, ("كلية الاقتصاد والإدارة", "Faculty of Economics and Management")),
    ("econ", "MSc Behavioural Economics", MSC, ("برنامج مشترك بين قسمي الاقتصاد وعلم النفس", "Joint programme of the Economics and Psychology departments")),
    ("bus", "MSc Human Resource Management", MSC, ("كلية الاقتصاد والإدارة", "Faculty of Economics and Management")),
    ("cs", "Computer Engineering (MEng/MSc)", MENG, ("كلية الهندسة", "Faculty of Engineering")),
    ("eng", "Electrical Engineering (MEng/MSc)", MENG, ("كلية الهندسة", "Faculty of Engineering")),
    ("env", "Environmental Engineering (MEng/MSc)", MENG, ("كلية الهندسة", "Faculty of Engineering")),
    ("eng", "Energy Technologies and Sustainable Design (MEng/MSc)", MENG, ("تقنيات الطاقة والتصميم المستدام، كلية الهندسة", "Energy technologies and sustainable design, Faculty of Engineering")),
    ("arch", "MSc Advanced Architectural Studies", MSC, ("كلية الهندسة", "Faculty of Engineering")),
    ("sci", "MSc Physics", MSC, ("كلية العلوم البحتة والتطبيقية", "Faculty of Pure and Applied Sciences")),
    ("env", "MSc Biodiversity Conservation", MSC, ("كلية العلوم البحتة والتطبيقية", "Faculty of Pure and Applied Sciences")),
    ("pol", "MA Peace, Conflict and Democracy", MA_, ("كلية العلوم الاجتماعية والتربية", "Faculty of Social Sciences and Education")),
    ("edu", "MA Teaching English to Speakers of Other Languages", MA_, ("كلية العلوم الإنسانية", "Faculty of Humanities")),
    ("hum", "MA English Studies", MA_, ("كلية العلوم الإنسانية", "Faculty of Humanities")),
]:
    add(MA, field, name, UCY, "Nicosia", deg, DUR, FEE, NP, DL, EN, other, HOW, NP, NP, BROCHURE, APPLY)

add(MA, "bus", "Master of Business Administration (MBA)", UCY, "Nicosia", ("ماجستير إدارة الأعمال (MBA)", "Master of Business Administration (MBA)"), DUR,
    ("10,250 يورو للبرنامج كاملاً (برنامج ممول ذاتياً)", "€10,250 for the whole programme (self-funded programme)"),
    NP, DL, EN, ("دوام كامل أو جزئي، كلية الاقتصاد والإدارة", "Full or part time, Faculty of Economics and Management"), HOW, NP, NP, BROCHURE, APPLY)

if __name__ == "__main__":
    append_extra("قبرص", "cyprus", MA, REVIEWED)
    print("cyprus_more:", len(MA))
