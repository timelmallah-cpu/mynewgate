# More master's for Sweden, Portugal and Cyprus, added 2026-11-19 (official university pages only).
# Append-only through helpers.append_extra: re-run after sweden.py, portugal.py or cyprus.py.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import NP, MSC2, SEM3
from helpers import add, append_extra

REVIEWED = "2026-11-19"
MA = {"se": [], "pt": [], "cy": []}

# ---------- Sweden: Lund and Uppsala (autumn 2027, universityadmissions.se) ----------
UA = "https://www.universityadmissions.se/en/"
SE_ADM = ("رسوم طلب 900 كرونة سويدية لغير الأوروبيين، تُدفع مرة واحدة لكل فصل دراسي مهما كان عدد البرامج، بحد أقصى 1 فبراير 2027",
          "SEK 900 application fee for non-EU/EEA applicants, paid once per semester whatever the number of programmes, by 1 February 2027")
SE_DL = lambda start: (f"من 16 أكتوبر 2026 حتى 15 يناير 2027 لدفعة خريف 2027؛ المستندات ورسوم الطلب حتى 1 فبراير 2027؛ الدراسة من {start[0]}",
                       f"16 October 2026 - 15 January 2027 for the autumn 2027 intake; documents and application fee by 1 February 2027; studies run {start[1]}")
SE_EN = ("مستوى English 6 السويدي؛ الاختبارات والدرجات المقبولة منشورة في صفحة متطلبات الإنجليزية على universityadmissions.se",
         "The Swedish English 6 level; accepted tests and scores are listed on the English requirements page at universityadmissions.se")
SE_HOW = ("طلب أونلاين على universityadmissions.se ورفع الشهادات وإثبات الإنجليزية والمستندات الخاصة بالبرنامج",
          "Online application on universityadmissions.se with certificates, proof of English and the programme's own documents")
T = lambda total, first: (f"{total} كرونة سويدية للبرنامج كاملاً لغير الأوروبيين، الدفعة الأولى {first} كرونة",
                          f"SEK {total} for the whole programme for non-EU/EEA students; first instalment SEK {first}")
LUND_DATES = ("30 أغسطس 2027 حتى 3 يونيو 2029", "30 August 2027 to 3 June 2029")

add(MA["se"], "psych", "Psychology - Master of Science Programme", "Lund University", "Lund",
    ("ماجستير العلوم (MSc)", "Master of Science (MSc)"), MSC2, T("270,000", "67,500"), SE_ADM,
    SE_DL(("26 أغسطس 2027 حتى 3 يونيو 2029", "26 August 2027 to 3 June 2029")), SE_EN,
    ("بكالوريوس بتخصص رئيسي في علم النفس (90 ساعة معتمدة على الأقل) منها 15 ساعة في المناهج والإحصاء؛ برنامج بحثي لا يؤهل لترخيص ممارسة العلاج النفسي",
     "A bachelor's degree with a major in psychology (at least 90 ECTS), including 15 ECTS in methods and statistics; a research programme that does not lead to a licence to practise as a psychologist"),
    SE_HOW, NP, NP, "https://www.lunduniversity.lu.se/study/psychology-master-of-science-programme-SAMPS", UA)

add(MA["se"], "pol", "European Studies - Master of Arts Programme", "Lund University", "Lund",
    ("ماجستير الآداب (MA)", "Master of Arts (MA)"), MSC2, T("270,000", "67,500"), SE_ADM, SE_DL(LUND_DATES), SE_EN,
    ("بكالوريوس في العلوم الإنسانية أو الاجتماعية؛ الاختيار حسب الإنجليزية والدرجات وخطاب الدافع وخطابي توصية",
     "A bachelor's degree in the humanities or social sciences; selection on English, grades, a statement of purpose and two recommendation letters"),
    SE_HOW, NP, NP, "https://www.lunduniversity.lu.se/study/european-studies-master-of-arts-HAEUH", UA)

add(MA["se"], "pol", "European Affairs - Master of Science Programme", "Lund University", "Lund",
    ("ماجستير العلوم (MSc)", "Master of Science (MSc)"), MSC2, T("270,000", "67,500"), SE_ADM, SE_DL(LUND_DATES), SE_EN,
    ("بكالوريوس بتخصص رئيسي في العلوم السياسية (90 ساعة معتمدة على الأقل) أو ما يعادله؛ الاختيار حسب الدرجات وخطاب الدافع والإنجليزية وعينة كتابة أكاديمية",
     "A bachelor's degree with a major (at least 90 ECTS) in political science or equivalent; selection on grades, a statement of purpose, English and an academic writing sample"),
    SE_HOW, NP, NP, "https://www.lunduniversity.lu.se/study/european-affairs-master-of-science-programme-SAMEA", UA)

add(MA["se"], "pol", "Master's Programme in Peace and Conflict Studies", "Uppsala University", "Uppsala",
    ("ماجستير العلوم الاجتماعية (120 ساعة معتمدة)", "Master of Social Science (120 credits)"), MSC2, T("228,000", "57,000"), SE_ADM,
    SE_DL(("30 أغسطس 2027 حتى 3 يونيو 2029 (كود الطلب UU-M2061)", "30 August 2027 to 3 June 2029 (application code UU-M2061)")), SE_EN,
    ("بكالوريوس معترف به، و30 ساعة معتمدة في دراسات السلام والصراع أو ما يعادلها، وبحث مستقل مكتوب (مثل مشروع التخرج) من تأليفك وحدك",
     "A recognised bachelor's degree, 30 credits in peace and conflict studies or equivalent, and a written independent work (such as a bachelor's thesis) of which you are the sole author"),
    SE_HOW, NP, NP, "https://www.uu.se/en/study/programme/masters-programme-peace-and-conflict-studies", UA)

# ---------- Portugal: University of Porto, FEP (English-taught) ----------
FEP = "University of Porto, School of Economics and Management (FEP)"
FEP_CALL = "https://sigarra.up.pt/fep/en/NOTICIAS_GERAL.VER_NOTICIA?p_nr=52531"
FEP_DL = ("لسنة 2026/2027 الدورة الأولى كانت من 7 يناير إلى 11 فبراير 2026 (مواعيد 2027/2028 للتحقق)",
          "For 2026/2027 the first call ran 7 January - 11 February 2026 (2027/2028 dates to verify)")
FEP_HOW = ("التقديم أونلاين على بوابة sigarra بعد قراءة إعلان القبول وملحقه", "Apply online on the sigarra portal after reading the call notice and its addendum")
FEP_EN = ("البرنامج يُدرَّس بالإنجليزية بالكامل؛ لا تذكر صفحة البرنامج اختباراً أو درجة محددة", "Taught entirely in English; the programme page names no test or minimum score")

add(MA["pt"], "ds", "Master in Data Analytics", FEP, "Porto", ("ماجستير", "Master's degree"), MSC2,
    ("5,750 يورو سنوياً للطالب الدولي (2026/2027، والصفحة تقول إن الرقم قيد التأكيد؛ إعلان القبول ذكر 5,000 يورو، للتحقق)",
     "€5,750 a year for international students (2026/2027, marked subject to confirmation on the programme page; the call notice gave €5,000, to verify)"),
    NP, FEP_DL, FEP_EN,
    ("يدرس تنقيب البيانات وقواعد البيانات والإحصاء التطبيقي والتحسين؛ يمكن قضاء فصل أو فصلين في الخارج عبر شبكة QTEM",
     "Covers data mining, databases and programming, applied statistics and optimisation; one or two semesters abroad possible through the QTEM network"),
    FEP_HOW, NP, NP, "https://programmes.fep.up.pt/?p=6941", FEP_CALL)

add(MA["pt"], "econ", "Master in Economics of Business and Strategy", FEP, "Porto", ("ماجستير", "Master's degree"), MSC2,
    ("5,000 يورو سنوياً للطالب الدولي (2026/2027)", "€5,000 a year for international students (2026/2027)"),
    NP, FEP_DL, FEP_EN,
    ("موجّه لخريجي الإدارة أو الاقتصاد أو الهندسة بخلفية كمية قوية؛ يبدأ في سبتمبر والدراسة غالباً نهارية",
     "Aimed at graduates in management, economics or engineering with a strong quantitative background; starts in September, mainly daytime classes"),
    FEP_HOW, NP, NP, "https://programmes.fep.up.pt/?p=6893", FEP_CALL)

# ---------- Cyprus: University of Cyprus (UCY, Nicosia) ----------
add(MA["cy"], "cs", "MSc Artificial Intelligence", "University of Cyprus (UCY)", "Nicosia", ("ماجستير (MSc)", "Master's degree (MSc)"), SEM3,
    ("5,125 يورو للبرنامج كاملاً (رسوم ماجستير جامعة قبرص لكل الطلاب)؛ والقسم يعلن منحاً تغطي نصف الرسوم",
     "€5,125 for the whole programme (UCY master's fee for all students); the department advertises scholarships covering half the fee"),
    NP,
    ("مواعيد دفعة سبتمبر 2027 غير منشورة في المصدر بعد؛ غير الأوروبيين يحتاجون تصريح دخول إلى قبرص، فالتقديم المبكر أفضل (للتحقق)",
     "September 2027 dates are not published yet; non-EU students need an entry permit for Cyprus, so apply early (to verify)"),
    ("يُدرَّس بالإنجليزية؛ الصفحة تطلب معرفة باللغة الإنجليزية دون ذكر اختبار أو درجة", "Taught in English; the page asks for knowledge of English without naming a test or score"),
    ("بكالوريوس في العلوم أو العلوم التطبيقية أو الهندسة أو العلوم المعرفية، ومعرفة بالبرمجة، وتقرير سابق عن الذكاء الاصطناعي أو خبرة عملية ذات صلة؛ دوام كامل أو جزئي والمحاضرات ليست صباحية",
     "A bachelor's in science, applied sciences, engineering or cognitive science, programming knowledge, and a previous report on AI or relevant work experience; full- or part-time, no morning lectures"),
    ("التقديم أونلاين على نظام طلبات الدراسات العليا في جامعة قبرص", "Apply online through the University of Cyprus postgraduate application system"),
    NP, NP, "https://www.cs.ucy.ac.cy/education/postgrad/master-in-artificial-intelligence", "https://www.ucy.ac.cy/graduateschool/?lang=en")

C = {"se": ("السويد", "sweden"), "pt": ("البرتغال", "portugal"), "cy": ("قبرص", "cyprus")}

if __name__ == "__main__":
    for cc, lst in MA.items():
        append_extra(C[cc][0], C[cc][1], lst, REVIEWED)
    print("se/pt/cy:", {cc: len(l) for cc, l in MA.items()})
