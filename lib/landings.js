// Search landing pages (/search/<slug>), generated from the programme data so they stay current.
// Only combinations with at least MIN programmes get a page, to avoid thin pages.
import programmes from "./programmes.json";
import { T } from "./i18n";
import { COUNTRY_IDS } from "./options";
import { progsAr } from "./arCount";

const MIN = 3;
const nAr = progsAr;
const SLUG = { de: "germany", nl: "netherlands", es: "spain", be: "belgium", ee: "estonia", pl: "poland", hu: "hungary", ro: "romania", lv: "latvia", lt: "lithuania", it: "italy", fi: "finland", bg: "bulgaria", se: "sweden", cz: "czechia", at: "austria", fr: "france", pt: "portugal", ie: "ireland", dk: "denmark", hr: "croatia", sk: "slovakia", cy: "cyprus", mt: "malta", no: "norway", lu: "luxembourg", ch: "switzerland", si: "slovenia", gr: "greece", is: "iceland", li: "liechtenstein" };
const FSLUG = { cs: "computer-science", ds: "data-science", business: "business", engineering: "engineering", health: "public-health", medicine: "medicine", dentistry: "dentistry", pharmacy: "pharmacy", veterinary: "veterinary-medicine", physio: "physiotherapy-nutrition", psychology: "psychology", nursing: "nursing", economics: "economics", architecture: "architecture", law: "law", media: "media-communication", education: "education", politics: "political-science", agriculture: "agriculture", environment: "environment", tourism: "tourism" };
const LV = {
  ar: { bachelor: "بكالوريوس", master: "ماجستير", doctorate: "دكتوراه" },
  en: { bachelor: "Bachelor's", master: "Master's", doctorate: "Doctorate" },
};
const LVS = { bachelor: "bachelors", master: "masters", doctorate: "phd" };

function build() {
  const out = [];
  const add = (slug, filter, title, h1) => {
    const list = programmes.filter(filter);
    if (list.length >= MIN) out.push({ slug, list, title, h1 });
  };
  for (const c of COUNTRY_IDS) {
    for (const lv of ["bachelor", "master", "doctorate"]) {
      add(`${LVS[lv]}-in-${SLUG[c]}`, (p) => p.country === c && p.level === lv,
        { ar: `${LV.ar[lv]} بالإنجليزية في ${T.ar.countries[c]}`, en: `English-taught ${LV.en[lv]} programmes in ${T.en.countries[c]}` }, c);
    }
    add(`tuition-free-${SLUG[c]}`, (p) => p.country === c && p.feePerYear === 0,
      { ar: `الدراسة بدون رسوم دراسية في ${T.ar.countries[c]} بالإنجليزية`, en: `Tuition-free English-taught study in ${T.en.countries[c]}` }, c);
  }
  for (const lv of ["bachelor", "master"]) {
    for (const f of Object.keys(FSLUG)) {
      add(`${LVS[lv]}-${FSLUG[f]}-europe`, (p) => p.level === lv && p.field === f,
        { ar: `${LV.ar[lv]} ${T.ar.fields[f]} في أوروبا بالإنجليزية`, en: `${LV.en[lv]} in ${T.en.fields[f]} in Europe, taught in English` }, null);
    }
    for (const b of [3000, 5000]) {
      add(`${LVS[lv]}-under-${b}-euros`, (p) => p.level === lv && p.feePerYear !== null && p.feePerYear <= b,
        { ar: `${LV.ar[lv]} بالإنجليزية في أوروبا برسوم ${b.toLocaleString("en-US")} يورو أو أقل في السنة`, en: `English-taught ${LV.en[lv]} programmes in Europe for €${b.toLocaleString("en-US")} a year or less` }, null);
    }
  }
  return out;
}

export const LANDINGS = build();
export const landingBySlug = (slug) => LANDINGS.find((l) => l.slug === slug);

export const LD_TEXT = {
  ar: {
    hub: "أدلة الدراسة في أوروبا بالإنجليزية",
    hubLead: "صفحات جاهزة حسب الدولة والتخصص والميزانية، من بيانات البرامج على موقعنا، وكل برنامج معه رابط المصدر الرسمي.",
    intro: (n, c, min, max, free) => `نعرض هنا ${nAr(n)} في الجامعات الحكومية${c ? ` في ${c}` : " في أوروبا"}، من صفحات الجامعات الرسمية. ${min !== null ? `${free ? `منها ${progsAr(free)} بدون رسوم دراسية، و` : ""}الرسوم السنوية لغير الأوروبيين${free ? " في البرامج المدفوعة" : ""} من ${min} إلى ${max} يورو` : free === n ? "كلها بدون رسوم دراسية" : `الرسوم غير منشورة لهذه البرامج${free ? `، ومنها ${progsAr(free)} بدون رسوم دراسية` : ""}`}. اضغط على أي برنامج لترى المواعيد وشرط اللغة والمعيشة.`,
    fee: "الرسوم", free: "بدون رسوم", na: "غير منشورة", deadline: "الموعد",
    more: "ابحث بفلاتر أكثر", country: "كل شيء عن الدراسة في", tools: "أدوات تساعدك",
    related: "صفحات قريبة",
    note: "الأرقام من صفحات الجامعات الرسمية وقت المراجعة، ومكتوب بجانب كل برنامج إن كان يحتاج تأكيداً. تأكد من المصدر قبل التقديم.",
    titleN: (t, n) => `${t}: ${nAr(n)}`,
  },
  en: {
    hub: "Guides to studying in Europe in English",
    hubLead: "Ready-made pages by country, field and budget, built from the programme data on our site; every programme links to its official source.",
    intro: (n, c, min, max, free) => `Here are ${n} programmes at public universities${c ? ` in ${c}` : " in Europe"}, from official university pages. ${min !== null ? `${free ? `${free} have no tuition fee; ` : ""}annual non-EU fees${free ? " for the paid ones" : ""} range from €${min} to €${max}` : free === n ? "All of them are tuition-free" : `Fees are not published for these programmes${free ? `; ${free} have no tuition fee` : ""}`}. Open any programme for deadlines, language requirements and living costs.`,
    fee: "Fee", free: "No tuition fee", na: "Not published", deadline: "Deadline",
    more: "Search with more filters", country: "Everything about studying in", tools: "Tools that help",
    related: "Related pages",
    note: "Figures come from official university pages at the time of review, and programmes needing confirmation are marked. Check the source before applying.",
    titleN: (t, n) => `${t}: ${n} programmes`,
  },
};
