// Alternatives to IELTS/TOEFL per university, from the university's own admission pages only.
// duo = Duolingo English Test, moi = a previous degree taught fully in English (Medium of Instruction letter or a transcript that says so).
// Per level: b = bachelor, m = master. "yes" accepted · "no" not accepted · "case" decided case by case · null = not published in the source we checked.
// Reviewed 2026-11-15. The monthly review extends this list.
export const ALT_REVIEWED = "2026-11-15";

export const ENGLISH_ALT = {
  "Budapest University of Technology and Economics (BME)": {
    duo: { b: "yes", m: "yes" }, duoMin: "60", moi: { b: "yes", m: "yes" },
    note: { ar: "الجامعة بتقبل Duolingo أو شهادة إن دراستك كانت بالإنجليزي، أو امتحان إنجليزي أونلاين في نظام القبول بتاعها. بعض الكليات بتطلب أعلى من الحد العام.", en: "BME accepts Duolingo, a Medium of Instruction certificate, or its own online English entrance test. Some faculties ask for more than the general minimum." },
    src: "https://xplore.bme.hu/admission",
  },
  "Riga Technical University": {
    duo: { b: "yes", m: "yes" }, duoMin: "95", moi: { b: "yes", m: "yes" },
    note: { ar: "لو دراستك في الثانوي أو الجامعة كانت بالإنجليزي، ابعت خطاب تأكيد من مدرستك أو جامعتك، إلا لو الشهادة نفسها مكتوب فيها لغة الدراسة.", en: "If your school or university studies were in English, send a confirmation letter from them, unless your certificate already states the language of instruction." },
    src: "https://apply.rtu.lv/news/new/10-english-language-certificates-accepted-rtu",
  },
  "Vilnius University": {
    duo: { b: "yes", m: "yes" }, duoMin: null, moi: { b: "yes", m: "yes" },
    note: { ar: "Duolingo مقبول والدرجة المطلوبة بتختلف حسب البرنامج (مثلاً 120 لبرامج بكالوريوس). لو شهادتك الجامعية بالإنجليزي بتتعفى من الاختبار حسب صفحة البرنامج.", en: "Duolingo is accepted, with the score depending on the programme (e.g. 120 for some bachelor's). A university degree taught in English exempts you, per the programme page." },
    src: "https://www.vu.lt/en/studies/bachelor-studies/global-marketing",
  },
  "Warsaw University of Technology (WUT)": {
    duo: { b: "no", m: "no" }, duoMin: null, moi: { b: "no", m: "yes" },
    note: { ar: "للماجستير: لو بكالوريوسك كان 100% بالإنجليزي (المحاضرات والامتحانات والمعامل) ممكن يقبلوا خطاب لغة الدراسة. للبكالوريوس: خطاب المدرسة مش مقبول. Duolingo مش مقبول.", en: "For a master's: if your bachelor's was 100% in English (lectures, exams, labs), a medium-of-instruction letter may be accepted. For a bachelor's: a school letter is not accepted. Duolingo is not accepted." },
    src: "https://www.students.pw.edu.pl/Resources/Application-Glossary/English-Proficency",
  },
  "SGH Warsaw School of Economics": {
    duo: { b: null, m: null }, duoMin: null, moi: { b: null, m: "yes" },
    note: { ar: "مقبول تأكيد (في كشف الدرجات أو شهادة من الجامعة) إن لغة الدراسة في البكالوريوس كله كانت الإنجليزي.", en: "Confirmation (in the transcript or a university certificate) that your whole bachelor's was taught in English is accepted." },
    src: "https://www.sgh.waw.pl/en/how-demonstrate-your-proficiency-english",
  },
  "Universidad Carlos III de Madrid (UC3M)": {
    duo: { b: null, m: null }, duoMin: null, moi: { b: null, m: "yes" },
    note: { ar: "للماجستير: لو شهادتك الجامعية كلها كانت بالإنجليزي مش هيطلبوا شهادة لغة، بشرط تقدم ما يثبت ده.", en: "For a master's: if your whole university degree was taught in English, no language certificate is required, with proof." },
    src: "https://www.uc3m.es/ss/Satellite/Postgrado/en/TextoMixta/1371232538908",
  },
  "Maastricht University": {
    duo: { b: null, m: null }, duoMin: null, moi: { b: null, m: "yes" },
    note: { ar: "للماجستير: لو بكالوريوسك أو ماجستيرك كانت الإنجليزي هي لغة الدراسة الوحيدة فيه، بتستوفي الشرط تلقائياً وترفع ما يثبت ده. الجامعة ممكن تطلب أكتر لو عندها شك.", en: "For a master's: if English was the sole language of instruction of your bachelor's or master's, you meet the requirement automatically and upload proof. UM may ask for more if in doubt." },
    src: "https://maastrichtuniversity.nl/sites/default/files/2023-04/Language%20requirements%20English%20masters%20in%20PDF.pdf",
  },
  "University of Antwerp (UAntwerpen)": {
    duo: { b: null, m: null }, duoMin: null, moi: { b: null, m: "case" },
    note: { ar: "للماجستير: لجنة القبول ممكن تعفيك لو درست سنة دراسية على الأقل (60 ECTS) في برنامج بكالوريوس أو ماجستير بالإنجليزي. القرار حالة بحالة.", en: "For a master's: the admissions board may exempt you if you studied at least one academic year (60 ECTS) in an English-taught bachelor's or master's. Decided case by case." },
    src: "https://www.uantwerpen.be/en/study/admission-and-enrolment/admission/master/admission-requirements/",
  },
  "University of Twente": {
    duo: { b: "no", m: "no" }, duoMin: null, moi: { b: "no", m: "no" },
    note: { ar: "الجامعة بتقبل الشهادات اللي في قايمتها بس، ومفيش إعفاء حتى لو دراستك كانت بالإنجليزي.", en: "Only the certificates on its list are accepted, and there are no waivers, even if you studied in English." },
    src: "https://www.utwente.nl/en/education/master/programmes/applied-mathematics/admission/admission-international",
  },
  "Tallinn University (TLU)": {
    duo: { b: "no", m: "no" }, duoMin: null, moi: { b: "no", m: "no" },
    note: { ar: "الجامعة كاتبة صراحة إنها مش بتقبل Duolingo ولا خطاب لغة الدراسة.", en: "The university states it does not accept Duolingo or a medium-of-instruction letter." },
    src: "https://www.tlu.ee/en/proof-english-proficiency",
  },
};

export const altFor = (university, level) => {
  const a = ENGLISH_ALT[university];
  if (!a) return null;
  const k = level === "bachelor" ? "b" : "m";
  const duo = a.duo[k], moi = a.moi[k];
  if (duo === null && moi === null) return null;
  return { duo, moi, duoMin: a.duoMin, note: a.note, src: a.src };
};

export const ALT_TEXT = {
  ar: {
    title: "تدرس في أوروبا من غير IELTS؟",
    lead: "بعض الجامعات بتقبل اختبار Duolingo English Test (أرخص وبتمتحنه من البيت)، أو بتقبل إن شهادتك السابقة كانت بالإنجليزي بدل IELTS و TOEFL. هنا الجامعات اللي راجعنا صفحاتها الرسمية.",
    what: "يعني إيه البدائل دي؟",
    duoDef: "Duolingo English Test: اختبار إنجليزي أونلاين بتمتحنه من البيت، ونتيجته من 160.",
    moiDef: "خطاب لغة الدراسة، واسمه بالإنجليزي Medium of Instruction: ورقة من جامعتك أو مدرستك إن الدراسة كلها كانت بالإنجليزي. ده بينفع بس لو برنامجك كله كان بيتدرّس بالإنجليزي، زي الأقسام والبرامج الإنجليزي في بعض الجامعات.",
    yesTitle: "جامعات بتقبل بديل واحد على الأقل",
    noTitle: "جامعات مش بتقبل البدائل دي",
    duo: "Duolingo", moi: "شهادة إن دراستك كانت بالإنجليزي",
    st: { yes: "مقبول", no: "مش مقبول", case: "حالة بحالة", null: "غير منشور" },
    min: (n) => `من ${n}`,
    bachelor: "بكالوريوس", master: "ماجستير",
    progs: (n) => `${n} برنامج عندنا`,
    src: "المصدر",
    warn: "الشروط بتتغير كل سنة، وبعض البرامج بتطلب أكتر من شرط الجامعة العام. اتأكد من صفحة البرنامج قبل ما تقدم. والسفارة ممكن تطلب إثبات لغة للتأشيرة حتى لو الجامعة أعفتك.",
    reviewed: "آخر مراجعة",
    progLine: "بدائل IELTS في الجامعة دي",
    more: "كل الجامعات اللي بتقبل بدائل",
  },
  en: {
    title: "Study in Europe without IELTS?",
    lead: "Some universities accept the Duolingo English Test (cheaper, taken at home), or a previous degree taught in English, instead of IELTS or TOEFL. These are the universities whose official pages we checked.",
    what: "What are these alternatives?",
    duoDef: "Duolingo English Test: an online English test you take at home, scored out of 160.",
    moiDef: "Medium of Instruction letter: a document from your university or school saying your whole programme was taught in English. It only works if your whole programme was taught in English, such as English-taught departments at some universities.",
    yesTitle: "Universities that accept at least one alternative",
    noTitle: "Universities that do not accept these alternatives",
    duo: "Duolingo", moi: "Degree taught in English",
    st: { yes: "Accepted", no: "Not accepted", case: "Case by case", null: "Not published" },
    min: (n) => `from ${n}`,
    bachelor: "Bachelor's", master: "Master's",
    progs: (n) => `${n} programmes on our site`,
    src: "Source",
    warn: "Rules change every year, and some programmes ask for more than the university's general rule. Check the programme page before applying. The embassy may still ask for proof of English for the visa even if the university exempts you.",
    reviewed: "Last reviewed",
    progLine: "Alternatives to IELTS at this university",
    more: "All universities that accept alternatives",
  },
};
