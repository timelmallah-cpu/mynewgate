# Slovenia: English-taught master's at the University of Ljubljana (School of Economics and Business, Faculty of
# Computer and Information Science) and the University of Maribor (Faculty of Tourism, English track taught in Ljubljana).
# Non-EU citizens without a bilateral agreement (Egypt and the Arab countries included) pay tuition.
# Sources: official price lists 2026/2027 and faculty admission pages, checked 2026-11-19. The 2027/2028 call is not out yet.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import write, NP
from helpers import add, append_master

MA = []
MSC = ("ماجستير", "Master's degree")
Y2 = ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)")
UL = "University of Ljubljana"
LIVING = ("إثبات 507 يورو شهرياً على الأقل للإقامة (المبلغ الأساسي للدخل الأدنى في سلوفينيا، 507.43 يورو منذ 1 مارس 2026)، والمعيشة الفعلية في ليوبليانا أعلى من ذلك",
          "Proof of at least €507 a month for the residence permit (Slovenia's basic minimum income, €507.43 since 1 March 2026); real living costs in Ljubljana are higher")
NOTE_FEE = ("رسوم 2026/2027 لغير الأوروبيين (رسوم 2027/2028 لم تُنشر بعد)", "2026/2027 fee for non-EU students (2027/2028 fees not yet published)")

def fee(n):
    return (f"{n:,} يورو سنوياً (لغير الأوروبيين من دول بلا اتفاقية ثنائية مع سلوفينيا، ومنها الدول العربية)؛ {NOTE_FEE[0]}",
            f"€{n:,} a year (for non-EU citizens of countries without a bilateral agreement with Slovenia, including the Arab countries); {NOTE_FEE[1]}")

# School of Economics and Business (UL SEB): English tracks, one application on the national eVŠ portal.
SEB_DL = ("مواعيد 2027/2028 لم تُنشر بعد (تُفتح في الربيع). في دورة 2026 كان التقديم على بوابة eVŠ من 1 أبريل حتى 30 يونيو، ونفس الموعد لرفع كل الأوراق لمن درس خارج سلوفينيا (للتحقق من مواعيد 2027)",
          "2027/2028 dates are not yet published (the call opens in spring). In 2026 applications on the eVŠ portal ran 1 April - 30 June, also the deadline to upload all documents for degrees from outside Slovenia (2027 dates to verify)")
SEB_EN = ("TOEFL iBT 79 أو IELTS 6.0 أو كامبريدج B2، أو إفادة بالمشاركة في برنامج تبادل طلابي بالإنجليزية",
          "TOEFL iBT 79, IELTS 6.0 or Cambridge B2, or a certificate of taking part in an English-language student exchange")
SEB_OTHER = ("شهادة البكالوريوس تمر بإجراء اعتراف يُقدَّم مع طلب التقديم. المتقدمون من دول تحتاج تأشيرة لدخول الاتحاد الأوروبي (ومنها مصر) يجب أن يجتازوا مقابلة شخصية إلزامية قبل دراسة طلبهم. يمكن اختيار برنامجين (أول وثانٍ). مطلوب خطاب دافع حوالي 500 كلمة. رسوم المساهمات الدراسية 61.60 يورو إضافية",
             "Your bachelor's goes through a recognition procedure submitted with the application. Applicants from countries that need a visa for the EU (Egypt included) must pass a mandatory in-person interview before the application is processed. You may list two programmes (first and second choice). A motivation letter of about 500 words is required. Study contributions of €61.60 are extra")
SEB_HOW = ("التقديم أونلاين على البوابة الوطنية eVŠ مع طلب الاعتراف بالشهادة", "Apply online on the national eVŠ portal together with the recognition application")
SEB_SRC = "https://www.ef.uni-lj.si/en/study/masters-programmes/fees-and-price-list"
SEB_APPLY = "https://ef.uni-lj.si/en/study/masters-programmes/prijava-in-vpis"
for name, field, n, extra in [
    ("Bank and Financial Management", "econ", 4700, None),
    ("Business Informatics", "bus", 4700, None),
    ("Supply Chain and Logistics", "bus", 4700, None),
    ("Economics with Data Science", "econ", 4700, None),
    ("International Business", "bus", 4700, None),
    ("Marketing", "bus", 4700, None),
    ("Money and Finance", "econ", 4700, None),
    ("Quantitative Finance and Actuarial Sciences", "econ", 4700, None),
    ("Sustainable Tourism Management", "tour", 4700, None),
    ("IMB - International Master in Business and Organisation", "bus", 4700,
     ("قد يكون لبرنامج IMB موعد أبكر من الموعد العام (للتحقق من صفحة البرنامج)", "IMB may have an earlier deadline than the general one (check the programme page)")),
    ("Sport Management (with the Faculty of Sport)", "bus", 4000, None),
]:
    other = SEB_OTHER if not extra else (SEB_OTHER[0] + ". " + extra[0], SEB_OTHER[1] + ". " + extra[1])
    add(MA, field, name, UL + " - School of Economics and Business", "Ljubljana", MSC, Y2, fee(n), NP, SEB_DL, SEB_EN, other, SEB_HOW,
        LIVING, NP, SEB_SRC, SEB_APPLY)

# Faculty of Computer and Information Science (UL FRI): Computer and Information Science, taught in Slovene and English.
add(MA, "cs", "Computer and Information Science (including the Data Science track)", UL + " - Faculty of Computer and Information Science", "Ljubljana",
    MSC, Y2, fee(14700), NP,
    ("مواعيد 2027/2028 تُنشر في أبريل 2027. في دورة 2026 كان آخر موعد للتقديم على بوابة eVŠ 30 يونيو (للتحقق من مواعيد 2027)",
     "2027/2028 dates are published in April 2027. In 2026 the eVŠ deadline was 30 June (2027 dates to verify)"),
    ("مستوى الإنجليزية المطلوب غير منشور في صفحة الكلية؛ للتحقق مع الكلية", "The required English level is not published on the faculty page; check with the faculty"),
    ("البرنامج يُدرَّس بالسلوفينية والإنجليزية. الأماكن لغير الأوروبيين قليلة (في 2026/2027: 8 لعلوم الحاسب والمعلومات و8 لمسار علوم البيانات). المتقدمون من دول ذات خطر هجرة أعلى ويحتاجون تأشيرة يجب أن يجتازوا مقابلة مباشرة، والشهادة الأجنبية تمر بإجراء اعتراف",
     "Taught in Slovene and English. Places for non-EU applicants are few (2026/2027: 8 for Computer and Information Science and 8 for the Data Science track). Applicants from higher-migration-risk countries who need a visa must pass a direct interview, and foreign degrees go through recognition"),
    ("التقديم أونلاين على البوابة الوطنية eVŠ", "Apply online on the national eVŠ portal"),
    LIVING, NP,
    "https://www.uni-lj.si/assets/Sluzba-za-1-in-2-stopnjo/Cenik/2026-2027/Anglescina/University-of-Ljubljana-Faculty-of-Computer-and-Information-Science.pdf",
    "https://fri.uni-lj.si/en/study-programmes/masters-programmes")

# University of Maribor, Faculty of Tourism: English track taught in Ljubljana.
add(MA, "tour", "Tourism Destinations and Experiences", "University of Maribor - Faculty of Tourism", "Ljubljana", MSC,
    ("سنتان (4 فصول، 120 ساعة معتمدة)", "2 years (4 semesters, 120 credits)"),
    ("4,850 يورو سنوياً للبرنامج الإنجليزي (رسوم 2026/2027؛ رسوم 2027/2028 لم تُنشر بعد)", "€4,850 a year for the English programme (2026/2027 fee; 2027/2028 fees not yet published)"),
    NP,
    ("مواعيد 2027/2028 لم تُنشر بعد. في دورة 2026 كانت الفترة الأولى لغير الأوروبيين من 31 مارس حتى 30 أبريل، والثانية من 24 أغسطس حتى 4 سبتمبر (للتحقق من مواعيد 2027)",
     "2027/2028 dates are not yet published. In 2026 the first non-EU period ran 31 March - 30 April and the second 24 August - 4 September (2027 dates to verify)"),
    ("لا يُطلب اختبار لإثبات الإنجليزية حسب صفحة الكلية", "No English proficiency test is required, per the faculty page"),
    ("مطلوب بكالوريوس في مجال من المجالات المذكورة (مثل السياحة أو إدارة الأعمال أو الجغرافيا)، ومن تخصصه مختلف يجتاز امتحانات تكميلية قبل التسجيل. في الفترة الأولى يمكن اختيار حتى 3 برامج بالترتيب",
     "A bachelor's in one of the listed fields (such as tourism, business and administration or geography) is required; other graduates pass bridging exams before enrolment. In the first period you can list up to three programmes in order"),
    ("التقديم أونلاين على البوابة الوطنية eVŠ", "Apply online on the national eVŠ portal"),
    LIVING, NP, "https://www.ft.um.si/en/prospective-students/study-tourism/", "https://www.ft.um.si/en/prospective-students/study-tourism/")

# Faculty of Social Sciences (UL FDV): four master's open to foreign students. Fee from the UL price list 2025/2026
# (€4,000 a year for non-EU citizens without a bilateral agreement); the 2026/2027 FDV list was not found.
FDV = UL + " - Faculty of Social Sciences"
FDV_FEE = ("4,000 يورو سنوياً لغير الأوروبيين من دول بلا اتفاقية ثنائية مع سلوفينيا (قائمة أسعار 2025/2026؛ للتحقق من رسوم 2027/2028)",
           "€4,000 a year for non-EU citizens of countries without a bilateral agreement with Slovenia (2025/2026 price list; check the 2027/2028 fee)")
FDV_DL = ("مواعيد 2027/2028 لم تُنشر بعد (دعوة التقديم في جامعة ليوبليانا تُنشر في الربيع، والتقديم على بوابة eVŠ). للتحقق من موعد غير الأوروبيين في دعوة 2027",
          "2027/2028 dates are not yet published (the University of Ljubljana call comes out in spring; applications on the eVŠ portal). Check the non-EU deadline in the 2027 call")
FDV_EN = ("مستوى الإنجليزية المطلوب غير منشور في المصدر", "The required English level is not published in the source")
FDV_SEL = ("عند تحديد عدد المقبولين: 50% لمعدل البكالوريوس و50% لامتحان اختيار شفهي في المجال. المتقدمون من دول تحتاج تأشيرة للاتحاد الأوروبي يجتازون مقابلة إلزامية",
           "If places are limited: 50% bachelor's average and 50% an oral selection exam in the field. Applicants from countries that need an EU visa must pass a mandatory interview")
FDV_HOW = ("التقديم أونلاين على البوابة الوطنية eVŠ مع طلب الاعتراف بالشهادة", "Apply online on the national eVŠ portal together with the recognition application")
FDV_FEES = "https://www.uni-lj.si/assets/Sluzba-za-1-in-2-stopnjo/Cenik/2025-2026/Anglescina/University-of-Ljubljana-Faculty-of-Social-Sciences_25-26.pdf"
FDV_BROCHURE = "https://www.fdv.uni-lj.si/docs/default-source/magistrski-studij-2-stopnje/zborniki/presentation-brochure-of-the-master-s-study-programmes-2026-27.pdf?sfvrsn=0"
for name, lang, req, sel, src in [
    ("International Relations", ("البرنامج بالإنجليزية حسب صفحة الكلية", "Taught in English, per the faculty page"),
     ("بكالوريوس 180 ساعة معتمدة في العلاقات الدولية أو ما يعادله؛ من تخصصه مختلف يُكمل 10 - 60 ساعة معتمدة تمهيدية، أو يلتحق بـ«الندوة الربيعية» التحضيرية",
      "A 180-credit bachelor's in international relations or equivalent; other graduates complete 10 - 60 prerequisite credits or join the preparatory Spring Seminar"), FDV_SEL,
     "https://www.fdv.uni-lj.si/en/study/study-at-the-FDV/masters-programmes/study-programmes/master-of-international-relations-new"),
    ("European Studies", ("قائمة الأسعار تذكر لغة البرنامج «سلوفينية ومقررات بالإنجليزية» (للتحقق من نسبة المقررات بالإنجليزية)", "The price list gives the language as \"Slovene and courses in English\" (check how many courses are in English)"),
     ("بكالوريوس 180 ساعة معتمدة في العلوم الاجتماعية أو الصحافة أو العلوم الإنسانية أو اللغات أو الإدارة أو القانون أو ما يعادله؛ من تخصصه مختلف يُكمل 10 - 60 ساعة معتمدة تمهيدية",
      "A 180-credit bachelor's in social sciences, journalism, humanities, languages, business and administration or law, or equivalent; other graduates complete 10 - 60 prerequisite credits"), FDV_SEL, FDV_BROCHURE),
    ("Political Science - Political Theory, Global and Strategic Studies", ("قائمة الأسعار تذكر لغة البرنامج «سلوفينية ومقررات بالإنجليزية»، والكتيّب يذكر التعبير بالسلوفينية والإنجليزية (للتحقق قبل التقديم)", "The price list gives the language as \"Slovene and courses in English\" and the brochure mentions Slovene and English (check before applying)"),
     ("بكالوريوس 180 ساعة معتمدة في أي تخصص", "A 180-credit bachelor's in any field"),
     ("عند تحديد عدد المقبولين يكون الاختيار حسب معدل البكالوريوس. المتقدمون من دول تحتاج تأشيرة للاتحاد الأوروبي يجتازون مقابلة إلزامية",
      "If places are limited, selection is by bachelor's average. Applicants from countries that need an EU visa must pass a mandatory interview"), FDV_BROCHURE),
    ("Social Informatics", ("قائمة الأسعار تذكر لغة البرنامج «سلوفينية ومقررات بالإنجليزية» (للتحقق من نسبة المقررات بالإنجليزية)", "The price list gives the language as \"Slovene and courses in English\" (check how many courses are in English)"),
     ("بكالوريوس 180 ساعة معتمدة في العلوم الاجتماعية أو الحاسب أو الرياضيات والإحصاء أو القانون أو ما يعادله؛ من تخصصه مختلف يُكمل 10 - 60 ساعة معتمدة تمهيدية",
      "A 180-credit bachelor's in social sciences, computer science, mathematics and statistics or law, or equivalent; other graduates complete 10 - 60 prerequisite credits"), FDV_SEL, FDV_BROCHURE),
]:
    add(MA, "pol", name, FDV, "Ljubljana", MSC, Y2, FDV_FEE, NP, FDV_DL, FDV_EN,
        (lang[0] + ". " + req[0] + ". " + sel[0], lang[1] + ". " + req[1] + ". " + sel[1]), FDV_HOW, LIVING, NP, src, FDV_FEES)

write("سلوفينيا", "Slovenia", "slovenia", MA, level="master")
append_master("سلوفينيا", "slovenia")
