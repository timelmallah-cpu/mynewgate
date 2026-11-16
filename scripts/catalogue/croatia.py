# Croatia: 6-year Medicine taught in English at public universities (bachelor's level in our data, long-cycle).
# Applicants with a non-EU school certificate must have it recognised through the national "Postani student" system (AZVO).
# Sources: official university pages, checked 2026-11-16.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, MED6

BA = []


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, living, house, src, apply, apply_note=("صفحة القبول الرسمية", "Official admission page")):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                 living=living, house=house, src=src, req=src, req_note=("شروط القبول الرسمية", "Official admission requirements"), apply=apply,
                 apply_note=apply_note))


MD = ("طب بشري (دكتور في الطب، دراسة متكاملة)", "Medicine (Doctor of Medicine, integrated study)")
RECOG = ("يجب الاعتراف بشهادة الثانوية الأجنبية في كرواتيا عن طريق منصة Postani student ووكالة العلوم والتعليم العالي (AZVO) قبل القيد", "Your foreign school certificate must be recognised in Croatia through the Postani student platform and the Agency for Science and Higher Education (AZVO) before enrolment")

ZG = "https://mse.mef.unizg.hr/admission-requirements/"
add(BA, "med", "Medical Studies in English", "University of Zagreb School of Medicine", "Zagreb", MD, MED6,
    ("12,000 يورو سنوياً إذا دُفعت مرة واحدة، أو 12,200 يورو على قسطين", "€12,000 per year if paid at once, or €12,200 in two instalments"),
    ("عرض القبول المشروط يتأكد بدفع أول قسط 2,500 يورو", "The conditional offer is confirmed by paying a first instalment of €2,500"),
    ("لدفعة 2026/2027 كانت الامتحانات أونلاين من 12 يناير حتى 31 أغسطس 2026 (آخرها التقديم حتى 20 أغسطس)؛ مواعيد دفعة 2027/2028 غير منشورة بعد في المصدر", "For 2026/2027 the online exams ran from 12 January to 31 August 2026 (the last with applications by 20 August); 2027/2028 dates are not yet published in the source"),
    ("IELTS 6 أو TOEFL iBT 60 على الأقل لغير المتحدثين بالإنجليزية", "At least IELTS 6 or TOEFL iBT 60 for non-native speakers"),
    ("امتحان أونلاين في الأحياء والكيمياء والفيزياء (120 سؤال). القبول في الفصل الشتوي فقط. " + RECOG[0], "Online exam in Biology, Chemistry and Physics (120 questions). Entry in the winter semester only. " + RECOG[1]),
    ("قدّم على امتحان القبول قبل موعده بـ 15 يوماً على الأقل، ثم سجّل في Postani student", "Apply for the entrance exam at least 15 days before it, then register on Postani student"), NP, NP,
    ZG, "https://mse.mef.unizg.hr/admission/application-procedure")

ST = "https://mefst.unist.hr/default.aspx?id=13242"
add(BA, "med", "Medical Studies in English", "University of Split School of Medicine", "Split", MD, MED6,
    ("12,000 يورو سنوياً، تُدفع كاملة خلال أسبوع من خطاب القبول (للتحقق من سنة الرسوم)", "€12,000 per year, paid in full within a week of the acceptance letter (check which year the fee applies to)"),
    ("رسوم تقديم 200 يورو غير مستردة", "Non-refundable €200 application fee"),
    ("التقديم مغلق حالياً، والدورة القادمة متوقع تفتح في مارس 2027", "Applications are closed now; the next round is expected to open in March 2027"),
    ("إثبات إجادة الإنجليزية إذا طُلب", "Proof of English proficiency where applicable"),
    ("يُشترط 12 سنة دراسة قبل الجامعة على الأقل؛ 70 مكاناً لعام 2026/2027. " + RECOG[0], "At least 12 years of prior schooling; 70 places for 2026/2027. " + RECOG[1]),
    ("أرسل طلبك بالإيميل لمكتب الطلاب مع السيرة الذاتية وخطاب الدافع وإثبات دفع رسوم التقديم", "Email your application to the student office with your CV, motivation letter and proof of the application fee"), NP, NP,
    ST, ST)

write("كرواتيا", "Croatia", "croatia", BA, level="bachelor")
