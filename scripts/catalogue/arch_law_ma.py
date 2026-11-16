# Architecture and law master's added to data/programmes/all_programmes.csv. Idempotent: a row that is already
# there (same university and programme name) keeps its id; new rows get ids after the last one.
# Run after economics_ma.py. Sources: official university pages, checked 2026-11-16.
import sys, os, csv, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import NP, FIELDAR, REVIEWED, STATUS, ROOT

Y2 = ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)")
ROWS = [
    dict(field="arch", country=("ألمانيا", "Germany"), name="Architecture (DIA)", uni="Anhalt University of Applied Sciences", city="Dessau",
         deg=("ماجستير الآداب (M.A.) في العمارة", "Master of Arts (M.A.) in Architecture"), dur=("4 فصول دراسية (سنتان)", "4 semesters (2 years)"),
         fee=("غير منشور في المصدر على صفحة الجامعة؛ دليل MyGuide التابع لـ DAAD يذكر 850 يورو للفصل (للتحقق)", "Not published on the university page; DAAD's MyGuide lists €850 per semester (to verify)"),
         adm=("التقديم عبر uni-assist: 75 يورو للطلب الأول و30 يورو لكل طلب إضافي", "Via uni-assist: €75 for the first application and €30 for each additional one"),
         dl=("مُدّد موعد شتاء 2026 حتى منتصف يونيو؛ موعد 2027 لم يُنشر بعد (للتحقق)", "The winter 2026 deadline was extended to mid-June; the 2027 deadline is not yet published (to verify)"),
         en=("غير منشور في المصدر (البرنامج بالإنجليزية بالكامل)", "Not published in the source (the programme is fully in English)"),
         other=("مدرسة دراسات عليا دولية في العمارة بجوار مبنى الباوهاوس في ديساو؛ ملف أعمال (Portfolio) بمشاريع أكاديمية ومهنية، وخبرة مهنية سنة على الأقل بعد التخرج؛ شهادة APS مطلوبة لبعض الدول",
                "An international graduate school of architecture next to the Bauhaus in Dessau; a portfolio of academic and professional projects and at least one year of professional experience after graduation; an APS certificate is required for some countries"),
         how=("عبر uni-assist فقط، ولا يُقبل التقديم المباشر للجامعة", "Through uni-assist only; direct applications to the university are not accepted"),
         living=NP, house=NP, src="https://www.hs-anhalt.de/dia", apply="https://www.hs-anhalt.de/studiengaenge/mad/applytodia.html"),
    dict(field="arch", country=("التشيك", "Czechia"), name="Architecture and Urbanism (in English)", uni="Czech Technical University in Prague (CTU)", city="Prague",
         deg=("ماجستير Ing. arch. في العمارة والعمران", "Ing. arch. master's in Architecture and Urbanism"), dur=("سنتان", "2 years"),
         fee=("132,000 كرونة تشيكية سنوياً (آخر رقم منشور؛ يحدده رئيس الجامعة كل سنة - للتحقق)", "CZK 132,000 per year (latest published figure; set by the Rector each year - to verify)"),
         adm=("رسوم طلب 1,050 كرونة تشيكية", "CZK 1,050 application fee"),
         dl=("1 - 31 يناير 2027 (تقديم إلكتروني)، ثم مقابلة شفهية في مارس 2027", "Applications 1 - 31 January 2027 online, then an oral interview in March 2027"),
         en=("غير منشور في المصدر", "Not published in the source"),
         other=("بكالوريوس في العمارة أو مجال قريب؛ تقول الكلية إن خريجي البرنامج يحق لهم ممارسة المهنة في كل دول الاتحاد الأوروبي", "A bachelor's in architecture or a related field; the faculty says graduates may practise in all EU countries"),
         how=("طلب إلكتروني على prihlaska.cvut.cz", "Online application at prihlaska.cvut.cz"),
         living=NP, house=NP, src="https://www.fa.cvut.cz/en/applicants/admission/admission-procedure/master-s-degree",
         apply="https://www.fa.cvut.cz/en/applicants/admission/tuition-fees"),
    dict(field="arch", country=("إيطاليا", "Italy"), name="Architecture - Built Environment - Interiors (English track)", uni="Politecnico di Milano", city="Milan",
         deg=("Laurea Magistrale (تعادل الماجستير)", "Laurea Magistrale (equivalent to a Master of Science)"), dur=Y2,
         fee=("حوالي 3,883 يورو سنوياً لغير الأوروبيين بدون منحة: قسط أول 880.04 يورو + قسط ثانٍ حتى 3,003 يورو (الحد الأقصى؛ للتحقق)", "About €3,883 per year for non-EU students without a scholarship: a first instalment of €880.04 plus a second of up to €3,003 (maximum; to verify)"),
         adm=("رسوم طلب 50 يورو في الفترة الأولى و150 يورو في الثانية (لائحة 2025/2026)", "Application fee €50 in the first period and €150 in the second (2025/2026 regulation)"),
         dl=("التقديم لدفعة سبتمبر 2027 من 1 أكتوبر 2026 حتى 28 يناير 2027، مع موعد مبكر 1 ديسمبر 2026 (للتحقق)", "Applications for the September 2027 intake 1 October 2026 - 28 January 2027, with an early-bird deadline on 1 December 2026 (to verify)"),
         en=("شهادة إنجليزية معتمدة مطلوبة للقبول (القائمة على موقع الجامعة)", "A certified English test is required for admission (list on the university site)"),
         other=("مسار باللغة الإنجليزية (BEI) في حرم ميلانو ليوناردو؛ يتطلب بكالوريوس في العمارة (فئة L-17 أو ما يعادلها) وتقييماً مقارناً للملف؛ برامج العمارة تقبل في سبتمبر فقط",
                "An English track (BEI) on the Milano Leonardo campus; requires a bachelor's in architecture (class L-17 or equivalent) and a comparative assessment of the file; architecture programmes admit in September only"),
         how=("بوابة الخدمات الإلكترونية للجامعة (Admission requests)", "The university's online services (Admission requests)"),
         living=NP, house=NP, src="https://www.auic.polimi.it/en/education/laurea-magistrale-equivalent-to-master-of-science/details/1195-2025",
         apply="https://www.polimi.it/en/prospective-students/how-to-apply/admission-to-laurea-magistrale/foreign-qualification/deadlines"),
    dict(field="law", country=("هولندا", "Netherlands"), name="International and European Law (LLM)", uni="Tilburg University", city="Tilburg",
         deg=("ماجستير القانون (LLM)", "Master of Laws (LLM)"), dur=("سنة واحدة", "1 year"),
         fee=("19,900 يورو (2026/27)", "€19,900 (2026/27)"),
         adm=("رسوم طلب 100 يورو لحاملي الشهادات غير الهولندية", "€100 application fee for non-Dutch diplomas"),
         dl=("1 أبريل لغير الأوروبيين لدفعة سبتمبر، و1 أكتوبر لدفعة فبراير", "1 April for non-EEA applicants (September intake); 1 October for the February intake"),
         en=("مستوى C1 في الإنجليزية (مثل Cambridge Advanced)", "C1 English (e.g. Cambridge Advanced)"),
         other=("مسارات منها: القانون الأوروبي والمخاطر العالمية، حقوق الإنسان والأمن الإنساني، القانون البيئي والعدالة؛ إعفاءات جزئية محدودة من الرسوم للمتفوقين (للتحقق)",
                "Tracks include European Law and Global Risk, Human Rights and Human Security, and Environmental Law and Justice; limited partial fee waivers for top applicants (to verify)"),
         how=("عبر Studielink ثم بوابة الجامعة", "Through Studielink, then the university portal"),
         living=NP, house=NP, src="https://www.studyinnl.org/dutch-education/studies/international-and-european-law-1475-tilburg-university",
         apply="https://www.tilburguniversity.edu/nl/onderwijs/masteropleidingen/international-and-european-law/aanmelden"),
    dict(field="law", country=("إستونيا", "Estonia"), name="Law (MA)", uni="Tallinn University of Technology (TalTech)", city="Tallinn",
         deg=("ماجستير الآداب في القانون (MA)", "Master of Arts in Law (MA)"), dur=Y2,
         fee=("4,600 يورو سنوياً (للأوروبيين وغير الأوروبيين)", "€4,600 per year (EU and non-EU citizens)"),
         adm=("رسوم طلب 100 يورو", "€100 application fee"),
         dl=("1 أبريل لغير الأوروبيين (يفتح التقديم 1 فبراير)", "1 April for non-EU citizens (applications open on 1 February)"),
         en=("غير منشور في المصدر (متطلبات الإنجليزية العامة للجامعة)", "Not published in the source (the university's general English requirements apply)"),
         other=("تخصص القانون والتكنولوجيا: الذكاء الاصطناعي وحماية البيانات والأمن السيبراني والملكية الفكرية؛ يدفع غير الأوروبيين رسوم السنة الأولى كاملة قبل التسجيل",
                "Law and Technology specialisation: artificial intelligence, data protection, cyber security and intellectual property; non-EU students pay the full first-year fee before matriculation"),
         how=("منصة DreamApply", "DreamApply platform"),
         living=NP, house=NP, src="https://taltech.ee/en/masters-programmes/law", apply="https://taltech.ee/en/admissions"),
]

ap = os.path.join(ROOT, "data", "programmes", "all_programmes.csv")
rows = list(csv.reader(open(ap, encoding="utf-8-sig")))
hdr, body = rows[0], rows[1:]
tr = {}
t = lambda v: (tr.__setitem__(v[0], v[1]), v[0])[1]
nxt = max(int(r[0]) for r in body) + 1
for r in ROWS:
    line = [t(r["country"]), FIELDAR[r["field"]], r["name"], r["uni"], r["city"], t(r["deg"]), t(r["dur"]), t(r["fee"]), t(r["adm"]), t(r["dl"]),
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
print("architecture/law master's:", [b[0] for b in body if b[2] in (FIELDAR["arch"], FIELDAR["law"])])
