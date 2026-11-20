// Picks the site documents most relevant to a question (simple keyword scoring, Arabic-aware).
import { DOCS, OVERVIEW } from "./knowledge";
import { T } from "../i18n";
import { CITIES } from "../cities";

// Arabic normalisation: unify alef/ya/ta marbuta, drop diacritics and tatweel, lower-case Latin, strip accents.
export function norm(s) {
  return String(s || "")
    .normalize("NFD").replace(/[̀-ͯ]/g, "")
    .replace(/[ً-ٰٟـ]/g, "")
    .replace(/[أإآٱ]/g, "ا").replace(/ى/g, "ي").replace(/ة/g, "ه").replace(/ؤ/g, "و").replace(/ئ/g, "ي")
    // Egyptians write the hard "g" as ج (براج، هامبورج) where standard Arabic uses غ (براغ، هامبورغ); treat them as one letter.
    .replace(/[غچگ]/g, "ج").replace(/ڤ/g, "ف").replace(/پ/g, "ب")
    .toLowerCase();
}
const STOP = new Set(("ابغي ابي ابغا بدي بدنا شو شلون اشلون وين ليش كيف متى هل اريد أريد نريد اود يمكن يمكنني ممكن لي عن ماذا في من على عن الى الي الا او و يا هل ما ماذا ايه اي ازاي ازي فين امتى ليه كام قد مين هو هي انا انت احنا عايز عاوز عاوزه عايزه ممكن ينفع اقدر لو مع بس كده دي ده اللي التي الذي the a an of in on for to is are be can i my me how what which where when do does with and or at by from it this that want need please about").split(" "));
const PREFIX = /^(وال|بال|فال|كال|لل|ال|و|ب|ف|ل)(?=..)/;

export function tokens(s) {
  return norm(s).split(/[^a-z0-9ء-ي]+/).filter(Boolean)
    .map((w) => (/[ء-ي]/.test(w) && w.length > 3 ? w.replace(PREFIX, "") : w))
    .filter((w) => w.length > 1 && !STOP.has(w));
}

// Everyday words people use, mapped to words that appear in the data.
const SYN = {
  "كمبيوتر": "computer علوم حاسب", "برمجه": "computer علوم حاسب", "حاسبات": "computer حاسب", "سوفتوير": "software computer", "it": "computer",
  "بيزنس": "business اداره اعمال", "تجاره": "business اداره اعمال", "mba": "business",
  "داتا": "data بيانات", "ذكاء": "artificial intelligence data", "ai": "artificial intelligence",
  "دكتور": "medicine طب", "بشري": "medicine طب", "اسنان": "dentistry dental طب اسنان", "سيكولوجي": "psychology علم النفس", "سايكولوجي": "psychology علم النفس", "بيطري": "veterinary بيطري", "بيطريه": "veterinary بيطري", "صيدله": "pharmacy صيدله", "صيدلي": "pharmacy صيدله", "تمريض": "nursing تمريض", "اقتصاد": "economics اقتصاد", "معماري": "architecture عماره", "معماريه": "architecture عماره", "عماره": "architecture عماره", "قانون": "law قانون", "حقوق": "law قانون", "محامي": "law قانون", "محاماه": "law قانون", "طباخ": "طاه شيف cook hospitality", "شيف": "طاه cook hospitality", "كهربايي": "كهرباء electronics electrical", "ميكانيكي": "ميكانيكي mechatronics", "سواق": "سايق driver logistics", "سايق": "driver logistics", "ممرض": "nursing تمريض", "ممرضه": "nursing تمريض",
  "مجاني": "free بدون رسوم", "ببلاش": "free بدون رسوم", "بلاش": "free بدون رسوم", "مجانا": "free بدون رسوم",
  "فيزا": "تاشيره visa", "تاشيرة": "تاشيره visa", "ايلتس": "ielts", "توفل": "toefl", "دولينجو": "duolingo",
  "توثيق": "تصديق legalisation", "تصديق": "legalisation", "ابوستيل": "apostille", "منحه": "scholarship منح", "منح": "scholarship",
  "شقه": "سكن housing", "سكن": "housing", "اكل": "معيشه living", "مصاريف": "معيشه رسوم living", "تكلفه": "معيشه رسوم living cost",
  "شغل": "عمل work", "اشتغل": "عمل work", "تخرج": "graduation", "ثانويه": "ثانويه school certificate", "لغه": "language",
};
const TYPE_HINTS = [
  [/منح|scholar|ممول/, "scholarship"], [/تاشير|visa|سفار|embass/, "visa"], [/سكن|housing|شق|ايجار|rent/, "housing"],
  [/تصديق|توثيق|صدق|وثق|ترجم|legali|apostille|ابوستيل|خارجيه/, "legal"], [/ثانوي|school cert|الثانويه/, "schoolcert"], [/سني|عمري|السن|كبير في السن|بعد التلاتين|بعد الثلاثين|بعد الاربعين|بعد الأربعين|age limit|over 30|over 40|\b3\d سنه|\b4\d سنه|مراتي|زوجتي|جوزي|اولادي|اسرتي|عيلتي|family/, "after30"], [/تحضيري|studienkolleg|شتودين|ستودين|foundation|تاسيسي|فونديشن|feststellung|كوليج/, "foundation"], [/تطبيقي|تطبيقيه|fachhochschule|hochschule|\bfh\b|\bhaw\b|hogeschool|\bhbo\b|applied science|\buas\b|\bamk\b|polytechnic|بوليتكنيك|kolegija/, "applied"],
  [/ielts|ايلتس|toefl|توفل|duolingo|دولينجو|انجليزي|english/, "noielts"], [/بعد التخرج|after grad|post.?study|اقامه/, "after"],
  [/خطاب|motivation|cv|سيره ذاتيه|توصيه/, "letter"], [/معادل|اوراق|مستندات|document|recogni/, "documents"], [/مهني|ausbildung|اوسبيلدونج|اوسبلدونج|ازوبي|azubi|تدريب|شيف|طباخ|كهرباي|ميكانيكي|سباك|نجار|خباز|حلاق|سايق|سواق/, "vocational"],
  [/لغه|language|كورس/, "language"], [/فلوس|بنك|اثبات|مبلغ|sperrkonto|blocked|حساب مغلق|money|fund|مصاريف|تكلف|معيش|cost/, "country"],
];
const FIELDS = [[/sport|exercise science|علوم الرياضه|(^|\s)رياضه($|\s|[؟?])|تربيه رياضيه|تدريب رياضي|كوتش/, "sport"], [/food science|food tech|اجذيه|علوم الجذاء|تكنولوجيا الجذاء|صناعات جذائيه/, "food"], [/social work|خدمه اجتماعيه|عمل اجتماعي|اخصايي اجتماعي/, "socialwork"], [/urban|city planning|spatial planning|تخطيط عمراني|تخطيط مدن|تخطيط حضري|عمران/, "urban"], [/biolog|chemi|physics|mathemat|biochem|احياء|كيمياء|فيزياء|رياضيات|كيميا|بيولوج|علوم طبيعيه/, "science"], [/linguist|translat|history|archaeolog|literatur|english studies|humanities|لجويات|تخصص ترجمه|دراسه الترجمه|علم التاريخ|تخصص تاريخ|دراسه التاريخ|علم الاثار|ادب انجليزي|كليه الاداب|علوم انسانيه/, "humanities"], [/design|fine art|film|music|animation|photograph|تصميم|فنون|موسيق|سينما|افلام|فن تشكيلي|جرافيك|انيميشن|تصوير/, "art"], [/computer|حاسب|برمج|software|كمبيوتر/, "cs"], [/econom|اقتصاد/, "economics"], [/business|اعمال|بيزنس|تجار|mba|manage/, "business"], [/data|بيانات|داتا/, "ds"], [/dent|اسنان/, "dentistry"], [/pharm|صيدل|صيدلي/, "pharmacy"], [/veterin|بيطر|\bvet\b/, "veterinary"], [/psycholog|علم النفس|علم نفس|سيكولوج|سايكولوج/, "psychology"], [/physiother|physical therap|dietetic|nutrition|علاج طبيعي|العلاج الطبيعي|فيزيوثيرابي|تجذيه|تجذية/, "physio"], [/nurs|تمريض|ممرض/, "nursing"], [/medic|(^|\s)طب($|\s|[؟?])|دكتور|بشري/, "medicine"], [/architect|عماره|معماري/, "architecture"], [/(^|\s)law|llm|قانون|حقوق|محامي|محاماه/, "law"], [/engineer|هندس|مهندس/, "engineering"], [/public health|صحه عامه|صحه/, "health"], [/journalis|media|communicat|اعلام|صحاف|اتصال/, "media"], [/educat|teach|تربي|تعليم|مدرس/, "education"], [/politic|international relations|public policy|سياس|علاقات دوليه/, "politics"], [/agri|زراع|فلاح/, "agriculture"], [/environment|climate|sustainab|بيئ|مناخ|استدام/, "environment"], [/touris|hospitality|سياح|فندق/, "tourism"]];
const LEVELS = [[/ماجستير|master|msc|ما بعد/, "master"], [/بكالوريوس|bachelor|ليسانس|بعد الثانوي/, "bachelor"], [/دكتوراه|phd|doctor/, "doctorate"]];

const COUNTRY_WORDS = Object.keys(T.ar.countries).map((c) => [c, [norm(T.ar.countries[c]), norm(T.en.countries[c])]]);
COUNTRY_WORDS.push(["gb", ["بريطانيا", "المملكة المتحدة", "انجلترا", "إنجلترا", "اسكتلندا", "بريطاني", "united kingdom", "britain", "england", "scotland"]], ["nz", ["نيوزيلندا", "نيوزلندا", "نيوزيلاندا", "نيوزيلندي", "new zealand", "newzealand"]], ["au", ["استراليا", "أستراليا", "استرالي", "استراليه", "australia", "australian"]], ["ca", ["كندا", "كندي", "كنديه", "canada", "canadian"]], ["my", ["ماليزيا", "ماليزي", "ماليزيه", "malaysia", "malaysian"]], ["tr", ["تركيا", "تركي", "تركيه", "turkey", "turkiye", "türkiye", "turkish"]], ["li", ["ليختنشتاين", "ليشتنشتاين", "لختنشتاين", "liechtenstein", "vaduz"]], ["is", ["ايسلندا", "أيسلندا", "آيسلندا", "ايسلنده", "iceland", "icelandic"]], ["gr", ["اليونان", "يونان", "يوناني", "greece", "greek", "hellas"]], ["si", ["سلوفينيا", "سلوفيني", "slovenia", "slovenija", "slovene"]], ["ch", ["سويسرا", "سويسري", "switzerland", "swiss", "suisse", "schweiz"]], ["lu", ["لوكسمبورغ", "لوكسمبورج", "لكسمبورغ", "luxembourg", "luxemburg"]], ["no", ["النرويج", "نرويج", "norway", "norwegian", "نرويجي"]], ["de", ["المانيا", "germany", "الماني"]], ["nl", ["هولندا", "holland"]], ["cz", ["تشيك", "czech"]], ["hu", ["هنغاريا", "هنجاريا", "المجر"]], ["ee", ["استونيا"]], ["es", ["اسبانيا"]], ["fr", ["فرنسا", "فرنسي", "france", "french"]], ["pt", ["البرتغال", "برتغال", "portugal", "portuguese"]], ["ie", ["ايرلندا", "إيرلندا", "أيرلندا", "ireland", "irish"]], ["dk", ["الدنمارك", "الدانمارك", "دنمارك", "دانمارك", "denmark", "danish"]], ["hr", ["كرواتيا", "كرواتي", "croatia", "croatian"]], ["sk", ["سلوفاكيا", "سلوفاكي", "slovakia", "slovak"]], ["cy", ["قبرص", "قبرصي", "cyprus", "cypriot"]], ["mt", ["مالطا", "مالطه", "مالطي", "malta", "maltese"]]);

// Spellings Arab (mostly Egyptian) students actually type, besides the names in data/city_names_ar.json.
const CITY_ALIASES = {
  Groningen: "جرونينجن جروننجن جرونينغن غرونينغن", Ghent: "جنت خنت جينت", Leuven: "لوفين لوفان لوڤن", Eindhoven: "ايندهوفن ايندهوڤن",
  "The Hague": "دن هاج دنهاج هاج", "'s-Hertogenbosch": "هيرتوجينبوش", Maastricht: "ماستريشت ماستريكت", Nijmegen: "نيميجن نايميجن", Tilburg: "تيلبورج", Utrecht: "اوترخت",
  Antwerp: "انتويرب انفرس", Brussels: "بروكسيل", Łódź: "لودز لودج", Wrocław: "فروتسلاف روكلاو فروكلاو", Kraków: "كراكو كراكاو", Gdańsk: "جدانسك", Poznań: "بوزنان بوزنن", Szczecin: "شتشيتسين",
  Munich: "ميونيخ ميونخ مونيخ", Aachen: "اخن", Cologne: "كولونيا", Stuttgart: "شتوتجارت", Freiburg: "فرايبورج فرايبورغ", Heidelberg: "هايدلبرج هايدلبيرج", Hamburg: "هامبورج", Augsburg: "اوجسبورج", Braunschweig: "براونشفايج",
  Saarbrücken: "زاربروكن ساربروكن", Darmstadt: "دارمشتات دارمستادت", Dresden: "درسدن", Lübeck: "لوبيك", Osnabrück: "اوسنابروك",
  Erlangen: "ارلانجن ايرلانجن ارلانغن", "Göttingen": "جوتنجن جوتينجن غوتنغن", "Münster": "مونستر مونيستر", Kaiserslautern: "كايزرسلاوترن", Ingolstadt: "انجولشتات انغولشتات انجولشتادت", Hannover: "هانوفر هانوڤر", Chemnitz: "كمنتس كيمنيتس كيمنتس", Mainz: "ماينتس ماينز", Deggendorf: "ديجندورف ديغندورف", Weimar: "فايمار ڤايمار", Stralsund: "شترالسوند شترالزوند", Cottbus: "كوتبوس كوتبس", Kassel: "كاسل كاسيل", Kiel: "كيل",
  Oslo: "اوسلو", Bergen: "بيرجن بيرغن", Trondheim: "تروندهايم تروندهيم", Stavanger: "ستافانجر ستافنجر", Kristiansand: "كريستيانساند", Grimstad: "جريمستاد", "Ålesund": "اوليسوند", "Ås": "اوس", "Bodø": "بودو",
  "Esch-sur-Alzette": "اش بلفال belval", "Luxembourg": "مدينة لوكسمبورغ كيرشبرغ kirchberg",
  "Zürich": "زيورخ زيوريخ zurich", "Lausanne": "لوزان lausanne",
  "Ljubljana": "ليوبليانا لوبليانا ljubljana",
  "Athens": "أثينا اثينا athens", "Thessaloniki": "سالونيك ثيسالونيكي تسالونيكي thessaloniki", "Piraeus": "بيرايوس بيريه piraeus",
  "Reykjavik": "ريكيافيك ريكجافيك reykjavik",
  "Gödöllő": "جودولو جودولي godollo", "Keszthely": "كيستهاي كيستيلي keszthely",
  "Wageningen": "فاخينينجن فاجينينجن واجننجن wageningen", "Helsingborg": "هلسينجبورج هلسنجبورغ helsingborg", "Gyöngyös": "جيونجيوش gyongyos", "Turin": "تورينو تورين torino turin",
  "Akureyri": "أكوريري اكوريري akureyri", "Isafjordur": "إيسافيوردور ايسافيوردور isafjordur", "Hvanneyri": "هفانيري hvanneyri",
  "Vaduz": "فادوتس فادوز vaduz",
  "Ankara": "انقره أنقرة ankara",
  "Kuala Lumpur": "كوالالمبور كوالا لمبور kuala lumpur", "Penang": "بينانج بينانغ penang",
  "St. John's": "سانت جونز st johns",
  "Adelaide": "اديلايد أديلايد adelaide",
  "Hamilton": "هاميلتون hamilton",
  "Auckland": "اوكلاند أوكلاند auckland",
  "Glasgow": "جلاسجو جلاسكو glasgow", "Southampton": "ساوثهامبتون southampton", "Loughborough": "لافبرة لوبورو loughborough", "Dumfries": "دمفريز dumfries",
  Vienna: "فيينا فيينّا ڤيينا", Erfurt: "إرفورت ارفورت", Dublin: "دبلن", Cork: "كورك", Limerick: "ليمريك", Galway: "غالواي جالواي", Copenhagen: "كوبنهاجن كوبنهاغن", Zagreb: "زغرب زاغرب", Rijeka: "رييكا ريكا رييكه", Olsztyn: "أولشتين اولشتين", "Stara Zagora": "ستارا زاغورا ستارا زاجورا", Jelgava: "يلغافا جلجافا", Split: "سبليت", Bratislava: "براتيسلافا", Limassol: "ليماسول ليمسول", Nicosia: "نيقوسيا نيقوسيه", Ansbach: "أنسباخ انسباخ", Freising: "فرايزينغ فرايزنج", "Gießen": "غيسن جيسن", Landau: "لانداو", "Jyväskylä": "يوفاسكولا يفاسكيلا", Msida: "مسيدا فاليتا", Martin: "مارتن", "Košice": "كوشيتسه كوشيتسي كوشيس", Aalborg: "آلبورج ألبورغ", "Kongens Lyngby": "لينجبي لينغبي", Linz: "لينز", Graz: "غراتس جراتس جراز graz", Innsbruck: "إنسبروك انسبروك innsbruck", Milan: "ميلان", Pavia: "بافيا", Bologna: "بولونيا", Padua: "بادوفا بادوا padova", Cesena: "تشيزينا", Rimini: "ريميني", "Forlì": "فورلي", Prague: "براج براها", "Hradec Kralove": "هراديتس", Brno: "برنو", Grenoble: "جرونوبل جرينوبل غرونوبل", Paris: "باريس paris", Nice: "نيس", Grasse: "غراس جراس", Toulouse: "تولوز", Rennes: "رين", "Sophia Antipolis": "صوفيا انتيبوليس نيس", "Gif-sur-Yvette": "ساكلاي باريس", Lisbon: "لشبونه لشبونة ليسبون لزبون", Porto: "بورتو",
  Budapest: "بودابيست", Debrecen: "ديبريسين ديبرتسن", Szeged: "سيجد سيجيد", Pécs: "بيتش بيكس", Bucharest: "بوخارست بوكارست", "Cluj-Napoca": "كلوج", Iași: "ياسي", Timișoara: "تيميشوارا", "Târgu Mureș": "تارجو موريش",
  Sofia: "صوفيا", Plovdiv: "بلوفديف", Varna: "فارنا", Pleven: "بليفن", Riga: "ريجا", Tallinn: "تالين", Tartu: "تارتو", Vilnius: "فيلنيوس", Kaunas: "كاوناس",
  Stockholm: "استوكهولم", Uppsala: "ابسالا", Lund: "لوند", Helsinki: "هلسنكي", Espoo: "اسبو", Tampere: "تامبيري", Oulu: "اولو",
  Madrid: "مدريد", Barcelona: "برشلونه برشلونة", Granada: "جرانادا غرناطه", Getafe: "خيتافي جيتافي", Leganés: "ليجانيس",
};
// Single-word names go through the same prefix stripping as the question (لاهاي -> اهاي), multi-word names stay whole.
const cityForm = (w) => (/[\s-]/.test(w.trim()) ? norm(w.trim()) : tokens(w)[0] || "");
const CITY_WORDS = CITIES.map((c) => [c, [c.ar, c.en, ...(CITY_ALIASES[c.en] || "").split(" ")].map(cityForm).filter((w) => w.length > 2)]);

const INDEX = DOCS.map((d) => {
  const words = new Set(tokens(`${d.title.ar} ${d.title.en} ${d.text.ar} ${d.text.en}`));
  return { d, words };
});
const DF = new Map();
for (const { words } of INDEX) for (const w of words) DF.set(w, (DF.get(w) || 0) + 1);
const idf = (w) => Math.log(1 + INDEX.length / (1 + (DF.get(w) || 0)));

// Follow-up questions ("and in the Netherlands?") borrow the previous question's words; full questions stand alone.
export function retrieve(question, history = [], opts = {}) {
  const alone = search(question, opts);
  const recent = history.filter((h) => h.role === "user").slice(-1).map((h) => h.text).join(" ");
  const signals = alone.countries.length + alone.types.length + alone.fields.length + alone.levels.length;
  if (!recent || (signals >= 2 && alone.docs.length >= 4)) return alone;
  // What the new question names wins over what the old one named.
  const over = {};
  for (const k of ["countries", "fields", "levels"]) if (alone[k].length) over[k] = alone[k];
  return search(`${question} ${recent}`, opts, over);
}

function search(text, { maxDocs = 14, maxChars = 14000 } = {}, over = {}) {
  // "طب" at the start of an Egyptian sentence means "so / well", not medicine.
  const q = norm(text).replace(/^\s*طب\s+/, "").replace(/([؟?.!]\s*)طب\s+/g, "$1");
  let qt = tokens(q);
  qt = [...new Set(qt.flatMap((w) => [w, ...(SYN[w] ? tokens(SYN[w]) : [])]))];
  const qset = new Set(tokens(q));
  const cities = CITY_WORDS.filter(([, ws]) => ws.some((w) => (/\s|-/.test(w) ? q.includes(w) : qset.has(w)))).map(([c]) => c);
  let countries = [...new Set([...COUNTRY_WORDS.filter(([, ws]) => ws.some((w) => w && q.includes(w))).map(([c]) => c), ...cities.map((c) => c.country)])];
  const types = TYPE_HINTS.filter(([re]) => re.test(q)).map(([, t]) => t);
  let fields = FIELDS.filter(([re]) => re.test(q)).map(([, f]) => f);
  if (fields.includes("dentistry")) fields = fields.filter((f) => f !== "medicine"); // "طب أسنان" is dentistry
  if (fields.includes("veterinary")) fields = fields.filter((f) => f !== "medicine"); // "طب بيطري" is veterinary medicine
  let levels = LEVELS.filter(([re]) => re.test(q)).map(([, l]) => l);
  if (over.countries) countries = over.countries;
  if (over.fields) fields = over.fields;
  if (over.levels) levels = over.levels;
  const wantsFree = /مجان|ببلاش|بلاش|بدون رسوم|free|no fee|tuition.?free/.test(q);
  const wantsCheap = /ارخص|رخيص|cheap|اقل/.test(q);
  const wantsProgrammes = fields.length || levels.length || wantsFree || /برنامج|برامج|programme|program|course|تخصص|ادرس|دراسه|study|جامع|universit/.test(q);
  const cityUrls = new Set(cities.map((c) => `/city/${c.slug}`));
  const cityNames = cities.map((c) => norm(c.en));

  const scored = INDEX.map(({ d, words }) => {
    let s = 0;
    for (const w of qt) {
      if (words.has(w)) s += idf(w);
      else if (w.length >= 4) { for (const x of words) if (x.startsWith(w) || (x.length >= 5 && w.startsWith(x))) { s += idf(w) * 0.5; break; } }
    }
    const dc = d.country || null;
    if (countries.length) { if (dc && countries.includes(dc)) s += 4; else if (d.countries && d.countries.some((c) => countries.includes(c))) s += 1; else if (dc) s -= 6; }
    if (cityUrls.has(d.url)) s += 6;
    if (d.type === "programme" && cityNames.some((n) => norm(d.text.en).includes(`city: ${n}`))) s += 3;
    if (types.includes(d.type)) s += 5;
    if (d.type === "after30" && types.includes("after30")) s += 6; // an age question is about age first, whatever else it mentions
    if (d.type === "noielts" && types.includes("noielts")) s += 1;
    if (d.type === "programme") {
      if (fields.length) s += fields.includes(d.field) ? 4 : -4;
      if (levels.length) s += levels.includes(d.level) ? 2 : -3;
      if (wantsFree) s += d.free ? 3 : -1;
      if (wantsCheap && d.fee != null) s += d.free ? 2 : 1 / (1 + d.fee / 3000);
      if (types.length && !fields.length && !wantsFree) s -= 2;
      if (!wantsProgrammes) s -= 3;
    }
    return { d, s };
  }).filter((x) => x.s > 0.5).sort((a, b) => b.s - a.s);

  // Mix: keep some programmes and some guide documents, without repeating a URL too many times.
  const out = [];
  const perUrl = new Map();
  let chars = 0, progs = 0;
  for (const { d } of scored) {
    if (out.length >= maxDocs) break;
    if (d.type === "programme" && progs >= 8) continue;
    const n = perUrl.get(d.url) || 0;
    if (n >= 3) continue;
    const size = d.text.ar.length + d.title.ar.length;
    if (chars + size > maxChars) continue;
    out.push(d); perUrl.set(d.url, n + 1); chars += size;
    if (d.type === "programme") progs++;
  }
  return { docs: out, countries, types, fields, levels };
}

export const overviewText = (lang) => OVERVIEW.map((d) => `- ${d.overview[lang]} [${d.url}]`).join("\n");
