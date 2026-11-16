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
