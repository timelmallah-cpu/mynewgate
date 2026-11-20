// Server part of the programme map: region tabs (each region is its own static page) + the client map.
import Link from "@/components/Link";
import { mapData, MAP_SIZE, VIEWS } from "../lib/mapData";
import ProgrammeMap from "./ProgrammeMap";
import { BASE } from "../lib/site";

export const MAP_PAGE = {
  ar: { title: "خريطة البرامج", lead: "كل المدن التي فيها برامج بالإنجليزية في دليلنا على خريطة واحدة. اختر المنطقة، ثم صفِّ بالمرحلة والمجال والمصاريف.", credit: "حدود الدول من بيانات Natural Earth (ملكية عامة)." },
  en: { title: "Programme map", lead: "Every city with English-taught programmes in our guide on one map. Choose a region, then filter by level, field and fee.", credit: "Country shapes from Natural Earth data (public domain)." },
};
export const viewPath = (id) => (id === "europe" ? "/map" : `/map/${id}`);

export default function MapPage({ lang, view = "europe" }) {
  const base = lang === "en" ? "/en" : "";
  const s = MAP_PAGE[lang];
  const v = mapData().find((x) => x.id === view);
  return (
    <>
      <h1>{s.title}</h1>
      <p className="lead">{s.lead}</p>
      <nav className="pm-tabs" aria-label={lang === "ar" ? "المناطق" : "Regions"}>
        {VIEWS.map((x) => (
          <Link key={x.id} href={`${base}${viewPath(x.id)}`} className={`chip${x.id === view ? " on" : ""}`} aria-current={x.id === view ? "page" : undefined}>{x[lang]}</Link>
        ))}
      </nav>
      <ProgrammeMap view={{ id: v.id, ar: v.ar, en: v.en, markers: v.markers }} lang={lang} base={base} W={MAP_SIZE.W} H={MAP_SIZE.H}>
        <img className="pm-map" src={`${BASE}/map-land/${v.id}.svg`} width={MAP_SIZE.W} height={MAP_SIZE.H} alt="" fetchPriority="high" />
      </ProgrammeMap>
      <p className="meta">{s.credit}</p>
    </>
  );
}
