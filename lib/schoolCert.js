// Does an Arab secondary-school certificate give direct access to a bachelor's? Per country.
// Detailed for the Egyptian Thanaweya Amma and Al-Azhar certificate; general rule for others.
// kind: direct = enough on its own (with the usual documents); recog = needs an official recognition step first;
// extra = usually needs something more (foundation year, Studienkolleg or university year); uni = the university decides case by case.
// check: true = part of the entry is from a non-official source (shown as "للتحقق"). Reviewed 2026-11-15.

import { CERT_SA, CERT_SA_SAME } from "./cert/sa";
import { CERT_MA, CERT_MA_SAME } from "./cert/ma";
import { CERT_JO, CERT_JO_SAME } from "./cert/jo";
import { CERT_DZ, CERT_DZ_SAME } from "./cert/dz";

export const CERT = {
  de: {
    kind: "extra",
    eg: {
      ar: "الثانوية العامة وحدها (أو الأزهرية) لا تكفي للدخول المباشر حسب أدلة تنقل عن قاعدة anabin. الطريق: سنة تحضيرية (Studienkolleg) ثم امتحان «تقييم الأهلية» (Feststellungsprüfung)، أو دراسة سنة أو سنتين بنجاح في جامعة مصرية في تخصص قريب ثم التقديم.",
      en: "The Thanaweya Amma (or Al-Azhar certificate) alone is not enough for direct entry, per guides quoting the anabin database. The route: a Studienkolleg then the Feststellungsprüfung, or one or two successful years at an Egyptian university in a related field before applying.",
    },
    general: {
      ar: "قاعدة بيانات القبول في DAAD تصنف كل شهادة: دخول مباشر، أو دخول مباشر لتخصصات معينة، أو بعد سنة أو سنتين دراسة جامعية في بلدك، أو عن طريق Studienkolleg.",
      en: "The DAAD admission database classifies each certificate: direct access, direct access for certain fields, after one or two years of university in your country, or via a Studienkolleg.",
    },
    note: { ar: "Studienkolleg بالألمانية غالباً ويحتاج لغة ألمانية (B1 عادةً). تأكد من شهادتك في قاعدة DAAD قبل أي خطوة.", en: "Studienkollegs are mostly in German and usually need German at B1. Check your certificate in the DAAD database first." },
    src: "https://www.study-in-germany.com/en/plan-your-studies/requirements/entrance-qualification/",
    tool: "https://www2.daad.de/deutschland/nach-deutschland/voraussetzungen/en/57293-database-on-admission-requirements/",
    check: true,
  },
  nl: {
    kind: "extra",
    eg: {
      ar: "Nuffic (الجهة الرسمية الهولندية) تعادل الثانوية العامة المصرية والثانوية الأزهرية بشهادة HAVO. وHAVO في هولندا تؤهل عادةً لجامعات العلوم التطبيقية (HBO)، أما الجامعات البحثية (WO) فتطلب عادةً مستوى أعلى (VWO)، فقد تحتاج سنة تأسيسية أو سنة جامعية أولاً.",
      en: "Nuffic (the official Dutch body) compares the Egyptian Thanaweya Amma and the Al-Azhar certificate to a HAVO diploma. HAVO usually gives access to universities of applied sciences (HBO); research universities (WO) usually ask for a higher level (VWO), so you may need a foundation year or a year of university first.",
    },
    general: { ar: "الجامعة تقيّم شهادتك ضمن القبول، وكثير منها يقارنها بتقييم Nuffic للبلد.", en: "The university assesses your certificate during admission; many compare it with Nuffic's country evaluation." },
    note: { ar: "اسأل الجامعة: هل تقبل شهادتك مباشرة لهذا البرنامج، أم تطلب سنة تأسيسية؟", en: "Ask the university whether it accepts your certificate directly for this programme or asks for a foundation year." },
    src: "https://www.nuffic.nl/en/node/276",
    tool: "https://www.nuffic.nl/en/node/276",
  },
  es: {
    kind: "recog",
    eg: {
      ar: "تحتاج معادلة الثانوية بالبكالوريا الإسبانية (homologación) من وزارة التعليم، ثم اعتماد UNEDasiss لحساب درجتك. يمكن التسجيل مؤقتاً بإيصال طلب المعادلة.",
      en: "You need your certificate recognised as the Spanish Bachillerato (homologación) by the Ministry of Education, then UNEDasiss accreditation to calculate your grade. You can enrol provisionally with the homologación receipt.",
    },
    general: { ar: "نفس الخطوات لكل الشهادات من خارج الاتحاد الأوروبي التي ليس لها اتفاقية مع إسبانيا.", en: "The same steps apply to every non-EU certificate without an agreement with Spain." },
    note: { ar: "ابدأ المعادلة مبكراً لأنها قد تأخذ شهوراً.", en: "Start the homologación early; it can take months." },
    src: "https://uc3m.es/grado/admision/solicitud/preinscripcion/acreditacion-uned",
    tool: "https://www.uam.es/uam/estudios/sistemas-educativos-extranjeros",
  },
  it: {
    kind: "direct",
    eg: {
      ar: "إيطاليا تشترط 12 سنة دراسة مدرسية، ونظام التعليم المصري 12 سنة (6 ابتدائي + 3 إعدادي + 3 ثانوي)، فالثانوية العامة تكفي من ناحية عدد السنوات. تحتاج ترجمة وتصديق الشهادة وإقرار القيمة أو بيان CIMEA، وتنجح في اختبار القبول إن كان البرنامج يطلبه.",
      en: "Italy requires 12 years of schooling, and Egypt's system has 12 (6 primary + 3 preparatory + 3 secondary), so the Thanaweya Amma meets the years requirement. You need the certificate translated and legalised with a Declaration of Value or a CIMEA statement, and to pass any entrance test the programme sets.",
    },
    general: { ar: "شرط وزارة الجامعات الإيطالية: شهادة بعد 12 سنة دراسة على الأقل وتؤهل للجامعة في بلدك. إذا كانت أقل من 12 سنة فتحتاج إلى سنة جامعية أو سنة تأسيسية.", en: "The Italian ministry's rule: a certificate after at least 12 years of schooling that gives university access in your country. With fewer than 12 years you need a university year or a foundation year." },
    note: { ar: "الشهادة يجب أن تؤهلك لبرنامج مشابه في بلدك.", en: "The certificate must qualify you for a similar programme in your country." },
    src: "https://www.unibo.it/en/teaching/enrolment-transfer-and-final-examination/enrolling-in-first-or-single-cycle-degree-programme-foreign-qualification",
    tool: "https://www.studiare-in-italia.it/studentistranieri/",
  },
  fi: {
    kind: "direct",
    eg: {
      ar: "في فنلندا تكفي شهادة أجنبية تؤهلك لدخول الجامعة في البلد الذي صدرت منه، والثانوية العامة تؤهل للجامعات المصرية. بعدها الاختيار حسب معايير كل برنامج (درجات، أو SAT، أو اختبار قبول).",
      en: "In Finland a foreign certificate that gives access to higher education in the country that issued it is enough, and the Thanaweya Amma gives access to Egyptian universities. Selection then follows each programme's criteria (grades, SAT or an entrance exam).",
    },
    general: { ar: "نفس القاعدة لكل الشهادات الأجنبية.", en: "The same rule applies to every foreign certificate." },
    note: { ar: "كثير من البرامج الإنجليزية تطلب SAT أو اختبار قبول، فاقرأ معايير الاختيار على Studyinfo.", en: "Many English-taught programmes ask for the SAT or an entrance exam; read the selection criteria on Studyinfo." },
    src: "https://www.vamk.fi/en/applicant/programmes",
    tool: "https://studyinfo.fi/konfo/en/",
  },
  se: {
    kind: "uni",
    eg: {
      ar: "في السويد القاعدة العامة أن الشهادة التي تؤهلك لدخول الجامعة في بلدك تكفي غالباً للشرط العام، والتقديم وتقييم الأوراق عبر universityadmissions.se. تعليمات مصر تحديداً اقرأها في صفحة تعليمات الدول (للتحقق).",
      en: "In Sweden the general rule is that a certificate giving university access in your country usually meets the general entry requirement; you apply and the documents are assessed through universityadmissions.se. Read the Egypt-specific instructions on the country-instructions page (to verify).",
    },
    general: { ar: "نفس القاعدة لكل الشهادات الأجنبية، مع شرط الإنجليزية (English 6).", en: "The same rule applies to every foreign certificate, plus the English requirement (English 6)." },
    note: { ar: "البكالوريوس بالإنجليزية في السويد قليل، فلم نضف برامج بكالوريوس سويدية.", en: "English-taught bachelor's programmes are few in Sweden, so we have not added Swedish bachelor's programmes." },
    src: "https://www.universityadmissions.se/en/apply-to-bachelors/provide-application-documents-bachelors/country-instructions/",
    tool: "https://www.universityadmissions.se/en/apply-to-bachelors/provide-application-documents-bachelors/country-instructions/",
    check: true,
  },
  bg: {
    kind: "recog",
    eg: {
      ar: "تقدّم للجامعة البلغارية، والجامعة ترسل ملفك لوزارة التعليم التي تصدر الشهادة المطلوبة لتأشيرة D. يجب أن تكون الأوراق مصدقة: الخارجية المصرية ثم السفارة البلغارية، لأن مصر ليست في اتفاقية لاهاي (للتحقق).",
      en: "You apply to the Bulgarian university, which sends your file to the Ministry of Education; the Ministry issues the certificate needed for the D visa. Documents must be legalised by the Egyptian MFA and then the Bulgarian embassy, because Egypt is not in the Hague convention (to verify).",
    },
    general: { ar: "نفس الإجراء لكل المتقدمين من خارج الاتحاد الأوروبي (للتحقق).", en: "The same procedure applies to every non-EU applicant (to verify)." },
    note: { ar: "الطب في بلغاريا غالباً فيه اختبار قبول في الأحياء والكيمياء.", en: "Medicine in Bulgaria usually has an entrance exam in biology and chemistry." },
    src: "https://tu-sofia.bg/foreign-applications/site/index/page/visa",
    check: true,
  },
  cz: {
    kind: "recog",
    eg: {
      ar: "قبل التسجيل في البكالوريوس يجب معادلة الثانوية (nostrification) من السلطة الإقليمية في التشيك، وقد تطلب منك امتحاناً في بعض المواد. تقيّم بعض الجامعات الشهادة بنفسها لغرض القبول لديها فقط.",
      en: "Before enrolling in a bachelor's you need recognition (nostrification) of your school certificate by a Czech regional authority, which may set an exam in a few subjects. Some universities assess certificates themselves, valid only for admission there.",
    },
    general: { ar: "نفس الإجراء لكل الشهادات من خارج الاتحاد الأوروبي.", en: "The same procedure applies to every certificate from outside the EU." },
    note: { ar: "قد يستغرق الإجراء شهوراً، فقدّم مبكراً ومعه ترجمة تشيكية معتمدة.", en: "It can take months, so start early, with a certified Czech translation." },
    src: "https://portal.gov.cz/en/sluzby-vs/nostrifikace-zahranicniho-vysvedceni-S1101",
  },
  at: {
    kind: "extra",
    eg: {
      ar: "تطلب النمسا من غير الأوروبيين شهادة ثانوية تؤهل للجامعة، وكذلك ما يثبت أنها تؤهلك للتخصص نفسه في بلدك (للتحقق مع الجامعة).",
      en: "Austria asks non-EU applicants for a school certificate giving university access, plus proof that it admits you to the same field at home (check with the university).",
    },
    general: { ar: "نفس القاعدة لكل الشهادات من خارج الاتحاد الأوروبي.", en: "The same rule applies to every certificate from outside the EU." },
    note: { ar: "يجب أن تكون الأوراق مصدقة ومترجمة حسب طلب الجامعة.", en: "Documents must be legalised and translated as the university requires." },
    src: "https://www.european-funding-guide.eu/articles/funding-overview/financing-your-studies-austria",
    check: true,
  },
  fr: {
    kind: "extra",
    eg: {
      ar: "للسنة الأولى من البكالوريوس (Licence 1) في جامعة حكومية يجب تقديم طلب قبول مسبق (DAP) عن طريق Campus France مصر، وهذه البرامج بالفرنسية فيُطلب مستوى فرنسي B2 (اختبار TCF). البرامج بالإنجليزية قليلة، ولكل مدرسة طريقتها.",
      en: "For the first year of a bachelor's (Licence 1) at a public university you file a prior admission request (DAP) through Campus France Egypt; these programmes are in French, so French at B2 (TCF test) is required. English-taught bachelor's programmes are few and each school has its own route.",
    },
    general: { ar: "إجراء DAP يُطبق على حملة الشهادات من خارج الاتحاد الأوروبي في 75 دولة فيها Campus France بإجراء Études en France.", en: "The DAP procedure applies to non-EU school-certificate holders in the 75 countries where Campus France runs the Études en France procedure." },
    note: { ar: "مواعيد DAP بتبدأ في الخريف قبل سنة الدراسة، فابدأ بدري واعمل اختبار الفرنسي قبلها.", en: "DAP deadlines fall in the autumn before the study year, so start early and take the French test first." },
    src: "https://www.enseignementsup-recherche.gouv.fr/sites/default/files/2026-10/Notice%20dossier%20blanc%20DAP%202027-2028.pdf",
  },
  pt: {
    kind: "uni",
    eg: {
      ar: "الطالب الدولي يقدّم في المسابقة الخاصة للطلاب الدوليين، والجامعة تقيّم شهادتك ومواد امتحانات الدخول المطلوبة عندها (أو تطلب منك امتحاناً). أما المسابقة الوطنية العادية فتتطلب شهادة معادلة للثانوية البرتغالية من مدرسة ثانوية برتغالية أو من مديرية التعليم DGE.",
      en: "International students apply through the special contest for international students; the university assesses your certificate and the entrance-exam subjects it requires (or sets an exam). For the regular national contest you need an equivalence certificate to Portuguese secondary education from a Portuguese secondary school or the DGE.",
    },
    general: { ar: "يجب أن تذكر شهادة المعادلة الدرجة النهائية على مقياس 0 - 200.", en: "The equivalence certificate must state the final grade on a 0 - 200 scale." },
    note: { ar: "أغلب برامج البكالوريوس بالبرتغالية، والجامعات تطلب شهادة لغة برتغالية إذا درست الثانوية بلغة أخرى.", en: "Most bachelor's programmes are in Portuguese, and universities ask for a Portuguese-language certificate if your schooling was in another language." },
    src: "https://www.dges.gov.pt/en/node/172",
  },
  ie: {
    kind: "extra",
    eg: {
      ar: "غير الأوروبيين يقدّمون للبكالوريوس مباشرة للجامعة. جامعة UCC مثلاً لا تقبل شهادة الثانوية المصرية وحدها: تطلب معها سنة دراسة جامعية بتقديرات جيدة، أو برنامجاً تأسيسياً معترفاً به عندها، ومتوسط لا يقل عن 75 - 85% حسب البرنامج.",
      en: "Non-EU applicants apply for a bachelor's directly to the university. UCC, for example, does not accept the Egyptian secondary certificate alone: it asks for a year of university study with good grades or a foundation programme it recognises, and an average of at least 75 - 85% depending on the programme.",
    },
    general: { ar: "كل جامعة تحدد شروطها، ويمكنك مقارنة شهادتك بالمؤهلات الأيرلندية مجاناً في قاعدة بيانات NARIC Ireland.", en: "Each university sets its own rules, and you can compare your certificate with Irish qualifications free of charge in the NARIC Ireland database." },
    note: { ar: "تأكد من الشروط المنشورة لشهادتك في صفحة الجامعة قبل التقديم.", en: "Check the conditions published for your certificate on the university's page before applying." },
    src: "https://www.ucc.ie/en/study/comparison/undergrad/africa-me-india/egypt/",
    check: true,
  },
  dk: {
    kind: "uni",
    eg: {
      ar: "وزارة التعليم العالي الدنماركية تنشر قائمة بالشهادات الثانوية الأجنبية التي تحقق شرط القبول العام في البكالوريوس. الشهادة التي تُعادل مستوى HF الدنماركي فقط تحتاج سنة تعليم عالٍ في بلدك أو دراسة تكميلية قبل الجامعة. وضع الثانوية العامة المصرية في القائمة للتحقق.",
      en: "The Danish Ministry of Higher Education publishes a list of foreign upper-secondary certificates that meet the general entry requirement for bachelor's programmes. A certificate assessed only at the level of the Danish HF needs one year of higher education at home or supplementary education first. Where the Egyptian Thanaweya Amma stands on the list is to be verified.",
    },
    general: { ar: "وزارة التعليم العالي الدنماركية تنشر قائمة بالشهادات الثانوية الأجنبية التي تحقق شرط القبول العام في البكالوريوس، فابحث عن شهادتك فيها. والجامعة قد تقبلك أيضاً بتكملة بطريقة أخرى حسب تقديرها.", en: "The Danish Ministry of Higher Education publishes a list of foreign school certificates that meet the general entry requirement for bachelor's programmes, so look for yours there. A university may also accept other ways of supplementing, at its discretion." },
    note: { ar: "برامج البكالوريوس بالإنجليزية قليلة في الدنمارك، وأغلبها يطلب الإنجليزية بمستوى A أو B الدنماركي.", en: "English-taught bachelor's programmes are few in Denmark, and most require English at Danish level A or B." },
    src: "https://ufsn.dk/recognition/admission-he",
    check: true,
  },
  hr: {
    kind: "recog",
    eg: {
      ar: "شهادة الثانوية من خارج الاتحاد الأوروبي يجب الاعتراف بها في كرواتيا قبل القيد: تسجّل على منصة Postani student وتقدّم طلب الاعتراف أونلاين، وترسل نسخاً موثقة من الشهادة وكشف الدرجات لوكالة العلوم والتعليم العالي (AZVO). الأوراق يجب أن تُترجم للكرواتية أو الإنجليزية بمترجم معتمد.",
      en: "A school certificate from outside the EU must be recognised in Croatia before enrolment: register on the Postani student platform, submit the recognition request online, and post certified copies of your certificate and transcripts to the Agency for Science and Higher Education (AZVO). Documents must be translated into Croatian or English by a certified court interpreter.",
    },
    general: { ar: "الاعتراف الناجح يضيفك للقائمة الوطنية للتقديم على التعليم العالي.", en: "Successful recognition puts you on the national list of higher education applicants." },
    note: { ar: "ابدأ الاعتراف مبكراً لأن نتيجته شرط للقيد في كليات الطب.", en: "Start recognition early, as it is a condition for enrolling at the medical schools." },
    src: "https://mefst.unist.hr/default.aspx?id=13242",
  },
  sk: {
    kind: "recog",
    eg: {
      ar: "شهادة الثانوية من خارج الاتحاد الأوروبي يجب الاعتراف بها (nostrification) قبل القيد في الجامعة، عن طريق مكتب الإدارة المدرسية الإقليمي (Regional School Administration Office)، والقرار خلال شهرين من اكتمال الطلب.",
      en: "A school certificate from outside the EU must be recognised (nostrification) before enrolling at university, through the Regional School Administration Office, which decides within two months of a complete application.",
    },
    general: { ar: "الأوراق تحتاج ترجمة رسمية للسلوفاكية.", en: "Documents need an official Slovak translation." },
    note: { ar: "ابدأ مبكراً لأن الاعتراف شرط للقيد في كليات الطب.", en: "Start early, as recognition is a condition for enrolling at the medical faculties." },
    src: "https://uznavanie.minedu.sk/en/category/recognition-of-secondary-education",
  },
  cy: {
    kind: "uni",
    eg: {
      ar: "الجامعة القبرصية هي التي تقيّم شهادتك ضمن القبول. البرامج الحكومية بالإنجليزية في البكالوريوس قليلة حالياً، وجامعة قبرص أعلنت برامج بكالوريوس بالإنجليزية تبدأ في سبتمبر 2027 (للتحقق من الشروط عند فتح التقديم).",
      en: "The Cypriot university assesses your certificate during admission. English-taught bachelor's programmes at public universities are few for now, and the University of Cyprus has announced English-taught bachelor's degrees starting in September 2027 (check the requirements when applications open).",
    },
    general: { ar: "الأوراق المصرية تحتاج توثيقاً من الخارجية المصرية ثم سفارة قبرص.", en: "Egyptian documents need attestation by Egypt's foreign ministry and then the Cyprus Embassy." },
    note: { ar: "للماجستير، الجامعة تقيّم شهادة البكالوريوس بنفسها.", en: "For a master's, the university assesses your bachelor's degree itself." },
    src: "https://www.ucy.ac.cy/ir/wp-content/uploads/sites/113/2026/04/ENTRY-PERMIT-REGULATIONS.pdf",
    check: true,
  },
  mt: {
    kind: "uni",
    eg: {
      ar: "جامعة مالطا تقيّم شهادتك ضمن القبول. ويمكنك طلب بيان مقارنة (Recognition Statement) أونلاين من مركز MQRIC، وهو مركز ENIC-NARIC في مالطا، حتى قبل بدء الدراسة.",
      en: "The University of Malta assesses your certificate during admission. You can also request a recognition statement online from MQRIC, Malta's ENIC-NARIC centre, even before you start studying.",
    },
    general: { ar: "بيان MQRIC يحدد مستوى مؤهلك على إطار المؤهلات المالطي (MQF).", en: "The MQRIC statement places your qualification on the Malta Qualifications Framework (MQF)." },
    note: { ar: "تصريح الإقامة للدراسة يشترط برنامجاً بمستوى MQF 5 أو أعلى في مؤسسة مرخّصة.", en: "The study residence permit requires a programme at MQF level 5 or above at a licensed institution." },
    src: "https://mfhea.mt/academic-qualifications/",
    check: true,
  },
  no: {
    kind: "uni",
    eg: {
      ar: "الجامعات النرويجية ملزمة بقائمة GSU الرسمية. للمصريين: شهادة الثانوية العامة وحدها لا تكفي لدخول البكالوريوس، والمطلوب معها سنة دراسة جامعية في مصر (حسب صفحة جامعة أغدر الرسمية لمصر).",
      en: "Norwegian universities must follow the official GSU list. For Egyptian applicants the General Secondary Education Certificate alone is not enough for a bachelor's; one year of university study is required as well (per the University of Agder's official page for Egypt).",
    },
    general: { ar: "بعض البرامج تطلب مواد إضافية، مثل الرياضيات بمستوى R1 النرويجي ومادة علمية للبرامج التقنية.", en: "Some programmes require extra subjects, such as mathematics at Norwegian R1 level and a science subject for technology programmes." },
    note: { ar: "برامج البكالوريوس بالإنجليزية قليلة جداً في النرويج، وأغلبها بالنرويجية وتتطلب إثبات اللغة النرويجية.", en: "English-taught bachelor's programmes are very few in Norway; most are in Norwegian and require proof of Norwegian." },
    src: "https://www.uia.no/english/studies/how-to-apply/countries/egypt.html",
  },
  be: {
    kind: "uni",
    eg: { ar: "الجامعة هي التي تقيّم شهادتك ضمن القبول (في فلاندرز غالباً بدون معادلة رسمية منفصلة).", en: "The university assesses your certificate during admission (in Flanders usually without separate official recognition)." },
    general: { ar: "في فلاندرز الجامعة تقرر، والجامعات الناطقة بالفرنسية تتبع نظام معادلة آخر.", en: "In Flanders the university decides; French-speaking universities follow a separate equivalence system." },
    note: { ar: "بعض البرامج تطلب اختبار قبول أو مواد معينة في الثانوية.", en: "Some programmes ask for an entrance test or specific school subjects." },
    src: "https://www.vlaanderen.be/en/studying/studying-in-flanders-with-a-foreign-diploma",
  },
  ee: {
    kind: "uni",
    eg: { ar: "الجامعة ترسل شهادتك لمركز المعادلة الإستوني (مجاناً)، والقرار للجامعة. كثير من البرامج تطلب اختبار قبول أو مقابلة.", en: "The university sends your certificate to the Estonian recognition centre (free) and makes the decision. Many programmes add an entrance test or interview." },
    general: { ar: "نفس الإجراء لكل الشهادات الأجنبية.", en: "The same procedure applies to every foreign certificate." },
    note: { ar: "بعض الجامعات تطلب تقييماً إيجابياً قبل القبول النهائي.", en: "Some universities require a positive evaluation before final admission." },
    src: "https://harno.ee/en/recognition-qualifications/qualifications/academic-recognition",
  },
  pl: {
    kind: "recog",
    eg: { ar: "شهادة الثانوية من خارج الاتحاد الأوروبي تحتاج اعترافاً: بيان من NAWA أو معادلة (nostrification) من مكتب التعليم الإقليمي، مع أبوستيل أو تصديق. والقبول بعدها للجامعة.", en: "A non-EU school certificate needs recognition: a NAWA statement or nostrification by the regional education office, with an apostille or legalisation. Admission then rests with the university." },
    general: { ar: "نفس الإجراء لكل الشهادات من خارج الاتحاد الأوروبي والدول التي لها اتفاقيات.", en: "The same procedure applies to certificates from outside the EU and agreement countries." },
    note: { ar: "بعض الجامعات تسمح بإكمال المعادلة حتى نهاية الفصل الأول.", en: "Some universities let you finish nostrification by the end of the first semester." },
    src: "https://www.nawa.gov.pl/en/recognition/recognition-for-academic-purposes/faq-frequently-asked-questions",
  },
  hu: {
    kind: "uni",
    eg: { ar: "الجامعة نفسها تجري الاعتراف بشهادتك ضمن القبول في البرامج الإنجليزية، وغالباً مع اختبار قبول (خاصة الطب).", en: "The university runs the recognition of your certificate as part of admission to English-taught programmes, often with an entrance exam (especially Medicine)." },
    general: { ar: "نفس الإجراء لكل الشهادات الأجنبية.", en: "The same procedure applies to every foreign certificate." },
    note: { ar: "برامج الطب تشترط عادةً الأحياء والكيمياء في الثانوية.", en: "Medicine usually requires Biology and Chemistry at school." },
    src: "https://www.nefmi.gov.hu/english/hungarian-equivalence/information-bulletin-on",
  },
  ro: {
    kind: "recog",
    eg: { ar: "تقدم للجامعة، والجامعة ترسل ملفك لوزارة التعليم التي تصدر «خطاب القبول للدراسة» بعد التحقق من شهادتك. الأوراق مترجمة للرومانية ومصدقة.", en: "You apply to the university, which sends your file to the Ministry of Education; the Ministry issues the Letter of Acceptance after checking your certificate. Documents must be translated into Romanian and legalised." },
    general: { ar: "نفس الإجراء لكل المتقدمين من خارج الاتحاد الأوروبي.", en: "The same procedure applies to every non-EU applicant." },
    note: { ar: "خطاب القبول مطلوب لتأشيرة الدراسة.", en: "The Letter of Acceptance is needed for the study visa." },
    src: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-romania_en",
  },
  lv: {
    kind: "uni",
    eg: { ar: "الجامعة ترسل شهادتك لمركز المعلومات الأكاديمية (AIC) للتقييم، والقرار للجامعة بناءً عليه. بعض البرامج تطلب SAT لمن درس خارج الاتحاد الأوروبي.", en: "The university sends your certificate to the Academic Information Centre (AIC) for evaluation and decides based on it. Some programmes ask non-EU-educated applicants for the SAT." },
    general: { ar: "نفس الإجراء لكل الشهادات الأجنبية.", en: "The same procedure applies to every foreign certificate." },
    note: { ar: "بدون تقييم إيجابي من AIC قد تغلق الجامعة طلبك.", en: "Without a positive AIC evaluation the university can close your application." },
    src: "https://aic.lv/en/arvalstis-iegutu-izglitibas-dokumentu-akademiska-atzisana-latvija/",
  },
  lt: {
    kind: "uni",
    eg: { ar: "الاعتراف جزء من القبول في الجامعة نفسها ولا يحتاج طلباً منفصلاً في الجامعات المفوضة.", en: "Recognition is part of admission at the university itself, with no separate application at authorised universities." },
    general: { ar: "نفس الإجراء لكل الشهادات الأجنبية.", en: "The same procedure applies to every foreign certificate." },
    note: { ar: "الاعتراف بالشهادة لا يعني القبول.", en: "Recognition does not mean admission." },
    src: "https://en.viko.lt/for-students/qualification-recognition/",
  },
};

// Certificates with researched rules. Egypt uses CERT[c].eg (text) with CERT[c].kind;
// other certificates use CERT[c][id] = { kind, ar, en, check?, src? }.
// Merge per-certificate rules kept in lib/cert/<id>.js.
// Per-certificate rules kept in lib/cert/<id>.js. "SAME" lists destinations whose rule is identical for every foreign certificate.
const BY_CERT = { sa: [CERT_SA, CERT_SA_SAME], ma: [CERT_MA, CERT_MA_SAME], jo: [CERT_JO, CERT_JO_SAME], dz: [CERT_DZ, CERT_DZ_SAME] };
for (const [id, [rules, same]] of Object.entries(BY_CERT)) {
  for (const [c, b] of Object.entries(rules)) if (CERT[c]) CERT[c][id] = b;
  for (const c of same) {
    const d = CERT[c];
    if (/مصر|Egypt/.test(d.eg.ar + d.eg.en)) throw new Error(`CERT.${c}.eg mentions Egypt; write a separate entry instead`);
    d[id] = { kind: d.kind, ar: d.eg.ar, en: d.eg.en, check: d.check };
  }
}
export const CERT_IDS = ["eg", ...Object.keys(BY_CERT)];

export const CERT_LIST = [
  { id: "eg", ar: "الثانوية العامة المصرية أو الأزهرية", en: "Egyptian Thanaweya Amma or Al-Azhar certificate" },
  { id: "sa", ar: "شهادة الثانوية العامة السعودية", en: "Saudi General Secondary Certificate" },
  { id: "jo", ar: "التوجيهي الأردني", en: "Jordanian Tawjihi" },
  { id: "ma", ar: "البكالوريا المغربية", en: "Moroccan Baccalauréat" },
  { id: "dz", ar: "البكالوريا الجزائرية", en: "Algerian Baccalauréat" },
];
export const certFor = (c, id) => {
  const d = CERT[c];
  if (!d) return null;
  if (id === "eg") return { kind: d.kind, ar: d.eg.ar, en: d.eg.en, check: d.check, src: d.src };
  const b = d[id];
  return b?.ar ? { ...b, src: b.src || d.src } : null;
};
export const CERTS = [
  ...CERT_LIST.filter((x) => Object.keys(CERT).some((c) => certFor(c, x.id))),
  { id: "other", ar: "شهادة ثانوية عربية أخرى", en: "Another Arab school certificate" },
];
// Which certificate a visitor from an Arab country most likely holds.
export const certOfOrigin = (o) => (CERTS.some((x) => x.id === o) ? o : "other");

export const CERT_KIND = {
  ar: { direct: "تكفي بالأوراق المعتادة", recog: "تحتاج معادلة رسمية أولاً", extra: "غالباً تحتاج سنة إضافية", uni: "الجامعة تقرر لكل حالة" },
  en: { direct: "Enough with the usual documents", recog: "Needs official recognition first", extra: "Usually needs an extra year", uni: "The university decides case by case" },
};

export const CERT_TEXT = {
  ar: {
    title: "هل تكفي شهادتك الثانوية لدخول الجامعة مباشرة؟",
    lead: "لطلاب البكالوريوس: اختر شهادتك واعرف في كل دولة هل تكفي للتقديم مباشرة، أم تحتاج معادلة أو سنة إضافية قبلها.",
    cert: "شهادتك", country: "الدولة", all: "كل الدول",
    otherNote: "نضيف تفاصيل باقي الشهادات العربية تباعاً. في الدول التي لم نضف فيها شهادتك بعد، نعرض القاعدة العامة للشهادات الأجنبية.",
    source: "المصدر", check: "أداة التحقق الرسمية", toCheck: " (للتحقق)",
    note: "انتبه",
    warn: "هذه هي القاعدة العامة. الجامعة هي صاحبة القرار النهائي، وبعض البرامج تطلب درجات أو مواد معينة أو اختبار قبول. البكالوريا المصرية الجديدة لم نجد لها تقييماً رسمياً بعد.",
    reviewed: "آخر مراجعة: 16 نوفمبر 2026",
    programmes: "برامج البكالوريوس في الدولة",
    generalTag: "القاعدة العامة (لم نضف شهادتك لهذه الدولة بعد)",
  },
  en: {
    title: "Does your school certificate get you straight into university?",
    lead: "For bachelor's applicants: pick your certificate and see, country by country, whether it is enough to apply directly or needs recognition or an extra year first.",
    cert: "Your certificate", country: "Country", all: "All countries",
    otherNote: "Details for other Arab certificates are being added one by one. Where your certificate is not added yet, we show the general rule for foreign certificates.",
    source: "Source", check: "Official checking tool", toCheck: " (to verify)",
    note: "Watch out",
    warn: "This is the general rule. The university has the final say, and some programmes require certain grades, subjects or an entrance test. We have not found an official evaluation of Egypt's new Baccalaureate yet.",
    reviewed: "Last reviewed: 16 November 2026",
    programmes: "Bachelor's programmes in this country",
    generalTag: "General rule (your certificate is not added for this country yet)",
  },
};
