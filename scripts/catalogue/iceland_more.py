# Iceland batch 2 (append-only; re-run after iceland.py): more English-taught master's at the public universities.
# University of Iceland (Reykjavik), University of Akureyri (UNAK), University Centre of the Westfjords in Isafjordur
# (students enrol at UNAK and graduate from it) and the Agricultural University of Iceland (Hvanneyri).
# From autumn 2027 public universities may charge non-EEA students tuition; UNAK says the amounts are not decided yet,
# and the University of Iceland's per-programme amounts are not readable, so every fee text starts with "not published".
# Sources checked 2026-11-19: english.hi.is, island.is (national university-studies portal), unak.is, uw.is, lbhi.is.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import NP
from helpers import add, append_extra

REVIEWED = "2026-11-19"
MA = []
MS = ("ماجستير (MS)", "Master's degree (MS)")
MAD = ("ماجستير (MA)", "Master's degree (MA)")
Y2 = ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)")

# University of Iceland: same fee, admission fee, deadline and route as in iceland.py
UI = "University of Iceland"
UI_FEES = "https://english.hi.is/node/3895"
UI_FEE = ("غير منشور في المصدر: من 2027/2028 يدفع الطلاب من خارج الاتحاد الأوروبي والمنطقة الاقتصادية الأوروبية رسوماً دراسية تختلف حسب البرنامج، وتشمل رسوم التسجيل السنوية (100,000 كرونة أيسلندية، حوالي 730 يورو)؛ لم نطّلع على مبلغ هذا البرنامج (للتحقق)",
          "Not published in the source: from 2027-2028 students from outside the EU/EEA/EFTA pay a tuition fee that varies by programme and includes the annual registration fee (ISK 100,000, about €730); we have not seen this programme's amount (to verify)")
UI_ADM = ("رسوم معالجة الطلب 20,000 كرونة أيسلندية (حوالي 145 يورو) مرة واحدة وغير مستردة؛ والرسوم الدراسية تُدفع كاملة حتى 4 يوليو",
          "Application processing fee ISK 20,000 (about €145), once and non-refundable; the tuition fee is paid in full by 4 July")
UI_DL = ("1 فبراير لغير الأوروبيين (دفعة الخريف)؛ لدفعة 2027 يُتوقع 1 فبراير 2027 (للتحقق)", "1 February for non-EU applicants (autumn intake); 1 February 2027 expected for 2027 (to verify)")
UI_HOW = ("التقديم أونلاين على بوابة الجامعة، ثم طلب تصريح الإقامة للطلاب من مديرية الهجرة قبل السفر", "Apply online on the university portal, then apply for the student residence permit from the Directorate of Immigration before travelling")
UI_EN = ("TOEFL iBT 79 أو IELTS 6.5 لمن لغته الأم ليست الإنجليزية", "TOEFL iBT 79 or IELTS 6.5 for applicants whose native language is not English")
UI_EN_SOME = ("قد يُطلب إثبات الإنجليزية (TOEFL أو IELTS) من المتقدمين من بعض الدول حسب سياسة الجامعة؛ الحد الأدنى غير منشور في صفحة البرنامج",
              "Applicants from some countries must submit TOEFL or IELTS under the university's language policy; the minimum is not published on the programme page")

add(MA, "edu", "International Studies in Education", UI, "Reykjavik", MAD, Y2, UI_FEE, UI_ADM, UI_DL, UI_EN_SOME,
    ("برنامج دولي بالإنجليزية بالكامل عن التعليم في سياق العولمة والهجرة والمجتمعات متعددة الثقافات؛ يشترط بكالوريوس بتقدير جيد جداً (7.25 من 10 على السلم الأيسلندي)",
     "An international programme taught entirely in English on education in the context of globalisation, migration and multicultural societies; requires a bachelor's degree with a first-class grade (7.25 out of 10 on the Icelandic scale)"),
    UI_HOW, NP, NP, "https://english.hi.is/node/50053", UI_FEES)
add(MA, "pol", "Global Studies", UI, "Reykjavik", MAD, Y2, UI_FEE, UI_ADM, UI_DL, UI_EN_SOME,
    ("برنامج متعدد التخصصات عن العولمة؛ تخصصان: الدراسات العالمية، والهجرة والمجتمعات متعددة الثقافات. لغة التدريس الأساسية الإنجليزية ومعظم الكتب بالإنجليزية، وبعض المقررات الاختيارية قد تكون بالأيسلندية",
     "A multidisciplinary programme on globalisation with two specialisations: Global Studies, and Migration and Multicultural Societies. The main language of instruction is English and most textbooks are in English; some electives may be in Icelandic"),
    UI_HOW, NP, NP, "https://english.hi.is/global-studies/ma", UI_FEES)
add(MA, "pol", "Criminology", UI, "Reykjavik", MAD, Y2, UI_FEE, UI_ADM, UI_DL, UI_EN_SOME,
    ("ماجستير جديد في علم الجريمة يُدرّس بالإنجليزية (عدا مقررات اختيارية في أقسام أخرى قد تكون بالأيسلندية)، دراسة حضورية؛ يشترط بكالوريوس بتقدير جيد جداً، ومن لم يدرس علم الاجتماع يأخذ مقررات تمهيدية في مناهج البحث والإحصاء والنظرية الاجتماعية بجانب الماجستير",
     "A new master's in criminology taught in English (electives in other departments may be in Icelandic), on site; requires a bachelor's degree with a first-class grade, and applicants without sociology take introductory research methods, statistics and sociological theory courses alongside the MA"),
    UI_HOW, NP, NP, "https://island.is/en/university-studies/c40d1927-7cde-41aa-ac6f-2774cb75395c", UI_FEES)
add(MA, "eng", "Industrial Engineering", UI, "Reykjavik", MS, Y2, UI_FEE, UI_ADM, UI_DL, UI_EN,
    ("البرنامج يُدرّس عادة بالإنجليزية والكتب بالإنجليزية؛ خطة دراسة فردية بالاتفاق مع المشرف",
     "The programme is generally taught in English with English textbooks; each student's study plan is set with the supervisor"),
    UI_HOW, NP, NP, "https://island.is/en/university-studies/6cede77e-d569-43d3-989c-53fe295aec12", UI_FEES)
add(MA, "cs", "Computer Science (Cybersecurity)", UI, "Reykjavik", MS, Y2, UI_FEE, UI_ADM, UI_DL, UI_EN,
    ("تخصص الأمن السيبراني فقط يُدرّس بالإنجليزية (بالشراكة مع جامعة ريكيافيك ومع مقررات عن بُعد من جامعات أوروبية)، أما تخصص تقنيات اللغة فللمتحدثين بالأيسلندية؛ يشترط بكالوريوس في علوم الحاسب أو مجال قريب بمعدل 6.5 من 10 على الأقل",
     "Only the Cybersecurity specialisation is taught in English (with Reykjavik University and some distance courses from European universities); Language Technology is for Icelandic speakers. Requires a BS in computer science or a related subject with an average of at least 6.5 out of 10"),
    UI_HOW, NP, NP, "https://island.is/en/university-studies/8c486a2b-f37f-4d1f-a744-b0b8b4834c11", UI_FEES)

# University of Akureyri
UNAK = "University of Akureyri"
UNAK_FEES = "https://www.unak.is/english/study/application/registration-fee"
UNAK_FEE = ("غير منشور في المصدر: الجامعة تفرض رسوماً دراسية على الطلاب من خارج المنطقة الاقتصادية الأوروبية من خريف 2027، ومبالغها لم تُحدد بعد؛ بجانب رسوم التسجيل السنوية 100,000 كرونة أيسلندية (حوالي 730 يورو) (للتحقق)",
            "Not published in the source: the university will charge tuition to students from outside the EEA from autumn 2027 and the amounts are not decided yet; on top of the annual registration fee of ISK 100,000 (about €730) (to verify)")
UNAK_HOW = ("التقديم أونلاين على بوابة جامعة أكوريري، وتأكيد القبول بدفع رسوم التسجيل (حتى 4 يوليو)، ثم طلب تصريح الإقامة للطلاب من مديرية الهجرة",
            "Apply online on the University of Akureyri portal, confirm admission by paying the registration fee (by 4 July), then apply for the student residence permit from the Directorate of Immigration")
UNAK_EN = ("TOEFL iBT 79 أو IELTS 6.5 أو PTE Academic 58 لمن لغته الأم ليست الإنجليزية (حسب صفحات الجامعة؛ للتحقق لهذا البرنامج)",
           "TOEFL iBT 79, IELTS 6.5 or PTE Academic 58 for applicants whose native language is not English (per the university's pages; to verify for this programme)")

add(MA, "psych", "Psychology (research MS)", UNAK, "Akureyri", MS, Y2, UNAK_FEE,
    ("رسوم التسجيل السنوية 100,000 كرونة أيسلندية تُدفع حتى 4 يوليو (115,000 بعده)", "Annual registration fee ISK 100,000 paid by 4 July (ISK 115,000 after that)"),
    ("1 أبريل لغير الأوروبيين؛ لدفعة 2027 يُتوقع 1 أبريل 2027 (للتحقق)", "1 April for non-EU applicants; 1 April 2027 expected for 2027 (to verify)"), UNAK_EN,
    ("ماجستير بحثي بالإنجليزية بالكامل؛ الخطوة الأولى قبل التقديم هي إيجاد مشرف من قسم علم النفس يقبل الإشراف على مشروعك، ثم توافق لجنة الدراسة على المقترح. يشترط بكالوريوس بتقدير جيد جداً (7.25)",
     "A research master's taught entirely in English; before applying you must find a supervisor in the psychology department who agrees to guide your project, then the study committee approves the proposal. Requires a bachelor's degree with a first-class grade (7.25)"),
    UNAK_HOW, NP, NP, "https://www.unak.is/english/moya/page/handbook-of-graduate-studies-in-psychology-at-the-university-of-akureyri", UNAK_FEES)
add(MA, "law", "Polar Law", UNAK, "Akureyri", MAD, Y2, UNAK_FEE,
    ("رسوم معالجة 50 يورو لغير الأوروبيين غير مستردة، ورسوم التسجيل السنوية تُدفع حتى 15 يونيو من تأكيد القبول", "Non-refundable €50 processing fee for non-EEA applicants; the annual registration fee is due by 15 June after admission"),
    ("1 مارس لغير الأوروبيين حسب صفحة التقديم؛ التقديم مغلق الآن وبوابة التقديم يُتوقع فتحها ربيع 2027 (للتحقق)", "1 March for non-EU applicants per the application page; applications are closed now and the portal is expected to open in spring 2027 (to verify)"),
    ("TOEFL iBT أو IELTS Academic أو Cambridge (CAE/CPE) أو PTE Academic لمن لغته الأم ليست الإنجليزية؛ الحد الأدنى في صفحة متطلبات الإنجليزية بالجامعة", "TOEFL iBT, IELTS Academic, Cambridge (CAE/CPE) or PTE Academic for non-native speakers; minimums on the university's English requirements page"),
    ("القانون في المنطقتين القطبيتين (القانون الدولي والحوكمة والموارد والشعوب الأصلية)، بالإنجليزية بالكامل؛ MA لغير دارسي القانون (120 ساعة) وLLM لخريجي القانون (90 ساعة). يشترط بكالوريوس 3 سنوات (180 ساعة)، وسيرة ذاتية وخطاب أهداف وخطابا توصية",
     "The law of the Arctic and Antarctic (international law, governance, resources, indigenous peoples), taught entirely in English; an MA for non-lawyers (120 credits) and an LLM for law graduates (90 credits). Requires a 3-year bachelor's (180 ECTS), CV, statement of objectives and two reference letters"),
    UNAK_HOW, NP, NP, "https://www.unak.is/english/study/education/degree-seeking-students/polar-law", "https://www.unak.is/english/study/application")

# University Centre of the Westfjords (Isafjordur): enrolled at and graduating from the University of Akureyri
UW = "University Centre of the Westfjords (University of Akureyri)"
UW_FAQ = "https://www.uw.is/en/study/masters-programs/faq"
UW_FEE = ("غير منشور في المصدر: رسوم التسجيل السنوية للطلاب الدوليين 300,000 كرونة أيسلندية (حوالي 2,100 يورو) حسب المركز، ولم ينشر بعد الرسوم الدراسية لغير الأوروبيين من خريف 2027 (للتحقق)",
          "Not published in the source: the annual registration fee for international students is ISK 300,000 (about €2,100) per the centre, and tuition for non-EEA students from autumn 2027 is not published yet (to verify)")
UW_ADM = ("لا توجد رسوم تقديم", "No application fee")
UW_DL = ("15 فبراير موعد الأولوية و15 أبريل الموعد النهائي لغير الأوروبيين؛ البوابة تفتح 1 ديسمبر (للتحقق لدفعة 2027)", "15 February priority deadline and 15 April final deadline for non-EU applicants; the portal opens on 1 December (to verify for 2027)")
UW_EN = ("اختبار إنجليزية معترف به لمن لغته الأم ليست الإنجليزية؛ الحد الأدنى غير منشور في صفحة الأسئلة", "A recognised English test for non-native speakers; the minimum is not published on the FAQ page")
UW_HOW = ("التقديم أونلاين على بوابة جامعة أكوريري (النسخة الإنجليزية) مع سيرة ذاتية وخطاب نوايا وكشف درجات وإثبات الإنجليزية وخطابي توصية، ثم تصريح الإقامة من مديرية الهجرة",
          "Apply online on the University of Akureyri portal (English version) with CV, statement of intent, transcripts, English proof and two reference letters, then the residence permit from the Directorate of Immigration")
UW_DUR = ("18 إلى 24 شهراً (سنة دراسة في إيسافيوردور ثم رسالة 45 ساعة)", "18 to 24 months (one year of courses in Isafjordur, then a 45 ECTS thesis)")

add(MA, "env", "Coastal and Marine Management", UW, "Isafjordur", ("ماجستير إدارة الموارد (MRM)", "Master of Resource Management (MRM)"), UW_DUR, UW_FEE, UW_ADM, UW_DL, UW_EN,
    ("إدارة السواحل والبحار (مصايد، تخطيط بحري، تقييم أثر بيئي) بالإنجليزية في وحدات يدرّسها محاضرون من دول مختلفة؛ يشترط بكالوريوس 180 ساعة ويُفضل بتقدير جيد جداً، والشهادة من جامعة أكوريري",
     "Coastal and marine management (fisheries, marine spatial planning, environmental impact assessment) taught in English in modules by international lecturers; requires a 180 ECTS bachelor's, preferably first-class; the degree is from the University of Akureyri"),
    UW_HOW, NP, NP, UW_FAQ, "https://uw.is/is/saekja-um/meistaranam/umsoknarferlid")
add(MA, "pol", "Coastal Communities and Regional Development", UW, "Isafjordur", MAD, UW_DUR, UW_FEE, UW_ADM, UW_DL, UW_EN,
    ("التنمية الإقليمية والمجتمعات الساحلية في شمال الأطلسي بالإنجليزية في وحدات؛ يشترط بكالوريوس 180 ساعة ويُفضل بتقدير جيد جداً، والشهادة MA من جامعة أكوريري",
     "Regional development and coastal communities of the North Atlantic, taught in English in modules; requires a 180 ECTS bachelor's, preferably first-class; the MA is awarded by the University of Akureyri"),
    UW_HOW, NP, NP, UW_FAQ, "https://uw.is/is/saekja-um/meistaranam/umsoknarferlid")

# Agricultural University of Iceland (Hvanneyri)
add(MA, "env", "Restoration Ecology", "Agricultural University of Iceland", "Hvanneyri", MS, Y2,
    ("غير منشور في المصدر: صفحة البرنامج لا تذكر الرسوم، والجامعات العامة في أيسلندا مسموح لها بفرض رسوم على غير الأوروبيين من خريف 2027 (للتحقق)",
     "Not published in the source: the programme page gives no fees, and Iceland's public universities may charge non-EEA students from autumn 2027 (to verify)"),
    NP, ("31 يناير لغير الأوروبيين للبدء في خريف نفس السنة؛ لدفعة 2027 يُتوقع 31 يناير 2027 (للتحقق)", "31 January for non-EU applicants to start in the autumn of the same year; 31 January 2027 expected for 2027 (to verify)"),
    NP,
    ("ماجستير سنتين بدوام كامل عن مكافحة تدهور النظم البيئية واستعادتها؛ المقررات عادة بالإنجليزية، والبدء في الخريف فقط",
     "A two-year full-time master's on combating degradation and restoring ecosystems; courses are generally taught in English and the programme starts in autumn only"),
    ("التقديم على بوابة الجامعة الزراعية، ثم تصريح الإقامة من مديرية الهجرة", "Apply on the Agricultural University's portal, then the residence permit from the Directorate of Immigration"),
    NP, NP, "https://lbhi.is/en/education/postgraduate-studies/restoration-ecology-msc", "https://lbhi.is/en/education/postgraduate-studies/restoration-ecology-msc")

append_extra("أيسلندا", "iceland", MA, REVIEWED)
