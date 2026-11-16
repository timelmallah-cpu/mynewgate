# Austria: English-taught programmes at public universities. Non-EU students pay €726.72 per semester plus the ÖH fee.
# Sources: official university pages, checked 2026-11-15. Master's rows are also copied into all_programmes.csv.
import sys, os, csv
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, ROOT

MA, BA = [], []


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, living, house, src, apply, apply_note=("صفحة القبول الرسمية", "Official admission page")):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                 living=living, house=house, src=src, req=src, req_note=("صفحة البرنامج الرسمية", "Official programme page"), apply=apply,
                 apply_note=apply_note))


FEE = ("1,453.44 يورو سنوياً لغير الأوروبيين (726.72 يورو كل فصل دراسي) زائد رسوم اتحاد الطلاب ÖH", "€1,453.44 a year for non-EU students (€726.72 each semester) plus the ÖH student union fee")
FEE_SRC = "https://studienabteilung.uni-graz.at/en/tuition-fee/tuition-fee-reimbursement/"
MSC = ("ماجستير (Dipl.-Ing. / MSc)", "Master's degree (Dipl.-Ing. / MSc)")
MSC2 = ("ماجستير علوم (MSc)", "Master of Science (MSc)")
BSC = ("بكالوريوس علوم (BSc)", "Bachelor of Science (BSc)")
TU_DL = ("لغير الأوروبيين موعد خاص في التقويم الأكاديمي لـ TU Wien، ويجب أن يكون الملف كاملاً بكل الأوراق والتصديقات قبله (للتحقق من الموعد)", "Non-EU applicants have a separate deadline in TU Wien's academic calendar; the file must be complete with all documents and certifications by then (check the date)")
TU_EN = ("إنجليزي B2 على الأقل", "English at least B2 (CEFR)")
TU_HOW = ("التقديم أونلاين لمكتب القبول في TU Wien", "Apply online to TU Wien's Admission Office")
TU_CAL = "https://www.tuwien.at/en/studies/admission/academic-calendar"

add(MA, "ds", "Data Science", "TU Wien", "Vienna", MSC, ("سنتان (120 ECTS)", "2 years (120 ECTS)"), FEE, NP, TU_DL, TU_EN,
    ("بالإنجليزية فقط", "Offered only in English"), TU_HOW, NP, NP,
    "https://www.tuwien.at/en/studies/studies/master-programmes/computer-science", TU_CAL, ("التقويم الأكاديمي والمواعيد", "Academic calendar and deadlines"))
add(MA, "cs", "Logic and Computation", "TU Wien", "Vienna", MSC, ("سنتان (120 ECTS)", "2 years (120 ECTS)"), FEE, NP, TU_DL, TU_EN,
    ("بالإنجليزية فقط", "Offered only in English"), TU_HOW, NP, NP,
    "https://www.tuwien.at/en/studies/studies/master-programmes/computer-science", TU_CAL, ("التقويم الأكاديمي والمواعيد", "Academic calendar and deadlines"))
add(MA, "cs", "Artificial Intelligence", "Johannes Kepler University Linz (JKU)", "Linz", MSC2, ("4 فصول دراسية (120 ECTS)", "4 semesters (120 ECTS)"), FEE, NP, NP,
    ("إنجليزي B2", "English B2"), ("يُشترط بكالوريوس قريب من بكالوريوس الذكاء الاصطناعي في JKU، ويُعوَّض الفرق بمواد إضافية", "You need a bachelor's close to JKU's AI bachelor; gaps are covered by extra courses"),
    ("التقديم أونلاين بحساب المتقدمين في JKU", "Apply online with a JKU applicant account"), NP, NP,
    "https://www.jku.at/fileadmin/marketing/01_STUDIEN/MA-Artificial-Intelligence.pdf", "https://studienhandbuch.jku.at/text/933", ("لائحة البرنامج", "Programme curriculum"))
add(MA, "ds", "Data Science", "University of Vienna", "Vienna", MSC2, ("سنتان حسب بوابة Studyportals (للتحقق)", "2 years per Studyportals (to verify)"), FEE, NP,
    ("التقديم مرة واحدة في السنة؛ مواعيد 2027/2028 غير منشورة في المصدر بعد", "One application round a year; 2027/2028 dates not published in the source yet"),
    NP, ("يوجد اختيار تنافسي، و40 مقعداً في السنة، ونتيجة GRE مطلوبة", "Competitive selection, 40 places a year, and GRE results are required"),
    ("التقديم أونلاين لجامعة فيينا", "Apply online to the University of Vienna"), NP, NP,
    "https://datascience.univie.ac.at/master25", "https://studieren.univie.ac.at/en/find-your-degree-programme/masters-programmes/data-science-masters-programme")

add(BA, "cs", "Artificial Intelligence", "Johannes Kepler University Linz (JKU)", "Linz", BSC, ("6 فصول دراسية (3 سنوات)", "6 semesters (3 years)"), FEE, NP, NP,
    ("إنجليزي B2", "English B2"), ("لغير الأوروبيين يجب أن تكون شهادتك الثانوية مؤهلة للتخصص نفسه في بلدك (للتحقق)", "Non-EU applicants also need their certificate to give access to the same field at home (to verify)"),
    ("التقديم أونلاين بحساب المتقدمين في JKU", "Apply online with a JKU applicant account"), NP, NP,
    "https://jku.at/en/centre-for-distance-studies-austria/distance-studies-jku/artificial-intelligence", "https://www.jku.at/en/")

write("النمسا", "Austria", "austria", BA, level="bachelor")
write("النمسا", "Austria", "austria", MA, level="master")

ap = os.path.join(ROOT, "data", "programmes", "all_programmes.csv")
rows = list(csv.reader(open(ap, encoding="utf-8-sig")))
hdr, body = rows[0], [r for r in rows[1:] if r and r[1] != "النمسا"]
nxt = max(int(r[0]) for r in body) + 1
at = list(csv.reader(open(os.path.join(ROOT, "data", "programmes", "austria.csv"), encoding="utf-8-sig")))[1:]
for i, r in enumerate(at):
    body.append([str(nxt + i)] + r[1:])
with open(ap, "w", newline="", encoding="utf-8-sig") as f:
    csv.writer(f).writerows([hdr] + body)
print("all_programmes.csv:", len(body), "rows; Austria ids", nxt, "-", nxt + len(at) - 1)
