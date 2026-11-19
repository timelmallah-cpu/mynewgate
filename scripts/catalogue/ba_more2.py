# More English-taught bachelor's for Finland and Italy, added 2026-11-19 (official pages only).
# Append-only per country (helpers.append_ba): re-run after the countries' own *_ba scripts.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, NP
from helpers import append_ba

REVIEWED = "2026-11-19"
NOTE_R = ("الصفحة الرسمية: الشروط والرسوم", "Official page: requirements and fees")
NOTE_A = ("صفحة التقديم الرسمية", "Official application page")
BSC = ("بكالوريوس (BSc)", "Bachelor's degree (BSc)")
BSCT = ("بكالوريوس العلوم في التكنولوجيا (BSc Tech)", "Bachelor of Science in Technology (BSc Tech)")
BA_ = ("بكالوريوس (BA)", "Bachelor's degree (BA)")
Y3 = ("3 سنوات (180 ساعة معتمدة)", "3 years (180 credits)")
Y32 = ("3 سنوات (180 ساعة معتمدة)، مع حق إكمال الماجستير سنتين", "3 years (180 credits), with the right to continue to a 2-year master's")
B = {}


def add(cc, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply=None):
    B.setdefault(cc, []).append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en,
                                  other=other, how=how, living=NP, house=NP, src=src, req=src, req_note=NOTE_R,
                                  apply=apply or src, apply_note=NOTE_A))


# ---------------- Finland: Tampere University (joint application 7-21 Jan 2027)
TAU_FEE = ("10,000 يورو سنوياً لغير الأوروبيين المقبولين في 2027", "€10,000 a year for non-EU students admitted in 2027")
TAU_DL = ("من 7 يناير 2027 الساعة 8:00 حتى 21 يناير 2027 الساعة 15:00 بتوقيت فنلندا (التقديم المشترك)، والدراسة تبدأ في أغسطس 2027", "7 January 2027 at 8:00 to 21 January 2027 at 15:00 Finnish time (joint application); studies start in August 2027")
TAU_ADM = ("شروط القبول ومعايير الاختيار (مثل SAT) منشورة في Studyinfo.fi وليست في صفحة البرنامج", "Admission criteria (such as SAT) are published on Studyinfo.fi, not on the programme page")
TAU_EN = ("مطلوب إثبات الإنجليزية حسب صفحة متطلبات اللغة للبكالوريوس (المستوى غير منشور في صفحة البرنامج)", "Proof of English per the bachelor's language requirements page (level not on the programme page)")
TAU_HOW = ("التقديم في Studyinfo.fi خلال فترة التقديم المشترك؛ يمكن اختيار حتى 6 برامج في طلب واحد", "Apply on Studyinfo.fi during the joint application; up to six programmes in one application")
TAU_FEES = "https://www.tuni.fi/en/tau/financial-matters/tuition-fees-and-scholarships"
TAU = "https://www.tuni.fi/en/tau/bachelors-programmes/"
for field, name, slug, other in [
    ("cs", "Computing Sciences and Electrical Engineering", "computing-sciences-and-electrical-engineering",
     ("علوم الحاسب والهندسة الكهربائية، 3 سنوات بكالوريوس ثم سنتان ماجستير", "Computing sciences and electrical engineering, 3-year bachelor's then 2-year master's")),
    ("eng", "Automation and Robotics, Science and Engineering", "automation-and-robotics-science-and-engineering",
     ("الأتمتة والروبوتات ضمن برنامج العلوم والهندسة", "Automation and robotics within the Science and Engineering programme")),
    ("eng", "Biomedical Engineering, Science and Engineering", "biomedical-engineering-science-and-engineering",
     ("الهندسة الطبية الحيوية ضمن برنامج العلوم والهندسة", "Biomedical engineering within the Science and Engineering programme")),
    ("eng", "Environmental Engineering, Science and Engineering", "environmental-engineering-science-and-engineering",
     ("الهندسة البيئية ضمن برنامج العلوم والهندسة", "Environmental engineering within the Science and Engineering programme")),
    ("pol", "Socially Sustainable Societies", "socially-sustainable-societies",
     ("العلوم الاجتماعية: المجتمعات المستدامة اجتماعياً", "Social sciences: socially sustainable societies")),
]:
    add("fi", field, name, "Tampere University", "Tampere", BSC, Y32, TAU_FEE, TAU_ADM, TAU_DL, TAU_EN, other, TAU_HOW, TAU + slug, TAU_FEES)

# ---------------- Finland: Aalto University (7-22 Jan 2027)
AA_FEE = ("12,000 يورو سنوياً لغير الأوروبيين في البكالوريوس", "€12,000 a year for non-EU students in the bachelor's")
AA_DL = ("من 7 يناير 2027 حتى 22 يناير 2027 الساعة 15:00 بتوقيت فنلندا، والدراسة تبدأ في أغسطس/سبتمبر 2027", "7 January 2027 to 22 January 2027 at 15:00 Finnish time; studies start in August/September 2027")
AA_ADM = ("الأهلية العامة للتعليم العالي؛ معايير الاختيار في صفحة التقديم على برامج البكالوريوس الإنجليزية", "General eligibility for higher education; selection criteria on the page for applying to English-taught bachelor's")
AA_HOW = ("التقديم في Studyinfo.fi (Opintopolku) على برنامج البكالوريوس في العلوم والتكنولوجيا واختيار التخصص", "Apply on Studyinfo.fi (Opintopolku) to the Bachelor's Programme in Science and Technology and choose the major")
AA_FEES = "https://www.aalto.fi/en/admission-services/apply-to-bachelors-programmes-in-english"
for field, name, url, other in [
    ("ds", "Science and Technology: Data Science", "https://www.aalto.fi/study-options/aalto-bachelors-programme-in-science-and-technology-data-science",
     ("تخصص علم البيانات ضمن برنامج البكالوريوس الوحيد بالإنجليزية في العلوم والتكنولوجيا بجامعة آلتو", "Data science major in Aalto's only English-taught science and technology bachelor's")),
    ("eng", "Science and Technology: Digital Systems and Design", "https://aalto.fi/study-options/digital-systems-and-design-bachelor-of-science-technology-master-of-science",
     ("الأنظمة الرقمية والتصميم: الأنظمة المدمجة ونظرية التحكم ومعالجة الإشارات، والبرنامج كله بالإنجليزية", "Digital systems and design: embedded systems, control theory and signal processing, fully in English")),
    ("eng", "Science and Technology: Computational Engineering", "https://aalto.fi/study-options/computational-engineering-bachelor-of-science-technology-master-of-science-technology",
     ("الهندسة الحاسوبية، 3 سنوات بكالوريوس ثم سنتان ماجستير", "Computational engineering, 3-year bachelor's then 2-year master's")),
]:
    add("fi", field, name, "Aalto University", "Espoo", BSCT, Y32, AA_FEE, AA_ADM, AA_DL, NP, other, AA_HOW, url, AA_FEES)

# ---------------- Finland: LUT University (rolling admission)
add("fi", "eng", "Energy Technology", "LUT University", "Lappeenranta", BSCT, Y32,
    ("12,000 يورو سنوياً لطلاب البكالوريوس من غير الأوروبيين (قائمة الأسعار من خريف 2026)", "€12,000 a year for non-EU bachelor's students (price list from autumn 2026)"),
    ("لا توجد منح في السنة الأولى لبعض البرامج حسب سياسة الجامعة؛ راجع صفحة الرسوم", "Some programmes offer no first-year scholarship; see the fee page"),
    ("قبول متجدد من 1 سبتمبر 2026 حتى 30 أبريل 2027 الساعة 15:00 بتوقيت فنلندا، طالما توجد أماكن", "Rolling admission from 1 September 2026 to 30 April 2027 at 15:00 Finnish time, while places remain"),
    NP,
    ("هندسة الطاقة: الديناميكا الحرارية وميكانيكا الموائع وهندسة محطات الطاقة والطاقة النووية (الجامعة الوحيدة في فنلندا التي تدرّس أمان الطاقة النووية)", "Energy technology: thermodynamics, fluid mechanics, power plant and nuclear engineering (the only Finnish university teaching nuclear safety)"),
    ("التقديم أونلاين على نموذج جامعة LUT ورفع المستندات؛ كلما قدّمت أبكر كانت فرصة الأماكن أكبر", "Apply online on LUT's form and upload documents; earlier is better as places fill"),
    "https://www.lut.fi/en/studies/tekniikka/bachelors-programme-energy-technology", "https://elut.lut.fi/en/node/732")

# ---------------- Italy: University of Bologna
BO_FEE = ("1,000 + 157.04 يورو سنوياً: رسوم ثابتة مخفضة لمواطني الدول خارج منظمة OECD إذا كان دخل الأسرة وأملاكها خارج إيطاليا فقط (2026/2027)؛ وغير ذلك حسب دخل الأسرة",
          "€1,000 + €157.04 per year: reduced fixed fee for nationals of non-OECD countries whose family income and assets are only outside Italy (2026/2027); otherwise based on family income")
BO_DL = ("مواعيد 2027/2028 غير منشورة بعد؛ تُنشر في دعوة التقديم الخاصة بالبرنامج، ومن يحتاج تأشيرة يقدّم في الجولة الأولى", "2027/2028 dates not published yet; they appear in the programme's call, and visa applicants should use the first round")
BO_HOW = ("التقديم أونلاين على بوابة Studenti Online بجامعة بولونيا، ثم التسجيل المسبق على Universitaly لطلب التأشيرة", "Apply online on the University of Bologna's Studenti Online, then pre-enrol on Universitaly for the visa")
add("it", "pol", "European Studies", "University of Bologna", "Bologna", BA_, Y3, BO_FEE,
    ("قبول مفتوح (بدون عدد محدود)", "Open access (no cap)"), BO_DL,
    ("غير منشور في صفحة البرنامج (راجع قسم How to enrol)", "Not on the programme page (see How to enrol)"),
    ("دراسات أوروبية بالإنجليزية في بولونيا وفورلي، مع اختيار تخصص بعد السنة الأولى", "European studies in English in Bologna and Forlì, with a specialisation chosen after year one"),
    BO_HOW, "https://www.unibo.it/en/study/first-and-single-cycle-degree/programme/2026/6653")
add("it", "pol", "International Studies", "University of Bologna", "Forlì", BA_, Y3, BO_FEE,
    ("قبول محدود العدد باختبار TOLC-E", "Restricted access with the TOLC-E test"), BO_DL,
    ("غير منشور في صفحة القسم (راجع دعوة البرنامج)", "Not on the department page (see the programme call)"),
    ("دراسات دولية بالإنجليزية في حرم فورلي", "International studies in English at the Forlì campus"),
    BO_HOW, "https://dsps.unibo.it/en/teaching/degree")

# ---------------- Italy: Politecnico di Torino (English track)
PT_FEE = ("رسوم ثابتة لغير الأوروبيين المقيمين خارج إيطاليا حسب دولة الجنسية (الملحق 2): 761 يورو سنوياً للدول غير المذكورة في القائمة، والحد الأقصى 3,600 يورو (2026/2027)",
          "Flat fee for non-EU students living abroad, by country of citizenship (Annex 2): €761 a year for countries not listed, up to €3,600 (2026/2027)")
PT_ADM = ("عدد مقاعد محدود واختبار قبول إلزامي (TIL-I) لمسار الإنجليزية", "Capped places and a mandatory admission test (TIL-I) for the English track")
PT_DL = ("مواعيد 2027/2028 غير منشورة بعد؛ في 2026/2027 كانت جلسات الاختبار لغير الأوروبيين الذين يحتاجون تأشيرة أبكر من غيرهم (للتحقق)", "2027/2028 dates not published yet; in 2026/2027 test sessions for non-EU visa applicants were earlier than others (to verify)")
PT_EN = ("شهادة إنجليزية بمستوى B2 أو أعلى لمسار الإنجليزية", "English certificate at B2 or above for the English track")
PT_HOW = ("التسجيل على منصة Apply@polito وحجز جلسة اختبار TIL-I ودفع رسومه، ثم التسجيل المسبق على Universitaly للتأشيرة", "Register on Apply@polito, book and pay for a TIL-I session, then pre-enrol on Universitaly for the visa")
PT_FEES = "https://www.polito.it/sites/default/files/2026-10/ENG_Regolamento%20L%20imma%2025_26%20+%20LM_LS.pdf"
add("it", "cs", "Computer Engineering (English track)", "Politecnico di Torino", "Turin", BSC, Y3, PT_FEE, PT_ADM, PT_DL, PT_EN,
    ("هندسة الحاسب بمسار كامل بالإنجليزية: الرياضيات والفيزياء والبرمجة ثم الإلكترونيات وقواعد البيانات", "Computer engineering fully in English: maths, physics and programming, then electronics and databases"),
    PT_HOW, "https://www.polito.it/en/education/bachelor-s-degree-programmes/computer-engineering", PT_FEES)
add("it", "eng", "Mechanical Engineering (English track)", "Politecnico di Torino", "Turin", BSC, Y3, PT_FEE, PT_ADM, PT_DL, PT_EN,
    ("الهندسة الميكانيكية بمسار كامل بالإنجليزية بنفس مواد المسار الإيطالي", "Mechanical engineering fully in English with the same subjects as the Italian track"),
    PT_HOW, "https://www.polito.it/en/education/bachelor-s-degree-programmes/mechanical-engineering", PT_FEES)

C = {"fi": ("فنلندا", "finland"), "it": ("إيطاليا", "italy")}

if __name__ == "__main__":
    for cc, lst in B.items():
        append_ba(C[cc][0], C[cc][1], lst, REVIEWED)
    print("ba_more2:", sum(map(len, B.values())), "bachelor's")
