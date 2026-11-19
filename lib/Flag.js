// Simple SVG flags (emoji flags don't render on Windows).
const H = (a, b, c, w = [1, 1, 1]) => {
  const t = w[0] + w[1] + w[2];
  return [[a, 0, w[0]], [b, w[0], w[1]], [c, w[0] + w[1], w[2]]].map(([f, y, h]) => (
    <rect key={f + y} x="0" y={(y / t) * 20} width="30" height={(h / t) * 20} fill={f} />
  ));
};
const V = (a, b, c) =>
  [a, b, c].map((f, i) => <rect key={i} x={i * 10} y="0" width="10" height="20" fill={f} />);

const FLAGS = {
  de: H("#000000", "#DD0000", "#FFCE00"),
  nl: H("#AE1C28", "#FFFFFF", "#21468B"),
  es: H("#AA151B", "#F1BF00", "#AA151B", [1, 2, 1]),
  be: V("#000000", "#FDDA24", "#EF3340"),
  ee: H("#0072CE", "#000000", "#FFFFFF"),
  pl: H("#FFFFFF", "#DC143C", "#DC143C", [2, 1, 1]),
  hu: H("#CE2939", "#FFFFFF", "#477050"),
  ro: V("#002B7F", "#FCD116", "#CE1126"),
  lv: H("#9E3039", "#FFFFFF", "#9E3039", [2, 1, 2]),
  lt: H("#FDB913", "#006A44", "#C1272D"),
  it: V("#009246", "#FFFFFF", "#CE2B37"),
  fi: [<rect key="b" width="30" height="20" fill="#FFFFFF" />, <rect key="h" y="7" width="30" height="6" fill="#002F6C" />, <rect key="v" x="8" width="6" height="20" fill="#002F6C" />],
  cz: [<rect key="w" width="30" height="10" fill="#FFFFFF" />, <rect key="r" y="10" width="30" height="10" fill="#D7141A" />, <path key="t" d="M0 0L15 10L0 20z" fill="#11457E" />],
  at: H("#C8102E", "#FFFFFF", "#C8102E"),
  fr: V("#002654", "#FFFFFF", "#CE1126"),
  ie: V("#169B62", "#FFFFFF", "#FF883E"),
  hr: [...H("#FF0000", "#FFFFFF", "#171796"), <rect key="s" x="12" y="5" width="6" height="8" fill="#FF0000" stroke="#FFFFFF" strokeWidth="0.6" />, <rect key="c1" x="12" y="5" width="2" height="2" fill="#FFFFFF" />, <rect key="c2" x="16" y="5" width="2" height="2" fill="#FFFFFF" />, <rect key="c3" x="14" y="7" width="2" height="2" fill="#FFFFFF" />, <rect key="c4" x="12" y="9" width="2" height="2" fill="#FFFFFF" />, <rect key="c5" x="16" y="9" width="2" height="2" fill="#FFFFFF" />, <rect key="c6" x="14" y="11" width="2" height="2" fill="#FFFFFF" />],
  sk: [...H("#FFFFFF", "#0B4EA2", "#EE1C25"), <rect key="s" x="6" y="4" width="8" height="11" rx="3" fill="#EE1C25" stroke="#FFFFFF" strokeWidth="0.7" />, <rect key="cv" x="9.4" y="5.5" width="1.2" height="7.5" fill="#FFFFFF" />, <rect key="ch1" x="8" y="7" width="4" height="1" fill="#FFFFFF" />, <rect key="ch2" x="7.4" y="9" width="5.2" height="1" fill="#FFFFFF" />, <rect key="m" x="6.5" y="12.5" width="7" height="2" fill="#0B4EA2" />],
  cy: [<rect key="b" width="30" height="20" fill="#FFFFFF" />, <path key="i" d="M8 8.5 L11 7 L15 7.2 L19 6 L22.5 5.5 L20 7.5 L17.5 9.5 L13 10 L10 10.2 Z" fill="#D57800" />, <path key="o1" d="M10 14.5 Q15 12.5 14.6 15.5" stroke="#4E5B31" strokeWidth="0.9" fill="none" />, <path key="o2" d="M20 14.5 Q15 12.5 15.4 15.5" stroke="#4E5B31" strokeWidth="0.9" fill="none" />],
  mt: [<rect key="w" width="15" height="20" fill="#FFFFFF" />, <rect key="r" x="15" width="15" height="20" fill="#CF142B" />, <rect key="g" x="2.5" y="2.5" width="4" height="4" fill="#A0A0A0" stroke="#CF142B" strokeWidth="0.5" />],
  no: [<rect key="b" width="30" height="20" fill="#BA0C2F" />, <rect key="wh" y="7.5" width="30" height="5" fill="#FFFFFF" />, <rect key="wv" x="8.18" width="5.45" height="20" fill="#FFFFFF" />, <rect key="bh" y="8.75" width="30" height="2.5" fill="#00205B" />, <rect key="bv" x="9.55" width="2.73" height="20" fill="#00205B" />],
  lu: [<rect key="r" width="30" height="6.67" fill="#ED2939" />, <rect key="w" y="6.67" width="30" height="6.67" fill="#FFFFFF" />, <rect key="b" y="13.33" width="30" height="6.67" fill="#00A1DE" />],
  ch: [<rect key="r" width="30" height="20" fill="#DA291C" />, <rect key="v" x="13" y="4" width="4" height="12" fill="#FFFFFF" />, <rect key="h" x="9" y="8" width="12" height="4" fill="#FFFFFF" />],
  si: [<rect key="w" width="30" height="20" fill="#FFFFFF" />, <rect key="b" y="6.67" width="30" height="6.67" fill="#0000FF" />, <rect key="r" y="13.33" width="30" height="6.67" fill="#FF0000" />, <path key="s" d="M7 3.5h5v5.5q0 2.5-2.5 3.5q-2.5-1-2.5-3.5z" fill="#0000FF" stroke="#FF0000" strokeWidth="0.6" />],
  gr: [<rect key="s0" y="0.0" width="30" height="2.222" fill="#0D5EAF" />, <rect key="s1" y="2.222" width="30" height="2.222" fill="#FFFFFF" />, <rect key="s2" y="4.444" width="30" height="2.222" fill="#0D5EAF" />, <rect key="s3" y="6.667" width="30" height="2.222" fill="#FFFFFF" />, <rect key="s4" y="8.889" width="30" height="2.222" fill="#0D5EAF" />, <rect key="s5" y="11.111" width="30" height="2.222" fill="#FFFFFF" />, <rect key="s6" y="13.333" width="30" height="2.222" fill="#0D5EAF" />, <rect key="s7" y="15.556" width="30" height="2.222" fill="#FFFFFF" />, <rect key="s8" y="17.778" width="30" height="2.222" fill="#0D5EAF" />, <rect key="c" width="11.11" height="11.11" fill="#0D5EAF" />, <rect key="h" y="4.44" width="11.11" height="2.22" fill="#FFFFFF" />, <rect key="v" x="4.44" width="2.22" height="11.11" fill="#FFFFFF" />],
  is: [<rect key="b" width="30" height="20" fill="#02529C" />, <rect key="wv" x="8" width="4.4" height="20" fill="#FFFFFF" />, <rect key="wh" y="7.8" width="30" height="4.4" fill="#FFFFFF" />, <rect key="rv" x="9.1" width="2.2" height="20" fill="#DC1E35" />, <rect key="rh" y="8.9" width="30" height="2.2" fill="#DC1E35" />],
  li: [<rect key="b" width="30" height="10" fill="#002B7F" />, <rect key="r" y="10" width="30" height="10" fill="#CE1126" />, <path key="c" d="M5 6.5h5v-1.2l-1 0.6-0.7-1.3-0.8 1.3-0.8-1.3-0.7 1.3-1-0.6z" fill="#FFD83D" />],
  tr: [<rect key="b" width="30" height="20" fill="#E30A17" />, <circle key="c1" cx="10.5" cy="10" r="5" fill="#FFFFFF" />, <circle key="c2" cx="11.75" cy="10" r="4" fill="#E30A17" />, <polygon key="s" points="12.90,10.00 14.59,9.41 14.63,7.62 15.71,9.05 17.42,8.53 16.40,10.00 17.42,11.47 15.71,10.95 14.63,12.38 14.59,10.59" fill="#FFFFFF" />],
  dk: [<rect key="b" width="30" height="20" fill="#C8102E" />, <rect key="h" y="8" width="30" height="4" fill="#FFFFFF" />, <rect key="v" x="9.4" width="3.75" height="20" fill="#FFFFFF" />],
  pt: [<rect key="g" width="12" height="20" fill="#006600" />, <rect key="r" x="12" width="18" height="20" fill="#FF0000" />, <circle key="c" cx="12" cy="10" r="4" fill="#FFCC00" />],
  bg: H("#FFFFFF", "#00966E", "#D62612"),
  se: [<rect key="b" width="30" height="20" fill="#006AA7" />, <rect key="h" y="8" width="30" height="4" fill="#FECC00" />, <rect key="v" x="9.4" width="3.75" height="20" fill="#FECC00" />],
  at: H("#C8102E", "#FFFFFF", "#C8102E"),
};

export default function Flag({ code, size = 28 }) {
  const f = FLAGS[code];
  if (!f) return null;
  return (
    <svg className="flag" width={size} height={(size * 2) / 3} viewBox="0 0 30 20" aria-hidden="true">
      {f}
      <rect x="0.25" y="0.25" width="29.5" height="19.5" fill="none" stroke="rgba(0,0,0,.15)" strokeWidth=".5" />
    </svg>
  );
}
