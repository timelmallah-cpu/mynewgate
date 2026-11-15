# Lithuania: English-taught bachelor's (incl. Medicine) and master's at public universities (non-EU fees, 2026/2027).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, MSC2, MED6

BA, MA = [], []


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                 living=NP, house=NP, src=src, req=src, req_note=("الصفحة الرسمية", "Official page"), apply=apply,
                 apply_note=("بوابة التقديم الرسمية", "Official application portal")))


Y = lambda v: (f"{v} يورو سنوياً لغير الأوروبيين (2026/2027)", f"€{v} per year for non-EU students (2026/2027)")

# ---------- Vilnius University (VU) ----------
VU = "Vilnius University"
VU_FEES = "https://www.vu.lt/site_files/Vertimai/EN_Translation_U%C5%BEsienio_student%C5%B3_pri%C4%97mimas_20262027_kainos.pdf"
VU_DL = ("1 مايو لغير الأوروبيين (1 يوليو لمن يدخل ليتوانيا بدون تأشيرة)؛ والتقديم لعام 2027/2028 يفتح 1 ديسمبر 2026", "1 May for non-EU applicants (1 July for visa-free nationals); applications for 2027/2028 open on 1 December 2026")
VU_HOW = ("بوابة apply.vu.lt", "apply.vu.lt portal")
VU_GAP = ("لغير الأوروبيين: يجب ألا تزيد المدة منذ آخر شهادة عن 5 سنوات", "For non-EU applicants: no more than five years since your last qualification")
VU_APPLY = "https://apply.vu.lt/"
for f, n, fee in [("cs", "Software Engineering", "4,560"), ("cs", "Information Systems and Cyber Security", "5,000"), ("ds", "Business Data Analytics", "4,500"), ("bus", "International Business", "4,350")]:
    add(BA, f, n, VU, "Vilnius", ("بكالوريوس", "Bachelor's degree"), NP, Y(fee), NP, VU_DL, NP, VU_GAP, VU_HOW, VU_FEES, VU_APPLY)
add(BA, "med", "Medicine (integrated studies)", VU, "Vilnius", ("دراسة متكاملة (بكالوريوس + ماجستير) في الطب", "Integrated studies (bachelor + master) in Medicine"), MED6, Y("14,100"), NP, VU_DL, NP,
    ("لا توجد مقاعد ممولة من الدولة في الطب؛ " + VU_GAP[0], "No state-funded places in Medicine; " + VU_GAP[1]), VU_HOW, VU_FEES, VU_APPLY)
for f, n, fee in [("ds", "Data Science", "6,000"), ("cs", "Software Engineering", "6,000"), ("bus", "Global Business and Economics", "5,460"), ("bus", "International Business Management", "5,500")]:
    add(MA, f, n, VU, "Vilnius", ("ماجستير", "Master's degree"), NP, Y(fee), NP, VU_DL, NP,
        ("لغير الأوروبيين: يجب ألا تزيد المدة منذ البكالوريوس عن 5 سنوات؛ وتوجد 5 إعفاءات كاملة من الرسوم لغير الأوروبيين في ماجستير الإنجليزية", "For non-EU applicants: no more than five years since the bachelor's; five full tuition waivers for non-EU students on English-taught master's"),
        VU_HOW, VU_FEES, VU_APPLY)

# ---------- Kaunas University of Technology (KTU) ----------
KTU = "Kaunas University of Technology"
KTU_DL = ("حتى 1 يونيو (كانت فترة التقديم لعام 2026/2027 من 15 أكتوبر 2025 إلى 1 يونيو 2026)", "Until 1 June (the 2026/2027 window ran from 15 October 2025 to 1 June 2026)")
KTU_ADM = ("رسوم طلب غير مستردة؛ المبلغ غير منشور في المصدر", "Non-refundable application fee; amount not published in the source")
KTU_HOW = ("بوابة apply.ktu.edu", "apply.ktu.edu portal")
KTU_OTHER = ("كل المتقدمين الدوليين يدخلون تلقائياً في منح جزئية أو كاملة للرسوم حسب التفوق", "All international applicants are automatically considered for partial or full tuition waivers based on merit")
KTU_EN_BA = ("B2 أو IELTS 5.5 (لا يقل أي جزء عن 5.5) أو TOEFL iBT 75 خلال آخر سنتين؛ ويمكن أداء اختبار KTU المجاني أونلاين", "B2, IELTS 5.5 (no part below 5.5) or TOEFL iBT 75 within the last two years; a free online KTU test is possible")
add(BA, "cs", "Artificial Intelligence", KTU, "Kaunas", ("بكالوريوس", "Bachelor's degree"), NP, Y("4,201"), KTU_ADM, KTU_DL, KTU_EN_BA, KTU_OTHER, KTU_HOW, "https://admissions.ktu.edu/bachelor/", "https://apply.ktu.edu/")
add(BA, "eng", "Electronics and Electrical Engineering", KTU, "Kaunas", ("بكالوريوس", "Bachelor's degree"), NP, Y("4,201"), KTU_ADM, KTU_DL, KTU_EN_BA, KTU_OTHER, KTU_HOW, "https://admissions.ktu.edu/bachelor/", "https://apply.ktu.edu/")
add(MA, "eng", "Mechatronics", KTU, "Kaunas", ("ماجستير", "Master's degree"), MSC2,
    ("5,641 يورو سنوياً (جدول 2025/2026 على موقع الجامعة؛ رسوم 2026/2027 للتحقق)", "€5,641 per year (2025/2026 table on the university site; 2026/2027 fee to verify)"), KTU_ADM, KTU_DL,
    ("C1 أو IELTS 6 (لا يقل أي جزء عن 5.5) أو TOEFL iBT 85 خلال آخر سنتين", "C1, IELTS 6 (no part below 5.5) or TOEFL iBT 85 within the last two years"), KTU_OTHER, KTU_HOW, "https://admissions.ktu.edu/master/", "https://apply.ktu.edu/")

# ---------- Lithuanian University of Health Sciences (LSMU) ----------
LSMU = "Lithuanian University of Health Sciences (LSMU)"
LSMU_HOW = ("نظام التقديم الأونلاين للجامعة", "University online application system")
add(BA, "med", "Medicine", LSMU, "Kaunas", ("ماجستير العلوم الصحية - طبيب (برنامج متكامل)", "MSc in Health Sciences, Medical Doctor (integrated)"), MED6,
    ("12,800 يورو سنوياً للسنوات 1-3 و13,300 يورو للسنوات 4-6 (2026/2027)", "€12,800 per year for years I-III and €13,300 for years IV-VI (2026/2027)"),
    ("رسوم تسجيل 250 يورو بعد القبول، ودفعة مقدمة لغير الأوروبيين تساوي نصف الرسوم السنوية", "€250 registration fee after acceptance, and a non-EU deposit equal to half the yearly fee"),
    ("30 يوليو (آخر موعد لدفعة 2026)، مع اختبار قبول أونلاين؛ موعد 2027 للتحقق", "30 July (the 2026 intake deadline), with an online entrance test; 2027 date to verify"), NP, NP, LSMU_HOW, "https://lsmu.lt/en/studies/medicine/", "https://lsmu.lt/en/admission/admission-process/")
add(MA, "ph", "Lifestyle Medicine", LSMU, "Kaunas", ("ماجستير العلوم الصحية", "Master in Health Sciences"), MSC2, ("5,641 يورو سنوياً (2026/2027)", "€5,641 per year (2026/2027)"),
    ("رسوم تسجيل 250 يورو بعد القبول، ودفعة مقدمة لغير الأوروبيين تساوي الرسوم السنوية كاملة", "€250 registration fee after acceptance, and a non-EU deposit equal to the full yearly fee"), NP, NP, NP, LSMU_HOW,
    "https://lsmu.lt/en/admission/tuition-fees/", "https://lsmu.lt/en/admission/admission-process/")

# ---------- LSMU: Odontology and Pharmacy (integrated studies in English), added 2026-11-15 ----------
LSMU = "Lithuanian University of Health Sciences (LSMU)"
LSMU_ADM = ("رسوم طلب 150 يورو ورسوم تسجيل 250 يورو (غير مستردة)؛ عربون لغير الأوروبيين = نصف رسوم السنة", "€150 application fee and €250 registration fee (non-refundable); non-EU deposit = half the yearly fee")
LSMU_OTHER = ("امتحان قبول إلزامي", "Compulsory entrance exam")
LSMU_HOW = ("التقديم الإلكتروني على بوابة الجامعة الدولية", "Online on the university's international application portal")
add(BA, "dent", "Odontology (integrated studies)", LSMU, "Kaunas", ("دراسة متكاملة: ماجستير في طب الأسنان", "Integrated studies: Master's in Odontology"), ("5 سنوات (300 ساعة معتمدة)", "5 years (300 credits)"),
    ("13,600 يورو سنوياً للسنوات 1-3، و14,100 للسنتين 4-5 (2026/2027)", "€13,600 per year for years 1-3 and €14,100 for years 4-5 (2026/2027)"), LSMU_ADM, NP, NP, LSMU_OTHER, LSMU_HOW,
    "https://lsmu.lt/en/admission/integrated-studies/odontology/", "https://lsmu.lt/en/admission/admission-process/")
add(BA, "pharm", "Pharmacy (integrated studies)", LSMU, "Kaunas", ("دراسة متكاملة: ماجستير في علوم الصحة، صيدلي", "Integrated studies: MSc in Health Sciences, Pharmacist"), ("5 سنوات (300 ساعة معتمدة)", "5 years (300 credits)"),
    ("5,600 يورو سنوياً للسنوات 1-3، و5,700 للسنتين 4-5 (2026/2027)", "€5,600 per year for years 1-3 and €5,700 for years 4-5 (2026/2027)"), LSMU_ADM, NP, ("إجادة الإنجليزية مطلوبة", "English proficiency required"), LSMU_OTHER, LSMU_HOW,
    "https://lsmu.lt/en/admission/integrated-studies/pharmacy/", "https://lsmu.lt/en/admission/admission-process/")

write("ليتوانيا", "Lithuania", "lithuania", BA, level="bachelor")
write("ليتوانيا", "Lithuania", "lithuania", MA, level="master")
