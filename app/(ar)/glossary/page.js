import { pageMeta } from "@/lib/site";
import Glossary from "@/components/Glossary";
import { GLOSSARY_TEXT } from "@/lib/glossary";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("ar", { title: `${GLOSSARY_TEXT.ar.title} | ${T.ar.brand}`, description: GLOSSARY_TEXT.ar.lead, path: "/glossary" });
export default function Page() {
  return <Glossary lang="ar" />;
}
