self.addEventListener('install', (e) => {
    e.waitUntil(
      caches.open('pwa-cache').then((cache) => {
        return cache.addAll([
          './index.html',
          './styles.css',
          './script.js',
          './icon-192.png',
          './icon-512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (e) => {
    e.respondWith(
      caches.match(e.request).then((response) => response || fetch(e.request))
    );
  });
