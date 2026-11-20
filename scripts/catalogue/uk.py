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

write("بريطانيا", "United Kingdom", "united-kingdom", MA, level="master")
append_master("بريطانيا", "united-kingdom")
print("uk:", len(MA), "master's")
