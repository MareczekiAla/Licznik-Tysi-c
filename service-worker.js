self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
self.addEventListener('fetch', function(event) {
  event.respondWith(fetch(event.request));
});
