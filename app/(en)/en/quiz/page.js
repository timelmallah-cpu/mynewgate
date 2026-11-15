import { pageMeta } from "@/lib/site";
import Quiz from "@/components/Quiz";
export const metadata = pageMeta("en", { title: "Quiz: find your programme | MyNewGate", path: "/quiz" });
export default function Page() {
  return <Quiz lang="en" />;
}
