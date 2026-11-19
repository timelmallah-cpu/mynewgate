// The study site lives under bawabatalsafar.com/study (the domain's other sections come later).
const BASE = "/study";

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
