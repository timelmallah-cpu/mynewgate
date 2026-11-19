// Share cards (Open Graph images) for programme and scholarship pages, drawn with next/og.
// next/og shapes Arabic letters but lays words out left to right, so Arabic lines are built word by word in a
// row-reverse flex box. Keep Latin text (programme and university names) on its own lines.
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const W = 1200, H = 630;
const NAVY = "#15234B", GOLD = "#E9B949", INK = "#FFFFFF", SOFT = "#C9D1E6", PANEL = "#1F3163";
const AR_MONTHS = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
const EN_MONTHS = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let fontsP;
function fonts() {
  const dir = join(process.cwd(), "lib/og/fonts");
  const f = (n) => readFile(join(dir, `ibm-plex-sans-arabic-${n}-normal.woff`));
  fontsP ||= Promise.all([f("latin-400"), f("latin-700"), f("arabic-400"), f("arabic-700")]).then(([l4, l7, a4, a7]) => [
    { name: "PlexLatin", data: l4, weight: 400 }, { name: "PlexLatin", data: l7, weight: 700 },
    { name: "PlexArabic", data: a4, weight: 400 }, { name: "PlexArabic", data: a7, weight: 700 },
  ]);
  return fontsP;
}

let logoP;
function logo() {
  logoP ||= readFile(join(process.cwd(), "public/icon-192.png")).then((b) => `data:image/png;base64,${b.toString("base64")}`).catch(() => null);
  return logoP;
}

const el = (style, children) => ({ type: "div", props: { style: { display: "flex", ...style }, children } });

// Arabic text: next/og shapes each word but places words left to right and measures Arabic words too wide, so we
// break the text into lines ourselves, keep runs of Latin words together, and write each line's chunks in reverse
// order as one plain string. Avoid brackets around Arabic words (they come out reversed).
const LATIN = /^[\x00-\x7F€·–-]+$/;
function arText(text, style = {}) {
  const size = style.fontSize || 32;
  const maxW = style.maxWidth || 1080;
  const chunks = [];
  // Brackets around Arabic words come out with reversed letters: drop them and put a dot before the bracketed part.
  const clean = String(text).replace(/([\u0600-\u06FF])([A-Za-z])/g, "$1 $2").replace(/\(([^()]*[\u0600-\u06FF][^()]*)\)/g, "· $1");
  for (const w of clean.split(/\s+/).filter(Boolean)) {
    const last = chunks[chunks.length - 1];
    if (last && LATIN.test(w) && /[A-Za-z]/.test(w) && LATIN.test(last) && /[A-Za-z]/.test(last)) chunks[chunks.length - 1] = `${last} ${w}`;
    else chunks.push(w);
  }
  const lines = [[]];
  let width = 0;
  for (const c of chunks) {
    const w = (c.length + 1) * size * 0.62;
    if (width + w > maxW && lines[lines.length - 1].length) { lines.push([]); width = 0; }
    lines[lines.length - 1].push(c);
    width += w;
  }
  const { maxWidth, ...rest } = style;
  // Inside a line: runs of pure Arabic words become one string in normal order joined by no-break spaces (next/og
  // orders the words of one string right to left itself; reversing them printed "الدراسة بوابة"); numbers and Latin chunks stay separate boxes. The boxes go right to left.
  const AR = /[\u0600-\u06FF]/, NOT_AR = /[A-Za-z0-9]/;
  const line = (l) => {
    const runs = [];
    for (const c of l) {
      const ar = AR.test(c) && !NOT_AR.test(c);
      const last = runs[runs.length - 1];
      if (ar && last && last.ar) last.words.push(c); else runs.push({ ar, words: [c] });
    }
    return el({ flexDirection: "row-reverse", columnGap: Math.round(size * 0.28) },
      runs.map((r) => el({ textAlign: "right", justifyContent: "flex-end" }, r.ar ? r.words.join("\u00A0") : r.words.join(" "))));
  };
  return el({ flexDirection: "column", alignItems: "flex-end", ...rest }, lines.map(line));
}

const latin = (text, style = {}) => el({ ...style }, String(text));

export function fmtDate(iso, lang) {
  const [y, m, d] = iso.split("-").map(Number);
  return lang === "ar" ? `${d} ${AR_MONTHS[m - 1]} ${y}` : `${d} ${EN_MONTHS[m - 1]} ${y}`;
}

// The next date on or after today from a list of { d | date, est | kind } entries.
export function nextDate(list, today = new Date().toISOString().slice(0, 10)) {
  return (list || []).map((x) => ({ d: x.d || x.date, est: x.est || (x.kind && x.kind !== "official"), kind: x.kind }))
    .filter((x) => x.d && x.d >= today).sort((a, b) => a.d.localeCompare(b.d))[0] || null;
}

const clip = (s, n) => (s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s);

// fields: { lang, chip, title, subtitle, boxes: [{ label, value }], badge }
export async function renderCard({ lang, chip, title, titleLatin = true, subtitle, boxes, badge }) {
  const ar = lang === "ar";
  const dir = ar ? "row-reverse" : "row";
  const align = ar ? "flex-end" : "flex-start";
  const txt = (t, s) => (ar ? arText(t, s) : latin(t, s));
  const img = await logo();
  const head = el({ flexDirection: dir, alignItems: "center", gap: 18 }, [
    img ? { type: "img", props: { src: img, width: 64, height: 64, style: { borderRadius: 14 } } } : null,
    txt(ar ? "بوابة الدراسة" : "Bawabat AlDirasa", { fontSize: 34, fontWeight: 700, color: GOLD }),
    el({ flexGrow: 1 }, []),
    chip ? el({ background: PANEL, borderRadius: 999, padding: "8px 22px", border: `2px solid ${GOLD}` }, [txt(chip, { fontSize: 26, color: INK })]) : null,
  ].filter(Boolean));
  const titleEl = titleLatin
    ? latin(clip(title, 90), { fontSize: title.length > 55 ? 50 : 60, fontWeight: 700, color: INK, lineHeight: 1.15, justifyContent: align, textAlign: ar ? "right" : "left" })
    : txt(clip(title, 80), { fontSize: title.length > 45 ? 48 : 58, fontWeight: 700, color: INK, lineHeight: 1.2 });
  const sub = subtitle ? (Array.isArray(subtitle) ? subtitle : [subtitle]).map((s) => (s.latin ? latin(clip(s.text, 80), { fontSize: 30, color: SOFT, justifyContent: align }) : txt(s.text, { fontSize: 30, color: SOFT }))) : [];
  const boxEls = el({ flexDirection: dir, gap: 24 }, (boxes || []).map((b) =>
    el({ flexDirection: "column", alignItems: align, flex: 1, background: PANEL, borderRadius: 22, padding: "22px 28px", borderTop: `6px solid ${GOLD}` }, [
      txt(b.label, { fontSize: 26, color: SOFT, maxWidth: 520 }),
      txt(b.value, { fontSize: 36, fontWeight: 700, color: INK, marginTop: 6, maxWidth: 520 }),
    ])));
  const foot = el({ flexDirection: dir, alignItems: "center", justifyContent: "space-between" }, [
    badge ? txt(badge, { fontSize: 26, color: GOLD, fontWeight: 700 }) : el({}, []),
    latin("bawabatalsafar.com/study", { fontSize: 26, color: SOFT }),
  ]);
  const body = el({ width: "100%", height: "100%", flexDirection: "column", justifyContent: "space-between", background: NAVY, padding: "44px 56px",
    fontFamily: "PlexLatin, PlexArabic", borderBottom: `12px solid ${GOLD}` }, [
    head,
    el({ flexDirection: "column", alignItems: align, gap: 10 }, [titleEl, ...sub]),
    boxEls,
    foot,
  ]);
  return new ImageResponse(body, {
    width: W, height: H, fonts: await fonts(),
    headers: { "Cache-Control": "public, max-age=86400, s-maxage=604800, stale-while-revalidate=86400" },
  });
}
