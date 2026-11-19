# Small fields, batch 3 (19 Nov 2026). Append-only (helpers.append_extra / append_ba); re-run after the countries' own
# scripts (netherlands, hungary, austria/austria_more, hungary_ba, lithuania).
# Master's: agriculture and environment. Bachelor's: new field "physio" (العلاج الطبيعي والتغذية: physiotherapy and
# dietetics), because English-taught public-health bachelor's are rare (only Maastricht and Debrecen found).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, NP
from helpers import add, append_extra, append_ba

REVIEWED = "2026-11-19"
NOTE_R = ("الصفحة الرسمية: الشروط والرسوم", "Official page: requirements and fees")
NOTE_A = ("صفحة التقديم الرسمية", "Official application page")
MSC = ("ماجستير العلوم (MSc)", "Master of Science (MSc)")
Y2 = ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)")
S4 = ("4 فصول (120 ساعة معتمدة)", "4 semesters (120 credits)")
MA, BA = {}, {}


def ma(cc, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply=None):
    add(MA.setdefault(cc, []), field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, NP, NP, src, apply or src)


def ba(cc, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply=None):
    BA.setdefault(cc, []).append(P(field="physio", name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en,
                                   other=other, how=how, living=NP, house=NP, src=src, req=src, req_note=NOTE_R,
                                   apply=apply or src, apply_note=NOTE_A))


# ---------- Netherlands: Wageningen ----------
WUR_FEE = ("21,900 يورو سنوياً لغير الأوروبيين في 2026/2027، وتقدير الجامعة لعام 2027/2028 هو 22,500 يورو", "€21,900 a year for non-EU students in 2026/2027; the university estimates €22,500 for 2027/2028")
WUR_ADM = ("فاتورة مقدمة لغير الأوروبيين بالسنة الأولى ونفقات المعيشة 12.5 شهراً والتأمين ورسوم تصريح الإقامة (254 يورو)", "Non-EU admits receive an advance invoice for the first year's tuition, 12.5 months of living costs, insurance and the residence permit fee (€254)")
WUR_DL = ("دفعة سبتمبر: Studielink حتى 15 أبريل ورفع المستندات حتى 1 مايو؛ ولمنح الجامعة قبل 1 ديسمبر 2026", "September intake: Studielink by 15 April and documents by 1 May; for university scholarships before 1 December 2026")
WUR_HOW = ("التسجيل في Studielink ثم رفع المستندات في بوابة جامعة فاخينينجن؛ الجامعة تطلب تصريح الإقامة بعد القبول ودفع الفاتورة", "Register in Studielink, then upload documents in the WU portal; the university applies for the residence permit after admission and payment")
WUR_FEES = "https://www.wur.nl/en/education-programmes/master/practical-information-masters/study-expenses.htm"
WUR_APPLY = "https://www.wur.nl/en/education/master/application-admission-masters/apply-masters-programme"
ma("nl", "agri", "Plant Sciences (MSc)", "Wageningen University & Research", "Wageningen", MSC, Y2, WUR_FEE, WUR_ADM, WUR_DL, NP,
   ("علوم النبات وإنتاج المحاصيل؛ تخصصات منها علوم المحاصيل وزراعة الصوب وتربية النبات وأمراض النبات والحشرات", "Plant sciences and crop production; specialisations include crop science, greenhouse horticulture, plant breeding and plant pathology and entomology"),
   WUR_HOW, WUR_FEES, WUR_APPLY)
ma("nl", "env", "Environmental Sciences (MSc)", "Wageningen University & Research", "Wageningen", MSC, Y2, WUR_FEE, WUR_ADM,
   ("دفعة سبتمبر: Studielink حتى 15 أبريل والمستندات حتى 1 مايو؛ ويبدأ البرنامج أيضاً في فبراير (Studielink حتى 15 سبتمبر والمستندات حتى 1 أكتوبر)", "September intake: Studielink by 15 April and documents by 1 May; also starts in February (Studielink by 15 September, documents by 1 October)"),
   NP, ("علوم البيئة من زوايا طبيعية وتقنية واجتماعية: التلوث وتدهور البيئة وإدارتها", "Environmental sciences from natural, technical and social angles: pollution, degradation and environmental management"),
   WUR_HOW, WUR_FEES, WUR_APPLY)

# ---------- Hungary: MATE ----------
MATE_FEE = ("3,000 يورو للفصل (تُدفع رسوم سنة مقدماً قبل البدء)", "€3,000 per semester (one year's fee is paid in advance before starting)")
MATE_ADM = ("رسوم طلب 100 يورو غير مستردة (حتى طلبين لكل متقدم)", "€100 non-refundable application fee (up to two applications per applicant)")
MATE_DL = ("31 مايو للطلاب الذين يدفعون الرسوم (حسب يوم الجامعة المفتوح 2025؛ للتحقق لدفعة 2027)", "31 May for self-funded students (per the university's 2025 open day; to verify for 2027)")
MATE_HOW = ("التقديم على بوابة MATE في DreamApply مع خطاب دافع ودفع رسوم الطلب، ثم تصريح الإقامة للدراسة", "Apply on MATE's DreamApply portal with a motivation letter and the application fee, then the residence permit for study")
MATE_FEES = "https://ed.uni-mate.hu/tuition-fees"
for field, name, city, ar, en, apply in [
    ("agri", "Crop Production Engineering (MSc)", "Gödöllő", "هندسة الإنتاج النباتي: تقنيات إنتاج المحاصيل ووقاية النبات وتربيته؛ يُطلب بكالوريوس في الزراعة أو علوم الحياة", "Crop production engineering: crop technologies, plant protection and breeding; requires a BSc in agriculture or life sciences", "https://apply.uni-mate.hu/courses/course/43"),
    ("agri", "Horticultural Engineering (MSc)", "Budapest", "هندسة البساتين في حرم بودا في بودابست", "Horticultural engineering at the Buda Campus in Budapest", "https://apply.uni-mate.hu/courses/course/25"),
    ("agri", "Plant Protection (MSc)", "Keszthely", "وقاية النبات وإدارتها والاستشارات والتنظيم، وإعداد للدكتوراه", "Plant protection: management, consulting and regulation, with preparation for PhD research", "https://apply.uni-mate.hu/courses/course/51-msc-plant-protection-keszthely"),
    ("env", "Agricultural Water Management Engineering (MSc)", "Gödöllő", "هندسة إدارة المياه في الزراعة؛ يُطلب بكالوريوس في مجال قريب", "Agricultural water management engineering; requires a related bachelor's", "https://apply.uni-mate.hu/courses/course/48"),
    ("env", "Agricultural Environmental Management Engineering (MSc)", "Gödöllő", "هندسة الإدارة البيئية في الزراعة", "Agricultural environmental management engineering", MATE_FEES),
]:
    ma("hu", field, name, "Hungarian University of Agriculture and Life Sciences (MATE)", city, MSC, S4, MATE_FEE, MATE_ADM, MATE_DL, NP,
       (f"{ar}، بالإنجليزية", f"{en}, taught in English"), MATE_HOW, MATE_FEES, apply)

# ---------- Austria: BOKU Vienna ----------
BOKU_FEE = ("1,453.44 يورو سنوياً لغير الأوروبيين (726.72 يورو كل فصل دراسي) بجانب رسوم اتحاد الطلاب", "€1,453.44 a year for non-EU students (€726.72 per semester) plus the students' union fee")
ma("at", "agri", "International Master in Horticultural Sciences (IMaHS)", "BOKU University", "Vienna", MSC, Y2, BOKU_FEE, NP,
   ("31 ديسمبر لغير الأوروبيين للبدء في الفصل الصيفي (حسب إعلان الجامعة)؛ موعد الفصل الشتوي للتحقق", "31 December for non-EU applicants for a summer-semester start (per the university notice); the winter-semester date is to verify"),
   NP, ("ماجستير دولي مشترك عن سلاسل الإمداد في البساتين والفاكهة والعنب، مع جامعات شريكة منها بولونيا وTUM وهومبولت وMATE", "A joint international master's on horticultural, fruit and viticulture supply chains, with partners including Bologna, TUM, Humboldt and MATE"),
   ("التقديم على نظام قبول BOKU لحملة الشهادات الأجنبية، ثم تأشيرة/تصريح الإقامة للنمسا", "Apply through BOKU admissions for foreign degrees, then the Austrian residence permit"),
   "https://boku.ac.at/news/newsitem/81465", "https://short.boku.ac.at/int-master-horti.html")

# ---------- Bachelor's: physiotherapy and dietetics ----------
PTE_FEE = ("2,900 يورو للفصل", "€2,900 per semester")
PTE_ADM = ("رسوم طلب 200 يورو ورسوم تسجيل 100 يورو مع أول قسط", "€200 application fee and a €100 registration fee with the first instalment")
PTE_DL = ("30 يونيو 2027 لدفعة سبتمبر 2027 (للتحقق)", "30 June 2027 for September 2027 (to verify)")
PTE_HOW = ("التسجيل على بوابة جامعة بيتش ورفع المستندات ودفع رسوم الطلب، ثم مقابلة، ثم خطاب القبول والتأشيرة", "Register on the University of Pécs portal, upload documents and pay the fee, then an interview, then the admission letter and visa")
BSC4 = ("بكالوريوس العلوم (BSc)", "Bachelor of Science (BSc)")
Y4 = ("4 سنوات (8 فصول)", "4 years (8 semesters)")
ba("hu", "Physiotherapy BSc", "University of Pécs, Faculty of Health Sciences", "Pécs", BSC4, Y4, PTE_FEE, PTE_ADM, PTE_DL, NP,
   ("العلاج الطبيعي بالإنجليزية في كلية العلوم الصحية", "Physiotherapy in English at the Faculty of Health Sciences"),
   PTE_HOW, "https://english.etk.pte.hu/public/upload/files/Administrative-fees2026.pdf", "https://apply.pte.hu/enter/202")
ba("hu", "Dietetics BSc", "University of Pécs, Faculty of Health Sciences", "Pécs", BSC4, Y4, PTE_FEE, PTE_ADM, PTE_DL, NP,
   ("التغذية العلاجية: تغذية الأطفال والمرضى وإدارة التغذية وعلوم الغذاء", "Clinical dietetics: child and patient nutrition, nutrition management and food science"),
   PTE_HOW, "https://international.pte.hu/admission/fees")
UD_HOW = ("التقديم على بوابة جامعة دبرتسن، ثم مقابلة قبول بالإنجليزية (إلزامية لبرامج الصحة)، ثم التأشيرة", "Apply on the University of Debrecen portal, then an entrance interview in English (compulsory for health programmes), then the visa")
UD_FEES = "https://www.edu.unideb.hu/p/tuition-fee-application-entrance-fee"
ba("hu", "Physiotherapy BSc", "University of Debrecen, Faculty of Public Health", "Debrecen", BSC4, Y4,
   ("حوالي 6,300 يورو سنوياً (7,000 دولار أمريكي سنوياً؛ التحويل تقريبي)", "About €6,300 a year (US$7,000 a year; approximate conversion)"),
   ("رسوم طلب 150 دولاراً أمريكياً", "US$150 application fee"),
   ("31 مايو (حسب كتيب البرنامج؛ للتحقق لدفعة 2027)", "31 May (per the programme brochure; to verify for 2027)"),
   ("مستوى B2 في الإنجليزية", "English B2"),
   ("240 ساعة معتمدة مع تدريب عملي كبير؛ مقابلة قبول إلزامية", "240 credits with strong clinical practice; compulsory entrance interview"),
   UD_HOW, UD_FEES, "https://edu.unideb.hu/p/nursing-and-patient-care-physiotherapy-bsc")
ba("hu", "Dietetics BSc", "University of Debrecen, Faculty of Public Health", "Debrecen", BSC4, Y4,
   ("حوالي 5,400 يورو سنوياً (6,000 دولار أمريكي سنوياً؛ التحويل تقريبي)", "About €5,400 a year (US$6,000 a year; approximate conversion)"),
   ("رسوم طلب 150 دولاراً أمريكياً", "US$150 application fee"),
   ("غير منشور في المصدر لدفعة 2027", "Not published in the source for 2027"), ("مستوى B2 في الإنجليزية", "English B2"),
   ("التغذية العلاجية في كلية الصحة العامة؛ مقابلة قبول إلزامية", "Dietetics at the Faculty of Public Health; compulsory entrance interview"),
   UD_HOW, UD_FEES)
ba("lt", "Physiotherapy", "Lithuanian University of Health Sciences (LSMU)", "Kaunas", ("بكالوريوس العلوم الصحية - أخصائي علاج طبيعي", "BSc in Health Sciences, Physiotherapist"),
   ("4 سنوات (240 ساعة معتمدة)", "4 years (240 credits)"),
   ("4,201 يورو سنوياً", "€4,201 a year"),
   ("رسوم طلب 150 يورو غير مستردة", "€150 non-refundable application fee"),
   ("30 يوليو 2026 (دورة 2026)؛ بوابة التقديم تفتح 1 نوفمبر 2026 لدفعة 2027 (الموعد للتحقق)", "30 July 2026 (2026 cycle); the portal opens on 1 November 2026 for 2027 (deadline to verify)"),
   ("مستوى B1 على الأقل", "At least B1"),
   ("علاج طبيعي في أكبر مستشفى جامعي في دول البلطيق؛ خطاب دافع وقد تُطلب مقابلة أونلاين ومعادلة الشهادة من SKVC", "Physiotherapy at the largest clinical hospital in the Baltics; motivation letter, possibly an online interview and SKVC recognition"),
   ("التقديم على apply.lsmuni.lt ورفع المستندات، ثم تصريح الإقامة المؤقتة", "Apply on apply.lsmuni.lt and upload documents, then the temporary residence permit"),
   "https://lsmu.lt/en/admission/undergraduate-studies/physiotherapy/", "https://apply.lsmuni.lt/courses/course/163")

C = {"nl": ("هولندا", "netherlands"), "hu": ("المجر", "hungary"), "at": ("النمسا", "austria"), "lt": ("ليتوانيا", "lithuania")}

if __name__ == "__main__":
    for cc, lst in MA.items():
        append_extra(C[cc][0], C[cc][1], lst, REVIEWED)
    for cc, lst in BA.items():
        append_ba(C[cc][0], C[cc][1], lst, REVIEWED)
    print("fields_more3:", sum(map(len, MA.values())), "master's,", sum(map(len, BA.values())), "bachelor's")
