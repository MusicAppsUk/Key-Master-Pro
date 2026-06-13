const CACHE_NAME = 'keymaster-pro-rc3-v37';
const ASSETS = ['./', './index.html', './manifest.json'];

self.addEventListener('install', e => {
  // Network-first for index.html on install so updates land immediately
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(ASSETS)));
  // Don't auto-skipWaiting — wait for the user to tap "Update now"
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Listen for the page asking us to activate the new version
self.addEventListener('message', e => {
  if (e.data === 'SKIP_WAITING') self.skipWaiting();
});

self.addEventListener('fetch', e => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);

  // For navigation and the main HTML — network-first so updates appear fast
  if (e.request.mode === 'navigate' || url.pathname.endsWith('index.html') || url.pathname.endsWith('/')) {
    e.respondWith(
      fetch(e.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        return res;
      }).catch(() => caches.match(e.request).then(c => c || caches.match('./index.html')))
    );
    return;
  }

  // Everything else — cache-first (fast), update cache in background
  e.respondWith(
    caches.match(e.request).then(cached => {
      const network = fetch(e.request).then(res => {
        if (res && res.status === 200 && res.type === 'basic') {
          const clone = res.clone();
          caches.open(CACHE_NAME).then(c => c.put(e.request, clone));
        }
        return res;
      }).catch(() => undefined);
      return cached || network;
    })
  );
});
