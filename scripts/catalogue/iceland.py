# Iceland: English-taught master's at the public University of Iceland. Until 2026/27 there were no tuition fees, only a
# registration fee; from 2027-2028 non-EU/EEA/EFTA students pay a tuition fee that varies by programme (the per-programme
# amounts sit in an interactive selector we could not read, so fees are marked as not published). Sources: University
# of Iceland fees page and the national university-studies portal (island.is), checked 2026-11-19.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import write, NP
from helpers import add, append_master

MA = []
MS = ("ماجستير (MS)", "Master's degree (MS)")
Y2 = ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)")
UI = "University of Iceland"
FEES = "https://english.hi.is/node/3895"
FEE = ("غير منشور في المصدر: من 2027/2028 يدفع الطلاب من خارج الاتحاد الأوروبي والمنطقة الاقتصادية الأوروبية رسوماً دراسية تختلف حسب البرنامج، وتشمل رسوم التسجيل السنوية (100,000 كرونة أيسلندية، حوالي 730 يورو)؛ لم نطّلع على مبلغ هذا البرنامج (للتحقق)",
       "Not published in the source: from 2027-2028 students from outside the EU/EEA/EFTA pay a tuition fee that varies by programme and includes the annual registration fee (ISK 100,000, about €730); we have not seen this programme's amount (to verify)")
ADM = ("رسوم معالجة الطلب 20,000 كرونة أيسلندية (حوالي 145 يورو) مرة واحدة وغير مستردة؛ والرسوم الدراسية تُدفع كاملة حتى 4 يوليو",
       "Application processing fee ISK 20,000 (about €145), once and non-refundable; the tuition fee is paid in full by 4 July")
DL = ("1 فبراير 2027 لغير الأوروبيين لدفعة خريف 2027 (الجامعة تحدد 1 فبراير من كل سنة؛ نموذج الطلب يفتح في منتصف ديسمبر، والمستندات بنفس الموعد)", "1 February 2027 for non-EU applicants, autumn 2027 intake (the university sets the same date every year; the online form opens in mid-December, supporting documents by the same date)")
HOW = ("التقديم أونلاين على بوابة الجامعة، ثم طلب تصريح الإقامة للطلاب من مديرية الهجرة قبل السفر", "Apply online on the university portal, then apply for the student residence permit from the Directorate of Immigration before travelling")

add(MA, "env", "Environment and Natural Resources", UI, "Reykjavik", MS, Y2, FEE, ADM, DL, NP,
    ("برنامج دولي متعدد التخصصات بالإنجليزية بالكامل، بسبعة تخصصات منها الطاقة المتجددة واستدامة المحيطات وإدارة الموارد الطبيعية",
     "An international, interdisciplinary programme taught entirely in English, with seven specialisations including renewable energy, ocean sustainability and natural resource management"),
    HOW, NP, NP, "https://english.hi.is/node/25922/", FEES)
add(MA, "eng", "Environmental Engineering", UI, "Reykjavik", MS, Y2, FEE, ADM, DL, NP,
    ("مقررات الماجستير تُدرّس عادة بالإنجليزية؛ تخصصات منها المدن المستدامة والنقل الآمن والطاقة المتجددة (الطاقة المائية والرياح)",
     "Master's courses are generally taught in English; specialisations include sustainable cities and safe transport, and renewable energy (hydro and wind)"),
    HOW, NP, NP, "https://island.is/en/university-studies/7e7c5397-6ca3-44fd-95b8-a4fcff57e3e6", FEES)

write("أيسلندا", "Iceland", "iceland", MA, level="master")
append_master("أيسلندا", "iceland")
