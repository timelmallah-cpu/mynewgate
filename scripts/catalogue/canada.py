# Canada: Memorial University of Newfoundland (public university, St. John's), one of the lowest graduate tuition levels in Canada.
# Sources (checked 2026-11-19): mun.ca/become/graduate/tuition-fees-and-funding (total programme tuition for international students:
# master's 2 years CAD 9,666, also the Master of Artificial Intelligence and Software Engineering; non-thesis routes of some
# programmes CAD 15,600; special and ancillary fees extra) and mun.ca/become/graduate/apply-to-memorial/application-deadlines
# (fall intake deadlines, published without a year, so they are estimates). Euro figures: ECB rate of 17 Nov 2026 (1.5704 CAD per euro).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import write, NP
from helpers import add, append_master

MA = []
UNI = "Memorial University of Newfoundland"
FEES = "https://www.mun.ca/become/graduate/tuition-fees-and-funding/"
DL = "https://www.mun.ca/become/graduate/apply-to-memorial/application-deadlines/"
Y2 = ("سنتان (6 فصول في نظام الجامعة الذي فيه 3 فصول في السنة)", "2 years (6 semesters; the university has 3 semesters a year)")
FEE = ("حوالي 6,160 يورو للبرنامج كاملاً (9,666 دولاراً كندياً رسوم دراسة إجمالية للطلاب الدوليين في ماجستير السنتين، بدون الرسوم الإضافية للخدمات والتأمين الصحي؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
       "About €6,160 for the whole programme (CAD 9,666 total tuition for international students on a two-year master's, excluding ancillary fees and health insurance; ECB rate of 17 November 2026)")
ADM_T = ("بكالوريوس في المجال بمعدل جيد؛ برامج الرسالة تحتاج عادة موافقة مشرف من القسم، فتواصل مع الأساتذة قبل التقديم (للتحقق مع القسم)",
         "A bachelor's in the field with a good grade; thesis programmes usually need a supervisor from the department, so contact professors before applying (check with the department)")
EN = ("شهادة إنجليزية حسب شروط كلية الدراسات العليا والقسم (الحد الأدنى غير منشور هنا، للتحقق)", "An English certificate per the School of Graduate Studies and the department (minimum not published here, to verify)")
HOW = ("التقديم أونلاين على بوابة كلية الدراسات العليا في الجامعة (School of Graduate Studies)", "Apply online through the university's School of Graduate Studies portal")
MSC = ("ماجستير العلوم (MSc)", "Master of Science (MSc)")
for field, name, deg, dl, other, fee, dur, adm in [
    ("cs", "Master of Artificial Intelligence", ("ماجستير الذكاء الاصطناعي (بالمقررات)", "Master of Artificial Intelligence (course-based)"),
     ("1 ديسمبر لجميع المتقدمين (دفعة الخريف فقط، والدولي بعد ذلك حسب الأماكن المتبقية)", "1 December for all applicants (fall intake only; later international applications only if seats remain)"),
     ("برنامج مقررات مشترك بين قسمي علوم الحاسب وهندسة الحاسب", "Course-based programme run jointly by Computer Science and Computer Engineering"),
     ("حوالي 6,160 يورو للبرنامج كاملاً (9,666 دولاراً كندياً رسوم دراسة إجمالية للطلاب الدوليين، بدون الرسوم الإضافية والتأمين؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
      "About €6,160 for the whole programme (CAD 9,666 total tuition for international students, excluding ancillary fees and insurance; ECB rate of 17 November 2026)"),
     ("4 فصول دراسية (حوالي 16 شهراً)", "4 semesters (about 16 months)"),
     ("بكالوريوس في علوم الحاسب أو الهندسة أو مجال قريب؛ القبول تنافسي حسب الأداء الأكاديمي", "A bachelor's in computer science, engineering or a related field; admission is competitive on academic performance")),
    ("cs", "MSc Computer Science (thesis route)", MSC, ("1 ديسمبر (دفعة الخريف)", "1 December (fall intake)"), ("علوم الحاسب بمسار الرسالة؛ المسار بالمقررات له رسوم أعلى (15,600 دولار كندي)", "Computer science, thesis route; the course route costs more (CAD 15,600)"), FEE, Y2, ADM_T),
    ("eng", "Master of Engineering (thesis)", ("ماجستير الهندسة (MEng)", "Master of Engineering (MEng)"), ("1 ديسمبر (دفعة الخريف)", "1 December (fall intake)"), ("الهندسة بمسار الرسالة في كلية الهندسة والعلوم التطبيقية", "Engineering, thesis route, Faculty of Engineering and Applied Science"), FEE, Y2, ADM_T),
    ("sci", "MSc Physics", MSC, ("1 فبراير (دفعة الخريف)", "1 February (fall intake)"), ("الفيزياء", "Physics"), FEE, Y2, ADM_T),
    ("sci", "MSc Biology", MSC, ("31 يناير (دفعة الخريف)", "31 January (fall intake)"), ("علم الأحياء", "Biology"), FEE, Y2, ADM_T),
    ("sci", "MSc Mathematics and Statistics", MSC, ("15 يناير (دفعة الخريف)", "15 January (fall intake)"), ("الرياضيات والإحصاء", "Mathematics and statistics"), FEE, Y2, ADM_T),
    ("env", "MSc Environmental Science", MSC, ("1 فبراير (دفعة الخريف)", "1 February (fall intake)"), ("علوم البيئة", "Environmental science"), FEE, Y2, ADM_T),
    ("psych", "MSc Psychology", MSC, ("1 فبراير (دفعة الخريف)", "1 February (fall intake)"), ("علم النفس (بحثي)", "Psychology (research)"), FEE, Y2, ADM_T),
    ("pol", "MA Political Science", ("ماجستير الآداب (MA)", "Master of Arts (MA)"), ("15 يناير (دفعة الخريف)", "15 January (fall intake)"), ("العلوم السياسية", "Political science"), FEE, Y2, ADM_T),
]:
    add(MA, field, name, UNI, "St. John's", deg, dur, fee, adm, dl, EN, other, HOW, NP, NP, FEES, DL)

write("كندا", "Canada", "canada", MA, level="master")
append_master("كندا", "canada")
print("canada:", len(MA), "master's")
