# Australia: Flinders University (public university, Adelaide).
# Source: Flinders "International Commencing Tuition Fee Schedule 2027" (updated August 2026), checked 2026-11-19. The schedule
# does not say whether the amounts are per year; Flinders states its international fees as annual elsewhere, so they are written
# as yearly amounts with a "to verify" note. Euro figures: ECB rate of 17 Nov 2026 (1.6316 AUD per euro).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import write, NP
from helpers import add, append_master

MA = []
UNI = "Flinders University"
SRC = "https://www.flinders.edu.au/content/dam/documents/study/international/2027-international-commencing-tuition-fee-schedule.pdf"
APPLY = "https://www.flinders.edu.au/international"
ADM = ("بكالوريوس مناسب حسب شروط البرنامج", "A suitable bachelor's per the programme's conditions")
DL = ("غير منشور في المصدر؛ الدراسة تبدأ عادة في فبراير ويوليو، وقدّم مبكراً لترك وقت لتأشيرة الطالب", "Not published in the source; study usually starts in February and July, so apply early to leave time for the student visa")
EN = ("شهادة إنجليزية حسب شروط البرنامج (IELTS أو ما يعادله؛ الحد الأدنى غير منشور هنا)", "An English certificate per the programme (IELTS or equivalent; minimum not published here)")
HOW = ("التقديم أونلاين للطلاب الدوليين عبر موقع الجامعة؛ بعد القبول تدفع عربوناً وتحصل على تأكيد التسجيل CoE لطلب التأشيرة", "Apply online as an international student through the university; after admission you pay a deposit and receive the CoE for the visa")
def fee(aud):
    eur = round(aud / 1.6316 / 10) * 10
    return (f"حوالي {eur:,} يورو في السنة ({aud:,} دولار أسترالي حسب جدول رسوم الطلاب الدوليين الجدد لعام 2027؛ الجدول لا يذكر صراحة أن المبلغ سنوي، للتحقق؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
            f"About €{eur:,} a year (AUD {aud:,} in the 2027 international commencing fee schedule; the schedule does not say explicitly that it is annual, to verify; ECB rate of 17 November 2026)")
for field, name, aud, other in [
    ("cs", "Master of Information Technology", 45000, ("تقنية المعلومات", "Information technology")),
    ("cs", "Master of Information Technology (Network and Cybersecurity Systems)", 45000, ("الشبكات والأمن السيبراني", "Networks and cybersecurity")),
    ("cs", "Master of Computer Science", 45000, ("علوم الحاسب", "Computer science")),
    ("cs", "Master of Computer Science (Artificial Intelligence)", 45000, ("الذكاء الاصطناعي", "Artificial intelligence")),
    ("ds", "Master of Data Science", 45000, ("علم البيانات", "Data science")),
    ("eng", "Master of Engineering (Civil)", 50100, ("الهندسة المدنية", "Civil engineering")),
    ("eng", "Master of Engineering (Electrical and Electronic)", 50100, ("الهندسة الكهربائية والإلكترونية", "Electrical and electronic engineering")),
    ("eng", "Master of Engineering (Mechanical)", 50100, ("الهندسة الميكانيكية", "Mechanical engineering")),
    ("env", "Master of Environmental Management and Sustainability", 45200, ("الإدارة البيئية والاستدامة", "Environmental management and sustainability")),
    ("ph", "Master of Public Health", 43400, ("الصحة العامة", "Public health")),
    ("pol", "Master of International Relations", 41700, ("العلاقات الدولية", "International relations")),
    ("edu", "Master of Education", 40000, ("التربية", "Education")),
    ("bus", "Master of Business Administration (Business Analytics)", 46400, ("إدارة الأعمال مع تحليلات الأعمال", "Business administration with business analytics")),
]:
    add(MA, field, name, UNI, "Adelaide", (name, name), NP, fee(aud), ADM, DL, EN, other, HOW, NP, NP, SRC, APPLY)

write("أستراليا", "Australia", "australia", MA, level="master")
append_master("أستراليا", "australia")
print("australia:", len(MA), "master's")
