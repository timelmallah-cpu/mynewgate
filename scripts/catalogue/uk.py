# United Kingdom (added 2026-11-20): English-taught master's at two public universities, from each programme's own page.
# University of Glasgow: "Tuition fees for 2027-28" (International & EU, full-time) and the six international application
#   rounds for September 2027 (1 Oct 2026 - 8 Jul 2027; Environmental Risk Management: 24 Aug 2027 for all applicants);
#   £2,000 deposit after the offer. University of Southampton: September 2027 course pages (international fee for a year's
#   study; international deadline Wednesday 18 August 2027, midday UK time; £2,000 deposit; no application fee for 2027).
# Euro figures: ECB reference rate of 17 Nov 2026 (0.83305 GBP per euro).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import common
from common import write, NP
from helpers import add, append_master

common.REVIEWED = "2026-11-20"
GBP = 0.83305
MA = []
Y1 = ("سنة واحدة (12 شهراً بدوام كامل)", "1 year (12 months full-time)")


def fee(gbp, note_ar="", note_en=""):
    eur = round(gbp / GBP / 10) * 10
    return (f"حوالي {eur:,} يورو في السنة ({gbp:,} جنيهاً إسترلينياً رسوم الطلاب الدوليين للسنة الدراسية 2027/2028، والبرنامج سنة واحدة؛ عربون 2,000 جنيه إسترليني من الرسوم بعد القبول؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026{note_ar})",
            f"About €{eur:,} a year (£{gbp:,} international fee for 2027/28; the programme lasts one year; a £2,000 deposit from the fee after the offer; ECB rate of 17 November 2026{note_en})")


MSC = ("ماجستير العلوم (MSc)", "Master of Science (MSc)")
# ---------------- University of Glasgow
G = "University of Glasgow"
G_DL = ("الطلب في 6 جولات متتالية من 1 أكتوبر 2026 إلى 8 يوليو 2027 (آخر جولة للطلاب الدوليين)، والقرار خلال أسابيع من نهاية كل جولة؛ طلب واحد فقط لكل برنامج في السنة، فقدّم مبكراً",
        "Six rolling rounds from 1 October 2026 - 8 July 2027 (final international round), with a decision a few weeks after each round closes; one application per programme a year, so apply early")
G_EN = ("IELTS Academic بمجموع 6.5 ولا مهارة أقل من 6.0 (أو ما يعادله)؛ IELTS General Training غير مقبول", "IELTS Academic 6.5 overall with no subtest below 6.0 (or equivalent); IELTS General Training is not accepted")
G_HOW = ("التقديم أونلاين مباشرة على بوابة الدراسات العليا في الجامعة (بدون رسوم طلب منشورة)", "Apply online directly through the university's postgraduate portal (no application fee published)")
H21 = "بكالوريوس بتقدير يعادل 2:1 البريطاني"
H22 = "بكالوريوس بتقدير يعادل 2:2 البريطاني"
GL = "https://www.gla.ac.uk/postgraduate/taught/"
for field, name, slug, gbp, city, adm, other, dl, en in [
    ("ds", "MSc Data Science & Artificial Intelligence", "datascience/englangers/", 34815, "Glasgow",
     (f"{H21} في أي تخصص يكون فيه الحاسب مادة رئيسية (50% على الأقل من المقررات في الحاسب، مع البرمجة المتقدمة)", "A 2:1 honours degree (or equivalent) with computing as a major subject (at least 50% of credits in computing, including advanced programming)"),
     ("علوم البيانات والذكاء الاصطناعي في مدرسة علوم الحاسب", "Data science and AI at the School of Computing Science"), G_DL,
     ("IELTS Academic بمجموع 6.5 مع كتابة 6.5 ولا مهارة أقل من 6.0، أو كتابة 6.0 والباقي 6.5 على الأقل", "IELTS Academic 6.5 overall with writing 6.5 and no subtest below 6.0, or writing 6.0 and the rest at least 6.5")),
    ("bus", "MFin International Finance", "internationalfinance", 37089, "Glasgow", (f"{H21} في أي تخصص", "A 2:1 honours degree (or equivalent) in any subject"),
     ("التمويل الدولي في كلية آدم سميث للأعمال", "International finance at the Adam Smith Business School"), G_DL, G_EN),
    ("tour", "MSc Management & Sustainable Tourism", "managementsustainabletourism", 31515, "Dumfries", (f"{H21} في أي تخصص", "A 2:1 honours degree (or equivalent) in any subject"),
     ("إدارة السياحة المستدامة: الفصل الأول في غلاسكو والثاني في حرم دمفريز", "Sustainable tourism management: semester 1 in Glasgow, semester 2 at the Dumfries campus"), G_DL, G_EN),
    ("hum", "MSc Global History", "globalhistory/", 27390, "Glasgow", (f"{H21} في أي تخصص (وقد يُقبل 2:2 مع خطاب شخصي)", "A 2:1 honours degree (or equivalent) in any subject (a 2:2 may be considered with a personal statement)"),
     ("التاريخ العالمي", "Global history"), G_DL, G_EN),
    ("hum", "MSc Museum Studies", "museumstudies/", 28275, "Glasgow", (f"{H21} في أي تخصص (وقد يُقبل 2:2 مع خطاب شخصي)", "A 2:1 honours degree (or equivalent) in any subject (a 2:2 may be considered with a personal statement)"),
     ("دراسات المتاحف بالاستفادة من متاحف الجامعة والمدينة", "Museum studies using the university's and city's collections"), G_DL, G_EN),
    ("hum", "MSc Translation & Intercultural Communication", "translationstudies", 28275, "Glasgow",
     (f"{H22} في أي تخصص، مع لغة أخرى غير الإنجليزية بمستوى C1 (العربية مثلاً)", "A 2:2 honours degree (or equivalent) in any subject, plus another language besides English at C1 (Arabic, for example)"),
     ("الترجمة والتواصل بين الثقافات", "Translation and intercultural communication"), G_DL, G_EN),
    ("ph", "MSc Clinical Trials", "clinical-trials/", 31515, "Glasgow",
     (f"{H22} في العلوم الحياتية أو الطبية أو الصيدلة أو التمريض أو مجال قريب", "A 2:2 honours degree (or equivalent) in life or medical sciences, pharmacology, nursing or a related subject"),
     ("التجارب السريرية، حضورياً في الحرم", "Clinical trials, taught on campus"), G_DL, G_EN),
    ("sci", "MSc Industrial Biotechnology", "industrial-biotechnology/", 33708, "Glasgow",
     (f"{H22} في العلوم الحياتية أو الطبية الحيوية أو الصيدلة أو مجال قريب", "A 2:2 honours degree (or equivalent) in life sciences, biomedical sciences, pharmacy or a related subject"),
     ("التكنولوجيا الحيوية الصناعية بالاشتراك مع كلية الأعمال", "Industrial biotechnology, taught with the business school"), G_DL, G_EN),
    ("edu", "MSc Educational Studies", "educationalstudiesmsc", 31515, "Glasgow", (f"{H22} في أي تخصص", "A 2:2 honours degree (or equivalent) in any subject"),
     ("دراسات التربية للمعلمين والإداريين وصانعي السياسات", "Educational studies for teachers, administrators and policy makers"), G_DL, G_EN),
    ("pol", "MSc Criminology, Justice & Global Society", "criminology-justice-global-society/", 27390, "Glasgow", (f"{H21} في أي تخصص (وقد يُقبل 2:2)", "A 2:1 honours degree (or equivalent) in any subject (a 2:2 is sometimes accepted)"),
     ("علم الجريمة والعدالة (كان اسمه Criminology & Criminal Justice)", "Criminology and justice (formerly Criminology & Criminal Justice)"), G_DL, G_EN),
    ("pol", "MSc Public Policy & Management", "publicpolicymanagement/", 30390, "Glasgow", (f"{H21} في العلوم الاجتماعية أو الإنسانية (وقد يُقبل 2:2)", "A 2:1 honours degree (or equivalent) in social sciences or humanities (a 2:2 is sometimes accepted)"),
     ("السياسات العامة والإدارة", "Public policy and management"), G_DL, G_EN),
    ("env", "MSc Environmental Risk Management", "environmentalriskmanagement/", 27390, "Dumfries",
     (f"{H21} في العلوم أو العلوم الاجتماعية أو الهندسة أو الإنسانيات (وقد يُقبل 2:2 مع خبرة في البيئة)", "A 2:1 honours degree (or equivalent) in science, social science, engineering or humanities (a 2:2 may be considered with environmental experience)"),
     ("إدارة المخاطر البيئية في حرم دمفريز", "Environmental risk management at the Dumfries campus"),
     ("24 أغسطس 2027 لكل المتقدمين (دفعة سبتمبر 2027)", "24 August 2027 for all applicants (September 2027 intake)"), G_EN),
]:
    src = GL + slug
    add(MA, field, name, G, city, (MSC if name.startswith("MSc") else ("ماجستير التمويل (MFin)", "Master of Finance (MFin)")), Y1, fee(gbp), adm, dl, en, other, G_HOW, NP, NP, src, src)

# ---------------- University of Southampton
S = "University of Southampton"
S_DL = ("18 أغسطس 2027 ظهراً بتوقيت بريطانيا (دفعة سبتمبر 2027)؛ قدّم مبكراً لأن الأماكن قد تمتلئ قبل الموعد", "18 August 2027, midday UK time (September 2027 intake); apply early because places may fill before the deadline")
S_EN = ("IELTS بمجموع 6.5 ولا مهارة أقل من 6.0 (أو ما يعادله)", "IELTS 6.5 overall with at least 6.0 in each skill (or equivalent)")
S_HOW = ("التقديم أونلاين مباشرة على بوابة الجامعة؛ لا توجد رسوم طلب لبرامج 2027", "Apply online directly through the university portal; no application fee for 2027 courses")
SC = "https://cdn.southampton.ac.uk/courses/"
MSC = ("ماجستير العلوم (MSc)", "Master of Science (MSc)")
for field, name, slug, gbp, adm, other, en, deg, note in [
    ("cs", "MSc Computer Science", "computer-science-masters-msc", 36800,
     ("بكالوريوس بتقدير يعادل 2:1 في علوم الحاسب أو هندسة الحاسب أو البرمجيات أو تقنية المعلومات، مع مقررات في البرمجة والرياضيات المتقدمة وهياكل البيانات", "A 2:1 in computer science, computer or software engineering or IT, with programming, advanced maths and data structures modules"),
     ("ماجستير مرن تختار فيه مواد من الذكاء الاصطناعي والأمن السيبراني وهندسة البرمجيات", "A flexible master's with modules from AI, cyber security and software engineering"), S_EN, MSC, None),
    ("cs", "MSc Artificial Intelligence", "artificial-intelligence-masters-msc", 36800,
     ("بكالوريوس بتقدير يعادل 2:1 في علوم الحاسب أو الهندسة أو الذكاء الاصطناعي أو الرياضيات مع الحاسب، مع رياضيات متقدمة وبرمجة متقدمة ومقرر في الذكاء الاصطناعي أو تعلم الآلة", "A 2:1 in computer science, engineering, AI or maths with computing, with advanced maths, advanced programming and an AI or machine learning module"),
     ("الذكاء الاصطناعي: تعلم الآلة والرؤية الحاسوبية والروبوتات", "Artificial intelligence: machine learning, computer vision and robotics"), S_EN, MSC, None),
    ("bus", "MSc Management and Artificial Intelligence", "management-artificial-intelligence-masters-msc", 37000,
     ("بكالوريوس بتقدير يعادل 2:2 في الهندسة أو الإنسانيات أو الأعمال أو الرياضيات أو العلوم أو نظم المعلومات أو العلوم الاجتماعية (التخصصات المهنية كالفنون والتصميم غير مقبولة)", "A 2:2 in engineering, humanities, business, maths, physical sciences, information systems or social sciences (vocational subjects such as art and design are not accepted)"),
     ("الإدارة مع الذكاء الاصطناعي في كلية ساوثهامبتون للأعمال", "Management with AI at Southampton Business School"), S_EN, MSC, None),
    ("ds", "MSc Data and Decision Analytics", "data-decision-analytics-masters-msc", 30100,
     ("بكالوريوس بتقدير يعادل 2:1 في تخصص كمي، والرياضيات جزء كبير منه", "A 2:1 in a quantitative subject with substantial mathematics"),
     ("تحليل البيانات واتخاذ القرار (Python وR وتعلم الآلة وبحوث العمليات)", "Data and decision analytics (Python, R, machine learning and operational research)"), S_EN, MSC,
     ("؛ الصفحة لا تذكر صراحة سنة الرسوم، للتحقق", "; the page does not state the fee year explicitly, to verify")),
    ("ds", "MSc Business Analytics and Management Science", "business-analytics-management-science-masters-msc", 37000,
     ("بكالوريوس بتقدير يعادل 2:2 في تخصص فيه محتوى كمي كبير (تمويل، علوم، رياضيات، هندسة، حاسب، اقتصاد)", "A 2:2 in a subject with substantial quantitative content (finance, sciences, maths, engineering, computing, economics)"),
     ("تحليلات الأعمال وعلوم الإدارة", "Business analytics and management science"), S_EN, MSC, None),
    ("hum", "MA English Literature", "english-literature-masters-ma", 29100,
     ("بكالوريوس بتقدير يعادل 2:2 في الآداب أو الإنسانيات أو العلوم الاجتماعية", "A 2:2 in an arts, humanities or social sciences subject"),
     ("الأدب الإنجليزي", "English literature"),
     ("IELTS بمجموع 6.5 مع 6.5 في القراءة والكتابة و6.0 في المحادثة والاستماع", "IELTS 6.5 overall with 6.5 in reading and writing and 6.0 in speaking and listening"),
     ("ماجستير الآداب (MA)", "Master of Arts (MA)"), None),
    ("hum", "MSc Archaeology", "archaeology-masters-msc", 28800,
     ("بكالوريوس بتقدير يعادل 2:2 في الآداب أو الإنسانيات أو العلوم الاجتماعية أو العلوم", "A 2:2 in an arts, humanities, social sciences or science subject"),
     ("علم الآثار", "Archaeology"), S_EN, MSC, None),
]:
    src = SC + slug
    f = fee(gbp, *(note or ("", "")))
    add(MA, field, name, S, "Southampton", deg, Y1, f, adm, S_DL, en, other, S_HOW, NP, NP, src, src)

# ---------------- University of Nottingham (added 2026-11-20)
# Fees: official 2027/28 postgraduate taught fee table (nottingham.ac.uk/fees/tuitionfees/202728/postgraduate-taught.aspx).
# Requirements from the course pages (2027 entry where shown). 2027/28 application deadlines are not published yet
# ("to be confirmed"); no application fee for 2027 entry; international students pay a CAS deposit before the visa.
N = "University of Nottingham"
N_DL = ("مواعيد التقديم لدفعة سبتمبر 2027 لم تُنشر بعد (للتحقق)؛ في دفعة 2026 كان آخر موعد للطلاب الدوليين في أوائل أغسطس، والأماكن قد تمتلئ قبل الموعد فقدّم مبكراً",
        "Deadlines for September 2027 entry are not published yet (to verify); for 2026 entry the international deadline was in early August, and places may fill earlier, so apply early")
N_EN = ("IELTS بمجموع 6.5 ولا مهارة أقل من 6.0 (أو ما يعادله)", "IELTS 6.5 overall with no less than 6.0 in any element (or equivalent)")
N_HOW = ("التقديم أونلاين مباشرة على بوابة الجامعة؛ لا توجد رسوم طلب لدفعة 2027، ويدفع الطالب الدولي عربون CAS قبل التأشيرة", "Apply online directly through the university; no application fee for 2027 entry, and international students pay a CAS deposit before the visa")
NC = "https://www.nottingham.ac.uk/pgstudy/course/taught/"


def nfee(gbp):
    eur = round(gbp / GBP / 10) * 10
    return (f"حوالي {eur:,} يورو في السنة ({gbp:,} جنيهاً إسترلينياً رسوم الطلاب الدوليين للسنة الدراسية 2027/2028 من جدول الرسوم الرسمي، والبرنامج سنة واحدة؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
            f"About €{eur:,} a year (£{gbp:,} international fee for 2027/28 from the official fee table; the programme lasts one year; ECB rate of 17 November 2026)")


for field, name, slug, gbp, adm, other, en in [
    ("food", "MSc Food Production Management", "food-production-management-msc", 34800,
     ("بكالوريوس بتقدير 2:2 أو أعلى في العلوم الطبيعية أو التطبيقية أو الهندسة (كيميائية أو زراعية أو هندسة أغذية مثلاً)", "A 2:2 or above in a natural or applied science or an engineering discipline (e.g. chemical, agricultural or food engineering)"),
     ("علوم الأغذية مع الإدارة في الصناعات الغذائية، بالاشتراك مع كلية الأعمال", "Food science with management for the food industry, taught with the business school"), N_EN),
    ("food", "MSc Nutritional Sciences", "nutritional-sciences-msc", 34800,
     ("بكالوريوس بتقدير 2:2 في العلوم البيولوجية (غير التغذية أو تخصص قريب منها)، مثل الأحياء أو علم وظائف الأعضاء أو علوم الرياضة أو علوم الأغذية (للتحقق من صفحة البرنامج)", "A 2:2 in a biological science (not nutrition or a closely related degree), such as biology, physiology, sports science or food science (to verify on the course page)"),
     ("علوم التغذية في حرم ساتون بونينغتون", "Nutritional sciences at the Sutton Bonington campus"), N_EN),
    ("sport", "MSc Applied Sport and Exercise Medicine", "applied-sport-and-exercise-medicine-msc", 31700,
     ("بكالوريوس بتقدير 2:1 في تخصص قريب مثل علوم الرياضة أو الأحياء البشرية أو علم الأوبئة أو التغذية البشرية (وقد يُقبل 2:2 لبعض الحالات)", "A 2:1 in a relevant subject such as sports science, human biology, epidemiology or human nutrition (a 2:2 may be considered case by case)"),
     ("طب الرياضة والتمارين لغير الأطباء، مع تدريب في الإسعاف الميداني في الفعاليات الرياضية", "Sport and exercise medicine for non-clinical graduates, with pitch-side emergency care at sports events"), N_EN),
    ("tour", "MSc International Tourism Management and Marketing", "international-tourism-management-and-marketing-msc", 31700,
     ("بكالوريوس بتقدير 2:1 في أي تخصص، ومنها الأعمال والإدارة", "A 2:1 in any discipline, including business and management"),
     ("إدارة وتسويق السياحة الدولية في كلية نوتنغهام للأعمال (الأماكن محدودة وقد يُغلق التقديم مبكراً)", "International tourism management and marketing at Nottingham University Business School (limited places; applications may close early)"),
     ("غير منشور في المصدر (صفحة البرنامج لا تذكر مستوى الإنجليزية)", "Not published in the source (the course page does not state the English level)")),
    ("cs", "MSc Computer Science", "computer-science-or-computer-science-artificial-intelligence-msc", 34800,
     ("بكالوريوس بتقدير 2:1 مع اهتمام أو قدرة على البرمجة؛ ويُنظر في خريجي العلوم والهندسة بمتوسط 55% (للتحقق من صفحة البرنامج)", "A 2:1 with evidence of interest or aptitude for programming; science or engineering graduates considered with a 55% average (to verify on the course page)"),
     ("علوم الحاسب، مع مسار للذكاء الاصطناعي", "Computer science, with an artificial intelligence pathway"), N_EN),
]:
    add(MA, field, name, N, "Nottingham", MSC, Y1, nfee(gbp), adm, N_DL, en, other, N_HOW, NP, NP, NC + slug, NC + slug)

# ---------------- Loughborough University (added 2026-11-20)
# Fees: official 2027-28 international postgraduate taught fee table; deadline for September 2027 programmes from the
# master's deadlines page: new international applications by 23 August 2027 (portfolio programmes by 13 August 2027).
L = "Loughborough University"
L_DL = ("23 أغسطس 2027 آخر موعد لطلبات الطلاب الدوليين الجدد (والبرامج التي تطلب ملف أعمال قبلها بعشرة أيام)، وهو أيضاً آخر موعد لدفع العربون (دفعة سبتمبر 2027)",
        "New international applications by 23 August 2027 (programmes needing a portfolio ten days earlier), which is also the deposit deadline (September 2027 intake)")
L_EN = ("حسب متطلبات الإنجليزية العامة للجامعة (غير منشور في صفحة البرنامج، للتحقق)", "Per the university's general English requirements (not stated on the course page, to verify)")
L_HOW = ("التقديم أونلاين مباشرة على بوابة الجامعة", "Apply online directly through the university")
LC = "https://lboro.ac.uk/study/postgraduate/masters-degrees/"


def lfee(gbp):
    eur = round(gbp / GBP / 10) * 10
    return (f"حوالي {eur:,} يورو في السنة ({gbp:,} جنيهاً إسترلينياً رسوم الطلاب الدوليين للسنة الدراسية 2027/2028 من جدول الرسوم الرسمي، والبرنامج سنة واحدة؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
            f"About €{eur:,} a year (£{gbp:,} international fee for 2027/28 from the official fee table; the programme lasts one year; ECB rate of 17 November 2026)")


MA_ = ("ماجستير الآداب (MA)", "Master of Arts (MA)")
for field, name, slug, gbp, city, deg, adm, other in [
    ("sport", "MSc Sport Management", "a-z/sport-management/", 33000, "Loughborough", MSC,
     ("بكالوريوس بتقدير 2:1 في الرياضة (ومنها علوم الرياضة) أو الأعمال أو الإدارة أو تخصص قريب (تسويق، محاسبة، اقتصاد) أو القانون أو الهندسة مع الإدارة", "A 2:1 in sport (including sports science), business, management or a related subject (marketing, accounting, economics), law or engineering with management"),
     ("إدارة الرياضة في كلية الرياضة والتمارين وعلوم الصحة", "Sport management at the School of Sport, Exercise and Health Sciences")),
    ("sport", "MSc Sport Management, Politics and International Development", "a-z/sport-management-politics-international-developmen/", 33000, "Loughborough", MSC,
     ("بكالوريوس بتقدير 2:1 في مجالات واسعة منها علوم الرياضة والعلوم الاجتماعية والآداب والهندسة والعلوم", "A 2:1 in a wide range of disciplines including sports science, social science, arts, engineering and sciences"),
     ("إدارة الرياضة وسياساتها والتنمية الدولية", "Sport management, sport politics and policy, and international development")),
    ("sport", "MSc Diplomacy and Sport", "diplomacy-sport/", 27000, "London", MSC,
     ("بكالوريوس بتقدير 2:2 (50% في السنة الأخيرة) في أي تخصص", "A 2:2 (50% in the final year) in any subject"),
     ("الدبلوماسية والرياضة في حرم لافبرة في لندن (الحديقة الأولمبية)", "Diplomacy and sport at Loughborough University London (Olympic Park)")),
    ("art", "MA Graphic Design and Visual Communication", "a-z/graphic-design-visual-communication/", 31750, "Loughborough", MA_,
     ("بكالوريوس بتقدير 2:1 مع ملف أعمال (Portfolio)", "A 2:1 honours degree plus a portfolio"),
     ("التصميم الجرافيكي والتواصل البصري", "Graphic design and visual communication")),
    ("art", "MA Fine Art", "fine-art/", 31750, "Loughborough", MA_,
     ("بكالوريوس بتقدير 2:1 أو أعلى مع ملف أعمال (Portfolio)", "A 2:1 or above plus a portfolio"),
     ("الفنون الجميلة", "Fine art")),
    ("media", "MA Media and Communication", "media-communication-london/", 27000, "London", MA_,
     ("بكالوريوس بتقدير 2:2 أو أعلى", "A 2:2 or above"),
     ("الإعلام والاتصال في حرم لافبرة في لندن", "Media and communication at Loughborough University London")),
]:
    add(MA, field, name, L, city, deg, Y1, lfee(gbp), adm, L_DL, L_EN, other, L_HOW, NP, NP, LC + slug, LC + slug)

write("بريطانيا", "United Kingdom", "united-kingdom", MA, level="master")
append_master("بريطانيا", "united-kingdom")
print("uk:", len(MA), "master's")
