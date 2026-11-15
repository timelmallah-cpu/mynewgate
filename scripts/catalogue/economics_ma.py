# Economics master's added to data/programmes/all_programmes.csv (Germany). Idempotent: a row that is already
# there (same university and programme name) keeps its id; new rows get ids after the last one.
# Sources: official university pages, checked 2026-11-15.
import sys, os, csv, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import NP, MSC2, FIELDAR, REVIEWED, STATUS, ROOT

ROWS = [
    dict(country=("ألمانيا", "Germany"), name="Master of Science in Economics", uni="University of Bonn", city="Bonn",
         deg=("ماجستير العلوم (MSc)", "Master of Science (MSc)"), dur=MSC2,
         fee=("لا توجد رسوم دراسية؛ رسوم فصل حوالي 345 يورو", "No tuition fee; a semester contribution of about €345"),
         adm=("حوالي 345 يورو للفصل", "About €345 per semester"),
         dl=("1 فبراير - 31 مارس 2027 لدفعة أكتوبر، وجولة مبكرة 1 - 31 يناير", "1 February - 31 March 2027 for the October intake, with an early round 1 - 31 January"),
         en=("مستوى B2: يفضل IELTS 6.0 أو TOEFL 87 أو أعلى، ولا تُطلب الألمانية", "B2 level: preferably IELTS 6.0 or TOEFL 87 or higher; German is not required"),
         other=("بكالوريوس اقتصاد (3 أو 4 سنوات) بتقدير ألماني 2.3 أو أفضل ومهارات كمية قوية؛ خطاب توصية واحد من أستاذ؛ لا يُطلب GRE؛ حوالي 100 طالب في الدفعة", "A 3- or 4-year economics bachelor's with a German grade of 2.3 or better and strong quantitative skills; one letter from a professor; no GRE; about 100 students per cohort"),
         how=("التقديم أونلاين فقط على موقع القسم", "Online application only, via the department"),
         living=NP, house=NP, src="https://www.econ.uni-bonn.de/en/study-programs/study-programs/master/application-admission",
         apply="https://www.econ.uni-bonn.de/en/study-programs/study-programs/master/application-admission"),
    dict(country=("ألمانيا", "Germany"), name="Master's Program in Economics (M.Sc.)", uni="University of Mannheim", city="Mannheim",
         deg=("ماجستير العلوم (M.Sc.)", "Master of Science (M.Sc.)"), dur=("4 فصول دراسية (سنتان)", "4 semesters (2 years)"),
         fee=("1,500 يورو للفصل الدراسي لغير الأوروبيين (رسوم ولاية بادن-فورتمبيرغ)", "€1,500 per semester for non-EU students (Baden-Württemberg state fee)"),
         adm=("رسوم فصل 194 يورو", "€194 semester fee"),
         dl=("التقديم السنوي من 1 أبريل حتى 15 مايو لدفعة سبتمبر؛ إثبات الإنجليزية حتى 15 أغسطس", "Annual application period 1 April - 15 May for the September intake; proof of English may follow later in the summer"),
         en=("إثبات إجادة الإنجليزية (B2 على الأقل)، ولا تُطلب الألمانية", "Proof of English (at least B2); German is not required"),
         other=("بكالوريوس اقتصاد أو ما يعادله بتقدير ألماني 2.5 أو أفضل؛ خطاب دافع ومقال أكاديمي", "An economics bachelor's or equivalent with a German grade of 2.5 or better; motivation letter and academic essay"),
         how=("التقديم أونلاين على بوابة الجامعة", "Online on the university's application portal"),
         living=NP, house=NP, src="https://www.uni-mannheim.de/en/academics/before-your-studies/programs/masters-program-in-economics/",
         apply="https://www.vwl.uni-mannheim.de/en/academics/prospective-students-msc/admission-requirements/"),
]

ap = os.path.join(ROOT, "data", "programmes", "all_programmes.csv")
rows = list(csv.reader(open(ap, encoding="utf-8-sig")))
hdr, body = rows[0], rows[1:]
tr = {}
t = lambda v: (tr.__setitem__(v[0], v[1]), v[0])[1]
nxt = max(int(r[0]) for r in body) + 1
for r in ROWS:
    line = [t(r["country"]), FIELDAR["econ"], r["name"], r["uni"], r["city"], t(r["deg"]), t(r["dur"]), t(r["fee"]), t(r["adm"]), t(r["dl"]),
            t(r["en"]), t(r["other"]), t(r["how"]), t(r["living"]), t(r["house"]), r["src"], REVIEWED, t(STATUS)]
    hit = [i for i, b in enumerate(body) if b[3] == r["name"] and b[4] == r["uni"]]
    if hit:
        body[hit[0]] = [body[hit[0]][0]] + line
    else:
        body.append([str(nxt)] + line); nxt += 1
with open(ap, "w", newline="", encoding="utf-8-sig") as f:
    csv.writer(f).writerows([hdr] + body)

tp = os.path.join(ROOT, "data", "translations_en.json")
allt = json.load(open(tp, encoding="utf-8")); allt.update(tr)
json.dump(allt, open(tp, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

lp = os.path.join(ROOT, "data", "programme_links.csv")
links = list(csv.reader(open(lp, encoding="utf-8")))
for r in ROWS:
    row = [r["country"][0], r["name"], r["uni"], r["src"], "صفحة البرنامج الرسمية", "Official programme page", r["apply"], "صفحة التقديم الرسمية", "Official application page", "master"]
    links = [l for l in links if not (l and l[1] == r["name"] and l[2] == r["uni"] and l[-1] == "master")] + [row]
with open(lp, "w", newline="", encoding="utf-8") as f:
    csv.writer(f).writerows(links)
print("economics master's:", [b[0] for b in body if b[2] == FIELDAR["econ"]])
