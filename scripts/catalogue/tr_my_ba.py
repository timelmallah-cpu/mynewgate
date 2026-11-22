# Bachelor's in Türkiye (Boğaziçi University, Istanbul) and Malaysia (Universiti Sains Malaysia, Penang), added 2026-11-22.
# Append-only (helpers.append_ba); re-run after turkey.py (it rewrites the Turkish bachelor's file with write()).
# Sources:
#  Boğaziçi: 2026-2027 intake tuition sheet for international-quota undergraduates (per semester, USD) and the
#  students-from-abroad admission pages (programme list, SAT / TR-YÖS / GCE AL minimums, English levels; spring 2026 call).
#  USM: undergraduate international tuition fees per semester (non-citizen, USD; the file names no session, uploaded
#  September 2025) and the programme pages (duration, medium of instruction: English for science and technology degrees).
# Euro figures: ECB reference rate of 17 Nov 2026 (USD 1.0989).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, NP
from helpers import append_ba

REVIEWED = "2026-11-22"
USD = 1.0989
NOTE_R = ("الصفحة الرسمية: الرسوم والشروط", "Official page: fees and requirements")
NOTE_A = ("صفحة التقديم الرسمية", "Official application page")


def eur(usd):
    return round(usd / USD / 10) * 10


# ---------------- Boğaziçi University (state university, Istanbul; all teaching in English)
BU = "Boğaziçi University"
BU_FEES = "https://mediastore.cc.bogazici.edu.tr/web/userfiles/files/T121621-tuition_fees_for_international_undergraduate_and_graduate_students_2026-2027_intake(1).pdf"
BU_REQ = "https://adaylar.bogazici.edu.tr/en-EN/Archive/Subat2026/StudentsFromAbroad/Law"
BU_APPLY = "https://adaylar.bogazici.edu.tr/en-EN/Page/Admissions/StudentsFromAbroad/All"
BU_DUR = ("4 سنوات (8 فصول)، وسنة تحضيرية للإنجليزية لمن يحتاجها", "4 years (8 semesters), plus an English preparatory year if needed")
BU_EN = ("الدراسة بالإنجليزية: امتحان الجامعة BUEPT بدرجة C، أو TOEFL iBT بمعدل 79 والكتابة 22، أو IELTS Academic بمعدل 6.5 والكتابة 6.5 (شروط دورة ربيع 2026)",
         "Taught in English: the university's BUEPT at grade C, or TOEFL iBT 79 with writing 22, or IELTS Academic 6.5 with writing 6.5 (spring 2026 call)")
BU_DL = ("مواعيد التقديم لعام 2027/2028 لم تُنشر بعد؛ الجامعة تعلن الدعوة والحصص في صفحة القبول قبل كل فصل، وقد لا يقبل كل برنامج طلاباً في كل فصل",
         "2027/2028 application dates not published yet; the university posts each call and its quotas on the admissions page, and not every programme admits students every term")
BU_HOW = ("التقديم أونلاين على نظام القبول في الجامعة خلال فترة دعوة الطلاب من الخارج، مع دفع رسم الطلب",
          "Apply online through the university's admission system during the students-from-abroad call, and pay the application fee")
ADM_ENG = ("الحصة الدولية: SAT بمجموع 1350 من 1600 والرياضيات 700 من 800، أو TR-YÖS بدرجة 450، أو 3 مواد A في GCE A-Level ذات صلة (شروط دورة ربيع 2026)",
           "International quota: SAT 1350/1600 with Math 700/800, or TR-YÖS 450, or three relevant GCE A-Levels at grade A (spring 2026 call)")
ADM_SOC = ("الحصة الدولية: SAT بمجموع 1300 من 1600، أو TR-YÖS بدرجة 450، أو 3 مواد A في GCE A-Level ذات صلة (شروط دورة ربيع 2026)",
           "International quota: SAT 1300/1600, or TR-YÖS 450, or three relevant GCE A-Levels at grade A (spring 2026 call)")


def bu_fee(usd, faculty):
    return (f"حوالي {eur(usd):,} يورو للفصل ({usd:,} دولار أمريكي للفصل لطلاب الحصة الدولية في {faculty[0]}، دفعة 2026/2027؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
            f"About €{eur(usd):,} per semester (US${usd:,} per semester for international-quota students in the {faculty[1]}, 2026/2027 intake; ECB rate of 17 November 2026)")


F_ENG = ("كلية الهندسة", "Faculty of Engineering")
F_EAS = ("كلية الاقتصاد والعلوم الإدارية", "Faculty of Economics and Administrative Sciences")
F_HUM = ("كلية العلوم الإنسانية والاجتماعية", "Faculty of Humanities and Social Sciences")
ROWS_TR = []
for field, name, usd, fac, adm, other in [
    ("cs", "Computer Engineering", 5000, F_ENG, ADM_ENG, ("هندسة الحاسب", "Computer engineering")),
    ("eng", "Electrical and Electronic Engineering", 5000, F_ENG, ADM_ENG, ("الهندسة الكهربائية والإلكترونية", "Electrical and electronic engineering")),
    ("eng", "Mechanical Engineering", 5000, F_ENG, ADM_ENG, ("الهندسة الميكانيكية", "Mechanical engineering")),
    ("eng", "Civil Engineering", 5000, F_ENG, ADM_ENG, ("الهندسة المدنية", "Civil engineering")),
    ("eng", "Industrial Engineering", 5000, F_ENG, ADM_ENG, ("الهندسة الصناعية", "Industrial engineering")),
    ("eng", "Chemical Engineering", 5000, F_ENG, ADM_ENG, ("الهندسة الكيميائية", "Chemical engineering")),
    ("econ", "Economics", 5000, F_EAS, ADM_SOC, ("الاقتصاد", "Economics")),
    ("bus", "Management", 5000, F_EAS, ADM_SOC, ("إدارة الأعمال", "Management")),
    ("bus", "Management Information Systems", 5000, F_EAS, ADM_SOC, ("نظم المعلومات الإدارية", "Management information systems")),
    ("pol", "Political Science and International Relations", 5000, F_EAS, ADM_SOC, ("العلوم السياسية والعلاقات الدولية", "Political science and international relations")),
    ("hum", "History", 4000, F_HUM, ADM_SOC, ("التاريخ", "History")),
    ("hum", "Linguistics", 4000, F_HUM, ADM_SOC, ("اللسانيات", "Linguistics")),
]:
    ROWS_TR.append(P(field=field, name=name, uni=BU, city="Istanbul", deg=("بكالوريوس", "Bachelor's degree"), dur=BU_DUR, fee=bu_fee(usd, fac),
                     adm=adm, dl=BU_DL, en=BU_EN, other=other, how=BU_HOW, living=NP, house=NP, src=BU_FEES, req=BU_REQ,
                     req_note=NOTE_R, apply=BU_APPLY, apply_note=NOTE_A))

# ---------------- Universiti Sains Malaysia (Penang; science and technology degrees taught in English)
USM = "Universiti Sains Malaysia (USM)"
USM_FEES = "https://admission.usm.my/images/00uginternational/fee_2025/UNDERGRADUATE_INTERNATIONAL_TUITION_FEES_PER_SEMESTER.pdf"
USM_APPLY = "https://admission.usm.my/undergraduate/undergraduate-international/how-to-apply-international"
USM_DUR = ("4 سنوات (8 فصول)", "4 years (8 semesters)")
USM_EN = ("الدراسة بالإنجليزية في هذا البرنامج؛ IELTS أو TOEFL أو MUET أو ما يعادلها، أو خطاب من مؤسسة تدرس بالإنجليزية؛ بدونها يكون العرض مشروطاً. مقرر اللغة الماليزية (LKM100) إجباري للطلاب الدوليين قبل التخرج",
          "Taught in English in this programme; IELTS, TOEFL, MUET or equivalent, or a letter from an English-medium institution; without it the offer is conditional. The Malay language course (LKM100) is compulsory for international students before graduation")
USM_ADM = ("12 سنة دراسة وشهادة ثانوية (مثل A-Level أو IB أو ما يعادلها) حسب شروط البرنامج",
           "12 years of schooling and a school-leaving certificate (such as A-Level, IB or equivalent) per the programme's requirements")
USM_DL = ("الدراسة تبدأ في أكتوبر؛ موعد 2027/2028 غير منشور بعد (لعام 2025/2026 كان آخر موعد 15 يونيو 2025)",
          "Studies start in October; the 2027/2028 deadline is not published yet (for 2025/2026 it was 15 June 2025)")
USM_HOW = ("التقديم أونلاين على بوابة International@USM مع رسم معالجة 100 رينجيت؛ ورسم غير متكرر 1,325 دولاراً عند التسجيل",
           "Apply online on the International@USM portal with an RM100 processing fee; a one-off non-recurrent fee of US$1,325 is paid at registration")
USM_REQ = "https://admission.usm.my/index.php/course-ug-international/us6481001-bachelor-of-computer-science-honours-intelligent-computing-software-engineering-computing-infrastructure"


def usm_fee(usd):
    return (f"حوالي {eur(usd):,} يورو للفصل ({usd:,.2f} دولار أمريكي للفصل لغير المواطنين؛ ملف الرسوم الحالي لا يذكر العام الدراسي، رُفع في سبتمبر 2025، للتحقق)؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026",
            f"About €{eur(usd):,} per semester (US${usd:,.2f} per semester for non-citizens; the current fee file names no session and was uploaded in September 2025, to verify); ECB rate of 17 November 2026")


ROWS_MY = []
for field, name, usd, other in [
    ("cs", "Bachelor in Computer Science (Computing Infrastructure) with Honours", 1875.00, ("علوم الحاسب: الشبكات وأمن الحاسب", "Computer science: networks and security")),
    ("cs", "Bachelor in Computer Science (Intelligent Computing) with Honours", 1875.00, ("علوم الحاسب: الحوسبة الذكية", "Computer science: intelligent computing")),
    ("cs", "Bachelor in Software Engineering with Honours", 1875.00, ("هندسة البرمجيات", "Software engineering")),
    ("eng", "Bachelor of Electrical Engineering with Honours", 2250.00, ("الهندسة الكهربائية (في حرم الهندسة بنيبونغ تيبال)", "Electrical engineering (Engineering Campus, Nibong Tebal)")),
    ("eng", "Bachelor of Mechanical Engineering with Honours", 2250.00, ("الهندسة الميكانيكية (في حرم الهندسة بنيبونغ تيبال)", "Mechanical engineering (Engineering Campus, Nibong Tebal)")),
    ("eng", "Bachelor of Mechatronics Engineering with Honours", 2250.00, ("هندسة الميكاترونكس (في حرم الهندسة بنيبونغ تيبال)", "Mechatronics engineering (Engineering Campus, Nibong Tebal)")),
    ("eng", "Bachelor of Civil Engineering with Honours", 2250.00, ("الهندسة المدنية (في حرم الهندسة بنيبونغ تيبال)", "Civil engineering (Engineering Campus, Nibong Tebal)")),
    ("eng", "Bachelor of Chemical Engineering with Honours", 2812.50, ("الهندسة الكيميائية (في حرم الهندسة بنيبونغ تيبال)", "Chemical engineering (Engineering Campus, Nibong Tebal)")),
]:
    ROWS_MY.append(P(field=field, name=name, uni=USM, city="Penang", deg=("بكالوريوس مع مرتبة الشرف", "Bachelor's degree with Honours"), dur=USM_DUR,
                     fee=usm_fee(usd), adm=USM_ADM, dl=USM_DL, en=USM_EN, other=other, how=USM_HOW, living=NP, house=NP, src=USM_FEES,
                     req=USM_REQ if field == "cs" else "https://admission.usm.my/undergraduate/undergraduate-international",
                     req_note=NOTE_R, apply=USM_APPLY, apply_note=NOTE_A))

if __name__ == "__main__":
    append_ba("تركيا", "turkey", ROWS_TR, REVIEWED)
    append_ba("ماليزيا", "malaysia", ROWS_MY, REVIEWED)
    print("tr", len(ROWS_TR), "my", len(ROWS_MY))
