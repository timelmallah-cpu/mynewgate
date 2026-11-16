// Alternatives to IELTS/TOEFL per university, from the university's own admission pages only.
import { progsAr } from "./arCount";
// duo = Duolingo English Test, moi = a previous degree taught fully in English (Medium of Instruction letter or a transcript that says so).
// Per level: b = bachelor, m = master. "yes" accepted · "no" not accepted · "case" decided case by case · null = not published in the source we checked.
// Reviewed 2026-11-15. The monthly review extends this list.
export const ALT_REVIEWED = "2026-11-15";

export const ENGLISH_ALT = {
  "Budapest University of Technology and Economics (BME)": {
    duo: { b: "yes", m: "yes" }, duoMin: "60", moi: { b: "yes", m: "yes" },
    note: { ar: "تقبل الجامعة Duolingo أو شهادة بأن دراستك كانت بالإنجليزية، أو امتحان إنجليزية إلكترونياً في نظام القبول الخاص بها. تطلب بعض الكليات أكثر من الحد العام.", en: "BME accepts Duolingo, a Medium of Instruction certificate, or its own online English entrance test. Some faculties ask for more than the general minimum." },
    src: "https://xplore.bme.hu/admission",
  },
  "Riga Technical University": {
    duo: { b: "yes", m: "yes" }, duoMin: "95", moi: { b: "yes", m: "yes" },
    note: { ar: "إذا كانت دراستك في الثانوية أو الجامعة بالإنجليزية، أرسل خطاب تأكيد من مدرستك أو جامعتك، إلا إذا كانت لغة الدراسة مكتوبة في الشهادة نفسها.", en: "If your school or university studies were in English, send a confirmation letter from them, unless your certificate already states the language of instruction." },
    src: "https://apply.rtu.lv/news/new/10-english-language-certificates-accepted-rtu",
  },
  "Vilnius University": {
    duo: { b: "yes", m: "yes" }, duoMin: null, moi: { b: "yes", m: "yes" },
    note: { ar: "Duolingo مقبول والدرجة المطلوبة تختلف حسب البرنامج (مثلاً 120 لبرامج البكالوريوس). إذا كانت شهادتك الجامعية بالإنجليزية تُعفى من الاختبار حسب صفحة البرنامج.", en: "Duolingo is accepted, with the score depending on the programme (e.g. 120 for some bachelor's). A university degree taught in English exempts you, per the programme page." },
    src: "https://www.vu.lt/en/studies/bachelor-studies/global-marketing",
  },
  "Warsaw University of Technology (WUT)": {
    duo: { b: "no", m: "no" }, duoMin: null, moi: { b: "no", m: "yes" },
    note: { ar: "للماجستير: إذا كان البكالوريوس 100% بالإنجليزية (المحاضرات والامتحانات والمعامل) قد يقبلون خطاب لغة الدراسة. للبكالوريوس: خطاب المدرسة غير مقبول. Duolingo غير مقبول.", en: "For a master's: if your bachelor's was 100% in English (lectures, exams, labs), a medium-of-instruction letter may be accepted. For a bachelor's: a school letter is not accepted. Duolingo is not accepted." },
    src: "https://www.students.pw.edu.pl/Resources/Application-Glossary/English-Proficency",
  },
  "SGH Warsaw School of Economics": {
    duo: { b: null, m: null }, duoMin: null, moi: { b: null, m: "yes" },
    note: { ar: "يُقبل تأكيد (في كشف الدرجات أو شهادة من الجامعة) بأن لغة الدراسة في البكالوريوس كله كانت الإنجليزية.", en: "Confirmation (in the transcript or a university certificate) that your whole bachelor's was taught in English is accepted." },
    src: "https://www.sgh.waw.pl/en/how-demonstrate-your-proficiency-english",
  },
  "Universidad Carlos III de Madrid (UC3M)": {
    duo: { b: null, m: null }, duoMin: null, moi: { b: null, m: "yes" },
    note: { ar: "للماجستير: إذا كانت شهادتك الجامعية كلها بالإنجليزية فلن يطلبوا شهادة لغة، بشرط أن تقدّم ما يثبت ذلك.", en: "For a master's: if your whole university degree was taught in English, no language certificate is required, with proof." },
    src: "https://www.uc3m.es/ss/Satellite/Postgrado/en/TextoMixta/1371232538908",
  },
  "Maastricht University": {
    duo: { b: null, m: null }, duoMin: null, moi: { b: null, m: "yes" },
    note: { ar: "للماجستير: إذا كانت الإنجليزية هي لغة الدراسة الوحيدة في البكالوريوس أو الماجستير، تستوفي الشرط وترفع ما يثبت ذلك (حسب لائحة كلية الاقتصاد والأعمال SBE؛ وقد تختلف الكليات الأخرى).", en: "For a master's: if English was the sole language of instruction of your bachelor's or master's, you meet the requirement and upload proof (per the School of Business and Economics regulations; other faculties may differ)." },
    src: "https://www.maastrichtuniversity.nl/file/sbe-msc-eer-2025-2026defv2pdf",
  },
  "University of Antwerp (UAntwerpen)": {
    duo: { b: null, m: null }, duoMin: null, moi: { b: null, m: "case" },
    note: { ar: "للماجستير: قد تعفيك لجنة القبول إذا درست سنة دراسية على الأقل (60 ECTS) في برنامج بكالوريوس أو ماجستير بالإنجليزية. القرار حسب كل حالة.", en: "For a master's: the admissions board may exempt you if you studied at least one academic year (60 ECTS) in an English-taught bachelor's or master's. Decided case by case." },
    src: "https://www.uantwerpen.be/en/study/admission-and-enrolment/admission/master/admission-requirements/",
  },
  "University of Twente": {
    duo: { b: "no", m: "no" }, duoMin: null, moi: { b: "no", m: "no" },
    note: { ar: "تقبل الجامعة الشهادات الموجودة في قائمتها فقط، ولا يوجد إعفاء حتى إذا كانت دراستك بالإنجليزية.", en: "Only the certificates on its list are accepted, and there are no waivers, even if you studied in English." },
    src: "https://www.utwente.nl/en/education/master/programmes/applied-mathematics/admission/admission-international",
  },
  "Tallinn University (TLU)": {
    duo: { b: "no", m: "no" }, duoMin: null, moi: { b: "no", m: "no" },
    note: { ar: "تذكر الجامعة صراحة أنها لا تقبل Duolingo ولا خطاب لغة الدراسة.", en: "The university states it does not accept Duolingo or a medium-of-instruction letter." },
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
    title: "الدراسة في أوروبا بدون IELTS",
    lead: "تقبل بعض الجامعات اختبار Duolingo English Test (أرخص ويُؤدى من المنزل)، أو تقبل أن تكون شهادتك السابقة بالإنجليزية بدلاً من IELTS و TOEFL. هنا الجامعات التي راجعنا صفحاتها الرسمية.",
    what: "ما هذه البدائل؟",
    duoDef: "Duolingo English Test: اختبار إنجليزية عبر الإنترنت تؤديه من المنزل، ونتيجته من 160.",
    moiDef: "خطاب لغة الدراسة، ويسمى بالإنجليزية Medium of Instruction: وثيقة من جامعتك أو مدرستك تفيد بأن الدراسة كلها كانت بالإنجليزية. وهو مفيد فقط إذا كان برنامجك كله يُدرَّس بالإنجليزية، مثل الأقسام والبرامج الإنجليزية في بعض الجامعات.",
    yesTitle: "جامعات تقبل بديلاً واحداً على الأقل",
    noTitle: "جامعات لا تقبل هذه البدائل",
    duo: "Duolingo", moi: "شهادة بأن دراستك كانت بالإنجليزية",
    st: { yes: "مقبول", no: "غير مقبول", case: "حسب الحالة", null: "غير منشور" },
    min: (n) => `من ${n}`,
    bachelor: "بكالوريوس", master: "ماجستير",
    progs: (n) => `${progsAr(n)} لدينا`,
    src: "المصدر",
    warn: "الشروط تتغير كل سنة، وتطلب بعض البرامج أكثر من شرط الجامعة العام. تأكد من صفحة البرنامج قبل التقديم. وقد تطلب السفارة إثبات لغة للتأشيرة حتى إذا أعفتك الجامعة.",
    reviewed: "آخر مراجعة",
    progLine: "بدائل IELTS في هذه الجامعة",
    more: "كل الجامعات التي تقبل بدائل",
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
