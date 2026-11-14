import MyList from "@/components/MyList";
import { T } from "@/lib/i18n";
export const metadata = { title: T.ar.my.metaTitle };
export default function Page() {
  return <MyList lang="ar" />;
}
