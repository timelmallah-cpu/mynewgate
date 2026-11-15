# Romania: English-taught bachelor's programmes and long-cycle Medicine at public universities.
# Non-EU students need a Letter of Acceptance issued by the Ministry of Education after the university accepts them.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP

MED = ("6 سنوات (360 ساعة معتمدة)", "6 years (360 credits)")
BA3 = ("3 سنوات (180 ساعة معتمدة)", "3 years (180 credits)")
MD = ("طبيب (Doctor-medic) - برنامج متكامل للبكالوريوس والماجستير", "Physician (Doctor-medic) - integrated bachelor's and master's")
LOA = ("لغير الأوروبيين: ترسل الجامعة ملفك إلى وزارة التعليم، وتصدر الوزارة خطاب القبول (Letter of Acceptance) المطلوب للتأشيرة؛ تُدفع رسوم سنة كاملة مقدماً غالباً",
       "For non-EU students: the university sends your file to the Ministry of Education, which issues the Letter of Acceptance needed for the visa; a full year's fee is usually paid in advance")
HOW = ("التقديم الإلكتروني على منصة القبول الدولية للجامعة، ثم تقييم الملف ومقابلة أو اختبار حسب الجامعة", "Online on the university's international admission platform, then a file review and interview or test depending on the university")
R = []


def add(field, name, uni, city, deg, dur, fee, adm, dl, en, other, src, apply=None):
    R.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en,
               other=(other[0] + "؛ " + LOA[0], other[1] + "; " + LOA[1]) if other != NP else LOA,
               how=HOW, living=NP, house=NP, src=src, req=src,
               req_note=("الصفحة الرسمية: الشروط والرسوم", "Official page: requirements and fees"),
               apply=apply or src, apply_note=("صفحة القبول الرسمية", "Official admission page")))


Y = lambda v, chk=" (للتحقق)": (f"{v} يورو سنوياً لغير الأوروبيين{chk}", f"€{v} per year for non-EU students{' (to verify)' if chk else ''}")

# ---------- Medicine in English ----------
add("med", "Medicine (English)", "Carol Davila University of Medicine and Pharmacy", "Bucharest", MD, MED,
    ("10,000 يورو سنوياً حسب وثيقة رسوم الجامعة 2026-2027 كما ينقلها مصدر غير رسمي (للتحقق)", "€10,000 per year per the university's 2026-2027 fee document as quoted by an unofficial source (to verify)"),
    NP, ("حسب جدول القبول 2026-2027 (يوجد أكثر من دورة تقديم؛ 2027 للتحقق)", "Per the 2026-2027 admission schedule (there is more than one session; 2027 to verify)"),
    ("يُختبر كل المتقدمين في الإنجليزية حسب منهجية القبول", "All applicants take an English test per the admission methodology"),
    ("أقدم كلية طب في رومانيا؛ مقابلة عبر الإنترنت", "Romania's oldest medical faculty; online interview"),
    "https://umfcd.ro/en/wp-content/uploads/2026/INTERNATIONAL_STUDENTS/ADMISSION_2026/DOCUMENTS/METHODOLOGY/Methodology_EN_2026-2027%20ENGLISH.pdf")
add("med", "Medicine (English)", "Iuliu Hațieganu University of Medicine and Pharmacy", "Cluj-Napoca", MD, MED,
    ("10,000 يورو للسنة الأولى لغير الأوروبيين (2026-2027، وثيقة رسوم الجامعة)", "€10,000 for the first year for non-EU students (2026-2027, university fee document)"),
    NP, NP, NP, ("الطب متاح أيضاً بالفرنسية", "Medicine is also offered in French"),
    "https://cdn.umfcluj.ro/uploads/2026/05/TUITION-FEES-FOR-THE-ACADEMIC-YEAR-2026_2027.pdf")
add("med", "Medicine (English)", "Grigore T. Popa University of Medicine and Pharmacy", "Iași", MD, MED,
    ("9,000 يورو سنوياً لعام 2026-2027 حسب مصدر إعلامي (للتحقق)؛ ملحق الرسوم الرسمي لعام 2025-2026 كان 8,500 يورو", "€9,000 per year for 2026-2027 per a media source (to verify); the official 2025-2026 fee annex said €8,500"),
    NP, NP, NP, ("تقييم على أساس الملف؛ الطب متاح أيضاً بالرومانية والفرنسية", "File-based evaluation; Medicine is also offered in Romanian and French"),
    "https://www.umfiasi.ro/en/admission/Documents/2026-2027/Metodologie%20admitere%20EN%20final%20senat%202026-2027.pdf")
add("med", "Medicine in English", "George Emil Palade University of Medicine, Pharmacy, Science and Technology of Târgu Mureș", "Târgu Mureș", MD, MED,
    ("8,000 يورو سنوياً لعام 2026-2027 حسب مصدر إعلامي (للتحقق)", "€8,000 per year for 2026-2027 per a media source (to verify)"),
    NP, NP, NP, ("الرسوم تُدفع كاملة بين 14 سبتمبر و15 أكتوبر؛ هذا الحرم في تارغو موريش وليس فرع هامبورغ الخاص", "The full fee is paid between 14 September and 15 October; this is the Târgu Mureș campus, not the separate Hamburg campus"),
    "https://umfst.ro/medicina-engleza/en/informations-for-students/targu-mures-campus/structura-anului-universitar-2/")
for uni, city, fee in [("Victor Babeș University of Medicine and Pharmacy", "Timișoara", "9,000"),
                       ("University of Medicine and Pharmacy of Craiova", "Craiova", "8,500"),
                       ("Ovidius University of Constanța", "Constanța", "7,500")]:
    add("med", "Medicine (English)", uni, city, MD, MED,
        (f"حوالي {fee} يورو سنوياً حسب مصادر غير رسمية؛ لم نطّلع على الرقم الرسمي (للتحقق)", f"About €{fee} per year per unofficial sources; we have not read the official figure (to verify)"),
        NP, NP, NP, NP, "https://studyinromania.gov.ro")

# ---------- Babeș-Bolyai University (UBB) ----------
UBB = "Babeș-Bolyai University"
UBB_ADM = ("رسوم معالجة الطلب 50 يورو (غير مستردة)", "€50 processing fee (non-refundable)")
UBB_EN = ("شهادة إنجليزية مقبولة ما لم ينطبق إعفاء", "An accepted English certificate unless an exemption applies")
add("cs", "Computer Science (English)", UBB, "Cluj-Napoca", ("بكالوريوس (Licență)", "Bachelor's (Licență)"), BA3,
    ("فئة هذا البرنامج للتحقق: رسوم غير الأوروبيين في الجامعة بين 2,200 و9,000 يورو سنوياً حسب البرنامج", "Non-EU fees range from €2,200 to €9,000 a year by programme; this programme's figure is to verify in the university's academic offer"),
    UBB_ADM, NP, UBB_EN, ("كلية الرياضيات وعلوم الحاسب؛ البرنامج متاح بالرومانية والمجرية والألمانية والإنجليزية", "Faculty of Mathematics and Computer Science; offered in Romanian, Hungarian, German and English"),
    "https://infoadmitere.ubbcluj.ro/brosuri/brosura_licenta_2026_EN.pdf", "https://cci.ubbcluj.ro/wp-content/uploads/2026/02/Academic-Offer-Bachelor-Level-2026.pdf")
add("bus", "Accounting and Management Information Systems (English)", UBB, "Cluj-Napoca", ("بكالوريوس (Licență)", "Bachelor's (Licență)"), BA3,
    Y("2,500"), UBB_ADM, NP, UBB_EN, ("كلية الاقتصاد وإدارة الأعمال", "Faculty of Economics and Business Administration"),
    "https://cci.ubbcluj.ro/wp-content/uploads/2026/02/Academic-Offer-Bachelor-Level-2026.pdf")
add("bus", "International Business and Economics (English)", UBB, "Cluj-Napoca", ("بكالوريوس (Licență)", "Bachelor's (Licență)"), BA3,
    ("حوالي 4,000 يورو سنوياً (400 يورو شهرياً لمدة 10 أشهر حسب بوابة دراسة؛ للتحقق)", "About €4,000 per year (€400 a month for 10 months per a study portal; to verify)"),
    UBB_ADM, NP, UBB_EN, ("كلية الاقتصاد وإدارة الأعمال", "Faculty of Economics and Business Administration"),
    "https://cci.ubbcluj.ro/wp-content/uploads/2026/02/Academic-Offer-Bachelor-Level-2026.pdf")

# ---------- Dental Medicine and Pharmacy in English, added 2026-11-15 ----------
DMD = ("طبيب أسنان (Medic dentist) - برنامج متكامل للبكالوريوس والماجستير", "Dentist (Medic dentist) - integrated bachelor's and master's")
PHR = ("صيدلي (Farmacist) - برنامج متكامل للبكالوريوس والماجستير", "Pharmacist (Farmacist) - integrated bachelor's and master's")
PH5 = ("5 سنوات (300 ساعة معتمدة)", "5 years (300 credits)")
add("dent", "Dental Medicine (English)", "Carol Davila University of Medicine and Pharmacy", "Bucharest", DMD, MED,
    ("غير منشورة في منهجية القبول؛ تحددها الجامعة حسب القانون (للتحقق)", "Not stated in the admission methodology; set by the university under the law (to verify)"),
    ("رسوم التسجيل 2,500 ليو روماني (غير مستردة)", "Registration fee RON 2,500 (non-refundable)"), NP,
    ("شهادة إنجليزية B2 على الأقل صادرة خلال آخر سنتين", "An English certificate of at least B2 issued within the last 2 years"),
    ("مقابلة أونلاين بالإنجليزية 15-30 دقيقة في مواضيع علمية؛ حتى 72 مقعداً", "A 15-30 minute online interview in English on scientific topics; up to 72 places"),
    "https://umfcd.ro/en/wp-content/uploads/2026/INTERNATIONAL_STUDENTS/ADMISSION_2026/DOCUMENTS/METHODOLOGY/Methodology_EN_2026-2027%20EN.pdf")
CLUJ = "https://umfcluj.ro/en/study-programmes/admission-undergraduate-studies/admission-international-candidates/"
add("dent", "Dental Medicine (English)", "Iuliu Hațieganu University of Medicine and Pharmacy", "Cluj-Napoca", DMD, MED,
    ("10,000 يورو للسنتين الأولى والثانية، 8,500 للثالثة، 8,000 للرابعة، 7,500 للخامسة والسادسة (2026-2027)", "€10,000 for years 1-2, €8,500 for year 3, €8,000 for year 4, €7,500 for years 5-6 (2026-2027)"),
    ("رسوم معالجة الملف 300 يورو، ورسوم تأكيد = 50% من رسوم السنة (غير مستردة)", "€300 processing fee and a confirmation fee of 50% of the yearly tuition (non-refundable)"),
    ("في 2026 كانت الدورة الأولى 25 مارس - 20 مايو 2026، ولم تُمدد لطب الأسنان؛ مواعيد 2027 غير منشورة بعد", "In 2026 session I ran 25 March - 20 May 2026 and was not extended for Dental Medicine; 2027 dates not published yet"),
    ("شهادة B2 على الأقل، إلا لمن درس الثانوية كاملة بالإنجليزية", "At least a B2 certificate, unless your whole secondary school was in English"),
    ("قبول بتقييم الملف؛ 100 مقعد بالإنجليزية؛ شهادة نفسية وطبية مطلوبة", "Admission by file evaluation; 100 English places; psychological and medical certificates required"),
    "https://cdn.umfcluj.ro/uploads/2026/05/TUITION-FEES-FOR-THE-ACADEMIC-YEAR-2026_2027.pdf", CLUJ)
IASI = "https://www.umfiasi.ro/ro/admitere/program-de-licenta/Documents/2026/valuta/Metodologie%20admitere%20candidati%20internationali%202026-2027.pdf"
IASI_ADM = ("رسوم معالجة الملف 200 يورو (غير مستردة)؛ تحجز المقعد بدفع ثلثي رسوم السنة الأولى", "€200 processing fee (non-refundable); you secure the place by paying two thirds of the first-year fee")
IASI_OTHER = ("الرسوم السنوية لا تتغير طوال الدراسة لمن يبدأ في 2026-2027", "The yearly fee stays the same for the whole programme for students starting in 2026-2027")
add("dent", "Dental Medicine (English)", "Grigore T. Popa University of Medicine and Pharmacy", "Iași", DMD, MED,
    ("رسوم 2026-2027 غير منشورة فيما راجعناه؛ ملحق الرسوم الرسمي لعام 2025-2026: 8,000 يورو للسنة الأولى ثم 7,500 (للتحقق)", "2026-2027 fee not published in what we reviewed; the official 2025-2026 fee annex: €8,000 for year 1, then €7,500 (to verify)"),
    IASI_ADM, NP, NP, (IASI_OTHER[0] + "؛ 70 مقعداً بالإنجليزية في 2026-2027", IASI_OTHER[1] + "; 70 English places in 2026-2027"), IASI)
add("pharm", "Pharmacy (English)", "Grigore T. Popa University of Medicine and Pharmacy", "Iași", PHR, PH5,
    ("رسوم 2026-2027 غير منشورة فيما راجعناه؛ ملحق الرسوم الرسمي لعام 2025-2026: 7,500 يورو سنوياً (للتحقق)", "2026-2027 fee not published in what we reviewed; the official 2025-2026 fee annex: €7,500 per year (to verify)"),
    IASI_ADM, NP, NP, (IASI_OTHER[0] + "؛ 50 مقعداً بالإنجليزية في 2026-2027", IASI_OTHER[1] + "; 50 English places in 2026-2027"), IASI)

add("nurs", "Nursing (English)", "Iuliu Hațieganu University of Medicine and Pharmacy", "Cluj-Napoca", ("بكالوريوس التمريض العام", "Bachelor's in General Nursing"), ("4 سنوات (240 ساعة معتمدة)", "4 years (240 credits)"),
    ("رسوم غير الأوروبيين لبرنامج التمريض بالإنجليزية غير واضحة في جدول الرسوم 2026-2027 (للتحقق)", "The non-EU fee for English-taught Nursing is not clear in the 2026-2027 fee table (to verify)"),
    ("رسوم معالجة الملف 300 يورو، ورسوم تأكيد = 50% من رسوم السنة (غير مستردة)", "€300 processing fee and a confirmation fee of 50% of the yearly tuition (non-refundable)"),
    ("في 2026 مُدّ التقديم للتمريض حتى 12 أغسطس 2026؛ مواعيد 2027 غير منشورة بعد", "In 2026 Nursing applications were extended to 12 August 2026; 2027 dates not published yet"),
    ("شهادة B2 على الأقل، إلا لمن درس الثانوية كاملة بالإنجليزية", "At least a B2 certificate, unless your whole secondary school was in English"),
    ("قبول بتقييم الملف؛ 50 مقعداً بالإنجليزية؛ لغير الأوروبيين تُدفع رسوم السنة الأولى كاملة قبل التأشيرة", "Admission by file evaluation; 50 English places; non-EU students pay the full first-year fee before the visa"),
    CLUJ)

write("رومانيا", "Romania", "romania", R, level="bachelor")
