// The study site lives under bawabatalsafar.com/study (the domain's other sections come later).
const BASE = "/study";

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  basePath: BASE,
  async redirects() {
    return [
      // Old address: every page moves permanently to the same page under the new domain.
      { source: "/:path*", has: [{ type: "host", value: "mynewgate.vercel.app" }], destination: "https://bawabatalsafar.com/study/:path*", permanent: true, basePath: false },
      // Until the domain's own home page exists, its root and any path outside /study open the study site.
      { source: "/", destination: BASE, permanent: false, basePath: false },
      { source: "/:path((?!study(?:/|$)).*)", destination: `${BASE}/:path`, permanent: false, basePath: false },
      // The search landing pages moved from /study/<slug> to /search/<slug> (inside the study site).
      { source: "/study", destination: "/search", permanent: true },
      { source: "/study/:slug*", destination: "/search/:slug*", permanent: true },
      { source: "/en/study", destination: "/en/search", permanent: true },
      { source: "/en/study/:slug*", destination: "/en/search/:slug*", permanent: true },
    ];
  },
};
