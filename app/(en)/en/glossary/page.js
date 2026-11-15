import { pageMeta } from "@/lib/site";
import Glossary from "@/components/Glossary";
import { GLOSSARY_TEXT } from "@/lib/glossary";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: `${GLOSSARY_TEXT.en.title} | ${T.en.brand}`, description: GLOSSARY_TEXT.en.lead, path: "/glossary" });
export default function Page() {
  return <Glossary lang="en" />;
}
