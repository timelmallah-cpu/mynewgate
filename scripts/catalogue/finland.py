# Finland: English-taught master's (non-EU fees, autumn 2027 intake) and doctoral programmes (no tuition)
# at public universities. Sources: official university pages, checked 2026-11-15.
# Master's rows are also copied into data/programmes/all_programmes.csv (numeric ids after the last one).
import sys, os, csv
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, MSC2, ROOT, FIELDAR

MA, PHD = [], []


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply, apply_note=("بوابة التقديم الرسمية", "Official application portal")):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                 living=NP, house=NP, src=src, req=src, req_note=("صفحة البرنامج الرسمية", "Official programme page"), apply=apply,
                 apply_note=apply_note))


Y = lambda v: (f"{v} يورو سنوياً لغير الأوروبيين (دفعة خريف 2027)", f"€{v} per year for non-EU/EEA students (autumn 2027 intake)")
APPFEE = ("رسوم طلب 100 يورو لغير الأوروبيين تُدفع عبر Studyinfo ولا تُسترد", "€100 application fee for non-EU/EEA applicants, paid through Studyinfo, non-refundable")
STUDYINFO = "https://studyinfo.fi/konfo/en/"
HOW_SI = ("طلب أونلاين على Studyinfo.fi خلال فترة التقديم ورفع المستندات", "Online application on Studyinfo.fi during the application period, with documents uploaded")
MSCT = ("ماجستير العلوم في التكنولوجيا M.Sc. (Tech.)", "Master of Science (Technology)")
MSC = ("ماجستير العلوم (MSc)", "Master of Science (MSc)")
MBA_ECON = ("ماجستير العلوم في الاقتصاد وإدارة الأعمال", "Master of Science (Economics and Business Administration)")

# ---------- University of Helsinki ----------
UH = "University of Helsinki"
UH_DL = ("من 5 حتى 19 يناير 2027 (الساعة 15:00 بتوقيت فنلندا) لدفعة خريف 2027؛ دفعة واحدة في السنة", "5 - 19 January 2027 (15:00 Finnish time) for the autumn 2027 intake; one intake a year")
UH_EN = ("IELTS Academic 6.5 (الكتابة 6.0) أو TOEFL iBT 92 (الكتابة 22) حسب أدلة غير رسمية تنقل عن الجامعة (للتحقق من صفحة متطلبات اللغة)",
         "IELTS Academic 6.5 (Writing 6.0) or TOEFL iBT 92 (Writing 22), per unofficial guides quoting the university (check the language requirements page)")
UH_OTHER = ("منح تغطي 50% أو 100% من الرسوم تُطلب في نفس استمارة التقديم", "Scholarships covering 50% or 100% of the fee are requested on the same application form")
add(MA, "cs", "Master's Programme in Computer Science", UH, "Helsinki", MSC, MSC2, Y("15,000"), APPFEE, UH_DL, UH_EN, UH_OTHER, HOW_SI,
    "https://www.helsinki.fi/en/degree-programmes/computer-science-masters-programme", STUDYINFO)
add(MA, "ds", "Master's Programme in Data Science", UH, "Helsinki", MSC, MSC2, Y("15,000"), APPFEE, UH_DL, UH_EN, UH_OTHER, HOW_SI,
    "https://www.helsinki.fi/en/degree-programmes/data-science-masters-programme", STUDYINFO)

# ---------- Aalto University ----------
AA = "Aalto University"
AA_DL = ("من 7 ديسمبر 2026 حتى 5 يناير 2027 لدفعة خريف 2027", "7 December 2026 - 5 January 2027 for the autumn 2027 intake")
AA_EN = ("IELTS Academic 6.5 (الكتابة 6.0) أو TOEFL iBT 92 (الكتابة 22) أو PTE Academic 62 (الكتابة 54)، والنتيجة صالحة سنتين",
         "IELTS Academic 6.5 (Writing 6.0), TOEFL iBT 92 (Writing 22) or PTE Academic 62 (Writing 54); results valid for two years")
AA_OTHER = ("عدد محدود من المنح على شكل إعفاء من الرسوم لأعلى المتقدمين تقييماً", "A small number of scholarships as tuition waivers for the highest-ranked applicants")
AA_LANG = "https://www.aalto.fi/en/admission-services/language-requirements-in-masters-admissions"
add(MA, "cs", "Computer Science - Computer, Communication and Information Sciences", AA, "Espoo", MSCT, MSC2, Y("17,000"), APPFEE, AA_DL, AA_EN, AA_OTHER, HOW_SI,
    "https://www.aalto.fi/en/study-options/computer-science-computer-communication-and-information-sciences-master-of-science-technology", AA_LANG)
add(MA, "ds", "Machine Learning, Data Science and Artificial Intelligence - Computer, Communication and Information Sciences", AA, "Espoo", MSCT, MSC2, Y("17,000"), APPFEE, AA_DL, AA_EN, AA_OTHER, HOW_SI,
    "https://www.aalto.fi/en/study-options/machine-learning-data-science-and-artificial-intelligence-master-of-science-technology", AA_LANG)
add(MA, "bus", "Master's Programme in Information and Service Management", AA, "Espoo", MBA_ECON, MSC2,
    ("15,000 يورو سنوياً لغير الأوروبيين (رسوم ماجستير كلية الأعمال المنشورة في صفحات Aalto؛ للتحقق من صفحة البرنامج)", "€15,000 per year for non-EU/EEA students (School of Business master's fee published on Aalto pages; check the programme page)"),
    APPFEE, AA_DL, AA_EN, AA_OTHER, HOW_SI, "https://www.aalto.fi/en/study-options/masters-programme-in-information-and-service-management", AA_LANG)

# ---------- Tampere University ----------
TAU = "Tampere University"
TAU_DL = ("من 14 ديسمبر 2026 حتى 7 يناير 2027 (23:59 بتوقيت فنلندا)", "14 December 2026 - 7 January 2027 (23:59 Finnish time)")
TAU_EN = ("راجع صفحة متطلبات اللغة لبرامج الماجستير في الجامعة؛ الحد الأدنى غير منشور في صفحة البرنامج", "See the university's language requirements for master's programmes; the minimum is not stated on the programme page")
TAU_HOW = ("طلب أونلاين على Studyinfo.fi ثم دفع رسوم الطلب بالموعد المرسل في البريد", "Online application on Studyinfo.fi, then pay the application fee by the date in the confirmation email")
TAU_APPLY = "https://www.tuni.fi/en/tau/masters-programmes/applying"
add(MA, "cs", "AI-native Software - Computing Sciences and Electrical Engineering", TAU, "Tampere", MSC, MSC2, Y("12,000"), APPFEE, TAU_DL, TAU_EN,
    ("الحضور في الحرم الجامعي مطلوب", "On-campus attendance required"), TAU_HOW,
    "https://www.tuni.fi/en/study-with-us/software-web-cloud-computing-sciences-0", TAU_APPLY)
add(MA, "eng", "Wireless Communications and RF Systems - Computing Sciences and Electrical Engineering", TAU, "Tampere", MSCT, MSC2,
    ("12,000 يورو سنوياً لغير الأوروبيين حسب صفحة تخصص آخر في نفس البرنامج الأم (للتحقق لهذا التخصص)", "€12,000 per year for non-EU/EEA students, per another specialisation of the same master's programme (to verify for this one)"),
    APPFEE, TAU_DL, TAU_EN, NP, TAU_HOW, "https://www.tuni.fi/en/study-with-us/wireless-communications-and-rf-systems-electrical-engineering", TAU_APPLY)

# ---------- LUT University ----------
LUT = "LUT University"
LUT_DL = ("قبول متجدد من 1 أكتوبر 2026 حتى 31 مارس 2027؛ قد يُغلق البرنامج مبكراً إذا امتلأت المقاعد", "Rolling admission 1 October 2026 - 31 March 2027; a programme may close earlier when places fill up")
LUT_FEE = ("15,000 يورو سنوياً لغير الأوروبيين؛ وفيه خصم للسنة الأولى لمن يدفع مبكراً (قيمته 5,000 أو 6,000 يورو حسب صفحات الجامعة، للتحقق)", "€15,000 per year for non-EU/EEA students; early-bird discount for the first year (€5,000 or €6,000 depending on the university page, to verify)")
LUT_HOW = ("استمارة أونلاين مع المستندات؛ الطلبات تُعالج بترتيب وصولها وبعد دفع رسوم الطلب، وبدون امتحان قبول", "Online form with documents; applications are processed in order of arrival once the fee is paid, no entrance exams")
LUT_APPLY = "https://lut.fi/web/en/admissions/apply-to-lut/rolling-admission-for-masters-studies"
add(MA, "cs", "Master's Programme in Software Engineering", LUT, "Lappeenranta", MSCT, MSC2, LUT_FEE, APPFEE, LUT_DL, NP,
    ("24 ساعة معتمدة على الأقل في علوم الحاسب أو مجال قريب", "At least 24 ECTS in computer science or a related field"), LUT_HOW,
    "https://lut.fi/en/studies/technology/masters-programmes-technology/masters-programme-software-engineering", LUT_APPLY)
add(MA, "bus", "Master's Programme in Business Analytics", LUT, "Lappeenranta", MBA_ECON, MSC2, LUT_FEE, APPFEE, LUT_DL, NP, NP, LUT_HOW,
    "https://www.lut.fi/en/welcome-lut-university-finland-masters/lut-business-school-masters-programmes", LUT_APPLY)

# ---------- University of Oulu ----------
OU = "University of Oulu"
OU_DL = ("من 7 حتى 21 يناير 2027 (15:00 بتوقيت فنلندا)، والمستندات حتى 28 يناير 2027", "7 - 21 January 2027 (15:00 Finnish time); documents by 28 January 2027")
OU_EN = ("TOEFL iBT بالمقياس الجديد 4.5 (ولا يقل أي قسم عن 4.0) للاختبارات من 21 يناير 2026، أو IELTS 6.5 (5.5 لكل قسم) حسب دليل غير رسمي (للتحقق)",
         "TOEFL iBT on the new scale 4.5 (no section below 4.0) for tests from 21 January 2026, or IELTS 6.5 (5.5 per section) per an unofficial guide (to verify)")
OU_LANG = "https://www.oulu.fi/en/apply/language-requirements-masters-degrees"
add(MA, "cs", "Master's Programme in Computer Science and Engineering", OU, "Oulu", MSCT, MSC2, Y("10,000"), APPFEE, OU_DL, OU_EN,
    ("70 مقعداً", "70 study places"), HOW_SI, "https://www.oulu.fi/en/computer-science-and-engineering", OU_LANG)
add(MA, "eng", "Master's Programme in Wireless Communications Engineering", OU, "Oulu", MSCT, MSC2, Y("10,000"), APPFEE, OU_DL, OU_EN,
    ("60 مقعداً؛ إعفاء 30% من رسوم السنة الثانية", "60 study places; 30% tuition waiver for the second year"), HOW_SI, "https://www.oulu.fi/en/node/21814", OU_LANG)

# ---------- University of Eastern Finland ----------
add(MA, "ph", "Master's Degree Programme in Public Health", "University of Eastern Finland", "Kuopio", ("ماجستير العلوم الصحية M.Sc. (Health Sciences)", "M.Sc. (Health Sciences)"), MSC2,
    ("10,000 يورو سنوياً لغير الأوروبيين حسب إعلان الجامعة للدفعة السابقة؛ رسوم برامجها 10,000-12,000 فتأكد من رقم هذا البرنامج (للتحقق)", "€10,000 per year for non-EU/EEA students per the university's announcement for the previous intake; its programmes cost €10,000-12,000, so confirm this one (to verify)"),
    APPFEE, ("من 7 حتى 21 يناير 2027 (15:00 بتوقيت فنلندا)", "7 - 21 January 2027 (15:00 Finnish time)"), NP,
    ("خصم مبكر 30% من رسوم السنة الأولى لدفعة 2027؛ يمكن التقديم لمن يتخرج من البكالوريوس قبل يوليو 2027", "30% early-bird discount on the first-year fee for the 2027 intake; you can apply if you finish your bachelor's by July 2027"),
    HOW_SI, "https://www.uef.fi/en/degree-programme/masters-degree-programme-in-public-health", STUDYINFO)

# ---------- Doctoral programmes (no tuition fees) ----------
FREE = ("لا توجد رسوم دراسية للدكتوراه في فنلندا، لكنك تتحمل تكاليف معيشتك", "No tuition fees for doctoral study in Finland, but you cover your own living costs")
PHD_DEG = ("دكتوراه", "Doctoral degree")
DUR4 = ("4 سنوات بدوام كامل (240 ساعة معتمدة)", "4 years full-time (240 credits)")
DUR4C = ("عادةً 4 سنوات بدوام كامل (للتحقق)", "Usually 4 years full-time (to verify)")
SUPER = ("تحتاج مشرفاً وخطة بحث. حق الدراسة منفصل عن وظيفة باحث الدكتوراه المدفوعة التي يُتقدَّم لها في إعلانات وظائف مستقلة", "You need a supervisor and a research plan. The study right is separate from salaried doctoral researcher posts, which are advertised as separate jobs")
add(PHD, "cs", "Doctoral Programme in Science", UH, "Helsinki", PHD_DEG, DUR4C, FREE, NP,
    ("في العام 2026-2027: من 12 حتى 25 يناير 2027، ومن 2 حتى 15 أبريل 2027 (المستندات حتى 22 أبريل 2027)", "In 2026-2027: 12 - 25 January 2027 and 2 - 15 April 2027 (documents by 22 April 2027)"),
    NP, ("نحو ربع باحثي الدكتوراه في الجامعة يعملون بعقد معها. " + SUPER[0], "About a quarter of the university's doctoral researchers are employed by it. " + SUPER[1]),
    ("طلب حق الدراسة في فترات التقديم المحددة فقط", "Apply for the study right only within the set application periods"),
    "https://www.helsinki.fi/en/admissions-and-education/apply-doctoral-programmes/doctoral-programmes/doctoral-programme-science/admissions-doctoral-studies",
    "https://www.helsinki.fi/en/admissions-and-education/apply-doctoral-programmes/how-apply-doctoral-programmes")
add(PHD, "cs", "Aalto Doctoral Programme in Science (SCI)", AA, "Espoo", PHD_DEG, DUR4C, FREE, NP,
    ("تقديم مستمر طوال السنة بمواعيد شهرية، ماعدا يوليو", "Continuous admission with monthly deadlines, except July"), NP, SUPER,
    ("طلب حسب تعليمات برنامج الدكتوراه؛ تواصل مع مشرف محتمل أولاً", "Apply following the doctoral programme's instructions; contact a potential supervisor first"),
    "https://www.aalto.fi/en/study-options/aalto-doctoral-programme-in-science-0", "https://www.aalto.fi/en/doctoral-education/how-to-apply-for-doctoral-studies")
add(PHD, "bus", "Aalto Doctoral Programme in Business, Economics and Finance (BIZ)", AA, "Espoo", PHD_DEG, DUR4C, FREE, NP,
    ("من 8 ديسمبر 2026 حتى 5 يناير 2027 (23:59)، والمستندات حتى 12 يناير 2027", "8 December 2026 - 5 January 2027 (23:59); documents by 12 January 2027"),
    ("اختبار اللغة يجب أن يكون قبل 5 يناير 2027", "Language test must be taken by 5 January 2027"),
    ("يتطلب GMAT أو GRE قبل 5 يناير 2027. " + SUPER[0], "Requires GMAT or GRE taken by 5 January 2027. " + SUPER[1]),
    ("طلب عبر Studyinfo", "Application through Studyinfo"),
    "https://www.aalto.fi/en/study-options/doctoral-programme-in-business-economics-and-finance", STUDYINFO)
add(PHD, "eng", "Aalto Doctoral Programme in Engineering (ENG)", AA, "Espoo", PHD_DEG, DUR4C, FREE, NP,
    ("4 فترات تقديم في السنة؛ مواعيد 2027 غير منشورة في المصدر", "Four application periods a year; 2027 dates not published in the source"), NP, SUPER,
    ("طلب حسب تعليمات برنامج الدكتوراه", "Apply following the doctoral programme's instructions"),
    "https://www.aalto.fi/en/study-options/aalto-doctoral-programme-in-engineering", "https://www.aalto.fi/en/doctoral-education/how-to-apply-for-doctoral-studies")
TAU_PHD = "https://www.tuni.fi/en/tau/doctoral-programmes/applying"
add(PHD, "eng", "Doctoral Programme in Computing and Electrical Engineering (DPCEE)", TAU, "Tampere", PHD_DEG, DUR4, FREE, NP,
    ("فترة الخريف: من 3 أغسطس حتى 30 نوفمبر 2026 (15:00)؛ وفيه فترة ربيع أيضاً", "Autumn period: 3 August - 30 November 2026 (15:00); there is also a spring period"), NP, SUPER,
    ("طلب أونلاين على Studyinfo.fi", "Online application on Studyinfo.fi"), "https://www.tuni.fi/en/tau/doctoral-programmes/applying", TAU_PHD)
add(PHD, "ph", "International Doctoral Programme in Epidemiology and Public Health (IPPE)", TAU, "Tampere", PHD_DEG,
    ("سنة دراسية مقررات في تامبيري ثم البحث؛ الهدف الدكتوراه في 4 سنوات", "One academic year of coursework in Tampere, then research; the aim is a doctorate in four years"), FREE, NP,
    ("من 2 نوفمبر حتى 2 ديسمبر 2026 (15:00) للبدء في أغسطس 2027؛ التقديم مرة كل سنتين", "2 November - 2 December 2026 (15:00) for an August 2027 start; admission every other year"), NP,
    ("إقامة 10 أشهر في تامبيري خلال سنة المقررات، ويُنصح بتأمين تمويل خارجي", "A 10-month residency in Tampere during the coursework year; you are encouraged to secure outside funding"),
    ("طلب أونلاين على Studyinfo.fi", "Online application on Studyinfo.fi"), "https://sites.tuni.fi/ippe/call-for-applications/", STUDYINFO)
add(PHD, "ph", "Doctoral Programme in Health Sciences (DPHS)", TAU, "Tampere", PHD_DEG, DUR4, FREE, NP,
    ("مرتين في السنة (أبريل وأكتوبر). فترة أكتوبر 2026 خلصت، والفترة الجاية في أبريل 2027 (في 2026 كانت من 1 لحد 30 أبريل؛ للتحقق)", "Twice a year (April and October); the October 2026 period ran 1 - 30 October 2026"), NP, SUPER,
    ("طلب أونلاين على Studyinfo.fi", "Online application on Studyinfo.fi"), TAU_PHD, TAU_PHD)
add(PHD, "bus", "Doctoral degree programme in economics and business administration", OU, "Oulu", PHD_DEG, DUR4C, FREE, NP,
    ("فترتان كل سنة: من 1 يناير حتى 30 أبريل، ومن 1 يوليو حتى 31 أكتوبر", "Two periods every year: 1 January - 30 April and 1 July - 31 October"), NP, SUPER,
    ("طلب حق الدراسة عبر Studyinfo.fi (ابحث عن UniOGS)", "Apply for the study right on Studyinfo.fi (search for UniOGS)"),
    "https://www.oulu.fi/en/doctoral-programme-business-and-economics", "https://www.oulu.fi/en/research/graduate-school/admissions")

write("فنلندا", "Finland", "finland", MA, level="master")
write("فنلندا", "Finland", "finland", PHD, level="doctorate")

# Copy master's into the concatenated file (replace earlier Finland rows; ids continue after the last non-Finland id).
ap = os.path.join(ROOT, "data", "programmes", "all_programmes.csv")
rows = list(csv.reader(open(ap, encoding="utf-8-sig")))
hdr, body = rows[0], [r for r in rows[1:] if r and r[1] != "فنلندا"]
nxt = max(int(r[0]) for r in body) + 1
fi = list(csv.reader(open(os.path.join(ROOT, "data", "programmes", "finland.csv"), encoding="utf-8-sig")))[1:]
for i, r in enumerate(fi):
    body.append([str(nxt + i)] + r[1:])
with open(ap, "w", newline="", encoding="utf-8-sig") as f:
    csv.writer(f).writerows([hdr] + body)
print("all_programmes.csv:", len(body), "rows; Finland ids", nxt, "-", nxt + len(fi) - 1)
