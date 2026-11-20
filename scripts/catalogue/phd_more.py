# Doctoral positions (phase 5, 2026-11-20): salaried PhDs with no tuition in the Netherlands, Switzerland and Denmark.
# Writes data/programmes_phd/<country>.csv for countries that had no doctoral rows (common.write replaces the file).
# Sources: TU Delft Graduate School admission page and 2026 vacancies (CAO scale P €3,204-4,051 gross/month after the
# 1 July 2026 increase), TU/e "How to become a PhD candidate" and 2026 vacancies, EPFL doctoral salary page (2026 scale)
# and the doctoral programmes' how-to-apply pages (EDIC, EDEE, EDMA), DTU "Salary paid to PhD students" and DTU vacancies.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import common
from common import write, NP
from helpers import add

common.REVIEWED = "2026-11-20"
PHD = ("دكتوراه", "Doctoral degree")
POS = ("إعلانات الدكتوراه", "PhD vacancies")

# ---------- Netherlands ----------
NL = []
NL_FREE = ("لا توجد رسوم دراسية لطالب الدكتوراه الموظف؛ الدكتوراه في هولندا وظيفة براتب", "No tuition for an employed PhD candidate; a PhD in the Netherlands is a salaried job")
NL_DUR = ("4 سنوات بعقد عمل بدوام كامل (العقد الأول عادةً لفترة أقصر ثم يُمدد بعد التقييم)", "4 years on a full-time employment contract (the first contract is usually shorter and extended after an evaluation)")
NL_DL = ("كل وظيفة دكتوراه لها إعلان وموعد خاص على صفحة الوظائف بالجامعة؛ لا يوجد تقديم مركزي", "Each PhD position has its own advert and deadline on the university's vacancies page; there is no central application")
NL_PAY = ("الراتب حسب الاتفاقية الجماعية للجامعات الهولندية (سلم P): من 3,204 إلى 4,051 يورو إجمالي شهرياً من السنة الأولى إلى الرابعة (منذ 1 يوليو 2026)، مع بدل إجازة 8% ومكافأة نهاية سنة 8.3%",
          "Salary under the Collective Labour Agreement for Dutch Universities (scale P): €3,204 to €4,051 gross a month from the first to the fourth year (since 1 July 2026), plus an 8% holiday allowance and an 8.3% year-end bonus")
add(NL, "eng", "PhD positions at TU Delft (TU Delft Graduate School)", "Delft University of Technology (TU Delft)", "Delft", PHD, NL_DUR, NL_FREE, NP, NL_DL,
    ("مطلوب IELTS أو ما يعادله حسب شروط الدكتوراه في الجامعة (المستوى في صفحة القبول)", "IELTS or an equivalent per the university's PhD requirements (level on the admission page)"),
    (NL_PAY[0] + "؛ طالب الدكتوراه الموظف يُسجَّل في كلية الدراسات العليا بالجامعة. أما الدكتوراه بتمويل خارجي (بدون عقد عمل) فلها رسوم دراسية 11,000 يورو مرة واحدة ورسوم مختبر حسب الكلية",
     NL_PAY[1] + "; employed PhD candidates are enrolled in the TU Delft Graduate School. A PhD with external funding (no employment contract) has a one-off €11,000 tuition fee plus a bench fee set by the faculty"),
    ("قدّم على إعلان وظيفة دكتوراه محددة على موقع وظائف الجامعة، أو أرسل طلباً مفتوحاً لسكرتارية القسم البحثي", "Apply to a specific PhD vacancy on the university's jobs site, or send an open application to the research department's secretary"),
    NP, NP, "https://tudelft.nl/onderwijs/opleidingen/phd/admission", "https://careers.tudelft.nl/")
add(NL, "eng", "PhD positions at TU/e (employed PhD candidates)", "Eindhoven University of Technology (TU/e)", "Eindhoven", PHD, NL_DUR, NL_FREE, NP, NL_DL,
    ("مستوى C1 في الإنجليزية، وأي شروط إضافية في إعلان الوظيفة", "English at C1 level, plus any extra requirements in the vacancy"),
    (NL_PAY[0] + "؛ أغلب طلاب الدكتوراه موظفون في الجامعة ويقضون 10% على الأقل من وقتهم في التدريس",
     NL_PAY[1] + "; most PhD candidates are employed by the university and spend at least 10% of their time teaching"),
    ("قدّم على إعلان وظيفة دكتوراه محددة على موقع الجامعة؛ الطلبات بالبريد الإلكتروني أو البريد لا تُقبل", "Apply to a specific announced PhD position on the university's site; applications by email or post are not processed"),
    NP, NP, "https://www.tue.nl/en/education/graduate-school/phd-at-tue/how-to-become-a-phd-candidate", "https://www.tue.nl/en/working-at-tue/vacancy-overview")
write("هولندا", "Netherlands", "netherlands", NL, level="doctorate")

# ---------- Switzerland (EPFL) ----------
CH = []
CH_FREE = ("لا توجد رسوم دراسية تُذكر؛ أغلب طلاب الدكتوراه في EPFL موظفون كمساعدي دكتوراه براتب", "No tuition to speak of; most EPFL doctoral students are employed as doctoral assistants with a salary")
CH_DUR = ("المدة غير منشورة في المصدر (سلم رواتب مساعدي الدكتوراه الرسمي حتى السنة السادسة)", "Length not published in the source (the official doctoral assistant salary scale runs to the sixth year)")
CH_PAY = ("راتب مساعد الدكتوراه في 2026: 55,225 فرنك سويسري إجمالي في السنة الأولى (شامل الراتب الثالث عشر) ويزيد 1,000 فرنك سنوياً حتى 58,225 فرنك، حسب صفحة الموارد البشرية في EPFL",
          "Doctoral assistant salary in 2026: CHF 55,225 gross in the first year (incl. the 13th month), rising CHF 1,000 a year to CHF 58,225, per EPFL human resources")
CH_EN = ("الدراسة والبحث بالإنجليزية؛ شروط اللغة والاختبارات في صفحة كل برنامج", "Study and research in English; language and test requirements on each programme's page")
CH_HOW = ("قدّم أونلاين على استمارة مدرسة الدكتوراه في EPFL مع 3 خطابات توصية وكشوف الدرجات قبل موعد البرنامج؛ القبول يحتاج موافقة لجنة البرنامج ومشرفاً يقبلك",
          "Apply online through the EPFL Doctoral School form with three reference letters and transcripts before the programme's deadline; admission needs the programme committee and a supervisor who accepts you")
add(CH, "cs", "Doctoral Program in Computer and Communication Sciences (EDIC)", "EPFL", "Lausanne", PHD, CH_DUR, CH_FREE, NP,
    ("موعدان: 1 ديسمبر 2026 و15 أبريل 2027 للبدء في سبتمبر 2027", "Two deadlines: 1 December 2026 and 15 April 2027, for a September 2027 start"), CH_EN,
    (CH_PAY[0] + "؛ أفضل المقبولين يحصلون على منحة سنة أولى من كلية IC", CH_PAY[1] + "; the best admitted applicants get a one-year IC School fellowship"),
    CH_HOW, NP, NP, "https://www.epfl.ch/education/phd/edic-computer-and-communication-sciences/", "https://epfl.ch/education/admission/phd-admission-criteria-and-application/")
add(CH, "eng", "Doctoral Program in Electrical Engineering (EDEE)", "EPFL", "Lausanne", PHD, CH_DUR, CH_FREE, NP,
    ("موعدان في السنة: 1 ديسمبر و15 أبريل", "Two deadlines a year: 1 December and 15 April"), CH_EN, CH_PAY, CH_HOW, NP, NP,
    "https://www.epfl.ch/education/phd/edee-electrical-engineering/edee-how-to-apply/", "https://epfl.ch/education/admission/phd-admission-criteria-and-application/")
add(CH, "sci", "Doctoral Program in Mathematics (EDMA)", "EPFL", "Lausanne", PHD, CH_DUR, CH_FREE, NP,
    ("ثلاثة مواعيد في السنة: 1 ديسمبر و15 أبريل و15 سبتمبر", "Three deadlines a year: 1 December, 15 April and 15 September"), CH_EN,
    (CH_PAY[0] + "؛ قد تُطلب مقررات تمهيدية", CH_PAY[1] + "; prerequisites and additional courses may be required"), CH_HOW, NP, NP,
    "https://www.epfl.ch/education/phd/edma-mathematics/fr/edma-comment-candidater/", "https://epfl.ch/education/admission/phd-admission-criteria-and-application/")
write("سويسرا", "Switzerland", "switzerland", CH, level="doctorate")

# ---------- Denmark (DTU) ----------
DK = []
add(DK, "eng", "PhD scholarships at DTU (employed PhD students)", "Technical University of Denmark (DTU)", "Kongens Lyngby", PHD,
    ("عادةً 3 سنوات حسب إعلانات الوظائف", "Usually 3 years per the vacancies"),
    ("لا توجد رسوم دراسية؛ طالب الدكتوراه في DTU موظف براتب", "No tuition; a DTU PhD student is an employee with a salary"), NP,
    ("كل منحة دكتوراه لها إعلان وموعد خاص على صفحة وظائف الجامعة", "Each PhD scholarship has its own advert and deadline on the university's jobs page"),
    ("إجادة الإنجليزية؛ التفاصيل في إعلان كل وظيفة وقواعد الدكتوراه في الجامعة", "Proficiency in English; details in each advert and the university's PhD rules"),
    ("الراتب حسب الاتفاقية الجماعية مع اتحاد النقابات المهنية الدنماركية وحسب الأقدمية؛ صفحة الجامعة تذكر حوالي 34,000 كرونة دنماركية شهرياً شاملة المعاش لمن ليس له خبرة (مستوى أبريل 2024، للتحقق)",
     "Salary under the collective agreement with the Danish Confederation of Professional Associations, by seniority; the university page gives about DKK 34,000 a month including pension with no seniority (April 2024 level, to verify)"),
    ("قدّم أونلاين على إعلان الوظيفة بملف PDF واحد فيه كل المستندات قبل الموعد", "Apply online to the advert with one PDF containing all documents before the deadline"),
    NP, NP, "https://dtu.dk/english/education/phd/intro/salary", "https://www.dtu.dk/english/about/job-and-career/vacant-positions")
write("الدنمارك", "Denmark", "denmark", DK, level="doctorate")
