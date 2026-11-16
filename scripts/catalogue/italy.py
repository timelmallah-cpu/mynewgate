# Italy: English-taught bachelor's (incl. Medicine via IMAT) and master's at public universities (non-EU, 2026/2027).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, MSC2, BA3, MED6

BA, MA = [], []
UNIV = ("ما قبل التسجيل (pre-enrolment) لغير الأوروبيين على بوابة Universitaly، ثم التقديم على موقع الجامعة؛ وآخر موعد لطلب تأشيرة الدراسة لعام 2026/2027 كان 30 نوفمبر 2026",
        "Non-EU pre-enrolment on the Universitaly portal, then the university's own application; the study-visa deadline for 2026/2027 was 30 November 2026")


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, src, apply):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=UNIV,
                 living=NP, house=NP, src=src, req=src, req_note=("الصفحة الرسمية", "Official page"), apply=apply,
                 apply_note=("صفحة التقديم الرسمية", "Official application page")))


# ---------- University of Bologna ----------
BO = "University of Bologna"
BO_FEE = ("1,000 + 157.04 يورو سنوياً: رسوم ثابتة مخفضة لمواطني الدول خارج منظمة OECD إذا كان دخل الأسرة وأملاكها خارج إيطاليا فقط (2026/2027)؛ وغير ذلك حسب دخل الأسرة",
          "€1,000 + €157.04 per year: reduced fixed fee for nationals of non-OECD countries whose family income and assets are only outside Italy (2026/2027); otherwise based on family income")
BO_FEES = "https://www.unibo.it/en/study/enrolment-fees-and-other-procedures/degree-programmes/tuition-fees-and-exemptions/reduced-fixed-fee-for-citizens-of-particularly-poor-and-developing-countries-or-non-eu-non-oecd-countries"
BO_OTHER = ("برنامج بعدد مقاعد محدود ومقاعد مخصصة لغير الأوروبيين المقيمين بالخارج؛ الاختيار حسب إعلان القبول (call for applications)", "Limited places with a quota for non-EU applicants living abroad; selection per the call for applications")
add(BA, "bus", "Business and Economics (CLABE)", BO, "Bologna", ("بكالوريوس (Laurea)", "Bachelor's degree (Laurea)"), BA3, BO_FEE, NP, ("حسب إعلان القبول لعام 2026/2027؛ للتحقق", "Per the 2026/2027 call for applications; to verify"), NP, BO_OTHER,
    "https://www.unibo.it/en/attachments/copy_of_Avviso_CLAMECLABEprogrammispecialiENGL.pdf", BO_FEES)
add(BA, "bus", "Economics and Finance (CLEF)", BO, "Bologna", ("بكالوريوس (Laurea)", "Bachelor's degree (Laurea)"), BA3, BO_FEE, NP, ("حسب إعلان القبول لعام 2026/2027؛ للتحقق", "Per the 2026/2027 call for applications; to verify"), NP, BO_OTHER,
    "https://corsi.unibo.it/s/3440/p/en/programme-enrollment-new-2/abstract-bando-etac-2025.pdf/@@download/file/Abstract bando ETAC_CLEF_2026 EN.pdf", BO_FEES)

# ---------- Politecnico di Milano ----------
PM = "Politecnico di Milano"
PM_FEE = ("الحد الأقصى للرسوم لغير الأوروبيين الحاصلين على بكالوريوس أجنبي وبدون منحة، حتى إذا قدموا ISEE معادل؛ حوالي 3,943 يورو سنوياً حسب مصادر تنقل جدول 2026/2027 (للتحقق)",
          "Non-EU students with a foreign bachelor's and no scholarship pay the maximum amount, even with an equivalent ISEE; about €3,943 a year per sources quoting the 2026/2027 table (to verify)")
PM_SRC = "https://www.polimi.it/en/prospective-students/how-much-does-it-cost/laurea-laurea-magistrale-and-single-cycle-programmes"
PM_DL = ("عدة جولات تقديم سنوياً لغير الأوروبيين؛ المواعيد غير منشورة في المصدر الذي راجعناه", "Several application rounds a year for non-EU applicants; dates not published in the source we checked")
add(MA, "cs", "Computer Science and Engineering", PM, "Milan", ("ماجستير العلوم (Laurea Magistrale)", "Master of Science (Laurea Magistrale)"), MSC2, PM_FEE, ("ضريبة إقليمية 190 يورو (الحد الأقصى لهذه الفئة)", "Regional tax of €190 (maximum for this category)"), PM_DL, NP,
    ("75 مقعداً لغير الأوروبيين من 580 في حرم Milano Leonardo (2026/2027)", "75 non-EU places out of 580 at the Milano Leonardo campus (2026/2027)"), PM_SRC, "https://www.polimi.it/en/prospective-students")
add(MA, "bus", "Management Engineering", PM, "Milan", ("ماجستير العلوم (Laurea Magistrale)", "Master of Science (Laurea Magistrale)"), MSC2, PM_FEE, ("ضريبة إقليمية 190 يورو (الحد الأقصى لهذه الفئة)", "Regional tax of €190 (maximum for this category)"), PM_DL, NP, NP, PM_SRC, "https://www.polimi.it/en/prospective-students")

# Master's at Bologna (official pages checked 2026-11-15). Fee: BO_FEE (reduced fixed fee for non-OECD nationals).
BO_LM = ("ماجستير (Laurea Magistrale)", "Master's degree (Laurea Magistrale)")
add(MA, "cs", "Artificial Intelligence", BO, "Bologna", BO_LM, MSC2, BO_FEE, NP,
    ("تقديم غير الأوروبيين المقيمين بالخارج لعام 2026/2027 أُغلق. ستُنشر مواعيد 2027/2028 في إعلان القبول (Call for admissions) على صفحة البرنامج (للتحقق)",
     "Applications from non-EU citizens living abroad for 2026/2027 have closed. 2027/2028 dates will appear in the call for admissions on the programme page (to verify)"),
    ("B2 (مثلاً IELTS 5.5 أو TOEFL iBT 80 أو PTE Academic 51)، على ألا تكون الشهادة أقدم من 3 سنوات؛ شهادة لغة الدراسة بالإنجليزية (MOI) غير مقبولة",
     "B2 (e.g. IELTS 5.5, TOEFL iBT 80 or PTE Academic 51), certificate no older than three years; Medium of Instruction letters are not accepted"),
    ("بكالوريوس 3 سنوات (180 ECTS) في علوم الحاسب أو هندسة الحاسب أو الرياضيات أو الفيزياء أو الإحصاء أو مجال قريب. القبول عبر لجنة اختيار، ويجب أن يكون المعدل 26 من 30 مع 18 ساعة معتمدة في علوم الحاسب على الأقل (أو 25.5 من 30 مع 48 ساعة)",
     "A 3-year bachelor's (180 ECTS) in computer science, computer engineering, mathematics, physics, statistics or a related field. Selection by committee; you need an average of 26/30 with at least 18 credits in computer science (or 25.5/30 with 48 credits)"),
    "https://corsi.unibo.it/2cycle/artificial-intelligence/how-to-enrol", BO_FEES)
add(MA, "eng", "Aerospace Engineering", BO, "Forlì", BO_LM, MSC2, BO_FEE, NP,
    ("لغير الأوروبيين المقيمين بالخارج (Intake I): في 2026/2027 كان التقديم 12 ديسمبر 2025 - 3 فبراير 2026 والنتيجة 27 فبراير. المتوقع الفترة نفسها لعام 2027/2028: من ديسمبر إلى 3 فبراير تقريباً (للتحقق)",
     "Non-EU citizens living abroad (Intake I): for 2026/2027 applications ran 12 December 2025 - 3 February 2026, results on 27 February 2026. The same window is expected for 2027/2028, from December to around 3 February (to verify)"),
    ("B2: IELTS 5.5 أو TOEFL iBT 80 على الأقل، أو FCE أو Trinity ISE II، والشهادة من 1 يناير 2023 أو بعدها؛ من درس البكالوريوس بالإنجليزية معفى",
     "B2: at least IELTS 5.5 or TOEFL iBT 80, or FCE or Trinity ISE II, obtained from 1 January 2023; holders of an English-taught degree are exempt"),
    ("15 مقعد لغير الأوروبيين المقيمين بالخارج (2026/2027). بكالوريوس في الهندسة الصناعية أو هندسة المعلومات أو الهندسة المدنية أو الفيزياء أو علوم الحاسب أو الرياضيات، أو ما يعادلها",
     "15 places for non-EU citizens living abroad (2026/2027). A bachelor's in industrial, information or civil engineering, physics, computer science or mathematics, or an equivalent"),
    "https://corsi.unibo.it/s/3427/p/en/programme-enrolment-new/bando-lm-mae-26-27_eng.pdf/@@download/file/Bando%20LM%20MAE%2026-27_ENG.pdf", BO_FEES)

# ---------- Medicine in English via IMAT ----------
IMAT_DL = ("اختبار IMAT الوطني عبر Universitaly مع التسجيل المسبق لغير الأوروبيين. مواعيد 2027 لم تُنشر بعد؛ اختبار 2026 كان في 30 سبتمبر حسب مصادر غير رسمية، والمتوقع في الخريف (للتحقق)",
           "The national IMAT test via Universitaly, plus pre-registration for non-EU applicants. 2027 dates not published yet; the 2026 test was on 30 September according to unofficial sources, and an autumn date is expected (to verify)")
IMAT_OTHER = ("مقاعد منفصلة لغير الأوروبيين المقيمين بالخارج، ويكفيهم الحصول على درجة أعلى من صفر في IMAT للدخول في الترتيب", "Separate places for non-EU applicants living abroad, who only need an IMAT score above zero to be ranked")
FLAT = ("الرسوم تعتمد على نظام الرسوم الثابتة (Flat Rate) حسب تصنيف بلد الجنسية؛ المبالغ في لائحة رسوم الجامعة", "Fees follow the Flat Rate brackets by country of citizenship; amounts are in the university's fee regulation")
add(BA, "med", "Medicine and Surgery (Harvey course, in English)", "University of Pavia", "Pavia", ("ماجستير موحد في الطب والجراحة (LM-41)", "Single-cycle master's in Medicine and Surgery (LM-41)"), MED6, FLAT, NP, IMAT_DL,
    ("لا يشترط شهادة إنجليزي للتسجيل في IMAT؛ بعض الجامعات تطلب B2 عند التسجيل النهائي", "No English certificate needed to sit the IMAT; some universities ask for B2 at enrolment"), IMAT_OTHER,
    "https://medicineandsurgeryharvey.cdl.unipv.it/en/node/124", "https://en.unipv.it/sites/sten/files/2026-05/Fla%20Rate%20brackets%20a.y.%202026-27.pdf")
add(BA, "med", "Medicine and Surgery (in English)", "University of Messina", "Messina", ("ماجستير موحد في الطب والجراحة (LM-41)", "Single-cycle master's in Medicine and Surgery (LM-41)"), MED6, FLAT, NP, IMAT_DL,
    ("لا يشترط شهادة إنجليزي للتسجيل في IMAT؛ بعض الجامعات تطلب B2 عند التسجيل النهائي", "No English certificate needed to sit the IMAT; some universities ask for B2 at enrolment"), IMAT_OTHER,
    "https://international.unime.it/study-us/english-taught-programmes/imat-test-info-page", "https://international.unime.it/study-us/english-taught-programmes/imat-test-info-page")

write("إيطاليا", "Italy", "italy", BA, level="bachelor")
write("إيطاليا", "Italy", "italy", MA, level="master")
