# Cyprus (Republic of Cyprus): English-taught master's programmes at the public Cyprus University of Technology (CUT).
# Most CUT master's cost the same for every nationality. Sources: official CUT pages, checked 2026-11-16.
# Master's rows are also copied into all_programmes.csv.
import sys, os, csv
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, ROOT

MA = []


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, living, house, src, apply, apply_note=("صفحة التقديم الرسمية", "Official application page")):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                 living=living, house=house, src=src, req=src, req_note=("صفحة الشروط والرسوم الرسمية", "Official requirements and fees page"), apply=apply,
                 apply_note=apply_note))


CUT = "https://cut.ac.cy/studies/admissions/master-phd-admissions/masters_positions_2025/supporting_documents/"
LIST = "https://cut.ac.cy/studies/masters/master-programmes/"
DL = ("لدفعة سبتمبر 2026 كان آخر موعد لمن يحتاج تصريح دخول من خارج الاتحاد الأوروبي 12 يونيو 2026 (مواعيد 2027 للتحقق)", "For the September 2026 intake, the deadline for non-EU applicants needing an entry permit was 12 June 2026 (2027 dates to verify)")
HOW = ("التقديم أونلاين للجامعة، والجامعة تقدّم طلب تصريح الدخول لإدارة الهجرة نيابة عنك", "Apply online to the university, which files your entry permit application with the Migration Department")
add(MA, "ph", "Master in Public Health (MPH)", "Cyprus University of Technology (CUT)", "Limassol",
    ("ماجستير الصحة العامة (MPH)", "Master in Public Health (MPH)"), NP,
    ("5,125 يورو للبرنامج كاملاً، بنفس السعر لكل الجنسيات", "€5,125 for the full programme, the same for every nationality"),
    NP, DL, NP, ("يُدرَّس بالإنجليزية حضورياً أو بنظام هجين", "Taught in English, in person or hybrid"), HOW, NP, NP, CUT, LIST)
add(MA, "bus", "MSc Experiential Digital Marketing Communications", "Cyprus University of Technology (CUT)", "Limassol",
    ("ماجستير (MSc)", "Master's degree (MSc)"), NP,
    ("7,500 يورو للبرنامج كاملاً", "€7,500 for the full programme"),
    NP, DL, NP, ("يُدرَّس بالإنجليزية حضورياً أو بنظام هجين", "Taught in English, in person or hybrid"), HOW, NP, NP, CUT, LIST)

write("قبرص", "Cyprus", "cyprus", MA, level="master")

ap = os.path.join(ROOT, "data", "programmes", "all_programmes.csv")
rows = list(csv.reader(open(ap, encoding="utf-8-sig")))
hdr, body = rows[0], [r for r in rows[1:] if r and r[1] != "قبرص"]
nxt = max(int(r[0]) for r in body) + 1
cy = list(csv.reader(open(os.path.join(ROOT, "data", "programmes", "cyprus.csv"), encoding="utf-8-sig")))[1:]
for i, r in enumerate(cy):
    body.append([str(nxt + i)] + r[1:])
with open(ap, "w", newline="", encoding="utf-8-sig") as f:
    csv.writer(f).writerows([hdr] + body)
print("all_programmes.csv:", len(body), "rows; Cyprus ids", nxt, "-", nxt + len(cy) - 1)
