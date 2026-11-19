# Malaysia: English-taught coursework master's at two public universities.
# Universiti Malaya (Kuala Lumpur), Faculty of Computer Science and Information Technology: non-citizen full-time fees 2026/2027
# (fsktm.um.edu.my Fees_PG_NC.pdf, 3 semesters incl. a short special semester, excluding accommodation and 6% SST);
# international postgraduate applications for the March 2027 intake 7 Sept 2026 - 30 Jan 2027 (study.um.edu.my/how-to-apply).
# Universiti Sains Malaysia (Penang): international coursework totals in US dollars, effective from session 2025/2026
# (admission.usm.my/postgraduate/fee-pg, updated 18 Nov 2026). Checked 2026-11-19.
# Euro figures are approximate: about 4.9 ringgit per euro (November 2026, to check) and US$1.11 per euro.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import write, NP
from helpers import add, append_master

MA = []
Y1 = ("سنة واحدة تقريباً (فصلان وفصل خاص قصير)", "About one year (two semesters and a short special semester)")

UM = "Universiti Malaya (UM)"
UM_ADM = ("بكالوريوس في الحاسب أو مجال قريب بمعدل مناسب حسب شروط البرنامج", "A bachelor's in computing or a related field with a suitable grade per the programme's conditions")
UM_DL = ("دفعة مارس 2027 للطلاب الدوليين: التقديم من 7 سبتمبر 2026 حتى 30 يناير 2027",
         "March 2027 intake for international applicants: 7 September 2026 - 30 January 2027")
UM_EN = ("الدراسة بالإنجليزية؛ شهادة إنجليزية حسب شروط الجامعة (IELTS أو TOEFL؛ الحد الأدنى غير منشور هنا، للتحقق)",
         "Taught in English; an English certificate per the university's conditions (IELTS or TOEFL; minimum not published here, to verify)")
UM_HOW = ("التقديم أونلاين على بوابة الجامعة (رسوم طلب 500 رينغيت)؛ بعد القبول تقدّم الجامعة طلب تصريح الطالب عبر EMGS",
          "Apply online through the university portal (application fee RM500); after admission the university files the Student Pass application with EMGS")
UM_FEES = "https://fsktm.um.edu.my/fsktm/doc/postgraduate/fees/Fees_PG_NC.pdf"
UM_SRC = "https://study.um.edu.my/how-to-apply"
def um_fee(rm, eur):
    return (f"حوالي {eur:,} يورو للبرنامج كاملاً ({rm} رينغيت ماليزي لغير الماليزيين بدوام كامل في 2026/2027، بدون السكن وضريبة الخدمة 6%؛ التحويل تقريبي)",
            f"About €{eur:,} for the whole programme (RM{rm} for non-citizens, full time, 2026/2027, excluding housing and 6% SST; approximate conversion)")
for field, name, deg, rm, eur, other in [
    ("ds", "Master of Data Science", ("ماجستير علم البيانات", "Master of Data Science"), "41,663.80", 8500, ("علم البيانات (بالمقررات)", "Data science (coursework)")),
    ("cs", "Master of Cyber Security", ("ماجستير الأمن السيبراني", "Master of Cyber Security"), "48,073.30", 9810, ("الأمن السيبراني (بالمقررات)", "Cyber security (coursework)")),
    ("cs", "Master of Artificial Intelligence", ("ماجستير الذكاء الاصطناعي", "Master of Artificial Intelligence"), "48,073.00", 9810, ("الذكاء الاصطناعي (بالمقررات)", "Artificial intelligence (coursework)")),
    ("cs", "Master of Computer Science (Applied Computing)", ("ماجستير علوم الحاسب", "Master of Computer Science"), "43,265.80", 8830, ("الحوسبة التطبيقية (مقررات وبحث)", "Applied computing (mixed mode)")),
    ("cs", "Master of Software Engineering (Software Technology)", ("ماجستير هندسة البرمجيات", "Master of Software Engineering"), "43,265.80", 8830, ("تقنيات البرمجيات (مقررات وبحث)", "Software technology (mixed mode)")),
]:
    add(MA, field, name, UM, "Kuala Lumpur", deg, Y1, um_fee(rm, eur), UM_ADM, UM_DL, UM_EN, other, UM_HOW, NP, NP, UM_FEES, UM_SRC)

USM = "Universiti Sains Malaysia (USM)"
DUR_NP = NP
USM_ADM = ("بكالوريوس في مجال مناسب حسب شروط البرنامج", "A bachelor's in a suitable field per the programme's conditions")
USM_DL = ("غير منشور في المصدر لكل برنامج؛ الجامعة تحدد تاريخ إغلاق لكل دفعة (سبتمبر ومارس)، تحقق من صفحة البرنامج",
          "Not published per programme in the source; the university sets a cut-off date for each intake (September and March); check the programme page")
USM_EN = ("الدراسة بالإنجليزية للطلاب الدوليين (للتحقق مع البرنامج)؛ شهادة IELTS أو ما يعادلها، ومن لا يستوفي المستوى يمكنه دراسة برنامج الإنجليزية المكثف (IEP) في الجامعة",
          "Taught in English for international students (check with the programme); IELTS or an equivalent, and those below the level can take the university's Intensive English Programme (IEP)")
USM_HOW = ("التقديم أونلاين على موقع القبول في الجامعة؛ رسوم تسجيل 225 دولاراً وكفالة شخصية 1,000 دولار للطلاب الدوليين",
           "Apply online on the university's admission site; registration fee US$225 and a US$1,000 personal bond for international students")
USM_SRC = "https://admission.usm.my/postgraduate/fee-pg"
def usm_fee(usd, eur):
    return (f"حوالي {eur:,} يورو للبرنامج كاملاً ({usd:,} دولار أمريكي للطلاب الدوليين، بأسعار سارية من 2025/2026؛ مدة البرنامج غير منشورة في صفحة الرسوم؛ التحويل تقريبي)",
            f"About €{eur:,} for the whole programme (US${usd:,} for international students, rates effective from 2025/2026; duration not on the fee page; approximate conversion)")
for field, name, usd, other in [
    ("ds", "Master of Data Science", 8000, ("علم البيانات", "Data science")),
    ("cs", "Master in Cybersecurity", 9450, ("الأمن السيبراني", "Cybersecurity")),
    ("bus", "Master of Business Analytics", 9030, ("تحليلات الأعمال", "Business analytics")),
    ("bus", "Master of Business Administration", 9600, ("إدارة الأعمال", "Business administration")),
    ("arch", "Master of Architecture", 9000, ("العمارة", "Architecture")),
    ("ph", "Master of Public Health", 9000, ("الصحة العامة", "Public health")),
    ("env", "Master of Environmental Science", 6400, ("علوم البيئة", "Environmental science")),
    ("econ", "Master of Economics Management", 8600, ("إدارة الاقتصاد", "Economics management")),
    ("econ", "Master in Global Islamic Finance", 7500, ("التمويل الإسلامي العالمي", "Global Islamic finance")),
    ("media", "Master of Communication in Integrated Marketing Communication", 8400, ("الاتصال التسويقي المتكامل", "Integrated marketing communication")),
    ("edu", "Master of Education in Educational Technology", 6800, ("تكنولوجيا التعليم", "Educational technology")),
    ("art", "Master of Design in Creative Industry", 6400, ("التصميم للصناعات الإبداعية", "Design for the creative industry")),
]:
    deg = ("ماجستير بالمقررات", "Coursework master's")
    add(MA, field, name, USM, "Penang", deg, DUR_NP, usm_fee(usd, round(usd / 1.11 / 10) * 10), USM_ADM, USM_DL, USM_EN, other, USM_HOW, NP, NP, USM_SRC, "https://admission.usm.my/index.php/en/postgraduate/postgraduate-programme")

write("ماليزيا", "Malaysia", "malaysia", MA, level="master")
append_master("ماليزيا", "malaysia")
print("malaysia:", len(MA), "master's")
