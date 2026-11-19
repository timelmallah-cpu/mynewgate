# Veterinary Medicine in English (long-cycle DVM, entered after secondary school), added 2026-11-19.
# Append-only per country (helpers.append_ba): re-run this after hungary_ba.py, poland_ba.py, romania_ba.py,
# estonia_ba.py, or the bachelor part of slovakia.py, czechia.py, lithuania.py, bulgaria.py, latvia.py, croatia.py.
# PLN fees are converted at about 4.4 PLN per EUR (November 2026), as in poland_ba.py; the PLN figure is shown too.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import P, NP
from helpers import append_ba

REVIEWED = "2026-11-19"
DVM = ("طبيب بيطري (DVM) - برنامج متكامل بعد الثانوية", "Doctor of Veterinary Medicine (DVM) - integrated programme after secondary school")
S11 = ("11 فصلاً دراسياً (5.5 سنوات)", "11 semesters (5.5 years)")
Y6 = ("6 سنوات (360 ساعة معتمدة)", "6 years (360 credits)")
CHK = lambda a, e: (a + " (للتحقق)", e + " (to verify)")
NOTE_R = ("الصفحة الرسمية: الشروط والرسوم", "Official page: requirements and fees")
NOTE_A = ("صفحة التقديم الرسمية", "Official application page")


B = {}


def add(country, name, uni, city, dur, fee, adm, dl, en, other, how, src, apply=None):
    B.setdefault(country, []).append(P(field="vet", name=name, uni=uni, city=city, deg=DVM, dur=dur, fee=fee, adm=adm, dl=dl, en=en,
                                       other=other, how=how, living=NP, house=NP, src=src, req=src, req_note=NOTE_R,
                                       apply=apply or src, apply_note=NOTE_A))


# ---------- Hungary ----------
add("hu", "Veterinary Medicine (English programme)", "University of Veterinary Medicine Budapest", "Budapest", S11,
    ("12,480 يورو سنوياً لدفعة 2026/2027 (7,700 يورو في الفصل الأول و4,780 في الفصل الثاني)، والرسوم ثابتة طوال الدراسة",
     "€12,480 a year for the 2026/2027 intake (€7,700 in the first semester and €4,780 in the second); the fee stays the same throughout the studies"),
    ("رسوم طلب 200 يورو، ورسوم امتحان القبول 250 يورو، ورسوم تسجيل 220 يورو؛ عربون 800 يورو (غير مسترد) يُحسب من رسوم الفصل الأول",
     "€200 application fee, €250 entrance exam fee and €220 registration fee; an €800 non-refundable deposit counts towards the first semester's fee"),
    ("مواعيد امتحانات القبول لدفعة سبتمبر 2027 تُعلن في مارس-أبريل 2027؛ الصفحة القديمة للجامعة كانت تذكر التقديم من 1 يناير حتى 30 يونيو (للتحقق)",
     "Entrance exam dates for the September 2027 intake will be announced in March-April 2027; the university's older page gave applications from 1 January to 30 June (to verify)"),
    ("الإنجليزية تُختبر داخل امتحان القبول؛ لا تطلب الصفحة شهادة IELTS أو TOEFL", "English is tested in the entrance exam; the page asks for no IELTS or TOEFL certificate"),
    ("امتحان قبول كتابي وشفوي (أونلاين) في الأحياء والكيمياء والإنجليزية؛ لمن يحتاج تأشيرة: باقي رسوم الفصل الأول (6,900 يورو) تُدفع قبل إجراءات التأشيرة؛ برنامج معتمد من EAEVE",
     "Written and oral entrance exam (online) in Biology, Chemistry and English; students who need a visa pay the rest of the first semester's fee (€6,900) before the visa procedure; EAEVE-accredited"),
    ("التقديم أونلاين على apply.univet.hu بنفسك أو عن طريق ممثل محلي للجامعة", "Online at apply.univet.hu, yourself or through a local representative of the university"),
    "https://univet.hu/en/education/admission/fees-and-costs/", "https://univet.hu/en/education/admission/application-and-admission-requirements")

# ---------- Slovakia ----------
add("sk", "General Veterinary Medicine (6-year programme in English)", "University of Veterinary Medicine and Pharmacy in Košice", "Košice", Y6,
    ("8,950 يورو سنوياً (للطلاب المقبولين منذ 2023/2024)", "€8,950 a year (for students admitted since 2023/2024)"),
    ("رسوم طلب 50 يورو", "€50 application fee"),
    ("لدفعة 2026/2027 كان التقديم من 18 فبراير إلى 29 مايو 2026 وامتحانات القبول من 25 أبريل إلى 27 يونيو 2026 (مواعيد 2027/2028 لم تُنشر بعد)",
     "For 2026/2027, applications ran from 18 February to 29 May 2026 and entrance exams from 25 April to 27 June 2026 (2027/2028 dates not published yet)"),
    NP,
    ("امتحان قبول كتابي (أونلاين) في الأحياء والكيمياء؛ إثبات عمل مع طبيب بيطري خاص يضيف 5 نقاط", "Written entrance exam (online) in Biology and Chemistry; proof of work with a private vet adds 5 points"),
    ("إرسال ملف التقديم بالبريد الإلكتروني إلى مكتب الدراسة (zas@uvlf.sk) ثم دعوة لامتحان القبول", "Send the application file by email to the Study Office (zas@uvlf.sk), then an invitation to the entrance exam"),
    "https://www.uvlf.sk/en/information-for-students/payments-fees", "https://www.uvlf.sk/en/general-veterinary-medicine-6-year-study-programme/requirements-for-admission")

# ---------- Czechia ----------
add("cz", "Veterinary Medicine (Master's programme in English)", "University of Veterinary Sciences Brno (VETUNI)", "Brno",
    CHK("6 سنوات", "6 years"),
    ("7,900 يورو سنوياً (رسوم 2024/2025 كما في صفحة الكلية؛ رسوم 2026/2027 للتحقق)", "€7,900 a year (2024/2025 fee on the faculty page; 2026/2027 fee to verify)"),
    ("رسوم الطلب 0 كرونة", "Application fee CZK 0"),
    ("لدفعة 2026/2027 كان آخر موعد للتقديم 31 مارس 2026، وجولة ثانية حتى 14 يوليو 2026 إن وُجدت أماكن (مواعيد 2027/2028 للتحقق)",
     "For 2026/2027 the deadline was 31 March 2026, with a second round until 14 July 2026 if places remained (2027/2028 dates to verify)"),
    ("لا تطلب الصفحة شهادة لغة؛ إجراءات القبول والدراسة بالإنجليزية", "The page asks for no language certificate; admission and teaching are in English"),
    ("امتحان كتابي اختيار من متعدد في الأحياء والكيمياء (37 سؤالاً لكل مادة، والحد الأدنى 18 نقطة في كل مادة)؛ 80 مقعداً في 2026/2027؛ يلزم إثبات معادلة الشهادة الثانوية الأجنبية في التشيك",
     "Multiple-choice written exam in Biology and Chemistry (37 questions each, at least 18 points in each); 80 places in 2026/2027; equivalence of a foreign secondary-school certificate must be proven in Czechia"),
    ("التقديم الإلكتروني، ثم إرسال الأوراق الأصلية أو المصدّقة إلى مكتب الدراسة بالكلية قبل الموعد نفسه", "Online application, then send the original or certified documents to the faculty's Study Office by the same deadline"),
    "https://fvl.vetuni.cz/conditions-for-admission-to-the-veterinary-medicine-masters-programme-taught-in-english-for-the-20262027-academic-year",
    "https://fvl.vetuni.cz/how-to-apply-for-the-masters-programme-in-veterinary-medicine")

# ---------- Lithuania ----------
add("lt", "Veterinary Medicine", "Lithuanian University of Health Sciences (LSMU)", "Kaunas", Y6,
    ("9,200 يورو سنوياً في السنوات 1-3، و10,700 يورو سنوياً في السنوات 4-6", "€9,200 a year in years 1-3 and €10,700 a year in years 4-6"),
    ("رسوم طلب 150 يورو ورسوم تسجيل 250 يورو (غير مستردتين)؛ عربون لغير الأوروبيين يساوي نصف الرسوم السنوية", "€150 application fee and €250 registration fee (non-refundable); deposit for non-EU students equal to half the yearly fee"),
    ("دورة 2027: التقديم يفتح 1 نوفمبر 2026 ويغلق 6 يوليو 2027؛ امتحانات القبول من 21 يناير إلى 29 أبريل 2027",
     "2027 cycle: applications open on 1 November 2026 and close on 6 July 2027; entrance exams from 21 January to 29 April 2027"),
    ("IELTS أعلى من 5.5، أو PTE Academic من 55، أو Duolingo 95، أو شهادة بمستوى B1؛ ومن ليس لديه شهادة يؤدي اختبار الجامعة",
     "IELTS above 5.5, PTE Academic 55, Duolingo 95, or a B1 certificate; applicants without one take the university's English test"),
    ("مقابلة أونلاين ثم امتحان 90 دقيقة (30 سؤال أحياء و30 كيمياء)؛ يجب أن تُظهر الشهادة الثانوية دراسة الأحياء والكيمياء؛ لغير الأوروبيين تصريح إقامة مؤقت قبل السفر (لا تأشيرة D)",
     "Online interview, then a 90-minute exam (30 Biology and 30 Chemistry questions); the school certificate must show Biology and Chemistry; non-EU students need a temporary residence permit before travelling (no D visa)"),
    ("التقديم الإلكتروني على نظام الجامعة", "Online through the university's application system"),
    "https://lsmu.lt/en/admission/integrated-studies/veterinary-medicine/", "https://lsmu.lt/en/admission/admission-process/")

# ---------- Poland ----------
add("pl", "Veterinary Medicine (DVM, in English)", "Wrocław University of Environmental and Life Sciences", "Wrocław", S11,
    ("حوالي 9,090 يورو سنوياً (40,000 زلوتي في السنة، أي 20,000 زلوتي كل فصل دراسي؛ التحويل تقريبي)، نفس الرسوم لكل الجنسيات",
     "About €9,090 a year (PLN 40,000 a year, i.e. PLN 20,000 each semester; approximate conversion), the same for all nationalities"),
    ("رسوم طلب 85 زلوتي", "PLN 85 application fee"),
    ("فترة القبول من مارس إلى سبتمبر حسب صفحة الجامعة، وبداية الدراسة في أكتوبر (مواعيد 2027 للتحقق)", "Intake period March to September per the university page; studies start in October (2027 dates to verify)"),
    ("مستوى B2 (IELTS أو TOEFL أو Cambridge B2 First أو أعلى)", "B2 level (IELTS, TOEFL, or Cambridge B2 First or higher)"),
    ("مرحلتان: مراجعة الشهادات مع التركيز على درجات الأحياء والكيمياء والإنجليزية، ثم مقابلة أونلاين؛ معتمد من EAEVE", "Two stages: review of certificates focusing on Biology, Chemistry and English grades, then an online interview; EAEVE-accredited"),
    ("التقديم الإلكتروني على apply.upwr.edu.pl", "Online at apply.upwr.edu.pl"),
    "https://apply.upwr.edu.pl/en_US/courses/course/209-dvm-veterinary-medicine")
add("pl", "Veterinary Medicine (in English)", "University of Life Sciences in Lublin", "Lublin", S11,
    ("8,000 يورو سنوياً (4,000 يورو كل فصل دراسي)", "€8,000 a year (€4,000 each semester)"),
    ("رسوم قبول 20 يورو", "€20 admission fee"),
    ("لدفعة 2026: الجولة الأولى من 13 أبريل إلى 31 مايو 2026، والجولة الإضافية من 1 يوليو إلى 31 أغسطس 2026 (مواعيد 2027 للتحقق)",
     "For 2026: first round from 13 April to 31 May 2026, additional round from 1 July to 31 August 2026 (2027 dates to verify)"),
    ("شهادة لغة إنجليزية إذا لم تكن دراستك السابقة بالإنجليزية (المستوى غير منشور في الصفحة)", "An English certificate if your previous education was not in English (level not given on the page)"),
    ("القبول بدون مقابلة، لكن المتقدمين من خارج الاتحاد الأوروبي وOECD وEFTA يؤدون امتحان علوم الحياة (Life Sciences Entrance Examination)؛ معتمد من EAEVE",
     "No interview, but applicants from outside the EU, OECD and EFTA sit the Life Sciences Entrance Examination; EAEVE-accredited"),
    ("التسجيل في نظام القبول بالجامعة ورفع الأوراق ودفع رسوم القبول", "Register in the university's admission system, upload the documents and pay the admission fee"),
    "https://up.lublin.pl/en/admission/veterinary-medicine/", "https://up.lublin.pl/en/admission/how-to-apply")
add("pl", "Veterinary Medicine (long-cycle, in English)", "Warsaw University of Life Sciences (SGGW)", "Warsaw", S11,
    ("10,900 يورو سنوياً (5,450 يورو كل فصل دراسي، 2026/2027)", "€10,900 a year (€5,450 each semester, 2026/2027)"),
    ("رسوم قبول 100 زلوتي", "PLN 100 admission fee"),
    ("لدفعة أكتوبر 2027: التسجيل من 23 إلى 27 نوفمبر 2026، وامتحان القبول 11 ديسمبر 2026، والنتائج 17 ديسمبر 2026، وتسليم الأوراق من 11 إلى 15 يناير 2027",
     "For the October 2027 intake: registration 23-27 November 2026, entrance exam 11 December 2026, results 17 December 2026, documents delivered 11-15 January 2027"),
    ("شهادة إنجليزية بمستوى B2 أو أعلى", "English certificate at B2 level or higher"),
    ("امتحان قبول (معلومات عامة وتفكير منطقي)؛ 10 مقاعد في المرحلة الأولى؛ الشهادة الثانوية الأجنبية تحتاج معادلة أو تصديقاً/أبوستيل", "Entrance exam (general knowledge and logical thinking); 10 places in phase 1; a foreign school certificate needs recognition or legalisation/apostille"),
    ("التسجيل في نظام IRK للجامعة", "Registration in the university's IRK system"),
    "https://www.sggw.edu.pl/en/?p=17586", "https://www.sggw.edu.pl/en/recruitment/recruitment-calendar-bachelors-degree")
add("pl", "Veterinary Medicine (English-taught Program)", "University of Warmia and Mazury in Olsztyn", "Olsztyn", CHK("11 فصلاً دراسياً (5.5 سنوات)", "11 semesters (5.5 years)"),
    ("الرسوم غير منشورة في صفحة مواعيد القبول التي اطلعنا عليها؛ تُدفع رسوم الفصل الأول عند تأكيد الالتحاق", "Fee not published on the admission schedule we read; the first semester's fee is paid on confirming the place"),
    NP,
    ("لدفعة 2026/2027 (شهادات من خارج بولندا): الجولة الأولى من 20 أبريل إلى 24 يونيو 2026، والثانية من 27 أغسطس إلى 1 سبتمبر 2026 (مواعيد 2027 للتحقق)",
     "For 2026/2027 (certificates from outside Poland): round I from 20 April to 24 June 2026, round II from 27 August to 1 September 2026 (2027 dates to verify)"),
    NP,
    ("امتحان قبول لحاملي الشهادات الأجنبية (7-8 مايو أو 29-30 يونيو 2026 في الجولة الأولى)", "Entrance exam for foreign certificate holders (7-8 May or 29-30 June 2026 in round I)"),
    ("التسجيل الإلكتروني ورفع الأوراق ودفع رسوم الطلب", "Online registration, document upload and application fee"),
    "https://rekrutacja.uwm.edu.pl/admission-schedule/", "https://irk.uwm.edu.pl/en-gb/offer/REK_2026_2027_WET/registration/")

# ---------- Romania ----------
NONEU_RO = ("لغير الأوروبيين يلزم خطاب قبول (Letter of Acceptance) من وزارة التعليم الرومانية قبل التسجيل والتأشيرة", "Non-EU students need a Letter of Acceptance from the Romanian Ministry of Education before enrolment and the visa")
add("ro", "Veterinary Medicine (teaching in English)", "University of Agronomic Sciences and Veterinary Medicine of Bucharest", "Bucharest", NP,
    ("8,000 يورو سنوياً (2026/2027)؛ لغير الأوروبيين تُدفع كاملة من 25 إلى 28 يوليو 2026 ومنها 2,500 يورو غير مستردة",
     "€8,000 a year (2026/2027); non-EU students pay it in full between 25 and 28 July 2026, of which €2,500 is non-refundable"),
    ("رسوم تقديم 100 يورو غير مستردة", "€100 non-refundable registration fee"),
    ("لدفعة 2026/2027 كان التقديم من 8 إلى 20 يوليو 2026 على admitere.usamv.ro (مواعيد 2027 للتحقق)", "For 2026/2027, applications ran from 8 to 20 July 2026 on admitere.usamv.ro (2027 dates to verify)"),
    ("مستوى B1 إلزامي بشهادة من القائمة المعتمدة (مثل IELTS 4-4.5 أو TOEFL 57-86)", "B1 level is mandatory, with a certificate from the approved list (e.g. IELTS 4-4.5 or TOEFL 57-86)"),
    ("القبول بتقييم الملف: 90% معدل الثانوية و10% خطابات توصية أو شهادات تطوع؛ 50 مقعداً؛ " + NONEU_RO[0],
     "Admission by file: 90% secondary-school average and 10% recommendation letters or volunteering certificates; 50 places; " + NONEU_RO[1]),
    ("رفع الملف على منصة admitere.usamv.ro", "Upload the file on admitere.usamv.ro"),
    "https://fmvb.ro/wp-content/uploads/2026/07/conditions-for-application_FVMB_2026_EN_NEW.pdf", "https://usamv.ro/en/admission-to-university-studies-of-non-eu-citizens/")
add("ro", "Veterinary Medicine (in English)", "University of Agricultural Sciences and Veterinary Medicine of Cluj-Napoca", "Cluj-Napoca", NP,
    ("8,500 يورو للسنة الأولى (2026/2027) على ثلاث دفعات: 2,500 يورو ضمان غير مسترد عند تأكيد المقعد، ثم 3,000 يورو حتى 15 مارس 2027 و3,000 يورو حتى 15 مايو 2027",
     "€8,500 for the first year (2026/2027) in three payments: a €2,500 non-refundable guarantee on confirming the place, then €3,000 by 15 March 2027 and €3,000 by 15 May 2027"),
    NP, NP, NP,
    CHK("لغير الأوروبيين يلزم خطاب قبول من وزارة التعليم الرومانية", "Non-EU students need a Letter of Acceptance from the Romanian Ministry of Education"),
    ("التواصل مع مكتب العلاقات الدولية بالجامعة لتقديم الملف", "Contact the university's International Relations Office to submit the file"),
    "https://admitere.usamvcluj.ro/international-students/tuition-fees/", "https://admitere.usamvcluj.ro/international-students/")
add("ro", "Veterinary Medicine (in English)", "Iasi University of Life Sciences (IULS)", "Iași", NP,
    ("5,950 يورو سنوياً (2026/2027)، تُدفع رسوم السنة الأولى خلال 5 أيام من النتائج ومنها 1,550 يورو ضمان غير مسترد",
     "€5,950 a year (2026/2027); the first year's fee is paid within 5 days of the results, of which €1,550 is a non-refundable guarantee"),
    ("رسوم تقييم الملف 100 يورو؛ واختبار إنجليزية 50 يورو لمن ليس لديه شهادة", "€100 file evaluation fee; €50 English test for applicants without a certificate"),
    ("لدفعة 2026/2027 كان إرسال الملف بالبريد الإلكتروني من 27 أبريل إلى 5 يوليو 2026، ودورة القبول من 6 إلى 20 يوليو 2026، مع دورة ثانية في سبتمبر (مواعيد 2027 للتحقق)",
     "For 2026/2027 the file was emailed between 27 April and 5 July 2026 and the admission session ran from 6 to 20 July 2026, with a second session in September (2027 dates to verify)"),
    ("مستوى B1 على الأقل بشهادة تقيس التحدث والكتابة والاستماع، أو 4 سنوات دراسة متتالية بالإنجليزية", "At least B1, with a certificate covering speaking, writing and listening, or 4 consecutive years of study in English"),
    ("الترتيب: 70% معدل الثانوية و30% مقابلة أونلاين؛ " + NONEU_RO[0], "Ranking: 70% secondary-school average and 30% online interview; " + NONEU_RO[1]),
    ("إرسال ملف التقديم بالبريد الإلكتروني إلى vet.admission@iuls.ro", "Email the application file to vet.admission@iuls.ro"),
    "https://iuls.ro/medicina/en/wp-content/uploads/2025/12/Methodology-admission_2026-2027_EN.pdf", "https://iuls.ro/medicina/en/admission/")

# ---------- Bulgaria ----------
add("bg", "Veterinary Medicine (in English)", "Trakia University", "Stara Zagora", NP,
    ("6,350 يورو سنوياً (3,175 يورو قسط الفصل الأول قبل التسجيل؛ السنة الدراسية غير مذكورة في الصفحة - للتحقق)", "€6,350 a year (€3,175 first-semester instalment before enrolment; the page does not name the academic year - to verify)"),
    ("80 يورو رسوم لكل امتحان (2026/2027)", "€80 per exam (2026/2027)"),
    ("لدفعة 2026/2027 كان آخر موعد لوصول أوراق غير الأوروبيين 1 يوليو 2026 (من 1 أبريل)، وامتحانات أونلاين في يونيو ويوليو وأغسطس 2026 (مواعيد 2027 للتحقق)",
     "For 2026/2027, non-EU documents had to arrive by 1 July 2026 (from 1 April), with online exams in June, July and August 2026 (2027 dates to verify)"),
    ("امتحان إنجليزية للمتقدمين من دول ليست الإنجليزية لغتها الرسمية", "English exam for applicants from countries where English is not an official language"),
    ("امتحان أونلاين في الأحياء فقط (تُضاعف درجته وتُجمع مع درجتي الأحياء والكيمياء في الثانوية)؛ يلزم اعتراف NACID بالشهادة بمعدل لا يقل عن 3.72 (62%)؛ وزارة التعليم تصدر شهادة القبول المطلوبة لتأشيرة D (شهران على الأقل)",
     "Online exam in Biology only (its mark is doubled and added to the school Biology and Chemistry marks); NACID recognition with an average of at least 3.72 (62%); the Ministry of Education issues the admission certificate needed for the D visa (at least 2 months)"),
    ("إرسال الأوراق الأصلية بالبريد أو تسليمها في الجامعة، مع نسخة بالبريد الإلكتروني", "Send the original documents by post or deliver them at the university, plus scanned copies by email"),
    "https://trakia-uni.bg/en/english-programs-medicine-and-veterinary-medicine-first-ranking/", "https://trakia-uni.bg/en/admission/international-students/thirdpartyapplications/")

# ---------- Latvia ----------
add("lv", "Veterinary Medicine (first and second cycle studies)", "Latvia University of Life Sciences and Technologies (LBTU)", "Jelgava", Y6,
    ("9,600 يورو سنوياً حسب صفحة البرنامج (صفحة التقديم تذكر 9,000 يورو - للتحقق)", "€9,600 a year per the programme page (the application page says €9,000 - to verify)"),
    NP,
    ("القبول مرة واحدة في السنة (سبتمبر)؛ آخر موعد غير منشور في الصفحة", "Admission once a year (September); the deadline is not given on the page"),
    ("مستوى B2، أو IELTS 6.0، أو TOEFL iBT 80", "B2 level, IELTS 6.0 or TOEFL iBT 80"),
    ("اختبار قبول أونلاين في الأحياء والكيمياء؛ تقدير مقبول على الأقل في الأحياء أو الكيمياء", "Online entrance test in Biology and Chemistry; at least 'satisfactory' in Biology or Chemistry"),
    ("التقديم الإلكتروني (admission@lbtu.lv)", "Online application (admission@lbtu.lv)"),
    "https://www.lbtu.lv/en/veterinary_medicine", "https://apply.lbtu.lv/courses/course/15")

# ---------- Croatia ----------
add("hr", "Veterinary Medicine (integrated study in English)", "University of Zagreb, Faculty of Veterinary Medicine", "Zagreb", Y6,
    ("10,500 يورو سنوياً عند الدفع مرة واحدة (قرار رسوم 2025/2026 للطلاب الجدد؛ رسوم 2026/2027 للتحقق)", "€10,500 a year if paid at once (2025/2026 fee decision for new students; 2026/2027 fee to verify)"),
    ("رسوم طلب 200 يورو غير مستردة؛ حجز مقعد 500 يورو يُخصم من الرسوم", "€200 non-refundable application fee; €500 place reservation deducted from the fee"),
    ("لدفعة 2026/2027 كان التقديم من 1 فبراير إلى 1 يوليو 2026، والتقديم لدفعة 2027/2028 يفتح في فبراير 2027",
     "For 2026/2027, applications ran from 1 February to 1 July 2026; applications for 2027/2028 open in February 2027"),
    ("شهادة مستوى في اللغة الإنجليزية (المستوى غير مذكور في الصفحة)", "An English level certificate (level not given on the page)"),
    ("لا يوجد امتحان قبول بل تقييم للملف (كشف الدرجات، والسيرة الذاتية، وخطاب الدافع، والشهادة الثانوية وغيرها)؛ يلزم التسجيل على بوابة postani-student.hr",
     "No entrance exam, a file review instead (transcripts, CV, motivation letter, school-leaving certificate and more); registration on the postani-student.hr portal is required"),
    ("إرسال الملف بالبريد الإلكتروني إلى english.studies@vef.hr مع التسجيل على postani-student.hr", "Email the file to english.studies@vef.hr and register on postani-student.hr"),
    "https://www.vef.unizg.hr/wp-content/uploads/2025/06/Decision-tuition-fees-for-the-academic-year-2025-2026.pdf", "https://www.vef.unizg.hr/en/studying/enrollment-to-veterinary-studies-in-english/")

# ---------- Estonia ----------
add("ee", "Veterinary Medicine (DVM)", "Estonian University of Life Sciences", "Tartu", Y6,
    ("9,600 يورو سنوياً (4,800 يورو كل فصل دراسي، 2025/2026؛ رسوم 2026/2027 للتحقق)", "€9,600 a year (€4,800 each semester, 2025/2026; 2026/2027 fee to verify)"),
    ("لا توجد رسوم طلب لبرنامج الطب البيطري", "No application fee for Veterinary Medicine"),
    ("2 مايو لغير الأوروبيين في دفعة 2025 حسب الصفحة السابقة للجامعة (موعد 2027 للتحقق)", "2 May for non-EU applicants in the 2025 intake per the university's previous page (2027 deadline to verify)"),
    ("مستوى B2 في الإنجليزية", "B2 level in English"),
    ("اختبار ISAT للقدرات (حتى 40 نقطة) وخطاب دافع (حتى 10 نقاط)؛ معتمد من EAEVE", "ISAT aptitude test (up to 40 points) and a motivation letter (up to 10 points); EAEVE-accredited"),
    ("التقديم على منصة DreamApply مع إرسال الأوراق الورقية", "Apply on DreamApply and post the paper documents"),
    "https://www-vana.emu.ee/en/admissions/veterinary-medicine/admission-requirements", "https://estonia.dreamapply.com/courses/course/330")

COUNTRIES = {"hu": ("المجر", "hungary"), "sk": ("سلوفاكيا", "slovakia"), "cz": ("التشيك", "czechia"), "lt": ("ليتوانيا", "lithuania"),
             "pl": ("بولندا", "poland"), "ro": ("رومانيا", "romania"), "bg": ("بلغاريا", "bulgaria"), "lv": ("لاتفيا", "latvia"),
             "hr": ("كرواتيا", "croatia"), "ee": ("إستونيا", "estonia")}

if __name__ == "__main__":
    for cc, lst in B.items():
        ar, slug = COUNTRIES[cc]
        append_ba(ar, slug, lst, REVIEWED)
    print("veterinary:", sum(len(v) for v in B.values()), "programmes")
