// The study site lives under bawabatalsafar.com/study; the domain root shows the Bawabat AlSafar home (gateway pages).
const BASE = "/study";
const ORIGIN = (process.env.NEXT_PUBLIC_SITE_ORIGIN || "https://bawabatalsafar.com").replace(/\/$/, "");

/** @type {import('next').NextConfig} */
export default {
  reactStrictMode: true,
  basePath: BASE,
  poweredByHeader: false,
  // Share-card routes read their fonts and the logo from disk; make sure Vercel ships them with the functions.
  outputFileTracingIncludes: { "/api/og/**": ["./lib/og/fonts/**", "./public/icon-192.png"] },
  // Security headers on every page and API response. No full CSP yet (Next inline scripts, Vercel Analytics, Stripe and
  // Google redirects); frame-ancestors, object-src and base-uri are safe to lock down.
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()" },
        { key: "Strict-Transport-Security", value: "max-age=63072000" },
        { key: "Content-Security-Policy", value: "frame-ancestors 'self'; object-src 'none'; base-uri 'self'" },
      ],
    }];
  },
  // The umbrella home page lives inside the app at /study/gateway and /study/gateway-en. A rewrite outside the basePath
  // must be absolute, so "/" and "/en" proxy to the same domain's /study/gateway pages.
  async rewrites() {
    return { beforeFiles: [
      { source: "/", destination: `${ORIGIN}${BASE}/gateway`, basePath: false },
      { source: "/en", destination: `${ORIGIN}${BASE}/gateway-en`, basePath: false },
    ] };
  },
  async redirects() {
    return [
      // Old address: every page moves permanently to the same page under the new domain.
      { source: "/:path*", has: [{ type: "host", value: "mynewgate.vercel.app" }], destination: "https://bawabatalsafar.com/study/:path*", permanent: true, basePath: false },
      // The domain's root ("/" and "/en") shows the Bawabat AlSafar home (rewrites below); any other path outside /study opens the study site.
      { source: "/:path((?!study(?:/|$)|en$|_next/|favicon).+)", destination: `${BASE}/:path`, permanent: false, basePath: false },
      // The search landing pages moved from /study/<slug> to /search/<slug> (inside the study site).
      { source: "/study", destination: "/search", permanent: true },
      { source: "/study/:slug*", destination: "/search/:slug*", permanent: true },
      { source: "/en/study", destination: "/en/search", permanent: true },
      { source: "/en/study/:slug*", destination: "/en/search/:slug*", permanent: true },
    ];
  },
};
