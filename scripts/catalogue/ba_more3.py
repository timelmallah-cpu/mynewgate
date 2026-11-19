# English-taught bachelor's for Ireland, Germany, Austria, Greece, Cyprus and Portugal, added 2026-11-19 (official pages only).
# Append-only per country (helpers.append_ba): re-run after the countries' own *_ba scripts.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, NP
from helpers import append_ba

REVIEWED = "2026-11-19"
NOTE_R = ("الصفحة الرسمية: الشروط والرسوم", "Official page: requirements and fees")
NOTE_A = ("صفحة التقديم الرسمية", "Official application page")
BSC = ("بكالوريوس (BSc)", "Bachelor's degree (BSc)")
BA_ = ("بكالوريوس (BA)", "Bachelor's degree (BA)")
BENG = ("بكالوريوس الهندسة (BEng)", "Bachelor of Engineering (BEng)")
BCOMM = ("بكالوريوس التجارة (BComm)", "Bachelor of Commerce (BComm)")
BCL = ("بكالوريوس القانون المدني (BCL)", "Bachelor of Civil Law (BCL)")
B = {}


def add(cc, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply=None):
    B.setdefault(cc, []).append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en,
                                  other=other, how=how, living=NP, house=NP, src=src, req=src, req_note=NOTE_R,
                                  apply=apply or src, apply_note=NOTE_A))


# ---------------- Ireland: University College Cork (non-EU apply directly, not through CAO)
UCC_FEES = "https://www.ucc.ie/en/financeoffice/fees/schedules/internationalundergraduatefees202728/"
UCC_APPLY = "https://www.ucc.ie/en/international/studyatucc/undergraduateprogrammes/"
UCC_DL = ("التقديم لعام 2027/2028 يفتح 1 ديسمبر 2026 ويغلق 31 مايو 2027، وقد يُغلق البرنامج مبكراً عند امتلاء الأماكن",
          "Applications for 2027/2028: 1 December 2026 - 31 May 2027; competitive programmes may close earlier when full")
UCC_ADM = ("رسوم طلب 50 يورو، ويمكن التقديم على برنامجين كحد أقصى؛ شروط الشهادة حسب دولة المتقدم في صفحة الجامعة",
           "€50 application fee, up to two programmes; school-certificate rules per country on the university's page")
UCC_EN = ("IELTS أو TOEFL أو PTE من جلسة واحدة خلال آخر سنتين قبل بدء الدراسة؛ الحد الأدنى في جدول اللغة بالجامعة",
          "IELTS, TOEFL or PTE from one sitting within two years before the start; minimum scores in the university's table")
UCC_HOW = ("التقديم أونلاين على نظام المكتب الدولي بجامعة كورك مع المستندات (غير الأوروبيين لا يقدّمون عبر CAO)",
           "Apply online through UCC International Office's system with the documents (non-EU applicants do not use CAO)")
EGY = "؛ الثانوية العامة المصرية وحدها قد لا تكفي في الجامعات الأيرلندية (للتحقق مع الجامعة)"
EGY_EN = "; the Egyptian Thanaweya Amma alone may not be enough at Irish universities (to verify with the university)"


def ucc(field, name, fee, dur, other_ar, other_en, dl=UCC_DL):
    deg = BENG if " BE " in name else BSC if "BSc" in name else BCOMM if "BComm" in name else BCL if "BCL" in name else BA_
    add("ie", field, name, "University College Cork (UCC)", "Cork", deg, dur,
        (f"{fee} يورو سنوياً لغير الأوروبيين شاملة رسوم الخدمة (2027/2028)", f"€{fee} a year for non-EU students including capitation (2027/2028)"),
        UCC_ADM, dl, UCC_EN, (other_ar + EGY, other_en + EGY_EN), UCC_HOW, UCC_FEES, UCC_APPLY)


Y4 = ("4 سنوات", "4 years")
ucc("cs", "Computer Science - BSc (Hons) (CK401)", "28,314", Y4, "علوم الحاسب: البرمجة والخوارزميات والشبكات وقواعد البيانات", "Computer science: programming, algorithms, networks and databases")
ucc("ds", "Data Science and Artificial Intelligence - BSc (Hons) (CK411)", "28,314", Y4, "علوم البيانات والذكاء الاصطناعي", "Data science and artificial intelligence")
ucc("eng", "Engineering - BE (Hons) (CK600)", "28,314", Y4, "مدخل عام للهندسة ثم اختيار التخصص", "Common entry to engineering, then a specialisation")
ucc("bus", "Commerce - BComm (Hons) (CK201)", "22,814", Y4, "التجارة وإدارة الأعمال", "Commerce and business")
ucc("bus", "Business Information Systems - BSc (Hons) (CK203)", "22,814", Y4, "نظم المعلومات الإدارية: الأعمال مع التكنولوجيا", "Business information systems: business with technology")
ucc("law", "Law (Pathways) - BCL (Hons) (CK301)", "22,814", ("3 أو 4 سنوات", "3 or 4 years"), "بكالوريوس القانون المدني (BCL) بمسارات مختلفة", "Bachelor of Civil Law (BCL) with several pathways")
ucc("pol", "Government and Political Science - BSc (Hons) (CK122)", "19,514", Y4, "الحكم والعلوم السياسية", "Government and political science")
ucc("arch", "Architecture - BSc (Hons) (CK606)", "28,314", Y4, "العمارة (برنامج مشترك بين جامعة كورك وجامعة MTU)", "Architecture")
ucc("psych", "Applied Psychology - BA (Hons) (CK120)", "25,214", ("3 سنوات", "3 years"), "علم النفس التطبيقي", "Applied psychology",
    ("التقديم لعام 2027/2028 يفتح 1 ديسمبر 2026 ويغلق مبكراً في 20 مارس 2027 لهذا البرنامج", "Applications for 2027/2028: 1 December 2026 - 20 March 2027 (this programme closes early)"))
ucc("physio", "Nutritional Sciences - BSc (Hons) (CK504)", "28,314", Y4, "علوم التغذية", "Nutritional sciences")

# ---------------- Germany: Deggendorf Institute of Technology, European Campus Rottal-Inn (Pfarrkirchen)
DIT_FEE = ("500 يورو للفصل لغير الأوروبيين (رسوم خدمة؛ لا توجد رسوم دراسية)", "€500 per semester for non-EU students (service fee; no tuition)")
DIT_ADM = ("رسوم طلب 60 يورو مرة واحدة لغير الأوروبيين، ورسوم اتحاد الطلاب 82 يورو للفصل؛ شروط القبول في صفحة البرنامج على DAAD",
           "One-time €60 application fee for non-EU applicants and €82 student union fee per semester; admission rules on the DAAD programme page")
DIT_DL = ("للدراسة في أكتوبر 2027: التقديم من 15 أبريل حتى 15 يوليو 2027", "For October 2027: apply 15 April - 15 July 2027")
DIT_HOW = ("التقديم أونلاين على بوابة جامعة ديغندورف التقنية (DIT)", "Apply online on the Deggendorf Institute of Technology portal")
DUR7 = ("3.5 سنوات (7 فصول، 210 ساعة معتمدة)", "3.5 years (7 semesters, 210 credits)")
DIT_FEES = "https://ec.th-deg.de/en/students/documents/application-and-service-fees"
ECRI = "Deggendorf Institute of Technology (European Campus Rottal-Inn)"
for field, name, deg, url, other in [
    ("bus", "International Tourism Management / Health & Medical Tourism", BA_,
     "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/4595/",
     ("إدارة السياحة الدولية مع تخصص السياحة الصحية والعلاجية", "International tourism management with health and medical tourism")),
    ("cs", "Health Informatics", BSC,
     "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/4822/",
     ("المعلوماتية الصحية: البرمجة ونظم المعلومات في القطاع الصحي", "Health informatics: programming and information systems in healthcare")),
    ("eng", "Industrial Engineering", BENG,
     "https://www.myguide.de/en/international-programmes-bachelor/detail/technische-hochschule-deggendorf-beng-industrial-engineering-4668/?ip-id=4668",
     ("الهندسة الصناعية: الهندسة مع الإدارة والإنتاج", "Industrial engineering: engineering with management and production")),
    ("eng", "Building Products and Processes", BENG,
     "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/8439",
     ("منتجات وعمليات البناء: مواد البناء وتقنيات التصنيع", "Building products and processes: building materials and manufacturing")),
]:
    add("de", field, name, ECRI, "Pfarrkirchen", deg, DUR7, DIT_FEE, DIT_ADM, DIT_DL, NP, other, DIT_HOW, url, DIT_FEES)

add("de", "pol", "Liberal Arts and Sciences", "University of Freiburg (University College Freiburg)", "Freiburg", ("بكالوريوس (BA/BSc)", "Bachelor's degree (BA/BSc)"),
    ("4 سنوات (8 فصول، 240 ساعة معتمدة)", "4 years (8 semesters, 240 credits)"),
    ("1,500 يورو للفصل لغير الأوروبيين، زائد مساهمة الفصل 190 يورو", "€1,500 per semester for non-EU students, plus a €190 semester contribution"),
    ("برنامج انتقائي (حوالي 80 مقعداً): مقال تقديم وخطاب دافع (500 كلمة كحد أقصى لكل منهما) واختبار OSA", "Selective (about 80 places): application essay and motivation letter (max 500 words each) and the OSA test"),
    ("لغير الأوروبيين: من 1 يونيو حتى 15 يوليو 2027", "Non-EU: 1 June - 15 July 2027"),
    ("الإنجليزية مستوى B2 (مثل IELTS 5.5 أو PTE 59 أو TOEFL iBT 4.0 بالمقياس الجديد)، والألمانية A2 يجب الوصول لها أثناء الدراسة",
     "English B2 (e.g. IELTS 5.5, PTE 59 or TOEFL iBT 4.0 on the new scale); German A2 must be reached during the programme"),
    ("العلوم والآداب الحرة: مسارات الحوكمة، الثقافة والتاريخ، الأرض والبيئة، علوم الحياة", "Liberal arts and sciences: governance, culture and history, earth and environment, life sciences"),
    ("التقديم المباشر على موقع University College Freiburg", "Apply directly on University College Freiburg's site"),
    "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/4368/")

# ---------------- Austria: WU Vienna
add("at", "bus", "Business and Economics (BBE)", "WU Vienna University of Economics and Business", "Vienna", BSC,
    ("3 سنوات (6 فصول، 180 ساعة معتمدة)", "3 years (6 semesters, 180 credits)"),
    ("1,453.44 يورو سنوياً لغير الأوروبيين (726.72 يورو كل فصل دراسي) زائد رسوم اتحاد الطلاب ÖH",
     "€1,453.44 a year for non-EU students (€726.72 per semester) plus the ÖH student union fee"),
    ("240 مقعداً في 2027/2028؛ اختبار تقييم ذاتي أونلاين (OSA) ثم امتحان قبول إذا زاد عدد المتقدمين", "240 places in 2027/2028; online self-assessment (OSA), then an entrance exam if needed"),
    ("التسجيل من 1 مارس حتى 24 مايو 2027", "Registration 1 March - 24 May 2027"),
    NP,
    ("بكالوريوس إدارة الأعمال والاقتصاد بالكامل بالإنجليزية", "Business and economics bachelor's fully in English"),
    ("التسجيل أونلاين في إجراءات الاختيار بجامعة WU ضمن الموعد", "Register online for WU's selection procedure within the window"),
    "https://www.wu.ac.at/en/programs/bachelors-programs/business-and-economics/overview/selection-procedure-bbe-1",
    "https://www.wu.ac.at/studium/bachelor/business-and-economics/ueberblick/selection-procedure-bbe/entrance-exam")

# ---------------- Greece: National and Kapodistrian University of Athens (first English-taught bachelor's at a Greek public university)
add("gr", "pol", "BA in the Archaeology, History, and Literature of Ancient Greece", "National and Kapodistrian University of Athens", "Athens", BA_,
    ("4 سنوات (8 فصول، 248 ساعة معتمدة)", "4 years (8 semesters, 248 credits)"),
    ("6,000 يورو سنوياً، على قسطين (نهاية يونيو ونهاية يناير)", "€6,000 a year, in two instalments (end of June and end of January)"),
    ("شهادة ثانوية أو IB بمتوسط استرشادي 70% أو ما يعادله؛ خطاب شخصي وسيرة ذاتية؛ قد يُطلب عربون لتأكيد القبول",
     "Secondary school certificate or IB with an indicative 70% average; personal statement and CV; a deposit may be required"),
    ("موعد 2027/2028 غير منشور بعد، ونموذج التقديم مفتوح لدفعة 2027/2028؛ في 2026/2027 كان الموعد 1 أغسطس (ومنه من يحتاج تأشيرة D1.1)",
     "2027/2028 deadline not published yet; the form is open for 2027/2028; for 2026/2027 it was 1 August (including D1.1 visa applicants)"),
    ("TOEFL 88 (Listening 17 وWriting 17 وReading 18 وSpeaking 20) أو IELTS 6.5 (5.5 لكل جزء) أو FCE B2",
     "TOEFL 88 (Listening 17, Writing 17, Reading 18, Speaking 20) or IELTS 6.5 (5.5 per component) or FCE B2"),
    ("الآثار والتاريخ والأدب اليوناني القديم (علوم إنسانية، مصنّف هنا مع العلوم الاجتماعية)؛ أول بكالوريوس بالإنجليزية في جامعة يونانية حكومية",
     "Archaeology, history and literature of ancient Greece (humanities, listed here with social sciences); the first English-taught bachelor's at a Greek public university"),
    ("التقديم أونلاين على موقع البرنامج baag.uoa.gr مع الشهادات وترجمتها للإنجليزية", "Apply online on baag.uoa.gr with certificates and English translations"),
    "https://baag.uoa.gr/admission-fees/", "https://baag.uoa.gr/application")

# ---------------- Cyprus: University of Cyprus (YUFE joint bachelor)
add("cy", "pol", "YUFE Bachelor in Urban Sustainability Studies", "University of Cyprus", "Nicosia", BSC,
    ("3 سنوات (180 ساعة معتمدة)", "3 years (180 credits)"),
    ("5,300 يورو سنوياً للجميع حسب ما أعلنته الجامعة (للتحقق من صفحة الجامعة)", "€5,300 a year for everyone as announced by the university (to verify on the university's page)"),
    ("حوالي 30 مقعداً في أول دفعة؛ عربون 500 يورو غير مسترد عند قبول المقعد (للتحقق)", "About 30 places in the first intake; €500 non-refundable deposit on accepting a place (to verify)"),
    ("التقديم لعام 2027/2028 مفتوح من 3 نوفمبر 2026 على YUFE Virtual Campus؛ موعد غير الأوروبيين لم يُنشر بعد (في 2026 كان 14 يونيو)",
     "Applications for 2027/2028 are open on the YUFE Virtual Campus (since November 2026); non-EEA deadline not published yet (14 June in 2026)"),
    NP,
    ("الاستدامة الحضرية: السنة الأولى في جامعة قبرص ثم ثلاثة تخصصات فرعية، اثنان منها على الأقل في جامعات أخرى في تحالف YUFE (تكاليف سكن ومعيشة إضافية في الخارج)",
     "Urban sustainability: first year at the University of Cyprus, then three minors, at least two at other YUFE universities (extra housing and living costs abroad)"),
    ("التقديم أونلاين على YUFE Virtual Campus مع اختيار جامعة قبرص كجامعة البداية", "Apply online on the YUFE Virtual Campus, choosing the University of Cyprus as starting university"),
    "https://cna.org.cy/en/press_releases/article/10401663/press-release-university-of-cyprus", "https://www.yufe.eu/?p=5651")

# ---------------- Portugal: ISEG (University of Lisbon) and Iscte
IS_FEE = ("7,500 يورو سنوياً للطلاب الدوليين الجدد (2026/2027، مبدئية)، على 10 أقساط", "€7,500 a year for new international students (2026/2027, provisional), in 10 instalments")
IS_DL = ("المرحلة الأولى 4 يناير - 5 فبراير 2027 (امتحان الرياضيات 19 فبراير 2027)، والثانية 5 أبريل - 21 مايو 2027 بدون امتحانات",
         "1st call 4 January - 5 February 2027 (maths exam 19 February 2027); 2nd call 5 April - 21 May 2027 without exams")
IS_EN = ("مستوى B2 على الأقل (لا يُطلب من الدول الناطقة بالإنجليزية أو البرتغالية)", "At least B2 (not required from English- or Portuguese-speaking countries)")
IS_HOW = ("التقديم أونلاين على بوابة ISEG مع خطاب دافع (صفحة واحدة) وسيرة ذاتية وإقرار الأهلية ورسوم 60 يورو", "Apply online on ISEG's portal with a one-page motivation letter, CV, eligibility declaration and the €60 fee")
IS_SRC = "https://www.iseg.ulisboa.pt/secretaria/en/?p=56"
for field, name, seats, url, other in [
    ("econ", "Economics (English)", "10", "https://www.iseg.ulisboa.pt/?p=437", ("الاقتصاد بالكامل بالإنجليزية", "Economics fully in English")),
    ("bus", "Management (English)", "10", "https://www.iseg.ulisboa.pt/?p=439", ("الإدارة بالكامل بالإنجليزية", "Management fully in English")),
    ("econ", "Finance", "5", IS_SRC, ("التمويل بالكامل بالإنجليزية", "Finance fully in English")),
]:
    add("pt", field, name, "ISEG Lisbon School of Economics and Management (University of Lisbon)", "Lisbon", BA_,
        ("3 سنوات (180 ساعة معتمدة)", "3 years (180 credits)"), IS_FEE,
        (f"{seats} مقاعد للطلاب الدوليين في كل مرحلة؛ امتحان رياضيات (الحد الأدنى 14 من 20) لمن ليس لديه اختبار معادل",
         f"{seats} international places per call; maths entrance exam (minimum 14/20) for applicants without an equivalent test"),
        IS_DL, IS_EN, other, IS_HOW, url, IS_SRC)

add("pt", "pol", "Bachelor Degree in International Studies", "Iscte - University Institute of Lisbon", "Lisbon", BA_,
    ("3 سنوات (180 ساعة معتمدة)", "3 years (180 credits)"),
    ("5,500 يورو سنوياً لغير الأوروبيين", "€5,500 a year for non-EU students"),
    ("رسوم طلب 70 يورو، ورسوم حجز المقعد لغير الأوروبيين تُدفع خلال 5 أيام من النتيجة وتُخصم من الرسوم", "€70 application fee; non-EU seat reservation fee paid within 5 days of the result and deducted from tuition"),
    ("مواعيد 2027/2028 غير منشورة بعد؛ في 2026/2027 كانت الجولة الأولى من 15 ديسمبر 2025 حتى 14 يناير 2026 ثم جولات أخرى حتى يونيو",
     "2027/2028 dates not published yet; in 2026/2027 the first round ran 15 December 2025 - 14 January 2026, with further rounds to June"),
    NP,
    ("الدراسات الدولية: العلاقات الدولية والعلوم السياسية والتاريخ والاقتصاد والقانون، برنامج جديد بالكامل بالإنجليزية من 2026/2027",
     "International studies: international relations, political science, history, economics and law; a new programme fully in English from 2026/2027"),
    ("التقديم أونلاين على منصة Fénix+ ضمن مسابقة الطالب الدولي حتى الساعة 17:00 بتوقيت البرتغال في آخر يوم", "Apply online on Fénix+ in the International Student competition by 17:00 Portuguese time on the last day"),
    "https://www.iscte-iul.pt/study/degree/0527", "https://www.iscte-iul.pt/cursos/candidaturas")

C = {"ie": ("أيرلندا", "ireland"), "de": ("ألمانيا", "germany"), "at": ("النمسا", "austria"),
     "gr": ("اليونان", "greece"), "cy": ("قبرص", "cyprus"), "pt": ("البرتغال", "portugal")}

if __name__ == "__main__":
    for cc, lst in B.items():
        append_ba(C[cc][0], C[cc][1], lst, REVIEWED)
    print("ba_more3:", sum(map(len, B.values())), "bachelor's")
