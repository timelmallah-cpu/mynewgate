// Tuition statistics for a list of programmes, computed from the data (never typed by hand).
// - free: tuition fee confirmed as zero (other fees such as semester contributions may still apply)
// - the range and median use paid programmes whose fee period is known, converted to a year
// - unknown: fee not published; noPeriod: fee published but its period is not stated (both left out)
// - toCheck: paid programmes in the range whose figure still needs confirmation
const median = (a) => {
  const s = [...a].sort((x, y) => x - y);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

export function feeStats(list) {
  const paid = list.filter((p) => p.feePerYear > 0 && p.feePeriod);
  const lows = paid.map((p) => p.feePerYear);
  const highs = paid.map((p) => p.feePerYearMax ?? p.feePerYear);
  return {
    count: list.length,
    free: list.filter((p) => p.feePerYear === 0).length,
    paid: paid.length,
    min: paid.length ? Math.min(...lows) : null,
    max: paid.length ? Math.max(...highs) : null,
    med: paid.length ? median(lows) : null,
    unknown: list.filter((p) => p.feePerYear === null).length,
    noPeriod: list.filter((p) => p.feePerYear > 0 && !p.feePeriod).length,
    toCheck: paid.filter((p) => p.feeNeedsCheck).length,
  };
}
