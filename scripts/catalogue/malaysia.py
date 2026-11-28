# Malaysia: English-taught coursework master's at two public universities.
# Universiti Malaya (Kuala Lumpur), Faculty of Computer Science and Information Technology: non-citizen full-time fees 2026/2027
# (fsktm.um.edu.my Fees_PG_NC.pdf, 3 semesters incl. a short special semester, excluding accommodation and 6% SST);
# international postgraduate applications for the March 2027 intake 7 Sept 2026 - 30 Jan 2027 (study.um.edu.my/how-to-apply).
# Universiti Sains Malaysia (Penang): international coursework totals in US dollars, effective from session 2025/2026
# (admission.usm.my/postgraduate/fee-pg, updated 18 Nov 2026). Checked 2026-11-19.
# Euro figures are approximate: ECB reference rate of 17 Nov 2026 (4.4983 ringgit per euro) and US$1.11 per euro.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import common
from common import write, NP
common.REVIEWED = "2026-11-20"
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
    return (f"حوالي {eur:,} يورو للبرنامج كاملاً ({rm} رينغيت ماليزي لغير الماليزيين بدوام كامل في 2026/2027، بدون السكن وضريبة الخدمة 6%؛ التحويل بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
            f"About €{eur:,} for the whole programme (RM{rm} for non-citizens, full time, 2026/2027, excluding housing and 6% SST; converted at the ECB rate of 17 November 2026)")
for field, name, deg, rm, eur, other in [
    ("ds", "Master of Data Science", ("ماجستير علم البيانات", "Master of Data Science"), "41,663.80", 9260, ("علم البيانات (بالمقررات)", "Data science (coursework)")),
    ("cs", "Master of Cyber Security", ("ماجستير الأمن السيبراني", "Master of Cyber Security"), "48,073.30", 10690, ("الأمن السيبراني (بالمقررات)", "Cyber security (coursework)")),
    ("cs", "Master of Artificial Intelligence", ("ماجستير الذكاء الاصطناعي", "Master of Artificial Intelligence"), "48,073.00", 10690, ("الذكاء الاصطناعي (بالمقررات)", "Artificial intelligence (coursework)")),
    ("cs", "Master of Computer Science (Applied Computing)", ("ماجستير علوم الحاسب", "Master of Computer Science"), "43,265.80", 9620, ("الحوسبة التطبيقية (مقررات وبحث)", "Applied computing (mixed mode)")),
    ("cs", "Master of Software Engineering (Software Technology)", ("ماجستير هندسة البرمجيات", "Master of Software Engineering"), "43,265.80", 9620, ("تقنيات البرمجيات (مقررات وبحث)", "Software technology (mixed mode)")),
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
def usm_fee(usd, eur, known):
    d_ar = "المدة من صفحة البرنامج" if known else "مدة البرنامج غير منشورة في صفحة الرسوم"
    d_en = "duration from the programme page" if known else "duration not on the fee page"
    return (f"حوالي {eur:,} يورو للبرنامج كاملاً ({usd:,} دولار أمريكي للطلاب الدوليين، بأسعار سارية من 2025/2026؛ {d_ar}؛ التحويل تقريبي)",
            f"About €{eur:,} for the whole programme (US${usd:,} for international students, rates effective from 2025/2026; {d_en}; approximate conversion)")
# Minimum full-time duration from the official programme pages (checked 2026-11-20): admission.usm.my, cs.usm.my, cyres.usm.my,
# medic.usm.my. USM has two semesters a year. The others are not published on a page we could read.
USM_DUR = {
    "Master of Data Science": ("3 فصول دراسية على الأقل بدوام كامل (سنة ونصف تقريباً)", "At least 3 semesters full-time (about 1.5 years)"),
    "Master in Cybersecurity": ("فصلان دراسيان على الأقل بدوام كامل (سنة تقريباً)", "At least 2 semesters full-time (about 1 year)"),
    "Master of Architecture": ("4 فصول دراسية على الأقل بدوام كامل (سنتان)", "At least 4 semesters full-time (2 years)"),
    "Master of Environmental Science": ("فصلان دراسيان على الأقل بدوام كامل (سنة تقريباً)", "At least 2 semesters full-time (about 1 year)"),
    "Master of Public Health": ("فصلان دراسيان (سنة واحدة)", "Two semesters (one year)"),
}
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
    add(MA, field, name, USM, "Penang", deg, USM_DUR.get(name, DUR_NP), usm_fee(usd, round(usd / 1.11 / 10) * 10, name in USM_DUR), USM_ADM, USM_DL, USM_EN, other, USM_HOW, NP, NP, USM_SRC, "https://admission.usm.my/")

# Universiti Teknologi Malaysia (UTM), Kuala Lumpur campus: Faculty of Artificial Intelligence and Malaysia-Japan International
# Institute of Technology (MJIIT). International coursework/mixed-mode fees per programme (3 semesters) from admission.utm.my/fees-pg-inter/
# (the page gives no session or effective date, so the fee text says so); intake windows from UTM's PG programme lists
# (Feb 2026: 1 Nov - 31 Dec 2025; Sept 2026: 1 Apr - 31 Jul 2026, international); English: sps.utm.my general entry requirements.
# Checked 2026-11-20.
UTM = "Universiti Teknologi Malaysia (UTM)"
UTM_DUR = ("3 فصول دراسية (سنة ونصف تقريباً؛ فصلان في السنة)", "3 semesters (about 1.5 years; two semesters a year)")
UTM_ADM = ("بكالوريوس في مجال مناسب حسب شروط البرنامج", "A bachelor's in a suitable field per the programme's conditions")
UTM_DL = ("مواعيد دفعة فبراير 2027 لم تُنشر بعد؛ في الدورة الماضية كان التقديم للطلاب الدوليين لدفعة فبراير 2026 من 1 نوفمبر حتى 31 ديسمبر 2025، ولدفعة سبتمبر 2026 من 1 أبريل حتى 31 يوليو 2026",
          "February 2027 intake dates not out yet; last cycle international applications for February 2026 ran 1 November - 31 December 2025 and for September 2026 1 April - 31 July 2026")
UTM_EN = ("IELTS أكاديمي 6.0 أو TOEFL iBT 79 (أو PBT 550)؛ من لا يستوفي المستوى يدرس برنامج إنجليزية مكثفاً في الجامعة؛ لغة التدريس الإنجليزية للطلاب الدوليين (للتحقق مع البرنامج)",
          "IELTS Academic 6.0 or TOEFL iBT 79 (or PBT 550); those below the level take an intensive English programme at the university; language of teaching English for international students (check with the programme)")
UTM_HOW = ("التقديم أونلاين على نظام UTM-SMARt من موقع القبول؛ الطلبات بعد تاريخ الإغلاق تُحوَّل للدفعة التالية؛ الرسوم لا تشمل السكن والتأشيرة والكفالة الشخصية",
           "Apply online through UTM-SMARt on the admission site; applications after the closing date are moved to the next intake; fees exclude housing, visa and the personal bond")
UTM_FEES = "https://admission.utm.my/fees-pg-inter/"
UTM_SRC = "https://sps.utm.my/general-entry-requirements/"
def utm_fee(rm):
    eur = round(rm / 4.4983 / 10) * 10
    return (f"حوالي {eur:,} يورو للبرنامج كاملاً ({rm:,} رينغيت ماليزي للطلاب الدوليين للدفعات الجديدة؛ صفحة الرسوم لا تذكر السنة الدراسية، للتحقق؛ التحويل بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
            f"About €{eur:,} for the whole programme (RM{rm:,} for new international students; the fee page names no academic year, to verify; converted at the ECB rate of 17 November 2026)")
for field, name, deg, rm, other in [
    ("cs", "Master of Software Engineering", ("ماجستير هندسة البرمجيات", "Master of Software Engineering"), 26204, ("كلية الذكاء الاصطناعي", "Faculty of Artificial Intelligence")),
    ("cs", "Master of Science (Information Assurance)", ("ماجستير العلوم في أمن المعلومات", "MSc Information Assurance"), 26204, ("أمن المعلومات، كلية الذكاء الاصطناعي", "Information assurance, Faculty of Artificial Intelligence")),
    ("ds", "Master of Science (Business Intelligence and Analytics)", ("ماجستير العلوم في ذكاء الأعمال والتحليلات", "MSc Business Intelligence and Analytics"), 26204, ("ذكاء الأعمال وتحليل البيانات، كلية الذكاء الاصطناعي", "Business intelligence and analytics, Faculty of Artificial Intelligence")),
    ("eng", "Master of Science (Systems Engineering)", ("ماجستير العلوم في هندسة النظم", "MSc Systems Engineering"), 31554, ("هندسة النظم، كلية الذكاء الاصطناعي", "Systems engineering, Faculty of Artificial Intelligence")),
    ("eng", "Master of Science (Engineering Design)", ("ماجستير العلوم في التصميم الهندسي", "MSc Engineering Design"), 33554, ("التصميم الهندسي، كلية الذكاء الاصطناعي", "Engineering design, Faculty of Artificial Intelligence")),
    ("bus", "Master of Science (Engineering Business Management)", ("ماجستير العلوم في إدارة الأعمال الهندسية", "MSc Engineering Business Management"), 33504, ("إدارة الأعمال الهندسية، كلية الذكاء الاصطناعي", "Engineering business management, Faculty of Artificial Intelligence")),
    ("env", "Master of Sustainable System", ("ماجستير النظم المستدامة", "Master of Sustainable System"), 28500, ("الاستدامة، المعهد الماليزي الياباني للتكنولوجيا (MJIIT)", "Sustainability, Malaysia-Japan International Institute of Technology (MJIIT)")),
    ("env", "Master of Disaster Risk Management", ("ماجستير إدارة مخاطر الكوارث", "Master of Disaster Risk Management"), 36004, ("مخاطر الكوارث، المعهد الماليزي الياباني للتكنولوجيا (MJIIT)", "Disaster risk, MJIIT")),
    ("bus", "Master in Technology and Innovation Management", ("ماجستير إدارة التكنولوجيا والابتكار", "Master in Technology and Innovation Management"), 28500, ("إدارة التكنولوجيا والابتكار، MJIIT", "Technology and innovation management, MJIIT")),
    ("urb", "Master of Science (Sustainable Urban Design)", ("ماجستير العلوم في التصميم الحضري المستدام", "MSc Sustainable Urban Design"), 26769, ("التصميم الحضري المستدام، MJIIT", "Sustainable urban design, MJIIT")),
]:
    add(MA, field, name, UTM, "Kuala Lumpur", deg, UTM_DUR, utm_fee(rm), UTM_ADM, UTM_DL, UTM_EN, other, UTM_HOW, NP, NP, UTM_FEES, "https://admission.utm.my/")

write("ماليزيا", "Malaysia", "malaysia", MA, level="master")
append_master("ماليزيا", "malaysia")
print("malaysia:", len(MA), "master's")
