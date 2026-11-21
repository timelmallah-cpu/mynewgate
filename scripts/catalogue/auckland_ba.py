# University of Auckland bachelor's in small fields (art, sport), added 2026-11-21 from the official programme pages
# (2027 international fees, indicative, per year, excluding the Student Services Fee). Append-only (helpers.append_ba);
# re-run after anglo_ba.py. Euro figures: ECB reference rate of 17 Nov 2026 (NZD 1.9985).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, NP
from helpers import append_ba

REVIEWED = "2026-11-21"
NOTE_R = ("الصفحة الرسمية للبرنامج: الرسوم والمدة والمواعيد", "Official programme page: fees, duration and dates")
NOTE_A = ("صفحة التقديم الرسمية", "Official application page")
EN = ("IELTS Academic بمعدل 6.0 ولا يقل أي جزء عن 5.5، أو ما يعادله", "IELTS Academic 6.0 overall with no band below 5.5, or equivalent")
ADM = ("شهادة الثانوية حسب شروط الجامعة لبلدك (للتحقق من قبول شهادتك مع الجامعة)",
       "A school-leaving certificate per the university's rules for your country (check with the university that yours is accepted)")
HOW = ("التقديم أونلاين على موقع الجامعة؛ بعد عرض المكان تقدّم طلب تأشيرة الطالب", "Apply online through the university; after the offer of place you apply for the student visa")
APPLY = "https://www.auckland.ac.nz/en/study/applications-and-admissions/apply-now.html"
Y3 = ("3 سنوات بدوام كامل (360 نقطة)", "3 years full-time (360 points)")


def fee(nzd):
    eur = round(nzd / 1.9985 / 10) * 10
    return (f"حوالي {eur:,} يورو في السنة ({nzd:,} دولار نيوزيلندي في 2027، رقم استرشادي بدون رسوم خدمات الطلاب؛ بسعر البنك المركزي الأوروبي في 17 نوفمبر 2026)",
            f"About €{eur:,} a year (NZD {nzd:,} in 2027, indicative, excluding the Student Services Fee; ECB rate of 17 November 2026)")


B = "https://www.auckland.ac.nz/en/study/study-options/find-a-study-option/"
ROWS = []
for field, name, nzd, dl, other, slug in [
    ("art", "Bachelor of Design (BDes)", 51688,
     ("للبدء في الفصل الأول 2027: آخر موعد 8 ديسمبر 2026، وقد تُقبل الطلبات المتأخرة إذا بقيت أماكن", "For Semester One 2027: apply by 8 December 2026; late applications may be considered if places remain"),
     ("التصميم والتقنيات الناشئة", "Design and emerging technologies"), "bachelor-of-design.html"),
    ("art", "Bachelor of Fine Arts (BFA)", 47221,
     ("للبدء في الفصل الأول 2027: آخر موعد 8 ديسمبر 2026، وقد تُقبل الطلبات المتأخرة إذا بقيت أماكن", "For Semester One 2027: apply by 8 December 2026; late applications may be considered if places remain"),
     ("الفنون الجميلة (رسم، نحت، تصوير، فنون رقمية)", "Fine arts (painting, sculpture, photography, digital media)"), "bachelor-of-fine-arts-bfa.html"),
    ("sport", "Bachelor of Sport, Health and Physical Education (BSportHPE)", 42521,
     ("للفصل الأول 2027 آخر موعد 31 يناير 2027، وللفصل الثاني 2027 آخر موعد 4 يوليو 2027", "Semester One 2027: apply by 31 January 2027; Semester Two 2027: apply by 4 July 2027"),
     ("التدريب الرياضي والتربية البدنية والتثقيف الصحي", "Sport coaching, physical education and health education"), "bachelor-of-sport-health-and-physical-education-bsporthpe.html"),
]:
    ROWS.append(P(field=field, name=name, uni="University of Auckland", city="Auckland", deg=(name, name), dur=Y3, fee=fee(nzd), adm=ADM,
                  dl=dl, en=EN, other=other, how=HOW, living=NP, house=NP, src=B + slug, req=B + slug, req_note=NOTE_R,
                  apply=APPLY, apply_note=NOTE_A))

if __name__ == "__main__":
    append_ba("نيوزيلندا", "new-zealand", ROWS, REVIEWED)
    print("nz", len(ROWS))
