# Estonia: English-taught bachelor's programmes and Medicine at public universities (non-EU fees).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP

BA3 = ("3 سنوات (180 ساعة معتمدة)", "3 years (180 credits)")
MED = ("6 سنوات (360 ساعة معتمدة)", "6 years (360 credits)")
DA = ("التقديم عبر منصة DreamApply مع رسوم طلب 100 يورو", "Through DreamApply, with a €100 application fee")
R = []


def add(field, name, uni, city, deg, dur, fee, dl, en, other, src):
    R.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=("رسوم طلب 100 يورو", "€100 application fee"), dl=dl, en=en, other=other,
               how=DA, living=NP, house=NP, src=src, req=src, req_note=("صفحة القبول الرسمية", "Official admission page"),
               apply="https://estonia.dreamapply.com/", apply_note=("منصة DreamApply", "DreamApply platform")))


TT = "Tallinn University of Technology (TalTech)"
TT_DL = ("1 أبريل لغير الأوروبيين (يفتح التقديم في فبراير)", "1 April for non-EU citizens (applications open in February)")
TT_EN = ("IELTS Academic 6.0 (لا يقل أي جزء عن 5.5) أو ما يعادله", "IELTS Academic 6.0 (no part below 5.5) or equivalent")
TT_OTHER = ("يدفع الطلاب من خارج الاتحاد الأوروبي رسوم فصلين مقدماً؛ إعفاءات محدودة من الرسوم لأفضل المتقدمين", "Non-EU students pay two semesters in advance; limited tuition waivers for the best applicants")
SEMX = lambda v: (f"{v} يورو للفصل الدراسي (للمسجلين من 2026/2027، حسب لائحة الرسوم كما ينقلها مصدر غير رسمي؛ للتحقق)", f"€{v} per semester (for students enrolling from 2026/2027, per the fee regulation as quoted by an unofficial source; to verify)")
add("cs", "Cyber Security Engineering (BSc)", TT, "Tallinn", ("بكالوريوس العلوم (BSc)", "Bachelor of Science (BSc)"), BA3, SEMX("3,500"), TT_DL, TT_EN, TT_OTHER, "https://taltech.ee/en/admissions")
add("eng", "Integrated Engineering (BSc)", TT, "Tallinn", ("بكالوريوس العلوم (BSc)", "Bachelor of Science (BSc)"), BA3, SEMX("3,000"), TT_DL, TT_EN, TT_OTHER, "https://taltech.ee/en/admissions")
add("bus", "International Business Administration (BA)", TT, "Tallinn", ("بكالوريوس الآداب (BA)", "Bachelor of Arts (BA)"), BA3, SEMX("2,500"), TT_DL, TT_EN,
    ("مدرسة الأعمال والحوكمة: الرسوم يدفعها كل الطلاب بمن فيهم الأوروبيون؛ " + TT_OTHER[0], "School of Business and Governance: all students pay fees, including EU citizens; " + TT_OTHER[1]), "https://taltech.ee/en/admissions")

UT = "University of Tartu"
UT_DL = ("15 أبريل الساعة 23:59 بتوقيت إستونيا؛ النتائج حتى 25 مايو تقريباً", "15 April, 23:59 Estonian time; results by about 25 May")
UT_OTHER = ("كل برامج البكالوريوس بالإنجليزية بالرسوم ولا توجد إعفاءات؛ لم تعد الجامعة تمنح إعفاءات للطلاب الجدد من خارج الاتحاد الأوروبي منذ 2026/2027، مع تخفيضات في بعض البرامج",
            "All English-taught bachelor's are fee-based with no waivers; since 2026/2027 the university no longer gives waivers to new non-EU students, with reductions in some programmes")
UT_FEE = lambda v: (f"فئة هذا البرنامج للتحقق: كان {v} يورو سنوياً في كتيب الجامعة لعام 2023؛ رسوم 2027/2028 غير منشورة فيما اطلعنا عليه", f"Fee band to verify: it was €{v} a year in the university's 2023 brochure; 2027/2028 fees not published in what we read")
add("bus", "Business Administration (BBA)", UT, "Tartu", ("بكالوريوس إدارة الأعمال (BBA)", "Bachelor of Business Administration (BBA)"), BA3, UT_FEE("4,200"), UT_DL, NP, UT_OTHER, "https://keemia.ut.ee/en/curriculum/business-administration")
add("eng", "Science and Technology (BSc)", UT, "Tartu", ("بكالوريوس العلوم (BSc)", "Bachelor of Science (BSc)"), BA3, UT_FEE("6,000"), UT_DL, NP,
    ("تخصصات: الوراثة والتقنية الحيوية، أو الهندسة الحيوية والروبوتات، أو الكيمياء وعلوم المواد؛ " + UT_OTHER[0], "Specialisations: genetics and biotechnology, bioengineering and robotics, or chemistry and materials science; " + UT_OTHER[1]),
    "https://ut.ee/en/content/frequently-asked-questions")
add("med", "Medicine (integrated)", UT, "Tartu", ("طبيب - برنامج متكامل", "Physician - integrated programme"), MED, UT_FEE("13,200"), UT_DL, NP,
    ("برنامج الطب المتكامل بالإنجليزية؛ " + UT_OTHER[0], "Integrated English-taught Medicine programme; " + UT_OTHER[1]), "https://ut.ee/en/content/frequently-asked-questions")

# ---------- Law (added 2026-11-16) ----------
add("law", "Law (BA)", TT, "Tallinn", ("بكالوريوس الآداب في العلوم الاجتماعية (BA)", "Bachelor of Arts in Social Sciences (BA)"), BA3,
    ("5,000 يورو سنوياً (للأوروبيين وغير الأوروبيين)", "€5,000 per year (EU and non-EU citizens)"), TT_DL, TT_EN,
    ("قانون كلاسيكي مع قانون التكنولوجيا والمجتمع الرقمي وقانون الاتحاد الأوروبي والقانون الدولي (الأمن السيبراني، حماية البيانات)؛ مدرسة الأعمال والحوكمة: الرسوم يدفعها كل الطلاب؛ يدفع غير الأوروبيين رسوم السنة الأولى كاملة قبل التسجيل",
     "Classical law with technology law, the digital society, and EU and international law (cyber security, data protection); School of Business and Governance: all students pay fees; non-EU students pay the full first-year fee before matriculation"),
    "https://taltech.ee/en/bachelors-programmes/law")

write("إستونيا", "Estonia", "estonia", R, level="bachelor")
