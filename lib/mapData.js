// Programme map, drawn at build time: country shapes from Natural Earth (world-atlas, public domain data) projected
// per region with d3-geo, and one marker per city with its programmes. No map tiles or third-party requests.
import { readFileSync } from "node:fs";
import { join } from "node:path";
import { feature } from "topojson-client";
import { geoMercator, geoPath, geoBounds } from "d3-geo";
import programmes from "./programmes.json";

const W = 800, H = 640;
export const MAP_SIZE = { W, H };
// [west, south, east, north]
export const VIEWS = [
  { id: "europe", ar: "أوروبا وتركيا", en: "Europe and Türkiye", box: [-25, 34, 45, 71.5], countries: null },
  { id: "asia", ar: "ماليزيا", en: "Malaysia", box: [98, -1, 120, 8], countries: ["my"] },
  { id: "canada", ar: "كندا", en: "Canada", box: [-130, 41, -50, 62], countries: ["ca"] },
  { id: "oceania", ar: "أستراليا ونيوزيلندا", en: "Australia and New Zealand", box: [110, -48, 180, -9], countries: ["au", "nz"] },
];
const viewOf = (c) => VIEWS.find((v) => v.countries?.includes(c))?.id || "europe";

// Drop points that land on the same whole pixel as the one before (most of a 50m coastline at this size).
function squeeze(d) {
  return d.replace(/M[^MZ]*Z?/g, (ring) => {
    const pts = ring.replace(/Z$/, "").slice(1).split("L");
    const out = [];
    for (const p of pts) if (p !== out[out.length - 1]) out.push(p);
    if (out.length < 3) return "";
    return "M" + out.join("L") + (ring.endsWith("Z") ? "Z" : "");
  });
}

let world = null;
const loadWorld = () => (world ||= JSON.parse(readFileSync(join(process.cwd(), "node_modules/world-atlas/countries-50m.json"), "utf8")));

export function mapData() {
  const w = loadWorld();
  const land = feature(w, w.objects.countries);
  // Cities: mean coordinates of their programmes.
  const cities = new Map();
  for (const p of programmes) {
    if (!p.coords || p.level === "doctorate") continue;
    const key = `${p.country}|${p.en?.city || p.city}`;
    if (!cities.has(key)) cities.set(key, { key, c: p.country, en: String(p.en?.city || p.city).split(" (")[0], ar: String(p.city).split(" (")[0], pts: [], progs: [] });
    const x = cities.get(key);
    x.pts.push(p.coords);
    x.progs.push({ i: p.id, n: p.name, u: p.university, l: p.level, f: p.field, fee: p.feePerYear ?? null });
  }
  const views = VIEWS.map((v) => {
    const [w0, s0, e0, n0] = v.box;
    const box = { type: "MultiPoint", coordinates: [[w0, s0], [e0, s0], [e0, n0], [w0, n0], [(w0 + e0) / 2, s0], [(w0 + e0) / 2, n0]] };
    const proj = geoMercator().fitExtent([[0, 0], [W, H]], box);
    proj.clipExtent([[0, 0], [W, H]]);
    const path = geoPath(proj).digits(0);
    // Only countries whose bounds touch the view (the clip alone still writes every far-away coastline).
    const near = (f) => { const [[a, b], [c, d]] = geoBounds(f); return (a > c || (c >= w0 - 5 && a <= e0 + 5)) && d >= s0 - 5 && b <= n0 + 5; };
    const landV = { type: "FeatureCollection", features: land.features.filter(near) };
    const markers = [];
    for (const x of cities.values()) {
      if (viewOf(x.c) !== v.id) continue;
      const lat = x.pts.reduce((a, p) => a + p[0], 0) / x.pts.length;
      const lon = x.pts.reduce((a, p) => a + p[1], 0) / x.pts.length;
      const xy = proj([lon, lat]);
      if (!xy || xy[0] < 0 || xy[0] > W || xy[1] < 0 || xy[1] > H) continue;
      markers.push({ key: x.key, c: x.c, ar: x.ar, en: x.en, x: Math.round(xy[0]), y: Math.round(xy[1]), progs: x.progs });
    }
    return { id: v.id, ar: v.ar, en: v.en, land: squeeze(path(landV) || ""), markers };
  });
  return views;
}
