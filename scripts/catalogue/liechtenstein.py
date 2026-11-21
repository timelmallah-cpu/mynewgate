# Liechtenstein: the three English-taught master's at the University of Liechtenstein (Vaduz), the country's public university.
# Fees are in CHF and converted at CHF_PER_EUR (also in scripts/build-data.mjs). Sources: uni.li, checked 2026-11-19.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import write, NP
from helpers import add, append_master

CHF_PER_EUR = 0.92
MA = []
MSC = ("ماجستير العلوم (MSc)", "Master of Science (MSc)")
Y2 = ("4 فصول (120 ساعة معتمدة)، ويمكن الدراسة بدوام جزئي", "4 semesters (120 credits); part-time also possible")
FEE = (f"1,250 فرنك سويسري للفصل لغير الأوروبيين (حوالي {round(1250 / CHF_PER_EUR / 10) * 10:,} يورو)",
       f"CHF 1,250 per semester for non-EU/EEA/Swiss students (about €{round(1250 / CHF_PER_EUR / 10) * 10:,})")
ADM = ("رسوم طلب 100 فرنك سويسري غير مستردة، ووديعة 3,000 فرنك سويسري لمعالجة تصريح الإقامة (تُرد في نهاية الدراسة حسب الجامعة)",
       "CHF 100 non-refundable application fee, and a CHF 3,000 deposit to process the residence permit (refunded at the end of studies, per the university)")
LIVING = ("الجامعة تذكر 1,500 فرنك سويسري شهرياً على الأقل للمعيشة والسكن، وليختنشتاين بلد غالٍ",
          "The university cites at least CHF 1,500 a month for living costs and rent; Liechtenstein is expensive")
HOW = ("التقديم أونلاين على بوابة الجامعة uni.li/application ودفع رسوم الطلب قبل الموعد؛ مكتب تنسيق التصاريح في الجامعة يساعد في طلب الإقامة بعد القبول",
       "Apply online at uni.li/application and pay the application fee by the deadline; the university's permit coordination office helps with the residence application after admission")
ADMISSION = "https://www.uni.li/en/studies/application-and-admission"
DL_WINTER = ("لمن يحتاج تأشيرة: حتى 31 مارس 2027 للدراسة في سبتمبر 2027 (بداية الشتاء فقط)",
             "Applicants who need a visa: by 31 March 2027 for a September 2027 start (winter intake only)")
DL_BOTH = ("لمن يحتاج تأشيرة: حتى 31 مارس 2027 للدراسة في سبتمبر 2027، أو حتى 30 سبتمبر 2027 للبدء في الفصل الصيفي (فبراير 2028)",
           "Applicants who need a visa: by 31 March 2027 for a September 2027 start, or by 30 September 2027 for the summer semester (February 2028)")

add(MA, "econ", "MSc Innovative Finance", "University of Liechtenstein", "Vaduz", MSC, Y2, FEE, ADM, DL_WINTER,
    ("مستوى B2 في الإنجليزية", "English at B2"),
    ("بكالوريوس في تخصص مناسب، ويمكن التقديم قبل التخرج بكشف الدرجات الحالي؛ 35 إلى 40 طالباً في الدفعة، مع مسارين: مسار الصناعة ومسار البحث",
     "A relevant bachelor's; you can apply before graduating with your current transcript; 35-40 students per intake, with an industry track and a research track"),
    HOW, LIVING, NP, "https://www.uni.li/en/studies/study-programmes/msc-innovative-finance", ADMISSION)
add(MA, "cs", "MSc Information Systems", "University of Liechtenstein", "Vaduz", MSC, Y2, FEE, ADM, DL_BOTH,
    ("شهادة لغة حسب إرشادات القبول الخاصة بالبرنامج (المستوى غير مذكور في صفحة التقديم؛ للتحقق)", "Language certificate per the programme's admission guidelines (level not on the application page; to verify)"),
    ("نظم المعلومات: التقاء التكنولوجيا والإدارة. المطلوب: البكالوريوس (يمكن تقديمه حتى بداية الفصل)، وسيرة ذاتية، وخطاب دافع، وقد تكون هناك مقابلة",
     "Information systems at the meeting point of technology and business. Required: bachelor's (can follow up to the semester start), CV and motivation letter; there may be an interview"),
    HOW, LIVING, NP, "https://uni.li/en/studies/study-programmes/msc-information-systems", ADMISSION)
add(MA, "arch", "MSc Architecture", "University of Liechtenstein", "Vaduz", ("ماجستير العلوم في العمارة (MSc Arch)", "Master of Science in Architecture (MSc Arch)"), Y2, FEE, ADM, DL_BOTH,
    ("مستوى B2 في الإنجليزية (صفحة البرنامج لا تحدد المستوى، للتحقق)", "English at B2 (the programme page does not state the level, to verify)"),
    ("العمارة والتصميم لمواجهة تغير المناخ مع 5 تخصصات؛ يُطلب ملف أعمال (Portfolio) يشمل مشروع البكالوريوس وخطاب دافع",
     "Architecture and design for climate change with five majors; a portfolio including your bachelor's thesis and a motivation letter are required"),
    HOW, LIVING, NP, "https://www.uni.li/en/studies/study-programmes/msc-architecture", ADMISSION)

write("ليختنشتاين", "Liechtenstein", "liechtenstein", MA, level="master")
append_master("ليختنشتاين", "liechtenstein")
