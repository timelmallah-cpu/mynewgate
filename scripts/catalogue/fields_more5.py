# Small fields, batch 5 (22 Nov 2026). Append-only (helpers.append_ba); re-run after hungary*.py and lithuania*.py.
# Bachelor's: social work (MRU, Klaipeda University) and public health (Semmelweis, Klaipeda University).
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, NP
from helpers import append_ba

REVIEWED = "2026-11-22"
NOTE_R = ("الصفحة الرسمية: الشروط والرسوم", "Official page: requirements and fees")
NOTE_A = ("صفحة التقديم الرسمية", "Official application page")
BA = {}


def ba(cc, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply=None):
    BA.setdefault(cc, []).append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en,
                                   other=other, how=how, living=NP, house=NP, src=src, req=src, req_note=NOTE_R,
                                   apply=apply or src, apply_note=NOTE_A))


KU_EN = ("مستوى B2: IELTS أعلى من 5.5 أو TOEFL أعلى من 75 أو Duolingo أعلى من 110 أو PTE أعلى من 59", "B2: IELTS above 5.5, TOEFL above 75, Duolingo above 110 or PTE above 59")
KU_ADM = ("رسوم طلب 180 يورو غير مستردة؛ الوثائق من خارج الاتحاد الأوروبي بأبوستيل", "€180 non-refundable application fee; documents from outside the EU need an apostille")
KU_HOW = ("التقديم على apply.ku.lt ودفع رسوم الطلب، ثم دفع الرسوم الدراسية وتصريح الإقامة المؤقتة في ليتوانيا", "Apply on apply.ku.lt and pay the application fee, then the tuition and the Lithuanian temporary residence permit")
KU_DL = ("غير منشور في المصدر لدفعة 2027/2028 (دفعة سبتمبر 2026 أُغلقت)", "Not published in the source for 2027/2028 (the September 2026 intake has closed)")

# ---------- Social work ----------
ba("lt", "sw", "Social Work and Human Rights", "Mykolas Romeris University (MRU)", "Vilnius", ("بكالوريوس العلوم الاجتماعية", "Bachelor of Social Sciences"),
   ("3.5 سنوات (210 ساعات معتمدة)", "3.5 years (210 credits)"),
   ("3,250 يورو سنوياً (2026/2027)، والتقدير لعام 2027/2028 هو 3,315 يورو", "€3,250 a year (2026/2027); the estimate for 2027/2028 is €3,315"),
   ("رسوم طلب 100 يورو غير مستردة؛ خطاب دافع (تعريف قصير وتحليل SWOT شخصي وتوقعاتك من البرنامج)", "€100 non-refundable application fee; motivation letter (short introduction, personal SWOT analysis and your expectations)"),
   ("24 يوليو 2027 لدفعة خريف 2027/2028", "24 July 2027 for the autumn 2027/2028 intake"),
   ("مستوى B2: IELTS 5.5 إلى 6.5 أو TOEFL iBT 72 إلى 94", "B2: IELTS 5.5-6.5 or TOEFL iBT 72-94"),
   ("العمل الاجتماعي وحقوق الإنسان بالإنجليزية في فيلنيوس؛ الدراسة تبدأ 1 سبتمبر", "Social work and human rights taught in English in Vilnius; studies start on 1 September"),
   ("التقديم على apply.mruni.eu ودفع رسوم الطلب، ثم دفع رسوم السنة الأولى وتوقيع العقد وتصريح الإقامة المؤقتة", "Apply on apply.mruni.eu and pay the application fee, then the first-year tuition, the contract and the temporary residence permit"),
   "https://apply.mruni.eu/courses/course/8")

ba("lt", "sw", "Social Work (Social Work in Community / Social Work in Health Care)", "Klaipeda University", "Klaipeda", ("بكالوريوس العلوم الاجتماعية", "Bachelor of Social Sciences"),
   ("3.5 سنوات (210 ساعات معتمدة)", "3.5 years (210 credits)"),
   ("3,250 يورو سنوياً (السنة الدراسية غير مذكورة في الصفحة، للتحقق)", "€3,250 a year (the page does not name the academic year, to verify)"),
   KU_ADM, KU_DL, KU_EN,
   ("العمل الاجتماعي بتخصصين: العمل في المجتمع أو في الرعاية الصحية، مع تدريب إشرافي", "Social work with two specialisations: community work or health care, with supervised practice"),
   KU_HOW,
   "https://apply.ku.lt/courses/course/209-bsc-social-work-community")

# ---------- Public health ----------
ba("hu", "ph", "Public Health Supervisor BSc", "Semmelweis University, Faculty of Health Sciences", "Budapest", ("بكالوريوس العلوم (BSc)", "Bachelor of Science (BSc)"),
   ("4 سنوات (8 فصول، 240 ساعة معتمدة)", "4 years (8 semesters, 240 credits)"),
   ("4,050 يورو للفصل", "€4,050 per semester"),
   ("رسوم إجراءات القبول 340 يورو (تشمل اختبار القبول) ورسوم تسجيل 230 يورو", "€340 admission procedure fee (covers the entrance exam) and €230 enrolment fee"),
   ("من 1 ديسمبر 2026 حتى 31 يوليو 2027 للبدء في سبتمبر 2027", "1 December 2026 - 31 July 2027 for a September 2027 start"),
   ("مستوى B2 أو IELTS 5.5 أو TOEFL 50 فأعلى", "B2, IELTS 5.5 or TOEFL 50+"),
   ("مراقب الصحة العامة: الوبائيات والوقاية من العدوى والصحة المهنية والسلامة الكيميائية؛ اختبار قبول شفهي أونلاين في المجال", "Public health supervision: epidemiology, infection prevention, occupational health and chemical safety; an oral online entrance exam on the field"),
   ("التقديم أونلاين على موقع جامعة سيميلفايس ودفع رسوم إجراءات القبول، ثم الاختبار عبر Zoom، ثم تصريح الإقامة للدراسة في المجر", "Apply online on Semmelweis University's site and pay the admission procedure fee, then the Zoom exam, then the Hungarian residence permit for study"),
   "https://semmelweis.hu/admission/programs/public-health-supervisor")

ba("lt", "ph", "Public Health BSc", "Klaipeda University", "Klaipeda", ("بكالوريوس العلوم الصحية", "Bachelor in Health Sciences"),
   ("غير منشور في المصدر", "Not published in the source"),
   ("4,201 يورو سنوياً (السنة الدراسية غير مذكورة في الصفحة، للتحقق)", "€4,201 a year (the page does not name the academic year, to verify)"),
   KU_ADM, KU_DL, KU_EN,
   ("الصحة العامة: الإحصاء الحيوي وتعزيز الصحة وإدارتها والوبائيات والوقاية من الأمراض", "Public health: biostatistics, health promotion and management, epidemiology and disease prevention"),
   KU_HOW,
   "https://apply.ku.lt/courses/course/328")

C = {"hu": ("المجر", "hungary"), "lt": ("ليتوانيا", "lithuania")}

if __name__ == "__main__":
    for cc, lst in BA.items():
        append_ba(C[cc][0], C[cc][1], lst, REVIEWED)
    print("fields_more5:", sum(map(len, BA.values())), "bachelor's")
