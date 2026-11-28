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


# ---------- More master's (added 2026-11-16) ----------
TUD_FEES = "https://www.tudublin.ie/media/website/for-students/student-services-and-support/registration-and-fees/documents/postgraduate_fees_26-27_Updated_310826.pdf"
TUD_APPLY = "https://www.tudublin.ie/study/international/how-to-apply/postgraduate-courses/"
TUD_DL = ("لدفعة خريف 2026 كان آخر موعد لغير الأوروبيين 26 يونيو 2026 (موعد 2027 للتحقق)", "For autumn 2026 the non-EU closing date was 26 June 2026 (2027 date to verify)")
TUD_EN = ("IELTS 6.5 لمعظم البرامج، والشرط الدقيق في صفحة البرنامج", "IELTS 6.5 for most programmes; the exact requirement is on the programme page")
TUD_HOW = ("التقديم أونلاين من رابط غير الأوروبيين في صفحة البرنامج، ورسوم الطلب غير مستردة", "Apply online through the non-EU link on the programme page; the application fee is not refundable")
def tud(field, name, fee, other, src, dur=Y1, deg=MSC):
    add(MA, field, name, "Technological University Dublin (TU Dublin)", "Dublin", deg, dur,
        (f"{fee} يورو للبرنامج كاملاً لغير الأوروبيين (2026/2027)", f"€{fee} for the full programme for non-EU students (2026/2027)"), NP,
        TUD_DL, TUD_EN, other, TUD_HOW, NP, NP, src, TUD_APPLY)

ME = ("ماجستير الهندسة (ME)", "Master of Engineering (ME)")
tud("ds", "MSc in Computer Science (Data Science)", "21,750",
    ("يُشترط بكالوريوس (مع مرتبة الشرف) في علوم الحاسب أو الرياضيات أو تخصص عددي فيه مكوّن حاسب كبير", "Requires an honours BSc in Computer Science, Mathematics or a numerate discipline with a significant computing component"),
    "https://www.tudublin.ie/study/postgraduate/courses/computing-data-science/", dur=("سنة إلى سنة ونصف دوام كامل", "1 to 1.5 years full-time"))
tud("cs", "MSc in Computer Science (Advanced Software Development)", "21,750",
    ("يُشترط بكالوريوس (مع مرتبة الشرف) في علوم الحاسب أو هندسة الحاسب بتقدير 2.1، أو 2.2 مع خبرة عمل سنتين", "Requires an honours BSc in Computer Science or Computer Engineering at 2.1, or 2.2 with two years of relevant work experience"),
    "https://tudublin.ie/study/postgraduate/courses/computing-advanced-software-development-tu059/", dur=("سنة إلى سنة ونصف دوام كامل", "1 to 1.5 years full-time"))
tud("ds", "MSc Data Analytics", "21,750",
    ("بتقدير 2.1 على الأقل في الحاسب أو العلوم أو تخصص قريب؛ يصلح كبرنامج تحويلي لغير دارسي الحاسب", "At least a 2.1 honours degree in Computing, Science or a related area; also works as a conversion programme for non-computing graduates"),
    "https://www.tudublin.ie/study/postgraduate/courses/data-analytics-ft/")
tud("cs", "MSc in Computing in Applied Cyber Security", "14,500",
    ("موجّه لحملة بكالوريوس في الحاسب أو تقنية المعلومات", "Aimed at holders of a primary degree in computing or IT"),
    "https://www.tudublin.ie/study/postgraduate/courses/applied-cyber-security/")
tud("bus", "MSc in Management", "15,000",
    ("برنامج تحويلي لخريجي التخصصات غير التجارية، وله دفعتان في يناير وسبتمبر", "A conversion programme for non-business graduates, with January and September intakes"),
    "https://www.tudublin.ie/study/postgraduate/courses/management-tu421-fulltime/")
tud("bus", "MSc in Logistics and Supply Chain Management", "14,500", NP,
    "https://www.tudublin.ie/study/postgraduate/courses/logistics-supply-chain-management/")
tud("bus", "MSc in Finance", "13,500", NP, "https://www.tudublin.ie/study/postgraduate/business/")
tud("bus", "MSc in Marketing", "13,500",
    ("برنامج تحويلي لخريجي التخصصات غير التجارية", "A conversion programme for non-business graduates"), "https://www.tudublin.ie/study/postgraduate/business/")
tud("bus", "MSc in Strategic Management", "13,500", NP, "https://www.tudublin.ie/explore/faculties-and-schools/business/graduate-business-school/full-time-learners/")
tud("eng", "Master of Engineering in Mechanical Engineering", "14,500",
    ("يُشترط بكالوريوس (مع مرتبة الشرف) بتقدير 2.2 على الأقل في الهندسة الميكانيكية أو تخصص هندسي قريب", "Requires at least a 2.2 honours degree in Mechanical Engineering or a closely related engineering discipline"),
    "https://www.tudublin.ie/study/postgraduate/courses/mechanical-engineering/", deg=ME)
tud("eng", "Master of Engineering in Civil Engineering (Sustainable Infrastructure)", "14,500",
    ("لخريجي الهندسة المدنية والإنشائية والبيئية والتخصصات القريبة", "For graduates in civil, structural and environmental engineering and closely related disciplines"),
    "https://www.tudublin.ie/study/postgraduate/courses/sustainable-infrastructure/", deg=ME)
tud("eng", "MSc in Energy Management", "14,500", NP, "https://www.tudublin.ie/study/postgraduate/engineering/")
tud("eng", "Master of Engineering in Sustainable Electrical Energy Systems", "14,500", NP, "https://www.tudublin.ie/study/postgraduate/engineering/", deg=ME)
tud("eng", "MSc in Electronic and Communications Engineering", "14,500", NP, "https://www.tudublin.ie/study/postgraduate/engineering/")
tud("arch", "Master of Architecture", "21,750",
    ("برنامج مهني لخريجي العمارة (للتحقق من الشروط في صفحة البرنامج)", "A professional programme for architecture graduates (check the conditions on the programme page)"),
    TUD_FEES, dur=("سنة ونصف دوام كامل", "1.5 years full-time"))

# Trinity College Dublin
TCD_EN = ("IELTS أكاديمي 6.5 إجمالي، أو TOEFL iBT 88", "IELTS Academic 6.5 overall, or TOEFL iBT 88")
# Business school 2027/28 (Masters FAQ, checked 21 Nov 2026)
TCD_EN65 = ("IELTS أكاديمي 6.5 (لا يقل أي قسم عن 6.0)، أو TOEFL iBT 90 (لا يقل أي قسم عن 21)", "IELTS Academic 6.5 (no band below 6.0), or TOEFL iBT 90 (no section below 21)")
TCD_EN70 = ("IELTS أكاديمي 7.0 (لا يقل أي قسم عن 6.5)، أو TOEFL iBT 100 (لا يقل أي قسم عن 23)", "IELTS Academic 7.0 (no band below 6.5), or TOEFL iBT 100 (no section below 23)")
TCD_DL27 = ("31 يوليو 2027 لدفعة سبتمبر 2027 (التقديم يفتح في نوفمبر 2026، وقد يُغلق البرنامج قبل الموعد إذا امتلأت الأماكن)", "31 July 2027 for the September 2027 intake (applications open in November 2026; a programme may close early when full)")
TCD_OTHER = ("يُشترط بكالوريوس بتقدير 2.1 (Upper Second) أو ما يعادله", "Requires at least a 2.1 honours degree or international equivalent")
TCD_HOW = ("التقديم أونلاين على بوابة my.tcd.ie، والرسوم تُدفع على قسطين", "Apply online on the my.tcd.ie portal; fees can be paid in two instalments")
TCD_APPLY = "https://tcd.ie/study/postgraduate/apply"
def tcd(field, name, fee, src, other=TCD_OTHER, dl=NP, en=TCD_EN, year="2026/2027"):
    add(MA, field, name, "Trinity College Dublin (TCD)", "Dublin", MSC, Y1,
        (f"{fee} يورو سنوياً لغير الأوروبيين ({year})", f"€{fee} a year for non-EU students ({year})") if fee else NP, NP,
        dl, en, other, TCD_HOW, NP, NP, src, TCD_APPLY)

tcd("bus", "MSc in Management", "24,600", "https://www.tcd.ie/business/programmes/masters-programmes/msc-in-management/fees",
    ("لخريجي التخصصات غير التجارية فقط، ويُشترط تقدير 2.1", "Only for non-business graduates; requires a 2.1 honours degree"), dl=TCD_DL27, year="2027/2028", en=TCD_EN65)
tcd("bus", "MSc in Marketing", "24,600", "https://www.tcd.ie/business/programmes/masters-programmes/msc-in-marketing/fees", dl=TCD_DL27, year="2027/2028", en=TCD_EN70)
tcd("bus", "MSc in Digital Marketing Strategy", "24,600", "https://www.tcd.ie/business/programmes/masters-programmes/msc-in-digital-marketing-strategy/fees", dl=TCD_DL27, year="2027/2028", en=TCD_EN70)
tcd("bus", "MSc in International Management", "25,150", "https://www.tcd.ie/business/programmes/masters-programmes/msc-in-international-management/fees/",
    ("الرسوم تشمل أسبوعاً دراسياً في الخارج (السفر والسكن). يُشترط تقدير 2.1", "The fee includes an International Week Abroad (travel and accommodation). Requires a 2.1 honours degree"), dl=TCD_DL27, year="2027/2028", en=TCD_EN70)
tcd("bus", "MSc in Finance", "27,300", "https://www.tcd.ie/business/programmes/masters-programmes/msc-in-finance/fees/")
tcd("bus", "MSc in Operations and Supply Chain Management", "24,600", "https://www.tcd.ie/business/programmes/masters-programmes/msc-in-operations-and-supply-chain-management/fees/", dl=TCD_DL27, year="2027/2028", en=TCD_EN65)
tcd("bus", "MSc in Human Resource Management", "24,600", "https://www.tcd.ie/business/programmes/masters-programmes/msc-in-human-resource-management/fees/", dl=TCD_DL27, year="2027/2028", en=TCD_EN65)
tcd("bus", "MSc in Entrepreneurship and Innovation", "24,600", "https://www.tcd.ie/business/programmes/masters-programmes/msc-in-entrepreneurship-and-innovation/fees/", dl=TCD_DL27, year="2027/2028", en=TCD_EN65)
tcd("bus", "MSc in Accounting and Analytics", "24,600", "https://www.tcd.ie/business/programmes/masters-programmes/msc-in-accounting-and-analytics-/fees/", dl=TCD_DL27, year="2027/2028", en=TCD_EN65)
tcd("cs", "MSc in Computer Science (Intelligent Systems)", None, "https://www.tcd.ie/scss/courses/postgraduate/computer-science/application-requirements/",
    ("في الذكاء الاصطناعي وتعلم الآلة؛ يُشترط تقدير 2.1 في الحاسب أو تخصص قريب جداً", "AI and machine learning; requires a 2.1 honours degree in computing or a strongly related discipline"),
    ("لدفعة 2026/2027 فتح التقديم 1 نوفمبر 2025 وأُغلق 30 يونيو 2026 (مواعيد 2027 للتحقق)", "For 2026/2027 applications opened on 1 November 2025 and closed on 30 June 2026 (2027 dates to verify)"))

# University of Galway
GAL_FEES = "https://universityofgalway.ie/student-fees/how-much/postgraduate-fees/"
GAL_HOW = ("التقديم أونلاين على بوابة جامعة غالواي للدراسات العليا، ونصف رسوم غير الأوروبيين يُدفع قبل التسجيل", "Apply online on the University of Galway postgraduate portal; half of the non-EU fee is paid before registration")
def gal(field, name, fee, year, deg=MSC, other=NP):
    add(MA, field, name, "University of Galway", "Galway", deg, Y1,
        (f"{fee} يورو سنوياً لغير الأوروبيين ({year})", f"€{fee} a year for non-EU students ({year})"), NP,
        NP, NP, other, GAL_HOW, NP, NP, GAL_FEES, GAL_FEES)

gal("bus", "MSc Business Analytics", "21,640", "2026/2027")
gal("bus", "MSc International Management", "21,640", "2026/2027")
gal("bus", "MSc Digital Marketing", "20,890", "2026/2027")
gal("bus", "MSc Corporate Finance", "21,640", "2026/2027")
gal("bus", "MSc Information Systems Management", "21,640", "2026/2027")
gal("econ", "MSc Health Economics", "20,540", "2026/2027")
gal("ds", "MSc Computer Science (Data Analytics)", "29,450", "2027/2028")
gal("cs", "MSc Computer Science (Artificial Intelligence)", "29,450", "2027/2028")
gal("cs", "MSc Software Design & Development", "19,150", "2027/2028",
    other=("برنامج تحويلي للبرمجة لخريجي التخصصات الأخرى (للتحقق من الشروط)", "A software conversion programme for graduates of other disciplines (check the conditions)"))
gal("ds", "MSc Health Data Science", "28,350", "2027/2028")
gal("eng", "ME Civil Engineering", "29,450", "2027/2028", deg=ME)
gal("eng", "ME Mechanical Engineering", "29,450", "2027/2028", deg=ME)
gal("eng", "ME Biomedical Engineering", "29,450", "2027/2028", deg=ME)
gal("eng", "ME Energy Systems Engineering", "29,450", "2027/2028", deg=ME)

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
hdr, body = rows[0], rows[1:]
# Keep the ids of Irish programmes already published (saved lists point to them); new ones get the next free ids.
old_ids = {(r[3], r[4]): r[0] for r in body if r and r[1] == "أيرلندا"}
body = [r for r in body if r and r[1] != "أيرلندا"]
nxt = max(int(r[0]) for r in body + [[i] for i in old_ids.values()]) + 1
ie = list(csv.reader(open(os.path.join(ROOT, "data", "programmes", "ireland.csv"), encoding="utf-8-sig")))[1:]
for r in ie:
    key = (r[3], r[4])
    if key in old_ids:
        rid = old_ids[key]
    else:
        rid, nxt = str(nxt), nxt + 1
    body.append([rid] + r[1:])
body.sort(key=lambda r: int(r[0]))
with open(ap, "w", newline="", encoding="utf-8-sig") as f:
    csv.writer(f).writerows([hdr] + body)
print("all_programmes.csv:", len(body), "rows; Ireland", len(ie), "programmes")
