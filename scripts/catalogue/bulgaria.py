# Bulgaria: English-taught programmes at public universities: 6-year Medicine (bachelor's level in our data, long-cycle)
# and master's at the Technical University of Sofia. Bulgaria uses the euro since 1 January 2026.
# Sources: official university pages, checked 2026-11-15. Master's rows are also copied into all_programmes.csv.
import sys, os, csv
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, MED6, ROOT

MA, BA = [], []


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, living, house, src, apply, apply_note=("صفحة القبول للطلاب الأجانب", "Admission page for international students")):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                 living=living, house=house, src=src, req=src, req_note=("صفحة القبول الرسمية", "Official admission page"), apply=apply,
                 apply_note=apply_note))


MD = ("طب بشري (ماجستير متكامل في الطب)", "Medicine (integrated Master's degree)")
VISA = ("بعد القبول ترسل الجامعة ملفك لوزارة التعليم البلغارية لتصدر شهادة تقدّمها لتأشيرة D في السفارة البلغارية", "After admission the university sends your file to the Bulgarian Ministry of Education, which issues the certificate you present for the D visa at the Bulgarian embassy")

add(BA, "med", "Medicine (in English)", "Medical University of Sofia", "Sofia", MD, MED6,
    ("9,950 يورو سنوياً حسب مصادر غير رسمية تنقل عن الجامعة لعام 2026/2027 (للتحقق من صفحة الرسوم)", "€9,950 per year per unofficial sources quoting the university for 2026/2027 (check the fees page)"),
    NP, ("مواعيد امتحانات القبول لـ 2027/2028 لسه ما اتنشرتش في المصدر. الدراسة في 2026/2027 بدأت في أكتوبر؛ راجع صفحة القبول في الجامعة من أوائل 2027", "2027/2028 exam dates not published yet; the 2026/2027 year started on 19 October 2026"),
    ("امتحان إنجليزي ضمن القبول، وفيه سنة تحضيرية للإنجليزية لمن يحتاجها", "An English test is part of admission; there is a preparatory English year for those who need it"),
    ("امتحانات قبول في الأحياء والكيمياء بالإنجليزية لغير الأوروبيين (حسب مصادر غير رسمية، للتحقق)", "Entrance exams in Biology and Chemistry in English for non-EU applicants (per unofficial sources, to verify)"),
    VISA, NP, NP, "https://mu-sofia.bg/en/admissions/", "https://mu-sofia.bg/en/admissions/")
add(BA, "med", "Medicine (in English)", "Medical University of Plovdiv", "Plovdiv", MD, MED6, NP, NP,
    ("لعام 2026/2027 كانت الامتحانات أونلاين في 15 أبريل و15 مايو 2026، وآخر موعد للتقديم 11 سبتمبر؛ مواعيد 2027/2028 غير منشورة بعد", "For 2026/2027 the online exams were on 15 April and 15 May 2026 and the application deadline was 11 September; 2027/2028 dates are not published yet"),
    ("امتحان إنجليزي ضمن امتحانات القبول", "English is part of the entrance exams"),
    ("امتحانات أونلاين في الأحياء والكيمياء والإنجليزية، وترتيب شهري من أبريل حتى يونيو بموعد تسجيل لكل ترتيب", "Online exams in Biology, Chemistry and English, with a monthly ranking from April to June, each with its own enrolment deadline"),
    VISA,
    NP, NP, "https://mu-plovdiv.bg/en/admission-info/", "https://mu-plovdiv.bg/en/admission-info/")
add(BA, "med", "Medicine in English", "Medical University of Varna", "Varna", MD, MED6,
    ("10,000 يورو للسنة الأولى، 9,100 يورو للسنتين الثانية والثالثة، 9,000 يورو من الرابعة للسادسة (رسوم 2025/2026)", "€10,000 for the first year, €9,100 for years two and three, €9,000 for years four to six (2025/2026 fees)"),
    NP, NP, ("سنة تحضيرية في الإنجليزية (9 أشهر، 5,000 يورو) لمن ليس مستواه كافياً", "A 9-month preparatory English course (€5,000) for those whose English is not enough"),
    NP, VISA, NP, NP, "https://www.mu-varna.bg/EN/Admission/Pages/tuition-fees-cost-living.aspx", "https://www.mu-varna.bg/EN/Admission/Pages/non-eu-how-to-apply.aspx")
add(BA, "med", "Medicine in English language", "Medical University of Pleven", "Pleven", MD, MED6,
    ("9,000 يورو سنوياً (2026/2027)، تُدفع على قسطين", "€9,000 per year (2026/2027), paid in two halves"),
    ("رسوم تسجيل 40 يورو ورسوم امتحان القبول 200 يورو، لا تُستردان", "€40 registration fee and €200 entrance exam fee, non-refundable"),
    NP, ("سنة تحضيرية في الإنجليزية بـ 4,000 يورو", "Preparatory English course: €4,000"), ("امتحانات قبول", "Entrance exams"), VISA,
    ("500 يورو شهرياً على الأقل حسب الجامعة (أكل 250-300 يورو)", "At least €500 a month per the university (food €250-300)"),
    ("سكن الجامعة 75-95 يورو شهرياً؛ غرفة في شقة خاصة 150-300 يورو", "University hostel €75-95 a month; a room in a private flat €150-300"),
    "https://www.mu-pleven.bg/index.php/admission/specialty-medicine/641-fees?lang=en", "https://www.mu-pleven.bg/index.php/admission/specialty-medicine/641-fees?lang=en")

# ---------- Master's: Technical University of Sofia (English-taught) ----------
TU = "Technical University of Sofia"
TU_FEE = ("3,000 يورو سنوياً حسب أدلة غير رسمية (للتحقق من الجامعة)", "€3,000 per year per unofficial guides (check with the university)")
TU_HOW = ("الملف لقسم الطلاب الأجانب في الجامعة، ثم ترسله لوزارة التعليم وتصدر لك شهادة تقدّمها لتأشيرة D في السفارة", "Send your file to the university's Foreign Students Department; it forwards it to the Ministry of Education, which issues the certificate you present for the D visa at the embassy")
TU_SRC = "https://tu-sofia.bg/foreign-applications/site/index/page/visa"
MENG = ("ماجستير", "Master's degree")
add(MA, "cs", "Computer Science and Engineering (in English)", TU, "Sofia", MENG, ("3 فصول دراسية (سنة ونصف) حسب دليل غير رسمي (للتحقق)", "1.5 years (3 semesters) per an unofficial guide (to verify)"),
    TU_FEE, NP, NP, NP, NP, TU_HOW, NP, NP, TU_SRC, TU_SRC, ("إجراءات الطلاب الأجانب والتأشيرة", "Foreign students and visa procedure"))
add(MA, "bus", "Management and Business Information Systems (in English)", TU, "Sofia", MENG, ("سنة واحدة حسب دليل غير رسمي (للتحقق)", "1 year per an unofficial guide (to verify)"),
    TU_FEE, NP, NP, NP, NP, TU_HOW, NP, NP, TU_SRC, TU_SRC, ("إجراءات الطلاب الأجانب والتأشيرة", "Foreign students and visa procedure"))
add(MA, "eng", "Industrial Engineering (in English)", TU, "Sofia", MENG, ("3 فصول دراسية (سنة ونصف) حسب دليل غير رسمي (للتحقق)", "1.5 years per an unofficial guide (to verify)"),
    TU_FEE, NP, NP, NP, NP, TU_HOW, NP, NP, TU_SRC, TU_SRC, ("إجراءات الطلاب الأجانب والتأشيرة", "Foreign students and visa procedure"))

write("بلغاريا", "Bulgaria", "bulgaria", BA, level="bachelor")
write("بلغاريا", "Bulgaria", "bulgaria", MA, level="master")

ap = os.path.join(ROOT, "data", "programmes", "all_programmes.csv")
rows = list(csv.reader(open(ap, encoding="utf-8-sig")))
hdr, body = rows[0], [r for r in rows[1:] if r and r[1] != "بلغاريا"]
nxt = max(int(r[0]) for r in body) + 1
bg = list(csv.reader(open(os.path.join(ROOT, "data", "programmes", "bulgaria.csv"), encoding="utf-8-sig")))[1:]
for i, r in enumerate(bg):
    body.append([str(nxt + i)] + r[1:])
with open(ap, "w", newline="", encoding="utf-8-sig") as f:
    csv.writer(f).writerows([hdr] + body)
print("all_programmes.csv:", len(body), "rows; Bulgaria ids", nxt, "-", nxt + len(bg) - 1)
