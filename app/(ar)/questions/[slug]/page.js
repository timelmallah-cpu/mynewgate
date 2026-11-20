import { pageMeta } from "@/lib/site";
import { T } from "@/lib/i18n";
import { QUESTIONS, questionBySlug } from "@/lib/questions";
import { Question } from "@/components/Questions";

export const generateStaticParams = () => QUESTIONS.map((q) => ({ slug: q.slug }));
export const dynamicParams = false;

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const q = questionBySlug(slug);
  if (!q) return {};
  return pageMeta("ar", { title: `${q.q.ar} | ${T.ar.brand}`, description: q.answer("ar").short.slice(0, 300), path: `/questions/${slug}` });
}

export default async function Page({ params }) {
  const { slug } = await params;
  return <Question slug={slug} lang="ar" />;
}
