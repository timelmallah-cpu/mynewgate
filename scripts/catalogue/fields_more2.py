# Small fields, batch 2 (19 Nov 2026). Append-only: master's through helpers.append_extra, bachelor's through
# helpers.append_ba. Re-run after any of the countries' own scripts (netherlands, denmark, sweden, hungary, czechia,
# finland, estonia, italy, poland, lithuania and their *_ba.py / *_more.py scripts).
# Master's: tourism, media, law, education. Bachelor's: architecture, law, psychology, politics.
# Sources: the universities' own pages (fees, deadlines), Study in NL (Nuffic) for some Dutch fees, checked 2026-11-19.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, NP
from helpers import add, append_extra, append_ba

REVIEWED = "2026-11-19"
NOTE_R = ("الصفحة الرسمية: الشروط والرسوم", "Official page: requirements and fees")
NOTE_A = ("صفحة التقديم الرسمية", "Official application page")
MAD = ("ماجستير", "Master's degree")
LLM = ("ماجستير في القانون (LLM)", "Master of Laws (LLM)")
Y1 = ("سنة واحدة (60 ساعة معتمدة)", "1 year (60 credits)")
Y2 = ("سنتان (120 ساعة معتمدة)", "2 years (120 credits)")
Y15 = ("سنة ونصف (90 ساعة معتمدة)", "18 months (90 credits)")
BA3 = ("3 سنوات (180 ساعة معتمدة)", "3 years (180 credits)")

MA = {}
BA = {}


def ma(cc, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply=None):
    add(MA.setdefault(cc, []), field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, NP, NP, src, apply or src)


def ba(cc, field, name, uni, city, deg, dur, fee, adm, dl, en, other, how, src, apply=None):
    BA.setdefault(cc, []).append(P(field=field, name=name, uni=uni, city=city, deg=deg, dur=dur, fee=fee, adm=adm, dl=dl, en=en,
                                   other=other, how=how, living=NP, house=NP, src=src, req=src, req_note=NOTE_R,
                                   apply=apply or src, apply_note=NOTE_A))


# Shared texts
NL_HOW = ("التسجيل في Studielink ثم رفع المستندات في بوابة الجامعة؛ الجامعة تطلب تصريح الإقامة لغير الأوروبيين بعد القبول ودفع الرسوم",
          "Register in Studielink, then upload documents in the university portal; the university applies for the non-EU residence permit after admission and payment")
SE_HOW = ("التقديم على universityadmissions.se (الجولة الدولية من منتصف أكتوبر حتى 15 يناير) ودفع رسوم الطلب 900 كرونة سويدية، ثم تصريح الإقامة من مصلحة الهجرة",
          "Apply on universityadmissions.se (international round mid-October to 15 January) and pay the SEK 900 application fee, then the residence permit from the Migration Agency")
SE_ADM = ("رسوم طلب 900 كرونة سويدية لغير الأوروبيين", "SEK 900 application fee for non-EU applicants")
SE_DL = ("15 يناير 2027 (جولة القبول الدولية لدفعة خريف 2027)", "15 January 2027 (international admission round for autumn 2027)")
SE_EN = ("مستوى English 6 السويدي (مثلاً IELTS 6.5 مع 5.5 على الأقل في كل جزء)", "Swedish English 6 level (e.g. IELTS 6.5 with no part below 5.5)")
HU_HOW = ("التقديم أونلاين على بوابة الجامعة ودفع رسوم الطلب، ثم مقابلة، ثم تصريح الإقامة للدراسة", "Apply online on the university portal and pay the application fee, then an interview, then the residence permit for study")

# ======================= MASTER'S =======================
# ---- Tourism ----
ma("nl", "tour", "Tourism, Society and Environment (MSc)", "Wageningen University & Research", "Wageningen", MAD, Y2,
   ("21,900 يورو سنوياً لغير الأوروبيين في 2026/2027، وتقدير الجامعة لعام 2027/2028 هو 22,500 يورو", "€21,900 a year for non-EU students in 2026/2027; the university estimates €22,500 for 2027/2028"),
   ("الجامعة ترسل لغير الأوروبيين فاتورة مقدمة بالسنة الأولى ونفقات المعيشة 12.5 شهراً والتأمين ورسوم تصريح الإقامة (254 يورو)", "Non-EU admits receive an advance invoice for the first year's tuition, 12.5 months of living costs, insurance and the residence permit fee (€254)"),
   ("15 أبريل لغير الأوروبيين (دورة 2026)؛ ولمنح التفوق يجب إكمال الطلب قبل 1 ديسمبر 2026 (للتحقق لدفعة 2027)", "15 April for non-EU applicants (2026 cycle); for the excellence scholarships the application must be complete before 1 December 2026 (to verify for 2027)"),
   ("IELTS 6.0 (والتحدث 6.0) أو TOEFL iBT 80", "IELTS 6.0 (speaking 6.0) or TOEFL iBT 80"),
   ("ماجستير سنتين عن السياحة والاستدامة والمجتمع والبيئة؛ تدريب أو مشروع استشاري ضمن البرنامج", "A two-year MSc on tourism, sustainability, society and the environment, with an internship or consultancy project"),
   NL_HOW, "https://www.wur.nl/en/education-programmes/master/practical-information-masters/study-expenses.htm",
   "https://www.wur.nl/en/Education-Programmes/master/Scholarships.htm")
ma("dk", "tour", "Tourism (MA)", "Aalborg University", "Aalborg", MAD, Y2,
   ("حوالي 3,582 يورو للفصل لغير الأوروبيين حسب بوابة Study in Denmark الرسمية (للتحقق من رقم 2027)", "About €3,582 per semester for non-EU students per the official Study in Denmark portal (2027 figure to verify)"),
   ("رسوم طلب 150 يورو (1,150 كرونة دنماركية) لغير الأوروبيين، وتغطي حتى 3 طلبات؛ الرسوم الدراسية تُدفع قبل كل فصل (1 أغسطس للخريف)", "€150 (DKK 1,150) application fee for non-EU applicants, covering up to 3 applications; tuition is paid before each semester (1 August for autumn)"),
   ("15 يناير للمتقدمين الذين يدفعون الرسوم (البوابة تفتح منتصف ديسمبر)", "15 January for fee-paying applicants (the portal opens mid-December)"),
   ("IELTS 6.5 أو TOEFL iBT 85", "IELTS 6.5 or TOEFL iBT 85"),
   ("4 فصول: فصلان نظريان، ثم تدريب في جهة سياحية أو فصل في جامعة أخرى، ثم الرسالة؛ يُدرّس في آلبورج وكوبنهاجن. من سبتمبر 2027 شرط نشاط دراسي خاص للطلاب الذين يدفعون الرسوم",
    "4 semesters: two theory semesters, then an internship in a tourism organisation or a semester at another university, then the thesis; taught in Aalborg and Copenhagen. From September 2027 a study-activity requirement applies to self-paying students"),
   ("التقديم أونلاين على بوابة جامعة آلبورج، ثم تصريح الإقامة من SIRI", "Apply online on Aalborg University's portal, then the residence permit from SIRI"),
   "https://www.en.aau.dk/education/apply/master", "https://www.en.aau.dk/education/apply/master/finance-and-fees")
ma("se", "tour", "Service Management, Tourism (MSc)", "Lund University", "Helsingborg", MAD, Y2,
   ("270,000 كرونة سويدية للبرنامج كاملاً (الدفعة الأولى 67,500)", "SEK 270,000 for the whole programme (first payment SEK 67,500)"),
   SE_ADM, SE_DL, SE_EN,
   ("إدارة الخدمات مع تخصص السياحة في حرم هلسينجبورج؛ الاختيار على أساس رسالة البكالوريوس ودرجات المقررات وخطاب الهدف", "Service management with a tourism specialisation at Campus Helsingborg; selection on the bachelor's thesis, course grades and a statement of purpose"),
   SE_HOW, "https://www.lunduniversity.lu.se/study/service-management-tourism-master-of-science-programme-SASMA-TURI")
ma("hu", "tour", "Tourism Management (MSc)", "Hungarian University of Agriculture and Life Sciences (MATE)", "Gyöngyös", MAD,
   ("4 فصول (120 ساعة معتمدة)", "4 semesters (120 credits)"),
   ("3,000 يورو للفصل", "€3,000 per semester"), ("رسوم طلب 100 يورو مرة واحدة", "€100 one-time application fee"),
   ("غير منشور في المصدر", "Not published in the source"),
   ("غير منشور في المصدر: المستندات تُقبل بالإنجليزية", "Not published in the source: entry documents are accepted in English"),
   ("إدارة السياحة في حرم كارولي روبرت بمدينة جيونجيوش؛ يُطلب بكالوريوس وخطاب دافع، واللقب Economist in Tourism and Management", "Tourism management at the Károly Róbert Campus in Gyöngyös; requires a bachelor's and a motivation letter; title Economist in Tourism and Management"),
   HU_HOW, "https://en.uni-mate.hu/e/study_programme/20132/17671940", "https://apply.uni-mate.hu/courses/course/40")
ma("hu", "tour", "Tourism Management (MSc)", "Budapest Business University", "Budapest", MAD, ("4 فصول (120 ساعة معتمدة)", "4 semesters (120 credits)"),
   ("3,000 يورو للفصل لغير الأوروبيين", "€3,000 per semester for non-EU students"), NP,
   ("31 مايو لغير الأوروبيين (دورة 2025)؛ موعد 2027 للتحقق", "31 May for non-EU applicants (2025 cycle); the 2027 date is to verify"),
   NP,
   ("إدارة السياحة في حرم وسط بودابست: نظام السياحة واتجاهاتها والتخطيط المستدام وإدارة الفنادق الدولية والتسويق", "Tourism management at the city-centre campus: the tourism system and trends, sustainable planning, international hotel management and marketing"),
   HU_HOW, "https://international.uni-bge.hu/?p=881")

# ---- Media ----
ma("se", "media", "Media and Communication Studies (MSc)", "Lund University", "Lund", MAD, Y2,
   ("270,000 كرونة سويدية للبرنامج كاملاً (الدفعة الأولى 67,500)", "SEK 270,000 for the whole programme (first payment SEK 67,500)"),
   SE_ADM, SE_DL, SE_EN,
   ("كل المقررات بالإنجليزية؛ يشترط بكالوريوس 180 ساعة منها 90 في الإعلام والاتصال أو ما يعادلها", "All teaching in English; requires a 180-credit bachelor's with 90 credits in media and communication studies or equivalent"),
   SE_HOW, "https://www.lunduniversity.lu.se/study/media-and-communication-studies-master-of-science-programme-SAMKV")
EUR_FEE = ("22,800 يورو لغير الأوروبيين لعام 2027/2028 (الرسوم المؤسسية للماجستير)", "€22,800 for non-EEA students in 2027/2028 (institutional master's fee)")
EUR_FEES_URL = "https://www.eur.nl/en/education/practical-matters/registration/tuition-fee/tuition-fee-2027-2028"
for name, ar, en, url in [
    ("Media Studies: Media & Creative Industries (MA)", "تنظيم وإدارة وتسويق وتوزيع شركات الإعلام والصناعات الإبداعية", "Organisation, management, marketing and distribution in media companies and the creative industries", "https://www.eur.nl/en/eshcc/master/media-creative-industries/application"),
    ("Media Studies: Media & Business (MA)", "الإعلام والأعمال: محلل إعلامي ومستشار اتصال ومخطط إعلامي", "Media and business: media analyst, communications adviser, media planner", "https://www.eur.nl/en/eshcc/master/media-business/facts-figures"),
]:
    ma("nl", "media", name, "Erasmus University Rotterdam", "Rotterdam", ("ماجستير (MA)", "Master's degree (MA)"), Y1, EUR_FEE, NP,
       ("15 أبريل لغير الأوروبيين لعام 2027/2028 (التقديم في Studielink من 1 أكتوبر)", "15 April for non-EEA students for 2027/2028 (apply in Studielink from 1 October)"),
       NP, (f"ماجستير سنة واحدة بالإنجليزية: {ar}", f"A one-year master's in English: {en}"), NL_HOW, EUR_FEES_URL, url)
ma("nl", "media", "Media Studies: New Media and Digital Culture (MA)", "University of Amsterdam", "Amsterdam", ("ماجستير (MA)", "Master's degree (MA)"), Y1,
   ("25,900 يورو لغير الأوروبيين في 2026/2027 حسب بوابة Study in NL (رسوم 2027/2028 للتحقق)", "€25,900 for non-EU students in 2026/2027 per Study in NL (2027/2028 fee to verify)"),
   ("رسوم طلب 100 يورو لحملة الشهادات غير الهولندية، غير مستردة", "€100 non-refundable application fee for international prior degrees"),
   ("1 مارس لمن يحتاج تصريح إقامة (1 مارس 2027 لدفعة 2027/2028)", "1 March for applicants who need a residence permit (1 March 2027 for 2027/2028)"),
   NP,
   ("ثقافة الإنترنت والإعلام الرقمي؛ يشترط بكالوريوس في الإنسانيات أو العلوم الاجتماعية فيه 42 ساعة على الأقل في الإعلام أو الاتصال أو الثقافة الرقمية", "Internet culture and digital media; requires a humanities or social-science BA with at least 42 ECTS in media, communication or digital culture"),
   NL_HOW, "https://www.uva.nl/en/programmes/masters/new-media-and-digital-culture-media-studies/application-and-admission/application-and-admission.html",
   "https://www.studyinnl.org/dutch-education/studies/media-studies-new-media-and-digital-culture-6694-university-of-amsterdam")
ma("nl", "media", "Media Studies: Digital Cultures (MA)", "Maastricht University", "Maastricht", ("ماجستير (MA)", "Master's degree (MA)"), Y1,
   ("21,400 يورو لغير الأوروبيين (آخر سنة منشورة في صفحة رسوم البرنامج؛ للتحقق لعام 2027/2028)", "€21,400 for non-EU students (latest year on the programme's fee page; to verify for 2027/2028)"),
   ("رسوم معالجة لحملة الشهادات من خارج أوروبا", "A handling fee for diplomas from outside the EU/EEA"),
   ("1 مايو 2027 لغير الأوروبيين (التقديم في Studielink من 1 أكتوبر 2026)", "1 May 2027 for non-EU applicants (apply in Studielink from 1 October 2026)"),
   NP, ("يجمع دراسات الإعلام الرقمي والإنسانيات الرقمية؛ القبول حسب الدافع والدراسة السابقة والخبرة", "Combines digital media studies and digital humanities; admission on motivation, previous education and experience"),
   NL_HOW, "https://www.maastrichtuniversity.nl/education/master/programmes/media-studies-digital-cultures/tuition-fees",
   "https://www.maastrichtuniversity.nl/education/master/programmes/media-studies-digital-cultures/admission-requirements")
ma("nl", "media", "Media Studies: Media, Cultural Industries and Innovation (MA)", "University of Groningen", "Groningen", ("ماجستير (MA)", "Master's degree (MA)"), Y15,
   ("19,900 يورو سنوياً لغير الأوروبيين في 2026/2027، والبرنامج 18 شهراً فتُدفع 1.5 سنة (رسوم 2027/2028 للتحقق)", "€19,900 a year for non-EU students in 2026/2027; the track lasts 18 months, so 1.5 years are paid (2027/2028 fee to verify)"),
   NP, ("1 مايو 2027 لحملة الشهادات غير الهولندية (البدء 1 سبتمبر 2027)", "1 May 2027 for non-Dutch diplomas (start 1 September 2027)"),
   ("IELTS 6.5 أو TOEFL iBT 90", "IELTS 6.5 or TOEFL iBT 90"),
   ("الابتكار وريادة الأعمال في الإعلام والصناعات الثقافية؛ الدراسة في الخارج غير متاحة في هذا المسار", "Innovation and entrepreneurship in media and the cultural industries; study abroad is not possible in this track"),
   NL_HOW, "https://www.rug.nl/masters/media-cultural-industries-and-innovation/?lang=en")
ma("cz", "media", "Society, Communication and Media (SCM)", "Charles University, Faculty of Social Sciences", "Prague", ("ماجستير (MA)", "Master's degree (MA)"), Y2,
   ("6,000 يورو سنوياً", "€6,000 a year"),
   ("رسوم طلب حوالي 40 يورو (1,000 كرونة تشيكية) تُدفع حتى الموعد، بدون إعفاء", "Application fee about €40 (CZK 1,000), due by the deadline, no waiver"),
   ("دورة 2025: الموعد المبكر 28 فبراير والعادي 30 أبريل؛ مواعيد 2027 للتحقق", "2025 cycle: early bird 28 February, regular 30 April; 2027 dates to verify"),
   NP, ("علم الاجتماع والإعلام معاً: الإعلام الرقمي والاتصال السياسي وتحليل الخطاب والنظرية الاجتماعية، بالإنجليزية", "Sociology and media together: digital media, political communication, discourse analysis and social theory, in English"),
   ("التقديم أونلاين على بوابة كلية العلوم الاجتماعية ودفع رسوم الطلب، ثم تأشيرة الدراسة من سفارة التشيك", "Apply online on the Faculty of Social Sciences portal and pay the application fee, then the study visa from the Czech embassy"),
   "https://iss.fsv.cuni.cz/en/admissions/master-studies/society-communication-and-media", "https://study.fsv.cuni.cz/how-to-apply")

# ---- Law ----
GR_LAW_DL = ("1 مايو 2027 (البدء 1 سبتمبر 2027)", "1 May 2027 (start 1 September 2027)")
ma("nl", "law", "LLM Advanced European Union Law", "University of Groningen", "Groningen", LLM, Y1,
   ("22,800 يورو لغير الأوروبيين لعام 2027/2028", "€22,800 for non-EU students in 2027/2028"), NP, GR_LAW_DL, NP,
   ("ماجستير قانون انتقائي يتطلب أساسيات قانون الاتحاد الأوروبي؛ مسابقة المحكمة الصورية الأوروبية وزيارة محكمة العدل في لوكسمبورج", "A selective LLM that assumes basic EU law; European Law Moot Court and a visit to the Court of Justice in Luxembourg"),
   NL_HOW, "https://www.rug.nl/masters/advanced-european-union-law/")
ma("nl", "law", "LLM Public International Law", "University of Groningen", "Groningen", LLM, Y1,
   ("22,200 يورو لغير الأوروبيين في 2026/2027 (رسوم 2027/2028 للتحقق)", "€22,200 for non-EU students in 2026/2027 (2027/2028 fee to verify)"), NP, GR_LAW_DL, NP,
   ("أساس قوي في معظم مجالات القانون الدولي العام، مع مسار لحقوق الإنسان؛ يُطلب معدل وخطاب دافع", "A strong foundation in most fields of public international law, with a human rights track; grade average and motivation letter required"),
   NL_HOW, "https://www.rug.nl/masters/public-international-law")
ma("se", "law", "International Human Rights Law (LLM)", "Lund University", "Lund", LLM, Y2,
   ("310,000 كرونة سويدية للبرنامج كاملاً (الدفعة الأولى 77,500)", "SEK 310,000 for the whole programme (first payment SEK 77,500)"),
   SE_ADM, SE_DL, SE_EN,
   ("من أقدم برامج ماجستير حقوق الإنسان (مع معهد راؤول والنبرج)؛ يشترط بكالوريوس في القانون", "One of the oldest human rights LLMs (with the Raoul Wallenberg Institute); requires a law degree"),
   SE_HOW, "https://www.lunduniversity.lu.se/study/international-human-rights-law-master-programme-JAMR%C3%84", "https://law.lu.se/study/masters-programmes/how-apply")
ma("se", "law", "Investment Treaty Arbitration (LLM)", "Uppsala University", "Uppsala", LLM, Y1,
   ("114,000 كرونة سويدية للبرنامج كاملاً (الدفعة الأولى 57,000)", "SEK 114,000 for the whole programme (first instalment SEK 57,000)"),
   SE_ADM, ("16 أكتوبر 2026 - 15 يناير 2027 لدفعة خريف 2027", "16 October 2026 - 15 January 2027 for autumn 2027"), SE_EN,
   ("ماجستير سنة عملي في قانون الاستثمار الدولي والتحكيم", "A practice-oriented one-year LLM in international investment law and arbitration"),
   SE_HOW, "https://www.uu.se/en/study/programme/masters-programme-investment-treaty-arbitration")
ma("ee", "law", "Information Technology Law (MA)", "University of Tartu", "Tartu", ("ماجستير الآداب في القانون (MA)", "Master of Arts in Law (MA)"), Y1,
   ("4,200 يورو سنوياً (رقم بوابة التقديم؛ من 2026/2027 الماجستير الدولي برسوم لغير الأوروبيين، للتحقق)", "€4,200 a year (figure on the application portal; from 2026/2027 international master's are fee-based for non-EU students, to verify)"),
   ("رسوم طلب 100 يورو؛ ويدفع غير الأوروبيين نصف رسوم الفصل الأول مقدماً بعد القبول", "€100 application fee; non-EU admits prepay half of the first semester's fee"),
   ("غير منشور في المصدر لدفعة 2027", "Not published in the source for 2027"), NP,
   ("قانون تقنية المعلومات في سنة؛ يشترط بكالوريوس قانون 4 سنوات (240 ساعة)", "IT law in one year; requires a 4-year (240 ECTS) law bachelor's"),
   ("التقديم على DreamApply، ثم تصريح الإقامة من سفارة إستونيا", "Apply on DreamApply, then the residence permit via an Estonian embassy"),
   "https://estonia.dreamapply.com/courses/course/361-ma-information-technology-law")

# ---- Education ----
ma("fi", "edu", "Master's Programme in Changing Education", "University of Helsinki", "Helsinki", ("ماجستير الآداب في التربية (MA)", "Master of Arts in Education (MA)"), Y2,
   ("18,000 يورو سنوياً (للتحقق في صفحة البرنامج؛ رسوم ماجستير جامعة هلسنكي بين 13,000 و18,000 يورو)", "€18,000 a year (to verify on the programme page; University of Helsinki master's fees are €13,000-18,000)"),
   ("رسوم طلب وطنية 100 يورو لغير الأوروبيين على Studyinfo", "€100 national application fee for non-EU applicants on Studyinfo"),
   ("5 - 19 يناير 2027 (الدفعة الوحيدة في السنة)", "5-19 January 2027 (one intake a year)"), NP,
   ("التعليم من مستوى الدماغ حتى السياسات العالمية؛ لا يمنح مؤهل معلم في فنلندا", "Education from the neural level to global policy; does not give a Finnish teacher qualification"),
   ("التقديم على Studyinfo.fi خلال فترة التقديم فقط، ثم تصريح الإقامة من Migri", "Apply on Studyinfo.fi during the application period only, then the residence permit from Migri"),
   "https://www.helsinki.fi/en/admissions-and-education/apply-bachelors-and-masters-programmes/apply-international-masters-programmes/explore-our-international-masters-programmes")
ma("se", "edu", "International and Comparative Education", "Stockholm University", "Stockholm", MAD, Y2,
   ("90,000 كرونة سويدية سنوياً (فئة العلوم الإنسانية والاجتماعية حسب كتيب الجامعة؛ للتحقق في صفحة البرنامج)", "SEK 90,000 a year (humanities and social sciences rate in the university brochure; to verify on the programme page)"),
   SE_ADM, SE_DL, SE_EN,
   ("التعليم الدولي والمقارن: التخطيط التعليمي والتعليم والتنمية والعولمة ومناهج البحث", "International and comparative education: educational planning, education and development, globalisation and research methods"),
   SE_HOW, "https://www.su.se/english/education/how-to-apply/costs-fees-and-scholarships")

# ======================= BACHELOR'S =======================
# ---- Architecture ----
PTE_FEE = ("حوالي 3,600 يورو للفصل (4,000 دولار أمريكي للفصل؛ التحويل تقريبي)", "About €3,600 per semester (US$4,000 per semester; approximate conversion)")
PTE_ADM = ("رسوم طلب 150 دولاراً أمريكياً", "US$150 application fee")
PTE_HOW = ("التسجيل على بوابة جامعة بيتش ورفع المستندات (ومنها ملف أعمال Portfolio) ودفع رسوم الطلب، ثم مقابلة أونلاين، ثم دفع الرسوم وخطاب القبول والتأشيرة",
           "Register on the University of Pécs portal, upload documents (including a portfolio) and pay the fee, then an online interview, then tuition, admission letter and visa")
ba("hu", "arch", "Architectural Engineering BSc", "University of Pécs, Faculty of Engineering and Information Technology", "Pécs",
   ("بكالوريوس هندسة معمارية (BSc)", "BSc in Architectural Engineering"), ("7 فصول (3.5 سنوات)", "7 semesters (3.5 years)"),
   PTE_FEE, PTE_ADM, ("30 يونيو (دورة 2026)؛ موعد 2027 للتحقق", "30 June (2026 cycle); 2027 date to verify"), NP,
   ("التصميم الهندسي والإنشاءات وإدارة البناء؛ يُطلب ملف أعمال", "Engineering design, structures and construction management; a portfolio is required"),
   PTE_HOW, "https://international.pte.hu/study-programs/bsc-architectural-engineering", "https://apply.pte.hu/enter/178")
ba("hu", "arch", "Architecture (BSc + MSc)", "University of Pécs, Faculty of Engineering and Information Technology", "Pécs",
   ("بكالوريوس وماجستير عمارة متصلان (MSc in Architecture)", "Integrated BSc + MSc in Architecture"), ("5 سنوات (10 فصول)", "5 years (10 semesters)"),
   PTE_FEE, PTE_ADM, ("30 يونيو 2027 لدفعة سبتمبر 2027 (للتحقق)", "30 June 2027 for September 2027 (to verify)"), NP,
   ("برنامج عمارة متكامل من البكالوريوس إلى الماجستير: التصميم المعماري والتخطيط العمراني وحماية التراث؛ يُطلب ملف أعمال", "An integrated architecture programme from bachelor's to master's: architectural design, urban planning and heritage; a portfolio is required"),
   PTE_HOW, "https://international.pte.hu/study-programs/architecture-bsc-msc")
ba("lt", "arch", "Architecture (integrated studies)", "VILNIUS TECH", "Vilnius",
   ("عمارة - دراسة متكاملة", "Architecture - integrated studies"), ("5 سنوات", "5 years"),
   ("6,250 يورو سنوياً لغير الأوروبيين (2026/2027، للسنوات 1-4)", "€6,250 a year for non-EU students (2026/2027, years 1-4)"),
   ("رسوم طلب 100 يورو غير مستردة، ورسوم تسجيل 200 يورو مع أول دفعة", "€100 non-refundable application fee and a €200 registration fee with the first tuition payment"),
   ("15 يونيو لغير الأوروبيين (للتحقق لدفعة 2027)", "15 June for non-EU applicants (to verify for 2027)"), NP,
   ("يُطلب 60% على الأقل في الرياضيات ومادة علمية والإنجليزية في شهادة الثانوية", "At least 60% in mathematics, a science subject and English in the school certificate"),
   ("التقديم على نظام القبول الإلكتروني للجامعة لغير الأوروبيين، ثم الفاتورة قبل بدء إجراءات التأشيرة", "Apply in the university's online system for non-EU applicants, then the invoice before the visa procedure"),
   "https://vilniustech.lt/for-international-students/admission-20262027-------scholarships/tuition-and-other-fees/9603",
   "https://vilniustech.lt/for-international-students/programmes-in-english-20262027/undergraduate-studies-/architecture/50786")
ba("pl", "arch", "Architecture (first-cycle, in English)", "Warsaw University of Technology, Faculty of Architecture", "Warsaw",
   ("بكالوريوس عمارة", "Bachelor's in Architecture"), ("4 سنوات (8 فصول)", "4 years (8 semesters)"),
   ("6,830 يورو للفصل (المبلغ الأساسي للأجانب في قرار رئيس الجامعة 131/2026؛ القرار لا يحدد صراحة الفصل أو السنة، للتحقق)", "€6,830 per semester (the base amount for foreigners in Rector's Decision 131/2026; the decision does not say per semester or per year, to verify)"),
   NP, ("غير منشور في المصدر لدفعة 2027", "Not published in the source for 2027"), NP,
   ("امتحان قبول في كلية العمارة لمن يستوفي شروط المستندات", "An entrance exam at the Faculty of Architecture for applicants whose documents qualify"),
   ("التسجيل في نظام الجامعة zapisy.pw.edu.pl خلال المدة المحددة", "Register in the university system zapisy.pw.edu.pl within the set period"),
   "https://eng.pw.edu.pl/index.php/content/download/6121/51090/file/131_2026_cudz_2026_ENG.pdf", "https://arch.pw.edu.pl/Studies-in-English/Bachelor-Degree-in-Architecture")
ba("it", "arch", "Architecture (English track)", "Politecnico di Torino", "Turin",
   ("بكالوريوس عمارة (Laurea)", "Bachelor's in Architecture (Laurea)"), BA3,
   ("غير منشور في المصدر لهذا البرنامج: الرسوم حسب لائحة رسوم الجامعة ودخل الأسرة (للتحقق)", "Not published in the source for this programme: fees follow the university's fee regulations and family income (to verify)"),
   NP, ("امتحان القبول TIL-A حضورياً في تورينو؛ مواعيد 2027/2028 لم تُنشر بعد (للتحقق)", "TIL-A admission test in person in Turin; 2027/2028 dates not published yet (to verify)"),
   ("مستوى B2 في الإنجليزية على الأقل", "English B2 or higher"),
   ("عدد محدود: 85 مقعداً لغير الأوروبيين المقيمين بالخارج (بالإيطالية أو الإنجليزية) حسب دورة 2025؛ لا يُقبل SAT للعمارة", "Capped: 85 places for non-EU applicants living abroad (Italian or English track) in the 2025 cycle; SAT is not accepted for Architecture"),
   ("التقديم على بوابة البوليتكنيكو وحجز امتحان TIL-A، ثم التسجيل المسبق على Universitaly وتأشيرة الدراسة", "Apply on the Politecnico portal and book the TIL-A test, then pre-enrolment on Universitaly and the study visa"),
   "https://www.polito.it/en/education/bachelor-s-degree-programmes/architecture",
   "https://www.polito.it/en/education/applying-studying-graduating/admissions-and-enrolment/bachelor-s-degree-programmes/admission-test")

# ---- Law ----
ba("nl", "law", "International and European Law (LLB)", "University of Groningen", "Groningen",
   ("بكالوريوس القانون (LLB)", "Bachelor of Laws (LLB)"), BA3,
   ("13,500 يورو سنوياً لغير الأوروبيين (رقم 2025/2026 في بوابة Study in NL؛ رسوم 2027/2028 للتحقق)", "€13,500 a year for non-EU students (2025/2026 figure on Study in NL; 2027/2028 fee to verify)"),
   NP, ("1 مايو 2027 (ويُنصح بالتقديم مبكراً لوقت التأشيرة)", "1 May 2027 (apply early to leave time for the visa)"), NP,
   ("قانون دولي وأوروبي بالإنجليزية مع فصل إلزامي في الخارج؛ إجراء مطابقة (matching) إلزامي، ومعدل أدنى إلزامي لحملة الشهادات من خارج أوروبا", "International and European law in English with a compulsory semester abroad; mandatory matching, and a minimum GPA for non-EU qualifications"),
   NL_HOW, "https://www.studyinnl.org/dutch-education/studies/international-and-european-law-457-university-of-groningen",
   "https://www.rug.nl/rechten/education/english-taught-programmes/llb/application/deadline")
ba("nl", "law", "European Law School (LLB)", "Maastricht University", "Maastricht",
   ("بكالوريوس القانون (LLB)", "Bachelor of Laws (LLB)"), BA3,
   ("غير منشور في المصدر لهذا البرنامج: رسوم البكالوريوس لغير الأوروبيين في ماستريخت لها ثلاث فئات (منخفضة وعالية وقمة) (للتحقق)", "Not published in the source for this programme: Maastricht's non-EU bachelor fees have three levels (low, high, top) (to verify)"),
   NP, ("15 يناير 2027 لكل المتقدمين (عدد محدود، رقم الترتيب 15 أبريل)", "15 January 2027 for all applicants (numerus fixus; ranking numbers on 15 April)"), NP,
   ("القانون الأوروبي والمقارن بالإنجليزية، برنامج بعدد محدود من المقاعد", "European and comparative law in English, with a capped number of places"),
   NL_HOW, "https://www.maastrichtuniversity.nl/education/bachelor/programmes/european-law-school/admission-requirements")

# ---- Psychology ----
ba("nl", "psych", "Psychology (English track)", "Maastricht University", "Maastricht",
   ("بكالوريوس في علم النفس", "Bachelor's in Psychology"), BA3,
   ("13,200 يورو سنوياً لغير الأوروبيين (أحدث رقم في صفحة رسوم البرنامج؛ للتحقق لعام 2027/2028)", "€13,200 a year for non-EU students (latest figure on the programme's fee page; to verify for 2027/2028)"),
   NP, ("15 يناير 2027 (عدد محدود مع اختيار؛ اختر المسار الإنجليزي 4501_T1 في Studielink)", "15 January 2027 (numerus fixus with selection; choose the English track 4501_T1 in Studielink)"), NP,
   ("علم النفس بنظام التعلم القائم على المشكلات؛ عدد محدود من المقاعد وإجراء اختيار", "Psychology with problem-based learning; capped places and a selection procedure"),
   NL_HOW, "https://www.maastrichtuniversity.nl/education/bachelor/programmes/psychology/tuition-fees",
   "https://www.maastrichtuniversity.nl/education/bachelor/programmes/psychology/admission-requirements")
ba("nl", "psych", "International Bachelor in Psychology", "Leiden University", "Leiden",
   ("بكالوريوس في علم النفس (BSc)", "Bachelor's in Psychology (BSc)"), BA3,
   ("غير منشور في المصدر: الرسوم المؤسسية لغير الأوروبيين لم نجدها في صفحة البرنامج (للتحقق بحاسبة الرسوم في الجامعة)", "Not published in the source: the non-EU institutional fee was not on the programme page (check the university's fee calculator)"),
   NP, ("15 يناير (عدد محدود 600 مقعد بين المسارين الهولندي والدولي)؛ تقديم 2027/2028 من 1 أكتوبر 2026 (للتحقق)", "15 January (numerus fixus of 600 places across the Dutch and international tracks); 2027/2028 applications from 1 October 2026 (to verify)"),
   ("IELTS 6.0 أو TOEFL iBT 80", "IELTS 6.0 or TOEFL iBT 80"),
   ("الاختيار على أساس معادل المعدل الهولندي لشهادة الثانوية؛ تخصصات منها علم النفس الإكلينيكي والنمو والاجتماعي", "Selection on the Dutch equivalent of your school GPA; subdisciplines include clinical, developmental and social psychology"),
   NL_HOW, "https://www.universiteitleiden.nl/en/education/study-programmes/bachelor/psychology/admission-and-application/selection-and-placement")
ba("nl", "psych", "Psychology (BSc)", "University of Twente", "Enschede",
   ("بكالوريوس في علم النفس (BSc)", "Bachelor's in Psychology (BSc)"), BA3,
   ("12,652 يورو سنوياً لغير الأوروبيين في 2027/2028 (الفئة المنخفضة؛ كانت 12,300 في 2026/2027)", "€12,652 a year for non-EU students in 2027/2028 (lower rate; €12,300 in 2026/2027)"),
   NP, ("15 يناير 2027 (لا يمكن إكمال الطلب بعده)", "15 January 2027 (applications cannot be completed after that)"),
   ("IELTS 6.0", "IELTS 6.0"),
   ("250 مقعداً؛ الاختيار: مهمة مطابقة أونلاين (20%) قبل 1 مارس 2027 واختبار علم نفس (40%) واختبار مناهج وإحصاء (40%) يوم 12 مارس 2027", "250 places; selection: an online matching assignment (20%) before 1 March 2027, a psychology test (40%) and a methods and statistics test (40%) on 12 March 2027"),
   NL_HOW, "https://www.utwente.nl/en/education/bachelor/programmes/psychology/enrolment/", "https://www.utwente.nl/en/education/bachelor/study-costs/")

# ---- Politics ----
ba("nl", "pol", "Political Science: International Relations and Organisations (BSc)", "Leiden University", "The Hague",
   ("بكالوريوس العلوم السياسية (BSc)", "Bachelor's in Political Science (BSc)"), BA3,
   ("10,200 يورو لغير الأوروبيين في 2026/2027 (رسوم 2027/2028 للتحقق)", "€10,200 for non-EU students in 2026/2027 (2027/2028 fee to verify)"),
   NP, ("15 يناير (موعد صارم؛ عدد محدود 400 مقعد)؛ لدفعة 2027/2028 يُتوقع 15 يناير 2027 (للتحقق)", "15 January (strict deadline; numerus fixus of 400); 15 January 2027 expected for 2027/2028 (to verify)"), NP,
   ("العلاقات الدولية والمنظمات والدبلوماسية والسلام والأمن، تُدرّس في لاهاي", "International relations, organisations, diplomacy, peace and security, taught in The Hague"),
   NL_HOW, "https://www.universiteitleiden.nl/en/education/study-programmes/bachelor/political-science/international-relations-and-organisations/admission-and-application/tuition-fee",
   "https://www.universiteitleiden.nl/en/education/study-programmes/bachelor/political-science/international-relations-and-organisations/admission-and-application/application-deadline")
ba("nl", "pol", "International Relations and International Organization (BA)", "University of Groningen", "Groningen",
   ("بكالوريوس الآداب (BA)", "Bachelor of Arts (BA)"), BA3,
   ("14,000 يورو لغير الأوروبيين في 2026/2027 حسب بوابة Study in NL (رسوم 2027/2028 للتحقق)", "€14,000 for non-EU students in 2026/2027 per Study in NL (2027/2028 fee to verify)"),
   NP, ("15 يناير 2027 حسب قائمة مواعيد الجامعة وبوابة Study in NL (صفحة البرنامج تذكر 1 مايو؛ للتحقق)", "15 January 2027 per the university's deadline list and Study in NL (the programme page says 1 May; to verify)"),
   ("IELTS 6.5 (6.0 لكل جزء) أو TOEFL iBT 90 (21 لكل جزء)", "IELTS 6.5 (6.0 per band) or TOEFL iBT 90 (21 per section)"),
   ("برنامج متعدد التخصصات بالإنجليزية تكون فيه العلاقات الدولية هي المحور وليست تخصصاً فرعياً", "A multidisciplinary English-taught programme where international relations are the core, not a specialisation"),
   NL_HOW, "https://www.rug.nl/bachelors/international-relations-and-international-organization/admission-and-application?lang=en",
   "https://www.rug.nl/education/application-enrolment-tuition-fees/admission/procedures/application-informatie/application-deadlines/bachelor-application-deadlines")

C = {"nl": ("هولندا", "netherlands"), "dk": ("الدنمارك", "denmark"), "se": ("السويد", "sweden"), "hu": ("المجر", "hungary"),
     "cz": ("التشيك", "czechia"), "fi": ("فنلندا", "finland"), "ee": ("إستونيا", "estonia"), "it": ("إيطاليا", "italy"),
     "pl": ("بولندا", "poland"), "lt": ("ليتوانيا", "lithuania")}

if __name__ == "__main__":
    for cc, lst in MA.items():
        append_extra(C[cc][0], C[cc][1], lst, REVIEWED)
    for cc, lst in BA.items():
        append_ba(C[cc][0], C[cc][1], lst, REVIEWED)
    print("fields_more2:", sum(map(len, MA.values())), "master's,", sum(map(len, BA.values())), "bachelor's")
