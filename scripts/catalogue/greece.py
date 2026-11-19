# Greece: English-taught master's at public universities (International Hellenic University, Athens University of
# Economics and Business). Sources: the programmes' official pages, the IHU fee schedule and the Study in Greece
# application portal, checked 2026-11-19.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import write, NP
from helpers import add, append_master

MA = []
MSC = ("ماجستير (MSc)", "Master's degree (MSc)")
DOATAP = ("شهادة البكالوريوس من خارج اليونان تحتاج أن تستوفي شروط الاعتراف لدى هيئة DOATAP (المادة 304 من القانون 4957/2022) كما تذكر صفحات البرامج",
          "A bachelor's from outside Greece must meet the recognition rules of DOATAP (article 304 of Law 4957/2022), as the programme pages state")
IHU = "International Hellenic University (IHU)"
IHU_FEES = "https://st.ihu.gr/wp-content/uploads/stcustom/programme-documents/tuition-fees/tuition-fees-datascience-ebusiness.pdf"
IHU_FEE = ("3,700 يورو للبرنامج كاملاً (عربون 500 يورو بعد خطاب القبول ثم أقساط)", "€3,700 for the full programme (a €500 deposit after the acceptance letter, then instalments)")
IHU_HOW = ("التقديم أونلاين على نظام التقديم في كلية العلوم والتكنولوجيا بالجامعة", "Apply online through the university's School of Science and Technology application system")

add(MA, "ds", "MSc in Data Science", IHU, "Thessaloniki", MSC, ("3 فصول دراسية (90 ساعة معتمدة)", "3 semesters (90 credits)"), IHU_FEE, NP,
    ("لدفعة أكتوبر 2026 كان آخر موعد 26 أغسطس 2026 (موعد 2027 للتحقق)", "For the October 2026 intake the deadline was 26 August 2026 (2027 deadline to verify)"),
    ("إثبات إجادة الإنجليزية، ويُعفى من درس البكالوريوس أو الماجستير بالإنجليزية في جامعة أجنبية", "Proof of English; holders of a bachelor's or master's taught in English at a foreign university are exempt"),
    ("موجّه لخريجي العلوم والتكنولوجيا والهندسة والرياضيات (STEM) أو الاقتصاد مع خلفية في الإحصاء؛ دراسة هجينة (حضوري وعن بُعد)؛ " + DOATAP[0],
     "Aimed at STEM or economics graduates with a background in statistics; hybrid (in person and remote); " + DOATAP[1]),
    IHU_HOW, NP, NP, "https://st.ihu.gr/studies/postgraduate/datascience", "https://st.ihu.gr/studies/postgraduate/datascience")
add(MA, "bus", "MSc in e-Business and Digital Marketing", IHU, "Thessaloniki", MSC, ("3 فصول دراسية (90 ساعة معتمدة)", "3 semesters (90 credits)"), IHU_FEE, NP,
    NP, NP, (DOATAP[0], DOATAP[1]), IHU_HOW, NP, NP, IHU_FEES, IHU_FEES)
add(MA, "bus", "MSc in Financial Management", "Athens University of Economics and Business (AUEB)", "Athens", MSC,
    ("فصلان دراسيان (دوام كامل)", "2 semesters (full time)"),
    ("6,400 يورو للبرنامج كاملاً لغير الأوروبيين (دوام كامل)", "€6,400 for the full programme for non-EU students (full time)"),
    NP,
    ("لا يوجد إعلان قبول مفتوح حالياً على بوابة Study in Greece؛ صفحة القسم أعلنت قبول طلبات دفعة سبتمبر 2026 (موعد 2027 للتحقق)",
     "No open call on the Study in Greece portal at the moment; the department page announced applications for the September 2026 intake (2027 date to verify)"),
    NP,
    ("مطلوب كشف درجات رسمي مترجم للإنجليزية وسيرة ذاتية بالإنجليزية؛ " + DOATAP[0], "Official transcripts (translated into English) and a CV in English are required; " + DOATAP[1]),
    ("التقديم أونلاين مع رفع الأوراق", "Apply online and upload the documents"), NP, NP,
    "https://apply.studyingreece.edu.gr/en/programmes/msc/1187/details/pms-sti-chrimatooikonomiki-dioikisi", "https://www.dept.aueb.gr/el/node/34438")

write("اليونان", "Greece", "greece", MA, level="master")
append_master("اليونان", "greece")
