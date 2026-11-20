# Italy, second batch: English-taught master's at the University of Bologna and the University of Padova, open to
# non-EU applicants residing abroad. APPEND-ONLY: the rows written by italy.py and arch_law_ma.py are left untouched.
# Sources: official programme pages (unibo.it, unipd.it, apply.unipd.it) and fee pages, checked 2026-11-19.
# Run from the repo root:  python3 scripts/catalogue/italy_more.py
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import NP
from helpers import add, append_extra

ROWS = []
LM = ("ماجستير (Laurea Magistrale)", "Master's degree (Laurea Magistrale)")
Y2 = ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)")
UNIV = ("ما قبل التسجيل (pre-enrolment) لغير الأوروبيين على بوابة Universitaly، ثم التقديم على موقع الجامعة؛ وآخر موعد لطلب تأشيرة الدراسة لعام 2026/2027 كان 30 نوفمبر 2026",
        "Non-EU pre-enrolment on the Universitaly portal, then the university's own application; the study-visa deadline for 2026/2027 was 30 November 2026")

# ---------- University of Bologna ----------
BO = "University of Bologna"
BO_FEE = ("1,000 + 157.04 يورو سنوياً: رسوم ثابتة مخفضة لمواطني الدول خارج منظمة OECD إذا كان دخل الأسرة وأملاكها خارج إيطاليا فقط (2026/2027)؛ وغير ذلك حسب دخل الأسرة",
          "€1,000 + €157.04 per year: reduced fixed fee for nationals of non-OECD countries whose family income and assets are only outside Italy (2026/2027); otherwise based on family income")
BO_DL = ("مواعيد 2027/2028 تُنشر في إعلان القبول (Call for admissions) الخاص بالبرنامج على صفحته، وفي بعض البرامج جولة مبكرة لغير الأوروبيين المقيمين بالخارج (للتحقق)",
         "2027/2028 dates are published in the programme's own Call for admissions on its page; some programmes have an early round for non-EU applicants residing abroad (to verify)")
BO_EN = ("مستوى B2 على الأقل في الإنجليزية؛ الشهادات المقبولة والحد الأدنى في إعلان القبول الخاص بالبرنامج", "English at least at B2; accepted certificates and minimum scores are in the programme's Call for admissions")
BO_APPLY = "https://www.unibo.it/en/study/enrolment-fees-and-other-procedures/degree-programmes/enrolling-in-a-second-cycle-degree-programme-foreign-qualification"
BO_OPEN = ("قبول مفتوح بلا حد للأعداد، بشرط استيفاء متطلبات البكالوريوس المذكورة في إعلان القبول. البرنامج كله بالإنجليزية",
           "Open access with no cap on numbers, if you meet the bachelor's requirements in the Call for admissions. Taught entirely in English")

def bo_restricted(n, extra_ar="", extra_en=""):
    return (f"قبول محدود: {n} مقعداً في 2026/2027، والاختيار حسب إعلان القبول. البرنامج كله بالإنجليزية{extra_ar}",
            f"Restricted access: {n} places in 2026/2027, selection as set out in the Call for admissions. Taught entirely in English{extra_en}")

def bo(field, name, city, code, other):
    url = f"https://www.unibo.it/en/study/second-cycle-degree/programme/2026/{code}"
    add(ROWS, field, name, BO, city, LM, Y2, BO_FEE, NP, BO_DL, BO_EN, other, UNIV, NP, NP, url, BO_APPLY)

bo("eng", "Automation Engineering", "Bologna", 6711, BO_OPEN)
bo("eng", "Biomedical Engineering", "Cesena", 6705, BO_OPEN)
bo("eng", "Mechanical Engineering for Sustainability", "Forlì", 6720, BO_OPEN)
bo("econ", "Applied Economics and Markets", "Bologna", 6756, BO_OPEN)
bo("econ", "Economics and Econometrics", "Bologna", 6757, BO_OPEN)
bo("econ", "Economics and Public Policy", "Bologna", 6758, BO_OPEN)
bo("tour", "Tourism Economics and Management", "Rimini", 6761, BO_OPEN)
bo("bus", "International Management", "Bologna", 6803,
   bo_restricted(70, "، منها 30 مقعداً لغير الأوروبيين المقيمين بالخارج", ", of which 30 are reserved for non-EU citizens residing abroad"))
bo("bus", "Service Management", "Rimini", 6804, bo_restricted(50))
bo("bus", "Business Administration and Sustainability", "Forlì", 6797,
   bo_restricted(75, "، مع إمكانية شهادة مزدوجة مع مدرستي أعمال فرنسيتين", ", with a double-degree option with two French business schools"))
bo("bus", "Digital Transformation Management", "Cesena", 6823, bo_restricted(70))
bo("law", "Legal Studies", "Bologna", 6682, bo_restricted(150))
bo("law", "Law, Economics and Governance", "Bologna", 6829, BO_OPEN)

# ---------- University of Padova ----------
PD = "University of Padova"
PD_FEE_B = ("2,990 يورو سنوياً لغير الأوروبيين الذين تقيم أسرتهم خارج إيطاليا (رسوم ثابتة لبرامج المجموعة B العلمية، 2026/2027)؛ وطلاب الدول الأفقر في القائمة الوزارية يدفعون الثلث (996.66 يورو)",
            "€2,990 a year for non-EU students whose family lives outside Italy (fixed fee for Group B science programmes, 2026/2027); students from the poorest countries on the ministerial list pay one third (€996.66)")
PD_FEE_A = ("2,790 يورو سنوياً لغير الأوروبيين الذين تقيم أسرتهم خارج إيطاليا (رسوم ثابتة لبرامج المجموعة A، ومنها كل برامج مدرسة الاقتصاد والعلوم السياسية، 2026/2027)؛ وطلاب الدول الأفقر في القائمة الوزارية يدفعون الثلث (930 يورو)",
            "€2,790 a year for non-EU students whose family lives outside Italy (fixed fee for Group A programmes, which include all programmes of the School of Economics and Political Science, 2026/2027); students from the poorest countries on the ministerial list pay one third (€930)")
PD_ADM = ("رسوم تقديم 60 يورو غير مستردة", "Application fee €60, non-refundable")
PD_DL = ("لدفعة 2027/2028: البرامج ذات الأماكن غير المحدودة: الجولة الأولى 15 سبتمبر - 15 نوفمبر 2026 (انتهت)، والجولة الثانية 1 ديسمبر 2026 - 1 مارس 2027. البرامج ذات الأماكن المحدودة: لغير الأوروبيين المقيمين بالخارج 7 يناير - 7 مارس 2027. نوع القبول في صفحة البرنامج",
         "2027/2028 intake: programmes with unlimited places: Call One 15 September - 15 November 2026 (closed), Call Two 1 December 2026 - 1 March 2027. Programmes with limited places: non-EU applicants residing abroad 7 January - 7 March 2027. The access type is on the programme page")
PD_EN = ("مستوى B2 في الإنجليزية أو ما يعادله؛ قائمة الشهادات المقبولة والإعفاءات على بوابة apply.unipd.it", "English at B2 (CEFR) or equivalent; accepted certificates and exemptions are listed on apply.unipd.it")
PD_HOW = ("التقديم أونلاين على بوابة apply.unipd.it (سيرة ذاتية وخطاب دافع بالإنجليزية وكشف الدرجات)، ثم ما قبل التسجيل على بوابة Universitaly وطلب التأشيرة",
          "Apply online on apply.unipd.it (CV and motivation letter in English, transcript), then pre-enrol on Universitaly and apply for the visa")
PD_OTHER = ("بكالوريوس في مجال قريب مع المهارات المطلوبة في صفحة البرنامج. الجامعة تقدم منح Padua International Excellence وإعفاءات من الرسوم للبرامج الإنجليزية",
            "A bachelor's in a related field with the skills listed on the programme page. The university offers Padua International Excellence scholarships and fee waivers for English-taught programmes")
PD_APPLY = "https://www.unipd.it/en/studiare-inglese-come-fare-domanda"

def pd(field, name, city, url, fee=PD_FEE_B):
    add(ROWS, field, name, PD, city, LM, Y2, fee, PD_ADM, PD_DL, PD_EN, PD_OTHER, PD_HOW, NP, NP, url, PD_APPLY)

pd("cs", "Computer Science", "Padua", "https://apply.unipd.it/courses/course/63")
pd("ds", "Data Science", "Padua", "https://apply.unipd.it/institutions")
pd("cs", "Computer Engineering", "Padua", "https://www.unipd.it/en/computer-engineering")
pd("cs", "ICT for Internet and Multimedia", "Padua", "https://www.unipd.it/en/ict-internet-multimedia")
pd("eng", "Electrical Engineering", "Padua", "https://www.unipd.it/en/electrical-engineering")
pd("eng", "Electronic Engineering", "Padua", "https://www.unipd.it/en/electronic-engineering")
pd("eng", "Energy Engineering", "Padua", "https://www.unipd.it/en/energy-engineering")
pd("eng", "Environmental Engineering", "Padua", "https://www.unipd.it/en/environmental-engineering")
pd("eng", "Aerospace Engineering", "Padua", "https://www.unipd.it/en/aerospace-engineering")
pd("eng", "Chemical and Process Engineering", "Padua", "https://www.unipd.it/en/chemical-process-engineering")
pd("eng", "Control Systems Engineering", "Padua", "https://www.unipd.it/en/control-systems-engineering")
pd("econ", "Applied Economics", "Padua", "https://www.unipd.it/en/applied-economics", PD_FEE_A)
pd("bus", "Accounting, Finance and Business Consulting", "Padua", "https://www.unipd.it/en/business-consulting", PD_FEE_A)
pd("bus", "Management for Sustainable Firms", "Padua", "https://www.unipd.it/node/98808", PD_FEE_A)

append_extra("إيطاليا", "italy", ROWS, "2026-11-19")
