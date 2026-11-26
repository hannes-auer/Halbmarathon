// Offline-Cache. Bei jeder Änderung an der App VERSION hochzählen.
const VERSION = 'hm27-v39';
const FILES = [
  './', 'index.html', 'config.js', 'manifest.webmanifest', 'supabase.js',
  'icon-180.png', 'icon-192.png', 'icon-512.png',
  'barlow-latin-400-normal.woff2', 'barlow-latin-500-normal.woff2', 'barlow-latin-600-normal.woff2',
  'barlow-condensed-latin-500-normal.woff2', 'barlow-condensed-latin-700-normal.woff2'
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return; // Supabase-Anfragen nie cachen
  // Erst Netz (damit Updates ankommen), offline aus dem Cache
  e.respondWith(
    fetch(e.request).then(res => {
      const copy = res.clone();
      caches.open(VERSION).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request, {ignoreSearch: true}).then(r => r || caches.match('index.html')))
  );
});
