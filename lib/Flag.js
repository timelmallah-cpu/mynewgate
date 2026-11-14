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
