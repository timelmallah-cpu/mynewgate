# Hungary: English-taught bachelor's programmes and long-cycle Medicine (MD) at public universities.
# USD fees are converted to EUR at about 1.11 USD per EUR (November 2026); the USD figure is always shown too.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP

S6 = ("6 فصول دراسية (3 سنوات)", "6 semesters (3 years)")
S7 = ("7 فصول دراسية (3.5 سنوات)", "7 semesters (3.5 years)")
S8 = ("8 فصول دراسية (4 سنوات)", "8 semesters (4 years)")
MED = ("12 فصلاً دراسياً (6 سنوات)", "12 semesters (6 years)")
BSC = ("بكالوريوس العلوم (BSc)", "Bachelor of Science (BSc)")
MD = ("دكتور في الطب العام (MD) - برنامج متكامل", "Doctor of General Medicine (MD) - integrated programme")
KEKVA = ("جامعة حكومية الأصل يديرها صندوق عام منذ 2021", "A state-founded university run by a public-interest trust since 2021")
LIV_BUD = ("حوالي 500 - 800 يورو شهرياً شاملة السكن في بودابست (تقديرات أدلة دراسة، لا يوجد رقم رسمي فيما راجعناه)",
           "About €500 - 800 per month including housing in Budapest (study-guide estimates; no official figure in what we reviewed)")
LIV_DEB = ("حوالي 800 دولار (حوالي 720 يورو) شهرياً شاملة السكن المشترك حسب جامعة دبرتسن", "About $800 (about €720) per month including shared housing per the University of Debrecen")
SEM = lambda v, chk="": (f"{v} يورو للفصل الدراسي لغير الأوروبيين (2026/2027){chk}", f"€{v} per semester for non-EU students (2026/2027){' (to verify)' if chk else ''}")
USDY = lambda e, u, chk="": (f"حوالي {e} يورو سنوياً ({u} دولار أمريكي سنوياً؛ التحويل تقريبي){chk}", f"About €{e} per year (${u} per year; approximate conversion){' (to verify)' if chk else ''}")
USDS = lambda e, u, chk="": (f"حوالي {e} يورو للفصل ({u} دولار أمريكي للفصل؛ التحويل تقريبي){chk}", f"About €{e} per semester (${u} per semester; approximate conversion){' (to verify)' if chk else ''}")
R = []


def add(field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, living, house, src, apply, req=None):
    R.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other,
               how=how, living=living, house=house, src=src, req=req or src,
               req_note=("الصفحة الرسمية: الشروط والرسوم", "Official page: requirements and fees"),
               apply=apply, apply_note=("صفحة التقديم الرسمية", "Official application page")))


# ---------- Budapest University of Technology and Economics (BME) ----------
BME = "Budapest University of Technology and Economics (BME)"
BME_FEES, BME_ADMIT = "https://xplore.bme.hu/tuition-fees/", "https://xplore.bme.hu/admission"
BME_DL = ("لدفعة سبتمبر كان التقديم 1 أبريل - 15 مايو 2026، ولدفعة فبراير 15 أكتوبر - 15 نوفمبر (مواعيد 2027 للتحقق)",
          "For the September intake applications ran 1 April - 15 May 2026; February intake 15 October - 15 November (2027 dates to verify)")
BME_ADM = ("رسوم طلب 150 يورو", "€150 application fee")
BME_EN = ("مستوى B2: مثل IELTS 5.5 أو TOEFL iBT 72 أو Duolingo 100", "B2: e.g. IELTS 5.5, TOEFL iBT 72 or Duolingo 100")
BME_HOW = ("منصة e-admission للجامعة، ثم امتحان قبول في الرياضيات والفيزياء غالباً (للتحقق حسب البرنامج)",
           "University e-admission platform, usually followed by an entrance exam in mathematics and physics (to verify per programme)")
for f, n, fee, dur in [("cs", "Computer Science Engineering", "3,200", S7), ("eng", "Electrical Engineering", "3,200", S7),
                       ("eng", "Mechanical Engineering", "3,500", S7), ("eng", "Civil Engineering", "3,200", S8)]:
    add(f, n, BME, "Budapest", BSC, dur, SEM(fee), BME_ADM, BME_DL, BME_EN,
        ("أغلب برامج البكالوريوس في BME مدتها 7 فصول، والهندسة المدنية 8 فصول", "Most BME bachelor's last 7 semesters; Civil Engineering 8"),
        BME_HOW, LIV_BUD, NP, BME_FEES, BME_ADMIT)

# ---------- Eötvös Loránd University (ELTE) ----------
ELTE = "Eötvös Loránd University (ELTE)"
add("cs", "Computer Science BSc", ELTE, "Budapest", BSC, S6, SEM("3,200"), ("رسوم طلب 150 يورو", "€150 application fee"),
    ("30 أبريل لدفعة سبتمبر؛ توجد دفعة فبراير أيضاً", "30 April for the September intake; there is also a February intake"),
    ("مستوى متوسط على الأقل؛ تُقيّم في امتحان القبول والمقابلة", "At least intermediate; assessed in the entrance exam and interview"),
    ("امتحان قبول ومقابلة عبر الإنترنت؛ من لا يصل للمستوى المطلوب يُوجَّه إلى فصل تحضيري (3,200 يورو)",
     "Online entrance exam and interview; applicants below the level are directed to a preparatory semester (€3,200)"),
    ("التقديم الإلكتروني عبر apply.elte.hu مع دفع رسوم الطلب", "Online through apply.elte.hu, paying the application fee"),
    LIV_BUD, ("خطاب القبول لا يضمن سكناً؛ التقديم على السكن منفصل", "The admission letter does not guarantee housing; apply separately"),
    "https://www.elte.hu/en/computer-science-bsc", "https://www.inf.elte.hu/en/node/230499")
add("bus", "Applied Economics BSc", ELTE, "Budapest", BSC, NP, SEM("2,700"),
    ("رسوم طلب من 50 إلى 200 يورو حسب موعد التقديم (كلما قدّمت أبكر كانت أقل)", "€50 to €200 application fee depending on when you apply (earlier is cheaper)"),
    ("التقديم حتى 31 مايو تقريباً حسب جدول رسوم الطلب (للتحقق لعام 2027)", "Applications until about 31 May per the fee schedule (to verify for 2027)"),
    NP, ("كلية العلوم الاجتماعية؛ برنامج في الاقتصاد التطبيقي", "Faculty of Social Sciences; an applied economics programme"),
    ("التقديم الإلكتروني عبر apply.elte.hu", "Online through apply.elte.hu"), LIV_BUD, NP,
    "https://tatk.elte.hu/en/studies/elteconbsc/apply", "https://apply.elte.hu/")

# ---------- Corvinus University of Budapest ----------
COR = "Corvinus University of Budapest"
COR_SRC = "https://www.uni-corvinus.hu/main-page/hello-corvinus/fees-and-payments/tutition-fees/?lang=en"
COR_OTHER = (KEKVA[0] + "؛ تخفيض على رسوم السنة الأولى لبعض المتقدمين حسب الجامعة", KEKVA[1] + "; first-year fee discounts for some applicants per the university")
for f, n, fee, dur, src in [
    ("bus", "Business and Management BSc", SEM("3,300", chk=" (رسوم 2027/2028 للتحقق)"), S7, COR_SRC),
    ("bus", "International Business BSc", ("3,500 يورو للفصل لغير الأوروبيين (للبدء في سبتمبر 2027)", "€3,500 per semester for non-EEA students (September 2027 start)"), S8,
     "https://www.uni-corvinus.hu/post/landing-page/international-business/?lang=en"),
    ("bus", "Applied Economics BSc", SEM("3,300", chk=" (رسوم 2027/2028 للتحقق)"), NP, COR_SRC),
    ("ds", "Data Science in Business BSc", ("فئة هذا البرنامج للتحقق: البرنامج مذكور في دليل الطلاب الدوليين لكنه غير موجود في جدول الرسوم الحالي", "Fee band to verify: the programme is in the international student guide but not in the current fee table"), NP,
     "https://uni-corvinus.hu/downloads/aisp.1qpp4md/international-student-guide.pdf")]:
    add(f, n, COR, "Budapest", BSC, dur, fee, ("رسوم طلب 95 يورو", "€95 application fee"), NP, NP, COR_OTHER,
        ("التقديم عبر منصة DreamApply للجامعة", "Through the university's DreamApply platform"), LIV_BUD, NP, src, "https://corvinus-university.dreamapply.com/")

# ---------- University of Debrecen ----------
DEB = "University of Debrecen"
DEB_FEES, DEB_APPLY = "https://www.edu.unideb.hu/p/tuition-fee-application-entrance-fee", "https://edu.unideb.hu/page.php?id=9"
DEB_DL = ("لدفعة سبتمبر 2027: 15 مايو 2027 حسب صفحة التقديم (للتحقق)؛ بعض البرامج لها دفعة فبراير",
          "September 2027 intake: 15 May 2027 per the application page (to verify); some programmes also start in February")
DEB_ADM = ("رسوم طلب 150 دولار + رسوم إجراءات القبول 350 دولار (غير مستردة)", "$150 application fee + $350 entrance procedure fee (non-refundable)")
DEB_HOW = ("التقديم الإلكتروني، ثم امتحان أو مقابلة قبول عبر الإنترنت", "Online application, then an online entrance exam or interview")
DEB_EN = ("تُقيّم الإنجليزية في مقابلة القبول", "English is assessed in the entrance interview")
DEB_OTHER = (KEKVA[0] + "؛ جدول رسوم البرامج غير الطبية على صفحة الجامعة يحمل عنوان 2025/2026 وأرقامه تختلف عن صفحات أخرى للجامعة",
             KEKVA[1] + "; the non-medical fee table on the university page is headed 2025/2026 and differs from other university pages")
add("med", "Medicine (MD)", DEB, "Debrecen", MD, MED, USDY("15,230", "16,900"), DEB_ADM, DEB_DL, DEB_EN,
    (KEKVA[0] + "؛ رسوم 2026/2027 من صفحة الجامعة؛ امتحان قبول (المواد: غير منشور في المصدر الذي اطلعنا عليه)؛ يوجد برنامج تحضيري في العلوم الطبية الأساسية",
     KEKVA[1] + "; 2026/2027 fee from the university page; entrance exam (subjects: not published in the source we read); a basic medicine preparatory course exists"),
    DEB_HOW, LIV_DEB, NP, DEB_FEES, DEB_APPLY)
add("cs", "Computer Science BSc", DEB, "Debrecen", BSC, S6, USDY("6,300", "7,000"), DEB_ADM, DEB_DL, DEB_EN, DEB_OTHER, DEB_HOW, LIV_DEB, NP, DEB_FEES, DEB_APPLY)
for f, n in [("cs", "Computer Science Engineering BSc"), ("cs", "Business Informatics BSc")]:
    add(f, n, DEB, "Debrecen", BSC, NP, USDY("6,300 - 6,760", "7,000 - 7,500", " (للتحقق)"), DEB_ADM, DEB_DL, DEB_EN, DEB_OTHER, DEB_HOW, LIV_DEB, NP, DEB_FEES, DEB_APPLY)
for n in ["Business Administration and Management BSc", "Commerce and Marketing BSc"]:
    add("bus", n, DEB, "Debrecen", BSC, NP, USDY("5,400 - 6,760", "6,000 - 7,500", " (للتحقق)"), DEB_ADM, DEB_DL, DEB_EN, DEB_OTHER, DEB_HOW, LIV_DEB, NP, DEB_FEES, DEB_APPLY)
for n in ["Electrical Engineering BSc", "Mechanical Engineering BSc", "Mechatronics Engineering BSc", "Civil Engineering BSc",
          "Chemical Engineering BSc", "Vehicle Engineering BSc", "Environmental Engineering BSc", "Engineering Management BSc"]:
    add("eng", n, DEB, "Debrecen", BSC, NP, USDY("6,300 - 6,760", "7,000 - 7,500", " (للتحقق)"), DEB_ADM, DEB_DL, DEB_EN, DEB_OTHER, DEB_HOW, LIV_DEB, NP, DEB_FEES, DEB_APPLY)
add("ph", "Public Health BSc", DEB, "Debrecen", BSC, NP, USDY("5,400", "6,000", " (للتحقق)"), DEB_ADM, DEB_DL, DEB_EN,
    ("كلية الصحة العامة؛ مدة البرنامج غير واضحة في صفحة الرسوم", "Faculty of Public Health; duration not clear on the fee page"), DEB_HOW, LIV_DEB, NP, DEB_FEES, DEB_APPLY)

# ---------- Semmelweis University ----------
SEM_U = "Semmelweis University"
add("med", "General Medicine (MD)", SEM_U, "Budapest", MD, MED, USDS("9,415", "10,450"),
    ("رسوم طلب وامتحان قبول بالدولار (القيمة في قواعد القبول الرسمية)", "Application and entrance exam fee in USD (amount in the official admission rules)"),
    ("حسب قواعد القبول لعام 2026/2027؛ يوجد أكثر من موعد لامتحانات القبول (للتحقق لعام 2027)", "Per the 2026/2027 admission rules; there are several entrance exam rounds (to verify for 2027)"),
    NP, ("أقدم جامعة طبية في المجر؛ امتحان قبول مكتوب عبر الإنترنت ثم مقابلة شفهية؛ الرسوم حسب سنة التسجيل وتُدفع كل فصل",
         "Hungary's oldest medical university; online written entrance tests then an oral interview; fees depend on year of enrolment and are paid each semester"),
    ("التقديم مباشرة أو عبر ممثلين محليين معتمدين من الجامعة", "Apply directly or through the university's officially appointed local representatives"),
    LIV_BUD, NP, "https://semmelweis.hu/registrar/faq-aok-fok-gytk/tuition-fee/", "https://semmelweis.hu/registrar/admission-rules")

# ---------- University of Szeged ----------
SZ = "University of Szeged"
SZ_FEES = "https://u-szeged.hu/english/tuition-fees/tuitionfees"
add("med", "General Medicine in English (MD)", SZ, "Szeged", MD, MED, SEM("7,900"), NP, NP, NP,
    ("يوجد أيضاً برنامج الطب بالألمانية (7,600 يورو للفصل)", "A German-taught Medicine programme also exists (€7,600 per semester)"),
    NP, NP, NP, SZ_FEES, SZ_FEES)
add("cs", "Computer Science BSc", SZ, "Szeged", BSC, NP, SEM("3,200"),
    ("رسوم طلب 79 يورو + رسوم امتحان قبول 100 يورو (غير مستردة)", "€79 application fee + €100 entrance exam fee (non-refundable)"),
    ("لدفعة سبتمبر 2027: التقديم على DreamApply. في 2026 كان من 1 يناير إلى 15 مايو، والمتوقع الفترة نفسها (للتحقق)", "For September 2026 applications ran 1 January - 15 May 2026 in DreamApply (2027 to verify)"),
    ("شهادة لغة إنجليزية، مع إعفاء لمواطني بعض الدول الناطقة بالإنجليزية", "An English certificate, with exemption for natives of some English-speaking countries"),
    ("رسوم الفصلين الأول والثاني تُدفع مقدماً بعد القبول", "Fees for the first and second semester are paid in advance after admission"),
    ("DreamApply ثم امتحان قبول", "DreamApply, then an entrance exam"), NP, NP,
    "https://sci.u-szeged.hu/english/undergraduate-programs/computer-science-bsc", "https://sci.u-szeged.hu/english/undergraduate-programs/computer-science-bsc")
add("bus", "Business Administration and Management BSc", SZ, "Szeged", BSC, NP, SEM("2,700"),
    ("رسوم امتحان قبول 200 يورو (غير مستردة)", "€200 entrance exam fee (non-refundable)"), NP, NP,
    ("كلية الاقتصاد وإدارة الأعمال", "Faculty of Economics and Business Administration"), NP, NP, NP,
    "https://eco.u-szeged.hu/english/training-programmes/programmes-for-international-students/business-administration-and-management-bsc/fees-and-scholarships/fees-and-scholarships", SZ_FEES)
add("eng", "Biochemical Engineering BSc", SZ, "Szeged", BSC, NP, SEM("3,200"), NP, NP, NP, ("من جدول رسوم الجامعة 2026/2027", "From the university's 2026/2027 fee table"), NP, NP, NP, SZ_FEES, SZ_FEES)

# ---------- University of Pécs ----------
PTE = "University of Pécs"
PTE_FEES = "https://international.pte.hu/admission/fees"
PTE_OTHER = ("من جدول الرسوم الرسمي لبرامج الجامعة الدولية", "From the university's official international fee table")
for f, n, dur in [("cs", "Computer Science Engineering BSc", S7), ("eng", "Civil Engineering BSc", S8)]:
    add(f, n, PTE, "Pécs", BSC, dur, USDS("3,060", "3,400"), ("رسوم طلب 150 دولار", "$150 application fee"), NP, NP,
        ("كلية الهندسة وتكنولوجيا المعلومات؛ " + PTE_OTHER[0], "Faculty of Engineering and Information Technology; " + PTE_OTHER[1]), NP, NP, NP, PTE_FEES, PTE_FEES)
add("cs", "Computer Science BSc", PTE, "Pécs", BSC, S6, SEM("2,500"), ("رسوم طلب 140 يورو", "€140 application fee"), NP, NP,
    ("كلية العلوم؛ " + PTE_OTHER[0], "Faculty of Sciences; " + PTE_OTHER[1]), NP, NP, NP, PTE_FEES, PTE_FEES)
add("med", "General Medicine (MD)", PTE, "Pécs", MD, MED,
    ("الرسوم غير واضحة في المصدر الذي اطلعنا عليه؛ راجع صفحة الرسوم الرسمية لكلية الطب", "Fee not clear in the source we read; check the medical school's official fee page"),
    ("رسوم امتحان القبول 250 دولار إذا أُجري في بيتش", "Entrance exam fee $250 if taken in Pécs"), NP, NP,
    ("180 مقعداً في برنامج الطب بالإنجليزية؛ معتمد من الاتحاد العالمي للتعليم الطبي (WFME)", "180 places in the English Medicine programme; accredited under WFME criteria"),
    ("التقديم الإلكتروني على موقع القبول في كلية الطب", "Online on the medical school admissions site"), NP, NP,
    "https://admissions.medschool.pte.hu/en/menupont/65", "https://admissions.medschool.pte.hu/en/menupont/77")

# ---------- Dentistry and Pharmacy in English, added 2026-11-15 ----------
DMD = ("طبيب أسنان (DMD) - برنامج متكامل", "Doctor of Dental Medicine (DMD) - integrated programme")
PHD_ = ("صيدلي (PharmD) - برنامج متكامل", "Doctor of Pharmacy (PharmD) - integrated programme")
S10 = ("10 فصول دراسية (5 سنوات)", "10 semesters (5 years)")
SU_HOW = ("التقديم الإلكتروني، ثم امتحان كتابي أونلاين ومقابلة شفوية", "Online application, then online written tests and an oral interview")
SU_ADM = ("رسوم إجراءات القبول 250 يورو؛ عربون 2,000 يورو يُخصم من رسوم الفصل الأول؛ رسوم تسجيل 230 يورو", "€250 admission procedure fee; €2,000 deposit deducted from the first semester's fee; €230 enrolment fee")
SU_DL = ("آخر موعد للتقديم 31 مايو 2027 (دفعة سبتمبر 2027)", "Application deadline 31 May 2027 (September 2027 intake)")
SU_EN = ("امتحان القبول يشمل الإنجليزية والإنجليزية الطبية", "The entrance exam includes English and Biomedical English")
add("dent", "Dentistry (DMD)", "Semmelweis University", "Budapest", DMD, S10, ("9,340 يورو للفصل (دفعة سبتمبر 2027)", "€9,340 per semester (September 2027 intake)"),
    SU_ADM, SU_DL, SU_EN, ("امتحان في الأحياء والكيمياء؛ رسوم مواد إضافية: 1,180 يورو للفصل في السنة الثانية و2,350 يورو للفصل في السنوات 3-5", "Exam in Biology and Chemistry; extra material fee: €1,180 per semester in year 2 and €2,350 per semester in years 3-5"),
    SU_HOW, LIV_BUD, NP, "https://semmelweis.hu/admission/programs/dentistry/", "https://semmelweis.hu/admission/programs/dentistry/")
add("pharm", "Pharmaceutical Sciences", "Semmelweis University", "Budapest", PHD_, S10, ("5,820 يورو للفصل (دفعة سبتمبر 2027)", "€5,820 per semester (September 2027 intake)"),
    SU_ADM, SU_DL, SU_EN, ("امتحان في الأحياء والكيمياء؛ رسوم مواد إضافية: 370 يورو للفصل في السنة الثانية و740 يورو للفصل في السنوات 3-5", "Exam in Biology and Chemistry; extra material fee: €370 per semester in year 2 and €740 per semester in years 3-5"),
    SU_HOW, LIV_BUD, NP, "https://semmelweis.hu/admission/programs/pharmaceutical-sciences/", "https://semmelweis.hu/admission/programs/pharmaceutical-sciences/")
add("dent", "Dentistry (DMD)", DEB, "Debrecen", DMD, S10, USDY("15,770", "17,500"), DEB_ADM, DEB_DL, ("مستوى B2 في الإنجليزية مطلوب", "B2 English required"),
    ("الرسوم تشمل تكاليف المواد؛ امتحان كتابي وشفوي في الأحياء والفيزياء أو الكيمياء، أو إتمام الدورة الطبية التأسيسية في الجامعة", "The fee includes all material costs; written and oral exam in Biology and Physics or Chemistry, or completing the university's Basic Medicine Course"),
    DEB_HOW, LIV_DEB, NP, "https://edu.unideb.hu/p/dentistry-full-time-graduate-program", DEB_APPLY)
add("pharm", "Pharmacy (PharmD)", DEB, "Debrecen", PHD_, S10, USDY("7,210", "8,000"), DEB_ADM, DEB_DL, DEB_EN,
    ("امتحان كتابي وشفوي في الأحياء والفيزياء أو الكيمياء، أو إتمام الدورة الطبية التأسيسية في الجامعة؛ البرامج تحت 10,000 دولار تُدفع رسوم سنة كاملة وتأمين قبل أوراق التأشيرة", "Written and oral exam in Biology and Physics or Chemistry, or completing the university's Basic Medicine Course; for programmes under $10,000 the full year's fee and a deposit are paid before the visa documents"),
    DEB_HOW, LIV_DEB, NP, "https://edu.unideb.hu/page.php?id=52", DEB_APPLY)
add("dent", "Dental Medicine (DMD)", SZ, "Szeged", DMD, S10, SEM("8,000"), NP, NP, NP, ("من جدول رسوم الجامعة الدولي 2026/2027", "From the university's 2026/2027 international fee table"), NP, NP, NP, SZ_FEES, SZ_FEES)
add("pharm", "Pharmacy (PharmD)", SZ, "Szeged", PHD_, S10, SEM("5,420"), NP, NP, NP, ("من جدول رسوم الجامعة الدولي 2026/2027", "From the university's 2026/2027 international fee table"), NP, NP, NP, SZ_FEES, SZ_FEES)
add("dent", "Dentistry in English", PTE, "Pécs", DMD, S10,
    USDY("15,630", "17,350", " (السنة الدراسية غير مذكورة في الجدول - للتحقق)"),
    ("رسوم امتحان القبول 250 دولار، ورسوم طلب حوالي 200 دولار (للتحقق)", "$250 entrance exam fee and an application fee of about $200 (to verify)"), NP, NP,
    ("تُدفع 9,300 دولار في الفصل الأول و8,050 في الثاني", "$9,300 is paid in the first semester and $8,050 in the second"), NP, NP, NP, PTE_FEES, PTE_FEES)
add("pharm", "Pharmacy in English", PTE, "Pécs", PHD_, S10,
    ("حوالي 8,400 يورو سنوياً (4,400 يورو في الخريف و4,000 في الربيع؛ السنة الدراسية غير مذكورة في الجدول - للتحقق)", "About €8,400 per year (€4,400 in autumn and €4,000 in spring; the academic year is not stated in the table - to verify)"),
    ("رسوم امتحان القبول 250 دولار", "$250 entrance exam fee"), NP, NP, PTE_OTHER, NP, NP, NP, PTE_FEES, PTE_FEES)

write("المجر", "Hungary", "hungary", R, level="bachelor")
