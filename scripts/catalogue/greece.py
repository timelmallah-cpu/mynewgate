# Greece: English-taught master's at public universities (International Hellenic University, Athens University of
# Economics and Business). Sources: the programmes' official pages, the IHU fee schedule and the Study in Greece
# application portal, checked 2026-11-19.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import common
from common import write, NP
common.REVIEWED = "2026-11-20"
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

# University of Piraeus, Department of Maritime Studies (Study in Greece portal pages 1201 and 1202 and the programme's
# 2025-2026 study guide, checked 2026-11-20). No 2027/28 call is open yet; earlier calls took applications in rounds until places were filled.
UNIPI = "University of Piraeus"
UNIPI_DL = ("لا يوجد إعلان قبول مفتوح حالياً على بوابة Study in Greece (موعد 2027/2028 غير منشور في المصدر)؛ في الدورات السابقة كانت الطلبات تُقبل على دفعات حتى امتلاء الأماكن",
            "No open call on the Study in Greece portal at the moment (2027/2028 date not published in the source); in earlier cycles applications were taken in rounds until places were filled")
UNIPI_EN = ("الدراسة بالإنجليزية؛ المستوى المطلوب غير منشور في المصدر (الإعلانات السابقة طلبت إثبات مستوى جيد جداً في الإنجليزية)",
            "Taught in English; required level not published in the source (earlier calls asked for proof of very good English)")
add(MA, "bus", "MSc in Shipping Management", UNIPI, "Piraeus", MSC, ("فصلان دراسيان بدوام كامل (75 ساعة معتمدة)، أو ضعف المدة بدوام جزئي", "2 semesters full time (75 ECTS), or 4 semesters part time"),
    ("7,000 يورو للبرنامج كاملاً (دوام كامل)", "€7,000 for the full programme (full time)"),
    ("بكالوريوس من جامعة يونانية أو مؤسسة أجنبية معادلة", "A bachelor's from a Greek university or an equivalent foreign institution"),
    UNIPI_DL, UNIPI_EN, ("إدارة الشحن البحري، قسم الدراسات البحرية؛ منح متاحة؛ " + DOATAP[0], "Shipping management, Department of Maritime Studies; scholarships offered; " + DOATAP[1]),
    ("التقديم عبر بوابة Study in Greece عند فتح الإعلان", "Apply through the Study in Greece portal when the call opens"), NP, NP,
    "https://apply.studyingreece.edu.gr/en/programmes/msc/1201/details/shipping-management", "https://apply.studyingreece.edu.gr/en/programmes/msc/1201/details/shipping-management")
add(MA, "env", "MSc in Sustainable Blue Economy", UNIPI, "Piraeus", MSC, ("فصلان دراسيان بدوام كامل (75 ساعة معتمدة)، أو ضعف المدة بدوام جزئي", "2 semesters full time (75 ECTS), or 4 semesters part time"),
    ("5,000 يورو للبرنامج كاملاً (دوام كامل؛ عربون 1,000 يورو)", "€5,000 for the full programme (full time; €1,000 advance)"),
    ("بكالوريوس من جامعة أوروبية أو دولية، ويُفضَّل تخصص قريب بتقدير ممتاز أو جيد جداً واهتمام بالقطاع البحري", "A bachelor's from an EU or international university; a related field with excellent or very good grades and an interest in the marine industry is preferred"),
    UNIPI_DL, UNIPI_EN, ("الاقتصاد الأزرق المستدام: مساران، النمو الأزرق والجودة في الشحن البحري؛ منح متاحة؛ " + DOATAP[0], "Sustainable blue economy: tracks Blue Growth and Quality in Shipping; scholarships offered; " + DOATAP[1]),
    ("التقديم عبر بوابة Study in Greece عند فتح الإعلان", "Apply through the Study in Greece portal when the call opens"), NP, NP,
    "https://maritime-unipi.gr/wp-content/uploads/2026/02/study-guide.pdf", "https://apply.studyingreece.edu.gr/en/programmes/msc/1202/details/sustainable-blue-economy")

write("اليونان", "Greece", "greece", MA, level="master")
append_master("اليونان", "greece")
