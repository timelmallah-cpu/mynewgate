# Netherlands: English-taught bachelor's programmes at public research universities (non-EEA institutional fees).
# Fees for the September 2027 intake (2027-2028) are used where the university has published them.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP

BA3 = ("3 سنوات (180 ساعة معتمدة)", "3 years (180 credits)")
BSC = ("بكالوريوس العلوم (BSc)", "Bachelor of Science (BSc)")
SL = ("التقديم عبر Studielink ثم بوابة الجامعة لرفع المستندات", "Apply through Studielink, then upload documents on the university portal")
FIXUS = lambda d: (f"{d}: برنامج بعدد مقاعد محدود (numerus fixus) مع إجراءات اختيار", f"{d}: limited-places programme (numerus fixus) with a selection procedure")
NL_NOTE = ("الرسوم المؤسسية لغير الأوروبيين؛ منحة NL (5,000 يورو للسنة الأولى) متاحة في بعض البرامج", "Institutional fee for non-EEA students; the NL Scholarship (€5,000 in year one) is available for some programmes")
R = []


def add(field, name, uni, city, fee, dl, en, other, src, apply=None, deg=BSC, dur=BA3, adm=NP):
    R.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en,
               other=(other[0] + "؛ " + NL_NOTE[0], other[1] + "; " + NL_NOTE[1]),
               how=SL, living=NP, house=NP, src=src, req=src,
               req_note=("صفحة البرنامج أو الرسوم الرسمية", "Official programme or fee page"),
               apply=apply or src, apply_note=("صفحة القبول الرسمية", "Official admission page")))


EN_SUFFIX = {" (19,906 يورو في 2026-2027)": " (€19,906 in 2026-2027)", " (فئة الرسوم المرتفعة)": " (higher fee band)", " (فئة الرسوم المنخفضة)": " (lower fee band)",
             " (الرسم العام لبكالوريوس الجامعة)": " (the university's general bachelor's rate)", " (رقم برنامج IBA المزدوج؛ للتحقق)": " (figure for the IBA double degree; to verify)"}
Y = lambda v, yr="2027-2028", chk="": (f"{v} يورو سنوياً لغير الأوروبيين ({yr}){chk}", f"€{v} per year for non-EEA students ({yr}){EN_SUFFIX.get(chk, '')}")

# ---------- TU Delft ----------
TUD = "Delft University of Technology"
TUD_EN = ("TOEFL iBT 90 أو IELTS Academic 6.5 أو Cambridge CAE/CPE", "TOEFL iBT 90, IELTS Academic 6.5 or Cambridge CAE/CPE")
for f, n, url in [("eng", "Aerospace Engineering", "https://www.studyinnl.org/dutch-education/studies/aerospace-engineering-792-delft-university-of-technology"),
                  ("cs", "Computer Science and Engineering", "https://www.studyinnl.org/dutch-education/studies/computer-science-and-engineering-796-delft-university-of-technology")]:
    add(f, n, TUD, "Delft", Y("20,563", chk=" (19,906 يورو في 2026-2027)"), ("15 يناير 2027: برنامج بعدد مقاعد محدود مع إجراءات اختيار", "15 January 2027: limited-places programme with a selection procedure"),
        TUD_EN, ("واحد من 4 برامج بكالوريوس فقط بالإنجليزية في TU Delft؛ تنافسي جداً", "One of only 4 English-taught bachelor's at TU Delft; very competitive"), url, "https://www.tudelft.nl/en/education/admission-and-application")

# ---------- University of Groningen ----------
RUG = "University of Groningen"
add("cs", "Computing Science", RUG, "Groningen", Y("19,800"), ("1 مايو 2027 للبدء في 1 سبتمبر 2027", "1 May 2027 to start on 1 September 2027"), NP,
    ("برنامج بالإنجليزية لمدة 3 سنوات؛ في Studielink اختر الخيار بدون علامة numerus fixus", "3-year English programme; in Studielink choose the option without the 'Numerus fixus' label"),
    "https://www.rug.nl/bachelors/computing-science/admission-and-application?lang=en")
add("bus", "International Business", RUG, "Groningen", ("14,000 يورو سنوياً لغير الأوروبيين (2026-2027)؛ رسوم كلية الاقتصاد 14,400 يورو في 2027-2028 (للتحقق للبرنامج)", "€14,000 per year for non-EEA students (2026-2027); the economics faculty rate is €14,400 in 2027-2028 (to verify for this programme)"),
    ("15 يناير 2027", "15 January 2027"), NP, ("فصل دراسي في الخارج ضمن البرنامج", "Includes a semester abroad"),
    "https://www.studyinnl.org/dutch-education/studies/international-business-422-university-of-groningen")
for f, n, url in [("cs", "Artificial Intelligence", "https://www.studyinnl.org/dutch-education/studies/artificial-intelligence-469-university-of-groningen"),
                  ("ds", "Information Science", "https://www.studyinnl.org/dutch-education/studies/information-science-460-university-of-groningen"),
                  ("bus", "Business Administration", "https://www.studyinnl.org/dutch-education/studies/business-administration-430-university-of-groningen")]:
    add(f, n, RUG, "Groningen", ("فئة هذا البرنامج للتحقق: رسوم جامعة خرونينغن لغير الأوروبيين بين 14,000 و19,800 يورو سنوياً حسب الكلية", "Fee band to verify: University of Groningen non-EEA fees range from €14,000 to €19,800 a year by faculty"),
        NP, NP, ("برنامج بالإنجليزية لمدة 3 سنوات", "3-year English programme"), url, "https://rug.nl/education/application-enrolment-tuition-fees/tuition-fee/bachelor?lang=en")

# ---------- University of Twente ----------
UT = "University of Twente"
UT_FEES = "https://www.utwente.nl/en/education/bachelor/practical-information/tuition-fees"
UT_DL = ("1 مايو 2027 لغير الأوروبيين (التقديم عبر Studielink ثم Osiris)", "1 May 2027 for non-EEA applicants (Studielink, then Osiris)")
UT_OTHER = ("رسوم طلب مطلوبة؛ برامج الجامعة مقسمة إلى رسوم منخفضة ومرتفعة", "An application fee applies; programmes are split into lower and higher fee rates")
for f, n in [("cs", "Technical Computer Science"), ("cs", "Business Information Technology"), ("cs", "Creative Technology"),
             ("eng", "Electrical Engineering"), ("eng", "Mechanical Engineering"), ("eng", "Civil Engineering"), ("eng", "Industrial Engineering and Management")]:
    add(f, n, UT, "Enschede", Y("16,869", chk=" (فئة الرسوم المرتفعة)"), UT_DL, NP, UT_OTHER, UT_FEES)
add("bus", "International Business Administration", UT, "Enschede", Y("12,652"), UT_DL, NP, UT_OTHER, UT_FEES)

# ---------- Maastricht University ----------
UM = "Maastricht University"
UM_CAT = "https://www.maastrichtuniversity.nl/node/59677"
add("bus", "International Business", UM, "Maastricht", Y("13,400", chk=" (فئة الرسوم المنخفضة)"), ("15 يناير 2027 الساعة 23:59 (برنامج بعدد مقاعد محدود)", "15 January 2027, 23:59 CET (limited-places programme)"), NP,
    ("التعلم القائم على حل المشكلات في مجموعات صغيرة", "Problem-based learning in small groups"), UM_CAT)
add("bus", "Business Analytics", UM, "Maastricht", Y("13,400", chk=" (فئة الرسوم المنخفضة)"), ("1 أبريل 2027 لغير الأوروبيين", "1 April 2027 for non-EU/EEA applicants"), NP,
    ("برنامج جديد يجمع علم البيانات والاقتصاد والأعمال", "A new programme combining data science, economics and business"), UM_CAT)
for f, n in [("ds", "Data Science and Artificial Intelligence"), ("cs", "Computer Science"), ("eng", "Business Engineering"), ("eng", "Circular Engineering"), ("ph", "European Public Health")]:
    add(f, n, UM, "Maastricht", Y("18,700", chk=" (فئة الرسوم المرتفعة)"), ("1 أبريل 2027 لغير الأوروبيين غالباً (للتحقق)", "Usually 1 April 2027 for non-EU/EEA applicants (to verify)"),
        ("IELTS 6.0 كحد أدنى لبرنامج علم البيانات والذكاء الاصطناعي" if n.startswith("Data") else NP[0], "IELTS 6.0 minimum for Data Science and AI" if n.startswith("Data") else NP[1]),
        ("برنامج ضمن فئة الرسوم المرتفعة حسب تصنيف الجامعة", "In the university's higher fee band"), UM_CAT)
add("ds", "Econometrics and Operations Research", UM, "Maastricht", ("فئة هذا البرنامج للتحقق: رسوم البكالوريوس لغير الأوروبيين 13,400 أو 18,700 يورو حسب الفئة (2027-2028)", "Fee band to verify: non-EEA bachelor's fees are €13,400 or €18,700 by band (2027-2028)"),
    ("1 أبريل 2027 الساعة 23:59 لغير الأوروبيين", "1 April 2027, 23:59 CET for non-EU/EEA applicants"), NP, ("كلية الأعمال والاقتصاد", "School of Business and Economics"), UM_CAT)

# ---------- Erasmus University Rotterdam ----------
EUR = "Erasmus University Rotterdam"
add("bus", "International Business Administration (IBA)", EUR, "Rotterdam", Y("15,200"), ("15 يناير 2027 (750 مقعداً مع إجراءات اختيار)", "15 January 2027 (750 places with selection)"), NP,
    ("تقدمه كلية روتردام للإدارة (RSM)", "Offered by Rotterdam School of Management (RSM)"), "https://www.rsm.nl/bachelor/international-business-administration")
for f, n in [("bus", "International Bachelor Economics and Business Economics (IBEB)"), ("ds", "Econometrics and Operations Research")]:
    add(f, n, EUR, "Rotterdam", Y("14,700", chk=" (الرسم العام لبكالوريوس الجامعة)"), NP, NP,
        ("لا توجد ترتيبات انتقالية للطلاب الجدد في 2027-2028", "No transitional arrangement for new students in 2027-2028"),
        "https://www.eur.nl/en/education/practical-matters/registration/tuition-fee/tuition-fee-2027-2028")

# ---------- Tilburg University ----------
add("bus", "International Business Administration", "Tilburg University", "Tilburg", Y("13,400", "2026-2027", " (رقم برنامج IBA المزدوج؛ للتحقق)"), NP,
    ("IELTS 6.0 (5.5 كحد أدنى في كل مهارة)", "IELTS 6.0 (5.5 minimum per skill)"), ("يوجد برنامج مزدوج مع الاقتصاد", "A double bachelor's with Economics exists"),
    "https://www.studyinnl.org/dutch-education/studies/international-business-administration-1441-tilburg-university")

# ---------- Eindhoven University of Technology ----------
add("cs", "Computer Science and Engineering", "Eindhoven University of Technology", "Eindhoven", Y("18,600", "2026-2027"),
    ("1 مايو 2027 (برنامج بعدد مقاعد محدود في 2027-2028)", "1 May 2027 (limited-places programme in 2027-2028)"), ("IELTS 6.5 أو TOEFL 90", "IELTS 6.5 or TOEFL 90"),
    ("تنبيه: حسب مصدر غير رسمي أعلنت الجامعة في يوليو 2026 إيقاف استقطاب الطلاب الدوليين لبرامج البكالوريوس ورفع الرسوم لغير الأوروبيين؛ تأكد من الجامعة قبل التقديم",
     "Warning: according to an unofficial source, the university announced in July 2026 that it will stop international recruitment for bachelor's programmes and raise non-EEA fees; check with the university before applying"),
    "https://www.studyinnl.org/dutch-education/studies/computer-science-and-engineering-840-eindhoven-university-of-technology")

write("هولندا", "Netherlands", "netherlands", R, level="bachelor")
