# Finland: English-taught Nursing bachelor's (Bachelor of Health Care) at universities of applied sciences,
# non-EU fees for the autumn 2027 intake. Sources: official programme pages, checked 2026-11-15.
# Bachelor rows only; master's and doctoral rows stay in finland.py.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP

BA = []


def add(field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply):
    BA.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other, how=how,
                living=NP, house=NP, src=src, req=src, req_note=("صفحة البرنامج الرسمية", "Official programme page"), apply=apply,
                apply_note=("بوابة التقديم الرسمية", "Official application portal")))


Y = lambda v: (f"{v} يورو سنوياً لغير الأوروبيين (دفعة خريف 2027)", f"€{v} per year for non-EU/EEA students (autumn 2027 intake)")
BHC = ("بكالوريوس الرعاية الصحية - تمريض (Bachelor of Health Care)", "Bachelor of Health Care, Nursing")
D35 = ("3.5 سنوات (210 ساعات معتمدة)", "3.5 years (210 credits)")
APPFEE = ("رسوم طلب 100 يورو لغير الأوروبيين تُدفع عبر Studyinfo ولا تُسترد", "€100 application fee for non-EU/EEA applicants, paid through Studyinfo, non-refundable")
JOINT = ("التقديم المشترك من 7 إلى 21 يناير 2027 لدفعة أغسطس 2027", "Joint application 7 - 21 January 2027 for the August 2027 start")
FIN = ("مهم: التدريب العملي في المستشفيات وترخيص التمريض يحتاجان اللغة الفنلندية، فتتعلمها أثناء الدراسة", "Important: hospital placements and the nursing licence need Finnish, which you learn during the studies")
HOW = ("طلب أونلاين على Studyinfo.fi ثم اختبار القبول (غالباً International UAS Exam)", "Online application on Studyinfo.fi, then the entrance exam (usually the International UAS Exam)")
SI = "https://studyinfo.fi/konfo/en/"

add("nurs", "Nursing", "Metropolia University of Applied Sciences", "Helsinki", BHC, NP,
    ("11,500 يورو سنوياً لغير الأوروبيين لمن يبدأ بعد 31 يوليو 2027", "€11,500 per year for non-EU/EEA students starting after 31 July 2027"),
    APPFEE, JOINT, NP, (FIN[0] + "؛ الجامعة تشترط إجادة الفنلندية أو السويدية للعمل في الرعاية الصحية", FIN[1] + "; the university says health care work requires sufficient Finnish or Swedish"),
    HOW, "https://www.metropolia.fi/en/academics/bachelors-degrees/nursing", SI)
add("nurs", "Bilingual Degree Programme in Nursing", "Tampere University of Applied Sciences (TAMK)", "Tampere", BHC, NP, Y("12,000"),
    APPFEE, JOINT, NP, ("البرنامج ثنائي اللغة: الإنجليزية والفنلندية", "The programme is bilingual: English and Finnish"),
    HOW, "https://www.tuni.fi/en/study-with-us/nursing", SI)
add("nurs", "Bachelor of Health Care, Nursing", "Centria University of Applied Sciences", "Kokkola", BHC, D35, Y("9,500"),
    APPFEE, JOINT, NP, (FIN[0] + "؛ 15 مقعداً؛ القبول 100% عبر International UAS Exam", FIN[1] + "; 15 places; 100% of places through the International UAS Exam"),
    HOW, "https://net.centria.fi/en/koulutukset/bachelor-of-health-care-nursing-2/", SI)
add("nurs", "Nursing", "Satakunta University of Applied Sciences (SAMK)", "Pori", BHC, ("3 سنوات و6 أشهر", "3 years 6 months"), Y("9,500"),
    APPFEE, NP, NP, (FIN[0] + "؛ 40 مقعداً؛ اختبار قبول أونلاين", FIN[1] + "; 40 places; online entrance exam"),
    HOW, "https://www.samk.fi/en/study/nursing", SI)
add("nurs", "Bachelor of Health Care, Nursing", "Diaconia University of Applied Sciences (Diak)", "Helsinki", BHC, NP, Y("10,500"),
    NP, ("قبول مستمر من 30 أكتوبر 2026 لدفعة أغسطس 2027", "Rolling admission from 30 October 2026 for the August 2027 start"), NP,
    (FIN[0] + "؛ القبول بنتيجة SAT ومقابلة أونلاين", FIN[1] + "; admission by SAT score and an online interview"),
    ("طلب أونلاين على موقع الجامعة، ثم SAT ومقابلة أونلاين", "Online application on the university's site, then SAT and an online interview"),
    "https://www.diak.fi/en/ba-degree/ba-of-health-care-nursing/", "https://www.diak.fi/en/ba-degree/ba-of-health-care-nursing/")

write("فنلندا", "Finland", "finland", BA, level="bachelor")
