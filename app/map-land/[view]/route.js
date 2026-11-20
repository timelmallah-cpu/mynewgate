// /map-land/<view>.svg: the land layer of the programme map, built once at build time and cached (kept out of the page HTML).
import { mapData, MAP_SIZE, VIEWS } from "../../../lib/mapData";

export const dynamic = "force-static";
export const dynamicParams = false;
export const generateStaticParams = () => VIEWS.map((v) => ({ view: `${v.id}.svg` }));

export async function GET(_req, { params }) {
  const { view } = await params;
  const v = mapData().find((x) => `${x.id}.svg` === view);
  if (!v) return new Response("Not found", { status: 404 });
  const { W, H } = MAP_SIZE;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}"><rect width="${W}" height="${H}" fill="#f1f6fb"/><path d="${v.land}" fill="#d3dce8" stroke="#fff" stroke-width=".7" stroke-linejoin="round"/></svg>`;
  return new Response(svg, { headers: { "Content-Type": "image/svg+xml", "Cache-Control": "public, max-age=86400" } });
}
