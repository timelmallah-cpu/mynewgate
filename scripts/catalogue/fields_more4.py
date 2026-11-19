# Small fields, batch 4 (19 Nov 2026). Append-only (helpers.append_extra / append_ba); re-run after the countries' own
# scripts (netherlands, hungary, lithuania, netherlands_ba).
# Master's: education (Groningen, Twente, ELTE). Bachelor's: law (MRU Law and Global Security; Tilburg Global Law already exists in netherlands_ba).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, NP
from helpers import add, append_extra, append_ba

REVIEWED = "2026-11-19"
NOTE_R = ("الصفحة الرسمية: الشروط والرسوم", "Official page: requirements and fees")
NOTE_A = ("صفحة التقديم الرسمية", "Official application page")
MA, BA = {}, {}


def ma(cc, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply=None):
    add(MA.setdefault(cc, []), field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, NP, NP, src, apply or src)


def ba(cc, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply=None):
    BA.setdefault(cc, []).append(P(field="law", name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en,
                                   other=other, how=how, living=NP, house=NP, src=src, req=src, req_note=NOTE_R,
                                   apply=apply or src, apply_note=NOTE_A))


MSC = ("ماجستير العلوم (MSc)", "Master of Science (MSc)")
Y1 = ("سنة واحدة (60 ساعة معتمدة)", "1 year (60 credits)")

# ---------- Netherlands: Groningen ----------
ma("nl", "edu", "Educational Sciences: Learning in Interaction (MSc)", "University of Groningen", "Groningen", MSC, Y1,
   ("22,200 يورو سنوياً لغير الأوروبيين (2026/2027)", "€22,200 a year for non-EU students (2026/2027)"),
   ("يُطلب بكالوريوس في علوم التربية أو مجال قريب؛ لجنة القبول تقيّم الملف", "A bachelor's in educational sciences or a related field; the admissions board assesses the file"),
   ("1 مايو 2027 للبدء في سبتمبر 2027؛ و15 أكتوبر 2026 للبدء في فبراير 2027", "1 May 2027 for a September 2027 start; 15 October 2026 for a February 2027 start"),
   ("IELTS 6.5 أو TOEFL ما يعادله (للتحقق من الصفحة الرسمية)", "IELTS 6.5 or equivalent TOEFL (to verify on the official page)"),
   ("علوم التربية: التعلم والتفاعل في المدرسة والأسرة، مع مسارات بحثية وتطبيقية", "Educational sciences: learning and interaction at school and at home, with research and applied tracks"),
   ("التسجيل في Studielink ثم رفع المستندات في بوابة جامعة خرونينجن", "Register in Studielink, then upload documents in the University of Groningen portal"),
   "https://www.rug.nl/masters/educational-sciences/", "https://www.rug.nl/masters/educational-sciences/")

# ---------- Netherlands: Twente ----------
ma("nl", "edu", "Educational Science and Technology (MSc)", "University of Twente", "Enschede", MSC,
   ("سنة واحدة", "1 year"),
   ("18,200 يورو سنوياً لغير الأوروبيين في 2026/2027، و18,720 يورو في 2027/2028 (فئة الماجستير الأقل رسوماً)", "€18,200 a year for non-EU students in 2026/2027 and €18,720 in 2027/2028 (lower-rate master's)"),
   ("قد تُطلب رسوم طلب؛ يُطلب بكالوريوس في علوم التربية أو مجال قريب", "An application fee may apply; requires a bachelor's in educational sciences or a related field"),
   ("1 مايو 2027 لغير الأوروبيين للبدء في 1 سبتمبر 2027؛ و1 أكتوبر 2026 للبدء في 1 فبراير 2027", "1 May 2027 for non-EU applicants (start 1 September 2027); 1 October 2026 for a 1 February 2027 start"),
   NP,
   ("علوم التربية وتقنيات التعلم: تصميم التعليم والتدريب والتعلم الرقمي في المدارس والشركات", "Educational science and learning technology: designing education, training and digital learning in schools and companies"),
   ("التسجيل في Studielink ثم بوابة جامعة توينتي", "Register in Studielink, then the University of Twente portal"),
   "https://www.utwente.nl/en/education/master/programmes/educational-science-technology/master-structure.rtd/factsheet",
   "https://www.utwente.nl/en/education/master/financial/tuition-fees/")

# ---------- Hungary: ELTE ----------
ma("hu", "edu", "Educational Science MA", "Eötvös Loránd University (ELTE)", "Budapest", ("ماجستير الآداب (MA)", "Master of Arts (MA)"),
   ("4 فصول (120 ساعة معتمدة)", "4 semesters (120 credits)"),
   ("3,250 يورو للفصل", "€3,250 per semester"),
   ("رسوم طلب 120 يورو ورسوم اختبار قبول 120 يورو", "€120 application fee and €120 entrance examination fee"),
   ("غير منشور في المصدر (راجع بوابة التقديم)", "Not published in the source (see the application portal)"),
   ("مستوى B2 يُقيَّم في المقابلة، دون شهادة لغة", "B2 level assessed at the interview, no certificate required"),
   ("علوم التربية بالإنجليزية في بودابست؛ يشمل مقابلة قبول", "Educational science taught in English in Budapest; includes an admission interview"),
   ("التقديم على بوابة ELTE ودفع الرسوم ثم المقابلة، ثم تصريح الإقامة للدراسة", "Apply on the ELTE portal, pay the fees, then the interview and the residence permit for study"),
   "https://www.elte.hu/en/educational-science-ma", "https://apply.elte.hu/enter/230")

# ---------- Bachelor's: law ----------
ba("lt", "Law and Global Security", "Mykolas Romeris University (MRU)", "Vilnius", ("بكالوريوس القانون", "Bachelor of Law"),
   ("3.5 سنوات (210 ساعات معتمدة)", "3.5 years (210 credits)"),
   ("3,250 يورو سنوياً للجميع (2026/2027)", "€3,250 a year for everyone (2026/2027)"),
   ("رسوم طلب 100 يورو لغير الأوروبيين ورسوم تسجيل 50 يورو، غير مستردة", "€100 application fee for non-EU citizens and €50 registration fee, non-refundable"),
   ("غير منشور في المصدر؛ يجب الوصول إلى الجامعة قبل 1 سبتمبر", "Not published in the source; students must arrive by 1 September"),
   ("مستوى B2: IELTS 5.5 أو TOEFL iBT 72 أو Duolingo 100، أو اختبار أونلاين مجاني من الجامعة", "B2: IELTS 5.5, TOEFL iBT 72 or Duolingo 100, or the university's free online test"),
   ("القانون والأمن العالمي: الجرائم المالية وقانون الأمن السيبراني والإرهاب؛ خطاب دافع يُكتب دون ذكاء اصطناعي", "Law and global security: financial crime, cyber security law and terrorism; motivation letter written without AI"),
   ("التقديم على apply.mruni.eu ودفع رسوم الطلب، ثم دفع رسوم السنة الأولى وتوقيع العقد وتصريح الإقامة المؤقتة", "Apply on apply.mruni.eu and pay the application fee, then the first-year tuition, the contract and the temporary residence permit"),
   "https://www.mruni.eu/en/study_program/law-and-global-security-2/", "https://apply.mruni.eu/courses/course/71")

C = {"nl": ("هولندا", "netherlands"), "hu": ("المجر", "hungary"), "lt": ("ليتوانيا", "lithuania")}

if __name__ == "__main__":
    for cc, lst in MA.items():
        append_extra(C[cc][0], C[cc][1], lst, REVIEWED)
    for cc, lst in BA.items():
        append_ba(C[cc][0], C[cc][1], lst, REVIEWED)
    print("fields_more4:", sum(map(len, MA.values())), "master's,", sum(map(len, BA.values())), "bachelor's")
