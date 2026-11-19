# Germany, second batch: 30 English-taught master's programmes at public universities, open to non-EU applicants.
# Source: the official DAAD International Programmes database (programme pages filled in by each university), checked 2026-11-17.
# APPEND-ONLY: the first 30 German master's rows were written by hand and are left untouched. This script only
# adds (or refreshes) its own rows in germany.csv, all_programmes.csv, programme_links.csv and translations_en.json,
# and keeps the ids of its rows that were already published.
# Run from the repo root:  python3 scripts/catalogue/germany_more.py
import sys, os, csv, json
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import NP, ROOT, FIELDAR

REVIEWED = "2026-11-17"
STATUS = ("من قاعدة DAAD الرسمية - يلزم التأكد من صفحة الجامعة قبل النشر",
          "From the official DAAD database - must be confirmed on the university page before publishing")
DAAD = "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/{}/"
REQ_NOTE = ("مصدر DAAD: قسم الشروط والتسجيل في صفحة البرنامج", "DAAD: Requirements / Registration section of the programme page")
UA = "https://my.uni-assist.de/"

MSC = ("ماجستير (MSc)", "Master of Science (MSc)")
MENG = ("ماجستير هندسة (MEng)", "Master of Engineering (MEng)")
MA_ = ("ماجستير (MA)", "Master of Arts (MA)")
S4 = ("4 فصول دراسية (سنتان)", "4 semesters (2 years)")
S3 = ("3 فصول دراسية (سنة ونصف)", "3 semesters (1.5 years)")
S2 = ("فصلان دراسيان (سنة واحدة)", "2 semesters (1 year)")
FREE = ("لا توجد", "None")
UNIASSIST = ("التقديم عبر uni-assist", "Apply through uni-assist")

ROWS = []


def add(field, name, uni, city, daad, deg, dur, fee, adm, dl, en, other, how, living, house, apply, apply_note):
    ROWS.append(dict(field=field, name=name, uni=uni, city=city, src=DAAD.format(daad), deg=deg, dur=dur, fee=fee, adm=adm,
                     dl=dl, en=en, other=other, how=how, living=living, house=house, apply=apply, apply_note=apply_note))


# ---------------- Computer science / AI ----------------
add("cs", "Artificial Intelligence (AI), MSc", "FAU Erlangen-Nürnberg", "Erlangen", 7657, MSC, S4,
    ("تختلف حسب الحالة (للتحقق): الصفحة تقول إن الرسوم تعتمد على عدة عوامل وتحيل لموقع البرنامج", "Varies (to be checked): the page says fees depend on several factors and refers to the programme website"),
    ("82 يورو", "€82"),
    ("الشتوي فقط: 15 فبراير - 31 مايو", "Winter only: 15 February - 31 May"),
    ("B2 (IELTS Academic 5.5 أو TOEFL iBT 80 بحد أدنى 20 في كل قسم)", "B2 (IELTS Academic 5.5 or TOEFL iBT 80 with at least 20 in each section)"),
    ("بكالوريوس حاسب أو رياضيات أو مجال تقني قريب بتقدير ممتاز، واجتياز اختبار قبول أونلاين، وخبرة برمجة جيدة. يُطلب GRE أو اختبار مشابه من غير الأوروبيين إذا لم تكن دولتهم موقّعة على اتفاقية لشبونة (للتحقق من وضع دولتك)",
     "Bachelor's in computer science, mathematics or a related technical field with an excellent result, an online admission test and solid programming experience. GRE or a similar test for non-EU applicants from countries outside the Lisbon Recognition Convention (check your country)"),
    ("بوابة جامعة FAU (بدون uni-assist)", "FAU application portal (not uni-assist)"),
    NP,
    ("سكن مؤسسة الطلاب Studierendenwerk Erlangen-Nürnberg، والطلب عليه عالٍ فقدّم مبكراً", "Student Services Erlangen-Nürnberg halls; demand is high, so apply early"),
    "https://www.fau.eu/studying/applications-and-admissions/", ("صفحة التقديم في الجامعة", "University application page"))

add("cs", "Artificial Intelligence, MSc", "Brandenburg University of Technology Cottbus-Senftenberg (BTU)", "Cottbus", 8322, MSC, S4, FREE,
    ("391.80 يورو (الشتوي 2026/27)", "€391.80 (winter 2026/27)"),
    ("الشتوي: 1 مارس - 15 يوليو / الصيفي: 1 نوفمبر - 15 يناير", "Winter: 1 March - 15 July / Summer: 1 November - 15 January"),
    ("B2 (IELTS Academic 6 أو TOEFL iBT 79)", "B2 (IELTS Academic 6 or TOEFL iBT 79)"),
    ("بكالوريوس في الحاسب أو الذكاء الاصطناعي أو الرياضيات مع تركيز على الحاسب", "Bachelor's in computer science, AI or mathematics with a computer science focus"),
    UNIASSIST,
    ("780 - 1,000 يورو", "€780 - 1,000"),
    ("سكن جامعي في 3 مواقع بأماكن محدودة، فقدّم بعد القبول مباشرة؛ والسكن المشترك (WG) منتشر", "Student halls at three locations with limited places, so apply right after admission; shared flats (WG) are common"),
    UA, ("بوابة uni-assist", "uni-assist portal"))

add("cs", "Master of Science in Artificial Intelligence Engineering", "University of Passau", "Passau", 7784, MSC, S4, FREE,
    ("حوالي 130 يورو", "About €130"),
    ("الشتوي: 1 أبريل - 31 مايو / الصيفي: 1 نوفمبر - 15 ديسمبر", "Winter: 1 April - 31 May / Summer: 1 November - 15 December"),
    ("B2 (IELTS Academic 5.5 أو TOEFL iBT 72)", "B2 (IELTS Academic 5.5 or TOEFL iBT 72)"),
    ("بكالوريوس حاسب أو رياضيات (120 ساعة معتمدة على الأقل منها 35 رياضيات و40 حاسب) بتقدير 2.7 ألماني أو أفضل أو ضمن أعلى 70% من الدفعة، وملخص لمشروع التخرج، والجامعة لازم تكون H+ في قاعدة anabin",
     "Bachelor's in computer science or mathematics (at least 120 ECTS, including 35 in mathematics and 40 in computer science) with a German grade of 2.7 or better or in the top 70% of the cohort, a thesis abstract, and an H+ university in anabin"),
    ("موقع الجامعة uni-passau.de/en/apply", "University website uni-passau.de/en/apply"),
    ("992 يورو كحد أدنى حسب الجامعة", "At least €992 according to the university"),
    ("نعم: سكن جامعي 240 - 510 يورو شهرياً (غير مضمون)، ومكتب الطلاب الدوليين يساعد في البحث", "Yes: halls €240 - 510 a month (not guaranteed), and the International Office helps with the search"),
    "https://www.uni-passau.de/en/apply", ("صفحة التقديم في الجامعة", "University application page"))

add("cs", "Embedded Computing Systems (ESY)", "RPTU University Kaiserslautern-Landau", "Kaiserslautern", 3590, MSC, S4, FREE,
    ("350 يورو", "€350"),
    ("الشتوي: 1 نوفمبر - 30 أبريل / الصيفي: 1 مايو - 31 أكتوبر", "Winter: 1 November - 30 April / Summer: 1 May - 31 October"),
    ("B2 (IELTS Academic 6 أو TOEFL iBT 80 بحد أدنى 20 في كل قسم)", "B2 (IELTS Academic 6 or TOEFL iBT 80 with at least 20 in each section)"),
    ("بكالوريوس هندسة كهربائية أو ما يعادله بمعدل 3.5 من 4 أو ما يعادله، وGRE مستحسن", "Bachelor's in electrical engineering or equivalent with a CGPA of 3.5 out of 4 or equivalent; GRE recommended"),
    ("بوابة الكلية applymsc.eit.rptu.de", "Faculty portal applymsc.eit.rptu.de"),
    ("حوالي 850 يورو", "About €850"),
    ("أغلب الطلاب في سكن Studierendenwerk بإيجار 250 - 350 يورو، والتقديم عليه مباشرة؛ السكن غير مضمون مع القبول", "Most students live in Studierendenwerk halls (€250 - 350), applied for directly; housing is not guaranteed with admission"),
    "https://applymsc.eit.rptu.de", ("بوابة التقديم للبرنامج", "Programme application portal"))

# ---------------- Data science ----------------
add("ds", "Data Science", "RWTH Aachen University", "Aachen", 7636, MSC, S4, FREE,
    ("حوالي 360 يورو", "About €360"),
    ("غير منشور في صفحة DAAD: مواعيد غير الأوروبيين تختلف وتُراجع على موقع الجامعة (للتحقق)", "Not on the DAAD page: non-EU dates differ and are on the university website (to be checked)"),
    ("B2 (مثلاً IELTS Academic 5.5)", "B2 (e.g. IELTS Academic 5.5)"),
    ("بكالوريوس حاسب أو رياضيات أو فيزياء أو مجال قريب. غير الأوروبيين بدون ثانوية ألمانية لازم يقدّموا GRE (Quantitative 75th percentile وVerbal 15th percentile وAnalytical Writing 3.5)",
     "Bachelor's in computer science, mathematics, physics or a related field. Non-EU applicants without a German Abitur need GRE scores (Quantitative 75th percentile, Verbal 15th percentile, Analytical Writing 3.5)"),
    ("بوابة RWTHonline", "RWTHonline portal"),
    ("حوالي 1,100 يورو", "About €1,100"),
    NP,
    "https://online.rwth-aachen.de", ("بوابة RWTHonline", "RWTHonline portal"))

add("ds", "Applied Data Science (MSc)", "University of Göttingen", "Göttingen", 7641, MSC, S4, FREE,
    ("حوالي 460 يورو", "About €460"),
    ("الشتوي: حتى 1 مايو / الصيفي: حتى 1 نوفمبر", "Winter: until 1 May / Summer: until 1 November"),
    ("C1 (IELTS Academic 6.5 أو TOEFL iBT 95)", "C1 (IELTS Academic 6.5 or TOEFL iBT 95)"),
    ("بكالوريوس 180 ساعة معتمدة، منها 60 على الأقل في علوم البيانات أو الحاسب أو الإحصاء أو الرياضيات. اختبار dMAT مستحسن بقوة للدوليين، ومقابلة فيديو للمرشحين", "Bachelor's of 180 ECTS with at least 60 in data science, computer science, statistics or mathematics. The dMAT test is strongly recommended for international applicants, with a video interview for shortlisted applicants"),
    ("حسب صفحة التقديم في الجامعة uni-goettingen.de (للتحقق من البوابة)", "As on the university's application page uni-goettingen.de (check the portal)"),
    ("800 - 1,000 يورو", "€800 - 1,000"),
    ("خدمة السكن في المكتب الدولي تساعد وتنشر عروض الملاك، والأماكن محدودة فتواصل مبكراً", "The International Office accommodation service helps and posts landlord offers; places are limited, so get in touch early"),
    "https://www.uni-goettingen.de/en/642406.html", ("صفحة التقديم في الجامعة", "University application page"))

add("ds", "MSc Artificial Intelligence and Data Science", "Deggendorf Institute of Technology", "Deggendorf", 7124, MSC, S4,
    ("1,000 يورو سنوياً (500 يورو لكل فصل دراسي)", "€1,000 a year (€500 per semester)"),
    ("87 يورو (الصيفي 2027) ثم 92 يورو، ورسوم طلب 60 يورو لغير الأوروبيين", "€87 (summer 2027), then €92; non-EU applicants also pay a €60 application fee"),
    ("الصيفي (مارس في دغندورف): 15 أكتوبر - 15 نوفمبر / الشتوي: يبدأ عند الجامعة الشريكة في التشيك بموعد منتصف يناير (للتحقق)", "Summer (March start in Deggendorf): 15 October - 15 November / Winter: starts at the Czech partner university with a mid-January deadline (to be checked)"),
    ("B2 (IELTS Academic 5.5 أو TOEFL iBT 72)", "B2 (IELTS Academic 5.5 or TOEFL iBT 72)"),
    ("بكالوريوس فيه 90 ساعة معتمدة على الأقل في الحاسب منها 18 في الذكاء الاصطناعي أو علوم البيانات، واجتياز اختبار قبول. البرنامج بالشراكة مع University of South Bohemia في التشيك", "Bachelor's with at least 90 ECTS in computer science, including 18 in AI or data science, and an admission test. Run with the University of South Bohemia (Czechia)"),
    ("موقع الجامعة th-deg.de/en/apply", "University website th-deg.de/en/apply"),
    ("حوالي 950 يورو", "About €950"),
    ("المكتب الدولي يساعد في السكن (سكن طلابي وشقق خاصة)", "The International Office helps with housing (halls and private flats)"),
    "https://www.th-deg.de/en/apply#international", ("صفحة التقديم في الجامعة", "University application page"))

add("ds", "Data Science", "Catholic University of Eichstätt-Ingolstadt (KU)", "Ingolstadt", 10360, MSC, S4, FREE,
    ("حوالي 88 يورو", "About €88"),
    ("الشتوي: 1 مايو - 15 يوليو (الصيفي لحمَلة الشهادات الأوروبية فقط)", "Winter: 1 May - 15 July (the summer intake is only for degrees from EU countries)"),
    ("B2 بشهادة رسمية (الدرجات غير منشورة في المصدر)", "B2 with an official certificate (scores not published in the source)"),
    ("بكالوريوس علوم بيانات أو رياضيات أو إحصاء أو حاسب أو فيزياء مع أساس قوي في الرياضيات والاحتمالات والبرمجة. يُنصح غير الأوروبيين بشدة بتقديم GRE Mathematics Subject Test. جامعة كاثوليكية تابعة للكنيسة لكن بدون رسوم دراسية",
     "Bachelor's in data science, mathematics, statistics, computer science or physics with solid mathematics, probability and programming. Non-EU applicants are strongly encouraged to submit the GRE Mathematics Subject Test. A Church-run university, with no tuition fees"),
    UNIASSIST,
    ("حوالي 1,000 يورو", "About €1,000"),
    ("خدمة سكن مجانية من المكتب الدولي؛ السكن الطلابي المدعوم 300 - 400 يورو والخاص حوالي 750 يورو", "Free housing service from the International Office; subsidised halls €300 - 400, private about €750"),
    "https://my.uni-assist.de/studiengaenge", ("بوابة uni-assist", "uni-assist portal"))

# ---------------- Business ----------------
add("bus", "Business Administration (MSc)", "University of Münster", "Münster", 7663, MSC, S4, FREE,
    ("حوالي 355 يورو", "About €355"),
    ("الشتوي فقط: حتى 15 يوليو", "Winter only: until 15 July"),
    ("C1 (IELTS Academic 7 أو TOEFL iBT 95)", "C1 (IELTS Academic 7 or TOEFL iBT 95)"),
    ("لخريجي إدارة الأعمال أو مجال قريب، والتفاصيل في لائحة القبول على موقع الكلية", "For graduates in business or a related field; details in the admission regulations on the faculty website"),
    ("بوابة التقديم في الجامعة", "University application portal"),
    ("1,000 يورو على الأقل", "At least €1,000"),
    ("لا يوجد سكن تابع للجامعة نفسها، لكن Studierendenwerk يوفّر سكناً طلابياً؛ لا تدفع لمالك قبل توقيع العقد", "The university has no halls of its own, but the Studierendenwerk does; never pay a landlord before signing a contract"),
    "https://studienbewerbung.uni-muenster.de/bewerbungsportal/", ("بوابة التقديم في الجامعة", "University application portal"))

add("bus", "Master of Science in Business Administration", "Humboldt-Universität zu Berlin", "Berlin", 6100, MSC, S4, FREE,
    ("355.80 يورو", "€355.80"),
    ("الشتوي فقط: عادةً 1 - 31 مايو", "Winter only: usually 1 - 31 May"),
    ("C1 (مثلاً IELTS Academic 7)", "C1 (e.g. IELTS Academic 7)"),
    ("شهادة في إدارة الأعمال أو الاقتصاد فيها 100 ساعة معتمدة على الأقل في المواد الاقتصادية، و24 في الرياضيات والإحصاء والاقتصاد القياسي والاقتصاد الجزئي. بعض مواد الضرائب بالألمانية",
     "A business, economics or related degree with at least 100 ECTS in economic subjects and 24 in mathematics, statistics, econometrics and microeconomics. Some taxation courses are in German"),
    ("uni-assist أو موقع الجامعة", "uni-assist or the university website"),
    ("900 - 1,200 يورو", "€900 - 1,200"),
    ("الجامعة تحاول توفير أماكن في سكن الطلاب ببرلين لأكبر عدد ممكن", "The university tries to find student hall places in Berlin for as many students as possible"),
    "https://www.hu-berlin.de/en/study/before-your-studies/apply/overview", ("صفحة التقديم في الجامعة", "University application page"))

add("bus", "Business Administration (Master of Science)", "University of Cologne", "Cologne", 5435, MSC, S4, FREE,
    ("حوالي 320 يورو", "About €320"),
    ("الشتوي فقط: 15 أبريل - 15 يونيو", "Winter only: 15 April - 15 June"),
    ("B2 (مثلاً IELTS Academic 5.5)", "B2 (e.g. IELTS Academic 5.5)"),
    ("تقدير 2.7 ألماني أو أفضل، و60 ساعة معتمدة في إدارة الأعمال و18 في الاقتصاد و15 في الإحصاء أو الرياضيات. أغلب المواد بالإنجليزية ما عدا تخصص المحاسبة والضرائب",
     "German grade of 2.7 or better, with 60 ECTS in business, 18 in economics and 15 in statistics or mathematics. Most courses are in English, except the Accounting and Taxation major"),
    ("حسب صفحة التقديم في الكلية (للتحقق من البوابة)", "As on the faculty's application page (check the portal)"),
    NP,
    ("سكن Kölner Studierendenwerk غرفة 200 - 300 يورو، أو سكن خاص 400 - 600 يورو", "Kölner Studierendenwerk room €200 - 300, or private €400 - 600"),
    "https://wiso.uni-koeln.de/en/studies/application/master/master-business-administration", ("صفحة التقديم في الكلية", "Faculty application page"))

add("bus", "MSc in Business Administration (English track)", "University of Hamburg", "Hamburg", 9755, MSC, S4, FREE,
    ("حوالي 390 يورو", "About €390"),
    ("الشتوي فقط: 15 فبراير - 31 مارس", "Winter only: 15 February - 31 March"),
    ("C1 (مثلاً IELTS Academic 7)", "C1 (e.g. IELTS Academic 7)"),
    ("بكالوريوس في إدارة الأعمال أو الاقتصاد أو مجال قريب، و24 ساعة معتمدة على الأقل في الرياضيات والإحصاء والاقتصاد الجزئي. المسار الإنجليزي فيه تخصصات: تحليل الأعمال، التمويل، التسويق، سلاسل الإمداد",
     "Bachelor's in business, economics or a related field, with at least 24 ECTS in mathematics, statistics and microeconomics. The English track offers Business Analytics, Finance, Marketing, and Operations and Supply Chain"),
    ("حسب صفحة البرنامج bwl.uni-hamburg.de (للتحقق من البوابة)", "As on the programme page bwl.uni-hamburg.de (check the portal)"),
    ("900 - 1,400 يورو (سكن 400 - 700 ومعيشة 500 - 700)", "€900 - 1,400 (housing €400 - 700 and living €500 - 700)"),
    ("السكن الرخيص في هامبورغ قليل، فابدأ البحث مبكراً", "Affordable housing in Hamburg is scarce, so start early"),
    "https://www.bwl.uni-hamburg.de", ("موقع البرنامج", "Programme website"))

add("bus", "Master of Arts in International Business (MA.IB)", "Mainz University of Applied Sciences", "Mainz", 3826, MA_, S4, FREE,
    ("حوالي 350 يورو", "About €350"),
    ("الشتوي فقط: حتى 15 يونيو", "Winter only: until 15 June"),
    ("C1 (IELTS Academic 6.5 أو TOEFL iBT 92)", "C1 (IELTS Academic 6.5 or TOEFL iBT 92)"),
    ("بكالوريوس إدارة أعمال (180 ساعة على الأقل) بتقدير 2.5 ألماني أو ECTS C، وثلاث لغات: الإنجليزية والألمانية A2 على الأقل ولغة ثالثة B1، وخطاب دافع، وفصل دراسي إجباري في الخارج",
     "Bachelor's in business (at least 180 ECTS) with a German grade of 2.5 or ECTS C, three languages (English, German at least A2 and a third language at B1), a motivation letter, and a compulsory semester abroad"),
    UNIASSIST,
    ("حوالي 1,030 يورو (المبلغ المتوقع لإثبات القدرة المالية)", "About €1,030 (the amount you will likely need to prove)"),
    ("سكن Studierendenwerk Mainz 400 - 550 يورو، والتقديم عليه حتى 15 يونيو حتى قبل القبول", "Studierendenwerk Mainz rooms €400 - 550; apply by 15 June, even before admission"),
    "https://www.uni-assist.de/en/how-to-apply/apply-online/", ("بوابة uni-assist", "uni-assist portal"))

# ---------------- Economics ----------------
KIEL_DL = ("الشتوي: 1 أبريل - 31 مايو / الصيفي: 1 أكتوبر - 30 نوفمبر (لأصحاب البكالوريوس من خارج ألمانيا)", "Winter: 1 April - 31 May / Summer: 1 October - 30 November (for Bachelor's degrees from outside Germany)")
KIEL_EN = ("C1 (IELTS Academic 6.5 أو TOEFL iBT 79)", "C1 (IELTS Academic 6.5 or TOEFL iBT 79)")
KIEL_ADM = ("403 يورو + 55 يورو مرة واحدة عند أول تسجيل", "€403 + a one-off €55 at first enrolment")
KIEL_LIV = ("992 يورو على الأقل (11,904 يورو للسنة لإثبات القدرة المالية)", "At least €992 (€11,904 a year to prove for the visa)")
KIEL_HOUSE = ("سكن جامعي بأسعار معقولة قريب من الحرم، والتفاصيل في صفحة المركز الدولي", "Reasonably priced halls near campus; details on the International Centre's page")
KIEL_REQ = "بكالوريوس 3 سنوات و180 ساعة معتمدة على الأقل بتقدير 2.5 ألماني أو أفضل، منها 35 ساعة في مبادئ الاقتصاد والطرق الكمية"
KIEL_REQ_EN = "Bachelor's of at least 3 years and 180 ECTS with a German grade of 2.5 or better, including 35 ECTS in economic principles and quantitative methods"
add("econ", "Master of Science in Quantitative Economics", "Kiel University", "Kiel", 4274, MSC, S4, FREE, KIEL_ADM, KIEL_DL, KIEL_EN,
    (KIEL_REQ + " (حد أدنى: اقتصاد جزئي وكلي 10، رياضيات 8، إحصاء 10، اقتصاد قياسي 4)", KIEL_REQ_EN + " (minimums: micro/macroeconomics 10, mathematics 8, statistics 10, econometrics 4)"),
    UNIASSIST, KIEL_LIV, KIEL_HOUSE, "https://www.uni-assist.de/en/", ("بوابة uni-assist", "uni-assist portal"))
add("econ", "Master of Science in Quantitative Finance", "Kiel University", "Kiel", 4287, MSC, S4, FREE, KIEL_ADM, KIEL_DL, KIEL_EN,
    (KIEL_REQ + " (20 منها في الطرق الكمية)", KIEL_REQ_EN + " (20 of them in quantitative methods)"),
    UNIASSIST, KIEL_LIV, KIEL_HOUSE, "https://www.uni-assist.de/en/", ("بوابة uni-assist", "uni-assist portal"))
add("econ", "Master of Science in Economics", "Kiel University", "Kiel", 4275, MSC, S4, FREE, KIEL_ADM, KIEL_DL, KIEL_EN,
    (KIEL_REQ + " (15 منها في الطرق الكمية)", KIEL_REQ_EN + " (15 of them in quantitative methods)"),
    UNIASSIST, KIEL_LIV, KIEL_HOUSE, "https://www.uni-assist.de/en/", ("بوابة uni-assist", "uni-assist portal"))

add("econ", "Master in Quantitative Economics", "Ludwig-Maximilians-Universität München (LMU)", "Munich", 4791, MSC, S4, FREE,
    ("140 يورو", "€140"),
    ("الشتوي فقط: 15 فبراير - 15 مارس", "Winter only: 15 February - 15 March"),
    ("C1 (مثلاً IELTS Academic 7)", "C1 (e.g. IELTS Academic 7)"),
    ("بكالوريوس اقتصاد بتقدير جيد على الأقل، وGRE Quantitative في 75th percentile أو اختبار كتابي في الجامعة، ومقابلة للمرشحين. برنامج تنافسي جداً", "Bachelor's in economics with at least a 'good' grade, GRE Quantitative at the 75th percentile or a written test at LMU, and an interview for shortlisted applicants. Highly competitive"),
    ("بوابة جامعة LMU", "LMU application portal"),
    ("800 - 1,000 يورو", "€800 - 1,000"),
    ("غرفة في سكن مشترك وسط ميونخ حوالي 400 - 600 يورو", "A room in a shared flat in central Munich about €400 - 600"),
    "https://www.efv.verwaltung.uni-muenchen.de/", ("بوابة التقديم في الجامعة", "University application portal"))

# ---------------- Engineering ----------------
add("eng", "MSc Autonomy Technologies", "FAU Erlangen-Nürnberg", "Erlangen", 8925, MSC, S4,
    ("تختلف حسب الحالة (للتحقق): الصفحة لا تذكر مبلغاً وتحيل لمعلومات الرسوم في FAU", "Varies (to be checked): the page gives no amount and refers to FAU's fee information"),
    ("82 يورو، ورسوم معالجة 100 يورو لكل طلب من غير الأوروبيين بدءاً من الشتوي 2026/27", "€82; from winter 2026/27, a €100 processing fee per application for non-EU applicants"),
    ("الشتوي: 15 فبراير - 15 يوليو / الصيفي: 15 سبتمبر - 15 يناير", "Winter: 15 February - 15 July / Summer: 15 September - 15 January"),
    ("B2 (IELTS Academic 6 أو TOEFL iBT 80)", "B2 (IELTS Academic 6 or TOEFL iBT 80)"),
    ("أساس في رياضيات الهندسة ونظرية التحكم والحساسات والميكاترونكس والهندسة الكهربائية والبرمجة (C أو C++ أو Python أو Matlab) والخوارزميات", "Background in engineering mathematics, control theory, sensors, mechatronics, electrical engineering, programming (C, C++, Python or Matlab) and algorithms"),
    ("بوابة جامعة FAU campo.fau.eu", "FAU portal campo.fau.eu"),
    ("حوالي 1,106 يورو (متوسط مسح طلابي 2021)", "About €1,106 (2021 student survey average)"),
    ("سكن Studierendenwerk في إرلانغن ونورنبرغ، ويمكن طلب غرفة مع التقديم للجامعة", "Studierendenwerk halls in Erlangen and Nuremberg; you can apply for a room while applying to FAU"),
    "https://www.campo.fau.eu", ("بوابة التقديم في الجامعة", "University application portal"))

add("eng", "Master of Science in Embedded Systems Engineering", "University of Freiburg", "Freiburg", 4360, MSC, S4,
    ("1,500 يورو للفصل", "€1,500 per semester"),
    ("190 يورو", "€190"),
    ("الشتوي: 1 مارس - 15 مايو / الصيفي: 1 نوفمبر - 15 ديسمبر", "Winter: 1 March - 15 May / Summer: 1 November - 15 December"),
    ("C1 (IELTS Academic 7 أو TOEFL iBT 95)", "C1 (IELTS Academic 7 or TOEFL iBT 95)"),
    ("بكالوريوس في الأنظمة المدمجة أو تقنية المعلومات أو هندسة الحاسب أو الكهرباء أو الإلكترونيات أو الميكاترونكس بتقدير متميز", "Bachelor's in embedded systems, IT, computer or electrical engineering, electronics or mechatronics with an outstanding grade"),
    ("بوابة الجامعة campus.uni-freiburg.de", "University portal campus.uni-freiburg.de"),
    ("850 - 1,000 يورو", "€850 - 1,000"),
    ("نعم: سكن Studierendenwerk فرايبورغ 250 - 550 يورو، والتقديم عبر المكتب الدولي بعد التسجيل", "Yes: Studierendenwerk Freiburg halls €250 - 550, applied for through the International Office after enrolment"),
    "https://campus.uni-freiburg.de", ("بوابة التقديم في الجامعة", "University application portal"))

add("eng", "Renewable Energy Management (MSc)", "TH Köln - University of Applied Sciences", "Cologne", 4520, MSC, S4, FREE,
    ("حوالي 353 يورو", "About €353"),
    ("الشتوي فقط: الموعد غير منشور في صفحة DAAD ويُراجع على موقع البرنامج (للتحقق)", "Winter only: the date is not on the DAAD page; see the programme website (to be checked)"),
    ("B2 (IELTS Academic 6 أو TOEFL iBT 79)", "B2 (IELTS Academic 6 or TOEFL iBT 79)"),
    ("الشروط على موقع البرنامج. البرنامج يركز على الطاقة المتجددة في المناطق الاستوائية وشبه الاستوائية", "Requirements on the programme website. Focus on renewable energy for tropical and subtropical regions"),
    ("حسب صفحة التقديم للبرنامج", "As on the programme's application page"),
    ("1,000 - 1,200 يورو", "€1,000 - 1,200"),
    ("سوق السكن في كولونيا صعب، والسكن الطلابي من Kölner Studierendenwerk والتقديم عليه مباشرة", "Cologne's housing market is tight; student halls are from Kölner Studierendenwerk, applied for directly"),
    "https://www.th-koeln.de/en/academics/renewable-energy-management-masters-program---how-to-apply_9501.php", ("صفحة التقديم للبرنامج", "Programme application page"))

add("eng", "Renewable Energy and Electrical Power Engineering (Double Degree)", "Leibniz University Hannover", "Hannover", 7865, MSC, S4, FREE,
    ("حوالي 440 يورو", "About €440"),
    ("الشتوي فقط: 1 ديسمبر - 15 يناير", "Winter only: 1 December - 15 January"),
    ("C1 (IELTS Academic 7 أو TOEFL iBT 95)", "C1 (IELTS Academic 7 or TOEFL iBT 95)"),
    ("بكالوريوس 3 سنوات على الأقل في الهندسة الكهربائية أو الميكانيكية أو تقنية الطاقة بتقدير جيد أو ممتاز، وخطاب دافع. شهادة مزدوجة مع جامعة LUT في فنلندا", "Bachelor's of at least 3 years in electrical or mechanical engineering or energy technology with good or excellent grades, and a motivation letter. Double degree with LUT University (Finland)"),
    ("حسب صفحة التقديم في الجامعة", "As on the university's application page"),
    ("965 - 1,106 يورو", "€965 - 1,106"),
    ("معلومات السكن عبر Studentenwerk Hannover", "Housing information through Studentenwerk Hannover"),
    "https://www.uni-hannover.de/en/studium/vor-dem-studium/bewerbung-zulassung/studienplatzbewerbung", ("صفحة التقديم في الجامعة", "University application page"))

add("eng", "Sustainable Renewable Energy Technologies (SuRE)", "University of Oldenburg", "Oldenburg", 3773, MSC, S4,
    ("1,500 يورو للفصل", "€1,500 per semester"),
    ("حوالي 435 يورو", "About €435"),
    ("الشتوي فقط: 15 أغسطس - 15 أكتوبر (للدفعة التالية)", "Winter only: 15 August - 15 October (for the following intake)"),
    ("B2 (مثلاً IELTS Academic 6)", "B2 (e.g. IELTS Academic 6)"),
    ("بكالوريوس علوم طبيعية أو هندسة بتقدير upper second-class honours على الأقل (معادلة التقدير المصري للتحقق مع الجامعة)", "A natural science or engineering degree with at least upper second-class honours (check how your grade compares with the university)"),
    UNIASSIST,
    ("حوالي 1,000 يورو", "About €1,000"),
    ("سكن بأسعار 250 - 400 يورو قريب من الحرم بالعجلة", "Housing at €250 - 400 within cycling distance of campus"),
    "https://www.uni-assist.de/en/", ("بوابة uni-assist", "uni-assist portal"))

add("eng", "MSc Renewable Energy and Energy Efficiency (REMENA)", "University of Kassel", "Kassel", 4412, MSC, S4,
    ("2,500 يورو للفصل", "€2,500 per semester"),
    ("حوالي 396 يورو (الصيفي 2026)", "About €396 (summer 2026)"),
    ("الشتوي: حتى 15 يوليو (البداية في سبتمبر في المنستير بتونس أو حيدر أباد بالهند) / الصيفي: حتى 15 يناير (البداية في مارس في كاسل)", "Winter: until 15 July (starts in September in Monastir, Tunisia or Hyderabad, India) / Summer: until 15 January (starts in March in Kassel)"),
    ("B2 (مثلاً IELTS Academic 5.5)", "B2 (e.g. IELTS Academic 5.5)"),
    ("بكالوريوس في الهندسة أو العلوم الطبيعية أو الاقتصاد أو العلوم الاجتماعية، وسنة خبرة عملية في المجال، وخطاب دافع وخطابا توصية. شهادة مزدوجة مع جامعة المنستير في تونس وجامعة JNTU في الهند، مع إمكانية فصل تبادل في الجامعة الألمانية بالقاهرة أو جامعة صفاقس",
     "Bachelor's in engineering, natural sciences, economics or social sciences, one year of related work experience, a motivation letter and two references. Double degree with the University of Monastir (Tunisia) and JNTU (India), with a possible exchange semester at the German University in Cairo or the University of Sfax"),
    UNIASSIST,
    ("950 - 1,100 يورو", "€950 - 1,100"),
    ("حوالي 1,000 غرفة في السكن الطلابي بإيجار 260 - 545 يورو (Studierendenwerk Kassel)", "About 1,000 rooms in student halls at €260 - 545 (Studierendenwerk Kassel)"),
    "https://www.uni-assist.de/en/how-to-apply/apply-online/", ("بوابة uni-assist", "uni-assist portal"))

add("eng", "Renewable Energy and E-Mobility (REEM)", "Stralsund University of Applied Sciences (HOST)", "Stralsund", 6455, MENG,
    ("3 فصول دراسية (أو 4 مع فصل تدريب عملي)", "3 semesters (or 4 with an internship semester)"), FREE,
    ("131 يورو للفصل الأول ثم 107 يورو", "€131 for the first semester, then €107"),
    ("الشتوي: حتى 31 مايو / الصيفي: حتى 30 نوفمبر", "Winter: until 31 May / Summer: until 30 November"),
    ("B2 (درجة IELTS غير منشورة في المصدر؛ تُقبل Cambridge B2 First)", "B2 (IELTS score not published in the source; Cambridge B2 First accepted)"),
    ("شهادة في الهندسة الكهربائية أو تقنية الطاقة أو الطاقة المتجددة أو الميكانيكا أو الفيزياء، مع مواد القياس والتحكم والآلات الكهربائية. معدل 1.8 ألماني أو أفضل (1.9 - 2.3 يُراجع فردياً، و2.4 أو أقل يُرفض)",
     "Degree in electrical engineering, energy technology, renewable energy, mechanical engineering or physics, with measurement, control and electrical machines. German average of 1.8 or better (1.9 - 2.3 reviewed individually, 2.4 or lower rejected)"),
    UNIASSIST,
    ("600 - 750 يورو فعلياً (وإثبات مالي 992 يورو شهرياً)", "€600 - 750 in practice (€992 a month to prove)"),
    ("سكن داخل الحرم (Holzhausen) وشقق مشتركة، والمكتب الدولي يساعد", "On-campus housing (Holzhausen) and shared flats; the International Office helps"),
    UA, ("بوابة uni-assist", "uni-assist portal"))

add("eng", "Renewable Energy Systems (RES)", "Technische Hochschule Ingolstadt", "Ingolstadt", 4685, MSC, S3,
    ("1,200 يورو للفصل", "€1,200 per semester"),
    ("82 يورو", "€82"),
    ("الشتوي فقط: 1 أبريل 2027 - 15 يوليو 2027", "Winter only: 1 April 2027 - 15 July 2027"),
    ("B2 (IELTS Academic 5.5 أو TOEFL iBT 72)", "B2 (IELTS Academic 5.5 or TOEFL iBT 72)"),
    ("بكالوريوس 210 ساعة معتمدة في هندسة الطاقة أو الميكانيكا أو الصناعية أو الكهرباء أو المدنية، مع خبرة في مجال الطاقة. أصحاب 180 ساعة قد تُحسب لهم 30 ساعة مقابل خبرة عملية. يُنصح بتعلم الألمانية للتدريب العملي",
     "Bachelor's of 210 ECTS in energy, mechanical, industrial, electrical or civil engineering with energy-related experience. With 180 ECTS, qualified work experience may count for 30 ECTS. Learning German is advised for internships"),
    ("uni-assist أولاً للحصول على التقييم المبدئي VPD، ثم التقديم به على بوابة PRIMUSS في الجامعة", "uni-assist first for the preliminary review (VPD), then apply with it on the university's PRIMUSS portal"),
    ("حوالي 950 - 1,200 يورو (مجموع البنود المنشورة: سكن 500 - 650، أكل 200 - 300، تأمين صحي 150 وغيرها)", "About €950 - 1,200 (sum of the published items: housing €500 - 650, food €200 - 300, health insurance €150 and others)"),
    ("لا: لا يوجد سكن طلابي تابع للجامعة، وابدأ البحث مبكراً بميزانية 500 يورو على الأقل", "No: the university has no halls; start early with a budget of at least €500"),
    "https://thi.de/en/studies/application/masterapplication-from-abroad", ("صفحة التقديم من الخارج في الجامعة", "University page for applying from abroad"))

add("eng", "Advanced Manufacturing - Mechanical Engineering and Production", "Chemnitz University of Technology", "Chemnitz", 7612, MSC, S4, FREE,
    ("حوالي 340.50 يورو", "About €340.50"),
    ("الشتوي فقط: حتى 15 يوليو", "Winter only: until 15 July"),
    ("B2 (IELTS Academic 5.5 أو TOEFL iBT 72)، وألماني A1", "B2 (IELTS Academic 5.5 or TOEFL iBT 72), and German A1"),
    ("القبول حسب المهارات: حد أدنى من الساعات في رياضيات الهندسة (18) ومعالجة البيانات (12) والقياس والتحكم (8) والمواد الجديدة (8) وأساسيات الهندسة (12) والتصنيع (8)",
     "Admission by skills: minimum credits in engineering mathematics (18), data processing (12), metrology and control (8), new materials (8), engineering fundamentals (12) and manufacturing (8)"),
    ("بوابة eduapplication.de", "eduapplication.de portal"),
    ("حوالي 970 يورو", "About €970"),
    ("غرف فردية في سكن Studentenwerk Chemnitz-Zwickau بسعر 270 - 350 يورو", "Single rooms in Studentenwerk Chemnitz-Zwickau halls at €270 - 350"),
    "https://www.eduapplication.de/", ("بوابة التقديم", "Application portal"))

add("eng", "Automation, Robotics and Control", "Chemnitz University of Technology", "Chemnitz", 11170, MSC, S4, FREE,
    ("حوالي 340.50 يورو", "About €340.50"),
    ("الشتوي فقط: حتى 15 يوليو", "Winter only: until 15 July"),
    ("B2 (IELTS Academic 5.5 أو TOEFL iBT 72)، وألماني A1 بشهادة", "B2 (IELTS Academic 5.5 or TOEFL iBT 72), and German A1 with a certificate"),
    ("بكالوريوس هندسة كهربائية وتقنية معلومات أو هندسة رقمية أو ما يعادله، والمعادلة تُقرر فردياً", "Bachelor's in electrical engineering and IT or digital engineering, or equivalent; equivalence is decided individually"),
    UNIASSIST,
    ("حوالي 970 يورو", "About €970"),
    ("غرف فردية في سكن Studentenwerk Chemnitz-Zwickau بسعر 270 - 350 يورو", "Single rooms in Studentenwerk Chemnitz-Zwickau halls at €270 - 350"),
    "https://www.uni-assist.de", ("بوابة uni-assist", "uni-assist portal"))

# ---------------- Public health ----------------
add("ph", "Master of Science in International Health", "Ludwig-Maximilians-Universität München (LMU)", "Munich", 5590, MSC, S2,
    ("6,000 يورو للفصل", "€6,000 per semester"),
    ("حوالي 97 يورو", "About €97"),
    ("الشتوي فقط: 1 ديسمبر - 31 يناير", "Winter only: 1 December - 31 January"),
    ("B2 (IELTS Academic 6)", "B2 (IELTS Academic 6)"),
    ("شهادة 240 ساعة معتمدة في مجال صحي (180 ساعة ممكنة بشروط إضافية)، وخبرة عمل سنتين دوام كامل في القطاع الصحي (التدريب لا يُحسب عادةً)",
     "A 240 ECTS degree in a health-related science (180 ECTS possible with extra conditions) and two years of full-time work in the health sector (internships usually do not count)"),
    ("حسب صفحة البرنامج في مركز الصحة الدولية CIH بجامعة LMU", "As on the programme page at LMU's Center for International Health (CIH)"),
    ("1,000 - 1,500 يورو", "€1,000 - 1,500"),
    ("سكن مشترك وسط ميونخ 600 - 800 يورو في السوق الخاص", "Shared flats in central Munich €600 - 800 on the private market"),
    "https://www.lmu-klinikum.de/cih-lmu/education/study-programs/master-programs/msc-international-health/d020023bf027aeb6", ("صفحة البرنامج", "Programme page"))

# ---------------- Architecture / urban design ----------------
add("arch", "Integrated Urbanism and Sustainable Design (IUSD)", "University of Stuttgart", "Stuttgart", 4499, MSC, S4,
    ("تختلف (للتحقق): الصفحة لا تذكر مبلغاً، وولاية بادن-فورتمبيرغ تفرض رسوماً على الطلاب الدوليين", "Varies (to be checked): the page gives no amount, and Baden-Württemberg charges fees to international students"),
    ("حوالي 200 يورو", "About €200"),
    ("آخر موعد: 29 يوليو لمسار الشهادة المزدوجة مع عين شمس، و15 أكتوبر لشهادة شتوتغارت فقط (في السنة السابقة للبدء، والتقديم يفتح في يونيو)", "Deadline: 29 July for the dual degree with Ain Shams, 15 October for the Stuttgart degree only (in the year before the start; applications open in June)"),
    ("B2 (مثلاً IELTS Academic 6)", "B2 (e.g. IELTS Academic 6)"),
    ("بكالوريوس عمارة أو تخطيط عمراني أو عمارة بيئة أو تخطيط إقليمي أو هندسة مدنية؛ والمجالات القريبة مع خبرة عملية. شهادة مزدوجة مع جامعة عين شمس في القاهرة",
     "Bachelor's in architecture, urban planning, landscape architecture, regional planning or civil engineering; related fields with professional experience. Dual degree with Ain Shams University, Cairo"),
    ("بوابة جامعة شتوتغارت C@MPUS", "University of Stuttgart C@MPUS portal"),
    ("حوالي 1,050 يورو", "About €1,050"),
    ("سكن طلابي مفروش 320 - 650 يورو في حرم فايهنغن ووسط المدينة", "Furnished halls €320 - 650 at the Vaihingen and city-centre campuses"),
    "https://campus.uni-stuttgart.de", ("بوابة التقديم في الجامعة", "University application portal"))

add("arch", "Integrated Urban Development and Design (IUDD)", "Bauhaus-Universität Weimar", "Weimar", 3654, MSC, S4, FREE,
    ("حوالي 340 يورو (شامل Deutschlandticket)", "About €340 (includes the Deutschlandticket)"),
    ("الشتوي فقط: حتى 15 مايو", "Winter only: until 15 May"),
    ("B2 (IELTS Academic 6)", "B2 (IELTS Academic 6)"),
    ("الشروط التفصيلية على صفحة التقديم في الجامعة", "Full requirements on the university's application page"),
    ("غير الأوروبيين عبر uni-assist", "Non-EU applicants through uni-assist"),
    ("حوالي 1,000 يورو", "About €1,000"),
    ("أكثر من 1,000 شقة طلابية من Studierendenwerk Thüringen بحوالي 250 - 350 يورو، والجامعة لا توفّر سكناً بنفسها", "Over 1,000 student flats from Studierendenwerk Thüringen at about €250 - 350; the university itself does not provide housing"),
    "https://www.uni-assist.de/en/", ("بوابة uni-assist", "uni-assist portal"))


# ---------------- Writing (append-only) ----------------
def main():
    country = "ألمانيا"
    tr = {}

    def t(v):
        tr[v[0]] = v[1]
        return v[0]

    mine = {(r["name"], r["uni"]) for r in ROWS}
    data = os.path.join(ROOT, "data")

    def row(r, rid):
        return [rid, country, FIELDAR[r["field"]], r["name"], r["uni"], r["city"], t(r["deg"]), t(r["dur"]), t(r["fee"]),
                t(r["adm"]), t(r["dl"]), t(r["en"]), t(r["other"]), t(r["how"]), t(r["living"]), t(r["house"]), r["src"],
                REVIEWED, t(STATUS)]

    # 1) data/programmes/germany.csv (country mirror): keep the hand-written rows, refresh ours at the end.
    gp = os.path.join(data, "programmes", "germany.csv")
    g = list(csv.reader(open(gp, encoding="utf-8-sig")))
    hdr, keep = g[0], [r for r in g[1:] if r and (r[3], r[4]) not in mine]
    nxt = max(int(r[0]) for r in keep) + 1
    out = keep + [row(r, str(nxt + i)) for i, r in enumerate(ROWS)]
    with open(gp, "w", newline="", encoding="utf-8-sig") as f:
        csv.writer(f).writerows([hdr] + out)

    # 2) all_programmes.csv: our earlier rows keep their ids, new ones get the next free id.
    ap = os.path.join(data, "programmes", "all_programmes.csv")
    a = list(csv.reader(open(ap, encoding="utf-8-sig")))
    ahdr, body = a[0], a[1:]
    old = {(r[3], r[4]): r[0] for r in body if r and r[1] == country and (r[3], r[4]) in mine}
    body = [r for r in body if r and not (r[1] == country and (r[3], r[4]) in mine)]
    nid = max(int(r[0]) for r in body + [[i] for i in old.values()]) + 1
    for r in ROWS:
        k = (r["name"], r["uni"])
        if k in old:
            rid = old[k]
        else:
            rid, nid = str(nid), nid + 1
        body.append(row(r, rid))
    body.sort(key=lambda r: int(r[0]))
    with open(ap, "w", newline="", encoding="utf-8-sig") as f:
        csv.writer(f).writerows([ahdr] + body)

    # 3) translations
    tp = os.path.join(data, "translations_en.json")
    allt = json.load(open(tp, encoding="utf-8"))
    allt.update(tr)
    json.dump(allt, open(tp, "w", encoding="utf-8"), ensure_ascii=False, indent=1)

    # 4) official links: only our rows are replaced
    lp = os.path.join(data, "programme_links.csv")
    links = list(csv.reader(open(lp, encoding="utf-8")))
    lh, lb = links[0], [l for l in links[1:] if l and not (l[0] == country and l[-1] == "master" and (l[1], l[2]) in mine)]
    for r in ROWS:
        an = r["apply_note"]
        lb.append([country, r["name"], r["uni"], r["src"], REQ_NOTE[0], REQ_NOTE[1], r["apply"], an[0], an[1], "master"])
    with open(lp, "w", newline="", encoding="utf-8") as f:
        csv.writer(f).writerows([lh] + lb)

    from collections import Counter
    print("Germany batch 2:", len(ROWS), dict(Counter(r["field"] for r in ROWS)), "| germany.csv rows:", len(out), "| all_programmes:", len(body))


if __name__ == "__main__":
    main()
