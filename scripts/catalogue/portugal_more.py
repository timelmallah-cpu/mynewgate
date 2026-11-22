# Portugal batch 2 (22 Nov 2026): ISEG (University of Lisbon) master's taught in English. Append-only (helpers.append_extra);
# re-run after portugal.py and se_pt_cy.py.
# Fees: University of Lisbon fee proposal of 28 May 2026 for international students (2027/2028 identical to 2026/2027),
# first year and later years; the 2027/2028 amounts still need the General Council's approval (للتحقق).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import NP
from helpers import add, append_extra

REVIEWED = "2026-11-22"
FEES = "https://www.ulisboa.pt/sites/default/files/documents/page/2026/deliberacaocgpropinas2026.pdf"
MA = []

MSC = ("ماجستير (Mestrado)", "Master's degree (Mestrado)")
S4 = ("4 فصول (سنتان)", "4 semesters (2 years)")
ADM = ("التقديم أونلاين على مراحل؛ يُطلب بكالوريوس في الاقتصاد أو المالية أو الإدارة أو الرياضيات التطبيقية أو ما يقاربها، وتقدير الملف حسب المعدل والخبرة", "Online application in phases; a bachelor's in economics, finance, management, applied mathematics or a related field, assessed on grades and experience")
DL = ("التقديم على مراحل؛ مواعيد 2027/2028 غير منشورة في المصدر بعد، وننصح غير الأوروبيين بالتقديم في المرحلة الأولى بسبب وقت التأشيرة", "Applications in phases; the 2027/2028 dates are not published in the source yet, and non-EU applicants should use the first phase because of visa times")
EN = ("يُطلب إتقان ممتاز للإنجليزية كتابة وحديثاً (الحد الأدنى للشهادة غير منشور في المصدر)", "An excellent command of written and spoken English (minimum test score not published in the source)")
HOW = ("التقديم أونلاين على موقع ISEG، ثم دفع الرسوم وطلب تأشيرة الدراسة في القنصلية البرتغالية", "Apply online on ISEG's site, then pay the fees and apply for the study visa at the Portuguese consulate")


def fee(first, later):
    return (f"{first} يورو للسنة الأولى و{later} يورو للسنوات التالية للطلاب الدوليين (مقترح 2027/2028 مطابق لرسوم 2026/2027، للتحقق)",
            f"€{first} for the first year and €{later} for later years for international students (2027/2028 proposal identical to 2026/2027, to verify)")


def ma(field, name, dur, f, other, src):
    add(MA, field, name, "ISEG - Lisbon School of Economics and Management, University of Lisbon", "Lisbon", MSC, dur, f, ADM, DL, EN, other, HOW, NP, NP, src, FEES)


ma("bus", "Master in Finance", S4, fee("8,000", "3,900"),
   ("المالية والأسواق والاستثمار بالإنجليزية بالكامل؛ ترتيبه 30 في تصنيف فايننشال تايمز حسب صفحة البرنامج", "Finance, markets and investment, fully in English; ranked 30th in the Financial Times ranking per the programme page"),
   "https://iseg.ulisboa.pt/en/study/masters/finance")
ma("econ", "Master in Economics", S4, fee("5,000", "3,250"),
   ("الاقتصاد النظري والتطبيقي بالإنجليزية؛ المحاضرات مسائية؛ 25 مقعداً", "Theoretical and applied economics in English; evening classes; 25 places"),
   "https://www.iseg.ulisboa.pt/?p=661")
ma("econ", "Master in Monetary and Financial Economics", S4, fee("5,000", "3,250"),
   ("الاقتصاد النقدي والمالي والسياسة النقدية بالإنجليزية (بعض المواد الاختيارية بالبرتغالية)؛ المحاضرات مسائية؛ 25 مقعداً", "Monetary and financial economics and monetary policy in English (some electives in Portuguese); evening classes; 25 places"),
   "https://www.iseg.ulisboa.pt/?p=666")
ma("econ", "Master in Applied Econometrics and Forecasting", S4, fee("4,100", "3,000"),
   ("الاقتصاد القياسي التطبيقي والتنبؤ وبرامج التحليل الكمي بالإنجليزية؛ 25 مقعداً", "Applied econometrics, forecasting and quantitative software, in English; 25 places"),
   "https://www.iseg.ulisboa.pt/?p=460")
ma("econ", "Master in Mathematical Finance", ("غير منشور في المصدر", "Not published in the source"), fee("5,250", "3,500"),
   ("المالية الرياضية والحاسوبية والأساليب الكمية للصناعة المالية؛ لغة التدريس الإنجليزية حسب بوابات الدراسة (للتحقق من صفحة ISEG)", "Mathematical and computational finance and quantitative methods for the financial industry; taught in English per study portals (to verify on ISEG's page)"),
   "https://www.iseg.ulisboa.pt/?p=667")

if __name__ == "__main__":
    append_extra("البرتغال", "portugal", MA, REVIEWED)
    print("portugal_more:", len(MA), "master's")
