# Norway: English-taught master's programmes at public universities, plus UiO's one English-taught bachelor's.
# Since autumn 2023 students from outside the EU/EEA/Switzerland pay tuition, set by each university and subject.
# Most deadlines for applicants from outside the EU/EEA are in November/December of the year before.
# Fees are in NOK and converted at NOK_PER_EUR (also in scripts/build-data.mjs). Sources: official pages, checked 2026-11-17.
import sys, os, csv
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, ROOT, BA3

NOK_PER_EUR = 11.0
MA, BA = [], []


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, living, house, src, apply, apply_note=("صفحة التقديم الرسمية", "Official application page")):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                 living=living, house=house, src=src, req=src, req_note=("صفحة الرسوم أو الشروط الرسمية", "Official fees or requirements page"), apply=apply,
                 apply_note=apply_note))


def fee(nok, year="2027/2028", note=None):
    eur = round(nok / NOK_PER_EUR / 10) * 10
    ar = f"{nok:,} كرونة نرويجية سنوياً للعام الدراسي {year} (حوالي {eur:,} يورو)"
    en = f"NOK {nok:,} per year for {year} (about €{eur:,})"
    if note:
        ar, en = f"{ar}؛ {note[0]}", f"{en}; {note[1]}"
    return (ar, en)


MSC = ("ماجستير", "Master's degree")
Y2 = ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)")
LIVING = ("حوالي 1,410 يورو شهرياً (الحد الأدنى الذي تطلبه UDI: 15,488 كرونة نرويجية في الشهر)", "About €1,410 a month (the UDI minimum: NOK 15,488 a month)")
SOK = ("التقديم أونلاين على بوابة Søknadsweb", "Apply online on the Søknadsweb portal")
DL_1DEC = ("لدفعة أغسطس 2027: التقديم من 1 نوفمبر حتى 1 ديسمبر 2026", "August 2027 intake: apply 1 November - 1 December 2026")

# University of Agder (UiA): programmes listed for applicants from Egypt; 2027/2028 rates.
UIA_FEES = "https://www.uia.no/english/studies/how-to-apply/current-rates.html"
UIA_EG = "https://www.uia.no/english/studies/how-to-apply/countries/egypt.html"
UIA_EN = ("IELTS Academic 6.0 أو TOEFL iBT 80 أو PTE Academic 62، ولا يُقبل اختبار عمره أكثر من سنتين", "IELTS Academic 6.0, TOEFL iBT 80 or PTE Academic 62; tests older than two years are not accepted")
UIA_OTHER = ("للمصريين: 4 سنوات دراسة جامعية مع شهادة الثانوية العامة، ومعدل يعادل C النرويجي على الأقل، ومواد البكالوريوس التي يطلبها البرنامج. بعد القبول تحوّل 170,368 كرونة (مصاريف سنة معيشة) لحساب إيداع في الجامعة وإلا يُسحب القبول، والجامعة لا تقدم منحاً لعام 2027/2028",
             "For Egyptian applicants: four years of university education plus the General Secondary Education Certificate, a grade average of at least a Norwegian C, and the bachelor's courses the programme asks for. After admission you transfer NOK 170,368 (one year's living costs) to a university deposit account or the offer is withdrawn; UiA offers no scholarships for 2027/2028")
UIA_ADM = ("التقديم مجاني", "Applying is free of charge")
add(MA, "cs", "Master in Cybersecurity Management", "University of Agder (UiA)", "Kristiansand", MSC, Y2, fee(65000), UIA_ADM, DL_1DEC, UIA_EN,
    (UIA_OTHER[0] + ". يقبل بكالوريوس في نظم المعلومات أو تقنية المعلومات أو إدارة الأعمال (مع 30 ساعة معتمدة في نظم المعلومات)", UIA_OTHER[1] + ". A bachelor's in information systems, ICT or business administration (with 30 credits of IS/ICT) is accepted"),
    SOK, LIVING, NP, UIA_FEES, UIA_EG)
add(MA, "bus", "Master in Management and Business Development", "University of Agder (UiA)", "Kristiansand", MSC, Y2, fee(65000), UIA_ADM, DL_1DEC, UIA_EN, UIA_OTHER,
    SOK, LIVING, NP, UIA_FEES, UIA_EG)
add(MA, "cs", "Master in Multimedia and Game Technologies", "University of Agder (UiA)", "Grimstad", MSC, Y2, fee(95000), UIA_ADM, DL_1DEC, UIA_EN, UIA_OTHER,
    SOK, LIVING, NP, UIA_FEES, UIA_EG)
add(MA, "eng", "Master in Renewable Energy", "University of Agder (UiA)", "Grimstad", MSC, Y2, fee(95000), UIA_ADM, DL_1DEC, UIA_EN, UIA_OTHER,
    SOK, LIVING, NP, UIA_FEES, UIA_EG)

# NTNU: international master's open to non-EU applicants in 2027-2028; 2027/2028 fee categories.
NTNU_FEES = "https://www.ntnu.edu/studies/tuition-fees"
NTNU_LIST = "https://ntnu.edu/studies/international/master"
NTNU_EN = ("IELTS Academic 6.5 أو TOEFL iBT 90، ولا يُقبل اختبار عمره أكثر من سنتين", "IELTS Academic 6.5 or TOEFL iBT 90; tests older than two years are not accepted")
NTNU_OTHER = ("NTNU لا تقدم منحاً تغطي الرسوم ولا خصومات ولا تقسيطاً، والرسوم تُدفع كاملة حسب موعد الفاتورة", "NTNU offers no scholarships covering tuition, no discounts and no instalments; the full fee is due by the date on your invoice")
NTNU_HOW = ("التقديم أونلاين حسب تعليمات صفحة برامج الماجستير الدولية (البوابة تفتح 1 نوفمبر 2026)", "Apply online following the international master's page (the portal opens on 1 November 2026)")
add(MA, "bus", "International Business and Marketing (MSc)", "Norwegian University of Science and Technology (NTNU)", "Ålesund", MSC, Y2, fee(63875), NP, DL_1DEC, NTNU_EN, NTNU_OTHER,
    NTNU_HOW, LIVING, NP, NTNU_FEES, NTNU_LIST)
add(MA, "bus", "Management of Innovation and Sustainable Business Development (MSc)", "Norwegian University of Science and Technology (NTNU)", "Ålesund", MSC, Y2, fee(63875), NP, DL_1DEC, NTNU_EN, NTNU_OTHER,
    NTNU_HOW, LIVING, NP, NTNU_FEES, NTNU_LIST)
for name, city, field in [("Mechatronics and Automation (MSc)", "Ålesund", "eng"), ("Marine Technology (MSc)", "Trondheim", "eng"),
                          ("Sustainable Energy (MSc)", "Trondheim", "eng"), ("Global Manufacturing Management (MSc)", "Trondheim", "eng"),
                          ("Sustainable Architecture (MSc)", "Trondheim", "arch")]:
    add(MA, field, name, "Norwegian University of Science and Technology (NTNU)", city, MSC, Y2, fee(212850), NP, DL_1DEC, NTNU_EN, NTNU_OTHER,
        NTNU_HOW, LIVING, NP, NTNU_FEES, NTNU_LIST)

# University of Stavanger (UiS): 2026/2027 rates (the page shows no 2027/2028 figures yet).
UIS_FEES = "https://www.uis.no/en/studies/how-much-is-the-tuition-fees"
UIS_EN_URL = "https://www.uis.no/en/english-language-requirements-international-applicants"
UIS_EN = ("IELTS Academic 6.5 (والكتابة 6.0 على الأقل) أو TOEFL iBT 90 (والكتابة 22 على الأقل)؛ لا تُقبل TOEFL Home Edition ولا IELTS Online", "IELTS Academic 6.5 (writing at least 6.0) or TOEFL iBT 90 (writing at least 22); TOEFL Home Edition and IELTS Online are not accepted")
UIS_DL = ("لدفعة أغسطس 2027: التقديم مفتوح الآن من 15 نوفمبر حتى 1 ديسمبر 2026، مع رفع كشف الدرجات ونتيجة اختبار الإنجليزية حتى 1 ديسمبر (حسب صفحة القبول الدولي، تأكد 20 نوفمبر 2026)", "August 2027 intake: applications open now, 15 November - 1 December 2026, with transcript and English test uploaded by the same deadline (UiS international admission page, checked on 2026-11-20)")
UIS_NOTE = ("رسوم 2027/2028 للتحقق", "2027/2028 fee to verify")
UIS_ADM = ("رسوم الفصل 900 كرونة (قابلة للتغيير)", "Semester fee NOK 900 (subject to change)")
UIS_OTHER = ("الجامعة لا تقيّم أهليتك قبل التقديم، وترفض الطلب إذا لم ترفع نتيجة اختبار الإنجليزية في الموعد", "UiS does not assess your eligibility before you apply, and rejects applications without an English test result uploaded in time")
for name, field, nok in [("Computer Science (master)", "cs", 85000), ("Data Science (master)", "ds", 85000), ("Business and Administration (master)", "bus", 60000),
                         ("Structural and Mechanical Engineering (master)", "eng", 85000), ("Environmental Engineering (master)", "eng", 85000),
                         ("City and Regional Planning (master)", "arch", 85000)]:
    add(MA, field, name, "University of Stavanger (UiS)", "Stavanger", MSC, Y2, fee(nok, "2026/2027", UIS_NOTE), UIS_ADM, UIS_DL, UIS_EN, UIS_OTHER,
        SOK, LIVING, NP, UIS_FEES, UIS_EN_URL)

# NMBU (Ås): 2027/2028 rates; deadline 1 December, start in August the following year.
NMBU_FEES = "https://nmbu.no/en/node/51481"
NMBU_APPLY = "https://nmbu.no/en/node/51497"
NMBU_EN = ("IELTS Academic 7.0 أو TOEFL iBT 92 أو PTE Academic 65 (أعلى من الحد العام في النرويج)", "IELTS Academic 7.0, TOEFL iBT 92 or PTE Academic 65 (higher than the general Norwegian minimum)")
NMBU_DL = ("لدفعة أغسطس 2027: التقديم من 15 أكتوبر حتى 1 ديسمبر 2026", "August 2027 intake: apply 15 October - 1 December 2026")
NMBU_OTHER = ("بكالوريوس 180 ساعة معتمدة على الأقل في تخصص مناسب ومعدل يعادل C النرويجي على الأقل. الرسوم تُدفع كاملة قبل 20 مايو بدون تقسيط، وNMBU لا تقدم منحاً، ومن معه ماجستير من النرويج غالباً لن يحصل على إقامة لماجستير ثانٍ",
              "A bachelor's of at least 180 credits in a relevant field and a grade average of at least a Norwegian C. The fee is paid in full by 20 May with no instalments; NMBU offers no scholarships, and applicants who already hold a Norwegian master's are unlikely to get a study permit for another")
for name, field, nok in [("Master's in Data Science", "ds", 150000), ("Master's in Applied Economics and Sustainability", "econ", 80000),
                         ("Master's in Landscape Architecture for Global Sustainability", "arch", 150000), ("Master's in Intelligent Water Technology", "eng", 150000)]:
    add(MA, field, name, "Norwegian University of Life Sciences (NMBU)", "Ås", MSC, Y2, fee(nok), NP, NMBU_DL, NMBU_EN, NMBU_OTHER,
        SOK, LIVING, NP, NMBU_FEES, NMBU_APPLY)

# Nord University (Bodø): 2027/2028 economics/administration rate.
add(MA, "bus", "Business (Master of Science)", "Nord University Business School", "Bodø", MSC, Y2, fee(63000),
    ("رسوم الفصل 815 كرونة", "Semester fee NOK 815"),
    ("لدفعة أغسطس 2027: التقديم من 1 نوفمبر حتى 1 ديسمبر 2026", "August 2027 intake: apply 1 November - 1 December 2026"), NP,
    ("بكالوريوس 180 ساعة معتمدة على الأقل في إدارة الأعمال. التخصصات: المالية والاستثمار، والإدارة الاقتصادية، والابتكار وريادة الأعمال، والتسويق والإدارة. الرسوم تُدفع كاملة قبل 1 مايو بدون تقسيط، والجامعة لا تقدم منحاً",
     "A bachelor's of at least 180 credits in business and administration. Specialisations: Finance and Investment, Economic Management, Innovation and Entrepreneurship, and Marketing and Management. The fee is paid in full by 1 May with no instalments; Nord offers no grants or scholarships"),
    ("التقديم أونلاين على موقع الجامعة", "Apply online on the university website"), LIVING, NP,
    "https://www.nord.no/en/study-programmes/admission/tuition-fees", "https://nord.no/en/node/17995")

# University of Bergen (UiB): 2027/2028 rates.
UIB_FEES = "https://www4.uib.no/en/studies/admission-and-application/tuition-fee-for-international-students"
UIB_APPLY = "https://www4.uib.no/en/studies/admission-and-application/application-process-for-applicants-with-a-citizenship-from-outside-eueea-and-switzerland"
UIB_EN = ("IELTS 6.5 وفي كل مهارة 6.5 على الأقل، أو TOEFL iBT 90، أو PTE Academic 62", "IELTS 6.5 with at least 6.5 in each skill, TOEFL iBT 90 or PTE Academic 62")
UIB_DL = ("لدفعة أغسطس 2027: التقديم من 1 نوفمبر حتى 1 ديسمبر 2026، ورفع كل المستندات حتى 15 ديسمبر 2026، والنتائج في أبريل 2027",
          "August 2027 intake: apply 1 November - 1 December 2026, upload all documents by 15 December 2026; results in April 2027")
UIB_OTHER = ("تقدم على برنامج واحد فقط. المطلوب معدل يعادل C النرويجي على الأقل، وحوالي 8% فقط من المتقدمين الدوليين يُقبلون. يجب إثبات مصاريف المعيشة والرسوم مع الطلب نفسه، وللمصريين 4 سنوات دراسة جامعية. الجامعة لا تقدم منحاً",
             "You can apply to one programme only. You need a grade average of at least a Norwegian C, and only about 8% of international applicants are admitted. You must document living costs and tuition with the application itself; Egyptian applicants need four years of university education. UiB offers no scholarships")
UIB_HOUSE = ("سكن مضمون لطلاب الماجستير الدوليين الجدد عبر مؤسسة Sammen إذا قدّمت في الموعد (مكان في سكن طلابي دون اختيار الغرفة)", "Housing is guaranteed for new international master's students through Sammen if you apply in time (a place in a student hall, not a chosen room)")
add(MA, "cs", "Master's programme in Media and Interaction Design", "University of Bergen (UiB)", "Bergen", MSC, Y2, fee(234000), NP, UIB_DL, UIB_EN, UIB_OTHER,
    SOK, LIVING, UIB_HOUSE, UIB_FEES, UIB_APPLY)
add(MA, "ds", "Master's programme in Applied and Computational Mathematics", "University of Bergen (UiB)", "Bergen", MSC, Y2, fee(234000), NP, UIB_DL, UIB_EN, UIB_OTHER,
    SOK, LIVING, UIB_HOUSE, UIB_FEES, UIB_APPLY)

# University of Oslo (UiO): 2027/2028 rates; the deadline for applicants from outside the EU/EEA is 15 November.
UIO_FEES = "https://uio.no/english/studies/admission/tuition/table-of-costs"
UIO_APPLY = "https://uio.no/english/studies/admission/master"
UIO_EN = ("IELTS Academic 6.5 أو TOEFL iBT 90 حسب صفحة متطلبات الإنجليزية لمستوى الماجستير في الجامعة (للتحقق من صفحة البرنامج)", "IELTS Academic 6.5 or TOEFL iBT 90 according to the university's master's-level English page (check the programme page)")
UIO_DL = ("لدفعة أغسطس 2027 انتهى التقديم في 15 نوفمبر 2026. الموعد يتكرر كل سنة في 15 نوفمبر، فالدفعة القادمة أغسطس 2028 (للتحقق)",
          "August 2027 intake: applications closed on 15 November 2026. The deadline is 15 November each year, so the next intake is August 2028 (to verify)")
UIO_OTHER = ("تقدم على برنامجين كحد أقصى، والقبول مرة واحدة في السنة والنتائج قبل 5 أبريل. يجب إثبات 170,368 كرونة لمصاريف المعيشة",
             "You can apply to at most two programmes; admission is once a year with results by 5 April. You must document NOK 170,368 for living costs")
UIO_HOUSE = ("السكن عبر مؤسسة SiO؛ طلاب الماجستير الدوليون على قائمة أولوية الجامعة لكن السكن غير مضمون", "Housing through SiO; international master's students are on UiO's priority list, but housing is not guaranteed")
for name, field, nok in [("Data Science (master's two years)", "ds", 218000), ("Informatics: Machine Learning and Artificial Intelligence (master's two years)", "cs", 218000),
                         ("Economics (master's two years)", "econ", 186000)]:
    add(MA, field, name, "University of Oslo (UiO)", "Oslo", MSC, Y2, fee(nok), NP, UIO_DL, UIO_EN, UIO_OTHER,
        SOK, LIVING, UIO_HOUSE, UIO_FEES, UIO_APPLY)

# UiO's one English-taught bachelor's programme.
TS = "https://www.uio.no/english/studies/programmes/technology-systems/admission/admission-no-norwegian.html"
add(BA, "eng", "Technology Systems (bachelor's programme)", "University of Oslo (UiO)", "Oslo", ("بكالوريوس", "Bachelor's degree"), BA3, fee(218000),
    NP, ("لدفعة أغسطس 2027: التقديم من 15 أكتوبر حتى 1 ديسمبر 2026، وكل المستندات قبل الموعد", "August 2027 intake: apply 15 October - 1 December 2026, with all documents before the deadline"),
    ("أغلب المتقدمين الدوليين يحتاجون اختبار إنجليزية معتمد يمكن التحقق منه أونلاين؛ الدرجة المطلوبة غير منشورة في صفحة البرنامج", "Most international applicants need an approved English test that can be verified online; the score is not published on the programme page"),
    ("الشهادة الثانوية وحدها لا تكفي من بعض الدول: للمصريين المطلوب الثانوية العامة مع سنة دراسة جامعية حسب قائمة UiA الرسمية لمصر. ويُطلب أيضاً رياضيات بمستوى R1 النرويجي ومادة علمية إضافية (فيزياء أو كيمياء أو أحياء)، والترتيب حسب درجات الثانوية، وإثبات 170,368 كرونة للمعيشة قبل موعد التقديم",
     "A school certificate alone is not enough from some countries: for Egyptian applicants the General Secondary Education Certificate plus one year of university is required, according to UiA's official list for Egypt. You also need mathematics at Norwegian R1 level and an additional science subject (physics, chemistry or biology); applicants are ranked by school grades, and you must document NOK 170,368 for living costs by the deadline"),
    SOK, LIVING, UIO_HOUSE, TS, TS)

write("النرويج", "Norway", "norway", MA, level="master")
write("النرويج", "Norway", "norway", BA, level="bachelor")

# Append the master's rows to the master file with new ids (existing ids never change).
ap = os.path.join(ROOT, "data", "programmes", "all_programmes.csv")
rows = list(csv.reader(open(ap, encoding="utf-8-sig")))
hdr, body = rows[0], [r for r in rows[1:] if r and r[1] != "النرويج"]
nxt = max(int(r[0]) for r in body) + 1
no = list(csv.reader(open(os.path.join(ROOT, "data", "programmes", "norway.csv"), encoding="utf-8-sig")))[1:]
for i, r in enumerate(no):
    body.append([str(nxt + i)] + r[1:])
with open(ap, "w", newline="", encoding="utf-8-sig") as f:
    csv.writer(f).writerows([hdr] + body)
print("all_programmes.csv:", len(body), "rows; Norway ids", nxt, "-", nxt + len(no) - 1)
