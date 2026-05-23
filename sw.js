const CACHE_NAME = 'cobros-v1.7';

self.addEventListener('install', e => {
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Solo manejar requests del mismo origen
  if (url.origin !== location.origin) return;

  // Nunca interceptar favicon.ico
  if (url.pathname === '/favicon.ico') return;

  // Solo cachear archivos de la app (no navegación que podría romper)
  const isAsset = url.pathname.match(/\.(js|css|png|ico|json|html)$/);
  if (!isAsset) return;

  e.respondWith(
    caches.open(CACHE_NAME).then(cache =>
      cache.match(e.request).then(cached => {
        if (cached) return cached;
        return fetch(e.request).then(resp => {
          if (resp && resp.status === 200 && resp.type === 'basic') {
            cache.put(e.request, resp.clone());
          }
          return resp;
        });
      })
    )
  );
});
