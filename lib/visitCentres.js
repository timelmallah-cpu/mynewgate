// Where to apply for a visit visa from Egypt, Saudi Arabia, Morocco, Jordan and Algeria (residents), per destination.
// Official destination or provider pages, checked 21 Nov 2026. check: true = to verify ("للتحقق"). Only combinations
// where the nationality needs a visa or an e-authorisation are listed; visa-free pairs need nothing.
export const CENTRE_ORIGINS = ["eg", "sa", "ma", "jo", "dz"];
export const CENTRES_REVIEWED = "2026-11-21";
const T = (ar, en, src, check = false) => ({ ar, en, src, check });

const FV = (c) => `https://france-visas.gouv.fr/${c}`;
const CA = "https://www.canada.ca/en/immigration-refugees-citizenship/services/biometrics/where-to-give.html";
const UK = "https://www.gov.uk/find-a-visa-application-centre";
const US = "https://travel.state.gov/content/travel/en/us-visas/tourism-visit/visitor.html";
const AU = "https://immi.homeaffairs.gov.au/help-support/meeting-our-requirements/biometrics/australian-immi-app";
const JP = "https://www.mofa.go.jp/j_info/visit/visa/index.html";
const KR = "https://overseas.mofa.go.kr/bh-en/wpge/m_10942/contents.do";
const GE = "https://evisa.gov.ge/GeoVisa/en/Home/FAQ";
const AZ = "https://canberra.mfa.gov.az/en/category/asan-visa-e-visa";

export const CENTRES = {
  fr: {
    eg: T("مراكز TLScontact في القاهرة (الشيخ زايد) والإسكندرية والغردقة، بعد ملء الطلب على France-Visas؛ ويمكن التقديم مباشرة في القنصلية العامة الفرنسية في القاهرة بموعد.", "TLScontact centres in Cairo (Sheikh Zayed), Alexandria and Hurghada, after filling in France-Visas; you can also apply directly at the French Consulate General in Cairo by appointment.", FV("egypte")),
    sa: T("مراكز VFS Global في الرياض وجدة والخبر (أي مركز تختاره)، أو مباشرة في السفارة الفرنسية بالرياض أو القنصلية في جدة.", "VFS Global centres in Riyadh, Jeddah and Al Khobar (any of them), or directly at the French Embassy in Riyadh or the Consulate in Jeddah.", FV("arabie-saoudite")),
    ma: T("مراكز TLScontact في أكادير والدار البيضاء وفاس ومراكش ووجدة والرباط وطنجة؛ والقرار للقنصليتين العامتين في الدار البيضاء والرباط.", "TLScontact centres in Agadir, Casablanca, Fès, Marrakech, Oujda, Rabat and Tangier; the Consulates General in Casablanca and Rabat decide.", FV("maroc")),
    jo: T("مركز TLScontact في عمّان، والقرار لقسم التأشيرات في السفارة الفرنسية.", "The TLScontact centre in Amman; the French Embassy's visa section decides.", FV("jordanie")),
    dz: T("مراكز Capago في الجزائر العاصمة ووهران وعنابة وقسنطينة حسب دائرتك القنصلية (منذ 8 أبريل 2025).", "Capago centres in Algiers, Oran, Annaba and Constantine according to your consular district (since 8 April 2025).", FV("algerie")),
  },
  de: {
    eg: T("مراكز TLScontact في القاهرة والإسكندرية والغردقة؛ السفارة الألمانية في القاهرة تقرر.", "TLScontact centres in Cairo, Alexandria and Hurghada; the German Embassy in Cairo decides.", "https://kairo.diplo.de/resource/blob/1667152/b1af5766c4f874fc3f7a497e00d3b7e6/info-business-english-data.pdf"),
    sa: T("مراكز TLScontact في الرياض وجدة والخبر (منذ أكتوبر 2022).", "TLScontact centres in Riyadh, Jeddah and Al Khobar (since October 2022).", "https://saudiarabien.diplo.de/ksa-en/schengen-visas/2195288"),
    ma: T("مركز طلبات التأشيرة في الرباط فقط لتأشيرات شنغن القصيرة (مقدم الخدمة TLScontact، للتحقق).", "Only the visa application centre in Rabat for short-stay Schengen visas (provider TLScontact, to verify).", "https://www.auswaertiges-amt.de/de/reiseundsicherheit/deutsche-auslandsvertretungen/marokko-224062", true),
    jo: T("مركز طلبات التأشيرة في عمّان (نشرات السفارة تذكر VFS Global؛ للتحقق من مقدم الخدمة الحالي).", "The visa application centre in Amman (embassy leaflets name VFS Global; check the current provider).", "https://amman.diplo.de/blob/1681220/74df2c03282549cc49552bad5b98122e/merkblatt-besuchsreise-data.pdf", true),
    dz: T("مركز طلبات التأشيرة في الجزائر العاصمة عبر مقدم الخدمة الذي تحدده السفارة الألمانية (للتحقق).", "The visa application centre in Algiers through the provider named by the German Embassy (to verify).", "https://algier.diplo.de/dz-fr", true),
  },
  it: {
    eg: T("مركز VFS Global في القاهرة، أو مباشرة في قسم التأشيرات بالسفارة الإيطالية بموعد.", "The VFS Global centre in Cairo, or directly at the Italian Embassy's visa section by appointment.", "https://visa.vfsglobal.com/one-pager/italy/egypt/english/"),
    sa: T("مراكز VFS Global في السعودية (للتحقق من المدن).", "VFS Global centres in Saudi Arabia (cities to verify).", null, true),
    ma: T("مراكز VFS Global؛ الحجز أونلاين فقط على موقع VFS (القنصلية العامة في الدار البيضاء).", "VFS Global centres; booking online only on the VFS site (Consulate General in Casablanca).", "https://conscasablanca.esteri.it/fr/?p=3053"),
    jo: T("مركز VFS Global في عمّان (بركة مول، الصويفية).", "The VFS Global centre in Amman (Barakeh Mall, Sweifieh).", "https://ambamman.esteri.it/en/?p=249"),
    dz: T("مركز VFS Global في الجزائر (للتحقق).", "The VFS Global centre in Algeria (to verify).", null, true),
  },
  es: {
    eg: T("مركز BLS International في العجوزة بالجيزة؛ الرسوم تُدفع بالدولار نقداً.", "The BLS International centre in Agouza, Giza; fees are paid in US dollars cash.", "https://egypt.blsspainvisa.com"),
    sa: T("مراكز BLS International في السعودية.", "BLS International centres in Saudi Arabia.", "https://saudi.blsspainvisa.com", true),
    ma: T("مراكز BLS International في المغرب (للتحقق من المدن).", "BLS International centres in Morocco (cities to verify).", null, true),
    jo: T("مركز BLS International في عمّان (الصويفية) منذ 1 سبتمبر 2024.", "The BLS International centre in Amman (Sweifieh) since 1 September 2024.", "https://www.exteriores.gob.es/Embajadas/amman/en/Comunicacion/Noticias/Paginas/Articulos/CHANGE-OF-LOCATION-OF-BLS-OFFICE-FOR-SUBMISSION-OF-VISA-APPLICATIONS.aspx"),
    dz: T("مركزا BLS International في الجزائر العاصمة (حيدرة) ووهران حسب مكان إقامتك.", "The BLS International centres in Algiers (Hydra) and Oran according to where you live.", "https://algeria.blsspainvisa.com/english/owners.php"),
  },
  gb: {
    eg: T("الطلب أونلاين على gov.uk ثم موعد البصمات في مركز طلبات التأشيرة البريطانية في القاهرة أو الإسكندرية (مقدم الخدمة يظهر عند الحجز).", "Apply online on gov.uk, then a biometrics appointment at the UK visa application centre in Cairo or Alexandria (the provider is shown when you book).", UK, true),
    ma: T("الطلب أونلاين ثم موعد في مركز VFS Global في الرباط (منذ 22 أكتوبر 2024).", "Apply online, then an appointment at the VFS Global centre in Rabat (since 22 October 2024).", "https://www.vfsglobal.com/en/PDF/media-releases/2024/PR-UK-Visa-services-in-North-Africa.pdf"),
    jo: T("الطلب أونلاين ثم موعد في مركز VFS Global في عمّان (منذ 5 نوفمبر 2024).", "Apply online, then an appointment at the VFS Global centre in Amman (since 5 November 2024).", UK, true),
    dz: T("الطلب أونلاين ثم موعد في مركز VFS Global في الجزائر العاصمة أو وهران (منذ 22 أكتوبر 2024).", "Apply online, then an appointment at the VFS Global centre in Algiers or Oran (since 22 October 2024).", "https://www.vfsglobal.com/en/PDF/media-releases/2024/PR-UK-Visa-services-in-North-Africa.pdf"),
  },
  us: {
    eg: T("طلب DS-160 ثم مقابلة في السفارة الأمريكية في القاهرة.", "DS-160 form, then an interview at the US Embassy in Cairo.", US),
    sa: T("طلب DS-160 ثم مقابلة في السفارة الأمريكية بالرياض أو القنصليتين في جدة والظهران.", "DS-160 form, then an interview at the US Embassy in Riyadh or the Consulates in Jeddah and Dhahran.", US),
    ma: T("طلب DS-160 ثم مقابلة في القنصلية العامة الأمريكية في الدار البيضاء.", "DS-160 form, then an interview at the US Consulate General in Casablanca.", US),
    jo: T("طلب DS-160 ثم مقابلة في السفارة الأمريكية في عمّان.", "DS-160 form, then an interview at the US Embassy in Amman.", US),
    dz: T("طلب DS-160 ثم مقابلة في السفارة الأمريكية في الجزائر العاصمة.", "DS-160 form, then an interview at the US Embassy in Algiers.", US),
  },
  ca: {
    eg: T("الطلب أونلاين، ثم البصمات بموعد في مركز VFS Global للتأشيرات الكندية في الجيزة (الدقي).", "Apply online, then biometrics by appointment at the VFS Global Canada centre in Giza (Dokki).", CA),
    sa: T("الطلب أونلاين، ثم البصمات في مركز VFS Global للتأشيرات الكندية في السعودية.", "Apply online, then biometrics at a VFS Global Canada centre in Saudi Arabia.", CA, true),
    ma: T("الطلب أونلاين (أو تصريح eTA إذا استوفيت الشروط)، ثم البصمات عند الحاجة في مركز VFS Global في الرباط.", "Apply online (or an eTA if you meet the conditions), then biometrics if needed at the VFS Global centre in Rabat.", CA),
    jo: T("الطلب أونلاين، ثم البصمات في المركز الكندي في عمّان (الشميساني) الذي تديره المنظمة الدولية للهجرة مع VFS Global.", "Apply online, then biometrics at the Canada centre in Amman (Shmeisani), run by IOM with VFS Global.", "https://visa.vfsglobal.com/jor/fr/can"),
    dz: T("الطلب أونلاين، ثم البصمات بموعد في مركز VFS Global في الجزائر العاصمة (بن عكنون).", "Apply online, then biometrics by appointment at the VFS Global centre in Algiers (Ben Aknoun).", CA),
  },
  au: {
    eg: T("الطلب أونلاين في ImmiAccount؛ والصورة وبيانات الجواز عبر تطبيق Australian Immi App إذا طُلب منك، أو البصمات في مركز VFS في القاهرة أو الإسكندرية.", "Apply online in ImmiAccount; give your photo and passport details through the Australian Immi App if asked, or biometrics at a VFS centre in Cairo or Alexandria.", AU),
    sa: T("الطلب أونلاين في ImmiAccount، والبيانات الحيوية عبر تطبيق Australian Immi App المتاح في السعودية إذا طُلب منك.", "Apply online in ImmiAccount, with biometrics through the Australian Immi App available in Saudi Arabia if asked.", AU),
    ma: T("الطلب أونلاين في ImmiAccount، والبصمات حيث تحدده رسالة طلب البصمات (للتحقق من المركز الأقرب).", "Apply online in ImmiAccount, with biometrics where the biometrics request letter says (nearest centre to verify).", AU, true),
    jo: T("الطلب أونلاين في ImmiAccount، والبيانات الحيوية عبر تطبيق Australian Immi App المتاح في الأردن إذا طُلب منك.", "Apply online in ImmiAccount, with biometrics through the Australian Immi App available in Jordan if asked.", AU),
    dz: T("الطلب أونلاين في ImmiAccount؛ والبيانات عبر تطبيق Australian Immi App أو البصمات في مركز VFS في الجزائر العاصمة.", "Apply online in ImmiAccount; biometrics through the Australian Immi App or at the VFS centre in Algiers.", AU),
  },
  tr: {
    eg: T("التأشيرة الإلكترونية على evisa.gov.tr إذا استوفيت شروطها؛ وإلا مركزا التأشيرات في القاهرة والإسكندرية (رسوم خدمة 30 دولاراً) بعد طلب مسبق على visa.gov.tr.", "The e-Visa on evisa.gov.tr if you meet its conditions; otherwise the visa centres in Cairo and Alexandria (US$30 service fee) after a pre-application on visa.gov.tr.", "https://cairo-emb.mfa.gov.tr/Mission/ShowAnnouncement/337136"),
    dz: T("من عمره 15 إلى 50 سنة يقدّم طلباً مسبقاً على visa.gov.tr ثم في السفارة التركية في الجزائر أو مركز التأشيرات المعتمد لها (للتحقق).", "Ages 15 to 50 pre-apply on visa.gov.tr, then at the Turkish Embassy in Algiers or its approved visa centre (to verify).", "https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa", true),
  },
  jp: {
    eg: T("سفارة اليابان في القاهرة.", "The Embassy of Japan in Cairo.", JP),
    sa: T("JAPAN eVISA أونلاين للسياحة (للمقيمين في السعودية)، أو سفارة اليابان في الرياض أو قنصليتها في جدة لغير السياحة.", "JAPAN eVISA online for tourism (residents of Saudi Arabia), or the Embassy of Japan in Riyadh or its Consulate in Jeddah for other purposes.", "https://www.mofa.go.jp/j_info/visit/visa/visaonline.html"),
    ma: T("سفارة اليابان في الرباط.", "The Embassy of Japan in Rabat.", JP),
    jo: T("سفارة اليابان في عمّان.", "The Embassy of Japan in Amman.", JP),
    dz: T("سفارة اليابان في الجزائر العاصمة.", "The Embassy of Japan in Algiers.", JP),
  },
  kr: {
    eg: T("سفارة كوريا في القاهرة.", "The Embassy of Korea in Cairo.", KR, true),
    sa: T("تصريح K-ETA أونلاين على k-eta.go.kr (إن لم تكن جنسيتك معفاة مؤقتاً).", "The K-ETA online on k-eta.go.kr (unless your nationality is temporarily exempt).", "https://www.k-eta.go.kr/portal/apply/index.do"),
    ma: T("تصريح K-ETA أونلاين على k-eta.go.kr.", "The K-ETA online on k-eta.go.kr.", "https://www.k-eta.go.kr/portal/apply/index.do"),
    jo: T("سفارة كوريا في عمّان.", "The Embassy of Korea in Amman.", KR, true),
    dz: T("سفارة كوريا في الجزائر العاصمة.", "The Embassy of Korea in Algiers.", KR, true),
  },
  ge: {
    eg: T("التأشيرة الإلكترونية على evisa.gov.ge (20 دولاراً + 2%)، أو سفارة جورجيا المختصة ببلدك.", "The e-Visa on evisa.gov.ge (US$20 + 2%), or the Georgian embassy responsible for your country.", GE, true),
    ma: T("التأشيرة الإلكترونية على evisa.gov.ge إذا كانت جنسيتك مؤهلة، أو سفارة جورجيا المختصة ببلدك.", "The e-Visa on evisa.gov.ge if your nationality qualifies, or the Georgian embassy responsible for your country.", GE, true),
    dz: T("التأشيرة الإلكترونية على evisa.gov.ge إذا كانت جنسيتك مؤهلة، أو سفارة جورجيا المختصة ببلدك.", "The e-Visa on evisa.gov.ge if your nationality qualifies, or the Georgian embassy responsible for your country.", GE, true),
  },
  az: {
    eg: T("التأشيرة الإلكترونية ASAN Visa على evisa.gov.az فقط.", "The ASAN Visa e-Visa on evisa.gov.az only.", AZ),
    jo: T("التأشيرة الإلكترونية ASAN Visa على evisa.gov.az فقط.", "The ASAN Visa e-Visa on evisa.gov.az only.", AZ),
    dz: T("التأشيرة الإلكترونية ASAN Visa على evisa.gov.az فقط.", "The ASAN Visa e-Visa on evisa.gov.az only.", AZ),
  },
};

export function centreFor(destId, origin) {
  return CENTRES[destId]?.[origin] || null;
}
