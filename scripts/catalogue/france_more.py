# France, second batch: English-taught master's at Université Paris-Saclay, Université Paris Cité, Université Côte d'Azur
# and Université Grenoble Alpes. APPEND-ONLY: rows written by france.py keep their ids (the Paris-Saclay Nuclear
# Engineering row is refreshed here with its international-track fee, same id).
# Non-EU students pay differentiated fees (2026/27 master: EUR 3,950) unless the university exempts them; several
# universities brought them to the national rate (EUR 255) for 2026/27 only. Sources: official pages, checked 2026-11-19.
# Run from the repo root:  python3 scripts/catalogue/france_more.py
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import NP, P
from helpers import append_extra

ROWS = []

def add(field, name, uni, city, dur, fee, dl, en, other, how, house, src, apply):
    ROWS.append(P(field=field, name=name, uni=uni, city=city, deg=MSC, dur=dur, fee=fee, adm=NP, dl=dl, en=en, other=other, how=how,
                  living=NP, house=house, src=src, req=src, req_note=("صفحة البرنامج الرسمية", "Official programme page"), apply=apply,
                  apply_note=("صفحة التقديم الرسمية", "Official application page")))

MSC = ("ماجستير (Master)", "Master's degree")
Y2 = ("سنتان (M1 + M2)", "2 years (M1 + M2)")
M1 = ("سنتان (M1 ثم M2)", "2 years (M1 then M2)")
CF = ("قدّم على الجامعة، ثم أنشئ ملفاً على منصة Études en France واجتز مقابلة Campus France في بلدك قبل التأشيرة", "Apply to the university; you also need an Études en France file and the Campus France Egypt interview before the visa")
CROUS = ("سكن CROUS الجامعي متاح بالتقديم، والأماكن محدودة", "CROUS student housing is available on application; places are limited")

# ---------- Université Paris-Saclay ----------
PS = "Université Paris-Saclay"
PS_FEE = ("255 يورو في 2026/2027: الجامعة أعفت غير الأوروبيين جزئياً فصاروا يدفعون رسوم الطلاب الفرنسيين بدل الرسوم المختلفة؛ قرار 2027/2028 لم يُنشر بعد (للتحقق)",
          "€255 in 2026/2027: the university partially exempted non-EU students so they pay the national rate instead of the differentiated fee; the 2027/2028 decision is not yet published (to verify)")
PS_DL = ("التقديم على منصة INCEPTION. في 2026 كانت فترة السنة الأولى (M1) من 15 يناير حتى 16 مارس، ولدفعة 2027 تفتح المنصة من منتصف يناير 2027 (للتحقق من مواعيد كل برنامج)",
         "Apply on the INCEPTION platform. In 2026 the first-year (M1) window ran 15 January - 16 March; for 2027 the platform opens from mid-January 2027 (check each programme's dates)")
PS_EN = ("شهادة مستوى إنجليزي إلزامية لغير الناطقين بها؛ الحد الأدنى في صفحة البرنامج", "An English-level certificate is compulsory for non-native speakers; the minimum is on the programme page")
PS_HOW = ("التقديم على منصة INCEPTION، وبعد القبول ملف Études en France ومقابلة Campus France قبل التأشيرة", "Apply on INCEPTION; once admitted, complete Études en France and the Campus France interview before the visa")
PS_APPLY = "https://universite-paris-saclay.fr/en/admission/etudiants-internationaux/international-students-applying-masters-degree"
PS_OTHER = ("القبول انتقائي والأماكن محدودة", "Selective admission with limited places")
add("cs", "M1 Human Computer Interaction", PS, "Gif-sur-Yvette", M1, PS_FEE, PS_DL,
    ("IELTS 6.0 أو TOEFL 90 أو TOEIC 785، ومن درس بالإنجليزية قد يُعفى", "IELTS 6.0, TOEFL 90 or TOEIC 785; a degree taught in English may give a waiver"),
    PS_OTHER, PS_HOW, NP, "https://www.universite-paris-saclay.fr/en/education/master/computer-science/m1-human-computer-interaction", PS_APPLY)
add("cs", "M1 Artificial Intelligence", PS, "Gif-sur-Yvette", M1, PS_FEE, PS_DL, PS_EN,
    ("مسار انتقائي جداً: 500 إلى 1,500 متقدم لحوالي 25 مقعداً في السنة الأولى حسب موقع البرنامج", "Very selective: 500-1,500 applicants for about 25 first-year places, per the programme site"),
    PS_HOW, NP, "https://www.universite-paris-saclay.fr/en/education/masters-degree/computer-science/m1-artificial-intelligence", PS_APPLY)
add("ds", "M1 Data, Knowledge and Hybrid Artificial Intelligence (DKAI)", PS, "Gif-sur-Yvette", M1, PS_FEE, PS_DL, PS_EN, PS_OTHER, PS_HOW, NP,
    "https://www.universite-paris-saclay.fr/en/formation/master/computer-science/m1-data-science", PS_APPLY)
add("cs", "M1 Distributed, Parallel, and Quantum Computing (DiPaQ)", PS, "Gif-sur-Yvette", M1, PS_FEE, PS_DL, PS_EN, PS_OTHER, PS_HOW, NP,
    "https://www.universite-paris-saclay.fr/en/education/masters-degree/computer-science/distributed-parallel-and-quantum-computing-m1-dipaq", PS_APPLY)
add("econ", "M1 Economics", PS, "Gif-sur-Yvette", M1, PS_FEE, PS_DL, PS_EN,
    ("برنامج انتقائي بالإنجليزية يغطي الاقتصاد الجزئي والكلي والقياسي ويتضمن مشاريع بحثية من السنة الأولى", "Selective, in English, covering micro, macro and applied econometrics with research projects from the first year"),
    PS_HOW, NP, "https://www.universite-paris-saclay.fr/en/print/pdf/node/78283", PS_APPLY)
add("bus", "M1 International Business and Sustainability (MIBS)", PS, "Saint-Quentin-en-Yvelines", M1, PS_FEE, PS_DL, PS_EN, PS_OTHER, PS_HOW, NP,
    "https://www.universite-paris-saclay.fr/en/education/trouver-sa-formation/formation-initiales?page=24", PS_APPLY)
# Refresh of the france.py row (same name and university, so it keeps its id): international-track fee.
add("eng", "M1 Nuclear Engineering", PS, "Gif-sur-Yvette", M1,
    ("6,254 يورو سنوياً لغير الأوروبيين (2026/2027، رسوم المسارات الدولية في جامعة باريس ساكلاي)؛ وبعض المنح تخفضها حسب شروط الجامعة", "€6,254 a year for non-EU students (2026/2027, Université Paris-Saclay international-track fee); some scholarships reduce it under the university's criteria"),
    ("لدفعة 2026 كان التقديم على منصة Inception من 15 يناير إلى 16 مارس 2026 (مواعيد 2027 للتحقق)", "For 2026 entry applications on Inception ran 15 January - 16 March 2026 (2027 dates to verify)"),
    ("شهادة مستوى إنجليزي إلزامية لغير الناطقين بها", "An English-level certificate is compulsory for non-native speakers"),
    ("بالإنجليزية بالكامل؛ 45 مكان؛ لخريجي فيزياء أو كيمياء", "Taught entirely in English; 45 places; for physics or chemistry graduates"),
    ("التقديم على منصة Inception، وكذلك Études en France", "Apply on the Inception platform, plus Études en France"), NP,
    "https://www.universite-paris-saclay.fr/en/education/master/nuclear-energy/m1-nuclear-energy", PS_APPLY)

# ---------- Université Paris Cité ----------
PC = "Université Paris Cité"
PC_FEE = ("255 يورو في 2026/2027: الجامعة مدّدت تعليق الرسوم المختلفة، فيدفع غير الأوروبيين رسوم الماجستير الأوروبية بدل الرسوم المختلفة؛ قرار 2027/2028 لم يُنشر بعد (للتحقق)",
          "€255 in 2026/2027: the university extended its moratorium on differentiated fees, so non-EU students pay the EU master's rate instead of the differentiated fee; the 2027/2028 decision is not yet published (to verify)")
PC_DL = ("المواعيد في صفحة البرنامج وعلى منصة eCandidat (أو Études en France لدول هذا الإجراء)؛ مواعيد 2027 للتحقق",
         "Dates are on the programme page and on eCandidat (or Études en France for countries under that procedure); 2027 dates to verify")
PC_EN = ("البرنامج بالإنجليزية؛ مستوى الإنجليزية المطلوب في صفحة البرنامج", "Taught in English; the required English level is on the programme page")
PC_HOW = ("التقديم على eCandidat، أو عبر Études en France إذا كانت دولتك ضمن هذا الإجراء، ثم مقابلة Campus France قبل التأشيرة", "Apply on eCandidat, or through Études en France if your country is under that procedure, then the Campus France interview before the visa")
PC_APPLY = "https://u-paris.fr/?p=11944"
for field, name, url in [
    ("cs", "Master in Computer Sciences: Distributed Artificial Intelligence (DAI)", "https://u-paris.fr/language/en/master-in-computer-sciences-distributed-artificial-intelligence-dai/"),
    ("ds", "Master in Mathematics and Data Science", "https://u-paris.fr/master-n-mathematics-and-data-science-mathematics-vision-learning-mva/"),
    ("econ", "Master in Economics and Psychological Sciences", "https://u-paris.fr/master-in-economics-and-psychological-sciences/"),
    ("eng", "Master in Biomedical Engineering (BME-Paris): BioMechanics", "https://u-paris.fr/language/en/master-in-biomedical-engineering-biomechanics-biomech/"),
    ("eng", "Master in Biomedical Engineering (BME-Paris): NeuroTechnologies", "https://u-paris.fr/master-in-biomedical-engineering-bme-paris-neurotechnologies-neurotech-track/"),
    ("eng", "Master in Biomedical Engineering (BME-Paris): BioImaging", "https://u-paris.fr/language/en/master-in-biomedical-engineering-biomaging-bim/"),
    ("eng", "Master in Biomedical Engineering (BME-Paris): Molecular and Cellular Biotherapies", "https://u-paris.fr/en/master-in-biomedical-engineering-molecular-and-cellular-biotherapies-mcb/"),
    ("law", "Master in Comparative Law: Common Law", "https://u-paris.fr/en/master-in-comparative-law-common-law/"),
    ("cs", "Master in Cognitive Science: Computational Neuroscience and Artificial Intelligence (NCIA)", "https://u-paris.fr/master-in-cognitive-science-computational-neuroscience-and-artificial-intelligence-ncia/"),
    ("cs", "Master in Cognitive Science: Computational Linguistics and Artificial Intelligence (LING)", "https://u-paris.fr/110391-2/"),
]:
    add(field, name, PC, "Paris", Y2, PC_FEE, PC_DL, PC_EN, ("القبول انتقائي", "Selective admission"), PC_HOW, CROUS, url, PC_APPLY)

add("ph", "Master in Public Health: Comparative Effectiveness Research (M2)", PC, "Paris", ("سنة واحدة (M2)", "1 year (M2)"), PC_FEE, PC_DL, PC_EN,
    ("سنة ثانية فقط؛ تتطلب سنة ماجستير أولى (M1) أو ما يعادلها", "Second year only; requires a first master's year (M1) or equivalent"), PC_HOW, CROUS,
    "https://u-paris.fr/language/en/master-in-public-health-comparative-effectiveness-in-research-2nd-year/", PC_APPLY)

# ---------- Université Côte d'Azur (international MSc, own fees) ----------
UCA = "Université Côte d'Azur"
UCA_DL = ("تجتمع اللجنة كل شهر، والرد خلال شهرين من اكتمال الملف على eCandidat", "The committee meets every month; expect a reply within two months of your eCandidat file being complete")
UCA_EN = ("مستوى B2 على الأقل في الإنجليزية لغير الناطقين بها", "English at least at B2 for applicants from non-English-speaking countries")
UCA_HOW = ("التقديم على eCandidat، ثم Études en France ومقابلة Campus France قبل التأشيرة", "Apply on eCandidat, then Études en France and the Campus France interview before the visa")
UCA_SRC = "https://univ-cotedazur.eu/msc-programs/tuition-fees/are-you-a-european-student/international-students"
for field, name, n, city in [
    ("ds", "MSc Biobanks and Complex Data Management", 5500, "Nice"),
    ("bus", "MSc Management of the Flavor & Fragrance Industry", 5000, "Grasse"),
    ("eng", "MSc Environmental Hazards and Risks Management", 5500, "Nice"),
    ("cs", "MSc Modeling for Neuronal & Cognitive Systems", 5000, "Sophia Antipolis"),
]:
    add(field, name, UCA, city, ("سنتان", "2 years"),
        (f"{n:,} يورو سنوياً للطلاب الدوليين المقبولين في 2026/2027 (بشرط تصويت المجلس الأكاديمي)", f"€{n:,} per year for international students starting in 2026/2027 (subject to the Academic Council's vote)"),
        UCA_DL, UCA_EN, ("برنامج دولي بالإنجليزية بالكامل، والجامعة تمنح 10 منح IdEx سنوياً لأفضل المتقدمين", "International MSc taught entirely in English; the university awards 10 IdEx scholarships a year to top applicants"),
        UCA_HOW, NP, UCA_SRC, "https://univ-cotedazur.eu/msc-programs/2026-intake-applications-now-open-for-international-msc-programs")

# ---------- Université Grenoble Alpes ----------
UGA = "Université Grenoble Alpes & Grenoble INP - UGA"
UGA_FEE = ("255 يورو لكل طلاب الماجستير في 2026/2027 (سنة انتقالية في جامعة غرونوبل)؛ من 2027/2028 حسب قواعد الجامعة الجديدة (للتحقق)", "€255 for every master's student in 2026/2027 (a transition year at UGA); from 2027/2028 under the university's new rules (to verify)")
UGA_DL = ("المواعيد في صفحة البرنامج؛ مواعيد 2027 للتحقق", "Dates are on the programme page; 2027 dates to verify")
UGA_EN = ("البرنامج بالإنجليزية؛ مستوى الإنجليزية المطلوب في صفحة البرنامج", "Taught in English; the required English level is on the programme page")
UGA_SRC = "https://relint.imag.fr/MainEn/Tuition"
UGA_NEWS = "https://www.univ-grenoble-alpes.fr/news/headlines/international-students-what-the-new-decree-changes-regarding-tuition-fees-at-uga-1775896.kjsp"
for field, name, dur, src in [
    ("ds", "Master of Science in Industrial and Applied Mathematics (MSIAM)", Y2, UGA_SRC),
    ("cs", "Master of Science in Cybersecurity", ("سنة واحدة (M2)", "1 year (M2)"), UGA_SRC),
    ("bus", "Master in Applied Corporate Management (ACM)", ("سنة واحدة (M2)", "1 year (M2)"), UGA_NEWS),
    ("econ", "Master in Advances in Finance and Accounting", ("سنة واحدة (M2)", "1 year (M2)"), UGA_NEWS),
]:
    add(field, name, UGA if "INP" in src or src == UGA_SRC else "Université Grenoble Alpes", "Grenoble", dur, UGA_FEE, UGA_DL, UGA_EN,
        ("القبول انتقائي؛ برامج السنة الواحدة تتطلب سنة ماجستير أولى (M1) أو ما يعادلها", "Selective; one-year programmes require a first master's year (M1) or equivalent") if dur != Y2 else ("القبول انتقائي", "Selective admission"),
        CF, CROUS, src, "https://www.univ-grenoble-alpes.fr/requesting-exemption-of-the-additional-tuition-fees-students-from-outside-europe-/")

append_extra("فرنسا", "france", ROWS, "2026-11-19")
