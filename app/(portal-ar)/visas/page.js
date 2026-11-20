import { VisasHub } from "@/components/Visas";
import { visasMeta } from "@/lib/visasMeta";

export const metadata = visasMeta("ar");
export default function Page() {
  return <VisasHub lang="ar" />;
}
