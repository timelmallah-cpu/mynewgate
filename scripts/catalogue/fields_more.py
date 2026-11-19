# More master's for the thin fields (education, media, tourism, agriculture, environment), added 2026-11-19.
# Sources: DAAD International Programmes 2026/2027 pages and official university pages.
# APPEND-ONLY per country (helpers.append_extra): re-run after germany*.py, finland.py or new_fields_ma.py if those rewrite a country.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import NP
from helpers import add, append_extra

REVIEWED = "2026-11-19"
DAAD = "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/{}/"
MSC = ("ماجستير (MSc)", "Master of Science (MSc)")
MA_ = ("ماجستير (MA)", "Master of Arts (MA)")
S4 = ("4 فصول دراسية (سنتان)", "4 semesters (2 years)")
S3 = ("3 فصول دراسية (سنة ونصف)", "3 semesters (1.5 years)")
S2 = ("فصلان دراسيان (سنة واحدة)", "2 semesters (1 year)")
Y2 = ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)")
FREE = ("لا توجد رسوم دراسية", "No tuition fees")
UA = ("التقديم عبر uni-assist", "Apply via uni-assist")
DE, FI = [], []

# ---------------- Education
add(DE, "edu", "MA International Education and Global Learning", "University of Passau", "Passau", MA_,
    S2, FREE,
    ("حوالي 130 يورو للفصل (اتحاد الطلاب وتذكرة الحافلات)", "About €130 per semester (student services and bus pass)"),
    ("يبدأ في الفصل الصيفي فقط: التقديم من 1 نوفمبر إلى 15 يناير", "Starts in the summer semester only: apply 1 November - 15 January"),
    ("مستوى B2 بشهادة رسمية: IELTS Academic 5.5 أو TOEFL iBT 72 (قبل 2026) أو PTE Academic 59", "B2 with an official certificate: IELTS Academic 5.5, TOEFL iBT 72 (before 2026) or PTE Academic 59"),
    ("درجة جامعية بتقدير 2.5 ألماني على الأقل (أو ضمن أفضل 50% من الدفعة)، و30 ساعة معتمدة في التربية أو العلوم الاجتماعية، وخبرة دولية في التعليم (6 أسابيع عملية أو 10 ساعات معتمدة)، و240 ساعة معتمدة (أو 210/180 مع دراسة أو خبرة إضافية)؛ يتضمن تدريباً عملياً دولياً إلزامياً، ويمكن دراسته بدوام جزئي في 4 فصول",
     "A first degree with a German grade of 2.5 or better (or top 50% of the class), 30 ECTS in education or social sciences, international experience in education (6 weeks of practice or 10 ECTS), and 240 ECTS (or 210/180 plus extra study or practice); includes a compulsory international internship; can also be taken part-time over 4 semesters"),
    ("التقديم أونلاين على بوابة جامعة باساو", "Apply online on the University of Passau portal"), NP, NP, DAAD.format(10673), "https://www.uni-passau.de/en/apply")
JYU_HOW = ("التقديم في يناير على البوابة الفنلندية Studyinfo.fi، مع رسوم طلب وطنية 100 يورو لغير الأوروبيين", "Apply in January on Finland's Studyinfo.fi portal; non-EU applicants pay a €100 national application fee")
JYU_DL = ("فترة التقديم مرة واحدة في يناير 2027 (الأيام بالضبط للتحقق على Studyinfo.fi)، والدراسة تبدأ في سبتمبر", "One application period in January 2027 (exact days to verify on Studyinfo.fi); studies start in September")
add(FI, "edu", "Master's Degree Programme in Educational Sciences (EDUMA)", "University of Jyväskylä", "Jyväskylä", MA_, Y2,
    ("12,000 يورو سنوياً لغير الأوروبيين؛ خصم 1,500 يورو لمن يقبل المقعد خلال 14 يوماً، ومنحة جزئية بعد السنة الأولى", "€12,000 a year for non-EU students; €1,500 early-bird discount if you accept the place within 14 days, and a partial scholarship after year one"),
    NP, JYU_DL, ("إثبات مستوى إنجليزي كافٍ حسب قواعد الجامعة", "Proof of sufficient English per the university's rules"),
    ("بكالوريوس على الأقل؛ لا يمنح رخصة تدريس في فنلندا", "At least a bachelor's degree; does not give a Finnish teaching licence"),
    JYU_HOW, NP, NP, "https://www.jyu.fi/en/study-with-us/masters-degree-programmes/masters-degree-programme-in-educational-sciences",
    "https://www.jyu.fi/en/study-with-us/masters-degree-programmes/scholarships-tuition-fees")
add(FI, "edu", "Master's Degree Programme in Development, Education and International Cooperation (DEICO)", "University of Jyväskylä", "Jyväskylä", MA_, Y2,
    ("10,000 يورو سنوياً لغير الأوروبيين", "€10,000 a year for non-EU students"), NP, JYU_DL,
    ("إثبات مستوى إنجليزي كافٍ حسب قواعد الجامعة", "Proof of sufficient English per the university's rules"),
    ("يمنح ماجستير الآداب في التربية أو ماجستير العلوم الاجتماعية في دراسات التنمية؛ لا يمنح رخصة تدريس", "Leads to an MA (Education) or an MSSc (Development Studies); not a teaching qualification"),
    JYU_HOW, NP, NP, "https://www.jyu.fi/en/study-with-us/masters-degree-programmes/masters-degree-programme-in-development-education-and-international-cooperation-deico",
    "https://www.jyu.fi/en/study-with-us/masters-degree-programmes/scholarships-tuition-fees")

# ---------------- Media and communication
add(DE, "media", "Global Communication: Politics and Society", "University of Erfurt", "Erfurt", MA_, S4, FREE,
    ("حوالي 300 يورو للفصل، وتشمل تذكرة ألمانيا للمواصلات", "About €300 per semester, including the Deutschlandsemesterticket"),
    ("للفصل الشتوي: من 1 يناير إلى 15 يوليو؛ الجامعة تنصح بالتقديم مبكراً بسبب التأشيرة", "Winter semester: 1 January - 15 July; the university advises applying early because of the visa"),
    ("مستوى C1: TOEFL iBT 80 (20 في كل قسم) أو IELTS Academic 6.5 أو كامبريدج C1 Advanced", "C1: TOEFL iBT 80 (20 in each section), IELTS Academic 6.5 or Cambridge C1 Advanced"),
    ("بكالوريوس في الإعلام والاتصال أو الصحافة أو علم اجتماعي مع تخصص واضح في الإعلام، و12 ساعة معتمدة في المناهج التجريبية، ومقابلة شخصية ضمن الاختيار",
     "A bachelor's in media and communication, journalism or a social science with a clear media focus, 12 ECTS in empirical methods, and a selection procedure with a personal interview"),
    ("التقديم أونلاين على بوابة جامعة إرفورت (hio.uni-erfurt.de)", "Apply online on the University of Erfurt portal (hio.uni-erfurt.de)"), NP, NP, DAAD.format(5408), "https://hio.uni-erfurt.de/")
add(DE, "media", "Science Communication (MSc)", "Ansbach University of Applied Sciences", "Ansbach", MSC, S3,
    ("1,000 يورو للفصل لغير الأوروبيين", "€1,000 per semester for non-EU students"),
    ("72 يورو للفصل", "€72 per semester"),
    ("للفصل الشتوي: من 1 مايو إلى 30 يونيو", "Winter semester: 1 May - 30 June"),
    ("مستوى C1: TOEFL iBT 100 (25 في كل قسم، قبل 2026) أو IELTS Academic 7", "C1: TOEFL iBT 100 (25 in each section, before 2026) or IELTS Academic 7"),
    ("درجة 180 ساعة معتمدة بتقدير 2.5 ألماني على الأقل في العلوم أو الإنسانيات أو الاتصال أو الصحافة أو الفنون (من لديه أقل من 210 يكمّل الفرق)، وملف أعمال من 3 نماذج تواصل علمي على الأقل، وخطاب دافع حتى 1000 كلمة",
     "A 180-ECTS degree with a German grade of 2.5 or better in sciences, humanities, communication, journalism or arts (under 210 ECTS: make up the difference), a portfolio of at least three science-communication pieces, and a motivation letter of up to 1,000 words"),
    ("التقديم أونلاين على بوابة Primuss للجامعة", "Apply online on the university's Primuss portal"), NP, NP, DAAD.format(10530), "https://www.hs-ansbach.de/en/master/science-communication")

# ---------------- Tourism
add(DE, "tour", "MA International Tourism Development", "Deggendorf Institute of Technology (European Campus Rottal-Inn)", "Pfarrkirchen", MA_, S3,
    ("500 يورو للفصل لغير الأوروبيين", "€500 per semester for non-EU students"),
    ("رسوم اتحاد الطلاب 87 يورو للفصل الصيفي 2027، ورسوم طلب 60 يورو مرة واحدة لغير الأوروبيين", "Student union fee €87 for summer semester 2027, plus a one-time €60 application fee for non-EU applicants"),
    ("يبدأ في الفصل الصيفي فقط: التقديم لغير الأوروبيين من 15 أكتوبر إلى 15 ديسمبر", "Starts in the summer semester only: non-EU applications 15 October - 15 December"),
    ("مستوى B2 بشهادة رسمية", "B2 with an official certificate"),
    ("بكالوريوس في السياحة أو الإدارة أو الإدارة الدولية أو مجال قريب، واختبار قدرات", "A bachelor's in tourism, business, international management or a related field, plus an aptitude test"),
    ("التقديم على صفحة التقديم الدولي للجامعة", "Apply on the university's international application page"), NP, NP, DAAD.format(4601), DAAD.format(4601))
add(DE, "tour", "Tourism Development Strategies (TDS)", "Stralsund University of Applied Sciences", "Stralsund", MA_,
    ("فصلان أو 3 أو 4 فصول حسب البكالوريوس", "2, 3 or 4 semesters depending on your bachelor's"), FREE,
    ("131 يورو للفصل الأول ثم 107 يورو للفصول التالية، مع تعهد بدفع تكاليف إدارية للبرنامج يُرد غير المستخدم منها", "€131 for the first semester and €107 after that, plus a signed undertaking to pay programme administration costs (unspent amounts refunded)"),
    ("للفصل الشتوي: حتى 31 مايو", "Winter semester: until 31 May"),
    ("مستوى B2 بشهادة رسمية", "B2 with an official certificate"),
    ("بكالوريوس في إدارة الأعمال: 240 ساعة معتمدة (فصلان) أو 210 (3 فصول) مع تدريب 12 أسبوعاً أو خبرة، أو 180 (4 فصول) بدون تدريب",
     "A business degree: 240 ECTS (2 semesters) or 210 ECTS (3 semesters) with a 12-week internship or work experience, or 180 ECTS (4 semesters) with no internship"),
    UA, NP, NP, DAAD.format(6451), "https://my.uni-assist.de/")

# ---------------- Agriculture
add(DE, "agri", "Advisory and Innovation Services in Agri-Food Systems (MSc)", "University of Hohenheim", "Stuttgart", MSC, S4,
    ("1,500 يورو للفصل لغير الأوروبيين", "€1,500 per semester for non-EU students"),
    ("حوالي 175 يورو للفصل", "About €175 per semester"),
    ("للفصل الشتوي: من 16 نوفمبر إلى 15 مارس (لغير الأوروبيين)", "Winter semester: 16 November - 15 March (non-EU applicants)"),
    ("مستوى B2: IELTS Academic 6.5 أو TOEFL iBT 90 (18 في كل قسم، قبل 2026)", "B2: IELTS Academic 6.5 or TOEFL iBT 90 (18 in each section, before 2026)"),
    ("بكالوريوس فوق المتوسط في العلوم الزراعية أو مجال قريب (180 ساعة معتمدة على الأقل) منها 6 ساعات في الاقتصاد", "An above-average bachelor's in agricultural sciences or a related field (at least 180 ECTS), including 6 ECTS in economics"),
    ("التقديم أونلاين على بوابة جامعة هوهنهايم", "Apply online on the University of Hohenheim portal"), NP, NP, DAAD.format(8972), "https://dein-studium.uni-hohenheim.de/")
add(DE, "agri", "Digital Farming (MSc)", "Weihenstephan-Triesdorf University of Applied Sciences (HSWT)", "Freising", MSC, S4, FREE,
    ("97 يورو للفصل", "€97 per semester"),
    ("يبدأ في أكتوبر فقط؛ التقديم يفتح كل سنة من أواخر أبريل أو أوائل مايو، وآخر موعد على موقع الجامعة", "Starts in October only; applications open each year from late April or early May, and the deadline is on the university website"),
    ("مستوى B2: IELTS Academic 5.5 أو TOEFL iBT 72 (قبل 2026) أو كامبريدج B2 First", "B2: IELTS Academic 5.5, TOEFL iBT 72 (before 2026) or Cambridge B2 First"),
    ("بكالوريوس 180 ساعة معتمدة على الأقل في علوم الحاسب أو الهندسة الكهربائية أو الميكاترونكس أو الهندسة الزراعية أو العلوم الزراعية أو مجال مكافئ", "A bachelor's of at least 180 ECTS in computer science, electrical engineering, mechatronics, agricultural engineering, agricultural sciences or equivalent"),
    ("التقديم على صفحة التقديم في الجامعة", "Apply on the university's application page"), NP, NP, DAAD.format(9962), "https://www.hswt.de/en/study/before-the-study/application")
add(DE, "agri", "Agrobiotechnology (MSc)", "Justus Liebig University Giessen", "Gießen", MSC, S4, FREE,
    ("403 يورو للفصل (الفصل الصيفي 2026) ويتغير قليلاً كل فصل", "€403 per semester (summer 2026), changing slightly each semester"),
    ("للفصل الشتوي: من 1 مايو إلى 15 يونيو", "Winter semester: 1 May - 15 June"),
    ("مستوى C1: IELTS Academic 7 أو TOEFL iBT 95 (قبل 2026) أو PTE Academic 76", "C1: IELTS Academic 7, TOEFL iBT 95 (before 2026) or PTE Academic 76"),
    ("بكالوريوس 3 سنوات على الأقل (180 ساعة معتمدة) في مجال علمي قريب؛ الشهادات الأجنبية تراجعها لجنة متخصصة", "A bachelor's of at least 3 years (180 ECTS) in a closely related science; foreign degrees are reviewed by a specialist committee"),
    UA, NP, NP, DAAD.format(7709), "https://my.uni-assist.de/")
add(FI, "agri", "Master's Programme in Agricultural Sciences", "University of Helsinki", "Helsinki", MSC, Y2,
    ("15,000 يورو سنوياً لغير الأوروبيين؛ إعفاءات محدودة (50% أو 100%) للمتفوقين", "€15,000 a year for non-EU students; limited fee waivers (50% or 100%) for high achievers"),
    ("رسوم طلب وطنية 100 يورو لغير الأوروبيين", "€100 national application fee for non-EU applicants"),
    ("لدفعة خريف 2027: من 5 إلى 19 يناير 2027", "Autumn 2027 intake: 5 - 19 January 2027"),
    ("حسب متطلبات اللغة في جامعة هلسنكي", "Per the University of Helsinki language requirements"),
    ("البرنامج الوحيد في فنلندا في هذا المجال؛ قبول مرة واحدة في السنة", "The only programme of its kind in Finland; one intake a year"),
    ("التقديم على البوابة الفنلندية Studyinfo.fi خلال فترة التقديم فقط", "Apply on Finland's Studyinfo.fi portal during the application period only"), NP, NP,
    "https://www.helsinki.fi/en/degree-programmes/agricultural-sciences-masters-programme/admissions", "https://www.helsinki.fi/en/degree-programmes/agricultural-sciences-masters-programme/admissions")

# ---------------- Environment
add(DE, "env", "Environmental Sciences (MSc)", "RPTU University Kaiserslautern-Landau (Landau campus)", "Landau", MSC, S4, FREE,
    ("رسوم اجتماعية 160 يورو للفصل، ورسوم تقييم uni-assist 75 يورو", "Social fee €160 per semester, plus a €75 uni-assist assessment fee"),
    ("للفصل الشتوي: من 1 يناير إلى 15 يونيو (لغير الأوروبيين)", "Winter semester: 1 January - 15 June (non-EU applicants)"),
    ("مستوى B2 مطلوب أو موصى به، بدون إثبات مطلوب", "B2 required or recommended; no proof required"),
    ("بكالوريوس في علوم البيئة أو برنامج علمي مكافئ بتقدير «جيد» على الأقل، مع أساس جامعي في الأحياء والكيمياء والرياضيات/الإحصاء", "A bachelor's in environmental sciences or an equivalent science programme graded at least 'good', with basic university training in biology, chemistry and maths/statistics"),
    UA, NP, NP, DAAD.format(4548), "https://my.uni-assist.de/")
add(DE, "env", "Earth and Climate System Science (MSc)", "University of Hohenheim", "Stuttgart", MSC, S4,
    ("1,500 يورو للفصل لغير الأوروبيين حسب قاعدة ولاية بادن فورتمبيرغ (صفحة DAAD تقول «متغيرة»، للتحقق)", "€1,500 per semester for non-EU students under the Baden-Württemberg rule (the DAAD page says 'varied', to verify)"),
    ("حوالي 175 يورو للفصل", "About €175 per semester"),
    ("للفصل الشتوي: من 1 ديسمبر إلى 15 مارس (لغير الأوروبيين)", "Winter semester: 1 December - 15 March (non-EU applicants)"),
    ("مستوى B2: IELTS Academic 6.5 أو TOEFL iBT 90 (قبل 2026)", "B2: IELTS Academic 6.5 or TOEFL iBT 90 (before 2026)"),
    ("بكالوريوس في العلوم الطبيعية أو علوم الأرض أو الزراعة بتقدير 3.0 ألماني أو أفضل، و6 ساعات معتمدة على الأقل في مادتين من الرياضيات والفيزياء والكيمياء", "A bachelor's in natural, earth or agricultural sciences with a German grade of 3.0 or better, and at least 6 ECTS in two of mathematics, physics and chemistry"),
    ("التقديم أونلاين على بوابة جامعة هوهنهايم", "Apply online on the University of Hohenheim portal"), NP, NP, DAAD.format(4460),
    "https://dein-studium.uni-hohenheim.de/en/applying-and-enrollment/applying/applying-for-the-masters-in-earth-and-climate-system-science")

if __name__ == "__main__":
    append_extra("ألمانيا", "germany", DE, REVIEWED)
    append_extra("فنلندا", "finland", FI, REVIEWED)
    print("fields_more: Germany", len(DE), "Finland", len(FI))
