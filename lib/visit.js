// Bawabat AlSafar, visas section v1 (20 Nov 2026): visit visas to 10 destinations for the 22 Arab nationalities.
// Official sources only, checked 20 Nov 2026. STATUS = what an ordinary-passport holder needs for a short visit
// (tourism / family / business). check: true = to verify ("للتحقق").
export const VISIT_REVIEWED = "2026-11-20";

const T = (ar, en) => ({ ar, en });

// The 22 Arab League members (Palestine as "ps").
export const ORIGINS = [
  ["eg", "مصر", "Egypt"], ["sa", "السعودية", "Saudi Arabia"], ["ae", "الإمارات", "United Arab Emirates"], ["kw", "الكويت", "Kuwait"],
  ["qa", "قطر", "Qatar"], ["bh", "البحرين", "Bahrain"], ["om", "عُمان", "Oman"], ["jo", "الأردن", "Jordan"], ["lb", "لبنان", "Lebanon"],
  ["sy", "سوريا", "Syria"], ["iq", "العراق", "Iraq"], ["ps", "فلسطين", "Palestine"], ["ye", "اليمن", "Yemen"], ["ma", "المغرب", "Morocco"],
  ["dz", "الجزائر", "Algeria"], ["tn", "تونس", "Tunisia"], ["ly", "ليبيا", "Libya"], ["sd", "السودان", "Sudan"], ["mr", "موريتانيا", "Mauritania"],
  ["so", "الصومال", "Somalia"], ["dj", "جيبوتي", "Djibouti"], ["km", "جزر القمر", "Comoros"],
].map(([c, ar, en]) => ({ c, ar, en }));
export const ORIGIN_NAME = Object.fromEntries(ORIGINS.map((o) => [o.c, { ar: o.ar, en: o.en }]));
const GCC = ["sa", "ae", "kw", "qa", "bh", "om"];

// Status kinds, from easiest to hardest.
export const KIND = {
  free: T("بدون تأشيرة", "No visa"),
  eta: T("تصريح سفر إلكتروني", "Electronic travel authorisation"),
  cond: T("حسب شروط", "Depends on conditions"),
  visa: T("تأشيرة مسبقة", "Visa before travel"),
  banned: T("التأشيرات معلّقة", "Visas suspended"),
};

const SCHENGEN_FREE = T(
  "مواطنو الإمارات معفون من تأشيرة شنغن لإقامة حتى 90 يوماً في أي 180 يوماً (الملحق الثاني من اللائحة الأوروبية 2018/1806). نظام التصريح الإلكتروني ETIAS لم يبدأ العمل بعد، ولا يُطلب منك شيء الآن؛ تُسجّل بياناتك عند الحدود في نظام الدخول والخروج EES.",
  "UAE nationals are exempt from the Schengen visa for stays of up to 90 days in any 180 days (Annex II of EU Regulation 2018/1806). The ETIAS travel authorisation is not in operation yet, so nothing is needed now; your data is recorded at the border in the Entry/Exit System (EES).");
const SCHENGEN_VISA = T("تحتاج تأشيرة شنغن قصيرة (C) قبل السفر، وتقدّم عليها لدى قنصلية الدولة التي ستقضي فيها أطول مدة.", "You need a short-stay Schengen visa (C) before travelling, applied for at the consulate of the country where you will spend the longest time.");
const SCHENGEN_SRC = "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A02018R1806-20251230";

const ss = (code) => Object.fromEntries(ORIGINS.map((o) => [o.c, o.c === "ae" ? { s: "free", n: SCHENGEN_FREE, src: SCHENGEN_SRC } : { s: "visa", n: SCHENGEN_VISA, src: SCHENGEN_SRC }]));

function table(def, over) {
  const t = Object.fromEntries(ORIGINS.map((o) => [o.c, { ...def }]));
  for (const [k, v] of Object.entries(over)) for (const c of k.split(",")) t[c] = { ...def, ...v };
  return t;
}

const SCHENGEN_COMMON = {
  fee: T("90 يورو للبالغين، و45 يورو للأطفال من 6 إلى 12 سنة، ومجاناً لمن هم دون 6 سنوات؛ مراكز التأشيرات تأخذ رسوم خدمة إضافية", "€90 for adults, €45 for children aged 6 to 12 and free under 6; visa centres add their own service fee"),
  feeSrc: "https://www.france-visas.gouv.fr/documents/d/france-visas/frais-de-visa-anglais",
  stay: T("حتى 90 يوماً في أي 180 يوماً داخل كل دول شنغن", "Up to 90 days in any 180 days across all Schengen countries"),
  time: T("15 يوماً عادة، وقد تمتد حتى 45 يوماً إذا احتاج الطلب فحصاً أكثر أو أوراقاً إضافية", "Usually 15 days; up to 45 days if the application needs closer examination or more documents"),
  timeSrc: "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en",
  docs: {
    ar: ["استمارة الطلب موقّعة، وصورة حديثة", "جواز صالح 3 أشهر على الأقل بعد تاريخ المغادرة وصادر خلال آخر 10 سنوات", "تأمين سفر طبي لا يقل عن 30,000 يورو يغطي كل دول شنغن", "ما يثبت غرض الرحلة والسكن (حجز فندق أو دعوة)", "ما يثبت قدرتك المالية ونيتك العودة (كشف حساب، خطاب عمل)", "حجز أو خط سير الرحلة ذهاباً وعودة"],
    en: ["Signed application form and a recent photo", "Passport valid at least 3 months after your departure date and issued within the last 10 years", "Travel medical insurance of at least €30,000 covering all Schengen countries", "Proof of the trip's purpose and accommodation (hotel booking or invitation)", "Proof of means and of your intention to return (bank statement, employment letter)", "Round-trip booking or itinerary"],
  },
  docsSrc: "https://home-affairs.ec.europa.eu/policies/schengen/visa-policy/applying-schengen-visa_en",
  visa: T("تأشيرة شنغن قصيرة الإقامة (النوع C)", "Short-stay Schengen visa (type C)"),
  early: T("يمكنك التقديم قبل السفر بـ6 أشهر كحد أقصى و15 يوماً كحد أدنى، ويُنصح بالتبكير في مواسم السفر", "You can apply no earlier than 6 months and no later than 15 days before travel; apply early in travel seasons"),
};

export const DEST = [
  {
    id: "fr", slug: "france", name: T("فرنسا", "France"), schengen: true, ...SCHENGEN_COMMON,
    where: T("القنصلية الفرنسية أو مقدّم خدمة التأشيرات المعتمد في بلد إقامتك؛ موقع France-Visas الرسمي يحدد لك الجهة ويبدأ منه الطلب", "The French consulate or its approved visa service provider in your country of residence; the official France-Visas site tells you where and is where the application starts"),
    whereUrl: "https://france-visas.gouv.fr",
    status: ss("fr"),
  },
  {
    id: "de", slug: "germany", name: T("ألمانيا", "Germany"), schengen: true, ...SCHENGEN_COMMON,
    where: T("السفارة أو القنصلية الألمانية المختصة ببلد إقامتك، أو مقدّم الخدمة الذي تحدده؛ ابحث عن البعثة في موقع وزارة الخارجية الألمانية", "The German embassy or consulate responsible for your country of residence, or the service provider it names; find the mission on the German Foreign Office site"),
    whereUrl: "https://www.auswaertiges-amt.de/en/visa-service",
    status: ss("de"),
  },
  {
    id: "it", slug: "italy", name: T("إيطاليا", "Italy"), schengen: true, ...SCHENGEN_COMMON,
    where: T("القنصلية الإيطالية المختصة أو مقدّم الخدمة المعتمد لها في بلد إقامتك؛ موقع «Il visto per l'Italia» الرسمي يحدد نوع التأشيرة والأوراق والجهة", "The competent Italian consulate or its approved provider in your country of residence; the official 'Il visto per l'Italia' site gives the visa type, documents and office"),
    whereUrl: "https://vistoperitalia.esteri.it",
    status: ss("it"),
  },
  {
    id: "es", slug: "spain", name: T("إسبانيا", "Spain"), schengen: true, ...SCHENGEN_COMMON,
    where: T("القنصلية الإسبانية المختصة ببلد إقامتك أو مقدّم الخدمة المعتمد لها؛ تجدها في موقع وزارة الخارجية الإسبانية", "The Spanish consulate responsible for your country of residence or its approved provider; find it on the Spanish foreign ministry site"),
    whereUrl: "https://www.exteriores.gob.es",
    status: ss("es"),
  },
  {
    id: "gb", slug: "united-kingdom", name: T("بريطانيا", "United Kingdom"),
    visa: T("تأشيرة الزائر العادية (Standard Visitor)", "Standard Visitor visa"),
    fee: T("135 جنيهاً إسترلينياً لتأشيرة حتى 6 أشهر (من 8 أبريل 2026)؛ وتصريح السفر الإلكتروني ETA بـ20 جنيهاً لمن يحق له", "£135 for a visa of up to 6 months (from 8 April 2026); the ETA costs £20 for eligible nationalities"),
    feeSrc: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta",
    stay: T("حتى 6 أشهر في كل زيارة", "Up to 6 months per visit"),
    time: T("القرار عادة خلال 3 أسابيع من موعد البصمات (للتحقق حسب بلدك)", "A decision usually within 3 weeks of your biometrics appointment (check for your country)"),
    timeSrc: "https://www.gov.uk/standard-visitor",
    docs: {
      ar: ["جواز صالح طوال مدة الإقامة", "ما يثبت أنك تستطيع الإنفاق على رحلتك (كشوف حساب، خطاب عمل)", "ما يثبت أنك ستغادر بريطانيا بعد الزيارة (عمل أو دراسة أو أسرة في بلدك)", "تفاصيل السكن وخط سير الرحلة", "دعوة من الشخص الذي تزوره إن وجدت"],
      en: ["Passport valid for the whole stay", "Proof you can pay for your trip (bank statements, employment letter)", "Proof you will leave the UK after the visit (job, study or family at home)", "Accommodation details and itinerary", "Invitation from the person you are visiting, if any"],
    },
    docsSrc: "https://www.gov.uk/standard-visitor",
    where: T("الطلب أونلاين على gov.uk، ثم موعد البصمات في مركز طلبات التأشيرة البريطانية الذي تختاره أثناء الطلب في بلد إقامتك", "Apply online on gov.uk, then a biometrics appointment at the UK visa application centre you choose during the application in your country of residence"),
    whereUrl: "https://www.gov.uk/standard-visitor",
    early: T("يمكنك التقديم قبل السفر بـ3 أشهر كحد أقصى", "You can apply up to 3 months before you travel"),
    status: table({ s: "visa", n: T("جنسيتك في قائمة من يحتاجون تأشيرة زيارة بريطانية (Visa national list) قبل السفر.", "Your nationality is on the UK visa national list: you need a visit visa before travelling."), src: "https://www.gov.uk/guidance/immigration-rules/immigration-rules-appendix-visitor-visa-national-list" }, {
      [GCC.join(",")]: { s: "eta", n: T("لا تحتاج تأشيرة زيارة، لكن تحتاج تصريح السفر الإلكتروني ETA قبل السفر (20 جنيهاً، يصلح لسنتين أو حتى انتهاء الجواز، وكل زيارة حتى 6 أشهر). تقدّم عليه من تطبيق UK ETA أو موقع gov.uk.", "No visit visa, but you need an Electronic Travel Authorisation (ETA) before travelling (£20, valid 2 years or until your passport expires, each visit up to 6 months). Apply in the UK ETA app or on gov.uk."), src: "https://www.gov.uk/guidance/apply-for-an-electronic-travel-authorisation-eta" },
    }),
  },
  {
    id: "us", slug: "united-states", name: T("أمريكا", "United States"),
    visa: T("تأشيرة الزيارة للسياحة والأعمال (B-1/B-2)", "Visitor visa for tourism and business (B-1/B-2)"),
    fee: T("185 دولاراً رسوم الطلب (غير مستردة)؛ وقانون 2025 أضاف رسوماً للتأشيرة بقيمة 250 دولاراً تُدفع عند الإصدار، وموعد بدء تحصيلها غير واضح في المصادر الرسمية (للتحقق)", "$185 application fee (non-refundable); a 2025 law added a $250 visa integrity fee paid at issuance, and when collection starts is unclear in official sources (to verify)"),
    feeSrc: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html",
    stay: T("يحددها ضابط الحدود عند الدخول", "Set by the border officer on entry"),
    time: T("مدة انتظار مقابلة السفارة تختلف كثيراً حسب المدينة؛ راجع أداة أوقات الانتظار الرسمية", "Interview wait times vary widely by city; check the official wait-times tool"),
    timeSrc: "https://travel.state.gov/content/travel/en/us-visas/visa-information-resources/global-visa-wait-times.html",
    docs: {
      ar: ["استمارة DS-160 أونلاين وصفحة التأكيد", "جواز صالح 6 أشهر بعد مدة الإقامة (إلا إذا أعفت اتفاقية بلدك من ذلك)", "صورة بالمواصفات الأمريكية", "إيصال دفع رسوم الطلب", "ما يثبت ارتباطك ببلدك ونيتك العودة، تعرضه في المقابلة"],
      en: ["Online DS-160 form and its confirmation page", "Passport valid 6 months beyond your stay (unless your country's agreement exempts you)", "Photo meeting US requirements", "Application fee receipt", "Proof of ties to your country and intention to return, shown at the interview"],
    },
    docsSrc: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html",
    where: T("مقابلة شخصية في السفارة أو القنصلية الأمريكية، عادة في بلد إقامتك", "An in-person interview at a US embassy or consulate, usually in your country of residence"),
    whereUrl: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html",
    early: T("احجز المقابلة مبكراً لأن الانتظار قد يطول شهوراً", "Book the interview early; waits can run to months"),
    status: table({ s: "visa", n: T("تحتاج تأشيرة زيارة B-1/B-2 ومقابلة في السفارة الأمريكية.", "You need a B-1/B-2 visitor visa and an interview at a US embassy."), src: "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html" }, {
      qa: { s: "eta", n: T("قطر في برنامج الإعفاء من التأشيرة الأمريكي منذ 2024: زيارة حتى 90 يوماً بتصريح ESTA الإلكتروني وجواز بيومتري وتذكرة عودة أو مغادرة. ويبقى خيار تأشيرة B متاحاً.", "Qatar has been in the US Visa Waiver Program since 2024: visits of up to 90 days with an ESTA authorisation, a biometric passport and a return or onward ticket. A B visa remains an option."), src: "https://cbp.gov/sites/default/files/2024-12/Qatar%20Visa%20Waiver%20Program%2020241122.pdf" },
      "ly,so,sd,sy,ye": { s: "banned", n: T("منذ 1 يناير 2026 أوقف الإعلان الرئاسي 10998 إصدار كل التأشيرات (ومنها الزيارة) لمواطني هذه الدولة، مع استثناءات محدودة جداً (مثل مزدوجي الجنسية بجواز دولة غير مشمولة). تابع أي تغيير في موقع وزارة الخارجية الأمريكية.", "Since 1 January 2026, Presidential Proclamation 10998 has suspended all visas (including visitor visas) for nationals of this country, with very limited exceptions (such as dual nationals travelling on a passport of a non-listed country). Watch the State Department site for changes."), src: "https://www.whitehouse.gov/presidential-actions/2025/12/restricting-and-limiting-the-entry-of-foreign-nationals-to-protect-the-security-of-the-united-states/" },
      ps: { s: "banned", n: T("منذ 1 يناير 2026 أوقف الإعلان الرئاسي 10998 دخول من يسافر بوثيقة سفر صادرة أو مصدّقة من السلطة الفلسطينية. من يحمل جواز دولة أخرى يتبع قواعد تلك الدولة.", "Since 1 January 2026, Presidential Proclamation 10998 has suspended entry for people travelling on documents issued or endorsed by the Palestinian Authority. Holders of another country's passport follow that country's rules."), src: "https://www.whitehouse.gov/presidential-actions/2025/12/restricting-and-limiting-the-entry-of-foreign-nationals-to-protect-the-security-of-the-united-states/" },
      mr: { s: "banned", n: T("موريتانيا في قائمة الإيقاف الجزئي منذ 1 يناير 2026: تأشيرات الزيارة B-1 وB-2 وتأشيرات الدراسة F وM وJ وتأشيرات الهجرة موقوفة، وبعض الأنواع الأخرى ما زالت تصدر.", "Mauritania has been on the partial-suspension list since 1 January 2026: B-1 and B-2 visitor visas, F, M and J student visas and immigrant visas are suspended; some other types are still issued."), src: "https://www.whitehouse.gov/presidential-actions/2025/12/restricting-and-limiting-the-entry-of-foreign-nationals-to-protect-the-security-of-the-united-states/" },
    }),
  },
  {
    id: "ca", slug: "canada", name: T("كندا", "Canada"),
    visa: T("تأشيرة الزائر (Temporary Resident Visa)", "Visitor visa (temporary resident visa)"),
    fee: T("100 دولار كندي للتأشيرة و85 دولاراً كندياً للبصمات؛ وتصريح eTA بـ7 دولارات كندية لمن يحق له", "CAD 100 for the visa and CAD 85 for biometrics; the eTA costs CAD 7 for eligible travellers"),
    feeSrc: "https://ircc.canada.ca/english/information/fees/fees.asp",
    stay: T("حتى 6 أشهر عادة، ويحددها ضابط الحدود", "Usually up to 6 months, set by the border officer"),
    time: T("تختلف حسب البلد الذي تقدّم منه؛ راجع أداة أوقات المعالجة الرسمية", "Varies by the country you apply from; check the official processing-times tool"),
    timeSrc: "https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html",
    docs: {
      ar: ["الطلب أونلاين في حساب IRCC", "جواز صالح", "ما يثبت قدرتك المالية", "ما يثبت ارتباطك ببلدك (عمل، أسرة، ممتلكات)", "خطاب دعوة إن كنت تزور شخصاً", "البصمات في مركز طلبات التأشيرة بعد خطاب الطلب"],
      en: ["Online application in your IRCC account", "Valid passport", "Proof of funds", "Proof of ties to your country (job, family, property)", "Invitation letter if you are visiting someone", "Biometrics at a visa application centre after the request letter"],
    },
    docsSrc: "https://canada.ca/en/immigration-refugees-citizenship/services/visit-canada/visitor-visa",
    where: T("الطلب أونلاين، ثم البصمات في مركز طلبات التأشيرة الكندية (VAC) في بلد إقامتك أو أقرب بلد فيه مركز", "Apply online, then biometrics at a Canada visa application centre (VAC) in your country of residence or the nearest country with one"),
    whereUrl: "https://canada.ca/en/immigration-refugees-citizenship/services/visit-canada/visitor-visa",
    early: T("قدّم مبكراً لأن أوقات المعالجة طويلة في بعض الدول", "Apply early; processing is long in some countries"),
    status: table({ s: "visa", n: T("تحتاج تأشيرة زائر كندية قبل السفر بأي وسيلة.", "You need a Canadian visitor visa before travelling by any means."), src: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html" }, {
      "qa,ae": { s: "eta", n: T("لا تحتاج تأشيرة، لكن تحتاج تصريح السفر الإلكتروني eTA (7 دولارات كندية) إذا سافرت بالطائرة. الدخول براً أو بحراً لا يحتاج eTA. (قطر أُضيفت في 25 نوفمبر 2025.)", "No visa, but you need an eTA (CAD 7) if you fly. Arriving by land or sea needs no eTA. (Qatar was added on 25 November 2025.)"), src: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/entry-requirements-country.html" },
      ma: { s: "cond", n: T("تحتاج تأشيرة عادة، لكن يمكنك طلب eTA بدلاً منها إذا سافرت بالطائرة وكانت معك تأشيرة كندية خلال آخر 10 سنوات أو تأشيرة أمريكية غير هجرة سارية يوم الطلب.", "You normally need a visa, but you can apply for an eTA instead if you fly and have held a Canadian visa in the last 10 years or hold a valid US non-immigrant visa on the day you apply."), src: "https://www.canada.ca/en/immigration-refugees-citizenship/services/visit-canada/eta/eligibility/eta-x.html" },
    }),
  },
  {
    id: "au", slug: "australia", name: T("أستراليا", "Australia"),
    visa: T("تأشيرة الزائر (Subclass 600)، فئة السياحة", "Visitor visa (subclass 600), Tourist stream"),
    fee: T("من 250 دولاراً أسترالياً عند التقديم من خارج أستراليا (من 1 يوليو 2026)", "From AUD 250 when applying from outside Australia (from 1 July 2026)"),
    feeSrc: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600",
    stay: T("حتى 3 أو 6 أو 12 شهراً حسب ما يُمنح", "Up to 3, 6 or 12 months, as granted"),
    time: T("تختلف حسب الطلب؛ راجع أوقات المعالجة في موقع وزارة الشؤون الداخلية", "Varies by application; check processing times on the Home Affairs site"),
    timeSrc: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600",
    docs: {
      ar: ["الطلب أونلاين في ImmiAccount", "جواز صالح", "ما يثبت قدرتك على الإنفاق خلال الزيارة", "ما يثبت أنك زائر حقيقي ستعود (عمل، أسرة، دراسة)", "فحص طبي أو بصمات إذا طُلبت منك"],
      en: ["Online application in ImmiAccount", "Valid passport", "Proof you can support yourself during the visit", "Proof you are a genuine visitor who will return (job, family, studies)", "Health check or biometrics if requested"],
    },
    docsSrc: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600",
    where: T("الطلب أونلاين بالكامل من خارج أستراليا؛ وقد تُطلب البصمات في مركز طلبات التأشيرة الأسترالية", "Fully online from outside Australia; biometrics may be requested at an Australian visa application centre"),
    whereUrl: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600",
    early: T("لا تحجز تذاكر غير قابلة للاسترداد قبل صدور التأشيرة", "Do not book non-refundable travel before the visa is granted"),
    status: table({ s: "visa", n: T("لا تحق لجنسيتك التأشيرة الإلكترونية ETA ولا eVisitor، فتحتاج تأشيرة الزائر (Subclass 600) قبل السفر.", "Your nationality is not eligible for the ETA or eVisitor, so you need the Visitor visa (subclass 600) before travelling."), src: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/visitor-600" }, {}),
  },
  {
    id: "tr", slug: "turkiye", name: T("تركيا", "Türkiye"),
    visa: T("تأشيرة سياحية (ملصقة من السفارة) أو تأشيرة إلكترونية لمن يحق له", "Tourist visa (sticker from the embassy) or an e-Visa where eligible"),
    fee: T("تختلف حسب الجنسية؛ قائمة الرسوم الرسمية لوزارة الخارجية التركية", "Varies by nationality; see the Turkish foreign ministry's official fee list"),
    feeSrc: "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa?level=1",
    stay: T("حسب الجنسية؛ غالباً حتى 90 يوماً في أي 180 يوماً للمعفيين، و30 يوماً بالتأشيرة الإلكترونية المشروطة", "Depends on nationality; often up to 90 days in any 180 for exempt nationals and 30 days on the conditional e-Visa"),
    time: T("التأشيرة الإلكترونية خلال دقائق أونلاين؛ تأشيرة السفارة حسب البعثة", "e-Visa within minutes online; embassy visas depend on the mission"),
    timeSrc: "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa?level=1",
    docs: {
      ar: ["جواز صالح 60 يوماً على الأقل بعد نهاية مدة الإقامة المسموحة", "طلب مسبق على visa.gov.tr لتأشيرة السفارة", "الأوراق التي تحددها السفارة في بلدك (حجز، كشف حساب، خطاب عمل)"],
      en: ["Passport valid at least 60 days beyond the allowed stay", "Pre-application on visa.gov.tr for an embassy visa", "The documents your local embassy lists (booking, bank statement, employment letter)"],
    },
    docsSrc: "https://mfa.gov.tr/visa-information-for-foreigners.en.mfa",
    where: T("التأشيرة الإلكترونية على evisa.gov.tr فقط لمن يحق له؛ وغير ذلك السفارة أو القنصلية التركية أو مركز التأشيرات المعتمد لها بعد طلب مسبق على visa.gov.tr", "The e-Visa only at evisa.gov.tr for eligible travellers; otherwise the Turkish embassy, consulate or its approved visa centre after a pre-application on visa.gov.tr"),
    whereUrl: "https://www.evisa.gov.tr/en/",
    early: T("احذر المواقع غير الرسمية: الموقع الرسمي للتأشيرة الإلكترونية هو evisa.gov.tr فقط", "Beware of unofficial sites: the only official e-Visa site is evisa.gov.tr"),
    status: table({ s: "visa", n: T("تحتاج تأشيرة من السفارة أو القنصلية التركية قبل السفر.", "You need a visa from a Turkish embassy or consulate before travelling."), src: "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa?level=1" }, {
      "sa,ae,kw,bh,om": { s: "free", n: T("معفى من التأشيرة حتى 90 يوماً في أي 180 يوماً.", "Visa-exempt for up to 90 days in any 180 days.") },
      qa: { s: "free", n: T("معفى من التأشيرة للسياحة والعبور حتى 90 يوماً خلال 6 أشهر من أول دخول.", "Visa-exempt for tourism and transit, up to 90 days within 6 months of first entry.") },
      "jo,lb": { s: "free", n: T("معفى من التأشيرة لأغراض السياحة حتى 90 يوماً خلال 6 أشهر من أول دخول؛ أغراض أخرى تحتاج تأشيرة.", "Visa-exempt for tourism, up to 90 days within 6 months of first entry; other purposes need a visa.") },
      "ma,tn": { s: "free", n: T("معفى من التأشيرة حتى 90 يوماً.", "Visa-exempt for up to 90 days.") },
      dz: { s: "cond", n: T("من عمره بين 15 و50 سنة يحتاج تأشيرة؛ ومن هو أقل من 15 أو أكبر من 50 معفى للسياحة حتى 90 يوماً في أي 180 يوماً.", "Ages 15 to 50 need a visa; those under 15 or over 50 are visa-exempt for tourism for up to 90 days in any 180.") },
      iq: { s: "cond", n: T("من عمره بين 15 و50 سنة يحتاج تأشيرة؛ ومن هو أقل من 15 أو أكبر من 50 معفى حتى 90 يوماً في أي 180 يوماً.", "Ages 15 to 50 need a visa; those under 15 or over 50 are visa-exempt for up to 90 days in any 180.") },
      ly: { s: "cond", n: T("من عمره بين 16 و45 سنة يحتاج تأشيرة؛ ومن هو أقل من 16 أو أكبر من 45 معفى للسياحة حتى 90 يوماً في أي 180 يوماً.", "Ages 16 to 45 need a visa; those under 16 or over 45 are visa-exempt for tourism for up to 90 days in any 180.") },
      "eg,ps,ye": { s: "cond", n: T("تحتاج تأشيرة عادة، ويمكن الحصول على تأشيرة إلكترونية لمرة واحدة لمدة 30 يوماً إذا استوفيت الشروط، مثل تأشيرة أو إقامة سارية من شنغن أو أمريكا أو بريطانيا أو أيرلندا؛ راجع شروط السن وشركات الطيران على evisa.gov.tr.", "You normally need a visa, but a single-entry 30-day e-Visa is possible if you meet the conditions, such as a valid Schengen, US, UK or Irish visa or residence permit; check the age and airline conditions on evisa.gov.tr.") },
    }),
  },
  {
    id: "ae", slug: "uae", name: T("الإمارات", "United Arab Emirates"),
    visa: T("تأشيرة زيارة مسبقة (سياحة أو زيارة أقارب)", "Pre-arranged visit visa (tourism or family visit)"),
    fee: T("تختلف حسب نوع التأشيرة ومدتها والجهة التي تقدّم عن طريقها (غير منشور في المصدر كرقم واحد)", "Varies with the visa type, length and the channel you apply through (not published as a single figure)"),
    feeSrc: "https://government.ae/en/information-and-services/visa-and-emirates-id/do-you-need-an-entry-permit-or-a-visa-to-enter-the-uae",
    stay: T("حسب التأشيرة الممنوحة (مثل 30 أو 60 يوماً)", "As granted (for example 30 or 60 days)"),
    time: T("حسب الجهة؛ غالباً أيام قليلة", "Depends on the channel; often a few days"),
    timeSrc: "https://government.ae/en/information-and-services/visa-and-emirates-id/do-you-need-an-entry-permit-or-a-visa-to-enter-the-uae",
    docs: {
      ar: ["جواز صالح 6 أشهر على الأقل من تاريخ الدخول", "صورة شخصية", "كفيل: شركة طيران إماراتية أو فندق أو شركة سياحة، أو قريب مقيم في الإمارات", "حجز العودة والسكن حسب ما تطلبه الجهة"],
      en: ["Passport valid at least 6 months from entry", "Personal photo", "A sponsor: a UAE airline, hotel or tour company, or a relative resident in the UAE", "Return and accommodation booking as the channel asks"],
    },
    docsSrc: "https://government.ae/en/information-and-services/visa-and-emirates-id/do-you-need-an-entry-permit-or-a-visa-to-enter-the-uae",
    where: T("عن طريق كفيل داخل الإمارات: شركات الطيران الإماراتية أو الفنادق وشركات السياحة، أو قريب مقيم، عبر الهيئة الاتحادية للهوية والجنسية (ICP) أو إقامة دبي (GDRFA)", "Through a sponsor in the UAE: UAE airlines, hotels and tour companies, or a resident relative, via the Federal Authority for Identity and Citizenship (ICP) or Dubai's GDRFA"),
    whereUrl: "https://government.ae/en/information-and-services/visa-and-emirates-id/do-you-need-an-entry-permit-or-a-visa-to-enter-the-uae",
    early: T("قوائم الإعفاء تتغير، وموقع الحكومة ينصح بالتأكد من السفارة الإماراتية قبل السفر", "Exemption lists change; the government site advises checking with the UAE embassy before travelling"),
    status: table({ s: "visa", n: T("تحتاج تأشيرة زيارة مرتّبة مسبقاً قبل السفر (حسب قائمة وزارة الخارجية الإماراتية).", "You need a pre-arranged visit visa before travelling (per the UAE foreign ministry list)."), src: "https://www.mofa.gov.ae/en/visa-exemptions-for-non-citizen" }, {
      "sa,kw,qa,bh,om": { s: "free", n: T("مواطنو دول مجلس التعاون لا يحتاجون تأشيرة ولا كفيلاً؛ تدخل بجواز سفرك أو بطاقة الهوية الوطنية.", "GCC citizens need no visa or sponsor; you enter with your passport or national ID card."), src: "https://government.ae/en/information-and-services/visa-and-emirates-id/do-you-need-an-entry-permit-or-a-visa-to-enter-the-uae" },
      ae: { s: "free", n: T("هذه دولتك.", "This is your own country."), src: "" },
    }),
  },
];
export const DEST_BY_SLUG = Object.fromEntries(DEST.map((d) => [d.slug, d]));
export const DEST_SLUGS = DEST.map((d) => d.slug);

// Schengen rows for the exempt UAE row carry their own source; other rows fall back to the destination's.
export function statusFor(d, o) {
  const s = d.status[o];
  return { ...s, src: s.src === undefined ? d.status[o].src : s.src };
}

export const VTEXT = {
  ar: {
    brand: "بوابة التأشيرات والهجرة",
    title: "هل أحتاج تأشيرة؟ تأشيرات الزيارة لأشهر 10 وجهات",
    lead: "اختر جنسيتك والدولة التي تريد زيارتها لتعرف هل تحتاج تأشيرة أو تصريحاً إلكترونياً أو تسافر بدونها، وكم الرسوم، وأين تقدّم. كل المعلومات من المواقع الحكومية الرسمية.",
    toolTitle: "أي تأشيرة أحتاج؟",
    nat: "جنسيتك", dest: "وجهتك", pick: "اختر", show: "اعرض",
    result: (n, d) => `حامل جواز ${n} إلى ${d}`,
    fee: "الرسوم", stay: "مدة الإقامة", time: "مدة المعالجة", where: "أين تقدّم", docs: "الأوراق الأساسية", early: "متى تقدّم", visa: "نوع التأشيرة",
    full: "كل التفاصيل عن", src: "المصدر الرسمي", destinations: "الوجهات", allNat: "حسب الجنسية", natCol: "الجنسية", stCol: "ماذا تحتاج",
    reviewed: (d) => `آخر مراجعة: ${d}`,
    disclaimer: "معلومات عامة من المصادر الرسمية وليست استشارة قانونية. القرار النهائي دائماً للسفارة وضابط الحدود، والقواعد قد تتغير؛ راجع المصدر الرسمي قبل السفر. هذه الصفحات لحاملي الجوازات العادية في الزيارات القصيرة.",
    schengenNote: "تأشيرة شنغن واحدة تصلح لكل دول شنغن؛ تقدّم لدى الدولة التي ستقضي فيها أطول مدة، أو أول دولة تدخلها إذا تساوت المدد.",
    check: "للتحقق", home: "بوابة السفر", other: "English", soonMore: "قريباً في هذا القسم: الهجرة والإقامة الدائمة وتأشيرات عمل أخرى.",
    studyLink: "تبحث عن تأشيرة الدراسة؟", studyGo: "بوابة الدراسة",
    metaHub: "هل أحتاج تأشيرة؟ تأشيرات الزيارة للجوازات العربية | بوابة السفر",
    metaDest: (d) => `تأشيرة زيارة ${d} للجوازات العربية: الرسوم والأوراق وأين تقدّم | بوابة السفر`,
    descDest: (d) => `هل تحتاج تأشيرة لزيارة ${d}؟ الحالة لكل جنسية عربية، ونوع التأشيرة والرسوم ومدة المعالجة والأوراق وأين تقدّم، من المصادر الرسمية.`,
  },
  en: {
    brand: "Visas and immigration",
    title: "Do I need a visa? Visit visas for 10 top destinations",
    lead: "Choose your nationality and the country you want to visit to see whether you need a visa, an electronic authorisation or nothing at all, what it costs and where to apply. Everything comes from official government websites.",
    toolTitle: "Which visa do I need?",
    nat: "Your nationality", dest: "Destination", pick: "Choose", show: "Show",
    result: (n, d) => `${n} passport to ${d}`,
    fee: "Fees", stay: "Length of stay", time: "Processing time", where: "Where to apply", docs: "Main documents", early: "When to apply", visa: "Visa type",
    full: "Full details for", src: "Official source", destinations: "Destinations", allNat: "By nationality", natCol: "Nationality", stCol: "What you need",
    reviewed: (d) => `Last reviewed: ${d}`,
    disclaimer: "General information from official sources, not legal advice. The embassy and the border officer always decide, and rules change; check the official source before travelling. These pages are for ordinary passport holders on short visits.",
    schengenNote: "One Schengen visa covers all Schengen countries; apply to the country where you will spend the longest time, or the first one you enter if the stays are equal.",
    check: "to verify", home: "Bawabat AlSafar", other: "العربية", soonMore: "Coming to this section: immigration, permanent residence and more work visas.",
    studyLink: "Looking for a student visa?", studyGo: "Bawabat AlDirasa",
    metaHub: "Do I need a visa? Visit visas for Arab passports | Bawabat AlSafar",
    metaDest: (d) => `${d} visit visa for Arab passports: fees, documents and where to apply | Bawabat AlSafar`,
    descDest: (d) => `Do you need a visa to visit ${d}? The status for every Arab nationality, plus visa type, fees, processing time, documents and where to apply, from official sources.`,
  },
};
