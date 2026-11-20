# Canada, Australia and New Zealand batch 2 (added 2026-11-20), append-only (re-run after canada.py, australia.py or
# new_zealand.py). Official sources only:
# - University of Saskatchewan (Saskatoon): grad.usask.ca programme pages (2026-27 international tuition per term,
#   expected length, admission average, deadlines). Thesis-based master's: CAD 4,279 a term x 3 = CAD 12,837 a year;
#   Food Science CAD 4,869 a term. No PAL needed for master's study permits.
# - University of Tasmania (Hobart / Launceston): 2027 course pages (international annual rate and indicative total);
#   no closing date for most courses, apply at least five months before the semester (utas.edu.au international how to apply).
# - University of Otago (Dunedin): 2027 international fee tables (annual NZD); international key dates: offshore applicants
#   by 15 November for February, 1 May - 30 April for July.
# - Massey University: 2027 international tuition estimates (per 120 credits); admission due dates 2027 for new
#   international students: semester two 1 May 2027.
# Euro figures: ECB reference rates of 17 Nov 2026 (CAD 1.5704, AUD 1.6316, NZD 1.9985 per euro).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import NP
from helpers import add, append_extra

REV = "2026-11-20"
CAD, AUD, NZD = 1.5704, 1.6316, 1.9985
eur = lambda x, r: f"{round(x / r / 10) * 10:,}"
MSC = ("ماجستير العلوم (MSc)", "Master of Science (MSc)")
Y2 = ("سنتان بدوام كامل", "2 years full-time")
Y1 = ("سنة واحدة بدوام كامل", "1 year full-time")

# ---------------- Canada: University of Saskatchewan
CA = []
U = "University of Saskatchewan"
U_HOW = ("التقديم أونلاين على بوابة كلية الدراسات العليا (رسوم الطلب 145 دولاراً كندياً للدوليين)؛ برامج الرسالة تحتاج عادة مشرفاً من القسم، فتواصل مع الأساتذة أولاً",
         "Apply online through the College of Graduate and Postdoctoral Studies (CAD 145 application fee for international applicants); thesis programmes usually need a supervisor, so contact professors first")
U_EN = ("قد يُطلب إثبات الإنجليزية؛ الحد الأدنى في صفحة شروط القبول العامة للكلية (غير مذكور في صفحة البرنامج، للتحقق)", "Proof of English may be required; minimums are on the college's general admission page (not on the programme page, to verify)")
U_ADM = ("بكالوريوس من 4 سنوات (أو ما يعادله) في تخصص قريب، بمعدل 70% على الأقل في آخر سنتين", "A four-year honours degree (or equivalent) in a relevant discipline, with at least 70% in the last two years")


def ufee(term):
    year = term * 3
    return (f"حوالي {eur(year, CAD)} يورو في السنة ({term:,} دولاراً كندياً لكل فصل × 3 فصول = {year:,} دولاراً كندياً في السنة الدراسية 2026/2027 للطلاب الدوليين في ماجستير الرسالة، بدون رسوم الطلاب الإضافية؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
            f"About €{eur(year, CAD)} a year (CAD {term:,} a term x 3 terms = CAD {year:,} for 2026/27 for international students on a thesis master's, student fees extra; ECB rate of 17 November 2026)")


for field, name, slug, term, dur, dl, en, other in [
    ("food", "MSc Food Science (thesis)", "food-science", 4869, Y2,
     ("لا يوجد موعد ثابت: الطلبات طوال السنة، والبداية في سبتمبر أو يناير أو مايو؛ يجب أن يصلك القبول قبل بداية الفصل بثلاثة أشهر على الأقل لوقت التأشيرة", "No set deadline: applications year-round, starting in September, January or May; you should be accepted at least three months before the term for the visa"),
     U_EN, ("علوم الأغذية (كيمياء وميكروبيولوجيا وتصنيع الأغذية) في قسم علوم الأغذية والمنتجات الحيوية", "Food science (food chemistry, microbiology and processing) in the Department of Food and Bioproduct Sciences")),
    ("sport", "MSc Kinesiology (thesis)", "kinesiology", 4279, Y2,
     ("1 مايو للبدء في سبتمبر (الدفعة الوحيدة)، والأوراق في نفس الموعد", "1 May for a September start (the only intake), documents by the same date"),
     U_EN, ("علوم الحركة والرياضة (الميكانيكا الحيوية وفسيولوجيا التمارين والتحكم الحركي)؛ الكلية تقول إن كل المقبولين يحصلون على دعم مالي، وعادةً 32,000 دولار كندي على سنتين", "Kinesiology (biomechanics, exercise physiology, motor control); the college says all accepted students receive some support, typically CAD 32,000 over two years")),
    ("cs", "MSc Computer Science (thesis)", "computer-science", 4279, ("سنتان تقريباً (حوالي 20 شهراً)", "About 20 months"),
     ("15 ديسمبر للطلاب الدوليين (للبدء في سبتمبر 2027)", "15 December for international applicants (September 2027 start)"),
     ("IELTS بمجموع 7.0 ولا مهارة أقل من 6.5، أو Duolingo بمجموع 120", "IELTS 7.0 overall with no band below 6.5, or Duolingo 120"),
     ("علوم الحاسب البحثية بمسار الرسالة", "Research computer science, thesis route")),
]:
    src = f"https://grad.usask.ca/programs/{slug}.php"
    add(CA, field, name, U, "Saskatoon", MSC, dur, ufee(term), U_ADM, dl, en, other, U_HOW, NP, NP, src, src)

append_extra("كندا", "canada", CA, REV)

# ---------------- Australia: University of Tasmania
AU = []
T = "University of Tasmania"
T_DL = ("لا يوجد موعد إغلاق لأغلب البرامج؛ الجامعة تنصح المتقدمين من خارج أستراليا بالتقديم قبل بداية الفصل بخمسة أشهر على الأقل (الفصل الأول يبدأ في فبراير والثاني في يوليو)",
        "No closing date for most courses; the university advises applicants overseas to apply at least five months before the semester starts (semester 1 starts in February, semester 2 in July)")
T_HOW = ("التقديم أونلاين على بوابة الجامعة أو عن طريق وكيل معتمد؛ لا توجد رسوم طلب", "Apply online through the university or an authorised agent; no application fee")


def tfee(aud, total):
    return (f"حوالي {eur(aud, AUD)} يورو في السنة ({aud:,} دولاراً أسترالياً رسوم الطلاب الدوليين لسنة 2027، والإجمالي التقديري للبرنامج {total:,} دولاراً أسترالياً؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
            f"About €{eur(aud, AUD)} a year (AUD {aud:,} international annual rate for 2027; indicative total AUD {total:,}; ECB rate of 17 November 2026)")


for field, name, code, aud, total, city, deg, adm, en, other in [
    ("food", "Master of Agriculture and Food Sciences", "sci-eng/courses/p7d-master-of-agriculture-and-food-sciences-specialisation", 38250, 78413, "Hobart",
     ("ماجستير الزراعة وعلوم الأغذية", "Master of Agriculture and Food Sciences"),
     ("بكالوريوس في مجال علمي مع خلفية في العلوم المرتبطة بالتخصص الذي تختاره، بمعدل 75%", "A bachelor's in a science-related area with background relevant to your chosen specialisation, with a 75% average"),
     ("IELTS Academic بمجموع 6.0 ولا مهارة أقل من 6.0", "IELTS Academic 6.0 overall with no band below 6.0"),
     ("الزراعة وعلوم الأغذية بتخصصات (منها ميكروبيولوجيا الأغذية)، أغلب المواد في هوبارت", "Agriculture and food sciences with specialisations (including food microbiology); most units in Hobart")),
    ("sw", "Master of Social Work (Qualifying)", "health/courses/r7o-master-of-social-work-qualifying", 40950, 83948, "Hobart",
     ("ماجستير العمل الاجتماعي (التأهيلي)", "Master of Social Work (Qualifying)"),
     ("بكالوريوس قريب فيه سنة دراسية كاملة على الأقل في العلوم الاجتماعية والسلوكية خلال آخر 10 سنوات (أو مقررات إضافية لغير ذلك)، مع فحص أمني قبل التدريب الميداني", "A related bachelor's with at least one full-time year of social and behavioural sciences within the last 10 years (or extra units otherwise), plus safety checks before placement"),
     ("IELTS Academic بمجموع 7.0 ولا مهارة أقل من 7.0", "IELTS Academic 7.0 overall with no band below 7.0"),
     ("ماجستير مهني معتمد من الجمعية الأسترالية للأخصائيين الاجتماعيين، مع تدريب ميداني؛ يُدرَّس في هوبارت ولونسستون وكريدل كوست", "Professional master's accredited by the Australian Association of Social Workers, with field placements; taught in Hobart, Launceston and Cradle Coast")),
    ("arch", "Master of Architecture", "d7c", 43950, 90098, "Launceston",
     ("ماجستير العمارة", "Master of Architecture"),
     ("بكالوريوس عمارة من 3 سنوات (أو ما يعادله) بمعدل 60% في المواد الأساسية في السنة الأخيرة؛ قد تُطلب مقابلة أو ملف أعمال", "A three-year architecture degree (or equivalent) with a 60% credit average in core subjects in the final year; an interview or portfolio may be requested"),
     ("IELTS Academic بمجموع 6.0 ولا مهارة أقل من 6.0", "IELTS Academic 6.0 overall with no band below 6.0"),
     ("ماجستير عمارة مهني معتمد، في لونسستون", "Accredited professional master's in architecture, in Launceston")),
]:
    src = f"https://www.utas.edu.au/courses/{code}"
    add(AU, field, name, T, city, deg, Y2, tfee(aud, total), adm, T_DL, en, other, T_HOW, NP, NP, src, src)

append_extra("أستراليا", "australia", AU, REV)

# ---------------- New Zealand: University of Otago and Massey University
NZ = []
O = "University of Otago"
O_FEES = "https://www.otago.ac.nz/study/fees/international-tuition-fees/"
O_DATES = "https://www.otago.ac.nz/international/future-students/prepare-for-otago/key-dates-for-new-international-students"
O_DL_BOTH = ("للبدء في يوليو 2027: التقديم حتى 30 أبريل 2027؛ وللبدء في فبراير 2028: حتى 15 نوفمبر للمتقدمين من خارج نيوزيلندا (موعد فبراير 2027 انتهى)",
             "For July 2027: apply by 30 April 2027; for February 2028: by 15 November for applicants outside New Zealand (the February 2027 round has closed)")
O_DL_S1 = ("البداية في فبراير فقط: للبدء في فبراير 2028 قدّم حتى 15 نوفمبر إن كنت خارج نيوزيلندا (موعد فبراير 2027 انتهى)",
           "February start only: for February 2028 apply by 15 November if you are outside New Zealand (the February 2027 round has closed)")
O_ADM = ("بكالوريوس في تخصص مناسب؛ الشروط التفصيلية في صفحة البرنامج (للتحقق)", "A bachelor's in a relevant subject; detailed requirements on the programme page (to verify)")
O_EN = ("حسب شروط الإنجليزية العامة للجامعة للدراسات العليا (غير منشور في جدول الرسوم، للتحقق)", "Per the university's general postgraduate English requirements (not stated in the fee table, to verify)")
O_HOW = ("التقديم أونلاين على بوابة eVision في الجامعة؛ رسوم الخدمات الطلابية والتأمين إضافية", "Apply online through the university's eVision portal; student services fee and insurance are extra")


def ofee(nzd, years):
    note = "، والبرنامج سنة واحدة" if years == 1 else "، والبرنامج سنتان"
    note_en = "; the programme lasts one year" if years == 1 else "; the programme lasts two years"
    return (f"حوالي {eur(nzd, NZD)} يورو في السنة ({nzd:,} دولاراً نيوزيلندياً رسوم الطلاب الدوليين لسنة 2027 من جدول الرسوم الرسمي{note}؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
            f"About €{eur(nzd, NZD)} a year (NZD {nzd:,} international annual fee for 2027 from the official fee table{note_en}; ECB rate of 17 November 2026)")


for field, name, nzd, years, dl, deg, other, sheet in [
    ("urb", "Master of Planning (MPlan)", 49350, 2, O_DL_BOTH, ("ماجستير التخطيط", "Master of Planning"),
     ("ماجستير مهني في التخطيط العمراني والبيئي (240 نقطة)", "Professional master's in urban and environmental planning (240 points)"), "humanities"),
    ("pol", "Master of Peace and Conflict Studies (MPCS)", 56700, 1, O_DL_BOTH, ("ماجستير دراسات السلام والنزاع", "Master of Peace and Conflict Studies"),
     ("دراسات السلام وحل النزاعات (180 نقطة)", "Peace and conflict studies (180 points)"), "humanities"),
    ("media", "Master of Communications (MComms)", 54000, 1, O_DL_BOTH, ("ماجستير الاتصال", "Master of Communications"),
     ("الاتصال والإعلام (180 نقطة)", "Communications (180 points)"), "humanities"),
    ("sw", "Master of Social and Community Work (Applied)", 45570, 2, O_DL_S1, ("ماجستير العمل الاجتماعي والمجتمعي (التطبيقي)", "Master of Social and Community Work (Applied)"),
     ("مسار مهني في العمل الاجتماعي لحاملي البكالوريوس (240 نقطة، يبدأ في فبراير)", "Professional route into social work for bachelor's graduates (240 points, February start)"), "humanities"),
    ("sport", "Master of Sport Development and Management (MSpDM)", 70665, 1, O_DL_S1, ("ماجستير تنمية الرياضة وإدارتها", "Master of Sport Development and Management"),
     ("تنمية الرياضة وإدارتها (180 نقطة، يبدأ في فبراير)", "Sport development and management (180 points, February start)"), "sciences"),
]:
    dur = Y1 if years == 1 else Y2
    add(NZ, field, name, O, "Dunedin", deg, dur, ofee(nzd, years), O_ADM, dl, O_EN, other, O_HOW, NP, NP, O_FEES + sheet, O_DATES)

M = "Massey University"
add(NZ, "food", "Master of Food Technology", M, "Palmerston North", ("ماجستير تكنولوجيا الأغذية", "Master of Food Technology"),
    ("سنة ونصف بدوام كامل (3 فصول، 180 نقطة، 120 نقطة في السنة)", "1.5 years full-time (180 credits, 120 credits a year)"),
    (f"حوالي {eur(51700, NZD)} يورو في السنة (51,700 دولار نيوزيلندي تقدير رسوم 2027 لكل سنة دراسية كاملة 120 نقطة للطلاب الدوليين، والبرنامج 180 نقطة؛ الرسوم غير الدراسية إضافية؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
     f"About €{eur(51700, NZD)} a year (NZD 51,700 estimated 2027 international fee per full-time year of 120 credits; the programme is 180 credits; non-tuition fees extra; ECB rate of 17 November 2026)"),
    ("بكالوريوس أو بكالوريوس مع مرتبة الشرف في تكنولوجيا الأغذية أو هندسة الأغذية أو علوم الأغذية (حسب وصف البرنامج، للتحقق)", "A bachelor's or honours degree in food technology, food engineering or food science (per the programme description, to verify)"),
    ("للبدء في يوليو 2027 (الفصل الثاني): 1 مايو 2027 للطلاب الدوليين الجدد؛ موعد فبراير 2027 انتهى وقد تُقبل الطلبات المتأخرة إن بقيت أماكن",
     "For July 2027 (semester two): 1 May 2027 for new international students; the February 2027 date has passed, and late applications may be considered if places remain"),
    ("حسب شروط الإنجليزية العامة للجامعة (للتحقق)", "Per the university's general English requirements (to verify)"),
    ("تكنولوجيا الأغذية: تطوير المنتجات والتصنيع والجودة، في حرم ماناواتو", "Food technology: product development, processing and quality, at the Manawatū campus"),
    ("التقديم أونلاين على بوابة الجامعة", "Apply online through the university"), NP, NP,
    "https://www.massey.ac.nz/study/all-qualifications-and-degrees/master-of-food-technology-PMFDT",
    "https://www.massey.ac.nz/study/admission-and-enrolment/key-admission-and-course-enrolment-dates/admission-application-due-dates/")

append_extra("نيوزيلندا", "new-zealand", NZ, REV)
print("anglo_more:", len(CA), "Canada,", len(AU), "Australia,", len(NZ), "New Zealand")
