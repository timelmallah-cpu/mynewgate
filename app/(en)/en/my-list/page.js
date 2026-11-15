import { pageMeta } from "@/lib/site";
import MyList from "@/components/MyList";
import { T } from "@/lib/i18n";
export const metadata = pageMeta("en", { title: T.en.my.metaTitle, path: "/my-list" });
export default function Page() {
  return <MyList lang="en" />;
}
