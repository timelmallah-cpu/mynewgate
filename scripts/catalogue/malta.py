# Malta: English-taught master's programmes at the public University of Malta (UM). Non-EU students pay the
# non-EU fee shown on each course page. Sources: official UM course pages (2026/7), checked 2026-11-16.
# Master's rows are also copied into all_programmes.csv.
import sys, os, csv
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, SEM3, ROOT

MA = []


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, living, house, src, apply, apply_note=("صفحة البرنامج والتقديم", "Programme and application page")):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                 living=living, house=house, src=src, req=src, req_note=("صفحة البرنامج الرسمية", "Official programme page"), apply=apply,
                 apply_note=apply_note))


MSC = ("ماجستير (MSc)", "Master's degree (MSc)")
DL = ("الجامعة تقول إن المواعيد تختلف حسب البرنامج والدفعة؛ موعد غير الأوروبيين غير منشور في صفحة البرنامج", "The university says deadlines vary by course and intake; the non-EU date is not published on the course page")
EN = ("حسب صفحة متطلبات اللغة الإنجليزية في الجامعة", "Per the university's English language requirements page")
HOW = ("التقديم أونلاين على بوابة جامعة مالطا، ومكتب الطلاب الدوليين يساعد في التأشيرة والسكن بعد القبول", "Apply online on the University of Malta portal; the International Office helps with the visa and housing after an offer")

ECN = "https://www.um.edu.mt/courses/overview/pmscecnftt5-2026-7-o/"
add(MA, "econ", "Master of Science in Economics", "University of Malta (UM)", "Msida", MSC, SEM3,
    ("10,800 يورو للبرنامج كاملاً لغير الأوروبيين (2026/2027)", "€10,800 for the full programme for non-EU students (2026/2027)"),
    NP, DL, EN,
    ("دوام كامل وأغلبه دراسة مقررات؛ يشترط بكالوريوس تجارة أو اقتصاد بتقدير Second Class Honours أو ما يعادله، وقد تُطلب مقررات تكميلية حتى 12 ساعة معتمدة", "Full-time and mainly taught; requires a commerce or economics bachelor's with at least Second Class Honours or equivalent, and supplementary units of up to 12 ECTS may be required"),
    HOW, NP, NP, ECN, ECN)

ICT = "https://www.um.edu.mt/courses/overview/pmscictftr0-2026-7-o/"
add(MA, "cs", "Master of Science in ICT (by Research)", "University of Malta (UM), Faculty of ICT", "Msida", MSC, SEM3,
    ("13,400 يورو للبرنامج كاملاً لغير الأوروبيين (2026/2027)، وقد تُضاف رسوم معامل", "€13,400 for the full programme for non-EU students (2026/2027); bench fees may apply"),
    NP, DL, EN,
    ("ماجستير بحثي (رسالة 80 ساعة معتمدة)؛ يشترط بكالوريوس فيه مكوّن قوي في تقنية المعلومات بتقدير Second Class Honours (Upper) على الأقل، وقد تكون هناك مقابلة", "A research master's (an 80-ECTS dissertation); requires a bachelor's with a strong ICT component and at least Second Class Honours (Upper Division), and there may be an interview"),
    HOW, NP, NP, ICT, ICT)

write("مالطا", "Malta", "malta", MA, level="master")

ap = os.path.join(ROOT, "data", "programmes", "all_programmes.csv")
rows = list(csv.reader(open(ap, encoding="utf-8-sig")))
hdr, body = rows[0], [r for r in rows[1:] if r and r[1] != "مالطا"]
nxt = max(int(r[0]) for r in body) + 1
mt = list(csv.reader(open(os.path.join(ROOT, "data", "programmes", "malta.csv"), encoding="utf-8-sig")))[1:]
for i, r in enumerate(mt):
    body.append([str(nxt + i)] + r[1:])
with open(ap, "w", newline="", encoding="utf-8-sig") as f:
    csv.writer(f).writerows([hdr] + body)
print("all_programmes.csv:", len(body), "rows; Malta ids", nxt, "-", nxt + len(mt) - 1)
