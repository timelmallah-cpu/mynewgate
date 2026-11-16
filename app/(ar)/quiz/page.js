import { pageMeta } from "@/lib/site";
import Quiz from "@/components/Quiz";
export const metadata = pageMeta("ar", { title: "اختبار: اعثر على برنامجك | بوابة الدراسة", path: "/quiz" });
export default function Page() {
  return <Quiz lang="ar" />;
}
