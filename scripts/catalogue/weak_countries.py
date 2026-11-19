# More programmes for the countries with few rows (Slovakia, Croatia, Malta, Denmark), added 2026-11-19.
# Append-only: bachelor's/long-cycle rows through helpers.append_ba (re-run after slovakia.py or croatia.py),
# master's through helpers.append_extra (re-run after malta.py or denmark.py).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, NP, SEM3
from helpers import add, append_extra, append_ba

REVIEWED = "2026-11-19"
NOTE_R = ("الصفحة الرسمية: الشروط والرسوم", "Official page: requirements and fees")
NOTE_A = ("صفحة التقديم الرسمية", "Official application page")
BA, MA = {}, {}


def ba(cc, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply=None):
    BA.setdefault(cc, []).append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en,
                                   other=other, how=how, living=NP, house=NP, src=src, req=src, req_note=NOTE_R,
                                   apply=apply or src, apply_note=NOTE_A))


# ---------- Slovakia: Comenius University, Faculty of Medicine (Bratislava) ----------
ba("sk", "dent", "Dentistry (in English)", "Comenius University Bratislava, Faculty of Medicine", "Bratislava",
   ("طبيب أسنان (MDDr.) - برنامج متكامل", "Doctor of Dental Medicine (MDDr.) - integrated programme"), ("5 سنوات", "5 years"),
   ("15,900 يورو سنوياً لدفعة 2027/2028، ونفس الرسوم كل سنة طوال المدة العادية للدراسة", "€15,900 a year for the 2027/2028 intake, the same each year for the standard length of study"),
   ("رسوم طلب 85 يورو غير مستردة لكل برنامج", "€85 non-refundable application fee per programme"),
   ("لدفعة 2027/2028: امتحان مارس: التسجيل من 1 يناير إلى 21 فبراير 2027 والامتحان أونلاين 16 مارس 2027؛ امتحان أغسطس: التسجيل من 17 مارس إلى 25 يوليو 2027 والامتحان 17 أغسطس 2027. الكلية تنصح غير الأوروبيين بامتحان مارس بسبب وقت التأشيرة",
    "2027/2028 intake: March exam: registration 1 January - 21 February 2027, online exam 16 March 2027; August exam: registration 17 March - 25 July 2027, exam 17 August 2027. The faculty advises non-EU applicants to take the March exam because of visa processing time"),
   ("لا تطلب الكلية شهادة لغة إنجليزية", "The faculty does not require an English certificate"),
   ("امتحان قبول في الأحياء والكيمياء (100 سؤال لكل مادة)؛ 50 مقعداً متوقعاً؛ تُدفع الرسوم كاملة قبل التسجيل (أقساط حتى نهاية أغسطس)",
    "Entrance exam in Biology and Chemistry (100 questions each); 50 places expected; the full fee is paid before enrolment (instalments until the end of August)"),
   ("التسجيل الإلكتروني لدى الكلية ثم امتحان القبول", "Online registration with the faculty, then the entrance exam"),
   "https://www.fmed.uniba.sk/en/study/for-applicants/admission-process", "https://www.portalvs.sk/en/studijny-program/uk-dental-medicine")

# ---------- Croatia: University of Rijeka, Faculty of Dental Medicine ----------
ba("hr", "dent", "Dental Medicine (in English)", "University of Rijeka, Faculty of Dental Medicine", "Rijeka",
   ("طبيب أسنان - دراسة متكاملة", "Doctor of Dental Medicine - integrated study"), ("6 سنوات", "6 years"),
   ("12,000 يورو سنوياً (2026/2027)، كاملة عند التسجيل أو على قسطين (6,000 عند التسجيل و6,000 حتى 15 نوفمبر 2026)",
    "€12,000 a year (2026/2027), in full at enrolment or in two instalments (€6,000 at enrolment and €6,000 by 15 November 2026)"),
   ("رسوم طلب 250 يورو، ورسوم تسجيل حوالي 60 يورو", "€250 application fee and about €60 enrolment fee"),
   ("لدفعة 2026/2027: التقديم يفتح 1 فبراير 2026، والجولة الأولى حتى 15 يونيو 2026 والثانية حتى 21 أغسطس 2026 (إن بقيت أماكن)؛ مواعيد 2027/2028 للتحقق",
    "2026/2027 intake: applications open on 1 February 2026; first round until 15 June 2026 and second until 21 August 2026 (if places remain); 2027/2028 dates to verify"),
   NP,
   ("12 مقعداً فقط؛ امتحان قبول في الكلية واختبار أونلاين للقدرات الحركية النفسية؛ يشترط دراسة الأحياء والكيمياء والفيزياء سنتين على الأقل في الثانوية",
    "Only 12 places; an on-site entrance exam and an online psychomotor test; at least two years each of Biology, Chemistry and Physics at secondary school"),
   ("التقديم على البوابة الوطنية postani-student.hr وإرسال الأوراق بالبريد إلى الكلية (لا يُقبل البريد الإلكتروني)",
    "Apply on the national portal postani-student.hr and post the documents to the faculty (email is not accepted)"),
   "https://fdmri.uniri.hr/en/?p=1333", "https://fdmri.uniri.hr/wp-content/uploads/2026/02/Call_for_Applications-2026-2027.pdf")

# ---------- Malta: University of Malta ----------
UM = "University of Malta (UM), Faculty of ICT"
MSC = ("ماجستير (MSc)", "Master's degree (MSc)")
UM_DL = ("الجامعة تقول إن المواعيد تختلف حسب البرنامج والدفعة؛ موعد غير الأوروبيين غير منشور في صفحة البرنامج", "The university says deadlines vary by course and intake; the non-EU date is not published on the course page")
UM_EN = ("حسب صفحة متطلبات اللغة الإنجليزية في الجامعة", "Per the university's English language requirements page")
UM_HOW = ("التقديم أونلاين على بوابة جامعة مالطا، ومكتب الطلاب الدوليين يساعد في التأشيرة والسكن بعد القبول", "Apply online on the University of Malta portal; the International Office helps with the visa and housing after an offer")
SPML = "https://www.um.edu.mt/courses/overview/pmsciispmftt0-2026-7-o/"
add(MA.setdefault("mt", []), "cs", "Master of Science in Signal Processing and Machine Learning", UM, "Msida", MSC, SEM3,
    ("13,400 يورو للبرنامج كاملاً لغير الأوروبيين (2026/2027)", "€13,400 for the full programme for non-EU students (2026/2027)"),
    NP, UM_DL, UM_EN,
    ("دوام كامل وأغلبه دراسة مقررات (Taught and Research)؛ الشروط التفصيلية في صفحة البرنامج", "Full-time and mainly taught (Taught and Research); detailed requirements on the course page"),
    UM_HOW, NP, NP, SPML, SPML)
CGS = "https://www.um.edu.mt/courses/overview/pmsccgsftt5-2025-6-o/"
add(MA["mt"], "cs", "Master of Science in Cognitive Science", "University of Malta (UM)", "Msida", MSC, SEM3,
    ("13,400 يورو للبرنامج كاملاً لغير الأوروبيين (صفحة 2025/2026؛ رسوم 2026/2027 للتحقق)", "€13,400 for the full programme for non-EU students (2025/2026 page; 2026/2027 fee to verify)"),
    NP, UM_DL, UM_EN,
    ("دوام كامل لمدة 3 فصول؛ يجمع الذكاء الاصطناعي وعلم الأعصاب المعرفي والإدراك الاجتماعي", "Full-time over three semesters; combines artificial intelligence, cognitive neuroscience and social cognition"),
    UM_HOW, NP, NP, CGS, CGS)

# ---------- Denmark: DTU ----------
DTU = "Technical University of Denmark (DTU)"
DTU_FEE = ("15,000 يورو سنوياً (7,500 يورو كل فصل دراسي) لغير الأوروبيين حسب بوابة Study in Denmark الرسمية؛ ودفعة الفصل الأول قبل 1 مايو",
           "€15,000 a year (€7,500 per term) for non-EU students per the official Study in Denmark portal; the first term is paid by 1 May")
DTU_ADM = ("رسوم طلب 100 يورو لغير الأوروبيين (تكفي لبرنامجين)", "€100 application fee for non-EU applicants (covers up to two programmes)")
DTU_DL = ("لدفعة سبتمبر 2027: آخر موعد لغير الأوروبيين 15 يناير 2027 (البوابة تفتح 1 ديسمبر 2026)؛ ومن يريد إعفاء الرسوم يرسل خطاباً شخصياً مع الطلب",
          "For September 2027: non-EU deadline 15 January 2027 (portal opens 1 December 2026); applicants for a fee waiver send a personal statement with the application")
DTU_EN = ("يجب استيفاء شرط اللغة الإنجليزية قبل 15 يناير", "The English requirement must be met by 15 January")
DTU_HOW = ("التقديم أونلاين على بوابة DTU ودفع رسوم الطلب", "Apply online on the DTU portal and pay the application fee")
for field, name, url, other in [
    ("eng", "MSc Applied Chemistry", "https://www.dtu.dk/english/education/graduate/msc-programmes/applied-chemistry",
     ("يمكن التقدم لمنحة إعفاء من الرسوم لمدة سنتين للمتفوقين من خارج أوروبا", "Excellent non-EU applicants can apply for a two-year tuition fee waiver")),
    ("eng", "MSc Architectural Engineering", "https://www.dtu.dk/english/education/graduate/msc-programmes/Architectural-Engineering",
     ("يمكن التقدم لمنحة إعفاء من الرسوم لمدة سنتين للمتفوقين من خارج أوروبا", "Excellent non-EU applicants can apply for a two-year tuition fee waiver"))]:
    add(MA.setdefault("dk", []), field, name, DTU, "Kongens Lyngby", MSC, ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)"),
        DTU_FEE, DTU_ADM, DTU_DL, DTU_EN, other, DTU_HOW, NP, NP, url,
        "https://www.dtu.dk/english/education/graduate/admission-and-deadlines/application_procedure/apply")

BA_C = {"sk": ("سلوفاكيا", "slovakia"), "hr": ("كرواتيا", "croatia")}
MA_C = {"mt": ("مالطا", "malta"), "dk": ("الدنمارك", "denmark")}

if __name__ == "__main__":
    for cc, lst in BA.items():
        append_ba(BA_C[cc][0], BA_C[cc][1], lst, REVIEWED)
    for cc, lst in MA.items():
        append_extra(MA_C[cc][0], MA_C[cc][1], lst, REVIEWED)
    print("weak countries:", sum(map(len, BA.values())), "bachelor's/long-cycle,", sum(map(len, MA.values())), "master's")
