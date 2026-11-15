// MyNewGate service worker: pages work offline once visited, and the app opens without a connection.
// Network first for pages and data (so content is always fresh when online); cache first for build assets.
const V = "mng-v2";
const OFFLINE = "/offline.html";

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(V).then((c) => c.addAll([OFFLINE, "/", "/icon-192.png"])).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith("/api/") || url.pathname.startsWith("/_vercel/")) return;

  if (url.pathname.startsWith("/_next/static/") || /\.(png|jpg|svg|woff2?)$/.test(url.pathname)) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(V).then((c) => c.put(req, copy)); }
      return res;
    })));
    return;
  }

  e.respondWith(fetch(req).then((res) => {
    if (res.ok && (req.mode === "navigate" || url.pathname.startsWith("/data/"))) {
      const copy = res.clone(); caches.open(V).then((c) => c.put(req, copy));
    }
    return res;
  }).catch(() => caches.match(req).then((hit) => hit || (req.mode === "navigate" ? caches.match(OFFLINE) : Response.error()))));
});
