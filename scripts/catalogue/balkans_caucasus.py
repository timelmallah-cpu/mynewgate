# Western Balkans, Georgia, Armenia and Moldova (added 20 Nov 2026): public universities only, medicine first.
# Each country's files are new, so write() replaces them whole; master's go through append_master.
# Conversions: ECB 17 Nov 2026 (USD 1.0989 per EUR); BAM fixed at 1.95583; AMD per the Central Bank of Armenia
# on 5 Nov 2026 (404.66 per EUR). UTM's Animal Husbandry BA (€2,300) is left out: agriculture is not a bachelor's field on the site. Albania skipped: no English-taught programme at a public university found.
import sys, os
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from common import write, NP
from helpers import add, append_master

USD, BAM, AMD = 1.0989, 1.95583, 404.66
e = lambda v, rate: f"{round(v / rate / 5) * 5:,}"
CHK = lambda a, b: (a + " (للتحقق)", b + " (to verify)")
MD = ("دكتور في الطب - برنامج متكامل بعد الثانوية", "Doctor of Medicine - integrated programme after secondary school")
DMD = ("طب الأسنان - برنامج متكامل بعد الثانوية", "Dental medicine - integrated programme after secondary school")
Y6 = ("6 سنوات (360 ساعة معتمدة)", "6 years (360 credits)")
Y5 = ("5 سنوات", "5 years")
Y4 = ("4 سنوات", "4 years")
Y3 = ("3 سنوات", "3 years")

# ============ Serbia (University of Belgrade, Novi Sad, Kragujevac: all public) ============
RS = []
BG_APPLY = "https://studiesinenglish.med.bg.ac.rs/studies-in-english/applying-to-ubfm"
BG_DL = ("إعلان 2027/2028 لم يُنشر بعد؛ في إعلان 2026/2027 كان التسجيل في فترتين: يوليو وسبتمبر، بدون تواريخ محددة في الإعلان",
         "The 2027/2028 call is not out yet; in the 2026/2027 call enrolment ran in two periods, July and September, with no exact dates in the call")
BG_HOW = ("حسب إعلان القبول في موقع جامعة بلغراد وموقع الكلية؛ الامتحان يُعقد في الكلية", "Per the admission call on the University of Belgrade and faculty websites; the exam is held at the faculty")
add(RS, "med", "Medicine (Integrated Academic Studies in English)", "University of Belgrade", "Belgrade", MD, Y6,
    ("8,000 يورو سنوياً على قسطين (إعلان 2026/2027)", "€8,000 a year in two instalments (2026/2027 call)"),
    ("رسوم طلب 140 يورو؛ 80 مقعداً في الإعلان العام و50 للطلاب ضمن الاتفاقيات الدولية", "€140 application fee; 80 places in the general call and 50 for students under international agreements"),
    BG_DL, ("مستوى B2 في الإنجليزية ومقابلة بالإنجليزية", "English at B2 and an interview in English"),
    ("امتحان قبول في الكيمياء والأحياء ومقابلة بالإنجليزية، والنجاح من 31 نقطة؛ شهادة الثانوية تُترجم بمترجم محلّف وتُوثق ويُعترف بها لدى وكالة المؤهلات",
     "Entrance exam in Chemistry and Biology plus an English interview, pass from 31 points; the secondary certificate is court-translated, notarised and recognised by the Qualifications Agency"),
    BG_HOW, NP, NP, "https://www.bg.ac.rs/wp-content/uploads/2026/06/FINAL-MDF-IAS.pdf", BG_APPLY)
add(RS, "dent", "Dental Medicine (Integrated Academic Studies in English)", "University of Belgrade", "Belgrade", DMD,
    ("360 ساعة معتمدة (6 سنوات بحساب 60 ساعة في السنة)", "360 credits (6 years at 60 credits a year)"),
    ("7,000 يورو سنوياً لكل الطلاب (إعلان 2026/2027)", "€7,000 a year for all students (2026/2027 call)"),
    ("20 مقعداً بالمصروفات", "20 self-financing places"), BG_DL,
    ("الأجانب يقدمون شهادة إجادة الصربية والإنجليزية بمستوى B2 من معهد اللغات الأجنبية", "Foreign applicants submit certificates of Serbian and English at B2 from the Institute of Foreign Languages"),
    ("امتحان قبول في الكيمياء والأحياء (30 نقطة لكل مادة)؛ شرط اللغة الصربية يجعل البرنامج صعباً لمن لا يتحدثها", "Entrance exam in Chemistry and Biology (30 points each); the Serbian requirement makes it hard for applicants who do not speak it"),
    BG_HOW, NP, NP, "https://www.bg.ac.rs/wp-content/uploads/2026/06/FINAL-STF-IAS.pdf", "https://www.bg.ac.rs/wp-content/uploads/2026/06/FINAL-STF-IAS.pdf")
add(RS, "pharm", "Pharmacy (Integrated Academic Studies in English)", "University of Belgrade", "Belgrade", ("صيدلة - برنامج متكامل بعد الثانوية", "Pharmacy - integrated programme after secondary school"),
    ("300 ساعة معتمدة (5 سنوات بحساب 60 ساعة في السنة)", "300 credits (5 years at 60 credits a year)"),
    ("3,500 يورو سنوياً لكل الطلاب (إعلان 2026/2027)", "€3,500 a year for all students (2026/2027 call)"),
    ("10 مقاعد بالمصروفات", "10 self-financing places"), BG_DL,
    ("مستوى B2: شهادة Cambridge CAE أو IELTS، أو ثانوية بالإنجليزية", "B2: Cambridge CAE or IELTS, or secondary school in English"),
    ("امتحان قبول في الكيمياء والرياضيات أو الكيمياء والأحياء", "Entrance exam in Chemistry and Mathematics or Chemistry and Biology"),
    BG_HOW, NP, NP, "https://www.bg.ac.rs/wp-content/uploads/2026/06/FINAL-FF-IAS.pdf", "https://www.bg.ac.rs/wp-content/uploads/2026/06/FINAL-FF-IAS.pdf")
add(RS, "vet", "Veterinary Medicine (Integrated Academic Studies in English)", "University of Belgrade", "Belgrade", ("طبيب بيطري - برنامج متكامل بعد الثانوية", "Veterinary medicine - integrated programme after secondary school"),
    ("330 ساعة معتمدة (5.5 سنوات بحساب 60 ساعة في السنة)", "330 credits (5.5 years at 60 credits a year)"),
    ("5,000 يورو سنوياً لكل الطلاب (إعلان 2026/2027)", "€5,000 a year for all candidates (2026/2027 call)"),
    ("30 مقعداً بالمصروفات", "30 self-financing places"), BG_DL,
    ("شهادة إنجليزية بمستوى Cambridge CAE أو ما يعادلها في IELTS", "English at Cambridge CAE level or the IELTS equivalent"),
    ("امتحان قبول في الكيمياء والأحياء (30 سؤالاً لكل مادة)؛ من لم يدرس اللاتينية في الثانوية يمتحن فيها امتحاناً إضافياً", "Entrance exam in Chemistry and Biology (30 questions each); applicants without school Latin take a supplementary Latin exam"),
    BG_HOW, NP, NP, "https://www.bg.ac.rs/wp-content/uploads/2026/06/FINAL-FVM-IAS.pdf", "https://www.bg.ac.rs/wp-content/uploads/2026/06/FINAL-FVM-IAS.pdf")
NS_DL = ("في 2026 كان آخر موعد للتقديم 4 سبتمبر والامتحان 8 سبتمبر أونلاين؛ مواعيد 2027 لم تُنشر بعد", "In 2026 applications closed on 4 September 2026 and the online exam was on 8 September 2026; 2027 dates are not out yet")
NS_SRC = "https://www3.mf.uns.ac.rs/En/Admission.php"
add(RS, "med", "Medicine (Integrated Studies in English)", "University of Novi Sad", "Novi Sad", MD, Y6,
    ("7,000 يورو سنوياً", "€7,000 a year"), ("15 مقعداً؛ رسوم طلب 55 يورو", "15 places; €55 application fee"), NS_DL,
    ("الدراسة بالإنجليزية؛ مستوى الإنجليزية المطلوب حسب إعلان الكلية (للتحقق)", "Taught in English; required English level per the faculty's call (to verify)"),
    ("امتحان قبول أونلاين", "Online entrance exam"), ("التقديم حسب صفحة القبول في كلية الطب بنوفي ساد", "Apply per the Novi Sad Faculty of Medicine admission page"), NP, NP, NS_SRC, NS_SRC)
add(RS, "dent", "Dental Medicine (Integrated Studies in English)", "University of Novi Sad", "Novi Sad", DMD, ("المدة حسب إعلان الكلية (للتحقق)", "Duration per the faculty's call (to verify)"),
    ("7,000 يورو سنوياً", "€7,000 a year"), ("13 مقعداً؛ رسوم طلب 55 يورو", "13 places; €55 application fee"), NS_DL,
    ("الدراسة بالإنجليزية؛ مستوى الإنجليزية المطلوب حسب إعلان الكلية (للتحقق)", "Taught in English; required English level per the faculty's call (to verify)"),
    ("امتحان قبول أونلاين", "Online entrance exam"), ("التقديم حسب صفحة القبول في كلية الطب بنوفي ساد", "Apply per the Novi Sad Faculty of Medicine admission page"), NP, NP, NS_SRC, NS_SRC)
KG_SRC = "https://www.medf.kg.ac.rs/iasm/enrollment/3-IASM%202026%20(en).pdf"
add(RS, "med", "Medicine (Integrated Academic Studies in English)", "University of Kragujevac", "Kragujevac", MD, Y6,
    ("6,000 يورو سنوياً للأجانب (إعلان القبول 2026/2027 يذكر 6,000 يورو والقسط الأول عند التسجيل، ولا يحدد أنها سنوية، للتحقق)", "€6,000 a year for foreign students (the 2026/2027 call gives €6,000 with a first instalment at enrolment and does not say it is per year, to verify)"), ("رسوم امتحان 100 يورو", "€100 exam fee"),
    ("في 2026 كانت الفترة الثالثة: الأوراق من 7 إلى 11 سبتمبر والامتحان 16 سبتمبر؛ مواعيد 2027 لم تُنشر بعد", "In 2026 the third period took documents from 7 to 11 September 2026 with the exam on 16 September 2026; 2027 dates are not out yet"),
    ("B2 على الأقل في الإنجليزية، أو إثبات دراسة سابقة بالإنجليزية (إعلان القبول 2026/2027)", "At least B2 English, or proof of previous education in English (2026/2027 call)"),
    ("امتحان قبول في كلية الطب بجامعة كراغوييفاتس", "Entrance exam at the University of Kragujevac Faculty of Medicine"),
    ("حسب إعلان التسجيل في موقع الكلية", "Per the enrolment call on the faculty website"), NP, NP, KG_SRC, KG_SRC)
write("صربيا", "Serbia", "serbia", RS, level="bachelor")

# ============ Georgia (Ivane Javakhishvili Tbilisi State University, public) ============
GE = []
TSU = "https://tsu.ge/en/faculty/FACULTY%20OF%20MEDICINE/programs/434"
add(GE, "med", "Medicine (MD, English-taught)", "Ivane Javakhishvili Tbilisi State University", "Tbilisi", MD,
    ("6 سنوات (12 فصلاً، 362 ساعة معتمدة)", "6 years (12 semesters, 362 credits)"),
    (f"حوالي {e(8000, USD)} يورو سنوياً: 8,000 دولار أمريكي (4,000 دولار في كل فصل، وتُدفع بما يعادلها باللاري الجورجي)", "About €" + e(8000, USD) + " a year: US$8,000 (US$4,000 a semester, paid in the GEL equivalent)"),
    NP, ("غير منشور في المصدر؛ اسأل مكتب القبول في كلية الطب", "Not published in the source; ask the Faculty of Medicine admissions office"),
    ("مستوى B2 (IELTS أو TOEFL) ومقابلة بالفيديو للتأكد من الإنجليزية", "B2 (IELTS or TOEFL) and a video interview to confirm your English"),
    ("شهادة الثانوية مترجمة إلى الجورجية وموثقة، وما يثبت دراسة الأحياء والكيمياء والإنجليزية في المدرسة؛ من لم يدخل الامتحانات الوطنية الجورجية يُقبل بمقابلة حسب أمر وزارة التعليم",
     "Secondary certificate translated into Georgian and notarised, with proof that Biology, Chemistry and English were passed at school; applicants without the Georgian national exams are admitted through an interview under a Ministry of Education order"),
    ("نموذج أونلاين على uni-can.tsu.ge، وإرسال الأوراق إلى بريد ديوان الجامعة وكلية الطب المذكور في الصفحة", "Online form at uni-can.tsu.ge, then send the documents to the university chancellery and faculty emails listed on the page"),
    NP, NP, TSU, "https://uni-can.tsu.ge")
write("جورجيا", "Georgia", "georgia", GE, level="bachelor")

# ============ Moldova (USMF Nicolae Testemițanu and the Technical University of Moldova, public) ============
MDB, MDM = [], []
USMF_SRC = "https://studyinmd.mec.gov.md"
USMF_HOW = ("أرسل نسخ أوراقك إلى قسم الطلاب الأجانب في الجامعة لتصدر وزارة التعليم تأكيد حق الدراسة، ثم تجهز الجامعة الدعوة", "Send copies of your documents to the university's foreign students department so the Ministry of Education issues the study entitlement, then the university prepares the invitation")
add(MDB, "med", "General Medicine (English)", "Nicolae Testemițanu State University of Medicine and Pharmacy", "Chisinau", MD, Y6,
    ("6,000 يورو سنوياً (2025/2026 حسب بوابة Study in Moldova؛ رسوم 2026/2027 للتحقق)", "€6,000 a year (2025/2026 per the Study in Moldova portal; 2026/2027 fee to verify)"),
    NP, ("غير منشور في المصدر؛ راجع admission.usmf.md", "Not published in the source; see admission.usmf.md"), NP, NP, USMF_HOW, NP, NP, USMF_SRC, "https://admission.usmf.md")
add(MDB, "dent", "Stomatology (English)", "Nicolae Testemițanu State University of Medicine and Pharmacy", "Chisinau", DMD, Y5,
    ("7,000 يورو سنوياً (2025/2026 حسب بوابة Study in Moldova؛ رسوم 2026/2027 للتحقق)", "€7,000 a year (2025/2026 per the Study in Moldova portal; 2026/2027 fee to verify)"),
    NP, ("غير منشور في المصدر؛ راجع admission.usmf.md", "Not published in the source; see admission.usmf.md"), NP, NP, USMF_HOW, NP, NP, USMF_SRC, "https://admission.usmf.md")
UTM = "https://international.utm.md/?p=105"
UTM_ADM = ("رسوم قبول 100 يورو", "€100 admission fee")
UTM_DL = ("غير منشور في المصدر", "Not published in the source")
UTM_HOW = ("التقديم عبر مكتب الطلاب الأجانب في الجامعة التقنية بعد تأكيد حق الدراسة من وزارة التعليم", "Apply through the Technical University's foreign students office after the Ministry of Education confirms your study entitlement")
for field, name, deg, dur, fee, lst in [
    ("vet", "Veterinary Medicine (English)", ("طبيب بيطري - برنامج متكامل بعد الثانوية", "Veterinary medicine - integrated programme after secondary school"), ("6 سنوات", "6 years"), 3200, MDB),
    ("cs", "Software Engineering (BA, English)", ("بكالوريوس", "Bachelor's"), Y4, 3000, MDB),
    ("bus", "Business Administration (BA, English)", ("بكالوريوس", "Bachelor's"), Y3, 2500, MDB),
    ("cs", "Software Engineering (MA, English)", ("ماجستير", "Master's"), ("3 فصول (سنة ونصف)", "3 semesters (1.5 years)"), 3000, MDM),
    ("ds", "Data Science (MA, English)", ("ماجستير", "Master's"), ("سنتان", "2 years"), 3000, MDM),
    ("bus", "International MBA in Agrobusiness (English)", ("ماجستير إدارة الأعمال", "MBA"), ("سنتان", "2 years"), 2500, MDM)]:
    add(lst, field, name, "Technical University of Moldova", "Chisinau", deg, dur,
        (f"{fee:,} يورو سنوياً (برامج 2026/2027 بالإنجليزية)", f"€{fee:,} a year (2026/2027 English programmes)"),
        UTM_ADM, UTM_DL, ("الدراسة بالإنجليزية؛ شروط اللغة حسب الجامعة (للتحقق)", "Taught in English; language requirements per the university (to verify)"),
        NP, UTM_HOW, NP, NP, UTM, UTM)
write("مولدوفا", "Moldova", "moldova", MDB, level="bachelor")
write("مولدوفا", "Moldova", "moldova", MDM, level="master")
append_master("مولدوفا", "moldova")

# ============ Armenia (Yerevan State Medical University after Mkhitar Heratsi, public) ============
AMB, AMM = [], []
YS = "https://ysmu.am/en/?p=208319"
YS_APPLY = "https://ysmu.am/en/admission-foreign-citizens/"
YS_FEE = lambda amd: (f"حوالي {e(amd, AMD)} يورو سنوياً: {amd:,} درام أرمني، والرسوم ثابتة طوال الدراسة (سنة الرسوم غير مذكورة في الصفحة؛ للتحقق)",
                      f"About €{e(amd, AMD)} a year: AMD {amd:,}; the fee stays the same for the whole programme (the page does not name the year; to verify)")
YS_DL = ("في دورة 2026/2027 كان التقديم من 22 يونيو إلى 30 سبتمبر عبر fs.emis.am؛ مواعيد 2027 لم تُنشر بعد", "In the 2026/2027 cycle applications ran from 22 June 2026 - 30 September 2026 on fs.emis.am; 2027 dates are not out yet")
YS_HOW = ("التقديم أونلاين عبر نظام fs.emis.am، والجامعة تطلب لك إذن الدخول من وزارة التعليم", "Apply online on fs.emis.am; the university requests your entry permit from the Ministry of Education")
YS_OTHER = ("تأمين صحي إلزامي", "Compulsory medical insurance")
add(AMB, "med", "General Medicine (English)", "Yerevan State Medical University", "Yerevan", MD, Y6, YS_FEE(2600000), NP, YS_DL, NP, YS_OTHER, YS_HOW, NP, NP, YS, YS_APPLY)
add(AMB, "dent", "Stomatology (English)", "Yerevan State Medical University", "Yerevan", DMD, Y5, YS_FEE(2600000), NP, YS_DL, NP, YS_OTHER, YS_HOW, NP, NP, YS, YS_APPLY)
add(AMB, "pharm", "Pharmacy (BA, English)", "Yerevan State Medical University", "Yerevan", ("بكالوريوس صيدلة", "Bachelor of Pharmacy"), Y4, YS_FEE(2100000), NP, YS_DL, NP, YS_OTHER, YS_HOW, NP, NP, YS, YS_APPLY)
add(AMM, "pharm", "Pharmacy (MA, English)", "Yerevan State Medical University", "Yerevan", ("ماجستير صيدلة", "Master of Pharmacy"), ("سنة واحدة", "1 year"), YS_FEE(2200000), NP, YS_DL, NP,
    ("بكالوريوس صيدلة؛ تأمين صحي إلزامي", "A bachelor's in pharmacy; compulsory medical insurance"), YS_HOW, NP, NP, YS, YS_APPLY)
write("أرمينيا", "Armenia", "armenia", AMB, level="bachelor")
write("أرمينيا", "Armenia", "armenia", AMM, level="master")
append_master("أرمينيا", "armenia")

# ============ North Macedonia (Goce Delčev University Štip, public) ============
MK = []
UGD = "https://www.ugd.edu.mk/en/faculty-of-medicine-general-medicine/"
UGD_CALL = "https://www.ugd.edu.mk/wp-content/uploads/2026/07/call_for_applications_2026-27_first_enrollment_period_en.pdf"
add(MK, "med", "General Medicine (English)", "Goce Delčev University of Štip", "Stip", MD, Y6,
    ("4,000 يورو سنوياً", "€4,000 a year"), ("رسوم طلب 100 يورو؛ 80 مقعداً كحد أقصى", "€100 application fee; up to 80 places"),
    ("مواعيد امتحان 2027 لم تُنشر بعد؛ راجع إعلان التسجيل في موقع الجامعة", "2027 exam dates are not out yet; see the enrolment call on the university website"),
    ("مقابلة بالإنجليزية ضمن القبول", "An English interview is part of admission"),
    ("امتحان في الكيمياء والأحياء (30 سؤالاً لكل مادة) ومقابلة؛ معادلة شهادة الثانوية من وزارة التعليم، والأوراق تُترجم إلى المقدونية وتُوثق",
     "Exam in Chemistry and Biology (30 questions each) and an interview; nostrification of the secondary certificate by the Ministry of Education, with documents translated into Macedonian and notarised"),
    ("حسب إعلان التسجيل في موقع الجامعة", "Per the enrolment call on the university website"), NP, NP, UGD, UGD_CALL)
add(MK, "law", "International Law and International Relations (English)", "Goce Delčev University of Štip", "Stip", ("بكالوريوس", "Bachelor's"),
    ("المدة حسب صفحة البرنامج (للتحقق)", "Duration per the programme page (to verify)"),
    ("1,000 يورو سنوياً", "€1,000 a year"), NP,
    ("مواعيد 2027 لم تُنشر بعد؛ راجع إعلان التسجيل", "2027 dates are not out yet; see the enrolment call"), NP,
    ("معادلة شهادة الثانوية من وزارة التعليم", "Nostrification of the secondary certificate by the Ministry of Education"),
    ("حسب إعلان التسجيل في موقع الجامعة", "Per the enrolment call on the university website"), NP, NP, "https://www.ugd.edu.mk/?p=12928", UGD_CALL)
write("مقدونيا الشمالية", "North Macedonia", "north-macedonia", MK, level="bachelor")

# ============ Bosnia and Herzegovina (University of Sarajevo; University of East Sarajevo in Foča: public) ============
BA = []
add(BA, "med", "Integrated Medical Degree Programme (IMDP, English)", "University of Sarajevo", "Sarajevo", MD, Y6,
    (f"حوالي {e(12000, BAM)} يورو سنوياً: 12,000 مارك بوسني", f"About €{e(12000, BAM)} a year: BAM 12,000"), NP,
    ("في 2025/2026 كان التسجيل في الدعوة الأولى من 15 إلى 21 يوليو؛ دعوة 2026/2027 غير منشورة في المصدر الذي اطلعنا عليه", "In 2025/2026 first-call enrolment ran 15 July 2025 - 21 July 2025; the 2026/2027 call is not in the source we read"),
    ("إثبات الإنجليزية مطلوب", "Proof of English is required"),
    ("معادلة شهادة الثانوية من وزارة التعليم في كانتون سراييفو، أو ما يثبت بدء الإجراء", "Nostrification of the secondary certificate by the Sarajevo Canton Ministry of Education, or proof that the procedure has started"),
    ("حسب إعلان التسجيل في موقع كلية الطب", "Per the enrolment call on the Faculty of Medicine website"), NP, NP,
    "https://mf.unsa.ba/wp-content/uploads/2025/07/ENROLMENT-INTO-THE-FIRST-YEAR-FIRST-CALL-2025-2026.pdf", "https://mf.unsa.ba/medical-study-in-english/")
add(BA, "med", "Medicine (English)", "University of East Sarajevo", "Foča", MD, Y6,
    CHK(f"حوالي {e(6000, BAM)} يورو سنوياً: 6,000 مارك بوسني (رقم 2024/2025)", f"About €{e(6000, BAM)} a year: BAM 6,000 (2024/2025 figure)"),
    ("رسوم امتحان القبول 400 مارك", "BAM 400 entrance fee"), ("غير منشور في المصدر", "Not published in the source"), NP,
    ("إثبات وسائل معيشة 400 مارك شهرياً لإقامة الدراسة", "Proof of BAM 400 a month for the study residence permit"),
    ("حسب صفحة الدراسة بالإنجليزية في كلية الطب بفوتشا", "Per the English studies page of the Faculty of Medicine in Foča"), NP, NP,
    "https://studiesinenglish.mef.ues.rs.ba", "https://studiesinenglish.mef.ues.rs.ba")
write("البوسنة والهرسك", "Bosnia and Herzegovina", "bosnia-and-herzegovina", BA, level="bachelor")

# ============ Montenegro (University of Montenegro, the only public university) ============
ME = []
MON = "https://monteb.me/blog/news/second-call-for-applications-monteb---for-international-students"
add(ME, "bus", "MONTEB: Business and Economics (BA, English)", "University of Montenegro", "Podgorica", ("بكالوريوس", "Bachelor's"), Y3,
    ("3,500 يورو سنوياً", "€3,500 a year"), ("69 مقعداً؛ وديعة 55 يورو لإجراء الاعتراف بالشهادة", "69 places; €55 deposit for the recognition procedure"),
    ("في 2026 كانت الدعوة الثانية يومي 6 و7 يوليو؛ مواعيد 2027 لم تُنشر بعد", "In 2026 the second call ran 6 July 2026 - 7 July 2026; 2027 dates are not out yet"),
    ("مستوى B2 في الإنجليزية", "English at B2"),
    ("كلية الاقتصاد بجامعة الجبل الأسود؛ الاعتراف بشهادة الثانوية من وزارة التعليم", "Faculty of Economics, University of Montenegro; recognition of the secondary certificate by the Ministry of Education"),
    ("حسب الدعوة المنشورة في موقع MONTEB", "Per the call on the MONTEB website"), NP, NP, MON, MON)
write("الجبل الأسود", "Montenegro", "montenegro", ME, level="bachelor")
