# New Zealand: University of Waikato (public university, Hamilton) and Auckland University of Technology (public, Auckland).
# Source: waikato.ac.nz international tuition costs, "2027 Estimated Fees" for 180-point master's (1-2 years), checked 2026-11-19;
# fees are charged per paper and the page says amounts are approximate. International applications are processed on an ongoing
# basis (University calendar). Euro figures: ECB rate of 17 Nov 2026 (1.9985 NZD per euro).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import write, NP
from helpers import add, append_master

MA = []
UNI = "University of Waikato"
SRC = "https://www.waikato.ac.nz/study/fees-costs/international-tuition-costs/"
APPLY = "https://www.waikato.ac.nz/int/about/calendar/admission/enrolment"
D180 = ("3 فصول (180 نقطة، سنة ونصف تقريباً؛ الجامعة تقول من سنة إلى سنتين)", "3 trimesters (180 points, about 18 months; the university says 1-2 years)")
D120 = ("سنة واحدة (120 نقطة)", "1 year (120 points)")
ADM = ("بكالوريوس مناسب بمعدل جيد (B تقريباً) حسب شروط البرنامج", "A suitable bachelor's with a good average (around B) per the programme's conditions")
DL = ("الجامعة تعالج طلبات الطلاب الدوليين باستمرار؛ الفصل الأول (Trimester A) يبدأ في مارس والثاني (B) في يوليو، وقدّم مبكراً لترك وقت للتأشيرة",
      "The university processes international applications on an ongoing basis; Trimester A starts in March and Trimester B in July, so apply early to leave time for the visa")
EN = ("شهادة إنجليزية حسب شروط الجامعة (IELTS أو ما يعادله؛ الحد الأدنى غير منشور هنا)", "An English certificate per the university (IELTS or equivalent; minimum not published here)")
HOW = ("التقديم أونلاين على موقع الجامعة؛ بعد عرض المكان تقدّم طلب تأشيرة الطالب", "Apply online through the university; after the offer of place you apply for the student visa")
def fee(nzd):
    eur = round(nzd / 1.9985 / 10) * 10
    return (f"حوالي {eur:,} يورو للبرنامج كاملاً ({nzd:,} دولار نيوزيلندي رسوم تقديرية لعام 2027، تُحسب حسب المواد وقد تتغير، بدون رسوم الخدمات والتأمين؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
            f"About €{eur:,} for the whole programme (NZD {nzd:,} estimated 2027 tuition, charged per paper and subject to change, excluding the services levy and insurance; ECB rate of 17 November 2026)")
for field, name, nzd, dur, other in [
    ("cs", "Master of Cyber Security", 72463, D180, ("الأمن السيبراني", "Cyber security")),
    ("cs", "Master of Information Technology", 72765, D180, ("تقنية المعلومات", "Information technology")),
    ("ds", "Master of Data Science", 71789, D180, ("علم البيانات", "Data science")),
    ("cs", "Master of Artificial Intelligence", 71789, D180, ("الذكاء الاصطناعي", "Artificial intelligence")),
    ("eng", "Master of Engineering", 84483, D180, ("الهندسة", "Engineering")),
    ("env", "Master of Environment and Society", 72324, D180, ("البيئة والمجتمع", "Environment and society")),
    ("bus", "Master of Business", 64859, D180, ("الأعمال", "Business")),
    ("edu", "Master of Education", 62339, D180, ("التربية", "Education")),
]:
    add(MA, field, name, UNI, "Hamilton", (name, name), dur, fee(nzd), ADM, DL, EN, other, HOW, NP, NP, SRC, APPLY)

# ---------------- Auckland University of Technology (AUT), Auckland
# Source: aut.ac.nz "International student fees at AUT" (fees for a full-time year of 120 points, tuition + student services
# levy; most rows carry no year label, Master of Business Management is labelled 2027), checked 2026-11-20.
AUT = "Auckland University of Technology (AUT)"
AUT_SRC = "https://www.aut.ac.nz/study/fees-and-scholarships/fees-to-study-at-aut/international-student-fees-at-aut"
AUT_APPLY = "https://www.aut.ac.nz/international"
AUT_D = ("3 فصول (180 نقطة، سنة ونصف تقريباً بدوام كامل)", "3 semesters (180 points, about 18 months full time)")
AUT_DL = ("غير منشور في المصدر؛ الدراسة في AUT تبدأ عادة في مارس ويوليو، وقدّم مبكراً لترك وقت للتأشيرة", "Not published in the source; study at AUT usually starts in March and July, so apply early to leave time for the visa")
AUT_ADM = ("بكالوريوس مناسب بتقدير جيد (B تقريباً أو 70% في السنة الأخيرة لبعض البرامج) حسب شروط البرنامج", "A suitable bachelor's with a good grade (around B, or 70% in the final year for some programmes) per the programme")
def aut_fee(nzd, label="السنة غير موضحة في الصفحة لأغلب البرامج، للتحقق", label_en="most rows on the page carry no year label, to verify"):
    eur = round(nzd / 1.9985 / 10) * 10
    return (f"حوالي {eur:,} يورو في السنة ({nzd:,.2f} دولار نيوزيلندي لكل 120 نقطة، أي سنة دراسة كاملة، شاملة رسوم خدمات الطلاب؛ {label}؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
            f"About €{eur:,} a year (NZD {nzd:,.2f} per 120 points, one full-time year, including the student services levy; {label_en}; ECB rate of 17 November 2026)")
for field, name, nzd, other, lab in [
    ("cs", "Master of Computer and Information Sciences", 49459.67, ("علوم الحاسب والمعلومات (بحث أو مشروع بحثي)", "Computer and information sciences (thesis or research project)"), None),
    ("ds", "Master of Analytics", 49459.67, ("التحليلات وعلم البيانات", "Analytics and data science"), None),
    ("cs", "Master of Cyber Security and Digital Forensics", 48559.67, ("الأمن السيبراني والأدلة الرقمية", "Cyber security and digital forensics"), None),
    ("eng", "Master of Engineering", 52859.67, ("الهندسة (180 نقطة، أو 120 لحملة بكالوريوس الشرف)", "Engineering (180 points, or 120 with an honours degree)"), None),
    ("bus", "Master of Business Management", 62789.51, ("إدارة الأعمال", "Business management"), ("رسوم 2027", "2027 fee")),
    ("media", "Master of Communication Studies", 43959.67, ("دراسات الاتصال", "Communication studies"), None),
    ("tour", "Master of International Tourism Management", 42859.67, ("إدارة السياحة الدولية", "International tourism management"), None),
]:
    fee = aut_fee(nzd) if not lab else aut_fee(nzd, lab[0], lab[1])
    add(MA, field, name, AUT, "Auckland", (name, name), AUT_D, fee, AUT_ADM, AUT_DL, EN, other, HOW, NP, NP, AUT_SRC, AUT_APPLY)

write("نيوزيلندا", "New Zealand", "new-zealand", MA, level="master")
append_master("نيوزيلندا", "new-zealand")
print("new zealand:", len(MA), "master's")
