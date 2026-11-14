# Spain: English-taught bachelor's programmes at public universities (non-EU fees without residence).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP

BA4 = ("4 سنوات (240 ساعة معتمدة)", "4 years (240 credits)")
UC3M = "Universidad Carlos III de Madrid (UC3M)"
FEES = "https://uc3m.es/bachelor-degree/admission/application/enrollment/prices/non-eu"
T1 = ("حوالي 6,823 يورو سنوياً لغير الأوروبيين بدون إقامة (113.71 يورو لكل ساعة معتمدة × 60)", "About €6,823 per year for non-EU students without residence (€113.71 per credit × 60)")
T2 = ("حوالي 7,268 يورو سنوياً لغير الأوروبيين بدون إقامة (121.14 يورو لكل ساعة معتمدة × 60)", "About €7,268 per year for non-EU students without residence (€121.14 per credit × 60)")
EN = ("IELTS 6.5 أو ما يعادله لمسارات الإنجليزية (حسب مصدر غير رسمي)", "IELTS 6.5 or equivalent for English tracks (per an unofficial source)")
HOW = ("التقديم الإلكتروني على بوابة القبول في الجامعة مع معادلة شهادة الثانوية", "Online on the university admission portal, with recognition of your secondary-school certificate")
R = []
for f, n, fee, city, url in [
    ("bus", "Bachelor in Business Administration (English)", T1, "Getafe", "https://www.uc3m.es/bachelor-degree/business-administration"),
    ("bus", "Bachelor in Economics (English)", T1, "Getafe", "https://www.uc3m.es/bachelor-degree/economy"),
    ("ds", "Bachelor in Data Science and Engineering (English)", T2, "Leganés", "https://uc3m.es/bachelor-degree/data-science"),
    ("cs", "Bachelor in Computer Science and Engineering (English group)", T2, "Leganés", "https://www.uc3m.es/bachelor-degree/computer-science"),
    ("cs", "Bachelor in Artificial Intelligence (English)", T2, "Colmenarejo", "https://uc3m.es/bachelor-degree/studies"),
    ("cs", "Bachelor in Applied Mathematics and Computing (English)", T2, "Leganés", "https://uc3m.es/bachelor-degree/studies"),
    ("eng", "Bachelor in Aerospace Engineering (English)", T2, "Leganés", "https://uc3m.es/bachelor-degree/studies"),
    ("eng", "Bachelor in Biomedical Engineering (English)", T2, "Leganés", "https://www.uc3m.es/bachelor-degree/biomedical")]:
    R.append(P(field=f, name=n, uni=UC3M, city=city, deg=("بكالوريوس (Grado)", "Bachelor's (Grado)"), dur=BA4, fee=fee, adm=NP, dl=NP, en=EN,
               other=("الرسوم لأول تسجيل في المادة؛ تزيد عند إعادة المواد", "Fees are for first enrolment in each course; they rise for repeated courses"),
               how=HOW, living=NP, house=NP, src=FEES if fee else url, req=url, req_note=("صفحة البرنامج الرسمية", "Official programme page"),
               apply="https://uc3m.es/bachelor-degree/studies", apply_note=("صفحة برامج البكالوريوس والقبول", "Bachelor's programmes and admission page")))
write("إسبانيا", "Spain", "spain", R, level="bachelor")
