# Germany: English-taught bachelor's programmes at public universities. Most German bachelor's are taught in German,
# and Medicine is taught in German only, so the English offer is small.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP

S6 = ("6 فصول دراسية (3 سنوات)", "6 semesters (3 years)")
S7 = ("7 فصول دراسية (3.5 سنوات)", "7 semesters (3.5 years)")
R = []


def add(field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply):
    R.append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en, other=other,
               how=how, living=NP, house=NP, src=src, req=src, req_note=("الصفحة الرسمية: الشروط والمواعيد", "Official page: requirements and deadlines"),
               apply=apply, apply_note=("صفحة التقديم الرسمية", "Official application page")))


HSRW = "Rhine-Waal University of Applied Sciences"
FREE = ("لا توجد رسوم دراسية؛ مساهمة فصلية 365.10 يورو (شتاء 2026/2027) تشمل تذكرة المواصلات", "No tuition fees; semester contribution €365.10 (winter 2026/2027) including a transport ticket")
HSRW_DL = ("15 يوليو للدراسة في الفصل الشتوي التالي", "15 July for the following winter semester")
HSRW_ADM = ("التقديم عبر uni-assist: 75 يورو للطلب الأول و30 يورو لكل طلب إضافي", "Via uni-assist: €75 for the first application and €30 for each additional one")
HSRW_HOW = ("عبر uni-assist حسب تعليمات الجامعة", "Through uni-assist as the university instructs")
HSRW_SRC = "https://www.hochschule-rhein-waal.de/en/study/before-starting-university/application-process/guide-for-international-applicants"
HSRW_APPLY = "https://www.hochschule-rhein-waal.de/en/academics/prospective-students/current-application-period/bachelors-programmes"
HSRW_NOTE = ("جامعة علوم تطبيقية حكومية؛ تدريب عملي 8 أسابيع جزء من البرنامج", "Public university of applied sciences; an 8-week internship is part of the programme")
for f, n, city in [("bus", "International Business Administration, B.A.", "Kamp-Lintfort"), ("eng", "Infotronic Systems Engineering, B.Sc.", "Kamp-Lintfort"),
                   ("cs", "E-Government, B.Sc.", "Kamp-Lintfort"), ("eng", "Engineering, B.Sc.", "Kleve"), ("eng", "Engineering for Sustainability, B.Sc.", "Kleve")]:
    add(f, n, HSRW, city, ("بكالوريوس", "Bachelor's"), S7, FREE, HSRW_ADM, HSRW_DL, NP,
        (HSRW_NOTE[0] + ("؛ ملاحظة: الجامعة أوقفت التسجيل في برامج الهندسة الميكانيكية والكهربائية والميكاترونكس والهندسة الصناعية القديمة" if f == "eng" else ""),
         HSRW_NOTE[1] + ("; note: the university stopped enrolling in its older Mechanical, Electrical, Mechatronic and Industrial Engineering bachelor's" if f == "eng" else "")),
        HSRW_HOW, HSRW_SRC, HSRW_APPLY)

TUM = "Technical University of Munich (TUM)"
TUM_FEE = ("فئة هذا البرنامج للتحقق: تفرض TUM على غير الأوروبيين منذ 2024/2025 رسوماً لبرامج البكالوريوس بين 2,000 و3,000 يورو للفصل حسب مصادر غير رسمية؛ الرقم الرسمي في صفحة رسوم الجامعة",
           "Fee band to verify: since 2024/2025 TUM charges non-EU students €2,000 to €3,000 per semester for bachelor's per unofficial sources; the official figure is on the university fee page")
TUM_HOW = ("التقديم عبر TUMonline ثم تقييم أهلية (Aptitude assessment)؛ تُقيّم الإنجليزية من الدرجات المدرسية و/أو مقابلة", "Apply through TUMonline, then an aptitude assessment; English is assessed from school grades and/or an interview")
add("bus", "Management and Technology (B.Sc.)", TUM, "Heilbronn", ("بكالوريوس العلوم (B.Sc.)", "Bachelor of Science (B.Sc.)"), S6, TUM_FEE, NP,
    ("15 يوليو للفصل الشتوي", "15 July for the winter semester"), NP, ("حرم TUM في هايلبرون؛ يتضمن تخصص التقنيات الرقمية", "TUM Campus Heilbronn; includes a Digital Technologies specialisation"),
    TUM_HOW, "https://www.tum.de/en/studies/fees/tuition", "https://www.tum.de/en/studies/application")
for f, n, city in [("cs", "Information Engineering (B.Sc.)", "Heilbronn"), ("eng", "Aerospace (B.Sc.)", "Garching")]:
    add(f, n, TUM, city, ("بكالوريوس العلوم (B.Sc.)", "Bachelor of Science (B.Sc.)"), S6, TUM_FEE, NP, NP,
        ("بالإنجليزية مع شرط ألمانية بمستوى A2", "Taught in English, with German at A2 level required"), NP, TUM_HOW,
        "https://www.tum.de/en/studies/fees/tuition", "https://www.tum.de/en/studies/application")
write("ألمانيا", "Germany", "germany", R, level="bachelor")
