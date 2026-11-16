# Denmark: English-taught master's programmes at public universities. Non-EU students pay tuition set by each university;
# the deadline for fee-paying applicants is 15 January for September entry. Sources: official pages, checked 2026-11-16.
# English-taught bachelor's degrees open to non-EU applicants are rare, so only master's rows are added for now.
import sys, os, csv
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, ROOT

MA = []


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, living, house, src, apply, apply_note=("صفحة التقديم الرسمية", "Official application page")):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                 living=living, house=house, src=src, req=src, req_note=("صفحة الرسوم أو البرنامج الرسمية", "Official fees or programme page"), apply=apply,
                 apply_note=apply_note))


MSC = ("ماجستير (MSc)", "Master's degree (MSc)")
Y2 = ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)")
DL_AR = ("لدفعة سبتمبر 2027: آخر موعد لغير الأوروبيين 15 يناير 2027", "September 2027 intake: the non-EU deadline is 15 January 2027")

DTU_FEES = "https://dtu.dk/english/education/graduate/fees-and-funding"
DTU_DATES = "https://dtu.dk/english/education/graduate/admission-and-deadlines/application_procedure/apply/important-dates-and-deadlines-autumn"
add(MA, "cs", "MSc Computer Science and Engineering", "Technical University of Denmark (DTU)", "Kongens Lyngby", MSC, Y2,
    ("7,500 يورو للفصل الدراسي (30,000 يورو للبرنامج كاملاً)؛ ودفعة الفصل الأول قبل 1 مايو بدون تقسيط", "€7,500 per semester (€30,000 for the full programme); the first semester is due by 1 May with no instalments"),
    ("رسوم تقديم 100 يورو تُخصم من أول دفعة لو قُبلت، وتكفي لبرنامجين", "€100 application fee, deducted from your first payment if admitted; it covers up to two programmes"),
    DL_AR, ("لازم تستوفي شرط اللغة الإنجليزية قبل 15 يناير", "You must meet the English requirement by 15 January"),
    ("DTU تمنح عدداً محدوداً جداً من الإعفاءات الكاملة من الرسوم للسنتين حسب التفوق، ولازم ترفق خطاب منفصل تطلب فيه الإعفاء مع طلبك", "DTU awards a very limited number of full two-year tuition waivers on merit; you must attach a separate personal statement requesting the waiver with your application"),
    ("التقديم أونلاين على بوابة DTU (تفتح 1 ديسمبر) ودفع رسوم التقديم", "Apply online on the DTU portal (opens 1 December) and pay the application fee"), NP, NP,
    DTU_FEES, DTU_DATES)

KU_CS = "https://studyindenmark.dk/portal/university-of-copenhagen-ucph/north-campus/computer-science"
add(MA, "cs", "MSc in Computer Science", "University of Copenhagen (UCPH)", "Copenhagen", MSC, Y2,
    ("8,700 يورو للفصل الدراسي حسب بوابة Study in Denmark الرسمية (للتحقق مع الجامعة)", "€8,700 per semester according to the official Study in Denmark portal (check with the university)"),
    ("رسوم تقديم 750 كرونة (حوالي 100 يورو)", "DKK 750 application fee (about €100)"),
    DL_AR, NP,
    ("كلية العلوم عندها عدد محدود جداً من المنح لغير الأوروبيين المتفوقين، وكل المتقدمين يُنظر لهم تلقائياً حسب المعدل؛ ويمكن التقديم على 3 برامج كحد أقصى في الجامعة", "The Faculty of Science has a very limited number of scholarships for outstanding non-EU students, and all applicants are considered automatically by GPA; you can apply to at most 3 programmes at UCPH"),
    ("التقديم أونلاين على بوابة الجامعة (تفتح 15 نوفمبر)", "Apply online on the university portal (opens 15 November)"), NP, NP,
    KU_CS, "https://www.ku.dk/studies/masters/computer-science")

AAU_FEES = "https://www.en.aau.dk/education/apply/master/finance-and-fees"
AAU_APPLY = "https://www.en.aau.dk/education/apply/master/how-and-when-to-apply"
AAU_ADM = ("رسوم تقديم 150 يورو غير مستردة؛ والمقبول الجديد يدفع رسوم أول فصلين مرة واحدة", "Non-refundable €150 application fee; newly admitted students pay the first two semesters at once")
AAU_HOW = ("التقديم أونلاين على بوابة الجامعة (تفتح منتصف ديسمبر)، و3 رغبات كحد أقصى", "Apply online on the university portal (opens mid-December), with at most 3 priorities")
add(MA, "cs", "MSc in Computer Science (IT)", "Aalborg University (AAU)", "Aalborg", MSC, Y2,
    ("57,850 كرونة دنماركية للفصل الدراسي (حوالي 7,745 يورو) حسب أسعار 2026", "DKK 57,850 per semester (about €7,745) at 2026 rates"),
    AAU_ADM, DL_AR, NP,
    ("الدراسة في AAU قائمة على مشاريع جماعية لحل مشكلات حقيقية", "Teaching at AAU is built around group projects on real-world problems"),
    AAU_HOW, NP, NP, AAU_FEES, AAU_APPLY)
add(MA, "bus", "MSc in Economics and Business Administration", "Aalborg University Business School (AAU)", "Aalborg", MSC, Y2,
    ("27,800 كرونة دنماركية للفصل الدراسي (حوالي 3,725 يورو) حسب أسعار 2026، لكل التخصصات", "DKK 27,800 per semester (about €3,725) at 2026 rates, for all specialisations"),
    AAU_ADM, DL_AR, NP,
    ("من أرخص برامج إدارة الأعمال بالإنجليزية لغير الأوروبيين في الدنمارك؛ التخصصات المتاحة بالإنجليزية للتحقق من صفحة البرنامج", "One of the cheapest English-taught business master's in Denmark for non-EU students; check which specialisations are taught in English on the programme page"),
    AAU_HOW, NP, NP, AAU_FEES, AAU_APPLY)

write("الدنمارك", "Denmark", "denmark", MA, level="master")

ap = os.path.join(ROOT, "data", "programmes", "all_programmes.csv")
rows = list(csv.reader(open(ap, encoding="utf-8-sig")))
hdr, body = rows[0], [r for r in rows[1:] if r and r[1] != "الدنمارك"]
nxt = max(int(r[0]) for r in body) + 1
dk = list(csv.reader(open(os.path.join(ROOT, "data", "programmes", "denmark.csv"), encoding="utf-8-sig")))[1:]
for i, r in enumerate(dk):
    body.append([str(nxt + i)] + r[1:])
with open(ap, "w", newline="", encoding="utf-8-sig") as f:
    csv.writer(f).writerows([hdr] + body)
print("all_programmes.csv:", len(body), "rows; Denmark ids", nxt, "-", nxt + len(dk) - 1)
