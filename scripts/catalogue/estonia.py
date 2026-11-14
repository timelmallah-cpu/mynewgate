# Estonia: English-taught master's programmes at public universities (University of Tartu,
# TalTech, Tallinn University). Each value is written as (Arabic, English) so the English
# translations are produced together with the Arabic data.
import csv, json

NP = ("غير منشور في المصدر", "Not published in the source")
TR = {}

def t(v):
    TR[v[0]] = v[1]
    return v[0]

# ---------- shared values ----------
UT, TT, TLU = "University of Tartu", "Tallinn University of Technology (TalTech)", "Tallinn University (TLU)"
UT_DL = ("للعام 2026 كان التقديم 2 يناير - 15 مارس عبر DreamApply؛ مواعيد دفعة 2027 تُنشر نهاية ديسمبر 2026 (للتحقق)",
         "For 2026 applications ran 2 January - 15 March via DreamApply; 2027 intake dates are published by the end of December 2026 (to verify)")
TT_DL = ("لغير الأوروبيين: 1 فبراير - 22 مارس 2027 (يمتد إلى 1 مايو لمواطني دول OECD)",
         "Non-EU applicants: 1 February - 22 March 2027 (extended to 1 May for citizens of OECD countries)")
TLU_DL = ("للمتقدمين الدوليين: 1 نوفمبر 2026 - 1 مارس 2027", "International applicants: 1 November 2026 - 1 March 2027")
UT_ADM = ("رسوم طلب 100 يورو؛ وعند القبول يدفع غير الأوروبيين نصف رسوم الفصل الأول مقدماً قبل إصدار خطاب القبول",
          "€100 application fee; on admission non-EU students pre-pay half of the first semester's fee before the admission letter is issued")
TT_ADM = ("رسوم طلب 100 يورو تغطي برنامجين؛ ويدفع غير الأوروبيين رسوم السنة الأولى كاملة قبل التسجيل",
          "€100 application fee covering 2 programmes; non-EU students pay the full first-year fee before enrolment")
TLU_ADM = ("رسوم طلب 100 يورو؛ ويدفع غير الأوروبيين رسوم الفصل الأول قبل إصدار خطاب القبول",
           "€100 application fee; non-EU students pay the first semester's fee before the acceptance letter is issued")
UT_EN = ("IELTS Academic 6.0 (لا يقل أي قسم عن 5.5) أو TOEFL iBT 75 (أو 4 على المقياس الجديد)؛ إعفاء لمن درس بالإنجليزية في الاتحاد الأوروبي أو بريطانيا أو أمريكا أو كندا أو أستراليا أو نيوزيلندا",
         "IELTS Academic 6.0 (no section below 5.5) or TOEFL iBT 75 (or 4 on the new scale); exemption for those who studied in English in the EU, UK, USA, Canada, Australia or New Zealand")
TT_EN = ("IELTS Academic 6.0 (لا يقل أي قسم عن 5.5) أو TOEFL iBT 75؛ يجب استيفاء الشرط قبل موعد التقديم",
         "IELTS Academic 6.0 (no section below 5.5) or TOEFL iBT 75; must be met by the application deadline")
TLU_EN = ("مستوى B2 على الأقل بشهادة دولية معتمدة", "At least B2 with a recognised international certificate")
TT_GRE = ("اختبار GRE العام مطلوب إلا لمن حصل على البكالوريوس من دولة في الاتحاد الأوروبي أو EFTA أو OECD",
          "GRE General Test required unless the bachelor's degree is from an EU, EFTA or OECD country")
UT_HOW = ("منصة DreamApply، ثم إرسال نسخ المستندات بالبريد", "DreamApply platform, then send copies of documents by post")
TT_HOW = ("منصة DreamApply، ثم إرسال المستندات بالبريد وتقييمها من مركز ENIC/NARIC", "DreamApply platform, then documents by post and evaluation by the ENIC/NARIC centre")
TLU_HOW = ("منصة DreamApply للمتقدمين الدوليين", "DreamApply platform for international applicants")
LIVING = ("300 - 600 يورو شهرياً بدون السكن (حسب Study in Estonia)", "€300 - 600 per month excluding housing (per Study in Estonia)")
UT_HOUSE = ("نعم: سكن جامعة تارتو؛ مثال: سرير في غرفة مزدوجة في Raatuse 22 بـ159 يورو شهرياً شاملة الفواتير (2024/25)",
            "Yes: University of Tartu dormitories; e.g. a bed in a twin room at Raatuse 22 for €159 per month including utilities (2024/25)")
TT_HOUSE = ("نعم: حوالي 2,000 مكان قرب الحرم؛ سرير في غرفة مزدوجة 158 - 173 يورو وغرفة فردية 296 - 440 يورو شهرياً شاملة الفواتير؛ قد توجد قوائم انتظار",
            "Yes: about 2,000 places near campus; a bed in a twin room €158 - 173 and a single room €296 - 440 per month including utilities; waiting lists possible")
TLU_HOUSE = ("نعم: سكن TLU Dormitorium (الأسعار غير منشورة في المصدر الذي راجعناه)", "Yes: TLU Dormitorium (prices not published in the source we reviewed)")
STATUS = ("من موقع الجامعة الرسمي - يلزم التأكد قبل النشر", "From the official university website - must be confirmed before publishing")
MSC2 = ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)")
MSC1 = ("سنة (60 ساعة معتمدة)", "1 year (60 credits)")
CITY = {"Tartu": "Tartu", "Tallinn": "Tallinn", "Kuressaare": "Kuressaare / Tallinn"}

UTP = "https://ut.ee/en/curriculum/"
TTP = "https://taltech.ee/en/masters-programmes/"
F = {"cs": ("علوم الحاسب",), "ds": ("علوم البيانات",), "bus": ("إدارة الأعمال",), "eng": ("الهندسة",), "ph": ("الصحة العامة",)}

# (field, programme, university, city, degree, duration, fee, admin, deadline, english, other, how, housing, source, links)
R = []
def ut(field, name, slug, fee, other, deg=("Master of Science", "Master of Science"), dur=MSC2):
    R.append((field, name, UT, "Tartu", deg, dur, fee, UT_ADM, UT_DL, UT_EN, other, UT_HOW, UT_HOUSE, UTP + slug))
def tt(field, name, slug, fee, other, deg=("Master of Science in Engineering", "Master of Science in Engineering"), dur=MSC2, city="Tallinn", dl=TT_DL):
    R.append((field, name, TT, city, deg, dur, fee, TT_ADM, dl, TT_EN, other, TT_HOW, TT_HOUSE, TTP + slug))
def tl(field, name, url, fee, other, dl=TLU_DL, deg=("Master of Arts", "Master of Arts")):
    R.append((field, name, TLU, "Tallinn", deg, MSC2, fee, TLU_ADM, dl, TLU_EN, other, TLU_HOW, TLU_HOUSE, url))

F7200 = ("7,200 يورو سنوياً لغير الأوروبيين", "€7,200 per year for non-EU students")
F7000 = ("7,000 يورو سنوياً لغير الأوروبيين", "€7,000 per year for non-EU students")
F4800 = ("4,800 يورو سنوياً لغير الأوروبيين", "€4,800 per year for non-EU students")
RED50 = ("طالبان مقبولان يحصلان على تخفيض 50% في رسوم الفصل الثاني حسب المعدل", "Two admitted students get a 50% fee reduction for the second semester based on grades")

# Computer Science (7)
ut("cs", "Computer Science", "computer-science", F7200,
   ("63 مقعداً؛ تخفيضات في الرسوم متاحة لبعض الطلاب المقبولين", "63 places; fee reductions available for some admitted students"))
ut("cs", "Software Engineering", "software-engineering", F7200,
   ("62 مقعداً؛ الشهادة: Master of Science in Engineering", "62 places; degree awarded: Master of Science in Engineering"),
   deg=("Master of Science in Engineering", "Master of Science in Engineering"))
tt("cs", "Cybersecurity", "cybersecurity", F7000,
   (TT_GRE[0] + "؛ برنامج مشترك مع جامعة تارتو (للتحقق)", TT_GRE[1] + "; joint programme with the University of Tartu (to verify)"))
tt("cs", "Computer Science and Artificial Intelligence", "computer-science-and-artificial-intelligence", F7000,
   (TT_GRE[0] + "؛ شهادة مزدوجة مع جامعة TU Eindhoven في هولندا (رسوم مختلفة هناك)", TT_GRE[1] + "; double degree with TU Eindhoven in the Netherlands (different fees there)"),
   deg=("Master of Science", "Master of Science"))
tt("cs", "e-Governance Technologies and Services", "e-governance-technologies-and-services", F7000,
   ("يتطلب ماجستير أو بكالوريوس 240 ساعة (أو بكالوريوس مع خبرة 5 سنوات)؛ GRE (Verbal 145، Quant 150، Writing 3.0) أو اختبار eGov Entry Test إلا لحملة الشهادات من الاتحاد الأوروبي أو EFTA أو OECD",
    "Requires a master's or a 240-credit bachelor's (or a bachelor's plus 5 years of experience); GRE (Verbal 145, Quant 150, Writing 3.0) or the eGov Entry Test unless the degree is from an EU, EFTA or OECD country"))
tl("cs", "Human-Computer Interaction", "https://www.tlu.ee/en/dt/hci",
   ("7,000 يورو سنوياً لغير الأوروبيين (2027/28)", "€7,000 per year for non-EU students (2027/28)"),
   ("خلفية في علوم الحاسب أو التصميم أو العلوم السلوكية والاجتماعية؛ خطاب دافع وسيرة ذاتية", "Background in computer science, design or behavioural/social sciences; motivation letter and CV"))
tl("cs", "Digital Learning Games", "https://www.tlu.ee/en/erialad",
   ("7,000 يورو سنوياً لغير الأوروبيين (2027/28)", "€7,000 per year for non-EU students (2027/28)"),
   ("يجمع تصميم الألعاب وعلوم التربية وعلم النفس", "Combines game design, educational sciences and psychology"))
# Data Science (3)
tl("ds", "Artificial Intelligence for Sustainable Societies", "https://www.tlu.ee/en/dt/aiss",
   ("4,000 يورو سنوياً (2,000 يورو لكل فصل دراسي) لجميع الطلاب (2027/28)", "€4,000 per year (€2,000 per semester) for all students (2027/28)"),
   ("برنامج Erasmus Mundus مشترك؛ الدراسة في إستونيا والبرتغال وفنلندا", "Erasmus Mundus joint programme; study in Estonia, Portugal and Finland"),
   dl=("2 ديسمبر 2026 - 2 فبراير 2027", "2 December 2026 - 2 February 2027"))
ut("ds", "Actuarial and Financial Engineering", "actuarial-and-financial-engineering",
   ("7,200 يورو سنوياً لغير الأوروبيين", "€7,200 per year for non-EU students"),
   ("15 مقعداً؛ " + RED50[0], "15 places; " + RED50[1]))
ut("ds", "Quantitative Economics", "quantitative-economics", F4800,
   ("يتطلب 9 ساعات رياضيات و6 ساعات احتمالات وإحصاء؛ تحليل البيانات والاقتصاد القياسي؛ 4 من أعلى المقبولين يحصلون على إعفاء كامل لرسوم الفصل الأول",
    "Requires 9 credits of mathematics and 6 of probability and statistics; data analysis and econometrics; the 4 highest-ranked admitted students get a full fee waiver for the first semester"),
   deg=("Master of Arts", "Master of Arts"))
# Business (5)
ut("bus", "Innovation and Technology Management", "innovation-and-technology-management", F4800,
   ("30 مقعداً؛ يجمع الإدارة والابتكار والتحول الرقمي وتقنية المعلومات", "30 places; combines management, innovation, digitalisation and IT"),
   deg=("Master of Arts", "Master of Arts"))
tt("bus", "International Business in the Digital Era", "international-business-in-the-digital-era",
   ("5,000 يورو سنوياً لجميع الطلاب", "€5,000 per year for all students"),
   ("اختبار GRE العام مطلوب بدون حد أدنى للدرجة (مع إعفاء لحملة الشهادات من الاتحاد الأوروبي أو EFTA أو OECD)", "GRE General Test required with no minimum score (waived for degrees from EU, EFTA or OECD countries)"),
   deg=("Master of Arts", "Master of Arts"))
tt("bus", "Entrepreneurial Management MBA", "entrepreneurial-management-mba",
   ("8,400 يورو سنوياً (4,200 يورو لكل فصل دراسي) لجميع الطلاب", "€8,400 per year (€4,200 per semester) for all students"),
   ("تنبيه: دراسة بنظام الجلسات (3 أيام حضوراً كل شهر + جلسات عن بعد)، قد لا تناسب من يحتاج تأشيرة دراسة بدوام كامل - للتحقق",
    "Warning: session-based study (3 on-site days per month + online sessions), may not suit those needing a full-time study visa - to verify"),
   deg=("Master of Business Administration (MBA)", "Master of Business Administration (MBA)"))
tt("bus", "Technology Governance and Sustainability", "technology-governance-and-sustainability",
   ("3,800 يورو سنوياً لجميع الطلاب", "€3,800 per year for all students"),
   ("اختبار GRE العام مطلوب بدون حد أدنى للدرجة (مع إعفاء لحملة الشهادات من الاتحاد الأوروبي أو EFTA أو OECD)؛ مقابلة عن بعد", "GRE General Test required with no minimum score (waived for degrees from EU, EFTA or OECD countries); online interview"),
   deg=("Master of Arts in Social Sciences", "Master of Arts in Social Sciences"))
tl("bus", "Social Entrepreneurship", "https://www.tlu.ee/en/yti/social-entrepreneurship",
   ("5,000 يورو سنوياً لجميع الطلاب (2027/28)", "€5,000 per year for all students (2027/28)"),
   ("مقابلة قبول عن بعد؛ يركز على ريادة الأعمال الاجتماعية والابتكار في القطاع الصحي والاجتماعي", "Online admission interview; focuses on social entrepreneurship and innovation in the social and health sector"))
# Engineering (6)
ut("eng", "Robotics and Computer Engineering", "robotics-and-computer-engineering", F7200,
   ("20 مقعداً؛ " + RED50[0], "20 places; " + RED50[1]))
ut("eng", "Materials Science and Technology", "materials-science-and-technology", F7200,
   ("15 مقعداً", "15 places"))
tt("eng", "Industrial Engineering and Management", "industrial-engineering-and-management",
   ("6,000 يورو سنوياً لغير الأوروبيين", "€6,000 per year for non-EU students"),
   (TT_GRE[0] + "؛ برنامج يُدرّس في 4 جامعات بالسويد ولاتفيا وليتوانيا وإستونيا", TT_GRE[1] + "; programme run at 4 universities in Sweden, Latvia, Lithuania and Estonia"))
tt("eng", "Technology of Wood, Plastics and Textiles", "technology-of-wood-plastics-and-textiles", NP,
   (TT_GRE[0], TT_GRE[1]))
tt("eng", "Marine Engineering", "marine-engineering", NP,
   ("تنبيه: دراسة بنظام الجلسات؛ فصلا الخريف في كلية Kuressaare بجزيرة ساريما وفصل الربيع في تالين",
    "Warning: session-based study; the autumn semesters at Kuressaare College on Saaremaa island and the spring semester in Tallinn"),
   city="Kuressaare")
tt("eng", "Maritime Digital Solutions", "maritime-digital-solutions",
   ("6,000 يورو سنوياً لغير الأوروبيين", "€6,000 per year for non-EU students"),
   ("يتطلب ماجستير أو بكالوريوس 240 ساعة، أو بكالوريوس 180 ساعة مع 60 ساعة إضافية في مجال بحري أو تقني أو إداري", "Requires a master's or a 240-credit bachelor's, or a 180-credit bachelor's plus 60 extra credits in maritime, IT, management or a related field"),
   dur=MSC1)
# Public Health (3)
tt("ph", "Digital Health", "digital-health", NP,
   ("تنبيه: أقرب للصحة الرقمية والتقنية منه للصحة العامة؛ " + TT_GRE[0] + " (Verbal 145، Quant 150، Writing 3.0)",
    "Warning: closer to digital health technology than public health; " + TT_GRE[1] + " (Verbal 145, Quant 150, Writing 3.0)"))
ut("ph", "Clinical Nutrition", "medicine", NP,
   ("تنبيه: تغذية سريرية وليست صحة عامة بالمعنى الدقيق؛ برامج كلية الطب بالإنجليزية برسوم لجميع الطلاب (المبلغ للتحقق)",
    "Warning: clinical nutrition, not public health in the strict sense; English-taught Faculty of Medicine programmes are fee-based for all students (amount to verify)"))
ut("ph", "Clinical Pharmacy", "medicine", NP,
   ("تنبيه: صيدلة سريرية وليست صحة عامة؛ دراسة بنظام الكتل (block mode)؛ برامج كلية الطب بالإنجليزية برسوم لجميع الطلاب (المبلغ للتحقق)",
    "Warning: clinical pharmacy, not public health; block-mode study; English-taught Faculty of Medicine programmes are fee-based for all students (amount to verify)"),
   dur=("سنة ونصف (90 ساعة معتمدة)", "1.5 years (90 credits)"))

hdr = list(csv.reader(open("germany.csv", encoding="utf-8-sig")))[0]
FIELDAR = {"cs": "علوم الحاسب", "ds": "علوم البيانات", "bus": "إدارة الأعمال", "eng": "الهندسة", "ph": "الصحة العامة"}
with open("estonia.csv", "w", newline="", encoding="utf-8-sig") as f:
    w = csv.writer(f); w.writerow(hdr)
    for i, r in enumerate(R, 1):
        field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, house, src = r
        w.writerow([i, "إستونيا", FIELDAR[field], name, uni, CITY[city], t(deg), t(dur), t(fee), t(adm), t(dl), t(en),
                    t(other), t(how), t(LIVING), t(house), src, "2026-11-14", t(STATUS)])
TR["إستونيا"] = "Estonia"
json.dump(TR, open("estonia_translations.json", "w", encoding="utf-8"), ensure_ascii=False, indent=1)
json.dump([(r[1], r[2], r[13]) for r in R], open("estonia_links.json", "w", encoding="utf-8"), ensure_ascii=False)
from collections import Counter
print(len(R), Counter(r[0] for r in R))
