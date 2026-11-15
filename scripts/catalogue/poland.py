# Poland: English-taught master's programmes at public universities.
# Fees in PLN are converted to EUR at about 4.4 PLN per EUR (November 2026); the PLN amount is the official one.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, MSC2, SEM3, SEM4

COMMON_DIPLOMA = ("يجب أن تؤهل شهادة البكالوريوس لدراسة الماجستير في البلد الذي صدرت منه، مع تصديق أو أبوستيل",
                  "The bachelor's diploma must qualify for master's studies in the issuing country, with legalisation or an apostille")
LIV_PL = ("من حوالي 1,500 زلوتي (حوالي 340 يورو) شهرياً حسب Study in Poland؛ المدن الكبرى أغلى",
          "From about PLN 1,500 (about €340) per month per Study in Poland; big cities cost more")
LIV_WAW = ("2,300 - 2,800 زلوتي شهرياً (حوالي 520 - 640 يورو) في وارسو حسب جامعة وارسو",
           "PLN 2,300 - 2,800 per month (about €520 - 640) in Warsaw per the University of Warsaw")
HOUSE_PL = ("سكن جامعي بأعداد محدودة؛ غرفة السكن الجامعي حوالي 400 - 600 زلوتي شهرياً حسب Study in Poland",
            "Limited university dormitory places; a dormitory room costs about PLN 400 - 600 per month per Study in Poland")
SEM_EUR = lambda v: (f"{v} يورو للفصل الدراسي لغير الأوروبيين (2026/2027)", f"€{v} per semester for non-EU students (2026/2027)")
SEM_PLN = lambda e, p: (f"حوالي {e} يورو للفصل الدراسي ({p} زلوتي بولندي لغير الأوروبيين، 2026/2027)",
                        f"About €{e} per semester (PLN {p} for non-EU students, 2026/2027)")
R = []

# ---------- Warsaw University of Technology ----------
WUT = "Warsaw University of Technology (WUT)"
WUT_OFFER = "https://www.students.pw.edu.pl/Studies-Offer/M.Sc.-offer"
WUT_APPLY = "https://www.students.pw.edu.pl/How-to-Apply/Admission-to-M.Sc"
WUT_DL = ("لو البرنامج ليه دفعة فبراير 2027: التسجيل بيبقى في نوفمبر وآخر موعد لإنشاء الطلب حوالي 8 ديسمبر (من مصدر غير رسمي؛ في دفعة فبراير 2026 كان 9 ديسمبر 2025، للتحقق). لدفعة أكتوبر 2027: المواعيد لسه ما اتنشرتش، وفي 2026 كان آخر موعد 21 يوليو (للتحقق)",
          "For the October 2026 intake the last day to create an application was 21 July 2026; for the February intake registration usually runs from November to early December (2027 dates to verify)")
WUT_ADM = ("رسوم طلب 85 زلوتي (للتحقق لغير الأوروبيين)", "PLN 85 application fee (to verify for non-EU applicants)")
WUT_EN = ("شهادة لغة إنجليزية بمستوى B2 على الأقل من قائمة الجامعة، أو دراسة سابقة بالإنجليزية", "English certificate at B2 or higher from the university's list, or previous studies in English")
WUT_HOW = ("نظام التقديم الإلكتروني لمكتب الطلاب الدوليين، ثم رفع المستندات الرسمية بعد القبول المبدئي", "Online application system of the International Students Office, then upload of formal documents after conditional admission")
WUT_FEE_NOTE = ("الرسم الفعلي يُحسب حسب الساعات المعتمدة المسجلة في الفصل", "The actual fee is calculated from the credits registered in the semester")
WUT_RN = ("قائمة برامج الماجستير بالإنجليزية في الجامعة", "List of the university's English-taught master's programmes")
WUT_AN = ("صفحة التقديم لبرامج الماجستير (مكتب الطلاب الدوليين)", "Master's application page (International Students Office)")
def wut(field, name, fee, dur=NP, other=None, deg=("Master of Science (M.Sc.)", "Master of Science (M.Sc.)")):
    o = other or WUT_FEE_NOTE
    R.append(P(field=field, name=name, uni=WUT, city="Warsaw", deg=deg, dur=dur, fee=SEM_EUR(fee), adm=WUT_ADM, dl=WUT_DL,
               en=WUT_EN, other=(o[0] + "؛ " + COMMON_DIPLOMA[0], o[1] + "; " + COMMON_DIPLOMA[1]), how=WUT_HOW, living=LIV_WAW,
               house=HOUSE_PL, src=WUT_OFFER, req=WUT_OFFER, req_note=WUT_RN, apply=WUT_APPLY, apply_note=WUT_AN))

wut("cs", "Computer Science", "6,450", other=("كلية الإلكترونيات وتقنية المعلومات؛ " + WUT_FEE_NOTE[0], "Faculty of Electronics and Information Technology; " + WUT_FEE_NOTE[1]))
wut("cs", "Computer Science and Information Systems", "6,300", other=("كلية الرياضيات وعلوم المعلومات؛ " + WUT_FEE_NOTE[0], "Faculty of Mathematics and Information Science; " + WUT_FEE_NOTE[1]))
wut("ds", "Data Science", "6,510", dur=SEM3, other=("كلية الرياضيات وعلوم المعلومات؛ يركز على هندسة البيانات وتحليلها", "Faculty of Mathematics and Information Science; focuses on data engineering and analytics"))
wut("eng", "Aerospace Engineering", "2,490", dur=SEM3)
wut("eng", "Power Engineering", "2,340", dur=SEM3)
wut("eng", "Robotics and Automatic Control", "2,340")
wut("eng", "Mechatronics", "3,600")
wut("eng", "Mechanical Engineering", "4,950", other=("كلية هندسة السيارات ومعدات البناء؛ " + WUT_FEE_NOTE[0], "Faculty of Automotive and Construction Machinery Engineering; " + WUT_FEE_NOTE[1]))
wut("eng", "Management and Production Engineering", "2,600", other=("يجمع هندسة الإنتاج وإدارة العمليات والصناعة 4.0؛ " + WUT_FEE_NOTE[0], "Combines production engineering, operations management and Industry 4.0; " + WUT_FEE_NOTE[1]))

# ---------- University of Warsaw ----------
UW = "University of Warsaw"
UW_DL = ("للعام 2026: إعلان النتائج 22 يوليو 2026 وتسليم المستندات 23 - 31 يوليو؛ مواعيد التسجيل لدفعة 2027 تُنشر في نظام IRK (للتحقق)",
         "For 2026: results on 22 July 2026 and document submission 23 - 31 July; 2027 registration dates are published in the IRK system (to verify)")
UW_EN = ("مستوى B2 على الأقل بشهادة تقبلها الجامعة", "At least B2 with a certificate accepted by the university")
UW_HOW = ("نظام التسجيل الإلكتروني IRK في جامعة وارسو", "University of Warsaw IRK online registration system")
UW_ADM = ("رسوم طلب (المبلغ غير منشور في صفحة البرنامج)", "Application fee (amount not shown on the programme page)")
UW_FEES = "https://rekrutacja.uw.edu.pl/files/pdf/tuition_fees_2026-2027_05.10.2026.pdf"
def uw(field, name, url, fee, other, dl=UW_DL, deg=("Master of Science", "Master of Science")):
    R.append(P(field=field, name=name, uni=UW, city="Warsaw", deg=deg, dur=MSC2, fee=fee, adm=UW_ADM, dl=dl, en=UW_EN,
               other=other, how=UW_HOW, living=LIV_WAW, house=HOUSE_PL, src=url, req=url,
               req_note=("صفحة البرنامج في نظام IRK: المعايير والمواعيد", "Programme page in IRK: criteria and dates"),
               apply=url, apply_note=("التسجيل من صفحة البرنامج في نظام IRK", "Register from the programme page in IRK")))

uw("cs", "Machine Learning", "https://irk.uw.edu.pl/en-gb/offer/PELNE2026/programme/S2-ML/",
   ("3,300 يورو سنوياً لغير الأوروبيين (2026/2027)", "€3,300 per year for non-EU students (2026/2027)"),
   ("امتحان قبول كتابي بالإنجليزية (حد أدنى 45%) في الرياضيات والبرمجة وتعلم الآلة؛ 45 مقعداً؛ مقبول من أي تخصص",
    "Written entrance exam in English (minimum 45%) in mathematics, programming and machine learning; 45 places; any bachelor's field accepted"),
   dl=("للعام 2026: امتحان القبول 1 يوليو 2026 والنتائج 22 يوليو؛ مواعيد 2027 تُنشر في نظام IRK (للتحقق)",
       "For 2026: entrance exam on 1 July 2026 and results on 22 July; 2027 dates are published in IRK (to verify)"))
uw("ds", "Data Science and Business Analytics", "https://irk.uw.edu.pl/en-gb/offer/PELNE2026/programme/S2-DS/",
   ("4,900 يورو سنوياً (2026/2027)", "€4,900 per year (2026/2027)"),
   ("القبول حسب المعدل وتصنيف الجامعة السابقة والمقررات في الاقتصاد والرياضيات والبرمجة؛ 100 مقعد؛ تخفيضات للمتفوقين",
    "Admission by grade, ranking of the previous university and coursework in economics, mathematics and programming; 100 places; discounts for top students"),
   deg=("Master in Data Science and Business Analytics", "Master in Data Science and Business Analytics"))

# ---------- SGH Warsaw School of Economics ----------
SGH = "SGH Warsaw School of Economics"
SGH_FEES = "https://www.sgh.waw.pl/en/fees-graduate-studies"
SGH_STEPS = "https://www.sgh.waw.pl/en/admissions-step-step-graduate-studies-international-applicants"
SGH_DL = ("دفعة واحدة في السنة (أكتوبر). مواعيد 2027 لسه ما اتنشرتش؛ في 2026 كان تسجيل الدوليين 9 يونيو - 23 يوليو، والمتوقع نفس الفترة تقريباً (للتحقق)",
          "One intake per year; in 2026 international registration ran 9 June - 23 July 2026 (2027 dates published later)")
SGH_FEE = ("2,400 يورو للفصل الدراسي (2026/2027)", "€2,400 per semester (2026/2027)")
SGH_EN = ("شهادة من قائمة SGH (مثل IELTS 5.5 أو TOEFL iBT 72 أو Cambridge FCE) أو مقابلة عبر الإنترنت", "A certificate from SGH's list (e.g. IELTS 5.5, TOEFL iBT 72 or Cambridge FCE) or an online interview")
SGH_HOW = ("نظام التسجيل الإلكتروني ISR ثم التحقق من المستندات في الجامعة", "ISR online registration system, then document verification at SGH")
def sgh(field, name, url, other):
    R.append(P(field=field, name=name, uni=SGH, city="Warsaw", deg=("Master's degree (magister)", "Master's degree (magister)"), dur=SEM4,
               fee=SGH_FEE, adm=NP, dl=SGH_DL, en=SGH_EN, other=other, how=SGH_HOW, living=LIV_WAW, house=HOUSE_PL, src=url,
               req=SGH_STEPS, req_note=("خطوات القبول للدوليين في برامج الماجستير", "Admission steps for international master's applicants"),
               apply=SGH_STEPS, apply_note=("صفحة القبول للدوليين وروابط التسجيل", "International admissions page with registration links")))

sgh("ds", "Advanced Analytics - Big Data", "https://www.sgh.waw.pl/en/second-cycle-studies/master-studies-advanced-analytics-big-data",
    ("القبول يعتمد أساساً على تقييم المستندات الدراسية", "Admission is mainly based on evaluation of academic documents"))
sgh("bus", "International Business", SGH_FEES,
    ("مقبول من أي تخصص بكالوريوس؛ GMAT/GRE اختياري", "Bachelor's in any field accepted; GMAT/GRE optional"))
sgh("bus", "Global Business, Finance and Governance", SGH_FEES,
    ("القبول يعتمد أساساً على تقييم المستندات الدراسية", "Admission is mainly based on evaluation of academic documents"))
sgh("bus", "Management, Entrepreneurship, Technology and Innovation", SGH_FEES,
    ("برنامج جديد نسبياً في الإدارة والابتكار وريادة الأعمال", "A relatively new programme in management, innovation and entrepreneurship"))

# ---------- Jagiellonian University ----------
R.append(P(field="bus", name="Business and Finance Management", uni="Jagiellonian University", city="Kraków",
           deg=("Master's degree (magister)", "Master's degree (magister)"), dur=MSC2,
           fee=("حوالي 4,450 يورو سنوياً (19,600 زلوتي بولندي سنوياً لغير المعفيين، 2026/2027)", "About €4,450 per year (PLN 19,600 per year for non-exempt foreigners, 2026/2027)"),
           adm=("رسوم طلب 100 زلوتي", "PLN 100 application fee"),
           dl=("للعام 2026 كانت 3 جولات: 23 فبراير - 9 مارس، 31 مارس - 11 مايو، 11 يونيو - 31 أغسطس 2026 (مواعيد 2027 للتحقق)",
               "In 2026 there were 3 rounds: 23 Feb - 9 Mar, 31 Mar - 11 May, 11 Jun - 31 Aug 2026 (2027 dates to verify)"),
           en=("مستوى B2 على الأقل بشهادة مقبولة", "At least B2 with an accepted certificate"),
           other=("مقابلة واحدة عبر الإنترنت بالإنجليزية هي أساس القبول (100%)؛ كلية الإدارة والاتصال الاجتماعي", "A single online interview in English is the basis of admission (100%); Faculty of Management and Social Communication"),
           how=("نظام التسجيل الإلكتروني IRK في الجامعة", "University IRK online registration system"),
           living=LIV_PL, house=HOUSE_PL,
           src="https://irk.uj.edu.pl/en-gb/offer/II_C_26/programme/busine.fina.mana_s2s_C_en/",
           req="https://irk.uj.edu.pl/en-gb/offer/II_C_26/programme/busine.fina.mana_s2s_C_en/",
           req_note=("صفحة البرنامج في نظام IRK", "Programme page in IRK"),
           apply="https://irk.uj.edu.pl/en-gb/offer/II_C_26/programme/busine.fina.mana_s2s_C_en/",
           apply_note=("التسجيل من صفحة البرنامج في نظام IRK", "Register from the programme page in IRK")))

# ---------- AGH University of Krakow ----------
AGH = "AGH University of Krakow"
AGH_OFFER = "https://international.agh.edu.pl/en/studies/education-offer-master-studies"
AGH_FEES = "https://www.international.agh.edu.pl/en/studies/fees"
AGH_RULES = "https://www.international.agh.edu.pl/en/studies/recruitment/recruitment-rules-master"
AGH_DL = ("التقديم الصيفي عادة من يونيو حتى سبتمبر لدفعة أكتوبر، والشتوي يناير - فبراير لدفعة مارس؛ تقويم 2027/2028 يُنشر في مايو 2027",
          "Summer recruitment usually June - September for the October start, winter recruitment January - February for the March start; the 2027/2028 calendar is published in May 2027")
AGH_ADM = ("رسوم طلب 85 زلوتي لكل تخصص (100 زلوتي إذا كان فيه امتحان قبول)", "PLN 85 application fee per programme (PLN 100 if there is an entrance exam)")
AGH_EN = ("مستوى B2 في المهارات الأربع بشهادة من قائمة الجامعة", "B2 in all four skills with a certificate from the university's list")
AGH_HOW = ("نظام التسجيل الإلكتروني e-Rekrutacja في الجامعة", "University e-Rekrutacja online system")
AGH_PAY = ("رسوم الفصل الأول تُدفع حتى 15 أكتوبر (أو 15 مارس لدفعة الربيع)", "First-semester fee due by 15 October (or 15 March for the spring intake)")
def agh(field, name, fee, other=None, dur=NP):
    o = other or AGH_PAY
    R.append(P(field=field, name=name, uni=AGH, city="Kraków", deg=("Master of Science", "Master of Science"), dur=dur,
               fee=SEM_EUR(fee), adm=AGH_ADM, dl=AGH_DL, en=AGH_EN, other=o, how=AGH_HOW, living=LIV_PL, house=HOUSE_PL,
               src=AGH_FEES, req=AGH_RULES, req_note=("قواعد القبول لبرامج الماجستير", "Master's recruitment rules"),
               apply=AGH_OFFER, apply_note=("قائمة برامج الماجستير بالإنجليزية وروابطها", "List of English-taught master's programmes with links")))

agh("cs", "Computer Science and Intelligent Systems", "2,700")
agh("eng", "Automatic Control and Robotics", "2,700")
agh("eng", "Electrical Engineering", "2,400")
agh("eng", "Mechatronic Engineering", "2,100", dur=SEM3)
agh("eng", "Space Technologies", "2,300")
agh("bus", "International Management", "3,500", dur=MSC2)

# ---------- Wrocław University of Science and Technology ----------
PWR = "Wrocław University of Science and Technology"
PWR_FEES = "https://rekrutacja.pwr.edu.pl/en/for-foreigners/fee-paying-basis-of-studies-and-scholarship-holders/after-admission/payments/"
PWR_ADMIT = "https://rekrutacja.pwr.edu.pl/en/for-foreigners/fee-paying-basis-of-studies-and-scholarship-holders/admission/master-studies"
PWR_DL = ("لدفعة أكتوبر 2027: المواعيد لسه ما اتنشرتش؛ في 2026 كان التسجيل 1 يونيو - 21 يوليو، والمتوقع نفس الفترة (للتحقق). دفعة فبراير 2027 خلصت للمتقدمين من برة بولندا (كانت 15 أكتوبر - 13 نوفمبر 2026)",
          "For the October 2026 intake registration ran 1 June - 21 July 2026; for February 2027 it ran 15 October - 13 November 2026 (October 2027 dates to verify)")
PWR_ADM = ("رسوم طلب 85 زلوتي لكل برنامج (حتى 6 برامج)", "PLN 85 application fee per programme (up to six programmes)")
PWR_EN = ("مستوى B2 في المهارات الأربع: مثل IELTS 5.5 أو TOEFL iBT 72 أو PTE 59", "B2 in all four skills: e.g. IELTS 5.5, TOEFL iBT 72 or PTE 59")
PWR_HOW = ("نظام التسجيل الإلكتروني IRK، ثم تسليم المستندات حضورياً", "IRK online registration, then in-person document submission")
PWR_NOTE = ("الرسوم ثابتة طوال مدة الدراسة", "Fees stay the same for the whole study period")
def pwr(field, name, eur, pln, other=None):
    R.append(P(field=field, name=name, uni=PWR, city="Wrocław", deg=("Master of Science", "Master of Science"), dur=NP,
               fee=SEM_PLN(eur, pln), adm=PWR_ADM, dl=PWR_DL, en=PWR_EN, other=other or PWR_NOTE, how=PWR_HOW, living=LIV_PL,
               house=HOUSE_PL, src=PWR_FEES, req=PWR_ADMIT, req_note=("خطوات وشروط القبول لبرامج الماجستير للأجانب", "Admission steps and requirements for foreign master's applicants"),
               apply=PWR_ADMIT, apply_note=("جدول القبول ورابط التسجيل في IRK", "Admission schedule and IRK registration link")))

pwr("cs", "Applied Computer Science", "2,230", "9,800")
pwr("cs", "Computer Engineering", "1,800", "7,900")
pwr("eng", "Control Engineering and Robotics", "2,640", "11,600")
pwr("eng", "Mechanical Engineering", "2,450", "10,800")
pwr("bus", "Management", "2,520", "11,100")

# ---------- Gdańsk University of Technology ----------
PG = "Gdańsk University of Technology"
PG_FEES = "https://pg.edu.pl/en/node/2715"
PG_SCHED = "https://pg.edu.pl/en/node/2713"
PG_DL = ("لدفعة فبراير 2027: التسجيل ودفع رسوم الطلب حتى 9 ديسمبر 2026؛ ولدفعة أكتوبر 2026 بدأ التقديم 26 مايو 2026 (مواعيد 2027 للتحقق)",
         "For the February 2027 intake: registration and application fee by 9 December 2026; for October 2026 applications opened on 26 May 2026 (2027 dates to verify)")
PG_ADM = ("رسوم طلب 85 زلوتي غير مستردة", "PLN 85 non-refundable application fee")
PG_HOW = ("نظام eRekrutacja الإلكتروني؛ ودفع رسوم الفصل الأول خلال المهلة في خطاب العرض (عادة أسبوعان)", "eRekrutacja online system; first-semester fee due within the deadline in the offer letter (usually 2 weeks)")
def pg(field, name, eur, pln, dur, other):
    R.append(P(field=field, name=name, uni=PG, city="Gdańsk", deg=("Master of Science", "Master of Science"), dur=dur,
               fee=SEM_PLN(eur, pln), adm=PG_ADM, dl=PG_DL, en=NP, other=other, how=PG_HOW, living=LIV_PL, house=HOUSE_PL,
               src=PG_FEES, req="https://pg.edu.pl/node/8655", req_note=("صفحة برامج الماجستير بالإنجليزية", "English-taught master's programmes page"),
               apply=PG_SCHED, apply_note=("جدول القبول للأجانب في برامج الماجستير", "Admission schedule for foreign master's applicants")))

pg("cs", "Informatics", "2,270", "10,000", ("3 أو 4 فصول دراسية", "3 or 4 semesters"),
   ("المدة 3 أو 4 فصول حسب الخلفية الدراسية؛ الجامعة لا تقبل التأخر في الوصول", "Duration 3 or 4 semesters depending on background; the university does not accept late arrival"))
pg("ds", "Economic Analytics", "2,440", "10,750", SEM4,
   ("يجمع الاقتصاد وأدوات تحليل البيانات", "Combines economics with data analysis tools"))
pg("bus", "Management", "2,440", "10,750", SEM4,
   ("تخصص الإدارة الدولية", "International management track"))
pg("eng", "Mechanical Engineering", "2,270", "10,000", SEM3,
   ("الجامعة لا تقبل التأخر في الوصول؛ ابدأ إجراءات التأشيرة مبكراً", "The university does not accept late arrival; start the visa process early"))

# ---------- Medical University of Silesia ----------
R.append(P(field="ph", name="Public Health", uni="Medical University of Silesia in Katowice", city="Katowice",
           deg=("Master's degree (second cycle)", "Master's degree (second cycle)"), dur=MSC2,
           fee=SEM_PLN("2,910", "12,800"), adm=("رسوم طلب 85 أو 100 زلوتي", "PLN 85 or 100 application fee"),
           dl=("مواعيد 2026/2027 منشورة في وثيقة شروط القبول على موقع الجامعة؛ مواعيد 2027 للتحقق", "2026/2027 dates are in the admission terms document on the university website; 2027 dates to verify"),
           en=NP,
           other=("مكان الدراسة داخل منطقة سيليزيا للتحقق مع الجامعة؛ قد يُطلب امتحان قبول؛ يجب إرسال المستندات الأصلية أو المصدقة بالبريد قبل بداية العام الدراسي", "The exact study location within the Silesia region is to be confirmed with the university; an entrance exam may be required; original or notarised documents must be posted before the academic year starts"),
           how=("منصة التقديم الإلكترونية للجامعة apply.sum.edu.pl", "University online application platform apply.sum.edu.pl"),
           living=LIV_PL, house=HOUSE_PL,
           src="https://student.sum.edu.pl/wp-content/uploads/2026/07/Tuition-Fees_2026_2027.pdf",
           req="https://admission.sum.edu.pl/terms-and-procedures/", req_note=("شروط وإجراءات ومواعيد القبول للبرامج الإنجليزية", "Terms, procedures and dates for English-taught programmes"),
           apply="https://apply.sum.edu.pl/", apply_note=("منصة التقديم الإلكترونية", "Online application platform")))

write("بولندا", "Poland", "poland", R)
