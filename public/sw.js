// Bawabat AlDirasa service worker: pages work offline once visited, and the app opens without a connection.
// Network first for pages and data (so content is always fresh when online); cache first for build assets.
const V = "mng-v7";
// The study site is served under /study (basePath).
const B = "/study";
const OFFLINE = B + "/offline.html";

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(V).then((c) => c.addAll([OFFLINE, B, B + "/icon-192.png?v=3"])).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== V).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin || url.pathname.startsWith(B + "/api/") || url.pathname.startsWith("/_vercel/")) return;

  if (url.pathname.startsWith(B + "/_next/static/") || (/\.(png|jpg|svg|woff2?)$/.test(url.pathname) && !/icon/.test(url.pathname))) {
    e.respondWith(caches.match(req).then((hit) => hit || fetch(req).then((res) => {
      if (res.ok) { const copy = res.clone(); caches.open(V).then((c) => c.put(req, copy)); }
      return res;
    })));
    return;
  }

  e.respondWith(fetch(req).then((res) => {
    if (res.ok && (req.mode === "navigate" || url.pathname.startsWith(B + "/data/"))) {
      const copy = res.clone(); caches.open(V).then((c) => c.put(req, copy));
    }
    return res;
  }).catch(() => caches.match(req).then((hit) => hit || (req.mode === "navigate" ? caches.match(OFFLINE) : Response.error()))));
});

// Deadline alerts (Web Push): show the notification, and open the programme page when it is tapped.
self.addEventListener("push", (e) => {
  let d = {};
  try { d = e.data ? e.data.json() : {}; } catch {}
  e.waitUntil(self.registration.showNotification(d.title || "Bawabat AlDirasa", { body: d.body || "", icon: B + "/icon-192.png?v=3", badge: B + "/icon-192.png?v=3", data: { url: d.url || B }, lang: "ar" }));
});
self.addEventListener("notificationclick", (e) => {
  e.notification.close();
  const url = (e.notification.data && e.notification.data.url) || B;
  e.waitUntil(self.clients.matchAll({ type: "window", includeUncontrolled: true }).then((ws) => {
    for (const w of ws) if (w.url.includes(url) && "focus" in w) return w.focus();
    return self.clients.openWindow(url);
  }));
});
