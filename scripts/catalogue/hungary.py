# Hungary: English-taught master's programmes at public universities (state-run, or state-founded
# universities run by public-interest trusts since 2021). Self-funded route only; Stipendium Hungaricum is separate.
# USD fees (University of Debrecen) are converted to EUR at about 1.11 USD per EUR (November 2026).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, MSC2, SEM3, SEM4

KEKVA = ("جامعة حكومية الأصل يديرها صندوق عام منذ 2021، وعادت للمشاركة في Erasmus+ في أكتوبر 2026",
         "A state-founded university run by a public-interest trust since 2021; it rejoined Erasmus+ in October 2026")
LIV_BUD = ("حوالي 500 - 800 يورو شهرياً شاملة السكن في بودابست (تقديرات أدلة دراسة، لا يوجد رقم رسمي فيما راجعناه)",
           "About €500 - 800 per month including housing in Budapest (study-guide estimates; no official figure in what we reviewed)")
LIV_DEB = ("حوالي 800 دولار (حوالي 720 يورو) شهرياً شاملة السكن المشترك حسب جامعة دبرتسن", "About $800 (about €720) per month including shared housing per the University of Debrecen")
SEM_EUR = lambda v: (f"{v} يورو للفصل الدراسي لغير الأوروبيين (2026/2027)", f"€{v} per semester for non-EU students (2026/2027)")
R = []

# ---------- Budapest University of Technology and Economics (BME) ----------
BME = "Budapest University of Technology and Economics (BME)"
BME_FEES = "https://xplore.bme.hu/tuition-fees/"
BME_ADMIT = "https://xplore.bme.hu/admission"
BME_DL = ("لدفعة فبراير 2027: 15 أكتوبر - 15 نوفمبر 2026؛ ولدفعة سبتمبر كان التقديم 1 أبريل - 15 مايو 2026 (مواعيد 2027 للتحقق)",
          "February 2027 intake: 15 October - 15 November 2026; for the September intake applications ran 1 April - 15 May 2026 (2027 dates to verify)")
BME_ADM = ("رسوم طلب 150 يورو", "€150 application fee")
BME_EN = ("مستوى B2: مثل IELTS 5.5 أو TOEFL iBT 72 أو Duolingo 100 أو شهادة دراسة بالإنجليزية؛ بعض البرامج تطلب أعلى", "B2: e.g. IELTS 5.5, TOEFL iBT 72, Duolingo 100 or a medium-of-instruction certificate; some programmes ask for more")
BME_HOW = ("منصة e-admission للجامعة؛ مع سيرة ذاتية وخطاب دافع وخطابي توصية", "University e-admission platform; with CV, motivation letter and 2 recommendation letters")
def bme(field, name, fee, other):
    R.append(P(field=field, name=name, uni=BME, city="Budapest", deg=("Master of Science (MSc)", "Master of Science (MSc)"), dur=SEM4,
               fee=SEM_EUR(fee), adm=BME_ADM, dl=BME_DL, en=BME_EN, other=other, how=BME_HOW, living=LIV_BUD, house=NP,
               src=BME_FEES, req=BME_ADMIT, req_note=("صفحة القبول: المستندات وشروط اللغة", "Admission page: documents and language requirements"),
               apply=BME_ADMIT, apply_note=("صفحة القبول ورابط منصة التقديم", "Admission page and application platform link")))

bme("cs", "Computer Science Engineering", "3,500", ("كلية الهندسة الكهربائية والمعلوماتية؛ 3,200 يورو لخريجي BME", "Faculty of Electrical Engineering and Informatics; €3,200 for BME graduates"))
bme("eng", "Electrical Engineering", "3,500", ("كلية الهندسة الكهربائية والمعلوماتية؛ 3,200 يورو لخريجي BME", "Faculty of Electrical Engineering and Informatics; €3,200 for BME graduates"))
bme("eng", "Mechanical Engineering Modelling", "4,000", ("كلية الهندسة الميكانيكية", "Faculty of Mechanical Engineering"))
bme("eng", "Vehicle Engineering", "3,500", ("الرسم = 1,400 يورو أساسي + 70 يورو لكل ساعة معتمدة (3,500 يورو لفصل من 30 ساعة)", "Fee = €1,400 base + €70 per credit (€3,500 for a 30-credit semester)"))
bme("bus", "Engineering Management", "3,500", ("كلية العلوم الاقتصادية والاجتماعية", "Faculty of Economic and Social Sciences"))
bme("bus", "Management and Leadership", "2,200", ("كلية العلوم الاقتصادية والاجتماعية؛ درجة MA", "Faculty of Economic and Social Sciences; MA degree"))
bme("bus", "Finance", "2,200", ("كلية العلوم الاقتصادية والاجتماعية؛ درجة MA", "Faculty of Economic and Social Sciences; MA degree"))

# ---------- Eötvös Loránd University (ELTE) ----------
ELTE = "Eötvös Loránd University (ELTE)"
ELTE_DL = ("30 أبريل لدفعة سبتمبر", "30 April for the September intake")
ELTE_ADM = ("رسوم طلب 80 - 150 يورو (الصفحات الرسمية مختلفة - للتحقق)", "€80 - 150 application fee (official pages differ - to verify)")
ELTE_EN = ("مستوى متوسط على الأقل في الإنجليزية؛ تُقيّم في امتحان القبول والمقابلة", "At least intermediate English; assessed in the entrance exam and interview")
ELTE_HOW = ("التقديم الإلكتروني، ثم امتحان قبول ومقابلة عبر الإنترنت (حوالي 20 دقيقة)", "Online application, then an online entrance exam and interview (about 20 minutes)")
ELTE_HOUSE = ("خطاب القبول لا يضمن سكناً؛ التقديم على السكن منفصل عبر مركز سكن ELTE", "The admission letter does not guarantee housing; apply separately through the ELTE Dormitory Centre")
ELTE_PAY = ("الرسوم تُدفع قبل بداية الفصل أو قبل موعد إجراءات التأشيرة؛ لا توجد منح من الكلية للدوليين", "Fees are paid before the semester starts or before the visa deadline; the faculty offers no scholarships to international students")
R.append(P(field="cs", name="Computer Science", uni=ELTE, city="Budapest", deg=("MSc (Computer Scientist)", "MSc (Computer Scientist)"), dur=SEM4,
           fee=SEM_EUR("3,200"), adm=ELTE_ADM, dl=ELTE_DL, en=ELTE_EN,
           other=("يتطلب بكالوريوس في علوم الحاسب أو 60 ساعة على الأقل في المعلوماتية والرياضيات؛ تخصصات منها الأمن السيبراني والذكاء الاصطناعي؛ " + ELTE_PAY[0],
                  "Requires a bachelor's in computer science or at least 60 credits in informatics and mathematics; tracks include cybersecurity and AI; " + ELTE_PAY[1]),
           how=ELTE_HOW, living=LIV_BUD, house=ELTE_HOUSE, src="https://csmsc.elte.hu/",
           req="https://csmsc.elte.hu/", req_note=("صفحة برامج ماجستير علوم الحاسب والبيانات في ELTE", "ELTE computer science and data science MSc page"),
           apply="https://csmsc.elte.hu/", apply_note=("معلومات التقديم والرسوم", "Application and fee information")))
R.append(P(field="ds", name="Data Science", uni=ELTE, city="Budapest", deg=("MSc (Data Scientist)", "MSc (Data Scientist)"), dur=SEM4,
           fee=SEM_EUR("3,200"), adm=("رسوم طلب 80 يورو", "€80 application fee"), dl=ELTE_DL, en=ELTE_EN,
           other=("أول قسم صناعي في ELTE بدعم من Deutsche Telekom؛ " + ELTE_PAY[0], "ELTE's first industrial department, supported by Deutsche Telekom; " + ELTE_PAY[1]),
           how=ELTE_HOW, living=LIV_BUD, house=ELTE_HOUSE, src="https://www.inf.elte.hu/data-science-msc-elte",
           req="https://www.inf.elte.hu/data-science-msc-elte", req_note=("صفحة البرنامج: الشروط والرسوم والموعد", "Programme page: requirements, fees and deadline"),
           apply="https://apply.elte.hu/enter/280", apply_note=("صفحة البرنامج على منصة التقديم", "Programme page on the application platform")))
R.append(P(field="ph", name="Health Policy, Planning and Financing", uni=ELTE, city="Budapest", deg=("MSc", "MSc"), dur=NP,
           fee=SEM_EUR("3,500"), adm=("رسوم طلب 100 يورو حتى 15 يناير 2027، ثم 150 يورو، ثم 200 يورو في الفترة الأخيرة", "€100 application fee until 15 January 2027, then €150, then €200 in the last period"),
           dl=("لدفعة سبتمبر 2027: 1 أكتوبر - 15 نوفمبر 2026، 20 نوفمبر 2026 - 15 يناير 2027، 20 يناير - 30 أبريل 2027، 5 - 31 مايو 2027",
               "September 2027 intake: 1 Oct - 15 Nov 2026, 20 Nov 2026 - 15 Jan 2027, 20 Jan - 30 Apr 2027, 5 - 31 May 2027"),
           en=NP,
           other=("تنبيه: سياسات واقتصاديات صحية أكثر منه صحة عامة تقليدية؛ يجمع الاقتصاد والسياسات والتمويل والإحصاء",
                  "Warning: health policy and economics rather than classic public health; combines economics, policy, finance and statistics"),
           how=("التقديم الإلكتروني عبر ELTE", "Online application through ELTE"), living=LIV_BUD, house=ELTE_HOUSE,
           src="https://www.elte.hu/en/node/320604", req="https://www.elte.hu/en/node/320604",
           req_note=("صفحة البرنامج: الرسوم وفترات التقديم", "Programme page: fees and application periods"),
           apply="https://www.elte.hu/en/node/320604", apply_note=("التقديم من صفحة البرنامج", "Apply from the programme page")))

# ---------- Corvinus University of Budapest ----------
COR = "Corvinus University of Budapest"
COR_APPLY = "https://www.uni-corvinus.hu/post/landing-page/application/application-information/"
COR_DL = ("لدفعة سبتمبر 2027: آخر موعد لمن يحتاج تأشيرة 24 مايو 2027؛ موعد التقديم المبكر 30 نوفمبر 2026",
          "September 2027 intake: final deadline for visa-requiring nationals 24 May 2027; early-bird deadline 30 November 2026")
COR_FEE = ("3,700 يورو للفصل الدراسي لغير الأوروبيين", "€3,700 per semester for non-EEA students")
COR_ADM = ("رسوم طلب 95 يورو غير مستردة", "€95 non-refundable application fee")
def cor(field, name, url, other):
    R.append(P(field=field, name=name, uni=COR, city="Budapest", deg=("Master of Science (MSc)", "Master of Science (MSc)"), dur=SEM4,
               fee=COR_FEE, adm=COR_ADM, dl=COR_DL, en=NP, other=(other[0] + "؛ " + KEKVA[0], other[1] + "; " + KEKVA[1]),
               how=("التقديم الإلكتروني على بوابة المتقدمين بتمويل ذاتي", "Online application on the self-funded applicants portal"),
               living=LIV_BUD, house=NP, src=url, req=url, req_note=("صفحة البرنامج", "Programme page"),
               apply=COR_APPLY, apply_note=("معلومات التقديم والمواعيد للدوليين", "Application information and deadlines for international applicants")))

cor("bus", "Finance", "https://www.uni-corvinus.hu/post/landing-page/masters/msc-in-finance/?lang=en",
    ("ضمن أفضل 70 ماجستير مالية في العالم حسب Financial Times", "Among the top 70 master's in finance worldwide per the Financial Times"))
cor("bus", "Marketing", "https://international-application.uni-corvinus.hu/marketing",
    ("خصم 10% على رسوم السنة الأولى للمسجلين بتمويل ذاتي (حسب الجامعة)", "10% discount on the first year's fee for self-funded students (per the university)"))
cor("cs", "Business Informatics", "https://corvinus-university.dreamapply.com/courses",
    ("نظم المعلومات وإدارة المشاريع وتطبيقات الأعمال", "Information systems, project management and business applications"))

# ---------- University of Debrecen ----------
DEB = "University of Debrecen"
DEB_FEES = "https://www.edu.unideb.hu/p/tuition-fee-application-entrance-fee"
DEB_APPLY = "https://edu.unideb.hu/page.php?id=9"
DEB_DL = ("لدفعة سبتمبر 2027: 15 مايو 2027 لكل البرامج حسب صفحة التقديم الرسمية (أبكر من موعد 2026 الذي كان 15 يونيو)؛ ولدفعة فبراير 2027 كان آخر موعد 1 نوفمبر 2026",
          "September 2027 intake: 15 May 2027 for all programmes per the official application page (earlier than in 2026, when it was mid-June); for the February 2027 intake the deadline was 1 November 2026")
DEB_ADM = ("رسوم طلب 150 دولار + رسوم إجراءات القبول 350 دولار (غير مستردة)", "$150 application fee + $350 entrance procedure fee (non-refundable)")
DEB_HOW = ("التقديم الإلكتروني، ثم مقابلة قبول عبر الإنترنت تقيّم الخلفية الدراسية والإنجليزية", "Online application, then an online entrance interview assessing background and English")
DEB_EN = ("تُقيّم الإنجليزية في مقابلة القبول", "English is assessed in the entrance interview")
USD = lambda e, u, chk="": (f"حوالي {e} يورو سنوياً ({u} دولار أمريكي سنوياً؛ التحويل تقريبي){chk}", f"About €{e} per year (${u} per year; approximate conversion){' (to verify)' if chk else ''}")
def deb(field, name, fee, src, other, dur=NP, chk=False):
    R.append(P(field=field, name=name, uni=DEB, city="Debrecen", deg=("Master of Science (MSc)", "Master of Science (MSc)"), dur=dur,
               fee=fee, adm=DEB_ADM, dl=DEB_DL, en=DEB_EN, other=(other[0] + "؛ " + KEKVA[0], other[1] + "; " + KEKVA[1]),
               how=DEB_HOW, living=LIV_DEB, house=NP, src=src, req=src, req_note=("صفحة البرنامج أو جدول الرسوم الرسمي", "Programme page or official fee table"),
               apply=DEB_APPLY, apply_note=("صفحة التقديم والقبول ومواعيدها", "Application and admission page with deadlines")))

deb("cs", "Artificial Intelligence", USD("6,750", "7,500"), "https://edu.unideb.hu/p/artificial-intelligence-msc",
    ("يغطي تعلم الآلة والتعلم العميق والبيانات الضخمة والروبوتات", "Covers machine learning, deep learning, big data and robotics"))
deb("cs", "Computer Science", USD("6,750", "7,500", " (للتحقق)"), DEB_FEES,
    ("كلية المعلوماتية", "Faculty of Informatics"))
deb("ds", "Data Science", USD("6,750", "7,500", " (للتحقق)"), DEB_FEES,
    ("كلية المعلوماتية", "Faculty of Informatics"))
deb("eng", "Mechanical Engineering", USD("7,200", "8,000", " (للتحقق)"), DEB_FEES,
    ("كلية الهندسة", "Faculty of Engineering"))
deb("eng", "Electrical Engineering", USD("7,200", "8,000", " (للتحقق)"), DEB_FEES,
    ("كلية الهندسة", "Faculty of Engineering"))
deb("ph", "Public Health", USD("7,200", "8,000"), "https://etk.unideb.hu/en/node/1124",
    ("كلية الصحة العامة؛ مقبول بشهادة جامعية في الطب أو العلوم الصحية أو ما يعادلها؛ 6,000 دولار لخريجي جامعة دبرتسن",
     "Faculty of Public Health; university degree (MD, MSc, BSc, MA or equivalent) required; $6,000 for University of Debrecen graduates"),
    dur=("3 أو 4 فصول دراسية", "3 or 4 semesters"))

# ---------- University of Szeged ----------
R.append(P(field="cs", name="Computer Science", uni="University of Szeged", city="Szeged", deg=("Master of Science (MSc)", "Master of Science (MSc)"), dur=SEM4,
           fee=("4,100 يورو للفصل الدراسي", "€4,100 per semester"),
           adm=("رسوم طلب 79 يورو + رسوم امتحان قبول 100 يورو", "€79 application fee + €100 entrance exam fee"),
           dl=("لدفعة سبتمبر 2026 كان التقديم 1 يناير - 15 مايو 2026، ولدفعة الربيع 15 أكتوبر - 15 نوفمبر (مواعيد 2027 للتحقق)",
               "For September 2026 applications ran 1 January - 15 May 2026, and for the spring intake 15 October - 15 November (2027 dates to verify)"),
           en=("مستوى B2 (TOEFL أو ما يعادله)", "B2 level (TOEFL or equivalent)"),
           other=("يتطلب بكالوريوس في علوم الحاسب؛ خطابا توصية؛ امتحان قبول؛ " + KEKVA[0], "Requires a bachelor's in computer science; 2 recommendation letters; entrance exam; " + KEKVA[1]),
           how=("منصة DreamApply للجامعة", "University DreamApply platform"), living=NP, house=NP,
           src="https://u-szeged.hu/english/study-programmes/computer-science-msc",
           req="https://u-szeged.hu/english/study-programmes/computer-science-msc", req_note=("صفحة البرنامج: الشروط والرسوم", "Programme page: requirements and fees"),
           apply="https://apply.u-szeged.hu/courses/course/357", apply_note=("صفحة البرنامج على منصة DreamApply", "Programme page on DreamApply")))

write("المجر", "Hungary", "hungary", R)
