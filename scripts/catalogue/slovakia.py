# Slovakia: 6-year General Medicine taught in English at public universities (bachelor's level in our data, long-cycle).
# A non-EU school certificate must be recognised (nostrification) by the Regional School Administration Office.
# Sources: official faculty pages, checked 2026-11-16.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP, MED6

BA = []


def add(lst, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, living, house, src, apply, apply_note=("صفحة القبول الرسمية", "Official admission page")):
    lst.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                 living=living, house=house, src=src, req=src, req_note=("شروط القبول الرسمية", "Official admission requirements"), apply=apply,
                 apply_note=apply_note))


MD = ("طب بشري (MUDr.، دراسة متكاملة)", "General Medicine (MUDr., integrated study)")
NOSTR = ("يجب معادلة شهادة الثانوية (nostrification) من مكتب الإدارة المدرسية الإقليمي في سلوفاكيا قبل القيد", "Your school certificate must be recognised (nostrification) by a Slovak Regional School Administration Office before enrolment")

BA_URL = "https://www.fmed.uniba.sk/en/study/for-applicants/admission-process"
add(BA, "med", "General Medicine (in English)", "Comenius University Bratislava, Faculty of Medicine", "Bratislava", MD, MED6,
    ("13,500 يورو للعام الدراسي 2027/2028، وتُدفع كاملة قبل القيد", "€13,500 for the 2027/2028 academic year, paid in full before enrolment"),
    ("رسوم التقديم 85 يورو", "€85 application fee"),
    ("لدفعة 2027/2028: امتحان مارس أونلاين 15 مارس 2027 (التسجيل من 1 يناير حتى 21 فبراير 2027)، وامتحان أغسطس 16 أغسطس 2027 أونلاين أو حضورياً (التسجيل حتى 25 يوليو 2027)",
     "For 2027/2028: the March exam is online on 15 March 2027 (registration 1 January - 21 February 2027), and the August exam is on 16 August 2027 online or in person (registration until 25 July 2027)"),
    NP,
    ("حوالي 240 مقعداً؛ حملة IB بمجموع 33 على الأقل يمكنهم التقديم بدون امتحان من 15 نوفمبر حتى 31 ديسمبر 2026. " + NOSTR[0], "About 240 places; IB Diploma holders with at least 33 points may apply without an exam from 15 November to 31 December 2026. " + NOSTR[1]),
    ("التسجيل أونلاين لامتحان القبول ودفع رسوم التقديم", "Register online for the entrance exam and pay the application fee"), NP, NP,
    BA_URL, BA_URL)

MT = "https://www.jfmed.uniba.sk/en/study/applicants/faq/"
add(BA, "med", "General Medicine (in English)", "Comenius University, Jessenius Faculty of Medicine in Martin", "Martin", MD, MED6,
    ("11,500 يورو للعام الدراسي (فصلين)", "€11,500 per academic year (two semesters)"),
    ("رسوم القبول 70 يورو مع الطلب", "€70 admission fee with the application"),
    ("امتحانات 2027/2028 أونلاين: 20 مارس 2027 (التقديم حتى 6 مارس 2027)، و26 يونيو 2027 (حتى 12 يونيو 2027)، و6 أغسطس 2027 (حتى 23 يوليو 2027)",
     "2027/2028 exams, all online: 20 March 2027 (apply by 6 March 2027), 26 June 2027 (by 12 June 2027) and 6 August 2027 (by 23 July 2027)"),
    NP, ("منصة التقديم تفتح 1 ديسمبر 2026. " + NOSTR[0], "The application platform opens on 1 December 2026. " + NOSTR[1]),
    ("التقديم أونلاين ودفع رسوم القبول", "Apply online and pay the admission fee"), NP, NP,
    MT, "https://www.jfmed.uniba.sk/en/study/applicants/application-process")

KE = "https://www.upjs.sk/lekarska-fakulta/en/applicants/entrance-examination/"
add(BA, "med", "General Medicine (in English)", "Pavol Jozef Šafárik University in Košice (UPJŠ), Faculty of Medicine", "Košice", MD, MED6,
    ("13,000 يورو سنوياً لعام 2026/2027 حسب قرار رئيس الجامعة (رسوم 2027/2028 للتحقق)", "€13,000 per year for 2026/2027 per the Rector's decision (2027/2028 fee to verify)"),
    ("رسوم امتحان القبول 30 يورو غير مستردة", "Non-refundable €30 entrance exam fee"),
    ("لدفعة 2027/2028: امتحان 16 يونيو 2027 (التقديم حتى 2 يونيو 2027) وامتحان 24 أغسطس 2027 (التقديم حتى 10 أغسطس 2027)، في الكلية بكوشيتسه",
     "For 2027/2028: exams on 16 June 2027 (apply by 2 June 2027) and 24 August 2027 (apply by 10 August 2027), at the faculty in Košice"),
    NP,
    ("امتحان كتابي اختيار من متعدد في الكيمياء والأحياء (ساعتان ونصف)، ونسبة النجاح عادة 75%؛ 210 مقاعد. " + NOSTR[0], "A 2.5-hour multiple-choice written exam in Chemistry and Biology, usually with a 75% pass mark; 210 places. " + NOSTR[1]),
    ("إرسال الأوراق بالبريد للكلية قبل الموعد (العبرة بختم البريد)", "Post your documents to the faculty by the deadline (the postmark date counts)"), NP, NP,
    KE, "https://www.upjs.sk/app/uploads/sites/9/2026/03/Rectors-Decision-No.-3_2026_Fees_2026_2027.pdf")

write("سلوفاكيا", "Slovakia", "slovakia", BA, level="bachelor")
