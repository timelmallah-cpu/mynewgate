# Seven new fields (19 Nov 2026): natural sciences (sci), languages and humanities (hum), art and design (art),
# sport science (sport), food science (food), social work (sw), urban planning (urb).
# Append-only: master's through helpers.append_extra, bachelor's through helpers.append_ba. Re-run after any of the
# countries' own scripts (germany*, hungary*, sweden*). Sources: DAAD International Programmes pages (Germany) and the
# universities' own pages, checked 2026-11-19. DAAD pages give yearly windows without a year: they stay without one
# (shown as estimates) unless the page names the year.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, NP
from helpers import add, append_extra, append_ba

REVIEWED = "2026-11-19"
NOTE_R = ("الصفحة الرسمية: الشروط والرسوم", "Official page: requirements and fees")
NOTE_A = ("صفحة التقديم الرسمية", "Official application page")
MSC = ("ماجستير العلوم (MSc)", "Master of Science (MSc)")
MAA = ("ماجستير الآداب (MA)", "Master of Arts (MA)")
BSC = ("بكالوريوس العلوم (BSc)", "Bachelor of Science (BSc)")
BAA = ("بكالوريوس الآداب (BA)", "Bachelor of Arts (BA)")
S4 = ("سنتان (4 فصول، 120 ساعة معتمدة)", "2 years (4 semesters, 120 credits)")
S3 = ("سنة ونصف (3 فصول)", "18 months (3 semesters)")
S2 = ("سنة واحدة (فصلان)", "1 year (2 semesters)")
B6 = ("3 سنوات (6 فصول، 180 ساعة معتمدة)", "3 years (6 semesters, 180 credits)")
FREE = lambda c: (f"لا توجد رسوم دراسية؛ مساهمة فصلية حوالي {c} يورو", f"No tuition fee; semester contribution about €{c}")
BW = lambda c: (f"1,500 يورو للفصل لغير الأوروبيين (ولاية بادن فورتمبيرغ)، زائد مساهمة فصلية حوالي {c} يورو",
                f"€1,500 per semester for non-EU students (Baden-Württemberg), plus a semester contribution of about €{c}")
HU = lambda f: (f"{f} يورو للفصل لغير الأوروبيين", f"€{f} per semester for non-EU students")
DAAD = "https://www2.daad.de/deutschland/studienangebote/international-programmes/en/detail/"
UA = ("التقديم عبر uni-assist", "Apply through uni-assist")

MA = {}
BA = {}


def ma(cc, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply=None):
    add(MA.setdefault(cc, []), field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, NP, NP, src, apply or src)


def ba(cc, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply=None):
    BA.setdefault(cc, []).append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en,
                                   other=other, how=how, living=NP, house=NP, src=src, req=src, req_note=NOTE_R,
                                   apply=apply or src, apply_note=NOTE_A))


# ======================= NATURAL SCIENCES (master's, Germany) =======================
ma("de", "sci", "Master of Science in Biology", "Freie Universität Berlin", "Berlin", MSC, S4, FREE("359"),
   ("بكالوريوس في الأحياء أو مجال قريب", "Bachelor's in biology or a related field"),
   ("للفصل الشتوي: 15 أبريل - 31 مايو", "Winter semester: 15 April - 31 May"),
   ("البرنامج كله بالإنجليزية؛ مستوى اللغة في صفحة البرنامج", "Fully in English; level on the programme page"),
   ("الأحياء: مسارات بحثية في علوم الحياة", "Biology: research tracks in the life sciences"),
   ("التقديم أونلاين على بوابة جامعة برلين الحرة", "Apply online on FU Berlin's portal"), DAAD + "5298/")
ma("de", "sci", "Master of Science in Biochemistry", "Friedrich Schiller University Jena", "Jena", MSC, S4, FREE("320"),
   ("بكالوريوس في الكيمياء الحيوية أو البيولوجيا الجزيئية أو ما يعادلهما؛ الاختيار بالمعدل وخطاب الدافع والخبرة العملية",
    "Bachelor's in biochemistry, molecular biology or equivalent; selection by GPA, motivation letter and practical experience"),
   ("للفصل الشتوي فقط: 1 أبريل - 31 مايو", "Winter semester only: 1 April - 31 May"),
   ("مستوى B2 (بدون شهادة إلزامية حسب صفحة DAAD)", "B2 level (no certificate required per the DAAD page)"),
   ("الكيمياء الحيوية", "Biochemistry"), ("التقديم على صفحة جامعة ينا", "Apply on the University of Jena's page"), DAAD + "4340/")
ma("de", "sci", "Biochemistry and Molecular Biology (BMB)", "University of Bremen", "Bremen", MSC, S4, ("لا توجد رسوم دراسية؛ رسوم الفصل مع تذكرة المواصلات حوالي 425 يورو (الصفحة لا تذكر السنة الدراسية)", "No tuition fee; semester fee including the semester ticket about €425 (the page does not name the academic year)"),
   ("بكالوريوس في الكيمياء الحيوية أو الأحياء أو الكيمياء أو مجال قريب", "Bachelor's in biochemistry, biology, chemistry or a related field"),
   ("15 يناير 2027 للفصل الشتوي 2027/2028 (التقديم يفتح في ديسمبر)", "15 January 2027 for winter semester 2027/2028 (applications open in December)"),
   ("مستوى C1 بشهادة TOEFL أو ما يعادلها", "C1 level shown by TOEFL or equivalent"),
   ("الكيمياء الحيوية والبيولوجيا الجزيئية", "Biochemistry and molecular biology"),
   ("التقديم على صفحة البرنامج بجامعة بريمن", "Apply on the programme page at the University of Bremen"), "https://www.uni-bremen.de/en/studies/orientation-application/offered-study-program/dbs/study/biochemistry-and-molecular-biology-master",
   "https://www.uni-bremen.de/en/mscbmb/application-and-admission-1")
ma("de", "sci", "Physics", "University of Siegen", "Siegen", MSC, S4, FREE("372"),
   ("بكالوريوس في الفيزياء أو على وشك إنهائه", "Bachelor's in physics, or about to complete one"),
   ("لغير الأوروبيين: الفصل الشتوي 1 يناير - 30 أبريل، والصيفي 1 يوليو - 31 أكتوبر", "Non-EU: winter semester 1 January - 30 April; summer semester 1 July - 31 October"),
   ("B2: IELTS 6 أو PTE 61 أو TOEFL iBT 88", "B2: IELTS 6, PTE 61 or TOEFL iBT 88"),
   ("الفيزياء", "Physics"), ("التقديم على صفحة البرنامج بجامعة زيغن", "Apply via the University of Siegen's programme page"), DAAD + "11150/",
   "https://www.uni-siegen.de/en/studentsstudyprogram/m-sc-physics")
ma("de", "sci", "PHYSICS International Master of Science", "University of Stuttgart", "Stuttgart", MSC, S4,
   ("1,500 يورو للفصل لغير الأوروبيين، زائد مساهمة فصلية حوالي 200 يورو", "€1,500 per semester for non-EU students, plus a semester contribution of about €200"),
   ("بكالوريوس فيزياء بتقدير فوق المتوسط؛ بالتعاون مع معهد ماكس بلانك لأبحاث الحالة الصلبة",
    "Above-average bachelor's in physics; in cooperation with the Max Planck Institute for Solid State Research"),
   ("لغير الأوروبيين: الفصل الشتوي فقط، 15 نوفمبر - 15 فبراير", "Non-EU: winter semester only, 15 November - 15 February"),
   ("B2: TOEFL iBT 80 أو IELTS 6.5 أو C1 Advanced", "B2: TOEFL iBT 80, IELTS 6.5 or C1 Advanced"),
   ("الفيزياء الدولية", "International physics"), ("التقديم على بوابة C@MPUS بجامعة شتوتغارت", "Apply on the University of Stuttgart's C@MPUS portal"), DAAD + "5213/")
ma("de", "sci", "Physics (MSc)", "Dresden University of Technology (TU Dresden)", "Dresden", MSC, S4, FREE("340"),
   ("بكالوريوس في الفيزياء أو مجال قريب مع تقييم للأهلية", "Bachelor's in physics or a closely related field, plus an aptitude assessment"),
   ("لغير الأوروبيين: الفصل الشتوي 1 أبريل - 15 يوليو، والصيفي 1 أكتوبر - 15 يناير (من صفحة DAAD سابقة، للتحقق)",
    "Non-EU: winter semester 1 April - 15 July; summer semester 1 October - 15 January (from an earlier DAAD page, to verify)"),
   ("B2: TOEFL iBT 72 أو IELTS 5.5", "B2: TOEFL iBT 72 or IELTS 5.5"),
   ("الفيزياء، ويمكن دراسته كله بالإنجليزية", "Physics, can be studied entirely in English"), UA, DAAD + "8318")
ma("de", "sci", "Master's in Mathematics", "Leipzig University", "Leipzig", MSC, S4, FREE("280"),
   ("بكالوريوس رياضيات، أو مجال قريب فيه 100 ساعة معتمدة رياضيات على الأقل", "Bachelor's in mathematics, or a related degree with at least 100 credits of mathematics"),
   ("لغير الأوروبيين: حتى 31 مايو للفصل الشتوي، وحتى 31 ديسمبر للصيفي", "Non-EU: by 31 May for the winter semester, by 31 December for the summer semester"),
   ("B2: IELTS 5.5", "B2: IELTS 5.5"), ("الرياضيات", "Mathematics"), UA, DAAD + "10343/")
ma("de", "sci", "Mathematics (MSc)", "University of Göttingen", "Göttingen", MSC, S4, FREE("460"),
   ("بكالوريوس في الرياضيات", "Bachelor's in mathematics"),
   ("الفصل الشتوي: حتى 15 أبريل، والصيفي: حتى 15 أكتوبر", "Winter semester: by 15 April; summer semester: by 15 October"),
   ("C1: IELTS 7", "C1: IELTS 7"), ("الرياضيات", "Mathematics"),
   ("التقديم على صفحة القبول بجامعة غوتنغن", "Apply via the University of Göttingen's admissions page"), DAAD + "3669/")
ma("de", "sci", "Master of Science in Chemistry", "Ulm University", "Ulm", MSC, S4, BW("182"),
   ("بكالوريوس في الكيمياء؛ الشروط في صفحة الجامعة", "Bachelor's in chemistry; requirements on the university's page"),
   ("الفصل الشتوي: 1 أبريل - 15 مايو، والصيفي: 15 أكتوبر - 15 نوفمبر", "Winter semester: 1 April - 15 May; summer semester: 15 October - 15 November"),
   ("B2: TOEFL iBT 72 أو IELTS 5.5", "B2: TOEFL iBT 72 or IELTS 5.5"),
   ("الكيمياء بفروعها", "Chemistry and its sub-fields"), ("التقديم على صفحة البرنامج بجامعة أولم", "Apply via Ulm University's programme page"), DAAD + "6938/",
   "https://www.uni-ulm.de/en/study/application-and-enrolment/masters-programmes/chemistry-master/")

# ======================= NATURAL SCIENCES (Hungary) =======================
SZ_FEES = "https://u-szeged.hu/english/tuition-fees/tuitionfees"
SZ_HOW = ("التقديم أونلاين على منصة DreamApply بجامعة سيجد", "Apply online on the University of Szeged's DreamApply platform")
ma("hu", "sci", "Biology MSc", "University of Szeged", "Szeged", MSC, S4, HU("3,000"),
   ("بكالوريوس في مجال قريب؛ رسوم طلب 79 يورو", "Bachelor's in a related field; €79 application fee"),
   ("موعد 2027 غير منشور بعد؛ في 2026 كان التقديم 1 يناير - 15 مايو", "2027 dates not published yet; in 2026 applications ran 1 January - 15 May"),
   NP, ("الأحياء: البيولوجيا الجزيئية والمناعة والأحياء الدقيقة", "Biology: molecular, immuno- and microbiology"), SZ_HOW,
   "https://sci.u-szeged.hu/english/graduate-programs/biology-msc", SZ_FEES)
for field, name, fee, other in [
    ("sci", "Chemistry MSc", "3,600", ("الكيمياء", "Chemistry")),
    ("sci", "Mathematics MSc", "2,700", ("الرياضيات", "Mathematics")),
    ("hum", "English Studies MA", "2,200", ("الدراسات الإنجليزية: الأدب واللغويات", "English studies: literature and linguistics")),
    ("hum", "American Studies MA", "2,200", ("الدراسات الأمريكية", "American studies")),
    ("art", "Classical Musical Instrumental Performance MA", "2,500", ("العزف على الآلات الموسيقية الكلاسيكية", "Classical instrumental performance")),
    ("food", "Food Science and Technology Engineering MSc", "3,500", ("هندسة علوم وتكنولوجيا الأغذية", "Food science and technology engineering")),
    ("food", "Food Safety and Quality Engineering MSc", "3,500", ("هندسة سلامة وجودة الأغذية", "Food safety and quality engineering")),
]:
    ma("hu", field, name, "University of Szeged", "Szeged", MSC if "MSc" in name else MAA, S4, HU(fee),
       ("بكالوريوس في مجال قريب؛ الشروط في صفحة البرنامج", "Bachelor's in a related field; requirements on the programme page"),
       ("موعد 2027 غير منشور في صفحة الرسوم؛ التقديم للبرامج الذاتية التمويل يفتح عادة في يناير", "2027 deadline not on the fee page; self-financed applications usually open in January"),
       NP, other, SZ_HOW, SZ_FEES, "https://apply.u-szeged.hu/en_GB/courses/course/399-msc-food-science-and-technology-engineering" if name.startswith("Food Science") else SZ_FEES)

PTE_FEES = "https://international.pte.hu/admission/fees"
PTE_SCI = "https://international.pte.hu/admission/study-programs/sciences"
PTE_HOW = ("التقديم أونلاين على بوابة جامعة بيتش apply.pte.hu", "Apply online on the University of Pécs portal apply.pte.hu")
for name, other in [("MSc in Biology", ("الأحياء", "Biology")), ("MSc in Physics", ("الفيزياء", "Physics")), ("MSc in Chemistry", ("الكيمياء", "Chemistry"))]:
    ma("hu", "sci", name, "University of Pécs", "Pécs", MSC, S4, HU("4,500"),
       ("رسوم طلب 200 يورو؛ بكالوريوس في نفس المجال", "€200 application fee; bachelor's in the same field"),
       ("حتى 20 يونيو 2027", "By 20 June 2027"), NP, other, PTE_HOW, PTE_SCI, PTE_FEES)

# ======================= LANGUAGES AND HUMANITIES (master's) =======================
ma("de", "hum", "Master of Arts in English Linguistics", "Trier University", "Trier", MAA, S4, FREE("380"),
   ("بكالوريوس في الدراسات الإنجليزية أو الأمريكية أو اللغويات، مع 10 ساعات معتمدة على الأقل في اللغويات الإنجليزية",
    "Bachelor's in English, American studies or linguistics, with at least 10 credits in English linguistics"),
   ("لغير الأوروبيين: 15 يناير 2027 للفصل الصيفي 2027، و31 مايو 2027 للفصل الشتوي 2027/2028",
    "Non-EU: 15 January 2027 for summer semester 2027; 31 May 2027 for winter semester 2027/28"),
   ("C1: IELTS 6.5 أو TOEFL iBT 80", "C1: IELTS 6.5 or TOEFL iBT 80"),
   ("اللغويات الإنجليزية مع تركيز على التنوع اللغوي", "English linguistics with a focus on linguistic variation"),
   ("التقديم على بوابة PORTA بجامعة ترير", "Apply on Trier University's PORTA portal"), DAAD + "9720/")
ma("de", "hum", "English: Language, Literatures and Cultures", "University of Göttingen", "Göttingen", MAA, S4, FREE("460"),
   ("بكالوريوس في الدراسات الإنجليزية (180 ساعة معتمدة) منها 50 ساعة معتمدة على الأقل في مواد الإنجليزية",
    "Bachelor's in English studies (180 credits) with at least 50 credits in English modules"),
   ("الفصل الشتوي: 1 أبريل - 1 يونيو، والصيفي: 1 أكتوبر - 1 ديسمبر", "Winter semester: 1 April - 1 June; summer semester: 1 October - 1 December"),
   ("C1: IELTS 7 أو TOEFL iBT 93 أو PTE 76", "C1: IELTS 7, TOEFL iBT 93 or PTE 76"),
   ("الأدب والثقافة الناطقة بالإنجليزية والدراسات الأمريكية واللغويات", "Anglophone literature and culture, North American studies, linguistics"),
   ("التقديم على بوابة الماجستير بكلية الآداب في غوتنغن", "Apply on Göttingen's humanities master's portal"), DAAD + "4334/")
ma("de", "hum", "Master of Arts in Digital and Computational Archaeology", "University of Cologne", "Cologne", MAA, S4, FREE("336"),
   ("بكالوريوس في الآثار (180 ساعة معتمدة)، أو مجال قريب فيه 60 ساعة معتمدة آثار", "Bachelor's in archaeology (180 credits), or a neighbouring field with 60 credits in archaeology"),
   ("الفصل الشتوي فقط: حتى 1 سبتمبر", "Winter semester only: by 1 September"),
   ("C1: IELTS 7", "C1: IELTS 7"), ("الآثار الرقمية والحاسوبية", "Digital and computational archaeology"), UA, DAAD + "8335/")
ma("de", "hum", "Master of Arts in Linguistics", "Heinrich Heine University Düsseldorf", "Düsseldorf", MAA, S4,
   ("لا توجد رسوم دراسية", "No tuition fee"),
   ("بكالوريوس في اللغويات أو مجال قريب", "Bachelor's in linguistics or a related field"),
   ("15 يوليو للفصل الشتوي، و15 يناير للفصل الصيفي", "15 July for the winter semester; 15 January for the summer semester"),
   ("مستوى C1", "C1 level"), ("اللغويات", "Linguistics"),
   ("التقديم أونلاين فقط على digstu.hhu.de", "Apply online only on digstu.hhu.de"),
   "https://www.myguide.de/de/international-programmes-master/detail/heinrich-heine-university-duesseldorf-master-of-arts-in-linguistics-9719/?ip-id=9719")
ma("de", "hum", "Linguistics: Empirical and Theoretical Foundations", "University of Potsdam", "Potsdam", MSC, S4, FREE("292"),
   ("بكالوريوس في اللغويات، أو مجال فيه 90 ساعة معتمدة لغويات على الأقل", "Bachelor's in linguistics, or a degree with at least 90 credits of linguistics"),
   ("الفصل الشتوي: حتى 15 أغسطس", "Winter semester: by 15 August"),
   ("B2: IELTS 6 أو TOEFL iBT 75 أو PTE 59", "B2: IELTS 6, TOEFL iBT 75 or PTE 59"),
   ("اللغويات النظرية والتجريبية", "Theoretical and empirical linguistics"),
   ("التقديم على صفحة الماجستير بجامعة بوتسدام", "Apply via the University of Potsdam's master's page"), DAAD + "7033",
   "https://www.uni-potsdam.de/en/studium/application-enrollment/application-master/consecutive")
ma("de", "hum", "North American Studies (MA)", "Marburg University", "Marburg", MAA, S4, FREE("406"),
   ("شهادة جامعية في برنامج أدبي وثقافي فيها 30 ساعة معتمدة، أو 15 ساعة معتمدة في الدراسات الأمريكية الشمالية",
    "A degree in a literary and cultural programme with 30 credits, or 15 credits focused on North American studies"),
   ("موعد 2027 غير منشور بعد؛ في 2026 كان 21 أغسطس، والتقديم من 1 أبريل لأصحاب الشهادات الأجنبية",
    "2027 deadline not published yet; it was 21 August in 2026, with applications from 1 April for foreign degrees"),
   ("C1: IELTS 7", "C1: IELTS 7"), ("الدراسات الأمريكية الشمالية: الأدب والثقافة", "North American studies: literature and culture"), UA, DAAD + "7768/")
ma("de", "hum", "Master's in Global History", "Freie Universität Berlin", "Berlin", MAA, S4, FREE("359"),
   ("بكالوريوس في التاريخ أو الدراسات الإقليمية فيه 35 ساعة معتمدة تاريخ على الأقل", "Bachelor's in history or area studies with at least 35 credits of history"),
   ("الفصل الشتوي: 20 أبريل - 31 مايو", "Winter semester: 20 April - 31 May"),
   ("C1: IELTS 7 أو TOEFL iBT 95", "C1: IELTS 7 or TOEFL iBT 95"),
   ("التاريخ العالمي بالتعاون مع جامعة هومبولت", "Global history, with Humboldt-Universität zu Berlin"),
   ("التقديم على موقع البرنامج global-history.de", "Apply via the programme website global-history.de"), DAAD + "4422/")
ma("de", "hum", "Archaeology of the Ancient World (MA)", "Freie Universität Berlin", "Berlin", MAA, S4,
   ("لا توجد رسوم دراسية لكل الطلاب أياً كانت جنسيتهم", "No tuition fee for any student, whatever their country"),
   ("بكالوريوس فيه 60 ساعة معتمدة على الأقل في مواد الآثار", "Bachelor's with at least 60 credits in archaeology-related courses"),
   ("غير منشور في صفحة البرنامج (في 2026 كان التقديم حتى 15 أغسطس)", "Not on the programme page (in 2026 applications ran until 15 August)"),
   ("C1", "C1"), ("آثار العالم القديم", "Archaeology of the ancient world"),
   ("الاستفسار والتقديم عبر منسق البرنامج", "Enquiries and application via the programme coordinator"),
   "https://www.geschkult.fu-berlin.de/en/e/ma-archaeology/index.html")
PTE_HUM = "https://international.pte.hu/admission/study-programs/humanities"
ma("hu", "hum", "MA in History", "University of Pécs", "Pécs", MAA, S4, HU("2,500"),
   ("بكالوريوس في التاريخ أو مجال قريب فيه 50 ساعة معتمدة تاريخ؛ رسوم طلب 200 يورو", "Bachelor's in history or a related field with 50 credits of history; €200 application fee"),
   ("موعد 2027 غير منشور في صفحة البرنامج", "2027 deadline not on the programme page"), NP,
   ("التاريخ", "History"), PTE_HOW, "https://btk.pte.hu/en/study-programs/ma-in-history", PTE_FEES)
ma("hu", "hum", "MA in English Studies", "University of Pécs", "Pécs", MAA, S4, HU("2,500"),
   ("بكالوريوس في الدراسات الإنجليزية؛ رسوم طلب 140 يورو حسب صفحة البرنامج", "Bachelor's in English studies; €140 application fee per the programme page"),
   ("موعد 2027 غير منشور في صفحة البرنامج", "2027 deadline not on the programme page"),
   ("مستوى C1", "C1 level"), ("الدراسات الإنجليزية: الأدب والثقافة واللغة", "English studies: literature, culture and language"),
   PTE_HOW, "https://international.pte.hu/study-programs/ma-english-studies", PTE_FEES)

# ======================= ART AND DESIGN (master's) =======================
ma("de", "art", "Master of Arts in Integrated Design (MAID)", "Anhalt University of Applied Sciences", "Dessau-Roßlau", MAA, S4,
   ("800 يورو للفصل لكل الطلاب، زائد مساهمة فصلية حوالي 323 يورو", "€800 per semester for all students, plus a semester contribution of about €323"),
   ("بكالوريوس تصميم أو مجال قريب (180 ساعة معتمدة)، وملف أعمال (بورتفوليو) وخطاب دافع", "Bachelor's in design or a related field (180 credits), a portfolio and a motivation letter"),
   ("الفصل الشتوي: 15 يناير - 30 أبريل، والصيفي: 31 يوليو - 31 أكتوبر", "Winter semester: 15 January - 30 April; summer semester: 31 July - 31 October"),
   ("C1: IELTS 7", "C1: IELTS 7"), ("التصميم المتكامل: تصميم الاتصال والمنتجات والمساحات والوسائط الرقمية", "Integrated design: communication, product, space and digital media"),
   UA, DAAD + "4057/")
ma("de", "art", "Integrated Design Research (Master of Arts)", "Technische Hochschule Köln - University of Applied Sciences", "Cologne", MAA, S4, FREE("353"),
   ("بكالوريوس (180 ساعة معتمدة)، ملف أعمال، خطاب دافع، توصية واحدة على الأقل وسيرة ذاتية", "Bachelor's (180 credits), portfolio, motivation letter, at least one recommendation and a CV"),
   ("uni-assist من منتصف فبراير حتى 31 مارس، ثم بوابة CaMS لمدة أسبوع في آخر أبريل", "uni-assist from mid-February to 31 March, then the CaMS portal for one week at the end of April"),
   ("B2: IELTS 5.5", "B2: IELTS 5.5"), ("بحث التصميم المتكامل في مدرسة كولونيا الدولية للتصميم KISD", "Integrated design research at the Köln International School of Design (KISD)"),
   ("التقديم عبر uni-assist ثم بوابة CaMS بجامعة TH Köln", "Apply via uni-assist, then TH Köln's CaMS portal"), DAAD + "3990/")
ma("de", "art", "Design and Interaction, MA", "Rhine-Waal University of Applied Sciences", "Kamp-Lintfort", MAA, S3, FREE("300"),
   ("اختبار قدرات فنية وإبداعية", "Aptitude test of artistic and creative ability"),
   ("الفصل الشتوي: حتى 15 يوليو، والصيفي: حتى 15 يناير (لاختبار القدرات مواعيد منفصلة)", "Winter semester: by 15 July; summer semester: by 15 January (separate dates for the aptitude test)"),
   ("B2: IELTS 5.5", "B2: IELTS 5.5"), ("التصميم والتفاعل", "Design and interaction"), UA, DAAD + "4489/")
ma("de", "art", "Digital Media", "University of Bremen", "Bremen", ("ماجستير (MA أو MSc)", "Master's (MA or MSc)"), S4, FREE("425"),
   ("ملف أعمال وخطاب دافع وسيرة ذاتية، مع خبرة واضحة في البرمجة وتصميم الوسائط معاً", "Portfolio, motivation letter and CV, with clear experience in both programming and media design"),
   ("الفصل الشتوي: 1 مايو - 15 يوليو", "Winter semester: 1 May - 15 July"),
   ("C1: IELTS 7", "C1: IELTS 7"), ("الوسائط الرقمية بالتعاون مع جامعة الفنون في بريمن (MA للفنون والتصميم، MSc لعلوم الحاسب)",
                                   "Digital media with the University of the Arts Bremen (MA for art and design, MSc for computer science)"),
   ("التقديم على بوابة moin.uni-bremen.de", "Apply on moin.uni-bremen.de"), DAAD + "3844/")
ma("de", "art", "Visual Anthropology, Media and Documentary Practices", "University of Münster", "Münster", MAA,
   ("3 سنوات (6 فصول)، ويمكن الإنهاء في فصلين ونصف", "3 years (6 semesters); can be finished in 5 semesters"),
   ("2,325 يورو للفصل لكل الطلاب، زائد مساهمة فصلية حوالي 355 يورو", "€2,325 per semester for all students, plus a semester contribution of about €355"),
   ("شهادة جامعية (180 ساعة معتمدة) وخبرة عمل سنة على الأقل في إنتاج الوسائط أو العلوم الاجتماعية أو الثقافية",
    "A degree (180 credits) and at least one year of work experience in media production or social or cultural studies"),
   ("الفصل الشتوي: حتى 30 مارس", "Winter semester: by 30 March"),
   ("B2: IELTS 5.5", "B2: IELTS 5.5"), ("الأنثروبولوجيا البصرية والأفلام الوثائقية والتصوير", "Visual anthropology, documentary film and photography"),
   ("التقديم أونلاين على بوابة المدرسة المهنية بجامعة مونستر", "Apply online on the University of Münster professional school portal"), DAAD + "4671/")
ma("hu", "art", "Interaction Design MA", "Moholy-Nagy University of Art and Design (MOME)", "Budapest", MAA, S4, HU("5,000"),
   ("رسوم تسجيل 50 يورو؛ ملف أعمال (10 إلى 50 صفحة) وسيرة ذاتية وخطاب دافع ومقابلة أونلاين", "€50 registration fee; portfolio (10-50 pages), CV, motivation letter and an online interview"),
   ("التقديم 30 أكتوبر 2026 - 30 أبريل 2027، رفع ملف الأعمال 3 - 31 مايو 2027، والمقابلات 28 يونيو - 2 يوليو 2027",
    "Applications 30 October 2026 - 30 April 2027; portfolio upload 3 - 31 May 2027; interviews 28 June - 2 July 2027"),
   ("B2 على الأقل؛ لا تُطلب شهادة لغة، والمستوى يُقيّم في المقابلة", "At least B2; no certificate required, level assessed at the interview"),
   ("تصميم التفاعل والخدمات الرقمية", "Interaction and digital service design"),
   ("التقديم أونلاين على apply.mome.hu", "Apply online on apply.mome.hu"), "https://mome.hu/en/jelentkezes/interaction-design-ma-angol-nyelven-jelentkezes")

# ======================= SPORT SCIENCE (master's) =======================
ma("de", "sport", "Sport and Exercise Sciences for Health and Performance", "Ruhr-Universität Bochum", "Bochum", MSC, S4,
   ("غير منشور في المصدر (صفحة DAAD تقول إن الرسوم تختلف)؛ مساهمة فصلية حوالي 380 يورو", "Not published in the source (the DAAD page says fees vary); semester contribution about €380"),
   ("بكالوريوس علوم رياضة (180 ساعة معتمدة) أو ما يعادله", "Bachelor's in sport science (180 credits) or equivalent"),
   ("الفصل الشتوي: من أول يونيو حتى 15 يوليو", "Winter semester: from early June to 15 July"),
   ("B2: IELTS 6.5 أو TOEFL iBT 80", "B2: IELTS 6.5 or TOEFL iBT 80"), ("علوم الرياضة والتمرين للصحة والأداء", "Sport and exercise sciences for health and performance"),
   ("التقديم على بوابة جامعة بوخوم", "Apply on Ruhr-Universität Bochum's portal"), DAAD + "6211/")
ma("de", "sport", "High-Performance Sport (MSc)", "Saarland University", "Saarbrücken", MSC, S4, FREE("394"),
   ("بكالوريوس علوم رياضة أو مجال قريب بتقدير 2.5 ألماني أو أفضل", "Bachelor's in sport science or a related field with a German grade of 2.5 or better"),
   ("الفصل الشتوي: حتى 15 يوليو", "Winter semester: by 15 July"),
   ("B2: IELTS 5.5 أو TOEFL iBT 72", "B2: IELTS 5.5 or TOEFL iBT 72"), ("رياضة النخبة: التدريب وتحليل الأداء وفسيولوجيا التمرين", "Elite sport: training, performance analysis and exercise physiology"),
   ("التقديم على بوابة جامعة زارلاند", "Apply on Saarland University's portal"), DAAD + "5210")
ma("de", "sport", "Sport Science for Health (MSc)", "University of Konstanz", "Konstanz", MSC, S4, BW("209"),
   ("بكالوريوس علوم رياضة (3 سنوات على الأقل) أو مجال قريب جداً", "Bachelor's in sport science (at least 3 years) or a closely related subject"),
   ("الفصل الشتوي: 15 مارس - 15 أبريل", "Winter semester: 15 March - 15 April"),
   ("B2: IELTS 6", "B2: IELTS 6"), ("علوم الرياضة للصحة", "Sport science for health"),
   ("التقديم على بوابة جامعة كونستانس", "Apply on the University of Konstanz portal"), DAAD + "7755/")
ma("de", "sport", "Exercise Science & Training (MSc)", "Julius-Maximilians-Universität Würzburg", "Würzburg", MSC, S4, FREE("180"),
   ("بكالوريوس (180 ساعة معتمدة) فيه 40 ساعة معتمدة على الأقل في علوم الرياضة", "Bachelor's (180 credits) with at least 40 credits in sport science"),
   ("الفصل الشتوي: 15 يناير - 15 يوليو", "Winter semester: 15 January - 15 July"),
   ("B2 (وC1 مستحسن): IELTS 5.5", "B2 (C1 recommended): IELTS 5.5"), ("علوم التمرين والتدريب", "Exercise science and training"),
   ("التقديم على بوابة WueStudy", "Apply on the WueStudy portal"), DAAD + "8584/")
ma("de", "sport", "Sports, Exercise and Human Performance", "University of Münster", "Münster", MSC, S4, FREE("355"),
   ("بكالوريوس 6 فصول فيه 10 ساعات معتمدة إحصاء و5 أحياء و5 علم نفس؛ 30 مقعداً", "Six-semester bachelor's with 10 credits of statistics, 5 of biology and 5 of psychology; 30 places"),
   ("الفصل الشتوي فقط: حتى 15 يوليو", "Winter semester only: by 15 July"),
   ("B2: IELTS 6 أو TOEFL iBT 72", "B2: IELTS 6 or TOEFL iBT 72"), ("الرياضة والتمرين والأداء البشري", "Sports, exercise and human performance"),
   ("التقديم على صفحة الماجستير بجامعة مونستر", "Apply via the University of Münster's master's page"), DAAD + "5212/")
for name, other, url in [
    ("MSc in Sports Coaching", ("التدريب الرياضي المتخصص (كرة السلة، المبارزة، السباحة، تنس الطاولة، كرة الماء)", "Specialist coaching (basketball, fencing, swimming, table tennis, water polo)"),
     "https://international.pte.hu/study-programs/msc-sports-coaching"),
    ("MSc in Sports Management", ("الإدارة الرياضية", "Sports management"), "https://international.pte.hu/study-programs/msc-sports-management"),
]:
    ma("hu", "sport", name, "University of Pécs", "Pécs", MSC, S4, HU("3,300"),
       ("رسوم طلب 200 يورو؛ شروط القبول في صفحة البرنامج", "€200 application fee; admission rules on the programme page"),
       ("موعد 2027 غير منشور في صفحة البرنامج", "2027 deadline not on the programme page"), NP, other, PTE_HOW, url, PTE_FEES)
ma("hu", "sport", "MSc Sports Coaching", "Hungarian University of Sports Science", "Budapest", MSC, S4, HU("4,000"),
   ("بكالوريوس (أو في السنة الأخيرة منه) مع ساعات معتمدة في علوم الرياضة والصحة والتربية", "Bachelor's (or final year) with credits in sport, health and education sciences"),
   ("غير منشور في المصدر", "Not published in the source"), NP,
   ("التدريب الرياضي: كرة القدم وكرة اليد والكانو", "Sports coaching: football, handball and canoe sprint"),
   ("التقديم أونلاين على apply.tf.hu", "Apply online on apply.tf.hu"), "https://apply.tf.hu/courses/course/17")

# ======================= FOOD SCIENCE (master's) =======================
ma("de", "food", "Food Science and Technology", "University of Hohenheim", "Stuttgart", MSC, S4,
   ("1,500 يورو للفصل لغير الأوروبيين (ولاية بادن فورتمبيرغ)", "€1,500 per semester for non-EU students (Baden-Württemberg)"),
   ("بكالوريوس في العلوم الطبيعية أو الهندسة؛ 43 مقعداً", "Bachelor's in natural sciences or engineering; 43 places"),
   ("لغير الأوروبيين للفصل الشتوي 2027/2028: حتى 15 يونيو 2027", "Non-EU, winter semester 2027/2028: by 15 June 2027"),
   NP, ("علوم وتكنولوجيا الأغذية", "Food science and technology"),
   ("التقديم على بوابة جامعة هوهنهايم", "Apply on the University of Hohenheim portal"),
   "https://www.daad.de/en/studying-in-germany/universities/all-degree-programmes/detail/university-of-hohenheim-food-science-and-technology-w30669?hec-id=w30669",
   "https://uni-hohenheim.de/en/faq-tuition-fees-international-students")
ma("de", "food", "International Food Business and Consumer Studies (IFBC)", "Fulda University of Applied Sciences", "Fulda", MSC, S4, FREE("400"),
   ("بكالوريوس في التغذية أو تكنولوجيا الأغذية أو الزراعة أو مجال قريب بتقدير 2.4 ألماني أو أفضل", "Bachelor's in nutrition, food technology, agriculture or a related field with a German grade of 2.4 or better"),
   ("لأصحاب الشهادات الأجنبية: 1 ديسمبر - 1 مارس", "Foreign degree holders: 1 December - 1 March"),
   ("B2: IELTS 5.5", "B2: IELTS 5.5"), ("أعمال الأغذية الدولية ودراسات المستهلك، بالتعاون مع جامعة كاسل", "International food business and consumer studies, with the University of Kassel"),
   UA, DAAD + "3687")
ma("de", "food", "Food System Sciences (MSc)", "University of Bayreuth", "Kulmbach", MSC, S4, FREE("166"),
   ("بكالوريوس بتقدير 2.5 ألماني أو أفضل في العلوم الطبيعية أو الحياتية أو الاجتماعية أو القانون أو الاقتصاد أو التغذية، واختبار قدرات",
    "Bachelor's with a German grade of 2.5 or better in natural, life or social sciences, law, economics or nutrition, plus an aptitude test"),
   ("الفصل الشتوي: 1 مارس - 15 يونيو", "Winter semester: 1 March - 15 June"),
   ("B2: IELTS 6 أو TOEFL iBT 80", "B2: IELTS 6 or TOEFL iBT 80"), ("علوم نظم الغذاء في حرم كولمباخ", "Food system sciences at the Kulmbach campus"),
   ("التقديم على بوابة جامعة بايرويت ورفع المستندات عبر uni-assist", "Apply on the University of Bayreuth portal and upload documents via uni-assist"), DAAD + "9214")

# ======================= SOCIAL WORK (master's) =======================
ma("de", "sw", "MA in International Social Work with Refugees and Migrants", "Technical University of Applied Sciences Würzburg-Schweinfurt (THWS)", "Würzburg", MAA, S3, FREE("182"),
   ("شهادة 210 ساعة معتمدة في الخدمة الاجتماعية بتقدير 2.5 ألماني أو أفضل أو ما يعادلها", "A 210-credit degree in social work with a German grade of 2.5 or better, or equivalent"),
   ("15 أكتوبر - 15 ديسمبر", "15 October - 15 December"),
   ("B2: IELTS 6 أو TOEFL iBT 83", "B2: IELTS 6 or TOEFL iBT 83"), ("الخدمة الاجتماعية الدولية مع اللاجئين والمهاجرين", "International social work with refugees and migrants"),
   ("التقديم على بوابة THWS", "Apply on the THWS campus portal"), DAAD + "8603")
ma("de", "sw", "Master's in International Social Work", "University of Applied Sciences Erfurt", "Erfurt", MAA, S4,
   ("غير منشور في المصدر", "Not published in the source"),
   ("شروط القبول العامة ومقابلة متخصصة", "General entry requirements and a specialist interview"),
   ("فترة التسجيل 1 - 31 مايو (للفصل الشتوي)؛ موعد خاص للطلاب الدوليين غير منشور", "Enrolment period 1 - 31 May (winter semester); no separate deadline published for international applicants"),
   NP, ("الخدمة الاجتماعية الدولية: حقوق الإنسان والمجتمع المدني", "International social work: human rights and civil society"),
   ("الاستفسار من مكتب القبول بالجامعة", "Ask the university's admissions office"),
   "https://www.fh-erfurt.de/en/faculties-and-departments/applied-social-sciences/social-work/master-international-social-work")
ma("se", "sw", "Master's Programme in Social Work and Human Rights", "University of Gothenburg", "Gothenburg", MSC, S4,
   ("194,000 كرونة سويدية للبرنامج كاملاً (الدفعة الأولى 48,500)", "SEK 194,000 for the whole programme (first payment SEK 48,500)"),
   ("بكالوريوس في الخدمة الاجتماعية أو مجال قريب جداً؛ رسوم طلب لغير الأوروبيين", "Bachelor's in social work or a closely related subject; application fee for non-EU applicants"),
   ("الجولة الدولية لخريف 2027: 16 أكتوبر 2026 - 15 يناير 2027", "International round for autumn 2027: 16 October 2026 - 15 January 2027"),
   ("English 6 السويدي أو ما يعادله (TOEFL أو IELTS)", "Swedish English 6 or equivalent (TOEFL or IELTS)"),
   ("الخدمة الاجتماعية وحقوق الإنسان، من 30 أغسطس 2027", "Social work and human rights, from 30 August 2027"),
   ("التقديم على universityadmissions.se", "Apply on universityadmissions.se"), "https://www.gu.se/en/study-gothenburg/7e99bf66-adbf-11f1-acb2-54c7e2354f29")
ma("hu", "sw", "MA in Social Work", "University of Pécs", "Pécs", MAA, S4, HU("2,500"),
   ("بكالوريوس في الخدمة الاجتماعية أو السياسة الاجتماعية أو التربية الاجتماعية؛ رسوم طلب 200 يورو", "Bachelor's in social work, social policy or social pedagogy; €200 application fee"),
   ("موعد 2027 غير منشور في صفحة البرنامج؛ القبول في الخريف والربيع", "2027 deadline not on the programme page; autumn and spring intakes"), NP,
   ("الخدمة الاجتماعية مع تدريب ميداني", "Social work with field practice"), PTE_HOW, "https://international.pte.hu/study-programs/ma-social-work", PTE_FEES)

# ======================= URBAN PLANNING (master's, Germany) =======================
ma("de", "urb", "European Urban Studies (EUS)", "Bauhaus-Universität Weimar", "Weimar", MSC, S4, FREE("340"),
   ("شهادة 180 ساعة معتمدة في العمارة أو التخطيط أو الجغرافيا أو علم الاجتماع الحضري؛ سيرة ذاتية وخطاب دافع ومقال", "A 180-credit degree in architecture, planning, geography or urban sociology; CV, motivation letter and essay"),
   ("الفصل الشتوي: حتى 15 مايو", "Winter semester: by 15 May"),
   ("B2: IELTS 6", "B2: IELTS 6"), ("الدراسات الحضرية الأوروبية", "European urban studies"),
   ("التقديم عبر uni-assist أو بوابة جامعة باوهاوس", "Apply via uni-assist or the Bauhaus-Universität portal"), DAAD + "3679/")
ma("de", "urb", "Spatial Planning for Regions in Growing Economies (SPRING)", "TU Dortmund University", "Dortmund", MSC, S4,
   ("غير منشور في المصدر (الرسوم تختلف حسب جامعة السنة الثانية)؛ مساهمة فصلية في دورتموند 340 يورو", "Not published in the source (fees vary by the second-year university); semester contribution in Dortmund €340"),
   ("بكالوريوس تخطيط بتقدير أعلى بكثير من المتوسط، وخبرة عمل في التخطيط مطلوبة", "Planning bachelor's with well above-average grades, and planning work experience required"),
   ("الفصل الشتوي: حتى 1 مارس", "Winter semester: by 1 March"),
   ("B2: IELTS 5.5 أو TOEFL iBT 72", "B2: IELTS 5.5 or TOEFL iBT 72"),
   ("التخطيط الإقليمي: السنة الأولى في دورتموند والثانية في جامعة شريكة بالخارج", "Regional planning: first year in Dortmund, second year at a partner university abroad"),
   ("التقديم بالبريد الإلكتروني application.spring@tu-dortmund.de", "Apply by email to application.spring@tu-dortmund.de"), DAAD + "3718/")
ma("de", "urb", "Urban Design and Sustainable Revitalisation", "Brandenburg University of Technology Cottbus-Senftenberg", "Cottbus", MSC, S4,
   ("1,000 يورو للفصل لكل الطلاب (قد تتغير)، زائد مساهمة فصلية 391.80 يورو", "€1,000 per semester for all students (may vary), plus a €391.80 semester contribution"),
   ("بكالوريوس عمارة أو تصميم أو تخطيط حضري أو إقليمي أو عمارة مناظر، وملف مشروعات", "Bachelor's in architecture, urban design, urban or regional planning or landscape architecture, plus a project portfolio"),
   ("غير منشور في صفحة DAAD؛ راجع صفحة التقديم بالجامعة", "Not on the DAAD page; see the university's application page"),
   ("B2: IELTS 6 أو TOEFL iBT 79", "B2: IELTS 6 or TOEFL iBT 79"), ("التصميم الحضري وإحياء المدن المستدام", "Urban design and sustainable revitalisation"),
   UA, DAAD + "4396", "https://www.b-tu.de/en/urban-design-ms/application")
ma("de", "urb", "Urban Design Master's Programme", "Technische Universität Berlin", "Berlin", MSC, S4,
   ("لا توجد رسوم دراسية؛ المساهمة الفصلية في صفحة الجامعة", "No tuition fee; semester contribution on the university's page"),
   ("بكالوريوس عمارة أو تخطيط حضري وإقليمي أو عمارة مناظر أو مجال قريب (30 ساعة معتمدة على الأقل)", "Bachelor's in architecture, urban and regional planning, landscape architecture or a related field (at least 30 credits)"),
   ("الفصل الشتوي: حتى 15 مايو", "Winter semester: by 15 May"),
   ("B2: IELTS 6.5 أو PTE 65", "B2: IELTS 6.5 or PTE 65"), ("التصميم الحضري", "Urban design"),
   ("التقديم على صفحة الماجستير بجامعة TU Berlin", "Apply via TU Berlin's master's application page"), DAAD + "4532/",
   "https://www.tu.berlin/en/i-a-office-of-student-affairs/masters-application-enrollment")
ma("de", "urb", "Urban Planning and Sustainable Transformation (UPST)", "OWL University of Applied Sciences and Arts", "Detmold", MSC, S2,
   ("لا توجد رسوم دراسية؛ المساهمة الفصلية تُحدد قبل كل فصل", "No tuition fee; the semester contribution is set before each semester"),
   ("شروط القبول الكاملة في صفحة البرنامج", "Full admission requirements on the programme page"),
   ("الفصل الشتوي فقط: 1 فبراير - 31 مارس", "Winter semester only: 1 February - 31 March"),
   ("B2: IELTS 6 أو TOEFL iBT 72", "B2: IELTS 6 or TOEFL iBT 72"), ("التخطيط الحضري والتحول المستدام", "Urban planning and sustainable transformation"),
   ("التقديم عبر uni-assist أو بوابة TH OWL", "Apply via uni-assist or the TH OWL portal"), DAAD + "10478/")

# ======================= BACHELOR'S (Hungary) =======================
ba("hu", "sci", "Chemistry BSc", "Eötvös Loránd University (ELTE)", "Budapest", BSC, B6, HU("3,150"),
   ("رسوم طلب 160 يورو؛ شهادة الثانوية ودرجات آخر سنتين ثم امتحان شفهي أونلاين", "€160 application fee; secondary school certificate and last two years' grades, then an online oral exam"),
   ("للدراسة في سبتمبر 2027: حتى 31 مايو 2027", "For September 2027: by 31 May 2027"),
   ("B2: IELTS 5.5 أو PTE 61", "B2: IELTS 5.5 or PTE 61"), ("الكيمياء مع تدريب معملي مبكر", "Chemistry with early laboratory training"),
   ("التقديم أونلاين على apply.elte.hu", "Apply online on apply.elte.hu"), "https://www.elte.hu/en/chemistry-bsc")
for name, other in [("BSc in Biology", ("الأحياء", "Biology")), ("BSc in Physics", ("الفيزياء", "Physics"))]:
    ba("hu", "sci", name, "University of Pécs", "Pécs", BSC, B6, HU("3,000"),
       ("رسوم طلب 200 يورو", "€200 application fee"), ("حتى 20 يونيو 2027", "By 20 June 2027"), NP, other, PTE_HOW, PTE_SCI, PTE_FEES)
ba("hu", "hum", "English and American Studies BA", "Eötvös Loránd University (ELTE)", "Budapest", BAA, B6, HU("2,300"),
   ("رسوم طلب 100 يورو مبكراً أو 150 يورو من أبريل، ورسوم امتحان 100 يورو؛ مقابلة أونلاين", "€100 early or €150 from April application fee, plus a €100 exam fee; online interview"),
   ("للدراسة في سبتمبر 2027: حتى 31 مايو 2027", "For September 2027: by 31 May 2027"),
   ("B2: IELTS 5.5", "B2: IELTS 5.5"), ("الدراسات الإنجليزية والأمريكية: الأدب واللغويات والثقافة", "English and American studies: literature, linguistics and culture"),
   ("التقديم أونلاين على apply.elte.hu", "Apply online on apply.elte.hu"), "https://elte.hu/en/english-and-american-studies-ba")
ba("hu", "hum", "English and American Studies BA", "University of Szeged", "Szeged", BAA, B6, HU("1,800"),
   NP, ("موعد 2027 غير منشور في صفحة الرسوم", "2027 deadline not on the fee page"), NP,
   ("الدراسات الإنجليزية والأمريكية", "English and American studies"), SZ_HOW, SZ_FEES)
ba("hu", "hum", "BA in English and American Studies", "University of Pécs", "Pécs", BAA, B6, HU("2,300"),
   ("رسوم طلب 200 يورو", "€200 application fee"), ("موعد 2027 غير منشور في صفحة البرنامج", "2027 deadline not on the programme page"), NP,
   ("الدراسات الإنجليزية والأمريكية", "English and American studies"), PTE_HOW, PTE_FEES, PTE_HUM)
ba("hu", "art", "Music and Performing Arts BA", "University of Szeged", "Szeged", BAA, B6, HU("2,500"),
   NP, ("موعد 2027 غير منشور في صفحة الرسوم", "2027 deadline not on the fee page"), NP,
   ("الموسيقى والأداء", "Music and performing arts"), SZ_HOW, SZ_FEES)
ba("hu", "art", "Motion Pictures BA", "Eötvös Loránd University (ELTE)", "Budapest", BAA, B6, HU("4,300"),
   NP, ("موعد 2027 غير منشور في صفحة الرسوم", "2027 deadline not on the fee page"), NP,
   ("صناعة الأفلام بكلية الآداب في جامعة ELTE", "Film-making at ELTE's Faculty of Humanities"),
   ("التقديم أونلاين على apply.elte.hu", "Apply online on apply.elte.hu"), "https://www.btk.elte.hu/en/fees-and-finances")
ba("hu", "sport", "BSc in Physical Training", "University of Pécs", "Pécs", BSC, B6,
   ("2,500 يورو للفصل لغير الأوروبيين حسب صفحة البرنامج (صفحة الرسوم العامة تذكر 3,000 يورو لبكالوريوس التدريب الرياضي، للتحقق)", "€2,500 per semester for non-EU students per the programme page (the general fee page lists €3,000 for the Sports Coaching BSc, to verify)"),
   ("رسوم طلب 140 يورو؛ اختيار تخصص رياضي واحد عند التقديم (ألعاب القوى، كرة اليد، السلة، القدم، السباحة)", "€140 application fee; choose one sport when applying (athletics, handball, basketball, football, swimming)"),
   ("موعد 2027 غير منشور في صفحة البرنامج", "2027 deadline not on the programme page"), NP,
   ("التربية البدنية والتدريب الرياضي", "Physical education and coaching"), PTE_HOW, "https://www.ttk.pte.hu/en/admission/english-degree-programs/bsc-study-programs/physical-training-bsc", PTE_FEES)
ba("hu", "sw", "BA in Social Work", "University of Pécs", "Pécs", BAA, ("3.5 سنوات (7 فصول)", "3.5 years (7 semesters)"), HU("2,200"),
   NP, ("موعد 2027 غير منشور في صفحة البرنامج", "2027 deadline not on the programme page"), NP,
   ("الخدمة الاجتماعية", "Social work"), PTE_HOW, "https://btk.pte.hu/en/study-programs/ba-in-social-work")

C = {"de": ("ألمانيا", "germany"), "hu": ("المجر", "hungary"), "se": ("السويد", "sweden")}

if __name__ == "__main__":
    for cc, lst in MA.items():
        append_extra(C[cc][0], C[cc][1], lst, REVIEWED)
    for cc, lst in BA.items():
        append_ba(C[cc][0], C[cc][1], lst, REVIEWED)
    print("new_fields7:", sum(map(len, MA.values())), "master's,", sum(map(len, BA.values())), "bachelor's")
