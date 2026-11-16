# Ireland: English-taught programmes at public universities. Non-EU students pay the non-EU fee set by each university.
# Sources: official university pages, checked 2026-11-16. Master's rows are also copied into all_programmes.csv.
import sys, os, csv
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, ROOT

MA, BA = [], []


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, living, house, src, apply, apply_note=("صفحة التقديم الرسمية", "Official application page")):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                 living=living, house=house, src=src, req=src, req_note=("صفحة البرنامج الرسمية", "Official programme page"), apply=apply,
                 apply_note=apply_note))


MSC = ("ماجستير (MSc)", "Master's degree (MSc)")
BSC = ("بكالوريوس (BSc)", "Bachelor's degree (BSc)")
Y1 = ("سنة واحدة دوام كامل", "1 year full-time")

# ---------- Master's ----------
UCC_DSA = "https://www.ucc.ie/en/ckr40/"
add(MA, "ds", "MSc Data Science and Analytics", "University College Cork (UCC)", "Cork", MSC, Y1,
    ("29,614 يورو لغير الأوروبيين (دفعة سبتمبر 2027)", "€29,614 for non-EU students (September 2027 intake)"), NP,
    ("التقديم مفتوح حتى اكتمال الأماكن، وآخر موعد لغير الأوروبيين 15 يونيو 2027", "Rolling until places are filled, and no later than 15 June 2027 for non-EU applicants"),
    ("حسب متطلبات اللغة الإنجليزية المعتمدة في UCC للدراسات العليا (الدرجة غير منشورة في صفحة البرنامج)", "UCC's approved postgraduate English requirements (the score is not stated on the programme page)"),
    ("يُشترط بكالوريوس بتقدير Second Class Honours Grade I في علوم الحاسب، أو تخصص قريب نصف ساعاته على الأقل في الحاسب وتقنية المعلومات (معادلة التقدير المصري للتحقق مع الجامعة). الدراسة تبدأ في سبتمبر 2027", "Requires a Second Class Honours Grade I degree in Computer Science, or a related degree with at least 50% of credits in computing and IT (check how your Egyptian grade compares with the university). Starts in September 2027"),
    ("التقديم أونلاين على بوابة UCC للدراسات العليا، والتقديم المبكر أفضل", "Apply online on UCC's postgraduate portal; early application is advised"), NP, NP, UCC_DSA, UCC_DSA)

UL_SRC = "https://www.ul.ie/study/postgraduate/data-science-and-statistical-learning-msc/fees"
add(MA, "ds", "MSc Data Science and Statistical Learning", "University of Limerick (UL)", "Limerick", MSC, Y1,
    ("20,800 يورو سنوياً لغير الأوروبيين", "€20,800 per year for non-EU students"), NP,
    ("لدفعة خريف 2026 كان آخر موعد لغير الأوروبيين الذين يحتاجون تأشيرة 1 يوليو 2026 (موعد 2027 للتحقق)", "For autumn 2026 the deadline for visa-required non-EU applicants was 1 July 2026 (2027 date to verify)"),
    NP,
    ("يحتاج أساساً قوياً في الرياضيات؛ البرنامج إحصائي أكثر من برامج علوم البيانات الهندسية", "Needs a strong mathematics background; more statistical than engineering-focused data science degrees"),
    ("التقديم أونلاين على موقع UL، ويمكن التقديم قبل التخرج بالأوراق المتاحة", "Apply online on UL's website; you can apply before graduating with the documents you have"), NP, NP,
    UL_SRC, "https://www.ul.ie/study/postgraduate/data-science-and-statistical-learning-msc/apply")

DCU_CMP = "https://www.dcu.ie/courses/postgraduate/school-computing/msc-computing-major-options"
add(MA, "cs", "MSc in Computing (with Major Options)", "Dublin City University (DCU)", "Dublin", MSC, Y1,
    ("25,000 يورو لغير الأوروبيين (2027-2028)؛ منحة الكلية تخصم 4,400 يورو لمن يحصل عليها", "€25,000 for non-EU students (2027-2028); the faculty scholarship takes €4,400 off for recipients"), NP,
    ("دفعة سبتمبر 2027: آخر موعد لغير الأوروبيين 1 يوليو 2027؛ ودفعة يناير حتى 4 ديسمبر أو اكتمال الأماكن (للتحقق، الصفحة فيها تعارض)", "September 2027 intake: non-EU deadline 1 July 2027; January intake until 4 December or until full (to verify, the page is inconsistent)"),
    ("حسب متطلبات DCU للغة الإنجليزية", "DCU's English language requirements"),
    ("يُشترط بكالوريوس بتقدير 2.1 أو أعلى في علوم الحاسب أو تخصص قريب", "Requires a 2.1 honours degree or higher in Computer Science, Computing or a related discipline"),
    ("التقديم أونلاين على موقع DCU، ومنحة الكلية تُحتسب تلقائياً لغير الأوروبيين", "Apply online on DCU's website; non-EU applicants are considered for the faculty scholarship automatically"), NP, NP,
    DCU_CMP, DCU_CMP)

DCU_MGT = "https://www.dcu.ie/courses/postgraduate/business-school/msc-management-strategy"
add(MA, "bus", "MSc in Management (Strategy)", "DCU Business School, Dublin City University", "Dublin", MSC, Y1,
    ("23,500 يورو لغير الأوروبيين (2027-2028)؛ منحة كلية الأعمال تخصم 2,000 يورو لمن يحصل عليها", "€23,500 for non-EU students (2027-2028); the Business School scholarship takes €2,000 off for recipients"), NP,
    NP, ("حسب متطلبات DCU للغة الإنجليزية", "DCU's English language requirements"),
    ("موجّه لخريجي التجارة وإدارة الأعمال", "Aimed at graduates with a business degree"),
    ("التقديم أونلاين على موقع DCU، ومنحة كلية الأعمال تُحتسب تلقائياً لغير الأوروبيين", "Apply online on DCU's website; non-EU applicants are considered for the Business School scholarship automatically"), NP, NP,
    "https://www.dcu.ie/fees/postgraduate-fees-2027-28", DCU_MGT)

# ---------- Bachelor's ----------
DCU_BSC = "https://www.dcu.ie/DC121"
add(BA, "cs", "BSc in Computer Science", "Dublin City University (DCU)", "Dublin", BSC,
    ("4 سنوات، فيها تدريب عملي INTRA لمدة 6 شهور", "4 years, including a six-month INTRA work placement"),
    ("23,800 يورو سنوياً لغير الأوروبيين (2027-2028)", "€23,800 per year for non-EU students (2027-2028)"), NP, NP,
    ("حسب متطلبات DCU للغة الإنجليزية", "DCU's English language requirements"),
    ("تُشترط مؤهلات تعادل الثانوية الأيرلندية مع حد أدنى في الرياضيات؛ الثانوية العامة المصرية وحدها غالباً لا تكفي في الجامعات الأيرلندية (للتحقق مع DCU)", "Requires qualifications equivalent to the Irish Leaving Certificate with a minimum in Mathematics; the Egyptian Thanaweya Amma alone is often not enough at Irish universities (check with DCU)"),
    ("غير الأوروبيين يقدّمون مباشرة لـ DCU وليس عبر CAO (للتحقق من الطريقة)", "Non-EU applicants apply directly to DCU rather than through the CAO (check the route)"), NP, NP,
    "https://www.dcu.ie/fees/undergraduate-fees-2026-2027", DCU_BSC)

write("أيرلندا", "Ireland", "ireland", BA, level="bachelor")
if os.environ.get("BA_ONLY"):
    sys.exit()
write("أيرلندا", "Ireland", "ireland", MA, level="master")

ap = os.path.join(ROOT, "data", "programmes", "all_programmes.csv")
rows = list(csv.reader(open(ap, encoding="utf-8-sig")))
hdr, body = rows[0], [r for r in rows[1:] if r and r[1] != "أيرلندا"]
nxt = max(int(r[0]) for r in body) + 1
ie = list(csv.reader(open(os.path.join(ROOT, "data", "programmes", "ireland.csv"), encoding="utf-8-sig")))[1:]
for i, r in enumerate(ie):
    body.append([str(nxt + i)] + r[1:])
with open(ap, "w", newline="", encoding="utf-8-sig") as f:
    csv.writer(f).writerows([hdr] + body)
print("all_programmes.csv:", len(body), "rows; Ireland ids", nxt, "-", nxt + len(ie) - 1)
