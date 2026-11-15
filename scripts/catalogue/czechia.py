# Czechia: English-taught programmes at public universities. Czech-taught study is free; English-taught programmes charge fees.
# Sources: official university pages (and the national Study in Czechia portal where noted), checked 2026-11-15.
# Fees in CZK are converted in build-data.mjs with CZK_PER_EUR. Master's rows are also copied into all_programmes.csv.
import sys, os, csv
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, MED6, ROOT

MA, BA = [], []


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, living, house, src, apply, apply_note=("صفحة التقديم الرسمية", "Official application page")):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                 living=living, house=house, src=src, req=src, req_note=("صفحة القبول الرسمية", "Official admission page"), apply=apply,
                 apply_note=apply_note))


NOSTR = ("لازم معادلة الثانوية (nostrification) من السلطة الإقليمية في التشيك قبل التسجيل، أو تقييمها من الجامعة نفسها حسب قواعدها", "You need recognition (nostrification) of your school certificate by a Czech regional authority before enrolment, or an assessment by the university itself under its rules")
MD = ("طب بشري (ماجستير متكامل في الطب، MUDr.)", "General Medicine (integrated Master's, MUDr.)")
MSC = ("ماجستير", "Master's degree")
BSC = ("بكالوريوس", "Bachelor's degree")

# ---------- Master's ----------
FIT_M = "https://fit.cvut.cz/en/applicants/admissions-procedure/master-study-program"
add(MA, "cs", "Informatics (Master's, in English)", "Czech Technical University in Prague (CTU)", "Prague", MSC,
    ("سنتان حسب بوابة Studyportals (للتحقق)", "2 years per Studyportals (to verify)"),
    ("64,000 كرونة تشيكية للفصل الدراسي", "CZK 64,000 per semester"),
    ("رسوم التقديم 1,050 كرونة تشيكية (حوالي 42 يورو)", "Application fee CZK 1,050 (about €42)"),
    ("التقديم من 1 يناير حتى 31 مارس 2027، دورة قبول واحدة في السنة", "Applications 1 January - 31 March 2027, one admission round a year"),
    NP, ("اختبار ومقابلة ضمن القبول", "A test and an interview are part of admission"),
    ("التقديم أونلاين على prihlaska.cvut.cz، وبعد القبول تحجز سكن الجامعة وتقدم على التأشيرة (ممكن تاخد لحد 90 يوم)", "Apply online at prihlaska.cvut.cz; after admission book CTU housing and apply for the visa (can take up to 90 days)"),
    NP, ("سكن جامعة CTU متاح ومطلوب كإثبات سكن للتأشيرة", "CTU dormitories are available and serve as proof of accommodation for the visa"), FIT_M, "https://prihlaska.cvut.cz/en")

MU_FEE = ("4,500 يورو سنوياً (كلية المعلوماتية)", "€4,500 per year (Faculty of Informatics)")
MU_SRC = "https://www.muni.cz/en/admissions/bachelors-and-masters-studies/tuition-fees-and-financial-aid"
MU_EN = ("حسب بوابة Studyportals: IELTS 6.5 أو TOEFL iBT 85 أو Duolingo 115 (للتحقق من صفحة البرنامج)", "Per Studyportals: IELTS 6.5, TOEFL iBT 85 or Duolingo 115 (check the programme page)")
add(MA, "cs", "Computer Systems, Communication, and Security", "Masaryk University", "Brno", MSC, ("سنتان", "2 years"), MU_FEE,
    ("رسوم تقديم (القيمة على صفحة الكلية)", "Application fee (amount on the faculty page)"),
    ("مواعيد ثابتة كل سنة حسب صفحة كلية المعلوماتية: دفعة سبتمبر التقديم من 15 ديسمبر لحد 15 أبريل، ودفعة فبراير من 15 يونيو لحد 15 أكتوبر", "For the September 2026 intake the deadline was 15 April 2026, and for February 2027 it was 15 October 2026 (Study in Czechia portal); 2027 dates not published yet"),
    MU_EN, NP, ("التقديم أونلاين على نظام جامعة ماساريك", "Apply online through Masaryk University's system"), NP, NP, MU_SRC,
    "https://portal.studyin.cz/en/study-programme/computer-systems--communication--and-security-ft-master-degree-fi-muni/information-and-communication-technologies--icts-/20251223053549-hN1",
    ("صفحة البرنامج على بوابة Study in Czechia", "Programme page on the Study in Czechia portal"))
add(MA, "ds", "Artificial Intelligence and Data Processing", "Masaryk University", "Brno", MSC, ("سنتان حسب بوابة Studyportals (للتحقق)", "2 years per Studyportals (to verify)"), MU_FEE,
    NP, NP, MU_EN, NP, ("التقديم أونلاين على نظام جامعة ماساريك", "Apply online through Masaryk University's system"), NP, NP, MU_SRC, "https://www.muni.cz/en/admissions")

# ---------- Bachelor's ----------
add(BA, "cs", "Informatics (Bachelor's, in English)", "Czech Technical University in Prague (CTU)", "Prague", BSC,
    ("3 سنوات (للتحقق)", "3 years (to verify)"),
    ("64,000 كرونة تشيكية للفصل الدراسي", "CZK 64,000 per semester"),
    ("رسوم تقديم (كانت 950 كرونة تشيكية لدفعة 2026)", "Application fee (CZK 950 for the 2026 intake)"),
    ("التقديم من 1 يناير حتى 31 مارس 2027، دورة قبول واحدة", "Applications 1 January - 31 March 2027, one admission round"),
    NP, ("امتحان قبول", "Entrance exam"), NOSTR, NP, NP,
    "https://fit.cvut.cz/en/applicants/admissions-procedure/bachelor-study-program", "https://prihlaska.cvut.cz/en")
add(BA, "med", "General Medicine (in English)", "Charles University, First Faculty of Medicine", "Prague", MD, MED6,
    ("24,250 يورو سنوياً (لمن يبدأ في 2026/2027)", "€24,250 per year (for studies starting in 2026/2027)"),
    ("رسوم التقديم 285 يورو", "Application fee €285"),
    ("لعام 2027/2028: التقديم من 1 نوفمبر 2026 لحد 30 أبريل 2027 (حسب صفحة الكلية)، والطلب لازم يوصل قبل ميعاد الامتحان بـ 14 يوم على الأقل", "For 2026/2027 the deadline was 5 September 2026, at least 14 days before each exam date; 2027/2028 dates not published yet"),
    ("لعام 2026/2027 مكانش مطلوب شهادة إنجليزي، الامتحان هو الأساس", "For 2026/2027 no English certificate was required; the entrance exam is what counts"),
    ("امتحان قبول هو الشرط الأساسي", "The entrance exam is the main admission requirement"), NOSTR, NP, NP,
    "https://en.lf1.cuni.cz/admission-20262027", "https://en.lf1.cuni.cz/admission-20262027")
add(BA, "med", "General Medicine (in English)", "Charles University, Second Faculty of Medicine", "Prague", MD, MED6,
    ("420,000 كرونة تشيكية سنوياً (2026/2027)", "CZK 420,000 per year (2026/2027)"),
    ("رسوم التقديم 2,500 كرونة تشيكية", "Application fee CZK 2,500"),
    ("مواعيد 2027/2028 لسه ما اتنشرتش في المصدر. في 2026/2027 كان التقديم من 1 نوفمبر لحد 30 أبريل، والمتوقع نفس الفترة (للتحقق)", "For 2026/2027 applications ran from 1 November 2025 to 30 April 2026; 2027/2028 dates not published in the source yet"),
    NP, ("امتحان قبول", "Entrance exam"), NOSTR, NP, NP,
    "https://www.lf2.cuni.cz/en/applicants/how-to-apply/apply-online", "https://www.lf2.cuni.cz/en/applicants/how-to-apply/apply-online")
add(BA, "med", "General Medicine (in English)", "Charles University, Faculty of Medicine in Hradec Králové", "Hradec Kralove", MD, MED6,
    ("400,000 كرونة تشيكية سنوياً", "CZK 400,000 per year"), NP, NP, NP, ("امتحان قبول", "Entrance exam"), NOSTR, NP, NP,
    "https://www.lfhk.cuni.cz/LFHKEN-179.html", "https://www.lfhk.cuni.cz/LFHKEN-179.html")

write("التشيك", "Czechia", "czechia", BA, level="bachelor")
write("التشيك", "Czechia", "czechia", MA, level="master")

ap = os.path.join(ROOT, "data", "programmes", "all_programmes.csv")
rows = list(csv.reader(open(ap, encoding="utf-8-sig")))
hdr, body = rows[0], [r for r in rows[1:] if r and r[1] != "التشيك"]
nxt = max(int(r[0]) for r in body) + 1
cz = list(csv.reader(open(os.path.join(ROOT, "data", "programmes", "czechia.csv"), encoding="utf-8-sig")))[1:]
for i, r in enumerate(cz):
    body.append([str(nxt + i)] + r[1:])
with open(ap, "w", newline="", encoding="utf-8-sig") as f:
    csv.writer(f).writerows([hdr] + body)
print("all_programmes.csv:", len(body), "rows; Czechia ids", nxt, "-", nxt + len(cz) - 1)
