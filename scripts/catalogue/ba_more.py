# More English-taught bachelor's for Czechia, Lithuania, Latvia and Poland, added 2026-11-19 (official pages only).
# Append-only per country (helpers.append_ba): re-run after czechia.py, lithuania.py, latvia.py or poland_ba.py.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, NP
from helpers import append_ba

REVIEWED = "2026-11-19"
NOTE_R = ("الصفحة الرسمية: الشروط والرسوم", "Official page: requirements and fees")
NOTE_A = ("صفحة التقديم الرسمية", "Official application page")
BSC = ("بكالوريوس (BSc)", "Bachelor's degree (BSc)")
BA_ = ("بكالوريوس (BA)", "Bachelor's degree (BA)")
Y3 = ("3 سنوات (180 ساعة معتمدة)", "3 years (180 credits)")
Y4 = ("4 سنوات (240 ساعة معتمدة)", "4 years (240 credits)")
B = {}


def add(cc, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply=None):
    B.setdefault(cc, []).append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en,
                                  other=other, how=how, living=NP, house=NP, src=src, req=src, req_note=NOTE_R,
                                  apply=apply or src, apply_note=NOTE_A))


# ---------------- Czechia
add("cz", "bus", "International Business (IBB)", "Prague University of Economics and Business (VŠE), Faculty of International Relations", "Prague", BA_,
    ("3 سنوات", "3 years"),
    ("6,000 يورو سنوياً للطلاب الذين يبدؤون في سبتمبر 2027 (3,000 يورو كل فصل)", "€6,000 a year for students starting in September 2027 (€3,000 per semester)"),
    ("رسوم طلب 100 يورو", "€100 application fee"),
    ("التقديم من 1 نوفمبر 2026 حتى 28 فبراير 2027، والمقابلة أونلاين في مارس 2027؛ تُفتح جولة ثانية إذا لم تكتمل المقاعد", "Applications 1 November 2026 - 28 February 2027, online interview in March 2027; a second round opens if places remain"),
    ("لا تُطلب شهادة؛ يُنصح بمستوى B2 والإنجليزية تُختبر في المقابلة", "No certificate required; B2 recommended, and English is tested in the interview"),
    ("مقابلة قبول أونلاين من جزأين (50 نقطة لكل جزء، والحد الأدنى 25 في كل جزء)، مع استيفاء الشروط الأكاديمية والرسمية", "An online admission interview in two parts (50 points each, at least 25 in each), plus the academic and formal conditions"),
    ("التقديم أونلاين على بوابة جامعة VŠE", "Apply online on the VŠE portal"),
    "https://ibb.vse.cz/admission-process/tuition-fee/", "https://ibb.vse.cz/?p=1518")
MU_FEE = ("3,500 يورو سنوياً (1,750 يورو كل فصل) حسب صفحة الكلية للطلاب من ربيع 2027", "€3,500 a year (€1,750 per semester) per the faculty page for students from spring 2027")
MU_DL = ("لدفعة خريف 2027: من 1 نوفمبر 2026 حتى 15 مايو 2027؛ ومن يحتاج تأشيرة يقدّم قبل ذلك بشهر على الأقل", "Autumn 2027 intake: 1 November 2026 - 15 May 2027; visa-requiring applicants should apply at least a month earlier")
MU_EN = ("مستوى B2، مثلاً IELTS Academic من 5.5 إلى 6.5 أو Duolingo 105، ولا يزيد عمر الشهادة عن سنتين", "B2, e.g. IELTS Academic 5.5-6.5 or Duolingo 105; the test must be under two years old")
MU_HOW = ("التقديم أونلاين على نظام جامعة ماساريك، ورسوم الطلب 800 كرونة تشيكية", "Apply online in the Masaryk University system; application fee CZK 800")
MU_SRC = "https://www.fss.muni.cz/en/faculty-of-social-studies/admissions/bachelors-studies"
add("cz", "pol", "International Relations and European Politics", "Masaryk University, Faculty of Social Studies", "Brno", BA_, Y3, MU_FEE,
    ("رسوم طلب 800 كرونة تشيكية", "CZK 800 application fee"), MU_DL, MU_EN,
    ("المرحلة الأولى: إثبات الإنجليزية والجواز وكشف درجات الثانوية وخطاب تعريفي (30 من 40 للتأهل)، ثم مقابلة أونلاين (30 من 40 للقبول)", "Round 1: proof of English, passport, school transcript and a cover letter (30 of 40 to go on), then an online interview (30 of 40 to be admitted)"),
    MU_HOW, MU_SRC)
add("cz", "pol", "Global Challenges: Society, Politics, Environment", "Masaryk University, Faculty of Social Studies", "Brno", BA_, Y3, MU_FEE,
    ("رسوم طلب 800 كرونة تشيكية، ورسوم اختبار GAP حوالي 38 يورو", "CZK 800 application fee, plus about €38 for the GAP test"), MU_DL, MU_EN,
    ("شهادة الثانوية، وإثبات الإنجليزية، واختبار GAP أونلاين (المئين 30 على الأقل) في مواعيد محددة بين أكتوبر 2026 ومايو 2027", "School certificate, proof of English and the online GAP test (at least the 30th percentile) on set dates between October 2026 and May 2027"),
    MU_HOW, MU_SRC)

# ---------------- Lithuania
add("lt", "cs", "Applied Artificial Intelligence", "Vilnius Gediminas Technical University (VILNIUS TECH)", "Vilnius", BSC,
    ("4 سنوات (8 فصول) مع تدريب عملي", "4 years (8 semesters) including an internship"),
    ("4,950 يورو سنوياً لغير الأوروبيين", "€4,950 a year for non-EU students"),
    ("رسوم طلب 100 يورو؛ بعد خطاب القبول المشروط تدفع رسوم السنة الأولى ورسوم التسجيل", "€100 application fee; after the conditional offer you pay the first year's tuition and the registration fee"),
    ("آخر موعد لغير الأوروبيين 15 يونيو (منح الجامعة للسنة الأولى حتى 20 أبريل)، والدراسة تبدأ 1 سبتمبر؛ مواعيد 2027 للتحقق", "Non-EU deadline 15 June (university scholarships for first-year students by 20 April); studies start 1 September; 2027 dates to verify"),
    ("مستوى B2 حسب شروط الجامعة (الدرجات المقبولة في صفحة الشروط)", "B2 per the university's rules (accepted scores on the requirements page)"),
    ("60% على الأقل من الدرجة القصوى في الرياضيات والفيزياء أو مادة علمية أو اجتماعية والإنجليزية في شهادة الثانوية", "At least 60% of the maximum in mathematics, physics or another science/social science subject, and English, in your school certificate"),
    ("التقديم أونلاين على apply.vilniustech.lt", "Apply online at apply.vilniustech.lt"),
    "https://vilniustech.lt/for-international-students/programmes-in-english-20262027/undergraduate-studies-/applied-artificial-intelligence/296355")
add("lt", "cs", "Informatics", "Kaunas University of Technology (KTU)", "Kaunas", BSC, Y4,
    ("4,108 يورو سنوياً (نفس الرسوم لغير الأوروبيين)، مع إعفاءات جزئية للمتفوقين", "€4,108 a year (the same for non-EU students), with partial fee waivers for top applicants"),
    NP,
    ("لدفعة 2026/2027 كان التقديم من 15 أكتوبر 2025 حتى 1 يونيو 2026، والدراسة تبدأ 1 سبتمبر؛ مواعيد 2027 للتحقق", "For 2026/2027 applications ran 15 October 2025 - 1 June 2026, studies start 1 September; 2027 dates to verify"),
    ("IELTS 5.5 أو TOEFL 75 أو مستوى B2", "IELTS 5.5, TOEFL 75 or B2"),
    ("شهادة ثانوية لم يمر عليها أكثر من 3 سنوات، وأكثر من 60% في كل مادة من مواد الدخول؛ الوثائق تحتاج أبوستيل أو تصديقاً من الخارجية", "A school certificate no more than 3 years old and over 60% in each entry subject; documents need an apostille or foreign-ministry legalisation"),
    ("التقديم أونلاين على بوابة KTU", "Apply online on the KTU portal"),
    "https://studyin.lt/programs/bsc-informatics-3/", "https://admissions.ktu.edu/bachelor/")
VMU_DL = ("في السنوات السابقة كان آخر موعد 1 مايو والدراسة تبدأ أواخر أغسطس؛ مواعيد 2027/2028 للتحقق", "In past years the deadline was 1 May and studies started in late August; 2027/2028 dates to verify")
VMU_HOW = ("التقديم أونلاين فقط على vytautasmagnus.dreamapply.com (الوثائق المرسلة بالبريد الإلكتروني لا تُقيَّم)", "Apply online only at vytautasmagnus.dreamapply.com (documents sent by email are not assessed)")
VMU_ADM = ("رسوم طلب 150 يورو غير مستردة، تُدفع لغير الأوروبيين عبر Flywire", "€150 non-refundable application fee, paid by non-EU applicants through Flywire")
add("lt", "bus", "Business Administration", "Vytautas Magnus University (VMU)", "Kaunas", BA_, ("3 سنوات (للتحقق)", "3 years (to verify)"),
    ("3,300 يورو سنوياً حسب صفحة البرنامج (رسوم غير الأوروبيين قد تختلف قليلاً، للتحقق)", "€3,300 a year per the programme page (non-EU fees may differ slightly, to verify)"),
    VMU_ADM, VMU_DL, ("مستوى B2", "B2"), NP, VMU_HOW, "https://vytautasmagnus.dreamapply.com/courses/course/80")
add("lt", "pol", "Political Studies: World Politics and Economy", "Vytautas Magnus University (VMU)", "Kaunas", BA_, Y4,
    ("3,176 يورو سنوياً", "€3,176 a year"), VMU_ADM, VMU_DL, ("مستوى B2", "B2"), NP, VMU_HOW,
    "https://vytautasmagnus.dreamapply.com/courses/course/158")

# ---------------- Latvia
add("lv", "eng", "Engineering Technology, Mechanics and Mechanical Engineering", "Riga Technical University (RTU)", "Riga", BSC,
    ("3 سنوات (181.5 ساعة معتمدة)", "3 years (181.5 credits)"),
    ("4,030 يورو سنوياً", "€4,030 a year"),
    ("رسوم طلب 165 يورو، وعربون 250 يورو", "€165 application fee and a €250 deposit"),
    ("دفعتان: سبتمبر ويناير؛ مواعيد دفعة سبتمبر 2027 لم تُنشر بعد في صفحة البرنامج", "Two intakes, September and January; September 2027 dates are not yet on the programme page"),
    ("IELTS 5.5 أو TOEFL iBT 72 أو PTE 59 أو كامبريدج B2 First، أو ما يثبت أن دراستك السابقة كلها بالإنجليزية", "IELTS 5.5, TOEFL iBT 72, PTE 59 or Cambridge B2 First, or proof that all your previous education was in English"),
    ("شهادة ثانوية بنتائج جيدة خاصة في الرياضيات والفيزياء، وتوصية واحدة على الأقل، وخطاب دافع، ومقابلة أونلاين، واختبار رياضيات أونلاين (10 أسئلة)", "A school certificate with good results, especially in mathematics and physics, at least one reference, a motivation letter, an online interview and a short online maths test (10 questions)"),
    ("التقديم أونلاين على apply.rtu.lv", "Apply online at apply.rtu.lv"), "https://apply.rtu.lv/courses/course/9")
add("lv", "eng", "Biotechnology and Bioengineering (with Riga Technical University)", "University of Latvia", "Riga", BSC, Y3,
    ("4,200 يورو سنوياً", "€4,200 a year"),
    ("رسوم طلب 170 يورو غير مستردة، وعربون 500 يورو لغير الأوروبيين يُدفع مع رسوم السنة كاملة عند الوصول", "€170 non-refundable application fee; non-EU students pay a €500 deposit together with the full year's fee on arrival"),
    ("غير منشور في المصدر في صفحة البرنامج؛ راجع بوابة التقديم", "Not published on the programme page; check the application portal"),
    NP, ("برنامج مشترك بين جامعة لاتفيا وجامعة ريغا التقنية", "A joint programme of the University of Latvia and Riga Technical University"),
    ("التقديم أونلاين على apply.lu.lv", "Apply online at apply.lu.lv"), "https://apply.lu.lv/courses/course/127")

# ---------------- Poland
UW_FEE = ("غير منشور في المصدر في صفحة البرنامج؛ الرسوم في جدول الجامعة المنفصل (للتحقق)", "Not published on the programme page; fees are in the university's separate table (to verify)")
UW_DL = ("لدفعة 2026/2027 كانت مراحل التسجيل في IRK: من 3 إلى 23 فبراير، ومن 10 أبريل إلى 11 مايو، ومن 9 يونيو إلى 9 يوليو 2026؛ مواعيد 2027/2028 لم تُنشر بعد",
         "For 2026/2027 the IRK registration phases were 3-23 February, 10 April-11 May and 9 June-9 July 2026; 2027/2028 dates are not yet published")
UW_EN = ("مستوى B2 بشهادة معتمدة", "B2 with an accepted certificate")
UW_HOW = ("التسجيل على irk.uw.edu.pl ودفع رسوم الطلب، ثم المشاركة في التأهيل", "Register at irk.uw.edu.pl, pay the application fee, then take part in the qualification")
UW_OTHER = ("لحملة الشهادات من خارج الاتحاد الأوروبي وOECD: تقييم شهادة الثانوية ثم امتحان قبول، والحد الأدنى 50 نقطة في كل مرحلة", "Holders of diplomas from outside the EU/EFTA/OECD: school-certificate assessment, then an entrance exam, with at least 50 points at each stage")
add("pl", "pol", "Undergraduate Programme in International Relations", "University of Warsaw, Faculty of Political Science and International Studies", "Warsaw", BA_,
    ("3 سنوات", "3 years"), UW_FEE, NP, UW_DL, UW_EN, UW_OTHER, UW_HOW, "https://irk.uw.edu.pl/en-gb/offer/PELNE2026/programme/S1-SM-ANG/")
add("pl", "pol", "European Politics and Economics", "University of Warsaw, Faculty of Political Science and International Studies (with the Faculty of Economic Sciences)", "Warsaw", BA_,
    ("3 سنوات", "3 years"), UW_FEE, NP, UW_DL, UW_EN,
    (UW_OTHER[0] + "؛ امتحان القبول للأجانب كان من 15 إلى 17 يوليو 2026", UW_OTHER[1] + "; the entrance exam for foreign candidates was on 15-17 July 2026"),
    UW_HOW, "https://irk.uw.edu.pl/en-gb/offer/PELNE2026/programme/S1-PEE/")

C = {"cz": ("التشيك", "czechia"), "lt": ("ليتوانيا", "lithuania"), "lv": ("لاتفيا", "latvia"), "pl": ("بولندا", "poland")}

if __name__ == "__main__":
    for cc, rows in B.items():
        append_ba(C[cc][0], C[cc][1], rows, REVIEWED)
    print("ba_more:", {cc: len(r) for cc, r in B.items()})
