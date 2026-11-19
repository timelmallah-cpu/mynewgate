// Local details for visitors from Saudi Arabia and Morocco, shown in place of the Egyptian ones on the language,
// institutes, guide, Ausbildung and foundation pages (components/OriginText.js picks them by the chosen origin).
// Official sources only (test owners, cultural institutes, embassies, Campus France). Reviewed 19 November 2026.
export const LOCAL_REVIEWED = "2026-11-19";
export const LOCAL_IDS = ["sa", "ma"];

const BC_SA = "https://saudiarabia.britishcouncil.org/en/exam/ielts/dates-fees-locations";
const IDP_SA = "https://ielts.idp.com/saudiarabia/about/en-gb";
const BC_MA = "https://ielts.org/test-centres/british-council-casablanca";
const GOETHE_SA = "https://www.goethe.de/ins/sa/de/spr/prf/anm.html";
const GOETHE_MA = "https://www.goethe.de/ins/ma/de/spr/prf.html";
const CERVANTES_MA = "https://cervantes.org/sites/public/produccion/files/2025-12/memoria-2024-2025-instituto-cervantes-10-centros.pdf";
const IIC_RABAT = "https://iicrabat.esteri.it/wp-content/uploads/2026/07/Calendario-corsi-2026-2027.pdf";
const DELE_CENTRES = "https://examenes.cervantes.es/en/dele/where";

export const LOCAL_ORIGIN = {
  sa: {
    in: { ar: "في السعودية", en: "In Saudi Arabia" },
    tests: {
      ielts: {
        fee: { ar: "1,636 ريالاً (Academic على الكمبيوتر في المركز)، حسب موقع IDP في السعودية", en: "SAR 1,636 (Academic, on computer at a centre), per IDP Saudi Arabia" },
        where: { ar: "British Council: على الكمبيوتر في الرياض وجدة والدمام، وعلى الورق في مدن منها الأحساء وبريدة وحائل والجبيل والمدينة ومكة وتبوك والطائف. وأيضاً مراكز IDP في الرياض وجدة والخبر", en: "British Council: on computer in Riyadh, Jeddah and Dammam, and on paper in cities including Al-Hassa, Buraydah, Hail, Jubail, Madinah, Makkah, Tabuk and Taif. IDP also has centres in Riyadh, Jeddah and Al Khobar" },
        src: BC_SA, src2: IDP_SA,
      },
      toefl: {
        fee: { ar: "يختلف حسب الدولة؛ يظهر السعر في السعودية عند الحجز على موقع ETS", en: "Varies by country; the Saudi price shows when you book on the ETS site" },
        where: { ar: "مراكز اختبار معتمدة من ETS في السعودية، أو من المنزل (Home Edition)", en: "ETS-authorised test centres in Saudi Arabia, or at home (Home Edition)" },
      },
      pte: {
        where: { ar: "حسب Pearson: أربعة مراكز في الرياض وجدة والدمام (للتحقق من القائمة الحالية عند الحجز)", en: "Per Pearson: four centres in Riyadh, Jeddah and Dammam (check the current list when booking)" },
        src: "https://www.zawya.com/en/press-release/pearson-pte-launches-secure-english-language-testing-in-saudi-arabia-mqqaxjis",
      },
    },
    local: {
      de: { ar: "معهد جوته في الرياض يقدّم دورات في الألمانية لكل المستويات (حضورياً أو أونلاين)، ويعقد امتحانات Goethe-Zertifikat في الرياض وجدة", en: "The Goethe-Institut in Riyadh teaches German at all levels (on site or online) and holds Goethe-Zertifikat exams in Riyadh and Jeddah", url: GOETHE_SA },
      at: { ar: "معهد جوته نفسه في الرياض (اللغة الألمانية واحدة في ألمانيا والنمسا)", en: "The same Goethe-Institut in Riyadh (German is the language in both Germany and Austria)", url: GOETHE_SA },
      es: { ar: "لم نجد معهد ثربانتس في السعودية في المصادر الرسمية التي راجعناها. ابحث عن أقرب مركز لامتحان DELE في موقع ثربانتس", en: "We found no Instituto Cervantes in Saudi Arabia in the official sources we checked. Look up the nearest DELE exam centre on the Cervantes site", url: DELE_CENTRES },
      it: { ar: "لم نجد معهداً ثقافياً إيطالياً في السعودية في المصادر الرسمية التي راجعناها", en: "We found no Italian Cultural Institute in Saudi Arabia in the official sources we checked", url: null },
    },
    institutes: [
      { lang: "en", name: "British Council Saudi Arabia", text: { ar: "ينظم امتحان IELTS في 17 موقعاً في السعودية.", en: "Runs IELTS at 17 locations in Saudi Arabia." }, cities: { ar: "الرياض، جدة، الدمام، ومدن أخرى", en: "Riyadh, Jeddah, Dammam and other cities" }, url: BC_SA },
      { lang: "en", name: "IDP IELTS Saudi Arabia", text: { ar: "الجهة الثانية التي تنظم IELTS في السعودية.", en: "The other official IELTS organiser in Saudi Arabia." }, cities: { ar: "الرياض، جدة، الخبر", en: "Riyadh, Jeddah, Al Khobar" }, url: IDP_SA },
      { lang: "de", name: "Goethe-Institut Saudi-Arabien", text: { ar: "المعهد الثقافي الألماني الرسمي: دورات ألمانية لكل المستويات، وامتحانات Goethe-Zertifikat.", en: "Germany's official cultural institute: German courses at all levels and Goethe-Zertifikat exams." }, cities: { ar: "الرياض (والامتحانات في الرياض وجدة)", en: "Riyadh (exams in Riyadh and Jeddah)" }, url: GOETHE_SA },
    ],
    guide: {
      bgNote: { ar: "السعودية عضو في اتفاقية الأبوستيل منذ 7 ديسمبر 2022، وبلغاريا عضو أيضاً، فالأبوستيل من الخارجية السعودية يغني عن تصديق السفارة (للتحقق مع الجامعة)", en: "Saudi Arabia has been party to the Apostille Convention since 7 December 2022, as has Bulgaria, so an apostille from the Saudi MFA replaces embassy legalisation (check with the university)" },
      cyHow: { ar: "ضع أبوستيل على شهادتك وكشف الدرجات من الخارجية السعودية (السعودية وقبرص عضوان في اتفاقية الأبوستيل)، وأرسلها للجامعة مع طلب القبول.", en: "Get an apostille on your certificate and transcripts from the Saudi MFA (Saudi Arabia and Cyprus are both Apostille parties), and send them to the university with your application." },
      noNote: { ar: "للماجستير: 4 سنوات دراسة جامعية للمتقدمين من السعودية (حسب قائمة جامعة بيرغن الرسمية)", en: "For a master's: four years of university education for applicants from Saudi Arabia (per the University of Bergen's official list)" },
      docs: {
        bg: { ar: "أبوستيل على الشهادات من الخارجية السعودية، وترجمتها للبلغارية (للتحقق)", en: "Apostille on your certificates from the Saudi MFA, plus Bulgarian translations (to verify)" },
        cz: { ar: "أبوستيل على شهادة السجل الجنائي قبل موعد التأشيرة (للتحقق مع السفارة التشيكية في الرياض)", en: "Apostille on the criminal record certificate before the visa appointment (check with the Czech Embassy in Riyadh)" },
        fr: { ar: "إجراء Études en France مع Campus France السعودية (الرياض وجدة والخبر) ومقابلة Campus France، ثم التقديم على التأشيرة في VFS", en: "The Études en France procedure with Campus France Saudi Arabia (Riyadh, Jeddah, Khobar) and the Campus France interview, then the visa application at VFS" },
      },
      src: { apostille: "https://www.hcch.net/en/news-archive/details?varevent=887", no: "https://www4.uib.no/en/studies/online-studies/country-list", fr: "https://www.arabiesaoudite.campusfrance.org/en" },
    },
    ausbVisa: {
      ar: "في السعودية: استمارة VIDEX أونلاين، وموعد عبر نظام مواعيد السفارة الألمانية في الرياض أو عند VFS Global، والرسوم 75 يورو تُدفع نقداً بالريال. موافقة وكالة العمل إجراء داخلي.",
      en: "In Saudi Arabia: the online VIDEX form, an appointment through the German Embassy Riyadh's booking system or at VFS Global, and a €75 fee paid in cash in riyals. The Employment Agency's approval is an internal step.",
      src: "https://saudiarabien.diplo.de/ksa-en/fasttrack/2310638",
    },
  },
  ma: {
    in: { ar: "في المغرب", en: "In Morocco" },
    tests: {
      ielts: {
        fee: { ar: "2,650 درهماً (Academic) في مركز British Council بالدار البيضاء، حسب موقع IELTS الرسمي. يختلف السعر بين المراكز", en: "MAD 2,650 (Academic) at British Council Casablanca, per the official IELTS site. Prices differ between centres" },
        where: { ar: "مراكز British Council في الدار البيضاء والرباط وطنجة ومراكش وأكادير ومدن أخرى (القائمة الكاملة في نظام الحجز)", en: "British Council centres in Casablanca, Rabat, Tangier, Marrakesh, Agadir and other cities (full list in the booking system)" },
        src: BC_MA, src2: "https://takeielts.britishcouncil.org/book-ielts-test/test-dates-fees-locations",
      },
      toefl: {
        fee: { ar: "يختلف حسب الدولة؛ يظهر السعر في المغرب عند الحجز على موقع ETS", en: "Varies by country; the Moroccan price shows when you book on the ETS site" },
        where: { ar: "مراكز اختبار معتمدة من ETS في المغرب، أو من المنزل (Home Edition)", en: "ETS-authorised test centres in Morocco, or at home (Home Edition)" },
      },
      pte: {
        where: { ar: "حسب Pearson: مركز في الدار البيضاء (للتحقق من القائمة الحالية عند الحجز)", en: "Per Pearson: a centre in Casablanca (check the current list when booking)" },
        src: "https://www.pearsonpte.com/news/test-takers-can-now-choose-from-190-locations-to-take-pte-for-uk-visas",
      },
    },
    local: {
      de: { ar: "معهد جوته في الرباط والدار البيضاء يقدّم دورات لكل المستويات، ويعقد امتحانات Goethe-Zertifikat من B1 إلى C2 وTestDaF في المدينتين", en: "The Goethe-Institut in Rabat and Casablanca teaches all levels and holds Goethe-Zertifikat B1 to C2 and TestDaF exams in both cities", url: GOETHE_MA },
      at: { ar: "معهد جوته نفسه في الرباط والدار البيضاء. وحسب الغرفة الاقتصادية النمساوية يوجد مركز امتحانات ÖSD في فاس وسلا (معلومة قديمة، للتحقق)", en: "The same Goethe-Institut in Rabat and Casablanca. Per the Austrian Economic Chamber there is an ÖSD exam centre in Fès and Salé (older information, to verify)", url: "https://www.advantageaustria.org/ma/services/netzwerk/OeSD.pdf" },
      es: { ar: "لمعهد ثربانتس ستة مراكز في المغرب: الدار البيضاء وفاس ومراكش والرباط وطنجة وتطوان، تقدّم دورات في الإسبانية وامتحان DELE", en: "The Instituto Cervantes has six centres in Morocco: Casablanca, Fès, Marrakesh, Rabat, Tangier and Tétouan, with Spanish courses and the DELE", url: CERVANTES_MA },
      it: { ar: "المعهد الثقافي الإيطالي في الرباط يقدّم دورات في الإيطالية (تبدأ دورات 2026/2027 في 5 أكتوبر 2026). مواعيد امتحانات CILS أو CELI غير منشورة في المصدر الذي راجعناه", en: "The Italian Cultural Institute in Rabat runs Italian courses (2026/2027 courses start on 5 October 2026). CILS or CELI exam dates are not published in the source we checked", url: IIC_RABAT },
    },
    institutes: [
      { lang: "en", name: "British Council Morocco", text: { ar: "الجهة التي تنظم امتحان IELTS في المغرب.", en: "Runs the IELTS test in Morocco." }, cities: { ar: "الدار البيضاء، الرباط، طنجة، مراكش، أكادير", en: "Casablanca, Rabat, Tangier, Marrakesh, Agadir" }, url: BC_MA },
      { lang: "de", name: "Goethe-Institut Marokko", text: { ar: "المعهد الثقافي الألماني الرسمي: دورات ألمانية لكل المستويات، وامتحانات Goethe-Zertifikat وTestDaF.", en: "Germany's official cultural institute: German courses at all levels, Goethe-Zertifikat and TestDaF exams." }, cities: { ar: "الرباط، الدار البيضاء", en: "Rabat, Casablanca" }, url: GOETHE_MA },
      { lang: "es", name: "Instituto Cervantes (Marruecos)", text: { ar: "المعهد الرسمي لإسبانيا: دورات في الإسبانية وامتحان DELE.", en: "Spain's official institute: Spanish courses and the DELE." }, cities: { ar: "الدار البيضاء، فاس، مراكش، الرباط، طنجة، تطوان", en: "Casablanca, Fès, Marrakesh, Rabat, Tangier, Tétouan" }, url: CERVANTES_MA },
      { lang: "it", name: "Istituto Italiano di Cultura di Rabat", text: { ar: "المعهد الثقافي الإيطالي: دورات في الإيطالية.", en: "Italy's cultural institute: Italian courses." }, cities: { ar: "الرباط", en: "Rabat" }, url: IIC_RABAT },
    ],
    guide: {
      bgNote: { ar: "المغرب وبلغاريا عضوان في اتفاقية الأبوستيل، فالأبوستيل المغربي يغني عن تصديق السفارة (للتحقق مع الجامعة)", en: "Morocco and Bulgaria are both Apostille parties, so a Moroccan apostille replaces embassy legalisation (check with the university)" },
      cyHow: { ar: "ضع الأبوستيل المغربي على شهادتك وكشف الدرجات (المغرب وقبرص عضوان في اتفاقية الأبوستيل)، وأرسلها للجامعة مع طلب القبول.", en: "Get the Moroccan apostille on your certificate and transcripts (Morocco and Cyprus are both Apostille parties), and send them to the university with your application." },
      noNote: { ar: "للماجستير: 4 سنوات دراسة جامعية للمتقدمين من المغرب (حسب قائمة جامعة بيرغن الرسمية)", en: "For a master's: four years of university education for applicants from Morocco (per the University of Bergen's official list)" },
      docs: {
        bg: { ar: "الأبوستيل المغربي على الشهادات، وترجمتها للبلغارية (للتحقق)", en: "The Moroccan apostille on your certificates, plus Bulgarian translations (to verify)" },
        cz: { ar: "أبوستيل على شهادة السجل الجنائي قبل موعد التأشيرة (للتحقق مع السفارة التشيكية في الرباط)", en: "Apostille on the criminal record certificate before the visa appointment (check with the Czech Embassy in Rabat)" },
        fr: { ar: "إجراء Études en France مع Campus France المغرب: رسوم الملف 1,900 درهم ثم المقابلة، قبل طلب التأشيرة", en: "The Études en France procedure with Campus France Morocco: a MAD 1,900 file fee, then the interview, before the visa application" },
      },
      src: { apostille: "https://www.hcch.net/en/instruments/conventions/status-table/?cid=41", no: "https://www4.uib.no/en/studies/online-studies/country-list", fr: "https://www.maroc.campusfrance.org/system/files/medias/documents/2025-12/D%C3%A9pliant%20EEF%20V3.pdf" },
    },
    ausbVisa: {
      ar: "في المغرب: التقديم على التأشيرة الوطنية يتم عند TLScontact في الرباط، وطريقة حجز الموعد تختلف حسب نوع التأشيرة (بوابة القنصلية الرقمية أو قائمة انتظار السفارة). فئة التدريب المهني غير مذكورة في جدول السفارة الذي راجعناه، فاسأل السفارة (للتحقق). رسوم التأشيرة الوطنية 75 يورو.",
      en: "In Morocco: national visa applications are submitted at TLScontact in Rabat, and how you book depends on the visa type (the Consular Services Portal or the embassy's waiting list). Vocational training is not listed in the embassy table we checked, so ask the embassy (to verify). The national visa fee is €75.",
      src: "https://rabat.diplo.de/resource/blob/2757418/1634711059467d39b5186669f423f426/neuer-inhalt-2--data.pdf",
    },
  },
};

// { sa: x, ma: y } for one field picked by a function, skipping origins without it.
export const byOrigin = (f) => Object.fromEntries(LOCAL_IDS.map((o) => [o, f(LOCAL_ORIGIN[o])]).filter(([, v]) => v));
