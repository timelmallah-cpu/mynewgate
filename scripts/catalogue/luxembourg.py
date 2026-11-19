# Luxembourg: English-taught programmes at the University of Luxembourg (the only public university).
# Same fees for EU and non-EU students (mostly EUR 400 per semester). Non-EU applicants have an earlier, shorter window.
# Sources: official uni.lu programme pages, checked 2026-11-19. The 2027-2028 dates are not published yet.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import write, NP, BA3
from helpers import add, append_master

MA, BA = [], []
MSC = ("ماجستير", "Master's degree")
Y2 = ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)")
UNI = "University of Luxembourg"
EN_B2 = ("مستوى B2 في الإنجليزية (الإطار الأوروبي)؛ الشهادات المقبولة في صفحة البرنامج، ومن درس البكالوريوس بالإنجليزية يقدّم إفادة من جامعته",
         "English at CEFR B2; accepted certificates are listed on the programme page, and applicants whose bachelor's was taught in English submit a letter from their university")
LIVING = ("حوالي 1,554 يورو شهرياً كحد أدنى لإثبات الموارد (80% من دخل الإدماج الاجتماعي REVIS لشخص واحد، 1,942.91 يورو منذ يونيو 2026؛ حسابنا التقريبي)",
          "About €1,554 a month as the minimum proof of resources (80% of the social inclusion income REVIS for a single person, €1,942.91 since June 2026; our approximate calculation)")
ADM = ("رسوم التقديم 100 يورو لكل طلب (غير مستردة وتُخصم من رسوم الفصل الأول عند التسجيل)؛ ويمكن التقديم على 3 برامج كحد أقصى",
       "Application fee €100 per application (non-refundable, deducted from the first semester's fees on enrolment); you can apply to at most three programmes")
HOW = ("التقديم أونلاين على بوابة جامعة لوكسمبورغ؛ بعد القبول يُطلب الاعتراف بشهادة البكالوريوس من وزارة التعليم العالي في لوكسمبورغ",
       "Apply online on the University of Luxembourg portal; after admission, the bachelor's degree from outside the EU must be recognised by Luxembourg's Ministry of Higher Education")
OTHER = ("الرسوم نفسها للطلاب الأوروبيين وغير الأوروبيين. اطلب صحيفة الحالة الجنائية مبكراً (قبل أوائل أبريل)، ومنحة Guillaume Dupaix الدولية متاحة لبعض البرامج",
         "The same fees apply to EU and non-EU students. Request your criminal record extract early (by early April); the Guillaume Dupaix International Scholarship is open for some programmes")
def dl(end_ar, end_en):
    return (f"تقديم 2027/2028 يفتح في 2027 ولم تُنشر مواعيده بعد. في دورة 2026 كان التقديم لغير الأوروبيين من 1 فبراير حتى {end_ar} (للتحقق من مواعيد 2027)",
            f"Applications for 2027/2028 open in 2027 and the dates are not yet published. In 2026 the non-EU window was 1 February - {end_en} (2027 dates to verify)")
DL_MAR = dl("24 مارس", "24 March")
DL_APR = dl("30 أبريل", "30 April")
F400 = ("800 يورو سنوياً (400 يورو في كل فصل دراسي)، نفس الرسوم للأوروبيين وغير الأوروبيين", "€800 a year (€400 each semester), the same for EU and non-EU students")

def prog(field, name, city, fee, dlv, extra, url):
    other = (OTHER[0] + (". " + extra[0] if extra else ""), OTHER[1] + (". " + extra[1] if extra else ""))
    add(MA, field, name, UNI, city, MSC, Y2, fee, ADM, dlv, EN_B2, other, HOW, LIVING, NP, url, "https://www.uni.lu/en/admissions/bachelor-master/")

prog("cs", "Master in Information and Computer Sciences", "Esch-sur-Alzette", F400, DL_MAR,
     ("يتطلب أساساً في علوم الحاسب بمستوى بكالوريوس علوم الحاسب", "Requires a computer science foundation at the level of a BSc in Computer Science"),
     "https://www.uni.lu/fstm-en/study-programs/master-in-information-and-computer-sciences/admissions")
prog("ds", "Master in Data Science", "Esch-sur-Alzette", F400, DL_APR,
     ("التقديم لغير الأوروبيين من فبراير حتى أبريل حسب صفحة البرنامج", "Non-EU applications run February - April per the programme page"),
     "https://www.uni.lu/fstm-en/?p=1256")
prog("cs", "Master in High Performance Computing", "Esch-sur-Alzette", F400, DL_MAR, None,
     "https://www.uni.lu/fstm-en/study-programs/master-in-high-performance-computing/")
prog("cs", "Master in Cybersecurity and Cyber Defence", "Luxembourg",
     ("800 يورو للبرنامج كاملاً (400 يورو في كل من الفصلين الأول والثالث فقط)، نفس الرسوم للأوروبيين وغير الأوروبيين", "€800 for the whole programme (€400 in semesters 1 and 3 only), the same for EU and non-EU students"), DL_APR,
     ("بكالوريوس في علوم الحاسب أو مجال قريب. موعد غير الأوروبيين نهاية أبريل حسب صفحة البرنامج", "A bachelor's in computer science or a related field. The non-EU deadline is the end of April per the programme page"),
     "https://www.uni.lu/fstm-en/?p=8184")
prog("econ", "Master in Actuarial Sciences", "Esch-sur-Alzette", F400, DL_MAR, None,
     "https://www.uni.lu/fstm-en/?p=43861")
prog("econ", "Master in Finance and Economics", "Luxembourg",
     ("800 يورو للبرنامج كاملاً (400 يورو في كل من الفصلين الأول والثاني فقط)، نفس الرسوم للأوروبيين وغير الأوروبيين", "€800 for the whole programme (€400 in semesters 1 and 2 only), the same for EU and non-EU students"), DL_MAR, None,
     "https://www.uni.lu/fdef-en/?p=1522")
prog("econ", "Master in Quantitative Economics and Finance", "Luxembourg", F400, DL_MAR, None,
     "https://www.uni.lu/fdef-en/study-programs/master-in-quantitative-economics-and-finance/admissions/")
prog("arch", "Master in Architecture", "Esch-sur-Alzette", F400, DL_MAR,
     ("يتطلب بكالوريوس عمارة 3 سنوات (180 ساعة معتمدة) أو ما يعادله، مع ملف أعمال (Portfolio) وخطاب تعريفي", "Requires a three-year bachelor's in architecture (180 credits) or equivalent, with a portfolio and a cover letter"),
     "https://www.uni.lu/fhse-en/?p=1170")

add(BA, "cs", "Bachelor in Computer Science", UNI, "Esch-sur-Alzette", ("بكالوريوس", "Bachelor's degree"), BA3, F400, ADM,
    ("تقديم 2027/2028 يفتح في 2027. في دورة 2026 كان التقديم لغير الأوروبيين من 1 فبراير حتى 24 مارس (للتحقق من مواعيد 2027)",
     "Applications for 2027/2028 open in 2027. In 2026 the non-EU window was 1 February - 24 March (2027 dates to verify)"),
    ("المستوى المطلوب في الإنجليزية مذكور في صفحة البرنامج؛ الدرجة غير منشورة كرقم", "The required English level is on the programme page; no numeric score is published"),
    ("البرنامج محدود بـ 90 مقعداً. المطلوب شهادة الثانوية مع الدرجات (وترجمة رسمية إن لم تكن بالإنجليزية أو الفرنسية أو الألمانية)",
     "The programme is limited to 90 places. You need your school-leaving certificate with grades (with an official translation unless in English, French or German)"),
    HOW, LIVING, NP, "https://www.uni.lu/fstm-en/?p=1072", "https://www.uni.lu/en/admissions/bachelor-master/")

write("لوكسمبورغ", "Luxembourg", "luxembourg", MA, level="master")
write("لوكسمبورغ", "Luxembourg", "luxembourg", BA, level="bachelor")
append_master("لوكسمبورغ", "luxembourg")
