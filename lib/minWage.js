// Official national minimum wages (checked 20 Nov 2026), for the "Can I support myself?" calculator (/earnings).
// rate + cur + per: the figure as the official source states it. per "hour" is used as is; per "month" is turned into
// an hourly figure by us: amount x payments a year / (52 x fullH), and the page says it is our calculation.
// none: true = no national statutory minimum wage (pay is set by collective agreements).
// check: true = the figure comes from a secondary source or needs a second look ("للتحقق").
// Euro conversion: ECB reference rates of 17 Nov 2026 (same as the catalogue).
export const MW_REVIEWED = "2026-11-21";
export const PER_EUR = { EUR: 1, GBP: 0.83305, CAD: 1.5704, AUD: 1.6316, NZD: 1.9985, MYR: 4.4983, PLN: 4.4038, CZK: 24.387, HUF: 364.93, RON: 5.3482, BAM: 1.95583 };

const T = (ar, en) => ({ ar, en });

export const MIN_WAGE = {
  de: { rate: 13.9, cur: "EUR", per: "hour", from: "2026-01-01", src: "https://www.bundesregierung.de/breg-de/service/fragen-und-antworten/mindestlohn-faq-1688186", note: T("يرتفع إلى 14.60 يورو في الساعة من 1 يناير 2027.", "Rises to €14.60 an hour on 1 January 2027.") },
  nl: { rate: 14.99, cur: "EUR", per: "hour", from: "2026-07-01", src: "https://www.rijksoverheid.nl/onderwerpen/minimumloon/bedragen-minimumloon/bedragen-minimumloon-2026", note: T("لمن عمره 21 سنة فأكثر. من هم أصغر لهم حد أقل (20 سنة: 11.99 يورو).", "For workers aged 21 and over. Younger workers have lower rates (age 20: €11.99).") },
  fr: { rate: 12.31, cur: "EUR", per: "hour", from: "2026-06-01", src: "https://code.travail.gouv.fr/fiche-ministere-travail/le-smic" },
  ie: { rate: 14.15, cur: "EUR", per: "hour", from: "2026-01-01", src: "https://www.irishstatutebook.ie/2025/en/si/0472.html", note: T("لمن عمره 20 سنة فأكثر (19 سنة: 12.74 يورو، 18 سنة: 11.32 يورو).", "For workers aged 20 and over (age 19: €12.74, age 18: €11.32).") },
  gb: { rate: 12.71, cur: "GBP", per: "hour", from: "2026-04-01", src: "https://www.gov.uk/national-minimum-wage-rates", note: T("لمن عمره 21 سنة فأكثر (18 إلى 20 سنة: 10.85 جنيه إسترليني).", "For workers aged 21 and over (ages 18 to 20: £10.85).") },
  au: { rate: 26.44, cur: "AUD", per: "hour", from: "2026-07-01", src: "https://www.fairwork.gov.au/minimum-wages", note: T("الحد الوطني لمن لا تغطيهم اتفاقية مهنية. العامل المؤقت (casual) يأخذ 25% إضافية على الأقل (33.05 دولاراً أسترالياً).", "National Minimum Wage for workers not covered by an award. Casual workers get at least 25% more ($33.05).") },
  nz: { rate: 23.95, cur: "NZD", per: "hour", from: "2026-04-01", src: "https://www.employment.govt.nz/news-and-updates/minimum-wage-is-increasing-on-1-april-2026", note: T("الحد للبالغين. حد البداية والتدريب 19.16 دولاراً نيوزيلندياً.", "Adult rate. The starting-out and training rate is NZ$19.16.") },
  ca: {
    regions: [
      { id: "nl", ar: "نيوفاوندلاند ولابرادور (سانت جونز)", en: "Newfoundland and Labrador (St. John's)", rate: 16.35, cur: "CAD", per: "hour", from: "2026-04-01", src: "https://www.gov.nl.ca/releases/2026/government-services/0226n02/" },
      { id: "sk", ar: "ساسكاتشوان (ساسكاتون)", en: "Saskatchewan (Saskatoon)", rate: 15.7, cur: "CAD", per: "hour", from: "2026-10-01", src: "https://www.saskatchewan.ca/government/news-and-media/2026/june/29/protecting-jobs-and-increasing-workers-wages" },
    ],
    note: T("في كندا يحدد كل إقليم حده الأدنى؛ هذه أقاليم الجامعات التي في دليلنا.", "In Canada each province sets its own minimum; these are the provinces of the universities in our guide."),
  },
  es: { rate: 1221, cur: "EUR", per: "month", payments: 14, fullH: 40, from: "2026-01-01", src: "https://www.boe.es/eli/es/rd/2026/02/18/126/con", note: T("1,221 يورو شهرياً في 14 دفعة لدوام كامل.", "€1,221 a month in 14 payments for full-time work.") },
  pt: { rate: 920, cur: "EUR", per: "month", payments: 14, fullH: 40, from: "2026-01-01", src: "https://www.dgert.gov.pt/retribuicao-minima-mensal-garantida-para-2026", note: T("920 يورو شهرياً في 14 دفعة لدوام كامل (البر الرئيسي؛ ماديرا والأزور لهما قيمة خاصة).", "€920 a month in 14 payments for full-time work (mainland; Madeira and the Azores set their own).") },
  be: { rate: 2189.81, cur: "EUR", per: "month", payments: 12, fullH: 38, from: "2026-04-01", src: "https://www.lacsc.be/vos-droits/travailler-dans-le-secteur-prive/salaire/salaire-minimum", check: true, note: T("الحد الأدنى العام (RMMMG) لدوام 38 ساعة أسبوعياً؛ كثير من القطاعات لها حد أعلى في اتفاقياتها.", "The general minimum (RMMMG) for a 38-hour week; many sectors set a higher minimum in their agreements.") },
  pl: { rate: 31.4, cur: "PLN", per: "hour", from: "2026-01-01", src: "https://zielonalinia.gov.pl/wynagrodzenie-minimalne-w-2026-1/" },
  cz: { rate: 134.4, cur: "CZK", per: "hour", from: "2026-01-01", src: "https://mpsv.gov.cz/web/cz/minimalni-mzda" },
  sk: { rate: 5.259, cur: "EUR", per: "hour", from: "2026-01-01", src: "https://employment.gov.sk/sk/praca-zamestnanost/vztah-zamestnanca-zamestnavatela/odmenovanie/minimalna-mzda/sumy-minimalnej-mzdy.html" },
  hu: { rate: 1856, cur: "HUF", per: "hour", from: "2026-01-01", src: "https://njt.jog.gov.hu/jogszabaly/2025-426-20-22" },
  lt: { rate: 7.05, cur: "EUR", per: "hour", from: "2026-01-01", src: "https://lrv.lt/media/viesa/saugykla/2025/10/EKYvBrfYSz0.pdf" },
  lv: { rate: 780, cur: "EUR", per: "month", payments: 12, fullH: 40, from: "2026-01-01", src: "https://www.lm.gov.lv/en/minimum-monthly-wage" },
  ee: { rate: 5.67, cur: "EUR", per: "hour", from: "2026-04-01", src: "https://www.err.ee/1609943063/tooandjad-ja-ametiuhingud-joudsid-alampalga-kusimuses-kokkuleppele", check: true },
  ro: { rate: 25.949, cur: "RON", per: "hour", from: "2026-07-01", src: "https://www.avocatnet.ro/articol_70565/", check: true },
  bg: { rate: 620.2, cur: "EUR", per: "month", payments: 12, fullH: 40, from: "2026-01-01", src: "https://nra.bg/wps/portal/nra/actualno/vpisvane_v_registura_na_zaetostta_vuv_vruzka_s_opredelenata_mrz_ot_01.01.2026" },
  hr: { rate: 1050, cur: "EUR", per: "month", payments: 12, fullH: 40, from: "2026-01-01", src: "https://narodne-novine.nn.hr/clanci/sluzbeni/2025_10_132_1931.html" },
  si: { rate: 8.98, cur: "EUR", per: "hour", from: "2026-02-05", src: "https://www.gov.si/novice/2026-02-05-po-dvigu-minimalne-place-visje-minimalne-urne-postavke-in-nadomestilo-za-brezposelnost/", note: T("الحد الأدنى للساعة في عمل الطلاب (študentsko delo). الحد الشهري لدوام كامل 1,481.88 يورو.", "Minimum hourly rate for student work (študentsko delo). The full-time monthly minimum is €1,481.88.") },
  gr: { rate: 920, cur: "EUR", per: "month", payments: 14, fullH: 40, from: "2026-04-01", src: "https://www.odigostoupoliti.eu/kya-gia-tin-afksisi-tou-katotatou-misthou-apo-1-4-2026-fek/", check: true, note: T("920 يورو شهرياً للموظفين، وتُدفع 14 مرة في السنة.", "€920 a month for employees, paid 14 times a year.") },
  cy: { rate: 979, cur: "EUR", per: "month", payments: 12, fullH: 40, from: "2026-01-01", src: "https://www.en.politis.com.cy/economy/976448/minimum-wage-set-to-rise-to-eur1088-from-january-2026", check: true, note: T("979 يورو عند التعيين، و1,088 يورو بعد 6 أشهر مع نفس صاحب العمل. لا يشمل الفنادق والعمل المنزلي والزراعة.", "€979 on hiring and €1,088 after 6 months with the same employer. Excludes hotels, domestic and farm work.") },
  mt: { rate: 5.74, cur: "EUR", per: "hour", from: "2026-01-01", src: "https://dier.gov.mt/en/services/employment-conditions/wages/national-minimum-wage/" },
  lu: { rate: 16.0192, cur: "EUR", per: "hour", from: "2026-06-01", src: "https://fedil.lu/fr/publications/parametres-sociaux-applicables-a-partir-du-1er-juin-2026/", check: true, note: T("الحد لغير المؤهلين (18 سنة فأكثر). عقد الطالب (contrat étudiant) يجوز فيه أجر أقل: 80% من هذا الحد على الأقل.", "Unskilled rate for ages 18 and over. A student contract may pay less: at least 80% of this rate.") },
  my: { rate: 8.72, cur: "MYR", per: "hour", from: "2025-08-01", src: "https://www.skrine.com/insights/alerts/july-2025/minimum-wage-throughout-malaysia-aligned-from-1-au", check: true, note: T("الحد الشهري 1,700 رينغيت. لكن الطالب الدولي لا يعمل أثناء الدراسة، بل في الإجازات فقط.", "RM1,700 a month. International students may not work during term, only in breaks.") },
  tr: { none: true, own: true, note: T("الحد الأدنى في تركيا 33,030 ليرة إجمالي (28,075.50 صافية) شهرياً في 2026 (وزارة العمل). لكن الطالب الدولي يحتاج تصريح عمل يطلبه صاحب العمل، ولا يوجد سقف ساعات منشور، فلم ندخلها في الحساب.", "Türkiye's minimum is TRY 33,030 gross (TRY 28,075.50 net) a month in 2026 (Ministry of Labour). But an international student needs a work permit requested by the employer and there is no published hour cap, so we leave it out.") },
};
// Balkans, Caucasus and Moldova (checked 21 Nov 2026). The ECB publishes no reference rate for RSD, MDL, AMD, GEL or MKD,
// so for those the official figure is given in the note only (no euro calculation). BAM is pegged at 1.95583 per euro.
MIN_WAGE.ba = {
  regions: [
    { id: "fbih", ar: "اتحاد البوسنة والهرسك (سراييفو)", en: "Federation of BiH (Sarajevo)", rate: 1027, cur: "BAM", per: "month", payments: 12, fullH: 40, from: "2026-01-01", src: "https://www.paragraf.ba/dnevne-vijesti/05012026/05012026-vijest2.html", check: true },
    { id: "rs", ar: "جمهورية صرب البوسنة (فوتشا)", en: "Republika Srpska (Foča)", rate: 1000, cur: "BAM", per: "month", payments: 12, fullH: 40, from: "2026-01-01", src: "https://www.paragraf.ba/propisi/republika-srpska/odluka-o-najnizoj-plati-u-republici-srpskoj-za-2026-godinu.html", check: true },
  ],
  note: T("الحد صافٍ (بعد الضرائب): 1,027 ماركاً في الاتحاد و1,000 مارك في جمهورية صرب البوسنة شهرياً في 2026. لم نجد سقف ساعات عمل منشوراً للطلاب.", "Net figures (after tax): BAM 1,027 a month in the Federation and BAM 1,000 in Republika Srpska in 2026. We found no published student work-hour cap."),
};
MIN_WAGE.me = { rate: 600, cur: "EUR", per: "month", payments: 12, fullH: 40, from: "2024-10-01", src: "https://wageindicator.org/sr-me/rad-u-crnoj-gori/minimalna-zarada/", check: true, note: T("600 يورو صافية شهرياً للوظائف حتى المستوى التعليمي الخامس، و800 يورو للمستوى السادس فأعلى (تعديل قانون العمل 2024، من مصدر ثانوي، للتحقق).", "€600 net a month for jobs up to education level V and €800 for level VI and above (2024 Labour Law amendment, from a secondary source, to verify).") };
MIN_WAGE.rs = { none: true, own: true, note: T("الحد الأدنى في صربيا 371 ديناراً صافية في الساعة في 2026، ويصبح 405 دنانير من 1 يناير 2027 (قرار الحكومة، للتحقق من الجريدة الرسمية). لم نحسبه باليورو لأن البنك المركزي الأوروبي لا ينشر سعر الدينار الصربي.", "Serbia's minimum is RSD 371 net an hour in 2026, rising to RSD 405 on 1 January 2027 (government decision, to verify in the Official Gazette). We do not convert it to euros because the ECB publishes no rate for the Serbian dinar.") };
MIN_WAGE.md = { none: true, own: true, note: T("الحد الأدنى في مولدوفا 6,300 لاي شهرياً من 1 يناير 2026 لدوام كامل 169 ساعة، أي 37.28 لاي في الساعة (قرار الحكومة على gov.md). لم نحسبه باليورو لأن البنك المركزي الأوروبي لا ينشر سعر اللاي المولدوفي، ولم نجد سقف ساعات عمل منشوراً للطلاب.", "Moldova's minimum is MDL 6,300 a month from 1 January 2026 for 169 hours full time, i.e. MDL 37.28 an hour (government decision on gov.md). We do not convert it because the ECB publishes no rate for the Moldovan leu, and we found no published student work-hour cap.") };
MIN_WAGE.am = { none: true, own: true, note: T("الحد الأدنى في أرمينيا 75,000 درام شهرياً منذ 1 يناير 2023 (من مصادر ثانوية، للتحقق). لم نحسبه باليورو لأن البنك المركزي الأوروبي لا ينشر سعر الدرام، ولم نجد سقف ساعات عمل منشوراً للطلاب.", "Armenia's minimum is AMD 75,000 a month since 1 January 2023 (from secondary sources, to verify). We do not convert it because the ECB publishes no rate for the dram, and we found no published student work-hour cap.") };
MIN_WAGE.ge = { none: true, own: true, note: T("الحد الأدنى الرسمي للقطاع الخاص في جورجيا 20 لاري شهرياً فقط ولم يتغير منذ 1999 (من مصادر ثانوية، للتحقق)، فهو لا يصلح للحساب؛ الأجور الفعلية يحددها السوق.", "Georgia's official private-sector minimum is only GEL 20 a month, unchanged since 1999 (from secondary sources, to verify), so it is no use for the calculation; actual pay is set by the market.") };
MIN_WAGE.mk = { none: true, own: true, note: T("الحد الأدنى في مقدونيا الشمالية 26,046 ديناراً صافية (38,507 إجمالي) شهرياً من 1 مارس 2026 (من مصادر ثانوية، للتحقق). لكن حسب قانون الأجانب لا يُسمح لمن يقيم للدراسة بالعمل (للتحقق)، فلم ندخلها في الحساب.", "North Macedonia's minimum is MKD 26,046 net (MKD 38,507 gross) a month from 1 March 2026 (from secondary sources, to verify). But under the Law on Foreigners people staying for study may not work (to verify), so we leave it out.") };
for (const c of ["at", "dk", "fi", "se", "it", "no", "is", "ch", "li"]) MIN_WAGE[c] = { none: true };

// Gross hourly rate in euros for a country (or one of its regions).
export function hourlyEur(m) {
  if (!m || m.none) return null;
  const h = m.per === "hour" ? m.rate : (m.rate * (m.payments || 12)) / (52 * m.fullH);
  return h / (PER_EUR[m.cur] || 1);
}
// Hourly figure in the source's own currency (computed for monthly figures).
export function hourlyLocal(m) {
  if (!m || m.none) return null;
  return m.per === "hour" ? m.rate : (m.rate * (m.payments || 12)) / (52 * m.fullH);
}
