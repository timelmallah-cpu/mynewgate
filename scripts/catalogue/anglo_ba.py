# English-taught bachelor's in Canada, Australia and New Zealand, added 2026-11-20 (official fee pages only).
# Append-only (helpers.append_ba). Euro figures: ECB reference rate of 17 Nov 2026 (CAD 1.5704, AUD 1.6316, NZD 1.9985).
# Canada: Memorial University undergraduate fee per credit hour for international students CAD 750 (mun.ca finance page;
#   2026/27 per-credit rates frozen at 2025/26). Australia: Flinders 2027 international commencing fee schedule (period not
#   stated, written as yearly "to verify"). New Zealand: Waikato "2027 Estimated Fees" (one full-time year) and AUT fees per
#   120 points (one full-time year; most rows carry no year label).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, NP
from helpers import append_ba

REVIEWED = "2026-11-20"
NOTE_R = ("الصفحة الرسمية: الرسوم", "Official page: fees")
NOTE_A = ("صفحة التقديم الرسمية", "Official application page")
B = {}
EN = ("شهادة إنجليزية حسب شروط الجامعة (IELTS أو ما يعادله؛ الحد الأدنى غير منشور هنا)", "An English certificate per the university (IELTS or equivalent; minimum not published here)")
ADM = ("شهادة الثانوية حسب شروط الجامعة لبلدك؛ الثانوية العامة وحدها قد لا تكفي في بعض الجامعات (للتحقق مع الجامعة)",
       "A school-leaving certificate per the university's rules for your country; some universities may not accept the certificate alone (check with the university)")


def add(cc, field, name, uni, city, deg, dur, fee, dl, other, how, src, apply):
    B.setdefault(cc, []).append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=ADM, dl=dl, en=EN,
                                  other=other, how=how, living=NP, house=NP, src=src, req=src, req_note=NOTE_R,
                                  apply=apply, apply_note=NOTE_A))


# ---------------- Canada: Memorial University of Newfoundland (St. John's)
MUN_SRC = "https://www.mun.ca/finance/tuition-fees-and-charges/tuition-fees/undergraduate-students/"
MUN_APPLY = "https://www.mun.ca/undergrad/"
MUN_FEE = ("حوالي 14,330 يورو في السنة (750 دولاراً كندياً لكل ساعة معتمدة للطلاب الدوليين، أي 22,500 دولار كندي لـ 30 ساعة في السنة الدراسية العادية؛ أسعار 2026/2027 مجمدة عند أسعار 2025/2026؛ بدون الرسوم الإضافية والتأمين؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
           "About €14,330 a year (CAD 750 per credit hour for international students, i.e. CAD 22,500 for 30 credit hours in a normal year; 2026/27 rates frozen at 2025/26; excluding ancillary fees and insurance; ECB rate of 17 November 2026)")
MUN_DL = ("غير منشور هنا؛ الدراسة تبدأ عادة في سبتمبر، وقدّم مبكراً لترك وقت لتصريح الدراسة (خطاب الإقليم PAL مطلوب غالباً لطلاب البكالوريوس)",
          "Not published here; study usually starts in September, so apply early to leave time for the study permit (bachelor's students usually need a provincial attestation letter, PAL)")
MUN_HOW = ("التقديم أونلاين على بوابة القبول للبكالوريوس في الجامعة", "Apply online through the university's undergraduate admissions portal")
Y4 = ("4 سنوات عادةً (120 ساعة معتمدة)", "Usually 4 years (120 credit hours)")
for field, name, deg, dur, other in [
    ("cs", "Bachelor of Science (Computer Science)", ("بكالوريوس العلوم (BSc)", "Bachelor of Science (BSc)"), Y4, ("علوم الحاسب", "Computer science")),
    ("eng", "Bachelor of Engineering", ("بكالوريوس الهندسة (BEng)", "Bachelor of Engineering (BEng)"), NP, ("الهندسة مع فترات تدريب عملي (co-op)", "Engineering with co-op work terms")),
    ("bus", "Bachelor of Business Administration", ("بكالوريوس إدارة الأعمال (BBA)", "Bachelor of Business Administration (BBA)"), Y4, ("إدارة الأعمال", "Business administration")),
    ("sci", "Bachelor of Science (Biology)", ("بكالوريوس العلوم (BSc)", "Bachelor of Science (BSc)"), Y4, ("علم الأحياء", "Biology")),
    ("psych", "Bachelor of Science (Psychology)", ("بكالوريوس العلوم (BSc)", "Bachelor of Science (BSc)"), Y4, ("علم النفس", "Psychology")),
    ("pol", "Bachelor of Arts (Political Science)", ("بكالوريوس الآداب (BA)", "Bachelor of Arts (BA)"), Y4, ("العلوم السياسية", "Political science")),
]:
    add("ca", field, name, "Memorial University of Newfoundland", "St. John's", deg, dur, MUN_FEE, MUN_DL, other, MUN_HOW, MUN_SRC, MUN_APPLY)

# ---------------- Australia: Flinders University (Adelaide)
FL_SRC = "https://www.flinders.edu.au/content/dam/documents/study/international/2027-international-commencing-tuition-fee-schedule.pdf"
FL_APPLY = "https://www.flinders.edu.au/international"
FL_DL = ("غير منشور في المصدر؛ الدراسة تبدأ عادة في فبراير ويوليو، وقدّم مبكراً لترك وقت لتأشيرة الطالب", "Not published in the source; study usually starts in February and July, so apply early to leave time for the student visa")
FL_HOW = ("التقديم أونلاين للطلاب الدوليين عبر موقع الجامعة؛ بعد القبول تدفع عربوناً وتحصل على تأكيد التسجيل CoE لطلب التأشيرة", "Apply online as an international student; after admission you pay a deposit and receive the CoE for the visa")
def fl_fee(aud):
    eur = round(aud / 1.6316 / 10) * 10
    return (f"حوالي {eur:,} يورو في السنة ({aud:,} دولار أسترالي حسب جدول رسوم الطلاب الدوليين الجدد لعام 2027؛ الجدول لا يذكر صراحة أن المبلغ سنوي، للتحقق؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
            f"About €{eur:,} a year (AUD {aud:,} in the 2027 international commencing fee schedule; the schedule does not say explicitly that it is annual, to verify; ECB rate of 17 November 2026)")
for field, name, aud, other in [
    ("cs", "Bachelor of Computer Science", 45700, ("علوم الحاسب", "Computer science")),
    ("cs", "Bachelor of Computer Science (Artificial Intelligence)", 45700, ("الذكاء الاصطناعي", "Artificial intelligence")),
    ("cs", "Bachelor of Information Technology (Network and Cybersecurity Systems)", 45700, ("الشبكات والأمن السيبراني", "Networks and cybersecurity")),
    ("ds", "Bachelor of Information Technology (Data Analytics)", 45700, ("تحليل البيانات", "Data analytics")),
    ("eng", "Bachelor of Engineering (Software) (Honours)", 49600, ("هندسة البرمجيات", "Software engineering")),
    ("eng", "Bachelor of Engineering (Civil) (Honours)", 49600, ("الهندسة المدنية", "Civil engineering")),
    ("eng", "Bachelor of Engineering (Mechanical) (Honours)", 49600, ("الهندسة الميكانيكية", "Mechanical engineering")),
    ("eng", "Bachelor of Engineering (Robotics) (Honours)", 49600, ("هندسة الروبوتات", "Robotics engineering")),
    ("nurs", "Bachelor of Nursing (Preregistration)", 46500, ("التمريض (قبل التسجيل المهني)", "Nursing (pre-registration)")),
    ("psych", "Bachelor of Psychological Science", 41000, ("علم النفس", "Psychological science")),
    ("pol", "Bachelor of International Relations and Political Science", 38100, ("العلاقات الدولية والعلوم السياسية", "International relations and political science")),
    ("bus", "Bachelor of Commerce", 40900, ("التجارة", "Commerce")),
    ("bus", "Bachelor of Business Analytics", 40900, ("تحليلات الأعمال", "Business analytics")),
    ("physio", "Bachelor of Nutrition and Dietetics", 48300, ("التغذية والحميات", "Nutrition and dietetics")),
    ("ph", "Bachelor of Public Health", 39200, ("الصحة العامة", "Public health")),
    ("sci", "Bachelor of Science (Marine Biology)", 45600, ("علم الأحياء البحرية", "Marine biology")),
]:
    add("au", field, name, "Flinders University", "Adelaide", (name, name), NP, fl_fee(aud), FL_DL, other, FL_HOW, FL_SRC, FL_APPLY)

# ---------------- New Zealand: University of Waikato (Hamilton) and AUT (Auckland)
NZ_DL = ("الجامعة تعالج طلبات الطلاب الدوليين باستمرار؛ الدراسة تبدأ عادة في مارس ويوليو، وقدّم مبكراً لترك وقت للتأشيرة",
         "The university processes international applications on an ongoing basis; study usually starts in March and July, so apply early to leave time for the visa")
NZ_HOW = ("التقديم أونلاين على موقع الجامعة؛ بعد عرض المكان تقدّم طلب تأشيرة الطالب", "Apply online through the university; after the offer of place you apply for the student visa")
WK_SRC = "https://www.waikato.ac.nz/int/study/fees-costs/international-tuition-costs/"
WK_APPLY = "https://www.waikato.ac.nz/int/about/calendar/admission/enrolment"
def nz_fee(nzd, what_ar, what_en):
    eur = round(nzd / 1.9985 / 10) * 10
    return (f"حوالي {eur:,} يورو في السنة ({nzd:,.2f} دولار نيوزيلندي {what_ar}؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)".replace(".00 ", " "),
            f"About €{eur:,} a year (NZD {nzd:,.2f} {what_en}; ECB rate of 17 November 2026)".replace(".00 ", " "))
Y3 = ("3 سنوات عادةً (360 نقطة)", "Usually 3 years (360 points)")
WK = ("رسوم تقديرية لسنة دراسية كاملة في 2027، تُحسب حسب المواد", "estimated for one full-time year in 2027, charged per paper")
for field, name, nzd, dur, other in [
    ("cs", "Bachelor of Computer Science (BCompSc)", 44006, Y3, ("علوم الحاسب", "Computer science")),
    ("eng", "Bachelor of Engineering with Honours (BE(Hons))", 50762, ("4 سنوات عادةً (480 نقطة)", "Usually 4 years (480 points)"), ("الهندسة مع مرتبة الشرف", "Engineering with honours")),
    ("bus", "Bachelor of Business (BBus)", 40165, Y3, ("الأعمال", "Business")),
    ("law", "Bachelor of Laws (LLB)", 42173, ("4 سنوات عادةً", "Usually 4 years"), ("القانون (LLB)", "Law (LLB)")),
    ("psych", "Bachelor of Science (BSc) - Psychology", 44347, Y3, ("علم النفس ضمن بكالوريوس العلوم", "Psychology within the BSc")),
    ("pol", "Bachelor of Arts (BA) - Political Science", 34063, Y3, ("العلوم السياسية ضمن بكالوريوس الآداب", "Political science within the BA")),
    ("sport", "Bachelor of Sport and Human Performance (BSHP)", 38838, Y3, ("الرياضة والأداء البدني", "Sport and human performance")),
    ("ph", "Bachelor of Health (BHealth)", 38838, Y3, ("الصحة", "Health")),
]:
    add("nz", field, name, "University of Waikato", "Hamilton", (name, name), dur, nz_fee(nzd, *WK), NZ_DL, other, NZ_HOW, WK_SRC, WK_APPLY)

AUT_SRC = "https://www.aut.ac.nz/study/fees-and-scholarships/fees-to-study-at-aut/international-student-fees-at-aut"
AUT_APPLY = "https://www.aut.ac.nz/international"
AUTW = ("لكل 120 نقطة، أي سنة دراسة كاملة، شاملة رسوم خدمات الطلاب؛ السنة غير موضحة في الصفحة، للتحقق", "per 120 points, one full-time year, including the student services levy; no year label on the page, to verify")
for field, name, nzd, dur, other in [
    ("cs", "Bachelor of Computer and Information Sciences", 45159.67, Y3, ("علوم الحاسب والمعلومات", "Computer and information sciences")),
    ("eng", "Bachelor of Engineering (Honours)", 51359.67, ("4 سنوات عادةً (480 نقطة)", "Usually 4 years (480 points)"), ("الهندسة مع مرتبة الشرف", "Engineering with honours")),
    ("bus", "Bachelor of Business", 39959.67, Y3, ("الأعمال", "Business")),
    ("physio", "Bachelor of Health Science (Physiotherapy)", 45959.67, ("4 سنوات عادةً (480 نقطة)", "Usually 4 years (480 points)"), ("العلاج الطبيعي", "Physiotherapy")),
    ("nurs", "Bachelor of Health Science (Nursing)", 44959.67, Y3, ("التمريض", "Nursing")),
    ("art", "Bachelor of Design", 45659.67, Y3, ("التصميم", "Design")),
    ("law", "Bachelor of Laws", 41959.67, ("4 سنوات عادةً (480 نقطة)", "Usually 4 years (480 points)"), ("القانون", "Law")),
]:
    add("nz", field, name, "Auckland University of Technology (AUT)", "Auckland", (name, name), dur, nz_fee(nzd, *AUTW), NZ_DL, other, NZ_HOW, AUT_SRC, AUT_APPLY)

C = {"ca": ("كندا", "canada"), "au": ("أستراليا", "australia"), "nz": ("نيوزيلندا", "new-zealand")}
if __name__ == "__main__":
    for cc, lst in B.items():
        append_ba(C[cc][0], C[cc][1], lst, REVIEWED)
        print(cc, len(lst))
