import { SITE_URL, BASE } from "@/lib/site";

// Served at /study/robots.txt; the domain's /robots.txt redirects here, so paths are written from the domain root.
export default function robots() {
  const priv = ["/subscribed", "/en/subscribed", "/my-list", "/en/my-list"].map((p) => `${BASE}${p}`);
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: priv }],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
