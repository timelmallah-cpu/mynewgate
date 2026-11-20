// Student visa / residence permit: how to apply, per destination country.
// general: the route for anyone (official sources). eg: where and how to apply from Egypt.
// check: true = part of the entry is from a non-official source or not confirmed (shown as "للتحقق").
// Reviewed 2026-11-15. Other Arab countries of residence will be added one by one.

import { VISA_SA } from "./visa/sa";
import { VISA_MA } from "./visa/ma";
import { VISA_JO } from "./visa/jo";
import { VISA_DZ } from "./visa/dz";

const PORTAL = (c) => `https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-${c}_en`;

export const VISA = {
  de: {
    general: {
      ar: "تأشيرة وطنية (D) للدراسة من سفارة ألمانيا في بلد إقامتك أو مركز التأشيرات الذي تعتمده، ثم تصريح إقامة للدراسة من مكتب الأجانب في مدينتك بعد الوصول. تحتاج القبول وإثبات المال (حساب مغلق) والتأمين الصحي.",
      en: "A national (D) visa for study from the German mission in your country of residence or its visa centre, then a study residence permit from the local foreigners' office after arrival. You need the admission letter, proof of funds (blocked account) and health insurance.",
    },
    generalSrc: PORTAL("germany"),
    eg: {
      where: { ar: "مركز TLScontact (الوكيل الخارجي لسفارة ألمانيا في القاهرة)، بموعد تحجزه على موقع TLS", en: "TLScontact, the German Embassy Cairo's external service provider, by appointment booked on the TLS website" },
      steps: {
        ar: ["املأ استمارة التأشيرة الوطنية أونلاين على VIDEX واطبعها ووقّعها.", "احجز موعداً على موقع TLScontact مصر.", "قدّم الأوراق كاملة بالترتيب المطلوب في قائمة السفارة. الطلب الناقص يُرفض، فلا تقدّم قبل اكتمال الأوراق.", "السفارة تقرر وتبلغك. لا تسأل عن حالة الطلب خلال مدة المعالجة العادية."],
        en: ["Fill in the national visa form online on VIDEX, print and sign it.", "Book an appointment on the TLScontact Egypt website.", "Submit the complete file in the order of the embassy's checklist. Incomplete files are refused, so wait until everything is ready.", "The embassy decides and informs you. Do not chase the status during the normal processing time."],
      },
      note: { ar: "سفارة ألمانيا في القاهرة مسؤولة فقط عن المقيمين في مصر. ونماذج السفارة ومطبوعاتها مجانية.", en: "The German Embassy in Cairo only handles applicants resident in Egypt. The embassy's forms and leaflets are free." },
      src: "https://kairo.diplo.de/eg-de/service/05-visaeinreise/2573252-2573252",
      book: "https://videx-national.diplo.de/",
    },
  },
  nl: {
    general: {
      ar: "الجامعة هي التي تقدم طلب الإقامة وتأشيرة الدخول (MVV) لك عند دائرة الهجرة IND، ولا تقدمه بنفسك. بعد الموافقة تستلم ملصق التأشيرة من السفارة الهولندية المذكورة في خطاب IND.",
      en: "Your university applies for the residence permit and entry visa (MVV) on your behalf with the IND; you cannot apply yourself. After approval you collect the visa sticker at the Dutch mission named in the IND letter.",
    },
    generalSrc: PORTAL("netherlands"),
    eg: {
      where: { ar: "الجامعة تقدم الطلب لك في هولندا، ثم تستلم ملصق MVV من السفارة الهولندية في القاهرة إذا ذكرها خطاب IND", en: "The university applies for you in the Netherlands; you then collect the MVV sticker at the Dutch Embassy in Cairo if the IND letter says so" },
      steps: {
        ar: ["أرسل للجامعة الأوراق التي تطلبها لطلب الإقامة وادفع الرسوم.", "انتظر قرار IND، والجامعة تبلغك.", "احجز موعداً لاستلام ملصق التأشيرة حسب خطاب IND. ستسلّم جوازك وقد يستغرق ذلك حتى 10 أيام عمل."],
        en: ["Send the university the documents and fee it asks for the permit application.", "Wait for the IND decision; the university informs you.", "Book an appointment to collect the visa sticker as the IND letter says. You hand in your passport and it can take up to 10 working days."],
      },
      note: { ar: "تنبيه: صفحة تأشيرة MVV الرسمية في مصر تقول احجز موعداً أونلاين في السفارة بالقاهرة، وإذا لم تجد مواعيد للدراسة أرسل بريداً إلى kai-ca@minbuza.nl مع تاريخ بدء دراستك. لكن صفحات حكومية هولندية أخرى تقول إن السفارة مغلقة مؤقتاً أمام الجمهور، فتأكد من السفارة وجامعتك قبل التخطيط (للتحقق).", en: "Note: the official MVV page for Egypt says to book an appointment online at the embassy in Cairo, and if there are no study slots, to email kai-ca@minbuza.nl with your study start date. Other Dutch government pages say the embassy is temporarily closed to the public, so check with the embassy and your university before planning (to verify)." },
      src: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-egypt",
      book: "https://www.netherlandsworldwide.nl/visa-the-netherlands/mvv-long-stay/apply-egypt",
      check: true,
    },
  },
  es: {
    general: {
      ar: "تأشيرة دراسة لأكثر من 90 يوماً من قنصلية إسبانيا في بلد إقامتك أو مركز BLS الذي تعتمده. القنصلية تحتاج موافقة من مدريد قبل إصدار التأشيرة، فقدّم مبكراً.",
      en: "A study visa for stays over 90 days from the Spanish consulate in your country of residence or its BLS centre. The consulate needs authorisation from Madrid before issuing it, so apply early.",
    },
    generalSrc: PORTAL("spain"),
    eg: {
      where: { ar: "مركز BLS لتأشيرات إسبانيا (العجوزة، الجيزة) بموعد مسبق", en: "BLS Spain Visa Application Centre (Agouza, Giza), by appointment" },
      steps: {
        ar: ["جهّز الأوراق حسب قائمة تأشيرة الدراسة على موقع BLS مصر.", "احجز موعداً على موقع BLS وقدّم الطلب بنفسك.", "رسوم التأشيرة ورسوم BLS تُدفع نقداً بالدولار الأمريكي حسب تعليمات القنصلية."],
        en: ["Prepare the documents on the study visa checklist on the BLS Egypt website.", "Book an appointment on the BLS website and submit in person.", "Visa fees and BLS fees are paid in US dollars cash, as the consulate instructs."],
      },
      note: { ar: "تأشيرات الدراسة لا تصدر من القاهرة قبل موافقة الإدارة المركزية في مدريد، فابدأ الإجراءات مبكراً.", en: "Study visas cannot be issued in Cairo before approval from the central services in Madrid, so start early." },
      src: "https://egypt.blsspainvisa.com",
      book: "https://egypt.blsspainvisa.com",
    },
  },
  be: {
    general: {
      ar: "تأشيرة إقامة طويلة (D) من سفارة بلجيكا في بلد إقامتك أو مركز التأشيرات الذي تعتمده. التقديم شخصياً، مع البصمات واستبيان عن دراستك السابقة وخطتك.",
      en: "A long-stay (D) visa from the Belgian mission in your country of residence or its visa centre. You apply in person, with fingerprints and a questionnaire about your studies and plans.",
    },
    generalSrc: "https://dofi.ibz.be/en/themes/third-country-nationals/study/higher-education/recognised-higher-education-public/initial",
    eg: {
      where: { ar: "مركز TLScontact في القاهرة، بعد التسجيل على Visa-on-Web", en: "TLScontact in Cairo, after registering on Visa-on-Web" },
      steps: {
        ar: ["سجّل طلبك أونلاين على visaonweb.diplomatie.be.", "احجز موعداً مع TLScontact.", "قدّم الطلب في TLScontact القاهرة في موعدك."],
        en: ["Register your application online on visaonweb.diplomatie.be.", "Book an appointment with TLScontact.", "Submit at TLScontact Cairo at your appointment."],
      },
      note: { ar: "حسب أخبار مركز TLS: رسوم تأشيرة D صارت 250 يورو من 1 يوليو 2026، ويُنصح الطلاب بالتقديم مبكراً (قبل 30 يوليو في دورة 2026).", en: "Per TLS news: the D visa fee became €250 from 1 July 2026, and students are advised to apply early (before 30 July in the 2026 cycle)." },
      src: "https://egypt.diplomatie.belgium.be/en/travel-belgium/visa-belgium",
      book: "https://visas-be.tlscontact.com/en-us/country/eg/vac/egCAI2be/news",
    },
  },
  ee: {
    general: {
      ar: "تقدم على تصريح إقامة للدراسة من سفارة إستونيا في بلدك، أو على تأشيرة D ثم تصريح الإقامة بعد الوصول من هيئة الشرطة وحرس الحدود.",
      en: "Apply for a study residence permit at the Estonian embassy in your country, or for a D visa and then the residence permit after arrival from the Police and Border Guard Board.",
    },
    generalSrc: "https://studyinestonia.ee/blog/studying-estonia-frequently-asked-questions",
    eg: {
      where: { ar: "سفارة إستونيا في القاهرة (cairo.mfa.ee)", en: "The Estonian Embassy in Cairo (cairo.mfa.ee)" },
      steps: {
        ar: ["بعد القبول ودفع الرسوم، راسل السفارة لتعرف هل تقدم على تصريح الإقامة أم على تأشيرة D من القاهرة.", "قدّم الطلب شخصياً في السفارة.", "إن دخلت بتأشيرة D، قدّم على تصريح الإقامة للدراسة بعد الوصول."],
        en: ["After admission and paying the fee, email the embassy to confirm whether to apply for the residence permit or a D visa in Cairo.", "Submit in person at the embassy.", "If you enter on a D visa, apply for the study residence permit after arrival."],
      },
      note: { ar: "موقع Study in Estonia الرسمي يذكر سفارة القاهرة ضمن السفارات التي يقدم فيها الطلاب؛ أكّد مع السفارة نوع الطلب الذي تستقبله (للتحقق).", en: "The official Study in Estonia site lists the Cairo embassy among those where students apply; confirm with the embassy which application it accepts (to verify)." },
      src: "https://studyinestonia.ee/blog/studying-estonia-frequently-asked-questions",
      book: "https://cairo.mfa.ee",
      check: true,
    },
  },
  pl: {
    general: {
      ar: "تأشيرة وطنية (D) للدراسة من سفارة بولندا في بلد إقامتك، بموعد على نظام e-Konsulat.",
      en: "A national (D) visa for study from the Polish embassy in your country of residence, by appointment on the e-Konsulat system.",
    },
    generalSrc: PORTAL("poland"),
    eg: {
      where: { ar: "القسم القنصلي في سفارة بولندا بالقاهرة (الزمالك)، بموعد على e-Konsulat فقط", en: "The consular section of the Polish Embassy in Cairo (Zamalek), by e-Konsulat appointment only" },
      steps: {
        ar: ["احجز موعداً على secure.e-konsulat.gov.pl واختر سفارة القاهرة والتأشيرة الوطنية.", "املأ الاستمارة على e-Konsulat نفسه؛ الاستمارات المسجلة بطريقة خاطئة لا تُقبل.", "احضر في الموعد بالضبط ومعك الأوراق."],
        en: ["Book on secure.e-konsulat.gov.pl, choosing the Cairo embassy and the national visa.", "Fill in the form on e-Konsulat itself; wrongly registered forms are not accepted.", "Arrive at your appointment time with your documents."],
      },
      note: { ar: "السفارة لا تتعامل مع أي مكاتب تأشيرات أو وسطاء، والتسجيل مجاني.", en: "The embassy does not work with any visa agencies or intermediaries, and registration is free." },
      src: "https://www.gov.pl/web/egypt/d-type-national-visa",
      book: "https://secure.e-konsulat.gov.pl/",
    },
  },
  hu: {
    general: {
      ar: "تقدم على تصريح إقامة للدراسة وتأشيرة D معاً في سفارة المجر بدولتك قبل السفر. تأشيرة D تسمح بدخول واحد خلال 3 أشهر، ثم تستلم التصريح في المجر.",
      en: "Apply for the study residence permit and a D visa together at the Hungarian embassy in your country before travelling. The D visa allows one entry within 3 months, then you collect the permit in Hungary.",
    },
    generalSrc: PORTAL("hungary"),
    eg: {
      where: { ar: "القنصلية في سفارة المجر بالقاهرة (29 شارع محمد مظهر، الزمالك)", en: "The consulate of the Hungarian Embassy in Cairo (29 Mohamed Mazhar St, Zamalek)" },
      steps: {
        ar: ["احجز موعداً حسب تعليمات السفارة (نظام المواعيد القنصلية).", "احضر بالاستمارة والملحق 13 موقّعين والأوراق الأصلية.", "بعد الموافقة تدخل المجر خلال 3 أشهر، ومعك 30 يوماً من دخولك لاستلام التصريح."],
        en: ["Book an appointment as the embassy instructs (consular appointment system).", "Bring the signed form and Appendix 13 and the original documents.", "After approval, enter Hungary within 3 months; you have 30 days from entry to collect the permit."],
      },
      note: { ar: "التعليمات المنشورة بالتفصيل لحاملي منحة Stipendium Hungaricum؛ والمسار نفسه لغيرهم لكن أكد موعدك مع السفارة (للتحقق).", en: "The detailed published instructions are for Stipendium Hungaricum holders; the route is the same for others, but confirm your appointment with the embassy (to verify)." },
      src: "https://cairo.mfa.gov.hu/en/articles/visa-process-2026-stipendium-hungaricum-scholarship-holders",
      book: "https://konzinfoidopont.mfa.gov.hu",
      check: true,
    },
  },
  ro: {
    general: {
      ar: "تأشيرة إقامة طويلة للدراسة (D/SD). تحتاج خطاب قبول للدراسة من وزارة التعليم الرومانية، وإثبات دفع رسوم سنة على الأقل. املأ الطلب أونلاين على بوابة eVisa ثم قدّم في السفارة.",
      en: "A long-stay study visa (D/SD). You need a Letter of Acceptance for studies from the Romanian Ministry of Education and proof of at least one year's tuition paid. Fill in the application on the eVisa portal, then submit at the embassy.",
    },
    generalSrc: PORTAL("romania"),
    eg: {
      where: { ar: "سفارة رومانيا في القاهرة، بعد ملء الطلب على eviza.mae.ro", en: "The Romanian Embassy in Cairo, after filling in the application on eviza.mae.ro" },
      steps: {
        ar: ["انتظر خطاب القبول من وزارة التعليم وادفع رسوم السنة الأولى.", "املأ طلب التأشيرة وارفع الأوراق على eviza.mae.ro.", "قدّم الطلب في السفارة. الجامعات الرومانية تنصح بالتقديم خلال 60 يوماً من خطاب القبول."],
        en: ["Wait for the Ministry's Letter of Acceptance and pay the first year's fee.", "Fill in the visa application and upload documents on eviza.mae.ro.", "Submit at the embassy. Romanian universities advise applying within 60 days of the acceptance letter."],
      },
      note: { ar: "مكان التقديم في مصر (السفارة في القاهرة) من مصدر غير رسمي؛ تأكد من قائمة البعثات الرومانية (للتحقق).", en: "The place to apply in Egypt (the embassy in Cairo) comes from an unofficial source; confirm it on the list of Romanian missions (to verify)." },
      src: "https://eviza.mae.ro/",
      book: "https://www.mae.ro/romanian-missions",
      check: true,
    },
  },
  lv: {
    general: {
      ar: "الجامعة ترسل دعوة رسمية لمكتب الجنسية والهجرة (OCMA)، ثم تقدم على تصريح الإقامة للدراسة. مواطنو بعض الدول، منها دول عربية كثيرة، يجب أن يحصلوا على التصريح قبل دخول لاتفيا.",
      en: "The university files an official invitation with the Office of Citizenship and Migration Affairs (OCMA), then you apply for the study residence permit. Citizens of some countries, including many Arab ones, must get the permit before entering Latvia.",
    },
    generalSrc: PORTAL("latvia"),
    eg: {
      where: { ar: "تصريح الإقامة عن طريق سفارة لاتفيا في القاهرة، وطلب التأشيرة في مركز VFS Global بالقاهرة", en: "The residence permit through the Latvian Embassy in Cairo, and the visa application at VFS Global Cairo" },
      steps: {
        ar: ["اطلب من الجامعة تقديم الدعوة لمكتب الهجرة، واحصل على رقمها.", "قدّم أوراق تصريح الإقامة مع رقم الدعوة. الأوراق تحتاج تصديق الخارجية في بلدك وسفارة بلدك في القاهرة لغير المصريين.", "بعد الموافقة قدّم على تأشيرة D في VFS القاهرة."],
        en: ["Ask the university to file the invitation with OCMA and get its number.", "Submit the residence permit documents with the invitation number. Documents need legalisation by your foreign ministry (and your country's embassy in Cairo for non-Egyptians).", "After approval, apply for the D visa at VFS Cairo."],
      },
      note: { ar: "سفارة لاتفيا في القاهرة تذكر مصر والأردن والمغرب وتونس والجزائر وليبيا ولبنان والسودان والصومال واليمن ضمن الدول التي يجب على طلابها الحصول على التصريح قبل الدخول.", en: "The Latvian Embassy in Cairo lists Egypt, Jordan, Morocco, Tunisia, Algeria, Libya, Lebanon, Sudan, Somalia and Yemen among the countries whose students must get the permit before entry." },
      src: "https://www2.mfa.gov.lv/en/egypt/study-in-latvia/how-to-apply-for-a-residence-permit-in-to-study-in-latvia",
      book: "https://www2.mfa.gov.lv/en/egypt/study-in-latvia/how-to-apply-for-a-residence-permit-in-to-study-in-latvia",
    },
  },
  lt: {
    general: {
      ar: "طلاب الدراسة الكاملة يقدمون على تصريح إقامة مؤقتة (TRP) قبل السفر عن طريق نظام MIGRIS، ويقدمون البصمات والأوراق في مركز VFS Global المعتمد لليتوانيا.",
      en: "Full-degree students apply for a temporary residence permit (TRP) before travelling through the MIGRIS system, and give biometrics and documents at a VFS Global centre that serves Lithuania.",
    },
    generalSrc: PORTAL("lithuania"),
    eg: {
      where: { ar: "لا يمكن التقديم في مصر: سفارة ليتوانيا في القاهرة لا تصدر التأشيرة الوطنية أو تصريح الإقامة، ومركز VFS في مصر ليس من مراكز ليتوانيا لهذا الغرض. التقديم في مركز VFS في دولة أخرى", en: "You cannot apply in Egypt: the Lithuanian Embassy in Cairo does not issue national visas or residence permits, and VFS in Egypt is not one of Lithuania's centres for this. You apply at a VFS centre in another country" },
      steps: {
        ar: ["الجامعة تسجل طلب الوساطة في MIGRIS.", "املأ طلب تصريح الإقامة على migracija.lt.", "اختر مركز VFS معتمداً لليتوانيا في دولة أخرى واحجز موعد البصمات، وخطط لتكلفة السفر إليه."],
        en: ["The university files the mediation in MIGRIS.", "Fill in the residence permit application on migracija.lt.", "Pick a VFS centre serving Lithuania in another country, book the biometrics appointment, and budget for the trip there."],
      },
      note: { ar: "هذه نقطة مهمة قبل اختيار ليتوانيا: السفر لدولة أخرى للبصمات يضيف تكلفة وتأشيرة لتلك الدولة إن لزم.", en: "Important before choosing Lithuania: travelling to another country for biometrics adds cost, and possibly a visa for that country." },
      src: "https://eg.mfa.lt/en/coming-to-lithuania/visas/national-d-visa/125",
      book: "https://www.migracija.lt/",
    },
  },
  it: {
    general: {
      ar: "سجّل طلب ما قبل التسجيل على بوابة Universitaly، وبعد موافقة الجامعة تقدم على تأشيرة دراسة D من سفارة إيطاليا في بلدك أو مركز التأشيرات الذي تعتمده.",
      en: "Submit the pre-enrolment on Universitaly; after the university approves, apply for a D study visa at the Italian embassy in your country or its visa centre.",
    },
    generalSrc: PORTAL("italy"),
    eg: {
      where: { ar: "مركز VFS Global لإيطاليا في القاهرة (موعدين: للتصديق وإقرار المعادلة، ثم للتأشيرة)", en: "VFS Global Italy in Cairo (two appointments: legalisation and the declaration of value, then the visa)" },
      steps: {
        ar: ["قدّم طلب ما قبل التسجيل على universitaly.it وانتظر رد الجامعة.", "ترجم الشهادات للإيطالية وصدّقها من الخارجية المصرية، ثم قدّمها في VFS لتصديق السفارة الإيطالية، واطلب إقرار المعادلة إن طلبته الجامعة.", "بعد جاهزية الإقرار احجز موعداً ثانياً في VFS لتأشيرة الدراسة."],
        en: ["Submit the pre-enrolment on universitaly.it and wait for the university's reply.", "Translate your certificates into Italian, legalise them at the Egyptian MFA, then submit them via VFS for the Italian Embassy's legalisation, and request the declaration of value if the university asks for it.", "Once the declaration is ready, book a second VFS appointment for the study visa."],
      },
      note: { ar: "خطوات السفارة الإيطالية في القاهرة تشترط ترجمة كل الأوراق للإيطالية وتصديقها من الخارجية قبل تقديمها في VFS.", en: "The Italian Embassy in Cairo requires every document to be translated into Italian and legalised by the Foreign Ministry before submitting it at VFS." },
      src: "https://ambilcairo.esteri.it/wp-content/uploads/2026/08/15.-Studio-inglese.pdf",
      book: "https://visa.vfsglobal.com/one-pager/italy/egypt/english/",
    },
  },
  fi: {
    general: {
      ar: "قدّم على تصريح الإقامة للدراسة أونلاين في خدمة Enter Finland، ثم احجز موعداً لإثبات هويتك في سفارة فنلندا أو مركز VFS في بلد إقامتك. ويمكنك طلب تأشيرة D مع الطلب لتسافر قبل وصول بطاقة الإقامة.",
      en: "Apply for the study residence permit online in Enter Finland, then book an appointment to prove your identity at the Finnish mission or VFS centre in your country of residence. You can request a D visa with it so you can travel before the permit card arrives.",
    },
    generalSrc: "https://migri.fi/en/residence-permit-application-for-studies",
    eg: {
      where: { ar: "الطلب أونلاين على Enter Finland، وإثبات الهوية في سفارة فنلندا بالقاهرة أو مركز VFS بالقاهرة", en: "Apply online on Enter Finland; prove your identity at the Finnish Embassy in Cairo or VFS Cairo" },
      steps: {
        ar: ["املأ الطلب وادفعه على enterfinland.fi وارفع الأوراق مترجمة للإنجليزية أو الفنلندية أو السويدية.", "احجز موعد إثبات الهوية مبكراً، فالمواعيد تزدحم في الصيف.", "تابع القرار أونلاين؛ بطاقة الإقامة تصل للسفارة التي زرتها."],
        en: ["Fill in and pay for the application on enterfinland.fi, attaching documents translated into English, Finnish or Swedish.", "Book the identification appointment early; slots get busy in summer.", "Follow the decision online; the permit card is sent to the mission you visited."],
      },
      note: { ar: "أن يكون مركز VFS بالقاهرة يستقبل طلبات الإقامة لفنلندا من مصدر غير رسمي؛ أكّد من موقع السفارة (للتحقق).", en: "That VFS Cairo takes Finnish residence permit identifications comes from an unofficial source; confirm on the embassy site (to verify)." },
      src: "https://studies.helsinki.fi/instructions/article/residence-permit-degree-students",
      book: "https://enterfinland.fi",
      check: true,
    },
  },
  se: {
    general: {
      ar: "قدّم على تصريح الإقامة للدراسة أونلاين في موقع Migrationsverket قبل السفر، بعد دفع الرسوم الدراسية، ثم احجز موعداً في السفارة السويدية لأخذ البصمات والصورة.",
      en: "Apply for the study residence permit online with Migrationsverket before you travel, after paying tuition, then book an appointment at the Swedish embassy for fingerprints and photo.",
    },
    generalSrc: "https://www.migrationsverket.se/en/you-want-to-apply/study/higher-education.html",
    eg: {
      where: { ar: "سفارة السويد بالقاهرة، 13 شارع محمد مظهر، الزمالك (البصمات بموعد)", en: "Embassy of Sweden in Cairo, 13 Mohamed Mazhar St, Zamalek (biometrics by appointment)" },
      steps: {
        ar: ["ادفع القسط الأول من الرسوم الدراسية واحصل على خطاب القبول.", "قدّم الطلب وادفعه أونلاين على موقع Migrationsverket.", "احجز موعد البصمات في السفارة وتابع القرار أونلاين."],
        en: ["Pay the first tuition instalment and get your admission letter.", "Apply and pay online on the Migrationsverket site.", "Book the biometrics appointment at the embassy and follow the decision online."],
      },
      note: null,
      src: "https://www.swedenabroad.se/en/embassies/egypt-cairo/contact/",
      book: "https://www.migrationsverket.se/en/you-want-to-apply/study/higher-education.html",
      check: false,
    },
  },
  bg: {
    general: {
      ar: "تأشيرة D للدراسة بدوام كامل تقدم عليها في السفارة البلغارية في بلد إقامتك، ومعها شهادة وزارة التعليم البلغارية التي تطلبها الجامعة لك.",
      en: "Apply for the D visa for full-time study at the Bulgarian embassy in your country of residence, with the Ministry of Education certificate the university obtains for you.",
    },
    generalSrc: "https://www.mfa.bg/en/embassies/egypt",
    eg: {
      where: { ar: "السفارة البلغارية بالقاهرة، 6 شارع الملك الأفضل، الزمالك (Embassy.Cairo@mfa.bg)", en: "Bulgarian Embassy in Cairo, 6 El Malek El Afdal St, Zamalek (Embassy.Cairo@mfa.bg)" },
      steps: {
        ar: ["قدّم للجامعة وانتظر شهادة وزارة التعليم.", "صدّق أوراقك من الخارجية المصرية ثم السفارة البلغارية.", "تواصل مع السفارة بالإيميل لتحديد موعد تقديم تأشيرة D."],
        en: ["Apply to the university and wait for the Ministry of Education certificate.", "Legalise your documents at the Egyptian MFA and then the Bulgarian embassy.", "Email the embassy to arrange your D visa appointment."],
      },
      note: { ar: "طريقة حجز الموعد غير منشورة في المصدر الذي راجعناه (للتحقق).", en: "How to book an appointment is not published in the source we checked (to verify)." },
      src: "https://www.mfa.bg/en/embassies/egypt",
      book: null,
      check: true,
    },
  },
  cz: {
    general: {
      ar: "تقدّم على تأشيرة طويلة أو إقامة طويلة للدراسة في السفارة التشيكية في بلد إقامتك، ووزارة الداخلية التشيكية هي التي تقرر، وقد تصل المدة إلى 60 يوماً.",
      en: "Apply for a long-term visa or long-term residence permit for study at the Czech embassy in your country of residence; the Czech Ministry of the Interior decides, which can take up to 60 days.",
    },
    generalSrc: "https://mzv.gov.cz/cairo/en/visa_and_consular_information/long_term_visa/study_long_term_visa_to_the_czech/index.html",
    eg: {
      where: { ar: "سفارة التشيك بالقاهرة، بموعد مسبق (تقديم طلبات الإقامة الطويلة يوم الاتنين 9 لـ 12)", en: "Czech Embassy in Cairo, by appointment (long-term applications on Mondays, 9 a.m. to 12 p.m.)" },
      steps: {
        ar: ["احجز موعد بإيميل لـ cairo.longtermvisa@mzv.gov.cz.", "صدّق الفيش الجنائي من السفارة التشيكية قبل الموعد أو يوم التقديم.", "قدّم الأوراق وانتظر قرار وزارة الداخلية (حتى 60 يوماً)."],
        en: ["Book an appointment by emailing cairo.longtermvisa@mzv.gov.cz.", "Have your criminal record superlegalised by the Czech Embassy before or on the day of your appointment.", "Submit your documents and wait for the Ministry of the Interior's decision (up to 60 days)."],
      },
      note: null,
      src: "https://mzv.gov.cz/cairo/en/visa_and_consular_information/long_term_visa/make_an_appointment/index.html",
      book: "https://mzv.gov.cz/cairo/en/visa_and_consular_information/long_term_visa/make_an_appointment/index.html",
      check: false,
    },
  },
  at: {
    general: {
      ar: "تقدّم بنفسك على تصريح الإقامة للطلاب (Aufenthaltsbewilligung – Student) في السفارة النمساوية في بلد إقامتك ومعك خطاب القبول، ويصدر القرار من سلطات الهجرة في النمسا. بعد الموافقة تحصل على تأشيرة D تدخل بها وتستلم الإقامة هناك.",
      en: "Apply in person for the student residence permit (Aufenthaltsbewilligung – Student) at the Austrian embassy in your country of residence with your admission letter; the immigration authorities in Austria decide. Once approved you get a D visa to enter and collect the permit in Austria.",
    },
    generalSrc: "https://oead.at/en/to-austria/entry-and-residence/residence-permit-student-no-mobility-programme",
    eg: {
      where: { ar: "سفارة النمسا بالقاهرة، برج الرياض، 5 شارع ويصا واصف ناصية شارع النيل، الجيزة (للتحقق)", en: "Austrian Embassy in Cairo, Riyadh Tower, 5 Wissa Wassef St, corner of El Nile St, Giza (to verify)" },
      steps: {
        ar: ["احجز موعداً في نظام مواعيد وزارة الخارجية النمساوية.", "قدّم طلب الإقامة بنفسك ومعك خطاب القبول وإثبات القدرة المالية والتأمين.", "بعد الموافقة قدّم على تأشيرة D وسافر لاستلام الإقامة."],
        en: ["Book an appointment in the Austrian foreign ministry's booking system.", "Submit the residence application in person with your admission letter, proof of funds and insurance.", "Once approved, apply for the D visa and travel to collect the permit."],
      },
      note: { ar: "العنوان من مستند لـ VFS من 2019؛ أكّد من موقع السفارة.", en: "The address comes from a 2019 VFS document; confirm on the embassy's site." },
      src: "https://www.vfsglobal.com/austria/egypt/pdf/legalization-new.pdf",
      book: "https://appointment.bmeia.gv.at/?Office=Kairo",
      check: true,
    },
  },
  fr: {
    general: {
      ar: "الطالب من بلد مثل مصر يقدّم أولاً على منصة Études en France عن طريق Campus France، وبعد القبول يمر بإجراء ما قبل القنصلية، ثم يقدّم على تأشيرة طويلة للدراسة (VLS-TS) على France-Visas. التأشيرة صالحة من 4 أشهر إلى سنة، ويجب تفعيلها أونلاين خلال 3 أشهر من الوصول مع دفع 50 يورو.",
      en: "Students from countries such as Egypt first apply on the Études en France platform through Campus France; once accepted they complete the pre-consular step, then apply for a long-stay student visa (VLS-TS) on France-Visas. It is valid for 4 months to a year and must be validated online within 3 months of arrival, with a €50 tax.",
    },
    generalSrc: "https://www.service-public.gouv.fr/particuliers/vosdroits/F2231?lang=en",
    eg: {
      where: { ar: "Campus France مصر (المعهد الفرنسي، 1 شارع مدرسة الحقوق الفرنسية، المنيرة، القاهرة، وفرع في الإسكندرية)، وبعدها مركز TLScontact أو القنصلية الفرنسية بالقاهرة بموعد", en: "Campus France Egypt (Institut français, 1 Madrasset El Huquq El Frenseya St, Mounira, Cairo, with an office in Alexandria), then a TLScontact centre or the French Consulate in Cairo by appointment" },
      steps: {
        ar: ["اعمل ملف على منصة Études en France وادفع رسوم الملف (4,000 جنيه لسنة 2026/2027) قبل مقابلة Campus France.", "بعد القبول، قدّم ملف «أنا مقبول» على المنصة وادفع رسوم إجراء ما قبل القنصلية (2,000 جنيه) وروح المقابلة.", "اعمل طلب التأشيرة على France-Visas واحجز موعد في TLScontact (أو القنصلية بموعد) وقدّم الأوراق.", "بعد الوصول فعّل التأشيرة أونلاين خلال 3 شهور وادفع 50 يورو."],
        en: ["Create a file on Études en France and pay the file fee (EGP 4,000 for 2026/2027) before the Campus France interview.", "Once accepted, submit the \"I am accepted\" file on the platform, pay the pre-consular fee (EGP 2,000) and attend the interview.", "File the visa application on France-Visas, book a TLScontact appointment (or the consulate by appointment) and submit your documents.", "After arrival, validate the visa online within 3 months and pay €50."],
      },
      note: { ar: "مقابلة Campus France واحدة فقط لكل حساب في السنة. التقديم عبر TLScontact ليس إجبارياً، ويمكن التقديم في القنصلية الفرنسية بالقاهرة بموعد.", en: "Only one Campus France interview per account per year. TLScontact is optional; you can also apply at the French Consulate in Cairo by appointment." },
      src: "https://www.egypte.campusfrance.org/system/files/medias/documents/2025-09/Borchure%20Campus%20France%20FR%202026-2027_MA.pdf",
      book: "https://france-visas.gouv.fr/egypte",
      check: false,
    },
  },
  pt: {
    general: {
      ar: "للدراسة أكثر من سنة تقدّم على تأشيرة إقامة للدراسة (D4) من القنصلية أو السفارة البرتغالية في بلد إقامتك، وبعد الوصول تطلب تصريح إقامة للطلاب من وكالة AIMA. يعفي القانون طلاب الجامعات المقبولين في مؤسسات معيّنة من إثبات الموارد المالية.",
      en: "For more than a year of study you apply for a residence visa for study (D4) at the Portuguese consulate or embassy in your country of residence, then request a student residence permit from AIMA after arrival. The law exempts higher-education students admitted to certain approved institutions from proof of means.",
    },
    generalSrc: PORTAL("portugal"),
    eg: {
      where: { ar: "سفارة البرتغال بالقاهرة، والتقديم عن طريق مركز VFS Global (للتحقق من العنوان والموعد على موقع VFS)", en: "The Portuguese Embassy in Cairo, with applications through the VFS Global centre (check the address and booking on the VFS site)" },
      steps: {
        ar: ["خد خطاب القبول من الجامعة البرتغالية.", "جهّز الأوراق حسب قائمة VFS لتأشيرة الدراسة (D) لأكتر من سنة واحجز موعد.", "بعد الوصول اطلب تصريح الإقامة للطلاب من AIMA."],
        en: ["Get your admission letter from the Portuguese university.", "Prepare the documents on the VFS checklist for a study (D) visa of more than one year and book an appointment.", "After arrival, request the student residence permit from AIMA."],
      },
      note: { ar: "قائمة الأوراق من مستند VFS مصر للبرتغال؛ أكّد الرسوم والعنوان قبل الموعد.", en: "The document list comes from VFS Egypt's Portugal checklist; confirm fees and address before your appointment." },
      src: "https://www.vfsglobal.com/portugal/egypt/pdf/cultural-researcher-latest.pdf",
      book: null,
      check: true,
    },
  },
  ie: {
    general: {
      ar: "أيرلندا ليست ضمن نظام تأشيرة الطلاب الأوروبي المشترك. المواطن المصري يحتاج تأشيرة دراسة طويلة (D Study): تقدّم أونلاين على نظام AVATS أولاً، ثم تسلّم الأوراق والبصمات في مركز VFS. بعد الوصول تسجّل إقامتك (IRP) وتدفع 300 يورو، والتأمين الصحي الخاص إلزامي.",
      en: "Ireland is outside the common EU student visa rules. Egyptian citizens need a long-stay study visa (D Study): apply online on AVATS first, then submit documents and biometrics at the VFS centre. After arrival you register your residence (IRP) for €300, and private medical insurance is mandatory.",
    },
    generalSrc: "https://www.irishimmigration.ie/coming-to-study-in-ireland/",
    eg: {
      where: { ar: "سفارة أيرلندا بالقاهرة، والتقديم فقط عن طريق مركز VFS Global في مصر", en: "The Embassy of Ireland in Cairo, with applications only through the VFS Global centre in Egypt" },
      steps: {
        ar: ["احصل على خطاب القبول وادفع الرسوم أو العربون المطلوب.", "قدّم طلب التأشيرة أونلاين على AVATS واطبع ملخص الطلب.", "احجز موعداً في VFS مصر وسلّم الأوراق وإثبات الـ 10,000 يورو والتأمين الصحي.", "بعد الوصول سجّل إقامتك (IRP) لدى إدارة الهجرة."],
        en: ["Get your offer letter and pay the required fees or deposit.", "Complete the visa application online on AVATS and print the summary.", "Book an appointment at VFS Egypt and submit your documents, proof of €10,000 and health insurance.", "After arrival, register your residence (IRP) with immigration."],
      },
      note: { ar: "رسوم التأشيرة 60 يورو للدخول الواحد (للتحقق من الرسوم الحالية ورسوم خدمة VFS).", en: "The visa fee is €60 for single entry (check the current fee and the VFS service charge)." },
      src: "https://www.ireland.ie/en/egypt/cairo/services/visas/visas-for-ireland/",
      book: "https://visa.vfsglobal.com/egy/en/irl/book-an-appointment",
      check: true,
    },
  },
  dk: {
    general: {
      ar: "الدنمارك لا تطبّق نظام تأشيرة الطلاب الأوروبي المشترك. بعد القبول ودفع الرسوم تنشئ رقم طلب (Case Order ID) وتدفع رسوم SIRI، ثم تملأ الجامعة جزءاً من طلب الإقامة ST1 وتكمل أنت الباقي، وبعدها تسلّم البصمات. المدة المعتادة شهران.",
      en: "Denmark does not apply the common EU student visa rules. After admission and paying tuition you create a case order ID and pay the SIRI fee; the university fills in part of the ST1 residence application and you complete the rest, then give your biometrics. Normal processing time is two months.",
    },
    generalSrc: "https://nyidanmark.dk/en-GB/You-want-to-apply/Study/Higher-Education/",
    eg: {
      where: { ar: "سفارة الدنمارك بالقاهرة، والتقديم وتسليم البصمات شخصياً في مركز VFS Global (القاهرة أو الإسكندرية)", en: "The Danish Embassy in Cairo, with applications and biometrics in person at the VFS Global centre (Cairo or Alexandria)" },
      steps: {
        ar: ["احصل على خطاب القبول وادفع الرسوم الدراسية.", "أنشئ Case Order ID وادفع رسوم SIRI على موقع nyidanmark.dk.", "أكمل طلب ST1 أونلاين مع جزء الجامعة.", "سلّم الطلب والبصمات شخصياً في VFS."],
        en: ["Get your admission letter and pay your tuition.", "Create a case order ID and pay the SIRI fee on nyidanmark.dk.", "Complete the ST1 application online together with the university's part.", "Submit the application and biometrics in person at VFS."],
      },
      note: { ar: "توجد رسوم خدمة إضافية لمركز VFS فوق رسوم SIRI (للتحقق).", en: "VFS charges a service fee on top of the SIRI fee (to verify)." },
      src: "https://egypten.um.dk/en/travel-and-residence/practical-information/residence-permit",
      book: "https://www.vfsglobal.com/denmark/egypt/",
      check: true,
    },
  },
  hr: {
    general: {
      ar: "المصري يحتاج تأشيرة لدخول كرواتيا، لذلك يقدّم أولاً طلب الموافقة على الإقامة المؤقتة للدراسة عن طريق السفارة الكرواتية، وبعد الموافقة يقدّم على تأشيرة D في مركز VFS. بعد الوصول بـ 48 ساعة يسجّل إقامته لدى الشرطة. الأوراق الأجنبية يجب أن تُترجم للكرواتية وتوثق.",
      en: "Egyptians need a visa to enter Croatia, so you first apply for approval of temporary stay for study through the Croatian embassy, and once approved you apply for a D visa at the VFS centre. Within 48 hours of arrival you register with the police. Foreign documents must be translated into Croatian and certified.",
    },
    generalSrc: "https://mvep.gov.hr/consular-information-143353/granting-stay-in-croatia-180512/180512",
    eg: {
      where: { ar: "سفارة كرواتيا بالقاهرة، وطلبات التأشيرة عن طريق مركز VFS Global", en: "The Croatian Embassy in Cairo, with visa applications through the VFS Global centre" },
      steps: {
        ar: ["احصل على خطاب القبول (بالكرواتية) من الجامعة.", "قدّم طلب الموافقة على الإقامة المؤقتة للدراسة عن طريق السفارة.", "بعد الموافقة قدّم على تأشيرة D في VFS (خلال 3 شهور قبل أو بعد بداية صلاحية الإقامة).", "سجّل إقامتك لدى الشرطة خلال 48 ساعة من الوصول."],
        en: ["Get your admission letter (in Croatian) from the university.", "Apply for approval of temporary stay for study through the embassy.", "Once approved, apply for a D visa at VFS (from three months before to three months after your stay starts).", "Register with the police within 48 hours of arrival."],
      },
      note: { ar: "رسوم السفارة تُدفع في حسابها بالبنك التجاري الدولي (CIB)، ورسوم خدمة VFS منفصلة (للتحقق من الأرقام الحالية).", en: "Embassy fees are paid into its account at CIB, and the VFS service fee is separate (check current amounts)." },
      src: "https://visa.vfsglobal.com/one-pager/croatia/egypt/english/",
      book: "https://visa.vfsglobal.com/one-pager/croatia/egypt/english/",
      check: true,
    },
  },
  sk: {
    general: {
      ar: "يُفضَّل تقديم طلب الإقامة المؤقتة للدراسة في سفارة سلوفاكيا في بلد جنسيتك، والطلب مجاني. بعد الموافقة تقدّم على تأشيرة D الوطنية للدخول، وتسجّل عند شرطة الأجانب. الأوراق الأجنبية تحتاج توثيقاً وترجمة رسمية للسلوفاكية.",
      en: "It is recommended to file the application for temporary residence for study at the Slovak embassy in your country of citizenship, and it is free. Once approved you apply for a national D visa to enter, then report to the Foreign Police. Foreign documents need authentication and an official Slovak translation.",
    },
    generalSrc: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-slovakia_en",
    eg: {
      where: { ar: "سفارة سلوفاكيا بالقاهرة (طلبات الإقامة بموعد مسبق)؛ تأشيرات شنغن القصيرة عن طريق BLS International", en: "The Slovak Embassy in Cairo (residence applications by appointment); short Schengen visas go through BLS International" },
      steps: {
        ar: ["احصل على قرار القبول وتأكيد الدراسة من الجامعة.", "جهّز صحيفة الحالة الجنائية وإثبات المال، مع توثيق وترجمة للسلوفاكية.", "قدّم طلب الإقامة المؤقتة للدراسة شخصياً في السفارة.", "بعد الموافقة قدّم على تأشيرة D (أوراق طلب الإقامة يجب أن تكون أحدث من 90 يوماً)."],
        en: ["Get the admission decision and confirmation of study from the university.", "Prepare your criminal record extract and proof of funds, authenticated and translated into Slovak.", "Submit the temporary residence for study application in person at the embassy.", "Once approved, apply for a D visa (the residence application documents must be under 90 days old)."],
      },
      note: { ar: "السفارة لا تتعامل مع أي وكالات أو وسطاء.", en: "The embassy does not work with any agencies or intermediaries." },
      src: "https://mzv.sk/en/web/kahira/home",
      book: null,
      check: true,
    },
  },
  cy: {
    general: {
      ar: "بعد القبول ترسل أوراقك للجامعة، والجامعة تقدّم طلب تصريح الدخول (Entry Permit) لإدارة السجل المدني والهجرة نيابة عنك، والرد عادة خلال حوالي 4 أسابيع. يجب أن تكون خارج قبرص أثناء دراسة الطلب. بعد الوصول تقدّم على تصريح الإقامة خلال أيام من وصولك.",
      en: "After admission you send your documents to the university, which files your entry permit application with the Civil Registry and Migration Department, usually answered in about four weeks. You must be outside Cyprus while it is processed. After arrival you apply for the residence permit within days.",
    },
    generalSrc: "https://www.ucy.ac.cy/ir/wp-content/uploads/sites/113/2026/04/ENTRY-PERMIT-REGULATIONS.pdf",
    eg: {
      where: { ar: "الجامعة القبرصية تقدّم الطلب في قبرص؛ وتوثيق أوراقك المصرية يتم في وزارة الخارجية المصرية ثم سفارة قبرص بالقاهرة", en: "The Cypriot university files the application in Cyprus; your Egyptian documents are attested by Egypt's Ministry of Foreign Affairs and then the Cyprus Embassy in Cairo" },
      steps: {
        ar: ["احصل على خطاب القبول وادفع ما تطلبه الجامعة.", "وثّق الشهادات وكشف الحساب البنكي من الخارجية المصرية ثم سفارة قبرص.", "أرسل الأوراق للجامعة لتقدّم طلب تصريح الدخول.", "بعد صدور التصريح (Blue Slip) سافر، ثم قدّم على تصريح الإقامة."],
        en: ["Get your admission letter and pay what the university asks.", "Have your certificates and bank statement attested by Egypt's foreign ministry and then the Cyprus Embassy.", "Send the documents to the university so it can file the entry permit.", "Once the permit (Blue Slip) is issued, travel and then apply for the residence permit."],
      },
      note: { ar: "خطوات التوثيق تختلف قليلاً بين الجامعات، فاتبع قائمة جامعتك.", en: "The attestation steps differ a little between universities, so follow your university's checklist." },
      src: "https://www.ucy.ac.cy/ir/wp-content/uploads/sites/113/2026/04/ENTRY-PERMIT-REGULATIONS.pdf",
      book: null,
      check: true,
    },
  },
  mt: {
    general: {
      ar: "للدراسة أكثر من 90 يوماً تحتاج تأشيرة وطنية D قبل السفر، وتعالجها وحدة التأشيرات المركزية في Identità. بعد الوصول تقدّم فوراً على تصريح الإقامة (e-Residence).",
      en: "To study for more than 90 days you need a national D visa before travelling, processed by the Central Visa Unit at Identità. After arrival you apply at once for the residence permit (e-Residence).",
    },
    generalSrc: "https://identita.gov.mt/frequently-asked-questions/expatriates/non-eu-non-employment/study/",
    eg: {
      where: { ar: "سفارة مالطا بالقاهرة، والتقديم عن طريق مراكز VFS Global في القاهرة والإسكندرية بموعد مسبق", en: "The Maltese Embassy in Cairo, with applications through the VFS Global centres in Cairo and Alexandria by appointment" },
      steps: {
        ar: ["احصل على خطاب القبول من الجامعة.", "جهّز الأوراق حسب قائمة تأشيرة الدراسة الطويلة (كشف حساب 3 شهور وتأمين صحي).", "احجز موعداً في VFS وقدّم الطلب شخصياً.", "بعد الوصول قدّم على تصريح الإقامة لدى Identità."],
        en: ["Get your admission letter from the university.", "Prepare the documents on the long-stay study visa checklist (three months of bank statements and health insurance).", "Book a VFS appointment and apply in person.", "After arrival, apply for the residence permit with Identità."],
      },
      note: { ar: "رسوم تأشيرة الدراسة 3,200 جنيه ورسوم خدمة VFS 960 جنيه حسب صفحة VFS (للتحقق من الأرقام الحالية).", en: "The study visa fee is EGP 3,200 and the VFS service fee EGP 960 per the VFS page (check current amounts)." },
      src: "https://visa.vfsglobal.com/one-pager/malta/egypt/english/",
      book: "https://visa.vfsglobal.com/one-pager/malta/egypt/english/",
      check: true,
    },
  },
  no: {
    general: {
      ar: "النرويج ليست في الاتحاد الأوروبي لكنها في منطقة شنغن. تحتاج تصريح دراسة (residence permit) من مديرية الهجرة UDI قبل السفر: تقدّم أونلاين وتدفع الرسوم، ثم تسلّم الأوراق والجواز شخصياً. الشروط: قبول دراسة بدوام كامل، و170,368 كرونة للمعيشة في حساب بنك نرويجي أو حساب الإيداع بالجامعة، ورسوم الدراسة أو إثبات دفعها، ومكان للسكن.",
      en: "Norway is not in the EU but is in the Schengen area. You need a study permit (residence permit) from the Directorate of Immigration (UDI) before travelling: apply online and pay the fee, then hand in your documents and passport in person. Requirements: full-time admission, NOK 170,368 for living costs in a Norwegian bank account or the institution's deposit account, the tuition fee or proof of payment, and somewhere to live.",
    },
    generalSrc: "https://www.udi.no/en/want-to-apply/studies/studietillatelse/university-college-or-university/?c=tur",
    eg: {
      where: { ar: "مركز VFS Global في القاهرة (52 شارع لبنان، المهندسين)؛ والقرار من سفارة النرويج في أبوظبي، المسؤولة عن طلبات الإقامة المقدمة في مصر منذ 22 يوليو 2026", en: "The VFS Global centre in Cairo (52 Lebanon St, Mohandessin); decisions are made by the Norwegian Embassy in Abu Dhabi, responsible for residence applications submitted in Egypt since 22 July 2026" },
      steps: {
        ar: ["بعد القبول حوّل مصاريف المعيشة والرسوم للجامعة أو لحساب بنك نرويجي حسب تعليماتها.", "قدّم طلب تصريح الدراسة أونلاين على موقع UDI وادفع رسومه (5,400 كرونة).", "احجز موعداً في VFS بالقاهرة وسلّم الأوراق والجواز والبصمات.", "تابع الطلب حتى يصدر القرار من سفارة النرويج في أبوظبي."],
        en: ["After admission, transfer the living costs and tuition to the university or a Norwegian bank account as it instructs.", "Apply for the study permit online on the UDI website and pay the fee (NOK 5,400).", "Book an appointment at VFS in Cairo and hand in your documents, passport and biometrics.", "Follow your case until the Norwegian Embassy in Abu Dhabi decides."],
      },
      note: { ar: "أسئلة التأشيرات والإقامة توجَّه لمركز VFS في القاهرة لا للسفارة، وVFS تأخذ رسوم خدمة إضافية.", en: "Visa and residence questions go to VFS Cairo, not the embassy, and VFS charges an extra service fee." },
      src: "https://www.norway.no/en/united-arab-emirates/services-info/visitors-visa-res-permit/",
      book: "https://visa.vfsglobal.com/egy/en/nor/",
    },
  },
  gb: {
    general: {
      ar: "بريطانيا خارج الاتحاد الأوروبي وخارج شنغن. تحتاج تأشيرة الطالب (Student visa)، وتطلبها أونلاين على موقع gov.uk بعد أن تعطيك الجامعة رقم تأكيد القبول للدراسة (CAS)، وأقرب موعد للتقديم من خارج بريطانيا هو 6 أشهر قبل بداية الدراسة. تدفع رسوم الطلب ورسوم الصحة (IHS)، ثم تحجز موعد البصمات في مركز طلبات التأشيرة. تحتاج إنجليزية بمستوى B2 للدراسة الجامعية، وقد تحتاج شهادة ATAS لبعض برامج العلوم والهندسة في الماجستير وما فوقه، وشهادة فحص السل (TB) إذا كنت تعيش في دولة من قائمة الفحص.",
      en: "The UK is outside the EU and Schengen. You need a Student visa, applied for online on gov.uk once the university gives you a Confirmation of Acceptance for Studies (CAS) number; the earliest you can apply from outside the UK is 6 months before your course starts. You pay the application fee and the Immigration Health Surcharge (IHS), then book a biometrics appointment at a visa application centre. Degree-level study needs English at B2, some science and engineering master's and higher need an ATAS certificate, and you need a TB test certificate if you live in a country on the test list.",
    },
    generalSrc: "https://www.gov.uk/student-visa",
    eg: {
      where: {"ar": "مركز طلبات التأشيرة البريطانية في القاهرة (يديره TLScontact، والمواعيد العادية مجانية؛ العنوان والمواعيد في صفحة Find a visa application centre على gov.uk)؛ تحجز الموعد بعد إكمال الطلب والدفع على gov.uk", "en": "The UK visa application centre in Cairo (run by TLScontact; standard appointments are free; address and hours on gov.uk's Find a visa application centre page); book after completing the application and payment on gov.uk"},
      steps: {
        ar: ["احصل على القبول غير المشروط من الجامعة وادفع العربون إن طُلب، لتعطيك الجامعة رقم CAS.", "جهّز إثبات المال (رسوم السنة الأولى غير المدفوعة + 1,203 جنيهات إسترلينية في الشهر خارج لندن أو 1,570 في لندن لمدة حتى 9 أشهر) واتركه في حسابك 28 يوماً متتالية.", "قدّم طلب تأشيرة الطالب أونلاين على gov.uk قبل بداية الدراسة بـ 6 أشهر على الأكثر، وادفع رسوم الطلب ورسوم الصحة IHS.", "احجز موعد البصمات في مركز الطلبات بالقاهرة وسلّم أوراقك أو ارفعها حسب التعليمات.", "التأشيرة إلكترونية (eVisa) مرتبطة بجواز سفرك؛ سافر بها واحمل أوراق القبول والمال."],
        en: ["Get an unconditional offer and pay the deposit if asked, so the university issues your CAS number.", "Prepare proof of funds (unpaid first-year tuition + £1,203 a month outside London or £1,570 in London for up to 9 months) and keep it in your account for 28 consecutive days.", "Apply for the Student visa online on gov.uk no earlier than 6 months before your course starts, and pay the application fee and the IHS.", "Book a biometrics appointment at the Cairo application centre and hand in or upload your documents as instructed.", "The visa is an eVisa linked to your passport; travel with it and carry your admission and funds documents."]
      },
      note: { ar: "المصريون يحتاجون تأشيرة لبريطانيا. مصر ليست في قائمة دول فحص السل على gov.uk، لكن الفحص يلزمك إذا عشت 6 أشهر أو أكثر في دولة من القائمة (للتحقق).", en: "Egyptians need a visa for the UK. Egypt is not on the gov.uk TB test list, but you need the test if you lived 6 months or more in a listed country (to verify)." },
      src: "https://www.gov.uk/student-visa",
      book: "https://www.gov.uk/find-a-visa-application-centre",
    },
  },
  nz: {
    general: {
      ar: "نيوزيلندا خارج أوروبا. تحتاج تأشيرة الطالب الذي يدفع الرسوم (Fee Paying Student Visa)، وتُطلب أونلاين على نظام Immigration Online بعد عرض المكان من الجامعة. تثبت دفع رسوم السنة الأولى والمال للمعيشة والتأمين، وقد يُطلب كشف طبي وأشعة صدر. يمكن طلب موافقة مبدئية (Approval in Principle) قبل دفع الرسوم.",
      en: "New Zealand is outside Europe. You need a Fee Paying Student Visa, applied for online through Immigration Online after the university's offer of place. You show that the first year's tuition is paid, living funds and insurance; a medical exam and chest X-ray may be required. You can ask for Approval in Principle before paying the fees.",
    },
    generalSrc: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/visa-factsheet/full-fee-paying-student-visa",
    eg: {
      where: {"ar": "الطلب أونلاين على Immigration Online من هيئة الهجرة النيوزيلندية؛ لا تحتاج زيارة سفارة عادةً (للتحقق إن طُلبت أوراق أصلية)", "en": "Apply online through Immigration New Zealand's Immigration Online; usually no embassy visit is needed (check if original documents are requested)"},
      steps: {
        ar: ["احصل على عرض المكان (offer of place) من الجامعة النيوزيلندية.", "جهّز إثبات المال (20,000 دولار نيوزيلندي لكل سنة) والتأمين، وشهادة الكشف الطبي إن طُلبت.", "قدّم طلب تأشيرة الطالب أونلاين على Immigration Online.", "بعد الموافقة المبدئية ادفع رسوم السنة الأولى وأرسل الإيصال لتصدر التأشيرة.", "التأشيرة إلكترونية؛ سافر بها واحمل أوراق القبول والمال."],
        en: ["Get the offer of place from the New Zealand university.", "Prepare proof of funds (NZD 20,000 a year), insurance and a medical certificate if asked.", "Apply for the student visa online through Immigration Online.", "After approval in principle, pay the first year's tuition and send the receipt so the visa can be issued.", "The visa is electronic; travel with it and carry your admission and funds documents."]
      },
      note: { ar: "المصريون يحتاجون تأشيرة لدخول نيوزيلندا.", en: "Egyptians need a visa for New Zealand." },
      src: "https://www.immigration.govt.nz/new-zealand-visas/apply-for-a-visa/visa-factsheet/full-fee-paying-student-visa",
      book: null,
    },
  },
  au: {
    general: {
      ar: "أستراليا خارج أوروبا. تحتاج تأشيرة الطالب (subclass 500)، وتُطلب أونلاين على ImmiAccount بعد الحصول على تأكيد التسجيل الإلكتروني (CoE) من الجامعة. يجب أن تكون خارج أستراليا عند التقديم في أغلب الحالات، وأن تثبت المال والتأمين الصحي OSHC ومستوى الإنجليزية، وأنك طالب حقيقي (Genuine Student). قد تُطلب البصمات وكشف طبي.",
      en: "Australia is outside Europe. You need a Student visa (subclass 500), applied for online through ImmiAccount after the university issues your electronic Confirmation of Enrolment (CoE). In most cases you must be outside Australia when you apply, and show funds, OSHC health cover, English level and that you are a genuine student. Biometrics and a medical exam may be required.",
    },
    generalSrc: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
    eg: {
      where: {"ar": "الطلب أونلاين على ImmiAccount؛ إن طُلبت البصمات تقدمها في مركز معتمد من الوزارة في مصر (المكان في خطاب الطلب، للتحقق)", "en": "Apply online through ImmiAccount; if biometrics are requested, give them at a centre the Department names in Egypt (location in the request letter, to verify)"},
      steps: {
        ar: ["اقبل عرض الجامعة وادفع العربون لتحصل على تأكيد التسجيل الإلكتروني (CoE).", "اشترِ تأمين OSHC وجهّز إثبات المال (رسوم سنة + 29,710 دولاراً أسترالياً للمعيشة + السفر) وشهادة الإنجليزية.", "قدّم طلب تأشيرة الطالب 500 أونلاين على ImmiAccount وادفع الرسوم (2,500 دولار أسترالي من يوليو 2026).", "قدّم البصمات أو الكشف الطبي إذا طلبتهما الوزارة.", "انتظر القرار قبل السفر؛ التأشيرة إلكترونية مرتبطة بجوازك."],
        en: ["Accept the university's offer and pay the deposit to receive your Confirmation of Enrolment (CoE).", "Buy OSHC and prepare proof of funds (a year's tuition + AUD 29,710 for living + travel) and your English certificate.", "Apply for the Student visa (subclass 500) online through ImmiAccount and pay the charge (AUD 2,500 from July 2026).", "Give biometrics or have a medical exam if the Department asks.", "Wait for the decision before travelling; the visa is electronic and linked to your passport."]
      },
      note: { ar: "المصريون يحتاجون تأشيرة الطالب قبل السفر إلى أستراليا.", en: "Egyptians need the student visa before travelling to Australia." },
      src: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
      book: null,
    },
  },
  ca: {
    general: {
      ar: "كندا خارج أوروبا. تحتاج تصريح دراسة (study permit) من وزارة الهجرة الكندية IRCC، ويُطلب أونلاين بعد خطاب القبول من جامعة معتمدة (DLI). منذ 1 يناير 2026 لا يحتاج طلاب الماجستير والدكتوراه في الجامعات الحكومية خطاب الإقليم (PAL)، أما طلاب البكالوريوس فيحتاجونه غالباً. تُطلب البصمات في مركز تأشيرات، وتأشيرة الدخول تصدر مع التصريح لمن تحتاج جنسيته تأشيرة. للدراسة في كيبيك تحتاج أولاً شهادة قبول كيبيك (CAQ).",
      en: "Canada is outside Europe. You need a study permit from Immigration, Refugees and Citizenship Canada (IRCC), applied for online after an acceptance letter from a designated learning institution (DLI). Since 1 January 2026 master's and doctoral students at public institutions no longer need a provincial attestation letter (PAL); bachelor's students usually do. Biometrics are given at a visa application centre, and an entry visa is issued with the permit for nationalities that need one. To study in Quebec you first need a Quebec Acceptance Certificate (CAQ).",
    },
    generalSrc: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/graduate-student/how-to-apply.html",
    eg: {
      where: {"ar": "الطلب أونلاين على حساب IRCC؛ البصمات في مركز VFS Global لتأشيرات كندا في القاهرة (للتحقق من المكان عند الحجز)", "en": "Apply online through an IRCC account; biometrics at the VFS Global Canada visa application centre in Cairo (check the location when booking)"},
      steps: {
        ar: ["احصل على خطاب القبول من جامعة كندية معتمدة (DLI).", "جهّز إثبات المال: رسوم السنة الأولى + 23,448 دولاراً كندياً للمعيشة + السفر، مع مصدر المال.", "قدّم طلب تصريح الدراسة أونلاين على حساب IRCC وادفع الرسوم (150 + 85 دولاراً كندياً للبصمات).", "بعد خطاب البصمات احجز موعداً في مركز VFS وقدّم البصمات والصورة.", "قد يُطلب كشف طبي من طبيب معتمد من IRCC؛ بعد الموافقة تحصل على خطاب تصريح الدراسة وتأشيرة الدخول، والتصريح نفسه يصدر عند الوصول."],
        en: ["Get an acceptance letter from a Canadian designated learning institution (DLI).", "Prepare proof of funds: first-year tuition + CAD 23,448 for living + travel, with the source of the money.", "Apply for the study permit online through an IRCC account and pay the fees (CAD 150 + CAD 85 biometrics).", "After the biometrics letter, book a VFS appointment and give your fingerprints and photo.", "A medical exam by an IRCC panel physician may be required; once approved you get the port-of-entry letter and entry visa, and the permit itself is issued on arrival."]
      },
      note: { ar: "المصريون يحتاجون تأشيرة دخول لكندا، وتصدر تلقائياً مع الموافقة على تصريح الدراسة.", en: "Egyptians need an entry visa for Canada; it is issued automatically when the study permit is approved." },
      src: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html",
      book: null,
    },
  },
  my: {
    general: {
      ar: "ماليزيا خارج أوروبا. تحتاج تصريح طالب (Student Pass) قبل دخول ماليزيا: بعد القبول تقدّم الجامعة الطلب عن طريق هيئة التعليم الماليزية الدولية (EMGS)، ثم تصدر دائرة الهجرة خطاب الموافقة الإلكتروني eVAL، وهو صالح للدخول خلال 6 أشهر. إذا كانت جنسيتك تحتاج تأشيرة لدخول ماليزيا تطلب تأشيرة دخول واحدة (Single Entry Visa) عبر بوابة eVISA الرسمية. بعد الوصول تجري فحصاً طبياً في عيادة معتمدة من EMGS خلال 7 أيام، ثم يُلصق تصريح الطالب في جوازك.",
      en: "Malaysia is outside Europe. You need a Student Pass before entering Malaysia: after admission the university applies through Education Malaysia Global Services (EMGS), then the Immigration Department issues the electronic approval letter (eVAL), valid for entry within 6 months. If your nationality needs a visa for Malaysia, you apply for a Single Entry Visa through the official eVISA portal. After arrival you have a medical check at an EMGS-approved clinic within 7 days, then the Student Pass sticker is put in your passport.",
    },
    generalSrc: "https://www.imi.gov.my/index.php/en/main-services/pass/student-pass/",
    eg: {
      where: { ar: "الطلب يُقدَّم أونلاين عن طريق الجامعة وEMGS؛ تأشيرة الدخول (إن احتجتها) عبر بوابة eVISA الماليزية أو سفارة ماليزيا في القاهرة", en: "The application is made online through the university and EMGS; the entry visa (if you need one) through Malaysia's eVISA portal or the Embassy of Malaysia in Cairo" },
      steps: {
        ar: ["احصل على خطاب القبول من الجامعة الماليزية.", "ارفع أوراقك (جواز السفر وصورة والشهادات) في نظام الجامعة لترسل طلب تصريح الطالب إلى EMGS وتدفع رسومه.", "انتظر خطاب الموافقة eVAL من دائرة الهجرة؛ يجب أن تدخل ماليزيا خلال 6 أشهر منه.", "إن كانت جنسيتك تحتاج تأشيرة اطلب تأشيرة الدخول الواحدة عبر بوابة eVISA بخطاب eVAL (للتحقق من حاجة المصريين لها وقت التقديم).", "بعد الوصول أجرِ الفحص الطبي في عيادة معتمدة من EMGS خلال 7 أيام، ثم يُلصق تصريح الطالب في جوازك."],
        en: ["Get the admission letter from the Malaysian university.", "Upload your documents (passport, photo, certificates) in the university's system so it sends the Student Pass application to EMGS, and pay its fee.", "Wait for the eVAL approval letter from the Immigration Department; you must enter Malaysia within 6 months of it.", "If your nationality needs a visa, apply for the Single Entry Visa through the eVISA portal with the eVAL letter (check whether Egyptians need it when you apply).", "After arrival, do the medical check at an EMGS-approved clinic within 7 days, then the Student Pass sticker is put in your passport."]
      },
      note: { ar: "تصريح الطالب لا يسمح بالعمل أثناء الدراسة إلا في الإجازات وبموافقة مسبقة.", en: "The Student Pass does not allow work during studies except in holidays and with prior approval." },
      src: "https://www.imi.gov.my/index.php/en/main-services/pass/student-pass/",
      book: null,
    },
  },
  tr: {
    general: {
      ar: "تركيا ليست في الاتحاد الأوروبي ولا في منطقة شنغن. للدراسة تحتاج تأشيرة طالب من السفارة أو القنصلية التركية (تأشيرة الدراسة لا تصدر عبر نظام التأشيرة الإلكترونية)، إلا إذا كانت جنسيتك معفاة من التأشيرة. بعد الوصول والتسجيل في الجامعة تقدّم أونلاين على e-ikamet.goc.gov.tr لطلب تصريح إقامة الطالب، ثم تسلّم الأوراق لمكتب الطلاب الدوليين في الجامعة خلال المهلة التي تحددها (أيام قليلة). تصريح إقامة الطالب يُجدد كل سنة ويحتاج تأميناً صحياً سارياً.",
      en: "T\u00fcrkiye is not in the EU or the Schengen area. To study you need a student visa from a Turkish embassy or consulate (study visas are not issued through the e-Visa system), unless your nationality is visa-exempt. After arrival and university registration you apply online at e-ikamet.goc.gov.tr for the student residence permit, then hand the documents to the university's international student office within the short deadline it sets. The student residence permit is renewed yearly and requires valid health insurance.",
    },
    generalSrc: "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa?level=1",
    eg: {
      where: { ar: "مركزا طلبات التأشيرة (MZ) في القاهرة والإسكندرية، بموعد مسبق، والقرار للسفارة التركية في القاهرة أو القنصلية العامة في الإسكندرية", en: "The visa application centres (MZ) in Cairo and Alexandria, by appointment; the Turkish Embassy in Cairo or the Consulate General in Alexandria decides" },
      steps: {
        ar: ["احصل على خطاب القبول من الجامعة التركية.", "احجز موعداً في مركز طلبات التأشيرة في القاهرة أو الإسكندرية وقدّم طلب تأشيرة الطالب بنفسك (رسوم خدمة المركز 30 دولاراً إضافة إلى رسوم التأشيرة).", "قد تطلب السفارة أو القنصلية مقابلة شخصية قبل القرار.", "بعد الوصول سجّل في الجامعة وقدّم طلب تصريح إقامة الطالب على e-ikamet.goc.gov.tr وسلّم الأوراق لمكتب الطلاب الدوليين في المهلة المحددة."],
        en: ["Get the admission letter from the Turkish university.", "Book an appointment at the visa application centre in Cairo or Alexandria and apply for the student visa in person (centre service fee US$30 plus the visa fee).", "The embassy or consulate may ask for a personal interview before deciding.", "After arrival, register at the university, apply for the student residence permit on e-ikamet.goc.gov.tr and hand the documents to the international student office within the deadline."]
      },
      note: { ar: "المصريون بجواز عادي يحتاجون تأشيرة لدخول تركيا، والتأشيرة الإلكترونية للسياحة لا تصلح للدراسة.", en: "Egyptians with ordinary passports need a visa for Türkiye, and the tourist e-Visa is not for study." },
      src: "https://kahire-be.mfa.gov.tr/Mission/ShowAnnouncement/337136",
      book: null,
    },
  },
  li: {
    general: {
      ar: "ليختنشتاين ليست في الاتحاد الأوروبي لكنها في شنغن والمنطقة الاقتصادية الأوروبية، ولها نفس شروط الدخول تقريباً مثل سويسرا. تحتاج تصريح إقامة قصير للدراسة (L) من مكتب الهجرة والجوازات (APA)، وهو يصلح 12 شهراً كحد أقصى ويُجدد طالما الدراسة مستمرة. من يحتاج تأشيرة يقدّمها في السفارة السويسرية في بلد إقامته، والقرار جزء منه للسلطات السويسرية وجزء لمكتب الهجرة في ليختنشتاين، ولا تصدر التأشيرة قبل موافقة المكتب.",
      en: "Liechtenstein is not in the EU but is in Schengen and the EEA, with largely the same entry rules as Switzerland. You need a short-term residence permit for study (L) from the Migration and Passport Office (APA); it is valid for up to 12 months and can be renewed while studies continue. If you need a visa, you apply at the Swiss representation in your country of residence; the decision is partly the Swiss authorities' and partly the Liechtenstein office's, and no visa is issued before the office approves.",
    },
    generalSrc: "https://llv.li/en/national-administration/migration-and-passport-office/visa",
    eg: {
      where: { ar: "قسم التأشيرات في سفارة سويسرا بالقاهرة، بموعد مسبق يُطلب بالبريد الإلكتروني cairo.visa@eda.admin.ch، بعد موافقة مكتب الهجرة في ليختنشتاين", en: "The visa section of the Swiss Embassy in Cairo, by appointment requested by email at cairo.visa@eda.admin.ch, after the Liechtenstein Migration Office approves" },
      steps: {
        ar: ["احصل على القبول من جامعة ليختنشتاين وادفع وديعة الإقامة (3,000 فرنك سويسري).", "مكتب تنسيق التصاريح في الجامعة يرشدك في طلب تصريح الدراسة (L) لدى مكتب الهجرة والجوازات؛ الجامعة تنصح بعدم بدء الإجراء بنفسك.", "انتظر موافقة المكتب، ثم اطلب موعداً من قسم التأشيرات في سفارة سويسرا بالقاهرة وقدّم طلب التأشيرة الوطنية D.", "بعد الوصول استلم تصريح الإقامة، وجدده قبل انتهاء الـ12 شهراً."],
        en: ["Get admission from the University of Liechtenstein and pay the residence deposit (CHF 3,000).", "The university's permit coordination office guides you through the study permit (L) application to the Migration and Passport Office; the university advises not to start the procedure yourself.", "Wait for the office's approval, then request an appointment from the visa section of the Swiss Embassy in Cairo and apply for the national D visa.", "After arrival collect the residence permit, and renew it before the 12 months run out."]
      },
      note: { ar: "المكتب يطلب تقديم الطلب كاملاً قبل بداية الدراسة بـ14 يوماً على الأقل، ويوصي من يحتاج تأشيرة بالتقديم أبكر بكثير.", en: "The office wants the complete application at least 14 days before studies start, and advises visa nationals to apply much earlier." },
      src: "https://llv.li/en/national-administration/migration-and-passport-office/residence-in-liechtenstein-without-employment/short-stay-permit-for-study-education-l-",
      book: null,
    },
  },
  is: {
    general: {
      ar: "تحتاج تصريح إقامة للطلاب من مديرية الهجرة الأيسلندية (Útlendingastofnun) قبل السفر. إذا كانت جنسيتك تحتاج تأشيرة لدخول أيسلندا فلا تكن في أيسلندا وقت تقديم الطلب أو أثناء دراسته. الشروط: قبول بدوام كامل (30 ساعة معتمدة في الفصل)، ومال كافٍ لكل مدة التصريح، وتأمين صحي، وصحيفة حالة جنائية من بلد إقامتك.",
      en: "You need a student residence permit from the Icelandic Directorate of Immigration (Útlendingastofnun) before travelling. If your nationality needs a visa for Iceland, you must not be in Iceland when you apply or while the application is processed. Requirements: full-time admission (30 ECTS a semester), enough money for the whole permit period, health insurance and a criminal record certificate from your country of residence.",
    },
    generalSrc: "https://island.is/en/residence-permit-students/requirements",
    eg: {
      where: { ar: "الطلب يُقدَّم إلى مديرية الهجرة الأيسلندية؛ جهة البصمات والتأشيرة في مصر غير منشورة في المصدر الذي اطلعنا عليه (للتحقق)", en: "The application goes to the Icelandic Directorate of Immigration; where Egyptian applicants give biometrics and get the visa is not published in the source we read (to verify)" },
      steps: {
        ar: ["احصل على القبول من الجامعة.", "جهّز الأوراق: الجواز (صالح 90 يوماً بعد نهاية التصريح)، صورة 35×45 مم، كشف حساب بالمبلغ المطلوب، تأمين صحي، وصحيفة حالة جنائية لا تتجاوز 12 شهراً.", "قدّم طلب تصريح الإقامة للطلاب وادفع رسومه.", "بعد الموافقة سافر واستلم بطاقة الإقامة."],
        en: ["Get your admission from the university.", "Prepare the documents: passport (valid 90 days after the permit ends), a 35x45 mm photo, a bank statement with the required amount, health insurance and a criminal record certificate no older than 12 months.", "Submit the student residence permit application and pay its fee.", "Once approved, travel and collect the residence card."],
      },
      note: { ar: "لا توجد سفارة لأيسلندا في مصر حسب ما اطلعنا عليه؛ اسأل مديرية الهجرة عن مكان أخذ البصمات (للتحقق).", en: "We found no Icelandic embassy in Egypt; ask the Directorate of Immigration where to give biometrics (to verify)." },
      src: "https://island.is/en/residence-permit-students/document-requirements",
      book: null,
    },
  },
  gr: {
    general: {
      ar: "تحتاج تأشيرة وطنية من النوع D للدراسة (الفئة D.1.1) من القنصلية اليونانية قبل السفر، ثم تطلب تصريح الإقامة للدراسة في اليونان قبل انتهاء التأشيرة. التأشيرة تُمنح لمدة أكثر من 90 يوماً وحتى 365 يوماً.",
      en: "You need a national type D visa for studies (category D.1.1) from a Greek consulate before travelling, then apply for the study residence permit in Greece before the visa expires. The visa covers more than 90 and up to 365 days.",
    },
    generalSrc: "https://www.mfa.gr/media/2025/08/General-Supporting-Documents-procedure-for-Granting-National-D-type-visas.docx",
    eg: {
      where: { ar: "القنصلية العامة لليونان في القاهرة (grgencon.cai@mfa.gr) أو في الإسكندرية (grgencon.ale@mfa.gr)", en: "The Greek Consulate General in Cairo (grgencon.cai@mfa.gr) or in Alexandria (grgencon.ale@mfa.gr)" },
      steps: {
        ar: ["احصل على خطاب القبول من الجامعة اليونانية.", "تواصل مع القنصلية لمعرفة طريقة حجز الموعد والأوراق المطلوبة.", "قدّم طلب التأشيرة D مع جواز السفر والقبول وإثبات المال والتأمين الصحي وصحيفة الحالة الجنائية.", "بعد الوصول قدّم طلب تصريح الإقامة للدراسة قبل انتهاء التأشيرة."],
        en: ["Get the admission letter from the Greek university.", "Contact the consulate to find out how to book an appointment and which documents it needs.", "Apply for the D visa with your passport, admission, proof of funds, health insurance and criminal record certificate.", "After arrival, apply for the study residence permit before the visa expires."],
      },
      note: { ar: "طريقة الحجز والرسوم في مصر غير منشورة في المصدر الذي اطلعنا عليه (للتحقق مع القنصلية).", en: "The booking method and fees in Egypt are not published in the source we read (check with the consulate)." },
      src: "https://www.mfa.gr/missionsabroad/en/egypt-en/news/communication-on-consular-authorities-functioning.html",
      book: null,
    },
  },
  si: {
    general: {
      ar: "أول تصريح إقامة للدراسة يجب الحصول عليه قبل دخول سلوفينيا. تقدّم الطلب في سفارة أو قنصلية سلوفينيا في بلدك، والقرار للوحدة الإدارية في سلوفينيا. التصريح يصدر لمدة الدراسة بحد أقصى سنة ويُجدَّد كل سنة. الرسوم 102 يورو للتصريح الأول من الخارج و12 يورو للبطاقة. بعد الوصول تسجّل عنوان إقامتك.",
      en: "The first study residence permit must be obtained before entering Slovenia. You apply at a Slovenian embassy or consulate in your country, and the administrative unit in Slovenia decides. It is issued for the length of the course, at most one year, and renewed yearly. The fee is €102 for a first permit applied for abroad plus €12 for the card. After arrival you register your address.",
    },
    generalSrc: "https://home-affairs.ec.europa.eu/policies/migration-and-asylum/eu-immigration-portal/student-slovenia_en",
    eg: {
      where: { ar: "القسم القنصلي في سفارة سلوفينيا بالقاهرة، بموعد مسبق فقط يُطلب بالبريد الإلكتروني sloembassy.cairo@gov.si، والقسم يعمل أيام الأحد والثلاثاء والخميس", en: "The consular section of the Slovenian Embassy in Cairo, by appointment only, requested by email at sloembassy.cairo@gov.si; it is open on Sundays, Tuesdays and Thursdays" },
      steps: {
        ar: ["احصل على شهادة القبول أو التسجيل من الجامعة.", "اطلب موعداً من السفارة بالبريد الإلكتروني مبكراً.", "جهّز الأوراق: جواز سفر ساري، تأمين صحي، إثبات المال الكافي، صحيفة الحالة الجنائية، وشهادة التسجيل، وقدّمها شخصياً مع البصمات.", "انتظر قرار الوحدة الإدارية في سلوفينيا، ثم استلم بطاقة الإقامة."],
        en: ["Get the admission or enrolment certificate from the university.", "Request an appointment from the embassy by email, early.", "Prepare the documents: valid passport, health insurance, proof of sufficient funds, criminal record certificate and enrolment certificate, and submit them in person with fingerprints.", "Wait for the decision of the administrative unit in Slovenia, then collect the residence card."],
      },
      note: { ar: "السفارة في القاهرة مسؤولة أيضاً عن الأردن وعُمان والسعودية.", en: "The embassy in Cairo also covers Jordan, Oman and Saudi Arabia." },
      src: "https://www.gov.si/en/representations/embassy-cairo/visa-information-of-the-embassy-cairo/",
      book: null,
    },
  },
  ch: {
    general: {
      ar: "سويسرا ليست في الاتحاد الأوروبي لكنها في منطقة شنغن. تحتاج تأشيرة وطنية D للدراسة تقدّمها في سفارة سويسرا في بلدك، والسفارة ترسل الطلب لمكتب الهجرة في الكانتون الذي ستدرس فيه، وهو من يقرر. بعد الوصول تسجّل في البلدية وتحصل على تصريح إقامة B للطلاب.",
      en: "Switzerland is not in the EU but is in the Schengen area. You need a national D visa for studies, applied for at the Swiss embassy in your country; the embassy forwards it to the migration office of the canton where you will study, which decides. After arrival you register with the municipality and receive a student B permit.",
    },
    generalSrc: "https://www.schweiz-jemen.eda.admin.ch/en/documents-national-visa",
    eg: {
      where: { ar: "قسم التأشيرات في سفارة سويسرا بالقاهرة (10 شارع عبد الخالق ثروت)، بموعد مسبق فقط من الأحد إلى الأربعاء من 8:00 إلى 11:30 صباحاً، ويُطلب الموعد بالبريد الإلكتروني cairo.visa@eda.admin.ch", en: "The visa section of the Swiss Embassy in Cairo (10 Abdel Khalek Sarwat St), by appointment only, Sunday to Wednesday 8:00-11:30; request the appointment by email at cairo.visa@eda.admin.ch" },
      steps: {
        ar: ["احصل على خطاب القبول من الجامعة.", "اطلب موعداً من قسم التأشيرات بالبريد الإلكتروني.", "جهّز الأوراق حسب نشرة تأشيرة الدراسة الصادرة عن السفارة وقدّمها شخصياً.", "انتظر قرار مكتب الهجرة في الكانتون، وقد يستغرق عدة أسابيع، فقدّم مبكراً."],
        en: ["Get the admission letter from the university.", "Request an appointment from the visa section by email.", "Prepare the documents listed in the embassy's study visa leaflet and submit them in person.", "Wait for the cantonal migration office's decision, which can take several weeks, so apply early."],
      },
      note: { ar: "رسوم التأشيرة تُدفع بالجنيه المصري بالمبلغ المحدد بالضبط.", en: "Visa fees are paid in Egyptian pounds, exact amount only." },
      src: "https://www.fdfa.admin.ch/content/dam/countries/countries-content/egypt/en/Study_Visa_06.08.2025.pdf",
      book: null,
    },
  },
  lu: {
    general: {
      ar: "من 1 أكتوبر 2026 تغيّر الإجراء: الطلبات الجديدة لم تعد عبر تصريح الإقامة المؤقتة (AST) المعروف سابقاً، وأصبح الطالب يقدّم على تأشيرة D عبر نظام Visa On Web في السفارة البلجيكية التي تمثل لوكسمبورغ في بلده (أو مزوّد خدمتها)، والقرار لإدارة الهجرة في وزارة الداخلية في لوكسمبورغ. بعد الوصول تقدّم تصريح التأشيرة لمكتب القبول في الجامعة قبل 15 نوفمبر.",
      en: "Since 1 October 2026 the procedure has changed: new applications no longer go through the former temporary authorisation to stay (AST); students apply for a D visa through Visa On Web at the Belgian post representing Luxembourg in their country (or its service provider), and Luxembourg's Directorate General for Immigration decides. On arrival you present it to the university's Admissions Office by 15 November.",
    },
    generalSrc: "https://visas-be.tlscontact.com/en-us/country/eg/vac/egCAI2be/news",
    eg: {
      where: { ar: "سفارة بلجيكا في القاهرة (تمثل لوكسمبورغ في الشؤون القنصلية) عن طريق مركز TLScontact في الشيخ زايد", en: "The Embassy of Belgium in Cairo (Luxembourg's consular representative) through the TLScontact centre in Sheikh Zayed" },
      steps: {
        ar: ["احصل على القبول من جامعة لوكسمبورغ.", "اختر فئة الطالب واطبع قائمة الأوراق، ثم املأ استمارة تأشيرة D على Visa On Web ووقّعها.", "احجز موعداً في TLScontact وسلّم الاستمارة والأوراق شخصياً.", "تابع الطلب حتى تقرر إدارة الهجرة في لوكسمبورغ."],
        en: ["Get admission from the University of Luxembourg.", "Choose the student category, print its checklist, then complete, date and sign the D visa form on Visa On Web.", "Book an appointment at TLScontact and hand in the form and documents in person.", "Follow the case until Luxembourg's Directorate General for Immigration decides."],
      },
      note: { ar: "الإجراء جديد منذ أكتوبر 2026، فراجع قائمة أوراق فئة الطالب على موقع TLScontact قبل الموعد.", en: "The procedure is new since October 2026, so check the student checklist on the TLScontact site before your appointment." },
      src: "https://mae.gouvernement.lu/en/missions-diplomatiques/missions-diplomatiques-et-consulaires-luxembourgeoises/egypte.html",
      book: "https://visas-be.tlscontact.com/en-us/country/eg/vac/egCAI2be/news",
      check: true,
    },
  },
};

// Origins with researched visa routes: VISA[dest][origin]. Any other Arab country falls back to the general route.
// Merge the per-origin routes kept in lib/visa/<origin>.js.
const BY_ORIGIN = { sa: VISA_SA, ma: VISA_MA, jo: VISA_JO, dz: VISA_DZ };
for (const [o, routes] of Object.entries(BY_ORIGIN)) for (const [d, b] of Object.entries(routes)) if (VISA[d]) VISA[d][o] = b;

export const VISA_ORIGINS = ["eg", ...Object.keys(BY_ORIGIN)];
export const hasVisaRoute = (dest, origin) => Boolean(VISA[dest]?.[origin]?.where);

export const VISA_TEXT = {
  ar: {
    title: "تأشيرة الدراسة من بلدك",
    lead: "اختر البلد الذي تقيم فيه والدولة التي ستدرس فيها، وسنوضح لك أين وكيف تقدّم، مع رابط الحجز الرسمي.",
    from: "أنت مقيم في", to: "ستدرس في",
    general: "الطريقة العامة", where: "أين تقدّم؟", steps: "الخطوات", note: "انتبه",
    book: "رابط الحجز أو التقديم", source: "المصدر الرسمي", portal: "تفاصيل الدولة على بوابة الهجرة الأوروبية",
    otherNote: "لم نضف بعد تفاصيل التقديم من بلدك لهذه الدولة، ونضيفها تباعاً. إلى أن نضيفها: ابدأ من موقع سفارة الدولة التي ستسافر إليها في بلدك، وتحقق هل التقديم في السفارة نفسها أم في مركز تأشيرات (VFS أو TLScontact أو BLS). احجز من الموقع الرسمي فقط.",
    warn: "احجز مواعيدك بنفسك من المواقع الرسمية فقط، ولا تدفع لوسطاء. القواعد والرسوم تتغير، فراجع المصدر قبل التقديم.",
    reviewed: "آخر مراجعة: 19 نوفمبر 2026",
    country: "صفحة الدولة",
    ready: "دول مفصّلة للمقيمين في", readyNone: "لم نضف تفاصيل بلدك بعد",
  },
  en: {
    title: "Student visa from your country",
    lead: "Choose where you live and where you'll study, and we show where and how to apply, with the official booking link.",
    from: "You live in", to: "You'll study in",
    general: "The general route", where: "Where to apply", steps: "Steps", note: "Watch out",
    book: "Booking or application link", source: "Official source", portal: "Country details on the EU Immigration Portal",
    otherNote: "We have not yet added the details for applying from your country to this destination; they are being added one by one. Until then: start from the destination's embassy website in your country and check whether you apply at the embassy or at a visa centre (VFS, TLScontact or BLS). Book only on the official site.",
    warn: "Book appointments yourself on official sites only, and don't pay intermediaries. Rules and fees change, so check the source before applying.",
    reviewed: "Last reviewed: 19 November 2026",
    country: "Country page",
    ready: "Destinations detailed for residents of", readyNone: "Your country's details are not added yet",
  },
};
