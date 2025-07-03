const cacheName = 'rishi-planner-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/icon.png',
  '/Rishi_Semester_Timetable.pdf'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
