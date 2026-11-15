# Sweden: English-taught master's (non-EU fees, autumn 2027 intake) at public universities and salaried doctoral positions.
# All master's applications go through universityadmissions.se. Sources: official university pages, checked 2026-11-15.
# Master's rows are also copied into data/programmes/all_programmes.csv (numeric ids after the last one).
import sys, os, csv
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, MSC2, ROOT

MA, PHD = [], []
UA = "https://www.universityadmissions.se/en/"


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply=UA, apply_note=("بوابة التقديم الوطنية University Admissions", "National application portal, University Admissions")):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                 living=NP, house=NP, src=src, req=src, req_note=("صفحة البرنامج الرسمية", "Official programme page"), apply=apply,
                 apply_note=apply_note))


APPFEE = ("رسوم طلب 900 كرونة سويدية لغير الأوروبيين، تُدفع مرة واحدة لكل فصل دراسي مهما كان عدد البرامج، بحد أقصى 1 فبراير 2027",
          "SEK 900 application fee for non-EU/EEA applicants, paid once per semester whatever the number of programmes, by 1 February 2027")
DL = ("من 16 أكتوبر 2026 حتى 15 يناير 2027 لدفعة خريف 2027؛ المستندات ورسوم الطلب حتى 1 فبراير 2027، والنتائج 1 أبريل 2027",
      "16 October 2026 - 15 January 2027 for the autumn 2027 intake; documents and application fee by 1 February 2027; results on 1 April 2027")
EN = ("مستوى English 6 السويدي؛ الاختبارات والدرجات المقبولة منشورة في صفحة متطلبات الإنجليزية على universityadmissions.se",
      "The Swedish English 6 level; accepted tests and scores are listed on the English requirements page at universityadmissions.se")
HOW = ("طلب أونلاين على universityadmissions.se ورفع الشهادات وإثبات الإنجليزية، وترتيب البرامج حسب الأفضلية (حتى 4 برامج ماجستير)",
       "Online application on universityadmissions.se with certificates and proof of English; rank your programmes in order of preference (up to 4 master's programmes)")
MSC = ("ماجستير العلوم (MSc)", "Master of Science (MSc)")
ONE = ("سنة واحدة (60 ساعة معتمدة)", "1 year (60 credits)")
T = lambda total, first=None: (f"{total} كرونة سويدية للبرنامج كاملاً لغير الأوروبيين" + (f"، الدفعة الأولى {first} كرونة" if first else ""),
                               f"SEK {total} for the whole programme for non-EU/EEA students" + (f"; first instalment SEK {first}" if first else ""))

add(MA, "cs", "Master's Programme in Computer Science", "Uppsala University", "Uppsala", MSC, MSC2, T("300,000", "75,000"), APPFEE,
    ("من 16 أكتوبر 2026 حتى 15 يناير 2027؛ الدراسة من 30 أغسطس 2027 حتى 3 يونيو 2029", "16 October 2026 - 15 January 2027; studies run 30 August 2027 - 3 June 2029"),
    EN, ("منحة Uppsala University Global Scholarship تغطي الرسوم كاملة لعدد قليل، لكن ليس المعيشة", "The Uppsala University Global Scholarship covers the full fee for a few students, but not living costs"),
    HOW, "https://www.uu.se/en/study/programme/masters-programme-computer-science.html")
add(MA, "cs", "Master's Programme in Computer Science", "KTH Royal Institute of Technology", "Stockholm", MSC, MSC2,
    ("342,000 كرونة سويدية للبرنامج كاملاً لغير الأوروبيين حسب صفحة رسوم البرنامج (تأكد من الرقم لدفعة 2027)", "SEK 342,000 for the whole programme for non-EU/EEA students per the programme's fee page (confirm the figure for the 2027 intake)"),
    APPFEE, DL, EN, NP, HOW, "https://www.kth.se/en/studies/2.23106/master/computer-science/fees-communication-systems-1.909945", "https://kth.se/apply")
add(MA, "bus", "Master's Programme in Data Analytics and Business Economics", "Lund University", "Lund",
    ("ماجستير (سنة واحدة)", "Master's degree (one year)"), ONE, T("150,000", "75,000"), APPFEE, DL, EN,
    ("منح Lund University Global Scholarship للمتفوقين", "Lund University Global Scholarships for high achievers"), HOW,
    "https://www.lunduniversity.lu.se/study/data-analytics-and-business-economics-masters-programme-EAGDA")
add(MA, "ds", "Social Scientific Data Analysis - Master of Science programme", "Lund University", "Lund", MSC, MSC2, T("270,000"), APPFEE, DL, EN,
    ("منح Lund University Global Scholarship للمتفوقين", "Lund University Global Scholarships for high achievers"), HOW,
    "https://www.lunduniversity.lu.se/study/social-scientific-data-analysis-master-of-science-programme-SASSD")
add(MA, "eng", "Machine Learning, Systems and Control - Master's Programme", "Lund University", "Lund", MSC, MSC2, NP, APPFEE, DL, EN,
    ("يقدّمه LTH (كلية الهندسة في جامعة لوند)", "Offered by LTH, Lund University's Faculty of Engineering"), HOW,
    "https://www.lunduniversity.lu.se/study/machine-learning-systems-and-control-masters-programme-TAMSR")
add(MA, "ph", "Master's Programme in Global Health", "Karolinska Institutet", "Solna", ("ماجستير العلوم الطبية (120 ساعة معتمدة) في الصحة العالمية", "Degree of Master of Medical Science (120 credits) in Global Health"),
    MSC2, T("360,000", "90,000"), APPFEE, DL, EN,
    ("المتقدمون يملؤون استمارة سيرة ذاتية خاصة بالجامعة تُستخدم في الاختيار", "Applicants fill in the university's CV form, used in selection"), HOW,
    "https://education.ki.se/programme/3gb12-masters-programme-in-global-health", "https://education.ki.se/bachelors-masters-studies/apply/apply-for-a-masters-programme")
add(MA, "ph", "Master's Programme in Public Health Sciences - Epidemiology", "Karolinska Institutet", "Solna", MSC, MSC2, T("360,000", "90,000"), APPFEE, DL, EN,
    ("المتقدمون يملؤون استمارة سيرة ذاتية خاصة بالجامعة تُستخدم في الاختيار", "Applicants fill in the university's CV form, used in selection"), HOW,
    "https://education.ki.se/tuition-fees-at-karolinska-institutet", "https://education.ki.se/bachelors-masters-studies/apply/apply-for-a-masters-programme")

# ---------- Doctoral positions (salaried jobs, no tuition) ----------
FREE = ("لا توجد رسوم؛ الدكتوراه في السويد وظيفة براتب شهري من الجامعة", "No tuition fees; a PhD in Sweden is a job with a monthly salary from the university")
PHD_DEG = ("دكتوراه", "Doctoral degree")
DUR4 = ("4 سنوات بدوام كامل (240 ساعة معتمدة)، وقد تزيد مع التدريس", "4 years full-time (240 credits), longer with teaching duties")
JOB = ("كل وظيفة دكتوراه لها إعلان وموعد خاص على صفحة الوظائف بالجامعة؛ لا يوجد تقديم مركزي", "Each doctoral position has its own advert and deadline on the university's jobs page; there is no central application")
add(PHD, "eng", "Doctoral studies at KTH (employed doctoral students)", "KTH Royal Institute of Technology", "Stockholm", PHD_DEG, DUR4, FREE, NP, JOB, NP,
    ("أغلب طلاب الدكتوراه موظفون بعقد وراتب شهري، ويمكنهم العمل في القسم حتى 20% من الوقت", "Most doctoral students are employed with a contract and monthly salary, and may work for the department up to 20% of full-time"),
    ("قدّم على إعلان الوظيفة مباشرة بسيرتك الذاتية وخطاب وكشف درجاتك", "Apply to the job advert directly with your CV, cover letter and transcripts"),
    "https://kth.se/en/studies/phd/general/employment-1.527042", "https://studyinsweden.se/plan-your-studies/degree-programmes/phd-programmes",
    ("إعلانات الدكتوراه في السويد", "PhD positions in Sweden"))
add(PHD, "cs", "Doctoral positions at Lund University", "Lund University", "Lund", PHD_DEG, DUR4, FREE, NP, JOB, NP,
    ("طالب الدكتوراه المقبول على وظيفة منتظمة يُعيَّن موظفاً في الجامعة براتب ومزايا؛ الوظائف في كل التخصصات", "Students accepted for a regular doctoral position are employed by the university with salary and benefits; positions cover all fields"),
    ("قدّم من صفحة الوظائف فقط؛ الجامعة لا تقبل الطلبات بالإيميل", "Apply only through the vacancies page; applications by email are not accepted"),
    "https://www.lunduniversity.lu.se/about-university/work-us/careers-lund-university/employment-doctoral-student",
    "https://www.lunduniversity.lu.se/about-university/work-us/careers-lund-university/employment-doctoral-student", ("صفحة وظائف الدكتوراه", "Doctoral vacancies"))

write("السويد", "Sweden", "sweden", MA, level="master")
write("السويد", "Sweden", "sweden", PHD, level="doctorate")

ap = os.path.join(ROOT, "data", "programmes", "all_programmes.csv")
rows = list(csv.reader(open(ap, encoding="utf-8-sig")))
hdr, body = rows[0], [r for r in rows[1:] if r and r[1] != "السويد"]
nxt = max(int(r[0]) for r in body) + 1
se = list(csv.reader(open(os.path.join(ROOT, "data", "programmes", "sweden.csv"), encoding="utf-8-sig")))[1:]
for i, r in enumerate(se):
    body.append([str(nxt + i)] + r[1:])
with open(ap, "w", newline="", encoding="utf-8-sig") as f:
    csv.writer(f).writerows([hdr] + body)
print("all_programmes.csv:", len(body), "rows; Sweden ids", nxt, "-", nxt + len(se) - 1)
