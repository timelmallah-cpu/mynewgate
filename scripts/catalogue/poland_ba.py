# Poland: English-taught bachelor's (first-cycle) programmes and long-cycle Medicine (MD) at public universities.
# PLN fees are converted to EUR at about 4.4 PLN per EUR (November 2026); the PLN figure is always shown too.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP

S6 = ("6 فصول دراسية (3 سنوات)", "6 semesters (3 years)")
S7 = ("7 فصول دراسية (3.5 سنوات)", "7 semesters (3.5 years)")
S8 = ("8 فصول دراسية (4 سنوات)", "8 semesters (4 years)")
MED = ("12 فصلاً دراسياً (6 سنوات)", "12 semesters (6 years)")
BSC = ("بكالوريوس (first-cycle)", "Bachelor's (first-cycle)")
BENG = ("بكالوريوس هندسة (inżynier)", "Bachelor of Engineering (inżynier)")
MD = ("طبيب (lekarz، يعادل MD) - ماجستير متكامل", "Physician (lekarz, MD equivalent) - long-cycle master's")
SEM = lambda v, yr="2026/2027", chk="": (f"{v} يورو للفصل الدراسي لغير الأوروبيين ({yr}){chk}", f"€{v} per semester for non-EU students ({yr}){' (to verify)' if chk else ''}")
PLNS = lambda e, p, yr="2026/2027", chk="": (f"حوالي {e} يورو للفصل ({p} زلوتي للفصل، {yr}؛ التحويل تقريبي){chk}", f"About €{e} per semester (PLN {p} per semester, {yr}; approximate conversion){' (to verify)' if chk else ''}")
R = []


def add(field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply, living=NP, house=NP):
    R.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other,
               how=how, living=living, house=house, src=src, req=src,
               req_note=("الصفحة الرسمية: الشروط والرسوم", "Official page: requirements and fees"),
               apply=apply, apply_note=("صفحة التقديم الرسمية", "Official application page")))


IRK = ("التقديم الإلكتروني عبر نظام التسجيل في الجامعة (IRK أو ما يماثله)", "Online through the university's registration system (IRK or similar)")

# ---------- Medicine (MD in English) ----------
add("med", "Medicine, Program in English (MD)", "Jagiellonian University Medical College", "Kraków", MD, MED,
    ("16,000 يورو سنوياً لكل سنوات الدراسة الست (للمقبولين في 2026/2027)", "€16,000 per year for all six years (for students admitted in 2026/2027)"),
    NP, NP, NP,
    ("يتطلب درجات في الكيمياء والأحياء أو الفيزياء في الشهادة الثانوية؛ القسط الأول خلال 7 أيام من التسجيل والثاني حتى 15 فبراير",
     "Requires secondary-school grades in Chemistry and Biology or Physics; first instalment within 7 days of registration, second by 15 February"),
    IRK, "https://medschool.uj.edu.pl/practical-info/tuition-fees/", "https://irk.uj.edu.pl/en-gb/offer/SMO_PC_26/programme/medici_sjm_PC_en/")
add("med", "Medicine, English Division (MD)", "Medical University of Gdańsk", "Gdańsk", MD, MED, PLNS("7,295", "32,100"),
    NP, ("لدفعة 2026/2027 كان رفع المستندات إلكترونياً من 18 مارس إلى 15 يوليو 2026 (2027 للتحقق)", "For 2026/2027, documents were uploaded online from 18 March to 15 July 2026 (2027 to verify)"),
    NP, ("من قرار رئيس الجامعة رقم 41/2026 لرسوم 2026/2027", "From Rector's Order No. 41/2026 on 2026/2027 fees"), IRK,
    "https://admission.mug.edu.pl/attachment/attachment/115883/ENG_z4126_oplaty_za_ksztalcenie_w_roku_akademickim_26_27.pdf", "https://admission.mug.edu.pl/1453.html")
add("med", "Medicine, English Division (MD)", "Medical University of Warsaw", "Warsaw", MD, MED,
    ("الرسوم في الملحق 2 لقرار رئيس الجامعة 58/2026 (لم نطّلع على الرقم)", "Fees are in Appendix 2 of Rector's Order 58/2026 (we have not read the figure)"),
    ("رسوم طلب حوالي 20 يورو؛ رسوم تأكيد المقعد 1,000 يورو (جزء من الرسوم، غير مستردة)", "Application fee about €20; seat confirmation fee €1,000 (part of tuition, non-refundable)"),
    NP, NP, ("التقديم ممكن قبل التخرج من الثانوية؛ الدفع بالتحويل البنكي باليورو فقط", "You can apply before finishing secondary school; payment by bank transfer in EUR only"),
    ("أرسل المستندات إلى مكتب القبول بالبريد الإلكتروني أولاً ثم افتح طلباً على نظام ORS", "Send documents to the admissions office by email first, then open an ORS application"),
    "https://ed.wum.edu.pl/node/1043", "https://ed.wum.edu.pl/high-school-graduates")
add("med", "Medicine in English (MD)", "Medical University of Silesia in Katowice", "Katowice", MD, MED,
    ("حوالي 14,890 يورو سنوياً (65,500 زلوتي لعام 2025/2026 حسب مصدر غير رسمي؛ رسوم 2026/2027 في جدول الجامعة - للتحقق)",
     "About €14,890 per year (PLN 65,500 for 2025/2026 per an unofficial source; 2026/2027 fees are in the university table - to verify)"),
    NP, NP, NP, ("تُدفع الرسوم على 4 أقساط في السنة (حسب مصدر غير رسمي)", "Fees payable in 4 instalments a year (per an unofficial source)"), IRK,
    "https://student.sum.edu.pl/wp-content/uploads/2026/07/Tuition-Fees_2026_2027.pdf", "https://student.sum.edu.pl/wp-content/uploads/2026/07/Tuition-Fees_2026_2027.pdf")
add("med", "Medicine in English (MD)", "Wroclaw Medical University", "Wrocław", MD, MED,
    ("حوالي 15,430 يورو سنوياً (67,900 زلوتي لعام 2026/2027 حسب مصدر غير رسمي - للتحقق)", "About €15,430 per year (PLN 67,900 for 2026/2027 per an unofficial source - to verify)"),
    NP, NP, NP, ("لم نطّلع على جدول الرسوم الرسمي", "We have not read the official fee table"), IRK,
    "https://www.umw.edu.pl/en", "https://www.umw.edu.pl/en")
add("med", "Medicine in English (MD)", "Medical University of Bialystok", "Białystok", MD, MED,
    ("15,100 يورو للسنة الأولى لعام 2026/2027 حسب مصدر غير رسمي (للتحقق)", "€15,100 for the first year in 2026/2027 per an unofficial source (to verify)"),
    NP, NP, NP, ("قسم التعليم الطبي بالإنجليزية في كلية الطب", "Division of Medical Education in English, Faculty of Medicine"), IRK,
    "https://www.umb.edu.pl/en", "https://www.umb.edu.pl/en")
add("med", "Medicine in English (MD)", "Pomeranian Medical University in Szczecin", "Szczecin", MD, MED,
    ("الرسوم على صفحة الرسوم الرسمية (لم نطّلع على الرقم)", "Fee on the official fee page (we have not read the figure)"),
    ("رسوم طلب 85 يورو + رسوم دورة تحضيرية 600 يورو للمقبولين (غير مستردة)", "€85 application fee + €600 pre-course fee for admitted students (non-refundable)"),
    NP, NP, NP, IRK, "https://rekrutacja.pum.edu.pl/en/fees-and-methods-of-payment", "https://rekrutacja.pum.edu.pl/en/fees-and-methods-of-payment")
add("med", "Medicine (MD)", "Medical University of Lodz", "Łódź", MD, MED,
    ("غير منشور في الصفحة التي اطلعنا عليها", "Not published on the page we read"), NP, NP, NP,
    ("توجد دورة تحضيرية بالإنجليزية من 16 نوفمبر 2026 إلى 30 يونيو 2027", "A preparatory course in English runs from 16 November 2026 to 30 June 2027"), IRK,
    "https://study.gov.pl/medical-university-lodz", "https://study.gov.pl/medical-university-lodz")

# ---------- Warsaw University of Technology (WUT) ----------
WUT = "Warsaw University of Technology (WUT)"
WUT_FEES = "https://eng.pw.edu.pl/index.php/content/download/6121/51090/file/131_2026_cudz_2026_ENG.pdf"
WUT_OTHER = ("من قرار رئيس الجامعة 131/2026 لرسوم الأجانب 2026/2027 (عمود الدراسة بالإنجليزية)", "From Rector's Decision 131/2026 on 2026/2027 fees for foreigners (English-taught column)")
add("cs", "Computer Science", WUT, "Warsaw", BENG, NP, SEM("5,520"), NP, NP, NP, ("كلية الإلكترونيات وتقنية المعلومات؛ " + WUT_OTHER[0], "Faculty of Electronics and Information Technology; " + WUT_OTHER[1]), IRK, WUT_FEES, "https://www.pw.edu.pl/engpw/Admission")
add("cs", "Computer Science and Information Systems", WUT, "Warsaw", BENG, S7, SEM("5,700"), NP,
    ("حوالي يوليو حسب مصدر غير رسمي (للتحقق)", "Around July per an unofficial source (to verify)"), NP,
    ("كلية الرياضيات وعلوم المعلومات؛ " + WUT_OTHER[0], "Faculty of Mathematics and Information Science; " + WUT_OTHER[1]), IRK, WUT_FEES, "https://www.pw.edu.pl/engpw/Admission")
add("eng", "Electrical Engineering", WUT, "Warsaw", BENG, NP, SEM("4,500"), NP, NP, NP, ("كلية الهندسة الكهربائية؛ " + WUT_OTHER[0], "Faculty of Electrical Engineering; " + WUT_OTHER[1]), IRK, WUT_FEES, "https://www.pw.edu.pl/engpw/Admission")

# ---------- AGH University of Krakow ----------
AGH = "AGH University of Krakow"
AGH_FEES = "https://www.international.agh.edu.pl/en/studies/fees"
AGH_ADM = ("رسوم تسجيل 85 زلوتي لكل تخصص (إذا لم تقدّم امتحان الرياضيات في الجامعة)", "PLN 85 registration fee per field (if you don't sit AGH's maths exam)")
AGH_DL = ("التسجيل من يونيو إلى سبتمبر، والدراسة تبدأ 1 أكتوبر", "Recruitment June to September; studies start 1 October")
AGH_OTHER = ("الحد الأدنى للقبول 300 نقطة حسب قواعد الجامعة؛ كل الطلاب الدوليين يدفعون الرسوم", "Minimum admission score of 300 points per university rules; all international students pay fees")
add("cs", "Computer Science", AGH, "Kraków", BENG, S7, SEM("3,000", chk=" (من مصدر غير رسمي ينقل جدول الجامعة - للتحقق)"), AGH_ADM, AGH_DL, NP, AGH_OTHER, IRK, AGH_FEES, "https://www.international.agh.edu.pl/en/studies/recruitment/recruitment-rules-bachelor")
for n in ["Mechanical Engineering", "Mechatronic Engineering", "Space Engineering"]:
    add("eng", n, AGH, "Kraków", BENG, S7, ("فئة هذا البرنامج للتحقق: الرسوم في جدول الرسوم الرسمي للجامعة؛ برامج البكالوريوس بالإنجليزية بين 1,250 و3,000 يورو للفصل حسب مصدر غير رسمي (للتحقق)",
                                             "Fee band to verify: fee in the university's official fee table; English bachelor's range from €1,250 to €3,000 per semester per an unofficial source (to verify)"),
        AGH_ADM, AGH_DL, NP, AGH_OTHER, IRK, AGH_FEES, "https://www.international.agh.edu.pl/en/studies/recruitment/recruitment-rules-bachelor")

# ---------- Lodz University of Technology (TUL), International Faculty of Engineering ----------
TUL = "Lodz University of Technology (TUL)"
TUL_FEES = "https://apply.p.lodz.pl/en/enrollment/enroll/fees-and-scholarships"
TUL_FEE = PLNS("1,820", "8,000", "2024/2025", " (رسوم 2026/2027 للتحقق)")
TUL_OTHER = ("الكلية الدولية للهندسة (IFE)؛ تتضمن فصلاً دراسياً للتنقل في جامعة شريكة بالخارج", "International Faculty of Engineering (IFE); includes a mobility semester at a partner university abroad")
for f, n in [("cs", "Computer Science"), ("cs", "Information Technology"), ("ds", "Mathematical Methods in Data Analysis"), ("ds", "Modelling and Data Science"),
             ("eng", "Electronic and Telecommunication Engineering"), ("eng", "Mechanical Engineering"), ("eng", "Biomedical Engineering and Technologies"),
             ("bus", "Business Studies"), ("bus", "Business, Society and Technology"), ("bus", "Digital Management")]:
    add(f, n, TUL, "Łódź", BSC, S8 if n == "Mechanical Engineering" else NP, TUL_FEE, NP, NP, NP, TUL_OTHER, IRK, TUL_FEES, "https://apply.p.lodz.pl/en")

# ---------- SGH Warsaw School of Economics ----------
SGH = "SGH Warsaw School of Economics"
SGH_ADMIT = "https://www.sgh.waw.pl/en/educational-offer/first-cycle-studies/admissions-to-undergraduate-studies-in-english-for-international-applicants"
SGH_EN = ("شهادة رسمية بمستوى متقدم في الإنجليزية", "An official certificate of advanced English")
for f, n, fee, src in [("bus", "Global Business, Finance and Governance", SEM("2,500"), "https://www.sgh.waw.pl/en/first-cycle-studies/bachelor-studies-global-business-finance-and-governance"),
                       ("bus", "International Economics", None, SGH_ADMIT), ("bus", "Management", None, SGH_ADMIT),
                       ("ds", "Quantitative Methods in Economics and Information Systems", None, SGH_ADMIT)]:
    add(f, n, SGH, "Warsaw", ("بكالوريوس (licencjat)", "Bachelor's (licencjat)"), S6,
        fee or ("الرسوم في لائحة الرسوم الرسمية (لم نطّلع على الرقم)", "Fee in the official fee regulation (we have not read the figure)"),
        NP, ("دفعة واحدة في السنة (أكتوبر)", "One intake per year (October)"), SGH_EN,
        ("الدفع باليورو؛ 2,550 يورو للفصل إذا دُفعت على أقساط" if fee else "برنامج بالإنجليزية بدوام كامل", "Payment in EUR; €2,550 per semester if paid in instalments" if fee else "Full-time English-taught programme"),
        IRK, src, SGH_ADMIT)

# ---------- Other technical universities ----------
add("cs", "Computer Science", "Lublin University of Technology", "Lublin", BENG, S7,
    ("2,000 يورو للفصل (14,000 يورو للبرنامج كاملاً)", "€2,000 per semester (€14,000 for the whole programme)"), NP,
    ("لدفعة 2026/2027: التسجيل من مايو حتى 17 يوليو 2026، وامتحان رياضيات عبر الإنترنت (2027 للتحقق)", "For 2026/2027: registration from May to 17 July 2026, plus an online maths exam (2027 to verify)"),
    NP, ("كلية الهندسة الكهربائية وعلوم الحاسب", "Faculty of Electrical Engineering and Computer Science"), IRK,
    "https://bkm.pollub.pl/en/admission/programs/2026-2027", "https://bkm.pollub.pl/en/admission/programs/2026-2027")
add("cs", "Computer Science (in English)", "Kielce University of Technology", "Kielce", BENG, NP, SEM("1,200"), NP,
    ("لدفعة 2026/2027: من 20 أبريل إلى 15 يوليو 2026 (2027 للتحقق)", "For 2026/2027: 20 April to 15 July 2026 (2027 to verify)"), NP, NP, IRK,
    "https://irk.usos.tu.kielce.pl/en-gb/offer/S1_2026-2027_CDZ/registration/", "https://irk.usos.tu.kielce.pl/en-gb/offer/S1_2026-2027_CDZ/registration/")
add("cs", "Computer Science (in English)", "University of Lodz", "Łódź", BSC, S6,
    ("ستُعلن الجامعة الرسوم لاحقاً (غير منشورة بعد)", "The university will announce the fee later (not yet published)"), ("رسوم طلب 85 زلوتي", "PLN 85 application fee"),
    ("لدفعة 2026/2027: التسجيل من 7 مايو إلى 13 يوليو 2026 (2027 للتحقق)", "For 2026/2027: registration from 7 May to 13 July 2026 (2027 to verify)"), NP, NP, IRK,
    "https://rekrutacja.uni.lodz.pl/en-gb/offer/WYZSZE2026C/programme/DLIa_11/criteria/preview/turn/1", "https://rekrutacja.uni.lodz.pl/en-gb/offer/WYZSZE2026C/programme/DLIa_11/criteria/preview/turn/1")

write("بولندا", "Poland", "poland", R, level="bachelor")
