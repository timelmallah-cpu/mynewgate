# Latvia: English-taught bachelor's (incl. Medicine) and master's at public universities (non-EU fees, 2026/2027).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, MSC2, BA3, BA4, MED6

SEM4 = ("4 فصول دراسية (120 ساعة معتمدة)", "4 semesters (120 credits)")
BA, MA = [], []


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                 living=NP, house=NP, src=src, req=src, req_note=("صفحة البرنامج الرسمية", "Official programme page"), apply=apply,
                 apply_note=("بوابة التقديم الرسمية", "Official application portal")))


Y = lambda v: (f"{v} يورو سنوياً (2026/2027)", f"€{v} per year (2026/2027)")

# ---------- Riga Technical University (RTU) ----------
RTU = "Riga Technical University"
RTU_ADM = ("رسوم طلب 150 يورو + تأمين (deposit) 250 يورو", "€150 application fee + €250 deposit")
RTU_DL = ("1 يوليو 2027 لبدء سبتمبر 2027 حسب دليل غير رسمي ينقل عن بوابة الجامعة (للتحقق)", "1 July 2027 for a September 2027 start, per an unofficial guide quoting the university portal (to verify)")
RTU_HOW = ("بوابة القبول apply.rtu.lv", "apply.rtu.lv admissions portal")
RTU_OTHER = ("الرسوم نفسها للأوروبيين وغير الأوروبيين", "Same fee for EU and non-EU students")
BSC = ("بكالوريوس العلوم الهندسية (BSc)", "Bachelor of Engineering Science (BSc)")
add(BA, "cs", "Computer Systems (BSc)", RTU, "Riga", BSC, BA3, Y("4,030"), RTU_ADM, RTU_DL, NP, RTU_OTHER, RTU_HOW, "https://apply.rtu.lv/courses/course/4", "https://apply.rtu.lv/courses/course/4")
add(BA, "eng", "Civil Engineering (BSc)", RTU, "Riga", ("بكالوريوس في البناء والهندسة المدنية (BSc)", "Bachelor in Building and Civil Engineering (BSc)"), BA3, Y("4,840"), RTU_ADM, RTU_DL, NP, RTU_OTHER, RTU_HOW, "https://apply.rtu.lv/courses/course/12", "https://apply.rtu.lv/courses/course/12")
add(BA, "eng", "Telecommunication Technologies and Data Transmission Engineering (BSc)", RTU, "Riga", BSC, NP, ("3,550 يورو سنوياً", "€3,550 per year"), RTU_ADM, RTU_DL, NP, RTU_OTHER, RTU_HOW, "https://apply.rtu.lv/courses/course/7", "https://apply.rtu.lv/courses/course/7")
add(MA, "cs", "Business Informatics (MSc)", RTU, "Riga", ("ماجستير العلوم (MSc)", "Master of Science (MSc)"), MSC2,
    ("5,590 يورو سنوياً (رسوم 2025/2026 المنشورة؛ رسوم 2026/2027 للتحقق)", "€5,590 per year (published 2025/2026 fee; 2026/2027 fee to verify)"), RTU_ADM, RTU_DL, NP, RTU_OTHER, RTU_HOW, "https://bi.rtu.lv/en/?p=323", "https://apply.rtu.lv/")

# ---------- University of Latvia (LU) ----------
LU = "University of Latvia"
LU_ADM = ("رسوم طلب 170 يورو غير مستردة؛ وطلاب الدول الثالثة يدفعون تأميناً 500 يورو مع رسوم السنة الأولى", "€170 non-refundable application fee; third-country students pay a €500 deposit with the first-year fee")
LU_DL = ("غير منشور في المصدر؛ اسأل قسم الطلاب الدوليين studies@lu.lv عن موعد دفعة الخريف", "Not published in the source; ask the International Students Unit (studies@lu.lv) for the autumn deadline")
LU_HOW = ("بوابة القبول apply.lu.lv (Foreign applicants)", "apply.lu.lv portal (Foreign applicants)")
LU_TEST = ("لغير الأوروبيين الذين درسوا خارج الاتحاد الأوروبي: نتيجة SAT لا تقل عن 1200 أو GMAT 595 أو GRE 320 خلال آخر 5 سنوات، ومقابلة أونلاين", "For non-EU applicants educated outside the EU: SAT of at least 1200, GMAT 595 or GRE 320 from the past five years, plus an online interview")
add(BA, "cs", "Computer Science (EN)", LU, "Riga", ("بكالوريوس العلوم الطبيعية في علوم الحاسب", "Bachelor of Natural Sciences in Computer Science"), BA4, ("3,340 يورو سنوياً", "€3,340 per year"), LU_ADM, LU_DL, NP, NP, LU_HOW,
    "https://www.lu.lv/en/studies/study-programmes-1/bachelors-study-programmes/computer-science-en/", "https://apply.lu.lv/courses/course/25")
add(BA, "cs", "Dual Award programme in Computer Science (with University of Lincoln, UK)", LU, "Riga", ("بكالوريوس مزدوج: جامعة لاتفيا + BSc (Hons) من جامعة لينكولن", "Dual degree: University of Latvia + BSc (Hons) University of Lincoln"), BA4, Y("4,800"), LU_ADM, LU_DL,
    ("PTE Academic 65 (لا يقل أي قسم عن 59) أو LanguageCert B2، أو ما يعادله", "PTE Academic 65 (no section below 59) or LanguageCert B2, or equivalent"), NP, LU_HOW,
    "https://www.lu.lv/en/studies/study-programmes-1/bachelors-study-programmes/dual-award-programme-in-computer-science", "https://apply.lu.lv/courses/course/139")
add(BA, "med", "Medicine (EN)", LU, "Riga", ("درجة طبيب (Medical Doctor)", "Medical Doctor's Degree"), ("12 فصلاً دراسياً (360 ساعة معتمدة)", "12 semesters (360 credits)"), Y("13,600"), LU_ADM,
    ("غير منشور في المصدر؛ التقديم يفتح 1 يناير (35 مقعداً بالرسوم لعام 2026/2027)", "Not published in the source; applications open on 1 January (35 fee-paying places in 2026/2027)"), ("إثبات إجادة الإنجليزية مطلوب؛ المستوى غير محدد في صفحة البرنامج", "Proof of English required; the level is not stated on the programme page"),
    ("درجات الأحياء والكيمياء 8 من 10 على الأقل، ومتوسط عام 6 من 10، وSAT لا يقل عن 1200 لمن درس خارج الاتحاد الأوروبي، ومقابلة أونلاين", "Biology and Chemistry grades of at least 8/10, overall average of 6/10, SAT of at least 1200 if educated outside the EU, and an online interview"),
    LU_HOW, "https://www.lu.lv/en/studies/study-programmes-1/bachelors-study-programmes/medicine-en", "https://apply.lu.lv/")
add(MA, "bus", "International Business (Professional Master's)", LU, "Riga", ("ماجستير مهني في إدارة الأعمال", "Professional Master's in Business Administration"), SEM4, Y("3,200"), LU_ADM, LU_DL, NP, LU_TEST, LU_HOW,
    "https://www.lu.lv/en/studies/study-programmes-1/masters-study-programmes/international-business-en/", "https://apply.lu.lv/")
add(MA, "ph", "Epidemiology and Medical Statistics", LU, "Riga", ("ماجستير العلوم الصحية في الصحة العامة", "Master of Health Sciences in Public Health"), SEM4, Y("6,300"), LU_ADM, LU_DL, NP,
    ("اختبار قبول في الصحة العامة، ومتوسط 60% على الأقل؛ " + LU_TEST[0], "Entrance exam on public health and an average of at least 60%; " + LU_TEST[1]),
    LU_HOW, "https://www.lu.lv/en/studies/study-programmes-1/masters-study-programmes/epidemiology-and-medical-statistics-en/", "https://apply.lu.lv/")

# ---------- Rīga Stradiņš University (RSU) ----------
RSU = "Rīga Stradiņš University"
RSU_ADM = ("رسوم طلب 100 يورو غير مستردة", "€100 non-refundable application fee")
RSU_HOW = ("طلب أونلاين على موقع الجامعة، ثم دفع الرسوم خلال أسبوعين من عرض القبول", "Online application on the university website, then pay within two weeks of the offer")
RSU_DL = ("من 1 سبتمبر 2026 حتى 1 مايو 2027 لمعظم غير الأوروبيين (1 أبريل لمواطني دول «التقييم الإضافي»)", "1 September 2026 to 1 May 2027 for most non-EU applicants (1 April for citizens of 'additional assessment' countries)")
RSU_FEES = "https://www.rsu.lv/en/node/4941"
RSU_WHEN = "https://www.rsu.lv/en/node/4937"
add(BA, "med", "Medicine", RSU, "Riga", ("درجة طبيب (Medical Doctor)", "Medical Doctor"), MED6, Y("13,500"),
    ("رسوم طلب 100 يورو + رسوم تسجيل إدارية 1,800 يورو غير مستردة لطلاب الطب", "€100 application fee + €1,800 non-refundable registration administration fee for Medicine"),
    ("دفعة سبتمبر 2027: من 1 مارس حتى 1 مايو 2027 لمعظم غير الأوروبيين (1 أبريل لدول «التقييم الإضافي»)؛ وفيه دفعة فبراير أيضاً", "September 2027 intake: 1 March to 1 May 2027 for most non-EU applicants (1 April for 'additional assessment' countries); there is also a February intake"),
    NP, NP, RSU_HOW, RSU_FEES, RSU_WHEN)
add(BA, "bus", "International Business and Start-up Entrepreneurship", RSU, "Riga", ("بكالوريوس", "Bachelor's degree"), BA3, Y("3,300"), RSU_ADM, RSU_DL, NP, NP, RSU_HOW, RSU_FEES, RSU_WHEN)
for f, n, fee in [("ph", "Health Management (MSc)", "4,500"), ("bus", "Digital Strategy and Artificial Intelligence Management (MSc)", "5,000"), ("ds", "Biostatistics (MSc)", "5,000")]:
    add(MA, f, n, RSU, "Riga", ("ماجستير العلوم (MSc)", "Master of Science (MSc)"), MSC2, Y(fee), RSU_ADM, RSU_DL, NP, NP, RSU_HOW, RSU_FEES, RSU_WHEN)

write("لاتفيا", "Latvia", "latvia", BA, level="bachelor")
write("لاتفيا", "Latvia", "latvia", MA, level="master")
