import { SITE_URL } from "@/lib/site";

export default function robots() {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/subscribed", "/en/subscribed", "/my-list", "/en/my-list"] }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
