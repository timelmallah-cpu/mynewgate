# Türkiye: English-taught programmes at Middle East Technical University (METU / ODTÜ, a state university in Ankara).
# Sources: METU's 2026-2027 tuition fee sheet for international students, the graduate application information sheet
# and the graduate schools' application pages, METU's academic calendar, checked 2026-11-19.
# Fees are set in US dollars; the euro figure is approximate (US$1.11 per euro, as in build-data monthlyLiving).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import write, NP
from helpers import add, append_master

FEES = "https://iso.metu.edu.tr/en/system/files/2026-2027_tuition_fees_14092026.pdf"
UNI = "Middle East Technical University (METU)"
MA, BA = [], []

# ---------------- Master's (all graduate programmes: US$375 per semester for international students, 2026-2027)
MS = ("ماجستير العلوم (MS)", "Master of Science (MS)")
MARCH = ("ماجستير العمارة (M.Arch)", "Master of Architecture (M.Arch)")
Y2 = ("سنتان (4 فصول)", "2 years (4 semesters)")
G_FEE = ("حوالي 340 يورو للفصل (375 دولاراً أمريكياً للفصل لكل برامج الدراسات العليا للطلاب الدوليين في 2026/2027؛ التحويل تقريبي)",
         "About €340 per semester (US$375 per semester for all graduate programmes for international students in 2026/2027; approximate conversion)")
G_ADM = ("درجة GRE (غالباً 149 - 155 حسب البرنامج) أو ALES؛ بدون GRE قد يكون القبول مشروطاً فقط؛ ليس كل برنامج يقبل طلاباً في كل فصل",
         "A GRE score (mostly 149-155 depending on the programme) or ALES; without GRE only conditional admission is possible; not every programme admits students every semester")
G_DL = ("مواعيد 2027 تُعلن على موقع كلية الدراسات العليا؛ في الدورة الماضية: فصل الربيع 24 نوفمبر - 19 ديسمبر 2025، وفصل الخريف 23 فبراير - 27 مارس 2026",
        "2027 dates are announced on the graduate school website; last cycle: spring 24 November - 19 December 2025, fall 23 February - 27 March 2026")
G_EN = ("شهادة إنجليزية سارية (TOEFL أو امتحان METU EPE أو PTE حسب جدول المعادلة)؛ دليل الطلاب الدوليين يقول إن IELTS غير مقبول للدراسات العليا (للتحقق)",
        "A valid English certificate (TOEFL, the METU EPE or PTE per the equivalence table); the international students' guide says IELTS is not accepted for graduate study (to verify)")
G_HOW = ("التقديم أونلاين فقط على نظام شؤون الطلاب بالجامعة (ÖİBS)؛ كليات الدراسات العليا هي التي تقيّم الطلبات وليس مكتب الطلاب الدوليين",
         "Apply online only through the university's student affairs system (ÖİBS); the graduate schools evaluate applications, not the international students office")
SCI = "https://fbe.metu.edu.tr/index.php/en/node/128"
SOC = "https://sbe.metu.edu.tr/en/social-science-application"
INF = "https://ii.metu.edu.tr/application-requirements"
for field, name, deg, other, src in [
    ("cs", "Computer Engineering (MS)", MS, ("هندسة الحاسب", "Computer engineering"), SCI),
    ("eng", "Electrical and Electronics Engineering (MS)", MS, ("الهندسة الكهربائية والإلكترونية", "Electrical and electronics engineering"), SCI),
    ("eng", "Mechanical Engineering (MS)", MS, ("الهندسة الميكانيكية", "Mechanical engineering"), SCI),
    ("eng", "Civil Engineering (MS)", MS, ("الهندسة المدنية", "Civil engineering"), SCI),
    ("env", "Environmental Engineering (MS)", MS, ("الهندسة البيئية", "Environmental engineering"), SCI),
    ("sci", "Physics (MS)", MS, ("الفيزياء", "Physics"), SCI),
    ("urb", "Urban Design (MS)", MS, ("التصميم الحضري في قسم تخطيط المدن والأقاليم", "Urban design in the Department of City and Regional Planning"), SCI),
    ("arch", "Architecture (M.Arch)", MARCH, ("العمارة", "Architecture"), SCI),
    ("ds", "Data Informatics (MS)", MS, ("معلوماتية البيانات في كلية الدراسات العليا للمعلوماتية", "Data informatics at the Graduate School of Informatics"), INF),
    ("cs", "Cyber Security (MS)", MS, ("الأمن السيبراني في كلية الدراسات العليا للمعلوماتية", "Cyber security at the Graduate School of Informatics"), INF),
    ("econ", "Economics (MS)", MS, ("الاقتصاد", "Economics"), SOC),
    ("pol", "International Relations (MS)", MS, ("العلاقات الدولية", "International relations"), SOC),
    ("pol", "Middle East Studies (MS)", MS, ("دراسات الشرق الأوسط", "Middle East studies"), SOC),
]:
    add(MA, field, name, UNI, "Ankara", deg, Y2, G_FEE, G_ADM, G_DL, G_EN, other, G_HOW, NP, NP, src, "https://iso.metu.edu.tr/en/system/files/grad-handout-eng.pdf")

# ---------------- Bachelor's (international student quota, Ankara campus)
BSC = ("بكالوريوس العلوم (BS)", "Bachelor of Science (BS)")
BARCH = ("بكالوريوس العمارة (B.Arch)", "Bachelor of Architecture (B.Arch)")
Y4 = ("4 سنوات (وسنة تحضيرية للإنجليزية لمن يحتاجها)", "4 years (plus an English preparatory year if needed)")
U_FEE_HI = ("حوالي 1,080 يورو للفصل (1,200 دولار أمريكي للفصل لطلاب الحصة الدولية في كليات الهندسة والعمارة، 2026/2027؛ التحويل تقريبي)",
            "About €1,080 per semester (US$1,200 per semester for international-quota students in the faculties of engineering and architecture, 2026/2027; approximate conversion)")
U_FEE_LO = ("حوالي 720 يورو للفصل (800 دولار أمريكي للفصل لطلاب الحصة الدولية في علم النفس، 2026/2027؛ التحويل تقريبي)",
            "About €720 per semester (US$800 per semester for international-quota students in psychology, 2026/2027; approximate conversion)")
U_ADM = ("القبول ضمن الحصة الدولية بحد أدنى من شهادة أو امتحان معترف به (مثل SAT) حسب قائمة الجامعة",
         "Admission through the international quota with a minimum score in a recognised certificate or exam (such as the SAT) per the university's list")
U_DL = ("موعد 2027 غير منشور بعد؛ في 2026 كان التقديم للحصة الدولية من 1 يونيو حتى 12 يوليو",
        "2027 dates not published yet; in 2026 international-quota applications ran from 1 June to 12 July")
U_EN = ("الدراسة بالإنجليزية؛ من لا يثبت مستواه بشهادة مقبولة أو امتحان الجامعة يدرس سنة تحضيرية في قسم الإنجليزية الأساسية",
        "Taught in English; students who do not prove their level with an accepted certificate or the university exam take a preparatory year at the Department of Basic English")
U_HOW = ("التقديم أونلاين على موقع مكتب الطلاب الدوليين iso.metu.edu.tr خلال فترة الحصة الدولية", "Apply online via the International Students Office (iso.metu.edu.tr) during the international quota period")
U_SRC = "https://www.studyinturkiye.gov.tr/UniversityTurkey/Detail?uId=122571"
for field, name, deg, fee, other in [
    ("cs", "Computer Engineering", BSC, U_FEE_HI, ("هندسة الحاسب", "Computer engineering")),
    ("eng", "Electrical and Electronics Engineering", BSC, U_FEE_HI, ("الهندسة الكهربائية والإلكترونية", "Electrical and electronics engineering")),
    ("eng", "Mechanical Engineering", BSC, U_FEE_HI, ("الهندسة الميكانيكية", "Mechanical engineering")),
    ("eng", "Civil Engineering", BSC, U_FEE_HI, ("الهندسة المدنية", "Civil engineering")),
    ("eng", "Aerospace Engineering", BSC, U_FEE_HI, ("هندسة الطيران والفضاء", "Aerospace engineering")),
    ("arch", "Architecture", BARCH, U_FEE_HI, ("العمارة", "Architecture")),
    ("psych", "Psychology", BSC, U_FEE_LO, ("علم النفس", "Psychology")),
]:
    add(BA, field, name, UNI, "Ankara", deg, Y4, fee, U_ADM, U_DL, U_EN, other, U_HOW, NP, NP, FEES, U_SRC)

write("تركيا", "Türkiye", "turkey", MA, level="master")
append_master("تركيا", "turkey")
write("تركيا", "Türkiye", "turkey", BA, level="bachelor")
print("turkey:", len(MA), "master's,", len(BA), "bachelor's")
