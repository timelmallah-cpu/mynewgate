# Portugal: English-taught programmes at public universities. Students with the international student statute
# pay an international fee set by each institution (Decreto-Lei 36/2014); bachelor's degrees in English are rare.
# Sources: official university pages, checked 2026-11-16. Master's rows are also copied into all_programmes.csv.
import sys, os, csv
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, ROOT

MA, BA = [], []


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, living, house, src, apply, apply_note=("صفحة التقديم الرسمية", "Official application page")):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                 living=living, house=house, src=src, req=src, req_note=("صفحة البرنامج الرسمية", "Official programme page"), apply=apply,
                 apply_note=apply_note))


MSC = ("ماجستير (Mestrado)", "Master's degree (Mestrado)")
BSC = ("بكالوريوس (Licenciatura)", "Bachelor's degree (Licenciatura)")

# ---------- Master's ----------
FEP_FEE = ("5,000 يورو سنوياً للطالب الدولي (2026/2027)", "€5,000 per year for international students (2026/2027)")
FEP_DL = ("لسنة 2026/2027 الدورة الأولى كانت من 7 يناير إلى 11 فبراير 2026 (مواعيد 2027 للتحقق)", "For 2026/2027 the first call ran 7 January - 11 February 2026 (2027 dates to verify)")
FEP_SRC = "https://sigarra.up.pt/fep/en/NOTICIAS_GERAL.VER_NOTICIA?p_nr=52531"
add(MA, "bus", "Master in Finance", "University of Porto, School of Economics and Management (FEP)", "Porto", MSC,
    ("سنتان (للتحقق)", "2 years (to verify)"), FEP_FEE, NP, FEP_DL, NP,
    ("بالإنجليزية بالكامل، والمحتوى معترف بيه من معهد CFA (حسب وصف البرنامج، للتحقق)", "Fully taught in English, with content recognised by the CFA Institute (per the programme description, to verify)"),
    ("التقديم أونلاين على بوابة sigarra بعد قراءة إعلان القبول", "Apply online on the sigarra portal after reading the call notice"), NP, NP, FEP_SRC, FEP_SRC)
add(MA, "econ", "Master in Economics (English track)", "University of Porto, School of Economics and Management (FEP)", "Porto", MSC,
    ("4 فصول دراسية (سنتان، للتحقق)", "4 semesters (2 years, to verify)"), FEP_FEE, NP, FEP_DL, NP,
    ("فيه مسار بالإنجليزية جنب المسار البرتغالي (للتحقق من صفحة البرامج الإنجليزية)", "Has an English track besides the Portuguese one (check the English-taught programmes page)"),
    ("التقديم أونلاين على بوابة sigarra بعد قراءة إعلان القبول", "Apply online on the sigarra portal after reading the call notice"), NP, NP, FEP_SRC, FEP_SRC)
add(MA, "ds", "Master's in Data Science and Advanced Analytics (Data Science specialization)", "NOVA IMS, Universidade NOVA de Lisboa", "Lisbon", MSC,
    ("4 فصول دراسية (سنتان، 120 ساعة معتمدة)", "4 semesters (2 years, 120 credits)"),
    ("8,000 يورو للبرنامج كاملاً لغير الأوروبيين (5,300 السنة الأولى و2,700 التانية)", "€8,000 for the full programme for non-EU applicants (€5,300 in year 1 and €2,700 in year 2)"),
    ("رسوم التقديم 51 يورو", "Application fee €51"),
    ("التقديم لسنة 2027/2028 بيفتح في يناير 2027", "Applications for 2027/2028 open in January 2027"),
    ("إجادة الإنجليزية كتابة وكلام", "Proficiency in written and spoken English"),
    ("كل المحاضرات بالإنجليزية", "All classes are taught in English"),
    ("التقديم أونلاين على بوابة NOVA IMS ودفع رسوم التقديم", "Apply online on the NOVA IMS portal and pay the application fee"), NP, NP,
    "https://www.novaims.unl.pt/en/education/programs/postgraduate-programs-and-master-degree-programs/master-degree-program-in-data-science-and-advanced-analytics-with-a-specialization-in-data-science/",
    "https://www.novaims.unl.pt/en/education/programs/postgraduate-programs-and-master-degree-programs/master-degree-program-in-data-science-and-advanced-analytics-with-a-specialization-in-data-science/")
add(MA, "bus", "Master's in Management", "Nova School of Business and Economics (Nova SBE)", "Lisbon", MSC,
    ("3 فصول دراسية (سنة ونص)", "3 semesters (1.5 years)"),
    ("13,000 يورو للبرنامج كاملاً لغير الأوروبيين (2026/2027)، زائد تبرع اختياري 249 يورو", "€13,000 for the full programme for non-EU students (2026/2027), plus an optional €249 donation"),
    ("رسوم قيد 2,350 يورو غير مستردة وبتتخصم من الرسوم", "A non-refundable €2,350 enrolment fee, deducted from the tuition"),
    NP, NP, NP, ("التقديم أونلاين على موقع Nova SBE", "Apply online on the Nova SBE website"), NP, NP,
    "https://www.novasbe.unl.pt/en/programs/masters/management/fees", "https://www.novasbe.unl.pt/en/programs/masters/management/fees")
IST_FEE = ("7,000 يورو سنوياً حسب كتيب الطلاب الدوليين 2026/2027 (للتحقق إنها نفس رسوم الماجستير)", "€7,000 a year per the 2026/2027 international students brochure (check that it applies to the master's)")
IST_DL = ("لسنة 2026/2027: الدورة الأولى يناير - فبراير 2026، والتانية أبريل - مايو 2026 (مواعيد 2027 للتحقق)", "For 2026/2027: first call January - February 2026, second call April - May 2026 (2027 dates to verify)")
IST_ADM = ("حجز المكان 2,000 يورو (أو 5 دفعات شهرية)", "Place reservation €2,000 (or 5 monthly payments)")
IST_SRC = "https://aai.tecnico.ulisboa.pt/files/sites/52/brochura_estudantes_internacionais_26_27_set_25.pdf"
IST_APPLY = "https://tecnico.ulisboa.pt/en/education/study-at-tecnico/applications/international-students/"
add(MA, "cs", "MSc Information Systems and Computer Engineering", "Instituto Superior Técnico (Técnico Lisboa), University of Lisbon", "Lisbon", MSC,
    ("سنتان (للتحقق)", "2 years (to verify)"), IST_FEE, IST_ADM, IST_DL, NP,
    ("لغة التدريس للتحقق مع مكتب القبول الدولي (international.admissions@tecnico.ulisboa.pt)", "Check the teaching language with the International Admissions Office (international.admissions@tecnico.ulisboa.pt)"),
    ("التقديم أونلاين على منصة Técnico للماجستير", "Apply online on Técnico's application platform"), NP, NP, IST_SRC, IST_APPLY)
add(MA, "eng", "MSc Electrical and Computer Engineering", "Instituto Superior Técnico (Técnico Lisboa), University of Lisbon", "Lisbon", MSC,
    ("سنتان (للتحقق)", "2 years (to verify)"), IST_FEE, IST_ADM, IST_DL, NP,
    ("لغة التدريس للتحقق مع مكتب القبول الدولي (international.admissions@tecnico.ulisboa.pt)", "Check the teaching language with the International Admissions Office (international.admissions@tecnico.ulisboa.pt)"),
    ("التقديم أونلاين على منصة Técnico للماجستير", "Apply online on Técnico's application platform"), NP, NP, IST_SRC, IST_APPLY)

# ---------- Bachelor's ----------
SBE_FEE = ("7,500 يورو سنوياً لغير الأوروبيين", "€7,500 per year for non-EU students")
SBE_ADM = ("رسوم تقديم 70 يورو، ورسوم قيد 750 يورو غير مستردة بتتخصم من الرسوم", "€70 application fee and a non-refundable €750 enrolment fee deducted from the tuition")
SBE_OTHER = ("السنة الأولى مشتركة بين الاقتصاد والإدارة؛ اللي مش مستوفي الشروط بيقدّم عن طريق برنامج SUPERNOVA التأسيسي", "The first year is common to Economics and Management; applicants who don't meet the criteria apply via the SUPERNOVA Foundation Programme")
SBE_HOW = ("التقديم مباشرة لـ Nova SBE كطالب دولي، والرد خلال 8 أسابيع كحد أقصى، وممكن مقابلة", "Apply directly to Nova SBE as an international student; a decision within eight weeks at most, and an interview may be required")
SBE_SRC = "https://www.novasbe.unl.pt/en/programs/apply/bachelors/international-students"
add(BA, "bus", "Bachelor in Management", "Nova School of Business and Economics (Nova SBE)", "Lisbon", BSC,
    ("3 سنوات (180 ساعة معتمدة)", "3 years (180 credits)"), SBE_FEE, SBE_ADM, NP, NP, SBE_OTHER, SBE_HOW, NP, NP, SBE_SRC, SBE_SRC)
add(BA, "econ", "Bachelor in Economics", "Nova School of Business and Economics (Nova SBE)", "Lisbon", BSC,
    ("3 سنوات (180 ساعة معتمدة)", "3 years (180 credits)"), SBE_FEE, SBE_ADM, NP, NP, SBE_OTHER, SBE_HOW, NP, NP, SBE_SRC, SBE_SRC)

write("البرتغال", "Portugal", "portugal", BA, level="bachelor")
if os.environ.get("BA_ONLY"):
    sys.exit()
write("البرتغال", "Portugal", "portugal", MA, level="master")

ap = os.path.join(ROOT, "data", "programmes", "all_programmes.csv")
rows = list(csv.reader(open(ap, encoding="utf-8-sig")))
hdr, body = rows[0], [r for r in rows[1:] if r and r[1] != "البرتغال"]
nxt = max(int(r[0]) for r in body) + 1
pt = list(csv.reader(open(os.path.join(ROOT, "data", "programmes", "portugal.csv"), encoding="utf-8-sig")))[1:]
for i, r in enumerate(pt):
    body.append([str(nxt + i)] + r[1:])
with open(ap, "w", newline="", encoding="utf-8-sig") as f:
    csv.writer(f).writerows([hdr] + body)
print("all_programmes.csv:", len(body), "rows; Portugal ids", nxt, "-", nxt + len(pt) - 1)
