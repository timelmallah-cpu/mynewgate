import { FrQuestion, frMeta } from "@/components/Fr";
import { FR_QUESTIONS, frQuestion } from "@/lib/fr";
export const generateStaticParams = () => FR_QUESTIONS.map((q) => ({ slug: q.slug }));
export const dynamicParams = false;
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const q = frQuestion(slug);
  if (!q) return {};
  return frMeta({ title: `${q.q} | Bawabat AlDirasa`, description: q.answer().short.slice(0, 300), path: `/questions/${slug}`, ar: `/questions/${slug}`, en: `/questions/${slug}` });
}
export default async function Page({ params }) {
  const { slug } = await params;
  return <FrQuestion slug={slug} />;
}
