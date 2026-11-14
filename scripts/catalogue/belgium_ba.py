# Belgium: English-taught bachelor's programmes at public universities (non-EEA fees). Few bachelor's are taught in English.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, write, NP

BA3 = ("3 سنوات (180 ساعة معتمدة)", "3 years (180 credits)")
BSC = ("بكالوريوس العلوم (BSc)", "Bachelor of Science (BSc)")
R = []
R.append(P(field="bus", name="Bachelor of Business Administration", uni="KU Leuven", city="Brussels", deg=BSC, dur=BA3,
           fee=("5,613 يورو سنوياً لغير الأوروبيين (2026-2027، حسب أداة الرسوم في الجامعة كما ينقلها مصدر غير رسمي؛ للتحقق)", "€5,613 per year for non-EEA students (2026-2027, per the university fee tool as quoted by an unofficial source; to verify)"),
           adm=NP, dl=("1 مارس لغير الأوروبيين حسب مصدر غير رسمي (للتحقق لعام 2027)", "1 March for non-EEA applicants per an unofficial source (to verify for 2027)"),
           en=("اختبار إنجليزية مثل IELTS Academic 6.5 ما لم ينطبق إعفاء", "An English test such as IELTS Academic 6.5 unless an exemption applies"),
           other=("كلية الاقتصاد والأعمال في حرم بروكسل؛ واحد من 8 برامج بكالوريوس بالإنجليزية في الجامعة", "Faculty of Economics and Business, Brussels campus; one of 8 English-taught bachelor's at the university"),
           how=("التقديم الإلكتروني على موقع الجامعة", "Online on the university website"), living=NP, house=NP,
           src="https://www.timeshighereducation.com/cms-academic/sites/default/files/institution_downloads/2026-11/International%20Programmes%20at%20KULeuven%202026.pdf",
           req="https://www.kuleuven.be/english/", req_note=("موقع الجامعة الرسمي", "Official university website"),
           apply="https://www.kuleuven.be/english/", apply_note=("موقع الجامعة الرسمي", "Official university website")))
R.append(P(field="bus", name="Bachelor of Science in Business Economics", uni="Vrije Universiteit Brussel (VUB)", city="Brussels", deg=BSC, dur=BA3,
           fee=("5,720 يورو سنوياً لغير الأوروبيين (2026-2027، 2,600 يورو ثابتة + 52 يورو لكل ساعة معتمدة)", "€5,720 per year for non-EEA students (2026-2027, €2,600 fixed + €52 per credit)"),
           adm=NP, dl=NP, en=("مستوى B2 مثل IELTS Academic 6.5", "B2, e.g. IELTS Academic 6.5"),
           other=("كلية سولفاي للأعمال؛ تقول الجامعة إن رسوم 2026-2027 قد تتغير بسبب مقترحات ميزانية حكومة فلاندرز", "Solvay Business School; the university says 2026-2027 fees may change due to Flemish government budget proposals"),
           how=("التقديم الإلكتروني على موقع الجامعة", "Online on the university website"), living=NP, house=NP,
           src="https://www.vub.be/en/studying-vub/all-study-programmes-vub/bachelors-and-masters-programmes-vub/business-economics/admission-and-enrolment",
           req="https://www.vub.be/en/studying-vub/all-study-programmes-vub/bachelors-and-masters-programmes-vub/business-economics/admission-and-enrolment", req_note=("صفحة القبول الرسمية", "Official admission page"),
           apply="https://www.vub.be/en/studying-vub/all-study-programmes-vub/bachelors-and-masters-programmes-vub/business-economics/admission-and-enrolment", apply_note=("صفحة القبول الرسمية", "Official admission page")))
write("بلجيكا", "Belgium", "belgium", R, level="bachelor")
