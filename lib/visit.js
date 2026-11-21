// Bawabat AlSafar, visas section v1 (20 Nov 2026): visit visas to 10 destinations for the 22 Arab nationalities.
// Official sources only, checked 20 Nov 2026. STATUS = what an ordinary-passport holder needs for a short visit
// (tourism / family / business). check: true = to verify ("للتحقق").
export const VISIT_REVIEWED = "2026-11-21";

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
  {
    id: "my", slug: "malaysia", name: T("ماليزيا", "Malaysia"),
    visa: T("دخول بدون تأشيرة لمعظم الجنسيات العربية؛ وتأشيرة إلكترونية (eVISA) لمن يحتاج تأشيرة", "Visa-free entry for most Arab nationalities; an eVISA for those who need a visa"),
    fee: T("لا رسوم للمعفيين؛ رسوم التأشيرة الإلكترونية تختلف حسب الجنسية وتظهر في بوابة eVISA", "No fee for exempt travellers; the eVISA fee depends on nationality and is shown on the eVISA portal"),
    feeSrc: "https://malaysiavisa.imi.gov.my/evisa/evisa.jsp",
    stay: T("يحدده ضابط الهجرة عند الدخول حسب جنسيتك (مثلاً 3 أشهر للأردن و90 يوماً للإمارات)", "Set by the immigration officer on entry according to nationality (for example 3 months for Jordan and 90 days for the UAE)"),
    time: T("لا انتظار للمعفيين؛ التأشيرة الإلكترونية حسب بوابة eVISA", "No wait for exempt travellers; the eVISA as stated on the eVISA portal"),
    timeSrc: "https://www.imi.gov.my/index.php/en/main-services/visa/visa-requirement-by-country/",
    docs: {
      ar: ["جواز صالح 6 أشهر على الأقل", "تذكرة عودة أو مغادرة", "ما يكفي من المال للإقامة", "بطاقة الوصول الرقمية MDAC أونلاين خلال 3 أيام قبل الوصول"],
      en: ["Passport valid at least 6 months", "Return or onward ticket", "Enough money for the stay", "The Malaysia Digital Arrival Card (MDAC) online within 3 days before arrival"],
    },
    docsSrc: "https://www.kln.gov.my/web/are_abu-dhabi/requirement_foreigner",
    where: T("المعفيون يدخلون مباشرة؛ ومن يحتاج تأشيرة يقدّم على بوابة eVISA الرسمية أو في سفارة ماليزيا", "Exempt travellers just enter; those who need a visa apply on the official eVISA portal or at a Malaysian embassy"),
    whereUrl: "https://malaysiavisa.imi.gov.my/evisa/evisa.jsp",
    early: T("املأ بطاقة الوصول الرقمية MDAC قبل 3 أيام من الوصول على موقع إدارة الهجرة الرسمي فقط", "Fill in the MDAC within the 3 days before arrival, only on the Immigration Department's official site"),
    status: table({ s: "free", n: T("جنسيتك ليست في قائمة الدول التي تحتاج تأشيرة لدخول ماليزيا على موقع إدارة الهجرة، فتدخل بدون تأشيرة للزيارة؛ ومدة الإقامة يحددها ضابط الهجرة (للتحقق).", "Your nationality is not on the Immigration Department's list of countries that need a visa for Malaysia, so you can visit without a visa; the immigration officer sets the length of stay (to verify)."), src: "https://www.imi.gov.my/index.php/en/main-services/visa/visa-requirement-by-country/" }, {
      jo: { s: "free", n: T("الأردنيون يدخلون بدون تأشيرة حتى 3 أشهر، حسب سفارة ماليزيا في عمّان.", "Jordanians enter without a visa for up to 3 months, according to the Malaysian Embassy in Amman."), src: "https://www.kln.gov.my/web/jor_amman/requirement_foreigner" },
      ae: { s: "free", n: T("الإماراتيون لا يحتاجون تأشيرة لزيارة لا تزيد عن 90 يوماً، حسب سفارة ماليزيا في أبوظبي.", "UAE nationals need no visa for a social visit of up to 90 days, according to the Malaysian Embassy in Abu Dhabi."), src: "https://www.kln.gov.my/web/are_abu-dhabi/requirement_foreigner" },
      dj: { s: "visa", n: T("جيبوتي في قائمة الدول التي تحتاج تأشيرة لدخول ماليزيا، والدخول مسموح جواً فقط؛ قدّم على التأشيرة الإلكترونية eVISA أو في سفارة ماليزيا.", "Djibouti is on the list of countries that need a visa for Malaysia, and entry is by air only; apply for the eVISA or at a Malaysian embassy."), src: "https://www.imi.gov.my/index.php/en/main-services/visa/visa-requirement-by-country/" },
    }),
  },
  {
    id: "jp", slug: "japan", name: T("اليابان", "Japan"),
    visa: T("تأشيرة إقامة قصيرة (سياحة أو زيارة)، أو إعفاء لبعض الجنسيات", "Short-term stay visa (tourism or visit), or an exemption for some nationalities"),
    fee: T("تعلنها سفارة اليابان في بلدك وتُدفع بالعملة المحلية (غير منشور في المصدر كرقم واحد)", "Set by the Japanese embassy in your country and paid in local currency (not published as a single figure)"),
    feeSrc: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
    stay: T("حتى 90 يوماً للإقامة القصيرة؛ وقطر 30 يوماً بالإعفاء", "Up to 90 days for a short-term stay; 30 days for Qatar under the exemption"),
    time: T("تختلف حسب السفارة؛ التأشيرة الإلكترونية تُعرض على الهاتف عند الوصول", "Depends on the embassy; the eVISA is shown on your phone on arrival"),
    timeSrc: "https://www.mofa.go.jp/j_info/visit/visa/visaonline.html",
    docs: {
      ar: ["جواز صالح واستمارة طلب التأشيرة وصورة", "حجز الطيران وبرنامج الرحلة", "ما يثبت قدرتك على الإنفاق (كشف حساب)", "أوراق أخرى تحددها سفارة اليابان في بلدك"],
      en: ["Valid passport, visa application form and a photo", "Flight booking and itinerary", "Proof you can pay for the trip (bank statement)", "Other documents your local Japanese embassy lists"],
    },
    docsSrc: "https://www.mofa.go.jp/j_info/visit/visa/index.html",
    where: T("سفارة اليابان أو قنصليتها التي تغطي مكان إقامتك؛ ومن يقيم في السعودية يقدّم للسياحة على JAPAN eVISA أونلاين", "The Japanese embassy or consulate covering where you live; residents of Saudi Arabia apply for tourism online through JAPAN eVISA"),
    whereUrl: "https://www.mofa.go.jp/j_info/visit/visa/visaonline.html",
    early: T("التأشيرة الإلكترونية للسياحة فقط ولدخول واحد، وتُعرض من موقعها على هاتفك في المطار (لا تُقبل صورة أو نسخة مطبوعة)", "The eVISA is for tourism only and a single entry, shown from its website on your phone at the airport (no screenshot or printout)"),
    status: table({ s: "visa", n: T("جنسيتك ليست في قائمة الإعفاء اليابانية، فتحتاج تأشيرة إقامة قصيرة من سفارة اليابان قبل السفر.", "Your nationality is not on Japan's exemption list, so you need a short-term stay visa from a Japanese embassy before travelling."), src: "https://www.mofa.go.jp/j_info/visit/visa/short/novisa.html" }, {
      ae: { s: "free", n: T("الإماراتيون معفون من التأشيرة حتى 90 يوماً إذا كان معهم جواز إلكتروني بمعيار الإيكاو؛ ومن ليس معه جواز إلكتروني يحتاج تأشيرة.", "UAE nationals are visa-exempt for up to 90 days with an ICAO-standard ePassport; without one you need a visa.") },
      qa: { s: "cond", n: T("القطريون معفون حتى 30 يوماً بشرط تسجيل الجواز الإلكتروني مسبقاً لدى سفارة أو قنصلية يابانية (التسجيل صالح 3 سنوات أو حتى انتهاء الجواز).", "Qatari nationals are exempt for up to 30 days if they register their ePassport in advance with a Japanese embassy or consulate (valid 3 years or until the passport expires).") },
      tn: { s: "free", n: T("التونسيون معفون من التأشيرة للإقامة القصيرة حتى 90 يوماً.", "Tunisians are visa-exempt for short stays of up to 90 days.") },
      sa: { s: "visa", n: T("تحتاج تأشيرة، ويمكنك التقديم للسياحة أونلاين على JAPAN eVISA إذا كنت تقيم في السعودية؛ وغير السياحة من السفارة.", "You need a visa; for tourism you can apply online through JAPAN eVISA if you live in Saudi Arabia, otherwise at the embassy."), src: "https://www.mofa.go.jp/j_info/visit/visa/visaonline.html" },
    }),
  },
  {
    id: "kr", slug: "south-korea", name: T("كوريا الجنوبية", "South Korea"),
    visa: T("تصريح السفر الإلكتروني K-ETA للمعفيين، أو تأشيرة سياحية (C-3) من السفارة", "The K-ETA travel authorisation for exempt nationals, or a tourist visa (C-3) from the embassy"),
    fee: T("تصريح K-ETA بـ10,000 وون (مع رسوم إضافية)؛ التأشيرة 40 دولاراً لدخول واحد حتى 90 يوماً، و70 لدخولين، و90 للمتعدد", "K-ETA KRW 10,000 (plus extra fees); a visa US$40 for one entry up to 90 days, US$70 double, US$90 multiple"),
    feeSrc: "https://overseas.mofa.go.kr/om-en/wpge/m_11051/contents.do",
    stay: T("حسب الجنسية: 30 أو 90 يوماً للمعفيين، وحسب التأشيرة لغيرهم", "By nationality: 30 or 90 days for exempt nationals, as granted on the visa for others"),
    time: T("قدّم على K-ETA قبل 24 ساعة على الأقل من السفر؛ التأشيرة حسب السفارة", "Apply for the K-ETA at least 24 hours before departure; visas depend on the embassy"),
    timeSrc: "https://www.k-eta.go.kr/portal/apply/index.do",
    docs: {
      ar: ["جواز صالح", "طلب K-ETA أونلاين (للمعفيين) أو استمارة التأشيرة وصورة", "حجز العودة والسكن", "كشف حساب أو ما يثبت الإنفاق وأوراق أخرى تحددها السفارة", "بطاقة الوصول الإلكترونية خلال 3 أيام قبل الوصول لمن لا يحمل K-ETA"],
      en: ["Valid passport", "Online K-ETA application (exempt nationals) or the visa form and a photo", "Return and accommodation booking", "Bank statement or other proof of funds and any documents the embassy lists", "The e-Arrival card within 3 days before arrival if you have no K-ETA"],
    },
    docsSrc: "https://overseas.mofa.go.kr/bh-en/wpge/m_10942/contents.do",
    where: T("K-ETA على الموقع الرسمي k-eta.go.kr أو تطبيقه فقط؛ والتأشيرة من سفارة كوريا أو قنصليتها في بلدك", "The K-ETA only on the official k-eta.go.kr site or its app; the visa from the Korean embassy or consulate in your country"),
    whereUrl: "https://www.k-eta.go.kr/portal/apply/index.do",
    early: T("إعفاء مؤقت من K-ETA لبعض الجنسيات حتى 31 ديسمبر 2026؛ اختر جنسيتك في موقع K-ETA لترى رسالة الإعفاء إن كانت تشملك", "A temporary K-ETA exemption for some nationalities runs until 31 December 2026; pick your nationality on the K-ETA site to see whether the exemption message applies to you"),
    status: table({ s: "visa", n: T("جنسيتك ليست في قائمة الدول التي يحق لها K-ETA، فتحتاج تأشيرة من سفارة كوريا قبل السفر.", "Your nationality is not on the K-ETA list, so you need a visa from a Korean embassy before travelling."), src: "https://overseas.mofa.go.kr/bh-en/wpge/m_10942/contents.do" }, {
      "ae,qa,kw": { s: "eta", n: T("تدخل بدون تأشيرة حتى 90 يوماً، مع تصريح K-ETA قبل السفر (10,000 وون، صالح سنتين)، إلا إذا ظهرت لجنسيتك رسالة الإعفاء المؤقت حتى 31 ديسمبر 2026 (للتحقق).", "Visa-free for up to 90 days with a K-ETA before travelling (KRW 10,000, valid 2 years), unless your nationality shows the temporary exemption message until 31 December 2026 (to verify)."), src: "https://www.k-eta.go.kr/portal/apply/index.do" },
      "sa,om,bh": { s: "eta", n: T("تدخل بدون تأشيرة حتى 30 يوماً، مع تصريح K-ETA قبل السفر (10,000 وون، صالح سنتين)، إلا إذا ظهرت لجنسيتك رسالة الإعفاء المؤقت حتى 31 ديسمبر 2026 (للتحقق).", "Visa-free for up to 30 days with a K-ETA before travelling (KRW 10,000, valid 2 years), unless your nationality shows the temporary exemption message until 31 December 2026 (to verify)."), src: "https://www.k-eta.go.kr/portal/apply/index.do" },
      ma: { s: "eta", n: T("المغاربة يدخلون بدون تأشيرة حتى 90 يوماً باتفاقية إعفاء، مع تصريح K-ETA قبل السفر (10,000 وون).", "Moroccans enter visa-free for up to 90 days under a waiver agreement, with a K-ETA before travelling (KRW 10,000)."), src: "https://www.k-eta.go.kr/portal/apply/index.do" },
      tn: { s: "eta", n: T("التونسيون يدخلون بدون تأشيرة حتى 30 يوماً باتفاقية إعفاء، مع تصريح K-ETA قبل السفر (10,000 وون).", "Tunisians enter visa-free for up to 30 days under a waiver agreement, with a K-ETA before travelling (KRW 10,000)."), src: "https://www.k-eta.go.kr/portal/apply/index.do" },
    }),
  },
  {
    id: "ge", slug: "georgia", name: T("جورجيا", "Georgia"),
    visa: T("دخول بدون تأشيرة حتى سنة لجنسيات كثيرة، أو تأشيرة إلكترونية أو من السفارة", "Visa-free for up to a year for many nationalities, or an e-Visa or embassy visa"),
    fee: T("التأشيرة الإلكترونية 20 دولاراً + 2% رسوم خدمة؛ وتأشيرة السفارة 20 دولاراً", "e-Visa US$20 + 2% service fee; embassy visa US$20"),
    feeSrc: "https://evisa.gov.ge/GeoVisa/en/Home/FAQ",
    stay: T("سنة كاملة للمعفيين؛ وحسب التأشيرة لغيرهم (30 أو 90 يوماً)", "A full year for exempt nationals; as granted for others (30 or 90 days)"),
    time: T("التأشيرة الإلكترونية خلال 5 أيام عمل عادة", "The e-Visa usually within 5 working days"),
    timeSrc: "https://evisa.gov.ge/GeoVisa/en/Home/FAQ",
    docs: {
      ar: ["جواز صالح", "تأمين سفر", "ما يثبت القدرة المالية", "حجز السكن والعودة (لطالب التأشيرة)"],
      en: ["Valid passport", "Travel insurance", "Proof of funds", "Accommodation and return booking (visa applicants)"],
    },
    docsSrc: "https://evisa.gov.ge/GeoVisa/en/Home/FAQ",
    where: T("التأشيرة الإلكترونية على evisa.gov.ge فقط (الموقع يخبرك إن كانت جنسيتك مؤهلة)؛ وغير ذلك سفارة جورجيا المعتمدة لبلدك", "The e-Visa only on evisa.gov.ge (it tells you whether your nationality qualifies); otherwise the Georgian embassy accredited to your country"),
    whereUrl: "https://geoconsul.gov.ge/en/entering-georgia",
    early: T("من يحمل تأشيرة أو إقامة سارية (ملصقة في الجواز) من دول في القائمة الجورجية يمكنه الدخول بها بشروط؛ راجع القائمة والشروط على geoconsul.gov.ge", "Holders of a valid visa or residence permit (a sticker in the passport) from countries on Georgia's list may enter on it under conditions; check the list and conditions on geoconsul.gov.ge"),
    status: table({ s: "visa", n: T("تحتاج تأشيرة جورجية: جرّب التأشيرة الإلكترونية على evisa.gov.ge (تظهر أهلية جنسيتك عند اختيارها)، أو قدّم في سفارة جورجيا؛ ويمكن الدخول بتأشيرة أو إقامة سارية من دول القائمة الجورجية حسب الشروط (للتحقق).", "You need a Georgian visa: try the e-Visa on evisa.gov.ge (it shows whether your nationality qualifies) or apply at a Georgian embassy; entry on a valid visa or residence permit of a listed country is possible under conditions (to verify)."), src: "https://geoconsul.gov.ge/en/entering-georgia" }, {
      [GCC.join(",")]: { s: "free", n: T("تدخل بدون تأشيرة وتقيم حتى سنة كاملة (قائمة الإعفاء بقرار الحكومة الجورجية رقم 255).", "Visa-free entry and stay for up to a full year (Georgian government ordinance No. 255 list)."), src: "https://www.mofa.gov.ae/en/Missions/Tbilisi/UAE-Relationships/Visit-Country" },
      "jo,lb": { s: "free", n: T("تدخل بدون تأشيرة وتقيم حتى سنة كاملة، حسب القرار الحكومي رقم 255 (سفارة جورجيا في الأردن).", "Visa-free entry and stay for up to a full year under Ordinance No. 255 (Georgian Embassy in Jordan)."), src: "https://jordan.mfa.gov.ge/visa-information" },
    }),
  },
  {
    id: "az", slug: "azerbaijan", name: T("أذربيجان", "Azerbaijan"),
    visa: T("تأشيرة إلكترونية (ASAN Visa) لمعظم الجنسيات، أو دخول بدون تأشيرة لبعضها", "An electronic visa (ASAN Visa) for most nationalities, or visa-free entry for some"),
    fee: T("التأشيرة الإلكترونية: 20 دولاراً رسوم حكومية (مع رسوم خدمة)", "e-Visa: US$20 state fee (plus a service fee)"),
    feeSrc: "https://canberra.mfa.gov.az/en/category/asan-visa-e-visa",
    stay: T("حتى 30 يوماً بالتأشيرة الإلكترونية؛ وحسب الاتفاق للمعفيين", "Up to 30 days on the e-Visa; per the agreement for exempt nationals"),
    time: T("3 أيام عمل، أو 3 ساعات بالخدمة العاجلة", "3 working days, or 3 hours with the urgent service"),
    timeSrc: "https://canberra.mfa.gov.az/en/category/asan-visa-e-visa",
    docs: {
      ar: ["جواز صالح", "طلب التأشيرة الإلكترونية على evisa.gov.az والدفع ببطاقة", "حجز السكن والعودة"],
      en: ["Valid passport", "The e-Visa application on evisa.gov.az, paid by card", "Accommodation and return booking"],
    },
    docsSrc: "https://canberra.mfa.gov.az/en/category/asan-visa-e-visa",
    where: T("التأشيرة الإلكترونية على evisa.gov.az فقط؛ ومن ليست جنسيته في قائمتها يقدّم في سفارة أذربيجان", "The e-Visa only on evisa.gov.az; nationalities not on its list apply at an Azerbaijani embassy"),
    whereUrl: "https://evisa.gov.az/en/",
    early: T("احذر المواقع غير الرسمية: الموقع الرسمي هو evisa.gov.az", "Beware of unofficial sites: the official one is evisa.gov.az"),
    status: table({ s: "visa", n: T("جنسيتك ليست في قائمة التأشيرة الإلكترونية التي نشرتها سفارات أذربيجان، فتحتاج تأشيرة من سفارة أذربيجان (للتحقق: جرّب اختيار جنسيتك على evisa.gov.az).", "Your nationality is not on the e-Visa list published by Azerbaijani embassies, so you need a visa from an Azerbaijani embassy (to verify: try your nationality on evisa.gov.az)."), src: "https://tallinn.mfa.gov.az/en/category/asan-visa-e-visa" }, {
      ae: { s: "free", n: T("الإماراتيون يدخلون بدون تأشيرة حتى 90 يوماً باتفاقية إعفاء متبادل.", "UAE nationals enter visa-free for up to 90 days under a mutual waiver."), src: "https://mfa.gov.az/en/category/visa/visa-free-countries" },
      ma: { s: "free", n: T("المغاربة يدخلون بدون تأشيرة حتى 90 يوماً باتفاقية إعفاء متبادل.", "Moroccans enter visa-free for up to 90 days under a mutual waiver."), src: "https://mfa.gov.az/en/category/visa/visa-free-countries" },
      qa: { s: "free", n: T("القطريون يدخلون بدون تأشيرة حتى 30 يوماً؛ ومن يأتي للدراسة أو العمل يحتاج تأشيرة مسبقة.", "Qatari nationals enter visa-free for up to 30 days; those coming to study or work need a visa in advance."), src: "https://mfa.gov.az/en/category/visa/visa-free-countries" },
      "sa,om,kw,bh": { s: "free", n: T("من 15 فبراير 2026 حتى 15 فبراير 2027: دخول بدون تأشيرة حتى 3 مرات و30 يوماً في كل زيارة للسياحة؛ وغير ذلك أو مدة أطول يحتاج تأشيرة.", "From 15 February 2026 to 15 February 2027: visa-free entry up to 3 times, 30 days per visit, for tourism; other purposes or longer stays need a visa."), src: "https://migration.gov.az/en/news_detail/16753" },
      "eg,dz,jo,lb": { s: "visa", n: T("تحتاج تأشيرة، وجنسيتك في قائمة التأشيرة الإلكترونية ASAN Visa: 20 دولاراً، خلال 3 أيام عمل، وإقامة حتى 30 يوماً (للتحقق في evisa.gov.az).", "You need a visa, and your nationality is on the ASAN Visa e-Visa list: US$20, within 3 working days, for up to 30 days (verify on evisa.gov.az)."), src: "https://tallinn.mfa.gov.az/en/category/asan-visa-e-visa" },
    }),
  },
  {
    id: "mv", slug: "maldives", name: T("جزر المالديف", "Maldives"),
    visa: T("تأشيرة سياحية مجانية عند الوصول لكل الجنسيات", "A free tourist visa on arrival for all nationalities"),
    fee: T("مجاناً عند الوصول", "Free on arrival"),
    feeSrc: "https://www.maldiveshighcommission.uk/index.php/maldives/maldives-visa-and-passport-information",
    stay: T("حتى 30 يوماً يقررها ضابط الهجرة، ويمكن التمديد 60 يوماً إضافية من إدارة الهجرة قبل انتهائها", "Up to 30 days at the immigration officer's discretion; it can be extended by 60 more days at the Immigration Department before it ends"),
    time: T("عند الوصول إلى المطار", "On arrival at the airport"),
    timeSrc: "https://www.maldiveshighcommission.uk/index.php/maldives/maldives-visa-and-passport-information",
    docs: {
      ar: ["جواز بشريط قابل للقراءة آلياً وصالح شهراً على الأقل", "تذكرة عودة أو مغادرة خلال 30 يوماً", "حجز فندق أو منتجع مؤكد، أو ما يثبت 100 دولار + 50 دولاراً عن كل يوم", "إقرار المسافر الإلكتروني (IMUGA) قبل الوصول (للتحقق من المهلة)"],
      en: ["Machine-readable passport valid at least one month", "Return or onward ticket within 30 days", "Confirmed hotel or resort booking, or proof of US$100 plus US$50 a day", "The online traveller declaration (IMUGA) before arrival (timing to verify)"],
    },
    docsSrc: "https://www.maldiveshighcommission.uk/index.php/maldives/maldives-visa-and-passport-information",
    where: T("لا تقديم مسبق؛ التأشيرة تُمنح في مطار ماليه الدولي", "No advance application; the visa is given at Malé International Airport"),
    whereUrl: "https://www.maldiveshighcommission.uk/index.php/maldives/maldives-visa-and-passport-information",
    early: T("العمل بأجر أو بدون أجر ممنوع بالتأشيرة السياحية", "Paid or unpaid work is not allowed on the tourist visa"),
    status: table({ s: "free", n: T("تحصل على تأشيرة سياحية مجانية عند الوصول لمدة حتى 30 يوماً إذا استوفيت الشروط (جواز وتذكرة وحجز أو مال كافٍ).", "You get a free tourist visa on arrival for up to 30 days if you meet the conditions (passport, ticket, booking or enough money)."), src: "https://www.maldiveshighcommission.uk/index.php/maldives/maldives-visa-and-passport-information" }, {}),
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
    title: "التأشيرات: زيارة ودراسة وعمل وإقامة",
    visitTitle: "تأشيرات الزيارة لأشهر 16 وجهة",
    studyTitle: "تأشيرات الدراسة",
    studyCard: (n) => `خطوات تأشيرة الدراسة إلى ${n} دولة: أين تقدّم من بلدك، والأوراق، والرسوم، وإثبات المال`,
    lead: "أجب عن ثلاثة أسئلة: سبب السفر، وجنسيتك، ووجهتك. نخبرك أي تأشيرة تحتاج، وكم الرسوم، وأين تقدّم، سواء كانت زيارة أو دراسة أو بحثاً عن عمل أو عملاً عن بُعد. كل المعلومات من المواقع الحكومية الرسمية.",
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
    metaHub: "أي تأشيرة أحتاج؟ تأشيرات الزيارة والدراسة والعمل للجوازات العربية | بوابة السفر",
    metaDest: (d) => `تأشيرة زيارة ${d} للجوازات العربية: الرسوم والأوراق وأين تقدّم | بوابة السفر`,
    descDest: (d) => `هل تحتاج تأشيرة لزيارة ${d}؟ الحالة لكل جنسية عربية، ونوع التأشيرة والرسوم ومدة المعالجة والأوراق وأين تقدّم، من المصادر الرسمية.`,
  },
  en: {
    brand: "Visas and immigration",
    title: "Visas: visit, study, work and residence",
    visitTitle: "Visit visas for 16 top destinations",
    studyTitle: "Student visas",
    studyCard: (n) => `Student visa steps for ${n} countries: where to apply from your country, documents, fees and proof of funds`,
    lead: "Answer three questions: why you are travelling, your nationality and your destination. We tell you which visa you need, what it costs and where to apply, whether it is a visit, study, a job search or remote work. Everything comes from official government websites.",
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
    metaHub: "Which visa do I need? Visit, study and work visas for Arab passports | Bawabat AlSafar",
    metaDest: (d) => `${d} visit visa for Arab passports: fees, documents and where to apply | Bawabat AlSafar`,
    descDest: (d) => `Do you need a visa to visit ${d}? The status for every Arab nationality, plus visa type, fees, processing time, documents and where to apply, from official sources.`,
  },
};
