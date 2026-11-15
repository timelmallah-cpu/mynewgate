import programmes from "../lib/programmes.json";
import { COUNTRY_IDS } from "../lib/options";
import HousingView from "./HousingView";

const NA = /غير منشور|not published/i;
const base = (c) => c.split(" (")[0].trim() || c;

// Group universities by country and city, keeping the most informative housing note from their programmes.
export function housingCities() {
  const out = {};
  for (const c of COUNTRY_IDS) out[c] = [];
  for (const p of programmes) {
    if (!out[p.country]) continue;
    const key = base(p.en.city);
    let city = out[p.country].find((x) => x.key === key);
    if (!city) {
      city = { key, ar: base(p.city), en: key, unis: [] };
      out[p.country].push(city);
    }
    let u = city.unis.find((x) => x.name === p.university);
    const has = p.housing && !NA.test(p.housing);
    if (!u) {
      u = { name: p.university, id: p.id, ar: p.housing || "", en: p.en.housing || "", has };
      city.unis.push(u);
    } else if (!u.has && has) {
      Object.assign(u, { id: p.id, ar: p.housing, en: p.en.housing || "", has });
    }
  }
  for (const c of COUNTRY_IDS) out[c].sort((a, b) => b.unis.length - a.unis.length || a.en.localeCompare(b.en));
  return out;
}

export default function Housing({ lang }) {
  return <HousingView lang={lang} cities={housingCities()} />;
}
