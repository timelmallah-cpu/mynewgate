# United Kingdom bachelor's (added 2026-11-20), append-only via helpers.append_ba.
# Loughborough University (public, Loughborough): "International students tuition fees for undergraduate degree courses,
#   academic year 2027-28" (updated 05/10/2026); UCAS equal consideration deadline 13 January 2027, 18:00 UK time (ucas.com);
#   Egypt page: the Thanaweya Amma needs a suitable Foundation Year (ONCAMPUS) before entry. Course pages give
#   "3 years full-time" or "4 years full-time with placement year" (checked for Computer Science).
# Euro figures: ECB reference rate of 17 Nov 2026 (0.83305 GBP per euro).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, NP
from helpers import append_ba

REVIEWED = "2026-11-20"
GBP = 0.83305
SRC = "https://lboro.ac.uk/study/undergraduate/fees-funding/fees/international-fees-2027-28/"
REQ = "https://lboro.ac.uk/international/country/egypt/applicationinformation/entryrequirements/undergraduate/"
APPLY = "https://www.ucas.com/"
UNI = "Loughborough University"
ADM = ("الثانوية العامة المصرية (وشهادات ثانوية عربية أخرى مثل القطرية) لا تكفي وحدها: تطلب الجامعة سنة تأسيسية مناسبة (Foundation Year، مثلاً عبر ONCAMPUS) قبل البكالوريوس؛ الشهادات الأخرى حسب صفحة بلدك وشروط البرنامج (درجات A-level مثلاً)",
       "The Egyptian Thanaweya Amma (and other Arab certificates such as Qatar's) is not enough alone: the university asks for a suitable Foundation Year (for example via ONCAMPUS) before the bachelor's; other qualifications per your country's page and the course requirements (A-level grades, for example)")
DL = ("13 يناير 2027 الساعة 6 مساءً بتوقيت بريطانيا عبر UCAS (موعد النظر المتساوي لدفعة 2027)، والطلبات بعده حسب الأماكن المتبقية",
      "13 January 2027, 6pm UK time, through UCAS (equal consideration deadline for 2027 entry); later applications only if places remain")
EN = ("IELTS بمجموع 6.5 ولا مهارة أقل من 6.0 (الحد العام للجامعة؛ بعض البرامج قد تطلب أكثر)", "IELTS 6.5 overall with 6.0 in each skill (the university's standard requirement; some courses may ask for more)")
HOW = ("التقديم عبر UCAS (رمز المؤسسة L79)", "Apply through UCAS (institution code L79)")
DUR = ("3 سنوات بدوام كامل، أو 4 مع سنة تدريب عملي (Placement) اختيارية (للتحقق من صفحة البرنامج)", "3 years full-time, or 4 with an optional placement year (check the course page)")
DUR_CS = ("3 سنوات بدوام كامل، أو 4 مع سنة تدريب عملي (Placement)", "3 years full-time, or 4 with a placement year")
rows = []
for field, name, deg, gbp, other in [
    ("cs", "BSc Computer Science", "BSc", 31500, ("علوم الحاسب (معتمد من BCS)", "Computer science (BCS-accredited)")),
    ("cs", "BSc Computer Science and Artificial Intelligence", "BSc", 31500, ("علوم الحاسب والذكاء الاصطناعي", "Computer science and artificial intelligence")),
    ("eng", "BEng Mechanical Engineering", "BEng", 31500, ("الهندسة الميكانيكية", "Mechanical engineering")),
    ("eng", "BEng Civil Engineering", "BEng", 31500, ("الهندسة المدنية", "Civil engineering")),
    ("eng", "BEng Electronic and Electrical Engineering", "BEng", 31500, ("الهندسة الإلكترونية والكهربائية", "Electronic and electrical engineering")),
    ("econ", "BSc Economics", "BSc", 25950, ("الاقتصاد", "Economics")),
    ("bus", "BSc Accounting and Finance", "BSc", 25950, ("المحاسبة والتمويل", "Accounting and finance")),
    ("bus", "BSc International Business", "BSc", 25950, ("الأعمال الدولية", "International business")),
    ("psych", "BSc Psychology", "BSc", 31500, ("علم النفس", "Psychology")),
    ("sport", "BSc Sport and Exercise Science", "BSc", 35000, ("علوم الرياضة والتمرين", "Sport and exercise science")),
    ("sport", "BSc Sport Management", "BSc", 33000, ("إدارة الرياضة", "Sport management")),
    ("pol", "BA Politics", "BA", 25500, ("العلوم السياسية", "Politics")),
    ("pol", "BA International Relations", "BA", 25500, ("العلاقات الدولية", "International relations")),
    ("law", "LLB Law", "LLB", 25500, ("القانون", "Law")),
    ("hum", "BA English", "BA", 25500, ("اللغة الإنجليزية وآدابها", "English")),
    ("sci", "BSc Mathematics", "BSc", 25500, ("الرياضيات", "Mathematics")),
    ("sci", "BSc Physics", "BSc", 31500, ("الفيزياء", "Physics")),
    ("sci", "BSc Chemistry", "BSc", 31500, ("الكيمياء", "Chemistry")),
    ("art", "BA Design", "BA", 31500, ("التصميم", "Design")),
]:
    eur = round(gbp / GBP / 10) * 10
    fee = (f"حوالي {eur:,} يورو في السنة ({gbp:,} جنيهاً إسترلينياً رسوم الطلاب الدوليين للسنة الدراسية 2027/2028؛ رسوم السنوات التالية قد تزيد؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
           f"About €{eur:,} a year (£{gbp:,} international fee for 2027/28; later years may cost more; ECB rate of 17 November 2026)")
    degs = {"BSc": ("بكالوريوس العلوم (BSc)", "Bachelor of Science (BSc)"), "BEng": ("بكالوريوس الهندسة (BEng)", "Bachelor of Engineering (BEng)"),
            "BA": ("بكالوريوس الآداب (BA)", "Bachelor of Arts (BA)"), "LLB": ("بكالوريوس القانون (LLB)", "Bachelor of Laws (LLB)")}
    rows.append(P(field=field, name=name, uni=UNI, city="Loughborough", deg=degs[deg], dur=DUR_CS if name == "BSc Computer Science" else DUR, fee=fee,
                  adm=ADM, dl=DL, en=EN, other=other, how=HOW, living=NP, house=NP, src=SRC, req=REQ,
                  req_note=("الصفحة الرسمية: شروط القبول من مصر", "Official page: entry requirements from Egypt"),
                  apply=APPLY, apply_note=("التقديم عبر UCAS", "Apply through UCAS")))
append_ba("بريطانيا", "united-kingdom", rows, REVIEWED)
print("uk bachelor's:", len(rows))
