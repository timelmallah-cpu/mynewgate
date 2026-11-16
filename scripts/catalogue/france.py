# France: English-taught programmes at public universities and schools.
# Non-EU students pay differentiated registration fees (2026/27: €2,902 bachelor, €3,950 master) unless the
# university grants an exemption (decree of 19 May 2026 caps exemptions at 30% of non-EU students in 2026/27).
# Every applicant living in Egypt goes through Campus France Egypt ("Etudes en France") before the visa.
# Sources: official university pages, checked 2026-11-16. Master's rows are also copied into all_programmes.csv.
import sys, os, csv
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, ROOT

MA, BA = [], []


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, living, house, src, apply, apply_note=("صفحة التقديم الرسمية", "Official application page")):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                 living=living, house=house, src=src, req=src, req_note=("صفحة البرنامج الرسمية", "Official programme page"), apply=apply,
                 apply_note=apply_note))


MSC = ("ماجستير (Master)", "Master's degree")
BSC = ("بكالوريوس علوم (Bachelor of Science)", "Bachelor of Science")
CF = ("قدّم على الجامعة، وكمان لازم تعمل ملف على منصة Études en France وتعدّي مقابلة Campus France مصر قبل التأشيرة", "Apply to the university; you also need an Études en France file and the Campus France Egypt interview before the visa")
CROUS = ("سكن CROUS الجامعي متاح بالتقديم، والأماكن محدودة", "CROUS student housing is available on application; places are limited")

# ---------- Master's ----------
add(MA, "cs", "Master of Science in Informatics at Grenoble (MoSIG)", "Université Grenoble Alpes & Grenoble INP - UGA", "Grenoble", MSC,
    ("سنتان (M1 + M2)", "2 years (M1 + M2)"),
    ("255 يورو لكل طلاب الماجستير في 2026/2027 (سنة انتقالية في جامعة غرونوبل)؛ من 2027/2028 حسب قواعد الجامعة الجديدة (للتحقق)", "€255 for every master's student in 2026/2027 (a transition year at UGA); from 2027/2028 under the university's new rules (to verify)"),
    NP,
    ("فترة التقديم للماجستير من يناير إلى مايو حسب صفحة المنح (للتحقق من مواعيد 2027)", "The master's application period runs January to May per the scholarships page (2027 dates to verify)"),
    ("TOEFL iBT 100 أو TOEIC 750 أو IELTS 6.5", "TOEFL iBT 100, TOEIC 750 or IELTS 6.5"),
    ("برنامج تنافسي؛ لازم بكالوريوس 3 سنين للبرنامج الكامل، و4 سنين للدخول على السنة التانية مباشرة", "Competitive; a 3-year bachelor's for the full programme, or 4 years for direct entry to the second year"),
    CF, NP, CROUS, "https://mosig.imag.fr/MainEn/Admissions",
    "https://im2ag.univ-grenoble-alpes.fr/menu-principal/formation/fsa-1254927.kjsp?lang=fr",
    ("منصة التقديم الخارجي (MoSIG)", "External application platform (MoSIG)"))
add(MA, "ds", "MSc Data Science and Artificial Intelligence", "Université Côte d'Azur", "Sophia Antipolis", MSC,
    ("سنتان", "2 years"),
    ("5,500 يورو سنوياً للمقبولين في 2026/2027 (نفس الرسوم في السنتين)", "€5,500 per year for students starting in 2026/2027 (the same fee in both years)"),
    NP,
    ("اللجنة بتجتمع كل شهر، والرد خلال شهرين من اكتمال الملف على eCandidat", "The committee meets every month; expect a reply within two months of your eCandidat file being complete"),
    NP, ("محتاج خلفية قوية في الرياضيات وعلوم الحاسب", "A strong background in mathematics and computer science is essential"),
    ("التقديم على منصة eCandidat إلزامي، وكمان Études en France لو بلدك ضمن الإجراء (مصر منها)", "Applying on eCandidat is mandatory, plus Études en France if your country uses it (Egypt does)"),
    NP, NP, "https://univ-cotedazur.eu/msc/msc-data-science-and-artificial-intelligence/application-process/how-to-apply",
    "https://univ-cotedazur.eu/msc/msc-data-science-and-artificial-intelligence/application-process/how-to-apply")
add(MA, "ph", "Master of Public Health (MPH)", "EHESP School of Public Health", "Rennes", MSC,
    ("سنتان (60 ساعة معتمدة لكل سنة، للتحقق)", "2 years (60 credits a year, to verify)"),
    ("5,650 يورو سنوياً لغير الأوروبيين (1,700 رسوم دراسية + 3,950 رسوم تسجيل مختلفة) لدفعة 2027/2028، والرقم الرسمي هيتأكد للسنة دي", "€5,650 a year for non-EU students (€1,700 tuition + €3,950 differentiated registration fee) for the 2027/2028 intake; the official rate is still to be confirmed for that year"),
    NP, ("التقديم لسنة 2026/2027 فتح في ديسمبر 2025 (للتحقق من 2027/2028)", "Applications for 2026/2027 opened in December 2025 (2027/2028 to verify)"),
    ("إنجليزي متقدم مطلوب؛ التفاصيل في أسئلة البرنامج", "Advanced English required; details in the programme FAQ"),
    ("البرنامج بالإنجليزية بالكامل في رين", "Taught entirely in English in Rennes"),
    ("التقديم على منصة EHESP بالإنجليزية مع كل الأوراق", "Apply on the EHESP platform in English with all documents"), NP, NP,
    "https://mph.ehesp.fr/fees/", "https://mph.ehesp.fr/faq/", ("أسئلة التقديم", "Application FAQ"))
add(MA, "econ", "Master's programmes, international track (in English)", "Toulouse School of Economics (TSE), Université Toulouse Capitole", "Toulouse", MSC,
    ("سنتان (M1 + M2)", "2 years (M1 + M2)"),
    ("حوالي 9,450 يورو سنوياً لغير الأوروبيين: 5,500 يورو رسوم المسار الدولي + 3,950 يورو رسوم تسجيل مختلفة (للتحقق)", "About €9,450 a year for non-EU students: €5,500 international-track fee + €3,950 differentiated registration fee (to verify)"),
    ("مفيش رسوم تقديم", "No application fee"),
    ("لسنة 2026/2027 كانت الحملة من 12 يناير إلى 2 فبراير 2026 (مواعيد 2027 للتحقق)", "For 2026/2027 the campaign ran 12 January - 2 February 2026 (2027 dates to verify)"),
    ("IELTS Academic 7 أو Cambridge C1", "IELTS Academic 7 or Cambridge C1"),
    ("في 2027/2028 التقديم على برامج الماجستير الحالية (المسار الدولي) حسب TSE", "In 2027/2028 you apply to the existing master's programmes (international track), per TSE"),
    CF, NP, NP, "https://www.tse-fr.eu/admissions?lang=en", "https://www.tse-fr.eu/admissions?lang=en")
add(MA, "eng", "M1 Nuclear Engineering", "Université Paris-Saclay", "Gif-sur-Yvette", MSC,
    ("سنتان (M1 ثم M2)", "2 years (M1 then M2)"),
    ("3,950 يورو سنوياً لغير الأوروبيين (2026/2027) ما لم تحصل على إعفاء؛ الجامعة بتطبق إعفاء جزئي لبعض الطلاب (للتحقق)", "€3,950 a year for non-EU students (2026/2027) unless exempted; the university grants a partial exemption to some students (to verify)"),
    NP, ("لدفعة 2026 كان التقديم على منصة Inception من 15 يناير إلى 16 مارس 2026 (مواعيد 2027 للتحقق)", "For 2026 entry applications on Inception ran 15 January - 16 March 2026 (2027 dates to verify)"),
    ("شهادة مستوى إنجليزي إلزامية لغير الناطقين بها", "An English-level certificate is compulsory for non-native speakers"),
    ("بالإنجليزية بالكامل؛ 45 مكان؛ لخريجي فيزياء أو كيمياء", "Taught entirely in English; 45 places; for physics or chemistry graduates"),
    ("التقديم على منصة Inception، وكمان Études en France", "Apply on the Inception platform, plus Études en France"), NP, NP,
    "https://www.universite-paris-saclay.fr/en/education/master/nuclear-energy/m1-nuclear-energy",
    "https://www.universite-paris-saclay.fr/en/admission/etudiants-internationaux/international-students-applying-masters-degree")

# ---------- Bachelor's ----------
add(BA, "econ", "TSE Bachelor of Science - Economics", "Toulouse School of Economics (TSE)", "Toulouse", BSC,
    ("3 سنوات (180 ساعة معتمدة)", "3 years (180 credits)"), NP, NP,
    ("البداية سبتمبر 2027؛ مواعيد التقديم غير منشورة في المصدر", "Starts September 2027; application dates not published in the source"),
    NP, ("برنامج انتقائي بالإنجليزية، 60 طالب، والشهادة صادرة من TSE", "Selective, taught in English, 60 students; the degree is awarded by TSE"),
    ("التقديم حسب صفحة TSE (للتحقق من الطريقة لحملة الثانوية المصرية)", "Apply as set out on TSE's page (check the route for Egyptian school-certificate holders)"), NP, NP,
    "https://www.tse-fr.eu/tse-bachelor-science-economics", "https://www.tse-fr.eu/tse-bachelor-science-program")

write("فرنسا", "France", "france", BA, level="bachelor")
if os.environ.get("BA_ONLY"):
    sys.exit()
write("فرنسا", "France", "france", MA, level="master")

ap = os.path.join(ROOT, "data", "programmes", "all_programmes.csv")
rows = list(csv.reader(open(ap, encoding="utf-8-sig")))
hdr, body = rows[0], [r for r in rows[1:] if r and r[1] != "فرنسا"]
nxt = max(int(r[0]) for r in body) + 1
fr = list(csv.reader(open(os.path.join(ROOT, "data", "programmes", "france.csv"), encoding="utf-8-sig")))[1:]
for i, r in enumerate(fr):
    body.append([str(nxt + i)] + r[1:])
with open(ap, "w", newline="", encoding="utf-8-sig") as f:
    csv.writer(f).writerows([hdr] + body)
print("all_programmes.csv:", len(body), "rows; France ids", nxt, "-", nxt + len(fr) - 1)
