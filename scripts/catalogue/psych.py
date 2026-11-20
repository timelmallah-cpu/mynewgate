# Psychology in English (bachelor's and master's), added 2026-11-19. Append-only:
# bachelor's through helpers.append_ba (re-run after hungary_ba.py or netherlands_ba.py), master's through
# helpers.append_extra (re-run after italy.py/italy_more.py, hungary.py, belgium master script or lithuania.py).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, NP
from helpers import add, append_extra, append_ba

REVIEWED = "2026-11-19"
NOTE_R = ("الصفحة الرسمية: الشروط والرسوم", "Official page: requirements and fees")
NOTE_A = ("صفحة التقديم الرسمية", "Official application page")
BA_PSY = ("بكالوريوس في علم النفس", "Bachelor's in Psychology")
MA_PSY = ("ماجستير في علم النفس", "Master's in Psychology")
S6 = ("6 فصول دراسية (3 سنوات)", "6 semesters (3 years)")
BA3 = ("3 سنوات (180 ساعة معتمدة)", "3 years (180 credits)")
Y2 = ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)")
Y1 = ("سنة واحدة (60 ساعة معتمدة)", "1 year (60 credits)")

BA = {}
MA = {}


def ba(cc, name, uni, city, dur, fee, adm, dl, en, other, how, src, apply=None):
    BA.setdefault(cc, []).append(P(field="psych", name=name, uni=uni, city=city, deg=BA_PSY, dur=dur, fee=fee, adm=adm, dl=dl, en=en,
                                   other=other, how=how, living=NP, house=NP, src=src, req=src, req_note=NOTE_R,
                                   apply=apply or src, apply_note=NOTE_A))


def ma(cc, name, uni, city, dur, fee, adm, dl, en, other, how, src, apply=None, deg=MA_PSY):
    add(MA.setdefault(cc, []), "psych", name, uni, city, deg, dur, fee, adm, dl, en, other, how, NP, NP, src, apply or src)


# ---------- Hungary: ELTE and Szeged ----------
ELTE = "Eötvös Loránd University (ELTE)"
ELTE_ADM = ("رسوم طلب غير مستردة: 180 يورو حتى 31 يناير، و240 يورو من 1 فبراير إلى 31 مايو، و300 يورو من 1 إلى 8 يونيو؛ رسوم حجز 10% من الرسوم الدراسية",
            "Non-refundable application fee: €180 until 31 January, €240 from 1 February to 31 May, €300 from 1 to 8 June; reservation fee of 10% of tuition")
ELTE_DL = ("التقديم المبكر حتى 31 يناير، والعادي من 1 فبراير إلى 31 مايو، والمتأخر من 1 إلى 8 يونيو (دفعة سبتمبر)",
           "Early application until 31 January, regular from 1 February to 31 May, late from 1 to 8 June (September intake)")
ELTE_EN = ("IELTS 6.5 أو أكثر، أو شهادة Cambridge بمستوى B2، أو TOEFL iBT من 79 إلى 93؛ والدراسة السابقة بالإنجليزية تكفي كإثبات",
           "IELTS 6.5 or higher, a B2 Cambridge certificate, or TOEFL iBT 79-93; previous studies in English also count as proof")
ba("hu", "Psychology BA", ELTE, "Budapest", S6,
   ("9,400 يورو سنوياً (4,700 يورو كل فصل دراسي)", "€9,400 a year (€4,700 each semester)"),
   ELTE_ADM, ELTE_DL, ELTE_EN,
   ("امتحان قبول شفوي (يمكن أونلاين): مناقشة مقال في علم النفس تقرؤه قبلها بساعة، ثم أسئلة عن دوافعك؛ خطاب دافع من 1,500 إلى 2,500 حرف",
    "Oral entrance exam (can be online): discussion of a psychology article you read an hour before, then questions on your motivation; motivation letter of 1,500-2,500 characters"),
   ("التقديم الإلكتروني على بوابة ELTE مع دفع رسوم الطلب", "Online on ELTE's application portal with the application fee"),
   "https://ppk.elte.hu/en/node/238347", "https://apply.elte.hu/enter/200")
ba("hu", "Psychology BA", "University of Szeged", "Szeged", S6,
   ("7,000 يورو سنوياً (3,500 يورو كل فصل دراسي)؛ للقادمين من دول تحتاج تأشيرة يُدفع الفصلان الأول والثاني مقدماً",
    "€7,000 a year (€3,500 each semester); applicants from visa-restricted countries pay the first and second semesters in advance"),
   ("رسوم طلب 79 يورو لكل برنامج (غير مستردة)", "€79 application fee per programme (non-refundable)"),
   NP, NP,
   ("امتحان قبول كتابي أونلاين", "Written online entrance exam"),
   ("التقديم الإلكتروني على apply.u-szeged.hu", "Online at apply.u-szeged.hu"),
   "https://apply.u-szeged.hu/en_GB/courses/course/489-ba-psychology")
ma("hu", "Psychology MA", ELTE, "Budapest", ("سنتان (4 فصول دراسية، 120 ساعة معتمدة)", "2 years (4 semesters, 120 credits)"),
   ("9,400 يورو سنوياً (4,700 يورو كل فصل دراسي)", "€9,400 a year (€4,700 each semester)"),
   ELTE_ADM, ELTE_DL, ELTE_EN,
   ("بكالوريوس في علم النفس أو مجال قريب بحد أدنى 100 ساعة معتمدة في علم النفس؛ امتحان قبول (مناقشة مقال، وتقييم الخطاب والسيرة الذاتية، وبحث مكتوب سابق)؛ تخصصان: علم النفس الإكلينيكي والصحي، والإرشاد وعلم النفس التربوي، ولا يبدأ التخصص إلا بـ12 طالباً على الأقل",
    "A bachelor's in Psychology or a related field with at least 100 ECTS in psychology; entrance exam (article discussion, letter and CV, and a previous written paper); two specialisations, Clinical and Health Psychology and Counselling and Educational Psychology, each starting only with at least 12 students"),
   ("التقديم الإلكتروني على بوابة ELTE", "Online on ELTE's application portal"),
   "https://ppk.elte.hu/en/node/238348", "https://www.elte.hu/en/psychology-ma")

# ---------- Netherlands: Groningen and Twente ----------
ba("nl", "Psychology (English-taught)", "University of Groningen", "Groningen", ("3 سنوات (180 ساعة معتمدة)", "3 years (180 EC)"),
   ("14,400 يورو سنوياً لغير الأوروبيين في 2027/2028 (14,000 يورو في 2026/2027)", "€14,400 a year for non-EU students in 2027/2028 (€14,000 in 2026/2027)"),
   NP,
   ("لدفعة سبتمبر 2027: آخر موعد للتقديم 15 يناير 2027، واختبار الاختيار 6 مارس 2027", "For September 2027: application deadline 15 January 2027, selection test 6 March 2027"),
   ("نتيجة مرضية في أحد اختبارات الإنجليزية المعتمدة (القائمة في صفحة الجامعة)", "Satisfactory results in one of the standard English tests (list on the university page)"),
   ("عدد محدود (numerus fixus) بحد أقصى 225 طالباً سنوياً مع إجراءات اختيار؛ الرياضيات ليست شرطاً لكن يُنصح بها بقوة",
    "Fixed quota (numerus fixus) of at most 225 students a year with a selection procedure; mathematics is not required but strongly recommended"),
   ("التقديم على Studielink ثم إجراءات الاختيار في الجامعة", "Apply via Studielink, then the university's selection procedure"),
   "https://www.rug.nl/bachelors/psychology-en/admission-and-application", "https://www.rug.nl/gmw/bachelors/psychology/selectieprocedure-bachelor-psychology-en")
ma("nl", "Psychology (MSc)", "University of Groningen", "Groningen", Y1,
   ("22,800 يورو سنوياً لغير الأوروبيين في 2027/2028 (22,200 يورو في 2026/2027)", "€22,800 a year for non-EU students in 2027/2028 (€22,200 in 2026/2027)"),
   NP,
   ("لدفعة سبتمبر 2027: 1 مارس 2027 للمسارات التي فيها اختيار و1 مايو 2027 لغيرها؛ ولدفعة فبراير 2028: 1 أكتوبر أو 15 أكتوبر 2027؛ ويُنصح غير الأوروبيين بالتقديم قبلها بشهر على الأقل",
    "For September 2027: 1 March 2027 for tracks with selection and 1 May 2027 for the others; for February 2028: 1 or 15 October 2027; non-EU applicants should apply at least a month earlier"),
   ("إثبات إجادة الإنجليزية حسب خلفيتك والمسار (الدرجة المطلوبة في صفحة القبول)", "Proof of English proficiency depending on your background and track (score on the admission page)"),
   ("11 مساراً منها علم الأعصاب المعرفي التطبيقي، وعلم النفس الاجتماعي التطبيقي، وعلم النفس الجنائي الإكلينيكي، وعلم النفس البيئي، وعلم نفس العمل والمنظمات؛ معظم المسارات بأماكن محدودة وقد تحتاج برنامجاً تمهيدياً",
    "11 tracks including Applied Cognitive Neuroscience, Applied Social Psychology, Clinical Forensic Psychology, Environmental Psychology and Work, Organizational and Personnel Psychology; most tracks have limited places and some applicants need a pre-master"),
   ("التقديم على Studielink ثم بوابة الجامعة", "Apply via Studielink, then the university portal"),
   "https://www.rug.nl/masters/psychology/?lang=en")
ma("nl", "Psychology (MSc)", "University of Twente", "Enschede", Y1,
   ("18,720 يورو سنوياً لغير الأوروبيين في 2027/2028 (18,200 يورو في 2026/2027)", "€18,720 a year for non-EU students in 2027/2028 (€18,200 in 2026/2027)"),
   NP,
   ("لغير الأوروبيين: 1 أكتوبر 2026 (بداية 1 فبراير 2027) و1 مايو 2027 (بداية 1 سبتمبر 2027)", "Non-EU: 1 October 2026 (start 1 February 2027) and 1 May 2027 (start 1 September 2027)"),
   NP,
   ("تخصص Positive Clinical Psychology & Technology بإجراءات اختيار وعدد محدود", "The Positive Clinical Psychology & Technology specialisation has a selection procedure and limited places"),
   ("التقديم الإلكتروني على موقع الجامعة", "Online on the university website"),
   "https://www.utwente.nl/en/education/master/programmes/psychology/masters-structure.rtd/factsheet")

# ---------- Italy: University of Padova ----------
PD = "University of Padova"
PD_FEE = ("2,990 يورو سنوياً لغير الأوروبيين الذين تقيم أسرتهم خارج إيطاليا (رسوم ثابتة لبرامج المجموعة B، ومنها كل برامج مدرسة علم النفس، 2026/2027)؛ وطلاب الدول الأفقر في القائمة الوزارية يدفعون الثلث (996.66 يورو)",
          "€2,990 a year for non-EU students whose family lives outside Italy (fixed fee for Group B programmes, which include all programmes of the School of Psychology, 2026/2027); students from the poorest countries on the ministerial list pay one third (€996.66)")
PD_DL = ("البرامج ذات الأماكن المحدودة لدفعة 2027/2028: لغير الأوروبيين المقيمين بالخارج من 7 يناير إلى 7 مارس 2027 (للتحقق في إعلان البرنامج)",
         "Limited-place programmes for 2027/2028: non-EU applicants residing abroad from 7 January to 7 March 2027 (check the programme's call)")
PD_EN = ("مستوى B2 في الإنجليزية أو ما يعادله", "English at B2 (CEFR) or equivalent")
PD_HOW = ("التقديم أونلاين على بوابة apply.unipd.it، ثم ما قبل التسجيل على بوابة Universitaly وطلب التأشيرة", "Apply online on apply.unipd.it, then pre-enrol on Universitaly and apply for the visa")
ba("it", "Psychological Science", PD, "Padua", BA3, PD_FEE,
   ("رسوم تقديم 30 يورو ورسوم قبول المقعد 205 يورو (غير مستردة)", "€30 application fee and €205 fee to accept the place (non-refundable)"),
   ("لدفعة 2026/2027 كان إعلان غير الأوروبيين من 7 يناير إلى 7 مارس 2026، ولدفعة 2027/2028 من 7 يناير إلى 7 مارس 2027 (للتحقق في إعلان البرنامج)",
    "For 2026/2027 the non-EU call ran from 7 January to 7 March 2026; for 2027/2028 from 7 January to 7 March 2027 (check the programme's call)"),
   PD_EN,
   ("عدد محدود: 45 مقعداً لغير الأوروبيين المقيمين بالخارج في إعلان 2025/2026؛ القبول بالترتيب بعد التحقق من الشهادة واختبار القبول الخاص بالبرنامج",
    "Limited places: 45 for non-EU applicants residing abroad in the 2025/2026 call; ranking after checking the entry qualification and the programme's admission test"),
   PD_HOW, "https://www.unipd.it/en/corsi-di-laurea/psychological-science", "https://www.unipd.it/en/avvisi-ammissione-titoli-esteri")
PD_MA = [("Applied Child and Adolescent Psychology", 40, ("متوسط درجات لا يقل عن 25/30 في مواد علم النفس النمائي والتربوي والاجتماعي (M-PSI/03-05)", "An average of at least 25/30 in developmental, educational and social psychology exams (M-PSI/03-05)")),
         ("Clinical, Social and Intercultural Psychology", 20, ("بكالوريوس علم نفس (L-24) أو 88 ساعة معتمدة في مواد علم النفس، ومتوسط لا يقل عن 25/30 وتقدير تخرج لا يقل عن 95/110 أو ما يعادله", "A psychology bachelor's (L-24) or 88 credits in psychology, an average of at least 25/30 and a final grade of at least 95/110 or equivalent")),
         ("Cognitive Neuroscience and Clinical Neuropsychology", 20, ("50 ساعة معتمدة على الأقل في مواد M-PSI/01-03 ومتوسط لا يقل عن 25/30", "At least 50 credits in M-PSI/01-03 exams and an average of at least 25/30"))]
for name, seats, req in PD_MA:
    ma("it", name, PD, "Padua", Y2, PD_FEE, ("رسوم ما قبل التسجيل 30 يورو", "€30 pre-enrolment fee"), PD_DL, PD_EN,
       (f"{seats} مقعداً لغير الأوروبيين المقيمين بالخارج (إعلان 2026/2027)؛ " + req[0], f"{seats} places for non-EU applicants residing abroad (2026/2027 call); " + req[1]),
       PD_HOW, "https://www.unipd.it/en/avvisi-ammissione-titoli-esteri", "https://www.unipd.it/en/avvisi-ammissione-titoli-esteri",
       deg=("ماجستير (Laurea Magistrale)", "Master's degree (Laurea Magistrale)"))

# ---------- Belgium: KU Leuven ----------
ma("be", "Master of Psychology: Theory and Research", "KU Leuven", "Leuven", Y2,
   ("يُحسب حسب البرنامج عبر حاسبة رسوم KU Leuven - غير منشور في المصدر", "Calculated per programme with KU Leuven's tuition fee tool - not published in the source"),
   NP,
   ("1 مارس لغير الأوروبيين المقيمين خارج بلجيكا (موعد صارم) - للعام 2027/28 يُتوقع 1 مارس 2027 (للتحقق)", "1 March for non-EU applicants living outside Belgium (strict) - 1 March 2027 expected for 2027/28 (to verify)"),
   ("إثبات إجادة الإنجليزية (التفاصيل في صفحة شروط القبول)", "Proof of English proficiency (details on the admission page)"),
   ("ماجستير بحثي يُعد لدكتوراه أو عمل بحثي؛ خطاب من صفحة واحدة عن اهتمامك بالبحث في علم النفس", "A research master's preparing for a PhD or a research career; a one-page letter on your interest in psychological research"),
   ("التقديم الإلكتروني على نظام KU Leuven", "Online through KU Leuven's application system"),
   "https://onderwijsaanbod.kuleuven.be/opleidingen/e/SC_52844468.htm")

# ---------- Lithuania: Vytautas Magnus University ----------
ma("lt", "Organizational Psychology", "Vytautas Magnus University", "Kaunas", Y2,
   ("5,266 يورو سنوياً", "€5,266 a year"),
   ("رسوم طلب 100 يورو غير مستردة (لغير الأوروبيين عبر Flywire)", "€100 non-refundable application fee (non-EU applicants pay through Flywire)"),
   NP, NP,
   ("يُرسل كشف الدرجات مباشرة من الجامعة السابقة إلى recognition@vdu.lt", "The transcript is sent directly by the previous university to recognition@vdu.lt"),
   ("التقديم الإلكتروني على DreamApply", "Online through DreamApply"),
   "https://vytautasmagnus.dreamapply.com/courses/course/83-ma-organizational-psychology")

BA_C = {"hu": ("المجر", "hungary"), "nl": ("هولندا", "netherlands"), "it": ("إيطاليا", "italy")}
MA_C = {"hu": ("المجر", "hungary"), "nl": ("هولندا", "netherlands"), "it": ("إيطاليا", "italy"), "be": ("بلجيكا", "belgium"), "lt": ("ليتوانيا", "lithuania")}

if __name__ == "__main__":
    for cc, lst in BA.items():
        append_ba(BA_C[cc][0], BA_C[cc][1], lst, REVIEWED)
    for cc, lst in MA.items():
        append_extra(MA_C[cc][0], MA_C[cc][1], lst, REVIEWED)
    print("psychology:", sum(map(len, BA.values())), "bachelor's,", sum(map(len, MA.values())), "master's")
