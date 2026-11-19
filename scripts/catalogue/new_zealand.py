# New Zealand: University of Waikato (public university, Hamilton).
# Source: waikato.ac.nz international tuition costs, "2027 Estimated Fees" for 180-point master's (1-2 years), checked 2026-11-19;
# fees are charged per paper and the page says amounts are approximate. International applications are processed on an ongoing
# basis (University calendar). Euro figures: ECB rate of 17 Nov 2026 (1.9985 NZD per euro).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import write, NP
from helpers import add, append_master

MA = []
UNI = "University of Waikato"
SRC = "https://www.waikato.ac.nz/int/study/fees-costs/international-tuition-costs/"
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

write("نيوزيلندا", "New Zealand", "new-zealand", MA, level="master")
append_master("نيوزيلندا", "new-zealand")
print("new zealand:", len(MA), "master's")
