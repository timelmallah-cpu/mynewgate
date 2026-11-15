# Romania: English-taught master's programmes at public universities.
# Non-EU applicants need a Letter of Acceptance issued by the Ministry of Education, requested through the university.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, MSC2

LOA = ("الجامعة ترسل الملف لوزارة التعليم التي تصدر خطاب القبول (Letter of Acceptance) اللازم للتأشيرة؛ وتُدفع رسوم السنة الأولى قبل التأشيرة",
       "The university forwards the file to the Ministry of Education, which issues the Letter of Acceptance needed for the visa; the first-year fee is paid before the visa")
LIV_RO = ("حوالي 300 - 600 يورو شهرياً حسب أدلة الدراسة (لا يوجد رقم رسمي فيما راجعناه)", "About €300 - 600 per month per study guides (no official figure in what we reviewed)")
R = []

# ---------- National University of Science and Technology POLITEHNICA Bucharest ----------
UPB = "National University of Science and Technology POLITEHNICA Bucharest"
UPB_P = "https://international.upb.ro/admission/study-offers/program/"
UPB_APPLY = "https://international.upb.ro/admission/applying/students-from-non-eu-countries"
UPB_FEES = "https://www.international.upb.ro/assets/docs/2026/regulations/POLITEHNICA_Bucharest_tuition_fees.pdf"
UPB_DL = ("مواعيد 2027 لسه ما اتنشرتش. في 2026/2027 كان التسجيل على apply.upb.ro لحد 31 يوليو، والمتوقع نفس الميعاد (للتحقق). قدّم بدري لأن الوزارة بتحتاج من 30 لـ 60 يوم على الأقل لإصدار خطاب القبول",
          "For 2026/2027 registration on apply.upb.ro ran until 31 July 2026; the Ministry needs at least 30 - 60 days to issue the Letter of Acceptance (2027 dates to verify)")
UPB_TECH = ("2,700 يورو سنوياً لغير الأوروبيين (9 أشهر) للبرامج التقنية", "€2,700 per year for non-EU students (9 months) for technology programmes")
UPB_ECON = ("2,700 يورو سنوياً للبرامج التقنية أو 2,200 يورو للبرامج الاقتصادية؛ فئة هذا البرنامج للتحقق", "€2,700 per year for technology programmes or €2,200 for economics programmes; this programme's category is to be verified")
UPB_ADM = ("رسوم تسجيل 100 يورو في السنة الأولى فقط", "€100 enrolment fee in the first year only")
UPB_EN = ("شهادة كفاءة في الإنجليزية، أو اختبار لغة في الجامعة برسوم 270 يورو", "An English proficiency certificate, or the university's language test for a €270 fee")
UPB_HOW = ("منصة apply.upb.ro (قسم غير الأوروبيين)", "apply.upb.ro platform (non-EU section)")
UPB_HOUSE = ("سكن جامعي متاح؛ الرسوم تُحدد سنوياً من مجلس إدارة الجامعة", "University dormitories available; the fee is set yearly by the university's board")
def upb(field, name, slug, fee=UPB_TECH, other=None):
    R.append(P(field=field, name=name, uni=UPB, city="Bucharest", deg=("Master's degree", "Master's degree"), dur=MSC2,
               fee=fee, adm=UPB_ADM, dl=UPB_DL, en=UPB_EN, other=other or LOA, how=UPB_HOW, living=LIV_RO, house=UPB_HOUSE,
               src=UPB_P + slug, req=UPB_P + slug, req_note=("صفحة البرنامج في عرض الدراسة للدوليين", "Programme page in the international study offer"),
               apply=UPB_APPLY, apply_note=("خطوات التقديم لغير الأوروبيين", "Application steps for non-EU students")))

upb("cs", "Artificial Intelligence", "artificial-intelligence")
upb("cs", "Software Engineering", "software-engineering")
upb("cs", "Advanced Cybersecurity", "advanced-cybersecurity")
upb("ds", "Advanced Analytics for Business", "advanced-analytics-for-business")
upb("eng", "Robotics and Automation", "robotics-and-automation")
upb("eng", "Energy Engineering", "energy-engineering")
upb("eng", "Integrated Mechanical Engineering Design", "integrated-mechanical-engineering-design")
upb("eng", "Air Transport Engineering", "air-transport-engineering")
upb("bus", "Strategic Management and Business Development", "strategic-management-and-business-development", fee=UPB_ECON)
upb("bus", "Digital Transformation in Business", "digital-transformation-in-business", fee=UPB_ECON)

# ---------- Babeș-Bolyai University ----------
UBB = "Babeș-Bolyai University"
UBB_URL = "https://cci.ubbcluj.ro/admission-international-students/candidates-from-other-countries/master-degree/"
UBB_DL = ("مواعيد 2027 لسه ما اتنشرتش. في 2026/2027 كان التسجيل 1 أبريل - 31 يوليو، والمتوقع نفس الفترة (للتحقق)", "For 2026/2027 registration ran 1 April - 31 July 2026 (2027 dates to verify)")
UBB_EN = ("شهادة إنجليزية معتمدة إلا في حالات الإعفاء", "An accepted English certificate unless an exemption applies")
UBB_HOW = ("منصة القبول الدولية للجامعة؛ وبعد دفع الرسوم (خلال 21 يوماً) تصدر الجامعة تأكيد الدفع والسكن", "University international admission platform; after paying the fee (within 21 days) the university issues confirmation of payment and accommodation")
UBB_HOUSE = ("نعم: تصدر الجامعة تأكيد السكن في الحرم بعد دفع الرسوم", "Yes: the university issues on-campus accommodation confirmation after the fee is paid")
def ubb(field, name, fee, other=None):
    R.append(P(field=field, name=name, uni=UBB, city="Cluj-Napoca", deg=("Master's degree", "Master's degree"), dur=MSC2,
               fee=(f"{fee} يورو سنوياً لغير الأوروبيين (2026/2027)", f"€{fee} per year for non-EU students (2026/2027)"),
               adm=NP, dl=UBB_DL, en=UBB_EN, other=other or LOA, how=UBB_HOW, living=LIV_RO, house=UBB_HOUSE, src=UBB_URL,
               req=UBB_URL, req_note=("عرض الماجستير للدوليين: البرامج والرسوم والخطوات", "Master's offer for international students: programmes, fees and steps"),
               apply=UBB_URL, apply_note=("خطوات التقديم ورابط منصة القبول", "Application steps and admission platform link")))

ubb("cs", "Applied Computational Intelligence", "9,000", ("كلية الرياضيات وعلوم الحاسب؛ " + LOA[0], "Faculty of Mathematics and Computer Science; " + LOA[1]))
ubb("cs", "Artificial Intelligence for Connected Industries", "9,000", ("كلية الرياضيات وعلوم الحاسب؛ " + LOA[0], "Faculty of Mathematics and Computer Science; " + LOA[1]))
ubb("ds", "High Performance Computing and Big Data Analysis", "9,000", ("كلية الرياضيات وعلوم الحاسب؛ " + LOA[0], "Faculty of Mathematics and Computer Science; " + LOA[1]))
ubb("cs", "Business Modeling and Distributed Computing", "2,500", ("كلية العلوم الاقتصادية وإدارة الأعمال؛ تطوير البرمجيات للأعمال؛ " + LOA[0], "Faculty of Economics and Business Administration; software development for business; " + LOA[1]))
ubb("bus", "International Business Administration", "5,000", ("كلية الأعمال؛ " + LOA[0], "Faculty of Business; " + LOA[1]))
ubb("bus", "International Business Management", "2,500", ("كلية العلوم الاقتصادية وإدارة الأعمال؛ " + LOA[0], "Faculty of Economics and Business Administration; " + LOA[1]))
ubb("ph", "Public Health", "3,000", ("Master of Public Health؛ كلية العلوم السياسية والإدارية والاتصال؛ " + LOA[0], "Master of Public Health; Faculty of Political, Administrative and Communication Sciences; " + LOA[1]))
ubb("ph", "Health Economics", "2,500", ("تنبيه: اقتصاديات صحية وليست صحة عامة بالمعنى الدقيق؛ " + LOA[0], "Warning: health economics, not public health in the strict sense; " + LOA[1]))

# ---------- Bucharest University of Economic Studies (ASE) ----------
ASE = "Bucharest University of Economic Studies (ASE)"
ASE_INFO = "https://international.ase.ro/21/?p=2447"
ASE_FEE = ("4,500 يورو سنوياً لغير الأوروبيين (2026/2027)", "€4,500 per year for non-EU students (2026/2027)")
ASE_ADM = ("رسوم تسجيل 450 يورو غير مستردة", "€450 non-refundable registration fee")
ASE_DL = ("مواعيد غير الأوروبيين تُنشر في صفحة القبول الدولي للجامعة (للتحقق)؛ يلزم التقديم خلال سنتين من التخرج من البكالوريوس",
          "Non-EU dates are published on the university's international admission page (to verify); you must apply within 2 years of finishing your bachelor's")
ASE_EN = ("شهادة لغة معتمدة لمن لم يدرس 4 سنوات على الأقل بالإنجليزية", "An accepted language certificate unless you studied at least 4 years in English")
ASE_HOW = ("رفع المستندات على منصة الجامعة الإلكترونية؛ ثم خطاب القبول والتسجيل حضورياً بالتأشيرة", "Upload documents on the university's online platform; then the letter of acceptance and in-person registration with the visa")
def ase(field, name, src, other=None):
    R.append(P(field=field, name=name, uni=ASE, city="Bucharest", deg=("Master's degree", "Master's degree"), dur=MSC2,
               fee=ASE_FEE, adm=ASE_ADM, dl=ASE_DL, en=ASE_EN, other=other or LOA, how=ASE_HOW, living=LIV_RO, house=NP,
               src=src, req=ASE_INFO, req_note=("شروط وخطوات القبول لغير الأوروبيين في الماجستير", "Master's admission requirements and steps for non-EU applicants"),
               apply=ASE_INFO, apply_note=("صفحة القبول الدولي للماجستير", "International master's admission page")))

ase("ds", "Master of Business Analytics", "https://www.analytics.fabiz.ase.ro/",
    ("8 مقاعد فقط لغير الأوروبيين؛ " + LOA[0], "Only 8 places for non-EU students; " + LOA[1]))
ase("cs", "Informatic Security", ASE_INFO)
ase("bus", "International Business Management", ASE_INFO)
ase("bus", "Digital Business and Innovation", ASE_INFO)
ase("bus", "Business Strategy and Leadership", ASE_INFO)

write("رومانيا", "Romania", "romania", R)
