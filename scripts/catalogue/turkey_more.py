# Türkiye batch 2 (append-only; re-run after turkey.py): English-taught master's at two more state universities in Istanbul.
# Boğaziçi University (all teaching in English): international graduate tuition US$500 per semester
# (globalstudents.bogazici.edu.tr tuition page and the 2026-2027 intake fee sheet), spring 2027 window 14-21 December 2026
# (adaylar.bogazici.edu.tr programme pages). Istanbul Technical University (ITU): only programmes the Graduate School marks
# "%100 English" (lee.itu.edu.tr/en/education/graduate-programs); international-quota graduate tuition 33,300 TL a year in
# 2026-2027 (sis.itu.edu.tr tuition page). Checked 2026-11-19. Euro figures are approximate (US$1.11 per euro).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import NP
from helpers import add, append_extra

REVIEWED = "2026-11-19"
MA = []
MS = ("ماجستير العلوم (MS)", "Master of Science (MS)")
MAA = ("ماجستير الآداب (MA)", "Master of Arts (MA)")
Y2 = ("سنتان (4 فصول)", "2 years (4 semesters)")

# ---------------- Boğaziçi University
BU = "Boğaziçi University"
BU_FEE = ("حوالي 450 يورو للفصل (500 دولار أمريكي للفصل لطلاب الدراسات العليا الدوليين؛ التحويل تقريبي)",
          "About €450 per semester (US$500 per semester for international graduate students; approximate conversion)")
BU_ADM = ("بكالوريوس في مجال مناسب وخطاب أهداف؛ درجة ALES أو GRE حسب البرنامج (يمكن تقديمها بعد القبول في بعض البرامج) وامتحان أو مقابلة في القسم",
          "A bachelor's in a suitable field and a statement of purpose; an ALES or GRE score depending on the programme (some programmes accept it after admission) and a departmental exam or interview")
BU_DL = ("فصل ربيع 2027: التقديم من 14 حتى 21 ديسمبر 2026 ثم امتحانات الأقسام؛ ليس كل برنامج يقبل طلاباً في الربيع، وتقديم الخريف عادة بين أبريل ويونيو",
         "Spring 2027: applications 14 December - 21 December 2026, followed by departmental exams; not every programme admits in spring, and fall applications usually run between April and June")
BU_EN = ("الدراسة كلها بالإنجليزية؛ يلزم إثبات المستوى بامتحان الجامعة BUEPT أو شهادة تقبلها الجامعة، ومن لا يستوفيه قد يدرس سنة تحضيرية",
         "All teaching is in English; you must prove your level with the university's BUEPT exam or a certificate it accepts, otherwise a preparatory year may be needed")
BU_HOW = ("التقديم أونلاين على نظام التقديم للدراسات العليا في الجامعة (رسوم 50 يورو أو 50 دولاراً)", "Apply online through the university's graduate application system (fee €50 or US$50)")
BU_SRC = "https://adaylar.bogazici.edu.tr/en-EN/Page/Admissions/Graduate/Physics"
BU_FEES = "https://globalstudents.bogazici.edu.tr/en/pages/tuition-fees/3022"
for field, name, deg, other in [
    ("cs", "Computer Engineering (MS)", MS, ("هندسة الحاسب", "Computer engineering")),
    ("eng", "Electrical and Electronics Engineering (MS)", MS, ("الهندسة الكهربائية والإلكترونية", "Electrical and electronics engineering")),
    ("eng", "Industrial Engineering (MS)", MS, ("الهندسة الصناعية", "Industrial engineering")),
    ("eng", "Mechanical Engineering (MS)", MS, ("الهندسة الميكانيكية", "Mechanical engineering")),
    ("eng", "Civil Engineering (MS)", MS, ("الهندسة المدنية", "Civil engineering")),
    ("sci", "Physics (MS)", MS, ("الفيزياء", "Physics")),
    ("sci", "Mathematics (MS)", MS, ("الرياضيات", "Mathematics")),
    ("sci", "Molecular Biology and Genetics (MS)", MS, ("البيولوجيا الجزيئية وعلم الوراثة", "Molecular biology and genetics")),
    ("econ", "Economics (MA)", MAA, ("الاقتصاد", "Economics")),
    ("pol", "Political Science and International Relations (MA)", MAA, ("العلوم السياسية والعلاقات الدولية", "Political science and international relations")),
]:
    add(MA, field, name, BU, "Istanbul", deg, Y2, BU_FEE, BU_ADM, BU_DL, BU_EN, other, BU_HOW, NP, NP, BU_FEES, BU_SRC)

# ---------------- Istanbul Technical University (programmes marked 100% English)
ITU = "Istanbul Technical University (ITU)"
ITU_FEE = ("حوالي 700 يورو في السنة (33,300 ليرة تركية في السنة لطلاب الدراسات العليا ضمن الحصة الدولية في 2026/2027، تُدفع على قسطين؛ القيمة باليورو تتغير مع سعر الليرة والتحويل تقريبي)",
           "About €700 a year (33,300 Turkish lira a year for international-quota graduate students in 2026/2027, paid in two instalments; the euro value moves with the lira and the conversion is approximate)")
ITU_ADM = ("بكالوريوس في مجال مناسب؛ ALES 55 على الأقل أو ما يعادلها من GRE، ومقابلة في البرنامج",
           "A bachelor's in a suitable field; ALES 55 or more or the GRE equivalent, and an interview by the programme")
ITU_DL = ("التقديم مرتين في السنة: الربيع عادة من أكتوبر حتى يناير (في الدورة الماضية حتى 26 يناير 2026) والخريف من أبريل حتى يونيو (في 2026 حتى 26 يونيو)؛ مواعيد ربيع 2027 تُعلن على موقع شؤون الطلاب",
          "Two intakes a year: spring usually October to January (last cycle until 26 January 2026) and fall April to June (in 2026 until 26 June); spring 2027 dates are announced by the Registrar's Office")
ITU_EN = ("البرنامج بالإنجليزية 100%؛ يلزم إثبات المستوى بامتحان الجامعة أو شهادة تقبلها (الحد الأدنى غير منشور هنا، للتحقق)",
          "The programme is 100% in English; you must prove your level with the university's exam or a certificate it accepts (minimum not published here, to verify)")
ITU_HOW = ("التقديم أونلاين على نظام شؤون الطلاب (sis.itu.edu.tr) في صفحة الطلاب الدوليين", "Apply online through the Registrar's Office system (sis.itu.edu.tr), international students page")
ITU_SRC = "https://lee.itu.edu.tr/en/education/graduate-programs"
ITU_FEES = "https://www.sis.itu.edu.tr/EN/student/tuition-fee/fees/20271020/tutionfees.php"
for field, name, other in [
    ("eng", "Astronautical Engineering (M.Sc.)", ("هندسة الفضاء", "Astronautical engineering")),
    ("econ", "Economics (M.Sc.)", ("الاقتصاد", "Economics")),
    ("env", "Environmental Biotechnology (M.Sc.)", ("التقنية الحيوية البيئية", "Environmental biotechnology")),
    ("cs", "Game and Interaction Technologies (M.Sc.)", ("تقنيات الألعاب والتفاعل", "Game and interaction technologies")),
    ("sci", "Nano Science and Nano Engineering (M.Sc.)", ("علوم وهندسة النانو", "Nano science and nano engineering")),
    ("env", "Polar Sciences (M.Sc.)", ("العلوم القطبية", "Polar sciences")),
    ("pol", "Political Studies (M.Sc.)", ("الدراسات السياسية", "Political studies")),
    ("eng", "Offshore Engineering (M.Sc.)", ("الهندسة البحرية للمنشآت في عرض البحر", "Offshore engineering")),
    ("env", "Sustainability (M.Sc.)", ("الاستدامة", "Sustainability")),
    ("arch", "Interior Architecture (M.Sc.)", ("العمارة الداخلية", "Interior architecture")),
]:
    add(MA, field, name, ITU, "Istanbul", MS, Y2, ITU_FEE, ITU_ADM, ITU_DL, ITU_EN, other, ITU_HOW, NP, NP, ITU_FEES, ITU_SRC)

if __name__ == "__main__":
    append_extra("تركيا", "turkey", MA, REVIEWED)
    print("turkey_more:", len(MA), "master's")
