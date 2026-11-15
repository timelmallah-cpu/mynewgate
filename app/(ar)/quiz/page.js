import { pageMeta } from "@/lib/site";
import Quiz from "@/components/Quiz";
export const metadata = pageMeta("ar", { title: "اختبار: اعثر على برنامجك | بوابتي الجديدة", path: "/quiz" });
export default function Page() {
  return <Quiz lang="ar" />;
}
