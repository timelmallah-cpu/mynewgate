// Arabic number agreement for "programme" (برنامج): 1 برنامج واحد، 2 برنامجان، 3-10 برامج،
// 11-99 برنامجاً، 100 and round hundreds برنامج (the same pattern repeats for every hundred).
export function progsAr(n) {
  const f = Number(n).toLocaleString("en-US");
  if (n === 1) return "برنامج واحد";
  if (n === 2) return "برنامجان";
  const r = n % 100;
  if (r >= 3 && r <= 10) return `${f} برامج`;
  if (r >= 11) return `${f} برنامجاً`;
  return `${f} برنامج`; // 0, 100, 101, 102, 200 ...
}
